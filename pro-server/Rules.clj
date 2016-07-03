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

(as:WhatInteresting 0
?q (Question coord ?crd
	predicate "what"
	subject "interesting")
=>
(pro.server/pump-in-ans (as/search-nearby-things ?crd))
(retract ?q))

(as:AnswerNearbyObjects -1
(Answer accum ?acc)
?q (Question predicate "nearby-objects")
=>
(pro.server/pump-in-ans (sort @?acc))
(retract ?q))

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
(Island title ?tit side ?sid
	polar ?pol
	coord ?crd)
=>
(let [[bea dis] ?pol
       ans (as/where-answer ?tit dis ?sid])]
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
	amenity ?ame)
=>
(cond
  (some? ?pla) (vswap! ?pll conj [?pla ?tit (second ?pol)])
  (some? ?nat) (vswap! ?nal conj [?nat ?tit (second ?pol)])
  (some? ?ame) (vswap! ?aml conj [?ame ?tit (second ?pol)])))

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
  (some? ?ame) (vswap! ?aml conj [?ame ?tit (second ?pol)])))

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
  (some? ?ame) (vswap! ?aml conj [?ame ?tit (second ?pol)])))

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
  (some? ?ame) (vswap! ?aml conj [?ame ?tit (second ?pol)])))

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
  (some? ?ame) (vswap! ?aml conj [?ame ?tit (second ?pol)])))

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
  (some? ?ame) (vswap! ?aml conj [?ame ?tit (second ?pol)])))

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
  (some? ?ame) (vswap! ?aml conj [?ame ?tit (second ?pol)])))

(as:InitAnswer 1
?a (Answer time ?tim1)
(Question time ?tim2
	(> ?tim2 ?tim1))
=>
(modify ?a accum (volatile! [])
	time ?tim2))

(as:AnswerNearbyTypes -1
(Answer2 place-list ?pll
	natural-list ?nal
	amenity-list ?aml)
?q (Question predicate "nearby-types")
=>
(let [pts (map first @?pll)
       nts (map first @?nal)
       ats (map first @?aml)
       all (set (concat pts nts ats))]
  (pro.server/pump-in-ans (sort all)))
(retract ?q))

(as:AboutThing 0
?q (Question predicate "about"
	subject "thing"
	subject-value ?sval)
=>
(pro.server/pump-in-ans (as/about-thing ?sval))
(retract ?q))

(as:AboutIsland 0
?q (Question coord ?crd
	predicate "about"
	subject "island"
	object ?tit)
=>
(pro.server/pump-in-ans (if (or (.contains ?tit "island")
		   (.contains ?tit "Island"))
		(as/text-search ?tit ?crd)
		(as/text-search (str ?tit " Island") ?crd)))
(retract ?q))

(as:AboutObject 0
?q (Question coord ?crd
	predicate "about"
	subject ?sub
	subject-value ?suv
	((not= ?sub "thing")
	 (not= ?sub "island")))
=>
(pro.server/pump-in-ans (as/text-search ?suv ?crd))
(retract ?q))

(as:AnswerObjectsOnSide -2
(Answer2 place-list ?pll
	natural-list ?nal
	amenity-list ?aml)
?q (Question predicate "what-is"
	subject ?sub)
=>
(pro.server/pump-in-ans 
  (as/ans-objects @?pll @?nal @?aml ?sub))
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
       ams (osm.data/filter-k "amenity" nos)]
  (modify ?no place-list (vec (map #(get % "name") pls))
	natural-list (vec (map #(get % "name") nls))
	amenity-list (vec (map #(get % "name") ams))
	time ?tim2)
  (doseq [x pls]
    (asser NamedObject title (get x "name") coord [(get x "lat") (get x "lon")]
	place (get x "place") time ?tim2))
  (doseq [x nls]
    (asser NamedObject title (get x "name") coord [(get x "lat") (get x "lon")]
	natural (get x "natural") time ?tim2))
  (doseq [x ams]
    (asser NamedObject title (get x "name") coord [(get x "lat") (get x "lon")]
	amenity (get x "amenity") time ?tim2))))

(as:WhereIsObject 0
(OSMData radius ?rad)
?q (Question predicate "where-is"
	subject ?sub
	subject-value ?suv)
(NamedObject title ?suv
	side ?sid
	polar ?pol
	coord ?crd
	((not= ?sub "thing")
	 (not= ?sub "island")))
=>
(let [[bea dis] ?pol
       ans (as/where-answer (str ?sub " " ?suv) dis ?sid])]
  (pro.server/pump-in-ans ans)
  (cesium.core/point-out (str ?sub " " ?suv) ?crd dis ?rad))
(retract ?q))

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
  (some? ?ame) (vswap! ?aml conj [?ame ?tit (second ?pol)])))

(as:Weather 0
?q (Question coord ?crd
	predicate "what-is"
	subject "weather")
=>
(pro.server/pump-in-ans (as/weather ?crd))
(retract ?q))

(as:NearbyTypes 0
?a (Answer2 place-list ?pll
	natural-list ?nal
	amenity-list ?aml)
(Question predicate "nearby-types")
(NamedObject title ?tit
	place ?pla
	natural ?nat
	amenity ?ame)
=>
(cond
  (string? ?nat) (vswap! ?nal conj [?nat ?tit])
  (string? ?pla) (vswap! ?pll conj [?pla ?tit])
  (string? ?ame) (vswap! ?aml conj [?ame ?tit])))

(as:NearbyThings 0
?q (Question coord ?crd
	predicate "nearby-things")
=>
(pro.server/pump-in-ans (as/nearby-things ?crd))
(retract ?q))

(as:WhereIsThing 0
(OSMData radius ?rad)
?q (Question predicate "where-is"
	subject "thing"
	object ?tit
	coord ?crd
	course ?crs)
=>
(if-let [tcr (as/thing-coord ?tit)]
  (let [dis (geo.calc/distance-nm ?crd tcr)
         bea (geo.calc/bear-deg ?crd tcr)
         sec (geo.calc/sector bea ?crs)
         sid (geo.calc/side sec)
         ans (as/where-answer ?tit dis sid])]
    (pro.server/pump-in-ans ans)
    (cesium.core/point-out ?tit ?crd dis ?rad))
  (pro.server/pump-in-ans (str "No coordinates for " ?tit)))
(retract ?q))

(as:NearbyObjects 0
?a (Answer accum ?acc)
(Question predicate "nearby-objects"
	subject ?sub)
(NamedObject title ?tit
	place ?pla
	natural ?nat
	amenity ?ame)
=>
(if (or (= ?sub ?pla)
         (= ?sub ?nat)
         (= ?sub ?ame))
  (vswap! ?acc conj ?tit)))

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
	amenity-list (volatile! [])))

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

