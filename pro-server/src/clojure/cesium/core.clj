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

(def DEF-CAM (defonce CAM (volatile! {:onboard nil
                         :id nil
                         :heading "FORWARD"
                         :pitch -10.0
                         :roll 0.0
                         :chan nil})))
(def DOC-SND (volatile! true))
(def CZMW-INTL 20000)
(defn send-event [typ dat]
  (if-let [ch (:chan @CAM)]
    (async/put! ch [typ (.trim dat)])))

(defn pump-out-events [chn]
  (loop [[bit ch] (alts!! [chn] :default :none) bits []]
    (if (= bit :none)
      bits
      (recur (alts!! [chn] :default :none) (conj bits bit)))))

(defn events []
  (if-let [ch (:chan @CAM)]
    (let [evt-hr (fn [[typ dat]]
                   (str "event: " typ "\ndata: " dat "\n\n"))
          ee (deref (future (pump-out-events ch)))
          resp (if (seq ee)
                 (apply str (map evt-hr ee))
                 "")]
      (->
        (r/response resp)
        (r/header "Access-Control-Allow-Origin" "*")
        (r/header "Content-Type" "text/event-stream;charset=utf-8")))))

(defn start-sse-server []
  (when (nil? (:chan @CAM))
    (vswap! CAM assoc :chan (async/chan))
    (println (str "SSE Server started on channel: " (:chan @CAM)))))

(defn stop-sse-server []
  (when (:chan @CAM)
    (vswap! CAM dissoc :chan)
    (println "SSE Server stopped.")))

(defn fly-control [ctrl lat lon alt hea pit rol per]
  (let [p (str "{\"ctrl\":\""
               ctrl "\",\"lat\":"
               lat ",\"lon\":"
               lon ",\"altitude\":"
               alt ",\"heading\":"
               hea ",\"pitch\":"
               pit ",\"roll\":"
               rol ",\"duration\":"
               per "}")]
    (send-event "fly" p)))

(defn what-side [crs on-course]
  (if (> on-course crs)
    (if (< (- on-course crs) 180)
      :right
      :left)
    (if (< (- crs on-course) 180)
      :left
      :right)))

(defn fly-to [lat lon alt crs per]
  (let [pitch (:pitch @CAM)
        roll (:roll @CAM)
        direct (fn [x] (cond
                         (> x 360) (- x 360)
                         (< x 0) (+ x 360)
                         true x))
        head (condp = (:heading @CAM)
               "FORWARD" (direct crs)
               "BACKWARD" (direct (+ crs 180))
               "RIGHT" (direct (+ crs 90))
               "LEFT" (direct (- crs 90))
               "UP" (direct crs)
               "DOWN" (direct crs))]
    (fly-control "fly" lat lon alt head pitch roll per)))

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
  (when @DOC-SND
    (send-event "czml" (doc))
    (vreset! DOC-SND false))
  (let [p (str "{\"id\":\""
               label
               "\",\"label\":{\"scale\":0.25,\"pixelOffset\":{\"cartesian2\":[8, -8]},\"text\":\""
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
  (when @DOC-SND
    (send-event "czml" (doc))
    (vreset! DOC-SND false))
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

(defn cesium-work []
  (let [id (:id @CAM)]
    (let [[lat lon] (bm/coord id)
           alt 40 ;; feets
           crs (bm/course id)
           per (/ CZMW-INTL 1000)] ;; msec to sec
      (fly-to lat lon alt crs per))))

(defn start-cesium []
  (when (nil? (:id @CAM))
    (ap/repeater #(cesium-work) CZMW-INTL "Start (cesium-work)..")
    (vswap! CAM assoc :id 0))
(start-sse-server))

(defn camera [params]
  (println [:CAMERA params])
  (vswap! CAM merge params)
  (condp = (params :camera)
    "on" (start-cesium)
    "off"(stop-sse-server)
    true)
  (condp = (params :heading)
    "UP" (vswap! CAM assoc :pitch 90.0)
    "DOWN" (vswap! CAM assoc :pitch -90.0)
    nil true
    (vswap! CAM assoc :pitch 0.0))
  "")

