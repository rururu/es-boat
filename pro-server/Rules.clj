(as:UpdatePolarCoord 0
?isl (Island coord ?ico
	time ?tim1)
(Question coord ?bco
	time ?tim2
	((> ?tim2 ?tim1)
	 (not (empty? ?bco))))
=>
(modify ?isl polar [(geo.calc/bear-deg ?bco ?ico)
	      (geo.calc/distance-nm ?bco ?ico)]))

(as:RetractObsoleteIsland 1
?isl (Island title ?tit 
	time ?tim1)
(OSMData time ?tim2
	(> ?tim1 ?tim2))
=>
(retract ?isl))

(MoveHistory 2
?h1 (History time ?tim1)
?h2 (History time ?tim2
	(.before ?tim1 ?tim2))
=>
(retract ?h1))

(as:CheckOSMData 1
?osd (OSMData volume ?vol time ?tim1)
(Question time ?tim2
	((> ?tim2 ?tim1)
	 [(= ?vol 0)
	  (> (- ?tim2 ?tim1)
	       (osm.data/obsol-time))]))
=>
(let [osm (osm.data/get-osm-data)
       cnt (count osm)]
  (println [:OSM-DATA cnt osm.data/CENT-RAD])
  (modify ?osd volume cnt time (menu.item/current-time))))

(as:UpdateNearbyIslands 0
?ni (NearbyIslands time ?tim1)
(Question coord ?bco)
(OSMData volume ?vol 
	time ?tim2
	((> ?vol 0)
	 (> ?tim2 ?tim1)))
=>
(let [ii (osm.data/filter-kv "place" "island" @osm.data/DATA)
       nn (map #(or (get % "name") "unk") ii)]
  (modify ?ni list (vec nn)
	time ?tim2)
  (doseq [i ii]
    (let [ico [(get i "lat") (get i "lon")]
      (asser Island title (get i "name")
	coord crd
	polar (if (not (empty? ?bco))
	           [(geo.calc/bear-deg ?bco ico)
	            (geo.calc/distance-nm ?bco ico)]
	            [])
	time ?tim2))))

