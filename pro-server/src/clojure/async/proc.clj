(ns async.proc
(:require 
  [clojure.core.async :as async :refer [chan alts!! put! <! go timeout]]))

(defn start-proc [status-vol proc-func time-out cond-func start-mess]
  (when (not= @status-vol "RUNNING") 
  (if start-mess
    (println start-mess))
  (go (do 
          (while (and (= @status-vol "RUNNING")
                          (or (nil? cond-func) (cond-func)))
                (proc-func)
                (<! (timeout time-out)))
          (vreset! status-vol "STOPPED")))
  (vreset! status-vol "RUNNING")))

(defn stop-proc [status-vol]
  (vreset! status-vol "STOP"))

(defn running? [status-vol]
  (= @status-vol "RUNNING"))

(defn repeater [proc-func time-out  start-mess]
  (if start-mess
  (println start-mess))
(go (while true
           (proc-func)
           (<! (timeout time-out)))))

