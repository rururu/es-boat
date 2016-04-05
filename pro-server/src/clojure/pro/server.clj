(ns pro.server
(:import java.io.ByteArrayOutputStream)
(:require [ring.adapter.jetty :as jetty]
              [ring.util.response :as r]
              [compojure.core :refer [defroutes GET]]
              [compojure.handler :as handler]
              [compojure.route :as route]
              [cognitect.transit :as t]
              [clojure.core.async :as async :refer [chan alts!! put! <! go timeout]]
              [boat.mov :as bm]))

(def EVT-CHN (chan))
(def PORT 4444)
(def APP nil)
(def SERV nil)
(defn pump-out [chn]
  (loop [[bit ch] (alts!! [chn] :default :none) bits []]
  (if (= bit :none)
    bits
    (recur (alts!! [chn] :default :none) (conj bits bit)))))

(defn pump-in-evt [val]
  (put! EVT-CHN val))

(defn boat-maneuver [id bdt]
  (pump-in-evt {:event :boat-maneuver :id id :data bdt}))

(defn write-transit [x]
  (let [baos (ByteArrayOutputStream.)
        w    (t/writer baos :json)
        _    (t/write w x)
        ret  (.toString baos)]
    (.reset baos)
    ret))

(defn events []
  (write-transit (deref (future (pump-out EVT-CHN)))))

(defn init-server []
  (def ROOT (str (System/getProperty "user.dir") "/resources/public/"))

(defroutes app-routes
  (GET "/events/" [& params] (events))
  (route/files "/" (do (println [:ROOT-FILES ROOT]) {:root ROOT}))
  (route/resources "/")
  (route/not-found "Not Found"))

(def APP
  (handler/site app-routes)))

(defn start-server
  ([]
    (start-server PORT))
([port]
  (if (nil? APP)
    (init-server))
  (def SERV (jetty/run-jetty APP {:port port :join? false}))
  (bm/start-boat-movement
    #(pump-in-evt {:event :boat-maneuver :id %1 :data %2})
    #(pump-in-evt {:event :boat-add :id %1 :data %2})
    #(pump-in-evt {:event :boat-remove :id %1 :data %2}))))

(defn stop-server []
  (when-let [serv SERV]
  (bm/stop-boat-movement)
  (.stop serv)
  (def SERV nil)
  (println "Server stopped!")))

