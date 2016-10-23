(ns fly.bird
)

(defn plus-one
  ([] 1)
([x] (+ x 1))
([x & y] (+ x (apply + y) 1)))

(defmacro infix2
  [[x f y]] `(~f ~x ~y))

(defmacro infix1 [x f y]
  (list f x y))

(defprotocol Fly
	(fly [this] [this x])
	(walk [this])
)
(defrecord Bird []
	Fly
	(fly [this] (str (:nom this) " flies.."))
	(fly [this x] (str (:nom this) " flies " x))
	(walk [this] (str (:nom this) " walking " species))
)

(extend-protocol Fly
	String
	(fly [string] (str string " is flying.."))
	Double
	(fly [dbl] (str "Double " dbl " is flying.."))
)

(extend-type java.util.Date
	Fly
	(fly [string] (str string " is flying.."))
)

