// Compiled by ClojureScript 1.7.228 {}
goog.provide('view3d.core');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('goog.string');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.string.format');
cljs.core.enable_console_print_BANG_.call(null);
view3d.core.PID180 = (Math.PI / (180));
view3d.core.BOAT_TIO = (1000);
view3d.core.CRS_NOR = (250);
view3d.core.CRS_HRD = (100);
view3d.core.SPD_STP = 0.5;
view3d.core.CAM_TIO = (4000);
view3d.core.BSE_URL = "http://localhost:4444/";
view3d.core.MAP_PTH = "map-center/";
view3d.core.QST_PTH = "question/";
view3d.core.ANS_PTH = "answer/";
view3d.core.CMD_PTH = "maneuver/";
view3d.core.CZML_PTH = "czml/";
view3d.core.boat = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"speed","speed",1257663751),(0),new cljs.core.Keyword(null,"course","course",1455432948),(0),new cljs.core.Keyword(null,"helm","helm",-1750767724),new cljs.core.Keyword(null,"steady","steady",549215053),new cljs.core.Keyword(null,"engine","engine",1459054265),(0)], null));
view3d.core.boat_tio_hrs = (view3d.core.BOAT_TIO / (3600000));
view3d.core.camera = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"view","view",1247994814),"FORWARD",new cljs.core.Keyword(null,"pitch","pitch",1495126700),(0),new cljs.core.Keyword(null,"roll","roll",11266999),(0),new cljs.core.Keyword(null,"altitude","altitude",463588637),(2)], null));
view3d.core.cam_tio_sec = (view3d.core.CAM_TIO / (1000));
view3d.core.by_id = (function view3d$core$by_id(id){
return document.getElementById(id);
});
view3d.core.get_html = (function view3d$core$get_html(id){
return view3d.core.by_id.call(null,id).innerHTML;
});
view3d.core.set_html_BANG_ = (function view3d$core$set_html_BANG_(id,msg){
return view3d.core.by_id.call(null,id).innerHTML = msg;
});
view3d.core.repeater = (function view3d$core$repeater(task,timo){

var c__10369__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10369__auto__){
return (function (){
var f__10370__auto__ = (function (){var switch__10257__auto__ = ((function (c__10369__auto__){
return (function (state_13301){
var state_val_13302 = (state_13301[(1)]);
if((state_val_13302 === (1))){
var state_13301__$1 = state_13301;
var statearr_13303_13318 = state_13301__$1;
(statearr_13303_13318[(2)] = null);

(statearr_13303_13318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13302 === (2))){
var state_13301__$1 = state_13301;
var statearr_13304_13319 = state_13301__$1;
(statearr_13304_13319[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13302 === (3))){
var inst_13299 = (state_13301[(2)]);
var state_13301__$1 = state_13301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13301__$1,inst_13299);
} else {
if((state_val_13302 === (4))){
var inst_13290 = task.call(null);
var inst_13291 = cljs.core.async.timeout.call(null,timo);
var state_13301__$1 = (function (){var statearr_13306 = state_13301;
(statearr_13306[(7)] = inst_13290);

return statearr_13306;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13301__$1,(7),inst_13291);
} else {
if((state_val_13302 === (5))){
var state_13301__$1 = state_13301;
var statearr_13307_13320 = state_13301__$1;
(statearr_13307_13320[(2)] = null);

(statearr_13307_13320[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13302 === (6))){
var inst_13297 = (state_13301[(2)]);
var state_13301__$1 = state_13301;
var statearr_13308_13321 = state_13301__$1;
(statearr_13308_13321[(2)] = inst_13297);

(statearr_13308_13321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13302 === (7))){
var inst_13293 = (state_13301[(2)]);
var state_13301__$1 = (function (){var statearr_13309 = state_13301;
(statearr_13309[(8)] = inst_13293);

return statearr_13309;
})();
var statearr_13310_13322 = state_13301__$1;
(statearr_13310_13322[(2)] = null);

(statearr_13310_13322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__10369__auto__))
;
return ((function (switch__10257__auto__,c__10369__auto__){
return (function() {
var view3d$core$repeater_$_state_machine__10258__auto__ = null;
var view3d$core$repeater_$_state_machine__10258__auto____0 = (function (){
var statearr_13314 = [null,null,null,null,null,null,null,null,null];
(statearr_13314[(0)] = view3d$core$repeater_$_state_machine__10258__auto__);

(statearr_13314[(1)] = (1));

return statearr_13314;
});
var view3d$core$repeater_$_state_machine__10258__auto____1 = (function (state_13301){
while(true){
var ret_value__10259__auto__ = (function (){try{while(true){
var result__10260__auto__ = switch__10257__auto__.call(null,state_13301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10260__auto__;
}
break;
}
}catch (e13315){if((e13315 instanceof Object)){
var ex__10261__auto__ = e13315;
var statearr_13316_13323 = state_13301;
(statearr_13316_13323[(5)] = ex__10261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13324 = state_13301;
state_13301 = G__13324;
continue;
} else {
return ret_value__10259__auto__;
}
break;
}
});
view3d$core$repeater_$_state_machine__10258__auto__ = function(state_13301){
switch(arguments.length){
case 0:
return view3d$core$repeater_$_state_machine__10258__auto____0.call(this);
case 1:
return view3d$core$repeater_$_state_machine__10258__auto____1.call(this,state_13301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$core$repeater_$_state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$core$repeater_$_state_machine__10258__auto____0;
view3d$core$repeater_$_state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$core$repeater_$_state_machine__10258__auto____1;
return view3d$core$repeater_$_state_machine__10258__auto__;
})()
;})(switch__10257__auto__,c__10369__auto__))
})();
var state__10371__auto__ = (function (){var statearr_13317 = f__10370__auto__.call(null);
(statearr_13317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10369__auto__);

return statearr_13317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10371__auto__);
});})(c__10369__auto__))
);

return c__10369__auto__;
});
view3d.core.write_transit = (function view3d$core$write_transit(x){
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
/**
 * Formats a string using goog.string.format.
 */
view3d.core.format = (function view3d$core$format(var_args){
var args__7221__auto__ = [];
var len__7214__auto___13327 = arguments.length;
var i__7215__auto___13328 = (0);
while(true){
if((i__7215__auto___13328 < len__7214__auto___13327)){
args__7221__auto__.push((arguments[i__7215__auto___13328]));

var G__13329 = (i__7215__auto___13328 + (1));
i__7215__auto___13328 = G__13329;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return view3d.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

view3d.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

view3d.core.format.cljs$lang$maxFixedArity = (1);

view3d.core.format.cljs$lang$applyTo = (function (seq13325){
var G__13326 = cljs.core.first.call(null,seq13325);
var seq13325__$1 = cljs.core.next.call(null,seq13325);
return view3d.core.format.cljs$core$IFn$_invoke$arity$variadic(G__13326,seq13325__$1);
});
view3d.core.norm_crs = (function view3d$core$norm_crs(x){
if((x > (360))){
return (x - (360));
} else {
if((x < (0))){
return (x + (360));
} else {
return x;

}
}
});
view3d.core.error_handler = (function view3d$core$error_handler(p__13330){
var map__13333 = p__13330;
var map__13333__$1 = ((((!((map__13333 == null)))?((((map__13333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13333):map__13333);
var status = cljs.core.get.call(null,map__13333__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__13333__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
view3d.core.no_handler = (function view3d$core$no_handler(response){
return null;
});
view3d.core.ask_server = (function view3d$core$ask_server(path,params,resp_format,handler){
cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ASK-SERV","ASK-SERV",1346632841),params], null));

var url = [cljs.core.str(view3d.core.BSE_URL),cljs.core.str(path)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.core.error_handler,new cljs.core.Keyword(null,"response-format","response-format",1664465322),resp_format], null));
});
view3d.core.terprov = (new Cesium.CesiumTerrainProvider({"url": "//assets.agi.com/stk-terrain/world", "requestWaterMask": false, "requestVertexNormals": false}));
view3d.core.viewer = (new Cesium.Viewer("cesiumContainer"));
view3d.core.viewer.terrainProvider = view3d.core.terprov;
view3d.core.cz_source = (new Cesium.CzmlDataSource());
view3d.core.viewer.dataSources.add(view3d.core.cz_source);
view3d.core.cz_processor = (function view3d$core$cz_processor(e){
var data = e.data;
var _ = cljs.core.println.call(null,data);
var data__$1 = JSON.parse(data);
return view3d.core.cz_source.process(data__$1);
});
view3d.core.evt_source = (new EventSource([cljs.core.str(view3d.core.BSE_URL),cljs.core.str(view3d.core.CZML_PTH)].join('')));
view3d.core.evt_source.addEventListener("czml",view3d.core.cz_processor,false);
view3d.core.fly_control = (function view3d$core$fly_control(lat,lon,alt,hea,pit,rol,per){
var dest = Cesium.Cartesian3.fromDegrees(lon,lat,alt);
return view3d.core.viewer.camera.flyTo({"destination": dest, "orientation": {"heading": Cesium.Math.toRadians(hea), "pitch": Cesium.Math.toRadians(pit), "roll": Cesium.Math.toRadians(rol)}, "duration": per, "easingFunction": ((function (dest){
return (function (time){
return time;
});})(dest))
});
});
view3d.core.fly_to = (function view3d$core$fly_to(lat,lon,alt,crs,per){
var pitch = (function (){var pred__13341 = cljs.core._EQ_;
var expr__13342 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.camera));
if(cljs.core.truth_(pred__13341.call(null,"UP",expr__13342))){
return (90);
} else {
if(cljs.core.truth_(pred__13341.call(null,"DOWN",expr__13342))){
return (-90);
} else {
return new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.camera));
}
}
})();
var roll = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.camera));
var head = view3d.core.norm_crs.call(null,(function (){var pred__13344 = cljs.core._EQ_;
var expr__13345 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.camera));
if(cljs.core.truth_(pred__13344.call(null,"ASTERN",expr__13345))){
return (crs + (180));
} else {
if(cljs.core.truth_(pred__13344.call(null,"STARBOARD",expr__13345))){
return (crs + (90));
} else {
if(cljs.core.truth_(pred__13344.call(null,"PORT",expr__13345))){
return (crs - (90));
} else {
if(cljs.core.truth_(pred__13344.call(null,"STAR-BOW",expr__13345))){
return (crs + (45));
} else {
if(cljs.core.truth_(pred__13344.call(null,"PORT-BOW",expr__13345))){
return (crs - (45));
} else {
if(cljs.core.truth_(pred__13344.call(null,"STAR-ABAFT",expr__13345))){
return (crs + (135));
} else {
if(cljs.core.truth_(pred__13344.call(null,"PORT-ABAFT",expr__13345))){
return (crs - (135));
} else {
return crs;
}
}
}
}
}
}
}
})());
return view3d.core.fly_control.call(null,lat,lon,alt,head,pitch,roll,per);
});
view3d.core.camera_work = (function view3d$core$camera_work(){
var vec__13348 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.boat));
var lat = cljs.core.nth.call(null,vec__13348,(0),null);
var lon = cljs.core.nth.call(null,vec__13348,(1),null);
var crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.boat));
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.camera));
return view3d.core.fly_to.call(null,lat,lon,alt,crs,view3d.core.cam_tio_sec);
});
view3d.core.boat_to_server = (function view3d$core$boat_to_server(){
return ajax.core.GET.call(null,[cljs.core.str(view3d.core.BSE_URL),cljs.core.str(view3d.core.CMD_PTH)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.deref.call(null,view3d.core.boat),new cljs.core.Keyword(null,"handler","handler",-195596612),view3d.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.core.error_handler], null));
});
view3d.core.spherical_between = (function view3d$core$spherical_between(phi1,lambda0,c,az){
var cosphi1 = Math.cos(phi1);
var sinphi1 = Math.sin(phi1);
var cosaz = Math.cos(az);
var sinaz = Math.sin(az);
var sinc = Math.sin(c);
var cosc = Math.cos(c);
var phi2 = Math.asin(((sinphi1 * cosc) + ((cosphi1 * sinc) * cosaz)));
var lam2 = (Math.atan2((sinc * sinaz),((cosphi1 * cosc) - ((sinphi1 * sinc) * cosaz))) + lambda0);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phi2,lam2], null);
});
view3d.core.future_pos = (function view3d$core$future_pos(p__13349,crs,spd,tim){
var vec__13352 = p__13349;
var lat = cljs.core.nth.call(null,vec__13352,(0),null);
var lon = cljs.core.nth.call(null,vec__13352,(1),null);
var phi = (view3d.core.PID180 * lat);
var lam = (view3d.core.PID180 * lon);
var dir = (view3d.core.PID180 * crs);
var way = (spd * tim);
var way__$1 = (view3d.core.PID180 * (way / (60)));
var vec__13353 = view3d.core.spherical_between.call(null,phi,lam,way__$1,dir);
var phi2 = cljs.core.nth.call(null,vec__13353,(0),null);
var lam2 = cljs.core.nth.call(null,vec__13353,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(phi2 / view3d.core.PID180),(lam2 / view3d.core.PID180)], null);
});
view3d.core.display_boat_data = (function view3d$core$display_boat_data(){
var vec__13355 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.boat));
var lat = cljs.core.nth.call(null,vec__13355,(0),null);
var lon = cljs.core.nth.call(null,vec__13355,(1),null);
var lat__$1 = (((lat >= (0)))?[cljs.core.str(view3d.core.format.call(null,"%.4f ",lat)),cljs.core.str("N")].join(''):[cljs.core.str(view3d.core.format.call(null,"%.4f ",((0) - lat))),cljs.core.str("S")].join(''));
var lon__$1 = (((lon >= (0)))?[cljs.core.str(view3d.core.format.call(null,"%.4f ",lon)),cljs.core.str("E")].join(''):[cljs.core.str(view3d.core.format.call(null,"%.4f ",((0) - lon))),cljs.core.str("W")].join(''));
view3d.core.set_html_BANG_.call(null,"latitude",lat__$1);

view3d.core.set_html_BANG_.call(null,"longitude",lon__$1);

return view3d.core.set_html_BANG_.call(null,"speed",view3d.core.format.call(null,"%.1f knots",new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.boat))));
});
view3d.core.boost = (function view3d$core$boost(speed,engine){
if((engine > speed)){
return (speed + view3d.core.SPD_STP);
} else {
if((engine < speed)){
return (speed - view3d.core.SPD_STP);
} else {
return null;
}
}
});
view3d.core.turn = (function view3d$core$turn(func,tio,helm){
var c__10369__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10369__auto__){
return (function (){
var f__10370__auto__ = (function (){var switch__10257__auto__ = ((function (c__10369__auto__){
return (function (state_13423){
var state_val_13424 = (state_13423[(1)]);
if((state_val_13424 === (1))){
var state_13423__$1 = state_13423;
var statearr_13425_13440 = state_13423__$1;
(statearr_13425_13440[(2)] = null);

(statearr_13425_13440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13424 === (2))){
var inst_13399 = cljs.core.deref.call(null,view3d.core.boat);
var inst_13400 = new cljs.core.Keyword(null,"helm","helm",-1750767724).cljs$core$IFn$_invoke$arity$1(inst_13399);
var inst_13401 = cljs.core._EQ_.call(null,inst_13400,helm);
var state_13423__$1 = state_13423;
if(inst_13401){
var statearr_13426_13441 = state_13423__$1;
(statearr_13426_13441[(1)] = (4));

} else {
var statearr_13427_13442 = state_13423__$1;
(statearr_13427_13442[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13424 === (3))){
var inst_13421 = (state_13423[(2)]);
var state_13423__$1 = state_13423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13423__$1,inst_13421);
} else {
if((state_val_13424 === (4))){
var inst_13403 = cljs.core._deref.call(null,view3d.core.boat);
var inst_13404 = cljs.core.deref.call(null,view3d.core.boat);
var inst_13405 = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(inst_13404);
var inst_13406 = func.call(null,inst_13405);
var inst_13407 = view3d.core.norm_crs.call(null,inst_13406);
var inst_13408 = cljs.core.assoc.call(null,inst_13403,new cljs.core.Keyword(null,"course","course",1455432948),inst_13407);
var inst_13409 = cljs.core._vreset_BANG_.call(null,view3d.core.boat,inst_13408);
var inst_13410 = cljs.core.deref.call(null,view3d.core.boat);
var inst_13411 = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(inst_13410);
var inst_13412 = view3d.core.set_html_BANG_.call(null,"course",inst_13411);
var inst_13413 = cljs.core.async.timeout.call(null,tio);
var state_13423__$1 = (function (){var statearr_13428 = state_13423;
(statearr_13428[(7)] = inst_13409);

(statearr_13428[(8)] = inst_13412);

return statearr_13428;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13423__$1,(7),inst_13413);
} else {
if((state_val_13424 === (5))){
var state_13423__$1 = state_13423;
var statearr_13429_13443 = state_13423__$1;
(statearr_13429_13443[(2)] = null);

(statearr_13429_13443[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13424 === (6))){
var inst_13419 = (state_13423[(2)]);
var state_13423__$1 = state_13423;
var statearr_13430_13444 = state_13423__$1;
(statearr_13430_13444[(2)] = inst_13419);

(statearr_13430_13444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13424 === (7))){
var inst_13415 = (state_13423[(2)]);
var state_13423__$1 = (function (){var statearr_13431 = state_13423;
(statearr_13431[(9)] = inst_13415);

return statearr_13431;
})();
var statearr_13432_13445 = state_13423__$1;
(statearr_13432_13445[(2)] = null);

(statearr_13432_13445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__10369__auto__))
;
return ((function (switch__10257__auto__,c__10369__auto__){
return (function() {
var view3d$core$turn_$_state_machine__10258__auto__ = null;
var view3d$core$turn_$_state_machine__10258__auto____0 = (function (){
var statearr_13436 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13436[(0)] = view3d$core$turn_$_state_machine__10258__auto__);

(statearr_13436[(1)] = (1));

return statearr_13436;
});
var view3d$core$turn_$_state_machine__10258__auto____1 = (function (state_13423){
while(true){
var ret_value__10259__auto__ = (function (){try{while(true){
var result__10260__auto__ = switch__10257__auto__.call(null,state_13423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10260__auto__;
}
break;
}
}catch (e13437){if((e13437 instanceof Object)){
var ex__10261__auto__ = e13437;
var statearr_13438_13446 = state_13423;
(statearr_13438_13446[(5)] = ex__10261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13447 = state_13423;
state_13423 = G__13447;
continue;
} else {
return ret_value__10259__auto__;
}
break;
}
});
view3d$core$turn_$_state_machine__10258__auto__ = function(state_13423){
switch(arguments.length){
case 0:
return view3d$core$turn_$_state_machine__10258__auto____0.call(this);
case 1:
return view3d$core$turn_$_state_machine__10258__auto____1.call(this,state_13423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$core$turn_$_state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$core$turn_$_state_machine__10258__auto____0;
view3d$core$turn_$_state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$core$turn_$_state_machine__10258__auto____1;
return view3d$core$turn_$_state_machine__10258__auto__;
})()
;})(switch__10257__auto__,c__10369__auto__))
})();
var state__10371__auto__ = (function (){var statearr_13439 = f__10370__auto__.call(null);
(statearr_13439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10369__auto__);

return statearr_13439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10371__auto__);
});})(c__10369__auto__))
);

return c__10369__auto__;
});
view3d.core.ACCD = false;
view3d.core.boat_move = (function view3d$core$boat_move(){
var helm = new cljs.core.Keyword(null,"helm","helm",-1750767724).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.boat));
var engine = new cljs.core.Keyword(null,"engine","engine",1459054265).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.boat));
var course = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.boat));
var speed = new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.boat));
if(cljs.core.not_EQ_.call(null,(engine | (0)),speed)){
view3d.core.ACCD = true;

cljs.core._vreset_BANG_.call(null,view3d.core.boat,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.core.boat),new cljs.core.Keyword(null,"speed","speed",1257663751),view3d.core.boost.call(null,speed,engine)));
} else {
if(cljs.core.truth_(view3d.core.ACCD)){
view3d.core.boat_to_server.call(null);

view3d.core.ACCD = false;
} else {
}
}

cljs.core._vreset_BANG_.call(null,view3d.core.boat,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.core.boat),new cljs.core.Keyword(null,"coord","coord",-1453656639),view3d.core.future_pos.call(null,new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.boat)),course,speed,view3d.core.boat_tio_hrs)));

return view3d.core.display_boat_data.call(null);
});
view3d.core.helm_control = "<input type='range' min='-100' max='100' step='10' value='0'\n  onchange='javascript:view3d.core.helm(this.value)'>";
view3d.core.helm = (function view3d$core$helm(val){
var old = new cljs.core.Keyword(null,"helm","helm",-1750767724).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.boat));
var new$ = (((((-20) <= val)) && ((val <= (20))))?new cljs.core.Keyword(null,"steady","steady",549215053):(((val > (80)))?new cljs.core.Keyword(null,"hard-a-starboard","hard-a-starboard",791886143):(((val > (20)))?new cljs.core.Keyword(null,"starboard","starboard",1162574114):(((val < (-80)))?new cljs.core.Keyword(null,"hard-a-port","hard-a-port",-1868447070):(((val < (-20)))?new cljs.core.Keyword(null,"port","port",1534937262):null)))));
cljs.core._vreset_BANG_.call(null,view3d.core.boat,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.core.boat),new cljs.core.Keyword(null,"helm","helm",-1750767724),new$));

if(cljs.core.not_EQ_.call(null,old,new$)){
if(cljs.core.not_EQ_.call(null,new$,new cljs.core.Keyword(null,"steady","steady",549215053))){
return view3d.core.turn.call(null,(((cljs.core._EQ_.call(null,new$,new cljs.core.Keyword(null,"starboard","starboard",1162574114))) || (cljs.core._EQ_.call(null,new$,new cljs.core.Keyword(null,"hard-a-starboard","hard-a-starboard",791886143))))?cljs.core.inc:cljs.core.dec),(((cljs.core._EQ_.call(null,new$,new cljs.core.Keyword(null,"starboard","starboard",1162574114))) || (cljs.core._EQ_.call(null,new$,new cljs.core.Keyword(null,"port","port",1534937262))))?view3d.core.CRS_NOR:view3d.core.CRS_HRD),new$);
} else {
return view3d.core.boat_to_server.call(null);
}
} else {
return null;
}
});
view3d.core.throttle_control = "<input type='test' value='0' style='width:90px'\n  onchange='javascript:view3d.core.throttle(this.value)'>";
view3d.core.throttle = (function view3d$core$throttle(val){
return cljs.core._vreset_BANG_.call(null,view3d.core.boat,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.core.boat),new cljs.core.Keyword(null,"engine","engine",1459054265),cljs.reader.read_string.call(null,val)));
});
view3d.core.camera_control = (function view3d$core$camera_control(){
view3d.core.set_html_BANG_.call(null,"view","view");

view3d.core.set_html_BANG_.call(null,"view-fld","<select onchange='javascript:view3d.core.view(this.value)' style='width:96px'>\n             <option value='AHEAD'>AHEAD</option>\n             <option value='STAR-BOW'>STAR-BOW</option>\n             <option value='PORT-BOW'>PORT-BOW</option>\n             <option value='STARBOARD'>STARBOARD</option>\n             <option value='PORT'>PORT</option>\n             <option value='STAR-ABAFT'>STAR-ABAFT</option>\n             <option value='PORT-ABAFT'>PORT-ABAFT</option>\n             <option value='ASTERN'>ASTERN</option>\n             <option value='UP'>UP</option>\n             <option value='DOWN'>DOWN</option>\n             </select>");

view3d.core.set_html_BANG_.call(null,"altitude","altitude");

view3d.core.set_html_BANG_.call(null,"altitude-fld",[cljs.core.str("<input value='10' style='width:90px' "),cljs.core.str("onchange='javascript:view3d.core.altitude(this.value)'>")].join(''));

view3d.core.set_html_BANG_.call(null,"pitch","pitch");

view3d.core.set_html_BANG_.call(null,"pitch-fld",[cljs.core.str("<input value='0' style='width:90px' "),cljs.core.str("onchange='javascript:view3d.core.pitch(this.value)'>")].join(''));

view3d.core.set_html_BANG_.call(null,"roll","roll");

return view3d.core.set_html_BANG_.call(null,"roll-fld",[cljs.core.str("<input value='0' style='width:90px' "),cljs.core.str("onchange='javascript:view3d.core.roll(this.value)'>")].join(''));
});
view3d.core.view = (function view3d$core$view(val){
return cljs.core._vreset_BANG_.call(null,view3d.core.camera,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.core.camera),new cljs.core.Keyword(null,"view","view",1247994814),val));
});
view3d.core.altitude = (function view3d$core$altitude(val){
return cljs.core._vreset_BANG_.call(null,view3d.core.camera,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.core.camera),new cljs.core.Keyword(null,"altitude","altitude",463588637),cljs.reader.read_string.call(null,val)));
});
view3d.core.pitch = (function view3d$core$pitch(val){
return cljs.core._vreset_BANG_.call(null,view3d.core.camera,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.core.camera),new cljs.core.Keyword(null,"pitch","pitch",1495126700),cljs.reader.read_string.call(null,val)));
});
view3d.core.roll = (function view3d$core$roll(val){
return cljs.core._vreset_BANG_.call(null,view3d.core.camera,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.core.camera),new cljs.core.Keyword(null,"roll","roll",11266999),cljs.reader.read_string.call(null,val)));
});
view3d.core.options = (function view3d$core$options(lst,typ){
var pred__13459 = cljs.core._EQ_;
var expr__13460 = typ;
if(cljs.core.truth_(pred__13459.call(null,new cljs.core.Keyword(null,"itself","itself",1264932322),expr__13460))){
return cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6928__auto__ = ((function (pred__13459,expr__13460){
return (function view3d$core$options_$_iter__13462(s__13463){
return (new cljs.core.LazySeq(null,((function (pred__13459,expr__13460){
return (function (){
var s__13463__$1 = s__13463;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__13463__$1);
if(temp__4657__auto__){
var s__13463__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13463__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__13463__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__13465 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__13464 = (0);
while(true){
if((i__13464 < size__6927__auto__)){
var e = cljs.core._nth.call(null,c__6926__auto__,i__13464);
cljs.core.chunk_append.call(null,b__13465,[cljs.core.str("<option value='"),cljs.core.str(e),cljs.core.str("'>"),cljs.core.str(e),cljs.core.str("</option>")].join(''));

var G__13470 = (i__13464 + (1));
i__13464 = G__13470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13465),view3d$core$options_$_iter__13462.call(null,cljs.core.chunk_rest.call(null,s__13463__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13465),null);
}
} else {
var e = cljs.core.first.call(null,s__13463__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(e),cljs.core.str("'>"),cljs.core.str(e),cljs.core.str("</option>")].join(''),view3d$core$options_$_iter__13462.call(null,cljs.core.rest.call(null,s__13463__$2)));
}
} else {
return null;
}
break;
}
});})(pred__13459,expr__13460))
,null,null));
});})(pred__13459,expr__13460))
;
return iter__6928__auto__.call(null,lst);
})());
} else {
if(cljs.core.truth_(pred__13459.call(null,new cljs.core.Keyword(null,"count","count",2139924085),expr__13460))){
return cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6928__auto__ = ((function (pred__13459,expr__13460){
return (function view3d$core$options_$_iter__13466(s__13467){
return (new cljs.core.LazySeq(null,((function (pred__13459,expr__13460){
return (function (){
var s__13467__$1 = s__13467;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__13467__$1);
if(temp__4657__auto__){
var s__13467__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13467__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__13467__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__13469 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__13468 = (0);
while(true){
if((i__13468 < size__6927__auto__)){
var i = cljs.core._nth.call(null,c__6926__auto__,i__13468);
cljs.core.chunk_append.call(null,b__13469,[cljs.core.str("<option value='"),cljs.core.str(i),cljs.core.str("'>"),cljs.core.str(cljs.core.nth.call(null,lst,i)),cljs.core.str("</option>")].join(''));

var G__13471 = (i__13468 + (1));
i__13468 = G__13471;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13469),view3d$core$options_$_iter__13466.call(null,cljs.core.chunk_rest.call(null,s__13467__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13469),null);
}
} else {
var i = cljs.core.first.call(null,s__13467__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(i),cljs.core.str("'>"),cljs.core.str(cljs.core.nth.call(null,lst,i)),cljs.core.str("</option>")].join(''),view3d$core$options_$_iter__13466.call(null,cljs.core.rest.call(null,s__13467__$2)));
}
} else {
return null;
}
break;
}
});})(pred__13459,expr__13460))
,null,null));
});})(pred__13459,expr__13460))
;
return iter__6928__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,lst)));
})());
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__13460)].join('')));
}
}
});
view3d.core.selector1 = (function view3d$core$selector1(header,lst,typ){
var sel = [cljs.core.str("<select onchange='javascript:view3d.core.handler1(this.value)'>"),cljs.core.str("<option value='-1'>"),cljs.core.str(header),cljs.core.str("</option>"),cljs.core.str(view3d.core.options.call(null,lst,typ)),cljs.core.str("</select>")].join('');
view3d.core.set_html_BANG_.call(null,"element1",sel);

view3d.core.set_html_BANG_.call(null,"element2","");

return view3d.core.set_html_BANG_.call(null,"element3","");
});
view3d.core.function1 = null;
view3d.core.handler1 = (function view3d$core$handler1(selected){
view3d.core.set_html_BANG_.call(null,"display","");

return view3d.core.function1.call(null,selected);
});
view3d.core.selector2 = (function view3d$core$selector2(header,lst,typ){
var sel = [cljs.core.str("<select onchange='javascript:view3d.core.handler2(this.value)'>"),cljs.core.str("<option value='-1'>"),cljs.core.str(header),cljs.core.str("</option>"),cljs.core.str(view3d.core.options.call(null,lst,typ)),cljs.core.str("</select>")].join('');
view3d.core.set_html_BANG_.call(null,"element2",sel);

return view3d.core.set_html_BANG_.call(null,"element3","");
});
view3d.core.function2 = null;
view3d.core.handler2 = (function view3d$core$handler2(selected){
view3d.core.set_html_BANG_.call(null,"display","");

return view3d.core.function2.call(null,selected);
});
view3d.core.selector3 = (function view3d$core$selector3(header,lst,typ){
var sel = [cljs.core.str("<select onchange='javascript:view3d.core.handler3(this.value)'>"),cljs.core.str("<option value='-1'>"),cljs.core.str(header),cljs.core.str("</option>"),cljs.core.str(view3d.core.options.call(null,lst,typ)),cljs.core.str("</select>")].join('');
return view3d.core.set_html_BANG_.call(null,"element3",sel);
});
view3d.core.function3 = null;
view3d.core.handler3 = (function view3d$core$handler3(selected){
view3d.core.set_html_BANG_.call(null,"display","");

return view3d.core.function3.call(null,selected);
});
view3d.core.display_answer = (function view3d$core$display_answer(answer){
return view3d.core.set_html_BANG_.call(null,"display",answer);
});
view3d.core.retrieve_answer = (function view3d$core$retrieve_answer(){
return view3d.core.ask_server.call(null,view3d.core.ANS_PTH,null,new cljs.core.Keyword(null,"transit","transit",359458387),view3d.core.display_answer);
});
view3d.core.behind_island = (function view3d$core$behind_island(islands){
view3d.core.selector3.call(null,"island",islands,new cljs.core.Keyword(null,"itself","itself",1264932322));

view3d.core.function3 = (function view3d$core$behind_island_$_function3(a){
return view3d.core.ask_server.call(null,view3d.core.QST_PTH,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"predicate","predicate",-1742501860),"what-is",new cljs.core.Keyword(null,"subject","subject",-1411880451),"behind the island",new cljs.core.Keyword(null,"object","object",1474613949),a], null),new cljs.core.Keyword(null,"transit","transit",359458387),view3d.core.retrieve_answer);
});
});
view3d.core.before_island = (function view3d$core$before_island(islands){
view3d.core.selector3.call(null,"island",islands,new cljs.core.Keyword(null,"itself","itself",1264932322));

view3d.core.function3 = (function view3d$core$before_island_$_function3(a){
return view3d.core.ask_server.call(null,view3d.core.QST_PTH,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"predicate","predicate",-1742501860),"what-is",new cljs.core.Keyword(null,"subject","subject",-1411880451),"before the island",new cljs.core.Keyword(null,"object","object",1474613949),a], null),new cljs.core.Keyword(null,"transit","transit",359458387),view3d.core.retrieve_answer);
});
});
view3d.core.where_island = (function view3d$core$where_island(islands){
view3d.core.selector3.call(null,"island",islands,new cljs.core.Keyword(null,"itself","itself",1264932322));

view3d.core.function3 = (function view3d$core$where_island_$_function3(a){
return view3d.core.ask_server.call(null,view3d.core.QST_PTH,cljs.core.merge.call(null,cljs.core.deref.call(null,view3d.core.boat),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"predicate","predicate",-1742501860),"where-is",new cljs.core.Keyword(null,"subject","subject",-1411880451),"island",new cljs.core.Keyword(null,"object","object",1474613949),a], null)),new cljs.core.Keyword(null,"transit","transit",359458387),view3d.core.retrieve_answer);
});
});
view3d.core.nearby_islands_behind = (function view3d$core$nearby_islands_behind(){
return view3d.core.ask_server.call(null,view3d.core.ANS_PTH,null,new cljs.core.Keyword(null,"transit","transit",359458387),view3d.core.behind_island);
});
view3d.core.nearby_islands_before = (function view3d$core$nearby_islands_before(){
return view3d.core.ask_server.call(null,view3d.core.ANS_PTH,null,new cljs.core.Keyword(null,"transit","transit",359458387),view3d.core.before_island);
});
view3d.core.nearby_islands_where = (function view3d$core$nearby_islands_where(){
return view3d.core.ask_server.call(null,view3d.core.ANS_PTH,null,new cljs.core.Keyword(null,"transit","transit",359458387),view3d.core.where_island);
});
view3d.core.lst1 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ahead","on the starboard bow","on the port bow","on the starboard beam","on the port beam","abaft the starboard beam","abaft the port beam","astern","behind the island","before the island"], null);
view3d.core.what_is = (function view3d$core$what_is(){
view3d.core.selector2.call(null,"?",view3d.core.lst1,new cljs.core.Keyword(null,"count","count",2139924085));

view3d.core.function2 = (function view3d$core$what_is_$_function2(a){
var n = cljs.reader.read_string.call(null,a);
var pred__13481 = cljs.core._GT__EQ_;
var expr__13482 = n;
if(cljs.core.truth_(pred__13481.call(null,(7),expr__13482))){
return view3d.core.ask_server.call(null,view3d.core.QST_PTH,cljs.core.merge.call(null,cljs.core.deref.call(null,view3d.core.boat),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"predicate","predicate",-1742501860),"what-is",new cljs.core.Keyword(null,"subject","subject",-1411880451),cljs.core.nth.call(null,view3d.core.lst1,n)], null)),new cljs.core.Keyword(null,"transit","transit",359458387),view3d.core.retrieve_answer);
} else {
if(cljs.core.truth_(pred__13481.call(null,(8),expr__13482))){
return view3d.core.ask_server.call(null,view3d.core.QST_PTH,cljs.core.merge.call(null,cljs.core.deref.call(null,view3d.core.boat),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"predicate","predicate",-1742501860),"nearby-islands"], null)),new cljs.core.Keyword(null,"transit","transit",359458387),view3d.core.nearby_islands_behind);
} else {
if(cljs.core.truth_(pred__13481.call(null,(9),expr__13482))){
return view3d.core.ask_server.call(null,view3d.core.QST_PTH,cljs.core.merge.call(null,cljs.core.deref.call(null,view3d.core.boat),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"predicate","predicate",-1742501860),"nearby-islands"], null)),new cljs.core.Keyword(null,"transit","transit",359458387),view3d.core.nearby_islands_before);
} else {
return cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"WHAT-IS","WHAT-IS",-1782707900),cljs.core.nth.call(null,view3d.core.lst1,n)], null));
}
}
}
});
});
view3d.core.lst2 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["island"], null);
view3d.core.where_is = (function view3d$core$where_is(){
view3d.core.selector2.call(null,"?",view3d.core.lst2,new cljs.core.Keyword(null,"count","count",2139924085));

view3d.core.function2 = (function view3d$core$where_is_$_function2(a){
var n = cljs.reader.read_string.call(null,a);
var pred__13493 = cljs.core._GT__EQ_;
var expr__13494 = n;
if(cljs.core.truth_(pred__13493.call(null,(0),expr__13494))){
return view3d.core.ask_server.call(null,view3d.core.QST_PTH,cljs.core.merge.call(null,cljs.core.deref.call(null,view3d.core.boat),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"predicate","predicate",-1742501860),"nearby-islands"], null)),new cljs.core.Keyword(null,"transit","transit",359458387),view3d.core.nearby_islands_where);
} else {
return cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"WHERE-IS","WHERE-IS",859140682),cljs.core.nth.call(null,view3d.core.lst1,n)], null));
}
});
});
view3d.core.questionnaire = (function view3d$core$questionnaire(){
view3d.core.set_html_BANG_.call(null,"ask","Ask a question:");

view3d.core.selector1.call(null,"?",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["What is","Where is","Tell me about","What is the weather","How far is "], null),new cljs.core.Keyword(null,"count","count",2139924085));

view3d.core.function1 = (function view3d$core$questionnaire_$_function1(a){
var pred__13505 = cljs.core._EQ_;
var expr__13506 = cljs.reader.read_string.call(null,a);
if(cljs.core.truth_(pred__13505.call(null,(0),expr__13506))){
return view3d.core.what_is.call(null);
} else {
if(cljs.core.truth_(pred__13505.call(null,(1),expr__13506))){
return view3d.core.where_is.call(null);
} else {
if(cljs.core.truth_(pred__13505.call(null,(2),expr__13506))){
return view3d.core.tell_about.call(null);
} else {
if(cljs.core.truth_(pred__13505.call(null,(3),expr__13506))){
return view3d.core.weather.call(null);
} else {
if(cljs.core.truth_(pred__13505.call(null,(4),expr__13506))){
return view3d.core.how_far_is.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__13506)].join('')));
}
}
}
}
}
});
});
view3d.core.start_map = (function view3d$core$start_map(response){
var temp__4655__auto__ = response;
if(cljs.core.truth_(temp__4655__auto__)){
var vec__13509 = temp__4655__auto__;
var lat = cljs.core.nth.call(null,vec__13509,(0),null);
var lon = cljs.core.nth.call(null,vec__13509,(1),null);
cljs.core._vreset_BANG_.call(null,view3d.core.boat,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.core.boat),new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon], null)));

view3d.core.fly_to.call(null,lat,lon,new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.camera)),(0),(10));

view3d.core.set_html_BANG_.call(null,"course",new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.boat)));

view3d.core.set_html_BANG_.call(null,"helm-tit","helm");

view3d.core.set_html_BANG_.call(null,"helm",view3d.core.helm_control);

view3d.core.set_html_BANG_.call(null,"throttle","throttle");

view3d.core.set_html_BANG_.call(null,"throttle-fld",view3d.core.throttle_control);

view3d.core.camera_control.call(null);

cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"CAMERA","CAMERA",-109369139),view3d.core.camera], null));

cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"BOAT","BOAT",96160898),view3d.core.boat], null));

view3d.core.repeater.call(null,((function (vec__13509,lat,lon,temp__4655__auto__){
return (function (){
return view3d.core.boat_move.call(null);
});})(vec__13509,lat,lon,temp__4655__auto__))
,view3d.core.BOAT_TIO);

view3d.core.repeater.call(null,((function (vec__13509,lat,lon,temp__4655__auto__){
return (function (){
return view3d.core.camera_work.call(null);
});})(vec__13509,lat,lon,temp__4655__auto__))
,view3d.core.CAM_TIO);

return view3d.core.questionnaire.call(null);
} else {
return alert("No map center from server!");
}
});
view3d.core.init = (function view3d$core$init(){
return view3d.core.ask_server.call(null,view3d.core.MAP_PTH,null,new cljs.core.Keyword(null,"transit","transit",359458387),view3d.core.start_map);
});
window.onload = view3d.core.init.call(null);
