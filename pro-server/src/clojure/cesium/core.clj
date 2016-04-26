(ns cesium.core
(:require
    [ring.adapter.jetty :as jetty]
    [ring.util.response :as r]
    [compojure.core :refer [defroutes routes GET]]
    [compojure.handler :as handler]
    [compojure.route :as route]
    [clojure.core.async :as async :refer [chan put! alts!!]]
    [boat.mov :as bm]
    [async.proc :as ap])
(:import java.util.Calendar))

(def CZ-CHAN (async/chan))
(def DOC-SND true)
(defn send-event [typ dat]
  (async/put! CZ-CHAN [typ (.trim dat)]))

(defn pump-out-events []
  (loop [[bit ch] (alts!! [CZ-CHAN] :default :none) bits []]
    (if (= bit :none)
      bits
      (recur (alts!! [CZ-CHAN] :default :none) (conj bits bit)))))

(defn events []
  (let [evt-hr (fn [[typ dat]]
                   (str "event: " typ "\ndata: " dat "\n\n"))
       ee (deref (future (pump-out-events)))
       resp (if (seq ee)
                 (apply str (map evt-hr ee))
                 "")]
  (-> (r/response resp)
         (r/header "Access-Control-Allow-Origin" "*")
         (r/header "Content-Type" "text/event-stream;charset=utf-8"))))

(defn iso8601curt []
  (let [cld (Calendar/getInstance)
        yar (.get cld Calendar/YEAR )
        mon (inc (.get cld Calendar/MONTH))
        dat (.get cld Calendar/DATE)
        hor (.get cld Calendar/HOUR_OF_DAY)
        min (.get cld Calendar/MINUTE)
        sec (.get cld Calendar/SECOND)]
    (format "%04d-%02d-%02dT%02d:%02d:%02dZ" yar mon dat hor min sec)))

(defn doc []
  "{\"id\":\"document\",\"version\":\"1.0\"}")

(defn location [label img-url lat lon alt]
  (when DOC-SND
    (send-event "czml" (doc))
    (def DOC-SND false))
  (let [p (str "{\"id\":\""
               label
               "\",\"label\":{\"scale\":0.75,\"pixelOffset\":{\"cartesian2\":[8, -8]},\"text\":\""
               label
               "\"},\"billboard\":{\"image\":\""
               img-url
               "\"},\"position\":{\"cartographicDegrees\":["
               lon
               ", "
               lat
               ", "
               alt
               "]}}")]
    (send-event "czml" p)))

(defn leg [label img-url scale [lat1 lon1 alt1 tim1] [lat2 lon2 alt2 tim2]]
  (when DOC-SND
    (send-event "czml" (doc))
    (def DOC-SND false))
  (let [p (str "{\"id\":\""
               label
               "\",\"label\":{\"scale\":"
               (/ scale 2)
               ",\"pixelOffset\":{\"cartesian2\":[8, -8]},\"text\":\""
               label
               "\"},\"billboard\":{\"scale\":"
               scale
               ",\"image\":\""
               img-url
               "\"},\"position\":{\"cartographicDegrees\":[\""
               tim1
               "\", "
               lon1
               ", "
               lat1
               ", "
               alt1
               ",\""
               tim2
               "\", "
               lon2
               ", "
               lat2
               ", "
               alt2
               "]}}")]
    (send-event "czml" p)))

