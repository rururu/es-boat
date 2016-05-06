// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args10529 = [];
var len__7214__auto___10535 = arguments.length;
var i__7215__auto___10536 = (0);
while(true){
if((i__7215__auto___10536 < len__7214__auto___10535)){
args10529.push((arguments[i__7215__auto___10536]));

var G__10537 = (i__7215__auto___10536 + (1));
i__7215__auto___10536 = G__10537;
continue;
} else {
}
break;
}

var G__10531 = args10529.length;
switch (G__10531) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10529.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async10532 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10532 = (function (f,blockable,meta10533){
this.f = f;
this.blockable = blockable;
this.meta10533 = meta10533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10534,meta10533__$1){
var self__ = this;
var _10534__$1 = this;
return (new cljs.core.async.t_cljs$core$async10532(self__.f,self__.blockable,meta10533__$1));
});

cljs.core.async.t_cljs$core$async10532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10534){
var self__ = this;
var _10534__$1 = this;
return self__.meta10533;
});

cljs.core.async.t_cljs$core$async10532.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10532.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10532.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async10532.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async10532.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10533","meta10533",-1463098985,null)], null);
});

cljs.core.async.t_cljs$core$async10532.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10532";

cljs.core.async.t_cljs$core$async10532.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10532");
});

cljs.core.async.__GT_t_cljs$core$async10532 = (function cljs$core$async$__GT_t_cljs$core$async10532(f__$1,blockable__$1,meta10533){
return (new cljs.core.async.t_cljs$core$async10532(f__$1,blockable__$1,meta10533));
});

}

return (new cljs.core.async.t_cljs$core$async10532(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args10541 = [];
var len__7214__auto___10544 = arguments.length;
var i__7215__auto___10545 = (0);
while(true){
if((i__7215__auto___10545 < len__7214__auto___10544)){
args10541.push((arguments[i__7215__auto___10545]));

var G__10546 = (i__7215__auto___10545 + (1));
i__7215__auto___10545 = G__10546;
continue;
} else {
}
break;
}

var G__10543 = args10541.length;
switch (G__10543) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10541.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args10548 = [];
var len__7214__auto___10551 = arguments.length;
var i__7215__auto___10552 = (0);
while(true){
if((i__7215__auto___10552 < len__7214__auto___10551)){
args10548.push((arguments[i__7215__auto___10552]));

var G__10553 = (i__7215__auto___10552 + (1));
i__7215__auto___10552 = G__10553;
continue;
} else {
}
break;
}

var G__10550 = args10548.length;
switch (G__10550) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10548.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args10555 = [];
var len__7214__auto___10558 = arguments.length;
var i__7215__auto___10559 = (0);
while(true){
if((i__7215__auto___10559 < len__7214__auto___10558)){
args10555.push((arguments[i__7215__auto___10559]));

var G__10560 = (i__7215__auto___10559 + (1));
i__7215__auto___10559 = G__10560;
continue;
} else {
}
break;
}

var G__10557 = args10555.length;
switch (G__10557) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10555.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_10562 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_10562);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_10562,ret){
return (function (){
return fn1.call(null,val_10562);
});})(val_10562,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args10563 = [];
var len__7214__auto___10566 = arguments.length;
var i__7215__auto___10567 = (0);
while(true){
if((i__7215__auto___10567 < len__7214__auto___10566)){
args10563.push((arguments[i__7215__auto___10567]));

var G__10568 = (i__7215__auto___10567 + (1));
i__7215__auto___10567 = G__10568;
continue;
} else {
}
break;
}

var G__10565 = args10563.length;
switch (G__10565) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10563.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7059__auto___10570 = n;
var x_10571 = (0);
while(true){
if((x_10571 < n__7059__auto___10570)){
(a[x_10571] = (0));

var G__10572 = (x_10571 + (1));
x_10571 = G__10572;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__10573 = (i + (1));
i = G__10573;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async10577 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10577 = (function (alt_flag,flag,meta10578){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta10578 = meta10578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10579,meta10578__$1){
var self__ = this;
var _10579__$1 = this;
return (new cljs.core.async.t_cljs$core$async10577(self__.alt_flag,self__.flag,meta10578__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async10577.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10579){
var self__ = this;
var _10579__$1 = this;
return self__.meta10578;
});})(flag))
;

cljs.core.async.t_cljs$core$async10577.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10577.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async10577.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10577.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10577.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10578","meta10578",-1303519271,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async10577.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10577";

cljs.core.async.t_cljs$core$async10577.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10577");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async10577 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10577(alt_flag__$1,flag__$1,meta10578){
return (new cljs.core.async.t_cljs$core$async10577(alt_flag__$1,flag__$1,meta10578));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async10577(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async10583 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10583 = (function (alt_handler,flag,cb,meta10584){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta10584 = meta10584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10585,meta10584__$1){
var self__ = this;
var _10585__$1 = this;
return (new cljs.core.async.t_cljs$core$async10583(self__.alt_handler,self__.flag,self__.cb,meta10584__$1));
});

cljs.core.async.t_cljs$core$async10583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10585){
var self__ = this;
var _10585__$1 = this;
return self__.meta10584;
});

cljs.core.async.t_cljs$core$async10583.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10583.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async10583.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10583.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async10583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10584","meta10584",-767409915,null)], null);
});

cljs.core.async.t_cljs$core$async10583.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10583";

cljs.core.async.t_cljs$core$async10583.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10583");
});

cljs.core.async.__GT_t_cljs$core$async10583 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10583(alt_handler__$1,flag__$1,cb__$1,meta10584){
return (new cljs.core.async.t_cljs$core$async10583(alt_handler__$1,flag__$1,cb__$1,meta10584));
});

}

return (new cljs.core.async.t_cljs$core$async10583(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10586_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10586_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10587_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10587_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6156__auto__ = wport;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return port;
}
})()], null));
} else {
var G__10588 = (i + (1));
i = G__10588;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6156__auto__ = ret;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6144__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6144__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6144__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___10594 = arguments.length;
var i__7215__auto___10595 = (0);
while(true){
if((i__7215__auto___10595 < len__7214__auto___10594)){
args__7221__auto__.push((arguments[i__7215__auto___10595]));

var G__10596 = (i__7215__auto___10595 + (1));
i__7215__auto___10595 = G__10596;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10591){
var map__10592 = p__10591;
var map__10592__$1 = ((((!((map__10592 == null)))?((((map__10592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10592):map__10592);
var opts = map__10592__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10589){
var G__10590 = cljs.core.first.call(null,seq10589);
var seq10589__$1 = cljs.core.next.call(null,seq10589);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10590,seq10589__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args10597 = [];
var len__7214__auto___10647 = arguments.length;
var i__7215__auto___10648 = (0);
while(true){
if((i__7215__auto___10648 < len__7214__auto___10647)){
args10597.push((arguments[i__7215__auto___10648]));

var G__10649 = (i__7215__auto___10648 + (1));
i__7215__auto___10648 = G__10649;
continue;
} else {
}
break;
}

var G__10599 = args10597.length;
switch (G__10599) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10597.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10484__auto___10651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10484__auto___10651){
return (function (){
var f__10485__auto__ = (function (){var switch__10372__auto__ = ((function (c__10484__auto___10651){
return (function (state_10623){
var state_val_10624 = (state_10623[(1)]);
if((state_val_10624 === (7))){
var inst_10619 = (state_10623[(2)]);
var state_10623__$1 = state_10623;
var statearr_10625_10652 = state_10623__$1;
(statearr_10625_10652[(2)] = inst_10619);

(statearr_10625_10652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10624 === (1))){
var state_10623__$1 = state_10623;
var statearr_10626_10653 = state_10623__$1;
(statearr_10626_10653[(2)] = null);

(statearr_10626_10653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10624 === (4))){
var inst_10602 = (state_10623[(7)]);
var inst_10602__$1 = (state_10623[(2)]);
var inst_10603 = (inst_10602__$1 == null);
var state_10623__$1 = (function (){var statearr_10627 = state_10623;
(statearr_10627[(7)] = inst_10602__$1);

return statearr_10627;
})();
if(cljs.core.truth_(inst_10603)){
var statearr_10628_10654 = state_10623__$1;
(statearr_10628_10654[(1)] = (5));

} else {
var statearr_10629_10655 = state_10623__$1;
(statearr_10629_10655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10624 === (13))){
var state_10623__$1 = state_10623;
var statearr_10630_10656 = state_10623__$1;
(statearr_10630_10656[(2)] = null);

(statearr_10630_10656[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10624 === (6))){
var inst_10602 = (state_10623[(7)]);
var state_10623__$1 = state_10623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10623__$1,(11),to,inst_10602);
} else {
if((state_val_10624 === (3))){
var inst_10621 = (state_10623[(2)]);
var state_10623__$1 = state_10623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10623__$1,inst_10621);
} else {
if((state_val_10624 === (12))){
var state_10623__$1 = state_10623;
var statearr_10631_10657 = state_10623__$1;
(statearr_10631_10657[(2)] = null);

(statearr_10631_10657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10624 === (2))){
var state_10623__$1 = state_10623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10623__$1,(4),from);
} else {
if((state_val_10624 === (11))){
var inst_10612 = (state_10623[(2)]);
var state_10623__$1 = state_10623;
if(cljs.core.truth_(inst_10612)){
var statearr_10632_10658 = state_10623__$1;
(statearr_10632_10658[(1)] = (12));

} else {
var statearr_10633_10659 = state_10623__$1;
(statearr_10633_10659[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10624 === (9))){
var state_10623__$1 = state_10623;
var statearr_10634_10660 = state_10623__$1;
(statearr_10634_10660[(2)] = null);

(statearr_10634_10660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10624 === (5))){
var state_10623__$1 = state_10623;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10635_10661 = state_10623__$1;
(statearr_10635_10661[(1)] = (8));

} else {
var statearr_10636_10662 = state_10623__$1;
(statearr_10636_10662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10624 === (14))){
var inst_10617 = (state_10623[(2)]);
var state_10623__$1 = state_10623;
var statearr_10637_10663 = state_10623__$1;
(statearr_10637_10663[(2)] = inst_10617);

(statearr_10637_10663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10624 === (10))){
var inst_10609 = (state_10623[(2)]);
var state_10623__$1 = state_10623;
var statearr_10638_10664 = state_10623__$1;
(statearr_10638_10664[(2)] = inst_10609);

(statearr_10638_10664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10624 === (8))){
var inst_10606 = cljs.core.async.close_BANG_.call(null,to);
var state_10623__$1 = state_10623;
var statearr_10639_10665 = state_10623__$1;
(statearr_10639_10665[(2)] = inst_10606);

(statearr_10639_10665[(1)] = (10));


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
}
}
}
}
}
}
}
});})(c__10484__auto___10651))
;
return ((function (switch__10372__auto__,c__10484__auto___10651){
return (function() {
var cljs$core$async$state_machine__10373__auto__ = null;
var cljs$core$async$state_machine__10373__auto____0 = (function (){
var statearr_10643 = [null,null,null,null,null,null,null,null];
(statearr_10643[(0)] = cljs$core$async$state_machine__10373__auto__);

(statearr_10643[(1)] = (1));

return statearr_10643;
});
var cljs$core$async$state_machine__10373__auto____1 = (function (state_10623){
while(true){
var ret_value__10374__auto__ = (function (){try{while(true){
var result__10375__auto__ = switch__10372__auto__.call(null,state_10623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10375__auto__;
}
break;
}
}catch (e10644){if((e10644 instanceof Object)){
var ex__10376__auto__ = e10644;
var statearr_10645_10666 = state_10623;
(statearr_10645_10666[(5)] = ex__10376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10667 = state_10623;
state_10623 = G__10667;
continue;
} else {
return ret_value__10374__auto__;
}
break;
}
});
cljs$core$async$state_machine__10373__auto__ = function(state_10623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10373__auto____1.call(this,state_10623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10373__auto____0;
cljs$core$async$state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10373__auto____1;
return cljs$core$async$state_machine__10373__auto__;
})()
;})(switch__10372__auto__,c__10484__auto___10651))
})();
var state__10486__auto__ = (function (){var statearr_10646 = f__10485__auto__.call(null);
(statearr_10646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10484__auto___10651);

return statearr_10646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10486__auto__);
});})(c__10484__auto___10651))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__10851){
var vec__10852 = p__10851;
var v = cljs.core.nth.call(null,vec__10852,(0),null);
var p = cljs.core.nth.call(null,vec__10852,(1),null);
var job = vec__10852;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10484__auto___11034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10484__auto___11034,res,vec__10852,v,p,job,jobs,results){
return (function (){
var f__10485__auto__ = (function (){var switch__10372__auto__ = ((function (c__10484__auto___11034,res,vec__10852,v,p,job,jobs,results){
return (function (state_10857){
var state_val_10858 = (state_10857[(1)]);
if((state_val_10858 === (1))){
var state_10857__$1 = state_10857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10857__$1,(2),res,v);
} else {
if((state_val_10858 === (2))){
var inst_10854 = (state_10857[(2)]);
var inst_10855 = cljs.core.async.close_BANG_.call(null,res);
var state_10857__$1 = (function (){var statearr_10859 = state_10857;
(statearr_10859[(7)] = inst_10854);

return statearr_10859;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10857__$1,inst_10855);
} else {
return null;
}
}
});})(c__10484__auto___11034,res,vec__10852,v,p,job,jobs,results))
;
return ((function (switch__10372__auto__,c__10484__auto___11034,res,vec__10852,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____0 = (function (){
var statearr_10863 = [null,null,null,null,null,null,null,null];
(statearr_10863[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__);

(statearr_10863[(1)] = (1));

return statearr_10863;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____1 = (function (state_10857){
while(true){
var ret_value__10374__auto__ = (function (){try{while(true){
var result__10375__auto__ = switch__10372__auto__.call(null,state_10857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10375__auto__;
}
break;
}
}catch (e10864){if((e10864 instanceof Object)){
var ex__10376__auto__ = e10864;
var statearr_10865_11035 = state_10857;
(statearr_10865_11035[(5)] = ex__10376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11036 = state_10857;
state_10857 = G__11036;
continue;
} else {
return ret_value__10374__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__ = function(state_10857){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____1.call(this,state_10857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__;
})()
;})(switch__10372__auto__,c__10484__auto___11034,res,vec__10852,v,p,job,jobs,results))
})();
var state__10486__auto__ = (function (){var statearr_10866 = f__10485__auto__.call(null);
(statearr_10866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10484__auto___11034);

return statearr_10866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10486__auto__);
});})(c__10484__auto___11034,res,vec__10852,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10867){
var vec__10868 = p__10867;
var v = cljs.core.nth.call(null,vec__10868,(0),null);
var p = cljs.core.nth.call(null,vec__10868,(1),null);
var job = vec__10868;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7059__auto___11037 = n;
var __11038 = (0);
while(true){
if((__11038 < n__7059__auto___11037)){
var G__10869_11039 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__10869_11039) {
case "compute":
var c__10484__auto___11041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11038,c__10484__auto___11041,G__10869_11039,n__7059__auto___11037,jobs,results,process,async){
return (function (){
var f__10485__auto__ = (function (){var switch__10372__auto__ = ((function (__11038,c__10484__auto___11041,G__10869_11039,n__7059__auto___11037,jobs,results,process,async){
return (function (state_10882){
var state_val_10883 = (state_10882[(1)]);
if((state_val_10883 === (1))){
var state_10882__$1 = state_10882;
var statearr_10884_11042 = state_10882__$1;
(statearr_10884_11042[(2)] = null);

(statearr_10884_11042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10883 === (2))){
var state_10882__$1 = state_10882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10882__$1,(4),jobs);
} else {
if((state_val_10883 === (3))){
var inst_10880 = (state_10882[(2)]);
var state_10882__$1 = state_10882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10882__$1,inst_10880);
} else {
if((state_val_10883 === (4))){
var inst_10872 = (state_10882[(2)]);
var inst_10873 = process.call(null,inst_10872);
var state_10882__$1 = state_10882;
if(cljs.core.truth_(inst_10873)){
var statearr_10885_11043 = state_10882__$1;
(statearr_10885_11043[(1)] = (5));

} else {
var statearr_10886_11044 = state_10882__$1;
(statearr_10886_11044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10883 === (5))){
var state_10882__$1 = state_10882;
var statearr_10887_11045 = state_10882__$1;
(statearr_10887_11045[(2)] = null);

(statearr_10887_11045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10883 === (6))){
var state_10882__$1 = state_10882;
var statearr_10888_11046 = state_10882__$1;
(statearr_10888_11046[(2)] = null);

(statearr_10888_11046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10883 === (7))){
var inst_10878 = (state_10882[(2)]);
var state_10882__$1 = state_10882;
var statearr_10889_11047 = state_10882__$1;
(statearr_10889_11047[(2)] = inst_10878);

(statearr_10889_11047[(1)] = (3));


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
});})(__11038,c__10484__auto___11041,G__10869_11039,n__7059__auto___11037,jobs,results,process,async))
;
return ((function (__11038,switch__10372__auto__,c__10484__auto___11041,G__10869_11039,n__7059__auto___11037,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____0 = (function (){
var statearr_10893 = [null,null,null,null,null,null,null];
(statearr_10893[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__);

(statearr_10893[(1)] = (1));

return statearr_10893;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____1 = (function (state_10882){
while(true){
var ret_value__10374__auto__ = (function (){try{while(true){
var result__10375__auto__ = switch__10372__auto__.call(null,state_10882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10375__auto__;
}
break;
}
}catch (e10894){if((e10894 instanceof Object)){
var ex__10376__auto__ = e10894;
var statearr_10895_11048 = state_10882;
(statearr_10895_11048[(5)] = ex__10376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11049 = state_10882;
state_10882 = G__11049;
continue;
} else {
return ret_value__10374__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__ = function(state_10882){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____1.call(this,state_10882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__;
})()
;})(__11038,switch__10372__auto__,c__10484__auto___11041,G__10869_11039,n__7059__auto___11037,jobs,results,process,async))
})();
var state__10486__auto__ = (function (){var statearr_10896 = f__10485__auto__.call(null);
(statearr_10896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10484__auto___11041);

return statearr_10896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10486__auto__);
});})(__11038,c__10484__auto___11041,G__10869_11039,n__7059__auto___11037,jobs,results,process,async))
);


break;
case "async":
var c__10484__auto___11050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11038,c__10484__auto___11050,G__10869_11039,n__7059__auto___11037,jobs,results,process,async){
return (function (){
var f__10485__auto__ = (function (){var switch__10372__auto__ = ((function (__11038,c__10484__auto___11050,G__10869_11039,n__7059__auto___11037,jobs,results,process,async){
return (function (state_10909){
var state_val_10910 = (state_10909[(1)]);
if((state_val_10910 === (1))){
var state_10909__$1 = state_10909;
var statearr_10911_11051 = state_10909__$1;
(statearr_10911_11051[(2)] = null);

(statearr_10911_11051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10910 === (2))){
var state_10909__$1 = state_10909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10909__$1,(4),jobs);
} else {
if((state_val_10910 === (3))){
var inst_10907 = (state_10909[(2)]);
var state_10909__$1 = state_10909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10909__$1,inst_10907);
} else {
if((state_val_10910 === (4))){
var inst_10899 = (state_10909[(2)]);
var inst_10900 = async.call(null,inst_10899);
var state_10909__$1 = state_10909;
if(cljs.core.truth_(inst_10900)){
var statearr_10912_11052 = state_10909__$1;
(statearr_10912_11052[(1)] = (5));

} else {
var statearr_10913_11053 = state_10909__$1;
(statearr_10913_11053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10910 === (5))){
var state_10909__$1 = state_10909;
var statearr_10914_11054 = state_10909__$1;
(statearr_10914_11054[(2)] = null);

(statearr_10914_11054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10910 === (6))){
var state_10909__$1 = state_10909;
var statearr_10915_11055 = state_10909__$1;
(statearr_10915_11055[(2)] = null);

(statearr_10915_11055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10910 === (7))){
var inst_10905 = (state_10909[(2)]);
var state_10909__$1 = state_10909;
var statearr_10916_11056 = state_10909__$1;
(statearr_10916_11056[(2)] = inst_10905);

(statearr_10916_11056[(1)] = (3));


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
});})(__11038,c__10484__auto___11050,G__10869_11039,n__7059__auto___11037,jobs,results,process,async))
;
return ((function (__11038,switch__10372__auto__,c__10484__auto___11050,G__10869_11039,n__7059__auto___11037,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____0 = (function (){
var statearr_10920 = [null,null,null,null,null,null,null];
(statearr_10920[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__);

(statearr_10920[(1)] = (1));

return statearr_10920;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____1 = (function (state_10909){
while(true){
var ret_value__10374__auto__ = (function (){try{while(true){
var result__10375__auto__ = switch__10372__auto__.call(null,state_10909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10375__auto__;
}
break;
}
}catch (e10921){if((e10921 instanceof Object)){
var ex__10376__auto__ = e10921;
var statearr_10922_11057 = state_10909;
(statearr_10922_11057[(5)] = ex__10376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11058 = state_10909;
state_10909 = G__11058;
continue;
} else {
return ret_value__10374__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__ = function(state_10909){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____1.call(this,state_10909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__;
})()
;})(__11038,switch__10372__auto__,c__10484__auto___11050,G__10869_11039,n__7059__auto___11037,jobs,results,process,async))
})();
var state__10486__auto__ = (function (){var statearr_10923 = f__10485__auto__.call(null);
(statearr_10923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10484__auto___11050);

return statearr_10923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10486__auto__);
});})(__11038,c__10484__auto___11050,G__10869_11039,n__7059__auto___11037,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__11059 = (__11038 + (1));
__11038 = G__11059;
continue;
} else {
}
break;
}

var c__10484__auto___11060 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10484__auto___11060,jobs,results,process,async){
return (function (){
var f__10485__auto__ = (function (){var switch__10372__auto__ = ((function (c__10484__auto___11060,jobs,results,process,async){
return (function (state_10945){
var state_val_10946 = (state_10945[(1)]);
if((state_val_10946 === (1))){
var state_10945__$1 = state_10945;
var statearr_10947_11061 = state_10945__$1;
(statearr_10947_11061[(2)] = null);

(statearr_10947_11061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10946 === (2))){
var state_10945__$1 = state_10945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10945__$1,(4),from);
} else {
if((state_val_10946 === (3))){
var inst_10943 = (state_10945[(2)]);
var state_10945__$1 = state_10945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10945__$1,inst_10943);
} else {
if((state_val_10946 === (4))){
var inst_10926 = (state_10945[(7)]);
var inst_10926__$1 = (state_10945[(2)]);
var inst_10927 = (inst_10926__$1 == null);
var state_10945__$1 = (function (){var statearr_10948 = state_10945;
(statearr_10948[(7)] = inst_10926__$1);

return statearr_10948;
})();
if(cljs.core.truth_(inst_10927)){
var statearr_10949_11062 = state_10945__$1;
(statearr_10949_11062[(1)] = (5));

} else {
var statearr_10950_11063 = state_10945__$1;
(statearr_10950_11063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10946 === (5))){
var inst_10929 = cljs.core.async.close_BANG_.call(null,jobs);
var state_10945__$1 = state_10945;
var statearr_10951_11064 = state_10945__$1;
(statearr_10951_11064[(2)] = inst_10929);

(statearr_10951_11064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10946 === (6))){
var inst_10926 = (state_10945[(7)]);
var inst_10931 = (state_10945[(8)]);
var inst_10931__$1 = cljs.core.async.chan.call(null,(1));
var inst_10932 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10933 = [inst_10926,inst_10931__$1];
var inst_10934 = (new cljs.core.PersistentVector(null,2,(5),inst_10932,inst_10933,null));
var state_10945__$1 = (function (){var statearr_10952 = state_10945;
(statearr_10952[(8)] = inst_10931__$1);

return statearr_10952;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10945__$1,(8),jobs,inst_10934);
} else {
if((state_val_10946 === (7))){
var inst_10941 = (state_10945[(2)]);
var state_10945__$1 = state_10945;
var statearr_10953_11065 = state_10945__$1;
(statearr_10953_11065[(2)] = inst_10941);

(statearr_10953_11065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10946 === (8))){
var inst_10931 = (state_10945[(8)]);
var inst_10936 = (state_10945[(2)]);
var state_10945__$1 = (function (){var statearr_10954 = state_10945;
(statearr_10954[(9)] = inst_10936);

return statearr_10954;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10945__$1,(9),results,inst_10931);
} else {
if((state_val_10946 === (9))){
var inst_10938 = (state_10945[(2)]);
var state_10945__$1 = (function (){var statearr_10955 = state_10945;
(statearr_10955[(10)] = inst_10938);

return statearr_10955;
})();
var statearr_10956_11066 = state_10945__$1;
(statearr_10956_11066[(2)] = null);

(statearr_10956_11066[(1)] = (2));


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
}
}
});})(c__10484__auto___11060,jobs,results,process,async))
;
return ((function (switch__10372__auto__,c__10484__auto___11060,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____0 = (function (){
var statearr_10960 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10960[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__);

(statearr_10960[(1)] = (1));

return statearr_10960;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____1 = (function (state_10945){
while(true){
var ret_value__10374__auto__ = (function (){try{while(true){
var result__10375__auto__ = switch__10372__auto__.call(null,state_10945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10375__auto__;
}
break;
}
}catch (e10961){if((e10961 instanceof Object)){
var ex__10376__auto__ = e10961;
var statearr_10962_11067 = state_10945;
(statearr_10962_11067[(5)] = ex__10376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11068 = state_10945;
state_10945 = G__11068;
continue;
} else {
return ret_value__10374__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__ = function(state_10945){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____1.call(this,state_10945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__;
})()
;})(switch__10372__auto__,c__10484__auto___11060,jobs,results,process,async))
})();
var state__10486__auto__ = (function (){var statearr_10963 = f__10485__auto__.call(null);
(statearr_10963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10484__auto___11060);

return statearr_10963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10486__auto__);
});})(c__10484__auto___11060,jobs,results,process,async))
);


var c__10484__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10484__auto__,jobs,results,process,async){
return (function (){
var f__10485__auto__ = (function (){var switch__10372__auto__ = ((function (c__10484__auto__,jobs,results,process,async){
return (function (state_11001){
var state_val_11002 = (state_11001[(1)]);
if((state_val_11002 === (7))){
var inst_10997 = (state_11001[(2)]);
var state_11001__$1 = state_11001;
var statearr_11003_11069 = state_11001__$1;
(statearr_11003_11069[(2)] = inst_10997);

(statearr_11003_11069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (20))){
var state_11001__$1 = state_11001;
var statearr_11004_11070 = state_11001__$1;
(statearr_11004_11070[(2)] = null);

(statearr_11004_11070[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (1))){
var state_11001__$1 = state_11001;
var statearr_11005_11071 = state_11001__$1;
(statearr_11005_11071[(2)] = null);

(statearr_11005_11071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (4))){
var inst_10966 = (state_11001[(7)]);
var inst_10966__$1 = (state_11001[(2)]);
var inst_10967 = (inst_10966__$1 == null);
var state_11001__$1 = (function (){var statearr_11006 = state_11001;
(statearr_11006[(7)] = inst_10966__$1);

return statearr_11006;
})();
if(cljs.core.truth_(inst_10967)){
var statearr_11007_11072 = state_11001__$1;
(statearr_11007_11072[(1)] = (5));

} else {
var statearr_11008_11073 = state_11001__$1;
(statearr_11008_11073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (15))){
var inst_10979 = (state_11001[(8)]);
var state_11001__$1 = state_11001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11001__$1,(18),to,inst_10979);
} else {
if((state_val_11002 === (21))){
var inst_10992 = (state_11001[(2)]);
var state_11001__$1 = state_11001;
var statearr_11009_11074 = state_11001__$1;
(statearr_11009_11074[(2)] = inst_10992);

(statearr_11009_11074[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (13))){
var inst_10994 = (state_11001[(2)]);
var state_11001__$1 = (function (){var statearr_11010 = state_11001;
(statearr_11010[(9)] = inst_10994);

return statearr_11010;
})();
var statearr_11011_11075 = state_11001__$1;
(statearr_11011_11075[(2)] = null);

(statearr_11011_11075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (6))){
var inst_10966 = (state_11001[(7)]);
var state_11001__$1 = state_11001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11001__$1,(11),inst_10966);
} else {
if((state_val_11002 === (17))){
var inst_10987 = (state_11001[(2)]);
var state_11001__$1 = state_11001;
if(cljs.core.truth_(inst_10987)){
var statearr_11012_11076 = state_11001__$1;
(statearr_11012_11076[(1)] = (19));

} else {
var statearr_11013_11077 = state_11001__$1;
(statearr_11013_11077[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (3))){
var inst_10999 = (state_11001[(2)]);
var state_11001__$1 = state_11001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11001__$1,inst_10999);
} else {
if((state_val_11002 === (12))){
var inst_10976 = (state_11001[(10)]);
var state_11001__$1 = state_11001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11001__$1,(14),inst_10976);
} else {
if((state_val_11002 === (2))){
var state_11001__$1 = state_11001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11001__$1,(4),results);
} else {
if((state_val_11002 === (19))){
var state_11001__$1 = state_11001;
var statearr_11014_11078 = state_11001__$1;
(statearr_11014_11078[(2)] = null);

(statearr_11014_11078[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (11))){
var inst_10976 = (state_11001[(2)]);
var state_11001__$1 = (function (){var statearr_11015 = state_11001;
(statearr_11015[(10)] = inst_10976);

return statearr_11015;
})();
var statearr_11016_11079 = state_11001__$1;
(statearr_11016_11079[(2)] = null);

(statearr_11016_11079[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (9))){
var state_11001__$1 = state_11001;
var statearr_11017_11080 = state_11001__$1;
(statearr_11017_11080[(2)] = null);

(statearr_11017_11080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (5))){
var state_11001__$1 = state_11001;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11018_11081 = state_11001__$1;
(statearr_11018_11081[(1)] = (8));

} else {
var statearr_11019_11082 = state_11001__$1;
(statearr_11019_11082[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (14))){
var inst_10979 = (state_11001[(8)]);
var inst_10981 = (state_11001[(11)]);
var inst_10979__$1 = (state_11001[(2)]);
var inst_10980 = (inst_10979__$1 == null);
var inst_10981__$1 = cljs.core.not.call(null,inst_10980);
var state_11001__$1 = (function (){var statearr_11020 = state_11001;
(statearr_11020[(8)] = inst_10979__$1);

(statearr_11020[(11)] = inst_10981__$1);

return statearr_11020;
})();
if(inst_10981__$1){
var statearr_11021_11083 = state_11001__$1;
(statearr_11021_11083[(1)] = (15));

} else {
var statearr_11022_11084 = state_11001__$1;
(statearr_11022_11084[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (16))){
var inst_10981 = (state_11001[(11)]);
var state_11001__$1 = state_11001;
var statearr_11023_11085 = state_11001__$1;
(statearr_11023_11085[(2)] = inst_10981);

(statearr_11023_11085[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (10))){
var inst_10973 = (state_11001[(2)]);
var state_11001__$1 = state_11001;
var statearr_11024_11086 = state_11001__$1;
(statearr_11024_11086[(2)] = inst_10973);

(statearr_11024_11086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (18))){
var inst_10984 = (state_11001[(2)]);
var state_11001__$1 = state_11001;
var statearr_11025_11087 = state_11001__$1;
(statearr_11025_11087[(2)] = inst_10984);

(statearr_11025_11087[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11002 === (8))){
var inst_10970 = cljs.core.async.close_BANG_.call(null,to);
var state_11001__$1 = state_11001;
var statearr_11026_11088 = state_11001__$1;
(statearr_11026_11088[(2)] = inst_10970);

(statearr_11026_11088[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10484__auto__,jobs,results,process,async))
;
return ((function (switch__10372__auto__,c__10484__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____0 = (function (){
var statearr_11030 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11030[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__);

(statearr_11030[(1)] = (1));

return statearr_11030;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____1 = (function (state_11001){
while(true){
var ret_value__10374__auto__ = (function (){try{while(true){
var result__10375__auto__ = switch__10372__auto__.call(null,state_11001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10375__auto__;
}
break;
}
}catch (e11031){if((e11031 instanceof Object)){
var ex__10376__auto__ = e11031;
var statearr_11032_11089 = state_11001;
(statearr_11032_11089[(5)] = ex__10376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11090 = state_11001;
state_11001 = G__11090;
continue;
} else {
return ret_value__10374__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__ = function(state_11001){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____1.call(this,state_11001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10373__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10373__auto__;
})()
;})(switch__10372__auto__,c__10484__auto__,jobs,results,process,async))
})();
var state__10486__auto__ = (function (){var statearr_11033 = f__10485__auto__.call(null);
(statearr_11033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10484__auto__);

return statearr_11033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10486__auto__);
});})(c__10484__auto__,jobs,results,process,async))
);

return c__10484__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args11091 = [];
var len__7214__auto___11094 = arguments.length;
var i__7215__auto___11095 = (0);
while(true){
if((i__7215__auto___11095 < len__7214__auto___11094)){
args11091.push((arguments[i__7215__auto___11095]));

var G__11096 = (i__7215__auto___11095 + (1));
i__7215__auto___11095 = G__11096;
continue;
} else {
}
break;
}

var G__11093 = args11091.length;
switch (G__11093) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11091.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args11098 = [];
var len__7214__auto___11101 = arguments.length;
var i__7215__auto___11102 = (0);
while(true){
if((i__7215__auto___11102 < len__7214__auto___11101)){
args11098.push((arguments[i__7215__auto___11102]));

var G__11103 = (i__7215__auto___11102 + (1));
i__7215__auto___11102 = G__11103;
continue;
} else {
}
break;
}

var G__11100 = args11098.length;
switch (G__11100) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11098.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args11105 = [];
var len__7214__auto___11158 = arguments.length;
var i__7215__auto___11159 = (0);
while(true){
if((i__7215__auto___11159 < len__7214__auto___11158)){
args11105.push((arguments[i__7215__auto___11159]));

var G__11160 = (i__7215__auto___11159 + (1));
i__7215__auto___11159 = G__11160;
continue;
} else {
}
break;
}

var G__11107 = args11105.length;
switch (G__11107) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11105.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10484__auto___11162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10484__auto___11162,tc,fc){
return (function (){
var f__10485__auto__ = (function (){var switch__10372__auto__ = ((function (c__10484__auto___11162,tc,fc){
return (function (state_11133){
var state_val_11134 = (state_11133[(1)]);
if((state_val_11134 === (7))){
var inst_11129 = (state_11133[(2)]);
var state_11133__$1 = state_11133;
var statearr_11135_11163 = state_11133__$1;
(statearr_11135_11163[(2)] = inst_11129);

(statearr_11135_11163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (1))){
var state_11133__$1 = state_11133;
var statearr_11136_11164 = state_11133__$1;
(statearr_11136_11164[(2)] = null);

(statearr_11136_11164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (4))){
var inst_11110 = (state_11133[(7)]);
var inst_11110__$1 = (state_11133[(2)]);
var inst_11111 = (inst_11110__$1 == null);
var state_11133__$1 = (function (){var statearr_11137 = state_11133;
(statearr_11137[(7)] = inst_11110__$1);

return statearr_11137;
})();
if(cljs.core.truth_(inst_11111)){
var statearr_11138_11165 = state_11133__$1;
(statearr_11138_11165[(1)] = (5));

} else {
var statearr_11139_11166 = state_11133__$1;
(statearr_11139_11166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (13))){
var state_11133__$1 = state_11133;
var statearr_11140_11167 = state_11133__$1;
(statearr_11140_11167[(2)] = null);

(statearr_11140_11167[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (6))){
var inst_11110 = (state_11133[(7)]);
var inst_11116 = p.call(null,inst_11110);
var state_11133__$1 = state_11133;
if(cljs.core.truth_(inst_11116)){
var statearr_11141_11168 = state_11133__$1;
(statearr_11141_11168[(1)] = (9));

} else {
var statearr_11142_11169 = state_11133__$1;
(statearr_11142_11169[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (3))){
var inst_11131 = (state_11133[(2)]);
var state_11133__$1 = state_11133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11133__$1,inst_11131);
} else {
if((state_val_11134 === (12))){
var state_11133__$1 = state_11133;
var statearr_11143_11170 = state_11133__$1;
(statearr_11143_11170[(2)] = null);

(statearr_11143_11170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (2))){
var state_11133__$1 = state_11133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11133__$1,(4),ch);
} else {
if((state_val_11134 === (11))){
var inst_11110 = (state_11133[(7)]);
var inst_11120 = (state_11133[(2)]);
var state_11133__$1 = state_11133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11133__$1,(8),inst_11120,inst_11110);
} else {
if((state_val_11134 === (9))){
var state_11133__$1 = state_11133;
var statearr_11144_11171 = state_11133__$1;
(statearr_11144_11171[(2)] = tc);

(statearr_11144_11171[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (5))){
var inst_11113 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11114 = cljs.core.async.close_BANG_.call(null,fc);
var state_11133__$1 = (function (){var statearr_11145 = state_11133;
(statearr_11145[(8)] = inst_11113);

return statearr_11145;
})();
var statearr_11146_11172 = state_11133__$1;
(statearr_11146_11172[(2)] = inst_11114);

(statearr_11146_11172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (14))){
var inst_11127 = (state_11133[(2)]);
var state_11133__$1 = state_11133;
var statearr_11147_11173 = state_11133__$1;
(statearr_11147_11173[(2)] = inst_11127);

(statearr_11147_11173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (10))){
var state_11133__$1 = state_11133;
var statearr_11148_11174 = state_11133__$1;
(statearr_11148_11174[(2)] = fc);

(statearr_11148_11174[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (8))){
var inst_11122 = (state_11133[(2)]);
var state_11133__$1 = state_11133;
if(cljs.core.truth_(inst_11122)){
var statearr_11149_11175 = state_11133__$1;
(statearr_11149_11175[(1)] = (12));

} else {
var statearr_11150_11176 = state_11133__$1;
(statearr_11150_11176[(1)] = (13));

}

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
}
}
}
}
}
}
}
});})(c__10484__auto___11162,tc,fc))
;
return ((function (switch__10372__auto__,c__10484__auto___11162,tc,fc){
return (function() {
var cljs$core$async$state_machine__10373__auto__ = null;
var cljs$core$async$state_machine__10373__auto____0 = (function (){
var statearr_11154 = [null,null,null,null,null,null,null,null,null];
(statearr_11154[(0)] = cljs$core$async$state_machine__10373__auto__);

(statearr_11154[(1)] = (1));

return statearr_11154;
});
var cljs$core$async$state_machine__10373__auto____1 = (function (state_11133){
while(true){
var ret_value__10374__auto__ = (function (){try{while(true){
var result__10375__auto__ = switch__10372__auto__.call(null,state_11133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10375__auto__;
}
break;
}
}catch (e11155){if((e11155 instanceof Object)){
var ex__10376__auto__ = e11155;
var statearr_11156_11177 = state_11133;
(statearr_11156_11177[(5)] = ex__10376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11178 = state_11133;
state_11133 = G__11178;
continue;
} else {
return ret_value__10374__auto__;
}
break;
}
});
cljs$core$async$state_machine__10373__auto__ = function(state_11133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10373__auto____1.call(this,state_11133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10373__auto____0;
cljs$core$async$state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10373__auto____1;
return cljs$core$async$state_machine__10373__auto__;
})()
;})(switch__10372__auto__,c__10484__auto___11162,tc,fc))
})();
var state__10486__auto__ = (function (){var statearr_11157 = f__10485__auto__.call(null);
(statearr_11157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10484__auto___11162);

return statearr_11157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10486__auto__);
});})(c__10484__auto___11162,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__10484__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10484__auto__){
return (function (){
var f__10485__auto__ = (function (){var switch__10372__auto__ = ((function (c__10484__auto__){
return (function (state_11242){
var state_val_11243 = (state_11242[(1)]);
if((state_val_11243 === (7))){
var inst_11238 = (state_11242[(2)]);
var state_11242__$1 = state_11242;
var statearr_11244_11265 = state_11242__$1;
(statearr_11244_11265[(2)] = inst_11238);

(statearr_11244_11265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11243 === (1))){
var inst_11222 = init;
var state_11242__$1 = (function (){var statearr_11245 = state_11242;
(statearr_11245[(7)] = inst_11222);

return statearr_11245;
})();
var statearr_11246_11266 = state_11242__$1;
(statearr_11246_11266[(2)] = null);

(statearr_11246_11266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11243 === (4))){
var inst_11225 = (state_11242[(8)]);
var inst_11225__$1 = (state_11242[(2)]);
var inst_11226 = (inst_11225__$1 == null);
var state_11242__$1 = (function (){var statearr_11247 = state_11242;
(statearr_11247[(8)] = inst_11225__$1);

return statearr_11247;
})();
if(cljs.core.truth_(inst_11226)){
var statearr_11248_11267 = state_11242__$1;
(statearr_11248_11267[(1)] = (5));

} else {
var statearr_11249_11268 = state_11242__$1;
(statearr_11249_11268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11243 === (6))){
var inst_11225 = (state_11242[(8)]);
var inst_11229 = (state_11242[(9)]);
var inst_11222 = (state_11242[(7)]);
var inst_11229__$1 = f.call(null,inst_11222,inst_11225);
var inst_11230 = cljs.core.reduced_QMARK_.call(null,inst_11229__$1);
var state_11242__$1 = (function (){var statearr_11250 = state_11242;
(statearr_11250[(9)] = inst_11229__$1);

return statearr_11250;
})();
if(inst_11230){
var statearr_11251_11269 = state_11242__$1;
(statearr_11251_11269[(1)] = (8));

} else {
var statearr_11252_11270 = state_11242__$1;
(statearr_11252_11270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11243 === (3))){
var inst_11240 = (state_11242[(2)]);
var state_11242__$1 = state_11242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11242__$1,inst_11240);
} else {
if((state_val_11243 === (2))){
var state_11242__$1 = state_11242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11242__$1,(4),ch);
} else {
if((state_val_11243 === (9))){
var inst_11229 = (state_11242[(9)]);
var inst_11222 = inst_11229;
var state_11242__$1 = (function (){var statearr_11253 = state_11242;
(statearr_11253[(7)] = inst_11222);

return statearr_11253;
})();
var statearr_11254_11271 = state_11242__$1;
(statearr_11254_11271[(2)] = null);

(statearr_11254_11271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11243 === (5))){
var inst_11222 = (state_11242[(7)]);
var state_11242__$1 = state_11242;
var statearr_11255_11272 = state_11242__$1;
(statearr_11255_11272[(2)] = inst_11222);

(statearr_11255_11272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11243 === (10))){
var inst_11236 = (state_11242[(2)]);
var state_11242__$1 = state_11242;
var statearr_11256_11273 = state_11242__$1;
(statearr_11256_11273[(2)] = inst_11236);

(statearr_11256_11273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11243 === (8))){
var inst_11229 = (state_11242[(9)]);
var inst_11232 = cljs.core.deref.call(null,inst_11229);
var state_11242__$1 = state_11242;
var statearr_11257_11274 = state_11242__$1;
(statearr_11257_11274[(2)] = inst_11232);

(statearr_11257_11274[(1)] = (10));


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
}
}
}
});})(c__10484__auto__))
;
return ((function (switch__10372__auto__,c__10484__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10373__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10373__auto____0 = (function (){
var statearr_11261 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11261[(0)] = cljs$core$async$reduce_$_state_machine__10373__auto__);

(statearr_11261[(1)] = (1));

return statearr_11261;
});
var cljs$core$async$reduce_$_state_machine__10373__auto____1 = (function (state_11242){
while(true){
var ret_value__10374__auto__ = (function (){try{while(true){
var result__10375__auto__ = switch__10372__auto__.call(null,state_11242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10375__auto__;
}
break;
}
}catch (e11262){if((e11262 instanceof Object)){
var ex__10376__auto__ = e11262;
var statearr_11263_11275 = state_11242;
(statearr_11263_11275[(5)] = ex__10376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11276 = state_11242;
state_11242 = G__11276;
continue;
} else {
return ret_value__10374__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10373__auto__ = function(state_11242){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10373__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10373__auto____1.call(this,state_11242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10373__auto____0;
cljs$core$async$reduce_$_state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10373__auto____1;
return cljs$core$async$reduce_$_state_machine__10373__auto__;
})()
;})(switch__10372__auto__,c__10484__auto__))
})();
var state__10486__auto__ = (function (){var statearr_11264 = f__10485__auto__.call(null);
(statearr_11264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10484__auto__);

return statearr_11264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10486__auto__);
});})(c__10484__auto__))
);

return c__10484__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args11277 = [];
var len__7214__auto___11329 = arguments.length;
var i__7215__auto___11330 = (0);
while(true){
if((i__7215__auto___11330 < len__7214__auto___11329)){
args11277.push((arguments[i__7215__auto___11330]));

var G__11331 = (i__7215__auto___11330 + (1));
i__7215__auto___11330 = G__11331;
continue;
} else {
}
break;
}

var G__11279 = args11277.length;
switch (G__11279) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11277.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10484__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10484__auto__){
return (function (){
var f__10485__auto__ = (function (){var switch__10372__auto__ = ((function (c__10484__auto__){
return (function (state_11304){
var state_val_11305 = (state_11304[(1)]);
if((state_val_11305 === (7))){
var inst_11286 = (state_11304[(2)]);
var state_11304__$1 = state_11304;
var statearr_11306_11333 = state_11304__$1;
(statearr_11306_11333[(2)] = inst_11286);

(statearr_11306_11333[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11305 === (1))){
var inst_11280 = cljs.core.seq.call(null,coll);
var inst_11281 = inst_11280;
var state_11304__$1 = (function (){var statearr_11307 = state_11304;
(statearr_11307[(7)] = inst_11281);

return statearr_11307;
})();
var statearr_11308_11334 = state_11304__$1;
(statearr_11308_11334[(2)] = null);

(statearr_11308_11334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11305 === (4))){
var inst_11281 = (state_11304[(7)]);
var inst_11284 = cljs.core.first.call(null,inst_11281);
var state_11304__$1 = state_11304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11304__$1,(7),ch,inst_11284);
} else {
if((state_val_11305 === (13))){
var inst_11298 = (state_11304[(2)]);
var state_11304__$1 = state_11304;
var statearr_11309_11335 = state_11304__$1;
(statearr_11309_11335[(2)] = inst_11298);

(statearr_11309_11335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11305 === (6))){
var inst_11289 = (state_11304[(2)]);
var state_11304__$1 = state_11304;
if(cljs.core.truth_(inst_11289)){
var statearr_11310_11336 = state_11304__$1;
(statearr_11310_11336[(1)] = (8));

} else {
var statearr_11311_11337 = state_11304__$1;
(statearr_11311_11337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11305 === (3))){
var inst_11302 = (state_11304[(2)]);
var state_11304__$1 = state_11304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11304__$1,inst_11302);
} else {
if((state_val_11305 === (12))){
var state_11304__$1 = state_11304;
var statearr_11312_11338 = state_11304__$1;
(statearr_11312_11338[(2)] = null);

(statearr_11312_11338[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11305 === (2))){
var inst_11281 = (state_11304[(7)]);
var state_11304__$1 = state_11304;
if(cljs.core.truth_(inst_11281)){
var statearr_11313_11339 = state_11304__$1;
(statearr_11313_11339[(1)] = (4));

} else {
var statearr_11314_11340 = state_11304__$1;
(statearr_11314_11340[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11305 === (11))){
var inst_11295 = cljs.core.async.close_BANG_.call(null,ch);
var state_11304__$1 = state_11304;
var statearr_11315_11341 = state_11304__$1;
(statearr_11315_11341[(2)] = inst_11295);

(statearr_11315_11341[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11305 === (9))){
var state_11304__$1 = state_11304;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11316_11342 = state_11304__$1;
(statearr_11316_11342[(1)] = (11));

} else {
var statearr_11317_11343 = state_11304__$1;
(statearr_11317_11343[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11305 === (5))){
var inst_11281 = (state_11304[(7)]);
var state_11304__$1 = state_11304;
var statearr_11318_11344 = state_11304__$1;
(statearr_11318_11344[(2)] = inst_11281);

(statearr_11318_11344[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11305 === (10))){
var inst_11300 = (state_11304[(2)]);
var state_11304__$1 = state_11304;
var statearr_11319_11345 = state_11304__$1;
(statearr_11319_11345[(2)] = inst_11300);

(statearr_11319_11345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11305 === (8))){
var inst_11281 = (state_11304[(7)]);
var inst_11291 = cljs.core.next.call(null,inst_11281);
var inst_11281__$1 = inst_11291;
var state_11304__$1 = (function (){var statearr_11320 = state_11304;
(statearr_11320[(7)] = inst_11281__$1);

return statearr_11320;
})();
var statearr_11321_11346 = state_11304__$1;
(statearr_11321_11346[(2)] = null);

(statearr_11321_11346[(1)] = (2));


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
}
}
}
}
}
}
});})(c__10484__auto__))
;
return ((function (switch__10372__auto__,c__10484__auto__){
return (function() {
var cljs$core$async$state_machine__10373__auto__ = null;
var cljs$core$async$state_machine__10373__auto____0 = (function (){
var statearr_11325 = [null,null,null,null,null,null,null,null];
(statearr_11325[(0)] = cljs$core$async$state_machine__10373__auto__);

(statearr_11325[(1)] = (1));

return statearr_11325;
});
var cljs$core$async$state_machine__10373__auto____1 = (function (state_11304){
while(true){
var ret_value__10374__auto__ = (function (){try{while(true){
var result__10375__auto__ = switch__10372__auto__.call(null,state_11304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10375__auto__;
}
break;
}
}catch (e11326){if((e11326 instanceof Object)){
var ex__10376__auto__ = e11326;
var statearr_11327_11347 = state_11304;
(statearr_11327_11347[(5)] = ex__10376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11348 = state_11304;
state_11304 = G__11348;
continue;
} else {
return ret_value__10374__auto__;
}
break;
}
});
cljs$core$async$state_machine__10373__auto__ = function(state_11304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10373__auto____1.call(this,state_11304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10373__auto____0;
cljs$core$async$state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10373__auto____1;
return cljs$core$async$state_machine__10373__auto__;
})()
;})(switch__10372__auto__,c__10484__auto__))
})();
var state__10486__auto__ = (function (){var statearr_11328 = f__10485__auto__.call(null);
(statearr_11328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10484__auto__);

return statearr_11328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10486__auto__);
});})(c__10484__auto__))
);

return c__10484__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6811__auto__ = (((_ == null))?null:_);
var m__6812__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,_);
} else {
var m__6812__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__6812__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,ch);
} else {
var m__6812__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m);
} else {
var m__6812__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async11570 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11570 = (function (mult,ch,cs,meta11571){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta11571 = meta11571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11572,meta11571__$1){
var self__ = this;
var _11572__$1 = this;
return (new cljs.core.async.t_cljs$core$async11570(self__.mult,self__.ch,self__.cs,meta11571__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async11570.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11572){
var self__ = this;
var _11572__$1 = this;
return self__.meta11571;
});})(cs))
;

cljs.core.async.t_cljs$core$async11570.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11570.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async11570.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async11570.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11570.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11570.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11570.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11571","meta11571",-1268329371,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async11570.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11570";

cljs.core.async.t_cljs$core$async11570.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async11570");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async11570 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async11570(mult__$1,ch__$1,cs__$1,meta11571){
return (new cljs.core.async.t_cljs$core$async11570(mult__$1,ch__$1,cs__$1,meta11571));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async11570(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__10484__auto___11791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10484__auto___11791,cs,m,dchan,dctr,done){
return (function (){
var f__10485__auto__ = (function (){var switch__10372__auto__ = ((function (c__10484__auto___11791,cs,m,dchan,dctr,done){
return (function (state_11703){
var state_val_11704 = (state_11703[(1)]);
if((state_val_11704 === (7))){
var inst_11699 = (state_11703[(2)]);
var state_11703__$1 = state_11703;
var statearr_11705_11792 = state_11703__$1;
(statearr_11705_11792[(2)] = inst_11699);

(statearr_11705_11792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (20))){
var inst_11604 = (state_11703[(7)]);
var inst_11614 = cljs.core.first.call(null,inst_11604);
var inst_11615 = cljs.core.nth.call(null,inst_11614,(0),null);
var inst_11616 = cljs.core.nth.call(null,inst_11614,(1),null);
var state_11703__$1 = (function (){var statearr_11706 = state_11703;
(statearr_11706[(8)] = inst_11615);

return statearr_11706;
})();
if(cljs.core.truth_(inst_11616)){
var statearr_11707_11793 = state_11703__$1;
(statearr_11707_11793[(1)] = (22));

} else {
var statearr_11708_11794 = state_11703__$1;
(statearr_11708_11794[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (27))){
var inst_11644 = (state_11703[(9)]);
var inst_11646 = (state_11703[(10)]);
var inst_11651 = (state_11703[(11)]);
var inst_11575 = (state_11703[(12)]);
var inst_11651__$1 = cljs.core._nth.call(null,inst_11644,inst_11646);
var inst_11652 = cljs.core.async.put_BANG_.call(null,inst_11651__$1,inst_11575,done);
var state_11703__$1 = (function (){var statearr_11709 = state_11703;
(statearr_11709[(11)] = inst_11651__$1);

return statearr_11709;
})();
if(cljs.core.truth_(inst_11652)){
var statearr_11710_11795 = state_11703__$1;
(statearr_11710_11795[(1)] = (30));

} else {
var statearr_11711_11796 = state_11703__$1;
(statearr_11711_11796[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (1))){
var state_11703__$1 = state_11703;
var statearr_11712_11797 = state_11703__$1;
(statearr_11712_11797[(2)] = null);

(statearr_11712_11797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (24))){
var inst_11604 = (state_11703[(7)]);
var inst_11621 = (state_11703[(2)]);
var inst_11622 = cljs.core.next.call(null,inst_11604);
var inst_11584 = inst_11622;
var inst_11585 = null;
var inst_11586 = (0);
var inst_11587 = (0);
var state_11703__$1 = (function (){var statearr_11713 = state_11703;
(statearr_11713[(13)] = inst_11585);

(statearr_11713[(14)] = inst_11584);

(statearr_11713[(15)] = inst_11586);

(statearr_11713[(16)] = inst_11621);

(statearr_11713[(17)] = inst_11587);

return statearr_11713;
})();
var statearr_11714_11798 = state_11703__$1;
(statearr_11714_11798[(2)] = null);

(statearr_11714_11798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (39))){
var state_11703__$1 = state_11703;
var statearr_11718_11799 = state_11703__$1;
(statearr_11718_11799[(2)] = null);

(statearr_11718_11799[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (4))){
var inst_11575 = (state_11703[(12)]);
var inst_11575__$1 = (state_11703[(2)]);
var inst_11576 = (inst_11575__$1 == null);
var state_11703__$1 = (function (){var statearr_11719 = state_11703;
(statearr_11719[(12)] = inst_11575__$1);

return statearr_11719;
})();
if(cljs.core.truth_(inst_11576)){
var statearr_11720_11800 = state_11703__$1;
(statearr_11720_11800[(1)] = (5));

} else {
var statearr_11721_11801 = state_11703__$1;
(statearr_11721_11801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (15))){
var inst_11585 = (state_11703[(13)]);
var inst_11584 = (state_11703[(14)]);
var inst_11586 = (state_11703[(15)]);
var inst_11587 = (state_11703[(17)]);
var inst_11600 = (state_11703[(2)]);
var inst_11601 = (inst_11587 + (1));
var tmp11715 = inst_11585;
var tmp11716 = inst_11584;
var tmp11717 = inst_11586;
var inst_11584__$1 = tmp11716;
var inst_11585__$1 = tmp11715;
var inst_11586__$1 = tmp11717;
var inst_11587__$1 = inst_11601;
var state_11703__$1 = (function (){var statearr_11722 = state_11703;
(statearr_11722[(13)] = inst_11585__$1);

(statearr_11722[(18)] = inst_11600);

(statearr_11722[(14)] = inst_11584__$1);

(statearr_11722[(15)] = inst_11586__$1);

(statearr_11722[(17)] = inst_11587__$1);

return statearr_11722;
})();
var statearr_11723_11802 = state_11703__$1;
(statearr_11723_11802[(2)] = null);

(statearr_11723_11802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (21))){
var inst_11625 = (state_11703[(2)]);
var state_11703__$1 = state_11703;
var statearr_11727_11803 = state_11703__$1;
(statearr_11727_11803[(2)] = inst_11625);

(statearr_11727_11803[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (31))){
var inst_11651 = (state_11703[(11)]);
var inst_11655 = done.call(null,null);
var inst_11656 = cljs.core.async.untap_STAR_.call(null,m,inst_11651);
var state_11703__$1 = (function (){var statearr_11728 = state_11703;
(statearr_11728[(19)] = inst_11655);

return statearr_11728;
})();
var statearr_11729_11804 = state_11703__$1;
(statearr_11729_11804[(2)] = inst_11656);

(statearr_11729_11804[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (32))){
var inst_11643 = (state_11703[(20)]);
var inst_11645 = (state_11703[(21)]);
var inst_11644 = (state_11703[(9)]);
var inst_11646 = (state_11703[(10)]);
var inst_11658 = (state_11703[(2)]);
var inst_11659 = (inst_11646 + (1));
var tmp11724 = inst_11643;
var tmp11725 = inst_11645;
var tmp11726 = inst_11644;
var inst_11643__$1 = tmp11724;
var inst_11644__$1 = tmp11726;
var inst_11645__$1 = tmp11725;
var inst_11646__$1 = inst_11659;
var state_11703__$1 = (function (){var statearr_11730 = state_11703;
(statearr_11730[(20)] = inst_11643__$1);

(statearr_11730[(21)] = inst_11645__$1);

(statearr_11730[(22)] = inst_11658);

(statearr_11730[(9)] = inst_11644__$1);

(statearr_11730[(10)] = inst_11646__$1);

return statearr_11730;
})();
var statearr_11731_11805 = state_11703__$1;
(statearr_11731_11805[(2)] = null);

(statearr_11731_11805[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (40))){
var inst_11671 = (state_11703[(23)]);
var inst_11675 = done.call(null,null);
var inst_11676 = cljs.core.async.untap_STAR_.call(null,m,inst_11671);
var state_11703__$1 = (function (){var statearr_11732 = state_11703;
(statearr_11732[(24)] = inst_11675);

return statearr_11732;
})();
var statearr_11733_11806 = state_11703__$1;
(statearr_11733_11806[(2)] = inst_11676);

(statearr_11733_11806[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (33))){
var inst_11662 = (state_11703[(25)]);
var inst_11664 = cljs.core.chunked_seq_QMARK_.call(null,inst_11662);
var state_11703__$1 = state_11703;
if(inst_11664){
var statearr_11734_11807 = state_11703__$1;
(statearr_11734_11807[(1)] = (36));

} else {
var statearr_11735_11808 = state_11703__$1;
(statearr_11735_11808[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (13))){
var inst_11594 = (state_11703[(26)]);
var inst_11597 = cljs.core.async.close_BANG_.call(null,inst_11594);
var state_11703__$1 = state_11703;
var statearr_11736_11809 = state_11703__$1;
(statearr_11736_11809[(2)] = inst_11597);

(statearr_11736_11809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (22))){
var inst_11615 = (state_11703[(8)]);
var inst_11618 = cljs.core.async.close_BANG_.call(null,inst_11615);
var state_11703__$1 = state_11703;
var statearr_11737_11810 = state_11703__$1;
(statearr_11737_11810[(2)] = inst_11618);

(statearr_11737_11810[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (36))){
var inst_11662 = (state_11703[(25)]);
var inst_11666 = cljs.core.chunk_first.call(null,inst_11662);
var inst_11667 = cljs.core.chunk_rest.call(null,inst_11662);
var inst_11668 = cljs.core.count.call(null,inst_11666);
var inst_11643 = inst_11667;
var inst_11644 = inst_11666;
var inst_11645 = inst_11668;
var inst_11646 = (0);
var state_11703__$1 = (function (){var statearr_11738 = state_11703;
(statearr_11738[(20)] = inst_11643);

(statearr_11738[(21)] = inst_11645);

(statearr_11738[(9)] = inst_11644);

(statearr_11738[(10)] = inst_11646);

return statearr_11738;
})();
var statearr_11739_11811 = state_11703__$1;
(statearr_11739_11811[(2)] = null);

(statearr_11739_11811[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (41))){
var inst_11662 = (state_11703[(25)]);
var inst_11678 = (state_11703[(2)]);
var inst_11679 = cljs.core.next.call(null,inst_11662);
var inst_11643 = inst_11679;
var inst_11644 = null;
var inst_11645 = (0);
var inst_11646 = (0);
var state_11703__$1 = (function (){var statearr_11740 = state_11703;
(statearr_11740[(20)] = inst_11643);

(statearr_11740[(21)] = inst_11645);

(statearr_11740[(9)] = inst_11644);

(statearr_11740[(10)] = inst_11646);

(statearr_11740[(27)] = inst_11678);

return statearr_11740;
})();
var statearr_11741_11812 = state_11703__$1;
(statearr_11741_11812[(2)] = null);

(statearr_11741_11812[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (43))){
var state_11703__$1 = state_11703;
var statearr_11742_11813 = state_11703__$1;
(statearr_11742_11813[(2)] = null);

(statearr_11742_11813[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (29))){
var inst_11687 = (state_11703[(2)]);
var state_11703__$1 = state_11703;
var statearr_11743_11814 = state_11703__$1;
(statearr_11743_11814[(2)] = inst_11687);

(statearr_11743_11814[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (44))){
var inst_11696 = (state_11703[(2)]);
var state_11703__$1 = (function (){var statearr_11744 = state_11703;
(statearr_11744[(28)] = inst_11696);

return statearr_11744;
})();
var statearr_11745_11815 = state_11703__$1;
(statearr_11745_11815[(2)] = null);

(statearr_11745_11815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (6))){
var inst_11635 = (state_11703[(29)]);
var inst_11634 = cljs.core.deref.call(null,cs);
var inst_11635__$1 = cljs.core.keys.call(null,inst_11634);
var inst_11636 = cljs.core.count.call(null,inst_11635__$1);
var inst_11637 = cljs.core.reset_BANG_.call(null,dctr,inst_11636);
var inst_11642 = cljs.core.seq.call(null,inst_11635__$1);
var inst_11643 = inst_11642;
var inst_11644 = null;
var inst_11645 = (0);
var inst_11646 = (0);
var state_11703__$1 = (function (){var statearr_11746 = state_11703;
(statearr_11746[(30)] = inst_11637);

(statearr_11746[(20)] = inst_11643);

(statearr_11746[(21)] = inst_11645);

(statearr_11746[(9)] = inst_11644);

(statearr_11746[(29)] = inst_11635__$1);

(statearr_11746[(10)] = inst_11646);

return statearr_11746;
})();
var statearr_11747_11816 = state_11703__$1;
(statearr_11747_11816[(2)] = null);

(statearr_11747_11816[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (28))){
var inst_11662 = (state_11703[(25)]);
var inst_11643 = (state_11703[(20)]);
var inst_11662__$1 = cljs.core.seq.call(null,inst_11643);
var state_11703__$1 = (function (){var statearr_11748 = state_11703;
(statearr_11748[(25)] = inst_11662__$1);

return statearr_11748;
})();
if(inst_11662__$1){
var statearr_11749_11817 = state_11703__$1;
(statearr_11749_11817[(1)] = (33));

} else {
var statearr_11750_11818 = state_11703__$1;
(statearr_11750_11818[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (25))){
var inst_11645 = (state_11703[(21)]);
var inst_11646 = (state_11703[(10)]);
var inst_11648 = (inst_11646 < inst_11645);
var inst_11649 = inst_11648;
var state_11703__$1 = state_11703;
if(cljs.core.truth_(inst_11649)){
var statearr_11751_11819 = state_11703__$1;
(statearr_11751_11819[(1)] = (27));

} else {
var statearr_11752_11820 = state_11703__$1;
(statearr_11752_11820[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (34))){
var state_11703__$1 = state_11703;
var statearr_11753_11821 = state_11703__$1;
(statearr_11753_11821[(2)] = null);

(statearr_11753_11821[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (17))){
var state_11703__$1 = state_11703;
var statearr_11754_11822 = state_11703__$1;
(statearr_11754_11822[(2)] = null);

(statearr_11754_11822[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (3))){
var inst_11701 = (state_11703[(2)]);
var state_11703__$1 = state_11703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11703__$1,inst_11701);
} else {
if((state_val_11704 === (12))){
var inst_11630 = (state_11703[(2)]);
var state_11703__$1 = state_11703;
var statearr_11755_11823 = state_11703__$1;
(statearr_11755_11823[(2)] = inst_11630);

(statearr_11755_11823[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (2))){
var state_11703__$1 = state_11703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11703__$1,(4),ch);
} else {
if((state_val_11704 === (23))){
var state_11703__$1 = state_11703;
var statearr_11756_11824 = state_11703__$1;
(statearr_11756_11824[(2)] = null);

(statearr_11756_11824[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (35))){
var inst_11685 = (state_11703[(2)]);
var state_11703__$1 = state_11703;
var statearr_11757_11825 = state_11703__$1;
(statearr_11757_11825[(2)] = inst_11685);

(statearr_11757_11825[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (19))){
var inst_11604 = (state_11703[(7)]);
var inst_11608 = cljs.core.chunk_first.call(null,inst_11604);
var inst_11609 = cljs.core.chunk_rest.call(null,inst_11604);
var inst_11610 = cljs.core.count.call(null,inst_11608);
var inst_11584 = inst_11609;
var inst_11585 = inst_11608;
var inst_11586 = inst_11610;
var inst_11587 = (0);
var state_11703__$1 = (function (){var statearr_11758 = state_11703;
(statearr_11758[(13)] = inst_11585);

(statearr_11758[(14)] = inst_11584);

(statearr_11758[(15)] = inst_11586);

(statearr_11758[(17)] = inst_11587);

return statearr_11758;
})();
var statearr_11759_11826 = state_11703__$1;
(statearr_11759_11826[(2)] = null);

(statearr_11759_11826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (11))){
var inst_11604 = (state_11703[(7)]);
var inst_11584 = (state_11703[(14)]);
var inst_11604__$1 = cljs.core.seq.call(null,inst_11584);
var state_11703__$1 = (function (){var statearr_11760 = state_11703;
(statearr_11760[(7)] = inst_11604__$1);

return statearr_11760;
})();
if(inst_11604__$1){
var statearr_11761_11827 = state_11703__$1;
(statearr_11761_11827[(1)] = (16));

} else {
var statearr_11762_11828 = state_11703__$1;
(statearr_11762_11828[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (9))){
var inst_11632 = (state_11703[(2)]);
var state_11703__$1 = state_11703;
var statearr_11763_11829 = state_11703__$1;
(statearr_11763_11829[(2)] = inst_11632);

(statearr_11763_11829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (5))){
var inst_11582 = cljs.core.deref.call(null,cs);
var inst_11583 = cljs.core.seq.call(null,inst_11582);
var inst_11584 = inst_11583;
var inst_11585 = null;
var inst_11586 = (0);
var inst_11587 = (0);
var state_11703__$1 = (function (){var statearr_11764 = state_11703;
(statearr_11764[(13)] = inst_11585);

(statearr_11764[(14)] = inst_11584);

(statearr_11764[(15)] = inst_11586);

(statearr_11764[(17)] = inst_11587);

return statearr_11764;
})();
var statearr_11765_11830 = state_11703__$1;
(statearr_11765_11830[(2)] = null);

(statearr_11765_11830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (14))){
var state_11703__$1 = state_11703;
var statearr_11766_11831 = state_11703__$1;
(statearr_11766_11831[(2)] = null);

(statearr_11766_11831[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (45))){
var inst_11693 = (state_11703[(2)]);
var state_11703__$1 = state_11703;
var statearr_11767_11832 = state_11703__$1;
(statearr_11767_11832[(2)] = inst_11693);

(statearr_11767_11832[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (26))){
var inst_11635 = (state_11703[(29)]);
var inst_11689 = (state_11703[(2)]);
var inst_11690 = cljs.core.seq.call(null,inst_11635);
var state_11703__$1 = (function (){var statearr_11768 = state_11703;
(statearr_11768[(31)] = inst_11689);

return statearr_11768;
})();
if(inst_11690){
var statearr_11769_11833 = state_11703__$1;
(statearr_11769_11833[(1)] = (42));

} else {
var statearr_11770_11834 = state_11703__$1;
(statearr_11770_11834[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (16))){
var inst_11604 = (state_11703[(7)]);
var inst_11606 = cljs.core.chunked_seq_QMARK_.call(null,inst_11604);
var state_11703__$1 = state_11703;
if(inst_11606){
var statearr_11771_11835 = state_11703__$1;
(statearr_11771_11835[(1)] = (19));

} else {
var statearr_11772_11836 = state_11703__$1;
(statearr_11772_11836[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (38))){
var inst_11682 = (state_11703[(2)]);
var state_11703__$1 = state_11703;
var statearr_11773_11837 = state_11703__$1;
(statearr_11773_11837[(2)] = inst_11682);

(statearr_11773_11837[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (30))){
var state_11703__$1 = state_11703;
var statearr_11774_11838 = state_11703__$1;
(statearr_11774_11838[(2)] = null);

(statearr_11774_11838[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (10))){
var inst_11585 = (state_11703[(13)]);
var inst_11587 = (state_11703[(17)]);
var inst_11593 = cljs.core._nth.call(null,inst_11585,inst_11587);
var inst_11594 = cljs.core.nth.call(null,inst_11593,(0),null);
var inst_11595 = cljs.core.nth.call(null,inst_11593,(1),null);
var state_11703__$1 = (function (){var statearr_11775 = state_11703;
(statearr_11775[(26)] = inst_11594);

return statearr_11775;
})();
if(cljs.core.truth_(inst_11595)){
var statearr_11776_11839 = state_11703__$1;
(statearr_11776_11839[(1)] = (13));

} else {
var statearr_11777_11840 = state_11703__$1;
(statearr_11777_11840[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (18))){
var inst_11628 = (state_11703[(2)]);
var state_11703__$1 = state_11703;
var statearr_11778_11841 = state_11703__$1;
(statearr_11778_11841[(2)] = inst_11628);

(statearr_11778_11841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (42))){
var state_11703__$1 = state_11703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11703__$1,(45),dchan);
} else {
if((state_val_11704 === (37))){
var inst_11662 = (state_11703[(25)]);
var inst_11671 = (state_11703[(23)]);
var inst_11575 = (state_11703[(12)]);
var inst_11671__$1 = cljs.core.first.call(null,inst_11662);
var inst_11672 = cljs.core.async.put_BANG_.call(null,inst_11671__$1,inst_11575,done);
var state_11703__$1 = (function (){var statearr_11779 = state_11703;
(statearr_11779[(23)] = inst_11671__$1);

return statearr_11779;
})();
if(cljs.core.truth_(inst_11672)){
var statearr_11780_11842 = state_11703__$1;
(statearr_11780_11842[(1)] = (39));

} else {
var statearr_11781_11843 = state_11703__$1;
(statearr_11781_11843[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11704 === (8))){
var inst_11586 = (state_11703[(15)]);
var inst_11587 = (state_11703[(17)]);
var inst_11589 = (inst_11587 < inst_11586);
var inst_11590 = inst_11589;
var state_11703__$1 = state_11703;
if(cljs.core.truth_(inst_11590)){
var statearr_11782_11844 = state_11703__$1;
(statearr_11782_11844[(1)] = (10));

} else {
var statearr_11783_11845 = state_11703__$1;
(statearr_11783_11845[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10484__auto___11791,cs,m,dchan,dctr,done))
;
return ((function (switch__10372__auto__,c__10484__auto___11791,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10373__auto__ = null;
var cljs$core$async$mult_$_state_machine__10373__auto____0 = (function (){
var statearr_11787 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11787[(0)] = cljs$core$async$mult_$_state_machine__10373__auto__);

(statearr_11787[(1)] = (1));

return statearr_11787;
});
var cljs$core$async$mult_$_state_machine__10373__auto____1 = (function (state_11703){
while(true){
var ret_value__10374__auto__ = (function (){try{while(true){
var result__10375__auto__ = switch__10372__auto__.call(null,state_11703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10375__auto__;
}
break;
}
}catch (e11788){if((e11788 instanceof Object)){
var ex__10376__auto__ = e11788;
var statearr_11789_11846 = state_11703;
(statearr_11789_11846[(5)] = ex__10376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11847 = state_11703;
state_11703 = G__11847;
continue;
} else {
return ret_value__10374__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10373__auto__ = function(state_11703){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10373__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10373__auto____1.call(this,state_11703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10373__auto____0;
cljs$core$async$mult_$_state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10373__auto____1;
return cljs$core$async$mult_$_state_machine__10373__auto__;
})()
;})(switch__10372__auto__,c__10484__auto___11791,cs,m,dchan,dctr,done))
})();
var state__10486__auto__ = (function (){var statearr_11790 = f__10485__auto__.call(null);
(statearr_11790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10484__auto___11791);

return statearr_11790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10486__auto__);
});})(c__10484__auto___11791,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args11848 = [];
var len__7214__auto___11851 = arguments.length;
var i__7215__auto___11852 = (0);
while(true){
if((i__7215__auto___11852 < len__7214__auto___11851)){
args11848.push((arguments[i__7215__auto___11852]));

var G__11853 = (i__7215__auto___11852 + (1));
i__7215__auto___11852 = G__11853;
continue;
} else {
}
break;
}

var G__11850 = args11848.length;
switch (G__11850) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11848.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,ch);
} else {
var m__6812__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,ch);
} else {
var m__6812__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m);
} else {
var m__6812__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,state_map);
} else {
var m__6812__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,mode);
} else {
var m__6812__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___11865 = arguments.length;
var i__7215__auto___11866 = (0);
while(true){
if((i__7215__auto___11866 < len__7214__auto___11865)){
args__7221__auto__.push((arguments[i__7215__auto___11866]));

var G__11867 = (i__7215__auto___11866 + (1));
i__7215__auto___11866 = G__11867;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((3) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7222__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11859){
var map__11860 = p__11859;
var map__11860__$1 = ((((!((map__11860 == null)))?((((map__11860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11860):map__11860);
var opts = map__11860__$1;
var statearr_11862_11868 = state;
(statearr_11862_11868[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__11860,map__11860__$1,opts){
return (function (val){
var statearr_11863_11869 = state;
(statearr_11863_11869[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__11860,map__11860__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_11864_11870 = state;
(statearr_11864_11870[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11855){
var G__11856 = cljs.core.first.call(null,seq11855);
var seq11855__$1 = cljs.core.next.call(null,seq11855);
var G__11857 = cljs.core.first.call(null,seq11855__$1);
var seq11855__$2 = cljs.core.next.call(null,seq11855__$1);
var G__11858 = cljs.core.first.call(null,seq11855__$2);
var seq11855__$3 = cljs.core.next.call(null,seq11855__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11856,G__11857,G__11858,seq11855__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async12034 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12034 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12035){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12035 = meta12035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12036,meta12035__$1){
var self__ = this;
var _12036__$1 = this;
return (new cljs.core.async.t_cljs$core$async12034(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12035__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12034.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12036){
var self__ = this;
var _12036__$1 = this;
return self__.meta12035;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12034.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12034.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12034.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async12034.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12034.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12034.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12034.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12034.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12034.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12035","meta12035",-444048675,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12034.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12034.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12034";

cljs.core.async.t_cljs$core$async12034.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async12034");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async12034 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async12034(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12035){
return (new cljs.core.async.t_cljs$core$async12034(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12035));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async12034(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10484__auto___12197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10484__auto___12197,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10485__auto__ = (function (){var switch__10372__auto__ = ((function (c__10484__auto___12197,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12134){
var state_val_12135 = (state_12134[(1)]);
if((state_val_12135 === (7))){
var inst_12052 = (state_12134[(2)]);
var state_12134__$1 = state_12134;
var statearr_12136_12198 = state_12134__$1;
(statearr_12136_12198[(2)] = inst_12052);

(statearr_12136_12198[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (20))){
var inst_12064 = (state_12134[(7)]);
var state_12134__$1 = state_12134;
var statearr_12137_12199 = state_12134__$1;
(statearr_12137_12199[(2)] = inst_12064);

(statearr_12137_12199[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (27))){
var state_12134__$1 = state_12134;
var statearr_12138_12200 = state_12134__$1;
(statearr_12138_12200[(2)] = null);

(statearr_12138_12200[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (1))){
var inst_12040 = (state_12134[(8)]);
var inst_12040__$1 = calc_state.call(null);
var inst_12042 = (inst_12040__$1 == null);
var inst_12043 = cljs.core.not.call(null,inst_12042);
var state_12134__$1 = (function (){var statearr_12139 = state_12134;
(statearr_12139[(8)] = inst_12040__$1);

return statearr_12139;
})();
if(inst_12043){
var statearr_12140_12201 = state_12134__$1;
(statearr_12140_12201[(1)] = (2));

} else {
var statearr_12141_12202 = state_12134__$1;
(statearr_12141_12202[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (24))){
var inst_12087 = (state_12134[(9)]);
var inst_12108 = (state_12134[(10)]);
var inst_12094 = (state_12134[(11)]);
var inst_12108__$1 = inst_12087.call(null,inst_12094);
var state_12134__$1 = (function (){var statearr_12142 = state_12134;
(statearr_12142[(10)] = inst_12108__$1);

return statearr_12142;
})();
if(cljs.core.truth_(inst_12108__$1)){
var statearr_12143_12203 = state_12134__$1;
(statearr_12143_12203[(1)] = (29));

} else {
var statearr_12144_12204 = state_12134__$1;
(statearr_12144_12204[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (4))){
var inst_12055 = (state_12134[(2)]);
var state_12134__$1 = state_12134;
if(cljs.core.truth_(inst_12055)){
var statearr_12145_12205 = state_12134__$1;
(statearr_12145_12205[(1)] = (8));

} else {
var statearr_12146_12206 = state_12134__$1;
(statearr_12146_12206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (15))){
var inst_12081 = (state_12134[(2)]);
var state_12134__$1 = state_12134;
if(cljs.core.truth_(inst_12081)){
var statearr_12147_12207 = state_12134__$1;
(statearr_12147_12207[(1)] = (19));

} else {
var statearr_12148_12208 = state_12134__$1;
(statearr_12148_12208[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (21))){
var inst_12086 = (state_12134[(12)]);
var inst_12086__$1 = (state_12134[(2)]);
var inst_12087 = cljs.core.get.call(null,inst_12086__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12088 = cljs.core.get.call(null,inst_12086__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12089 = cljs.core.get.call(null,inst_12086__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12134__$1 = (function (){var statearr_12149 = state_12134;
(statearr_12149[(9)] = inst_12087);

(statearr_12149[(12)] = inst_12086__$1);

(statearr_12149[(13)] = inst_12088);

return statearr_12149;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12134__$1,(22),inst_12089);
} else {
if((state_val_12135 === (31))){
var inst_12116 = (state_12134[(2)]);
var state_12134__$1 = state_12134;
if(cljs.core.truth_(inst_12116)){
var statearr_12150_12209 = state_12134__$1;
(statearr_12150_12209[(1)] = (32));

} else {
var statearr_12151_12210 = state_12134__$1;
(statearr_12151_12210[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (32))){
var inst_12093 = (state_12134[(14)]);
var state_12134__$1 = state_12134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12134__$1,(35),out,inst_12093);
} else {
if((state_val_12135 === (33))){
var inst_12086 = (state_12134[(12)]);
var inst_12064 = inst_12086;
var state_12134__$1 = (function (){var statearr_12152 = state_12134;
(statearr_12152[(7)] = inst_12064);

return statearr_12152;
})();
var statearr_12153_12211 = state_12134__$1;
(statearr_12153_12211[(2)] = null);

(statearr_12153_12211[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (13))){
var inst_12064 = (state_12134[(7)]);
var inst_12071 = inst_12064.cljs$lang$protocol_mask$partition0$;
var inst_12072 = (inst_12071 & (64));
var inst_12073 = inst_12064.cljs$core$ISeq$;
var inst_12074 = (inst_12072) || (inst_12073);
var state_12134__$1 = state_12134;
if(cljs.core.truth_(inst_12074)){
var statearr_12154_12212 = state_12134__$1;
(statearr_12154_12212[(1)] = (16));

} else {
var statearr_12155_12213 = state_12134__$1;
(statearr_12155_12213[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (22))){
var inst_12093 = (state_12134[(14)]);
var inst_12094 = (state_12134[(11)]);
var inst_12092 = (state_12134[(2)]);
var inst_12093__$1 = cljs.core.nth.call(null,inst_12092,(0),null);
var inst_12094__$1 = cljs.core.nth.call(null,inst_12092,(1),null);
var inst_12095 = (inst_12093__$1 == null);
var inst_12096 = cljs.core._EQ_.call(null,inst_12094__$1,change);
var inst_12097 = (inst_12095) || (inst_12096);
var state_12134__$1 = (function (){var statearr_12156 = state_12134;
(statearr_12156[(14)] = inst_12093__$1);

(statearr_12156[(11)] = inst_12094__$1);

return statearr_12156;
})();
if(cljs.core.truth_(inst_12097)){
var statearr_12157_12214 = state_12134__$1;
(statearr_12157_12214[(1)] = (23));

} else {
var statearr_12158_12215 = state_12134__$1;
(statearr_12158_12215[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (36))){
var inst_12086 = (state_12134[(12)]);
var inst_12064 = inst_12086;
var state_12134__$1 = (function (){var statearr_12159 = state_12134;
(statearr_12159[(7)] = inst_12064);

return statearr_12159;
})();
var statearr_12160_12216 = state_12134__$1;
(statearr_12160_12216[(2)] = null);

(statearr_12160_12216[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (29))){
var inst_12108 = (state_12134[(10)]);
var state_12134__$1 = state_12134;
var statearr_12161_12217 = state_12134__$1;
(statearr_12161_12217[(2)] = inst_12108);

(statearr_12161_12217[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (6))){
var state_12134__$1 = state_12134;
var statearr_12162_12218 = state_12134__$1;
(statearr_12162_12218[(2)] = false);

(statearr_12162_12218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (28))){
var inst_12104 = (state_12134[(2)]);
var inst_12105 = calc_state.call(null);
var inst_12064 = inst_12105;
var state_12134__$1 = (function (){var statearr_12163 = state_12134;
(statearr_12163[(7)] = inst_12064);

(statearr_12163[(15)] = inst_12104);

return statearr_12163;
})();
var statearr_12164_12219 = state_12134__$1;
(statearr_12164_12219[(2)] = null);

(statearr_12164_12219[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (25))){
var inst_12130 = (state_12134[(2)]);
var state_12134__$1 = state_12134;
var statearr_12165_12220 = state_12134__$1;
(statearr_12165_12220[(2)] = inst_12130);

(statearr_12165_12220[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (34))){
var inst_12128 = (state_12134[(2)]);
var state_12134__$1 = state_12134;
var statearr_12166_12221 = state_12134__$1;
(statearr_12166_12221[(2)] = inst_12128);

(statearr_12166_12221[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (17))){
var state_12134__$1 = state_12134;
var statearr_12167_12222 = state_12134__$1;
(statearr_12167_12222[(2)] = false);

(statearr_12167_12222[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (3))){
var state_12134__$1 = state_12134;
var statearr_12168_12223 = state_12134__$1;
(statearr_12168_12223[(2)] = false);

(statearr_12168_12223[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (12))){
var inst_12132 = (state_12134[(2)]);
var state_12134__$1 = state_12134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12134__$1,inst_12132);
} else {
if((state_val_12135 === (2))){
var inst_12040 = (state_12134[(8)]);
var inst_12045 = inst_12040.cljs$lang$protocol_mask$partition0$;
var inst_12046 = (inst_12045 & (64));
var inst_12047 = inst_12040.cljs$core$ISeq$;
var inst_12048 = (inst_12046) || (inst_12047);
var state_12134__$1 = state_12134;
if(cljs.core.truth_(inst_12048)){
var statearr_12169_12224 = state_12134__$1;
(statearr_12169_12224[(1)] = (5));

} else {
var statearr_12170_12225 = state_12134__$1;
(statearr_12170_12225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (23))){
var inst_12093 = (state_12134[(14)]);
var inst_12099 = (inst_12093 == null);
var state_12134__$1 = state_12134;
if(cljs.core.truth_(inst_12099)){
var statearr_12171_12226 = state_12134__$1;
(statearr_12171_12226[(1)] = (26));

} else {
var statearr_12172_12227 = state_12134__$1;
(statearr_12172_12227[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (35))){
var inst_12119 = (state_12134[(2)]);
var state_12134__$1 = state_12134;
if(cljs.core.truth_(inst_12119)){
var statearr_12173_12228 = state_12134__$1;
(statearr_12173_12228[(1)] = (36));

} else {
var statearr_12174_12229 = state_12134__$1;
(statearr_12174_12229[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (19))){
var inst_12064 = (state_12134[(7)]);
var inst_12083 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12064);
var state_12134__$1 = state_12134;
var statearr_12175_12230 = state_12134__$1;
(statearr_12175_12230[(2)] = inst_12083);

(statearr_12175_12230[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (11))){
var inst_12064 = (state_12134[(7)]);
var inst_12068 = (inst_12064 == null);
var inst_12069 = cljs.core.not.call(null,inst_12068);
var state_12134__$1 = state_12134;
if(inst_12069){
var statearr_12176_12231 = state_12134__$1;
(statearr_12176_12231[(1)] = (13));

} else {
var statearr_12177_12232 = state_12134__$1;
(statearr_12177_12232[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (9))){
var inst_12040 = (state_12134[(8)]);
var state_12134__$1 = state_12134;
var statearr_12178_12233 = state_12134__$1;
(statearr_12178_12233[(2)] = inst_12040);

(statearr_12178_12233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (5))){
var state_12134__$1 = state_12134;
var statearr_12179_12234 = state_12134__$1;
(statearr_12179_12234[(2)] = true);

(statearr_12179_12234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (14))){
var state_12134__$1 = state_12134;
var statearr_12180_12235 = state_12134__$1;
(statearr_12180_12235[(2)] = false);

(statearr_12180_12235[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (26))){
var inst_12094 = (state_12134[(11)]);
var inst_12101 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12094);
var state_12134__$1 = state_12134;
var statearr_12181_12236 = state_12134__$1;
(statearr_12181_12236[(2)] = inst_12101);

(statearr_12181_12236[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (16))){
var state_12134__$1 = state_12134;
var statearr_12182_12237 = state_12134__$1;
(statearr_12182_12237[(2)] = true);

(statearr_12182_12237[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (38))){
var inst_12124 = (state_12134[(2)]);
var state_12134__$1 = state_12134;
var statearr_12183_12238 = state_12134__$1;
(statearr_12183_12238[(2)] = inst_12124);

(statearr_12183_12238[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (30))){
var inst_12087 = (state_12134[(9)]);
var inst_12094 = (state_12134[(11)]);
var inst_12088 = (state_12134[(13)]);
var inst_12111 = cljs.core.empty_QMARK_.call(null,inst_12087);
var inst_12112 = inst_12088.call(null,inst_12094);
var inst_12113 = cljs.core.not.call(null,inst_12112);
var inst_12114 = (inst_12111) && (inst_12113);
var state_12134__$1 = state_12134;
var statearr_12184_12239 = state_12134__$1;
(statearr_12184_12239[(2)] = inst_12114);

(statearr_12184_12239[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (10))){
var inst_12040 = (state_12134[(8)]);
var inst_12060 = (state_12134[(2)]);
var inst_12061 = cljs.core.get.call(null,inst_12060,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12062 = cljs.core.get.call(null,inst_12060,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12063 = cljs.core.get.call(null,inst_12060,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12064 = inst_12040;
var state_12134__$1 = (function (){var statearr_12185 = state_12134;
(statearr_12185[(16)] = inst_12062);

(statearr_12185[(17)] = inst_12061);

(statearr_12185[(7)] = inst_12064);

(statearr_12185[(18)] = inst_12063);

return statearr_12185;
})();
var statearr_12186_12240 = state_12134__$1;
(statearr_12186_12240[(2)] = null);

(statearr_12186_12240[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (18))){
var inst_12078 = (state_12134[(2)]);
var state_12134__$1 = state_12134;
var statearr_12187_12241 = state_12134__$1;
(statearr_12187_12241[(2)] = inst_12078);

(statearr_12187_12241[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (37))){
var state_12134__$1 = state_12134;
var statearr_12188_12242 = state_12134__$1;
(statearr_12188_12242[(2)] = null);

(statearr_12188_12242[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (8))){
var inst_12040 = (state_12134[(8)]);
var inst_12057 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12040);
var state_12134__$1 = state_12134;
var statearr_12189_12243 = state_12134__$1;
(statearr_12189_12243[(2)] = inst_12057);

(statearr_12189_12243[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10484__auto___12197,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10372__auto__,c__10484__auto___12197,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10373__auto__ = null;
var cljs$core$async$mix_$_state_machine__10373__auto____0 = (function (){
var statearr_12193 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12193[(0)] = cljs$core$async$mix_$_state_machine__10373__auto__);

(statearr_12193[(1)] = (1));

return statearr_12193;
});
var cljs$core$async$mix_$_state_machine__10373__auto____1 = (function (state_12134){
while(true){
var ret_value__10374__auto__ = (function (){try{while(true){
var result__10375__auto__ = switch__10372__auto__.call(null,state_12134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10375__auto__;
}
break;
}
}catch (e12194){if((e12194 instanceof Object)){
var ex__10376__auto__ = e12194;
var statearr_12195_12244 = state_12134;
(statearr_12195_12244[(5)] = ex__10376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12245 = state_12134;
state_12134 = G__12245;
continue;
} else {
return ret_value__10374__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10373__auto__ = function(state_12134){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10373__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10373__auto____1.call(this,state_12134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10373__auto____0;
cljs$core$async$mix_$_state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10373__auto____1;
return cljs$core$async$mix_$_state_machine__10373__auto__;
})()
;})(switch__10372__auto__,c__10484__auto___12197,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10486__auto__ = (function (){var statearr_12196 = f__10485__auto__.call(null);
(statearr_12196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10484__auto___12197);

return statearr_12196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10486__auto__);
});})(c__10484__auto___12197,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__6812__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,p,v,ch);
} else {
var m__6812__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args12246 = [];
var len__7214__auto___12249 = arguments.length;
var i__7215__auto___12250 = (0);
while(true){
if((i__7215__auto___12250 < len__7214__auto___12249)){
args12246.push((arguments[i__7215__auto___12250]));

var G__12251 = (i__7215__auto___12250 + (1));
i__7215__auto___12250 = G__12251;
continue;
} else {
}
break;
}

var G__12248 = args12246.length;
switch (G__12248) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12246.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,p);
} else {
var m__6812__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,p,v);
} else {
var m__6812__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args12254 = [];
var len__7214__auto___12379 = arguments.length;
var i__7215__auto___12380 = (0);
while(true){
if((i__7215__auto___12380 < len__7214__auto___12379)){
args12254.push((arguments[i__7215__auto___12380]));

var G__12381 = (i__7215__auto___12380 + (1));
i__7215__auto___12380 = G__12381;
continue;
} else {
}
break;
}

var G__12256 = args12254.length;
switch (G__12256) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12254.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6156__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6156__auto__,mults){
return (function (p1__12253_SHARP_){
if(cljs.core.truth_(p1__12253_SHARP_.call(null,topic))){
return p1__12253_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12253_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6156__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async12257 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12257 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12258){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12258 = meta12258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12259,meta12258__$1){
var self__ = this;
var _12259__$1 = this;
return (new cljs.core.async.t_cljs$core$async12257(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12258__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12257.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12259){
var self__ = this;
var _12259__$1 = this;
return self__.meta12258;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12257.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12257.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12257.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async12257.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12257.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12257.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12257.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12257.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12258","meta12258",-1333500620,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12257.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12257";

cljs.core.async.t_cljs$core$async12257.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async12257");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async12257 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async12257(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12258){
return (new cljs.core.async.t_cljs$core$async12257(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12258));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async12257(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10484__auto___12383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10484__auto___12383,mults,ensure_mult,p){
return (function (){
var f__10485__auto__ = (function (){var switch__10372__auto__ = ((function (c__10484__auto___12383,mults,ensure_mult,p){
return (function (state_12331){
var state_val_12332 = (state_12331[(1)]);
if((state_val_12332 === (7))){
var inst_12327 = (state_12331[(2)]);
var state_12331__$1 = state_12331;
var statearr_12333_12384 = state_12331__$1;
(statearr_12333_12384[(2)] = inst_12327);

(statearr_12333_12384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (20))){
var state_12331__$1 = state_12331;
var statearr_12334_12385 = state_12331__$1;
(statearr_12334_12385[(2)] = null);

(statearr_12334_12385[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (1))){
var state_12331__$1 = state_12331;
var statearr_12335_12386 = state_12331__$1;
(statearr_12335_12386[(2)] = null);

(statearr_12335_12386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (24))){
var inst_12310 = (state_12331[(7)]);
var inst_12319 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12310);
var state_12331__$1 = state_12331;
var statearr_12336_12387 = state_12331__$1;
(statearr_12336_12387[(2)] = inst_12319);

(statearr_12336_12387[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (4))){
var inst_12262 = (state_12331[(8)]);
var inst_12262__$1 = (state_12331[(2)]);
var inst_12263 = (inst_12262__$1 == null);
var state_12331__$1 = (function (){var statearr_12337 = state_12331;
(statearr_12337[(8)] = inst_12262__$1);

return statearr_12337;
})();
if(cljs.core.truth_(inst_12263)){
var statearr_12338_12388 = state_12331__$1;
(statearr_12338_12388[(1)] = (5));

} else {
var statearr_12339_12389 = state_12331__$1;
(statearr_12339_12389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (15))){
var inst_12304 = (state_12331[(2)]);
var state_12331__$1 = state_12331;
var statearr_12340_12390 = state_12331__$1;
(statearr_12340_12390[(2)] = inst_12304);

(statearr_12340_12390[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (21))){
var inst_12324 = (state_12331[(2)]);
var state_12331__$1 = (function (){var statearr_12341 = state_12331;
(statearr_12341[(9)] = inst_12324);

return statearr_12341;
})();
var statearr_12342_12391 = state_12331__$1;
(statearr_12342_12391[(2)] = null);

(statearr_12342_12391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (13))){
var inst_12286 = (state_12331[(10)]);
var inst_12288 = cljs.core.chunked_seq_QMARK_.call(null,inst_12286);
var state_12331__$1 = state_12331;
if(inst_12288){
var statearr_12343_12392 = state_12331__$1;
(statearr_12343_12392[(1)] = (16));

} else {
var statearr_12344_12393 = state_12331__$1;
(statearr_12344_12393[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (22))){
var inst_12316 = (state_12331[(2)]);
var state_12331__$1 = state_12331;
if(cljs.core.truth_(inst_12316)){
var statearr_12345_12394 = state_12331__$1;
(statearr_12345_12394[(1)] = (23));

} else {
var statearr_12346_12395 = state_12331__$1;
(statearr_12346_12395[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (6))){
var inst_12312 = (state_12331[(11)]);
var inst_12262 = (state_12331[(8)]);
var inst_12310 = (state_12331[(7)]);
var inst_12310__$1 = topic_fn.call(null,inst_12262);
var inst_12311 = cljs.core.deref.call(null,mults);
var inst_12312__$1 = cljs.core.get.call(null,inst_12311,inst_12310__$1);
var state_12331__$1 = (function (){var statearr_12347 = state_12331;
(statearr_12347[(11)] = inst_12312__$1);

(statearr_12347[(7)] = inst_12310__$1);

return statearr_12347;
})();
if(cljs.core.truth_(inst_12312__$1)){
var statearr_12348_12396 = state_12331__$1;
(statearr_12348_12396[(1)] = (19));

} else {
var statearr_12349_12397 = state_12331__$1;
(statearr_12349_12397[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (25))){
var inst_12321 = (state_12331[(2)]);
var state_12331__$1 = state_12331;
var statearr_12350_12398 = state_12331__$1;
(statearr_12350_12398[(2)] = inst_12321);

(statearr_12350_12398[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (17))){
var inst_12286 = (state_12331[(10)]);
var inst_12295 = cljs.core.first.call(null,inst_12286);
var inst_12296 = cljs.core.async.muxch_STAR_.call(null,inst_12295);
var inst_12297 = cljs.core.async.close_BANG_.call(null,inst_12296);
var inst_12298 = cljs.core.next.call(null,inst_12286);
var inst_12272 = inst_12298;
var inst_12273 = null;
var inst_12274 = (0);
var inst_12275 = (0);
var state_12331__$1 = (function (){var statearr_12351 = state_12331;
(statearr_12351[(12)] = inst_12274);

(statearr_12351[(13)] = inst_12273);

(statearr_12351[(14)] = inst_12297);

(statearr_12351[(15)] = inst_12272);

(statearr_12351[(16)] = inst_12275);

return statearr_12351;
})();
var statearr_12352_12399 = state_12331__$1;
(statearr_12352_12399[(2)] = null);

(statearr_12352_12399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (3))){
var inst_12329 = (state_12331[(2)]);
var state_12331__$1 = state_12331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12331__$1,inst_12329);
} else {
if((state_val_12332 === (12))){
var inst_12306 = (state_12331[(2)]);
var state_12331__$1 = state_12331;
var statearr_12353_12400 = state_12331__$1;
(statearr_12353_12400[(2)] = inst_12306);

(statearr_12353_12400[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (2))){
var state_12331__$1 = state_12331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12331__$1,(4),ch);
} else {
if((state_val_12332 === (23))){
var state_12331__$1 = state_12331;
var statearr_12354_12401 = state_12331__$1;
(statearr_12354_12401[(2)] = null);

(statearr_12354_12401[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (19))){
var inst_12312 = (state_12331[(11)]);
var inst_12262 = (state_12331[(8)]);
var inst_12314 = cljs.core.async.muxch_STAR_.call(null,inst_12312);
var state_12331__$1 = state_12331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12331__$1,(22),inst_12314,inst_12262);
} else {
if((state_val_12332 === (11))){
var inst_12286 = (state_12331[(10)]);
var inst_12272 = (state_12331[(15)]);
var inst_12286__$1 = cljs.core.seq.call(null,inst_12272);
var state_12331__$1 = (function (){var statearr_12355 = state_12331;
(statearr_12355[(10)] = inst_12286__$1);

return statearr_12355;
})();
if(inst_12286__$1){
var statearr_12356_12402 = state_12331__$1;
(statearr_12356_12402[(1)] = (13));

} else {
var statearr_12357_12403 = state_12331__$1;
(statearr_12357_12403[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (9))){
var inst_12308 = (state_12331[(2)]);
var state_12331__$1 = state_12331;
var statearr_12358_12404 = state_12331__$1;
(statearr_12358_12404[(2)] = inst_12308);

(statearr_12358_12404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (5))){
var inst_12269 = cljs.core.deref.call(null,mults);
var inst_12270 = cljs.core.vals.call(null,inst_12269);
var inst_12271 = cljs.core.seq.call(null,inst_12270);
var inst_12272 = inst_12271;
var inst_12273 = null;
var inst_12274 = (0);
var inst_12275 = (0);
var state_12331__$1 = (function (){var statearr_12359 = state_12331;
(statearr_12359[(12)] = inst_12274);

(statearr_12359[(13)] = inst_12273);

(statearr_12359[(15)] = inst_12272);

(statearr_12359[(16)] = inst_12275);

return statearr_12359;
})();
var statearr_12360_12405 = state_12331__$1;
(statearr_12360_12405[(2)] = null);

(statearr_12360_12405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (14))){
var state_12331__$1 = state_12331;
var statearr_12364_12406 = state_12331__$1;
(statearr_12364_12406[(2)] = null);

(statearr_12364_12406[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (16))){
var inst_12286 = (state_12331[(10)]);
var inst_12290 = cljs.core.chunk_first.call(null,inst_12286);
var inst_12291 = cljs.core.chunk_rest.call(null,inst_12286);
var inst_12292 = cljs.core.count.call(null,inst_12290);
var inst_12272 = inst_12291;
var inst_12273 = inst_12290;
var inst_12274 = inst_12292;
var inst_12275 = (0);
var state_12331__$1 = (function (){var statearr_12365 = state_12331;
(statearr_12365[(12)] = inst_12274);

(statearr_12365[(13)] = inst_12273);

(statearr_12365[(15)] = inst_12272);

(statearr_12365[(16)] = inst_12275);

return statearr_12365;
})();
var statearr_12366_12407 = state_12331__$1;
(statearr_12366_12407[(2)] = null);

(statearr_12366_12407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (10))){
var inst_12274 = (state_12331[(12)]);
var inst_12273 = (state_12331[(13)]);
var inst_12272 = (state_12331[(15)]);
var inst_12275 = (state_12331[(16)]);
var inst_12280 = cljs.core._nth.call(null,inst_12273,inst_12275);
var inst_12281 = cljs.core.async.muxch_STAR_.call(null,inst_12280);
var inst_12282 = cljs.core.async.close_BANG_.call(null,inst_12281);
var inst_12283 = (inst_12275 + (1));
var tmp12361 = inst_12274;
var tmp12362 = inst_12273;
var tmp12363 = inst_12272;
var inst_12272__$1 = tmp12363;
var inst_12273__$1 = tmp12362;
var inst_12274__$1 = tmp12361;
var inst_12275__$1 = inst_12283;
var state_12331__$1 = (function (){var statearr_12367 = state_12331;
(statearr_12367[(12)] = inst_12274__$1);

(statearr_12367[(13)] = inst_12273__$1);

(statearr_12367[(17)] = inst_12282);

(statearr_12367[(15)] = inst_12272__$1);

(statearr_12367[(16)] = inst_12275__$1);

return statearr_12367;
})();
var statearr_12368_12408 = state_12331__$1;
(statearr_12368_12408[(2)] = null);

(statearr_12368_12408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (18))){
var inst_12301 = (state_12331[(2)]);
var state_12331__$1 = state_12331;
var statearr_12369_12409 = state_12331__$1;
(statearr_12369_12409[(2)] = inst_12301);

(statearr_12369_12409[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12332 === (8))){
var inst_12274 = (state_12331[(12)]);
var inst_12275 = (state_12331[(16)]);
var inst_12277 = (inst_12275 < inst_12274);
var inst_12278 = inst_12277;
var state_12331__$1 = state_12331;
if(cljs.core.truth_(inst_12278)){
var statearr_12370_12410 = state_12331__$1;
(statearr_12370_12410[(1)] = (10));

} else {
var statearr_12371_12411 = state_12331__$1;
(statearr_12371_12411[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10484__auto___12383,mults,ensure_mult,p))
;
return ((function (switch__10372__auto__,c__10484__auto___12383,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10373__auto__ = null;
var cljs$core$async$state_machine__10373__auto____0 = (function (){
var statearr_12375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12375[(0)] = cljs$core$async$state_machine__10373__auto__);

(statearr_12375[(1)] = (1));

return statearr_12375;
});
var cljs$core$async$state_machine__10373__auto____1 = (function (state_12331){
while(true){
var ret_value__10374__auto__ = (function (){try{while(true){
var result__10375__auto__ = switch__10372__auto__.call(null,state_12331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10375__auto__;
}
break;
}
}catch (e12376){if((e12376 instanceof Object)){
var ex__10376__auto__ = e12376;
var statearr_12377_12412 = state_12331;
(statearr_12377_12412[(5)] = ex__10376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12413 = state_12331;
state_12331 = G__12413;
continue;
} else {
return ret_value__10374__auto__;
}
break;
}
});
cljs$core$async$state_machine__10373__auto__ = function(state_12331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10373__auto____1.call(this,state_12331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10373__auto____0;
cljs$core$async$state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10373__auto____1;
return cljs$core$async$state_machine__10373__auto__;
})()
;})(switch__10372__auto__,c__10484__auto___12383,mults,ensure_mult,p))
})();
var state__10486__auto__ = (function (){var statearr_12378 = f__10485__auto__.call(null);
(statearr_12378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10484__auto___12383);

return statearr_12378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10486__auto__);
});})(c__10484__auto___12383,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args12414 = [];
var len__7214__auto___12417 = arguments.length;
var i__7215__auto___12418 = (0);
while(true){
if((i__7215__auto___12418 < len__7214__auto___12417)){
args12414.push((arguments[i__7215__auto___12418]));

var G__12419 = (i__7215__auto___12418 + (1));
i__7215__auto___12418 = G__12419;
continue;
} else {
}
break;
}

var G__12416 = args12414.length;
switch (G__12416) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12414.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args12421 = [];
var len__7214__auto___12424 = arguments.length;
var i__7215__auto___12425 = (0);
while(true){
if((i__7215__auto___12425 < len__7214__auto___12424)){
args12421.push((arguments[i__7215__auto___12425]));

var G__12426 = (i__7215__auto___12425 + (1));
i__7215__auto___12425 = G__12426;
continue;
} else {
}
break;
}

var G__12423 = args12421.length;
switch (G__12423) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12421.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args12428 = [];
var len__7214__auto___12499 = arguments.length;
var i__7215__auto___12500 = (0);
while(true){
if((i__7215__auto___12500 < len__7214__auto___12499)){
args12428.push((arguments[i__7215__auto___12500]));

var G__12501 = (i__7215__auto___12500 + (1));
i__7215__auto___12500 = G__12501;
continue;
} else {
}
break;
}

var G__12430 = args12428.length;
switch (G__12430) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12428.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__10484__auto___12503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10484__auto___12503,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10485__auto__ = (function (){var switch__10372__auto__ = ((function (c__10484__auto___12503,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12469){
var state_val_12470 = (state_12469[(1)]);
if((state_val_12470 === (7))){
var state_12469__$1 = state_12469;
var statearr_12471_12504 = state_12469__$1;
(statearr_12471_12504[(2)] = null);

(statearr_12471_12504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (1))){
var state_12469__$1 = state_12469;
var statearr_12472_12505 = state_12469__$1;
(statearr_12472_12505[(2)] = null);

(statearr_12472_12505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (4))){
var inst_12433 = (state_12469[(7)]);
var inst_12435 = (inst_12433 < cnt);
var state_12469__$1 = state_12469;
if(cljs.core.truth_(inst_12435)){
var statearr_12473_12506 = state_12469__$1;
(statearr_12473_12506[(1)] = (6));

} else {
var statearr_12474_12507 = state_12469__$1;
(statearr_12474_12507[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (15))){
var inst_12465 = (state_12469[(2)]);
var state_12469__$1 = state_12469;
var statearr_12475_12508 = state_12469__$1;
(statearr_12475_12508[(2)] = inst_12465);

(statearr_12475_12508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (13))){
var inst_12458 = cljs.core.async.close_BANG_.call(null,out);
var state_12469__$1 = state_12469;
var statearr_12476_12509 = state_12469__$1;
(statearr_12476_12509[(2)] = inst_12458);

(statearr_12476_12509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (6))){
var state_12469__$1 = state_12469;
var statearr_12477_12510 = state_12469__$1;
(statearr_12477_12510[(2)] = null);

(statearr_12477_12510[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (3))){
var inst_12467 = (state_12469[(2)]);
var state_12469__$1 = state_12469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12469__$1,inst_12467);
} else {
if((state_val_12470 === (12))){
var inst_12455 = (state_12469[(8)]);
var inst_12455__$1 = (state_12469[(2)]);
var inst_12456 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12455__$1);
var state_12469__$1 = (function (){var statearr_12478 = state_12469;
(statearr_12478[(8)] = inst_12455__$1);

return statearr_12478;
})();
if(cljs.core.truth_(inst_12456)){
var statearr_12479_12511 = state_12469__$1;
(statearr_12479_12511[(1)] = (13));

} else {
var statearr_12480_12512 = state_12469__$1;
(statearr_12480_12512[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (2))){
var inst_12432 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12433 = (0);
var state_12469__$1 = (function (){var statearr_12481 = state_12469;
(statearr_12481[(9)] = inst_12432);

(statearr_12481[(7)] = inst_12433);

return statearr_12481;
})();
var statearr_12482_12513 = state_12469__$1;
(statearr_12482_12513[(2)] = null);

(statearr_12482_12513[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (11))){
var inst_12433 = (state_12469[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12469,(10),Object,null,(9));
var inst_12442 = chs__$1.call(null,inst_12433);
var inst_12443 = done.call(null,inst_12433);
var inst_12444 = cljs.core.async.take_BANG_.call(null,inst_12442,inst_12443);
var state_12469__$1 = state_12469;
var statearr_12483_12514 = state_12469__$1;
(statearr_12483_12514[(2)] = inst_12444);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12469__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (9))){
var inst_12433 = (state_12469[(7)]);
var inst_12446 = (state_12469[(2)]);
var inst_12447 = (inst_12433 + (1));
var inst_12433__$1 = inst_12447;
var state_12469__$1 = (function (){var statearr_12484 = state_12469;
(statearr_12484[(7)] = inst_12433__$1);

(statearr_12484[(10)] = inst_12446);

return statearr_12484;
})();
var statearr_12485_12515 = state_12469__$1;
(statearr_12485_12515[(2)] = null);

(statearr_12485_12515[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (5))){
var inst_12453 = (state_12469[(2)]);
var state_12469__$1 = (function (){var statearr_12486 = state_12469;
(statearr_12486[(11)] = inst_12453);

return statearr_12486;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12469__$1,(12),dchan);
} else {
if((state_val_12470 === (14))){
var inst_12455 = (state_12469[(8)]);
var inst_12460 = cljs.core.apply.call(null,f,inst_12455);
var state_12469__$1 = state_12469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12469__$1,(16),out,inst_12460);
} else {
if((state_val_12470 === (16))){
var inst_12462 = (state_12469[(2)]);
var state_12469__$1 = (function (){var statearr_12487 = state_12469;
(statearr_12487[(12)] = inst_12462);

return statearr_12487;
})();
var statearr_12488_12516 = state_12469__$1;
(statearr_12488_12516[(2)] = null);

(statearr_12488_12516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (10))){
var inst_12437 = (state_12469[(2)]);
var inst_12438 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12469__$1 = (function (){var statearr_12489 = state_12469;
(statearr_12489[(13)] = inst_12437);

return statearr_12489;
})();
var statearr_12490_12517 = state_12469__$1;
(statearr_12490_12517[(2)] = inst_12438);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12469__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12470 === (8))){
var inst_12451 = (state_12469[(2)]);
var state_12469__$1 = state_12469;
var statearr_12491_12518 = state_12469__$1;
(statearr_12491_12518[(2)] = inst_12451);

(statearr_12491_12518[(1)] = (5));


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
}
}
}
}
}
}
}
}
}
});})(c__10484__auto___12503,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10372__auto__,c__10484__auto___12503,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10373__auto__ = null;
var cljs$core$async$state_machine__10373__auto____0 = (function (){
var statearr_12495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12495[(0)] = cljs$core$async$state_machine__10373__auto__);

(statearr_12495[(1)] = (1));

return statearr_12495;
});
var cljs$core$async$state_machine__10373__auto____1 = (function (state_12469){
while(true){
var ret_value__10374__auto__ = (function (){try{while(true){
var result__10375__auto__ = switch__10372__auto__.call(null,state_12469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10375__auto__;
}
break;
}
}catch (e12496){if((e12496 instanceof Object)){
var ex__10376__auto__ = e12496;
var statearr_12497_12519 = state_12469;
(statearr_12497_12519[(5)] = ex__10376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12520 = state_12469;
state_12469 = G__12520;
continue;
} else {
return ret_value__10374__auto__;
}
break;
}
});
cljs$core$async$state_machine__10373__auto__ = function(state_12469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10373__auto____1.call(this,state_12469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10373__auto____0;
cljs$core$async$state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10373__auto____1;
return cljs$core$async$state_machine__10373__auto__;
})()
;})(switch__10372__auto__,c__10484__auto___12503,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10486__auto__ = (function (){var statearr_12498 = f__10485__auto__.call(null);
(statearr_12498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10484__auto___12503);

return statearr_12498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10486__auto__);
});})(c__10484__auto___12503,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args12522 = [];
var len__7214__auto___12578 = arguments.length;
var i__7215__auto___12579 = (0);
while(true){
if((i__7215__auto___12579 < len__7214__auto___12578)){
args12522.push((arguments[i__7215__auto___12579]));

var G__12580 = (i__7215__auto___12579 + (1));
i__7215__auto___12579 = G__12580;
continue;
} else {
}
break;
}

var G__12524 = args12522.length;
switch (G__12524) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12522.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10484__auto___12582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10484__auto___12582,out){
return (function (){
var f__10485__auto__ = (function (){var switch__10372__auto__ = ((function (c__10484__auto___12582,out){
return (function (state_12554){
var state_val_12555 = (state_12554[(1)]);
if((state_val_12555 === (7))){
var inst_12534 = (state_12554[(7)]);
var inst_12533 = (state_12554[(8)]);
var inst_12533__$1 = (state_12554[(2)]);
var inst_12534__$1 = cljs.core.nth.call(null,inst_12533__$1,(0),null);
var inst_12535 = cljs.core.nth.call(null,inst_12533__$1,(1),null);
var inst_12536 = (inst_12534__$1 == null);
var state_12554__$1 = (function (){var statearr_12556 = state_12554;
(statearr_12556[(9)] = inst_12535);

(statearr_12556[(7)] = inst_12534__$1);

(statearr_12556[(8)] = inst_12533__$1);

return statearr_12556;
})();
if(cljs.core.truth_(inst_12536)){
var statearr_12557_12583 = state_12554__$1;
(statearr_12557_12583[(1)] = (8));

} else {
var statearr_12558_12584 = state_12554__$1;
(statearr_12558_12584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (1))){
var inst_12525 = cljs.core.vec.call(null,chs);
var inst_12526 = inst_12525;
var state_12554__$1 = (function (){var statearr_12559 = state_12554;
(statearr_12559[(10)] = inst_12526);

return statearr_12559;
})();
var statearr_12560_12585 = state_12554__$1;
(statearr_12560_12585[(2)] = null);

(statearr_12560_12585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (4))){
var inst_12526 = (state_12554[(10)]);
var state_12554__$1 = state_12554;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12554__$1,(7),inst_12526);
} else {
if((state_val_12555 === (6))){
var inst_12550 = (state_12554[(2)]);
var state_12554__$1 = state_12554;
var statearr_12561_12586 = state_12554__$1;
(statearr_12561_12586[(2)] = inst_12550);

(statearr_12561_12586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (3))){
var inst_12552 = (state_12554[(2)]);
var state_12554__$1 = state_12554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12554__$1,inst_12552);
} else {
if((state_val_12555 === (2))){
var inst_12526 = (state_12554[(10)]);
var inst_12528 = cljs.core.count.call(null,inst_12526);
var inst_12529 = (inst_12528 > (0));
var state_12554__$1 = state_12554;
if(cljs.core.truth_(inst_12529)){
var statearr_12563_12587 = state_12554__$1;
(statearr_12563_12587[(1)] = (4));

} else {
var statearr_12564_12588 = state_12554__$1;
(statearr_12564_12588[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (11))){
var inst_12526 = (state_12554[(10)]);
var inst_12543 = (state_12554[(2)]);
var tmp12562 = inst_12526;
var inst_12526__$1 = tmp12562;
var state_12554__$1 = (function (){var statearr_12565 = state_12554;
(statearr_12565[(11)] = inst_12543);

(statearr_12565[(10)] = inst_12526__$1);

return statearr_12565;
})();
var statearr_12566_12589 = state_12554__$1;
(statearr_12566_12589[(2)] = null);

(statearr_12566_12589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (9))){
var inst_12534 = (state_12554[(7)]);
var state_12554__$1 = state_12554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12554__$1,(11),out,inst_12534);
} else {
if((state_val_12555 === (5))){
var inst_12548 = cljs.core.async.close_BANG_.call(null,out);
var state_12554__$1 = state_12554;
var statearr_12567_12590 = state_12554__$1;
(statearr_12567_12590[(2)] = inst_12548);

(statearr_12567_12590[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (10))){
var inst_12546 = (state_12554[(2)]);
var state_12554__$1 = state_12554;
var statearr_12568_12591 = state_12554__$1;
(statearr_12568_12591[(2)] = inst_12546);

(statearr_12568_12591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (8))){
var inst_12535 = (state_12554[(9)]);
var inst_12534 = (state_12554[(7)]);
var inst_12533 = (state_12554[(8)]);
var inst_12526 = (state_12554[(10)]);
var inst_12538 = (function (){var cs = inst_12526;
var vec__12531 = inst_12533;
var v = inst_12534;
var c = inst_12535;
return ((function (cs,vec__12531,v,c,inst_12535,inst_12534,inst_12533,inst_12526,state_val_12555,c__10484__auto___12582,out){
return (function (p1__12521_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12521_SHARP_);
});
;})(cs,vec__12531,v,c,inst_12535,inst_12534,inst_12533,inst_12526,state_val_12555,c__10484__auto___12582,out))
})();
var inst_12539 = cljs.core.filterv.call(null,inst_12538,inst_12526);
var inst_12526__$1 = inst_12539;
var state_12554__$1 = (function (){var statearr_12569 = state_12554;
(statearr_12569[(10)] = inst_12526__$1);

return statearr_12569;
})();
var statearr_12570_12592 = state_12554__$1;
(statearr_12570_12592[(2)] = null);

(statearr_12570_12592[(1)] = (2));


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
}
}
}
}
});})(c__10484__auto___12582,out))
;
return ((function (switch__10372__auto__,c__10484__auto___12582,out){
return (function() {
var cljs$core$async$state_machine__10373__auto__ = null;
var cljs$core$async$state_machine__10373__auto____0 = (function (){
var statearr_12574 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12574[(0)] = cljs$core$async$state_machine__10373__auto__);

(statearr_12574[(1)] = (1));

return statearr_12574;
});
var cljs$core$async$state_machine__10373__auto____1 = (function (state_12554){
while(true){
var ret_value__10374__auto__ = (function (){try{while(true){
var result__10375__auto__ = switch__10372__auto__.call(null,state_12554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10375__auto__;
}
break;
}
}catch (e12575){if((e12575 instanceof Object)){
var ex__10376__auto__ = e12575;
var statearr_12576_12593 = state_12554;
(statearr_12576_12593[(5)] = ex__10376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12594 = state_12554;
state_12554 = G__12594;
continue;
} else {
return ret_value__10374__auto__;
}
break;
}
});
cljs$core$async$state_machine__10373__auto__ = function(state_12554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10373__auto____1.call(this,state_12554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10373__auto____0;
cljs$core$async$state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10373__auto____1;
return cljs$core$async$state_machine__10373__auto__;
})()
;})(switch__10372__auto__,c__10484__auto___12582,out))
})();
var state__10486__auto__ = (function (){var statearr_12577 = f__10485__auto__.call(null);
(statearr_12577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10484__auto___12582);

return statearr_12577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10486__auto__);
});})(c__10484__auto___12582,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args12595 = [];
var len__7214__auto___12644 = arguments.length;
var i__7215__auto___12645 = (0);
while(true){
if((i__7215__auto___12645 < len__7214__auto___12644)){
args12595.push((arguments[i__7215__auto___12645]));

var G__12646 = (i__7215__auto___12645 + (1));
i__7215__auto___12645 = G__12646;
continue;
} else {
}
break;
}

var G__12597 = args12595.length;
switch (G__12597) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12595.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10484__auto___12648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10484__auto___12648,out){
return (function (){
var f__10485__auto__ = (function (){var switch__10372__auto__ = ((function (c__10484__auto___12648,out){
return (function (state_12621){
var state_val_12622 = (state_12621[(1)]);
if((state_val_12622 === (7))){
var inst_12603 = (state_12621[(7)]);
var inst_12603__$1 = (state_12621[(2)]);
var inst_12604 = (inst_12603__$1 == null);
var inst_12605 = cljs.core.not.call(null,inst_12604);
var state_12621__$1 = (function (){var statearr_12623 = state_12621;
(statearr_12623[(7)] = inst_12603__$1);

return statearr_12623;
})();
if(inst_12605){
var statearr_12624_12649 = state_12621__$1;
(statearr_12624_12649[(1)] = (8));

} else {
var statearr_12625_12650 = state_12621__$1;
(statearr_12625_12650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12622 === (1))){
var inst_12598 = (0);
var state_12621__$1 = (function (){var statearr_12626 = state_12621;
(statearr_12626[(8)] = inst_12598);

return statearr_12626;
})();
var statearr_12627_12651 = state_12621__$1;
(statearr_12627_12651[(2)] = null);

(statearr_12627_12651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12622 === (4))){
var state_12621__$1 = state_12621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12621__$1,(7),ch);
} else {
if((state_val_12622 === (6))){
var inst_12616 = (state_12621[(2)]);
var state_12621__$1 = state_12621;
var statearr_12628_12652 = state_12621__$1;
(statearr_12628_12652[(2)] = inst_12616);

(statearr_12628_12652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12622 === (3))){
var inst_12618 = (state_12621[(2)]);
var inst_12619 = cljs.core.async.close_BANG_.call(null,out);
var state_12621__$1 = (function (){var statearr_12629 = state_12621;
(statearr_12629[(9)] = inst_12618);

return statearr_12629;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12621__$1,inst_12619);
} else {
if((state_val_12622 === (2))){
var inst_12598 = (state_12621[(8)]);
var inst_12600 = (inst_12598 < n);
var state_12621__$1 = state_12621;
if(cljs.core.truth_(inst_12600)){
var statearr_12630_12653 = state_12621__$1;
(statearr_12630_12653[(1)] = (4));

} else {
var statearr_12631_12654 = state_12621__$1;
(statearr_12631_12654[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12622 === (11))){
var inst_12598 = (state_12621[(8)]);
var inst_12608 = (state_12621[(2)]);
var inst_12609 = (inst_12598 + (1));
var inst_12598__$1 = inst_12609;
var state_12621__$1 = (function (){var statearr_12632 = state_12621;
(statearr_12632[(10)] = inst_12608);

(statearr_12632[(8)] = inst_12598__$1);

return statearr_12632;
})();
var statearr_12633_12655 = state_12621__$1;
(statearr_12633_12655[(2)] = null);

(statearr_12633_12655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12622 === (9))){
var state_12621__$1 = state_12621;
var statearr_12634_12656 = state_12621__$1;
(statearr_12634_12656[(2)] = null);

(statearr_12634_12656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12622 === (5))){
var state_12621__$1 = state_12621;
var statearr_12635_12657 = state_12621__$1;
(statearr_12635_12657[(2)] = null);

(statearr_12635_12657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12622 === (10))){
var inst_12613 = (state_12621[(2)]);
var state_12621__$1 = state_12621;
var statearr_12636_12658 = state_12621__$1;
(statearr_12636_12658[(2)] = inst_12613);

(statearr_12636_12658[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12622 === (8))){
var inst_12603 = (state_12621[(7)]);
var state_12621__$1 = state_12621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12621__$1,(11),out,inst_12603);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10484__auto___12648,out))
;
return ((function (switch__10372__auto__,c__10484__auto___12648,out){
return (function() {
var cljs$core$async$state_machine__10373__auto__ = null;
var cljs$core$async$state_machine__10373__auto____0 = (function (){
var statearr_12640 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12640[(0)] = cljs$core$async$state_machine__10373__auto__);

(statearr_12640[(1)] = (1));

return statearr_12640;
});
var cljs$core$async$state_machine__10373__auto____1 = (function (state_12621){
while(true){
var ret_value__10374__auto__ = (function (){try{while(true){
var result__10375__auto__ = switch__10372__auto__.call(null,state_12621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10375__auto__;
}
break;
}
}catch (e12641){if((e12641 instanceof Object)){
var ex__10376__auto__ = e12641;
var statearr_12642_12659 = state_12621;
(statearr_12642_12659[(5)] = ex__10376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12660 = state_12621;
state_12621 = G__12660;
continue;
} else {
return ret_value__10374__auto__;
}
break;
}
});
cljs$core$async$state_machine__10373__auto__ = function(state_12621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10373__auto____1.call(this,state_12621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10373__auto____0;
cljs$core$async$state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10373__auto____1;
return cljs$core$async$state_machine__10373__auto__;
})()
;})(switch__10372__auto__,c__10484__auto___12648,out))
})();
var state__10486__auto__ = (function (){var statearr_12643 = f__10485__auto__.call(null);
(statearr_12643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10484__auto___12648);

return statearr_12643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10486__auto__);
});})(c__10484__auto___12648,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12668 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12668 = (function (map_LT_,f,ch,meta12669){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta12669 = meta12669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12670,meta12669__$1){
var self__ = this;
var _12670__$1 = this;
return (new cljs.core.async.t_cljs$core$async12668(self__.map_LT_,self__.f,self__.ch,meta12669__$1));
});

cljs.core.async.t_cljs$core$async12668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12670){
var self__ = this;
var _12670__$1 = this;
return self__.meta12669;
});

cljs.core.async.t_cljs$core$async12668.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async12668.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12668.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12668.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async12668.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async12671 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12671 = (function (map_LT_,f,ch,meta12669,_,fn1,meta12672){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta12669 = meta12669;
this._ = _;
this.fn1 = fn1;
this.meta12672 = meta12672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12673,meta12672__$1){
var self__ = this;
var _12673__$1 = this;
return (new cljs.core.async.t_cljs$core$async12671(self__.map_LT_,self__.f,self__.ch,self__.meta12669,self__._,self__.fn1,meta12672__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async12671.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12673){
var self__ = this;
var _12673__$1 = this;
return self__.meta12672;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12671.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12671.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12671.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12671.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__12661_SHARP_){
return f1.call(null,(((p1__12661_SHARP_ == null))?null:self__.f.call(null,p1__12661_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async12671.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12669","meta12669",-333123162,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12668","cljs.core.async/t_cljs$core$async12668",-874353298,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12672","meta12672",1569567090,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12671.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12671";

cljs.core.async.t_cljs$core$async12671.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async12671");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async12671 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12671(map_LT___$1,f__$1,ch__$1,meta12669__$1,___$2,fn1__$1,meta12672){
return (new cljs.core.async.t_cljs$core$async12671(map_LT___$1,f__$1,ch__$1,meta12669__$1,___$2,fn1__$1,meta12672));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async12671(self__.map_LT_,self__.f,self__.ch,self__.meta12669,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6144__auto__ = ret;
if(cljs.core.truth_(and__6144__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6144__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async12668.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async12668.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async12668.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12669","meta12669",-333123162,null)], null);
});

cljs.core.async.t_cljs$core$async12668.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12668.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12668";

cljs.core.async.t_cljs$core$async12668.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async12668");
});

cljs.core.async.__GT_t_cljs$core$async12668 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12668(map_LT___$1,f__$1,ch__$1,meta12669){
return (new cljs.core.async.t_cljs$core$async12668(map_LT___$1,f__$1,ch__$1,meta12669));
});

}

return (new cljs.core.async.t_cljs$core$async12668(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12677 = (function (map_GT_,f,ch,meta12678){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta12678 = meta12678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12679,meta12678__$1){
var self__ = this;
var _12679__$1 = this;
return (new cljs.core.async.t_cljs$core$async12677(self__.map_GT_,self__.f,self__.ch,meta12678__$1));
});

cljs.core.async.t_cljs$core$async12677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12679){
var self__ = this;
var _12679__$1 = this;
return self__.meta12678;
});

cljs.core.async.t_cljs$core$async12677.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async12677.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12677.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async12677.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12677.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async12677.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async12677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12678","meta12678",1586635829,null)], null);
});

cljs.core.async.t_cljs$core$async12677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12677";

cljs.core.async.t_cljs$core$async12677.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async12677");
});

cljs.core.async.__GT_t_cljs$core$async12677 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12677(map_GT___$1,f__$1,ch__$1,meta12678){
return (new cljs.core.async.t_cljs$core$async12677(map_GT___$1,f__$1,ch__$1,meta12678));
});

}

return (new cljs.core.async.t_cljs$core$async12677(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async12683 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12683 = (function (filter_GT_,p,ch,meta12684){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta12684 = meta12684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12685,meta12684__$1){
var self__ = this;
var _12685__$1 = this;
return (new cljs.core.async.t_cljs$core$async12683(self__.filter_GT_,self__.p,self__.ch,meta12684__$1));
});

cljs.core.async.t_cljs$core$async12683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12685){
var self__ = this;
var _12685__$1 = this;
return self__.meta12684;
});

cljs.core.async.t_cljs$core$async12683.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async12683.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12683.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12683.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async12683.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12683.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async12683.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async12683.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12684","meta12684",1595318367,null)], null);
});

cljs.core.async.t_cljs$core$async12683.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12683";

cljs.core.async.t_cljs$core$async12683.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async12683");
});

cljs.core.async.__GT_t_cljs$core$async12683 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12683(filter_GT___$1,p__$1,ch__$1,meta12684){
return (new cljs.core.async.t_cljs$core$async12683(filter_GT___$1,p__$1,ch__$1,meta12684));
});

}

return (new cljs.core.async.t_cljs$core$async12683(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args12686 = [];
var len__7214__auto___12730 = arguments.length;
var i__7215__auto___12731 = (0);
while(true){
if((i__7215__auto___12731 < len__7214__auto___12730)){
args12686.push((arguments[i__7215__auto___12731]));

var G__12732 = (i__7215__auto___12731 + (1));
i__7215__auto___12731 = G__12732;
continue;
} else {
}
break;
}

var G__12688 = args12686.length;
switch (G__12688) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12686.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10484__auto___12734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10484__auto___12734,out){
return (function (){
var f__10485__auto__ = (function (){var switch__10372__auto__ = ((function (c__10484__auto___12734,out){
return (function (state_12709){
var state_val_12710 = (state_12709[(1)]);
if((state_val_12710 === (7))){
var inst_12705 = (state_12709[(2)]);
var state_12709__$1 = state_12709;
var statearr_12711_12735 = state_12709__$1;
(statearr_12711_12735[(2)] = inst_12705);

(statearr_12711_12735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12710 === (1))){
var state_12709__$1 = state_12709;
var statearr_12712_12736 = state_12709__$1;
(statearr_12712_12736[(2)] = null);

(statearr_12712_12736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12710 === (4))){
var inst_12691 = (state_12709[(7)]);
var inst_12691__$1 = (state_12709[(2)]);
var inst_12692 = (inst_12691__$1 == null);
var state_12709__$1 = (function (){var statearr_12713 = state_12709;
(statearr_12713[(7)] = inst_12691__$1);

return statearr_12713;
})();
if(cljs.core.truth_(inst_12692)){
var statearr_12714_12737 = state_12709__$1;
(statearr_12714_12737[(1)] = (5));

} else {
var statearr_12715_12738 = state_12709__$1;
(statearr_12715_12738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12710 === (6))){
var inst_12691 = (state_12709[(7)]);
var inst_12696 = p.call(null,inst_12691);
var state_12709__$1 = state_12709;
if(cljs.core.truth_(inst_12696)){
var statearr_12716_12739 = state_12709__$1;
(statearr_12716_12739[(1)] = (8));

} else {
var statearr_12717_12740 = state_12709__$1;
(statearr_12717_12740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12710 === (3))){
var inst_12707 = (state_12709[(2)]);
var state_12709__$1 = state_12709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12709__$1,inst_12707);
} else {
if((state_val_12710 === (2))){
var state_12709__$1 = state_12709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12709__$1,(4),ch);
} else {
if((state_val_12710 === (11))){
var inst_12699 = (state_12709[(2)]);
var state_12709__$1 = state_12709;
var statearr_12718_12741 = state_12709__$1;
(statearr_12718_12741[(2)] = inst_12699);

(statearr_12718_12741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12710 === (9))){
var state_12709__$1 = state_12709;
var statearr_12719_12742 = state_12709__$1;
(statearr_12719_12742[(2)] = null);

(statearr_12719_12742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12710 === (5))){
var inst_12694 = cljs.core.async.close_BANG_.call(null,out);
var state_12709__$1 = state_12709;
var statearr_12720_12743 = state_12709__$1;
(statearr_12720_12743[(2)] = inst_12694);

(statearr_12720_12743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12710 === (10))){
var inst_12702 = (state_12709[(2)]);
var state_12709__$1 = (function (){var statearr_12721 = state_12709;
(statearr_12721[(8)] = inst_12702);

return statearr_12721;
})();
var statearr_12722_12744 = state_12709__$1;
(statearr_12722_12744[(2)] = null);

(statearr_12722_12744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12710 === (8))){
var inst_12691 = (state_12709[(7)]);
var state_12709__$1 = state_12709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12709__$1,(11),out,inst_12691);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10484__auto___12734,out))
;
return ((function (switch__10372__auto__,c__10484__auto___12734,out){
return (function() {
var cljs$core$async$state_machine__10373__auto__ = null;
var cljs$core$async$state_machine__10373__auto____0 = (function (){
var statearr_12726 = [null,null,null,null,null,null,null,null,null];
(statearr_12726[(0)] = cljs$core$async$state_machine__10373__auto__);

(statearr_12726[(1)] = (1));

return statearr_12726;
});
var cljs$core$async$state_machine__10373__auto____1 = (function (state_12709){
while(true){
var ret_value__10374__auto__ = (function (){try{while(true){
var result__10375__auto__ = switch__10372__auto__.call(null,state_12709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10375__auto__;
}
break;
}
}catch (e12727){if((e12727 instanceof Object)){
var ex__10376__auto__ = e12727;
var statearr_12728_12745 = state_12709;
(statearr_12728_12745[(5)] = ex__10376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12746 = state_12709;
state_12709 = G__12746;
continue;
} else {
return ret_value__10374__auto__;
}
break;
}
});
cljs$core$async$state_machine__10373__auto__ = function(state_12709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10373__auto____1.call(this,state_12709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10373__auto____0;
cljs$core$async$state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10373__auto____1;
return cljs$core$async$state_machine__10373__auto__;
})()
;})(switch__10372__auto__,c__10484__auto___12734,out))
})();
var state__10486__auto__ = (function (){var statearr_12729 = f__10485__auto__.call(null);
(statearr_12729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10484__auto___12734);

return statearr_12729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10486__auto__);
});})(c__10484__auto___12734,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args12747 = [];
var len__7214__auto___12750 = arguments.length;
var i__7215__auto___12751 = (0);
while(true){
if((i__7215__auto___12751 < len__7214__auto___12750)){
args12747.push((arguments[i__7215__auto___12751]));

var G__12752 = (i__7215__auto___12751 + (1));
i__7215__auto___12751 = G__12752;
continue;
} else {
}
break;
}

var G__12749 = args12747.length;
switch (G__12749) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12747.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__10484__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10484__auto__){
return (function (){
var f__10485__auto__ = (function (){var switch__10372__auto__ = ((function (c__10484__auto__){
return (function (state_12919){
var state_val_12920 = (state_12919[(1)]);
if((state_val_12920 === (7))){
var inst_12915 = (state_12919[(2)]);
var state_12919__$1 = state_12919;
var statearr_12921_12962 = state_12919__$1;
(statearr_12921_12962[(2)] = inst_12915);

(statearr_12921_12962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12920 === (20))){
var inst_12885 = (state_12919[(7)]);
var inst_12896 = (state_12919[(2)]);
var inst_12897 = cljs.core.next.call(null,inst_12885);
var inst_12871 = inst_12897;
var inst_12872 = null;
var inst_12873 = (0);
var inst_12874 = (0);
var state_12919__$1 = (function (){var statearr_12922 = state_12919;
(statearr_12922[(8)] = inst_12874);

(statearr_12922[(9)] = inst_12873);

(statearr_12922[(10)] = inst_12871);

(statearr_12922[(11)] = inst_12896);

(statearr_12922[(12)] = inst_12872);

return statearr_12922;
})();
var statearr_12923_12963 = state_12919__$1;
(statearr_12923_12963[(2)] = null);

(statearr_12923_12963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12920 === (1))){
var state_12919__$1 = state_12919;
var statearr_12924_12964 = state_12919__$1;
(statearr_12924_12964[(2)] = null);

(statearr_12924_12964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12920 === (4))){
var inst_12860 = (state_12919[(13)]);
var inst_12860__$1 = (state_12919[(2)]);
var inst_12861 = (inst_12860__$1 == null);
var state_12919__$1 = (function (){var statearr_12925 = state_12919;
(statearr_12925[(13)] = inst_12860__$1);

return statearr_12925;
})();
if(cljs.core.truth_(inst_12861)){
var statearr_12926_12965 = state_12919__$1;
(statearr_12926_12965[(1)] = (5));

} else {
var statearr_12927_12966 = state_12919__$1;
(statearr_12927_12966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12920 === (15))){
var state_12919__$1 = state_12919;
var statearr_12931_12967 = state_12919__$1;
(statearr_12931_12967[(2)] = null);

(statearr_12931_12967[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12920 === (21))){
var state_12919__$1 = state_12919;
var statearr_12932_12968 = state_12919__$1;
(statearr_12932_12968[(2)] = null);

(statearr_12932_12968[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12920 === (13))){
var inst_12874 = (state_12919[(8)]);
var inst_12873 = (state_12919[(9)]);
var inst_12871 = (state_12919[(10)]);
var inst_12872 = (state_12919[(12)]);
var inst_12881 = (state_12919[(2)]);
var inst_12882 = (inst_12874 + (1));
var tmp12928 = inst_12873;
var tmp12929 = inst_12871;
var tmp12930 = inst_12872;
var inst_12871__$1 = tmp12929;
var inst_12872__$1 = tmp12930;
var inst_12873__$1 = tmp12928;
var inst_12874__$1 = inst_12882;
var state_12919__$1 = (function (){var statearr_12933 = state_12919;
(statearr_12933[(8)] = inst_12874__$1);

(statearr_12933[(9)] = inst_12873__$1);

(statearr_12933[(10)] = inst_12871__$1);

(statearr_12933[(12)] = inst_12872__$1);

(statearr_12933[(14)] = inst_12881);

return statearr_12933;
})();
var statearr_12934_12969 = state_12919__$1;
(statearr_12934_12969[(2)] = null);

(statearr_12934_12969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12920 === (22))){
var state_12919__$1 = state_12919;
var statearr_12935_12970 = state_12919__$1;
(statearr_12935_12970[(2)] = null);

(statearr_12935_12970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12920 === (6))){
var inst_12860 = (state_12919[(13)]);
var inst_12869 = f.call(null,inst_12860);
var inst_12870 = cljs.core.seq.call(null,inst_12869);
var inst_12871 = inst_12870;
var inst_12872 = null;
var inst_12873 = (0);
var inst_12874 = (0);
var state_12919__$1 = (function (){var statearr_12936 = state_12919;
(statearr_12936[(8)] = inst_12874);

(statearr_12936[(9)] = inst_12873);

(statearr_12936[(10)] = inst_12871);

(statearr_12936[(12)] = inst_12872);

return statearr_12936;
})();
var statearr_12937_12971 = state_12919__$1;
(statearr_12937_12971[(2)] = null);

(statearr_12937_12971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12920 === (17))){
var inst_12885 = (state_12919[(7)]);
var inst_12889 = cljs.core.chunk_first.call(null,inst_12885);
var inst_12890 = cljs.core.chunk_rest.call(null,inst_12885);
var inst_12891 = cljs.core.count.call(null,inst_12889);
var inst_12871 = inst_12890;
var inst_12872 = inst_12889;
var inst_12873 = inst_12891;
var inst_12874 = (0);
var state_12919__$1 = (function (){var statearr_12938 = state_12919;
(statearr_12938[(8)] = inst_12874);

(statearr_12938[(9)] = inst_12873);

(statearr_12938[(10)] = inst_12871);

(statearr_12938[(12)] = inst_12872);

return statearr_12938;
})();
var statearr_12939_12972 = state_12919__$1;
(statearr_12939_12972[(2)] = null);

(statearr_12939_12972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12920 === (3))){
var inst_12917 = (state_12919[(2)]);
var state_12919__$1 = state_12919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12919__$1,inst_12917);
} else {
if((state_val_12920 === (12))){
var inst_12905 = (state_12919[(2)]);
var state_12919__$1 = state_12919;
var statearr_12940_12973 = state_12919__$1;
(statearr_12940_12973[(2)] = inst_12905);

(statearr_12940_12973[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12920 === (2))){
var state_12919__$1 = state_12919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12919__$1,(4),in$);
} else {
if((state_val_12920 === (23))){
var inst_12913 = (state_12919[(2)]);
var state_12919__$1 = state_12919;
var statearr_12941_12974 = state_12919__$1;
(statearr_12941_12974[(2)] = inst_12913);

(statearr_12941_12974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12920 === (19))){
var inst_12900 = (state_12919[(2)]);
var state_12919__$1 = state_12919;
var statearr_12942_12975 = state_12919__$1;
(statearr_12942_12975[(2)] = inst_12900);

(statearr_12942_12975[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12920 === (11))){
var inst_12871 = (state_12919[(10)]);
var inst_12885 = (state_12919[(7)]);
var inst_12885__$1 = cljs.core.seq.call(null,inst_12871);
var state_12919__$1 = (function (){var statearr_12943 = state_12919;
(statearr_12943[(7)] = inst_12885__$1);

return statearr_12943;
})();
if(inst_12885__$1){
var statearr_12944_12976 = state_12919__$1;
(statearr_12944_12976[(1)] = (14));

} else {
var statearr_12945_12977 = state_12919__$1;
(statearr_12945_12977[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12920 === (9))){
var inst_12907 = (state_12919[(2)]);
var inst_12908 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12919__$1 = (function (){var statearr_12946 = state_12919;
(statearr_12946[(15)] = inst_12907);

return statearr_12946;
})();
if(cljs.core.truth_(inst_12908)){
var statearr_12947_12978 = state_12919__$1;
(statearr_12947_12978[(1)] = (21));

} else {
var statearr_12948_12979 = state_12919__$1;
(statearr_12948_12979[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12920 === (5))){
var inst_12863 = cljs.core.async.close_BANG_.call(null,out);
var state_12919__$1 = state_12919;
var statearr_12949_12980 = state_12919__$1;
(statearr_12949_12980[(2)] = inst_12863);

(statearr_12949_12980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12920 === (14))){
var inst_12885 = (state_12919[(7)]);
var inst_12887 = cljs.core.chunked_seq_QMARK_.call(null,inst_12885);
var state_12919__$1 = state_12919;
if(inst_12887){
var statearr_12950_12981 = state_12919__$1;
(statearr_12950_12981[(1)] = (17));

} else {
var statearr_12951_12982 = state_12919__$1;
(statearr_12951_12982[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12920 === (16))){
var inst_12903 = (state_12919[(2)]);
var state_12919__$1 = state_12919;
var statearr_12952_12983 = state_12919__$1;
(statearr_12952_12983[(2)] = inst_12903);

(statearr_12952_12983[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12920 === (10))){
var inst_12874 = (state_12919[(8)]);
var inst_12872 = (state_12919[(12)]);
var inst_12879 = cljs.core._nth.call(null,inst_12872,inst_12874);
var state_12919__$1 = state_12919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12919__$1,(13),out,inst_12879);
} else {
if((state_val_12920 === (18))){
var inst_12885 = (state_12919[(7)]);
var inst_12894 = cljs.core.first.call(null,inst_12885);
var state_12919__$1 = state_12919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12919__$1,(20),out,inst_12894);
} else {
if((state_val_12920 === (8))){
var inst_12874 = (state_12919[(8)]);
var inst_12873 = (state_12919[(9)]);
var inst_12876 = (inst_12874 < inst_12873);
var inst_12877 = inst_12876;
var state_12919__$1 = state_12919;
if(cljs.core.truth_(inst_12877)){
var statearr_12953_12984 = state_12919__$1;
(statearr_12953_12984[(1)] = (10));

} else {
var statearr_12954_12985 = state_12919__$1;
(statearr_12954_12985[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10484__auto__))
;
return ((function (switch__10372__auto__,c__10484__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10373__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10373__auto____0 = (function (){
var statearr_12958 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12958[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10373__auto__);

(statearr_12958[(1)] = (1));

return statearr_12958;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10373__auto____1 = (function (state_12919){
while(true){
var ret_value__10374__auto__ = (function (){try{while(true){
var result__10375__auto__ = switch__10372__auto__.call(null,state_12919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10375__auto__;
}
break;
}
}catch (e12959){if((e12959 instanceof Object)){
var ex__10376__auto__ = e12959;
var statearr_12960_12986 = state_12919;
(statearr_12960_12986[(5)] = ex__10376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12987 = state_12919;
state_12919 = G__12987;
continue;
} else {
return ret_value__10374__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10373__auto__ = function(state_12919){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10373__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10373__auto____1.call(this,state_12919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10373__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10373__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10373__auto__;
})()
;})(switch__10372__auto__,c__10484__auto__))
})();
var state__10486__auto__ = (function (){var statearr_12961 = f__10485__auto__.call(null);
(statearr_12961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10484__auto__);

return statearr_12961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10486__auto__);
});})(c__10484__auto__))
);

return c__10484__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args12988 = [];
var len__7214__auto___12991 = arguments.length;
var i__7215__auto___12992 = (0);
while(true){
if((i__7215__auto___12992 < len__7214__auto___12991)){
args12988.push((arguments[i__7215__auto___12992]));

var G__12993 = (i__7215__auto___12992 + (1));
i__7215__auto___12992 = G__12993;
continue;
} else {
}
break;
}

var G__12990 = args12988.length;
switch (G__12990) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12988.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args12995 = [];
var len__7214__auto___12998 = arguments.length;
var i__7215__auto___12999 = (0);
while(true){
if((i__7215__auto___12999 < len__7214__auto___12998)){
args12995.push((arguments[i__7215__auto___12999]));

var G__13000 = (i__7215__auto___12999 + (1));
i__7215__auto___12999 = G__13000;
continue;
} else {
}
break;
}

var G__12997 = args12995.length;
switch (G__12997) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12995.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args13002 = [];
var len__7214__auto___13053 = arguments.length;
var i__7215__auto___13054 = (0);
while(true){
if((i__7215__auto___13054 < len__7214__auto___13053)){
args13002.push((arguments[i__7215__auto___13054]));

var G__13055 = (i__7215__auto___13054 + (1));
i__7215__auto___13054 = G__13055;
continue;
} else {
}
break;
}

var G__13004 = args13002.length;
switch (G__13004) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13002.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10484__auto___13057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10484__auto___13057,out){
return (function (){
var f__10485__auto__ = (function (){var switch__10372__auto__ = ((function (c__10484__auto___13057,out){
return (function (state_13028){
var state_val_13029 = (state_13028[(1)]);
if((state_val_13029 === (7))){
var inst_13023 = (state_13028[(2)]);
var state_13028__$1 = state_13028;
var statearr_13030_13058 = state_13028__$1;
(statearr_13030_13058[(2)] = inst_13023);

(statearr_13030_13058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13029 === (1))){
var inst_13005 = null;
var state_13028__$1 = (function (){var statearr_13031 = state_13028;
(statearr_13031[(7)] = inst_13005);

return statearr_13031;
})();
var statearr_13032_13059 = state_13028__$1;
(statearr_13032_13059[(2)] = null);

(statearr_13032_13059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13029 === (4))){
var inst_13008 = (state_13028[(8)]);
var inst_13008__$1 = (state_13028[(2)]);
var inst_13009 = (inst_13008__$1 == null);
var inst_13010 = cljs.core.not.call(null,inst_13009);
var state_13028__$1 = (function (){var statearr_13033 = state_13028;
(statearr_13033[(8)] = inst_13008__$1);

return statearr_13033;
})();
if(inst_13010){
var statearr_13034_13060 = state_13028__$1;
(statearr_13034_13060[(1)] = (5));

} else {
var statearr_13035_13061 = state_13028__$1;
(statearr_13035_13061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13029 === (6))){
var state_13028__$1 = state_13028;
var statearr_13036_13062 = state_13028__$1;
(statearr_13036_13062[(2)] = null);

(statearr_13036_13062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13029 === (3))){
var inst_13025 = (state_13028[(2)]);
var inst_13026 = cljs.core.async.close_BANG_.call(null,out);
var state_13028__$1 = (function (){var statearr_13037 = state_13028;
(statearr_13037[(9)] = inst_13025);

return statearr_13037;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13028__$1,inst_13026);
} else {
if((state_val_13029 === (2))){
var state_13028__$1 = state_13028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13028__$1,(4),ch);
} else {
if((state_val_13029 === (11))){
var inst_13008 = (state_13028[(8)]);
var inst_13017 = (state_13028[(2)]);
var inst_13005 = inst_13008;
var state_13028__$1 = (function (){var statearr_13038 = state_13028;
(statearr_13038[(7)] = inst_13005);

(statearr_13038[(10)] = inst_13017);

return statearr_13038;
})();
var statearr_13039_13063 = state_13028__$1;
(statearr_13039_13063[(2)] = null);

(statearr_13039_13063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13029 === (9))){
var inst_13008 = (state_13028[(8)]);
var state_13028__$1 = state_13028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13028__$1,(11),out,inst_13008);
} else {
if((state_val_13029 === (5))){
var inst_13005 = (state_13028[(7)]);
var inst_13008 = (state_13028[(8)]);
var inst_13012 = cljs.core._EQ_.call(null,inst_13008,inst_13005);
var state_13028__$1 = state_13028;
if(inst_13012){
var statearr_13041_13064 = state_13028__$1;
(statearr_13041_13064[(1)] = (8));

} else {
var statearr_13042_13065 = state_13028__$1;
(statearr_13042_13065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13029 === (10))){
var inst_13020 = (state_13028[(2)]);
var state_13028__$1 = state_13028;
var statearr_13043_13066 = state_13028__$1;
(statearr_13043_13066[(2)] = inst_13020);

(statearr_13043_13066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13029 === (8))){
var inst_13005 = (state_13028[(7)]);
var tmp13040 = inst_13005;
var inst_13005__$1 = tmp13040;
var state_13028__$1 = (function (){var statearr_13044 = state_13028;
(statearr_13044[(7)] = inst_13005__$1);

return statearr_13044;
})();
var statearr_13045_13067 = state_13028__$1;
(statearr_13045_13067[(2)] = null);

(statearr_13045_13067[(1)] = (2));


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
}
}
}
}
});})(c__10484__auto___13057,out))
;
return ((function (switch__10372__auto__,c__10484__auto___13057,out){
return (function() {
var cljs$core$async$state_machine__10373__auto__ = null;
var cljs$core$async$state_machine__10373__auto____0 = (function (){
var statearr_13049 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13049[(0)] = cljs$core$async$state_machine__10373__auto__);

(statearr_13049[(1)] = (1));

return statearr_13049;
});
var cljs$core$async$state_machine__10373__auto____1 = (function (state_13028){
while(true){
var ret_value__10374__auto__ = (function (){try{while(true){
var result__10375__auto__ = switch__10372__auto__.call(null,state_13028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10375__auto__;
}
break;
}
}catch (e13050){if((e13050 instanceof Object)){
var ex__10376__auto__ = e13050;
var statearr_13051_13068 = state_13028;
(statearr_13051_13068[(5)] = ex__10376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13069 = state_13028;
state_13028 = G__13069;
continue;
} else {
return ret_value__10374__auto__;
}
break;
}
});
cljs$core$async$state_machine__10373__auto__ = function(state_13028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10373__auto____1.call(this,state_13028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10373__auto____0;
cljs$core$async$state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10373__auto____1;
return cljs$core$async$state_machine__10373__auto__;
})()
;})(switch__10372__auto__,c__10484__auto___13057,out))
})();
var state__10486__auto__ = (function (){var statearr_13052 = f__10485__auto__.call(null);
(statearr_13052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10484__auto___13057);

return statearr_13052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10486__auto__);
});})(c__10484__auto___13057,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args13070 = [];
var len__7214__auto___13140 = arguments.length;
var i__7215__auto___13141 = (0);
while(true){
if((i__7215__auto___13141 < len__7214__auto___13140)){
args13070.push((arguments[i__7215__auto___13141]));

var G__13142 = (i__7215__auto___13141 + (1));
i__7215__auto___13141 = G__13142;
continue;
} else {
}
break;
}

var G__13072 = args13070.length;
switch (G__13072) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13070.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10484__auto___13144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10484__auto___13144,out){
return (function (){
var f__10485__auto__ = (function (){var switch__10372__auto__ = ((function (c__10484__auto___13144,out){
return (function (state_13110){
var state_val_13111 = (state_13110[(1)]);
if((state_val_13111 === (7))){
var inst_13106 = (state_13110[(2)]);
var state_13110__$1 = state_13110;
var statearr_13112_13145 = state_13110__$1;
(statearr_13112_13145[(2)] = inst_13106);

(statearr_13112_13145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13111 === (1))){
var inst_13073 = (new Array(n));
var inst_13074 = inst_13073;
var inst_13075 = (0);
var state_13110__$1 = (function (){var statearr_13113 = state_13110;
(statearr_13113[(7)] = inst_13075);

(statearr_13113[(8)] = inst_13074);

return statearr_13113;
})();
var statearr_13114_13146 = state_13110__$1;
(statearr_13114_13146[(2)] = null);

(statearr_13114_13146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13111 === (4))){
var inst_13078 = (state_13110[(9)]);
var inst_13078__$1 = (state_13110[(2)]);
var inst_13079 = (inst_13078__$1 == null);
var inst_13080 = cljs.core.not.call(null,inst_13079);
var state_13110__$1 = (function (){var statearr_13115 = state_13110;
(statearr_13115[(9)] = inst_13078__$1);

return statearr_13115;
})();
if(inst_13080){
var statearr_13116_13147 = state_13110__$1;
(statearr_13116_13147[(1)] = (5));

} else {
var statearr_13117_13148 = state_13110__$1;
(statearr_13117_13148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13111 === (15))){
var inst_13100 = (state_13110[(2)]);
var state_13110__$1 = state_13110;
var statearr_13118_13149 = state_13110__$1;
(statearr_13118_13149[(2)] = inst_13100);

(statearr_13118_13149[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13111 === (13))){
var state_13110__$1 = state_13110;
var statearr_13119_13150 = state_13110__$1;
(statearr_13119_13150[(2)] = null);

(statearr_13119_13150[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13111 === (6))){
var inst_13075 = (state_13110[(7)]);
var inst_13096 = (inst_13075 > (0));
var state_13110__$1 = state_13110;
if(cljs.core.truth_(inst_13096)){
var statearr_13120_13151 = state_13110__$1;
(statearr_13120_13151[(1)] = (12));

} else {
var statearr_13121_13152 = state_13110__$1;
(statearr_13121_13152[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13111 === (3))){
var inst_13108 = (state_13110[(2)]);
var state_13110__$1 = state_13110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13110__$1,inst_13108);
} else {
if((state_val_13111 === (12))){
var inst_13074 = (state_13110[(8)]);
var inst_13098 = cljs.core.vec.call(null,inst_13074);
var state_13110__$1 = state_13110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13110__$1,(15),out,inst_13098);
} else {
if((state_val_13111 === (2))){
var state_13110__$1 = state_13110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13110__$1,(4),ch);
} else {
if((state_val_13111 === (11))){
var inst_13090 = (state_13110[(2)]);
var inst_13091 = (new Array(n));
var inst_13074 = inst_13091;
var inst_13075 = (0);
var state_13110__$1 = (function (){var statearr_13122 = state_13110;
(statearr_13122[(7)] = inst_13075);

(statearr_13122[(8)] = inst_13074);

(statearr_13122[(10)] = inst_13090);

return statearr_13122;
})();
var statearr_13123_13153 = state_13110__$1;
(statearr_13123_13153[(2)] = null);

(statearr_13123_13153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13111 === (9))){
var inst_13074 = (state_13110[(8)]);
var inst_13088 = cljs.core.vec.call(null,inst_13074);
var state_13110__$1 = state_13110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13110__$1,(11),out,inst_13088);
} else {
if((state_val_13111 === (5))){
var inst_13075 = (state_13110[(7)]);
var inst_13078 = (state_13110[(9)]);
var inst_13074 = (state_13110[(8)]);
var inst_13083 = (state_13110[(11)]);
var inst_13082 = (inst_13074[inst_13075] = inst_13078);
var inst_13083__$1 = (inst_13075 + (1));
var inst_13084 = (inst_13083__$1 < n);
var state_13110__$1 = (function (){var statearr_13124 = state_13110;
(statearr_13124[(12)] = inst_13082);

(statearr_13124[(11)] = inst_13083__$1);

return statearr_13124;
})();
if(cljs.core.truth_(inst_13084)){
var statearr_13125_13154 = state_13110__$1;
(statearr_13125_13154[(1)] = (8));

} else {
var statearr_13126_13155 = state_13110__$1;
(statearr_13126_13155[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13111 === (14))){
var inst_13103 = (state_13110[(2)]);
var inst_13104 = cljs.core.async.close_BANG_.call(null,out);
var state_13110__$1 = (function (){var statearr_13128 = state_13110;
(statearr_13128[(13)] = inst_13103);

return statearr_13128;
})();
var statearr_13129_13156 = state_13110__$1;
(statearr_13129_13156[(2)] = inst_13104);

(statearr_13129_13156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13111 === (10))){
var inst_13094 = (state_13110[(2)]);
var state_13110__$1 = state_13110;
var statearr_13130_13157 = state_13110__$1;
(statearr_13130_13157[(2)] = inst_13094);

(statearr_13130_13157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13111 === (8))){
var inst_13074 = (state_13110[(8)]);
var inst_13083 = (state_13110[(11)]);
var tmp13127 = inst_13074;
var inst_13074__$1 = tmp13127;
var inst_13075 = inst_13083;
var state_13110__$1 = (function (){var statearr_13131 = state_13110;
(statearr_13131[(7)] = inst_13075);

(statearr_13131[(8)] = inst_13074__$1);

return statearr_13131;
})();
var statearr_13132_13158 = state_13110__$1;
(statearr_13132_13158[(2)] = null);

(statearr_13132_13158[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__10484__auto___13144,out))
;
return ((function (switch__10372__auto__,c__10484__auto___13144,out){
return (function() {
var cljs$core$async$state_machine__10373__auto__ = null;
var cljs$core$async$state_machine__10373__auto____0 = (function (){
var statearr_13136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13136[(0)] = cljs$core$async$state_machine__10373__auto__);

(statearr_13136[(1)] = (1));

return statearr_13136;
});
var cljs$core$async$state_machine__10373__auto____1 = (function (state_13110){
while(true){
var ret_value__10374__auto__ = (function (){try{while(true){
var result__10375__auto__ = switch__10372__auto__.call(null,state_13110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10375__auto__;
}
break;
}
}catch (e13137){if((e13137 instanceof Object)){
var ex__10376__auto__ = e13137;
var statearr_13138_13159 = state_13110;
(statearr_13138_13159[(5)] = ex__10376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13160 = state_13110;
state_13110 = G__13160;
continue;
} else {
return ret_value__10374__auto__;
}
break;
}
});
cljs$core$async$state_machine__10373__auto__ = function(state_13110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10373__auto____1.call(this,state_13110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10373__auto____0;
cljs$core$async$state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10373__auto____1;
return cljs$core$async$state_machine__10373__auto__;
})()
;})(switch__10372__auto__,c__10484__auto___13144,out))
})();
var state__10486__auto__ = (function (){var statearr_13139 = f__10485__auto__.call(null);
(statearr_13139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10484__auto___13144);

return statearr_13139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10486__auto__);
});})(c__10484__auto___13144,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args13161 = [];
var len__7214__auto___13235 = arguments.length;
var i__7215__auto___13236 = (0);
while(true){
if((i__7215__auto___13236 < len__7214__auto___13235)){
args13161.push((arguments[i__7215__auto___13236]));

var G__13237 = (i__7215__auto___13236 + (1));
i__7215__auto___13236 = G__13237;
continue;
} else {
}
break;
}

var G__13163 = args13161.length;
switch (G__13163) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13161.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10484__auto___13239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10484__auto___13239,out){
return (function (){
var f__10485__auto__ = (function (){var switch__10372__auto__ = ((function (c__10484__auto___13239,out){
return (function (state_13205){
var state_val_13206 = (state_13205[(1)]);
if((state_val_13206 === (7))){
var inst_13201 = (state_13205[(2)]);
var state_13205__$1 = state_13205;
var statearr_13207_13240 = state_13205__$1;
(statearr_13207_13240[(2)] = inst_13201);

(statearr_13207_13240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (1))){
var inst_13164 = [];
var inst_13165 = inst_13164;
var inst_13166 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13205__$1 = (function (){var statearr_13208 = state_13205;
(statearr_13208[(7)] = inst_13166);

(statearr_13208[(8)] = inst_13165);

return statearr_13208;
})();
var statearr_13209_13241 = state_13205__$1;
(statearr_13209_13241[(2)] = null);

(statearr_13209_13241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (4))){
var inst_13169 = (state_13205[(9)]);
var inst_13169__$1 = (state_13205[(2)]);
var inst_13170 = (inst_13169__$1 == null);
var inst_13171 = cljs.core.not.call(null,inst_13170);
var state_13205__$1 = (function (){var statearr_13210 = state_13205;
(statearr_13210[(9)] = inst_13169__$1);

return statearr_13210;
})();
if(inst_13171){
var statearr_13211_13242 = state_13205__$1;
(statearr_13211_13242[(1)] = (5));

} else {
var statearr_13212_13243 = state_13205__$1;
(statearr_13212_13243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (15))){
var inst_13195 = (state_13205[(2)]);
var state_13205__$1 = state_13205;
var statearr_13213_13244 = state_13205__$1;
(statearr_13213_13244[(2)] = inst_13195);

(statearr_13213_13244[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (13))){
var state_13205__$1 = state_13205;
var statearr_13214_13245 = state_13205__$1;
(statearr_13214_13245[(2)] = null);

(statearr_13214_13245[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (6))){
var inst_13165 = (state_13205[(8)]);
var inst_13190 = inst_13165.length;
var inst_13191 = (inst_13190 > (0));
var state_13205__$1 = state_13205;
if(cljs.core.truth_(inst_13191)){
var statearr_13215_13246 = state_13205__$1;
(statearr_13215_13246[(1)] = (12));

} else {
var statearr_13216_13247 = state_13205__$1;
(statearr_13216_13247[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (3))){
var inst_13203 = (state_13205[(2)]);
var state_13205__$1 = state_13205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13205__$1,inst_13203);
} else {
if((state_val_13206 === (12))){
var inst_13165 = (state_13205[(8)]);
var inst_13193 = cljs.core.vec.call(null,inst_13165);
var state_13205__$1 = state_13205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13205__$1,(15),out,inst_13193);
} else {
if((state_val_13206 === (2))){
var state_13205__$1 = state_13205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13205__$1,(4),ch);
} else {
if((state_val_13206 === (11))){
var inst_13173 = (state_13205[(10)]);
var inst_13169 = (state_13205[(9)]);
var inst_13183 = (state_13205[(2)]);
var inst_13184 = [];
var inst_13185 = inst_13184.push(inst_13169);
var inst_13165 = inst_13184;
var inst_13166 = inst_13173;
var state_13205__$1 = (function (){var statearr_13217 = state_13205;
(statearr_13217[(7)] = inst_13166);

(statearr_13217[(8)] = inst_13165);

(statearr_13217[(11)] = inst_13185);

(statearr_13217[(12)] = inst_13183);

return statearr_13217;
})();
var statearr_13218_13248 = state_13205__$1;
(statearr_13218_13248[(2)] = null);

(statearr_13218_13248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (9))){
var inst_13165 = (state_13205[(8)]);
var inst_13181 = cljs.core.vec.call(null,inst_13165);
var state_13205__$1 = state_13205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13205__$1,(11),out,inst_13181);
} else {
if((state_val_13206 === (5))){
var inst_13166 = (state_13205[(7)]);
var inst_13173 = (state_13205[(10)]);
var inst_13169 = (state_13205[(9)]);
var inst_13173__$1 = f.call(null,inst_13169);
var inst_13174 = cljs.core._EQ_.call(null,inst_13173__$1,inst_13166);
var inst_13175 = cljs.core.keyword_identical_QMARK_.call(null,inst_13166,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13176 = (inst_13174) || (inst_13175);
var state_13205__$1 = (function (){var statearr_13219 = state_13205;
(statearr_13219[(10)] = inst_13173__$1);

return statearr_13219;
})();
if(cljs.core.truth_(inst_13176)){
var statearr_13220_13249 = state_13205__$1;
(statearr_13220_13249[(1)] = (8));

} else {
var statearr_13221_13250 = state_13205__$1;
(statearr_13221_13250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (14))){
var inst_13198 = (state_13205[(2)]);
var inst_13199 = cljs.core.async.close_BANG_.call(null,out);
var state_13205__$1 = (function (){var statearr_13223 = state_13205;
(statearr_13223[(13)] = inst_13198);

return statearr_13223;
})();
var statearr_13224_13251 = state_13205__$1;
(statearr_13224_13251[(2)] = inst_13199);

(statearr_13224_13251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (10))){
var inst_13188 = (state_13205[(2)]);
var state_13205__$1 = state_13205;
var statearr_13225_13252 = state_13205__$1;
(statearr_13225_13252[(2)] = inst_13188);

(statearr_13225_13252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13206 === (8))){
var inst_13165 = (state_13205[(8)]);
var inst_13173 = (state_13205[(10)]);
var inst_13169 = (state_13205[(9)]);
var inst_13178 = inst_13165.push(inst_13169);
var tmp13222 = inst_13165;
var inst_13165__$1 = tmp13222;
var inst_13166 = inst_13173;
var state_13205__$1 = (function (){var statearr_13226 = state_13205;
(statearr_13226[(7)] = inst_13166);

(statearr_13226[(8)] = inst_13165__$1);

(statearr_13226[(14)] = inst_13178);

return statearr_13226;
})();
var statearr_13227_13253 = state_13205__$1;
(statearr_13227_13253[(2)] = null);

(statearr_13227_13253[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__10484__auto___13239,out))
;
return ((function (switch__10372__auto__,c__10484__auto___13239,out){
return (function() {
var cljs$core$async$state_machine__10373__auto__ = null;
var cljs$core$async$state_machine__10373__auto____0 = (function (){
var statearr_13231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13231[(0)] = cljs$core$async$state_machine__10373__auto__);

(statearr_13231[(1)] = (1));

return statearr_13231;
});
var cljs$core$async$state_machine__10373__auto____1 = (function (state_13205){
while(true){
var ret_value__10374__auto__ = (function (){try{while(true){
var result__10375__auto__ = switch__10372__auto__.call(null,state_13205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10375__auto__;
}
break;
}
}catch (e13232){if((e13232 instanceof Object)){
var ex__10376__auto__ = e13232;
var statearr_13233_13254 = state_13205;
(statearr_13233_13254[(5)] = ex__10376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13255 = state_13205;
state_13205 = G__13255;
continue;
} else {
return ret_value__10374__auto__;
}
break;
}
});
cljs$core$async$state_machine__10373__auto__ = function(state_13205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10373__auto____1.call(this,state_13205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10373__auto____0;
cljs$core$async$state_machine__10373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10373__auto____1;
return cljs$core$async$state_machine__10373__auto__;
})()
;})(switch__10372__auto__,c__10484__auto___13239,out))
})();
var state__10486__auto__ = (function (){var statearr_13234 = f__10485__auto__.call(null);
(statearr_13234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10484__auto___13239);

return statearr_13234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10486__auto__);
});})(c__10484__auto___13239,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
