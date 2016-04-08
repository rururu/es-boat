(ns view3d.core)

(enable-console-print!)

(def SRC-URL "http://localhost:4444/view3d/")
(def DAT-SRC nil)

(defn czmlProc [e]
  (let [data (.-data e)
        _ (println data)
        data (-> js/JSON (.parse data))]
    (.process DAT-SRC data)))

(defn flyProc [e])

(defn init []
  (let [viewer (js/Cesium.Viewer. "cesiumContainer")
        provid (js/Cesium.CesiumTerrainProvider.
                              #js{:url "//assets.agi.com/stk-terrain/world"
                                  :requestWaterMask false
                                  :requestVertexNormals false})
        _ (set! (.-terrainProvider viewer) provid)
        scene (.-scene viewer)
        _ (set! (.. scene -globe -depthTestAgainstTerrain) false)
        ellip (.. scene -globe -ellipsoid)
        entyt (.add (.-entities viewer) #js{:label #js{:show false}})
        handl (js/Cesium.ScreenSpaceEventHandler. (.-canvas scene))
        _ (def DAT-SRC (js/Cesium.CzmlDataSource.))
        _ (.add (.-dataSources viewer) DAT-SRC)
        sourc (js/EventSource. SRC-URL)]
    (.addEventListener sourc "czml" czmlProc false)
    (.addEventListener sourc "fly" flyProc false)))

(set! (.-onload js/window) (init))


;;       source.addEventListener('czml', function(e) {
;;         console.log(e.data);
;;         var data = JSON.parse(e.data);
;;         dataSource.process(data);
;;       }, false);
;;       source.addEventListener('fly', function(e) {
;;         console.log(e.data);
;;         var data = JSON.parse(e.data);
;;         if (data.ctrl == "fly"){
;;           viewer.camera.flyTo({
;;             destination : Cesium.Cartesian3.fromDegrees(data.lon, data.lat, data.altitude),
;;             orientation : {
;;               heading : Cesium.Math.toRadians(data.heading),
;;               pitch : Cesium.Math.toRadians(data.pitch),
;;               roll : Cesium.Math.toRadians(data.roll)
;;             },
;;             duration : data.duration,
;;             easingFunction : function(time) { return time; }
;;           });
;;         } else if (data.ctrl == "view") {
;;           viewer.camera.setView({
;;             position : Cesium.Cartesian3.fromDegrees(data.lon, data.lat, data.altitude),
;;             heading : Cesium.Math.toRadians(data.heading),
;;             pitch : Cesium.Math.toRadians(data.pitch),
;;             roll : Cesium.Math.toRadians(data.roll)
;;           });
;;         }
;;       }, false);
;;     </script>
