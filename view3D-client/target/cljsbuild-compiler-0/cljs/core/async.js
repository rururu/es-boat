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
var args10492 = [];
var len__7214__auto___10498 = arguments.length;
var i__7215__auto___10499 = (0);
while(true){
if((i__7215__auto___10499 < len__7214__auto___10498)){
args10492.push((arguments[i__7215__auto___10499]));

var G__10500 = (i__7215__auto___10499 + (1));
i__7215__auto___10499 = G__10500;
continue;
} else {
}
break;
}

var G__10494 = args10492.length;
switch (G__10494) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10492.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async10495 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10495 = (function (f,blockable,meta10496){
this.f = f;
this.blockable = blockable;
this.meta10496 = meta10496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10497,meta10496__$1){
var self__ = this;
var _10497__$1 = this;
return (new cljs.core.async.t_cljs$core$async10495(self__.f,self__.blockable,meta10496__$1));
});

cljs.core.async.t_cljs$core$async10495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10497){
var self__ = this;
var _10497__$1 = this;
return self__.meta10496;
});

cljs.core.async.t_cljs$core$async10495.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10495.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10495.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async10495.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async10495.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10496","meta10496",1912239076,null)], null);
});

cljs.core.async.t_cljs$core$async10495.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10495.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10495";

cljs.core.async.t_cljs$core$async10495.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10495");
});

cljs.core.async.__GT_t_cljs$core$async10495 = (function cljs$core$async$__GT_t_cljs$core$async10495(f__$1,blockable__$1,meta10496){
return (new cljs.core.async.t_cljs$core$async10495(f__$1,blockable__$1,meta10496));
});

}

return (new cljs.core.async.t_cljs$core$async10495(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args10504 = [];
var len__7214__auto___10507 = arguments.length;
var i__7215__auto___10508 = (0);
while(true){
if((i__7215__auto___10508 < len__7214__auto___10507)){
args10504.push((arguments[i__7215__auto___10508]));

var G__10509 = (i__7215__auto___10508 + (1));
i__7215__auto___10508 = G__10509;
continue;
} else {
}
break;
}

var G__10506 = args10504.length;
switch (G__10506) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10504.length)].join('')));

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
var args10511 = [];
var len__7214__auto___10514 = arguments.length;
var i__7215__auto___10515 = (0);
while(true){
if((i__7215__auto___10515 < len__7214__auto___10514)){
args10511.push((arguments[i__7215__auto___10515]));

var G__10516 = (i__7215__auto___10515 + (1));
i__7215__auto___10515 = G__10516;
continue;
} else {
}
break;
}

var G__10513 = args10511.length;
switch (G__10513) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10511.length)].join('')));

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
var args10518 = [];
var len__7214__auto___10521 = arguments.length;
var i__7215__auto___10522 = (0);
while(true){
if((i__7215__auto___10522 < len__7214__auto___10521)){
args10518.push((arguments[i__7215__auto___10522]));

var G__10523 = (i__7215__auto___10522 + (1));
i__7215__auto___10522 = G__10523;
continue;
} else {
}
break;
}

var G__10520 = args10518.length;
switch (G__10520) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10518.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_10525 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_10525);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_10525,ret){
return (function (){
return fn1.call(null,val_10525);
});})(val_10525,ret))
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
var args10526 = [];
var len__7214__auto___10529 = arguments.length;
var i__7215__auto___10530 = (0);
while(true){
if((i__7215__auto___10530 < len__7214__auto___10529)){
args10526.push((arguments[i__7215__auto___10530]));

var G__10531 = (i__7215__auto___10530 + (1));
i__7215__auto___10530 = G__10531;
continue;
} else {
}
break;
}

var G__10528 = args10526.length;
switch (G__10528) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10526.length)].join('')));

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
var n__7059__auto___10533 = n;
var x_10534 = (0);
while(true){
if((x_10534 < n__7059__auto___10533)){
(a[x_10534] = (0));

var G__10535 = (x_10534 + (1));
x_10534 = G__10535;
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

var G__10536 = (i + (1));
i = G__10536;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async10540 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10540 = (function (alt_flag,flag,meta10541){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta10541 = meta10541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10542,meta10541__$1){
var self__ = this;
var _10542__$1 = this;
return (new cljs.core.async.t_cljs$core$async10540(self__.alt_flag,self__.flag,meta10541__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async10540.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10542){
var self__ = this;
var _10542__$1 = this;
return self__.meta10541;
});})(flag))
;

cljs.core.async.t_cljs$core$async10540.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10540.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async10540.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10540.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10540.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10541","meta10541",-1475444388,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async10540.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10540";

cljs.core.async.t_cljs$core$async10540.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10540");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async10540 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10540(alt_flag__$1,flag__$1,meta10541){
return (new cljs.core.async.t_cljs$core$async10540(alt_flag__$1,flag__$1,meta10541));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async10540(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async10546 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10546 = (function (alt_handler,flag,cb,meta10547){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta10547 = meta10547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10548,meta10547__$1){
var self__ = this;
var _10548__$1 = this;
return (new cljs.core.async.t_cljs$core$async10546(self__.alt_handler,self__.flag,self__.cb,meta10547__$1));
});

cljs.core.async.t_cljs$core$async10546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10548){
var self__ = this;
var _10548__$1 = this;
return self__.meta10547;
});

cljs.core.async.t_cljs$core$async10546.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10546.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async10546.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10546.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async10546.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10547","meta10547",-331751593,null)], null);
});

cljs.core.async.t_cljs$core$async10546.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10546.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10546";

cljs.core.async.t_cljs$core$async10546.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10546");
});

cljs.core.async.__GT_t_cljs$core$async10546 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10546(alt_handler__$1,flag__$1,cb__$1,meta10547){
return (new cljs.core.async.t_cljs$core$async10546(alt_handler__$1,flag__$1,cb__$1,meta10547));
});

}

return (new cljs.core.async.t_cljs$core$async10546(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__10549_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10549_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10550_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10550_SHARP_,port], null));
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
var G__10551 = (i + (1));
i = G__10551;
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
var len__7214__auto___10557 = arguments.length;
var i__7215__auto___10558 = (0);
while(true){
if((i__7215__auto___10558 < len__7214__auto___10557)){
args__7221__auto__.push((arguments[i__7215__auto___10558]));

var G__10559 = (i__7215__auto___10558 + (1));
i__7215__auto___10558 = G__10559;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10554){
var map__10555 = p__10554;
var map__10555__$1 = ((((!((map__10555 == null)))?((((map__10555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10555):map__10555);
var opts = map__10555__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10552){
var G__10553 = cljs.core.first.call(null,seq10552);
var seq10552__$1 = cljs.core.next.call(null,seq10552);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10553,seq10552__$1);
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
var args10560 = [];
var len__7214__auto___10610 = arguments.length;
var i__7215__auto___10611 = (0);
while(true){
if((i__7215__auto___10611 < len__7214__auto___10610)){
args10560.push((arguments[i__7215__auto___10611]));

var G__10612 = (i__7215__auto___10611 + (1));
i__7215__auto___10611 = G__10612;
continue;
} else {
}
break;
}

var G__10562 = args10560.length;
switch (G__10562) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10560.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10447__auto___10614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10447__auto___10614){
return (function (){
var f__10448__auto__ = (function (){var switch__10324__auto__ = ((function (c__10447__auto___10614){
return (function (state_10586){
var state_val_10587 = (state_10586[(1)]);
if((state_val_10587 === (7))){
var inst_10582 = (state_10586[(2)]);
var state_10586__$1 = state_10586;
var statearr_10588_10615 = state_10586__$1;
(statearr_10588_10615[(2)] = inst_10582);

(statearr_10588_10615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10587 === (1))){
var state_10586__$1 = state_10586;
var statearr_10589_10616 = state_10586__$1;
(statearr_10589_10616[(2)] = null);

(statearr_10589_10616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10587 === (4))){
var inst_10565 = (state_10586[(7)]);
var inst_10565__$1 = (state_10586[(2)]);
var inst_10566 = (inst_10565__$1 == null);
var state_10586__$1 = (function (){var statearr_10590 = state_10586;
(statearr_10590[(7)] = inst_10565__$1);

return statearr_10590;
})();
if(cljs.core.truth_(inst_10566)){
var statearr_10591_10617 = state_10586__$1;
(statearr_10591_10617[(1)] = (5));

} else {
var statearr_10592_10618 = state_10586__$1;
(statearr_10592_10618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10587 === (13))){
var state_10586__$1 = state_10586;
var statearr_10593_10619 = state_10586__$1;
(statearr_10593_10619[(2)] = null);

(statearr_10593_10619[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10587 === (6))){
var inst_10565 = (state_10586[(7)]);
var state_10586__$1 = state_10586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10586__$1,(11),to,inst_10565);
} else {
if((state_val_10587 === (3))){
var inst_10584 = (state_10586[(2)]);
var state_10586__$1 = state_10586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10586__$1,inst_10584);
} else {
if((state_val_10587 === (12))){
var state_10586__$1 = state_10586;
var statearr_10594_10620 = state_10586__$1;
(statearr_10594_10620[(2)] = null);

(statearr_10594_10620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10587 === (2))){
var state_10586__$1 = state_10586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10586__$1,(4),from);
} else {
if((state_val_10587 === (11))){
var inst_10575 = (state_10586[(2)]);
var state_10586__$1 = state_10586;
if(cljs.core.truth_(inst_10575)){
var statearr_10595_10621 = state_10586__$1;
(statearr_10595_10621[(1)] = (12));

} else {
var statearr_10596_10622 = state_10586__$1;
(statearr_10596_10622[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10587 === (9))){
var state_10586__$1 = state_10586;
var statearr_10597_10623 = state_10586__$1;
(statearr_10597_10623[(2)] = null);

(statearr_10597_10623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10587 === (5))){
var state_10586__$1 = state_10586;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10598_10624 = state_10586__$1;
(statearr_10598_10624[(1)] = (8));

} else {
var statearr_10599_10625 = state_10586__$1;
(statearr_10599_10625[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10587 === (14))){
var inst_10580 = (state_10586[(2)]);
var state_10586__$1 = state_10586;
var statearr_10600_10626 = state_10586__$1;
(statearr_10600_10626[(2)] = inst_10580);

(statearr_10600_10626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10587 === (10))){
var inst_10572 = (state_10586[(2)]);
var state_10586__$1 = state_10586;
var statearr_10601_10627 = state_10586__$1;
(statearr_10601_10627[(2)] = inst_10572);

(statearr_10601_10627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10587 === (8))){
var inst_10569 = cljs.core.async.close_BANG_.call(null,to);
var state_10586__$1 = state_10586;
var statearr_10602_10628 = state_10586__$1;
(statearr_10602_10628[(2)] = inst_10569);

(statearr_10602_10628[(1)] = (10));


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
});})(c__10447__auto___10614))
;
return ((function (switch__10324__auto__,c__10447__auto___10614){
return (function() {
var cljs$core$async$state_machine__10325__auto__ = null;
var cljs$core$async$state_machine__10325__auto____0 = (function (){
var statearr_10606 = [null,null,null,null,null,null,null,null];
(statearr_10606[(0)] = cljs$core$async$state_machine__10325__auto__);

(statearr_10606[(1)] = (1));

return statearr_10606;
});
var cljs$core$async$state_machine__10325__auto____1 = (function (state_10586){
while(true){
var ret_value__10326__auto__ = (function (){try{while(true){
var result__10327__auto__ = switch__10324__auto__.call(null,state_10586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10327__auto__;
}
break;
}
}catch (e10607){if((e10607 instanceof Object)){
var ex__10328__auto__ = e10607;
var statearr_10608_10629 = state_10586;
(statearr_10608_10629[(5)] = ex__10328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10630 = state_10586;
state_10586 = G__10630;
continue;
} else {
return ret_value__10326__auto__;
}
break;
}
});
cljs$core$async$state_machine__10325__auto__ = function(state_10586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10325__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10325__auto____1.call(this,state_10586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10325__auto____0;
cljs$core$async$state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10325__auto____1;
return cljs$core$async$state_machine__10325__auto__;
})()
;})(switch__10324__auto__,c__10447__auto___10614))
})();
var state__10449__auto__ = (function (){var statearr_10609 = f__10448__auto__.call(null);
(statearr_10609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10447__auto___10614);

return statearr_10609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10449__auto__);
});})(c__10447__auto___10614))
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
return (function (p__10814){
var vec__10815 = p__10814;
var v = cljs.core.nth.call(null,vec__10815,(0),null);
var p = cljs.core.nth.call(null,vec__10815,(1),null);
var job = vec__10815;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10447__auto___10997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10447__auto___10997,res,vec__10815,v,p,job,jobs,results){
return (function (){
var f__10448__auto__ = (function (){var switch__10324__auto__ = ((function (c__10447__auto___10997,res,vec__10815,v,p,job,jobs,results){
return (function (state_10820){
var state_val_10821 = (state_10820[(1)]);
if((state_val_10821 === (1))){
var state_10820__$1 = state_10820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10820__$1,(2),res,v);
} else {
if((state_val_10821 === (2))){
var inst_10817 = (state_10820[(2)]);
var inst_10818 = cljs.core.async.close_BANG_.call(null,res);
var state_10820__$1 = (function (){var statearr_10822 = state_10820;
(statearr_10822[(7)] = inst_10817);

return statearr_10822;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10820__$1,inst_10818);
} else {
return null;
}
}
});})(c__10447__auto___10997,res,vec__10815,v,p,job,jobs,results))
;
return ((function (switch__10324__auto__,c__10447__auto___10997,res,vec__10815,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____0 = (function (){
var statearr_10826 = [null,null,null,null,null,null,null,null];
(statearr_10826[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__);

(statearr_10826[(1)] = (1));

return statearr_10826;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____1 = (function (state_10820){
while(true){
var ret_value__10326__auto__ = (function (){try{while(true){
var result__10327__auto__ = switch__10324__auto__.call(null,state_10820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10327__auto__;
}
break;
}
}catch (e10827){if((e10827 instanceof Object)){
var ex__10328__auto__ = e10827;
var statearr_10828_10998 = state_10820;
(statearr_10828_10998[(5)] = ex__10328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10999 = state_10820;
state_10820 = G__10999;
continue;
} else {
return ret_value__10326__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__ = function(state_10820){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____1.call(this,state_10820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__;
})()
;})(switch__10324__auto__,c__10447__auto___10997,res,vec__10815,v,p,job,jobs,results))
})();
var state__10449__auto__ = (function (){var statearr_10829 = f__10448__auto__.call(null);
(statearr_10829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10447__auto___10997);

return statearr_10829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10449__auto__);
});})(c__10447__auto___10997,res,vec__10815,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10830){
var vec__10831 = p__10830;
var v = cljs.core.nth.call(null,vec__10831,(0),null);
var p = cljs.core.nth.call(null,vec__10831,(1),null);
var job = vec__10831;
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
var n__7059__auto___11000 = n;
var __11001 = (0);
while(true){
if((__11001 < n__7059__auto___11000)){
var G__10832_11002 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__10832_11002) {
case "compute":
var c__10447__auto___11004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11001,c__10447__auto___11004,G__10832_11002,n__7059__auto___11000,jobs,results,process,async){
return (function (){
var f__10448__auto__ = (function (){var switch__10324__auto__ = ((function (__11001,c__10447__auto___11004,G__10832_11002,n__7059__auto___11000,jobs,results,process,async){
return (function (state_10845){
var state_val_10846 = (state_10845[(1)]);
if((state_val_10846 === (1))){
var state_10845__$1 = state_10845;
var statearr_10847_11005 = state_10845__$1;
(statearr_10847_11005[(2)] = null);

(statearr_10847_11005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10846 === (2))){
var state_10845__$1 = state_10845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10845__$1,(4),jobs);
} else {
if((state_val_10846 === (3))){
var inst_10843 = (state_10845[(2)]);
var state_10845__$1 = state_10845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10845__$1,inst_10843);
} else {
if((state_val_10846 === (4))){
var inst_10835 = (state_10845[(2)]);
var inst_10836 = process.call(null,inst_10835);
var state_10845__$1 = state_10845;
if(cljs.core.truth_(inst_10836)){
var statearr_10848_11006 = state_10845__$1;
(statearr_10848_11006[(1)] = (5));

} else {
var statearr_10849_11007 = state_10845__$1;
(statearr_10849_11007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10846 === (5))){
var state_10845__$1 = state_10845;
var statearr_10850_11008 = state_10845__$1;
(statearr_10850_11008[(2)] = null);

(statearr_10850_11008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10846 === (6))){
var state_10845__$1 = state_10845;
var statearr_10851_11009 = state_10845__$1;
(statearr_10851_11009[(2)] = null);

(statearr_10851_11009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10846 === (7))){
var inst_10841 = (state_10845[(2)]);
var state_10845__$1 = state_10845;
var statearr_10852_11010 = state_10845__$1;
(statearr_10852_11010[(2)] = inst_10841);

(statearr_10852_11010[(1)] = (3));


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
});})(__11001,c__10447__auto___11004,G__10832_11002,n__7059__auto___11000,jobs,results,process,async))
;
return ((function (__11001,switch__10324__auto__,c__10447__auto___11004,G__10832_11002,n__7059__auto___11000,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____0 = (function (){
var statearr_10856 = [null,null,null,null,null,null,null];
(statearr_10856[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__);

(statearr_10856[(1)] = (1));

return statearr_10856;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____1 = (function (state_10845){
while(true){
var ret_value__10326__auto__ = (function (){try{while(true){
var result__10327__auto__ = switch__10324__auto__.call(null,state_10845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10327__auto__;
}
break;
}
}catch (e10857){if((e10857 instanceof Object)){
var ex__10328__auto__ = e10857;
var statearr_10858_11011 = state_10845;
(statearr_10858_11011[(5)] = ex__10328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11012 = state_10845;
state_10845 = G__11012;
continue;
} else {
return ret_value__10326__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__ = function(state_10845){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____1.call(this,state_10845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__;
})()
;})(__11001,switch__10324__auto__,c__10447__auto___11004,G__10832_11002,n__7059__auto___11000,jobs,results,process,async))
})();
var state__10449__auto__ = (function (){var statearr_10859 = f__10448__auto__.call(null);
(statearr_10859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10447__auto___11004);

return statearr_10859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10449__auto__);
});})(__11001,c__10447__auto___11004,G__10832_11002,n__7059__auto___11000,jobs,results,process,async))
);


break;
case "async":
var c__10447__auto___11013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11001,c__10447__auto___11013,G__10832_11002,n__7059__auto___11000,jobs,results,process,async){
return (function (){
var f__10448__auto__ = (function (){var switch__10324__auto__ = ((function (__11001,c__10447__auto___11013,G__10832_11002,n__7059__auto___11000,jobs,results,process,async){
return (function (state_10872){
var state_val_10873 = (state_10872[(1)]);
if((state_val_10873 === (1))){
var state_10872__$1 = state_10872;
var statearr_10874_11014 = state_10872__$1;
(statearr_10874_11014[(2)] = null);

(statearr_10874_11014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (2))){
var state_10872__$1 = state_10872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10872__$1,(4),jobs);
} else {
if((state_val_10873 === (3))){
var inst_10870 = (state_10872[(2)]);
var state_10872__$1 = state_10872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10872__$1,inst_10870);
} else {
if((state_val_10873 === (4))){
var inst_10862 = (state_10872[(2)]);
var inst_10863 = async.call(null,inst_10862);
var state_10872__$1 = state_10872;
if(cljs.core.truth_(inst_10863)){
var statearr_10875_11015 = state_10872__$1;
(statearr_10875_11015[(1)] = (5));

} else {
var statearr_10876_11016 = state_10872__$1;
(statearr_10876_11016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (5))){
var state_10872__$1 = state_10872;
var statearr_10877_11017 = state_10872__$1;
(statearr_10877_11017[(2)] = null);

(statearr_10877_11017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (6))){
var state_10872__$1 = state_10872;
var statearr_10878_11018 = state_10872__$1;
(statearr_10878_11018[(2)] = null);

(statearr_10878_11018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10873 === (7))){
var inst_10868 = (state_10872[(2)]);
var state_10872__$1 = state_10872;
var statearr_10879_11019 = state_10872__$1;
(statearr_10879_11019[(2)] = inst_10868);

(statearr_10879_11019[(1)] = (3));


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
});})(__11001,c__10447__auto___11013,G__10832_11002,n__7059__auto___11000,jobs,results,process,async))
;
return ((function (__11001,switch__10324__auto__,c__10447__auto___11013,G__10832_11002,n__7059__auto___11000,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____0 = (function (){
var statearr_10883 = [null,null,null,null,null,null,null];
(statearr_10883[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__);

(statearr_10883[(1)] = (1));

return statearr_10883;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____1 = (function (state_10872){
while(true){
var ret_value__10326__auto__ = (function (){try{while(true){
var result__10327__auto__ = switch__10324__auto__.call(null,state_10872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10327__auto__;
}
break;
}
}catch (e10884){if((e10884 instanceof Object)){
var ex__10328__auto__ = e10884;
var statearr_10885_11020 = state_10872;
(statearr_10885_11020[(5)] = ex__10328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11021 = state_10872;
state_10872 = G__11021;
continue;
} else {
return ret_value__10326__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__ = function(state_10872){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____1.call(this,state_10872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__;
})()
;})(__11001,switch__10324__auto__,c__10447__auto___11013,G__10832_11002,n__7059__auto___11000,jobs,results,process,async))
})();
var state__10449__auto__ = (function (){var statearr_10886 = f__10448__auto__.call(null);
(statearr_10886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10447__auto___11013);

return statearr_10886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10449__auto__);
});})(__11001,c__10447__auto___11013,G__10832_11002,n__7059__auto___11000,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__11022 = (__11001 + (1));
__11001 = G__11022;
continue;
} else {
}
break;
}

var c__10447__auto___11023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10447__auto___11023,jobs,results,process,async){
return (function (){
var f__10448__auto__ = (function (){var switch__10324__auto__ = ((function (c__10447__auto___11023,jobs,results,process,async){
return (function (state_10908){
var state_val_10909 = (state_10908[(1)]);
if((state_val_10909 === (1))){
var state_10908__$1 = state_10908;
var statearr_10910_11024 = state_10908__$1;
(statearr_10910_11024[(2)] = null);

(statearr_10910_11024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10909 === (2))){
var state_10908__$1 = state_10908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10908__$1,(4),from);
} else {
if((state_val_10909 === (3))){
var inst_10906 = (state_10908[(2)]);
var state_10908__$1 = state_10908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10908__$1,inst_10906);
} else {
if((state_val_10909 === (4))){
var inst_10889 = (state_10908[(7)]);
var inst_10889__$1 = (state_10908[(2)]);
var inst_10890 = (inst_10889__$1 == null);
var state_10908__$1 = (function (){var statearr_10911 = state_10908;
(statearr_10911[(7)] = inst_10889__$1);

return statearr_10911;
})();
if(cljs.core.truth_(inst_10890)){
var statearr_10912_11025 = state_10908__$1;
(statearr_10912_11025[(1)] = (5));

} else {
var statearr_10913_11026 = state_10908__$1;
(statearr_10913_11026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10909 === (5))){
var inst_10892 = cljs.core.async.close_BANG_.call(null,jobs);
var state_10908__$1 = state_10908;
var statearr_10914_11027 = state_10908__$1;
(statearr_10914_11027[(2)] = inst_10892);

(statearr_10914_11027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10909 === (6))){
var inst_10894 = (state_10908[(8)]);
var inst_10889 = (state_10908[(7)]);
var inst_10894__$1 = cljs.core.async.chan.call(null,(1));
var inst_10895 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10896 = [inst_10889,inst_10894__$1];
var inst_10897 = (new cljs.core.PersistentVector(null,2,(5),inst_10895,inst_10896,null));
var state_10908__$1 = (function (){var statearr_10915 = state_10908;
(statearr_10915[(8)] = inst_10894__$1);

return statearr_10915;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10908__$1,(8),jobs,inst_10897);
} else {
if((state_val_10909 === (7))){
var inst_10904 = (state_10908[(2)]);
var state_10908__$1 = state_10908;
var statearr_10916_11028 = state_10908__$1;
(statearr_10916_11028[(2)] = inst_10904);

(statearr_10916_11028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10909 === (8))){
var inst_10894 = (state_10908[(8)]);
var inst_10899 = (state_10908[(2)]);
var state_10908__$1 = (function (){var statearr_10917 = state_10908;
(statearr_10917[(9)] = inst_10899);

return statearr_10917;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10908__$1,(9),results,inst_10894);
} else {
if((state_val_10909 === (9))){
var inst_10901 = (state_10908[(2)]);
var state_10908__$1 = (function (){var statearr_10918 = state_10908;
(statearr_10918[(10)] = inst_10901);

return statearr_10918;
})();
var statearr_10919_11029 = state_10908__$1;
(statearr_10919_11029[(2)] = null);

(statearr_10919_11029[(1)] = (2));


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
});})(c__10447__auto___11023,jobs,results,process,async))
;
return ((function (switch__10324__auto__,c__10447__auto___11023,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____0 = (function (){
var statearr_10923 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10923[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__);

(statearr_10923[(1)] = (1));

return statearr_10923;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____1 = (function (state_10908){
while(true){
var ret_value__10326__auto__ = (function (){try{while(true){
var result__10327__auto__ = switch__10324__auto__.call(null,state_10908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10327__auto__;
}
break;
}
}catch (e10924){if((e10924 instanceof Object)){
var ex__10328__auto__ = e10924;
var statearr_10925_11030 = state_10908;
(statearr_10925_11030[(5)] = ex__10328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11031 = state_10908;
state_10908 = G__11031;
continue;
} else {
return ret_value__10326__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__ = function(state_10908){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____1.call(this,state_10908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__;
})()
;})(switch__10324__auto__,c__10447__auto___11023,jobs,results,process,async))
})();
var state__10449__auto__ = (function (){var statearr_10926 = f__10448__auto__.call(null);
(statearr_10926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10447__auto___11023);

return statearr_10926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10449__auto__);
});})(c__10447__auto___11023,jobs,results,process,async))
);


var c__10447__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10447__auto__,jobs,results,process,async){
return (function (){
var f__10448__auto__ = (function (){var switch__10324__auto__ = ((function (c__10447__auto__,jobs,results,process,async){
return (function (state_10964){
var state_val_10965 = (state_10964[(1)]);
if((state_val_10965 === (7))){
var inst_10960 = (state_10964[(2)]);
var state_10964__$1 = state_10964;
var statearr_10966_11032 = state_10964__$1;
(statearr_10966_11032[(2)] = inst_10960);

(statearr_10966_11032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10965 === (20))){
var state_10964__$1 = state_10964;
var statearr_10967_11033 = state_10964__$1;
(statearr_10967_11033[(2)] = null);

(statearr_10967_11033[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10965 === (1))){
var state_10964__$1 = state_10964;
var statearr_10968_11034 = state_10964__$1;
(statearr_10968_11034[(2)] = null);

(statearr_10968_11034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10965 === (4))){
var inst_10929 = (state_10964[(7)]);
var inst_10929__$1 = (state_10964[(2)]);
var inst_10930 = (inst_10929__$1 == null);
var state_10964__$1 = (function (){var statearr_10969 = state_10964;
(statearr_10969[(7)] = inst_10929__$1);

return statearr_10969;
})();
if(cljs.core.truth_(inst_10930)){
var statearr_10970_11035 = state_10964__$1;
(statearr_10970_11035[(1)] = (5));

} else {
var statearr_10971_11036 = state_10964__$1;
(statearr_10971_11036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10965 === (15))){
var inst_10942 = (state_10964[(8)]);
var state_10964__$1 = state_10964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10964__$1,(18),to,inst_10942);
} else {
if((state_val_10965 === (21))){
var inst_10955 = (state_10964[(2)]);
var state_10964__$1 = state_10964;
var statearr_10972_11037 = state_10964__$1;
(statearr_10972_11037[(2)] = inst_10955);

(statearr_10972_11037[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10965 === (13))){
var inst_10957 = (state_10964[(2)]);
var state_10964__$1 = (function (){var statearr_10973 = state_10964;
(statearr_10973[(9)] = inst_10957);

return statearr_10973;
})();
var statearr_10974_11038 = state_10964__$1;
(statearr_10974_11038[(2)] = null);

(statearr_10974_11038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10965 === (6))){
var inst_10929 = (state_10964[(7)]);
var state_10964__$1 = state_10964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10964__$1,(11),inst_10929);
} else {
if((state_val_10965 === (17))){
var inst_10950 = (state_10964[(2)]);
var state_10964__$1 = state_10964;
if(cljs.core.truth_(inst_10950)){
var statearr_10975_11039 = state_10964__$1;
(statearr_10975_11039[(1)] = (19));

} else {
var statearr_10976_11040 = state_10964__$1;
(statearr_10976_11040[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10965 === (3))){
var inst_10962 = (state_10964[(2)]);
var state_10964__$1 = state_10964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10964__$1,inst_10962);
} else {
if((state_val_10965 === (12))){
var inst_10939 = (state_10964[(10)]);
var state_10964__$1 = state_10964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10964__$1,(14),inst_10939);
} else {
if((state_val_10965 === (2))){
var state_10964__$1 = state_10964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10964__$1,(4),results);
} else {
if((state_val_10965 === (19))){
var state_10964__$1 = state_10964;
var statearr_10977_11041 = state_10964__$1;
(statearr_10977_11041[(2)] = null);

(statearr_10977_11041[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10965 === (11))){
var inst_10939 = (state_10964[(2)]);
var state_10964__$1 = (function (){var statearr_10978 = state_10964;
(statearr_10978[(10)] = inst_10939);

return statearr_10978;
})();
var statearr_10979_11042 = state_10964__$1;
(statearr_10979_11042[(2)] = null);

(statearr_10979_11042[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10965 === (9))){
var state_10964__$1 = state_10964;
var statearr_10980_11043 = state_10964__$1;
(statearr_10980_11043[(2)] = null);

(statearr_10980_11043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10965 === (5))){
var state_10964__$1 = state_10964;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10981_11044 = state_10964__$1;
(statearr_10981_11044[(1)] = (8));

} else {
var statearr_10982_11045 = state_10964__$1;
(statearr_10982_11045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10965 === (14))){
var inst_10942 = (state_10964[(8)]);
var inst_10944 = (state_10964[(11)]);
var inst_10942__$1 = (state_10964[(2)]);
var inst_10943 = (inst_10942__$1 == null);
var inst_10944__$1 = cljs.core.not.call(null,inst_10943);
var state_10964__$1 = (function (){var statearr_10983 = state_10964;
(statearr_10983[(8)] = inst_10942__$1);

(statearr_10983[(11)] = inst_10944__$1);

return statearr_10983;
})();
if(inst_10944__$1){
var statearr_10984_11046 = state_10964__$1;
(statearr_10984_11046[(1)] = (15));

} else {
var statearr_10985_11047 = state_10964__$1;
(statearr_10985_11047[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10965 === (16))){
var inst_10944 = (state_10964[(11)]);
var state_10964__$1 = state_10964;
var statearr_10986_11048 = state_10964__$1;
(statearr_10986_11048[(2)] = inst_10944);

(statearr_10986_11048[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10965 === (10))){
var inst_10936 = (state_10964[(2)]);
var state_10964__$1 = state_10964;
var statearr_10987_11049 = state_10964__$1;
(statearr_10987_11049[(2)] = inst_10936);

(statearr_10987_11049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10965 === (18))){
var inst_10947 = (state_10964[(2)]);
var state_10964__$1 = state_10964;
var statearr_10988_11050 = state_10964__$1;
(statearr_10988_11050[(2)] = inst_10947);

(statearr_10988_11050[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10965 === (8))){
var inst_10933 = cljs.core.async.close_BANG_.call(null,to);
var state_10964__$1 = state_10964;
var statearr_10989_11051 = state_10964__$1;
(statearr_10989_11051[(2)] = inst_10933);

(statearr_10989_11051[(1)] = (10));


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
});})(c__10447__auto__,jobs,results,process,async))
;
return ((function (switch__10324__auto__,c__10447__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____0 = (function (){
var statearr_10993 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10993[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__);

(statearr_10993[(1)] = (1));

return statearr_10993;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____1 = (function (state_10964){
while(true){
var ret_value__10326__auto__ = (function (){try{while(true){
var result__10327__auto__ = switch__10324__auto__.call(null,state_10964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10327__auto__;
}
break;
}
}catch (e10994){if((e10994 instanceof Object)){
var ex__10328__auto__ = e10994;
var statearr_10995_11052 = state_10964;
(statearr_10995_11052[(5)] = ex__10328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11053 = state_10964;
state_10964 = G__11053;
continue;
} else {
return ret_value__10326__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__ = function(state_10964){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____1.call(this,state_10964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10325__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10325__auto__;
})()
;})(switch__10324__auto__,c__10447__auto__,jobs,results,process,async))
})();
var state__10449__auto__ = (function (){var statearr_10996 = f__10448__auto__.call(null);
(statearr_10996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10447__auto__);

return statearr_10996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10449__auto__);
});})(c__10447__auto__,jobs,results,process,async))
);

return c__10447__auto__;
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
var args11054 = [];
var len__7214__auto___11057 = arguments.length;
var i__7215__auto___11058 = (0);
while(true){
if((i__7215__auto___11058 < len__7214__auto___11057)){
args11054.push((arguments[i__7215__auto___11058]));

var G__11059 = (i__7215__auto___11058 + (1));
i__7215__auto___11058 = G__11059;
continue;
} else {
}
break;
}

var G__11056 = args11054.length;
switch (G__11056) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11054.length)].join('')));

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
var args11061 = [];
var len__7214__auto___11064 = arguments.length;
var i__7215__auto___11065 = (0);
while(true){
if((i__7215__auto___11065 < len__7214__auto___11064)){
args11061.push((arguments[i__7215__auto___11065]));

var G__11066 = (i__7215__auto___11065 + (1));
i__7215__auto___11065 = G__11066;
continue;
} else {
}
break;
}

var G__11063 = args11061.length;
switch (G__11063) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11061.length)].join('')));

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
var args11068 = [];
var len__7214__auto___11121 = arguments.length;
var i__7215__auto___11122 = (0);
while(true){
if((i__7215__auto___11122 < len__7214__auto___11121)){
args11068.push((arguments[i__7215__auto___11122]));

var G__11123 = (i__7215__auto___11122 + (1));
i__7215__auto___11122 = G__11123;
continue;
} else {
}
break;
}

var G__11070 = args11068.length;
switch (G__11070) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11068.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10447__auto___11125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10447__auto___11125,tc,fc){
return (function (){
var f__10448__auto__ = (function (){var switch__10324__auto__ = ((function (c__10447__auto___11125,tc,fc){
return (function (state_11096){
var state_val_11097 = (state_11096[(1)]);
if((state_val_11097 === (7))){
var inst_11092 = (state_11096[(2)]);
var state_11096__$1 = state_11096;
var statearr_11098_11126 = state_11096__$1;
(statearr_11098_11126[(2)] = inst_11092);

(statearr_11098_11126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11097 === (1))){
var state_11096__$1 = state_11096;
var statearr_11099_11127 = state_11096__$1;
(statearr_11099_11127[(2)] = null);

(statearr_11099_11127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11097 === (4))){
var inst_11073 = (state_11096[(7)]);
var inst_11073__$1 = (state_11096[(2)]);
var inst_11074 = (inst_11073__$1 == null);
var state_11096__$1 = (function (){var statearr_11100 = state_11096;
(statearr_11100[(7)] = inst_11073__$1);

return statearr_11100;
})();
if(cljs.core.truth_(inst_11074)){
var statearr_11101_11128 = state_11096__$1;
(statearr_11101_11128[(1)] = (5));

} else {
var statearr_11102_11129 = state_11096__$1;
(statearr_11102_11129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11097 === (13))){
var state_11096__$1 = state_11096;
var statearr_11103_11130 = state_11096__$1;
(statearr_11103_11130[(2)] = null);

(statearr_11103_11130[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11097 === (6))){
var inst_11073 = (state_11096[(7)]);
var inst_11079 = p.call(null,inst_11073);
var state_11096__$1 = state_11096;
if(cljs.core.truth_(inst_11079)){
var statearr_11104_11131 = state_11096__$1;
(statearr_11104_11131[(1)] = (9));

} else {
var statearr_11105_11132 = state_11096__$1;
(statearr_11105_11132[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11097 === (3))){
var inst_11094 = (state_11096[(2)]);
var state_11096__$1 = state_11096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11096__$1,inst_11094);
} else {
if((state_val_11097 === (12))){
var state_11096__$1 = state_11096;
var statearr_11106_11133 = state_11096__$1;
(statearr_11106_11133[(2)] = null);

(statearr_11106_11133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11097 === (2))){
var state_11096__$1 = state_11096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11096__$1,(4),ch);
} else {
if((state_val_11097 === (11))){
var inst_11073 = (state_11096[(7)]);
var inst_11083 = (state_11096[(2)]);
var state_11096__$1 = state_11096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11096__$1,(8),inst_11083,inst_11073);
} else {
if((state_val_11097 === (9))){
var state_11096__$1 = state_11096;
var statearr_11107_11134 = state_11096__$1;
(statearr_11107_11134[(2)] = tc);

(statearr_11107_11134[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11097 === (5))){
var inst_11076 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11077 = cljs.core.async.close_BANG_.call(null,fc);
var state_11096__$1 = (function (){var statearr_11108 = state_11096;
(statearr_11108[(8)] = inst_11076);

return statearr_11108;
})();
var statearr_11109_11135 = state_11096__$1;
(statearr_11109_11135[(2)] = inst_11077);

(statearr_11109_11135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11097 === (14))){
var inst_11090 = (state_11096[(2)]);
var state_11096__$1 = state_11096;
var statearr_11110_11136 = state_11096__$1;
(statearr_11110_11136[(2)] = inst_11090);

(statearr_11110_11136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11097 === (10))){
var state_11096__$1 = state_11096;
var statearr_11111_11137 = state_11096__$1;
(statearr_11111_11137[(2)] = fc);

(statearr_11111_11137[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11097 === (8))){
var inst_11085 = (state_11096[(2)]);
var state_11096__$1 = state_11096;
if(cljs.core.truth_(inst_11085)){
var statearr_11112_11138 = state_11096__$1;
(statearr_11112_11138[(1)] = (12));

} else {
var statearr_11113_11139 = state_11096__$1;
(statearr_11113_11139[(1)] = (13));

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
});})(c__10447__auto___11125,tc,fc))
;
return ((function (switch__10324__auto__,c__10447__auto___11125,tc,fc){
return (function() {
var cljs$core$async$state_machine__10325__auto__ = null;
var cljs$core$async$state_machine__10325__auto____0 = (function (){
var statearr_11117 = [null,null,null,null,null,null,null,null,null];
(statearr_11117[(0)] = cljs$core$async$state_machine__10325__auto__);

(statearr_11117[(1)] = (1));

return statearr_11117;
});
var cljs$core$async$state_machine__10325__auto____1 = (function (state_11096){
while(true){
var ret_value__10326__auto__ = (function (){try{while(true){
var result__10327__auto__ = switch__10324__auto__.call(null,state_11096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10327__auto__;
}
break;
}
}catch (e11118){if((e11118 instanceof Object)){
var ex__10328__auto__ = e11118;
var statearr_11119_11140 = state_11096;
(statearr_11119_11140[(5)] = ex__10328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11141 = state_11096;
state_11096 = G__11141;
continue;
} else {
return ret_value__10326__auto__;
}
break;
}
});
cljs$core$async$state_machine__10325__auto__ = function(state_11096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10325__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10325__auto____1.call(this,state_11096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10325__auto____0;
cljs$core$async$state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10325__auto____1;
return cljs$core$async$state_machine__10325__auto__;
})()
;})(switch__10324__auto__,c__10447__auto___11125,tc,fc))
})();
var state__10449__auto__ = (function (){var statearr_11120 = f__10448__auto__.call(null);
(statearr_11120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10447__auto___11125);

return statearr_11120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10449__auto__);
});})(c__10447__auto___11125,tc,fc))
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
var c__10447__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10447__auto__){
return (function (){
var f__10448__auto__ = (function (){var switch__10324__auto__ = ((function (c__10447__auto__){
return (function (state_11205){
var state_val_11206 = (state_11205[(1)]);
if((state_val_11206 === (7))){
var inst_11201 = (state_11205[(2)]);
var state_11205__$1 = state_11205;
var statearr_11207_11228 = state_11205__$1;
(statearr_11207_11228[(2)] = inst_11201);

(statearr_11207_11228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11206 === (1))){
var inst_11185 = init;
var state_11205__$1 = (function (){var statearr_11208 = state_11205;
(statearr_11208[(7)] = inst_11185);

return statearr_11208;
})();
var statearr_11209_11229 = state_11205__$1;
(statearr_11209_11229[(2)] = null);

(statearr_11209_11229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11206 === (4))){
var inst_11188 = (state_11205[(8)]);
var inst_11188__$1 = (state_11205[(2)]);
var inst_11189 = (inst_11188__$1 == null);
var state_11205__$1 = (function (){var statearr_11210 = state_11205;
(statearr_11210[(8)] = inst_11188__$1);

return statearr_11210;
})();
if(cljs.core.truth_(inst_11189)){
var statearr_11211_11230 = state_11205__$1;
(statearr_11211_11230[(1)] = (5));

} else {
var statearr_11212_11231 = state_11205__$1;
(statearr_11212_11231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11206 === (6))){
var inst_11188 = (state_11205[(8)]);
var inst_11192 = (state_11205[(9)]);
var inst_11185 = (state_11205[(7)]);
var inst_11192__$1 = f.call(null,inst_11185,inst_11188);
var inst_11193 = cljs.core.reduced_QMARK_.call(null,inst_11192__$1);
var state_11205__$1 = (function (){var statearr_11213 = state_11205;
(statearr_11213[(9)] = inst_11192__$1);

return statearr_11213;
})();
if(inst_11193){
var statearr_11214_11232 = state_11205__$1;
(statearr_11214_11232[(1)] = (8));

} else {
var statearr_11215_11233 = state_11205__$1;
(statearr_11215_11233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11206 === (3))){
var inst_11203 = (state_11205[(2)]);
var state_11205__$1 = state_11205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11205__$1,inst_11203);
} else {
if((state_val_11206 === (2))){
var state_11205__$1 = state_11205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11205__$1,(4),ch);
} else {
if((state_val_11206 === (9))){
var inst_11192 = (state_11205[(9)]);
var inst_11185 = inst_11192;
var state_11205__$1 = (function (){var statearr_11216 = state_11205;
(statearr_11216[(7)] = inst_11185);

return statearr_11216;
})();
var statearr_11217_11234 = state_11205__$1;
(statearr_11217_11234[(2)] = null);

(statearr_11217_11234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11206 === (5))){
var inst_11185 = (state_11205[(7)]);
var state_11205__$1 = state_11205;
var statearr_11218_11235 = state_11205__$1;
(statearr_11218_11235[(2)] = inst_11185);

(statearr_11218_11235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11206 === (10))){
var inst_11199 = (state_11205[(2)]);
var state_11205__$1 = state_11205;
var statearr_11219_11236 = state_11205__$1;
(statearr_11219_11236[(2)] = inst_11199);

(statearr_11219_11236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11206 === (8))){
var inst_11192 = (state_11205[(9)]);
var inst_11195 = cljs.core.deref.call(null,inst_11192);
var state_11205__$1 = state_11205;
var statearr_11220_11237 = state_11205__$1;
(statearr_11220_11237[(2)] = inst_11195);

(statearr_11220_11237[(1)] = (10));


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
});})(c__10447__auto__))
;
return ((function (switch__10324__auto__,c__10447__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10325__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10325__auto____0 = (function (){
var statearr_11224 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11224[(0)] = cljs$core$async$reduce_$_state_machine__10325__auto__);

(statearr_11224[(1)] = (1));

return statearr_11224;
});
var cljs$core$async$reduce_$_state_machine__10325__auto____1 = (function (state_11205){
while(true){
var ret_value__10326__auto__ = (function (){try{while(true){
var result__10327__auto__ = switch__10324__auto__.call(null,state_11205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10327__auto__;
}
break;
}
}catch (e11225){if((e11225 instanceof Object)){
var ex__10328__auto__ = e11225;
var statearr_11226_11238 = state_11205;
(statearr_11226_11238[(5)] = ex__10328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11239 = state_11205;
state_11205 = G__11239;
continue;
} else {
return ret_value__10326__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10325__auto__ = function(state_11205){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10325__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10325__auto____1.call(this,state_11205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10325__auto____0;
cljs$core$async$reduce_$_state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10325__auto____1;
return cljs$core$async$reduce_$_state_machine__10325__auto__;
})()
;})(switch__10324__auto__,c__10447__auto__))
})();
var state__10449__auto__ = (function (){var statearr_11227 = f__10448__auto__.call(null);
(statearr_11227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10447__auto__);

return statearr_11227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10449__auto__);
});})(c__10447__auto__))
);

return c__10447__auto__;
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
var args11240 = [];
var len__7214__auto___11292 = arguments.length;
var i__7215__auto___11293 = (0);
while(true){
if((i__7215__auto___11293 < len__7214__auto___11292)){
args11240.push((arguments[i__7215__auto___11293]));

var G__11294 = (i__7215__auto___11293 + (1));
i__7215__auto___11293 = G__11294;
continue;
} else {
}
break;
}

var G__11242 = args11240.length;
switch (G__11242) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11240.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10447__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10447__auto__){
return (function (){
var f__10448__auto__ = (function (){var switch__10324__auto__ = ((function (c__10447__auto__){
return (function (state_11267){
var state_val_11268 = (state_11267[(1)]);
if((state_val_11268 === (7))){
var inst_11249 = (state_11267[(2)]);
var state_11267__$1 = state_11267;
var statearr_11269_11296 = state_11267__$1;
(statearr_11269_11296[(2)] = inst_11249);

(statearr_11269_11296[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11268 === (1))){
var inst_11243 = cljs.core.seq.call(null,coll);
var inst_11244 = inst_11243;
var state_11267__$1 = (function (){var statearr_11270 = state_11267;
(statearr_11270[(7)] = inst_11244);

return statearr_11270;
})();
var statearr_11271_11297 = state_11267__$1;
(statearr_11271_11297[(2)] = null);

(statearr_11271_11297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11268 === (4))){
var inst_11244 = (state_11267[(7)]);
var inst_11247 = cljs.core.first.call(null,inst_11244);
var state_11267__$1 = state_11267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11267__$1,(7),ch,inst_11247);
} else {
if((state_val_11268 === (13))){
var inst_11261 = (state_11267[(2)]);
var state_11267__$1 = state_11267;
var statearr_11272_11298 = state_11267__$1;
(statearr_11272_11298[(2)] = inst_11261);

(statearr_11272_11298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11268 === (6))){
var inst_11252 = (state_11267[(2)]);
var state_11267__$1 = state_11267;
if(cljs.core.truth_(inst_11252)){
var statearr_11273_11299 = state_11267__$1;
(statearr_11273_11299[(1)] = (8));

} else {
var statearr_11274_11300 = state_11267__$1;
(statearr_11274_11300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11268 === (3))){
var inst_11265 = (state_11267[(2)]);
var state_11267__$1 = state_11267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11267__$1,inst_11265);
} else {
if((state_val_11268 === (12))){
var state_11267__$1 = state_11267;
var statearr_11275_11301 = state_11267__$1;
(statearr_11275_11301[(2)] = null);

(statearr_11275_11301[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11268 === (2))){
var inst_11244 = (state_11267[(7)]);
var state_11267__$1 = state_11267;
if(cljs.core.truth_(inst_11244)){
var statearr_11276_11302 = state_11267__$1;
(statearr_11276_11302[(1)] = (4));

} else {
var statearr_11277_11303 = state_11267__$1;
(statearr_11277_11303[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11268 === (11))){
var inst_11258 = cljs.core.async.close_BANG_.call(null,ch);
var state_11267__$1 = state_11267;
var statearr_11278_11304 = state_11267__$1;
(statearr_11278_11304[(2)] = inst_11258);

(statearr_11278_11304[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11268 === (9))){
var state_11267__$1 = state_11267;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11279_11305 = state_11267__$1;
(statearr_11279_11305[(1)] = (11));

} else {
var statearr_11280_11306 = state_11267__$1;
(statearr_11280_11306[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11268 === (5))){
var inst_11244 = (state_11267[(7)]);
var state_11267__$1 = state_11267;
var statearr_11281_11307 = state_11267__$1;
(statearr_11281_11307[(2)] = inst_11244);

(statearr_11281_11307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11268 === (10))){
var inst_11263 = (state_11267[(2)]);
var state_11267__$1 = state_11267;
var statearr_11282_11308 = state_11267__$1;
(statearr_11282_11308[(2)] = inst_11263);

(statearr_11282_11308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11268 === (8))){
var inst_11244 = (state_11267[(7)]);
var inst_11254 = cljs.core.next.call(null,inst_11244);
var inst_11244__$1 = inst_11254;
var state_11267__$1 = (function (){var statearr_11283 = state_11267;
(statearr_11283[(7)] = inst_11244__$1);

return statearr_11283;
})();
var statearr_11284_11309 = state_11267__$1;
(statearr_11284_11309[(2)] = null);

(statearr_11284_11309[(1)] = (2));


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
});})(c__10447__auto__))
;
return ((function (switch__10324__auto__,c__10447__auto__){
return (function() {
var cljs$core$async$state_machine__10325__auto__ = null;
var cljs$core$async$state_machine__10325__auto____0 = (function (){
var statearr_11288 = [null,null,null,null,null,null,null,null];
(statearr_11288[(0)] = cljs$core$async$state_machine__10325__auto__);

(statearr_11288[(1)] = (1));

return statearr_11288;
});
var cljs$core$async$state_machine__10325__auto____1 = (function (state_11267){
while(true){
var ret_value__10326__auto__ = (function (){try{while(true){
var result__10327__auto__ = switch__10324__auto__.call(null,state_11267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10327__auto__;
}
break;
}
}catch (e11289){if((e11289 instanceof Object)){
var ex__10328__auto__ = e11289;
var statearr_11290_11310 = state_11267;
(statearr_11290_11310[(5)] = ex__10328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11311 = state_11267;
state_11267 = G__11311;
continue;
} else {
return ret_value__10326__auto__;
}
break;
}
});
cljs$core$async$state_machine__10325__auto__ = function(state_11267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10325__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10325__auto____1.call(this,state_11267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10325__auto____0;
cljs$core$async$state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10325__auto____1;
return cljs$core$async$state_machine__10325__auto__;
})()
;})(switch__10324__auto__,c__10447__auto__))
})();
var state__10449__auto__ = (function (){var statearr_11291 = f__10448__auto__.call(null);
(statearr_11291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10447__auto__);

return statearr_11291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10449__auto__);
});})(c__10447__auto__))
);

return c__10447__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async11533 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11533 = (function (mult,ch,cs,meta11534){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta11534 = meta11534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11535,meta11534__$1){
var self__ = this;
var _11535__$1 = this;
return (new cljs.core.async.t_cljs$core$async11533(self__.mult,self__.ch,self__.cs,meta11534__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async11533.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11535){
var self__ = this;
var _11535__$1 = this;
return self__.meta11534;
});})(cs))
;

cljs.core.async.t_cljs$core$async11533.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11533.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async11533.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async11533.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11533.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11533.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11533.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11534","meta11534",-29583748,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async11533.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11533.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11533";

cljs.core.async.t_cljs$core$async11533.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async11533");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async11533 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async11533(mult__$1,ch__$1,cs__$1,meta11534){
return (new cljs.core.async.t_cljs$core$async11533(mult__$1,ch__$1,cs__$1,meta11534));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async11533(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10447__auto___11754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10447__auto___11754,cs,m,dchan,dctr,done){
return (function (){
var f__10448__auto__ = (function (){var switch__10324__auto__ = ((function (c__10447__auto___11754,cs,m,dchan,dctr,done){
return (function (state_11666){
var state_val_11667 = (state_11666[(1)]);
if((state_val_11667 === (7))){
var inst_11662 = (state_11666[(2)]);
var state_11666__$1 = state_11666;
var statearr_11668_11755 = state_11666__$1;
(statearr_11668_11755[(2)] = inst_11662);

(statearr_11668_11755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (20))){
var inst_11567 = (state_11666[(7)]);
var inst_11577 = cljs.core.first.call(null,inst_11567);
var inst_11578 = cljs.core.nth.call(null,inst_11577,(0),null);
var inst_11579 = cljs.core.nth.call(null,inst_11577,(1),null);
var state_11666__$1 = (function (){var statearr_11669 = state_11666;
(statearr_11669[(8)] = inst_11578);

return statearr_11669;
})();
if(cljs.core.truth_(inst_11579)){
var statearr_11670_11756 = state_11666__$1;
(statearr_11670_11756[(1)] = (22));

} else {
var statearr_11671_11757 = state_11666__$1;
(statearr_11671_11757[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (27))){
var inst_11614 = (state_11666[(9)]);
var inst_11609 = (state_11666[(10)]);
var inst_11538 = (state_11666[(11)]);
var inst_11607 = (state_11666[(12)]);
var inst_11614__$1 = cljs.core._nth.call(null,inst_11607,inst_11609);
var inst_11615 = cljs.core.async.put_BANG_.call(null,inst_11614__$1,inst_11538,done);
var state_11666__$1 = (function (){var statearr_11672 = state_11666;
(statearr_11672[(9)] = inst_11614__$1);

return statearr_11672;
})();
if(cljs.core.truth_(inst_11615)){
var statearr_11673_11758 = state_11666__$1;
(statearr_11673_11758[(1)] = (30));

} else {
var statearr_11674_11759 = state_11666__$1;
(statearr_11674_11759[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (1))){
var state_11666__$1 = state_11666;
var statearr_11675_11760 = state_11666__$1;
(statearr_11675_11760[(2)] = null);

(statearr_11675_11760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (24))){
var inst_11567 = (state_11666[(7)]);
var inst_11584 = (state_11666[(2)]);
var inst_11585 = cljs.core.next.call(null,inst_11567);
var inst_11547 = inst_11585;
var inst_11548 = null;
var inst_11549 = (0);
var inst_11550 = (0);
var state_11666__$1 = (function (){var statearr_11676 = state_11666;
(statearr_11676[(13)] = inst_11549);

(statearr_11676[(14)] = inst_11584);

(statearr_11676[(15)] = inst_11547);

(statearr_11676[(16)] = inst_11548);

(statearr_11676[(17)] = inst_11550);

return statearr_11676;
})();
var statearr_11677_11761 = state_11666__$1;
(statearr_11677_11761[(2)] = null);

(statearr_11677_11761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (39))){
var state_11666__$1 = state_11666;
var statearr_11681_11762 = state_11666__$1;
(statearr_11681_11762[(2)] = null);

(statearr_11681_11762[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (4))){
var inst_11538 = (state_11666[(11)]);
var inst_11538__$1 = (state_11666[(2)]);
var inst_11539 = (inst_11538__$1 == null);
var state_11666__$1 = (function (){var statearr_11682 = state_11666;
(statearr_11682[(11)] = inst_11538__$1);

return statearr_11682;
})();
if(cljs.core.truth_(inst_11539)){
var statearr_11683_11763 = state_11666__$1;
(statearr_11683_11763[(1)] = (5));

} else {
var statearr_11684_11764 = state_11666__$1;
(statearr_11684_11764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (15))){
var inst_11549 = (state_11666[(13)]);
var inst_11547 = (state_11666[(15)]);
var inst_11548 = (state_11666[(16)]);
var inst_11550 = (state_11666[(17)]);
var inst_11563 = (state_11666[(2)]);
var inst_11564 = (inst_11550 + (1));
var tmp11678 = inst_11549;
var tmp11679 = inst_11547;
var tmp11680 = inst_11548;
var inst_11547__$1 = tmp11679;
var inst_11548__$1 = tmp11680;
var inst_11549__$1 = tmp11678;
var inst_11550__$1 = inst_11564;
var state_11666__$1 = (function (){var statearr_11685 = state_11666;
(statearr_11685[(13)] = inst_11549__$1);

(statearr_11685[(15)] = inst_11547__$1);

(statearr_11685[(16)] = inst_11548__$1);

(statearr_11685[(17)] = inst_11550__$1);

(statearr_11685[(18)] = inst_11563);

return statearr_11685;
})();
var statearr_11686_11765 = state_11666__$1;
(statearr_11686_11765[(2)] = null);

(statearr_11686_11765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (21))){
var inst_11588 = (state_11666[(2)]);
var state_11666__$1 = state_11666;
var statearr_11690_11766 = state_11666__$1;
(statearr_11690_11766[(2)] = inst_11588);

(statearr_11690_11766[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (31))){
var inst_11614 = (state_11666[(9)]);
var inst_11618 = done.call(null,null);
var inst_11619 = cljs.core.async.untap_STAR_.call(null,m,inst_11614);
var state_11666__$1 = (function (){var statearr_11691 = state_11666;
(statearr_11691[(19)] = inst_11618);

return statearr_11691;
})();
var statearr_11692_11767 = state_11666__$1;
(statearr_11692_11767[(2)] = inst_11619);

(statearr_11692_11767[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (32))){
var inst_11606 = (state_11666[(20)]);
var inst_11609 = (state_11666[(10)]);
var inst_11608 = (state_11666[(21)]);
var inst_11607 = (state_11666[(12)]);
var inst_11621 = (state_11666[(2)]);
var inst_11622 = (inst_11609 + (1));
var tmp11687 = inst_11606;
var tmp11688 = inst_11608;
var tmp11689 = inst_11607;
var inst_11606__$1 = tmp11687;
var inst_11607__$1 = tmp11689;
var inst_11608__$1 = tmp11688;
var inst_11609__$1 = inst_11622;
var state_11666__$1 = (function (){var statearr_11693 = state_11666;
(statearr_11693[(20)] = inst_11606__$1);

(statearr_11693[(10)] = inst_11609__$1);

(statearr_11693[(21)] = inst_11608__$1);

(statearr_11693[(22)] = inst_11621);

(statearr_11693[(12)] = inst_11607__$1);

return statearr_11693;
})();
var statearr_11694_11768 = state_11666__$1;
(statearr_11694_11768[(2)] = null);

(statearr_11694_11768[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (40))){
var inst_11634 = (state_11666[(23)]);
var inst_11638 = done.call(null,null);
var inst_11639 = cljs.core.async.untap_STAR_.call(null,m,inst_11634);
var state_11666__$1 = (function (){var statearr_11695 = state_11666;
(statearr_11695[(24)] = inst_11638);

return statearr_11695;
})();
var statearr_11696_11769 = state_11666__$1;
(statearr_11696_11769[(2)] = inst_11639);

(statearr_11696_11769[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (33))){
var inst_11625 = (state_11666[(25)]);
var inst_11627 = cljs.core.chunked_seq_QMARK_.call(null,inst_11625);
var state_11666__$1 = state_11666;
if(inst_11627){
var statearr_11697_11770 = state_11666__$1;
(statearr_11697_11770[(1)] = (36));

} else {
var statearr_11698_11771 = state_11666__$1;
(statearr_11698_11771[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (13))){
var inst_11557 = (state_11666[(26)]);
var inst_11560 = cljs.core.async.close_BANG_.call(null,inst_11557);
var state_11666__$1 = state_11666;
var statearr_11699_11772 = state_11666__$1;
(statearr_11699_11772[(2)] = inst_11560);

(statearr_11699_11772[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (22))){
var inst_11578 = (state_11666[(8)]);
var inst_11581 = cljs.core.async.close_BANG_.call(null,inst_11578);
var state_11666__$1 = state_11666;
var statearr_11700_11773 = state_11666__$1;
(statearr_11700_11773[(2)] = inst_11581);

(statearr_11700_11773[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (36))){
var inst_11625 = (state_11666[(25)]);
var inst_11629 = cljs.core.chunk_first.call(null,inst_11625);
var inst_11630 = cljs.core.chunk_rest.call(null,inst_11625);
var inst_11631 = cljs.core.count.call(null,inst_11629);
var inst_11606 = inst_11630;
var inst_11607 = inst_11629;
var inst_11608 = inst_11631;
var inst_11609 = (0);
var state_11666__$1 = (function (){var statearr_11701 = state_11666;
(statearr_11701[(20)] = inst_11606);

(statearr_11701[(10)] = inst_11609);

(statearr_11701[(21)] = inst_11608);

(statearr_11701[(12)] = inst_11607);

return statearr_11701;
})();
var statearr_11702_11774 = state_11666__$1;
(statearr_11702_11774[(2)] = null);

(statearr_11702_11774[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (41))){
var inst_11625 = (state_11666[(25)]);
var inst_11641 = (state_11666[(2)]);
var inst_11642 = cljs.core.next.call(null,inst_11625);
var inst_11606 = inst_11642;
var inst_11607 = null;
var inst_11608 = (0);
var inst_11609 = (0);
var state_11666__$1 = (function (){var statearr_11703 = state_11666;
(statearr_11703[(20)] = inst_11606);

(statearr_11703[(10)] = inst_11609);

(statearr_11703[(27)] = inst_11641);

(statearr_11703[(21)] = inst_11608);

(statearr_11703[(12)] = inst_11607);

return statearr_11703;
})();
var statearr_11704_11775 = state_11666__$1;
(statearr_11704_11775[(2)] = null);

(statearr_11704_11775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (43))){
var state_11666__$1 = state_11666;
var statearr_11705_11776 = state_11666__$1;
(statearr_11705_11776[(2)] = null);

(statearr_11705_11776[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (29))){
var inst_11650 = (state_11666[(2)]);
var state_11666__$1 = state_11666;
var statearr_11706_11777 = state_11666__$1;
(statearr_11706_11777[(2)] = inst_11650);

(statearr_11706_11777[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (44))){
var inst_11659 = (state_11666[(2)]);
var state_11666__$1 = (function (){var statearr_11707 = state_11666;
(statearr_11707[(28)] = inst_11659);

return statearr_11707;
})();
var statearr_11708_11778 = state_11666__$1;
(statearr_11708_11778[(2)] = null);

(statearr_11708_11778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (6))){
var inst_11598 = (state_11666[(29)]);
var inst_11597 = cljs.core.deref.call(null,cs);
var inst_11598__$1 = cljs.core.keys.call(null,inst_11597);
var inst_11599 = cljs.core.count.call(null,inst_11598__$1);
var inst_11600 = cljs.core.reset_BANG_.call(null,dctr,inst_11599);
var inst_11605 = cljs.core.seq.call(null,inst_11598__$1);
var inst_11606 = inst_11605;
var inst_11607 = null;
var inst_11608 = (0);
var inst_11609 = (0);
var state_11666__$1 = (function (){var statearr_11709 = state_11666;
(statearr_11709[(30)] = inst_11600);

(statearr_11709[(20)] = inst_11606);

(statearr_11709[(10)] = inst_11609);

(statearr_11709[(29)] = inst_11598__$1);

(statearr_11709[(21)] = inst_11608);

(statearr_11709[(12)] = inst_11607);

return statearr_11709;
})();
var statearr_11710_11779 = state_11666__$1;
(statearr_11710_11779[(2)] = null);

(statearr_11710_11779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (28))){
var inst_11606 = (state_11666[(20)]);
var inst_11625 = (state_11666[(25)]);
var inst_11625__$1 = cljs.core.seq.call(null,inst_11606);
var state_11666__$1 = (function (){var statearr_11711 = state_11666;
(statearr_11711[(25)] = inst_11625__$1);

return statearr_11711;
})();
if(inst_11625__$1){
var statearr_11712_11780 = state_11666__$1;
(statearr_11712_11780[(1)] = (33));

} else {
var statearr_11713_11781 = state_11666__$1;
(statearr_11713_11781[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (25))){
var inst_11609 = (state_11666[(10)]);
var inst_11608 = (state_11666[(21)]);
var inst_11611 = (inst_11609 < inst_11608);
var inst_11612 = inst_11611;
var state_11666__$1 = state_11666;
if(cljs.core.truth_(inst_11612)){
var statearr_11714_11782 = state_11666__$1;
(statearr_11714_11782[(1)] = (27));

} else {
var statearr_11715_11783 = state_11666__$1;
(statearr_11715_11783[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (34))){
var state_11666__$1 = state_11666;
var statearr_11716_11784 = state_11666__$1;
(statearr_11716_11784[(2)] = null);

(statearr_11716_11784[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (17))){
var state_11666__$1 = state_11666;
var statearr_11717_11785 = state_11666__$1;
(statearr_11717_11785[(2)] = null);

(statearr_11717_11785[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (3))){
var inst_11664 = (state_11666[(2)]);
var state_11666__$1 = state_11666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11666__$1,inst_11664);
} else {
if((state_val_11667 === (12))){
var inst_11593 = (state_11666[(2)]);
var state_11666__$1 = state_11666;
var statearr_11718_11786 = state_11666__$1;
(statearr_11718_11786[(2)] = inst_11593);

(statearr_11718_11786[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (2))){
var state_11666__$1 = state_11666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11666__$1,(4),ch);
} else {
if((state_val_11667 === (23))){
var state_11666__$1 = state_11666;
var statearr_11719_11787 = state_11666__$1;
(statearr_11719_11787[(2)] = null);

(statearr_11719_11787[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (35))){
var inst_11648 = (state_11666[(2)]);
var state_11666__$1 = state_11666;
var statearr_11720_11788 = state_11666__$1;
(statearr_11720_11788[(2)] = inst_11648);

(statearr_11720_11788[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (19))){
var inst_11567 = (state_11666[(7)]);
var inst_11571 = cljs.core.chunk_first.call(null,inst_11567);
var inst_11572 = cljs.core.chunk_rest.call(null,inst_11567);
var inst_11573 = cljs.core.count.call(null,inst_11571);
var inst_11547 = inst_11572;
var inst_11548 = inst_11571;
var inst_11549 = inst_11573;
var inst_11550 = (0);
var state_11666__$1 = (function (){var statearr_11721 = state_11666;
(statearr_11721[(13)] = inst_11549);

(statearr_11721[(15)] = inst_11547);

(statearr_11721[(16)] = inst_11548);

(statearr_11721[(17)] = inst_11550);

return statearr_11721;
})();
var statearr_11722_11789 = state_11666__$1;
(statearr_11722_11789[(2)] = null);

(statearr_11722_11789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (11))){
var inst_11547 = (state_11666[(15)]);
var inst_11567 = (state_11666[(7)]);
var inst_11567__$1 = cljs.core.seq.call(null,inst_11547);
var state_11666__$1 = (function (){var statearr_11723 = state_11666;
(statearr_11723[(7)] = inst_11567__$1);

return statearr_11723;
})();
if(inst_11567__$1){
var statearr_11724_11790 = state_11666__$1;
(statearr_11724_11790[(1)] = (16));

} else {
var statearr_11725_11791 = state_11666__$1;
(statearr_11725_11791[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (9))){
var inst_11595 = (state_11666[(2)]);
var state_11666__$1 = state_11666;
var statearr_11726_11792 = state_11666__$1;
(statearr_11726_11792[(2)] = inst_11595);

(statearr_11726_11792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (5))){
var inst_11545 = cljs.core.deref.call(null,cs);
var inst_11546 = cljs.core.seq.call(null,inst_11545);
var inst_11547 = inst_11546;
var inst_11548 = null;
var inst_11549 = (0);
var inst_11550 = (0);
var state_11666__$1 = (function (){var statearr_11727 = state_11666;
(statearr_11727[(13)] = inst_11549);

(statearr_11727[(15)] = inst_11547);

(statearr_11727[(16)] = inst_11548);

(statearr_11727[(17)] = inst_11550);

return statearr_11727;
})();
var statearr_11728_11793 = state_11666__$1;
(statearr_11728_11793[(2)] = null);

(statearr_11728_11793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (14))){
var state_11666__$1 = state_11666;
var statearr_11729_11794 = state_11666__$1;
(statearr_11729_11794[(2)] = null);

(statearr_11729_11794[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (45))){
var inst_11656 = (state_11666[(2)]);
var state_11666__$1 = state_11666;
var statearr_11730_11795 = state_11666__$1;
(statearr_11730_11795[(2)] = inst_11656);

(statearr_11730_11795[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (26))){
var inst_11598 = (state_11666[(29)]);
var inst_11652 = (state_11666[(2)]);
var inst_11653 = cljs.core.seq.call(null,inst_11598);
var state_11666__$1 = (function (){var statearr_11731 = state_11666;
(statearr_11731[(31)] = inst_11652);

return statearr_11731;
})();
if(inst_11653){
var statearr_11732_11796 = state_11666__$1;
(statearr_11732_11796[(1)] = (42));

} else {
var statearr_11733_11797 = state_11666__$1;
(statearr_11733_11797[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (16))){
var inst_11567 = (state_11666[(7)]);
var inst_11569 = cljs.core.chunked_seq_QMARK_.call(null,inst_11567);
var state_11666__$1 = state_11666;
if(inst_11569){
var statearr_11734_11798 = state_11666__$1;
(statearr_11734_11798[(1)] = (19));

} else {
var statearr_11735_11799 = state_11666__$1;
(statearr_11735_11799[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (38))){
var inst_11645 = (state_11666[(2)]);
var state_11666__$1 = state_11666;
var statearr_11736_11800 = state_11666__$1;
(statearr_11736_11800[(2)] = inst_11645);

(statearr_11736_11800[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (30))){
var state_11666__$1 = state_11666;
var statearr_11737_11801 = state_11666__$1;
(statearr_11737_11801[(2)] = null);

(statearr_11737_11801[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (10))){
var inst_11548 = (state_11666[(16)]);
var inst_11550 = (state_11666[(17)]);
var inst_11556 = cljs.core._nth.call(null,inst_11548,inst_11550);
var inst_11557 = cljs.core.nth.call(null,inst_11556,(0),null);
var inst_11558 = cljs.core.nth.call(null,inst_11556,(1),null);
var state_11666__$1 = (function (){var statearr_11738 = state_11666;
(statearr_11738[(26)] = inst_11557);

return statearr_11738;
})();
if(cljs.core.truth_(inst_11558)){
var statearr_11739_11802 = state_11666__$1;
(statearr_11739_11802[(1)] = (13));

} else {
var statearr_11740_11803 = state_11666__$1;
(statearr_11740_11803[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (18))){
var inst_11591 = (state_11666[(2)]);
var state_11666__$1 = state_11666;
var statearr_11741_11804 = state_11666__$1;
(statearr_11741_11804[(2)] = inst_11591);

(statearr_11741_11804[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (42))){
var state_11666__$1 = state_11666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11666__$1,(45),dchan);
} else {
if((state_val_11667 === (37))){
var inst_11538 = (state_11666[(11)]);
var inst_11625 = (state_11666[(25)]);
var inst_11634 = (state_11666[(23)]);
var inst_11634__$1 = cljs.core.first.call(null,inst_11625);
var inst_11635 = cljs.core.async.put_BANG_.call(null,inst_11634__$1,inst_11538,done);
var state_11666__$1 = (function (){var statearr_11742 = state_11666;
(statearr_11742[(23)] = inst_11634__$1);

return statearr_11742;
})();
if(cljs.core.truth_(inst_11635)){
var statearr_11743_11805 = state_11666__$1;
(statearr_11743_11805[(1)] = (39));

} else {
var statearr_11744_11806 = state_11666__$1;
(statearr_11744_11806[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11667 === (8))){
var inst_11549 = (state_11666[(13)]);
var inst_11550 = (state_11666[(17)]);
var inst_11552 = (inst_11550 < inst_11549);
var inst_11553 = inst_11552;
var state_11666__$1 = state_11666;
if(cljs.core.truth_(inst_11553)){
var statearr_11745_11807 = state_11666__$1;
(statearr_11745_11807[(1)] = (10));

} else {
var statearr_11746_11808 = state_11666__$1;
(statearr_11746_11808[(1)] = (11));

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
});})(c__10447__auto___11754,cs,m,dchan,dctr,done))
;
return ((function (switch__10324__auto__,c__10447__auto___11754,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10325__auto__ = null;
var cljs$core$async$mult_$_state_machine__10325__auto____0 = (function (){
var statearr_11750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11750[(0)] = cljs$core$async$mult_$_state_machine__10325__auto__);

(statearr_11750[(1)] = (1));

return statearr_11750;
});
var cljs$core$async$mult_$_state_machine__10325__auto____1 = (function (state_11666){
while(true){
var ret_value__10326__auto__ = (function (){try{while(true){
var result__10327__auto__ = switch__10324__auto__.call(null,state_11666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10327__auto__;
}
break;
}
}catch (e11751){if((e11751 instanceof Object)){
var ex__10328__auto__ = e11751;
var statearr_11752_11809 = state_11666;
(statearr_11752_11809[(5)] = ex__10328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11810 = state_11666;
state_11666 = G__11810;
continue;
} else {
return ret_value__10326__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10325__auto__ = function(state_11666){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10325__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10325__auto____1.call(this,state_11666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10325__auto____0;
cljs$core$async$mult_$_state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10325__auto____1;
return cljs$core$async$mult_$_state_machine__10325__auto__;
})()
;})(switch__10324__auto__,c__10447__auto___11754,cs,m,dchan,dctr,done))
})();
var state__10449__auto__ = (function (){var statearr_11753 = f__10448__auto__.call(null);
(statearr_11753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10447__auto___11754);

return statearr_11753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10449__auto__);
});})(c__10447__auto___11754,cs,m,dchan,dctr,done))
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
var args11811 = [];
var len__7214__auto___11814 = arguments.length;
var i__7215__auto___11815 = (0);
while(true){
if((i__7215__auto___11815 < len__7214__auto___11814)){
args11811.push((arguments[i__7215__auto___11815]));

var G__11816 = (i__7215__auto___11815 + (1));
i__7215__auto___11815 = G__11816;
continue;
} else {
}
break;
}

var G__11813 = args11811.length;
switch (G__11813) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11811.length)].join('')));

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
var len__7214__auto___11828 = arguments.length;
var i__7215__auto___11829 = (0);
while(true){
if((i__7215__auto___11829 < len__7214__auto___11828)){
args__7221__auto__.push((arguments[i__7215__auto___11829]));

var G__11830 = (i__7215__auto___11829 + (1));
i__7215__auto___11829 = G__11830;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((3) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7222__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11822){
var map__11823 = p__11822;
var map__11823__$1 = ((((!((map__11823 == null)))?((((map__11823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11823):map__11823);
var opts = map__11823__$1;
var statearr_11825_11831 = state;
(statearr_11825_11831[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__11823,map__11823__$1,opts){
return (function (val){
var statearr_11826_11832 = state;
(statearr_11826_11832[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__11823,map__11823__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_11827_11833 = state;
(statearr_11827_11833[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11818){
var G__11819 = cljs.core.first.call(null,seq11818);
var seq11818__$1 = cljs.core.next.call(null,seq11818);
var G__11820 = cljs.core.first.call(null,seq11818__$1);
var seq11818__$2 = cljs.core.next.call(null,seq11818__$1);
var G__11821 = cljs.core.first.call(null,seq11818__$2);
var seq11818__$3 = cljs.core.next.call(null,seq11818__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11819,G__11820,G__11821,seq11818__$3);
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
if(typeof cljs.core.async.t_cljs$core$async11997 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11997 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11998){
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
this.meta11998 = meta11998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11999,meta11998__$1){
var self__ = this;
var _11999__$1 = this;
return (new cljs.core.async.t_cljs$core$async11997(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11998__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11997.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11999){
var self__ = this;
var _11999__$1 = this;
return self__.meta11998;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11997.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11997.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11997.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async11997.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11997.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11997.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11997.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11997.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async11997.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11998","meta11998",-1795853756,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11997.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11997";

cljs.core.async.t_cljs$core$async11997.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async11997");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async11997 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async11997(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11998){
return (new cljs.core.async.t_cljs$core$async11997(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11998));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async11997(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10447__auto___12160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10447__auto___12160,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10448__auto__ = (function (){var switch__10324__auto__ = ((function (c__10447__auto___12160,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12097){
var state_val_12098 = (state_12097[(1)]);
if((state_val_12098 === (7))){
var inst_12015 = (state_12097[(2)]);
var state_12097__$1 = state_12097;
var statearr_12099_12161 = state_12097__$1;
(statearr_12099_12161[(2)] = inst_12015);

(statearr_12099_12161[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (20))){
var inst_12027 = (state_12097[(7)]);
var state_12097__$1 = state_12097;
var statearr_12100_12162 = state_12097__$1;
(statearr_12100_12162[(2)] = inst_12027);

(statearr_12100_12162[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (27))){
var state_12097__$1 = state_12097;
var statearr_12101_12163 = state_12097__$1;
(statearr_12101_12163[(2)] = null);

(statearr_12101_12163[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (1))){
var inst_12003 = (state_12097[(8)]);
var inst_12003__$1 = calc_state.call(null);
var inst_12005 = (inst_12003__$1 == null);
var inst_12006 = cljs.core.not.call(null,inst_12005);
var state_12097__$1 = (function (){var statearr_12102 = state_12097;
(statearr_12102[(8)] = inst_12003__$1);

return statearr_12102;
})();
if(inst_12006){
var statearr_12103_12164 = state_12097__$1;
(statearr_12103_12164[(1)] = (2));

} else {
var statearr_12104_12165 = state_12097__$1;
(statearr_12104_12165[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (24))){
var inst_12050 = (state_12097[(9)]);
var inst_12057 = (state_12097[(10)]);
var inst_12071 = (state_12097[(11)]);
var inst_12071__$1 = inst_12050.call(null,inst_12057);
var state_12097__$1 = (function (){var statearr_12105 = state_12097;
(statearr_12105[(11)] = inst_12071__$1);

return statearr_12105;
})();
if(cljs.core.truth_(inst_12071__$1)){
var statearr_12106_12166 = state_12097__$1;
(statearr_12106_12166[(1)] = (29));

} else {
var statearr_12107_12167 = state_12097__$1;
(statearr_12107_12167[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (4))){
var inst_12018 = (state_12097[(2)]);
var state_12097__$1 = state_12097;
if(cljs.core.truth_(inst_12018)){
var statearr_12108_12168 = state_12097__$1;
(statearr_12108_12168[(1)] = (8));

} else {
var statearr_12109_12169 = state_12097__$1;
(statearr_12109_12169[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (15))){
var inst_12044 = (state_12097[(2)]);
var state_12097__$1 = state_12097;
if(cljs.core.truth_(inst_12044)){
var statearr_12110_12170 = state_12097__$1;
(statearr_12110_12170[(1)] = (19));

} else {
var statearr_12111_12171 = state_12097__$1;
(statearr_12111_12171[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (21))){
var inst_12049 = (state_12097[(12)]);
var inst_12049__$1 = (state_12097[(2)]);
var inst_12050 = cljs.core.get.call(null,inst_12049__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12051 = cljs.core.get.call(null,inst_12049__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12052 = cljs.core.get.call(null,inst_12049__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12097__$1 = (function (){var statearr_12112 = state_12097;
(statearr_12112[(9)] = inst_12050);

(statearr_12112[(13)] = inst_12051);

(statearr_12112[(12)] = inst_12049__$1);

return statearr_12112;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12097__$1,(22),inst_12052);
} else {
if((state_val_12098 === (31))){
var inst_12079 = (state_12097[(2)]);
var state_12097__$1 = state_12097;
if(cljs.core.truth_(inst_12079)){
var statearr_12113_12172 = state_12097__$1;
(statearr_12113_12172[(1)] = (32));

} else {
var statearr_12114_12173 = state_12097__$1;
(statearr_12114_12173[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (32))){
var inst_12056 = (state_12097[(14)]);
var state_12097__$1 = state_12097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12097__$1,(35),out,inst_12056);
} else {
if((state_val_12098 === (33))){
var inst_12049 = (state_12097[(12)]);
var inst_12027 = inst_12049;
var state_12097__$1 = (function (){var statearr_12115 = state_12097;
(statearr_12115[(7)] = inst_12027);

return statearr_12115;
})();
var statearr_12116_12174 = state_12097__$1;
(statearr_12116_12174[(2)] = null);

(statearr_12116_12174[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (13))){
var inst_12027 = (state_12097[(7)]);
var inst_12034 = inst_12027.cljs$lang$protocol_mask$partition0$;
var inst_12035 = (inst_12034 & (64));
var inst_12036 = inst_12027.cljs$core$ISeq$;
var inst_12037 = (inst_12035) || (inst_12036);
var state_12097__$1 = state_12097;
if(cljs.core.truth_(inst_12037)){
var statearr_12117_12175 = state_12097__$1;
(statearr_12117_12175[(1)] = (16));

} else {
var statearr_12118_12176 = state_12097__$1;
(statearr_12118_12176[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (22))){
var inst_12057 = (state_12097[(10)]);
var inst_12056 = (state_12097[(14)]);
var inst_12055 = (state_12097[(2)]);
var inst_12056__$1 = cljs.core.nth.call(null,inst_12055,(0),null);
var inst_12057__$1 = cljs.core.nth.call(null,inst_12055,(1),null);
var inst_12058 = (inst_12056__$1 == null);
var inst_12059 = cljs.core._EQ_.call(null,inst_12057__$1,change);
var inst_12060 = (inst_12058) || (inst_12059);
var state_12097__$1 = (function (){var statearr_12119 = state_12097;
(statearr_12119[(10)] = inst_12057__$1);

(statearr_12119[(14)] = inst_12056__$1);

return statearr_12119;
})();
if(cljs.core.truth_(inst_12060)){
var statearr_12120_12177 = state_12097__$1;
(statearr_12120_12177[(1)] = (23));

} else {
var statearr_12121_12178 = state_12097__$1;
(statearr_12121_12178[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (36))){
var inst_12049 = (state_12097[(12)]);
var inst_12027 = inst_12049;
var state_12097__$1 = (function (){var statearr_12122 = state_12097;
(statearr_12122[(7)] = inst_12027);

return statearr_12122;
})();
var statearr_12123_12179 = state_12097__$1;
(statearr_12123_12179[(2)] = null);

(statearr_12123_12179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (29))){
var inst_12071 = (state_12097[(11)]);
var state_12097__$1 = state_12097;
var statearr_12124_12180 = state_12097__$1;
(statearr_12124_12180[(2)] = inst_12071);

(statearr_12124_12180[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (6))){
var state_12097__$1 = state_12097;
var statearr_12125_12181 = state_12097__$1;
(statearr_12125_12181[(2)] = false);

(statearr_12125_12181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (28))){
var inst_12067 = (state_12097[(2)]);
var inst_12068 = calc_state.call(null);
var inst_12027 = inst_12068;
var state_12097__$1 = (function (){var statearr_12126 = state_12097;
(statearr_12126[(15)] = inst_12067);

(statearr_12126[(7)] = inst_12027);

return statearr_12126;
})();
var statearr_12127_12182 = state_12097__$1;
(statearr_12127_12182[(2)] = null);

(statearr_12127_12182[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (25))){
var inst_12093 = (state_12097[(2)]);
var state_12097__$1 = state_12097;
var statearr_12128_12183 = state_12097__$1;
(statearr_12128_12183[(2)] = inst_12093);

(statearr_12128_12183[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (34))){
var inst_12091 = (state_12097[(2)]);
var state_12097__$1 = state_12097;
var statearr_12129_12184 = state_12097__$1;
(statearr_12129_12184[(2)] = inst_12091);

(statearr_12129_12184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (17))){
var state_12097__$1 = state_12097;
var statearr_12130_12185 = state_12097__$1;
(statearr_12130_12185[(2)] = false);

(statearr_12130_12185[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (3))){
var state_12097__$1 = state_12097;
var statearr_12131_12186 = state_12097__$1;
(statearr_12131_12186[(2)] = false);

(statearr_12131_12186[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (12))){
var inst_12095 = (state_12097[(2)]);
var state_12097__$1 = state_12097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12097__$1,inst_12095);
} else {
if((state_val_12098 === (2))){
var inst_12003 = (state_12097[(8)]);
var inst_12008 = inst_12003.cljs$lang$protocol_mask$partition0$;
var inst_12009 = (inst_12008 & (64));
var inst_12010 = inst_12003.cljs$core$ISeq$;
var inst_12011 = (inst_12009) || (inst_12010);
var state_12097__$1 = state_12097;
if(cljs.core.truth_(inst_12011)){
var statearr_12132_12187 = state_12097__$1;
(statearr_12132_12187[(1)] = (5));

} else {
var statearr_12133_12188 = state_12097__$1;
(statearr_12133_12188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (23))){
var inst_12056 = (state_12097[(14)]);
var inst_12062 = (inst_12056 == null);
var state_12097__$1 = state_12097;
if(cljs.core.truth_(inst_12062)){
var statearr_12134_12189 = state_12097__$1;
(statearr_12134_12189[(1)] = (26));

} else {
var statearr_12135_12190 = state_12097__$1;
(statearr_12135_12190[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (35))){
var inst_12082 = (state_12097[(2)]);
var state_12097__$1 = state_12097;
if(cljs.core.truth_(inst_12082)){
var statearr_12136_12191 = state_12097__$1;
(statearr_12136_12191[(1)] = (36));

} else {
var statearr_12137_12192 = state_12097__$1;
(statearr_12137_12192[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (19))){
var inst_12027 = (state_12097[(7)]);
var inst_12046 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12027);
var state_12097__$1 = state_12097;
var statearr_12138_12193 = state_12097__$1;
(statearr_12138_12193[(2)] = inst_12046);

(statearr_12138_12193[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (11))){
var inst_12027 = (state_12097[(7)]);
var inst_12031 = (inst_12027 == null);
var inst_12032 = cljs.core.not.call(null,inst_12031);
var state_12097__$1 = state_12097;
if(inst_12032){
var statearr_12139_12194 = state_12097__$1;
(statearr_12139_12194[(1)] = (13));

} else {
var statearr_12140_12195 = state_12097__$1;
(statearr_12140_12195[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (9))){
var inst_12003 = (state_12097[(8)]);
var state_12097__$1 = state_12097;
var statearr_12141_12196 = state_12097__$1;
(statearr_12141_12196[(2)] = inst_12003);

(statearr_12141_12196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (5))){
var state_12097__$1 = state_12097;
var statearr_12142_12197 = state_12097__$1;
(statearr_12142_12197[(2)] = true);

(statearr_12142_12197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (14))){
var state_12097__$1 = state_12097;
var statearr_12143_12198 = state_12097__$1;
(statearr_12143_12198[(2)] = false);

(statearr_12143_12198[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (26))){
var inst_12057 = (state_12097[(10)]);
var inst_12064 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12057);
var state_12097__$1 = state_12097;
var statearr_12144_12199 = state_12097__$1;
(statearr_12144_12199[(2)] = inst_12064);

(statearr_12144_12199[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (16))){
var state_12097__$1 = state_12097;
var statearr_12145_12200 = state_12097__$1;
(statearr_12145_12200[(2)] = true);

(statearr_12145_12200[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (38))){
var inst_12087 = (state_12097[(2)]);
var state_12097__$1 = state_12097;
var statearr_12146_12201 = state_12097__$1;
(statearr_12146_12201[(2)] = inst_12087);

(statearr_12146_12201[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (30))){
var inst_12050 = (state_12097[(9)]);
var inst_12057 = (state_12097[(10)]);
var inst_12051 = (state_12097[(13)]);
var inst_12074 = cljs.core.empty_QMARK_.call(null,inst_12050);
var inst_12075 = inst_12051.call(null,inst_12057);
var inst_12076 = cljs.core.not.call(null,inst_12075);
var inst_12077 = (inst_12074) && (inst_12076);
var state_12097__$1 = state_12097;
var statearr_12147_12202 = state_12097__$1;
(statearr_12147_12202[(2)] = inst_12077);

(statearr_12147_12202[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (10))){
var inst_12003 = (state_12097[(8)]);
var inst_12023 = (state_12097[(2)]);
var inst_12024 = cljs.core.get.call(null,inst_12023,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12025 = cljs.core.get.call(null,inst_12023,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12026 = cljs.core.get.call(null,inst_12023,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12027 = inst_12003;
var state_12097__$1 = (function (){var statearr_12148 = state_12097;
(statearr_12148[(16)] = inst_12026);

(statearr_12148[(17)] = inst_12025);

(statearr_12148[(18)] = inst_12024);

(statearr_12148[(7)] = inst_12027);

return statearr_12148;
})();
var statearr_12149_12203 = state_12097__$1;
(statearr_12149_12203[(2)] = null);

(statearr_12149_12203[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (18))){
var inst_12041 = (state_12097[(2)]);
var state_12097__$1 = state_12097;
var statearr_12150_12204 = state_12097__$1;
(statearr_12150_12204[(2)] = inst_12041);

(statearr_12150_12204[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (37))){
var state_12097__$1 = state_12097;
var statearr_12151_12205 = state_12097__$1;
(statearr_12151_12205[(2)] = null);

(statearr_12151_12205[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (8))){
var inst_12003 = (state_12097[(8)]);
var inst_12020 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12003);
var state_12097__$1 = state_12097;
var statearr_12152_12206 = state_12097__$1;
(statearr_12152_12206[(2)] = inst_12020);

(statearr_12152_12206[(1)] = (10));


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
});})(c__10447__auto___12160,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10324__auto__,c__10447__auto___12160,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10325__auto__ = null;
var cljs$core$async$mix_$_state_machine__10325__auto____0 = (function (){
var statearr_12156 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12156[(0)] = cljs$core$async$mix_$_state_machine__10325__auto__);

(statearr_12156[(1)] = (1));

return statearr_12156;
});
var cljs$core$async$mix_$_state_machine__10325__auto____1 = (function (state_12097){
while(true){
var ret_value__10326__auto__ = (function (){try{while(true){
var result__10327__auto__ = switch__10324__auto__.call(null,state_12097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10327__auto__;
}
break;
}
}catch (e12157){if((e12157 instanceof Object)){
var ex__10328__auto__ = e12157;
var statearr_12158_12207 = state_12097;
(statearr_12158_12207[(5)] = ex__10328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12208 = state_12097;
state_12097 = G__12208;
continue;
} else {
return ret_value__10326__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10325__auto__ = function(state_12097){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10325__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10325__auto____1.call(this,state_12097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10325__auto____0;
cljs$core$async$mix_$_state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10325__auto____1;
return cljs$core$async$mix_$_state_machine__10325__auto__;
})()
;})(switch__10324__auto__,c__10447__auto___12160,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10449__auto__ = (function (){var statearr_12159 = f__10448__auto__.call(null);
(statearr_12159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10447__auto___12160);

return statearr_12159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10449__auto__);
});})(c__10447__auto___12160,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args12209 = [];
var len__7214__auto___12212 = arguments.length;
var i__7215__auto___12213 = (0);
while(true){
if((i__7215__auto___12213 < len__7214__auto___12212)){
args12209.push((arguments[i__7215__auto___12213]));

var G__12214 = (i__7215__auto___12213 + (1));
i__7215__auto___12213 = G__12214;
continue;
} else {
}
break;
}

var G__12211 = args12209.length;
switch (G__12211) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12209.length)].join('')));

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
var args12217 = [];
var len__7214__auto___12342 = arguments.length;
var i__7215__auto___12343 = (0);
while(true){
if((i__7215__auto___12343 < len__7214__auto___12342)){
args12217.push((arguments[i__7215__auto___12343]));

var G__12344 = (i__7215__auto___12343 + (1));
i__7215__auto___12343 = G__12344;
continue;
} else {
}
break;
}

var G__12219 = args12217.length;
switch (G__12219) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12217.length)].join('')));

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
return (function (p1__12216_SHARP_){
if(cljs.core.truth_(p1__12216_SHARP_.call(null,topic))){
return p1__12216_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12216_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6156__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async12220 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12220 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12221){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12221 = meta12221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12222,meta12221__$1){
var self__ = this;
var _12222__$1 = this;
return (new cljs.core.async.t_cljs$core$async12220(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12221__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12220.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12222){
var self__ = this;
var _12222__$1 = this;
return self__.meta12221;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12220.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12220.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12220.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async12220.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12220.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async12220.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12220.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12220.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12221","meta12221",1373572864,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12220.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12220.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12220";

cljs.core.async.t_cljs$core$async12220.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async12220");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async12220 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async12220(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12221){
return (new cljs.core.async.t_cljs$core$async12220(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12221));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async12220(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10447__auto___12346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10447__auto___12346,mults,ensure_mult,p){
return (function (){
var f__10448__auto__ = (function (){var switch__10324__auto__ = ((function (c__10447__auto___12346,mults,ensure_mult,p){
return (function (state_12294){
var state_val_12295 = (state_12294[(1)]);
if((state_val_12295 === (7))){
var inst_12290 = (state_12294[(2)]);
var state_12294__$1 = state_12294;
var statearr_12296_12347 = state_12294__$1;
(statearr_12296_12347[(2)] = inst_12290);

(statearr_12296_12347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12295 === (20))){
var state_12294__$1 = state_12294;
var statearr_12297_12348 = state_12294__$1;
(statearr_12297_12348[(2)] = null);

(statearr_12297_12348[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12295 === (1))){
var state_12294__$1 = state_12294;
var statearr_12298_12349 = state_12294__$1;
(statearr_12298_12349[(2)] = null);

(statearr_12298_12349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12295 === (24))){
var inst_12273 = (state_12294[(7)]);
var inst_12282 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12273);
var state_12294__$1 = state_12294;
var statearr_12299_12350 = state_12294__$1;
(statearr_12299_12350[(2)] = inst_12282);

(statearr_12299_12350[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12295 === (4))){
var inst_12225 = (state_12294[(8)]);
var inst_12225__$1 = (state_12294[(2)]);
var inst_12226 = (inst_12225__$1 == null);
var state_12294__$1 = (function (){var statearr_12300 = state_12294;
(statearr_12300[(8)] = inst_12225__$1);

return statearr_12300;
})();
if(cljs.core.truth_(inst_12226)){
var statearr_12301_12351 = state_12294__$1;
(statearr_12301_12351[(1)] = (5));

} else {
var statearr_12302_12352 = state_12294__$1;
(statearr_12302_12352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12295 === (15))){
var inst_12267 = (state_12294[(2)]);
var state_12294__$1 = state_12294;
var statearr_12303_12353 = state_12294__$1;
(statearr_12303_12353[(2)] = inst_12267);

(statearr_12303_12353[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12295 === (21))){
var inst_12287 = (state_12294[(2)]);
var state_12294__$1 = (function (){var statearr_12304 = state_12294;
(statearr_12304[(9)] = inst_12287);

return statearr_12304;
})();
var statearr_12305_12354 = state_12294__$1;
(statearr_12305_12354[(2)] = null);

(statearr_12305_12354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12295 === (13))){
var inst_12249 = (state_12294[(10)]);
var inst_12251 = cljs.core.chunked_seq_QMARK_.call(null,inst_12249);
var state_12294__$1 = state_12294;
if(inst_12251){
var statearr_12306_12355 = state_12294__$1;
(statearr_12306_12355[(1)] = (16));

} else {
var statearr_12307_12356 = state_12294__$1;
(statearr_12307_12356[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12295 === (22))){
var inst_12279 = (state_12294[(2)]);
var state_12294__$1 = state_12294;
if(cljs.core.truth_(inst_12279)){
var statearr_12308_12357 = state_12294__$1;
(statearr_12308_12357[(1)] = (23));

} else {
var statearr_12309_12358 = state_12294__$1;
(statearr_12309_12358[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12295 === (6))){
var inst_12273 = (state_12294[(7)]);
var inst_12275 = (state_12294[(11)]);
var inst_12225 = (state_12294[(8)]);
var inst_12273__$1 = topic_fn.call(null,inst_12225);
var inst_12274 = cljs.core.deref.call(null,mults);
var inst_12275__$1 = cljs.core.get.call(null,inst_12274,inst_12273__$1);
var state_12294__$1 = (function (){var statearr_12310 = state_12294;
(statearr_12310[(7)] = inst_12273__$1);

(statearr_12310[(11)] = inst_12275__$1);

return statearr_12310;
})();
if(cljs.core.truth_(inst_12275__$1)){
var statearr_12311_12359 = state_12294__$1;
(statearr_12311_12359[(1)] = (19));

} else {
var statearr_12312_12360 = state_12294__$1;
(statearr_12312_12360[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12295 === (25))){
var inst_12284 = (state_12294[(2)]);
var state_12294__$1 = state_12294;
var statearr_12313_12361 = state_12294__$1;
(statearr_12313_12361[(2)] = inst_12284);

(statearr_12313_12361[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12295 === (17))){
var inst_12249 = (state_12294[(10)]);
var inst_12258 = cljs.core.first.call(null,inst_12249);
var inst_12259 = cljs.core.async.muxch_STAR_.call(null,inst_12258);
var inst_12260 = cljs.core.async.close_BANG_.call(null,inst_12259);
var inst_12261 = cljs.core.next.call(null,inst_12249);
var inst_12235 = inst_12261;
var inst_12236 = null;
var inst_12237 = (0);
var inst_12238 = (0);
var state_12294__$1 = (function (){var statearr_12314 = state_12294;
(statearr_12314[(12)] = inst_12236);

(statearr_12314[(13)] = inst_12235);

(statearr_12314[(14)] = inst_12238);

(statearr_12314[(15)] = inst_12260);

(statearr_12314[(16)] = inst_12237);

return statearr_12314;
})();
var statearr_12315_12362 = state_12294__$1;
(statearr_12315_12362[(2)] = null);

(statearr_12315_12362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12295 === (3))){
var inst_12292 = (state_12294[(2)]);
var state_12294__$1 = state_12294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12294__$1,inst_12292);
} else {
if((state_val_12295 === (12))){
var inst_12269 = (state_12294[(2)]);
var state_12294__$1 = state_12294;
var statearr_12316_12363 = state_12294__$1;
(statearr_12316_12363[(2)] = inst_12269);

(statearr_12316_12363[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12295 === (2))){
var state_12294__$1 = state_12294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12294__$1,(4),ch);
} else {
if((state_val_12295 === (23))){
var state_12294__$1 = state_12294;
var statearr_12317_12364 = state_12294__$1;
(statearr_12317_12364[(2)] = null);

(statearr_12317_12364[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12295 === (19))){
var inst_12275 = (state_12294[(11)]);
var inst_12225 = (state_12294[(8)]);
var inst_12277 = cljs.core.async.muxch_STAR_.call(null,inst_12275);
var state_12294__$1 = state_12294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12294__$1,(22),inst_12277,inst_12225);
} else {
if((state_val_12295 === (11))){
var inst_12249 = (state_12294[(10)]);
var inst_12235 = (state_12294[(13)]);
var inst_12249__$1 = cljs.core.seq.call(null,inst_12235);
var state_12294__$1 = (function (){var statearr_12318 = state_12294;
(statearr_12318[(10)] = inst_12249__$1);

return statearr_12318;
})();
if(inst_12249__$1){
var statearr_12319_12365 = state_12294__$1;
(statearr_12319_12365[(1)] = (13));

} else {
var statearr_12320_12366 = state_12294__$1;
(statearr_12320_12366[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12295 === (9))){
var inst_12271 = (state_12294[(2)]);
var state_12294__$1 = state_12294;
var statearr_12321_12367 = state_12294__$1;
(statearr_12321_12367[(2)] = inst_12271);

(statearr_12321_12367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12295 === (5))){
var inst_12232 = cljs.core.deref.call(null,mults);
var inst_12233 = cljs.core.vals.call(null,inst_12232);
var inst_12234 = cljs.core.seq.call(null,inst_12233);
var inst_12235 = inst_12234;
var inst_12236 = null;
var inst_12237 = (0);
var inst_12238 = (0);
var state_12294__$1 = (function (){var statearr_12322 = state_12294;
(statearr_12322[(12)] = inst_12236);

(statearr_12322[(13)] = inst_12235);

(statearr_12322[(14)] = inst_12238);

(statearr_12322[(16)] = inst_12237);

return statearr_12322;
})();
var statearr_12323_12368 = state_12294__$1;
(statearr_12323_12368[(2)] = null);

(statearr_12323_12368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12295 === (14))){
var state_12294__$1 = state_12294;
var statearr_12327_12369 = state_12294__$1;
(statearr_12327_12369[(2)] = null);

(statearr_12327_12369[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12295 === (16))){
var inst_12249 = (state_12294[(10)]);
var inst_12253 = cljs.core.chunk_first.call(null,inst_12249);
var inst_12254 = cljs.core.chunk_rest.call(null,inst_12249);
var inst_12255 = cljs.core.count.call(null,inst_12253);
var inst_12235 = inst_12254;
var inst_12236 = inst_12253;
var inst_12237 = inst_12255;
var inst_12238 = (0);
var state_12294__$1 = (function (){var statearr_12328 = state_12294;
(statearr_12328[(12)] = inst_12236);

(statearr_12328[(13)] = inst_12235);

(statearr_12328[(14)] = inst_12238);

(statearr_12328[(16)] = inst_12237);

return statearr_12328;
})();
var statearr_12329_12370 = state_12294__$1;
(statearr_12329_12370[(2)] = null);

(statearr_12329_12370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12295 === (10))){
var inst_12236 = (state_12294[(12)]);
var inst_12235 = (state_12294[(13)]);
var inst_12238 = (state_12294[(14)]);
var inst_12237 = (state_12294[(16)]);
var inst_12243 = cljs.core._nth.call(null,inst_12236,inst_12238);
var inst_12244 = cljs.core.async.muxch_STAR_.call(null,inst_12243);
var inst_12245 = cljs.core.async.close_BANG_.call(null,inst_12244);
var inst_12246 = (inst_12238 + (1));
var tmp12324 = inst_12236;
var tmp12325 = inst_12235;
var tmp12326 = inst_12237;
var inst_12235__$1 = tmp12325;
var inst_12236__$1 = tmp12324;
var inst_12237__$1 = tmp12326;
var inst_12238__$1 = inst_12246;
var state_12294__$1 = (function (){var statearr_12330 = state_12294;
(statearr_12330[(12)] = inst_12236__$1);

(statearr_12330[(17)] = inst_12245);

(statearr_12330[(13)] = inst_12235__$1);

(statearr_12330[(14)] = inst_12238__$1);

(statearr_12330[(16)] = inst_12237__$1);

return statearr_12330;
})();
var statearr_12331_12371 = state_12294__$1;
(statearr_12331_12371[(2)] = null);

(statearr_12331_12371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12295 === (18))){
var inst_12264 = (state_12294[(2)]);
var state_12294__$1 = state_12294;
var statearr_12332_12372 = state_12294__$1;
(statearr_12332_12372[(2)] = inst_12264);

(statearr_12332_12372[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12295 === (8))){
var inst_12238 = (state_12294[(14)]);
var inst_12237 = (state_12294[(16)]);
var inst_12240 = (inst_12238 < inst_12237);
var inst_12241 = inst_12240;
var state_12294__$1 = state_12294;
if(cljs.core.truth_(inst_12241)){
var statearr_12333_12373 = state_12294__$1;
(statearr_12333_12373[(1)] = (10));

} else {
var statearr_12334_12374 = state_12294__$1;
(statearr_12334_12374[(1)] = (11));

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
});})(c__10447__auto___12346,mults,ensure_mult,p))
;
return ((function (switch__10324__auto__,c__10447__auto___12346,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10325__auto__ = null;
var cljs$core$async$state_machine__10325__auto____0 = (function (){
var statearr_12338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12338[(0)] = cljs$core$async$state_machine__10325__auto__);

(statearr_12338[(1)] = (1));

return statearr_12338;
});
var cljs$core$async$state_machine__10325__auto____1 = (function (state_12294){
while(true){
var ret_value__10326__auto__ = (function (){try{while(true){
var result__10327__auto__ = switch__10324__auto__.call(null,state_12294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10327__auto__;
}
break;
}
}catch (e12339){if((e12339 instanceof Object)){
var ex__10328__auto__ = e12339;
var statearr_12340_12375 = state_12294;
(statearr_12340_12375[(5)] = ex__10328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12376 = state_12294;
state_12294 = G__12376;
continue;
} else {
return ret_value__10326__auto__;
}
break;
}
});
cljs$core$async$state_machine__10325__auto__ = function(state_12294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10325__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10325__auto____1.call(this,state_12294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10325__auto____0;
cljs$core$async$state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10325__auto____1;
return cljs$core$async$state_machine__10325__auto__;
})()
;})(switch__10324__auto__,c__10447__auto___12346,mults,ensure_mult,p))
})();
var state__10449__auto__ = (function (){var statearr_12341 = f__10448__auto__.call(null);
(statearr_12341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10447__auto___12346);

return statearr_12341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10449__auto__);
});})(c__10447__auto___12346,mults,ensure_mult,p))
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
var args12377 = [];
var len__7214__auto___12380 = arguments.length;
var i__7215__auto___12381 = (0);
while(true){
if((i__7215__auto___12381 < len__7214__auto___12380)){
args12377.push((arguments[i__7215__auto___12381]));

var G__12382 = (i__7215__auto___12381 + (1));
i__7215__auto___12381 = G__12382;
continue;
} else {
}
break;
}

var G__12379 = args12377.length;
switch (G__12379) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12377.length)].join('')));

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
var args12384 = [];
var len__7214__auto___12387 = arguments.length;
var i__7215__auto___12388 = (0);
while(true){
if((i__7215__auto___12388 < len__7214__auto___12387)){
args12384.push((arguments[i__7215__auto___12388]));

var G__12389 = (i__7215__auto___12388 + (1));
i__7215__auto___12388 = G__12389;
continue;
} else {
}
break;
}

var G__12386 = args12384.length;
switch (G__12386) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12384.length)].join('')));

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
var args12391 = [];
var len__7214__auto___12462 = arguments.length;
var i__7215__auto___12463 = (0);
while(true){
if((i__7215__auto___12463 < len__7214__auto___12462)){
args12391.push((arguments[i__7215__auto___12463]));

var G__12464 = (i__7215__auto___12463 + (1));
i__7215__auto___12463 = G__12464;
continue;
} else {
}
break;
}

var G__12393 = args12391.length;
switch (G__12393) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12391.length)].join('')));

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
var c__10447__auto___12466 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10447__auto___12466,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10448__auto__ = (function (){var switch__10324__auto__ = ((function (c__10447__auto___12466,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12432){
var state_val_12433 = (state_12432[(1)]);
if((state_val_12433 === (7))){
var state_12432__$1 = state_12432;
var statearr_12434_12467 = state_12432__$1;
(statearr_12434_12467[(2)] = null);

(statearr_12434_12467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12433 === (1))){
var state_12432__$1 = state_12432;
var statearr_12435_12468 = state_12432__$1;
(statearr_12435_12468[(2)] = null);

(statearr_12435_12468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12433 === (4))){
var inst_12396 = (state_12432[(7)]);
var inst_12398 = (inst_12396 < cnt);
var state_12432__$1 = state_12432;
if(cljs.core.truth_(inst_12398)){
var statearr_12436_12469 = state_12432__$1;
(statearr_12436_12469[(1)] = (6));

} else {
var statearr_12437_12470 = state_12432__$1;
(statearr_12437_12470[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12433 === (15))){
var inst_12428 = (state_12432[(2)]);
var state_12432__$1 = state_12432;
var statearr_12438_12471 = state_12432__$1;
(statearr_12438_12471[(2)] = inst_12428);

(statearr_12438_12471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12433 === (13))){
var inst_12421 = cljs.core.async.close_BANG_.call(null,out);
var state_12432__$1 = state_12432;
var statearr_12439_12472 = state_12432__$1;
(statearr_12439_12472[(2)] = inst_12421);

(statearr_12439_12472[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12433 === (6))){
var state_12432__$1 = state_12432;
var statearr_12440_12473 = state_12432__$1;
(statearr_12440_12473[(2)] = null);

(statearr_12440_12473[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12433 === (3))){
var inst_12430 = (state_12432[(2)]);
var state_12432__$1 = state_12432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12432__$1,inst_12430);
} else {
if((state_val_12433 === (12))){
var inst_12418 = (state_12432[(8)]);
var inst_12418__$1 = (state_12432[(2)]);
var inst_12419 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12418__$1);
var state_12432__$1 = (function (){var statearr_12441 = state_12432;
(statearr_12441[(8)] = inst_12418__$1);

return statearr_12441;
})();
if(cljs.core.truth_(inst_12419)){
var statearr_12442_12474 = state_12432__$1;
(statearr_12442_12474[(1)] = (13));

} else {
var statearr_12443_12475 = state_12432__$1;
(statearr_12443_12475[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12433 === (2))){
var inst_12395 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12396 = (0);
var state_12432__$1 = (function (){var statearr_12444 = state_12432;
(statearr_12444[(7)] = inst_12396);

(statearr_12444[(9)] = inst_12395);

return statearr_12444;
})();
var statearr_12445_12476 = state_12432__$1;
(statearr_12445_12476[(2)] = null);

(statearr_12445_12476[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12433 === (11))){
var inst_12396 = (state_12432[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12432,(10),Object,null,(9));
var inst_12405 = chs__$1.call(null,inst_12396);
var inst_12406 = done.call(null,inst_12396);
var inst_12407 = cljs.core.async.take_BANG_.call(null,inst_12405,inst_12406);
var state_12432__$1 = state_12432;
var statearr_12446_12477 = state_12432__$1;
(statearr_12446_12477[(2)] = inst_12407);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12432__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12433 === (9))){
var inst_12396 = (state_12432[(7)]);
var inst_12409 = (state_12432[(2)]);
var inst_12410 = (inst_12396 + (1));
var inst_12396__$1 = inst_12410;
var state_12432__$1 = (function (){var statearr_12447 = state_12432;
(statearr_12447[(7)] = inst_12396__$1);

(statearr_12447[(10)] = inst_12409);

return statearr_12447;
})();
var statearr_12448_12478 = state_12432__$1;
(statearr_12448_12478[(2)] = null);

(statearr_12448_12478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12433 === (5))){
var inst_12416 = (state_12432[(2)]);
var state_12432__$1 = (function (){var statearr_12449 = state_12432;
(statearr_12449[(11)] = inst_12416);

return statearr_12449;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12432__$1,(12),dchan);
} else {
if((state_val_12433 === (14))){
var inst_12418 = (state_12432[(8)]);
var inst_12423 = cljs.core.apply.call(null,f,inst_12418);
var state_12432__$1 = state_12432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12432__$1,(16),out,inst_12423);
} else {
if((state_val_12433 === (16))){
var inst_12425 = (state_12432[(2)]);
var state_12432__$1 = (function (){var statearr_12450 = state_12432;
(statearr_12450[(12)] = inst_12425);

return statearr_12450;
})();
var statearr_12451_12479 = state_12432__$1;
(statearr_12451_12479[(2)] = null);

(statearr_12451_12479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12433 === (10))){
var inst_12400 = (state_12432[(2)]);
var inst_12401 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12432__$1 = (function (){var statearr_12452 = state_12432;
(statearr_12452[(13)] = inst_12400);

return statearr_12452;
})();
var statearr_12453_12480 = state_12432__$1;
(statearr_12453_12480[(2)] = inst_12401);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12432__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12433 === (8))){
var inst_12414 = (state_12432[(2)]);
var state_12432__$1 = state_12432;
var statearr_12454_12481 = state_12432__$1;
(statearr_12454_12481[(2)] = inst_12414);

(statearr_12454_12481[(1)] = (5));


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
});})(c__10447__auto___12466,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10324__auto__,c__10447__auto___12466,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10325__auto__ = null;
var cljs$core$async$state_machine__10325__auto____0 = (function (){
var statearr_12458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12458[(0)] = cljs$core$async$state_machine__10325__auto__);

(statearr_12458[(1)] = (1));

return statearr_12458;
});
var cljs$core$async$state_machine__10325__auto____1 = (function (state_12432){
while(true){
var ret_value__10326__auto__ = (function (){try{while(true){
var result__10327__auto__ = switch__10324__auto__.call(null,state_12432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10327__auto__;
}
break;
}
}catch (e12459){if((e12459 instanceof Object)){
var ex__10328__auto__ = e12459;
var statearr_12460_12482 = state_12432;
(statearr_12460_12482[(5)] = ex__10328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12483 = state_12432;
state_12432 = G__12483;
continue;
} else {
return ret_value__10326__auto__;
}
break;
}
});
cljs$core$async$state_machine__10325__auto__ = function(state_12432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10325__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10325__auto____1.call(this,state_12432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10325__auto____0;
cljs$core$async$state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10325__auto____1;
return cljs$core$async$state_machine__10325__auto__;
})()
;})(switch__10324__auto__,c__10447__auto___12466,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10449__auto__ = (function (){var statearr_12461 = f__10448__auto__.call(null);
(statearr_12461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10447__auto___12466);

return statearr_12461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10449__auto__);
});})(c__10447__auto___12466,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args12485 = [];
var len__7214__auto___12541 = arguments.length;
var i__7215__auto___12542 = (0);
while(true){
if((i__7215__auto___12542 < len__7214__auto___12541)){
args12485.push((arguments[i__7215__auto___12542]));

var G__12543 = (i__7215__auto___12542 + (1));
i__7215__auto___12542 = G__12543;
continue;
} else {
}
break;
}

var G__12487 = args12485.length;
switch (G__12487) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12485.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10447__auto___12545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10447__auto___12545,out){
return (function (){
var f__10448__auto__ = (function (){var switch__10324__auto__ = ((function (c__10447__auto___12545,out){
return (function (state_12517){
var state_val_12518 = (state_12517[(1)]);
if((state_val_12518 === (7))){
var inst_12496 = (state_12517[(7)]);
var inst_12497 = (state_12517[(8)]);
var inst_12496__$1 = (state_12517[(2)]);
var inst_12497__$1 = cljs.core.nth.call(null,inst_12496__$1,(0),null);
var inst_12498 = cljs.core.nth.call(null,inst_12496__$1,(1),null);
var inst_12499 = (inst_12497__$1 == null);
var state_12517__$1 = (function (){var statearr_12519 = state_12517;
(statearr_12519[(7)] = inst_12496__$1);

(statearr_12519[(9)] = inst_12498);

(statearr_12519[(8)] = inst_12497__$1);

return statearr_12519;
})();
if(cljs.core.truth_(inst_12499)){
var statearr_12520_12546 = state_12517__$1;
(statearr_12520_12546[(1)] = (8));

} else {
var statearr_12521_12547 = state_12517__$1;
(statearr_12521_12547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12518 === (1))){
var inst_12488 = cljs.core.vec.call(null,chs);
var inst_12489 = inst_12488;
var state_12517__$1 = (function (){var statearr_12522 = state_12517;
(statearr_12522[(10)] = inst_12489);

return statearr_12522;
})();
var statearr_12523_12548 = state_12517__$1;
(statearr_12523_12548[(2)] = null);

(statearr_12523_12548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12518 === (4))){
var inst_12489 = (state_12517[(10)]);
var state_12517__$1 = state_12517;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12517__$1,(7),inst_12489);
} else {
if((state_val_12518 === (6))){
var inst_12513 = (state_12517[(2)]);
var state_12517__$1 = state_12517;
var statearr_12524_12549 = state_12517__$1;
(statearr_12524_12549[(2)] = inst_12513);

(statearr_12524_12549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12518 === (3))){
var inst_12515 = (state_12517[(2)]);
var state_12517__$1 = state_12517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12517__$1,inst_12515);
} else {
if((state_val_12518 === (2))){
var inst_12489 = (state_12517[(10)]);
var inst_12491 = cljs.core.count.call(null,inst_12489);
var inst_12492 = (inst_12491 > (0));
var state_12517__$1 = state_12517;
if(cljs.core.truth_(inst_12492)){
var statearr_12526_12550 = state_12517__$1;
(statearr_12526_12550[(1)] = (4));

} else {
var statearr_12527_12551 = state_12517__$1;
(statearr_12527_12551[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12518 === (11))){
var inst_12489 = (state_12517[(10)]);
var inst_12506 = (state_12517[(2)]);
var tmp12525 = inst_12489;
var inst_12489__$1 = tmp12525;
var state_12517__$1 = (function (){var statearr_12528 = state_12517;
(statearr_12528[(10)] = inst_12489__$1);

(statearr_12528[(11)] = inst_12506);

return statearr_12528;
})();
var statearr_12529_12552 = state_12517__$1;
(statearr_12529_12552[(2)] = null);

(statearr_12529_12552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12518 === (9))){
var inst_12497 = (state_12517[(8)]);
var state_12517__$1 = state_12517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12517__$1,(11),out,inst_12497);
} else {
if((state_val_12518 === (5))){
var inst_12511 = cljs.core.async.close_BANG_.call(null,out);
var state_12517__$1 = state_12517;
var statearr_12530_12553 = state_12517__$1;
(statearr_12530_12553[(2)] = inst_12511);

(statearr_12530_12553[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12518 === (10))){
var inst_12509 = (state_12517[(2)]);
var state_12517__$1 = state_12517;
var statearr_12531_12554 = state_12517__$1;
(statearr_12531_12554[(2)] = inst_12509);

(statearr_12531_12554[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12518 === (8))){
var inst_12489 = (state_12517[(10)]);
var inst_12496 = (state_12517[(7)]);
var inst_12498 = (state_12517[(9)]);
var inst_12497 = (state_12517[(8)]);
var inst_12501 = (function (){var cs = inst_12489;
var vec__12494 = inst_12496;
var v = inst_12497;
var c = inst_12498;
return ((function (cs,vec__12494,v,c,inst_12489,inst_12496,inst_12498,inst_12497,state_val_12518,c__10447__auto___12545,out){
return (function (p1__12484_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12484_SHARP_);
});
;})(cs,vec__12494,v,c,inst_12489,inst_12496,inst_12498,inst_12497,state_val_12518,c__10447__auto___12545,out))
})();
var inst_12502 = cljs.core.filterv.call(null,inst_12501,inst_12489);
var inst_12489__$1 = inst_12502;
var state_12517__$1 = (function (){var statearr_12532 = state_12517;
(statearr_12532[(10)] = inst_12489__$1);

return statearr_12532;
})();
var statearr_12533_12555 = state_12517__$1;
(statearr_12533_12555[(2)] = null);

(statearr_12533_12555[(1)] = (2));


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
});})(c__10447__auto___12545,out))
;
return ((function (switch__10324__auto__,c__10447__auto___12545,out){
return (function() {
var cljs$core$async$state_machine__10325__auto__ = null;
var cljs$core$async$state_machine__10325__auto____0 = (function (){
var statearr_12537 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12537[(0)] = cljs$core$async$state_machine__10325__auto__);

(statearr_12537[(1)] = (1));

return statearr_12537;
});
var cljs$core$async$state_machine__10325__auto____1 = (function (state_12517){
while(true){
var ret_value__10326__auto__ = (function (){try{while(true){
var result__10327__auto__ = switch__10324__auto__.call(null,state_12517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10327__auto__;
}
break;
}
}catch (e12538){if((e12538 instanceof Object)){
var ex__10328__auto__ = e12538;
var statearr_12539_12556 = state_12517;
(statearr_12539_12556[(5)] = ex__10328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12557 = state_12517;
state_12517 = G__12557;
continue;
} else {
return ret_value__10326__auto__;
}
break;
}
});
cljs$core$async$state_machine__10325__auto__ = function(state_12517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10325__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10325__auto____1.call(this,state_12517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10325__auto____0;
cljs$core$async$state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10325__auto____1;
return cljs$core$async$state_machine__10325__auto__;
})()
;})(switch__10324__auto__,c__10447__auto___12545,out))
})();
var state__10449__auto__ = (function (){var statearr_12540 = f__10448__auto__.call(null);
(statearr_12540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10447__auto___12545);

return statearr_12540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10449__auto__);
});})(c__10447__auto___12545,out))
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
var args12558 = [];
var len__7214__auto___12607 = arguments.length;
var i__7215__auto___12608 = (0);
while(true){
if((i__7215__auto___12608 < len__7214__auto___12607)){
args12558.push((arguments[i__7215__auto___12608]));

var G__12609 = (i__7215__auto___12608 + (1));
i__7215__auto___12608 = G__12609;
continue;
} else {
}
break;
}

var G__12560 = args12558.length;
switch (G__12560) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12558.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10447__auto___12611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10447__auto___12611,out){
return (function (){
var f__10448__auto__ = (function (){var switch__10324__auto__ = ((function (c__10447__auto___12611,out){
return (function (state_12584){
var state_val_12585 = (state_12584[(1)]);
if((state_val_12585 === (7))){
var inst_12566 = (state_12584[(7)]);
var inst_12566__$1 = (state_12584[(2)]);
var inst_12567 = (inst_12566__$1 == null);
var inst_12568 = cljs.core.not.call(null,inst_12567);
var state_12584__$1 = (function (){var statearr_12586 = state_12584;
(statearr_12586[(7)] = inst_12566__$1);

return statearr_12586;
})();
if(inst_12568){
var statearr_12587_12612 = state_12584__$1;
(statearr_12587_12612[(1)] = (8));

} else {
var statearr_12588_12613 = state_12584__$1;
(statearr_12588_12613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12585 === (1))){
var inst_12561 = (0);
var state_12584__$1 = (function (){var statearr_12589 = state_12584;
(statearr_12589[(8)] = inst_12561);

return statearr_12589;
})();
var statearr_12590_12614 = state_12584__$1;
(statearr_12590_12614[(2)] = null);

(statearr_12590_12614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12585 === (4))){
var state_12584__$1 = state_12584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12584__$1,(7),ch);
} else {
if((state_val_12585 === (6))){
var inst_12579 = (state_12584[(2)]);
var state_12584__$1 = state_12584;
var statearr_12591_12615 = state_12584__$1;
(statearr_12591_12615[(2)] = inst_12579);

(statearr_12591_12615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12585 === (3))){
var inst_12581 = (state_12584[(2)]);
var inst_12582 = cljs.core.async.close_BANG_.call(null,out);
var state_12584__$1 = (function (){var statearr_12592 = state_12584;
(statearr_12592[(9)] = inst_12581);

return statearr_12592;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12584__$1,inst_12582);
} else {
if((state_val_12585 === (2))){
var inst_12561 = (state_12584[(8)]);
var inst_12563 = (inst_12561 < n);
var state_12584__$1 = state_12584;
if(cljs.core.truth_(inst_12563)){
var statearr_12593_12616 = state_12584__$1;
(statearr_12593_12616[(1)] = (4));

} else {
var statearr_12594_12617 = state_12584__$1;
(statearr_12594_12617[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12585 === (11))){
var inst_12561 = (state_12584[(8)]);
var inst_12571 = (state_12584[(2)]);
var inst_12572 = (inst_12561 + (1));
var inst_12561__$1 = inst_12572;
var state_12584__$1 = (function (){var statearr_12595 = state_12584;
(statearr_12595[(10)] = inst_12571);

(statearr_12595[(8)] = inst_12561__$1);

return statearr_12595;
})();
var statearr_12596_12618 = state_12584__$1;
(statearr_12596_12618[(2)] = null);

(statearr_12596_12618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12585 === (9))){
var state_12584__$1 = state_12584;
var statearr_12597_12619 = state_12584__$1;
(statearr_12597_12619[(2)] = null);

(statearr_12597_12619[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12585 === (5))){
var state_12584__$1 = state_12584;
var statearr_12598_12620 = state_12584__$1;
(statearr_12598_12620[(2)] = null);

(statearr_12598_12620[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12585 === (10))){
var inst_12576 = (state_12584[(2)]);
var state_12584__$1 = state_12584;
var statearr_12599_12621 = state_12584__$1;
(statearr_12599_12621[(2)] = inst_12576);

(statearr_12599_12621[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12585 === (8))){
var inst_12566 = (state_12584[(7)]);
var state_12584__$1 = state_12584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12584__$1,(11),out,inst_12566);
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
});})(c__10447__auto___12611,out))
;
return ((function (switch__10324__auto__,c__10447__auto___12611,out){
return (function() {
var cljs$core$async$state_machine__10325__auto__ = null;
var cljs$core$async$state_machine__10325__auto____0 = (function (){
var statearr_12603 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12603[(0)] = cljs$core$async$state_machine__10325__auto__);

(statearr_12603[(1)] = (1));

return statearr_12603;
});
var cljs$core$async$state_machine__10325__auto____1 = (function (state_12584){
while(true){
var ret_value__10326__auto__ = (function (){try{while(true){
var result__10327__auto__ = switch__10324__auto__.call(null,state_12584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10327__auto__;
}
break;
}
}catch (e12604){if((e12604 instanceof Object)){
var ex__10328__auto__ = e12604;
var statearr_12605_12622 = state_12584;
(statearr_12605_12622[(5)] = ex__10328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12623 = state_12584;
state_12584 = G__12623;
continue;
} else {
return ret_value__10326__auto__;
}
break;
}
});
cljs$core$async$state_machine__10325__auto__ = function(state_12584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10325__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10325__auto____1.call(this,state_12584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10325__auto____0;
cljs$core$async$state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10325__auto____1;
return cljs$core$async$state_machine__10325__auto__;
})()
;})(switch__10324__auto__,c__10447__auto___12611,out))
})();
var state__10449__auto__ = (function (){var statearr_12606 = f__10448__auto__.call(null);
(statearr_12606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10447__auto___12611);

return statearr_12606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10449__auto__);
});})(c__10447__auto___12611,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12631 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12631 = (function (map_LT_,f,ch,meta12632){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta12632 = meta12632;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12633,meta12632__$1){
var self__ = this;
var _12633__$1 = this;
return (new cljs.core.async.t_cljs$core$async12631(self__.map_LT_,self__.f,self__.ch,meta12632__$1));
});

cljs.core.async.t_cljs$core$async12631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12633){
var self__ = this;
var _12633__$1 = this;
return self__.meta12632;
});

cljs.core.async.t_cljs$core$async12631.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async12631.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12631.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12631.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async12631.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async12634 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12634 = (function (map_LT_,f,ch,meta12632,_,fn1,meta12635){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta12632 = meta12632;
this._ = _;
this.fn1 = fn1;
this.meta12635 = meta12635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12636,meta12635__$1){
var self__ = this;
var _12636__$1 = this;
return (new cljs.core.async.t_cljs$core$async12634(self__.map_LT_,self__.f,self__.ch,self__.meta12632,self__._,self__.fn1,meta12635__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async12634.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12636){
var self__ = this;
var _12636__$1 = this;
return self__.meta12635;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12634.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12634.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12634.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12634.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__12624_SHARP_){
return f1.call(null,(((p1__12624_SHARP_ == null))?null:self__.f.call(null,p1__12624_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async12634.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12632","meta12632",1874867183,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12631","cljs.core.async/t_cljs$core$async12631",-67287132,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12635","meta12635",-659399111,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12634.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12634.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12634";

cljs.core.async.t_cljs$core$async12634.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async12634");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async12634 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12634(map_LT___$1,f__$1,ch__$1,meta12632__$1,___$2,fn1__$1,meta12635){
return (new cljs.core.async.t_cljs$core$async12634(map_LT___$1,f__$1,ch__$1,meta12632__$1,___$2,fn1__$1,meta12635));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async12634(self__.map_LT_,self__.f,self__.ch,self__.meta12632,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async12631.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async12631.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async12631.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12632","meta12632",1874867183,null)], null);
});

cljs.core.async.t_cljs$core$async12631.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12631.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12631";

cljs.core.async.t_cljs$core$async12631.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async12631");
});

cljs.core.async.__GT_t_cljs$core$async12631 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12631(map_LT___$1,f__$1,ch__$1,meta12632){
return (new cljs.core.async.t_cljs$core$async12631(map_LT___$1,f__$1,ch__$1,meta12632));
});

}

return (new cljs.core.async.t_cljs$core$async12631(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12640 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12640 = (function (map_GT_,f,ch,meta12641){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta12641 = meta12641;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12642,meta12641__$1){
var self__ = this;
var _12642__$1 = this;
return (new cljs.core.async.t_cljs$core$async12640(self__.map_GT_,self__.f,self__.ch,meta12641__$1));
});

cljs.core.async.t_cljs$core$async12640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12642){
var self__ = this;
var _12642__$1 = this;
return self__.meta12641;
});

cljs.core.async.t_cljs$core$async12640.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async12640.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12640.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async12640.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12640.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async12640.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async12640.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12641","meta12641",-1930670261,null)], null);
});

cljs.core.async.t_cljs$core$async12640.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12640.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12640";

cljs.core.async.t_cljs$core$async12640.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async12640");
});

cljs.core.async.__GT_t_cljs$core$async12640 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12640(map_GT___$1,f__$1,ch__$1,meta12641){
return (new cljs.core.async.t_cljs$core$async12640(map_GT___$1,f__$1,ch__$1,meta12641));
});

}

return (new cljs.core.async.t_cljs$core$async12640(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async12646 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12646 = (function (filter_GT_,p,ch,meta12647){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta12647 = meta12647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12648,meta12647__$1){
var self__ = this;
var _12648__$1 = this;
return (new cljs.core.async.t_cljs$core$async12646(self__.filter_GT_,self__.p,self__.ch,meta12647__$1));
});

cljs.core.async.t_cljs$core$async12646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12648){
var self__ = this;
var _12648__$1 = this;
return self__.meta12647;
});

cljs.core.async.t_cljs$core$async12646.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async12646.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12646.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12646.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async12646.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12646.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async12646.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async12646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12647","meta12647",-22718591,null)], null);
});

cljs.core.async.t_cljs$core$async12646.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12646";

cljs.core.async.t_cljs$core$async12646.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async12646");
});

cljs.core.async.__GT_t_cljs$core$async12646 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12646(filter_GT___$1,p__$1,ch__$1,meta12647){
return (new cljs.core.async.t_cljs$core$async12646(filter_GT___$1,p__$1,ch__$1,meta12647));
});

}

return (new cljs.core.async.t_cljs$core$async12646(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args12649 = [];
var len__7214__auto___12693 = arguments.length;
var i__7215__auto___12694 = (0);
while(true){
if((i__7215__auto___12694 < len__7214__auto___12693)){
args12649.push((arguments[i__7215__auto___12694]));

var G__12695 = (i__7215__auto___12694 + (1));
i__7215__auto___12694 = G__12695;
continue;
} else {
}
break;
}

var G__12651 = args12649.length;
switch (G__12651) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12649.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10447__auto___12697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10447__auto___12697,out){
return (function (){
var f__10448__auto__ = (function (){var switch__10324__auto__ = ((function (c__10447__auto___12697,out){
return (function (state_12672){
var state_val_12673 = (state_12672[(1)]);
if((state_val_12673 === (7))){
var inst_12668 = (state_12672[(2)]);
var state_12672__$1 = state_12672;
var statearr_12674_12698 = state_12672__$1;
(statearr_12674_12698[(2)] = inst_12668);

(statearr_12674_12698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12673 === (1))){
var state_12672__$1 = state_12672;
var statearr_12675_12699 = state_12672__$1;
(statearr_12675_12699[(2)] = null);

(statearr_12675_12699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12673 === (4))){
var inst_12654 = (state_12672[(7)]);
var inst_12654__$1 = (state_12672[(2)]);
var inst_12655 = (inst_12654__$1 == null);
var state_12672__$1 = (function (){var statearr_12676 = state_12672;
(statearr_12676[(7)] = inst_12654__$1);

return statearr_12676;
})();
if(cljs.core.truth_(inst_12655)){
var statearr_12677_12700 = state_12672__$1;
(statearr_12677_12700[(1)] = (5));

} else {
var statearr_12678_12701 = state_12672__$1;
(statearr_12678_12701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12673 === (6))){
var inst_12654 = (state_12672[(7)]);
var inst_12659 = p.call(null,inst_12654);
var state_12672__$1 = state_12672;
if(cljs.core.truth_(inst_12659)){
var statearr_12679_12702 = state_12672__$1;
(statearr_12679_12702[(1)] = (8));

} else {
var statearr_12680_12703 = state_12672__$1;
(statearr_12680_12703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12673 === (3))){
var inst_12670 = (state_12672[(2)]);
var state_12672__$1 = state_12672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12672__$1,inst_12670);
} else {
if((state_val_12673 === (2))){
var state_12672__$1 = state_12672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12672__$1,(4),ch);
} else {
if((state_val_12673 === (11))){
var inst_12662 = (state_12672[(2)]);
var state_12672__$1 = state_12672;
var statearr_12681_12704 = state_12672__$1;
(statearr_12681_12704[(2)] = inst_12662);

(statearr_12681_12704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12673 === (9))){
var state_12672__$1 = state_12672;
var statearr_12682_12705 = state_12672__$1;
(statearr_12682_12705[(2)] = null);

(statearr_12682_12705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12673 === (5))){
var inst_12657 = cljs.core.async.close_BANG_.call(null,out);
var state_12672__$1 = state_12672;
var statearr_12683_12706 = state_12672__$1;
(statearr_12683_12706[(2)] = inst_12657);

(statearr_12683_12706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12673 === (10))){
var inst_12665 = (state_12672[(2)]);
var state_12672__$1 = (function (){var statearr_12684 = state_12672;
(statearr_12684[(8)] = inst_12665);

return statearr_12684;
})();
var statearr_12685_12707 = state_12672__$1;
(statearr_12685_12707[(2)] = null);

(statearr_12685_12707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12673 === (8))){
var inst_12654 = (state_12672[(7)]);
var state_12672__$1 = state_12672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12672__$1,(11),out,inst_12654);
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
});})(c__10447__auto___12697,out))
;
return ((function (switch__10324__auto__,c__10447__auto___12697,out){
return (function() {
var cljs$core$async$state_machine__10325__auto__ = null;
var cljs$core$async$state_machine__10325__auto____0 = (function (){
var statearr_12689 = [null,null,null,null,null,null,null,null,null];
(statearr_12689[(0)] = cljs$core$async$state_machine__10325__auto__);

(statearr_12689[(1)] = (1));

return statearr_12689;
});
var cljs$core$async$state_machine__10325__auto____1 = (function (state_12672){
while(true){
var ret_value__10326__auto__ = (function (){try{while(true){
var result__10327__auto__ = switch__10324__auto__.call(null,state_12672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10327__auto__;
}
break;
}
}catch (e12690){if((e12690 instanceof Object)){
var ex__10328__auto__ = e12690;
var statearr_12691_12708 = state_12672;
(statearr_12691_12708[(5)] = ex__10328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12709 = state_12672;
state_12672 = G__12709;
continue;
} else {
return ret_value__10326__auto__;
}
break;
}
});
cljs$core$async$state_machine__10325__auto__ = function(state_12672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10325__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10325__auto____1.call(this,state_12672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10325__auto____0;
cljs$core$async$state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10325__auto____1;
return cljs$core$async$state_machine__10325__auto__;
})()
;})(switch__10324__auto__,c__10447__auto___12697,out))
})();
var state__10449__auto__ = (function (){var statearr_12692 = f__10448__auto__.call(null);
(statearr_12692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10447__auto___12697);

return statearr_12692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10449__auto__);
});})(c__10447__auto___12697,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args12710 = [];
var len__7214__auto___12713 = arguments.length;
var i__7215__auto___12714 = (0);
while(true){
if((i__7215__auto___12714 < len__7214__auto___12713)){
args12710.push((arguments[i__7215__auto___12714]));

var G__12715 = (i__7215__auto___12714 + (1));
i__7215__auto___12714 = G__12715;
continue;
} else {
}
break;
}

var G__12712 = args12710.length;
switch (G__12712) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12710.length)].join('')));

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
var c__10447__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10447__auto__){
return (function (){
var f__10448__auto__ = (function (){var switch__10324__auto__ = ((function (c__10447__auto__){
return (function (state_12882){
var state_val_12883 = (state_12882[(1)]);
if((state_val_12883 === (7))){
var inst_12878 = (state_12882[(2)]);
var state_12882__$1 = state_12882;
var statearr_12884_12925 = state_12882__$1;
(statearr_12884_12925[(2)] = inst_12878);

(statearr_12884_12925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12883 === (20))){
var inst_12848 = (state_12882[(7)]);
var inst_12859 = (state_12882[(2)]);
var inst_12860 = cljs.core.next.call(null,inst_12848);
var inst_12834 = inst_12860;
var inst_12835 = null;
var inst_12836 = (0);
var inst_12837 = (0);
var state_12882__$1 = (function (){var statearr_12885 = state_12882;
(statearr_12885[(8)] = inst_12836);

(statearr_12885[(9)] = inst_12834);

(statearr_12885[(10)] = inst_12859);

(statearr_12885[(11)] = inst_12837);

(statearr_12885[(12)] = inst_12835);

return statearr_12885;
})();
var statearr_12886_12926 = state_12882__$1;
(statearr_12886_12926[(2)] = null);

(statearr_12886_12926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12883 === (1))){
var state_12882__$1 = state_12882;
var statearr_12887_12927 = state_12882__$1;
(statearr_12887_12927[(2)] = null);

(statearr_12887_12927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12883 === (4))){
var inst_12823 = (state_12882[(13)]);
var inst_12823__$1 = (state_12882[(2)]);
var inst_12824 = (inst_12823__$1 == null);
var state_12882__$1 = (function (){var statearr_12888 = state_12882;
(statearr_12888[(13)] = inst_12823__$1);

return statearr_12888;
})();
if(cljs.core.truth_(inst_12824)){
var statearr_12889_12928 = state_12882__$1;
(statearr_12889_12928[(1)] = (5));

} else {
var statearr_12890_12929 = state_12882__$1;
(statearr_12890_12929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12883 === (15))){
var state_12882__$1 = state_12882;
var statearr_12894_12930 = state_12882__$1;
(statearr_12894_12930[(2)] = null);

(statearr_12894_12930[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12883 === (21))){
var state_12882__$1 = state_12882;
var statearr_12895_12931 = state_12882__$1;
(statearr_12895_12931[(2)] = null);

(statearr_12895_12931[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12883 === (13))){
var inst_12836 = (state_12882[(8)]);
var inst_12834 = (state_12882[(9)]);
var inst_12837 = (state_12882[(11)]);
var inst_12835 = (state_12882[(12)]);
var inst_12844 = (state_12882[(2)]);
var inst_12845 = (inst_12837 + (1));
var tmp12891 = inst_12836;
var tmp12892 = inst_12834;
var tmp12893 = inst_12835;
var inst_12834__$1 = tmp12892;
var inst_12835__$1 = tmp12893;
var inst_12836__$1 = tmp12891;
var inst_12837__$1 = inst_12845;
var state_12882__$1 = (function (){var statearr_12896 = state_12882;
(statearr_12896[(8)] = inst_12836__$1);

(statearr_12896[(9)] = inst_12834__$1);

(statearr_12896[(11)] = inst_12837__$1);

(statearr_12896[(14)] = inst_12844);

(statearr_12896[(12)] = inst_12835__$1);

return statearr_12896;
})();
var statearr_12897_12932 = state_12882__$1;
(statearr_12897_12932[(2)] = null);

(statearr_12897_12932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12883 === (22))){
var state_12882__$1 = state_12882;
var statearr_12898_12933 = state_12882__$1;
(statearr_12898_12933[(2)] = null);

(statearr_12898_12933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12883 === (6))){
var inst_12823 = (state_12882[(13)]);
var inst_12832 = f.call(null,inst_12823);
var inst_12833 = cljs.core.seq.call(null,inst_12832);
var inst_12834 = inst_12833;
var inst_12835 = null;
var inst_12836 = (0);
var inst_12837 = (0);
var state_12882__$1 = (function (){var statearr_12899 = state_12882;
(statearr_12899[(8)] = inst_12836);

(statearr_12899[(9)] = inst_12834);

(statearr_12899[(11)] = inst_12837);

(statearr_12899[(12)] = inst_12835);

return statearr_12899;
})();
var statearr_12900_12934 = state_12882__$1;
(statearr_12900_12934[(2)] = null);

(statearr_12900_12934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12883 === (17))){
var inst_12848 = (state_12882[(7)]);
var inst_12852 = cljs.core.chunk_first.call(null,inst_12848);
var inst_12853 = cljs.core.chunk_rest.call(null,inst_12848);
var inst_12854 = cljs.core.count.call(null,inst_12852);
var inst_12834 = inst_12853;
var inst_12835 = inst_12852;
var inst_12836 = inst_12854;
var inst_12837 = (0);
var state_12882__$1 = (function (){var statearr_12901 = state_12882;
(statearr_12901[(8)] = inst_12836);

(statearr_12901[(9)] = inst_12834);

(statearr_12901[(11)] = inst_12837);

(statearr_12901[(12)] = inst_12835);

return statearr_12901;
})();
var statearr_12902_12935 = state_12882__$1;
(statearr_12902_12935[(2)] = null);

(statearr_12902_12935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12883 === (3))){
var inst_12880 = (state_12882[(2)]);
var state_12882__$1 = state_12882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12882__$1,inst_12880);
} else {
if((state_val_12883 === (12))){
var inst_12868 = (state_12882[(2)]);
var state_12882__$1 = state_12882;
var statearr_12903_12936 = state_12882__$1;
(statearr_12903_12936[(2)] = inst_12868);

(statearr_12903_12936[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12883 === (2))){
var state_12882__$1 = state_12882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12882__$1,(4),in$);
} else {
if((state_val_12883 === (23))){
var inst_12876 = (state_12882[(2)]);
var state_12882__$1 = state_12882;
var statearr_12904_12937 = state_12882__$1;
(statearr_12904_12937[(2)] = inst_12876);

(statearr_12904_12937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12883 === (19))){
var inst_12863 = (state_12882[(2)]);
var state_12882__$1 = state_12882;
var statearr_12905_12938 = state_12882__$1;
(statearr_12905_12938[(2)] = inst_12863);

(statearr_12905_12938[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12883 === (11))){
var inst_12834 = (state_12882[(9)]);
var inst_12848 = (state_12882[(7)]);
var inst_12848__$1 = cljs.core.seq.call(null,inst_12834);
var state_12882__$1 = (function (){var statearr_12906 = state_12882;
(statearr_12906[(7)] = inst_12848__$1);

return statearr_12906;
})();
if(inst_12848__$1){
var statearr_12907_12939 = state_12882__$1;
(statearr_12907_12939[(1)] = (14));

} else {
var statearr_12908_12940 = state_12882__$1;
(statearr_12908_12940[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12883 === (9))){
var inst_12870 = (state_12882[(2)]);
var inst_12871 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12882__$1 = (function (){var statearr_12909 = state_12882;
(statearr_12909[(15)] = inst_12870);

return statearr_12909;
})();
if(cljs.core.truth_(inst_12871)){
var statearr_12910_12941 = state_12882__$1;
(statearr_12910_12941[(1)] = (21));

} else {
var statearr_12911_12942 = state_12882__$1;
(statearr_12911_12942[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12883 === (5))){
var inst_12826 = cljs.core.async.close_BANG_.call(null,out);
var state_12882__$1 = state_12882;
var statearr_12912_12943 = state_12882__$1;
(statearr_12912_12943[(2)] = inst_12826);

(statearr_12912_12943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12883 === (14))){
var inst_12848 = (state_12882[(7)]);
var inst_12850 = cljs.core.chunked_seq_QMARK_.call(null,inst_12848);
var state_12882__$1 = state_12882;
if(inst_12850){
var statearr_12913_12944 = state_12882__$1;
(statearr_12913_12944[(1)] = (17));

} else {
var statearr_12914_12945 = state_12882__$1;
(statearr_12914_12945[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12883 === (16))){
var inst_12866 = (state_12882[(2)]);
var state_12882__$1 = state_12882;
var statearr_12915_12946 = state_12882__$1;
(statearr_12915_12946[(2)] = inst_12866);

(statearr_12915_12946[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12883 === (10))){
var inst_12837 = (state_12882[(11)]);
var inst_12835 = (state_12882[(12)]);
var inst_12842 = cljs.core._nth.call(null,inst_12835,inst_12837);
var state_12882__$1 = state_12882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12882__$1,(13),out,inst_12842);
} else {
if((state_val_12883 === (18))){
var inst_12848 = (state_12882[(7)]);
var inst_12857 = cljs.core.first.call(null,inst_12848);
var state_12882__$1 = state_12882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12882__$1,(20),out,inst_12857);
} else {
if((state_val_12883 === (8))){
var inst_12836 = (state_12882[(8)]);
var inst_12837 = (state_12882[(11)]);
var inst_12839 = (inst_12837 < inst_12836);
var inst_12840 = inst_12839;
var state_12882__$1 = state_12882;
if(cljs.core.truth_(inst_12840)){
var statearr_12916_12947 = state_12882__$1;
(statearr_12916_12947[(1)] = (10));

} else {
var statearr_12917_12948 = state_12882__$1;
(statearr_12917_12948[(1)] = (11));

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
});})(c__10447__auto__))
;
return ((function (switch__10324__auto__,c__10447__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10325__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10325__auto____0 = (function (){
var statearr_12921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12921[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10325__auto__);

(statearr_12921[(1)] = (1));

return statearr_12921;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10325__auto____1 = (function (state_12882){
while(true){
var ret_value__10326__auto__ = (function (){try{while(true){
var result__10327__auto__ = switch__10324__auto__.call(null,state_12882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10327__auto__;
}
break;
}
}catch (e12922){if((e12922 instanceof Object)){
var ex__10328__auto__ = e12922;
var statearr_12923_12949 = state_12882;
(statearr_12923_12949[(5)] = ex__10328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12950 = state_12882;
state_12882 = G__12950;
continue;
} else {
return ret_value__10326__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10325__auto__ = function(state_12882){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10325__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10325__auto____1.call(this,state_12882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10325__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10325__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10325__auto__;
})()
;})(switch__10324__auto__,c__10447__auto__))
})();
var state__10449__auto__ = (function (){var statearr_12924 = f__10448__auto__.call(null);
(statearr_12924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10447__auto__);

return statearr_12924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10449__auto__);
});})(c__10447__auto__))
);

return c__10447__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args12951 = [];
var len__7214__auto___12954 = arguments.length;
var i__7215__auto___12955 = (0);
while(true){
if((i__7215__auto___12955 < len__7214__auto___12954)){
args12951.push((arguments[i__7215__auto___12955]));

var G__12956 = (i__7215__auto___12955 + (1));
i__7215__auto___12955 = G__12956;
continue;
} else {
}
break;
}

var G__12953 = args12951.length;
switch (G__12953) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12951.length)].join('')));

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
var args12958 = [];
var len__7214__auto___12961 = arguments.length;
var i__7215__auto___12962 = (0);
while(true){
if((i__7215__auto___12962 < len__7214__auto___12961)){
args12958.push((arguments[i__7215__auto___12962]));

var G__12963 = (i__7215__auto___12962 + (1));
i__7215__auto___12962 = G__12963;
continue;
} else {
}
break;
}

var G__12960 = args12958.length;
switch (G__12960) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12958.length)].join('')));

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
var args12965 = [];
var len__7214__auto___13016 = arguments.length;
var i__7215__auto___13017 = (0);
while(true){
if((i__7215__auto___13017 < len__7214__auto___13016)){
args12965.push((arguments[i__7215__auto___13017]));

var G__13018 = (i__7215__auto___13017 + (1));
i__7215__auto___13017 = G__13018;
continue;
} else {
}
break;
}

var G__12967 = args12965.length;
switch (G__12967) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12965.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10447__auto___13020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10447__auto___13020,out){
return (function (){
var f__10448__auto__ = (function (){var switch__10324__auto__ = ((function (c__10447__auto___13020,out){
return (function (state_12991){
var state_val_12992 = (state_12991[(1)]);
if((state_val_12992 === (7))){
var inst_12986 = (state_12991[(2)]);
var state_12991__$1 = state_12991;
var statearr_12993_13021 = state_12991__$1;
(statearr_12993_13021[(2)] = inst_12986);

(statearr_12993_13021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12992 === (1))){
var inst_12968 = null;
var state_12991__$1 = (function (){var statearr_12994 = state_12991;
(statearr_12994[(7)] = inst_12968);

return statearr_12994;
})();
var statearr_12995_13022 = state_12991__$1;
(statearr_12995_13022[(2)] = null);

(statearr_12995_13022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12992 === (4))){
var inst_12971 = (state_12991[(8)]);
var inst_12971__$1 = (state_12991[(2)]);
var inst_12972 = (inst_12971__$1 == null);
var inst_12973 = cljs.core.not.call(null,inst_12972);
var state_12991__$1 = (function (){var statearr_12996 = state_12991;
(statearr_12996[(8)] = inst_12971__$1);

return statearr_12996;
})();
if(inst_12973){
var statearr_12997_13023 = state_12991__$1;
(statearr_12997_13023[(1)] = (5));

} else {
var statearr_12998_13024 = state_12991__$1;
(statearr_12998_13024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12992 === (6))){
var state_12991__$1 = state_12991;
var statearr_12999_13025 = state_12991__$1;
(statearr_12999_13025[(2)] = null);

(statearr_12999_13025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12992 === (3))){
var inst_12988 = (state_12991[(2)]);
var inst_12989 = cljs.core.async.close_BANG_.call(null,out);
var state_12991__$1 = (function (){var statearr_13000 = state_12991;
(statearr_13000[(9)] = inst_12988);

return statearr_13000;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12991__$1,inst_12989);
} else {
if((state_val_12992 === (2))){
var state_12991__$1 = state_12991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12991__$1,(4),ch);
} else {
if((state_val_12992 === (11))){
var inst_12971 = (state_12991[(8)]);
var inst_12980 = (state_12991[(2)]);
var inst_12968 = inst_12971;
var state_12991__$1 = (function (){var statearr_13001 = state_12991;
(statearr_13001[(10)] = inst_12980);

(statearr_13001[(7)] = inst_12968);

return statearr_13001;
})();
var statearr_13002_13026 = state_12991__$1;
(statearr_13002_13026[(2)] = null);

(statearr_13002_13026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12992 === (9))){
var inst_12971 = (state_12991[(8)]);
var state_12991__$1 = state_12991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12991__$1,(11),out,inst_12971);
} else {
if((state_val_12992 === (5))){
var inst_12968 = (state_12991[(7)]);
var inst_12971 = (state_12991[(8)]);
var inst_12975 = cljs.core._EQ_.call(null,inst_12971,inst_12968);
var state_12991__$1 = state_12991;
if(inst_12975){
var statearr_13004_13027 = state_12991__$1;
(statearr_13004_13027[(1)] = (8));

} else {
var statearr_13005_13028 = state_12991__$1;
(statearr_13005_13028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12992 === (10))){
var inst_12983 = (state_12991[(2)]);
var state_12991__$1 = state_12991;
var statearr_13006_13029 = state_12991__$1;
(statearr_13006_13029[(2)] = inst_12983);

(statearr_13006_13029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12992 === (8))){
var inst_12968 = (state_12991[(7)]);
var tmp13003 = inst_12968;
var inst_12968__$1 = tmp13003;
var state_12991__$1 = (function (){var statearr_13007 = state_12991;
(statearr_13007[(7)] = inst_12968__$1);

return statearr_13007;
})();
var statearr_13008_13030 = state_12991__$1;
(statearr_13008_13030[(2)] = null);

(statearr_13008_13030[(1)] = (2));


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
});})(c__10447__auto___13020,out))
;
return ((function (switch__10324__auto__,c__10447__auto___13020,out){
return (function() {
var cljs$core$async$state_machine__10325__auto__ = null;
var cljs$core$async$state_machine__10325__auto____0 = (function (){
var statearr_13012 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13012[(0)] = cljs$core$async$state_machine__10325__auto__);

(statearr_13012[(1)] = (1));

return statearr_13012;
});
var cljs$core$async$state_machine__10325__auto____1 = (function (state_12991){
while(true){
var ret_value__10326__auto__ = (function (){try{while(true){
var result__10327__auto__ = switch__10324__auto__.call(null,state_12991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10327__auto__;
}
break;
}
}catch (e13013){if((e13013 instanceof Object)){
var ex__10328__auto__ = e13013;
var statearr_13014_13031 = state_12991;
(statearr_13014_13031[(5)] = ex__10328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13032 = state_12991;
state_12991 = G__13032;
continue;
} else {
return ret_value__10326__auto__;
}
break;
}
});
cljs$core$async$state_machine__10325__auto__ = function(state_12991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10325__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10325__auto____1.call(this,state_12991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10325__auto____0;
cljs$core$async$state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10325__auto____1;
return cljs$core$async$state_machine__10325__auto__;
})()
;})(switch__10324__auto__,c__10447__auto___13020,out))
})();
var state__10449__auto__ = (function (){var statearr_13015 = f__10448__auto__.call(null);
(statearr_13015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10447__auto___13020);

return statearr_13015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10449__auto__);
});})(c__10447__auto___13020,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args13033 = [];
var len__7214__auto___13103 = arguments.length;
var i__7215__auto___13104 = (0);
while(true){
if((i__7215__auto___13104 < len__7214__auto___13103)){
args13033.push((arguments[i__7215__auto___13104]));

var G__13105 = (i__7215__auto___13104 + (1));
i__7215__auto___13104 = G__13105;
continue;
} else {
}
break;
}

var G__13035 = args13033.length;
switch (G__13035) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13033.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10447__auto___13107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10447__auto___13107,out){
return (function (){
var f__10448__auto__ = (function (){var switch__10324__auto__ = ((function (c__10447__auto___13107,out){
return (function (state_13073){
var state_val_13074 = (state_13073[(1)]);
if((state_val_13074 === (7))){
var inst_13069 = (state_13073[(2)]);
var state_13073__$1 = state_13073;
var statearr_13075_13108 = state_13073__$1;
(statearr_13075_13108[(2)] = inst_13069);

(statearr_13075_13108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13074 === (1))){
var inst_13036 = (new Array(n));
var inst_13037 = inst_13036;
var inst_13038 = (0);
var state_13073__$1 = (function (){var statearr_13076 = state_13073;
(statearr_13076[(7)] = inst_13038);

(statearr_13076[(8)] = inst_13037);

return statearr_13076;
})();
var statearr_13077_13109 = state_13073__$1;
(statearr_13077_13109[(2)] = null);

(statearr_13077_13109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13074 === (4))){
var inst_13041 = (state_13073[(9)]);
var inst_13041__$1 = (state_13073[(2)]);
var inst_13042 = (inst_13041__$1 == null);
var inst_13043 = cljs.core.not.call(null,inst_13042);
var state_13073__$1 = (function (){var statearr_13078 = state_13073;
(statearr_13078[(9)] = inst_13041__$1);

return statearr_13078;
})();
if(inst_13043){
var statearr_13079_13110 = state_13073__$1;
(statearr_13079_13110[(1)] = (5));

} else {
var statearr_13080_13111 = state_13073__$1;
(statearr_13080_13111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13074 === (15))){
var inst_13063 = (state_13073[(2)]);
var state_13073__$1 = state_13073;
var statearr_13081_13112 = state_13073__$1;
(statearr_13081_13112[(2)] = inst_13063);

(statearr_13081_13112[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13074 === (13))){
var state_13073__$1 = state_13073;
var statearr_13082_13113 = state_13073__$1;
(statearr_13082_13113[(2)] = null);

(statearr_13082_13113[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13074 === (6))){
var inst_13038 = (state_13073[(7)]);
var inst_13059 = (inst_13038 > (0));
var state_13073__$1 = state_13073;
if(cljs.core.truth_(inst_13059)){
var statearr_13083_13114 = state_13073__$1;
(statearr_13083_13114[(1)] = (12));

} else {
var statearr_13084_13115 = state_13073__$1;
(statearr_13084_13115[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13074 === (3))){
var inst_13071 = (state_13073[(2)]);
var state_13073__$1 = state_13073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13073__$1,inst_13071);
} else {
if((state_val_13074 === (12))){
var inst_13037 = (state_13073[(8)]);
var inst_13061 = cljs.core.vec.call(null,inst_13037);
var state_13073__$1 = state_13073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13073__$1,(15),out,inst_13061);
} else {
if((state_val_13074 === (2))){
var state_13073__$1 = state_13073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13073__$1,(4),ch);
} else {
if((state_val_13074 === (11))){
var inst_13053 = (state_13073[(2)]);
var inst_13054 = (new Array(n));
var inst_13037 = inst_13054;
var inst_13038 = (0);
var state_13073__$1 = (function (){var statearr_13085 = state_13073;
(statearr_13085[(10)] = inst_13053);

(statearr_13085[(7)] = inst_13038);

(statearr_13085[(8)] = inst_13037);

return statearr_13085;
})();
var statearr_13086_13116 = state_13073__$1;
(statearr_13086_13116[(2)] = null);

(statearr_13086_13116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13074 === (9))){
var inst_13037 = (state_13073[(8)]);
var inst_13051 = cljs.core.vec.call(null,inst_13037);
var state_13073__$1 = state_13073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13073__$1,(11),out,inst_13051);
} else {
if((state_val_13074 === (5))){
var inst_13041 = (state_13073[(9)]);
var inst_13038 = (state_13073[(7)]);
var inst_13046 = (state_13073[(11)]);
var inst_13037 = (state_13073[(8)]);
var inst_13045 = (inst_13037[inst_13038] = inst_13041);
var inst_13046__$1 = (inst_13038 + (1));
var inst_13047 = (inst_13046__$1 < n);
var state_13073__$1 = (function (){var statearr_13087 = state_13073;
(statearr_13087[(12)] = inst_13045);

(statearr_13087[(11)] = inst_13046__$1);

return statearr_13087;
})();
if(cljs.core.truth_(inst_13047)){
var statearr_13088_13117 = state_13073__$1;
(statearr_13088_13117[(1)] = (8));

} else {
var statearr_13089_13118 = state_13073__$1;
(statearr_13089_13118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13074 === (14))){
var inst_13066 = (state_13073[(2)]);
var inst_13067 = cljs.core.async.close_BANG_.call(null,out);
var state_13073__$1 = (function (){var statearr_13091 = state_13073;
(statearr_13091[(13)] = inst_13066);

return statearr_13091;
})();
var statearr_13092_13119 = state_13073__$1;
(statearr_13092_13119[(2)] = inst_13067);

(statearr_13092_13119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13074 === (10))){
var inst_13057 = (state_13073[(2)]);
var state_13073__$1 = state_13073;
var statearr_13093_13120 = state_13073__$1;
(statearr_13093_13120[(2)] = inst_13057);

(statearr_13093_13120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13074 === (8))){
var inst_13046 = (state_13073[(11)]);
var inst_13037 = (state_13073[(8)]);
var tmp13090 = inst_13037;
var inst_13037__$1 = tmp13090;
var inst_13038 = inst_13046;
var state_13073__$1 = (function (){var statearr_13094 = state_13073;
(statearr_13094[(7)] = inst_13038);

(statearr_13094[(8)] = inst_13037__$1);

return statearr_13094;
})();
var statearr_13095_13121 = state_13073__$1;
(statearr_13095_13121[(2)] = null);

(statearr_13095_13121[(1)] = (2));


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
});})(c__10447__auto___13107,out))
;
return ((function (switch__10324__auto__,c__10447__auto___13107,out){
return (function() {
var cljs$core$async$state_machine__10325__auto__ = null;
var cljs$core$async$state_machine__10325__auto____0 = (function (){
var statearr_13099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13099[(0)] = cljs$core$async$state_machine__10325__auto__);

(statearr_13099[(1)] = (1));

return statearr_13099;
});
var cljs$core$async$state_machine__10325__auto____1 = (function (state_13073){
while(true){
var ret_value__10326__auto__ = (function (){try{while(true){
var result__10327__auto__ = switch__10324__auto__.call(null,state_13073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10327__auto__;
}
break;
}
}catch (e13100){if((e13100 instanceof Object)){
var ex__10328__auto__ = e13100;
var statearr_13101_13122 = state_13073;
(statearr_13101_13122[(5)] = ex__10328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13123 = state_13073;
state_13073 = G__13123;
continue;
} else {
return ret_value__10326__auto__;
}
break;
}
});
cljs$core$async$state_machine__10325__auto__ = function(state_13073){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10325__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10325__auto____1.call(this,state_13073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10325__auto____0;
cljs$core$async$state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10325__auto____1;
return cljs$core$async$state_machine__10325__auto__;
})()
;})(switch__10324__auto__,c__10447__auto___13107,out))
})();
var state__10449__auto__ = (function (){var statearr_13102 = f__10448__auto__.call(null);
(statearr_13102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10447__auto___13107);

return statearr_13102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10449__auto__);
});})(c__10447__auto___13107,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args13124 = [];
var len__7214__auto___13198 = arguments.length;
var i__7215__auto___13199 = (0);
while(true){
if((i__7215__auto___13199 < len__7214__auto___13198)){
args13124.push((arguments[i__7215__auto___13199]));

var G__13200 = (i__7215__auto___13199 + (1));
i__7215__auto___13199 = G__13200;
continue;
} else {
}
break;
}

var G__13126 = args13124.length;
switch (G__13126) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13124.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10447__auto___13202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10447__auto___13202,out){
return (function (){
var f__10448__auto__ = (function (){var switch__10324__auto__ = ((function (c__10447__auto___13202,out){
return (function (state_13168){
var state_val_13169 = (state_13168[(1)]);
if((state_val_13169 === (7))){
var inst_13164 = (state_13168[(2)]);
var state_13168__$1 = state_13168;
var statearr_13170_13203 = state_13168__$1;
(statearr_13170_13203[(2)] = inst_13164);

(statearr_13170_13203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13169 === (1))){
var inst_13127 = [];
var inst_13128 = inst_13127;
var inst_13129 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13168__$1 = (function (){var statearr_13171 = state_13168;
(statearr_13171[(7)] = inst_13129);

(statearr_13171[(8)] = inst_13128);

return statearr_13171;
})();
var statearr_13172_13204 = state_13168__$1;
(statearr_13172_13204[(2)] = null);

(statearr_13172_13204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13169 === (4))){
var inst_13132 = (state_13168[(9)]);
var inst_13132__$1 = (state_13168[(2)]);
var inst_13133 = (inst_13132__$1 == null);
var inst_13134 = cljs.core.not.call(null,inst_13133);
var state_13168__$1 = (function (){var statearr_13173 = state_13168;
(statearr_13173[(9)] = inst_13132__$1);

return statearr_13173;
})();
if(inst_13134){
var statearr_13174_13205 = state_13168__$1;
(statearr_13174_13205[(1)] = (5));

} else {
var statearr_13175_13206 = state_13168__$1;
(statearr_13175_13206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13169 === (15))){
var inst_13158 = (state_13168[(2)]);
var state_13168__$1 = state_13168;
var statearr_13176_13207 = state_13168__$1;
(statearr_13176_13207[(2)] = inst_13158);

(statearr_13176_13207[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13169 === (13))){
var state_13168__$1 = state_13168;
var statearr_13177_13208 = state_13168__$1;
(statearr_13177_13208[(2)] = null);

(statearr_13177_13208[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13169 === (6))){
var inst_13128 = (state_13168[(8)]);
var inst_13153 = inst_13128.length;
var inst_13154 = (inst_13153 > (0));
var state_13168__$1 = state_13168;
if(cljs.core.truth_(inst_13154)){
var statearr_13178_13209 = state_13168__$1;
(statearr_13178_13209[(1)] = (12));

} else {
var statearr_13179_13210 = state_13168__$1;
(statearr_13179_13210[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13169 === (3))){
var inst_13166 = (state_13168[(2)]);
var state_13168__$1 = state_13168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13168__$1,inst_13166);
} else {
if((state_val_13169 === (12))){
var inst_13128 = (state_13168[(8)]);
var inst_13156 = cljs.core.vec.call(null,inst_13128);
var state_13168__$1 = state_13168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13168__$1,(15),out,inst_13156);
} else {
if((state_val_13169 === (2))){
var state_13168__$1 = state_13168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13168__$1,(4),ch);
} else {
if((state_val_13169 === (11))){
var inst_13136 = (state_13168[(10)]);
var inst_13132 = (state_13168[(9)]);
var inst_13146 = (state_13168[(2)]);
var inst_13147 = [];
var inst_13148 = inst_13147.push(inst_13132);
var inst_13128 = inst_13147;
var inst_13129 = inst_13136;
var state_13168__$1 = (function (){var statearr_13180 = state_13168;
(statearr_13180[(11)] = inst_13146);

(statearr_13180[(12)] = inst_13148);

(statearr_13180[(7)] = inst_13129);

(statearr_13180[(8)] = inst_13128);

return statearr_13180;
})();
var statearr_13181_13211 = state_13168__$1;
(statearr_13181_13211[(2)] = null);

(statearr_13181_13211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13169 === (9))){
var inst_13128 = (state_13168[(8)]);
var inst_13144 = cljs.core.vec.call(null,inst_13128);
var state_13168__$1 = state_13168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13168__$1,(11),out,inst_13144);
} else {
if((state_val_13169 === (5))){
var inst_13136 = (state_13168[(10)]);
var inst_13132 = (state_13168[(9)]);
var inst_13129 = (state_13168[(7)]);
var inst_13136__$1 = f.call(null,inst_13132);
var inst_13137 = cljs.core._EQ_.call(null,inst_13136__$1,inst_13129);
var inst_13138 = cljs.core.keyword_identical_QMARK_.call(null,inst_13129,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13139 = (inst_13137) || (inst_13138);
var state_13168__$1 = (function (){var statearr_13182 = state_13168;
(statearr_13182[(10)] = inst_13136__$1);

return statearr_13182;
})();
if(cljs.core.truth_(inst_13139)){
var statearr_13183_13212 = state_13168__$1;
(statearr_13183_13212[(1)] = (8));

} else {
var statearr_13184_13213 = state_13168__$1;
(statearr_13184_13213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13169 === (14))){
var inst_13161 = (state_13168[(2)]);
var inst_13162 = cljs.core.async.close_BANG_.call(null,out);
var state_13168__$1 = (function (){var statearr_13186 = state_13168;
(statearr_13186[(13)] = inst_13161);

return statearr_13186;
})();
var statearr_13187_13214 = state_13168__$1;
(statearr_13187_13214[(2)] = inst_13162);

(statearr_13187_13214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13169 === (10))){
var inst_13151 = (state_13168[(2)]);
var state_13168__$1 = state_13168;
var statearr_13188_13215 = state_13168__$1;
(statearr_13188_13215[(2)] = inst_13151);

(statearr_13188_13215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13169 === (8))){
var inst_13136 = (state_13168[(10)]);
var inst_13132 = (state_13168[(9)]);
var inst_13128 = (state_13168[(8)]);
var inst_13141 = inst_13128.push(inst_13132);
var tmp13185 = inst_13128;
var inst_13128__$1 = tmp13185;
var inst_13129 = inst_13136;
var state_13168__$1 = (function (){var statearr_13189 = state_13168;
(statearr_13189[(14)] = inst_13141);

(statearr_13189[(7)] = inst_13129);

(statearr_13189[(8)] = inst_13128__$1);

return statearr_13189;
})();
var statearr_13190_13216 = state_13168__$1;
(statearr_13190_13216[(2)] = null);

(statearr_13190_13216[(1)] = (2));


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
});})(c__10447__auto___13202,out))
;
return ((function (switch__10324__auto__,c__10447__auto___13202,out){
return (function() {
var cljs$core$async$state_machine__10325__auto__ = null;
var cljs$core$async$state_machine__10325__auto____0 = (function (){
var statearr_13194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13194[(0)] = cljs$core$async$state_machine__10325__auto__);

(statearr_13194[(1)] = (1));

return statearr_13194;
});
var cljs$core$async$state_machine__10325__auto____1 = (function (state_13168){
while(true){
var ret_value__10326__auto__ = (function (){try{while(true){
var result__10327__auto__ = switch__10324__auto__.call(null,state_13168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10327__auto__;
}
break;
}
}catch (e13195){if((e13195 instanceof Object)){
var ex__10328__auto__ = e13195;
var statearr_13196_13217 = state_13168;
(statearr_13196_13217[(5)] = ex__10328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13218 = state_13168;
state_13168 = G__13218;
continue;
} else {
return ret_value__10326__auto__;
}
break;
}
});
cljs$core$async$state_machine__10325__auto__ = function(state_13168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10325__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10325__auto____1.call(this,state_13168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10325__auto____0;
cljs$core$async$state_machine__10325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10325__auto____1;
return cljs$core$async$state_machine__10325__auto__;
})()
;})(switch__10324__auto__,c__10447__auto___13202,out))
})();
var state__10449__auto__ = (function (){var statearr_13197 = f__10448__auto__.call(null);
(statearr_13197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10447__auto___13202);

return statearr_13197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10449__auto__);
});})(c__10447__auto___13202,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
