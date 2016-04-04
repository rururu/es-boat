(ns boat.mov
(:require
  [geo.calc :as geo]
  [async.proc :as ap]))

(def DEF-BOATS (defonce BOATS (volatile! {})))
(def CRS-STP 12)
(def CRS-HRD 36)
(def SPD-STP 0.2)
(def SPD-MAX 44)
(def SPD-MIN -8)
(def BOAT-TIO 1000)
(def tio-hrs (double (/ BOAT-TIO 3600000)))
(def mov-status "START")
(defn helm
  ([id cmd]
  (vswap! BOATS assoc-in [id :helm] cmd))
([bdt]
  (letfn [(cp [crs] (if (>= crs 360) (- crs 360) crs))
             (cm [crs] (if (< crs 0) (+ crs 360) crs))]
    (condp = (:helm bdt)
      :steady bdt
      :starboard (assoc bdt :course (cp (+ (:course bdt) CRS-STP)))
      :hard-starboard (assoc bdt :course (cp (+ (:course bdt) CRS-HRD)))
      :port (assoc bdt :course (cm (- (:course bdt) CRS-STP)))
      :hard-port (assoc bdt :course (cm (- (:course bdt) CRS-HRD)))))))

(defn engine
  ([id knots]
  (vswap! BOATS assoc-in [id :engine] knots))
([bdt]
  (let [old (:speed bdt)
         new (:engine bdt)]
    (cond
      (= new old) bdt
      (and (> new old) (< old SPD-MAX)) (assoc bdt :speed (+ old SPD-STP))
      (and (< new old) (> old SPD-MIN)) (assoc bdt :speed (- old SPD-STP))
      true bdt))))

(defn move [bdt]
  (vswap! bdt assoc :coord (geo/future-pos (:coord bdt) (:course bdt) (:speed bdt) tio-hrs)))

(defn speed [id]
  (get-in @BOATS [id :speed]))

(defn course [id]
  (get-in @BOATS [id :course]))

(defn coord [id]
  (get-in @BOATS [id :coord]))

(defn start-boats-movement []
  (letfn [(mov []
            (doseq [[id bdt] @BOATS]
              (-> bdt
                (engine)
                (helm)
                (move))))]
  (ap/start-proc mov-status #(mov) BOAT-TIO nil "Boats movement started..")))

(defn add-boat [id coord crs spd]
  (vreset! BOATS assoc id
  [:coord coord
   :course crs
   :speed spd
   :helm :steady
   :engine spd]))

(defn rem-boat [id]
  (vreset! BOATS dissoc id))

