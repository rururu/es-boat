(as:WhatIsAstern_Isl 0
(Answer accum ?acc)
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
	((not= ?sub "behind the island")
	 (not= ?sub "before the island")))
=>
(pro.server/pump-in-ans 
  (as/ans-islands @?acc ?sub)))

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
(pro.server/pump-in-ans 
  (as/ans-islands @?acc 
    (str "before the island " ?tit)))
(retract ?q))

(as:UpdatePolarCoordObject 1
?no (NamedObject coord ?oco
	time ?tim1)
(Question coord ?bco
	course ?crs
	time ?tim2
	((vector? ?bco)
	 (> ?tim2 ?tim1)))
=>
(let [bea (geo.calc/bear-deg ?bco ?oco)
       dis (geo.calc/distance-nm ?bco ?oco)
       sec (geo.calc/sector bea ?crs)
       sid (geo.calc/side sec)]
  (modify ?no polar [bea dis]
	side sid
	time ?tim2)))

(as:UpdatePolarCoordIsland 1
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

(as:WhatIsAhead_Isl 0
(Answer accum ?acc)
(Question predicate "what-is"
	subject "ahead")
(Island title ?tit side "AHEAD"
	polar ?pol)
=>
(vswap! ?acc conj [?tit (second ?pol)]))

(as:WhatIsStarBow_Isl 0
(Answer accum ?acc)
(Question predicate "what-is"
	subject "on the starboard bow")
(Island title ?tit side "STAR-BOW"
	polar ?pol)
=>
(vswap! ?acc conj [?tit (second ?pol)]))

(as:WhatIsPortBow_Isl 0
(Answer accum ?acc)
(Question predicate "what-is"
	subject "on the port bow")
(Island title ?tit side "PORT-BOW"
	polar ?pol)
=>
(vswap! ?acc conj [?tit (second ?pol)]))

(as:WhatIsStarBeam_Isl 0
(Answer accum ?acc)
(Question predicate "what-is"
	subject "on the starboard beam")
(Island title ?tit side "STAR-BEAM"
	polar ?pol)
=>
(vswap! ?acc conj [?tit (second ?pol)]))

(as:WhatIsPortBeam_Isl 0
(Answer accum ?acc)
(Question predicate "what-is"
	subject "on the port beam")
(Island title ?tit side "PORT-BEAM"
	polar ?pol)
=>
(vswap! ?acc conj [?tit (second ?pol)]))

(as:WhatIsStarAbaft_Isl 0
(Answer accum ?acc)
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
(pro.server/pump-in-ans 
  (as/ans-islands @?acc 
    (str "behind the island " ?tit)))
(retract ?q))

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

(as:WhatIsAhead_Obj 0
(Answer2 place-list ?pll
	natural-list ?nal
	amenity-list ?aml)
(Question predicate "what-is"
	subject "ahead")
(NamedObject title ?tit 
	side "AHEAD"
	polar ?pol
	place ?pla
	natural ?nat
	amenity ?ame
	aeroway ?aer
	highway ?hig
	waterway ?wat
	tourism ?tou)
=>
(cond
  (some? ?pla) (vswap! ?pll conj [?pla ?tit (second ?pol)])
  (some? ?nat) (vswap! ?nal conj [?nat ?tit (second ?pol)])
  (some? ?ame) (vswap! ?aml conj [?ame ?tit (second ?pol)])
  (some? ?aer) (vswap! ?aml conj [?aer ?tit (second ?pol)])
  (some? ?hig) (vswap! ?aml conj [?hig ?tit (second ?pol)])
  (some? ?wat) (vswap! ?aml conj [?wat ?tit (second ?pol)])
  (some? ?tou) (vswap! ?aml conj [?tou ?tit (second ?pol)])))

(as:WhatIsAstern_Obj 0
(Answer2 place-list ?pll
	natural-list ?nal
	amenity-list ?aml)
(Question predicate "what-is"
	subject "astern")
(NamedObject title ?tit 
	side "ASTERN"
	polar ?pol
	place ?pla
	natural ?nat
	amenity ?ame)
=>
(cond
  (some? ?pla) (vswap! ?pll conj [?pla ?tit (second ?pol)])
  (some? ?nat) (vswap! ?nal conj [?nat ?tit (second ?pol)])
  (some? ?ame) (vswap! ?aml conj [?ame ?tit (second ?pol)])
  (some? ?aer) (vswap! ?aml conj [?aer ?tit (second ?pol)])
  (some? ?hig) (vswap! ?aml conj [?hig ?tit (second ?pol)])
  (some? ?wat) (vswap! ?aml conj [?wat ?tit (second ?pol)])
  (some? ?tou) (vswap! ?aml conj [?tou ?tit (second ?pol)])))

(as:WhatIsPortAbaft_Isl 0
(Answer accum ?acc)
(Question predicate "what-is"
	subject "abaft the port beam")
(Island title ?tit side "PORT-ABAFT"
	polar ?pol)
=>
(vswap! ?acc conj [?tit (second ?pol)]))

(as:WhatIsPortBeam_Obj 0
(Answer2 place-list ?pll
	natural-list ?nal
	amenity-list ?aml)
(Question predicate "what-is"
	subject "on the port beam")
(NamedObject title ?tit 
	side "PORT-BEAM"
	polar ?pol
	place ?pla
	natural ?nat
	amenity ?ame)
=>
(cond
  (some? ?pla) (vswap! ?pll conj [?pla ?tit (second ?pol)])
  (some? ?nat) (vswap! ?nal conj [?nat ?tit (second ?pol)])
  (some? ?ame) (vswap! ?aml conj [?ame ?tit (second ?pol)])
  (some? ?aer) (vswap! ?aml conj [?aer ?tit (second ?pol)])
  (some? ?hig) (vswap! ?aml conj [?hig ?tit (second ?pol)])
  (some? ?wat) (vswap! ?aml conj [?wat ?tit (second ?pol)])
  (some? ?tou) (vswap! ?aml conj [?tou ?tit (second ?pol)])))

(as:WhatIsPortBow_Obj 0
(Answer2 place-list ?pll
	natural-list ?nal
	amenity-list ?aml)
(Question predicate "what-is"
	subject "on the port bow")
(NamedObject title ?tit 
	side "PORT-BOW"
	polar ?pol
	place ?pla
	natural ?nat
	amenity ?ame)
=>
(cond
  (some? ?pla) (vswap! ?pll conj [?pla ?tit (second ?pol)])
  (some? ?nat) (vswap! ?nal conj [?nat ?tit (second ?pol)])
  (some? ?ame) (vswap! ?aml conj [?ame ?tit (second ?pol)])
  (some? ?aer) (vswap! ?aml conj [?aer ?tit (second ?pol)])
  (some? ?hig) (vswap! ?aml conj [?hig ?tit (second ?pol)])
  (some? ?wat) (vswap! ?aml conj [?wat ?tit (second ?pol)])
  (some? ?tou) (vswap! ?aml conj [?tou ?tit (second ?pol)])))

(as:WhatIsStarAbaft_Obj 0
(Answer2 place-list ?pll
	natural-list ?nal
	amenity-list ?aml)
(Question predicate "what-is"
	subject "abaft the starboard beam")
(NamedObject title ?tit 
	side "STAR-ABAFT"
	polar ?pol
	place ?pla
	natural ?nat
	amenity ?ame)
=>
(cond
  (some? ?pla) (vswap! ?pll conj [?pla ?tit (second ?pol)])
  (some? ?nat) (vswap! ?nal conj [?nat ?tit (second ?pol)])
  (some? ?ame) (vswap! ?aml conj [?ame ?tit (second ?pol)])
  (some? ?aer) (vswap! ?aml conj [?aer ?tit (second ?pol)])
  (some? ?hig) (vswap! ?aml conj [?hig ?tit (second ?pol)])
  (some? ?wat) (vswap! ?aml conj [?wat ?tit (second ?pol)])
  (some? ?tou) (vswap! ?aml conj [?tou ?tit (second ?pol)])))

(as:WhatIsStarBeam_Obj 0
(Answer2 place-list ?pll
	natural-list ?nal
	amenity-list ?aml)
(Question predicate "what-is"
	subject "on the starboard beam")
(NamedObject title ?tit 
	side "STAR-BEAM"
	polar ?pol
	place ?pla
	natural ?nat
	amenity ?ame)
=>
(cond
  (some? ?pla) (vswap! ?pll conj [?pla ?tit (second ?pol)])
  (some? ?nat) (vswap! ?nal conj [?nat ?tit (second ?pol)])
  (some? ?ame) (vswap! ?aml conj [?ame ?tit (second ?pol)])
  (some? ?aer) (vswap! ?aml conj [?aer ?tit (second ?pol)])
  (some? ?hig) (vswap! ?aml conj [?hig ?tit (second ?pol)])
  (some? ?wat) (vswap! ?aml conj [?wat ?tit (second ?pol)])
  (some? ?tou) (vswap! ?aml conj [?tou ?tit (second ?pol)])))

(as:WhatIsStarBow_Obj 0
(Answer2 place-list ?pll
	natural-list ?nal
	amenity-list ?aml)
(Question predicate "what-is"
	subject "on the starboard bow")
(NamedObject title ?tit 
	side "STAR-BOW"
	polar ?pol
	place ?pla
	natural ?nat
	amenity ?ame)
=>
(cond
  (some? ?pla) (vswap! ?pll conj [?pla ?tit (second ?pol)])
  (some? ?nat) (vswap! ?nal conj [?nat ?tit (second ?pol)])
  (some? ?ame) (vswap! ?aml conj [?ame ?tit (second ?pol)])
  (some? ?aer) (vswap! ?aml conj [?aer ?tit (second ?pol)])
  (some? ?hig) (vswap! ?aml conj [?hig ?tit (second ?pol)])
  (some? ?wat) (vswap! ?aml conj [?wat ?tit (second ?pol)])
  (some? ?tou) (vswap! ?aml conj [?tou ?tit (second ?pol)])))

(as:InitAnswer 1
?a (Answer time ?tim1)
(Question time ?tim2
	(> ?tim2 ?tim1))
=>
(modify ?a accum (volatile! [])
	time ?tim2))

(as:AnswerNearbyObjects -1
(Answer2 place-list ?pll
	natural-list ?nal
	amenity-list ?aml
	aeroway-list ?ael
	highway-list ?hil
	waterway-list ?wal
	tourism-list ?tol)
?q (Question predicate "nearby-objects"
	subject ?sub)
=>
(condp = ?sub
  "place" (pro.server/pump-in-ans (sort @?pll))
  "natural" (pro.server/pump-in-ans (sort @?nal))
  "amenity" (pro.server/pump-in-ans (sort @?aml)))
  "aeroway" (pro.server/pump-in-ans (sort @?ael)))
  "highway" (pro.server/pump-in-ans (sort @?hil)))
  "waterway" (pro.server/pump-in-ans (sort @?wal)))
  "tourism" (pro.server/pump-in-ans (sort @?tol)))
(retract ?q))

(as:AnswerObjectsOnSide -2
(Answer2 place-list ?pll
	natural-list ?nal
	amenity-list ?aml
	aeroway-list ?ael
	highway-list ?hil
	waterway-list ?wal
	tourism-list ?tol)
?q (Question predicate "what-is"
	subject ?sub)
=>
(pro.server/pump-in-ans 
  (as/ans-objects @?pll @?nal @?aml @?ael @?hil @?wal @?tol ?sub))
(retract ?q))

(as:RetractObsoleteObjects 2
?no (NamedObject time ?tim1)
(OSMData time ?tim2
	(> ?tim2 ?tim1))
=>
(retract ?no))

(as:AssertNearbyObjects 1
?no (NearbyObjects time ?tim1)
(Question coord ?bco
	course ?crs)
(OSMData volume ?vol 
	time ?tim2
	((> ?vol 0)
	 (vector? ?bco)
	 (> ?tim2 ?tim1)))
=>
(let [nos (osm.data/filter-k "name" @osm.data/DATA)
       nos (osm.data/filter-kv-not "place" "island" nos)
       pls (osm.data/filter-k "place" nos)
       nls (osm.data/filter-k "natural" nos)
       ams (osm.data/filter-k "amenity" nos)
       aes (osm.data/filter-k "aeroway" nos)
       his (osm.data/filter-k "highway" nos)
       was (osm.data/filter-k "waterway" nos)
       tos (osm.data/filter-k "tourism" nos)]
  (modify ?no place-list (vec (map #(get % "name") pls))
	natural-list (vec (map #(get % "name") nls))
	amenity-list (vec (map #(get % "name") ams))
	aeroway-list (vec (map #(get % "name") aes))
	highway-list (vec (map #(get % "name") his))
	waterway-list (vec (map #(get % "name") was))
	tourism-list (vec (map #(get % "name") tos))
	time ?tim2)
  (doseq [x pls]
    (asser NamedObject title (get x "name") coord [(get x "lat") (get x "lon")]
	place (get x "place") time ?tim2))
  (doseq [x nls]
    (asser NamedObject title (get x "name") coord [(get x "lat") (get x "lon")]
	natural (get x "natural") time ?tim2))
  (doseq [x ams]
    (asser NamedObject title (get x "name") coord [(get x "lat") (get x "lon")]
	amenity (get x "amenity") time ?tim2)))
  (doseq [x aes]
    (asser NamedObject title (get x "name") coord [(get x "lat") (get x "lon")]
	aeroway (get x "aeroway") time ?tim2)))
  (doseq [x his]
    (asser NamedObject title (get x "name") coord [(get x "lat") (get x "lon")]
	highway (get x "highway") time ?tim2)))
  (doseq [x was]
    (asser NamedObject title (get x "name") coord [(get x "lat") (get x "lon")]
	waterway (get x "waterway") time ?tim2)))
  (doseq [x tos]
    (asser NamedObject title (get x "name") coord [(get x "lat") (get x "lon")]
	tourism (get x "tourism") time ?tim2))))

(as:WhatIsPortAbaft_Obj 0
(Answer2 place-list ?pll
	natural-list ?nal
	amenity-list ?aml)
(Question predicate "what-is"
	subject "abaft the port beam")
(NamedObject title ?tit 
	side "PORT-ABAFT"
	polar ?pol
	place ?pla
	natural ?nat
	amenity ?ame)
=>
(cond
  (some? ?pla) (vswap! ?pll conj [?pla ?tit (second ?pol)])
  (some? ?nat) (vswap! ?nal conj [?nat ?tit (second ?pol)])
  (some? ?ame) (vswap! ?aml conj [?ame ?tit (second ?pol)])
  (some? ?aer) (vswap! ?aml conj [?aer ?tit (second ?pol)])
  (some? ?hig) (vswap! ?aml conj [?hig ?tit (second ?pol)])
  (some? ?wat) (vswap! ?aml conj [?wat ?tit (second ?pol)])
  (some? ?tou) (vswap! ?aml conj [?tou ?tit (second ?pol)])))

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

(as:InitAnswer2 1
?a2 (Answer2 time ?tim1)
(Question time ?tim2
	(> ?tim2 ?tim1))
=>
(modify ?a2 time ?tim2
	place-list (volatile! [])
	natural-list (volatile! [])
	amenity-list (volatile! [])
	aeroway-list (volatile! [])
	highway-list (volatile! [])
	waterway-list (volatile! [])
	tourism-list (volatile! [])))

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

