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
(def mov-status (volatile! "START"))
(defn engine [bdt f]
  (let [old (:speed bdt)
       tgt (:engine bdt)]
  (cond
    (= tgt old) 
      bdt
    (and (> tgt old) (< old SPD-MAX)) 
      (let [nbd (assoc bdt :speed (+ old SPD-STP))] (f nbd) nbd)
    (and (< tgt old) (> old SPD-MIN))
      (let [nbd (assoc bdt :speed (- old SPD-STP))] (f nbd) nbd)
    true 
      bdt)))

(defn helm [bdt f]
  (let [cp (fn [crs] (if (>= crs 360) (- crs 360) crs))
       cm (fn [crs] (if (< crs 0) (+ crs 360) crs))
       tgt (:helm bdt)]
  (if (not= tgt :steady)
    (let [nbd (condp = tgt
                    :starboard (assoc bdt :course (cp (+ (:course bdt) CRS-STP)))
                    :hard-starboard (assoc bdt :course (cp (+ (:course bdt) CRS-HRD)))
                    :port (assoc bdt :course (cm (- (:course bdt) CRS-STP)))
                    :hard-port (assoc bdt :course (cm (- (:course bdt) CRS-HRD))))]
      (f nbd)
      nbd)
    bdt)))

(defn move [bdt]
  (let [pos (geo/future-pos (:coord bdt) (:course bdt) (:speed bdt) tio-hrs)]
  (println [:POS pos])
  (assoc bdt :coord pos)))

(defn start-boat-movement [f]
  (letfn [(mov []
            (doseq [[id bdt] (seq @BOATS)]
              (let [g (partial f id)]
                (vswap! BOATS assoc id 
                  (-> bdt
                    (engine g)
                    (helm g)
                    (move))))))]
  (ap/start-proc mov-status #(mov) BOAT-TIO nil "Boats movement started..")))

(defn stop-boat-movement []
  (ap/stop-proc mov-status))

(defn boat-add [id coord crs spd f]
  (let [bdt {:coord coord
               :course crs
               :speed spd
               :helm :steady
               :engine spd}]
  (vswap! BOATS assoc id bdt)
  (f id bdt)))

(defn boat-rem [id f]
  (f id (@BOATS id))
(vswap! BOATS dissoc id))

(defn boat-helm [id cmd]
  (vswap! BOATS assoc-in [id :helm] cmd))

(defn boat-engine [id knots]
  (vswap! BOATS assoc-in [id :engine] knots))

(defn coord [id]
  (get-in @BOATS [id :coord]))

(defn speed [id]
  (get-in @BOATS [id :speed]))

(defn course [id]
  (get-in @BOATS [id :course]))

