(as:WhatIsAstern 0
?a (Answer accum ?acc)
(Question predicate "what-is"
	subject "astern")
(Island title ?tit side "ASTERN"
	polar ?pol)
=>
(vswap! ?acc conj [?tit (second ?pol)]))

(as:AnswerIslandsOnSide -1
(Answer accum ?acc)
?q (Question predicate "what-is"
	subject ?sub
	(not= ?sub "behind the island"))
=>
(pro.server/pump-in-ans (as/ans-islands @?acc ?sub))
(retract ?q))

(as:IslandsBefore 0
?a (Answer accum ?acc)
(Question predicate "what-is"
	subject "before the island"
	object ?tit1)
(Island sector ?sec
	title ?tit1
	polar ?pol1)
(Island sector ?sec
	title ?tit2
	polar ?pol2
	(> (second ?pol1)
	    (second ?pol2)))
=>
(vswap! ?acc conj [?tit2 (second ?pol2)]))

(as:AnswerIslandsBefore -1
(Answer accum ?acc)
?q (Question predicate "what-is"
	subject "before the island"
	object ?tit)
=>
(let [sub (str "before the island " ?tit)]
  (pro.server/pump-in-ans (as/ans-islands @?acc sub))
  (retract ?q)))

(as:UpdatePolarCoord 1
?i (Island coord ?ico
	time ?tim1)
(Question coord ?bco
	course ?crs
	time ?tim2
	((vector? ?bco)
	 (> ?tim2 ?tim1)))
=>
(let [bea (geo.calc/bear-deg ?bco ?ico)
       dis (geo.calc/distance-nm ?bco ?ico)
       sec (geo.calc/sector bea ?crs)
       sid (geo.calc/side sec)]
  (modify ?i polar [bea dis]
	sector sec
	side sid
	time ?tim2)))

(as:WhatIsAhead 0
?a (Answer accum ?acc)
(Question predicate "what-is"
	subject "ahead")
(Island title ?tit side "AHEAD"
	polar ?pol)
=>
(vswap! ?acc conj [?tit (second ?pol)]))

(as:WhatIsStarBow 0
?a (Answer accum ?acc)
(Question predicate "what-is"
	subject "on the starboard bow")
(Island title ?tit side "STAR-BOW"
	polar ?pol)
=>
(vswap! ?acc conj [?tit (second ?pol)]))

(as:WhatIsPortBow 0
?a (Answer accum ?acc)
(Question predicate "what-is"
	subject "on the port bow")
(Island title ?tit side "PORT-BOW"
	polar ?pol)
=>
(vswap! ?acc conj [?tit (second ?pol)]))

(as:WhatIsStarBeam 0
?a (Answer accum ?acc)
(Question predicate "what-is"
	subject "on the starboard beam")
(Island title ?tit side "STAR-BEAM"
	polar ?pol)
=>
(vswap! ?acc conj [?tit (second ?pol)]))

(as:WhatIsPortBeam 0
?a (Answer accum ?acc)
(Question predicate "what-is"
	subject "on the port beam")
(Island title ?tit side "PORT-BEAM"
	polar ?pol)
=>
(vswap! ?acc conj [?tit (second ?pol)]))

(as:WhatIsStarAbaft 0
?a (Answer accum ?acc)
(Question predicate "what-is"
	subject "abaft the starboard beam")
(Island title ?tit side "STAR-ABAFT"
	polar ?pol)
=>
(vswap! ?acc conj [?tit (second ?pol)]))

(as:RetractObsoleteIsland 2
?i (Island time ?tim1)
(OSMData time ?tim2
	(> ?tim2 ?tim1))
=>
(retract ?i))

(MoveHistory 2
?h1 (History time ?tim1)
?h2 (History time ?tim2
	(.before ?tim1 ?tim2))
=>
(retract ?h1))

(as:AnswerIslandsBehind -1
(Answer accum ?acc)
?q (Question predicate "what-is"
	subject "behind the island"
	object ?tit)
=>
(let [sub (str "behind the island " ?tit)]
  (pro.server/pump-in-ans (as/ans-islands @?acc sub))
  (retract ?q)))

(as:RetractObsoleteBehind 2
?b (Behind time ?tim1)
(OSMData time ?tim2
	(> ?tim2 ?tim1))
=>
(retract ?b))

(as:AnswerNearbyIslands -1
(Answer accum ?acc)
?q (Question predicate "nearby-islands")
=>
(pro.server/pump-in-ans (sort @?acc))
(retract ?q))

(as:NearbyIslands 0
?a (Answer accum ?acc)
(Question predicate "nearby-islands")
(Island title ?tit)
=>
(vswap! ?acc conj ?tit))

(as:WhereIsIsland 0
(OSMData radius ?rad)
?q (Question predicate "where-is"
	subject "island"
	object ?tit)
(Island sector ?sec
	title ?tit
	side ?sid
	polar ?pol
	coord ?crd)
=>
(let [[bea dis] ?pol
       sid (condp = ?sid
               "AHEAD"          "ahead"
               "STAR-BOW"    "on the starboard bow"
               "STAR-BEAM"   "on the starboard beam"
               "STAR-ABAFT" "abaft the starboard beam"
               "ASTERN"         "astern"
               "PORT-ABAFT" "abaft the port beam"
               "PORT-BEAM"  "on the port beam"
               "PORT-BOW"   "on the port bow")
       ans (str ?tit " is in " (format "%.1f miles" dis) " " sid)]
  (pro.server/pump-in-ans ans)
  (cesium.core/point-out ?tit ?crd dis ?rad))
(retract ?q))

(as:WhatIsPortAbaft 0
?a (Answer accum ?acc)
(Question predicate "what-is"
	subject "abaft the port beam")
(Island title ?tit side "PORT-ABAFT"
	polar ?pol)
=>
(vswap! ?acc conj [?tit (second ?pol)]))

(as:IslandsBehind 0
?a (Answer accum ?acc)
(Question predicate "what-is"
	subject "behind the island"
	object ?tit1)
(Island sector ?sec
	title ?tit1
	polar ?pol1)
(Island sector ?sec
	title ?tit2
	polar ?pol2
	(< (second ?pol1)
	    (second ?pol2)))
=>
(vswap! ?acc conj [?tit2 (second ?pol2)]))

(as:InitAnswer 1
?a (Answer time ?tim1)
(Question time ?tim2
	(> ?tim2 ?tim1))
=>
(modify ?a accum (volatile! [])
	time ?tim2))

(as:CheckOSMData 2
?od (OSMData coord ?crd1
	radius ?rad
	volume ?vol 
	time ?tim1)
(Question coord ?crd2
	time ?tim2
	((> ?tim2 ?tim1)
	 [(= ?vol 0)
	  ((vector? ?crd1)
                           (vector? ?crd2) 
 	   (osm.data/obsolete ?crd1 ?crd2))]))
=>
(let [osm (osm.data/get-osm-data ?crd2 ?rad)
       cnt (count osm)]
  (println [:OSM-DATA cnt ?crd2 ?rad])
  (modify ?od coord ?crd2
	volume cnt 
	time (as/current-time))))

(as:AssertNearbyIslands 1
?ni (NearbyIslands time ?tim1)
(Question coord ?bco
	course ?crs)
(OSMData volume ?vol 
	time ?tim2
	((> ?vol 0)
	 (vector? ?bco)
	 (> ?tim2 ?tim1)))
=>
(let [ii (osm.data/filter-kv "place" "island" @osm.data/DATA)
       nn (map #(or (get % "name") "unk") ii)]
  (modify ?ni list (vec nn)
	time ?tim2)
  (doseq [i ii]
    (let [ico [(get i "lat") (get i "lon")]
           bea (geo.calc/bear-deg ?bco ico)
           dis (geo.calc/distance-nm ?bco ico)
           sec (geo.calc/sector bea ?crs)
           sid (geo.calc/side sec)]
      (asser Island title (get i "name")
	coord ico
	polar [bea dis]
	sector sec
	side sid
	time ?tim2)))))

