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
(println "2. Starting server...")
(eval (read-string "(pro.server/start-server)"))
(println "3. Adding boat...")
(println (str "    Map center: " (eval (read-string "pro.server/MAP-CENTER"))))
(eval (read-string "(boat.mov/boat-add pro.server/ONBOARD pro.server/MAP-CENTER 0 0)"))
(println "EXPERT SYSTEM INITIALIZED"))

