(ns view3d.core
  (:require
    [ajax.core :refer (GET)]))

(enable-console-print!)

;; ---------------------- General constants ------------------------------------

(def URL-CMD "http://localhost:4444/command/")

(defn by-id  [id]
  (.getElementById js/document id))

(defn get-html [id]
  (.-innerHTML (by-id id)))

(defn set-html! [id msg]
  (set! (.-innerHTML (by-id id)) msg))

(defn error-handler [{:keys [status status-text]}]
  (println (str "AJAX ERROR: " status " " status-text)))

(defn no-handler [response])

;; --------------------------- Controls -------------------------------

(def helm-control
  "<input type='range' min='-100' max='100' step='10' value='0'
  onchange='javascript:view3d.core.helm(this.value)'>")

(defn helm [val]
  (let [cmd (cond
              (<= -20 val 20) "steady"
              (> val 80) "hard-a-starboard"
              (> val 20) "starboard"
              (< val -80) "hard-a-port"
              (< val -20) "port")
        url (str URL-CMD "?helm=" cmd)]
    (GET url {:handler no-handler
              :error-handler error-handler})))

(def throttle-control
  "<input type='test' value='0' style='width:40px'
  onchange='javascript:view3d.core.throttle(this.value)'>")

(defn throttle [val]
  (let [url (str URL-CMD "?throttle=" val)]
    (GET url {:handler no-handler
              :error-handler error-handler})))

;; ----------------------------- Init ---------------------------------

(defn init []
  (let [x 1]
    (set-html! "helm-title" "helm")
    (set-html! "helm" helm-control)
    (set-html! "throttle-title" "throttle")
    (set-html! "throttle" throttle-control)))

;; ----------------------------- Start ---------------------------------

(set! (.-onload js/window) (init))
