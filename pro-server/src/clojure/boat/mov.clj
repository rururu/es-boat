(ns boat.mov
(:require
  [geo.calc :as geo]
  [async.proc :as ap]))

(def DEF-BOATS (defonce BOATS (volatile! {})))
(def CRS-STP 6)
(def CRS-HRD 18)
(def SPD-STP 0.4)
(def SPD-MAX 44)
(def SPD-MIN -8)
(def BOAT-TIO 1000)
(def tio-hrs (double (/ BOAT-TIO 3600000)))
(def mov-status (volatile! "START"))
(def rem-func nil)
(def add-func )
(defn engine [bdt f]
  (let [old (:speed bdt)
       tgt (:engine bdt)
       new (cond
                (> tgt old) (+ old SPD-STP)
                (< tgt old) (- old SPD-STP)
                true 0)]
  (cond
    (= new 0)
      bdt
    (or (and (< old tgt) (>= new tgt))
          (and (> old tgt) (<= new tgt)))
      (let [nbd (assoc bdt :speed tgt)] (f nbd) nbd)
    true (assoc bdt :speed new))))

(defn helm [bdt f]
  (let [cp (fn [crs] (if (>= crs 360) (- crs 360) crs))
       cm (fn [crs] (if (< crs 0) (+ crs 360) crs))
       old (:course bdt)
       tgt (:helm bdt)]
  (if (not= tgt :steady)
    (assoc bdt :old-crs old
                      :course (condp = tgt
                                     :starboard (cp (+ old CRS-STP))
                                     :hard-a-starboard (cp (+ old CRS-HRD))
                                     :port (cm (- old CRS-STP))
                                     :hard-a-port (cm (- old CRS-HRD))
                                     old))
    (if (= (:old-crs bdt) old)
      bdt
      (do (f bdt)
         (assoc bdt :old-crs old))))))

(defn move [bdt]
  (assoc bdt :coord (geo/future-pos (:coord bdt) (:course bdt) (:speed bdt) tio-hrs)))

(defn start-boat-movement [mf af rf]
  (letfn [(mov []
            (doseq [[id bdt] (seq @BOATS)]
              (let [man-func (partial mf id)]
                (vswap! BOATS assoc id 
                  (-> bdt
                    (engine man-func)
                    (helm man-func)
                    (move))))))]
  (def add-func af)
  (def rem-func rf)
  (ap/start-proc mov-status #(mov) BOAT-TIO nil "Boats movement started..")))

(defn stop-boat-movement []
  (ap/stop-proc mov-status))

(defn boat-add [id coord crs spd]
  (let [bdt {:coord coord
               :course crs
               :speed spd
               :helm :steady
               :engine spd
               :old-crs crs}]
  (vswap! BOATS assoc id bdt)
  (add-func id bdt)))

(defn boat-rem [id]
  (rem-func id (@BOATS id))
(vswap! BOATS dissoc id))

(defn boat-helm [id cmd]
  (vswap! BOATS assoc-in [id :helm] cmd))

(defn boat-engine [id knots]
  (let [knots (max (min knots SPD-MAX) SPD-MIN)]
  (vswap! BOATS assoc-in [id :engine] knots)))

(defn coord [id]
  (get-in @BOATS [id :coord]))

(defn speed [id]
  (get-in @BOATS [id :speed]))

(defn course [id]
  (get-in @BOATS [id :course]))

