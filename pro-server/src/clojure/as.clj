(ns as
(:use protege.core))

(def LAST-NEAR-SRCH nil)
(def TIMEOUT 15000)
(defmacro with-timeout [msec & body]
  `(let [f# (future (do ~@body))
         v# (gensym)
         result# (deref f# ~msec v#)]
    (if (= v# result#)
      (do
        (println :FUTURE-CANCELLING)
        (future-cancel f#)
        (println :FUTURE-CANCELLED)
        nil)
      result#)))

(defn current-time []
  (System/currentTimeMillis))

(defn tit-dis [[tit dis]]
  (str tit (format " (%.1f nm)" dis)))

(defn ans-islands [accum subject]
  (let [acc (sort-by second accum)
       cnt (count acc)]
  (condp > cnt
    1 (str "No islands in sight " subject)
    2 (str "Island " (tit-dis (first acc)) " is " subject)
    6 (str "Islands: " (apply str (interpose ", " (map tit-dis acc))) " are " subject)
    (str "Islands: " (apply str (interpose ", " (map tit-dis (take 5 acc)))) " and more " (- cnt 5) " islands are " subject))))

(defn kind-tit-dis [[kind tit dis]]
  (str kind " " tit (format " (%.1f nm)" dis)))

(defn ans-objects [pll nal aml subject]
  (letfn [(anso [acc cnt pfx]
	(condp > cnt
	  1 ""
	  2 (str pfx " object " (kind-tit-dis (first acc)) ",<br>")
	  6 (str pfx " objects: " (apply str (interpose ", " (map kind-tit-dis acc))) ",<br>")
	  (str pfx " objects: " (apply str (interpose ", " (map kind-tit-dis (take 5 acc)))) " and more " (- cnt 5) ",<br>")))]
  (let [pll (sort-by second pll) cpl (count pll)
          nal (sort-by second nal) cnl (count nal)
          aml (sort-by second aml) cal (count aml)]
    (str
      (if (= (+ cpl cnl cal) 0)
        "No objects in sight "
        (str (anso pll cpl "Place")
              (anso nal cnl "Natural")
              (anso aml cal "Amenity")))
      "are " subject))))

(defn rough-distance [lat1 lon1 lat2 lon2]
  (letfn [(smround [n]
	(/ (float (Math/round (* n 10))) 10))]
(let [dlat (- lat1 lat2)
        dlon (- lon1 lon2)
        lad (* (if (>= dlat 0) dlat (- 0 dlat)) 60)
        lod (* (if (>= dlon 0) dlon (- 0 dlon)) 60)
        dia (Math/sqrt (+ (* lad lad) (* lod lod)))]
   (if (< dia 1) (smround dia) (Math/round dia)))
))

(defn weather [[lat lon]]
  (if-let [rsp (geo.names/call-geonames-weather lat lon)]
  (let [lat2 (read-string (rsp "lat"))
          lon2 (read-string (rsp "lng"))
          bear (geo.names/bearing lat lon lat2 lon2)
          dir (geo.names/direction bear)
          dis (rough-distance lat lon lat2 lon2)
          name (rsp "stationName")
          wcd (rsp "weatherCondition")
          hym (rsp "hymidity")
          tmp (rsp "temperature")
          wind (rsp "windDirection")
          bwnd (if (some? wind)
	(let [b (+ (read-string wind) 180)] (if (> b 360) (- b 360) b)))
          win (if (some? bwnd)
	(geo.names/direction bwnd)
	"n/a")
          wins (rsp "windSpeed")
          tim (rsp "observationTime")
          loc (str dis " miles to " dir " from here")]
    (str name " Weather Station<br>"
	"location: " loc "<br>"
	"observation time: " tim "<br>"
	"weather conditions: " wcd "<br>"
	"temperature: " tmp " Celsius<br>"
	"hymidity: " hym "<br>"
	"wind: " win ", " wins " Knots"))
  "I can not get a weather information"))

(defn search-nearby-things [[lat lon]]
  (if-let [ans (fainst (cls-instances "NearbySearch") nil)]
  (do (def LAST-NEAR-SRCH (wiki.gis/submit-nearby ans lat lon))
    (let [rr (svs LAST-NEAR-SRCH "responses")]
      (sort (map #(sv % "title") rr))))
  []))

(defn nearby-things [crd]
  (if-let [nts (and LAST-NEAR-SRCH 
	(seq (svs LAST-NEAR-SRCH "responses")))]
  (sort (map #(sv % "title") nts))
  (search-nearby-things crd)))

(defn extract [ins]
  (let [ell "(...)"
       sum (sv ins "summary")
       img (sv ins "thumbnailImg")
       lnk (sv ins "wikipediaUrl")
       sum (if (and (not (empty? lnk)) (.contains sum ell))
	(.replace sum ell (str "<a href=\"" lnk "\">" ell "</a>"))
	sum)]
  (str (or sum "No summary")
        (or (and img (str "<br><img src=\"" img "\">")) "")
        "<br>")))

(defn about-thing [val]
  (if-let [flt  (seq (filter #(= (sv % "title") val) (svs LAST-NEAR-SRCH "responses")))]
  (extract (first flt))
  "Not found"))

(defn near [mp [lat lon] rad]
  (if-let [lat2 (get mp "lat")]
  (if-let [lon2 (get mp "lng")]
    (let [lat2 (read-string lat2)
           lon2 (read-string lon2)
           rdg (float (/ rad 60))]
      (and (number? lat2)
        (number? lon2)
        (< (Math/abs (- lat lat2)) rdg)
        (< (Math/abs (- lon lon2)) rdg)) ) )))

(defn text-search [txt crd]
  (println [:FULL-TEXT-SEARCH txt crd])
(if-let [fsi (fainst (cls-instances "FulltextSearch") nil)]
  (if-let [wsr (with-timeout TIMEOUT 
	(geo.names/call-wiki-search txt 
	  (sv fsi "max-responses")  
	  (wiki.gis/request-lang (sv fsi  "language"))))]
    (let [_ (println [:TOTAL-FOUND (count wsr)])
           _ (ssv fsi "text" txt)
           _ (ssvs fsi "responses" 
	(if-let [wsf (filter #(near % crd 36) wsr)]
                          (filter some? (map wiki.gis/article-from-map wsf))
	  []))
           rr (svs fsi "responses")
           _ (println [:NEAR (count rr)])
           ss (map extract rr)
          resp (apply str ss)]
      (if (empty? resp)
        (str "No info about this particular " txt)
        resp))
      "Timeout")
    "Not found"))

(defn nl-side [sid]
  (condp = sid
  "AHEAD"          "ahead"
  "STAR-BOW"    "on the starboard bow"
  "STAR-BEAM"   "on the starboard beam"
  "STAR-ABAFT" "abaft the starboard beam"
  "ASTERN"         "astern"
  "PORT-ABAFT" "abaft the port beam"
  "PORT-BEAM"  "on the port beam"
  "PORT-BOW"   "on the port bow"))

(defn thing-coord [tit]
  (if-let [flt  (seq (filter #(= (sv % "title") tit) (svs LAST-NEAR-SRCH "responses")))]
  [(read-string (sv (first flt) "lat"))
   (read-string (sv (first flt) "lng"))]))

(defn where-answer [tit dis sid]
  (str tit " is in " (format "%.1f miles" dis) " " (as/nl-side sid)))

