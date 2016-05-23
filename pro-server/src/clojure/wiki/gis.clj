(ns wiki.gis
(:use
  protege.core
  geo.names)
(:import
  javax.swing.JOptionPane))

(defn request-lang [sv]
  (let [spl (.split sv "-")]
  (aget spl 1)))

(defn article-from-map [mp]
  (if-let [tit (mp "title")]
    (map-into-inst mp (foc "WikiArticle" "title" tit))))

(defn submit-bbx [hm inst]
  (let [mp (into {} hm)
       max (mp "max-responses")
       lang (request-lang (mp "language"))
       [west south east north] (seq (svs (mp "bbx") "wsen"))]
  (if-let [resp (call-wiki-bbx north west south east max lang)]
     (ssvs inst "responses" (map article-from-map resp)) )))

(defn submit-search [hm inst]
  (let [mp (into {} hm)
       max (mp "max-responses")
       lang (request-lang (mp "language"))
       text (mp "text")]
  (if-let [resp (call-wiki-search text max lang)]
     (ssvs inst "responses" (map article-from-map resp)) )))

(defn get-bbx-center [bbx-ins]
  ;; returns [lat lon]
(let [[w s e n] (seq (svs bbx-ins "wsen"))]
  [(float (/ (+ s n) 2)) (float (/ (+ w e) 2))]))

(defn submit-nearby [hm inst]
  (let [mp (into {} hm)
       max (mp "max-responses")
       lang (request-lang (mp "language"))
       radius-km (mp "radius-km")
       [lat lon] (get-bbx-center (mp "bbx"))]
  (if-let [resp (call-wiki-nearby lat lon radius-km max lang)]
     (ssvs inst "responses" (map article-from-map resp)) )))

(defn filter-coords-exist [inss slat slon]
  ;; filter instances with nonempty coords
(filter #(and (sv % slat) (sv % slon)) list))

(defn coords-from-instances [cins slat slon]
  ;; Collect coords from list of instances for given slot names
(map #(vector (sv % slat) (sv % slon)) list))

(defn bbx-of-list
  ;; crds = ([lat lon]..)
([crds title]
  ;; return instance of BBX class
  (if-let [wsen (bbx-of-list  crds)]
    (let [ins (crin "BBX")]
       (ssvs ins "wsen" wsen))))
([crds]
  ;; return [west south east north] or nil
  (try
    (letfn [(apl [max first]
	(apply max (map read-string (map first list))))]
      [(apl min second) (apl min first) (apl max second) (apl max first)])
  (catch Exception e
     (println [:bbx-of-list list :exception e])
     nil))))

(defn submit-rss [hm inst]
  (let [mp (into {} hm)
       sel (selection mp "feedURL")]
  (if (seq sel)
      (if-let [resp (call-geonames-rss (str (first sel)))]
          (let [inss (map #(map-into-inst % (crin "GeoRSSItem")) resp)
                 cins (filter-coords-exist inss "geo:lat" "geo:long")
                 crds (coords-from-instances cins "geo:lat" "geo:long")
                 bbx (if (seq crds) (bbx-of-list crds))]
             (ssvs inst "georss_items" inss)
             (ssvs inst "bbx" inss)) ))))

(defn open-site [hm inst]
  (let [mp (into {} hm)
       url (or (mp "wikipediaUrl") (mp "guid"))
       wss (cls-instances "WebSite")]
  (let [ws (if (seq wss)
                  (first wss)
                  (crin "WebSite"))]
    (ssv ws "webpage" url)
    (doto (.show *prj* ws)
       (.pack)
       (.show)) )))

(defn clear-articles [hm inst]
  (let [ans (JOptionPane/showConfirmDialog nil "Are you shure?")]
  (if (= ans (JOptionPane/YES_OPTION))
      (doall (map delin (cls-instances "WikiArticle"))) )))

(defn clear-rss [hm inst]
  (let [ans (JOptionPane/showConfirmDialog nil "Are you shure?")]
  (if (= ans (JOptionPane/YES_OPTION))
      (doall (map delin (cls-instances "GeoRSSItem"))) )))

