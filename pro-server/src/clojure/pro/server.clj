(ns pro.server
(:import java.io.ByteArrayOutputStream)
(:require [ring.adapter.jetty :as jetty]
              [ring.util.response :as r]
              [compojure.core :refer [defroutes GET]]
              [compojure.handler :as handler]
              [compojure.route :as route]
              [cognitect.transit :as t]
              [clojure.core.async :as async :refer [chan alts!! put! <! <!! go timeout]]
              [boat.mov :as bm]
              [cesium.core :as cz]
              [rete.core :as rete]))

(def ROOT (str (System/getProperty "user.dir") "/resources/public/"))
(def EVT-CHN (chan))
(def ANS-CHN (chan))
(def PORT 4444)
(def APP nil)
(def SERV nil)
(def ONBOARD "b1")
(def MAP-CENTER [44.124 -68.736])
(defn index-page []
  (slurp (str ROOT "index.html")))

(defn pump-out [chn]
  (loop [[bit ch] (alts!! [chn] :default :none) bits []]
  (if (= bit :none)
    bits
    (recur (alts!! [chn] :default :none) (conj bits bit)))))

(defn pump-in-evt [val]
  (put! EVT-CHN val))

(defn pump-in-ans [val]
  (put! ANS-CHN val))

(defn write-transit [x]
  (let [baos (ByteArrayOutputStream.)
        w    (t/writer baos :json)
        _    (t/write w x)
        ret  (.toString baos)]
    (.reset baos)
    ret))

(defn events []
  (-> (r/response (write-transit (deref (future (pump-out EVT-CHN)))))
       (r/header "Access-Control-Allow-Origin" "*")))

(defn command [params]
  (println [:PARAMS params])
(if-let [trt (:throttle params)]
  (bm/boat-engine ONBOARD (read-string trt))
  (if-let [cmd (:helm params)]
    (bm/boat-helm ONBOARD (keyword cmd))))
"")

(defn answer []
  (-> (r/response (write-transit (deref (future (<!! ANS-CHN)))))
      (r/header "Access-Control-Allow-Origin" "*")))

(defn question [pp]
  (println [:QUESTION pp])
(let [crd (:coord pp)
       crd [(read-string (get crd "0"))
              (read-string (get crd "1"))]]
  (rete/assert-frame 
       ['Question 'coord crd
	'course (read-string (:course pp))
	'speed (read-string (:speed pp))
	'predicate (:predicate pp)
	'subject (:subject pp)
	'subject-value (:subject-value pp)
	'object (:object pp)
	'object-value (:object-value pp)
	'time (as/current-time)])
  (rete/fire)
  {:status 204}))

(defn init-server []
  (defroutes app-routes
  (GET "/" [] (index-page))
  (GET "/map-center/" [] (write-transit MAP-CENTER))
  (GET "/question/" [& params] (question params))
  (GET "/answer/" [] (answer))
  (GET "/events/" [] (events))
  (GET "/command/" [& params] (command params))
  (GET "/czml/" [] (cz/events))
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
;;  (bm/start-boat-movement
;;    #(pump-in-evt {:event :boat-maneuver :id %1 :data %2})
;;    #(pump-in-evt {:event :boat-add :id %1 :data %2})
;;    #(pump-in-evt {:event :boat-remove :id %1 :data %2})))
   ))

(defn stop-server []
  (when-let [serv SERV]
  (bm/stop-boat-movement)
  (.stop serv)
  (def SERV nil)
  (println "Server stopped!")))

