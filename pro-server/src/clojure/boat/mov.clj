(ns boat.mov
)
(def DEF-BOATS (defonce BOATS (volatile! {})))
(def CRS-STP 12)
(def CRS-HRD 36)
(def SPD-STP 0.2)
(def SPD-MAX 44)
(def SPD-MIN -8)
(def BOAT-TIO 1000)
(defn helm-work [bdt]
(letfn [(cp [crs] (if (>= crs 360) (- crs 360) crs))
           (cm [crs] (if (< crs 0) (+ crs 360) crs))]
  (condp = (:helm bdt)
    :steady bdt
    :starboard (assoc bdt :crs (cp (+ (:crs bdt) CRS-STP)))
    :hard-starboard (assoc bdt :crs (cp (+ (:crs bdt) CRS-HRD)))
    :port (assoc bdt :crs (cm (- (:crs bdt) CRS-STP)))
    :hard-port (assoc bdt :crs (cm (- (:crs bdt) CRS-HRD))))))
(defn engine-work [bdt]
(let [old (:spd bdt)
       new (:engine bdt)]
  (cond
    (= new old) bdt
    (and (> new old) (< old SPD-MAX)) (assoc bdt :spd (+ old SPD-STP))
    (and (< new old) (> old SPD-MIN)) (assoc bdt :spd (- old SPD-STP))
    true bdt)))
