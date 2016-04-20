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
(println "2. Starting Rule Engine...")
(eval (read-string "(ru.rules/run-engine \"AS Run\")"))
(println "3. Starting server...")
(eval (read-string "(pro.server/start-server)"))
(println (str "    Map center: " (eval (read-string "pro.server/MAP-CENTER"))))
(println "EXPERT SYSTEM INITIALIZED"))

(defn current-time []
  (System/currentTimeMillis))

