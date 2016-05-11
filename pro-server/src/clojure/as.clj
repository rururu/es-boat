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
    1 (str "No islands in sight " subject)
    2 (str "Island " (tit-dis (first acc)) " is " subject)
    6 (str "Islands: " (apply str (interpose ", " (map tit-dis acc))) " are " subject)
    (str "Islands: " (apply str (interpose ", " (map tit-dis (take 5 acc)))) " and more " (- cnt 5) " islands are " subject))))

(defn ans-objects [places naturals amenitys subject]
  (letfn [(anso [acc cnt pfx]
	(condp > cnt
	  1 ""
	  2 (str pfx " object " (tit-dis (first acc)) ",<br>")
	  6 (str pfx " objects: " (apply str (interpose ", " (map tit-dis acc))) ",<br>")
	  (str pfx " objects: " (apply str (interpose ", " (map tit-dis (take 5 acc)))) " and more " (- cnt 5) ",<br>")))]
  (let [pll (sort-by second places)
          nal (sort-by second naturals)
          aml (sort-by second amenitys)
          cpl (count pll)
          cnl (count nal)
          cal (count aml)]
    (str
      (if (= (+ cpl cnl cal) 0)
        "No objects in sight"
        (str (anso pll cpl "Place")
              (anso nal cnl "Natural")
              (anso aml cal "Amenity")))
      "are " subject))))

