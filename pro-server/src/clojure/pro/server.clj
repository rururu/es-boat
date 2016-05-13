(ns pro.server
(:use protege.core)
(:require [ring.adapter.jetty :as jetty]
              [ring.util.response :as r]
              [compojure.core :refer [defroutes GET]]
              [compojure.handler :as handler]
              [compojure.route :as route]
              [cognitect.transit :as t]
              [clojure.core.async :as async :refer [chan alts!! put! <! <!! go timeout]]
              [boat.mov :as bm]
              [cesium.core :as cz]
              [rete.core :as rete])
(:import java.io.ByteArrayOutputStream))

(def ROOT (str (System/getProperty "user.dir") "/resources/public/"))
(def EVT-CHN (chan))
(def ANS-CHN (chan))
(def PORT 4444)
(def APP nil)
(def SERV nil)
(def BOAT (volatile! {:id "b1"}))
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

(defn pump-in-mvr []
  (if (:chart @BOAT)
    (pump-in-evt 
      {:event :boat-maneuver
       :id (:id @BOAT) 
       :data @BOAT})))

(defn maneuver [params]
  (println [:COMMAND params])
(let [crd (:coord params)
       crd [(read-string (get crd "0"))
              (read-string (get crd "1"))]]
  (vswap! BOAT assoc
	:coord crd
	:turn-coord crd
	:course (:course params)
	:speed (:speed params))
  (pump-in-mvr))
{:status 204})

(defn answer []
  (let [ans (deref (future (<!! ANS-CHN)))]
  (println [:ANS ans])
  (-> (r/response (write-transit ans))
        (r/header "Access-Control-Allow-Origin" "*"))))

(defn question [pp]
  (println [:QUESTION pp])
(let [frm ['Question
	'predicate (:predicate pp)
	'subject (:subject pp)
	'subject-value (:subject-value pp)
	'object (:object pp)
	'object-value (:object-value pp)
	'time (as/current-time)]
       frm (if-let [crd (:coord pp)]
                (concat frm
	['coord [(read-string (get crd "0"))
	            (read-string (get crd "1"))]
	 'course (read-string (:course pp))
	 'speed (read-string (:speed pp))])
                frm)]
  (rete/assert-frame frm)
  (rete/fire)
  {:status 204}))

(defn map-center []
  (if-let [ins (fainst (cls-instances "StartPoint") nil)]
  (vec (svs ins "coord"))
  (do (println "Annotated instance of StartPoint not found!")
    [44.124 -68.736])))

(defn chart-connect []
  (println "Chart client connected..")
(vswap! BOAT assoc 
	:chart true
	:coord (map-center)
	:course 0)
(pump-in-evt 
  {:event :boat-add 
   :id (:id @BOAT) 
   :data @BOAT})
;;(pump-in-evt 
;;  {:event :boat-follow
;;   :id (:id @BOAT)})
(map-center))

(defn init-server []
  (defroutes app-routes
  (GET "/" [] (index-page))
  (GET "/map-center/" [] (write-transit (map-center)))
  (GET "/chart/" [] (write-transit (chart-connect)))
  (GET "/question/" [& params] (question params))
  (GET "/answer/" [] (answer))
  (GET "/events/" [] (events))
  (GET "/maneuver/" [& params] (maneuver params))
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

(defn view3D-in-browser []
  (let [address (str "http://localhost:" PORT)]
  (println "Location:" address)
  (when (java.awt.Desktop/isDesktopSupported)
    (.browse (java.awt.Desktop/getDesktop) (java.net.URI. address)))))

