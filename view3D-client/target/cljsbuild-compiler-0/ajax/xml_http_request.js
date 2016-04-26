// Compiled by ClojureScript 1.7.228 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__8442,handler){
var map__8443 = p__8442;
var map__8443__$1 = ((((!((map__8443 == null)))?((((map__8443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8443):map__8443);
var uri = cljs.core.get.call(null,map__8443__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__8443__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__8443__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__8443__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__8443__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__8443__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__8443__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__8443,map__8443__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__8441_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__8441_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__8443,map__8443__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___8451 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___8451)){
var response_type_8452 = temp__4657__auto___8451;
this$__$1.responseType = cljs.core.name.call(null,response_type_8452);
} else {
}

var seq__8445_8453 = cljs.core.seq.call(null,headers);
var chunk__8446_8454 = null;
var count__8447_8455 = (0);
var i__8448_8456 = (0);
while(true){
if((i__8448_8456 < count__8447_8455)){
var vec__8449_8457 = cljs.core._nth.call(null,chunk__8446_8454,i__8448_8456);
var k_8458 = cljs.core.nth.call(null,vec__8449_8457,(0),null);
var v_8459 = cljs.core.nth.call(null,vec__8449_8457,(1),null);
this$__$1.setRequestHeader(k_8458,v_8459);

var G__8460 = seq__8445_8453;
var G__8461 = chunk__8446_8454;
var G__8462 = count__8447_8455;
var G__8463 = (i__8448_8456 + (1));
seq__8445_8453 = G__8460;
chunk__8446_8454 = G__8461;
count__8447_8455 = G__8462;
i__8448_8456 = G__8463;
continue;
} else {
var temp__4657__auto___8464 = cljs.core.seq.call(null,seq__8445_8453);
if(temp__4657__auto___8464){
var seq__8445_8465__$1 = temp__4657__auto___8464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8445_8465__$1)){
var c__6959__auto___8466 = cljs.core.chunk_first.call(null,seq__8445_8465__$1);
var G__8467 = cljs.core.chunk_rest.call(null,seq__8445_8465__$1);
var G__8468 = c__6959__auto___8466;
var G__8469 = cljs.core.count.call(null,c__6959__auto___8466);
var G__8470 = (0);
seq__8445_8453 = G__8467;
chunk__8446_8454 = G__8468;
count__8447_8455 = G__8469;
i__8448_8456 = G__8470;
continue;
} else {
var vec__8450_8471 = cljs.core.first.call(null,seq__8445_8465__$1);
var k_8472 = cljs.core.nth.call(null,vec__8450_8471,(0),null);
var v_8473 = cljs.core.nth.call(null,vec__8450_8471,(1),null);
this$__$1.setRequestHeader(k_8472,v_8473);

var G__8474 = cljs.core.next.call(null,seq__8445_8465__$1);
var G__8475 = null;
var G__8476 = (0);
var G__8477 = (0);
seq__8445_8453 = G__8474;
chunk__8446_8454 = G__8475;
count__8447_8455 = G__8476;
i__8448_8456 = G__8477;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6156__auto__ = body;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});
