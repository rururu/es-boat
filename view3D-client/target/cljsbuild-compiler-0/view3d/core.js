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

var c__9993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9993__auto__){
return (function (){
var f__9994__auto__ = (function (){var switch__9928__auto__ = ((function (c__9993__auto__){
return (function (state_12343){
var state_val_12344 = (state_12343[(1)]);
if((state_val_12344 === (1))){
var state_12343__$1 = state_12343;
var statearr_12345_12360 = state_12343__$1;
(statearr_12345_12360[(2)] = null);

(statearr_12345_12360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12344 === (2))){
var state_12343__$1 = state_12343;
var statearr_12346_12361 = state_12343__$1;
(statearr_12346_12361[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12344 === (3))){
var inst_12341 = (state_12343[(2)]);
var state_12343__$1 = state_12343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12343__$1,inst_12341);
} else {
if((state_val_12344 === (4))){
var inst_12332 = task.call(null);
var inst_12333 = cljs.core.async.timeout.call(null,timo);
var state_12343__$1 = (function (){var statearr_12348 = state_12343;
(statearr_12348[(7)] = inst_12332);

return statearr_12348;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12343__$1,(7),inst_12333);
} else {
if((state_val_12344 === (5))){
var state_12343__$1 = state_12343;
var statearr_12349_12362 = state_12343__$1;
(statearr_12349_12362[(2)] = null);

(statearr_12349_12362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12344 === (6))){
var inst_12339 = (state_12343[(2)]);
var state_12343__$1 = state_12343;
var statearr_12350_12363 = state_12343__$1;
(statearr_12350_12363[(2)] = inst_12339);

(statearr_12350_12363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12344 === (7))){
var inst_12335 = (state_12343[(2)]);
var state_12343__$1 = (function (){var statearr_12351 = state_12343;
(statearr_12351[(8)] = inst_12335);

return statearr_12351;
})();
var statearr_12352_12364 = state_12343__$1;
(statearr_12352_12364[(2)] = null);

(statearr_12352_12364[(1)] = (2));


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
});})(c__9993__auto__))
;
return ((function (switch__9928__auto__,c__9993__auto__){
return (function() {
var view3d$core$repeater_$_state_machine__9929__auto__ = null;
var view3d$core$repeater_$_state_machine__9929__auto____0 = (function (){
var statearr_12356 = [null,null,null,null,null,null,null,null,null];
(statearr_12356[(0)] = view3d$core$repeater_$_state_machine__9929__auto__);

(statearr_12356[(1)] = (1));

return statearr_12356;
});
var view3d$core$repeater_$_state_machine__9929__auto____1 = (function (state_12343){
while(true){
var ret_value__9930__auto__ = (function (){try{while(true){
var result__9931__auto__ = switch__9928__auto__.call(null,state_12343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9931__auto__;
}
break;
}
}catch (e12357){if((e12357 instanceof Object)){
var ex__9932__auto__ = e12357;
var statearr_12358_12365 = state_12343;
(statearr_12358_12365[(5)] = ex__9932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12366 = state_12343;
state_12343 = G__12366;
continue;
} else {
return ret_value__9930__auto__;
}
break;
}
});
view3d$core$repeater_$_state_machine__9929__auto__ = function(state_12343){
switch(arguments.length){
case 0:
return view3d$core$repeater_$_state_machine__9929__auto____0.call(this);
case 1:
return view3d$core$repeater_$_state_machine__9929__auto____1.call(this,state_12343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$core$repeater_$_state_machine__9929__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$core$repeater_$_state_machine__9929__auto____0;
view3d$core$repeater_$_state_machine__9929__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$core$repeater_$_state_machine__9929__auto____1;
return view3d$core$repeater_$_state_machine__9929__auto__;
})()
;})(switch__9928__auto__,c__9993__auto__))
})();
var state__9995__auto__ = (function (){var statearr_12359 = f__9994__auto__.call(null);
(statearr_12359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9993__auto__);

return statearr_12359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9995__auto__);
});})(c__9993__auto__))
);

return c__9993__auto__;
});
view3d.core.write_transit = (function view3d$core$write_transit(x){
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
/**
 * Formats a string using goog.string.format.
 */
view3d.core.format = (function view3d$core$format(var_args){
var args__7221__auto__ = [];
var len__7214__auto___12369 = arguments.length;
var i__7215__auto___12370 = (0);
while(true){
if((i__7215__auto___12370 < len__7214__auto___12369)){
args__7221__auto__.push((arguments[i__7215__auto___12370]));

var G__12371 = (i__7215__auto___12370 + (1));
i__7215__auto___12370 = G__12371;
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

view3d.core.format.cljs$lang$applyTo = (function (seq12367){
var G__12368 = cljs.core.first.call(null,seq12367);
var seq12367__$1 = cljs.core.next.call(null,seq12367);
return view3d.core.format.cljs$core$IFn$_invoke$arity$variadic(G__12368,seq12367__$1);
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
view3d.core.error_handler = (function view3d$core$error_handler(p__12372){
var map__12375 = p__12372;
var map__12375__$1 = ((((!((map__12375 == null)))?((((map__12375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12375):map__12375);
var status = cljs.core.get.call(null,map__12375__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__12375__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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
view3d.core.fly_control = (function view3d$core$fly_control(lat,lon,alt,hea,pit,rol,per){
var dest = Cesium.Cartesian3.fromDegrees(lon,lat,alt);
return view3d.core.viewer.camera.flyTo({"destination": dest, "orientation": {"heading": Cesium.Math.toRadians(hea), "pitch": Cesium.Math.toRadians(pit), "roll": Cesium.Math.toRadians(rol)}, "duration": per, "easingFunction": ((function (dest){
return (function (time){
return time;
});})(dest))
});
});
view3d.core.fly_to = (function view3d$core$fly_to(lat,lon,alt,crs,per){
var pitch = (function (){var pred__12383 = cljs.core._EQ_;
var expr__12384 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.camera));
if(cljs.core.truth_(pred__12383.call(null,"UP",expr__12384))){
return (90);
} else {
if(cljs.core.truth_(pred__12383.call(null,"DOWN",expr__12384))){
return (-90);
} else {
return new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.camera));
}
}
})();
var roll = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.camera));
var head = view3d.core.norm_crs.call(null,(function (){var pred__12386 = cljs.core._EQ_;
var expr__12387 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.camera));
if(cljs.core.truth_(pred__12386.call(null,"BACKWARD",expr__12387))){
return (crs + (180));
} else {
if(cljs.core.truth_(pred__12386.call(null,"RIGHT",expr__12387))){
return (crs + (90));
} else {
if(cljs.core.truth_(pred__12386.call(null,"LEFT",expr__12387))){
return (crs - (90));
} else {
return crs;
}
}
}
})());
return view3d.core.fly_control.call(null,lat,lon,alt,head,pitch,roll,per);
});
view3d.core.camera_work = (function view3d$core$camera_work(){
var vec__12390 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.boat));
var lat = cljs.core.nth.call(null,vec__12390,(0),null);
var lon = cljs.core.nth.call(null,vec__12390,(1),null);
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
view3d.core.future_pos = (function view3d$core$future_pos(p__12391,crs,spd,tim){
var vec__12394 = p__12391;
var lat = cljs.core.nth.call(null,vec__12394,(0),null);
var lon = cljs.core.nth.call(null,vec__12394,(1),null);
var phi = (view3d.core.PID180 * lat);
var lam = (view3d.core.PID180 * lon);
var dir = (view3d.core.PID180 * crs);
var way = (spd * tim);
var way__$1 = (view3d.core.PID180 * (way / (60)));
var vec__12395 = view3d.core.spherical_between.call(null,phi,lam,way__$1,dir);
var phi2 = cljs.core.nth.call(null,vec__12395,(0),null);
var lam2 = cljs.core.nth.call(null,vec__12395,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(phi2 / view3d.core.PID180),(lam2 / view3d.core.PID180)], null);
});
view3d.core.display_boat_data = (function view3d$core$display_boat_data(){
var vec__12397 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.boat));
var lat = cljs.core.nth.call(null,vec__12397,(0),null);
var lon = cljs.core.nth.call(null,vec__12397,(1),null);
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
var c__9993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9993__auto__){
return (function (){
var f__9994__auto__ = (function (){var switch__9928__auto__ = ((function (c__9993__auto__){
return (function (state_12465){
var state_val_12466 = (state_12465[(1)]);
if((state_val_12466 === (1))){
var state_12465__$1 = state_12465;
var statearr_12467_12482 = state_12465__$1;
(statearr_12467_12482[(2)] = null);

(statearr_12467_12482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12466 === (2))){
var inst_12441 = cljs.core.deref.call(null,view3d.core.boat);
var inst_12442 = new cljs.core.Keyword(null,"helm","helm",-1750767724).cljs$core$IFn$_invoke$arity$1(inst_12441);
var inst_12443 = cljs.core._EQ_.call(null,inst_12442,helm);
var state_12465__$1 = state_12465;
if(inst_12443){
var statearr_12468_12483 = state_12465__$1;
(statearr_12468_12483[(1)] = (4));

} else {
var statearr_12469_12484 = state_12465__$1;
(statearr_12469_12484[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12466 === (3))){
var inst_12463 = (state_12465[(2)]);
var state_12465__$1 = state_12465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12465__$1,inst_12463);
} else {
if((state_val_12466 === (4))){
var inst_12445 = cljs.core._deref.call(null,view3d.core.boat);
var inst_12446 = cljs.core.deref.call(null,view3d.core.boat);
var inst_12447 = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(inst_12446);
var inst_12448 = func.call(null,inst_12447);
var inst_12449 = view3d.core.norm_crs.call(null,inst_12448);
var inst_12450 = cljs.core.assoc.call(null,inst_12445,new cljs.core.Keyword(null,"course","course",1455432948),inst_12449);
var inst_12451 = cljs.core._vreset_BANG_.call(null,view3d.core.boat,inst_12450);
var inst_12452 = cljs.core.deref.call(null,view3d.core.boat);
var inst_12453 = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(inst_12452);
var inst_12454 = view3d.core.set_html_BANG_.call(null,"course",inst_12453);
var inst_12455 = cljs.core.async.timeout.call(null,tio);
var state_12465__$1 = (function (){var statearr_12470 = state_12465;
(statearr_12470[(7)] = inst_12451);

(statearr_12470[(8)] = inst_12454);

return statearr_12470;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12465__$1,(7),inst_12455);
} else {
if((state_val_12466 === (5))){
var state_12465__$1 = state_12465;
var statearr_12471_12485 = state_12465__$1;
(statearr_12471_12485[(2)] = null);

(statearr_12471_12485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12466 === (6))){
var inst_12461 = (state_12465[(2)]);
var state_12465__$1 = state_12465;
var statearr_12472_12486 = state_12465__$1;
(statearr_12472_12486[(2)] = inst_12461);

(statearr_12472_12486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12466 === (7))){
var inst_12457 = (state_12465[(2)]);
var state_12465__$1 = (function (){var statearr_12473 = state_12465;
(statearr_12473[(9)] = inst_12457);

return statearr_12473;
})();
var statearr_12474_12487 = state_12465__$1;
(statearr_12474_12487[(2)] = null);

(statearr_12474_12487[(1)] = (2));


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
});})(c__9993__auto__))
;
return ((function (switch__9928__auto__,c__9993__auto__){
return (function() {
var view3d$core$turn_$_state_machine__9929__auto__ = null;
var view3d$core$turn_$_state_machine__9929__auto____0 = (function (){
var statearr_12478 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12478[(0)] = view3d$core$turn_$_state_machine__9929__auto__);

(statearr_12478[(1)] = (1));

return statearr_12478;
});
var view3d$core$turn_$_state_machine__9929__auto____1 = (function (state_12465){
while(true){
var ret_value__9930__auto__ = (function (){try{while(true){
var result__9931__auto__ = switch__9928__auto__.call(null,state_12465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9931__auto__;
}
break;
}
}catch (e12479){if((e12479 instanceof Object)){
var ex__9932__auto__ = e12479;
var statearr_12480_12488 = state_12465;
(statearr_12480_12488[(5)] = ex__9932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12489 = state_12465;
state_12465 = G__12489;
continue;
} else {
return ret_value__9930__auto__;
}
break;
}
});
view3d$core$turn_$_state_machine__9929__auto__ = function(state_12465){
switch(arguments.length){
case 0:
return view3d$core$turn_$_state_machine__9929__auto____0.call(this);
case 1:
return view3d$core$turn_$_state_machine__9929__auto____1.call(this,state_12465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
view3d$core$turn_$_state_machine__9929__auto__.cljs$core$IFn$_invoke$arity$0 = view3d$core$turn_$_state_machine__9929__auto____0;
view3d$core$turn_$_state_machine__9929__auto__.cljs$core$IFn$_invoke$arity$1 = view3d$core$turn_$_state_machine__9929__auto____1;
return view3d$core$turn_$_state_machine__9929__auto__;
})()
;})(switch__9928__auto__,c__9993__auto__))
})();
var state__9995__auto__ = (function (){var statearr_12481 = f__9994__auto__.call(null);
(statearr_12481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9993__auto__);

return statearr_12481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9995__auto__);
});})(c__9993__auto__))
);

return c__9993__auto__;
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

view3d.core.set_html_BANG_.call(null,"view-fld","<select onchange='javascript:view3d.core.view(this.value)' style='width:96px'>\n             <option value='FORWARD'>FORWARD</option>\n             <option value='BACKWARD'>BACKWARD</option>\n             <option value='RIGHT'>RIGHT</option>\n             <option value='LEFT'>LEFT</option>\n             <option value='UP'>UP</option>\n             <option value='DOWN'>DOWN</option>\n             </select>");

view3d.core.set_html_BANG_.call(null,"altitude","altitude");

view3d.core.set_html_BANG_.call(null,"altitude-fld",[cljs.core.str("<input value='2' style='width:90px' "),cljs.core.str("onchange='javascript:view3d.core.altitude(this.value)'>")].join(''));

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
var pred__12501 = cljs.core._EQ_;
var expr__12502 = typ;
if(cljs.core.truth_(pred__12501.call(null,new cljs.core.Keyword(null,"itself","itself",1264932322),expr__12502))){
return cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6928__auto__ = ((function (pred__12501,expr__12502){
return (function view3d$core$options_$_iter__12504(s__12505){
return (new cljs.core.LazySeq(null,((function (pred__12501,expr__12502){
return (function (){
var s__12505__$1 = s__12505;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12505__$1);
if(temp__4657__auto__){
var s__12505__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12505__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__12505__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__12507 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__12506 = (0);
while(true){
if((i__12506 < size__6927__auto__)){
var e = cljs.core._nth.call(null,c__6926__auto__,i__12506);
cljs.core.chunk_append.call(null,b__12507,[cljs.core.str("<option value='"),cljs.core.str(e),cljs.core.str("'>"),cljs.core.str(e),cljs.core.str("</option>")].join(''));

var G__12512 = (i__12506 + (1));
i__12506 = G__12512;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12507),view3d$core$options_$_iter__12504.call(null,cljs.core.chunk_rest.call(null,s__12505__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12507),null);
}
} else {
var e = cljs.core.first.call(null,s__12505__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(e),cljs.core.str("'>"),cljs.core.str(e),cljs.core.str("</option>")].join(''),view3d$core$options_$_iter__12504.call(null,cljs.core.rest.call(null,s__12505__$2)));
}
} else {
return null;
}
break;
}
});})(pred__12501,expr__12502))
,null,null));
});})(pred__12501,expr__12502))
;
return iter__6928__auto__.call(null,lst);
})());
} else {
if(cljs.core.truth_(pred__12501.call(null,new cljs.core.Keyword(null,"count","count",2139924085),expr__12502))){
return cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6928__auto__ = ((function (pred__12501,expr__12502){
return (function view3d$core$options_$_iter__12508(s__12509){
return (new cljs.core.LazySeq(null,((function (pred__12501,expr__12502){
return (function (){
var s__12509__$1 = s__12509;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12509__$1);
if(temp__4657__auto__){
var s__12509__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12509__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__12509__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__12511 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__12510 = (0);
while(true){
if((i__12510 < size__6927__auto__)){
var i = cljs.core._nth.call(null,c__6926__auto__,i__12510);
cljs.core.chunk_append.call(null,b__12511,[cljs.core.str("<option value='"),cljs.core.str(i),cljs.core.str("'>"),cljs.core.str(cljs.core.nth.call(null,lst,i)),cljs.core.str("</option>")].join(''));

var G__12513 = (i__12510 + (1));
i__12510 = G__12513;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12511),view3d$core$options_$_iter__12508.call(null,cljs.core.chunk_rest.call(null,s__12509__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12511),null);
}
} else {
var i = cljs.core.first.call(null,s__12509__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(i),cljs.core.str("'>"),cljs.core.str(cljs.core.nth.call(null,lst,i)),cljs.core.str("</option>")].join(''),view3d$core$options_$_iter__12508.call(null,cljs.core.rest.call(null,s__12509__$2)));
}
} else {
return null;
}
break;
}
});})(pred__12501,expr__12502))
,null,null));
});})(pred__12501,expr__12502))
;
return iter__6928__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,lst)));
})());
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12502)].join('')));
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
view3d.core.nearby_islands_behind = (function view3d$core$nearby_islands_behind(){
return view3d.core.ask_server.call(null,view3d.core.ANS_PTH,null,new cljs.core.Keyword(null,"transit","transit",359458387),view3d.core.behind_island);
});
view3d.core.nearby_islands_before = (function view3d$core$nearby_islands_before(){
return view3d.core.ask_server.call(null,view3d.core.ANS_PTH,null,new cljs.core.Keyword(null,"transit","transit",359458387),view3d.core.before_island);
});
view3d.core.lst1 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ahead","on the starboard bow","on the port bow","on the starboard beam","on the port beam","abaft the starboard beam","abaft the port beam","astern","behind the island","before the island"], null);
view3d.core.what_is = (function view3d$core$what_is(){
view3d.core.selector2.call(null,"?",view3d.core.lst1,new cljs.core.Keyword(null,"count","count",2139924085));

view3d.core.function2 = (function view3d$core$what_is_$_function2(a){
var n = cljs.reader.read_string.call(null,a);
var pred__12523 = cljs.core._GT__EQ_;
var expr__12524 = n;
if(cljs.core.truth_(pred__12523.call(null,(7),expr__12524))){
return view3d.core.ask_server.call(null,view3d.core.QST_PTH,cljs.core.merge.call(null,cljs.core.deref.call(null,view3d.core.boat),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"predicate","predicate",-1742501860),"what-is",new cljs.core.Keyword(null,"subject","subject",-1411880451),cljs.core.nth.call(null,view3d.core.lst1,n)], null)),new cljs.core.Keyword(null,"transit","transit",359458387),view3d.core.retrieve_answer);
} else {
if(cljs.core.truth_(pred__12523.call(null,(8),expr__12524))){
return view3d.core.ask_server.call(null,view3d.core.QST_PTH,cljs.core.merge.call(null,cljs.core.deref.call(null,view3d.core.boat),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"predicate","predicate",-1742501860),"nearby-islands"], null)),new cljs.core.Keyword(null,"transit","transit",359458387),view3d.core.nearby_islands_behind);
} else {
if(cljs.core.truth_(pred__12523.call(null,(9),expr__12524))){
return view3d.core.ask_server.call(null,view3d.core.QST_PTH,cljs.core.merge.call(null,cljs.core.deref.call(null,view3d.core.boat),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"predicate","predicate",-1742501860),"nearby-islands"], null)),new cljs.core.Keyword(null,"transit","transit",359458387),view3d.core.nearby_islands_before);
} else {
return cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"WHAT-IS","WHAT-IS",-1782707900),cljs.core.nth.call(null,view3d.core.lst1,n)], null));
}
}
}
});
});
view3d.core.questionnaire = (function view3d$core$questionnaire(){
view3d.core.set_html_BANG_.call(null,"ask","Ask a question:");

view3d.core.selector1.call(null,"?",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["What is","Where is","Tell me about","What is the weather","How far is "], null),new cljs.core.Keyword(null,"count","count",2139924085));

view3d.core.function1 = (function view3d$core$questionnaire_$_function1(a){
var pred__12535 = cljs.core._EQ_;
var expr__12536 = cljs.reader.read_string.call(null,a);
if(cljs.core.truth_(pred__12535.call(null,(0),expr__12536))){
return view3d.core.what_is.call(null);
} else {
if(cljs.core.truth_(pred__12535.call(null,(1),expr__12536))){
return view3d.core.where_is.call(null);
} else {
if(cljs.core.truth_(pred__12535.call(null,(2),expr__12536))){
return view3d.core.tell_about.call(null);
} else {
if(cljs.core.truth_(pred__12535.call(null,(3),expr__12536))){
return view3d.core.weather.call(null);
} else {
if(cljs.core.truth_(pred__12535.call(null,(4),expr__12536))){
return view3d.core.how_far_is.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12536)].join('')));
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
var vec__12539 = temp__4655__auto__;
var lat = cljs.core.nth.call(null,vec__12539,(0),null);
var lon = cljs.core.nth.call(null,vec__12539,(1),null);
cljs.core._vreset_BANG_.call(null,view3d.core.boat,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.core.boat),new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon], null)));

view3d.core.fly_to.call(null,lat,lon,new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.camera)),(0),(2));

view3d.core.set_html_BANG_.call(null,"course",new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.boat)));

view3d.core.set_html_BANG_.call(null,"helm-tit","helm");

view3d.core.set_html_BANG_.call(null,"helm",view3d.core.helm_control);

view3d.core.set_html_BANG_.call(null,"throttle","throttle");

view3d.core.set_html_BANG_.call(null,"throttle-fld",view3d.core.throttle_control);

view3d.core.camera_control.call(null);

cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"CAMERA","CAMERA",-109369139),view3d.core.camera], null));

cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"BOAT","BOAT",96160898),view3d.core.boat], null));

view3d.core.repeater.call(null,((function (vec__12539,lat,lon,temp__4655__auto__){
return (function (){
return view3d.core.boat_move.call(null);
});})(vec__12539,lat,lon,temp__4655__auto__))
,view3d.core.BOAT_TIO);

view3d.core.repeater.call(null,((function (vec__12539,lat,lon,temp__4655__auto__){
return (function (){
return view3d.core.camera_work.call(null);
});})(vec__12539,lat,lon,temp__4655__auto__))
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
