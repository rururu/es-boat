// Compiled by ClojureScript 1.8.40 {}
goog.provide('view3d.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
view3d.core.SRC_URL = "http://localhost:4444/view3d/";
view3d.core.DAT_SRC = null;
view3d.core.czmlProc = (function view3d$core$czmlProc(e){
var data = e.data;
var _ = cljs.core.println.call(null,data);
var data__$1 = JSON.parse(data);
return view3d.core.DAT_SRC.process(data__$1);
});
view3d.core.flyProc = (function view3d$core$flyProc(e){
return null;
});
view3d.core.init = (function view3d$core$init(){
var viewer = (new Cesium.Viewer("cesiumContainer"));
var provid = (new Cesium.CesiumTerrainProvider({"url": "//assets.agi.com/stk-terrain/world", "requestWaterMask": false, "requestVertexNormals": false}));
var _ = viewer.terrainProvider = provid;
var scene = viewer.scene;
var ___$1 = scene.globe.depthTestAgainstTerrain = false;
var ellip = scene.globe.ellipsoid;
var entyt = viewer.entities.add({"label": {"show": false}});
var handl = (new Cesium.ScreenSpaceEventHandler(scene.canvas));
var ___$2 = view3d.core.DAT_SRC = (new Cesium.CzmlDataSource());
var ___$3 = viewer.dataSources.add(view3d.core.DAT_SRC);
var sourc = (new EventSource(view3d.core.SRC_URL));
sourc.addEventListener("czml",view3d.core.czmlProc,false);

return sourc.addEventListener("fly",view3d.core.flyProc,false);
});
window.onload = view3d.core.init.call(null);
