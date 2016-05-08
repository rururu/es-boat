(ns osm.data
(:require
   [clojure.xml :as x]
   [menu.item :as mi]
   [async.proc :as ap]
   [rete.core :as rete]))

(def DATA (volatile! []))
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

(defn filter-k [k data]
  (filter #(some? (get % k)) data))

(defn filter-kv [k v data]
  (filter #(= (get % k) v) data))

(defn filter-kv-not [k v data]
  (filter #(not= (get % k) v) data))

(defn tags [data]
  (sort (set (mapcat keys data))))

(defn get-osm-data [[lat lon] rad]
  (let [d (/ rad 60)
       bbx [(- lon d) (- lat d) (+ lon d) (+ lat d)]]
  (vreset! DATA (osm-data bbx))))

(defn obsolete [[lat1 lon1] [lat2 lon2]]
  (or (> (Math/abs (- lat1 lat2)) 0.02)
     (> (Math/abs (- lon1 lon2)) 0.02)))

