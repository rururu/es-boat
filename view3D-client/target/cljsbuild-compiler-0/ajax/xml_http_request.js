// Compiled by ClojureScript 1.7.228 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__8391,handler){
var map__8392 = p__8391;
var map__8392__$1 = ((((!((map__8392 == null)))?((((map__8392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8392):map__8392);
var uri = cljs.core.get.call(null,map__8392__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__8392__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__8392__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__8392__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__8392__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__8392__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__8392__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__8392,map__8392__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__8390_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__8390_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__8392,map__8392__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___8400 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___8400)){
var response_type_8401 = temp__4657__auto___8400;
this$__$1.responseType = cljs.core.name.call(null,response_type_8401);
} else {
}

var seq__8394_8402 = cljs.core.seq.call(null,headers);
var chunk__8395_8403 = null;
var count__8396_8404 = (0);
var i__8397_8405 = (0);
while(true){
if((i__8397_8405 < count__8396_8404)){
var vec__8398_8406 = cljs.core._nth.call(null,chunk__8395_8403,i__8397_8405);
var k_8407 = cljs.core.nth.call(null,vec__8398_8406,(0),null);
var v_8408 = cljs.core.nth.call(null,vec__8398_8406,(1),null);
this$__$1.setRequestHeader(k_8407,v_8408);

var G__8409 = seq__8394_8402;
var G__8410 = chunk__8395_8403;
var G__8411 = count__8396_8404;
var G__8412 = (i__8397_8405 + (1));
seq__8394_8402 = G__8409;
chunk__8395_8403 = G__8410;
count__8396_8404 = G__8411;
i__8397_8405 = G__8412;
continue;
} else {
var temp__4657__auto___8413 = cljs.core.seq.call(null,seq__8394_8402);
if(temp__4657__auto___8413){
var seq__8394_8414__$1 = temp__4657__auto___8413;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8394_8414__$1)){
var c__6959__auto___8415 = cljs.core.chunk_first.call(null,seq__8394_8414__$1);
var G__8416 = cljs.core.chunk_rest.call(null,seq__8394_8414__$1);
var G__8417 = c__6959__auto___8415;
var G__8418 = cljs.core.count.call(null,c__6959__auto___8415);
var G__8419 = (0);
seq__8394_8402 = G__8416;
chunk__8395_8403 = G__8417;
count__8396_8404 = G__8418;
i__8397_8405 = G__8419;
continue;
} else {
var vec__8399_8420 = cljs.core.first.call(null,seq__8394_8414__$1);
var k_8421 = cljs.core.nth.call(null,vec__8399_8420,(0),null);
var v_8422 = cljs.core.nth.call(null,vec__8399_8420,(1),null);
this$__$1.setRequestHeader(k_8421,v_8422);

var G__8423 = cljs.core.next.call(null,seq__8394_8414__$1);
var G__8424 = null;
var G__8425 = (0);
var G__8426 = (0);
seq__8394_8402 = G__8423;
chunk__8395_8403 = G__8424;
count__8396_8404 = G__8425;
i__8397_8405 = G__8426;
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
