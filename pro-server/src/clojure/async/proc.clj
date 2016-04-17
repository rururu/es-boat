(ns async.proc
(:require 
  [clojure.core.async :as async :refer [chan alts!! put! <! go timeout]]))

(defn start-proc [status-vol proc-func time-out cond-func]
  (when (not= @status-vol "RUNNING") 
  (vreset! status-vol "RUNNING")
  (go (do 
          (while (and (= @status-vol "RUNNING")
                          (or (nil? cond-func) (cond-func)))
                (proc-func)
                (<! (timeout time-out)))
          (vreset! status-vol "STOPPED")))
  @status-vol))

(defn stop-proc [status-vol]
  (vreset! status-vol "STOP"))

(defn running? [status-vol]
  (= @status-vol "RUNNING"))

(defn repeater [proc-func time-out]
  (go (while true
           (proc-func)
           (<! (timeout time-out)))))

