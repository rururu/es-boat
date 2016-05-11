(ns as
)

(defn current-time []
  (System/currentTimeMillis))

(defn tit-dis [[tit dis]]
  (str tit (format " (%.1f nm)" dis)))

(defn ans-islands [accum subject]
  (let [acc (sort-by second accum)
       cnt (count acc)]
  (condp > cnt
    1 "No islands in sight."
    2 (str "Island " (tit-dis (first acc)) " is " subject)
    6 (str "Islands: " (apply str (interpose ", " (map tit-dis acc))) " are " subject)
    (str "Islands: " (apply str (interpose ", " (map tit-dis (take 5 acc)))) " and more " (- cnt 5) " islands are " subject))))

(defn ans-objects [places naturals amenitys subject]
  (letfn [(anso [acc cnt pfx]
	(println [:ANSO acc cnt pfx])
	(condp > cnt
	  1 ""
	  2 (str pfx " object " (tit-dis (first acc)) "\n")
	  6 (str pfx " objects: " (apply str (interpose ", " (map tit-dis acc))) "\n")
	  (str pfx " objects: " (apply str (interpose ", " (map tit-dis (take 5 acc)))) " and more " (- cnt 5) "\n")))]
  (let [pll (sort-by second places)
          nal (sort-by second naturals)
          aml (sort-by second amenitys)
          r 
    (str (anso pll (count pll) "Place")
          (anso nal (count nal) "Natural")
          (anso aml (count aml) "Amenity"))]
  (println [:R r])
  r)))

