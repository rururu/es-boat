(ns osm.data
(:require
   [clojure.xml :as x]
   [async.proc :as ap]
   [rete.core :as rete]))

(def OSM-TIO 240000)
(def centrad (volatile! [0 0 0]))
(def osm-status (volatile! "START"))
(defn osm-api-url [bbx]
  (let [[w s e n] bbx] 
  (str "http://api.openstreetmap.org/api/0.6/map?bbox=" w "," s "," e "," n)))

(defn tag-tags-namcor [tag]
  (let [cnt (:content tag)
       tt (filter #(= (:tag %) :tag) cnt)
       m {"id" (:id (:attrs tag))
             "lat" (read-string (:lat (:attrs tag)))
             "lon" (read-string (:lon (:attrs tag)))}
       ml (cons m (map #(assoc {} (:k (:attrs %)) (:v (:attrs %))) tt))]
  (apply merge ml)))

(defn osm-data [bbx]
  (try
  (let [curl (osm-api-url bbx)
         xml (x/parse curl)
         cnt (:content xml)
         nods (filter #(= (:tag %) :node) cnt)
         nnn (filter #(some? (:content %)) nods)]
      (map tag-tags-namcor nnn))
  (catch Exception e
    (println e)
    nil)))

(defn filter-kv [k v data]
  (filter #(= (get % k) v) data))

(defn filter-k? [k data]
  (filter #(some? (get % k)) data))

(defn tags [data]
  (sort (set (mapcat keys data))))

(defn receive-data []
  (let [[lat lon rad] @centrad
       d (/ rad 60)
       bbx [(- lon d) (- lat d) (+ lon d) (+ lat d)]
       osm (osm-data bbx)
       tim (java.util.Date.)]
  (println [:OSM-DATA (count osm) tim])
  (when (not (empty? osm))
    (rete/assert-frame ['OSM 'data osm 'time tim])
    (rete/fire))))

(defn start-data-receive []
  (ap/start-proc osm-status #(receive-data) OSM-TIO nil)
(println "OSM data receiving started.."))

(defn stop-data-receive []
  (ap/stop-proc osm-status)
(println "OSM data receiving stopped."))

