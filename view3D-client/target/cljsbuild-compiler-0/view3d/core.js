// Compiled by ClojureScript 1.7.228 {}
goog.provide('view3d.core');
goog.require('cljs.core');
goog.require('ajax.core');
cljs.core.enable_console_print_BANG_.call(null);
view3d.core.URL_CMD = "http://localhost:4444/command/";
view3d.core.by_id = (function view3d$core$by_id(id){
return document.getElementById(id);
});
view3d.core.get_html = (function view3d$core$get_html(id){
return view3d.core.by_id.call(null,id).innerHTML;
});
view3d.core.set_html_BANG_ = (function view3d$core$set_html_BANG_(id,msg){
return view3d.core.by_id.call(null,id).innerHTML = msg;
});
view3d.core.error_handler = (function view3d$core$error_handler(p__8697){
var map__8700 = p__8697;
var map__8700__$1 = ((((!((map__8700 == null)))?((((map__8700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8700):map__8700);
var status = cljs.core.get.call(null,map__8700__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__8700__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
view3d.core.no_handler = (function view3d$core$no_handler(response){
return null;
});
view3d.core.helm_control = "<input type='range' min='-100' max='100' step='10' value='0'\n  onchange='javascript:view3d.core.helm(this.value)'>";
view3d.core.helm = (function view3d$core$helm(val){
var cmd = (((((-20) <= val)) && ((val <= (20))))?"steady":(((val > (80)))?"hard-a-starboard":(((val > (20)))?"starboard":(((val < (-80)))?"hard-a-port":(((val < (-20)))?"port":null)))));
var url = [cljs.core.str(view3d.core.URL_CMD),cljs.core.str("?helm="),cljs.core.str(cmd)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),view3d.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.core.error_handler], null));
});
view3d.core.throttle_control = "<input type='test' value='0' style='width:40px'\n  onchange='javascript:view3d.core.throttle(this.value)'>";
view3d.core.throttle = (function view3d$core$throttle(val){
var url = [cljs.core.str(view3d.core.URL_CMD),cljs.core.str("?throttle="),cljs.core.str(val)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),view3d.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.core.error_handler], null));
});
view3d.core.init = (function view3d$core$init(){
var x = (1);
view3d.core.set_html_BANG_.call(null,"helm-title","helm");

view3d.core.set_html_BANG_.call(null,"helm",view3d.core.helm_control);

view3d.core.set_html_BANG_.call(null,"throttle-title","throttle");

return view3d.core.set_html_BANG_.call(null,"throttle",view3d.core.throttle_control);
});
window.onload = view3d.core.init.call(null);
