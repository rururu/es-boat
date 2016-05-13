(ns view3d.core
  (:require
   [goog.string :as gstring]
   [goog.string.format]
   [cljs.core.async :as async :refer [<! >! chan put! timeout close!]]
   [cognitect.transit :as t]
   [cljs.reader :as r]
   [ajax.core :refer (GET ajax-request)])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)


;; ------------------- General constants -----------------------------

(def PID180 (/ Math.PI 180)) ;; 1 degree in radians
(def BOAT-TIO 1000) ;; boat movement timeout interval (1 sec)
(def BOAT-SRV 120000) ;; boat to server every 2 min
(def CRS-NOR 250) ;; turn 4 degrees per second
(def CRS-HRD 100) ;; turn 10 degrees per second
(def SPD-STP 0.5) ;; boost 0.5 knots per second
(def CAM-TIO 4000) ;; camera timeout interval (4 sec)
(def BSE-URL "http://localhost:4444/") ;; server url base
(def MAP-PTH "map-center/")
(def QST-PTH "question/")
(def ANS-PTH "answer/")
(def CMD-PTH "maneuver/")
(def CZML-PTH "czml/")

(def boat (volatile! {:coord [0 0]
                      :speed 0
                      :course 0
                      :helm :steady
                      :engine 0}))

(def boat-tio-hrs (double (/ BOAT-TIO 3600000)))

(def camera (volatile! {:view "FORWARD"
                        :pitch 0
                        :roll 0
                        :altitude 2}))

(def cam-tio-sec (/ CAM-TIO 1000))

;; ------------------- General functions -----------------------------

(defn by-id  [id]
  (.getElementById js/document id))

(defn get-html [id]
  (.-innerHTML (by-id id)))

(defn set-html! [id msg]
  (set! (.-innerHTML (by-id id)) msg))

(defn repeater [task timo]
  "Channel that repeats task (function call) forever"
  (go (while true
        (task)
        (<! (timeout timo)))))

(defn write-transit [x]
  (t/write (t/writer :json) x))

(defn format
  "Formats a string using goog.string.format."
  [fmt & args]
  (apply gstring/format fmt args))

(defn norm-crs [x]
  (cond
   (> x 360) (- x 360)
   (< x 0) (+ x 360)
   true x))

(defn error-handler [{:keys [status status-text]}]
  (println (str "AJAX ERROR: " status " " status-text)))

(defn no-handler [response])

(defn ask-server [path params resp-format handler]
  ;;(println [:ASK-SERV path params])
  (let [url (str BSE-URL path)]
    (GET url {:params params
              :handler handler
              :error-handler error-handler
              :response-format resp-format})))

;; -------------------------- Cesium ---------------------------------

(def terprov (js/Cesium.CesiumTerrainProvider.
               #js{:url "//assets.agi.com/stk-terrain/world"
                   :requestWaterMask false
                   :requestVertexNormals false}))
(def viewer (js/Cesium.Viewer. "cesiumContainer"))

(set! (.-terrainProvider viewer) terprov)

(def cz-source (js/Cesium.CzmlDataSource.))

(.add (.-dataSources viewer) cz-source)

(defn cz-processor [e]
  (let [data (.-data e)
        data (js/JSON.parse data)]
    (.process cz-source data)))

(def evt-source (js/EventSource. (str BSE-URL CZML-PTH)))

(.addEventListener evt-source "czml" cz-processor false)

(defn fly-control [lat lon alt hea pit rol per]
  (let [dest (js/Cesium.Cartesian3.fromDegrees lon lat alt)]
    (.flyTo (.-camera viewer)
            #js{:destination dest
                :orientation #js{:heading (js/Cesium.Math.toRadians hea)
                                 :pitch   (js/Cesium.Math.toRadians pit)
                                 :roll    (js/Cesium.Math.toRadians rol)}
                :duration per
                :easingFunction (fn [time] time)})))

(defn fly-to [lat lon alt crs per]
  (let [pitch (condp = (:view @camera)
                "UP" 90
                "DOWN" -90
                (:pitch @camera))
        roll (:roll @camera)
        head (norm-crs (condp = (:view @camera)
                         "ASTERN" (+ crs 180)
                         "STARBOARD" (+ crs 90)
                         "PORT" (- crs 90)
                         "STAR-BOW" (+ crs 45)
                         "PORT-BOW" (- crs 45)
                         "STAR-ABAFT" (+ crs 135)
                         "PORT-ABAFT" (- crs 135)
                         crs))]
    (fly-control lat lon alt head pitch roll per)))

(defn camera-work []
  (let [[lat lon] (:coord @boat)
        crs (:course @boat)
        alt (:altitude @camera)]
    (fly-to lat lon alt crs cam-tio-sec)))


;; ------------------------ Boat movement ----------------------------

(defn boat-to-server []
  (GET (str BSE-URL CMD-PTH)
       {:params @boat
        :handler no-handler
        :error-handler error-handler}))

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
  (let [phi (* PID180 lat)
        lam (* PID180 lon)
        dir (* PID180 crs)
        way (* spd tim)
        way (* PID180 (/ way 60))
        [phi2 lam2] (spherical-between phi lam way dir)]
    [(/ phi2 PID180) (/ lam2 PID180)]))

(defn display-boat-data []
  (let [[lat lon] (:coord @boat)
        lat (if (>= lat 0)
              (str (format "%.4f " lat) "N")
              (str (format "%.4f " (- 0 lat)) "S"))
        lon (if (>= lon 0)
              (str (format "%.4f " lon) "E")
              (str (format "%.4f " (- 0 lon)) "W"))]
    (set-html! "latitude" lat)
    (set-html! "longitude" lon)
    (set-html! "speed" (format "%.1f knots" (:speed @boat)))))

(defn boost [speed engine]
  (cond
   (> engine speed) (+ speed SPD-STP)
   (< engine speed) (- speed SPD-STP)))

(defn turn [func tio helm]
  (go (while (= (:helm @boat) helm)
        (vswap! boat assoc :course (norm-crs (func (:course @boat))))
        (set-html! "course" (:course @boat))
        (<! (timeout tio)))))

(def ACCD false)

(defn boat-move []
  (let [helm (:helm @boat)
        engine (:engine @boat)
        course (:course @boat)
        speed (:speed @boat)]
    (if (not= (int engine) speed)
      (do (def ACCD true)
        (vswap! boat assoc :speed (boost speed engine)))
      (when ACCD
        (boat-to-server)
        (def ACCD false)))
    (vswap! boat assoc :coord
            (future-pos (:coord @boat) course speed boat-tio-hrs))
    (display-boat-data)))

;; --------------------------- Controls ------------------------------

(def helm-control
  "<input type='range' min='-100' max='100' step='10' value='0'
  onchange='javascript:view3d.core.helm(this.value)'>")

(defn helm [val]
  (let [old (:helm @boat)
        new (cond
             (<= -20 val 20) :steady
             (> val 80)  :hard-a-starboard
             (> val 20)  :starboard
             (< val -80) :hard-a-port
             (< val -20) :port)]
    (vswap! boat assoc :helm new)
    (if (not= old new)
      (if (not= new :steady)
        (turn (if (or (= new :starboard)(= new :hard-a-starboard)) inc dec)
              (if (or (= new :starboard)(= new :port)) CRS-NOR CRS-HRD)
              new)
        (boat-to-server)))))

(def throttle-control
  "<input type='test' value='0' style='width:90px'
  onchange='javascript:view3d.core.throttle(this.value)'>")

(defn throttle [val]
  (vswap! boat assoc :engine (r/read-string val)))

(defn camera-control []
  (set-html! "view" "view")
  (set-html! "view-fld" "<select onchange='javascript:view3d.core.view(this.value)' style='width:96px'>
             <option value='AHEAD'>AHEAD</option>
             <option value='STAR-BOW'>STAR-BOW</option>
             <option value='PORT-BOW'>PORT-BOW</option>
             <option value='STARBOARD'>STARBOARD</option>
             <option value='PORT'>PORT</option>
             <option value='STAR-ABAFT'>STAR-ABAFT</option>
             <option value='PORT-ABAFT'>PORT-ABAFT</option>
             <option value='ASTERN'>ASTERN</option>
             <option value='UP'>UP</option>
             <option value='DOWN'>DOWN</option>
             </select>")
  (set-html! "altitude" "altitude")
  (set-html! "altitude-fld" (str "<input value='10' style='width:90px' "
                                "onchange='javascript:view3d.core.altitude(this.value)'>"))
  (set-html! "pitch" "pitch")
  (set-html! "pitch-fld" (str "<input value='0' style='width:90px' "
                              "onchange='javascript:view3d.core.pitch(this.value)'>"))
  (set-html! "roll" "roll")
  (set-html! "roll-fld" (str "<input value='0' style='width:90px' "
                             "onchange='javascript:view3d.core.roll(this.value)'>")))

(defn view [val]
  (vswap! camera assoc :view val))

(defn altitude [val]
  (vswap! camera assoc :altitude (r/read-string val)))

(defn pitch [val]
  (vswap! camera assoc :pitch (r/read-string val)))

(defn roll [val]
  (vswap! camera assoc :roll (r/read-string val)))

;; --------------------------- Ask Master -----------------------------

(defn options [lst typ]
  (condp = typ
    :itself (apply str (for [e lst]
                         (str "<option value='" e "'>" e "</option>")))
    :count  (apply str (for [i (range (count lst))]
                            (str "<option value='" i "'>" (nth lst i) "</option>")))))

(defn selector1 [header lst typ]
  (let [sel (str "<select onchange='javascript:view3d.core.handler1(this.value)'>"
                 "<option value='-1'>" header "</option>"
                 (options lst typ)
                 "</select>")]
    (set-html! "element1" sel)
    (set-html! "element2" "")
    (set-html! "element3" "")))

(def function1 nil)

(defn handler1 [selected]
  (function1 selected))

(defn selector2 [header lst typ]
  (let [sel (str "<select onchange='javascript:view3d.core.handler2(this.value)'>"
                 "<option value='-1'>" header "</option>"
                 (options lst typ)
                 "</select>")]
    (set-html! "element2" sel)
    (set-html! "element3" "")))

(def function2 nil)

(defn handler2 [selected]
  (function2 selected))

(defn selector3 [header lst typ]
  (let [sel (str "<select onchange='javascript:view3d.core.handler3(this.value)'>"
                 "<option value='-1'>" header "</option>"
                 (options lst typ)
                 "</select>")]
    (set-html! "element3" sel)))

(def function3 nil)

(defn handler3 [selected]
  (function3 selected))

;; ------------------------ Questionnaire -----------------------------

(defn display-answer [answer]
  (set-html! "display2" (get-html "display"))
  (set-html! "display" answer))

(defn retrieve-answer []
  (display-answer "")
  (ask-server ANS-PTH nil :transit display-answer))

(defn retrieve-2-answers []
  (ask-server ANS-PTH nil :transit display-answer)
  (ask-server ANS-PTH nil :transit display-answer))

(defn behind-island [islands]
  (selector3 "island" islands :itself)
  (def function3
    (fn [a]
      (ask-server QST-PTH {:predicate "what-is"
                           :subject "behind the island"
                           :object a} :transit retrieve-answer))))

(defn before-island [islands]
  (selector3 "island" islands :itself)
  (def function3
    (fn [a]
      (ask-server QST-PTH {:predicate "what-is"
                           :subject "before the island"
                           :object a} :transit retrieve-answer))))

(defn where-island [islands]
  (selector3 "island" islands :itself)
  (def function3
    (fn [a]
      (ask-server QST-PTH (merge @boat {:predicate "where-is"
                                        :subject "island"
                                        :object a})
                  :transit retrieve-answer))))

(defn nearby-islands-behind []
  (ask-server ANS-PTH nil :transit behind-island))

(defn nearby-islands-before []
  (ask-server ANS-PTH nil :transit before-island))

(defn nearby-islands-where []
  (ask-server ANS-PTH nil :transit where-island))

(def lst1 ["ahead"
           "on the starboard bow"
           "on the port bow"
           "on the starboard beam"
           "on the port beam"
           "abaft the starboard beam"
           "abaft the port beam"
           "astern"
           "behind the island"
           "before the island"])

(defn what-is []
  (selector2 "?" lst1 :count)
  (def function2
    (fn [a]
      (let [n (r/read-string a)]
        (condp >= n
          7 (ask-server QST-PTH (merge @boat {:predicate "what-is"
                                              :subject (nth lst1 n)})
                        :transit retrieve-2-answers)
          8 (ask-server QST-PTH (merge @boat {:predicate "nearby-islands"})
                        :transit nearby-islands-behind)
          9 (ask-server QST-PTH (merge @boat {:predicate "nearby-islands"})
                        :transit nearby-islands-before)
          (println [:WHAT-IS (nth lst1 n)]))))))

(def lst2 ["island"])

(defn where-is []
  (selector2 "?" lst2 :count)
  (def function2
    (fn [a]
      (let [n (r/read-string a)]
        (condp >= n
          0 (ask-server QST-PTH (merge @boat {:predicate "nearby-islands"})
                        :transit nearby-islands-where)
          (println [:WHERE-IS (nth lst1 n)]))))))

(defn questionnaire []
  (set-html! "ask" "Ask a question:")
  (selector1 "?" ["What is"
                  "Where is"
                  "Tell me about"
                  "What is the weather"
                  "How far is "] :count)
  (def function1
    (fn [a]
      (condp = (r/read-string a)
        0 (what-is)
        1 (where-is)
        2 (tell-about)
        3 (weather)
        4 (how-far-is)))))

;; ----------------------------- Init ---------------------------------

(defn start-map [response]
  (if-let [[lat lon] response]
    (do (vswap! boat assoc :coord [lat lon])
      (fly-to lat lon (:altitude @camera) 0 10)
      (set-html! "course" (:course @boat))
      (set-html! "helm-tit" "helm")
      (set-html! "helm" helm-control)
      (set-html! "throttle" "throttle")
      (set-html! "throttle-fld" throttle-control)
      (camera-control)
      (println [:CAMERA camera])
      (println [:BOAT boat])
      (repeater #(boat-move) BOAT-TIO)
      (repeater #(boat-to-server) BOAT-SRV)
      (repeater #(camera-work) CAM-TIO)
      (questionnaire))
    (js/alert "No map center from server!")))

(defn init []
  (ask-server MAP-PTH nil :transit start-map))

;; ----------------------------- Start ---------------------------------

(set! (.-onload js/window) (init))

