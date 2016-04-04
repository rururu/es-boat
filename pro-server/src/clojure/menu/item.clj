(ns menu.item
(:use protege.core)
(:import clojuretab.ClojureTab))

(defn clojure-work []
  (println "INITIALIZING EXPERT SYSTEM")
(println "1.Loading Clojure Programs...")
(if-let [wps (seq (cls-instances "WorkingPrograms"))]
  (loop [i 1 pins (svs (first wps) "cloPrograms")]
    (when (seq pins)
      (println (str " 1." i " " (sv (first pins) "title") " = " (ClojureTab/loadProgram (first pins)) ))
      (recur (inc i) (rest pins))))
  (println "  Instance of WorkingPrograms not found!"))
(println "2. ...")
(println "EXPERT SYSTEM INITIALIZED"))

