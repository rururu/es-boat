(ns chart.core
  (:require
    [cljs.core.async :as async :refer [<! >! chan put! timeout close!]]
    [cognitect.transit :as t]
    [goog.string :as gstring]
    [goog.string.format]
    [ajax.core :refer (GET)])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

;; ---------------------- General constants ------------------------------------

(def pid180 (/ Math.PI 180)) ;; 1 degree in radians
(def chart (volatile! nil)) ;; chart object
(def mapobs (volatile! {})) ;; map of all flights on chart
(def DLT-EVT 1000) ;; check event queue from server every 1000 msec (1 sec)
(def DLT-MOV 200) ;; move flight every 200 msec (5 times per sec)
(def DLT-POP 10000) ;; update popup every 10000 msec (10 sec)
(def FOLLOW -1) ;; boat to follow
(def URL-EVT "http://localhost:4444/events/")
(def URL-CHR "http://localhost:4444/chart/")
(def URL-OSM "http://{s}.tile.osm.org/{z}/{x}/{y}.png")
(def URL-GST "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}")
(def URL-GHB "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}")
(def URL-GTR "http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}")
(def URL-GSA "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}")
(def URL-ICO "http://localhost:4444/img/yachtr.png")

(def dlt-move-hrs (double (/ DLT-MOV 3600000)))

;; ----------------- Chart creation and control -------------------------

(defn by-id  [id]
  (.getElementById js/document id))

(defn get-html [id]
  (.-innerHTML (by-id id)))

(defn set-html! [id msg]
  (set! (.-innerHTML (by-id id)) msg))

(defn format
  "Formats a string using goog.string.format."
  [fmt & args]
  (apply gstring/format fmt args))

(defn mouse-move [lat lng]
  (set-html! "mousepos" (str "lat " (format "%.4f" lat) " lon " (format "%.4f" lng))))

;; ---------------------- General Functions ------------------------------------

(defn read-transit [x]
  (t/read (t/reader :json) x))

(defn write-transit [x]
  (t/write (t/writer :json) x))

(defn repeater [task timo]
  "Channel that repeats task (function call) forever"
  (go (while true
        (task)
        (<! (timeout timo)))))

(defn cond-repeater [task timo cond-func]
  "Channel that exec task (function call) if cond-func"
  (go (while true
        (if cond-func
          (task))
        (<! (timeout timo)))))

(defn map-view []
  [(.. @chart -center -lat)
   (.. @chart -center -lng)])

(defn set-map-view [[lat lon]]
  (let [cen (js/L.LatLng. lat lon)
        zom (.getZoom @chart)]
    (.setView @chart cen zom {})))

(defn follow []
  (if-let [mo (@mapobs FOLLOW)]
    (set-map-view (:coord mo))))

(defn follower-deviate []
  (if-let [mo (@mapobs FOLLOW)]
    (let [[lat1 lon1] (:coord mo)
          [lat2 lon2] (map-view)
          dlat (- lat1 lat2)
          dlon (- lon1 lon2)]
      (or (> dlat 0.02)
          (> dlon 0.02)
          (< dlat -0.02)
          (< dlon -0.02)))))

(defn create-marker [lat lon]
  (let [pos (js/L.LatLng. lat lon)
        ico (js/L.icon #js{:iconUrl URL-ICO :iconSize #js[32, 32]})
        opt #js{:icon ico :draggable true}
        mk (-> js/L (.rotatedMarker pos opt))]
    mk))

(defn mapobPopup [id data]
  (let [[lat lon] (:coord data)]
    (str "<h3>" id "</h3>"
         "<table>"
         "<tr><td>latitude</td><td>" (format "%.4f" lat) "</td></tr>"
         "<tr><td>longitude</td><td>" (format "%.4f" lon) "</td></tr>"
         "<tr><td>course</td><td>" (:course data) "</td></tr>"
         "<tr><td>speed</td><td>" (format "%.1f" (:speed data)) "</td></tr>"
         "</table>")))

(defn popup [id]
  (if-let [data (@mapobs id)]
    (.bindPopup (:marker data) (mapobPopup id data))))

(defn spherical-between [phi1 lambda0 c az]
  (let [cosphi1 (js/Math.cos phi1)
        sinphi1 (js/Math.sin phi1)
        cosaz (js/Math.cos az)
        sinaz (js/Math.sin az)
        sinc (js/Math.sin c)
        cosc (js/Math.cos c)
        phi2 (js/Math.asin (+ (* sinphi1 cosc) (* cosphi1 sinc cosaz)))
        lam2 (+ (js/Math.atan2 (* sinc sinaz) (- (* cosphi1 cosc) (* sinphi1 sinc cosaz))) lambda0)]
    [phi2 lam2]))

(defn future-pos [[lat lon] crs spd tim]
  (let [phi (* pid180 lat)
        lam (* pid180 lon)
        dir (* pid180 crs)
        way (* spd tim)
        way (* pid180 (/ way 60))
        [phi2 lam2] (spherical-between phi lam way dir)]
    [(/ phi2 pid180) (/ lam2 pid180)]))

(defn move [id]
  (if-let [data (@mapobs id)]
    (let [spd (:speed data)]
      (if (> spd 0)
        (let [[lat lon :as crd] (future-pos (:coord data)
                                            (:course data)
                                            spd
                                            dlt-move-hrs)
              pos (js/L.LatLng. lat lon)]
          (.setLatLng (:marker data) pos)
          (vswap! mapobs assoc id
                  (merge data
                         {:coord crd})))))))

(defn delete-mapob [id]
  (when-let [mob (@mapobs id)]
    (if-let [mvr (mob :mover)]
      (close! mvr))
    (if-let [pop (mob :poper)]
      (close! pop))
    (.removeLayer @chart (mob :marker))
    (vswap! mapobs dissoc id)))

(defn boat-add [id data]
  (if (@mapobs id)
    (delete-mapob id))
  (let [[lat lon] (:coord data)
        mrk (create-marker lat lon)]
    (.addTo mrk @chart)
    (set! (.. mrk -options -angle) (:course data))
    (.bindPopup mrk (mapobPopup id data))
    (vswap! mapobs assoc id
            (merge data
                   {:marker mrk
                    :mover (repeater #(move id) DLT-MOV)
                    :poper (repeater #(popup id) DLT-POP)}))))

(defn boat-maneuver [id data]
  (println [:BM id data])
  (when-let [old (@mapobs id)]
    (vswap! mapobs assoc id (merge old data))
    (set! (.. (:marker old) -options -angle) (:course data))))

(defn clear-mapobs []
  (doseq [id (keys @mapobs)]
    (delete-mapob id)))

;; ------------------------ Event handler ---------------------------

(defn event-handler [response]
  (doseq [{:keys [event] :as evt} (read-transit response)]
    (println [:EVENT evt])
    (condp = event
      :boat-add (let [{:keys [id data]} evt]
                      (boat-add id data))
      :boat-remove (let [{:keys [id]} evt]
                      (delete-mapob id))
      :boat-maneuver (let [{:keys [id data]} evt]
                      (boat-maneuver id data))
      :boat-follow (let [{:keys [id]} evt]
                      (def FOLLOW id))
      (println (str "Unknown event: " [event evt])))))

(defn error-handler [{:keys [status status-text]}]
  (println (str "AJAX ERROR: " status " " status-text)))

(defn check-events []
  (GET URL-EVT {:handler event-handler
                :error-handler error-handler}))

(defn no-handler [response])

;; ------------------------ Initialization ----------------------------

(defn start-chart [response]
  (if-let [[lat lon] (read-transit response)]
    (let [m (-> js/L
                (.map "map")
                (.setView (array lat lon) 10)) ;; 40.8, -74.0) 9)) ;; New York City
          tile1 (-> js/L (.tileLayer URL-OSM
                                     #js{:maxZoom 16
                                         :attribution "OOGIS RL, OpenStreetMap &copy;"}))
          tile2 (-> js/L (.tileLayer URL-GSA
                                     #js{:maxZoom 20
                                         :subdomains #js["mt0" "mt1" "mt2" "mt3"]
                                         :attribution "OOGIS RL, Google &copy;"}))
          tile3 (-> js/L (.tileLayer URL-GST
                                     #js{:maxZoom 20
                                         :subdomains #js["mt0" "mt1" "mt2" "mt3"]
                                         :attribution "OOGIS RL, Google &copy;"}))
          tile4 (-> js/L (.tileLayer URL-GHB
                                     #js{:maxZoom 20
                                         :subdomains #js["mt0" "mt1" "mt2" "mt3"]
                                         :attribution "OOGIS RL, Google &copy;"}))
          tile5 (-> js/L (.tileLayer URL-GTR
                                     #js{:maxZoom 20
                                         :subdomains #js["mt0" "mt1" "mt2" "mt3"]
                                         :attribution "OOGIS RL, Google &copy;"}))
          base (clj->js {"OpenStreetMap" tile1
                         "Google Satellite" tile2
                         "Google Streets" tile3
                         "Google Hybrid" tile4
                         "Google Terrain" tile5})
          ctrl (-> js/L (.control.layers base nil))]
      (.addTo tile1 m)
      (.addTo ctrl m)
      (.on m "mousemove"
           (fn [e] (mouse-move (.. e -latlng -lat) (.. e -latlng -lng))))
      (vreset! chart m)
      ;;(cond-repeater #(follow) DLT-EVT #(follower-deviate))
      (repeater #(check-events) DLT-EVT))
    (js/alert "No chart center from server!")))

(defn init []
  (GET URL-CHR {:handler start-chart
                :error-handler error-handler}))

;; ----------------------------- Start ---------------------------------

(set! (.-onload js/window) (init))

