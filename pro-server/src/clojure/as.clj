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

(defn kind-tit-dis [[kind tit dis]]
  (str kind " " tit (format " (%.1f nm)" dis)))

(defn ans-objects [pll nal aml ael hil wal tol subject]
  (letfn [(anso [acc cnt pfx]
	(condp > cnt
	  1 ""
	  2 (str pfx " object " (kind-tit-dis (first acc)) ",<br>")
	  6 (str pfx " objects: " (apply str (interpose ", " (map kind-tit-dis acc))) ",<br>")
	  (str pfx " objects: " (apply str (interpose ", " (map kind-tit-dis (take 5 acc)))) " and more " (- cnt 5) ",<br>")))]
  (let [pll (sort-by second pll) cpl (count pll)
          nal (sort-by second nal) cnl (count nal)
          aml (sort-by second aml) cal (count aml)
          ael (sort-by second ael) cae (count ael)
          hil (sort-by second hil) chi (count hil)
          wal (sort-by second wal) cwa (count wal)
          tol (sort-by second tol) cto (count tol)]
    (str
      (if (= (+ cpl cnl cal cae chi cwa cto) 0)
        "No objects in sight "
        (str (anso pll cpl "Place")
              (anso nal cnl "Natural")
              (anso aml cal "Amenity")
              (anso ael cae "Aeroway")
              (anso hil chi "Highway")
              (anso wal cwa "Waterway")
              (anso tol cto "Tourism")))
      "are " subject))))

