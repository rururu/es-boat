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
var args10414 = [];
var len__7214__auto___10420 = arguments.length;
var i__7215__auto___10421 = (0);
while(true){
if((i__7215__auto___10421 < len__7214__auto___10420)){
args10414.push((arguments[i__7215__auto___10421]));

var G__10422 = (i__7215__auto___10421 + (1));
i__7215__auto___10421 = G__10422;
continue;
} else {
}
break;
}

var G__10416 = args10414.length;
switch (G__10416) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10414.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async10417 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10417 = (function (f,blockable,meta10418){
this.f = f;
this.blockable = blockable;
this.meta10418 = meta10418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10419,meta10418__$1){
var self__ = this;
var _10419__$1 = this;
return (new cljs.core.async.t_cljs$core$async10417(self__.f,self__.blockable,meta10418__$1));
});

cljs.core.async.t_cljs$core$async10417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10419){
var self__ = this;
var _10419__$1 = this;
return self__.meta10418;
});

cljs.core.async.t_cljs$core$async10417.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10417.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10417.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async10417.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async10417.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10418","meta10418",801299570,null)], null);
});

cljs.core.async.t_cljs$core$async10417.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10417";

cljs.core.async.t_cljs$core$async10417.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10417");
});

cljs.core.async.__GT_t_cljs$core$async10417 = (function cljs$core$async$__GT_t_cljs$core$async10417(f__$1,blockable__$1,meta10418){
return (new cljs.core.async.t_cljs$core$async10417(f__$1,blockable__$1,meta10418));
});

}

return (new cljs.core.async.t_cljs$core$async10417(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args10426 = [];
var len__7214__auto___10429 = arguments.length;
var i__7215__auto___10430 = (0);
while(true){
if((i__7215__auto___10430 < len__7214__auto___10429)){
args10426.push((arguments[i__7215__auto___10430]));

var G__10431 = (i__7215__auto___10430 + (1));
i__7215__auto___10430 = G__10431;
continue;
} else {
}
break;
}

var G__10428 = args10426.length;
switch (G__10428) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10426.length)].join('')));

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
var args10433 = [];
var len__7214__auto___10436 = arguments.length;
var i__7215__auto___10437 = (0);
while(true){
if((i__7215__auto___10437 < len__7214__auto___10436)){
args10433.push((arguments[i__7215__auto___10437]));

var G__10438 = (i__7215__auto___10437 + (1));
i__7215__auto___10437 = G__10438;
continue;
} else {
}
break;
}

var G__10435 = args10433.length;
switch (G__10435) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10433.length)].join('')));

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
var args10440 = [];
var len__7214__auto___10443 = arguments.length;
var i__7215__auto___10444 = (0);
while(true){
if((i__7215__auto___10444 < len__7214__auto___10443)){
args10440.push((arguments[i__7215__auto___10444]));

var G__10445 = (i__7215__auto___10444 + (1));
i__7215__auto___10444 = G__10445;
continue;
} else {
}
break;
}

var G__10442 = args10440.length;
switch (G__10442) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10440.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_10447 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_10447);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_10447,ret){
return (function (){
return fn1.call(null,val_10447);
});})(val_10447,ret))
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
var args10448 = [];
var len__7214__auto___10451 = arguments.length;
var i__7215__auto___10452 = (0);
while(true){
if((i__7215__auto___10452 < len__7214__auto___10451)){
args10448.push((arguments[i__7215__auto___10452]));

var G__10453 = (i__7215__auto___10452 + (1));
i__7215__auto___10452 = G__10453;
continue;
} else {
}
break;
}

var G__10450 = args10448.length;
switch (G__10450) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10448.length)].join('')));

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
var n__7059__auto___10455 = n;
var x_10456 = (0);
while(true){
if((x_10456 < n__7059__auto___10455)){
(a[x_10456] = (0));

var G__10457 = (x_10456 + (1));
x_10456 = G__10457;
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

var G__10458 = (i + (1));
i = G__10458;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async10462 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10462 = (function (alt_flag,flag,meta10463){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta10463 = meta10463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10464,meta10463__$1){
var self__ = this;
var _10464__$1 = this;
return (new cljs.core.async.t_cljs$core$async10462(self__.alt_flag,self__.flag,meta10463__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async10462.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10464){
var self__ = this;
var _10464__$1 = this;
return self__.meta10463;
});})(flag))
;

cljs.core.async.t_cljs$core$async10462.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10462.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async10462.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10462.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10462.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10463","meta10463",-476797106,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async10462.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10462.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10462";

cljs.core.async.t_cljs$core$async10462.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10462");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async10462 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10462(alt_flag__$1,flag__$1,meta10463){
return (new cljs.core.async.t_cljs$core$async10462(alt_flag__$1,flag__$1,meta10463));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async10462(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async10468 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10468 = (function (alt_handler,flag,cb,meta10469){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta10469 = meta10469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10470,meta10469__$1){
var self__ = this;
var _10470__$1 = this;
return (new cljs.core.async.t_cljs$core$async10468(self__.alt_handler,self__.flag,self__.cb,meta10469__$1));
});

cljs.core.async.t_cljs$core$async10468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10470){
var self__ = this;
var _10470__$1 = this;
return self__.meta10469;
});

cljs.core.async.t_cljs$core$async10468.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10468.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async10468.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10468.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async10468.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10469","meta10469",-659979171,null)], null);
});

cljs.core.async.t_cljs$core$async10468.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10468";

cljs.core.async.t_cljs$core$async10468.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10468");
});

cljs.core.async.__GT_t_cljs$core$async10468 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10468(alt_handler__$1,flag__$1,cb__$1,meta10469){
return (new cljs.core.async.t_cljs$core$async10468(alt_handler__$1,flag__$1,cb__$1,meta10469));
});

}

return (new cljs.core.async.t_cljs$core$async10468(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__10471_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10471_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10472_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10472_SHARP_,port], null));
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
var G__10473 = (i + (1));
i = G__10473;
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
var len__7214__auto___10479 = arguments.length;
var i__7215__auto___10480 = (0);
while(true){
if((i__7215__auto___10480 < len__7214__auto___10479)){
args__7221__auto__.push((arguments[i__7215__auto___10480]));

var G__10481 = (i__7215__auto___10480 + (1));
i__7215__auto___10480 = G__10481;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10476){
var map__10477 = p__10476;
var map__10477__$1 = ((((!((map__10477 == null)))?((((map__10477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10477):map__10477);
var opts = map__10477__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10474){
var G__10475 = cljs.core.first.call(null,seq10474);
var seq10474__$1 = cljs.core.next.call(null,seq10474);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10475,seq10474__$1);
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
var args10482 = [];
var len__7214__auto___10532 = arguments.length;
var i__7215__auto___10533 = (0);
while(true){
if((i__7215__auto___10533 < len__7214__auto___10532)){
args10482.push((arguments[i__7215__auto___10533]));

var G__10534 = (i__7215__auto___10533 + (1));
i__7215__auto___10533 = G__10534;
continue;
} else {
}
break;
}

var G__10484 = args10482.length;
switch (G__10484) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10482.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10369__auto___10536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10369__auto___10536){
return (function (){
var f__10370__auto__ = (function (){var switch__10257__auto__ = ((function (c__10369__auto___10536){
return (function (state_10508){
var state_val_10509 = (state_10508[(1)]);
if((state_val_10509 === (7))){
var inst_10504 = (state_10508[(2)]);
var state_10508__$1 = state_10508;
var statearr_10510_10537 = state_10508__$1;
(statearr_10510_10537[(2)] = inst_10504);

(statearr_10510_10537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10509 === (1))){
var state_10508__$1 = state_10508;
var statearr_10511_10538 = state_10508__$1;
(statearr_10511_10538[(2)] = null);

(statearr_10511_10538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10509 === (4))){
var inst_10487 = (state_10508[(7)]);
var inst_10487__$1 = (state_10508[(2)]);
var inst_10488 = (inst_10487__$1 == null);
var state_10508__$1 = (function (){var statearr_10512 = state_10508;
(statearr_10512[(7)] = inst_10487__$1);

return statearr_10512;
})();
if(cljs.core.truth_(inst_10488)){
var statearr_10513_10539 = state_10508__$1;
(statearr_10513_10539[(1)] = (5));

} else {
var statearr_10514_10540 = state_10508__$1;
(statearr_10514_10540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10509 === (13))){
var state_10508__$1 = state_10508;
var statearr_10515_10541 = state_10508__$1;
(statearr_10515_10541[(2)] = null);

(statearr_10515_10541[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10509 === (6))){
var inst_10487 = (state_10508[(7)]);
var state_10508__$1 = state_10508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10508__$1,(11),to,inst_10487);
} else {
if((state_val_10509 === (3))){
var inst_10506 = (state_10508[(2)]);
var state_10508__$1 = state_10508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10508__$1,inst_10506);
} else {
if((state_val_10509 === (12))){
var state_10508__$1 = state_10508;
var statearr_10516_10542 = state_10508__$1;
(statearr_10516_10542[(2)] = null);

(statearr_10516_10542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10509 === (2))){
var state_10508__$1 = state_10508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10508__$1,(4),from);
} else {
if((state_val_10509 === (11))){
var inst_10497 = (state_10508[(2)]);
var state_10508__$1 = state_10508;
if(cljs.core.truth_(inst_10497)){
var statearr_10517_10543 = state_10508__$1;
(statearr_10517_10543[(1)] = (12));

} else {
var statearr_10518_10544 = state_10508__$1;
(statearr_10518_10544[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10509 === (9))){
var state_10508__$1 = state_10508;
var statearr_10519_10545 = state_10508__$1;
(statearr_10519_10545[(2)] = null);

(statearr_10519_10545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10509 === (5))){
var state_10508__$1 = state_10508;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10520_10546 = state_10508__$1;
(statearr_10520_10546[(1)] = (8));

} else {
var statearr_10521_10547 = state_10508__$1;
(statearr_10521_10547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10509 === (14))){
var inst_10502 = (state_10508[(2)]);
var state_10508__$1 = state_10508;
var statearr_10522_10548 = state_10508__$1;
(statearr_10522_10548[(2)] = inst_10502);

(statearr_10522_10548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10509 === (10))){
var inst_10494 = (state_10508[(2)]);
var state_10508__$1 = state_10508;
var statearr_10523_10549 = state_10508__$1;
(statearr_10523_10549[(2)] = inst_10494);

(statearr_10523_10549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10509 === (8))){
var inst_10491 = cljs.core.async.close_BANG_.call(null,to);
var state_10508__$1 = state_10508;
var statearr_10524_10550 = state_10508__$1;
(statearr_10524_10550[(2)] = inst_10491);

(statearr_10524_10550[(1)] = (10));


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
});})(c__10369__auto___10536))
;
return ((function (switch__10257__auto__,c__10369__auto___10536){
return (function() {
var cljs$core$async$state_machine__10258__auto__ = null;
var cljs$core$async$state_machine__10258__auto____0 = (function (){
var statearr_10528 = [null,null,null,null,null,null,null,null];
(statearr_10528[(0)] = cljs$core$async$state_machine__10258__auto__);

(statearr_10528[(1)] = (1));

return statearr_10528;
});
var cljs$core$async$state_machine__10258__auto____1 = (function (state_10508){
while(true){
var ret_value__10259__auto__ = (function (){try{while(true){
var result__10260__auto__ = switch__10257__auto__.call(null,state_10508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10260__auto__;
}
break;
}
}catch (e10529){if((e10529 instanceof Object)){
var ex__10261__auto__ = e10529;
var statearr_10530_10551 = state_10508;
(statearr_10530_10551[(5)] = ex__10261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10552 = state_10508;
state_10508 = G__10552;
continue;
} else {
return ret_value__10259__auto__;
}
break;
}
});
cljs$core$async$state_machine__10258__auto__ = function(state_10508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10258__auto____1.call(this,state_10508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10258__auto____0;
cljs$core$async$state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10258__auto____1;
return cljs$core$async$state_machine__10258__auto__;
})()
;})(switch__10257__auto__,c__10369__auto___10536))
})();
var state__10371__auto__ = (function (){var statearr_10531 = f__10370__auto__.call(null);
(statearr_10531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10369__auto___10536);

return statearr_10531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10371__auto__);
});})(c__10369__auto___10536))
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
return (function (p__10736){
var vec__10737 = p__10736;
var v = cljs.core.nth.call(null,vec__10737,(0),null);
var p = cljs.core.nth.call(null,vec__10737,(1),null);
var job = vec__10737;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10369__auto___10919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10369__auto___10919,res,vec__10737,v,p,job,jobs,results){
return (function (){
var f__10370__auto__ = (function (){var switch__10257__auto__ = ((function (c__10369__auto___10919,res,vec__10737,v,p,job,jobs,results){
return (function (state_10742){
var state_val_10743 = (state_10742[(1)]);
if((state_val_10743 === (1))){
var state_10742__$1 = state_10742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10742__$1,(2),res,v);
} else {
if((state_val_10743 === (2))){
var inst_10739 = (state_10742[(2)]);
var inst_10740 = cljs.core.async.close_BANG_.call(null,res);
var state_10742__$1 = (function (){var statearr_10744 = state_10742;
(statearr_10744[(7)] = inst_10739);

return statearr_10744;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10742__$1,inst_10740);
} else {
return null;
}
}
});})(c__10369__auto___10919,res,vec__10737,v,p,job,jobs,results))
;
return ((function (switch__10257__auto__,c__10369__auto___10919,res,vec__10737,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____0 = (function (){
var statearr_10748 = [null,null,null,null,null,null,null,null];
(statearr_10748[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__);

(statearr_10748[(1)] = (1));

return statearr_10748;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____1 = (function (state_10742){
while(true){
var ret_value__10259__auto__ = (function (){try{while(true){
var result__10260__auto__ = switch__10257__auto__.call(null,state_10742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10260__auto__;
}
break;
}
}catch (e10749){if((e10749 instanceof Object)){
var ex__10261__auto__ = e10749;
var statearr_10750_10920 = state_10742;
(statearr_10750_10920[(5)] = ex__10261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10921 = state_10742;
state_10742 = G__10921;
continue;
} else {
return ret_value__10259__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__ = function(state_10742){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____1.call(this,state_10742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__;
})()
;})(switch__10257__auto__,c__10369__auto___10919,res,vec__10737,v,p,job,jobs,results))
})();
var state__10371__auto__ = (function (){var statearr_10751 = f__10370__auto__.call(null);
(statearr_10751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10369__auto___10919);

return statearr_10751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10371__auto__);
});})(c__10369__auto___10919,res,vec__10737,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10752){
var vec__10753 = p__10752;
var v = cljs.core.nth.call(null,vec__10753,(0),null);
var p = cljs.core.nth.call(null,vec__10753,(1),null);
var job = vec__10753;
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
var n__7059__auto___10922 = n;
var __10923 = (0);
while(true){
if((__10923 < n__7059__auto___10922)){
var G__10754_10924 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__10754_10924) {
case "compute":
var c__10369__auto___10926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10923,c__10369__auto___10926,G__10754_10924,n__7059__auto___10922,jobs,results,process,async){
return (function (){
var f__10370__auto__ = (function (){var switch__10257__auto__ = ((function (__10923,c__10369__auto___10926,G__10754_10924,n__7059__auto___10922,jobs,results,process,async){
return (function (state_10767){
var state_val_10768 = (state_10767[(1)]);
if((state_val_10768 === (1))){
var state_10767__$1 = state_10767;
var statearr_10769_10927 = state_10767__$1;
(statearr_10769_10927[(2)] = null);

(statearr_10769_10927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10768 === (2))){
var state_10767__$1 = state_10767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10767__$1,(4),jobs);
} else {
if((state_val_10768 === (3))){
var inst_10765 = (state_10767[(2)]);
var state_10767__$1 = state_10767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10767__$1,inst_10765);
} else {
if((state_val_10768 === (4))){
var inst_10757 = (state_10767[(2)]);
var inst_10758 = process.call(null,inst_10757);
var state_10767__$1 = state_10767;
if(cljs.core.truth_(inst_10758)){
var statearr_10770_10928 = state_10767__$1;
(statearr_10770_10928[(1)] = (5));

} else {
var statearr_10771_10929 = state_10767__$1;
(statearr_10771_10929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10768 === (5))){
var state_10767__$1 = state_10767;
var statearr_10772_10930 = state_10767__$1;
(statearr_10772_10930[(2)] = null);

(statearr_10772_10930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10768 === (6))){
var state_10767__$1 = state_10767;
var statearr_10773_10931 = state_10767__$1;
(statearr_10773_10931[(2)] = null);

(statearr_10773_10931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10768 === (7))){
var inst_10763 = (state_10767[(2)]);
var state_10767__$1 = state_10767;
var statearr_10774_10932 = state_10767__$1;
(statearr_10774_10932[(2)] = inst_10763);

(statearr_10774_10932[(1)] = (3));


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
});})(__10923,c__10369__auto___10926,G__10754_10924,n__7059__auto___10922,jobs,results,process,async))
;
return ((function (__10923,switch__10257__auto__,c__10369__auto___10926,G__10754_10924,n__7059__auto___10922,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____0 = (function (){
var statearr_10778 = [null,null,null,null,null,null,null];
(statearr_10778[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__);

(statearr_10778[(1)] = (1));

return statearr_10778;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____1 = (function (state_10767){
while(true){
var ret_value__10259__auto__ = (function (){try{while(true){
var result__10260__auto__ = switch__10257__auto__.call(null,state_10767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10260__auto__;
}
break;
}
}catch (e10779){if((e10779 instanceof Object)){
var ex__10261__auto__ = e10779;
var statearr_10780_10933 = state_10767;
(statearr_10780_10933[(5)] = ex__10261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10934 = state_10767;
state_10767 = G__10934;
continue;
} else {
return ret_value__10259__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__ = function(state_10767){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____1.call(this,state_10767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__;
})()
;})(__10923,switch__10257__auto__,c__10369__auto___10926,G__10754_10924,n__7059__auto___10922,jobs,results,process,async))
})();
var state__10371__auto__ = (function (){var statearr_10781 = f__10370__auto__.call(null);
(statearr_10781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10369__auto___10926);

return statearr_10781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10371__auto__);
});})(__10923,c__10369__auto___10926,G__10754_10924,n__7059__auto___10922,jobs,results,process,async))
);


break;
case "async":
var c__10369__auto___10935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10923,c__10369__auto___10935,G__10754_10924,n__7059__auto___10922,jobs,results,process,async){
return (function (){
var f__10370__auto__ = (function (){var switch__10257__auto__ = ((function (__10923,c__10369__auto___10935,G__10754_10924,n__7059__auto___10922,jobs,results,process,async){
return (function (state_10794){
var state_val_10795 = (state_10794[(1)]);
if((state_val_10795 === (1))){
var state_10794__$1 = state_10794;
var statearr_10796_10936 = state_10794__$1;
(statearr_10796_10936[(2)] = null);

(statearr_10796_10936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10795 === (2))){
var state_10794__$1 = state_10794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10794__$1,(4),jobs);
} else {
if((state_val_10795 === (3))){
var inst_10792 = (state_10794[(2)]);
var state_10794__$1 = state_10794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10794__$1,inst_10792);
} else {
if((state_val_10795 === (4))){
var inst_10784 = (state_10794[(2)]);
var inst_10785 = async.call(null,inst_10784);
var state_10794__$1 = state_10794;
if(cljs.core.truth_(inst_10785)){
var statearr_10797_10937 = state_10794__$1;
(statearr_10797_10937[(1)] = (5));

} else {
var statearr_10798_10938 = state_10794__$1;
(statearr_10798_10938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10795 === (5))){
var state_10794__$1 = state_10794;
var statearr_10799_10939 = state_10794__$1;
(statearr_10799_10939[(2)] = null);

(statearr_10799_10939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10795 === (6))){
var state_10794__$1 = state_10794;
var statearr_10800_10940 = state_10794__$1;
(statearr_10800_10940[(2)] = null);

(statearr_10800_10940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10795 === (7))){
var inst_10790 = (state_10794[(2)]);
var state_10794__$1 = state_10794;
var statearr_10801_10941 = state_10794__$1;
(statearr_10801_10941[(2)] = inst_10790);

(statearr_10801_10941[(1)] = (3));


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
});})(__10923,c__10369__auto___10935,G__10754_10924,n__7059__auto___10922,jobs,results,process,async))
;
return ((function (__10923,switch__10257__auto__,c__10369__auto___10935,G__10754_10924,n__7059__auto___10922,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____0 = (function (){
var statearr_10805 = [null,null,null,null,null,null,null];
(statearr_10805[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__);

(statearr_10805[(1)] = (1));

return statearr_10805;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____1 = (function (state_10794){
while(true){
var ret_value__10259__auto__ = (function (){try{while(true){
var result__10260__auto__ = switch__10257__auto__.call(null,state_10794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10260__auto__;
}
break;
}
}catch (e10806){if((e10806 instanceof Object)){
var ex__10261__auto__ = e10806;
var statearr_10807_10942 = state_10794;
(statearr_10807_10942[(5)] = ex__10261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10943 = state_10794;
state_10794 = G__10943;
continue;
} else {
return ret_value__10259__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__ = function(state_10794){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____1.call(this,state_10794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__;
})()
;})(__10923,switch__10257__auto__,c__10369__auto___10935,G__10754_10924,n__7059__auto___10922,jobs,results,process,async))
})();
var state__10371__auto__ = (function (){var statearr_10808 = f__10370__auto__.call(null);
(statearr_10808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10369__auto___10935);

return statearr_10808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10371__auto__);
});})(__10923,c__10369__auto___10935,G__10754_10924,n__7059__auto___10922,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__10944 = (__10923 + (1));
__10923 = G__10944;
continue;
} else {
}
break;
}

var c__10369__auto___10945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10369__auto___10945,jobs,results,process,async){
return (function (){
var f__10370__auto__ = (function (){var switch__10257__auto__ = ((function (c__10369__auto___10945,jobs,results,process,async){
return (function (state_10830){
var state_val_10831 = (state_10830[(1)]);
if((state_val_10831 === (1))){
var state_10830__$1 = state_10830;
var statearr_10832_10946 = state_10830__$1;
(statearr_10832_10946[(2)] = null);

(statearr_10832_10946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10831 === (2))){
var state_10830__$1 = state_10830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10830__$1,(4),from);
} else {
if((state_val_10831 === (3))){
var inst_10828 = (state_10830[(2)]);
var state_10830__$1 = state_10830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10830__$1,inst_10828);
} else {
if((state_val_10831 === (4))){
var inst_10811 = (state_10830[(7)]);
var inst_10811__$1 = (state_10830[(2)]);
var inst_10812 = (inst_10811__$1 == null);
var state_10830__$1 = (function (){var statearr_10833 = state_10830;
(statearr_10833[(7)] = inst_10811__$1);

return statearr_10833;
})();
if(cljs.core.truth_(inst_10812)){
var statearr_10834_10947 = state_10830__$1;
(statearr_10834_10947[(1)] = (5));

} else {
var statearr_10835_10948 = state_10830__$1;
(statearr_10835_10948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10831 === (5))){
var inst_10814 = cljs.core.async.close_BANG_.call(null,jobs);
var state_10830__$1 = state_10830;
var statearr_10836_10949 = state_10830__$1;
(statearr_10836_10949[(2)] = inst_10814);

(statearr_10836_10949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10831 === (6))){
var inst_10816 = (state_10830[(8)]);
var inst_10811 = (state_10830[(7)]);
var inst_10816__$1 = cljs.core.async.chan.call(null,(1));
var inst_10817 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10818 = [inst_10811,inst_10816__$1];
var inst_10819 = (new cljs.core.PersistentVector(null,2,(5),inst_10817,inst_10818,null));
var state_10830__$1 = (function (){var statearr_10837 = state_10830;
(statearr_10837[(8)] = inst_10816__$1);

return statearr_10837;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10830__$1,(8),jobs,inst_10819);
} else {
if((state_val_10831 === (7))){
var inst_10826 = (state_10830[(2)]);
var state_10830__$1 = state_10830;
var statearr_10838_10950 = state_10830__$1;
(statearr_10838_10950[(2)] = inst_10826);

(statearr_10838_10950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10831 === (8))){
var inst_10816 = (state_10830[(8)]);
var inst_10821 = (state_10830[(2)]);
var state_10830__$1 = (function (){var statearr_10839 = state_10830;
(statearr_10839[(9)] = inst_10821);

return statearr_10839;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10830__$1,(9),results,inst_10816);
} else {
if((state_val_10831 === (9))){
var inst_10823 = (state_10830[(2)]);
var state_10830__$1 = (function (){var statearr_10840 = state_10830;
(statearr_10840[(10)] = inst_10823);

return statearr_10840;
})();
var statearr_10841_10951 = state_10830__$1;
(statearr_10841_10951[(2)] = null);

(statearr_10841_10951[(1)] = (2));


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
});})(c__10369__auto___10945,jobs,results,process,async))
;
return ((function (switch__10257__auto__,c__10369__auto___10945,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____0 = (function (){
var statearr_10845 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10845[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__);

(statearr_10845[(1)] = (1));

return statearr_10845;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____1 = (function (state_10830){
while(true){
var ret_value__10259__auto__ = (function (){try{while(true){
var result__10260__auto__ = switch__10257__auto__.call(null,state_10830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10260__auto__;
}
break;
}
}catch (e10846){if((e10846 instanceof Object)){
var ex__10261__auto__ = e10846;
var statearr_10847_10952 = state_10830;
(statearr_10847_10952[(5)] = ex__10261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10953 = state_10830;
state_10830 = G__10953;
continue;
} else {
return ret_value__10259__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__ = function(state_10830){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____1.call(this,state_10830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__;
})()
;})(switch__10257__auto__,c__10369__auto___10945,jobs,results,process,async))
})();
var state__10371__auto__ = (function (){var statearr_10848 = f__10370__auto__.call(null);
(statearr_10848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10369__auto___10945);

return statearr_10848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10371__auto__);
});})(c__10369__auto___10945,jobs,results,process,async))
);


var c__10369__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10369__auto__,jobs,results,process,async){
return (function (){
var f__10370__auto__ = (function (){var switch__10257__auto__ = ((function (c__10369__auto__,jobs,results,process,async){
return (function (state_10886){
var state_val_10887 = (state_10886[(1)]);
if((state_val_10887 === (7))){
var inst_10882 = (state_10886[(2)]);
var state_10886__$1 = state_10886;
var statearr_10888_10954 = state_10886__$1;
(statearr_10888_10954[(2)] = inst_10882);

(statearr_10888_10954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10887 === (20))){
var state_10886__$1 = state_10886;
var statearr_10889_10955 = state_10886__$1;
(statearr_10889_10955[(2)] = null);

(statearr_10889_10955[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10887 === (1))){
var state_10886__$1 = state_10886;
var statearr_10890_10956 = state_10886__$1;
(statearr_10890_10956[(2)] = null);

(statearr_10890_10956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10887 === (4))){
var inst_10851 = (state_10886[(7)]);
var inst_10851__$1 = (state_10886[(2)]);
var inst_10852 = (inst_10851__$1 == null);
var state_10886__$1 = (function (){var statearr_10891 = state_10886;
(statearr_10891[(7)] = inst_10851__$1);

return statearr_10891;
})();
if(cljs.core.truth_(inst_10852)){
var statearr_10892_10957 = state_10886__$1;
(statearr_10892_10957[(1)] = (5));

} else {
var statearr_10893_10958 = state_10886__$1;
(statearr_10893_10958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10887 === (15))){
var inst_10864 = (state_10886[(8)]);
var state_10886__$1 = state_10886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10886__$1,(18),to,inst_10864);
} else {
if((state_val_10887 === (21))){
var inst_10877 = (state_10886[(2)]);
var state_10886__$1 = state_10886;
var statearr_10894_10959 = state_10886__$1;
(statearr_10894_10959[(2)] = inst_10877);

(statearr_10894_10959[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10887 === (13))){
var inst_10879 = (state_10886[(2)]);
var state_10886__$1 = (function (){var statearr_10895 = state_10886;
(statearr_10895[(9)] = inst_10879);

return statearr_10895;
})();
var statearr_10896_10960 = state_10886__$1;
(statearr_10896_10960[(2)] = null);

(statearr_10896_10960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10887 === (6))){
var inst_10851 = (state_10886[(7)]);
var state_10886__$1 = state_10886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10886__$1,(11),inst_10851);
} else {
if((state_val_10887 === (17))){
var inst_10872 = (state_10886[(2)]);
var state_10886__$1 = state_10886;
if(cljs.core.truth_(inst_10872)){
var statearr_10897_10961 = state_10886__$1;
(statearr_10897_10961[(1)] = (19));

} else {
var statearr_10898_10962 = state_10886__$1;
(statearr_10898_10962[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10887 === (3))){
var inst_10884 = (state_10886[(2)]);
var state_10886__$1 = state_10886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10886__$1,inst_10884);
} else {
if((state_val_10887 === (12))){
var inst_10861 = (state_10886[(10)]);
var state_10886__$1 = state_10886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10886__$1,(14),inst_10861);
} else {
if((state_val_10887 === (2))){
var state_10886__$1 = state_10886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10886__$1,(4),results);
} else {
if((state_val_10887 === (19))){
var state_10886__$1 = state_10886;
var statearr_10899_10963 = state_10886__$1;
(statearr_10899_10963[(2)] = null);

(statearr_10899_10963[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10887 === (11))){
var inst_10861 = (state_10886[(2)]);
var state_10886__$1 = (function (){var statearr_10900 = state_10886;
(statearr_10900[(10)] = inst_10861);

return statearr_10900;
})();
var statearr_10901_10964 = state_10886__$1;
(statearr_10901_10964[(2)] = null);

(statearr_10901_10964[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10887 === (9))){
var state_10886__$1 = state_10886;
var statearr_10902_10965 = state_10886__$1;
(statearr_10902_10965[(2)] = null);

(statearr_10902_10965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10887 === (5))){
var state_10886__$1 = state_10886;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10903_10966 = state_10886__$1;
(statearr_10903_10966[(1)] = (8));

} else {
var statearr_10904_10967 = state_10886__$1;
(statearr_10904_10967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10887 === (14))){
var inst_10866 = (state_10886[(11)]);
var inst_10864 = (state_10886[(8)]);
var inst_10864__$1 = (state_10886[(2)]);
var inst_10865 = (inst_10864__$1 == null);
var inst_10866__$1 = cljs.core.not.call(null,inst_10865);
var state_10886__$1 = (function (){var statearr_10905 = state_10886;
(statearr_10905[(11)] = inst_10866__$1);

(statearr_10905[(8)] = inst_10864__$1);

return statearr_10905;
})();
if(inst_10866__$1){
var statearr_10906_10968 = state_10886__$1;
(statearr_10906_10968[(1)] = (15));

} else {
var statearr_10907_10969 = state_10886__$1;
(statearr_10907_10969[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10887 === (16))){
var inst_10866 = (state_10886[(11)]);
var state_10886__$1 = state_10886;
var statearr_10908_10970 = state_10886__$1;
(statearr_10908_10970[(2)] = inst_10866);

(statearr_10908_10970[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10887 === (10))){
var inst_10858 = (state_10886[(2)]);
var state_10886__$1 = state_10886;
var statearr_10909_10971 = state_10886__$1;
(statearr_10909_10971[(2)] = inst_10858);

(statearr_10909_10971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10887 === (18))){
var inst_10869 = (state_10886[(2)]);
var state_10886__$1 = state_10886;
var statearr_10910_10972 = state_10886__$1;
(statearr_10910_10972[(2)] = inst_10869);

(statearr_10910_10972[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10887 === (8))){
var inst_10855 = cljs.core.async.close_BANG_.call(null,to);
var state_10886__$1 = state_10886;
var statearr_10911_10973 = state_10886__$1;
(statearr_10911_10973[(2)] = inst_10855);

(statearr_10911_10973[(1)] = (10));


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
});})(c__10369__auto__,jobs,results,process,async))
;
return ((function (switch__10257__auto__,c__10369__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____0 = (function (){
var statearr_10915 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10915[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__);

(statearr_10915[(1)] = (1));

return statearr_10915;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____1 = (function (state_10886){
while(true){
var ret_value__10259__auto__ = (function (){try{while(true){
var result__10260__auto__ = switch__10257__auto__.call(null,state_10886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10260__auto__;
}
break;
}
}catch (e10916){if((e10916 instanceof Object)){
var ex__10261__auto__ = e10916;
var statearr_10917_10974 = state_10886;
(statearr_10917_10974[(5)] = ex__10261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10975 = state_10886;
state_10886 = G__10975;
continue;
} else {
return ret_value__10259__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__ = function(state_10886){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____1.call(this,state_10886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10258__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10258__auto__;
})()
;})(switch__10257__auto__,c__10369__auto__,jobs,results,process,async))
})();
var state__10371__auto__ = (function (){var statearr_10918 = f__10370__auto__.call(null);
(statearr_10918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10369__auto__);

return statearr_10918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10371__auto__);
});})(c__10369__auto__,jobs,results,process,async))
);

return c__10369__auto__;
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
var args10976 = [];
var len__7214__auto___10979 = arguments.length;
var i__7215__auto___10980 = (0);
while(true){
if((i__7215__auto___10980 < len__7214__auto___10979)){
args10976.push((arguments[i__7215__auto___10980]));

var G__10981 = (i__7215__auto___10980 + (1));
i__7215__auto___10980 = G__10981;
continue;
} else {
}
break;
}

var G__10978 = args10976.length;
switch (G__10978) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10976.length)].join('')));

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
var args10983 = [];
var len__7214__auto___10986 = arguments.length;
var i__7215__auto___10987 = (0);
while(true){
if((i__7215__auto___10987 < len__7214__auto___10986)){
args10983.push((arguments[i__7215__auto___10987]));

var G__10988 = (i__7215__auto___10987 + (1));
i__7215__auto___10987 = G__10988;
continue;
} else {
}
break;
}

var G__10985 = args10983.length;
switch (G__10985) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10983.length)].join('')));

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
var args10990 = [];
var len__7214__auto___11043 = arguments.length;
var i__7215__auto___11044 = (0);
while(true){
if((i__7215__auto___11044 < len__7214__auto___11043)){
args10990.push((arguments[i__7215__auto___11044]));

var G__11045 = (i__7215__auto___11044 + (1));
i__7215__auto___11044 = G__11045;
continue;
} else {
}
break;
}

var G__10992 = args10990.length;
switch (G__10992) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10990.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10369__auto___11047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10369__auto___11047,tc,fc){
return (function (){
var f__10370__auto__ = (function (){var switch__10257__auto__ = ((function (c__10369__auto___11047,tc,fc){
return (function (state_11018){
var state_val_11019 = (state_11018[(1)]);
if((state_val_11019 === (7))){
var inst_11014 = (state_11018[(2)]);
var state_11018__$1 = state_11018;
var statearr_11020_11048 = state_11018__$1;
(statearr_11020_11048[(2)] = inst_11014);

(statearr_11020_11048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11019 === (1))){
var state_11018__$1 = state_11018;
var statearr_11021_11049 = state_11018__$1;
(statearr_11021_11049[(2)] = null);

(statearr_11021_11049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11019 === (4))){
var inst_10995 = (state_11018[(7)]);
var inst_10995__$1 = (state_11018[(2)]);
var inst_10996 = (inst_10995__$1 == null);
var state_11018__$1 = (function (){var statearr_11022 = state_11018;
(statearr_11022[(7)] = inst_10995__$1);

return statearr_11022;
})();
if(cljs.core.truth_(inst_10996)){
var statearr_11023_11050 = state_11018__$1;
(statearr_11023_11050[(1)] = (5));

} else {
var statearr_11024_11051 = state_11018__$1;
(statearr_11024_11051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11019 === (13))){
var state_11018__$1 = state_11018;
var statearr_11025_11052 = state_11018__$1;
(statearr_11025_11052[(2)] = null);

(statearr_11025_11052[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11019 === (6))){
var inst_10995 = (state_11018[(7)]);
var inst_11001 = p.call(null,inst_10995);
var state_11018__$1 = state_11018;
if(cljs.core.truth_(inst_11001)){
var statearr_11026_11053 = state_11018__$1;
(statearr_11026_11053[(1)] = (9));

} else {
var statearr_11027_11054 = state_11018__$1;
(statearr_11027_11054[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11019 === (3))){
var inst_11016 = (state_11018[(2)]);
var state_11018__$1 = state_11018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11018__$1,inst_11016);
} else {
if((state_val_11019 === (12))){
var state_11018__$1 = state_11018;
var statearr_11028_11055 = state_11018__$1;
(statearr_11028_11055[(2)] = null);

(statearr_11028_11055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11019 === (2))){
var state_11018__$1 = state_11018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11018__$1,(4),ch);
} else {
if((state_val_11019 === (11))){
var inst_10995 = (state_11018[(7)]);
var inst_11005 = (state_11018[(2)]);
var state_11018__$1 = state_11018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11018__$1,(8),inst_11005,inst_10995);
} else {
if((state_val_11019 === (9))){
var state_11018__$1 = state_11018;
var statearr_11029_11056 = state_11018__$1;
(statearr_11029_11056[(2)] = tc);

(statearr_11029_11056[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11019 === (5))){
var inst_10998 = cljs.core.async.close_BANG_.call(null,tc);
var inst_10999 = cljs.core.async.close_BANG_.call(null,fc);
var state_11018__$1 = (function (){var statearr_11030 = state_11018;
(statearr_11030[(8)] = inst_10998);

return statearr_11030;
})();
var statearr_11031_11057 = state_11018__$1;
(statearr_11031_11057[(2)] = inst_10999);

(statearr_11031_11057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11019 === (14))){
var inst_11012 = (state_11018[(2)]);
var state_11018__$1 = state_11018;
var statearr_11032_11058 = state_11018__$1;
(statearr_11032_11058[(2)] = inst_11012);

(statearr_11032_11058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11019 === (10))){
var state_11018__$1 = state_11018;
var statearr_11033_11059 = state_11018__$1;
(statearr_11033_11059[(2)] = fc);

(statearr_11033_11059[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11019 === (8))){
var inst_11007 = (state_11018[(2)]);
var state_11018__$1 = state_11018;
if(cljs.core.truth_(inst_11007)){
var statearr_11034_11060 = state_11018__$1;
(statearr_11034_11060[(1)] = (12));

} else {
var statearr_11035_11061 = state_11018__$1;
(statearr_11035_11061[(1)] = (13));

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
});})(c__10369__auto___11047,tc,fc))
;
return ((function (switch__10257__auto__,c__10369__auto___11047,tc,fc){
return (function() {
var cljs$core$async$state_machine__10258__auto__ = null;
var cljs$core$async$state_machine__10258__auto____0 = (function (){
var statearr_11039 = [null,null,null,null,null,null,null,null,null];
(statearr_11039[(0)] = cljs$core$async$state_machine__10258__auto__);

(statearr_11039[(1)] = (1));

return statearr_11039;
});
var cljs$core$async$state_machine__10258__auto____1 = (function (state_11018){
while(true){
var ret_value__10259__auto__ = (function (){try{while(true){
var result__10260__auto__ = switch__10257__auto__.call(null,state_11018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10260__auto__;
}
break;
}
}catch (e11040){if((e11040 instanceof Object)){
var ex__10261__auto__ = e11040;
var statearr_11041_11062 = state_11018;
(statearr_11041_11062[(5)] = ex__10261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11063 = state_11018;
state_11018 = G__11063;
continue;
} else {
return ret_value__10259__auto__;
}
break;
}
});
cljs$core$async$state_machine__10258__auto__ = function(state_11018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10258__auto____1.call(this,state_11018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10258__auto____0;
cljs$core$async$state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10258__auto____1;
return cljs$core$async$state_machine__10258__auto__;
})()
;})(switch__10257__auto__,c__10369__auto___11047,tc,fc))
})();
var state__10371__auto__ = (function (){var statearr_11042 = f__10370__auto__.call(null);
(statearr_11042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10369__auto___11047);

return statearr_11042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10371__auto__);
});})(c__10369__auto___11047,tc,fc))
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
var c__10369__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10369__auto__){
return (function (){
var f__10370__auto__ = (function (){var switch__10257__auto__ = ((function (c__10369__auto__){
return (function (state_11127){
var state_val_11128 = (state_11127[(1)]);
if((state_val_11128 === (7))){
var inst_11123 = (state_11127[(2)]);
var state_11127__$1 = state_11127;
var statearr_11129_11150 = state_11127__$1;
(statearr_11129_11150[(2)] = inst_11123);

(statearr_11129_11150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11128 === (1))){
var inst_11107 = init;
var state_11127__$1 = (function (){var statearr_11130 = state_11127;
(statearr_11130[(7)] = inst_11107);

return statearr_11130;
})();
var statearr_11131_11151 = state_11127__$1;
(statearr_11131_11151[(2)] = null);

(statearr_11131_11151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11128 === (4))){
var inst_11110 = (state_11127[(8)]);
var inst_11110__$1 = (state_11127[(2)]);
var inst_11111 = (inst_11110__$1 == null);
var state_11127__$1 = (function (){var statearr_11132 = state_11127;
(statearr_11132[(8)] = inst_11110__$1);

return statearr_11132;
})();
if(cljs.core.truth_(inst_11111)){
var statearr_11133_11152 = state_11127__$1;
(statearr_11133_11152[(1)] = (5));

} else {
var statearr_11134_11153 = state_11127__$1;
(statearr_11134_11153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11128 === (6))){
var inst_11110 = (state_11127[(8)]);
var inst_11114 = (state_11127[(9)]);
var inst_11107 = (state_11127[(7)]);
var inst_11114__$1 = f.call(null,inst_11107,inst_11110);
var inst_11115 = cljs.core.reduced_QMARK_.call(null,inst_11114__$1);
var state_11127__$1 = (function (){var statearr_11135 = state_11127;
(statearr_11135[(9)] = inst_11114__$1);

return statearr_11135;
})();
if(inst_11115){
var statearr_11136_11154 = state_11127__$1;
(statearr_11136_11154[(1)] = (8));

} else {
var statearr_11137_11155 = state_11127__$1;
(statearr_11137_11155[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11128 === (3))){
var inst_11125 = (state_11127[(2)]);
var state_11127__$1 = state_11127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11127__$1,inst_11125);
} else {
if((state_val_11128 === (2))){
var state_11127__$1 = state_11127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11127__$1,(4),ch);
} else {
if((state_val_11128 === (9))){
var inst_11114 = (state_11127[(9)]);
var inst_11107 = inst_11114;
var state_11127__$1 = (function (){var statearr_11138 = state_11127;
(statearr_11138[(7)] = inst_11107);

return statearr_11138;
})();
var statearr_11139_11156 = state_11127__$1;
(statearr_11139_11156[(2)] = null);

(statearr_11139_11156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11128 === (5))){
var inst_11107 = (state_11127[(7)]);
var state_11127__$1 = state_11127;
var statearr_11140_11157 = state_11127__$1;
(statearr_11140_11157[(2)] = inst_11107);

(statearr_11140_11157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11128 === (10))){
var inst_11121 = (state_11127[(2)]);
var state_11127__$1 = state_11127;
var statearr_11141_11158 = state_11127__$1;
(statearr_11141_11158[(2)] = inst_11121);

(statearr_11141_11158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11128 === (8))){
var inst_11114 = (state_11127[(9)]);
var inst_11117 = cljs.core.deref.call(null,inst_11114);
var state_11127__$1 = state_11127;
var statearr_11142_11159 = state_11127__$1;
(statearr_11142_11159[(2)] = inst_11117);

(statearr_11142_11159[(1)] = (10));


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
});})(c__10369__auto__))
;
return ((function (switch__10257__auto__,c__10369__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10258__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10258__auto____0 = (function (){
var statearr_11146 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11146[(0)] = cljs$core$async$reduce_$_state_machine__10258__auto__);

(statearr_11146[(1)] = (1));

return statearr_11146;
});
var cljs$core$async$reduce_$_state_machine__10258__auto____1 = (function (state_11127){
while(true){
var ret_value__10259__auto__ = (function (){try{while(true){
var result__10260__auto__ = switch__10257__auto__.call(null,state_11127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10260__auto__;
}
break;
}
}catch (e11147){if((e11147 instanceof Object)){
var ex__10261__auto__ = e11147;
var statearr_11148_11160 = state_11127;
(statearr_11148_11160[(5)] = ex__10261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11161 = state_11127;
state_11127 = G__11161;
continue;
} else {
return ret_value__10259__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10258__auto__ = function(state_11127){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10258__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10258__auto____1.call(this,state_11127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10258__auto____0;
cljs$core$async$reduce_$_state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10258__auto____1;
return cljs$core$async$reduce_$_state_machine__10258__auto__;
})()
;})(switch__10257__auto__,c__10369__auto__))
})();
var state__10371__auto__ = (function (){var statearr_11149 = f__10370__auto__.call(null);
(statearr_11149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10369__auto__);

return statearr_11149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10371__auto__);
});})(c__10369__auto__))
);

return c__10369__auto__;
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
var args11162 = [];
var len__7214__auto___11214 = arguments.length;
var i__7215__auto___11215 = (0);
while(true){
if((i__7215__auto___11215 < len__7214__auto___11214)){
args11162.push((arguments[i__7215__auto___11215]));

var G__11216 = (i__7215__auto___11215 + (1));
i__7215__auto___11215 = G__11216;
continue;
} else {
}
break;
}

var G__11164 = args11162.length;
switch (G__11164) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11162.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10369__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10369__auto__){
return (function (){
var f__10370__auto__ = (function (){var switch__10257__auto__ = ((function (c__10369__auto__){
return (function (state_11189){
var state_val_11190 = (state_11189[(1)]);
if((state_val_11190 === (7))){
var inst_11171 = (state_11189[(2)]);
var state_11189__$1 = state_11189;
var statearr_11191_11218 = state_11189__$1;
(statearr_11191_11218[(2)] = inst_11171);

(statearr_11191_11218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11190 === (1))){
var inst_11165 = cljs.core.seq.call(null,coll);
var inst_11166 = inst_11165;
var state_11189__$1 = (function (){var statearr_11192 = state_11189;
(statearr_11192[(7)] = inst_11166);

return statearr_11192;
})();
var statearr_11193_11219 = state_11189__$1;
(statearr_11193_11219[(2)] = null);

(statearr_11193_11219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11190 === (4))){
var inst_11166 = (state_11189[(7)]);
var inst_11169 = cljs.core.first.call(null,inst_11166);
var state_11189__$1 = state_11189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11189__$1,(7),ch,inst_11169);
} else {
if((state_val_11190 === (13))){
var inst_11183 = (state_11189[(2)]);
var state_11189__$1 = state_11189;
var statearr_11194_11220 = state_11189__$1;
(statearr_11194_11220[(2)] = inst_11183);

(statearr_11194_11220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11190 === (6))){
var inst_11174 = (state_11189[(2)]);
var state_11189__$1 = state_11189;
if(cljs.core.truth_(inst_11174)){
var statearr_11195_11221 = state_11189__$1;
(statearr_11195_11221[(1)] = (8));

} else {
var statearr_11196_11222 = state_11189__$1;
(statearr_11196_11222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11190 === (3))){
var inst_11187 = (state_11189[(2)]);
var state_11189__$1 = state_11189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11189__$1,inst_11187);
} else {
if((state_val_11190 === (12))){
var state_11189__$1 = state_11189;
var statearr_11197_11223 = state_11189__$1;
(statearr_11197_11223[(2)] = null);

(statearr_11197_11223[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11190 === (2))){
var inst_11166 = (state_11189[(7)]);
var state_11189__$1 = state_11189;
if(cljs.core.truth_(inst_11166)){
var statearr_11198_11224 = state_11189__$1;
(statearr_11198_11224[(1)] = (4));

} else {
var statearr_11199_11225 = state_11189__$1;
(statearr_11199_11225[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11190 === (11))){
var inst_11180 = cljs.core.async.close_BANG_.call(null,ch);
var state_11189__$1 = state_11189;
var statearr_11200_11226 = state_11189__$1;
(statearr_11200_11226[(2)] = inst_11180);

(statearr_11200_11226[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11190 === (9))){
var state_11189__$1 = state_11189;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11201_11227 = state_11189__$1;
(statearr_11201_11227[(1)] = (11));

} else {
var statearr_11202_11228 = state_11189__$1;
(statearr_11202_11228[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11190 === (5))){
var inst_11166 = (state_11189[(7)]);
var state_11189__$1 = state_11189;
var statearr_11203_11229 = state_11189__$1;
(statearr_11203_11229[(2)] = inst_11166);

(statearr_11203_11229[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11190 === (10))){
var inst_11185 = (state_11189[(2)]);
var state_11189__$1 = state_11189;
var statearr_11204_11230 = state_11189__$1;
(statearr_11204_11230[(2)] = inst_11185);

(statearr_11204_11230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11190 === (8))){
var inst_11166 = (state_11189[(7)]);
var inst_11176 = cljs.core.next.call(null,inst_11166);
var inst_11166__$1 = inst_11176;
var state_11189__$1 = (function (){var statearr_11205 = state_11189;
(statearr_11205[(7)] = inst_11166__$1);

return statearr_11205;
})();
var statearr_11206_11231 = state_11189__$1;
(statearr_11206_11231[(2)] = null);

(statearr_11206_11231[(1)] = (2));


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
});})(c__10369__auto__))
;
return ((function (switch__10257__auto__,c__10369__auto__){
return (function() {
var cljs$core$async$state_machine__10258__auto__ = null;
var cljs$core$async$state_machine__10258__auto____0 = (function (){
var statearr_11210 = [null,null,null,null,null,null,null,null];
(statearr_11210[(0)] = cljs$core$async$state_machine__10258__auto__);

(statearr_11210[(1)] = (1));

return statearr_11210;
});
var cljs$core$async$state_machine__10258__auto____1 = (function (state_11189){
while(true){
var ret_value__10259__auto__ = (function (){try{while(true){
var result__10260__auto__ = switch__10257__auto__.call(null,state_11189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10260__auto__;
}
break;
}
}catch (e11211){if((e11211 instanceof Object)){
var ex__10261__auto__ = e11211;
var statearr_11212_11232 = state_11189;
(statearr_11212_11232[(5)] = ex__10261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11233 = state_11189;
state_11189 = G__11233;
continue;
} else {
return ret_value__10259__auto__;
}
break;
}
});
cljs$core$async$state_machine__10258__auto__ = function(state_11189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10258__auto____1.call(this,state_11189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10258__auto____0;
cljs$core$async$state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10258__auto____1;
return cljs$core$async$state_machine__10258__auto__;
})()
;})(switch__10257__auto__,c__10369__auto__))
})();
var state__10371__auto__ = (function (){var statearr_11213 = f__10370__auto__.call(null);
(statearr_11213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10369__auto__);

return statearr_11213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10371__auto__);
});})(c__10369__auto__))
);

return c__10369__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async11455 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11455 = (function (mult,ch,cs,meta11456){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta11456 = meta11456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11457,meta11456__$1){
var self__ = this;
var _11457__$1 = this;
return (new cljs.core.async.t_cljs$core$async11455(self__.mult,self__.ch,self__.cs,meta11456__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async11455.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11457){
var self__ = this;
var _11457__$1 = this;
return self__.meta11456;
});})(cs))
;

cljs.core.async.t_cljs$core$async11455.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11455.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async11455.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async11455.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11455.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11455.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11455.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11456","meta11456",1276655512,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async11455.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11455";

cljs.core.async.t_cljs$core$async11455.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async11455");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async11455 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async11455(mult__$1,ch__$1,cs__$1,meta11456){
return (new cljs.core.async.t_cljs$core$async11455(mult__$1,ch__$1,cs__$1,meta11456));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async11455(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10369__auto___11676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10369__auto___11676,cs,m,dchan,dctr,done){
return (function (){
var f__10370__auto__ = (function (){var switch__10257__auto__ = ((function (c__10369__auto___11676,cs,m,dchan,dctr,done){
return (function (state_11588){
var state_val_11589 = (state_11588[(1)]);
if((state_val_11589 === (7))){
var inst_11584 = (state_11588[(2)]);
var state_11588__$1 = state_11588;
var statearr_11590_11677 = state_11588__$1;
(statearr_11590_11677[(2)] = inst_11584);

(statearr_11590_11677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (20))){
var inst_11489 = (state_11588[(7)]);
var inst_11499 = cljs.core.first.call(null,inst_11489);
var inst_11500 = cljs.core.nth.call(null,inst_11499,(0),null);
var inst_11501 = cljs.core.nth.call(null,inst_11499,(1),null);
var state_11588__$1 = (function (){var statearr_11591 = state_11588;
(statearr_11591[(8)] = inst_11500);

return statearr_11591;
})();
if(cljs.core.truth_(inst_11501)){
var statearr_11592_11678 = state_11588__$1;
(statearr_11592_11678[(1)] = (22));

} else {
var statearr_11593_11679 = state_11588__$1;
(statearr_11593_11679[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (27))){
var inst_11460 = (state_11588[(9)]);
var inst_11531 = (state_11588[(10)]);
var inst_11536 = (state_11588[(11)]);
var inst_11529 = (state_11588[(12)]);
var inst_11536__$1 = cljs.core._nth.call(null,inst_11529,inst_11531);
var inst_11537 = cljs.core.async.put_BANG_.call(null,inst_11536__$1,inst_11460,done);
var state_11588__$1 = (function (){var statearr_11594 = state_11588;
(statearr_11594[(11)] = inst_11536__$1);

return statearr_11594;
})();
if(cljs.core.truth_(inst_11537)){
var statearr_11595_11680 = state_11588__$1;
(statearr_11595_11680[(1)] = (30));

} else {
var statearr_11596_11681 = state_11588__$1;
(statearr_11596_11681[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (1))){
var state_11588__$1 = state_11588;
var statearr_11597_11682 = state_11588__$1;
(statearr_11597_11682[(2)] = null);

(statearr_11597_11682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (24))){
var inst_11489 = (state_11588[(7)]);
var inst_11506 = (state_11588[(2)]);
var inst_11507 = cljs.core.next.call(null,inst_11489);
var inst_11469 = inst_11507;
var inst_11470 = null;
var inst_11471 = (0);
var inst_11472 = (0);
var state_11588__$1 = (function (){var statearr_11598 = state_11588;
(statearr_11598[(13)] = inst_11469);

(statearr_11598[(14)] = inst_11472);

(statearr_11598[(15)] = inst_11471);

(statearr_11598[(16)] = inst_11470);

(statearr_11598[(17)] = inst_11506);

return statearr_11598;
})();
var statearr_11599_11683 = state_11588__$1;
(statearr_11599_11683[(2)] = null);

(statearr_11599_11683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (39))){
var state_11588__$1 = state_11588;
var statearr_11603_11684 = state_11588__$1;
(statearr_11603_11684[(2)] = null);

(statearr_11603_11684[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (4))){
var inst_11460 = (state_11588[(9)]);
var inst_11460__$1 = (state_11588[(2)]);
var inst_11461 = (inst_11460__$1 == null);
var state_11588__$1 = (function (){var statearr_11604 = state_11588;
(statearr_11604[(9)] = inst_11460__$1);

return statearr_11604;
})();
if(cljs.core.truth_(inst_11461)){
var statearr_11605_11685 = state_11588__$1;
(statearr_11605_11685[(1)] = (5));

} else {
var statearr_11606_11686 = state_11588__$1;
(statearr_11606_11686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (15))){
var inst_11469 = (state_11588[(13)]);
var inst_11472 = (state_11588[(14)]);
var inst_11471 = (state_11588[(15)]);
var inst_11470 = (state_11588[(16)]);
var inst_11485 = (state_11588[(2)]);
var inst_11486 = (inst_11472 + (1));
var tmp11600 = inst_11469;
var tmp11601 = inst_11471;
var tmp11602 = inst_11470;
var inst_11469__$1 = tmp11600;
var inst_11470__$1 = tmp11602;
var inst_11471__$1 = tmp11601;
var inst_11472__$1 = inst_11486;
var state_11588__$1 = (function (){var statearr_11607 = state_11588;
(statearr_11607[(13)] = inst_11469__$1);

(statearr_11607[(18)] = inst_11485);

(statearr_11607[(14)] = inst_11472__$1);

(statearr_11607[(15)] = inst_11471__$1);

(statearr_11607[(16)] = inst_11470__$1);

return statearr_11607;
})();
var statearr_11608_11687 = state_11588__$1;
(statearr_11608_11687[(2)] = null);

(statearr_11608_11687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (21))){
var inst_11510 = (state_11588[(2)]);
var state_11588__$1 = state_11588;
var statearr_11612_11688 = state_11588__$1;
(statearr_11612_11688[(2)] = inst_11510);

(statearr_11612_11688[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (31))){
var inst_11536 = (state_11588[(11)]);
var inst_11540 = done.call(null,null);
var inst_11541 = cljs.core.async.untap_STAR_.call(null,m,inst_11536);
var state_11588__$1 = (function (){var statearr_11613 = state_11588;
(statearr_11613[(19)] = inst_11540);

return statearr_11613;
})();
var statearr_11614_11689 = state_11588__$1;
(statearr_11614_11689[(2)] = inst_11541);

(statearr_11614_11689[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (32))){
var inst_11531 = (state_11588[(10)]);
var inst_11530 = (state_11588[(20)]);
var inst_11528 = (state_11588[(21)]);
var inst_11529 = (state_11588[(12)]);
var inst_11543 = (state_11588[(2)]);
var inst_11544 = (inst_11531 + (1));
var tmp11609 = inst_11530;
var tmp11610 = inst_11528;
var tmp11611 = inst_11529;
var inst_11528__$1 = tmp11610;
var inst_11529__$1 = tmp11611;
var inst_11530__$1 = tmp11609;
var inst_11531__$1 = inst_11544;
var state_11588__$1 = (function (){var statearr_11615 = state_11588;
(statearr_11615[(22)] = inst_11543);

(statearr_11615[(10)] = inst_11531__$1);

(statearr_11615[(20)] = inst_11530__$1);

(statearr_11615[(21)] = inst_11528__$1);

(statearr_11615[(12)] = inst_11529__$1);

return statearr_11615;
})();
var statearr_11616_11690 = state_11588__$1;
(statearr_11616_11690[(2)] = null);

(statearr_11616_11690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (40))){
var inst_11556 = (state_11588[(23)]);
var inst_11560 = done.call(null,null);
var inst_11561 = cljs.core.async.untap_STAR_.call(null,m,inst_11556);
var state_11588__$1 = (function (){var statearr_11617 = state_11588;
(statearr_11617[(24)] = inst_11560);

return statearr_11617;
})();
var statearr_11618_11691 = state_11588__$1;
(statearr_11618_11691[(2)] = inst_11561);

(statearr_11618_11691[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (33))){
var inst_11547 = (state_11588[(25)]);
var inst_11549 = cljs.core.chunked_seq_QMARK_.call(null,inst_11547);
var state_11588__$1 = state_11588;
if(inst_11549){
var statearr_11619_11692 = state_11588__$1;
(statearr_11619_11692[(1)] = (36));

} else {
var statearr_11620_11693 = state_11588__$1;
(statearr_11620_11693[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (13))){
var inst_11479 = (state_11588[(26)]);
var inst_11482 = cljs.core.async.close_BANG_.call(null,inst_11479);
var state_11588__$1 = state_11588;
var statearr_11621_11694 = state_11588__$1;
(statearr_11621_11694[(2)] = inst_11482);

(statearr_11621_11694[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (22))){
var inst_11500 = (state_11588[(8)]);
var inst_11503 = cljs.core.async.close_BANG_.call(null,inst_11500);
var state_11588__$1 = state_11588;
var statearr_11622_11695 = state_11588__$1;
(statearr_11622_11695[(2)] = inst_11503);

(statearr_11622_11695[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (36))){
var inst_11547 = (state_11588[(25)]);
var inst_11551 = cljs.core.chunk_first.call(null,inst_11547);
var inst_11552 = cljs.core.chunk_rest.call(null,inst_11547);
var inst_11553 = cljs.core.count.call(null,inst_11551);
var inst_11528 = inst_11552;
var inst_11529 = inst_11551;
var inst_11530 = inst_11553;
var inst_11531 = (0);
var state_11588__$1 = (function (){var statearr_11623 = state_11588;
(statearr_11623[(10)] = inst_11531);

(statearr_11623[(20)] = inst_11530);

(statearr_11623[(21)] = inst_11528);

(statearr_11623[(12)] = inst_11529);

return statearr_11623;
})();
var statearr_11624_11696 = state_11588__$1;
(statearr_11624_11696[(2)] = null);

(statearr_11624_11696[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (41))){
var inst_11547 = (state_11588[(25)]);
var inst_11563 = (state_11588[(2)]);
var inst_11564 = cljs.core.next.call(null,inst_11547);
var inst_11528 = inst_11564;
var inst_11529 = null;
var inst_11530 = (0);
var inst_11531 = (0);
var state_11588__$1 = (function (){var statearr_11625 = state_11588;
(statearr_11625[(10)] = inst_11531);

(statearr_11625[(20)] = inst_11530);

(statearr_11625[(27)] = inst_11563);

(statearr_11625[(21)] = inst_11528);

(statearr_11625[(12)] = inst_11529);

return statearr_11625;
})();
var statearr_11626_11697 = state_11588__$1;
(statearr_11626_11697[(2)] = null);

(statearr_11626_11697[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (43))){
var state_11588__$1 = state_11588;
var statearr_11627_11698 = state_11588__$1;
(statearr_11627_11698[(2)] = null);

(statearr_11627_11698[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (29))){
var inst_11572 = (state_11588[(2)]);
var state_11588__$1 = state_11588;
var statearr_11628_11699 = state_11588__$1;
(statearr_11628_11699[(2)] = inst_11572);

(statearr_11628_11699[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (44))){
var inst_11581 = (state_11588[(2)]);
var state_11588__$1 = (function (){var statearr_11629 = state_11588;
(statearr_11629[(28)] = inst_11581);

return statearr_11629;
})();
var statearr_11630_11700 = state_11588__$1;
(statearr_11630_11700[(2)] = null);

(statearr_11630_11700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (6))){
var inst_11520 = (state_11588[(29)]);
var inst_11519 = cljs.core.deref.call(null,cs);
var inst_11520__$1 = cljs.core.keys.call(null,inst_11519);
var inst_11521 = cljs.core.count.call(null,inst_11520__$1);
var inst_11522 = cljs.core.reset_BANG_.call(null,dctr,inst_11521);
var inst_11527 = cljs.core.seq.call(null,inst_11520__$1);
var inst_11528 = inst_11527;
var inst_11529 = null;
var inst_11530 = (0);
var inst_11531 = (0);
var state_11588__$1 = (function (){var statearr_11631 = state_11588;
(statearr_11631[(10)] = inst_11531);

(statearr_11631[(29)] = inst_11520__$1);

(statearr_11631[(20)] = inst_11530);

(statearr_11631[(30)] = inst_11522);

(statearr_11631[(21)] = inst_11528);

(statearr_11631[(12)] = inst_11529);

return statearr_11631;
})();
var statearr_11632_11701 = state_11588__$1;
(statearr_11632_11701[(2)] = null);

(statearr_11632_11701[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (28))){
var inst_11547 = (state_11588[(25)]);
var inst_11528 = (state_11588[(21)]);
var inst_11547__$1 = cljs.core.seq.call(null,inst_11528);
var state_11588__$1 = (function (){var statearr_11633 = state_11588;
(statearr_11633[(25)] = inst_11547__$1);

return statearr_11633;
})();
if(inst_11547__$1){
var statearr_11634_11702 = state_11588__$1;
(statearr_11634_11702[(1)] = (33));

} else {
var statearr_11635_11703 = state_11588__$1;
(statearr_11635_11703[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (25))){
var inst_11531 = (state_11588[(10)]);
var inst_11530 = (state_11588[(20)]);
var inst_11533 = (inst_11531 < inst_11530);
var inst_11534 = inst_11533;
var state_11588__$1 = state_11588;
if(cljs.core.truth_(inst_11534)){
var statearr_11636_11704 = state_11588__$1;
(statearr_11636_11704[(1)] = (27));

} else {
var statearr_11637_11705 = state_11588__$1;
(statearr_11637_11705[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (34))){
var state_11588__$1 = state_11588;
var statearr_11638_11706 = state_11588__$1;
(statearr_11638_11706[(2)] = null);

(statearr_11638_11706[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (17))){
var state_11588__$1 = state_11588;
var statearr_11639_11707 = state_11588__$1;
(statearr_11639_11707[(2)] = null);

(statearr_11639_11707[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (3))){
var inst_11586 = (state_11588[(2)]);
var state_11588__$1 = state_11588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11588__$1,inst_11586);
} else {
if((state_val_11589 === (12))){
var inst_11515 = (state_11588[(2)]);
var state_11588__$1 = state_11588;
var statearr_11640_11708 = state_11588__$1;
(statearr_11640_11708[(2)] = inst_11515);

(statearr_11640_11708[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (2))){
var state_11588__$1 = state_11588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11588__$1,(4),ch);
} else {
if((state_val_11589 === (23))){
var state_11588__$1 = state_11588;
var statearr_11641_11709 = state_11588__$1;
(statearr_11641_11709[(2)] = null);

(statearr_11641_11709[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (35))){
var inst_11570 = (state_11588[(2)]);
var state_11588__$1 = state_11588;
var statearr_11642_11710 = state_11588__$1;
(statearr_11642_11710[(2)] = inst_11570);

(statearr_11642_11710[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (19))){
var inst_11489 = (state_11588[(7)]);
var inst_11493 = cljs.core.chunk_first.call(null,inst_11489);
var inst_11494 = cljs.core.chunk_rest.call(null,inst_11489);
var inst_11495 = cljs.core.count.call(null,inst_11493);
var inst_11469 = inst_11494;
var inst_11470 = inst_11493;
var inst_11471 = inst_11495;
var inst_11472 = (0);
var state_11588__$1 = (function (){var statearr_11643 = state_11588;
(statearr_11643[(13)] = inst_11469);

(statearr_11643[(14)] = inst_11472);

(statearr_11643[(15)] = inst_11471);

(statearr_11643[(16)] = inst_11470);

return statearr_11643;
})();
var statearr_11644_11711 = state_11588__$1;
(statearr_11644_11711[(2)] = null);

(statearr_11644_11711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (11))){
var inst_11469 = (state_11588[(13)]);
var inst_11489 = (state_11588[(7)]);
var inst_11489__$1 = cljs.core.seq.call(null,inst_11469);
var state_11588__$1 = (function (){var statearr_11645 = state_11588;
(statearr_11645[(7)] = inst_11489__$1);

return statearr_11645;
})();
if(inst_11489__$1){
var statearr_11646_11712 = state_11588__$1;
(statearr_11646_11712[(1)] = (16));

} else {
var statearr_11647_11713 = state_11588__$1;
(statearr_11647_11713[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (9))){
var inst_11517 = (state_11588[(2)]);
var state_11588__$1 = state_11588;
var statearr_11648_11714 = state_11588__$1;
(statearr_11648_11714[(2)] = inst_11517);

(statearr_11648_11714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (5))){
var inst_11467 = cljs.core.deref.call(null,cs);
var inst_11468 = cljs.core.seq.call(null,inst_11467);
var inst_11469 = inst_11468;
var inst_11470 = null;
var inst_11471 = (0);
var inst_11472 = (0);
var state_11588__$1 = (function (){var statearr_11649 = state_11588;
(statearr_11649[(13)] = inst_11469);

(statearr_11649[(14)] = inst_11472);

(statearr_11649[(15)] = inst_11471);

(statearr_11649[(16)] = inst_11470);

return statearr_11649;
})();
var statearr_11650_11715 = state_11588__$1;
(statearr_11650_11715[(2)] = null);

(statearr_11650_11715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (14))){
var state_11588__$1 = state_11588;
var statearr_11651_11716 = state_11588__$1;
(statearr_11651_11716[(2)] = null);

(statearr_11651_11716[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (45))){
var inst_11578 = (state_11588[(2)]);
var state_11588__$1 = state_11588;
var statearr_11652_11717 = state_11588__$1;
(statearr_11652_11717[(2)] = inst_11578);

(statearr_11652_11717[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (26))){
var inst_11520 = (state_11588[(29)]);
var inst_11574 = (state_11588[(2)]);
var inst_11575 = cljs.core.seq.call(null,inst_11520);
var state_11588__$1 = (function (){var statearr_11653 = state_11588;
(statearr_11653[(31)] = inst_11574);

return statearr_11653;
})();
if(inst_11575){
var statearr_11654_11718 = state_11588__$1;
(statearr_11654_11718[(1)] = (42));

} else {
var statearr_11655_11719 = state_11588__$1;
(statearr_11655_11719[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (16))){
var inst_11489 = (state_11588[(7)]);
var inst_11491 = cljs.core.chunked_seq_QMARK_.call(null,inst_11489);
var state_11588__$1 = state_11588;
if(inst_11491){
var statearr_11656_11720 = state_11588__$1;
(statearr_11656_11720[(1)] = (19));

} else {
var statearr_11657_11721 = state_11588__$1;
(statearr_11657_11721[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (38))){
var inst_11567 = (state_11588[(2)]);
var state_11588__$1 = state_11588;
var statearr_11658_11722 = state_11588__$1;
(statearr_11658_11722[(2)] = inst_11567);

(statearr_11658_11722[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (30))){
var state_11588__$1 = state_11588;
var statearr_11659_11723 = state_11588__$1;
(statearr_11659_11723[(2)] = null);

(statearr_11659_11723[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (10))){
var inst_11472 = (state_11588[(14)]);
var inst_11470 = (state_11588[(16)]);
var inst_11478 = cljs.core._nth.call(null,inst_11470,inst_11472);
var inst_11479 = cljs.core.nth.call(null,inst_11478,(0),null);
var inst_11480 = cljs.core.nth.call(null,inst_11478,(1),null);
var state_11588__$1 = (function (){var statearr_11660 = state_11588;
(statearr_11660[(26)] = inst_11479);

return statearr_11660;
})();
if(cljs.core.truth_(inst_11480)){
var statearr_11661_11724 = state_11588__$1;
(statearr_11661_11724[(1)] = (13));

} else {
var statearr_11662_11725 = state_11588__$1;
(statearr_11662_11725[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (18))){
var inst_11513 = (state_11588[(2)]);
var state_11588__$1 = state_11588;
var statearr_11663_11726 = state_11588__$1;
(statearr_11663_11726[(2)] = inst_11513);

(statearr_11663_11726[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (42))){
var state_11588__$1 = state_11588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11588__$1,(45),dchan);
} else {
if((state_val_11589 === (37))){
var inst_11556 = (state_11588[(23)]);
var inst_11460 = (state_11588[(9)]);
var inst_11547 = (state_11588[(25)]);
var inst_11556__$1 = cljs.core.first.call(null,inst_11547);
var inst_11557 = cljs.core.async.put_BANG_.call(null,inst_11556__$1,inst_11460,done);
var state_11588__$1 = (function (){var statearr_11664 = state_11588;
(statearr_11664[(23)] = inst_11556__$1);

return statearr_11664;
})();
if(cljs.core.truth_(inst_11557)){
var statearr_11665_11727 = state_11588__$1;
(statearr_11665_11727[(1)] = (39));

} else {
var statearr_11666_11728 = state_11588__$1;
(statearr_11666_11728[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (8))){
var inst_11472 = (state_11588[(14)]);
var inst_11471 = (state_11588[(15)]);
var inst_11474 = (inst_11472 < inst_11471);
var inst_11475 = inst_11474;
var state_11588__$1 = state_11588;
if(cljs.core.truth_(inst_11475)){
var statearr_11667_11729 = state_11588__$1;
(statearr_11667_11729[(1)] = (10));

} else {
var statearr_11668_11730 = state_11588__$1;
(statearr_11668_11730[(1)] = (11));

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
});})(c__10369__auto___11676,cs,m,dchan,dctr,done))
;
return ((function (switch__10257__auto__,c__10369__auto___11676,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10258__auto__ = null;
var cljs$core$async$mult_$_state_machine__10258__auto____0 = (function (){
var statearr_11672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11672[(0)] = cljs$core$async$mult_$_state_machine__10258__auto__);

(statearr_11672[(1)] = (1));

return statearr_11672;
});
var cljs$core$async$mult_$_state_machine__10258__auto____1 = (function (state_11588){
while(true){
var ret_value__10259__auto__ = (function (){try{while(true){
var result__10260__auto__ = switch__10257__auto__.call(null,state_11588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10260__auto__;
}
break;
}
}catch (e11673){if((e11673 instanceof Object)){
var ex__10261__auto__ = e11673;
var statearr_11674_11731 = state_11588;
(statearr_11674_11731[(5)] = ex__10261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11732 = state_11588;
state_11588 = G__11732;
continue;
} else {
return ret_value__10259__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10258__auto__ = function(state_11588){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10258__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10258__auto____1.call(this,state_11588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10258__auto____0;
cljs$core$async$mult_$_state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10258__auto____1;
return cljs$core$async$mult_$_state_machine__10258__auto__;
})()
;})(switch__10257__auto__,c__10369__auto___11676,cs,m,dchan,dctr,done))
})();
var state__10371__auto__ = (function (){var statearr_11675 = f__10370__auto__.call(null);
(statearr_11675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10369__auto___11676);

return statearr_11675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10371__auto__);
});})(c__10369__auto___11676,cs,m,dchan,dctr,done))
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
var args11733 = [];
var len__7214__auto___11736 = arguments.length;
var i__7215__auto___11737 = (0);
while(true){
if((i__7215__auto___11737 < len__7214__auto___11736)){
args11733.push((arguments[i__7215__auto___11737]));

var G__11738 = (i__7215__auto___11737 + (1));
i__7215__auto___11737 = G__11738;
continue;
} else {
}
break;
}

var G__11735 = args11733.length;
switch (G__11735) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11733.length)].join('')));

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
var len__7214__auto___11750 = arguments.length;
var i__7215__auto___11751 = (0);
while(true){
if((i__7215__auto___11751 < len__7214__auto___11750)){
args__7221__auto__.push((arguments[i__7215__auto___11751]));

var G__11752 = (i__7215__auto___11751 + (1));
i__7215__auto___11751 = G__11752;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((3) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7222__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11744){
var map__11745 = p__11744;
var map__11745__$1 = ((((!((map__11745 == null)))?((((map__11745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11745):map__11745);
var opts = map__11745__$1;
var statearr_11747_11753 = state;
(statearr_11747_11753[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__11745,map__11745__$1,opts){
return (function (val){
var statearr_11748_11754 = state;
(statearr_11748_11754[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__11745,map__11745__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_11749_11755 = state;
(statearr_11749_11755[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11740){
var G__11741 = cljs.core.first.call(null,seq11740);
var seq11740__$1 = cljs.core.next.call(null,seq11740);
var G__11742 = cljs.core.first.call(null,seq11740__$1);
var seq11740__$2 = cljs.core.next.call(null,seq11740__$1);
var G__11743 = cljs.core.first.call(null,seq11740__$2);
var seq11740__$3 = cljs.core.next.call(null,seq11740__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11741,G__11742,G__11743,seq11740__$3);
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
if(typeof cljs.core.async.t_cljs$core$async11919 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11919 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11920){
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
this.meta11920 = meta11920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11921,meta11920__$1){
var self__ = this;
var _11921__$1 = this;
return (new cljs.core.async.t_cljs$core$async11919(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11920__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11919.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11921){
var self__ = this;
var _11921__$1 = this;
return self__.meta11920;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11919.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11919.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11919.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async11919.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11919.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11919.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11919.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11919.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async11919.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11920","meta11920",1799416536,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11919.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11919.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11919";

cljs.core.async.t_cljs$core$async11919.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async11919");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async11919 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async11919(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11920){
return (new cljs.core.async.t_cljs$core$async11919(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11920));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async11919(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10369__auto___12082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10369__auto___12082,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10370__auto__ = (function (){var switch__10257__auto__ = ((function (c__10369__auto___12082,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12019){
var state_val_12020 = (state_12019[(1)]);
if((state_val_12020 === (7))){
var inst_11937 = (state_12019[(2)]);
var state_12019__$1 = state_12019;
var statearr_12021_12083 = state_12019__$1;
(statearr_12021_12083[(2)] = inst_11937);

(statearr_12021_12083[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (20))){
var inst_11949 = (state_12019[(7)]);
var state_12019__$1 = state_12019;
var statearr_12022_12084 = state_12019__$1;
(statearr_12022_12084[(2)] = inst_11949);

(statearr_12022_12084[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (27))){
var state_12019__$1 = state_12019;
var statearr_12023_12085 = state_12019__$1;
(statearr_12023_12085[(2)] = null);

(statearr_12023_12085[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (1))){
var inst_11925 = (state_12019[(8)]);
var inst_11925__$1 = calc_state.call(null);
var inst_11927 = (inst_11925__$1 == null);
var inst_11928 = cljs.core.not.call(null,inst_11927);
var state_12019__$1 = (function (){var statearr_12024 = state_12019;
(statearr_12024[(8)] = inst_11925__$1);

return statearr_12024;
})();
if(inst_11928){
var statearr_12025_12086 = state_12019__$1;
(statearr_12025_12086[(1)] = (2));

} else {
var statearr_12026_12087 = state_12019__$1;
(statearr_12026_12087[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (24))){
var inst_11979 = (state_12019[(9)]);
var inst_11972 = (state_12019[(10)]);
var inst_11993 = (state_12019[(11)]);
var inst_11993__$1 = inst_11972.call(null,inst_11979);
var state_12019__$1 = (function (){var statearr_12027 = state_12019;
(statearr_12027[(11)] = inst_11993__$1);

return statearr_12027;
})();
if(cljs.core.truth_(inst_11993__$1)){
var statearr_12028_12088 = state_12019__$1;
(statearr_12028_12088[(1)] = (29));

} else {
var statearr_12029_12089 = state_12019__$1;
(statearr_12029_12089[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (4))){
var inst_11940 = (state_12019[(2)]);
var state_12019__$1 = state_12019;
if(cljs.core.truth_(inst_11940)){
var statearr_12030_12090 = state_12019__$1;
(statearr_12030_12090[(1)] = (8));

} else {
var statearr_12031_12091 = state_12019__$1;
(statearr_12031_12091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (15))){
var inst_11966 = (state_12019[(2)]);
var state_12019__$1 = state_12019;
if(cljs.core.truth_(inst_11966)){
var statearr_12032_12092 = state_12019__$1;
(statearr_12032_12092[(1)] = (19));

} else {
var statearr_12033_12093 = state_12019__$1;
(statearr_12033_12093[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (21))){
var inst_11971 = (state_12019[(12)]);
var inst_11971__$1 = (state_12019[(2)]);
var inst_11972 = cljs.core.get.call(null,inst_11971__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11973 = cljs.core.get.call(null,inst_11971__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11974 = cljs.core.get.call(null,inst_11971__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12019__$1 = (function (){var statearr_12034 = state_12019;
(statearr_12034[(10)] = inst_11972);

(statearr_12034[(12)] = inst_11971__$1);

(statearr_12034[(13)] = inst_11973);

return statearr_12034;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12019__$1,(22),inst_11974);
} else {
if((state_val_12020 === (31))){
var inst_12001 = (state_12019[(2)]);
var state_12019__$1 = state_12019;
if(cljs.core.truth_(inst_12001)){
var statearr_12035_12094 = state_12019__$1;
(statearr_12035_12094[(1)] = (32));

} else {
var statearr_12036_12095 = state_12019__$1;
(statearr_12036_12095[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (32))){
var inst_11978 = (state_12019[(14)]);
var state_12019__$1 = state_12019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12019__$1,(35),out,inst_11978);
} else {
if((state_val_12020 === (33))){
var inst_11971 = (state_12019[(12)]);
var inst_11949 = inst_11971;
var state_12019__$1 = (function (){var statearr_12037 = state_12019;
(statearr_12037[(7)] = inst_11949);

return statearr_12037;
})();
var statearr_12038_12096 = state_12019__$1;
(statearr_12038_12096[(2)] = null);

(statearr_12038_12096[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (13))){
var inst_11949 = (state_12019[(7)]);
var inst_11956 = inst_11949.cljs$lang$protocol_mask$partition0$;
var inst_11957 = (inst_11956 & (64));
var inst_11958 = inst_11949.cljs$core$ISeq$;
var inst_11959 = (inst_11957) || (inst_11958);
var state_12019__$1 = state_12019;
if(cljs.core.truth_(inst_11959)){
var statearr_12039_12097 = state_12019__$1;
(statearr_12039_12097[(1)] = (16));

} else {
var statearr_12040_12098 = state_12019__$1;
(statearr_12040_12098[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (22))){
var inst_11979 = (state_12019[(9)]);
var inst_11978 = (state_12019[(14)]);
var inst_11977 = (state_12019[(2)]);
var inst_11978__$1 = cljs.core.nth.call(null,inst_11977,(0),null);
var inst_11979__$1 = cljs.core.nth.call(null,inst_11977,(1),null);
var inst_11980 = (inst_11978__$1 == null);
var inst_11981 = cljs.core._EQ_.call(null,inst_11979__$1,change);
var inst_11982 = (inst_11980) || (inst_11981);
var state_12019__$1 = (function (){var statearr_12041 = state_12019;
(statearr_12041[(9)] = inst_11979__$1);

(statearr_12041[(14)] = inst_11978__$1);

return statearr_12041;
})();
if(cljs.core.truth_(inst_11982)){
var statearr_12042_12099 = state_12019__$1;
(statearr_12042_12099[(1)] = (23));

} else {
var statearr_12043_12100 = state_12019__$1;
(statearr_12043_12100[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (36))){
var inst_11971 = (state_12019[(12)]);
var inst_11949 = inst_11971;
var state_12019__$1 = (function (){var statearr_12044 = state_12019;
(statearr_12044[(7)] = inst_11949);

return statearr_12044;
})();
var statearr_12045_12101 = state_12019__$1;
(statearr_12045_12101[(2)] = null);

(statearr_12045_12101[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (29))){
var inst_11993 = (state_12019[(11)]);
var state_12019__$1 = state_12019;
var statearr_12046_12102 = state_12019__$1;
(statearr_12046_12102[(2)] = inst_11993);

(statearr_12046_12102[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (6))){
var state_12019__$1 = state_12019;
var statearr_12047_12103 = state_12019__$1;
(statearr_12047_12103[(2)] = false);

(statearr_12047_12103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (28))){
var inst_11989 = (state_12019[(2)]);
var inst_11990 = calc_state.call(null);
var inst_11949 = inst_11990;
var state_12019__$1 = (function (){var statearr_12048 = state_12019;
(statearr_12048[(7)] = inst_11949);

(statearr_12048[(15)] = inst_11989);

return statearr_12048;
})();
var statearr_12049_12104 = state_12019__$1;
(statearr_12049_12104[(2)] = null);

(statearr_12049_12104[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (25))){
var inst_12015 = (state_12019[(2)]);
var state_12019__$1 = state_12019;
var statearr_12050_12105 = state_12019__$1;
(statearr_12050_12105[(2)] = inst_12015);

(statearr_12050_12105[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (34))){
var inst_12013 = (state_12019[(2)]);
var state_12019__$1 = state_12019;
var statearr_12051_12106 = state_12019__$1;
(statearr_12051_12106[(2)] = inst_12013);

(statearr_12051_12106[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (17))){
var state_12019__$1 = state_12019;
var statearr_12052_12107 = state_12019__$1;
(statearr_12052_12107[(2)] = false);

(statearr_12052_12107[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (3))){
var state_12019__$1 = state_12019;
var statearr_12053_12108 = state_12019__$1;
(statearr_12053_12108[(2)] = false);

(statearr_12053_12108[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (12))){
var inst_12017 = (state_12019[(2)]);
var state_12019__$1 = state_12019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12019__$1,inst_12017);
} else {
if((state_val_12020 === (2))){
var inst_11925 = (state_12019[(8)]);
var inst_11930 = inst_11925.cljs$lang$protocol_mask$partition0$;
var inst_11931 = (inst_11930 & (64));
var inst_11932 = inst_11925.cljs$core$ISeq$;
var inst_11933 = (inst_11931) || (inst_11932);
var state_12019__$1 = state_12019;
if(cljs.core.truth_(inst_11933)){
var statearr_12054_12109 = state_12019__$1;
(statearr_12054_12109[(1)] = (5));

} else {
var statearr_12055_12110 = state_12019__$1;
(statearr_12055_12110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (23))){
var inst_11978 = (state_12019[(14)]);
var inst_11984 = (inst_11978 == null);
var state_12019__$1 = state_12019;
if(cljs.core.truth_(inst_11984)){
var statearr_12056_12111 = state_12019__$1;
(statearr_12056_12111[(1)] = (26));

} else {
var statearr_12057_12112 = state_12019__$1;
(statearr_12057_12112[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (35))){
var inst_12004 = (state_12019[(2)]);
var state_12019__$1 = state_12019;
if(cljs.core.truth_(inst_12004)){
var statearr_12058_12113 = state_12019__$1;
(statearr_12058_12113[(1)] = (36));

} else {
var statearr_12059_12114 = state_12019__$1;
(statearr_12059_12114[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (19))){
var inst_11949 = (state_12019[(7)]);
var inst_11968 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11949);
var state_12019__$1 = state_12019;
var statearr_12060_12115 = state_12019__$1;
(statearr_12060_12115[(2)] = inst_11968);

(statearr_12060_12115[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (11))){
var inst_11949 = (state_12019[(7)]);
var inst_11953 = (inst_11949 == null);
var inst_11954 = cljs.core.not.call(null,inst_11953);
var state_12019__$1 = state_12019;
if(inst_11954){
var statearr_12061_12116 = state_12019__$1;
(statearr_12061_12116[(1)] = (13));

} else {
var statearr_12062_12117 = state_12019__$1;
(statearr_12062_12117[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (9))){
var inst_11925 = (state_12019[(8)]);
var state_12019__$1 = state_12019;
var statearr_12063_12118 = state_12019__$1;
(statearr_12063_12118[(2)] = inst_11925);

(statearr_12063_12118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (5))){
var state_12019__$1 = state_12019;
var statearr_12064_12119 = state_12019__$1;
(statearr_12064_12119[(2)] = true);

(statearr_12064_12119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (14))){
var state_12019__$1 = state_12019;
var statearr_12065_12120 = state_12019__$1;
(statearr_12065_12120[(2)] = false);

(statearr_12065_12120[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (26))){
var inst_11979 = (state_12019[(9)]);
var inst_11986 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11979);
var state_12019__$1 = state_12019;
var statearr_12066_12121 = state_12019__$1;
(statearr_12066_12121[(2)] = inst_11986);

(statearr_12066_12121[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (16))){
var state_12019__$1 = state_12019;
var statearr_12067_12122 = state_12019__$1;
(statearr_12067_12122[(2)] = true);

(statearr_12067_12122[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (38))){
var inst_12009 = (state_12019[(2)]);
var state_12019__$1 = state_12019;
var statearr_12068_12123 = state_12019__$1;
(statearr_12068_12123[(2)] = inst_12009);

(statearr_12068_12123[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (30))){
var inst_11979 = (state_12019[(9)]);
var inst_11972 = (state_12019[(10)]);
var inst_11973 = (state_12019[(13)]);
var inst_11996 = cljs.core.empty_QMARK_.call(null,inst_11972);
var inst_11997 = inst_11973.call(null,inst_11979);
var inst_11998 = cljs.core.not.call(null,inst_11997);
var inst_11999 = (inst_11996) && (inst_11998);
var state_12019__$1 = state_12019;
var statearr_12069_12124 = state_12019__$1;
(statearr_12069_12124[(2)] = inst_11999);

(statearr_12069_12124[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (10))){
var inst_11925 = (state_12019[(8)]);
var inst_11945 = (state_12019[(2)]);
var inst_11946 = cljs.core.get.call(null,inst_11945,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11947 = cljs.core.get.call(null,inst_11945,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11948 = cljs.core.get.call(null,inst_11945,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11949 = inst_11925;
var state_12019__$1 = (function (){var statearr_12070 = state_12019;
(statearr_12070[(7)] = inst_11949);

(statearr_12070[(16)] = inst_11947);

(statearr_12070[(17)] = inst_11946);

(statearr_12070[(18)] = inst_11948);

return statearr_12070;
})();
var statearr_12071_12125 = state_12019__$1;
(statearr_12071_12125[(2)] = null);

(statearr_12071_12125[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (18))){
var inst_11963 = (state_12019[(2)]);
var state_12019__$1 = state_12019;
var statearr_12072_12126 = state_12019__$1;
(statearr_12072_12126[(2)] = inst_11963);

(statearr_12072_12126[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (37))){
var state_12019__$1 = state_12019;
var statearr_12073_12127 = state_12019__$1;
(statearr_12073_12127[(2)] = null);

(statearr_12073_12127[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12020 === (8))){
var inst_11925 = (state_12019[(8)]);
var inst_11942 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11925);
var state_12019__$1 = state_12019;
var statearr_12074_12128 = state_12019__$1;
(statearr_12074_12128[(2)] = inst_11942);

(statearr_12074_12128[(1)] = (10));


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
});})(c__10369__auto___12082,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10257__auto__,c__10369__auto___12082,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10258__auto__ = null;
var cljs$core$async$mix_$_state_machine__10258__auto____0 = (function (){
var statearr_12078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12078[(0)] = cljs$core$async$mix_$_state_machine__10258__auto__);

(statearr_12078[(1)] = (1));

return statearr_12078;
});
var cljs$core$async$mix_$_state_machine__10258__auto____1 = (function (state_12019){
while(true){
var ret_value__10259__auto__ = (function (){try{while(true){
var result__10260__auto__ = switch__10257__auto__.call(null,state_12019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10260__auto__;
}
break;
}
}catch (e12079){if((e12079 instanceof Object)){
var ex__10261__auto__ = e12079;
var statearr_12080_12129 = state_12019;
(statearr_12080_12129[(5)] = ex__10261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12130 = state_12019;
state_12019 = G__12130;
continue;
} else {
return ret_value__10259__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10258__auto__ = function(state_12019){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10258__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10258__auto____1.call(this,state_12019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10258__auto____0;
cljs$core$async$mix_$_state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10258__auto____1;
return cljs$core$async$mix_$_state_machine__10258__auto__;
})()
;})(switch__10257__auto__,c__10369__auto___12082,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10371__auto__ = (function (){var statearr_12081 = f__10370__auto__.call(null);
(statearr_12081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10369__auto___12082);

return statearr_12081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10371__auto__);
});})(c__10369__auto___12082,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args12131 = [];
var len__7214__auto___12134 = arguments.length;
var i__7215__auto___12135 = (0);
while(true){
if((i__7215__auto___12135 < len__7214__auto___12134)){
args12131.push((arguments[i__7215__auto___12135]));

var G__12136 = (i__7215__auto___12135 + (1));
i__7215__auto___12135 = G__12136;
continue;
} else {
}
break;
}

var G__12133 = args12131.length;
switch (G__12133) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12131.length)].join('')));

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
var args12139 = [];
var len__7214__auto___12264 = arguments.length;
var i__7215__auto___12265 = (0);
while(true){
if((i__7215__auto___12265 < len__7214__auto___12264)){
args12139.push((arguments[i__7215__auto___12265]));

var G__12266 = (i__7215__auto___12265 + (1));
i__7215__auto___12265 = G__12266;
continue;
} else {
}
break;
}

var G__12141 = args12139.length;
switch (G__12141) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12139.length)].join('')));

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
return (function (p1__12138_SHARP_){
if(cljs.core.truth_(p1__12138_SHARP_.call(null,topic))){
return p1__12138_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12138_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6156__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async12142 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12142 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12143){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12143 = meta12143;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12144,meta12143__$1){
var self__ = this;
var _12144__$1 = this;
return (new cljs.core.async.t_cljs$core$async12142(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12143__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12142.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12144){
var self__ = this;
var _12144__$1 = this;
return self__.meta12143;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12142.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12142.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12142.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async12142.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12142.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async12142.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12142.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12142.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12143","meta12143",-1092544543,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12142.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12142.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12142";

cljs.core.async.t_cljs$core$async12142.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async12142");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async12142 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async12142(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12143){
return (new cljs.core.async.t_cljs$core$async12142(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12143));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async12142(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10369__auto___12268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10369__auto___12268,mults,ensure_mult,p){
return (function (){
var f__10370__auto__ = (function (){var switch__10257__auto__ = ((function (c__10369__auto___12268,mults,ensure_mult,p){
return (function (state_12216){
var state_val_12217 = (state_12216[(1)]);
if((state_val_12217 === (7))){
var inst_12212 = (state_12216[(2)]);
var state_12216__$1 = state_12216;
var statearr_12218_12269 = state_12216__$1;
(statearr_12218_12269[(2)] = inst_12212);

(statearr_12218_12269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (20))){
var state_12216__$1 = state_12216;
var statearr_12219_12270 = state_12216__$1;
(statearr_12219_12270[(2)] = null);

(statearr_12219_12270[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (1))){
var state_12216__$1 = state_12216;
var statearr_12220_12271 = state_12216__$1;
(statearr_12220_12271[(2)] = null);

(statearr_12220_12271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (24))){
var inst_12195 = (state_12216[(7)]);
var inst_12204 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12195);
var state_12216__$1 = state_12216;
var statearr_12221_12272 = state_12216__$1;
(statearr_12221_12272[(2)] = inst_12204);

(statearr_12221_12272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (4))){
var inst_12147 = (state_12216[(8)]);
var inst_12147__$1 = (state_12216[(2)]);
var inst_12148 = (inst_12147__$1 == null);
var state_12216__$1 = (function (){var statearr_12222 = state_12216;
(statearr_12222[(8)] = inst_12147__$1);

return statearr_12222;
})();
if(cljs.core.truth_(inst_12148)){
var statearr_12223_12273 = state_12216__$1;
(statearr_12223_12273[(1)] = (5));

} else {
var statearr_12224_12274 = state_12216__$1;
(statearr_12224_12274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (15))){
var inst_12189 = (state_12216[(2)]);
var state_12216__$1 = state_12216;
var statearr_12225_12275 = state_12216__$1;
(statearr_12225_12275[(2)] = inst_12189);

(statearr_12225_12275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (21))){
var inst_12209 = (state_12216[(2)]);
var state_12216__$1 = (function (){var statearr_12226 = state_12216;
(statearr_12226[(9)] = inst_12209);

return statearr_12226;
})();
var statearr_12227_12276 = state_12216__$1;
(statearr_12227_12276[(2)] = null);

(statearr_12227_12276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (13))){
var inst_12171 = (state_12216[(10)]);
var inst_12173 = cljs.core.chunked_seq_QMARK_.call(null,inst_12171);
var state_12216__$1 = state_12216;
if(inst_12173){
var statearr_12228_12277 = state_12216__$1;
(statearr_12228_12277[(1)] = (16));

} else {
var statearr_12229_12278 = state_12216__$1;
(statearr_12229_12278[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (22))){
var inst_12201 = (state_12216[(2)]);
var state_12216__$1 = state_12216;
if(cljs.core.truth_(inst_12201)){
var statearr_12230_12279 = state_12216__$1;
(statearr_12230_12279[(1)] = (23));

} else {
var statearr_12231_12280 = state_12216__$1;
(statearr_12231_12280[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (6))){
var inst_12147 = (state_12216[(8)]);
var inst_12197 = (state_12216[(11)]);
var inst_12195 = (state_12216[(7)]);
var inst_12195__$1 = topic_fn.call(null,inst_12147);
var inst_12196 = cljs.core.deref.call(null,mults);
var inst_12197__$1 = cljs.core.get.call(null,inst_12196,inst_12195__$1);
var state_12216__$1 = (function (){var statearr_12232 = state_12216;
(statearr_12232[(11)] = inst_12197__$1);

(statearr_12232[(7)] = inst_12195__$1);

return statearr_12232;
})();
if(cljs.core.truth_(inst_12197__$1)){
var statearr_12233_12281 = state_12216__$1;
(statearr_12233_12281[(1)] = (19));

} else {
var statearr_12234_12282 = state_12216__$1;
(statearr_12234_12282[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (25))){
var inst_12206 = (state_12216[(2)]);
var state_12216__$1 = state_12216;
var statearr_12235_12283 = state_12216__$1;
(statearr_12235_12283[(2)] = inst_12206);

(statearr_12235_12283[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (17))){
var inst_12171 = (state_12216[(10)]);
var inst_12180 = cljs.core.first.call(null,inst_12171);
var inst_12181 = cljs.core.async.muxch_STAR_.call(null,inst_12180);
var inst_12182 = cljs.core.async.close_BANG_.call(null,inst_12181);
var inst_12183 = cljs.core.next.call(null,inst_12171);
var inst_12157 = inst_12183;
var inst_12158 = null;
var inst_12159 = (0);
var inst_12160 = (0);
var state_12216__$1 = (function (){var statearr_12236 = state_12216;
(statearr_12236[(12)] = inst_12182);

(statearr_12236[(13)] = inst_12157);

(statearr_12236[(14)] = inst_12160);

(statearr_12236[(15)] = inst_12158);

(statearr_12236[(16)] = inst_12159);

return statearr_12236;
})();
var statearr_12237_12284 = state_12216__$1;
(statearr_12237_12284[(2)] = null);

(statearr_12237_12284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (3))){
var inst_12214 = (state_12216[(2)]);
var state_12216__$1 = state_12216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12216__$1,inst_12214);
} else {
if((state_val_12217 === (12))){
var inst_12191 = (state_12216[(2)]);
var state_12216__$1 = state_12216;
var statearr_12238_12285 = state_12216__$1;
(statearr_12238_12285[(2)] = inst_12191);

(statearr_12238_12285[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (2))){
var state_12216__$1 = state_12216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12216__$1,(4),ch);
} else {
if((state_val_12217 === (23))){
var state_12216__$1 = state_12216;
var statearr_12239_12286 = state_12216__$1;
(statearr_12239_12286[(2)] = null);

(statearr_12239_12286[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (19))){
var inst_12147 = (state_12216[(8)]);
var inst_12197 = (state_12216[(11)]);
var inst_12199 = cljs.core.async.muxch_STAR_.call(null,inst_12197);
var state_12216__$1 = state_12216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12216__$1,(22),inst_12199,inst_12147);
} else {
if((state_val_12217 === (11))){
var inst_12157 = (state_12216[(13)]);
var inst_12171 = (state_12216[(10)]);
var inst_12171__$1 = cljs.core.seq.call(null,inst_12157);
var state_12216__$1 = (function (){var statearr_12240 = state_12216;
(statearr_12240[(10)] = inst_12171__$1);

return statearr_12240;
})();
if(inst_12171__$1){
var statearr_12241_12287 = state_12216__$1;
(statearr_12241_12287[(1)] = (13));

} else {
var statearr_12242_12288 = state_12216__$1;
(statearr_12242_12288[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (9))){
var inst_12193 = (state_12216[(2)]);
var state_12216__$1 = state_12216;
var statearr_12243_12289 = state_12216__$1;
(statearr_12243_12289[(2)] = inst_12193);

(statearr_12243_12289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (5))){
var inst_12154 = cljs.core.deref.call(null,mults);
var inst_12155 = cljs.core.vals.call(null,inst_12154);
var inst_12156 = cljs.core.seq.call(null,inst_12155);
var inst_12157 = inst_12156;
var inst_12158 = null;
var inst_12159 = (0);
var inst_12160 = (0);
var state_12216__$1 = (function (){var statearr_12244 = state_12216;
(statearr_12244[(13)] = inst_12157);

(statearr_12244[(14)] = inst_12160);

(statearr_12244[(15)] = inst_12158);

(statearr_12244[(16)] = inst_12159);

return statearr_12244;
})();
var statearr_12245_12290 = state_12216__$1;
(statearr_12245_12290[(2)] = null);

(statearr_12245_12290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (14))){
var state_12216__$1 = state_12216;
var statearr_12249_12291 = state_12216__$1;
(statearr_12249_12291[(2)] = null);

(statearr_12249_12291[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (16))){
var inst_12171 = (state_12216[(10)]);
var inst_12175 = cljs.core.chunk_first.call(null,inst_12171);
var inst_12176 = cljs.core.chunk_rest.call(null,inst_12171);
var inst_12177 = cljs.core.count.call(null,inst_12175);
var inst_12157 = inst_12176;
var inst_12158 = inst_12175;
var inst_12159 = inst_12177;
var inst_12160 = (0);
var state_12216__$1 = (function (){var statearr_12250 = state_12216;
(statearr_12250[(13)] = inst_12157);

(statearr_12250[(14)] = inst_12160);

(statearr_12250[(15)] = inst_12158);

(statearr_12250[(16)] = inst_12159);

return statearr_12250;
})();
var statearr_12251_12292 = state_12216__$1;
(statearr_12251_12292[(2)] = null);

(statearr_12251_12292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (10))){
var inst_12157 = (state_12216[(13)]);
var inst_12160 = (state_12216[(14)]);
var inst_12158 = (state_12216[(15)]);
var inst_12159 = (state_12216[(16)]);
var inst_12165 = cljs.core._nth.call(null,inst_12158,inst_12160);
var inst_12166 = cljs.core.async.muxch_STAR_.call(null,inst_12165);
var inst_12167 = cljs.core.async.close_BANG_.call(null,inst_12166);
var inst_12168 = (inst_12160 + (1));
var tmp12246 = inst_12157;
var tmp12247 = inst_12158;
var tmp12248 = inst_12159;
var inst_12157__$1 = tmp12246;
var inst_12158__$1 = tmp12247;
var inst_12159__$1 = tmp12248;
var inst_12160__$1 = inst_12168;
var state_12216__$1 = (function (){var statearr_12252 = state_12216;
(statearr_12252[(13)] = inst_12157__$1);

(statearr_12252[(14)] = inst_12160__$1);

(statearr_12252[(17)] = inst_12167);

(statearr_12252[(15)] = inst_12158__$1);

(statearr_12252[(16)] = inst_12159__$1);

return statearr_12252;
})();
var statearr_12253_12293 = state_12216__$1;
(statearr_12253_12293[(2)] = null);

(statearr_12253_12293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (18))){
var inst_12186 = (state_12216[(2)]);
var state_12216__$1 = state_12216;
var statearr_12254_12294 = state_12216__$1;
(statearr_12254_12294[(2)] = inst_12186);

(statearr_12254_12294[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12217 === (8))){
var inst_12160 = (state_12216[(14)]);
var inst_12159 = (state_12216[(16)]);
var inst_12162 = (inst_12160 < inst_12159);
var inst_12163 = inst_12162;
var state_12216__$1 = state_12216;
if(cljs.core.truth_(inst_12163)){
var statearr_12255_12295 = state_12216__$1;
(statearr_12255_12295[(1)] = (10));

} else {
var statearr_12256_12296 = state_12216__$1;
(statearr_12256_12296[(1)] = (11));

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
});})(c__10369__auto___12268,mults,ensure_mult,p))
;
return ((function (switch__10257__auto__,c__10369__auto___12268,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10258__auto__ = null;
var cljs$core$async$state_machine__10258__auto____0 = (function (){
var statearr_12260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12260[(0)] = cljs$core$async$state_machine__10258__auto__);

(statearr_12260[(1)] = (1));

return statearr_12260;
});
var cljs$core$async$state_machine__10258__auto____1 = (function (state_12216){
while(true){
var ret_value__10259__auto__ = (function (){try{while(true){
var result__10260__auto__ = switch__10257__auto__.call(null,state_12216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10260__auto__;
}
break;
}
}catch (e12261){if((e12261 instanceof Object)){
var ex__10261__auto__ = e12261;
var statearr_12262_12297 = state_12216;
(statearr_12262_12297[(5)] = ex__10261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12298 = state_12216;
state_12216 = G__12298;
continue;
} else {
return ret_value__10259__auto__;
}
break;
}
});
cljs$core$async$state_machine__10258__auto__ = function(state_12216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10258__auto____1.call(this,state_12216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10258__auto____0;
cljs$core$async$state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10258__auto____1;
return cljs$core$async$state_machine__10258__auto__;
})()
;})(switch__10257__auto__,c__10369__auto___12268,mults,ensure_mult,p))
})();
var state__10371__auto__ = (function (){var statearr_12263 = f__10370__auto__.call(null);
(statearr_12263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10369__auto___12268);

return statearr_12263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10371__auto__);
});})(c__10369__auto___12268,mults,ensure_mult,p))
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
var args12299 = [];
var len__7214__auto___12302 = arguments.length;
var i__7215__auto___12303 = (0);
while(true){
if((i__7215__auto___12303 < len__7214__auto___12302)){
args12299.push((arguments[i__7215__auto___12303]));

var G__12304 = (i__7215__auto___12303 + (1));
i__7215__auto___12303 = G__12304;
continue;
} else {
}
break;
}

var G__12301 = args12299.length;
switch (G__12301) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12299.length)].join('')));

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
var args12306 = [];
var len__7214__auto___12309 = arguments.length;
var i__7215__auto___12310 = (0);
while(true){
if((i__7215__auto___12310 < len__7214__auto___12309)){
args12306.push((arguments[i__7215__auto___12310]));

var G__12311 = (i__7215__auto___12310 + (1));
i__7215__auto___12310 = G__12311;
continue;
} else {
}
break;
}

var G__12308 = args12306.length;
switch (G__12308) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12306.length)].join('')));

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
var args12313 = [];
var len__7214__auto___12384 = arguments.length;
var i__7215__auto___12385 = (0);
while(true){
if((i__7215__auto___12385 < len__7214__auto___12384)){
args12313.push((arguments[i__7215__auto___12385]));

var G__12386 = (i__7215__auto___12385 + (1));
i__7215__auto___12385 = G__12386;
continue;
} else {
}
break;
}

var G__12315 = args12313.length;
switch (G__12315) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12313.length)].join('')));

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
var c__10369__auto___12388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10369__auto___12388,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10370__auto__ = (function (){var switch__10257__auto__ = ((function (c__10369__auto___12388,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12354){
var state_val_12355 = (state_12354[(1)]);
if((state_val_12355 === (7))){
var state_12354__$1 = state_12354;
var statearr_12356_12389 = state_12354__$1;
(statearr_12356_12389[(2)] = null);

(statearr_12356_12389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (1))){
var state_12354__$1 = state_12354;
var statearr_12357_12390 = state_12354__$1;
(statearr_12357_12390[(2)] = null);

(statearr_12357_12390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (4))){
var inst_12318 = (state_12354[(7)]);
var inst_12320 = (inst_12318 < cnt);
var state_12354__$1 = state_12354;
if(cljs.core.truth_(inst_12320)){
var statearr_12358_12391 = state_12354__$1;
(statearr_12358_12391[(1)] = (6));

} else {
var statearr_12359_12392 = state_12354__$1;
(statearr_12359_12392[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (15))){
var inst_12350 = (state_12354[(2)]);
var state_12354__$1 = state_12354;
var statearr_12360_12393 = state_12354__$1;
(statearr_12360_12393[(2)] = inst_12350);

(statearr_12360_12393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (13))){
var inst_12343 = cljs.core.async.close_BANG_.call(null,out);
var state_12354__$1 = state_12354;
var statearr_12361_12394 = state_12354__$1;
(statearr_12361_12394[(2)] = inst_12343);

(statearr_12361_12394[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (6))){
var state_12354__$1 = state_12354;
var statearr_12362_12395 = state_12354__$1;
(statearr_12362_12395[(2)] = null);

(statearr_12362_12395[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (3))){
var inst_12352 = (state_12354[(2)]);
var state_12354__$1 = state_12354;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12354__$1,inst_12352);
} else {
if((state_val_12355 === (12))){
var inst_12340 = (state_12354[(8)]);
var inst_12340__$1 = (state_12354[(2)]);
var inst_12341 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12340__$1);
var state_12354__$1 = (function (){var statearr_12363 = state_12354;
(statearr_12363[(8)] = inst_12340__$1);

return statearr_12363;
})();
if(cljs.core.truth_(inst_12341)){
var statearr_12364_12396 = state_12354__$1;
(statearr_12364_12396[(1)] = (13));

} else {
var statearr_12365_12397 = state_12354__$1;
(statearr_12365_12397[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (2))){
var inst_12317 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12318 = (0);
var state_12354__$1 = (function (){var statearr_12366 = state_12354;
(statearr_12366[(9)] = inst_12317);

(statearr_12366[(7)] = inst_12318);

return statearr_12366;
})();
var statearr_12367_12398 = state_12354__$1;
(statearr_12367_12398[(2)] = null);

(statearr_12367_12398[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (11))){
var inst_12318 = (state_12354[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12354,(10),Object,null,(9));
var inst_12327 = chs__$1.call(null,inst_12318);
var inst_12328 = done.call(null,inst_12318);
var inst_12329 = cljs.core.async.take_BANG_.call(null,inst_12327,inst_12328);
var state_12354__$1 = state_12354;
var statearr_12368_12399 = state_12354__$1;
(statearr_12368_12399[(2)] = inst_12329);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12354__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (9))){
var inst_12318 = (state_12354[(7)]);
var inst_12331 = (state_12354[(2)]);
var inst_12332 = (inst_12318 + (1));
var inst_12318__$1 = inst_12332;
var state_12354__$1 = (function (){var statearr_12369 = state_12354;
(statearr_12369[(10)] = inst_12331);

(statearr_12369[(7)] = inst_12318__$1);

return statearr_12369;
})();
var statearr_12370_12400 = state_12354__$1;
(statearr_12370_12400[(2)] = null);

(statearr_12370_12400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (5))){
var inst_12338 = (state_12354[(2)]);
var state_12354__$1 = (function (){var statearr_12371 = state_12354;
(statearr_12371[(11)] = inst_12338);

return statearr_12371;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12354__$1,(12),dchan);
} else {
if((state_val_12355 === (14))){
var inst_12340 = (state_12354[(8)]);
var inst_12345 = cljs.core.apply.call(null,f,inst_12340);
var state_12354__$1 = state_12354;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12354__$1,(16),out,inst_12345);
} else {
if((state_val_12355 === (16))){
var inst_12347 = (state_12354[(2)]);
var state_12354__$1 = (function (){var statearr_12372 = state_12354;
(statearr_12372[(12)] = inst_12347);

return statearr_12372;
})();
var statearr_12373_12401 = state_12354__$1;
(statearr_12373_12401[(2)] = null);

(statearr_12373_12401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (10))){
var inst_12322 = (state_12354[(2)]);
var inst_12323 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12354__$1 = (function (){var statearr_12374 = state_12354;
(statearr_12374[(13)] = inst_12322);

return statearr_12374;
})();
var statearr_12375_12402 = state_12354__$1;
(statearr_12375_12402[(2)] = inst_12323);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12354__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12355 === (8))){
var inst_12336 = (state_12354[(2)]);
var state_12354__$1 = state_12354;
var statearr_12376_12403 = state_12354__$1;
(statearr_12376_12403[(2)] = inst_12336);

(statearr_12376_12403[(1)] = (5));


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
});})(c__10369__auto___12388,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10257__auto__,c__10369__auto___12388,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10258__auto__ = null;
var cljs$core$async$state_machine__10258__auto____0 = (function (){
var statearr_12380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12380[(0)] = cljs$core$async$state_machine__10258__auto__);

(statearr_12380[(1)] = (1));

return statearr_12380;
});
var cljs$core$async$state_machine__10258__auto____1 = (function (state_12354){
while(true){
var ret_value__10259__auto__ = (function (){try{while(true){
var result__10260__auto__ = switch__10257__auto__.call(null,state_12354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10260__auto__;
}
break;
}
}catch (e12381){if((e12381 instanceof Object)){
var ex__10261__auto__ = e12381;
var statearr_12382_12404 = state_12354;
(statearr_12382_12404[(5)] = ex__10261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12405 = state_12354;
state_12354 = G__12405;
continue;
} else {
return ret_value__10259__auto__;
}
break;
}
});
cljs$core$async$state_machine__10258__auto__ = function(state_12354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10258__auto____1.call(this,state_12354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10258__auto____0;
cljs$core$async$state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10258__auto____1;
return cljs$core$async$state_machine__10258__auto__;
})()
;})(switch__10257__auto__,c__10369__auto___12388,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10371__auto__ = (function (){var statearr_12383 = f__10370__auto__.call(null);
(statearr_12383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10369__auto___12388);

return statearr_12383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10371__auto__);
});})(c__10369__auto___12388,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args12407 = [];
var len__7214__auto___12463 = arguments.length;
var i__7215__auto___12464 = (0);
while(true){
if((i__7215__auto___12464 < len__7214__auto___12463)){
args12407.push((arguments[i__7215__auto___12464]));

var G__12465 = (i__7215__auto___12464 + (1));
i__7215__auto___12464 = G__12465;
continue;
} else {
}
break;
}

var G__12409 = args12407.length;
switch (G__12409) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12407.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10369__auto___12467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10369__auto___12467,out){
return (function (){
var f__10370__auto__ = (function (){var switch__10257__auto__ = ((function (c__10369__auto___12467,out){
return (function (state_12439){
var state_val_12440 = (state_12439[(1)]);
if((state_val_12440 === (7))){
var inst_12419 = (state_12439[(7)]);
var inst_12418 = (state_12439[(8)]);
var inst_12418__$1 = (state_12439[(2)]);
var inst_12419__$1 = cljs.core.nth.call(null,inst_12418__$1,(0),null);
var inst_12420 = cljs.core.nth.call(null,inst_12418__$1,(1),null);
var inst_12421 = (inst_12419__$1 == null);
var state_12439__$1 = (function (){var statearr_12441 = state_12439;
(statearr_12441[(7)] = inst_12419__$1);

(statearr_12441[(8)] = inst_12418__$1);

(statearr_12441[(9)] = inst_12420);

return statearr_12441;
})();
if(cljs.core.truth_(inst_12421)){
var statearr_12442_12468 = state_12439__$1;
(statearr_12442_12468[(1)] = (8));

} else {
var statearr_12443_12469 = state_12439__$1;
(statearr_12443_12469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12440 === (1))){
var inst_12410 = cljs.core.vec.call(null,chs);
var inst_12411 = inst_12410;
var state_12439__$1 = (function (){var statearr_12444 = state_12439;
(statearr_12444[(10)] = inst_12411);

return statearr_12444;
})();
var statearr_12445_12470 = state_12439__$1;
(statearr_12445_12470[(2)] = null);

(statearr_12445_12470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12440 === (4))){
var inst_12411 = (state_12439[(10)]);
var state_12439__$1 = state_12439;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12439__$1,(7),inst_12411);
} else {
if((state_val_12440 === (6))){
var inst_12435 = (state_12439[(2)]);
var state_12439__$1 = state_12439;
var statearr_12446_12471 = state_12439__$1;
(statearr_12446_12471[(2)] = inst_12435);

(statearr_12446_12471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12440 === (3))){
var inst_12437 = (state_12439[(2)]);
var state_12439__$1 = state_12439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12439__$1,inst_12437);
} else {
if((state_val_12440 === (2))){
var inst_12411 = (state_12439[(10)]);
var inst_12413 = cljs.core.count.call(null,inst_12411);
var inst_12414 = (inst_12413 > (0));
var state_12439__$1 = state_12439;
if(cljs.core.truth_(inst_12414)){
var statearr_12448_12472 = state_12439__$1;
(statearr_12448_12472[(1)] = (4));

} else {
var statearr_12449_12473 = state_12439__$1;
(statearr_12449_12473[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12440 === (11))){
var inst_12411 = (state_12439[(10)]);
var inst_12428 = (state_12439[(2)]);
var tmp12447 = inst_12411;
var inst_12411__$1 = tmp12447;
var state_12439__$1 = (function (){var statearr_12450 = state_12439;
(statearr_12450[(11)] = inst_12428);

(statearr_12450[(10)] = inst_12411__$1);

return statearr_12450;
})();
var statearr_12451_12474 = state_12439__$1;
(statearr_12451_12474[(2)] = null);

(statearr_12451_12474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12440 === (9))){
var inst_12419 = (state_12439[(7)]);
var state_12439__$1 = state_12439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12439__$1,(11),out,inst_12419);
} else {
if((state_val_12440 === (5))){
var inst_12433 = cljs.core.async.close_BANG_.call(null,out);
var state_12439__$1 = state_12439;
var statearr_12452_12475 = state_12439__$1;
(statearr_12452_12475[(2)] = inst_12433);

(statearr_12452_12475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12440 === (10))){
var inst_12431 = (state_12439[(2)]);
var state_12439__$1 = state_12439;
var statearr_12453_12476 = state_12439__$1;
(statearr_12453_12476[(2)] = inst_12431);

(statearr_12453_12476[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12440 === (8))){
var inst_12419 = (state_12439[(7)]);
var inst_12418 = (state_12439[(8)]);
var inst_12420 = (state_12439[(9)]);
var inst_12411 = (state_12439[(10)]);
var inst_12423 = (function (){var cs = inst_12411;
var vec__12416 = inst_12418;
var v = inst_12419;
var c = inst_12420;
return ((function (cs,vec__12416,v,c,inst_12419,inst_12418,inst_12420,inst_12411,state_val_12440,c__10369__auto___12467,out){
return (function (p1__12406_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12406_SHARP_);
});
;})(cs,vec__12416,v,c,inst_12419,inst_12418,inst_12420,inst_12411,state_val_12440,c__10369__auto___12467,out))
})();
var inst_12424 = cljs.core.filterv.call(null,inst_12423,inst_12411);
var inst_12411__$1 = inst_12424;
var state_12439__$1 = (function (){var statearr_12454 = state_12439;
(statearr_12454[(10)] = inst_12411__$1);

return statearr_12454;
})();
var statearr_12455_12477 = state_12439__$1;
(statearr_12455_12477[(2)] = null);

(statearr_12455_12477[(1)] = (2));


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
});})(c__10369__auto___12467,out))
;
return ((function (switch__10257__auto__,c__10369__auto___12467,out){
return (function() {
var cljs$core$async$state_machine__10258__auto__ = null;
var cljs$core$async$state_machine__10258__auto____0 = (function (){
var statearr_12459 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12459[(0)] = cljs$core$async$state_machine__10258__auto__);

(statearr_12459[(1)] = (1));

return statearr_12459;
});
var cljs$core$async$state_machine__10258__auto____1 = (function (state_12439){
while(true){
var ret_value__10259__auto__ = (function (){try{while(true){
var result__10260__auto__ = switch__10257__auto__.call(null,state_12439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10260__auto__;
}
break;
}
}catch (e12460){if((e12460 instanceof Object)){
var ex__10261__auto__ = e12460;
var statearr_12461_12478 = state_12439;
(statearr_12461_12478[(5)] = ex__10261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12479 = state_12439;
state_12439 = G__12479;
continue;
} else {
return ret_value__10259__auto__;
}
break;
}
});
cljs$core$async$state_machine__10258__auto__ = function(state_12439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10258__auto____1.call(this,state_12439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10258__auto____0;
cljs$core$async$state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10258__auto____1;
return cljs$core$async$state_machine__10258__auto__;
})()
;})(switch__10257__auto__,c__10369__auto___12467,out))
})();
var state__10371__auto__ = (function (){var statearr_12462 = f__10370__auto__.call(null);
(statearr_12462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10369__auto___12467);

return statearr_12462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10371__auto__);
});})(c__10369__auto___12467,out))
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
var args12480 = [];
var len__7214__auto___12529 = arguments.length;
var i__7215__auto___12530 = (0);
while(true){
if((i__7215__auto___12530 < len__7214__auto___12529)){
args12480.push((arguments[i__7215__auto___12530]));

var G__12531 = (i__7215__auto___12530 + (1));
i__7215__auto___12530 = G__12531;
continue;
} else {
}
break;
}

var G__12482 = args12480.length;
switch (G__12482) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12480.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10369__auto___12533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10369__auto___12533,out){
return (function (){
var f__10370__auto__ = (function (){var switch__10257__auto__ = ((function (c__10369__auto___12533,out){
return (function (state_12506){
var state_val_12507 = (state_12506[(1)]);
if((state_val_12507 === (7))){
var inst_12488 = (state_12506[(7)]);
var inst_12488__$1 = (state_12506[(2)]);
var inst_12489 = (inst_12488__$1 == null);
var inst_12490 = cljs.core.not.call(null,inst_12489);
var state_12506__$1 = (function (){var statearr_12508 = state_12506;
(statearr_12508[(7)] = inst_12488__$1);

return statearr_12508;
})();
if(inst_12490){
var statearr_12509_12534 = state_12506__$1;
(statearr_12509_12534[(1)] = (8));

} else {
var statearr_12510_12535 = state_12506__$1;
(statearr_12510_12535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (1))){
var inst_12483 = (0);
var state_12506__$1 = (function (){var statearr_12511 = state_12506;
(statearr_12511[(8)] = inst_12483);

return statearr_12511;
})();
var statearr_12512_12536 = state_12506__$1;
(statearr_12512_12536[(2)] = null);

(statearr_12512_12536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (4))){
var state_12506__$1 = state_12506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12506__$1,(7),ch);
} else {
if((state_val_12507 === (6))){
var inst_12501 = (state_12506[(2)]);
var state_12506__$1 = state_12506;
var statearr_12513_12537 = state_12506__$1;
(statearr_12513_12537[(2)] = inst_12501);

(statearr_12513_12537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (3))){
var inst_12503 = (state_12506[(2)]);
var inst_12504 = cljs.core.async.close_BANG_.call(null,out);
var state_12506__$1 = (function (){var statearr_12514 = state_12506;
(statearr_12514[(9)] = inst_12503);

return statearr_12514;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12506__$1,inst_12504);
} else {
if((state_val_12507 === (2))){
var inst_12483 = (state_12506[(8)]);
var inst_12485 = (inst_12483 < n);
var state_12506__$1 = state_12506;
if(cljs.core.truth_(inst_12485)){
var statearr_12515_12538 = state_12506__$1;
(statearr_12515_12538[(1)] = (4));

} else {
var statearr_12516_12539 = state_12506__$1;
(statearr_12516_12539[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (11))){
var inst_12483 = (state_12506[(8)]);
var inst_12493 = (state_12506[(2)]);
var inst_12494 = (inst_12483 + (1));
var inst_12483__$1 = inst_12494;
var state_12506__$1 = (function (){var statearr_12517 = state_12506;
(statearr_12517[(10)] = inst_12493);

(statearr_12517[(8)] = inst_12483__$1);

return statearr_12517;
})();
var statearr_12518_12540 = state_12506__$1;
(statearr_12518_12540[(2)] = null);

(statearr_12518_12540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (9))){
var state_12506__$1 = state_12506;
var statearr_12519_12541 = state_12506__$1;
(statearr_12519_12541[(2)] = null);

(statearr_12519_12541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (5))){
var state_12506__$1 = state_12506;
var statearr_12520_12542 = state_12506__$1;
(statearr_12520_12542[(2)] = null);

(statearr_12520_12542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (10))){
var inst_12498 = (state_12506[(2)]);
var state_12506__$1 = state_12506;
var statearr_12521_12543 = state_12506__$1;
(statearr_12521_12543[(2)] = inst_12498);

(statearr_12521_12543[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12507 === (8))){
var inst_12488 = (state_12506[(7)]);
var state_12506__$1 = state_12506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12506__$1,(11),out,inst_12488);
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
});})(c__10369__auto___12533,out))
;
return ((function (switch__10257__auto__,c__10369__auto___12533,out){
return (function() {
var cljs$core$async$state_machine__10258__auto__ = null;
var cljs$core$async$state_machine__10258__auto____0 = (function (){
var statearr_12525 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12525[(0)] = cljs$core$async$state_machine__10258__auto__);

(statearr_12525[(1)] = (1));

return statearr_12525;
});
var cljs$core$async$state_machine__10258__auto____1 = (function (state_12506){
while(true){
var ret_value__10259__auto__ = (function (){try{while(true){
var result__10260__auto__ = switch__10257__auto__.call(null,state_12506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10260__auto__;
}
break;
}
}catch (e12526){if((e12526 instanceof Object)){
var ex__10261__auto__ = e12526;
var statearr_12527_12544 = state_12506;
(statearr_12527_12544[(5)] = ex__10261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12545 = state_12506;
state_12506 = G__12545;
continue;
} else {
return ret_value__10259__auto__;
}
break;
}
});
cljs$core$async$state_machine__10258__auto__ = function(state_12506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10258__auto____1.call(this,state_12506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10258__auto____0;
cljs$core$async$state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10258__auto____1;
return cljs$core$async$state_machine__10258__auto__;
})()
;})(switch__10257__auto__,c__10369__auto___12533,out))
})();
var state__10371__auto__ = (function (){var statearr_12528 = f__10370__auto__.call(null);
(statearr_12528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10369__auto___12533);

return statearr_12528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10371__auto__);
});})(c__10369__auto___12533,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12553 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12553 = (function (map_LT_,f,ch,meta12554){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta12554 = meta12554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12555,meta12554__$1){
var self__ = this;
var _12555__$1 = this;
return (new cljs.core.async.t_cljs$core$async12553(self__.map_LT_,self__.f,self__.ch,meta12554__$1));
});

cljs.core.async.t_cljs$core$async12553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12555){
var self__ = this;
var _12555__$1 = this;
return self__.meta12554;
});

cljs.core.async.t_cljs$core$async12553.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async12553.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12553.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12553.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async12553.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async12556 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12556 = (function (map_LT_,f,ch,meta12554,_,fn1,meta12557){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta12554 = meta12554;
this._ = _;
this.fn1 = fn1;
this.meta12557 = meta12557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12558,meta12557__$1){
var self__ = this;
var _12558__$1 = this;
return (new cljs.core.async.t_cljs$core$async12556(self__.map_LT_,self__.f,self__.ch,self__.meta12554,self__._,self__.fn1,meta12557__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async12556.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12558){
var self__ = this;
var _12558__$1 = this;
return self__.meta12557;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12556.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12556.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12556.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12556.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__12546_SHARP_){
return f1.call(null,(((p1__12546_SHARP_ == null))?null:self__.f.call(null,p1__12546_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async12556.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12554","meta12554",88410704,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12553","cljs.core.async/t_cljs$core$async12553",386520504,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12557","meta12557",1228411040,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12556.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12556";

cljs.core.async.t_cljs$core$async12556.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async12556");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async12556 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12556(map_LT___$1,f__$1,ch__$1,meta12554__$1,___$2,fn1__$1,meta12557){
return (new cljs.core.async.t_cljs$core$async12556(map_LT___$1,f__$1,ch__$1,meta12554__$1,___$2,fn1__$1,meta12557));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async12556(self__.map_LT_,self__.f,self__.ch,self__.meta12554,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async12553.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async12553.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async12553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12554","meta12554",88410704,null)], null);
});

cljs.core.async.t_cljs$core$async12553.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12553.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12553";

cljs.core.async.t_cljs$core$async12553.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async12553");
});

cljs.core.async.__GT_t_cljs$core$async12553 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12553(map_LT___$1,f__$1,ch__$1,meta12554){
return (new cljs.core.async.t_cljs$core$async12553(map_LT___$1,f__$1,ch__$1,meta12554));
});

}

return (new cljs.core.async.t_cljs$core$async12553(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12562 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12562 = (function (map_GT_,f,ch,meta12563){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta12563 = meta12563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12564,meta12563__$1){
var self__ = this;
var _12564__$1 = this;
return (new cljs.core.async.t_cljs$core$async12562(self__.map_GT_,self__.f,self__.ch,meta12563__$1));
});

cljs.core.async.t_cljs$core$async12562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12564){
var self__ = this;
var _12564__$1 = this;
return self__.meta12563;
});

cljs.core.async.t_cljs$core$async12562.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async12562.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12562.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async12562.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12562.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async12562.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async12562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12563","meta12563",-866605544,null)], null);
});

cljs.core.async.t_cljs$core$async12562.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12562";

cljs.core.async.t_cljs$core$async12562.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async12562");
});

cljs.core.async.__GT_t_cljs$core$async12562 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12562(map_GT___$1,f__$1,ch__$1,meta12563){
return (new cljs.core.async.t_cljs$core$async12562(map_GT___$1,f__$1,ch__$1,meta12563));
});

}

return (new cljs.core.async.t_cljs$core$async12562(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async12568 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12568 = (function (filter_GT_,p,ch,meta12569){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta12569 = meta12569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12570,meta12569__$1){
var self__ = this;
var _12570__$1 = this;
return (new cljs.core.async.t_cljs$core$async12568(self__.filter_GT_,self__.p,self__.ch,meta12569__$1));
});

cljs.core.async.t_cljs$core$async12568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12570){
var self__ = this;
var _12570__$1 = this;
return self__.meta12569;
});

cljs.core.async.t_cljs$core$async12568.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async12568.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12568.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12568.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async12568.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12568.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async12568.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async12568.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12569","meta12569",728397350,null)], null);
});

cljs.core.async.t_cljs$core$async12568.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12568";

cljs.core.async.t_cljs$core$async12568.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async12568");
});

cljs.core.async.__GT_t_cljs$core$async12568 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12568(filter_GT___$1,p__$1,ch__$1,meta12569){
return (new cljs.core.async.t_cljs$core$async12568(filter_GT___$1,p__$1,ch__$1,meta12569));
});

}

return (new cljs.core.async.t_cljs$core$async12568(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args12571 = [];
var len__7214__auto___12615 = arguments.length;
var i__7215__auto___12616 = (0);
while(true){
if((i__7215__auto___12616 < len__7214__auto___12615)){
args12571.push((arguments[i__7215__auto___12616]));

var G__12617 = (i__7215__auto___12616 + (1));
i__7215__auto___12616 = G__12617;
continue;
} else {
}
break;
}

var G__12573 = args12571.length;
switch (G__12573) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12571.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10369__auto___12619 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10369__auto___12619,out){
return (function (){
var f__10370__auto__ = (function (){var switch__10257__auto__ = ((function (c__10369__auto___12619,out){
return (function (state_12594){
var state_val_12595 = (state_12594[(1)]);
if((state_val_12595 === (7))){
var inst_12590 = (state_12594[(2)]);
var state_12594__$1 = state_12594;
var statearr_12596_12620 = state_12594__$1;
(statearr_12596_12620[(2)] = inst_12590);

(statearr_12596_12620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12595 === (1))){
var state_12594__$1 = state_12594;
var statearr_12597_12621 = state_12594__$1;
(statearr_12597_12621[(2)] = null);

(statearr_12597_12621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12595 === (4))){
var inst_12576 = (state_12594[(7)]);
var inst_12576__$1 = (state_12594[(2)]);
var inst_12577 = (inst_12576__$1 == null);
var state_12594__$1 = (function (){var statearr_12598 = state_12594;
(statearr_12598[(7)] = inst_12576__$1);

return statearr_12598;
})();
if(cljs.core.truth_(inst_12577)){
var statearr_12599_12622 = state_12594__$1;
(statearr_12599_12622[(1)] = (5));

} else {
var statearr_12600_12623 = state_12594__$1;
(statearr_12600_12623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12595 === (6))){
var inst_12576 = (state_12594[(7)]);
var inst_12581 = p.call(null,inst_12576);
var state_12594__$1 = state_12594;
if(cljs.core.truth_(inst_12581)){
var statearr_12601_12624 = state_12594__$1;
(statearr_12601_12624[(1)] = (8));

} else {
var statearr_12602_12625 = state_12594__$1;
(statearr_12602_12625[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12595 === (3))){
var inst_12592 = (state_12594[(2)]);
var state_12594__$1 = state_12594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12594__$1,inst_12592);
} else {
if((state_val_12595 === (2))){
var state_12594__$1 = state_12594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12594__$1,(4),ch);
} else {
if((state_val_12595 === (11))){
var inst_12584 = (state_12594[(2)]);
var state_12594__$1 = state_12594;
var statearr_12603_12626 = state_12594__$1;
(statearr_12603_12626[(2)] = inst_12584);

(statearr_12603_12626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12595 === (9))){
var state_12594__$1 = state_12594;
var statearr_12604_12627 = state_12594__$1;
(statearr_12604_12627[(2)] = null);

(statearr_12604_12627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12595 === (5))){
var inst_12579 = cljs.core.async.close_BANG_.call(null,out);
var state_12594__$1 = state_12594;
var statearr_12605_12628 = state_12594__$1;
(statearr_12605_12628[(2)] = inst_12579);

(statearr_12605_12628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12595 === (10))){
var inst_12587 = (state_12594[(2)]);
var state_12594__$1 = (function (){var statearr_12606 = state_12594;
(statearr_12606[(8)] = inst_12587);

return statearr_12606;
})();
var statearr_12607_12629 = state_12594__$1;
(statearr_12607_12629[(2)] = null);

(statearr_12607_12629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12595 === (8))){
var inst_12576 = (state_12594[(7)]);
var state_12594__$1 = state_12594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12594__$1,(11),out,inst_12576);
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
});})(c__10369__auto___12619,out))
;
return ((function (switch__10257__auto__,c__10369__auto___12619,out){
return (function() {
var cljs$core$async$state_machine__10258__auto__ = null;
var cljs$core$async$state_machine__10258__auto____0 = (function (){
var statearr_12611 = [null,null,null,null,null,null,null,null,null];
(statearr_12611[(0)] = cljs$core$async$state_machine__10258__auto__);

(statearr_12611[(1)] = (1));

return statearr_12611;
});
var cljs$core$async$state_machine__10258__auto____1 = (function (state_12594){
while(true){
var ret_value__10259__auto__ = (function (){try{while(true){
var result__10260__auto__ = switch__10257__auto__.call(null,state_12594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10260__auto__;
}
break;
}
}catch (e12612){if((e12612 instanceof Object)){
var ex__10261__auto__ = e12612;
var statearr_12613_12630 = state_12594;
(statearr_12613_12630[(5)] = ex__10261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12631 = state_12594;
state_12594 = G__12631;
continue;
} else {
return ret_value__10259__auto__;
}
break;
}
});
cljs$core$async$state_machine__10258__auto__ = function(state_12594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10258__auto____1.call(this,state_12594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10258__auto____0;
cljs$core$async$state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10258__auto____1;
return cljs$core$async$state_machine__10258__auto__;
})()
;})(switch__10257__auto__,c__10369__auto___12619,out))
})();
var state__10371__auto__ = (function (){var statearr_12614 = f__10370__auto__.call(null);
(statearr_12614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10369__auto___12619);

return statearr_12614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10371__auto__);
});})(c__10369__auto___12619,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args12632 = [];
var len__7214__auto___12635 = arguments.length;
var i__7215__auto___12636 = (0);
while(true){
if((i__7215__auto___12636 < len__7214__auto___12635)){
args12632.push((arguments[i__7215__auto___12636]));

var G__12637 = (i__7215__auto___12636 + (1));
i__7215__auto___12636 = G__12637;
continue;
} else {
}
break;
}

var G__12634 = args12632.length;
switch (G__12634) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12632.length)].join('')));

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
var c__10369__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10369__auto__){
return (function (){
var f__10370__auto__ = (function (){var switch__10257__auto__ = ((function (c__10369__auto__){
return (function (state_12804){
var state_val_12805 = (state_12804[(1)]);
if((state_val_12805 === (7))){
var inst_12800 = (state_12804[(2)]);
var state_12804__$1 = state_12804;
var statearr_12806_12847 = state_12804__$1;
(statearr_12806_12847[(2)] = inst_12800);

(statearr_12806_12847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12805 === (20))){
var inst_12770 = (state_12804[(7)]);
var inst_12781 = (state_12804[(2)]);
var inst_12782 = cljs.core.next.call(null,inst_12770);
var inst_12756 = inst_12782;
var inst_12757 = null;
var inst_12758 = (0);
var inst_12759 = (0);
var state_12804__$1 = (function (){var statearr_12807 = state_12804;
(statearr_12807[(8)] = inst_12781);

(statearr_12807[(9)] = inst_12757);

(statearr_12807[(10)] = inst_12758);

(statearr_12807[(11)] = inst_12756);

(statearr_12807[(12)] = inst_12759);

return statearr_12807;
})();
var statearr_12808_12848 = state_12804__$1;
(statearr_12808_12848[(2)] = null);

(statearr_12808_12848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12805 === (1))){
var state_12804__$1 = state_12804;
var statearr_12809_12849 = state_12804__$1;
(statearr_12809_12849[(2)] = null);

(statearr_12809_12849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12805 === (4))){
var inst_12745 = (state_12804[(13)]);
var inst_12745__$1 = (state_12804[(2)]);
var inst_12746 = (inst_12745__$1 == null);
var state_12804__$1 = (function (){var statearr_12810 = state_12804;
(statearr_12810[(13)] = inst_12745__$1);

return statearr_12810;
})();
if(cljs.core.truth_(inst_12746)){
var statearr_12811_12850 = state_12804__$1;
(statearr_12811_12850[(1)] = (5));

} else {
var statearr_12812_12851 = state_12804__$1;
(statearr_12812_12851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12805 === (15))){
var state_12804__$1 = state_12804;
var statearr_12816_12852 = state_12804__$1;
(statearr_12816_12852[(2)] = null);

(statearr_12816_12852[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12805 === (21))){
var state_12804__$1 = state_12804;
var statearr_12817_12853 = state_12804__$1;
(statearr_12817_12853[(2)] = null);

(statearr_12817_12853[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12805 === (13))){
var inst_12757 = (state_12804[(9)]);
var inst_12758 = (state_12804[(10)]);
var inst_12756 = (state_12804[(11)]);
var inst_12759 = (state_12804[(12)]);
var inst_12766 = (state_12804[(2)]);
var inst_12767 = (inst_12759 + (1));
var tmp12813 = inst_12757;
var tmp12814 = inst_12758;
var tmp12815 = inst_12756;
var inst_12756__$1 = tmp12815;
var inst_12757__$1 = tmp12813;
var inst_12758__$1 = tmp12814;
var inst_12759__$1 = inst_12767;
var state_12804__$1 = (function (){var statearr_12818 = state_12804;
(statearr_12818[(9)] = inst_12757__$1);

(statearr_12818[(10)] = inst_12758__$1);

(statearr_12818[(14)] = inst_12766);

(statearr_12818[(11)] = inst_12756__$1);

(statearr_12818[(12)] = inst_12759__$1);

return statearr_12818;
})();
var statearr_12819_12854 = state_12804__$1;
(statearr_12819_12854[(2)] = null);

(statearr_12819_12854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12805 === (22))){
var state_12804__$1 = state_12804;
var statearr_12820_12855 = state_12804__$1;
(statearr_12820_12855[(2)] = null);

(statearr_12820_12855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12805 === (6))){
var inst_12745 = (state_12804[(13)]);
var inst_12754 = f.call(null,inst_12745);
var inst_12755 = cljs.core.seq.call(null,inst_12754);
var inst_12756 = inst_12755;
var inst_12757 = null;
var inst_12758 = (0);
var inst_12759 = (0);
var state_12804__$1 = (function (){var statearr_12821 = state_12804;
(statearr_12821[(9)] = inst_12757);

(statearr_12821[(10)] = inst_12758);

(statearr_12821[(11)] = inst_12756);

(statearr_12821[(12)] = inst_12759);

return statearr_12821;
})();
var statearr_12822_12856 = state_12804__$1;
(statearr_12822_12856[(2)] = null);

(statearr_12822_12856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12805 === (17))){
var inst_12770 = (state_12804[(7)]);
var inst_12774 = cljs.core.chunk_first.call(null,inst_12770);
var inst_12775 = cljs.core.chunk_rest.call(null,inst_12770);
var inst_12776 = cljs.core.count.call(null,inst_12774);
var inst_12756 = inst_12775;
var inst_12757 = inst_12774;
var inst_12758 = inst_12776;
var inst_12759 = (0);
var state_12804__$1 = (function (){var statearr_12823 = state_12804;
(statearr_12823[(9)] = inst_12757);

(statearr_12823[(10)] = inst_12758);

(statearr_12823[(11)] = inst_12756);

(statearr_12823[(12)] = inst_12759);

return statearr_12823;
})();
var statearr_12824_12857 = state_12804__$1;
(statearr_12824_12857[(2)] = null);

(statearr_12824_12857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12805 === (3))){
var inst_12802 = (state_12804[(2)]);
var state_12804__$1 = state_12804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12804__$1,inst_12802);
} else {
if((state_val_12805 === (12))){
var inst_12790 = (state_12804[(2)]);
var state_12804__$1 = state_12804;
var statearr_12825_12858 = state_12804__$1;
(statearr_12825_12858[(2)] = inst_12790);

(statearr_12825_12858[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12805 === (2))){
var state_12804__$1 = state_12804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12804__$1,(4),in$);
} else {
if((state_val_12805 === (23))){
var inst_12798 = (state_12804[(2)]);
var state_12804__$1 = state_12804;
var statearr_12826_12859 = state_12804__$1;
(statearr_12826_12859[(2)] = inst_12798);

(statearr_12826_12859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12805 === (19))){
var inst_12785 = (state_12804[(2)]);
var state_12804__$1 = state_12804;
var statearr_12827_12860 = state_12804__$1;
(statearr_12827_12860[(2)] = inst_12785);

(statearr_12827_12860[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12805 === (11))){
var inst_12770 = (state_12804[(7)]);
var inst_12756 = (state_12804[(11)]);
var inst_12770__$1 = cljs.core.seq.call(null,inst_12756);
var state_12804__$1 = (function (){var statearr_12828 = state_12804;
(statearr_12828[(7)] = inst_12770__$1);

return statearr_12828;
})();
if(inst_12770__$1){
var statearr_12829_12861 = state_12804__$1;
(statearr_12829_12861[(1)] = (14));

} else {
var statearr_12830_12862 = state_12804__$1;
(statearr_12830_12862[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12805 === (9))){
var inst_12792 = (state_12804[(2)]);
var inst_12793 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12804__$1 = (function (){var statearr_12831 = state_12804;
(statearr_12831[(15)] = inst_12792);

return statearr_12831;
})();
if(cljs.core.truth_(inst_12793)){
var statearr_12832_12863 = state_12804__$1;
(statearr_12832_12863[(1)] = (21));

} else {
var statearr_12833_12864 = state_12804__$1;
(statearr_12833_12864[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12805 === (5))){
var inst_12748 = cljs.core.async.close_BANG_.call(null,out);
var state_12804__$1 = state_12804;
var statearr_12834_12865 = state_12804__$1;
(statearr_12834_12865[(2)] = inst_12748);

(statearr_12834_12865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12805 === (14))){
var inst_12770 = (state_12804[(7)]);
var inst_12772 = cljs.core.chunked_seq_QMARK_.call(null,inst_12770);
var state_12804__$1 = state_12804;
if(inst_12772){
var statearr_12835_12866 = state_12804__$1;
(statearr_12835_12866[(1)] = (17));

} else {
var statearr_12836_12867 = state_12804__$1;
(statearr_12836_12867[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12805 === (16))){
var inst_12788 = (state_12804[(2)]);
var state_12804__$1 = state_12804;
var statearr_12837_12868 = state_12804__$1;
(statearr_12837_12868[(2)] = inst_12788);

(statearr_12837_12868[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12805 === (10))){
var inst_12757 = (state_12804[(9)]);
var inst_12759 = (state_12804[(12)]);
var inst_12764 = cljs.core._nth.call(null,inst_12757,inst_12759);
var state_12804__$1 = state_12804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12804__$1,(13),out,inst_12764);
} else {
if((state_val_12805 === (18))){
var inst_12770 = (state_12804[(7)]);
var inst_12779 = cljs.core.first.call(null,inst_12770);
var state_12804__$1 = state_12804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12804__$1,(20),out,inst_12779);
} else {
if((state_val_12805 === (8))){
var inst_12758 = (state_12804[(10)]);
var inst_12759 = (state_12804[(12)]);
var inst_12761 = (inst_12759 < inst_12758);
var inst_12762 = inst_12761;
var state_12804__$1 = state_12804;
if(cljs.core.truth_(inst_12762)){
var statearr_12838_12869 = state_12804__$1;
(statearr_12838_12869[(1)] = (10));

} else {
var statearr_12839_12870 = state_12804__$1;
(statearr_12839_12870[(1)] = (11));

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
});})(c__10369__auto__))
;
return ((function (switch__10257__auto__,c__10369__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10258__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10258__auto____0 = (function (){
var statearr_12843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12843[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10258__auto__);

(statearr_12843[(1)] = (1));

return statearr_12843;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10258__auto____1 = (function (state_12804){
while(true){
var ret_value__10259__auto__ = (function (){try{while(true){
var result__10260__auto__ = switch__10257__auto__.call(null,state_12804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10260__auto__;
}
break;
}
}catch (e12844){if((e12844 instanceof Object)){
var ex__10261__auto__ = e12844;
var statearr_12845_12871 = state_12804;
(statearr_12845_12871[(5)] = ex__10261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12872 = state_12804;
state_12804 = G__12872;
continue;
} else {
return ret_value__10259__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10258__auto__ = function(state_12804){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10258__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10258__auto____1.call(this,state_12804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10258__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10258__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10258__auto__;
})()
;})(switch__10257__auto__,c__10369__auto__))
})();
var state__10371__auto__ = (function (){var statearr_12846 = f__10370__auto__.call(null);
(statearr_12846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10369__auto__);

return statearr_12846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10371__auto__);
});})(c__10369__auto__))
);

return c__10369__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args12873 = [];
var len__7214__auto___12876 = arguments.length;
var i__7215__auto___12877 = (0);
while(true){
if((i__7215__auto___12877 < len__7214__auto___12876)){
args12873.push((arguments[i__7215__auto___12877]));

var G__12878 = (i__7215__auto___12877 + (1));
i__7215__auto___12877 = G__12878;
continue;
} else {
}
break;
}

var G__12875 = args12873.length;
switch (G__12875) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12873.length)].join('')));

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
var args12880 = [];
var len__7214__auto___12883 = arguments.length;
var i__7215__auto___12884 = (0);
while(true){
if((i__7215__auto___12884 < len__7214__auto___12883)){
args12880.push((arguments[i__7215__auto___12884]));

var G__12885 = (i__7215__auto___12884 + (1));
i__7215__auto___12884 = G__12885;
continue;
} else {
}
break;
}

var G__12882 = args12880.length;
switch (G__12882) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12880.length)].join('')));

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
var args12887 = [];
var len__7214__auto___12938 = arguments.length;
var i__7215__auto___12939 = (0);
while(true){
if((i__7215__auto___12939 < len__7214__auto___12938)){
args12887.push((arguments[i__7215__auto___12939]));

var G__12940 = (i__7215__auto___12939 + (1));
i__7215__auto___12939 = G__12940;
continue;
} else {
}
break;
}

var G__12889 = args12887.length;
switch (G__12889) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12887.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10369__auto___12942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10369__auto___12942,out){
return (function (){
var f__10370__auto__ = (function (){var switch__10257__auto__ = ((function (c__10369__auto___12942,out){
return (function (state_12913){
var state_val_12914 = (state_12913[(1)]);
if((state_val_12914 === (7))){
var inst_12908 = (state_12913[(2)]);
var state_12913__$1 = state_12913;
var statearr_12915_12943 = state_12913__$1;
(statearr_12915_12943[(2)] = inst_12908);

(statearr_12915_12943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (1))){
var inst_12890 = null;
var state_12913__$1 = (function (){var statearr_12916 = state_12913;
(statearr_12916[(7)] = inst_12890);

return statearr_12916;
})();
var statearr_12917_12944 = state_12913__$1;
(statearr_12917_12944[(2)] = null);

(statearr_12917_12944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (4))){
var inst_12893 = (state_12913[(8)]);
var inst_12893__$1 = (state_12913[(2)]);
var inst_12894 = (inst_12893__$1 == null);
var inst_12895 = cljs.core.not.call(null,inst_12894);
var state_12913__$1 = (function (){var statearr_12918 = state_12913;
(statearr_12918[(8)] = inst_12893__$1);

return statearr_12918;
})();
if(inst_12895){
var statearr_12919_12945 = state_12913__$1;
(statearr_12919_12945[(1)] = (5));

} else {
var statearr_12920_12946 = state_12913__$1;
(statearr_12920_12946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (6))){
var state_12913__$1 = state_12913;
var statearr_12921_12947 = state_12913__$1;
(statearr_12921_12947[(2)] = null);

(statearr_12921_12947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (3))){
var inst_12910 = (state_12913[(2)]);
var inst_12911 = cljs.core.async.close_BANG_.call(null,out);
var state_12913__$1 = (function (){var statearr_12922 = state_12913;
(statearr_12922[(9)] = inst_12910);

return statearr_12922;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12913__$1,inst_12911);
} else {
if((state_val_12914 === (2))){
var state_12913__$1 = state_12913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12913__$1,(4),ch);
} else {
if((state_val_12914 === (11))){
var inst_12893 = (state_12913[(8)]);
var inst_12902 = (state_12913[(2)]);
var inst_12890 = inst_12893;
var state_12913__$1 = (function (){var statearr_12923 = state_12913;
(statearr_12923[(7)] = inst_12890);

(statearr_12923[(10)] = inst_12902);

return statearr_12923;
})();
var statearr_12924_12948 = state_12913__$1;
(statearr_12924_12948[(2)] = null);

(statearr_12924_12948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (9))){
var inst_12893 = (state_12913[(8)]);
var state_12913__$1 = state_12913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12913__$1,(11),out,inst_12893);
} else {
if((state_val_12914 === (5))){
var inst_12893 = (state_12913[(8)]);
var inst_12890 = (state_12913[(7)]);
var inst_12897 = cljs.core._EQ_.call(null,inst_12893,inst_12890);
var state_12913__$1 = state_12913;
if(inst_12897){
var statearr_12926_12949 = state_12913__$1;
(statearr_12926_12949[(1)] = (8));

} else {
var statearr_12927_12950 = state_12913__$1;
(statearr_12927_12950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (10))){
var inst_12905 = (state_12913[(2)]);
var state_12913__$1 = state_12913;
var statearr_12928_12951 = state_12913__$1;
(statearr_12928_12951[(2)] = inst_12905);

(statearr_12928_12951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (8))){
var inst_12890 = (state_12913[(7)]);
var tmp12925 = inst_12890;
var inst_12890__$1 = tmp12925;
var state_12913__$1 = (function (){var statearr_12929 = state_12913;
(statearr_12929[(7)] = inst_12890__$1);

return statearr_12929;
})();
var statearr_12930_12952 = state_12913__$1;
(statearr_12930_12952[(2)] = null);

(statearr_12930_12952[(1)] = (2));


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
});})(c__10369__auto___12942,out))
;
return ((function (switch__10257__auto__,c__10369__auto___12942,out){
return (function() {
var cljs$core$async$state_machine__10258__auto__ = null;
var cljs$core$async$state_machine__10258__auto____0 = (function (){
var statearr_12934 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12934[(0)] = cljs$core$async$state_machine__10258__auto__);

(statearr_12934[(1)] = (1));

return statearr_12934;
});
var cljs$core$async$state_machine__10258__auto____1 = (function (state_12913){
while(true){
var ret_value__10259__auto__ = (function (){try{while(true){
var result__10260__auto__ = switch__10257__auto__.call(null,state_12913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10260__auto__;
}
break;
}
}catch (e12935){if((e12935 instanceof Object)){
var ex__10261__auto__ = e12935;
var statearr_12936_12953 = state_12913;
(statearr_12936_12953[(5)] = ex__10261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12954 = state_12913;
state_12913 = G__12954;
continue;
} else {
return ret_value__10259__auto__;
}
break;
}
});
cljs$core$async$state_machine__10258__auto__ = function(state_12913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10258__auto____1.call(this,state_12913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10258__auto____0;
cljs$core$async$state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10258__auto____1;
return cljs$core$async$state_machine__10258__auto__;
})()
;})(switch__10257__auto__,c__10369__auto___12942,out))
})();
var state__10371__auto__ = (function (){var statearr_12937 = f__10370__auto__.call(null);
(statearr_12937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10369__auto___12942);

return statearr_12937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10371__auto__);
});})(c__10369__auto___12942,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args12955 = [];
var len__7214__auto___13025 = arguments.length;
var i__7215__auto___13026 = (0);
while(true){
if((i__7215__auto___13026 < len__7214__auto___13025)){
args12955.push((arguments[i__7215__auto___13026]));

var G__13027 = (i__7215__auto___13026 + (1));
i__7215__auto___13026 = G__13027;
continue;
} else {
}
break;
}

var G__12957 = args12955.length;
switch (G__12957) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12955.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10369__auto___13029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10369__auto___13029,out){
return (function (){
var f__10370__auto__ = (function (){var switch__10257__auto__ = ((function (c__10369__auto___13029,out){
return (function (state_12995){
var state_val_12996 = (state_12995[(1)]);
if((state_val_12996 === (7))){
var inst_12991 = (state_12995[(2)]);
var state_12995__$1 = state_12995;
var statearr_12997_13030 = state_12995__$1;
(statearr_12997_13030[(2)] = inst_12991);

(statearr_12997_13030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (1))){
var inst_12958 = (new Array(n));
var inst_12959 = inst_12958;
var inst_12960 = (0);
var state_12995__$1 = (function (){var statearr_12998 = state_12995;
(statearr_12998[(7)] = inst_12960);

(statearr_12998[(8)] = inst_12959);

return statearr_12998;
})();
var statearr_12999_13031 = state_12995__$1;
(statearr_12999_13031[(2)] = null);

(statearr_12999_13031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (4))){
var inst_12963 = (state_12995[(9)]);
var inst_12963__$1 = (state_12995[(2)]);
var inst_12964 = (inst_12963__$1 == null);
var inst_12965 = cljs.core.not.call(null,inst_12964);
var state_12995__$1 = (function (){var statearr_13000 = state_12995;
(statearr_13000[(9)] = inst_12963__$1);

return statearr_13000;
})();
if(inst_12965){
var statearr_13001_13032 = state_12995__$1;
(statearr_13001_13032[(1)] = (5));

} else {
var statearr_13002_13033 = state_12995__$1;
(statearr_13002_13033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (15))){
var inst_12985 = (state_12995[(2)]);
var state_12995__$1 = state_12995;
var statearr_13003_13034 = state_12995__$1;
(statearr_13003_13034[(2)] = inst_12985);

(statearr_13003_13034[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (13))){
var state_12995__$1 = state_12995;
var statearr_13004_13035 = state_12995__$1;
(statearr_13004_13035[(2)] = null);

(statearr_13004_13035[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (6))){
var inst_12960 = (state_12995[(7)]);
var inst_12981 = (inst_12960 > (0));
var state_12995__$1 = state_12995;
if(cljs.core.truth_(inst_12981)){
var statearr_13005_13036 = state_12995__$1;
(statearr_13005_13036[(1)] = (12));

} else {
var statearr_13006_13037 = state_12995__$1;
(statearr_13006_13037[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (3))){
var inst_12993 = (state_12995[(2)]);
var state_12995__$1 = state_12995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12995__$1,inst_12993);
} else {
if((state_val_12996 === (12))){
var inst_12959 = (state_12995[(8)]);
var inst_12983 = cljs.core.vec.call(null,inst_12959);
var state_12995__$1 = state_12995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12995__$1,(15),out,inst_12983);
} else {
if((state_val_12996 === (2))){
var state_12995__$1 = state_12995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12995__$1,(4),ch);
} else {
if((state_val_12996 === (11))){
var inst_12975 = (state_12995[(2)]);
var inst_12976 = (new Array(n));
var inst_12959 = inst_12976;
var inst_12960 = (0);
var state_12995__$1 = (function (){var statearr_13007 = state_12995;
(statearr_13007[(7)] = inst_12960);

(statearr_13007[(8)] = inst_12959);

(statearr_13007[(10)] = inst_12975);

return statearr_13007;
})();
var statearr_13008_13038 = state_12995__$1;
(statearr_13008_13038[(2)] = null);

(statearr_13008_13038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (9))){
var inst_12959 = (state_12995[(8)]);
var inst_12973 = cljs.core.vec.call(null,inst_12959);
var state_12995__$1 = state_12995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12995__$1,(11),out,inst_12973);
} else {
if((state_val_12996 === (5))){
var inst_12960 = (state_12995[(7)]);
var inst_12963 = (state_12995[(9)]);
var inst_12959 = (state_12995[(8)]);
var inst_12968 = (state_12995[(11)]);
var inst_12967 = (inst_12959[inst_12960] = inst_12963);
var inst_12968__$1 = (inst_12960 + (1));
var inst_12969 = (inst_12968__$1 < n);
var state_12995__$1 = (function (){var statearr_13009 = state_12995;
(statearr_13009[(12)] = inst_12967);

(statearr_13009[(11)] = inst_12968__$1);

return statearr_13009;
})();
if(cljs.core.truth_(inst_12969)){
var statearr_13010_13039 = state_12995__$1;
(statearr_13010_13039[(1)] = (8));

} else {
var statearr_13011_13040 = state_12995__$1;
(statearr_13011_13040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (14))){
var inst_12988 = (state_12995[(2)]);
var inst_12989 = cljs.core.async.close_BANG_.call(null,out);
var state_12995__$1 = (function (){var statearr_13013 = state_12995;
(statearr_13013[(13)] = inst_12988);

return statearr_13013;
})();
var statearr_13014_13041 = state_12995__$1;
(statearr_13014_13041[(2)] = inst_12989);

(statearr_13014_13041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (10))){
var inst_12979 = (state_12995[(2)]);
var state_12995__$1 = state_12995;
var statearr_13015_13042 = state_12995__$1;
(statearr_13015_13042[(2)] = inst_12979);

(statearr_13015_13042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (8))){
var inst_12959 = (state_12995[(8)]);
var inst_12968 = (state_12995[(11)]);
var tmp13012 = inst_12959;
var inst_12959__$1 = tmp13012;
var inst_12960 = inst_12968;
var state_12995__$1 = (function (){var statearr_13016 = state_12995;
(statearr_13016[(7)] = inst_12960);

(statearr_13016[(8)] = inst_12959__$1);

return statearr_13016;
})();
var statearr_13017_13043 = state_12995__$1;
(statearr_13017_13043[(2)] = null);

(statearr_13017_13043[(1)] = (2));


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
});})(c__10369__auto___13029,out))
;
return ((function (switch__10257__auto__,c__10369__auto___13029,out){
return (function() {
var cljs$core$async$state_machine__10258__auto__ = null;
var cljs$core$async$state_machine__10258__auto____0 = (function (){
var statearr_13021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13021[(0)] = cljs$core$async$state_machine__10258__auto__);

(statearr_13021[(1)] = (1));

return statearr_13021;
});
var cljs$core$async$state_machine__10258__auto____1 = (function (state_12995){
while(true){
var ret_value__10259__auto__ = (function (){try{while(true){
var result__10260__auto__ = switch__10257__auto__.call(null,state_12995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10260__auto__;
}
break;
}
}catch (e13022){if((e13022 instanceof Object)){
var ex__10261__auto__ = e13022;
var statearr_13023_13044 = state_12995;
(statearr_13023_13044[(5)] = ex__10261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13045 = state_12995;
state_12995 = G__13045;
continue;
} else {
return ret_value__10259__auto__;
}
break;
}
});
cljs$core$async$state_machine__10258__auto__ = function(state_12995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10258__auto____1.call(this,state_12995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10258__auto____0;
cljs$core$async$state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10258__auto____1;
return cljs$core$async$state_machine__10258__auto__;
})()
;})(switch__10257__auto__,c__10369__auto___13029,out))
})();
var state__10371__auto__ = (function (){var statearr_13024 = f__10370__auto__.call(null);
(statearr_13024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10369__auto___13029);

return statearr_13024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10371__auto__);
});})(c__10369__auto___13029,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args13046 = [];
var len__7214__auto___13120 = arguments.length;
var i__7215__auto___13121 = (0);
while(true){
if((i__7215__auto___13121 < len__7214__auto___13120)){
args13046.push((arguments[i__7215__auto___13121]));

var G__13122 = (i__7215__auto___13121 + (1));
i__7215__auto___13121 = G__13122;
continue;
} else {
}
break;
}

var G__13048 = args13046.length;
switch (G__13048) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13046.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10369__auto___13124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10369__auto___13124,out){
return (function (){
var f__10370__auto__ = (function (){var switch__10257__auto__ = ((function (c__10369__auto___13124,out){
return (function (state_13090){
var state_val_13091 = (state_13090[(1)]);
if((state_val_13091 === (7))){
var inst_13086 = (state_13090[(2)]);
var state_13090__$1 = state_13090;
var statearr_13092_13125 = state_13090__$1;
(statearr_13092_13125[(2)] = inst_13086);

(statearr_13092_13125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13091 === (1))){
var inst_13049 = [];
var inst_13050 = inst_13049;
var inst_13051 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13090__$1 = (function (){var statearr_13093 = state_13090;
(statearr_13093[(7)] = inst_13051);

(statearr_13093[(8)] = inst_13050);

return statearr_13093;
})();
var statearr_13094_13126 = state_13090__$1;
(statearr_13094_13126[(2)] = null);

(statearr_13094_13126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13091 === (4))){
var inst_13054 = (state_13090[(9)]);
var inst_13054__$1 = (state_13090[(2)]);
var inst_13055 = (inst_13054__$1 == null);
var inst_13056 = cljs.core.not.call(null,inst_13055);
var state_13090__$1 = (function (){var statearr_13095 = state_13090;
(statearr_13095[(9)] = inst_13054__$1);

return statearr_13095;
})();
if(inst_13056){
var statearr_13096_13127 = state_13090__$1;
(statearr_13096_13127[(1)] = (5));

} else {
var statearr_13097_13128 = state_13090__$1;
(statearr_13097_13128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13091 === (15))){
var inst_13080 = (state_13090[(2)]);
var state_13090__$1 = state_13090;
var statearr_13098_13129 = state_13090__$1;
(statearr_13098_13129[(2)] = inst_13080);

(statearr_13098_13129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13091 === (13))){
var state_13090__$1 = state_13090;
var statearr_13099_13130 = state_13090__$1;
(statearr_13099_13130[(2)] = null);

(statearr_13099_13130[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13091 === (6))){
var inst_13050 = (state_13090[(8)]);
var inst_13075 = inst_13050.length;
var inst_13076 = (inst_13075 > (0));
var state_13090__$1 = state_13090;
if(cljs.core.truth_(inst_13076)){
var statearr_13100_13131 = state_13090__$1;
(statearr_13100_13131[(1)] = (12));

} else {
var statearr_13101_13132 = state_13090__$1;
(statearr_13101_13132[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13091 === (3))){
var inst_13088 = (state_13090[(2)]);
var state_13090__$1 = state_13090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13090__$1,inst_13088);
} else {
if((state_val_13091 === (12))){
var inst_13050 = (state_13090[(8)]);
var inst_13078 = cljs.core.vec.call(null,inst_13050);
var state_13090__$1 = state_13090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13090__$1,(15),out,inst_13078);
} else {
if((state_val_13091 === (2))){
var state_13090__$1 = state_13090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13090__$1,(4),ch);
} else {
if((state_val_13091 === (11))){
var inst_13058 = (state_13090[(10)]);
var inst_13054 = (state_13090[(9)]);
var inst_13068 = (state_13090[(2)]);
var inst_13069 = [];
var inst_13070 = inst_13069.push(inst_13054);
var inst_13050 = inst_13069;
var inst_13051 = inst_13058;
var state_13090__$1 = (function (){var statearr_13102 = state_13090;
(statearr_13102[(7)] = inst_13051);

(statearr_13102[(8)] = inst_13050);

(statearr_13102[(11)] = inst_13068);

(statearr_13102[(12)] = inst_13070);

return statearr_13102;
})();
var statearr_13103_13133 = state_13090__$1;
(statearr_13103_13133[(2)] = null);

(statearr_13103_13133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13091 === (9))){
var inst_13050 = (state_13090[(8)]);
var inst_13066 = cljs.core.vec.call(null,inst_13050);
var state_13090__$1 = state_13090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13090__$1,(11),out,inst_13066);
} else {
if((state_val_13091 === (5))){
var inst_13058 = (state_13090[(10)]);
var inst_13051 = (state_13090[(7)]);
var inst_13054 = (state_13090[(9)]);
var inst_13058__$1 = f.call(null,inst_13054);
var inst_13059 = cljs.core._EQ_.call(null,inst_13058__$1,inst_13051);
var inst_13060 = cljs.core.keyword_identical_QMARK_.call(null,inst_13051,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13061 = (inst_13059) || (inst_13060);
var state_13090__$1 = (function (){var statearr_13104 = state_13090;
(statearr_13104[(10)] = inst_13058__$1);

return statearr_13104;
})();
if(cljs.core.truth_(inst_13061)){
var statearr_13105_13134 = state_13090__$1;
(statearr_13105_13134[(1)] = (8));

} else {
var statearr_13106_13135 = state_13090__$1;
(statearr_13106_13135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13091 === (14))){
var inst_13083 = (state_13090[(2)]);
var inst_13084 = cljs.core.async.close_BANG_.call(null,out);
var state_13090__$1 = (function (){var statearr_13108 = state_13090;
(statearr_13108[(13)] = inst_13083);

return statearr_13108;
})();
var statearr_13109_13136 = state_13090__$1;
(statearr_13109_13136[(2)] = inst_13084);

(statearr_13109_13136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13091 === (10))){
var inst_13073 = (state_13090[(2)]);
var state_13090__$1 = state_13090;
var statearr_13110_13137 = state_13090__$1;
(statearr_13110_13137[(2)] = inst_13073);

(statearr_13110_13137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13091 === (8))){
var inst_13058 = (state_13090[(10)]);
var inst_13050 = (state_13090[(8)]);
var inst_13054 = (state_13090[(9)]);
var inst_13063 = inst_13050.push(inst_13054);
var tmp13107 = inst_13050;
var inst_13050__$1 = tmp13107;
var inst_13051 = inst_13058;
var state_13090__$1 = (function (){var statearr_13111 = state_13090;
(statearr_13111[(7)] = inst_13051);

(statearr_13111[(8)] = inst_13050__$1);

(statearr_13111[(14)] = inst_13063);

return statearr_13111;
})();
var statearr_13112_13138 = state_13090__$1;
(statearr_13112_13138[(2)] = null);

(statearr_13112_13138[(1)] = (2));


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
});})(c__10369__auto___13124,out))
;
return ((function (switch__10257__auto__,c__10369__auto___13124,out){
return (function() {
var cljs$core$async$state_machine__10258__auto__ = null;
var cljs$core$async$state_machine__10258__auto____0 = (function (){
var statearr_13116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13116[(0)] = cljs$core$async$state_machine__10258__auto__);

(statearr_13116[(1)] = (1));

return statearr_13116;
});
var cljs$core$async$state_machine__10258__auto____1 = (function (state_13090){
while(true){
var ret_value__10259__auto__ = (function (){try{while(true){
var result__10260__auto__ = switch__10257__auto__.call(null,state_13090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10260__auto__;
}
break;
}
}catch (e13117){if((e13117 instanceof Object)){
var ex__10261__auto__ = e13117;
var statearr_13118_13139 = state_13090;
(statearr_13118_13139[(5)] = ex__10261__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13140 = state_13090;
state_13090 = G__13140;
continue;
} else {
return ret_value__10259__auto__;
}
break;
}
});
cljs$core$async$state_machine__10258__auto__ = function(state_13090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10258__auto____1.call(this,state_13090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10258__auto____0;
cljs$core$async$state_machine__10258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10258__auto____1;
return cljs$core$async$state_machine__10258__auto__;
})()
;})(switch__10257__auto__,c__10369__auto___13124,out))
})();
var state__10371__auto__ = (function (){var statearr_13119 = f__10370__auto__.call(null);
(statearr_13119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10369__auto___13124);

return statearr_13119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10371__auto__);
});})(c__10369__auto___13124,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
