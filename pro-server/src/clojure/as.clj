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
    1 "Clear."
    2 (str "Island " (tit-dis (first acc)) " is " subject)
    6 (str "Islands: " (apply str (interpose ", " (map tit-dis acc))) " are " subject)
    (str "Islands: " (apply str (interpose ", " (map tit-dis (take 5 acc)))) " and more " (- cnt 5) " islands are " subject))))

