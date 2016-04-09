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
var args9690 = [];
var len__7214__auto___9696 = arguments.length;
var i__7215__auto___9697 = (0);
while(true){
if((i__7215__auto___9697 < len__7214__auto___9696)){
args9690.push((arguments[i__7215__auto___9697]));

var G__9698 = (i__7215__auto___9697 + (1));
i__7215__auto___9697 = G__9698;
continue;
} else {
}
break;
}

var G__9692 = args9690.length;
switch (G__9692) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9690.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async9693 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9693 = (function (f,blockable,meta9694){
this.f = f;
this.blockable = blockable;
this.meta9694 = meta9694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9695,meta9694__$1){
var self__ = this;
var _9695__$1 = this;
return (new cljs.core.async.t_cljs$core$async9693(self__.f,self__.blockable,meta9694__$1));
});

cljs.core.async.t_cljs$core$async9693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9695){
var self__ = this;
var _9695__$1 = this;
return self__.meta9694;
});

cljs.core.async.t_cljs$core$async9693.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9693.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9693.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async9693.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async9693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta9694","meta9694",-729811585,null)], null);
});

cljs.core.async.t_cljs$core$async9693.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9693.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9693";

cljs.core.async.t_cljs$core$async9693.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async9693");
});

cljs.core.async.__GT_t_cljs$core$async9693 = (function cljs$core$async$__GT_t_cljs$core$async9693(f__$1,blockable__$1,meta9694){
return (new cljs.core.async.t_cljs$core$async9693(f__$1,blockable__$1,meta9694));
});

}

return (new cljs.core.async.t_cljs$core$async9693(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args9702 = [];
var len__7214__auto___9705 = arguments.length;
var i__7215__auto___9706 = (0);
while(true){
if((i__7215__auto___9706 < len__7214__auto___9705)){
args9702.push((arguments[i__7215__auto___9706]));

var G__9707 = (i__7215__auto___9706 + (1));
i__7215__auto___9706 = G__9707;
continue;
} else {
}
break;
}

var G__9704 = args9702.length;
switch (G__9704) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9702.length)].join('')));

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
var args9709 = [];
var len__7214__auto___9712 = arguments.length;
var i__7215__auto___9713 = (0);
while(true){
if((i__7215__auto___9713 < len__7214__auto___9712)){
args9709.push((arguments[i__7215__auto___9713]));

var G__9714 = (i__7215__auto___9713 + (1));
i__7215__auto___9713 = G__9714;
continue;
} else {
}
break;
}

var G__9711 = args9709.length;
switch (G__9711) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9709.length)].join('')));

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
var args9716 = [];
var len__7214__auto___9719 = arguments.length;
var i__7215__auto___9720 = (0);
while(true){
if((i__7215__auto___9720 < len__7214__auto___9719)){
args9716.push((arguments[i__7215__auto___9720]));

var G__9721 = (i__7215__auto___9720 + (1));
i__7215__auto___9720 = G__9721;
continue;
} else {
}
break;
}

var G__9718 = args9716.length;
switch (G__9718) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9716.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9723 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9723);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9723,ret){
return (function (){
return fn1.call(null,val_9723);
});})(val_9723,ret))
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
var args9724 = [];
var len__7214__auto___9727 = arguments.length;
var i__7215__auto___9728 = (0);
while(true){
if((i__7215__auto___9728 < len__7214__auto___9727)){
args9724.push((arguments[i__7215__auto___9728]));

var G__9729 = (i__7215__auto___9728 + (1));
i__7215__auto___9728 = G__9729;
continue;
} else {
}
break;
}

var G__9726 = args9724.length;
switch (G__9726) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9724.length)].join('')));

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
var n__7059__auto___9731 = n;
var x_9732 = (0);
while(true){
if((x_9732 < n__7059__auto___9731)){
(a[x_9732] = (0));

var G__9733 = (x_9732 + (1));
x_9732 = G__9733;
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

var G__9734 = (i + (1));
i = G__9734;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async9738 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9738 = (function (alt_flag,flag,meta9739){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta9739 = meta9739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9740,meta9739__$1){
var self__ = this;
var _9740__$1 = this;
return (new cljs.core.async.t_cljs$core$async9738(self__.alt_flag,self__.flag,meta9739__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async9738.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9740){
var self__ = this;
var _9740__$1 = this;
return self__.meta9739;
});})(flag))
;

cljs.core.async.t_cljs$core$async9738.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9738.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async9738.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9738.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9738.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9739","meta9739",-560037259,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async9738.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9738";

cljs.core.async.t_cljs$core$async9738.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async9738");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async9738 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9738(alt_flag__$1,flag__$1,meta9739){
return (new cljs.core.async.t_cljs$core$async9738(alt_flag__$1,flag__$1,meta9739));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async9738(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async9744 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9744 = (function (alt_handler,flag,cb,meta9745){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta9745 = meta9745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9746,meta9745__$1){
var self__ = this;
var _9746__$1 = this;
return (new cljs.core.async.t_cljs$core$async9744(self__.alt_handler,self__.flag,self__.cb,meta9745__$1));
});

cljs.core.async.t_cljs$core$async9744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9746){
var self__ = this;
var _9746__$1 = this;
return self__.meta9745;
});

cljs.core.async.t_cljs$core$async9744.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9744.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async9744.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9744.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async9744.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9745","meta9745",-91867263,null)], null);
});

cljs.core.async.t_cljs$core$async9744.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9744";

cljs.core.async.t_cljs$core$async9744.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async9744");
});

cljs.core.async.__GT_t_cljs$core$async9744 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9744(alt_handler__$1,flag__$1,cb__$1,meta9745){
return (new cljs.core.async.t_cljs$core$async9744(alt_handler__$1,flag__$1,cb__$1,meta9745));
});

}

return (new cljs.core.async.t_cljs$core$async9744(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__9747_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9747_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9748_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9748_SHARP_,port], null));
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
var G__9749 = (i + (1));
i = G__9749;
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
var len__7214__auto___9755 = arguments.length;
var i__7215__auto___9756 = (0);
while(true){
if((i__7215__auto___9756 < len__7214__auto___9755)){
args__7221__auto__.push((arguments[i__7215__auto___9756]));

var G__9757 = (i__7215__auto___9756 + (1));
i__7215__auto___9756 = G__9757;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9752){
var map__9753 = p__9752;
var map__9753__$1 = ((((!((map__9753 == null)))?((((map__9753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9753):map__9753);
var opts = map__9753__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9750){
var G__9751 = cljs.core.first.call(null,seq9750);
var seq9750__$1 = cljs.core.next.call(null,seq9750);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9751,seq9750__$1);
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
var args9758 = [];
var len__7214__auto___9808 = arguments.length;
var i__7215__auto___9809 = (0);
while(true){
if((i__7215__auto___9809 < len__7214__auto___9808)){
args9758.push((arguments[i__7215__auto___9809]));

var G__9810 = (i__7215__auto___9809 + (1));
i__7215__auto___9809 = G__9810;
continue;
} else {
}
break;
}

var G__9760 = args9758.length;
switch (G__9760) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9758.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__9645__auto___9812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9645__auto___9812){
return (function (){
var f__9646__auto__ = (function (){var switch__9533__auto__ = ((function (c__9645__auto___9812){
return (function (state_9784){
var state_val_9785 = (state_9784[(1)]);
if((state_val_9785 === (7))){
var inst_9780 = (state_9784[(2)]);
var state_9784__$1 = state_9784;
var statearr_9786_9813 = state_9784__$1;
(statearr_9786_9813[(2)] = inst_9780);

(statearr_9786_9813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (1))){
var state_9784__$1 = state_9784;
var statearr_9787_9814 = state_9784__$1;
(statearr_9787_9814[(2)] = null);

(statearr_9787_9814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (4))){
var inst_9763 = (state_9784[(7)]);
var inst_9763__$1 = (state_9784[(2)]);
var inst_9764 = (inst_9763__$1 == null);
var state_9784__$1 = (function (){var statearr_9788 = state_9784;
(statearr_9788[(7)] = inst_9763__$1);

return statearr_9788;
})();
if(cljs.core.truth_(inst_9764)){
var statearr_9789_9815 = state_9784__$1;
(statearr_9789_9815[(1)] = (5));

} else {
var statearr_9790_9816 = state_9784__$1;
(statearr_9790_9816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (13))){
var state_9784__$1 = state_9784;
var statearr_9791_9817 = state_9784__$1;
(statearr_9791_9817[(2)] = null);

(statearr_9791_9817[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (6))){
var inst_9763 = (state_9784[(7)]);
var state_9784__$1 = state_9784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9784__$1,(11),to,inst_9763);
} else {
if((state_val_9785 === (3))){
var inst_9782 = (state_9784[(2)]);
var state_9784__$1 = state_9784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9784__$1,inst_9782);
} else {
if((state_val_9785 === (12))){
var state_9784__$1 = state_9784;
var statearr_9792_9818 = state_9784__$1;
(statearr_9792_9818[(2)] = null);

(statearr_9792_9818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (2))){
var state_9784__$1 = state_9784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9784__$1,(4),from);
} else {
if((state_val_9785 === (11))){
var inst_9773 = (state_9784[(2)]);
var state_9784__$1 = state_9784;
if(cljs.core.truth_(inst_9773)){
var statearr_9793_9819 = state_9784__$1;
(statearr_9793_9819[(1)] = (12));

} else {
var statearr_9794_9820 = state_9784__$1;
(statearr_9794_9820[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (9))){
var state_9784__$1 = state_9784;
var statearr_9795_9821 = state_9784__$1;
(statearr_9795_9821[(2)] = null);

(statearr_9795_9821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (5))){
var state_9784__$1 = state_9784;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9796_9822 = state_9784__$1;
(statearr_9796_9822[(1)] = (8));

} else {
var statearr_9797_9823 = state_9784__$1;
(statearr_9797_9823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (14))){
var inst_9778 = (state_9784[(2)]);
var state_9784__$1 = state_9784;
var statearr_9798_9824 = state_9784__$1;
(statearr_9798_9824[(2)] = inst_9778);

(statearr_9798_9824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (10))){
var inst_9770 = (state_9784[(2)]);
var state_9784__$1 = state_9784;
var statearr_9799_9825 = state_9784__$1;
(statearr_9799_9825[(2)] = inst_9770);

(statearr_9799_9825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9785 === (8))){
var inst_9767 = cljs.core.async.close_BANG_.call(null,to);
var state_9784__$1 = state_9784;
var statearr_9800_9826 = state_9784__$1;
(statearr_9800_9826[(2)] = inst_9767);

(statearr_9800_9826[(1)] = (10));


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
});})(c__9645__auto___9812))
;
return ((function (switch__9533__auto__,c__9645__auto___9812){
return (function() {
var cljs$core$async$state_machine__9534__auto__ = null;
var cljs$core$async$state_machine__9534__auto____0 = (function (){
var statearr_9804 = [null,null,null,null,null,null,null,null];
(statearr_9804[(0)] = cljs$core$async$state_machine__9534__auto__);

(statearr_9804[(1)] = (1));

return statearr_9804;
});
var cljs$core$async$state_machine__9534__auto____1 = (function (state_9784){
while(true){
var ret_value__9535__auto__ = (function (){try{while(true){
var result__9536__auto__ = switch__9533__auto__.call(null,state_9784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9536__auto__;
}
break;
}
}catch (e9805){if((e9805 instanceof Object)){
var ex__9537__auto__ = e9805;
var statearr_9806_9827 = state_9784;
(statearr_9806_9827[(5)] = ex__9537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9828 = state_9784;
state_9784 = G__9828;
continue;
} else {
return ret_value__9535__auto__;
}
break;
}
});
cljs$core$async$state_machine__9534__auto__ = function(state_9784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9534__auto____1.call(this,state_9784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9534__auto____0;
cljs$core$async$state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9534__auto____1;
return cljs$core$async$state_machine__9534__auto__;
})()
;})(switch__9533__auto__,c__9645__auto___9812))
})();
var state__9647__auto__ = (function (){var statearr_9807 = f__9646__auto__.call(null);
(statearr_9807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9645__auto___9812);

return statearr_9807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9647__auto__);
});})(c__9645__auto___9812))
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
return (function (p__10012){
var vec__10013 = p__10012;
var v = cljs.core.nth.call(null,vec__10013,(0),null);
var p = cljs.core.nth.call(null,vec__10013,(1),null);
var job = vec__10013;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9645__auto___10195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9645__auto___10195,res,vec__10013,v,p,job,jobs,results){
return (function (){
var f__9646__auto__ = (function (){var switch__9533__auto__ = ((function (c__9645__auto___10195,res,vec__10013,v,p,job,jobs,results){
return (function (state_10018){
var state_val_10019 = (state_10018[(1)]);
if((state_val_10019 === (1))){
var state_10018__$1 = state_10018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10018__$1,(2),res,v);
} else {
if((state_val_10019 === (2))){
var inst_10015 = (state_10018[(2)]);
var inst_10016 = cljs.core.async.close_BANG_.call(null,res);
var state_10018__$1 = (function (){var statearr_10020 = state_10018;
(statearr_10020[(7)] = inst_10015);

return statearr_10020;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10018__$1,inst_10016);
} else {
return null;
}
}
});})(c__9645__auto___10195,res,vec__10013,v,p,job,jobs,results))
;
return ((function (switch__9533__auto__,c__9645__auto___10195,res,vec__10013,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____0 = (function (){
var statearr_10024 = [null,null,null,null,null,null,null,null];
(statearr_10024[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__);

(statearr_10024[(1)] = (1));

return statearr_10024;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____1 = (function (state_10018){
while(true){
var ret_value__9535__auto__ = (function (){try{while(true){
var result__9536__auto__ = switch__9533__auto__.call(null,state_10018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9536__auto__;
}
break;
}
}catch (e10025){if((e10025 instanceof Object)){
var ex__9537__auto__ = e10025;
var statearr_10026_10196 = state_10018;
(statearr_10026_10196[(5)] = ex__9537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10197 = state_10018;
state_10018 = G__10197;
continue;
} else {
return ret_value__9535__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__ = function(state_10018){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____1.call(this,state_10018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__;
})()
;})(switch__9533__auto__,c__9645__auto___10195,res,vec__10013,v,p,job,jobs,results))
})();
var state__9647__auto__ = (function (){var statearr_10027 = f__9646__auto__.call(null);
(statearr_10027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9645__auto___10195);

return statearr_10027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9647__auto__);
});})(c__9645__auto___10195,res,vec__10013,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10028){
var vec__10029 = p__10028;
var v = cljs.core.nth.call(null,vec__10029,(0),null);
var p = cljs.core.nth.call(null,vec__10029,(1),null);
var job = vec__10029;
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
var n__7059__auto___10198 = n;
var __10199 = (0);
while(true){
if((__10199 < n__7059__auto___10198)){
var G__10030_10200 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__10030_10200) {
case "compute":
var c__9645__auto___10202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10199,c__9645__auto___10202,G__10030_10200,n__7059__auto___10198,jobs,results,process,async){
return (function (){
var f__9646__auto__ = (function (){var switch__9533__auto__ = ((function (__10199,c__9645__auto___10202,G__10030_10200,n__7059__auto___10198,jobs,results,process,async){
return (function (state_10043){
var state_val_10044 = (state_10043[(1)]);
if((state_val_10044 === (1))){
var state_10043__$1 = state_10043;
var statearr_10045_10203 = state_10043__$1;
(statearr_10045_10203[(2)] = null);

(statearr_10045_10203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10044 === (2))){
var state_10043__$1 = state_10043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10043__$1,(4),jobs);
} else {
if((state_val_10044 === (3))){
var inst_10041 = (state_10043[(2)]);
var state_10043__$1 = state_10043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10043__$1,inst_10041);
} else {
if((state_val_10044 === (4))){
var inst_10033 = (state_10043[(2)]);
var inst_10034 = process.call(null,inst_10033);
var state_10043__$1 = state_10043;
if(cljs.core.truth_(inst_10034)){
var statearr_10046_10204 = state_10043__$1;
(statearr_10046_10204[(1)] = (5));

} else {
var statearr_10047_10205 = state_10043__$1;
(statearr_10047_10205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10044 === (5))){
var state_10043__$1 = state_10043;
var statearr_10048_10206 = state_10043__$1;
(statearr_10048_10206[(2)] = null);

(statearr_10048_10206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10044 === (6))){
var state_10043__$1 = state_10043;
var statearr_10049_10207 = state_10043__$1;
(statearr_10049_10207[(2)] = null);

(statearr_10049_10207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10044 === (7))){
var inst_10039 = (state_10043[(2)]);
var state_10043__$1 = state_10043;
var statearr_10050_10208 = state_10043__$1;
(statearr_10050_10208[(2)] = inst_10039);

(statearr_10050_10208[(1)] = (3));


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
});})(__10199,c__9645__auto___10202,G__10030_10200,n__7059__auto___10198,jobs,results,process,async))
;
return ((function (__10199,switch__9533__auto__,c__9645__auto___10202,G__10030_10200,n__7059__auto___10198,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____0 = (function (){
var statearr_10054 = [null,null,null,null,null,null,null];
(statearr_10054[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__);

(statearr_10054[(1)] = (1));

return statearr_10054;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____1 = (function (state_10043){
while(true){
var ret_value__9535__auto__ = (function (){try{while(true){
var result__9536__auto__ = switch__9533__auto__.call(null,state_10043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9536__auto__;
}
break;
}
}catch (e10055){if((e10055 instanceof Object)){
var ex__9537__auto__ = e10055;
var statearr_10056_10209 = state_10043;
(statearr_10056_10209[(5)] = ex__9537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10210 = state_10043;
state_10043 = G__10210;
continue;
} else {
return ret_value__9535__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__ = function(state_10043){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____1.call(this,state_10043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__;
})()
;})(__10199,switch__9533__auto__,c__9645__auto___10202,G__10030_10200,n__7059__auto___10198,jobs,results,process,async))
})();
var state__9647__auto__ = (function (){var statearr_10057 = f__9646__auto__.call(null);
(statearr_10057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9645__auto___10202);

return statearr_10057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9647__auto__);
});})(__10199,c__9645__auto___10202,G__10030_10200,n__7059__auto___10198,jobs,results,process,async))
);


break;
case "async":
var c__9645__auto___10211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10199,c__9645__auto___10211,G__10030_10200,n__7059__auto___10198,jobs,results,process,async){
return (function (){
var f__9646__auto__ = (function (){var switch__9533__auto__ = ((function (__10199,c__9645__auto___10211,G__10030_10200,n__7059__auto___10198,jobs,results,process,async){
return (function (state_10070){
var state_val_10071 = (state_10070[(1)]);
if((state_val_10071 === (1))){
var state_10070__$1 = state_10070;
var statearr_10072_10212 = state_10070__$1;
(statearr_10072_10212[(2)] = null);

(statearr_10072_10212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10071 === (2))){
var state_10070__$1 = state_10070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10070__$1,(4),jobs);
} else {
if((state_val_10071 === (3))){
var inst_10068 = (state_10070[(2)]);
var state_10070__$1 = state_10070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10070__$1,inst_10068);
} else {
if((state_val_10071 === (4))){
var inst_10060 = (state_10070[(2)]);
var inst_10061 = async.call(null,inst_10060);
var state_10070__$1 = state_10070;
if(cljs.core.truth_(inst_10061)){
var statearr_10073_10213 = state_10070__$1;
(statearr_10073_10213[(1)] = (5));

} else {
var statearr_10074_10214 = state_10070__$1;
(statearr_10074_10214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10071 === (5))){
var state_10070__$1 = state_10070;
var statearr_10075_10215 = state_10070__$1;
(statearr_10075_10215[(2)] = null);

(statearr_10075_10215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10071 === (6))){
var state_10070__$1 = state_10070;
var statearr_10076_10216 = state_10070__$1;
(statearr_10076_10216[(2)] = null);

(statearr_10076_10216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10071 === (7))){
var inst_10066 = (state_10070[(2)]);
var state_10070__$1 = state_10070;
var statearr_10077_10217 = state_10070__$1;
(statearr_10077_10217[(2)] = inst_10066);

(statearr_10077_10217[(1)] = (3));


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
});})(__10199,c__9645__auto___10211,G__10030_10200,n__7059__auto___10198,jobs,results,process,async))
;
return ((function (__10199,switch__9533__auto__,c__9645__auto___10211,G__10030_10200,n__7059__auto___10198,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____0 = (function (){
var statearr_10081 = [null,null,null,null,null,null,null];
(statearr_10081[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__);

(statearr_10081[(1)] = (1));

return statearr_10081;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____1 = (function (state_10070){
while(true){
var ret_value__9535__auto__ = (function (){try{while(true){
var result__9536__auto__ = switch__9533__auto__.call(null,state_10070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9536__auto__;
}
break;
}
}catch (e10082){if((e10082 instanceof Object)){
var ex__9537__auto__ = e10082;
var statearr_10083_10218 = state_10070;
(statearr_10083_10218[(5)] = ex__9537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10219 = state_10070;
state_10070 = G__10219;
continue;
} else {
return ret_value__9535__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__ = function(state_10070){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____1.call(this,state_10070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__;
})()
;})(__10199,switch__9533__auto__,c__9645__auto___10211,G__10030_10200,n__7059__auto___10198,jobs,results,process,async))
})();
var state__9647__auto__ = (function (){var statearr_10084 = f__9646__auto__.call(null);
(statearr_10084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9645__auto___10211);

return statearr_10084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9647__auto__);
});})(__10199,c__9645__auto___10211,G__10030_10200,n__7059__auto___10198,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__10220 = (__10199 + (1));
__10199 = G__10220;
continue;
} else {
}
break;
}

var c__9645__auto___10221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9645__auto___10221,jobs,results,process,async){
return (function (){
var f__9646__auto__ = (function (){var switch__9533__auto__ = ((function (c__9645__auto___10221,jobs,results,process,async){
return (function (state_10106){
var state_val_10107 = (state_10106[(1)]);
if((state_val_10107 === (1))){
var state_10106__$1 = state_10106;
var statearr_10108_10222 = state_10106__$1;
(statearr_10108_10222[(2)] = null);

(statearr_10108_10222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10107 === (2))){
var state_10106__$1 = state_10106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10106__$1,(4),from);
} else {
if((state_val_10107 === (3))){
var inst_10104 = (state_10106[(2)]);
var state_10106__$1 = state_10106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10106__$1,inst_10104);
} else {
if((state_val_10107 === (4))){
var inst_10087 = (state_10106[(7)]);
var inst_10087__$1 = (state_10106[(2)]);
var inst_10088 = (inst_10087__$1 == null);
var state_10106__$1 = (function (){var statearr_10109 = state_10106;
(statearr_10109[(7)] = inst_10087__$1);

return statearr_10109;
})();
if(cljs.core.truth_(inst_10088)){
var statearr_10110_10223 = state_10106__$1;
(statearr_10110_10223[(1)] = (5));

} else {
var statearr_10111_10224 = state_10106__$1;
(statearr_10111_10224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10107 === (5))){
var inst_10090 = cljs.core.async.close_BANG_.call(null,jobs);
var state_10106__$1 = state_10106;
var statearr_10112_10225 = state_10106__$1;
(statearr_10112_10225[(2)] = inst_10090);

(statearr_10112_10225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10107 === (6))){
var inst_10092 = (state_10106[(8)]);
var inst_10087 = (state_10106[(7)]);
var inst_10092__$1 = cljs.core.async.chan.call(null,(1));
var inst_10093 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10094 = [inst_10087,inst_10092__$1];
var inst_10095 = (new cljs.core.PersistentVector(null,2,(5),inst_10093,inst_10094,null));
var state_10106__$1 = (function (){var statearr_10113 = state_10106;
(statearr_10113[(8)] = inst_10092__$1);

return statearr_10113;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10106__$1,(8),jobs,inst_10095);
} else {
if((state_val_10107 === (7))){
var inst_10102 = (state_10106[(2)]);
var state_10106__$1 = state_10106;
var statearr_10114_10226 = state_10106__$1;
(statearr_10114_10226[(2)] = inst_10102);

(statearr_10114_10226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10107 === (8))){
var inst_10092 = (state_10106[(8)]);
var inst_10097 = (state_10106[(2)]);
var state_10106__$1 = (function (){var statearr_10115 = state_10106;
(statearr_10115[(9)] = inst_10097);

return statearr_10115;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10106__$1,(9),results,inst_10092);
} else {
if((state_val_10107 === (9))){
var inst_10099 = (state_10106[(2)]);
var state_10106__$1 = (function (){var statearr_10116 = state_10106;
(statearr_10116[(10)] = inst_10099);

return statearr_10116;
})();
var statearr_10117_10227 = state_10106__$1;
(statearr_10117_10227[(2)] = null);

(statearr_10117_10227[(1)] = (2));


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
});})(c__9645__auto___10221,jobs,results,process,async))
;
return ((function (switch__9533__auto__,c__9645__auto___10221,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____0 = (function (){
var statearr_10121 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10121[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__);

(statearr_10121[(1)] = (1));

return statearr_10121;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____1 = (function (state_10106){
while(true){
var ret_value__9535__auto__ = (function (){try{while(true){
var result__9536__auto__ = switch__9533__auto__.call(null,state_10106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9536__auto__;
}
break;
}
}catch (e10122){if((e10122 instanceof Object)){
var ex__9537__auto__ = e10122;
var statearr_10123_10228 = state_10106;
(statearr_10123_10228[(5)] = ex__9537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10229 = state_10106;
state_10106 = G__10229;
continue;
} else {
return ret_value__9535__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__ = function(state_10106){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____1.call(this,state_10106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__;
})()
;})(switch__9533__auto__,c__9645__auto___10221,jobs,results,process,async))
})();
var state__9647__auto__ = (function (){var statearr_10124 = f__9646__auto__.call(null);
(statearr_10124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9645__auto___10221);

return statearr_10124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9647__auto__);
});})(c__9645__auto___10221,jobs,results,process,async))
);


var c__9645__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9645__auto__,jobs,results,process,async){
return (function (){
var f__9646__auto__ = (function (){var switch__9533__auto__ = ((function (c__9645__auto__,jobs,results,process,async){
return (function (state_10162){
var state_val_10163 = (state_10162[(1)]);
if((state_val_10163 === (7))){
var inst_10158 = (state_10162[(2)]);
var state_10162__$1 = state_10162;
var statearr_10164_10230 = state_10162__$1;
(statearr_10164_10230[(2)] = inst_10158);

(statearr_10164_10230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10163 === (20))){
var state_10162__$1 = state_10162;
var statearr_10165_10231 = state_10162__$1;
(statearr_10165_10231[(2)] = null);

(statearr_10165_10231[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10163 === (1))){
var state_10162__$1 = state_10162;
var statearr_10166_10232 = state_10162__$1;
(statearr_10166_10232[(2)] = null);

(statearr_10166_10232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10163 === (4))){
var inst_10127 = (state_10162[(7)]);
var inst_10127__$1 = (state_10162[(2)]);
var inst_10128 = (inst_10127__$1 == null);
var state_10162__$1 = (function (){var statearr_10167 = state_10162;
(statearr_10167[(7)] = inst_10127__$1);

return statearr_10167;
})();
if(cljs.core.truth_(inst_10128)){
var statearr_10168_10233 = state_10162__$1;
(statearr_10168_10233[(1)] = (5));

} else {
var statearr_10169_10234 = state_10162__$1;
(statearr_10169_10234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10163 === (15))){
var inst_10140 = (state_10162[(8)]);
var state_10162__$1 = state_10162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10162__$1,(18),to,inst_10140);
} else {
if((state_val_10163 === (21))){
var inst_10153 = (state_10162[(2)]);
var state_10162__$1 = state_10162;
var statearr_10170_10235 = state_10162__$1;
(statearr_10170_10235[(2)] = inst_10153);

(statearr_10170_10235[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10163 === (13))){
var inst_10155 = (state_10162[(2)]);
var state_10162__$1 = (function (){var statearr_10171 = state_10162;
(statearr_10171[(9)] = inst_10155);

return statearr_10171;
})();
var statearr_10172_10236 = state_10162__$1;
(statearr_10172_10236[(2)] = null);

(statearr_10172_10236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10163 === (6))){
var inst_10127 = (state_10162[(7)]);
var state_10162__$1 = state_10162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10162__$1,(11),inst_10127);
} else {
if((state_val_10163 === (17))){
var inst_10148 = (state_10162[(2)]);
var state_10162__$1 = state_10162;
if(cljs.core.truth_(inst_10148)){
var statearr_10173_10237 = state_10162__$1;
(statearr_10173_10237[(1)] = (19));

} else {
var statearr_10174_10238 = state_10162__$1;
(statearr_10174_10238[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10163 === (3))){
var inst_10160 = (state_10162[(2)]);
var state_10162__$1 = state_10162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10162__$1,inst_10160);
} else {
if((state_val_10163 === (12))){
var inst_10137 = (state_10162[(10)]);
var state_10162__$1 = state_10162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10162__$1,(14),inst_10137);
} else {
if((state_val_10163 === (2))){
var state_10162__$1 = state_10162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10162__$1,(4),results);
} else {
if((state_val_10163 === (19))){
var state_10162__$1 = state_10162;
var statearr_10175_10239 = state_10162__$1;
(statearr_10175_10239[(2)] = null);

(statearr_10175_10239[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10163 === (11))){
var inst_10137 = (state_10162[(2)]);
var state_10162__$1 = (function (){var statearr_10176 = state_10162;
(statearr_10176[(10)] = inst_10137);

return statearr_10176;
})();
var statearr_10177_10240 = state_10162__$1;
(statearr_10177_10240[(2)] = null);

(statearr_10177_10240[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10163 === (9))){
var state_10162__$1 = state_10162;
var statearr_10178_10241 = state_10162__$1;
(statearr_10178_10241[(2)] = null);

(statearr_10178_10241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10163 === (5))){
var state_10162__$1 = state_10162;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10179_10242 = state_10162__$1;
(statearr_10179_10242[(1)] = (8));

} else {
var statearr_10180_10243 = state_10162__$1;
(statearr_10180_10243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10163 === (14))){
var inst_10140 = (state_10162[(8)]);
var inst_10142 = (state_10162[(11)]);
var inst_10140__$1 = (state_10162[(2)]);
var inst_10141 = (inst_10140__$1 == null);
var inst_10142__$1 = cljs.core.not.call(null,inst_10141);
var state_10162__$1 = (function (){var statearr_10181 = state_10162;
(statearr_10181[(8)] = inst_10140__$1);

(statearr_10181[(11)] = inst_10142__$1);

return statearr_10181;
})();
if(inst_10142__$1){
var statearr_10182_10244 = state_10162__$1;
(statearr_10182_10244[(1)] = (15));

} else {
var statearr_10183_10245 = state_10162__$1;
(statearr_10183_10245[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10163 === (16))){
var inst_10142 = (state_10162[(11)]);
var state_10162__$1 = state_10162;
var statearr_10184_10246 = state_10162__$1;
(statearr_10184_10246[(2)] = inst_10142);

(statearr_10184_10246[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10163 === (10))){
var inst_10134 = (state_10162[(2)]);
var state_10162__$1 = state_10162;
var statearr_10185_10247 = state_10162__$1;
(statearr_10185_10247[(2)] = inst_10134);

(statearr_10185_10247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10163 === (18))){
var inst_10145 = (state_10162[(2)]);
var state_10162__$1 = state_10162;
var statearr_10186_10248 = state_10162__$1;
(statearr_10186_10248[(2)] = inst_10145);

(statearr_10186_10248[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10163 === (8))){
var inst_10131 = cljs.core.async.close_BANG_.call(null,to);
var state_10162__$1 = state_10162;
var statearr_10187_10249 = state_10162__$1;
(statearr_10187_10249[(2)] = inst_10131);

(statearr_10187_10249[(1)] = (10));


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
});})(c__9645__auto__,jobs,results,process,async))
;
return ((function (switch__9533__auto__,c__9645__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____0 = (function (){
var statearr_10191 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10191[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__);

(statearr_10191[(1)] = (1));

return statearr_10191;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____1 = (function (state_10162){
while(true){
var ret_value__9535__auto__ = (function (){try{while(true){
var result__9536__auto__ = switch__9533__auto__.call(null,state_10162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9536__auto__;
}
break;
}
}catch (e10192){if((e10192 instanceof Object)){
var ex__9537__auto__ = e10192;
var statearr_10193_10250 = state_10162;
(statearr_10193_10250[(5)] = ex__9537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10251 = state_10162;
state_10162 = G__10251;
continue;
} else {
return ret_value__9535__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__ = function(state_10162){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____1.call(this,state_10162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9534__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9534__auto__;
})()
;})(switch__9533__auto__,c__9645__auto__,jobs,results,process,async))
})();
var state__9647__auto__ = (function (){var statearr_10194 = f__9646__auto__.call(null);
(statearr_10194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9645__auto__);

return statearr_10194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9647__auto__);
});})(c__9645__auto__,jobs,results,process,async))
);

return c__9645__auto__;
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
var args10252 = [];
var len__7214__auto___10255 = arguments.length;
var i__7215__auto___10256 = (0);
while(true){
if((i__7215__auto___10256 < len__7214__auto___10255)){
args10252.push((arguments[i__7215__auto___10256]));

var G__10257 = (i__7215__auto___10256 + (1));
i__7215__auto___10256 = G__10257;
continue;
} else {
}
break;
}

var G__10254 = args10252.length;
switch (G__10254) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10252.length)].join('')));

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
var args10259 = [];
var len__7214__auto___10262 = arguments.length;
var i__7215__auto___10263 = (0);
while(true){
if((i__7215__auto___10263 < len__7214__auto___10262)){
args10259.push((arguments[i__7215__auto___10263]));

var G__10264 = (i__7215__auto___10263 + (1));
i__7215__auto___10263 = G__10264;
continue;
} else {
}
break;
}

var G__10261 = args10259.length;
switch (G__10261) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10259.length)].join('')));

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
var args10266 = [];
var len__7214__auto___10319 = arguments.length;
var i__7215__auto___10320 = (0);
while(true){
if((i__7215__auto___10320 < len__7214__auto___10319)){
args10266.push((arguments[i__7215__auto___10320]));

var G__10321 = (i__7215__auto___10320 + (1));
i__7215__auto___10320 = G__10321;
continue;
} else {
}
break;
}

var G__10268 = args10266.length;
switch (G__10268) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10266.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__9645__auto___10323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9645__auto___10323,tc,fc){
return (function (){
var f__9646__auto__ = (function (){var switch__9533__auto__ = ((function (c__9645__auto___10323,tc,fc){
return (function (state_10294){
var state_val_10295 = (state_10294[(1)]);
if((state_val_10295 === (7))){
var inst_10290 = (state_10294[(2)]);
var state_10294__$1 = state_10294;
var statearr_10296_10324 = state_10294__$1;
(statearr_10296_10324[(2)] = inst_10290);

(statearr_10296_10324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10295 === (1))){
var state_10294__$1 = state_10294;
var statearr_10297_10325 = state_10294__$1;
(statearr_10297_10325[(2)] = null);

(statearr_10297_10325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10295 === (4))){
var inst_10271 = (state_10294[(7)]);
var inst_10271__$1 = (state_10294[(2)]);
var inst_10272 = (inst_10271__$1 == null);
var state_10294__$1 = (function (){var statearr_10298 = state_10294;
(statearr_10298[(7)] = inst_10271__$1);

return statearr_10298;
})();
if(cljs.core.truth_(inst_10272)){
var statearr_10299_10326 = state_10294__$1;
(statearr_10299_10326[(1)] = (5));

} else {
var statearr_10300_10327 = state_10294__$1;
(statearr_10300_10327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10295 === (13))){
var state_10294__$1 = state_10294;
var statearr_10301_10328 = state_10294__$1;
(statearr_10301_10328[(2)] = null);

(statearr_10301_10328[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10295 === (6))){
var inst_10271 = (state_10294[(7)]);
var inst_10277 = p.call(null,inst_10271);
var state_10294__$1 = state_10294;
if(cljs.core.truth_(inst_10277)){
var statearr_10302_10329 = state_10294__$1;
(statearr_10302_10329[(1)] = (9));

} else {
var statearr_10303_10330 = state_10294__$1;
(statearr_10303_10330[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10295 === (3))){
var inst_10292 = (state_10294[(2)]);
var state_10294__$1 = state_10294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10294__$1,inst_10292);
} else {
if((state_val_10295 === (12))){
var state_10294__$1 = state_10294;
var statearr_10304_10331 = state_10294__$1;
(statearr_10304_10331[(2)] = null);

(statearr_10304_10331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10295 === (2))){
var state_10294__$1 = state_10294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10294__$1,(4),ch);
} else {
if((state_val_10295 === (11))){
var inst_10271 = (state_10294[(7)]);
var inst_10281 = (state_10294[(2)]);
var state_10294__$1 = state_10294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10294__$1,(8),inst_10281,inst_10271);
} else {
if((state_val_10295 === (9))){
var state_10294__$1 = state_10294;
var statearr_10305_10332 = state_10294__$1;
(statearr_10305_10332[(2)] = tc);

(statearr_10305_10332[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10295 === (5))){
var inst_10274 = cljs.core.async.close_BANG_.call(null,tc);
var inst_10275 = cljs.core.async.close_BANG_.call(null,fc);
var state_10294__$1 = (function (){var statearr_10306 = state_10294;
(statearr_10306[(8)] = inst_10274);

return statearr_10306;
})();
var statearr_10307_10333 = state_10294__$1;
(statearr_10307_10333[(2)] = inst_10275);

(statearr_10307_10333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10295 === (14))){
var inst_10288 = (state_10294[(2)]);
var state_10294__$1 = state_10294;
var statearr_10308_10334 = state_10294__$1;
(statearr_10308_10334[(2)] = inst_10288);

(statearr_10308_10334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10295 === (10))){
var state_10294__$1 = state_10294;
var statearr_10309_10335 = state_10294__$1;
(statearr_10309_10335[(2)] = fc);

(statearr_10309_10335[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10295 === (8))){
var inst_10283 = (state_10294[(2)]);
var state_10294__$1 = state_10294;
if(cljs.core.truth_(inst_10283)){
var statearr_10310_10336 = state_10294__$1;
(statearr_10310_10336[(1)] = (12));

} else {
var statearr_10311_10337 = state_10294__$1;
(statearr_10311_10337[(1)] = (13));

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
});})(c__9645__auto___10323,tc,fc))
;
return ((function (switch__9533__auto__,c__9645__auto___10323,tc,fc){
return (function() {
var cljs$core$async$state_machine__9534__auto__ = null;
var cljs$core$async$state_machine__9534__auto____0 = (function (){
var statearr_10315 = [null,null,null,null,null,null,null,null,null];
(statearr_10315[(0)] = cljs$core$async$state_machine__9534__auto__);

(statearr_10315[(1)] = (1));

return statearr_10315;
});
var cljs$core$async$state_machine__9534__auto____1 = (function (state_10294){
while(true){
var ret_value__9535__auto__ = (function (){try{while(true){
var result__9536__auto__ = switch__9533__auto__.call(null,state_10294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9536__auto__;
}
break;
}
}catch (e10316){if((e10316 instanceof Object)){
var ex__9537__auto__ = e10316;
var statearr_10317_10338 = state_10294;
(statearr_10317_10338[(5)] = ex__9537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10339 = state_10294;
state_10294 = G__10339;
continue;
} else {
return ret_value__9535__auto__;
}
break;
}
});
cljs$core$async$state_machine__9534__auto__ = function(state_10294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9534__auto____1.call(this,state_10294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9534__auto____0;
cljs$core$async$state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9534__auto____1;
return cljs$core$async$state_machine__9534__auto__;
})()
;})(switch__9533__auto__,c__9645__auto___10323,tc,fc))
})();
var state__9647__auto__ = (function (){var statearr_10318 = f__9646__auto__.call(null);
(statearr_10318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9645__auto___10323);

return statearr_10318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9647__auto__);
});})(c__9645__auto___10323,tc,fc))
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
var c__9645__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9645__auto__){
return (function (){
var f__9646__auto__ = (function (){var switch__9533__auto__ = ((function (c__9645__auto__){
return (function (state_10403){
var state_val_10404 = (state_10403[(1)]);
if((state_val_10404 === (7))){
var inst_10399 = (state_10403[(2)]);
var state_10403__$1 = state_10403;
var statearr_10405_10426 = state_10403__$1;
(statearr_10405_10426[(2)] = inst_10399);

(statearr_10405_10426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10404 === (1))){
var inst_10383 = init;
var state_10403__$1 = (function (){var statearr_10406 = state_10403;
(statearr_10406[(7)] = inst_10383);

return statearr_10406;
})();
var statearr_10407_10427 = state_10403__$1;
(statearr_10407_10427[(2)] = null);

(statearr_10407_10427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10404 === (4))){
var inst_10386 = (state_10403[(8)]);
var inst_10386__$1 = (state_10403[(2)]);
var inst_10387 = (inst_10386__$1 == null);
var state_10403__$1 = (function (){var statearr_10408 = state_10403;
(statearr_10408[(8)] = inst_10386__$1);

return statearr_10408;
})();
if(cljs.core.truth_(inst_10387)){
var statearr_10409_10428 = state_10403__$1;
(statearr_10409_10428[(1)] = (5));

} else {
var statearr_10410_10429 = state_10403__$1;
(statearr_10410_10429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10404 === (6))){
var inst_10383 = (state_10403[(7)]);
var inst_10386 = (state_10403[(8)]);
var inst_10390 = (state_10403[(9)]);
var inst_10390__$1 = f.call(null,inst_10383,inst_10386);
var inst_10391 = cljs.core.reduced_QMARK_.call(null,inst_10390__$1);
var state_10403__$1 = (function (){var statearr_10411 = state_10403;
(statearr_10411[(9)] = inst_10390__$1);

return statearr_10411;
})();
if(inst_10391){
var statearr_10412_10430 = state_10403__$1;
(statearr_10412_10430[(1)] = (8));

} else {
var statearr_10413_10431 = state_10403__$1;
(statearr_10413_10431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10404 === (3))){
var inst_10401 = (state_10403[(2)]);
var state_10403__$1 = state_10403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10403__$1,inst_10401);
} else {
if((state_val_10404 === (2))){
var state_10403__$1 = state_10403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10403__$1,(4),ch);
} else {
if((state_val_10404 === (9))){
var inst_10390 = (state_10403[(9)]);
var inst_10383 = inst_10390;
var state_10403__$1 = (function (){var statearr_10414 = state_10403;
(statearr_10414[(7)] = inst_10383);

return statearr_10414;
})();
var statearr_10415_10432 = state_10403__$1;
(statearr_10415_10432[(2)] = null);

(statearr_10415_10432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10404 === (5))){
var inst_10383 = (state_10403[(7)]);
var state_10403__$1 = state_10403;
var statearr_10416_10433 = state_10403__$1;
(statearr_10416_10433[(2)] = inst_10383);

(statearr_10416_10433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10404 === (10))){
var inst_10397 = (state_10403[(2)]);
var state_10403__$1 = state_10403;
var statearr_10417_10434 = state_10403__$1;
(statearr_10417_10434[(2)] = inst_10397);

(statearr_10417_10434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10404 === (8))){
var inst_10390 = (state_10403[(9)]);
var inst_10393 = cljs.core.deref.call(null,inst_10390);
var state_10403__$1 = state_10403;
var statearr_10418_10435 = state_10403__$1;
(statearr_10418_10435[(2)] = inst_10393);

(statearr_10418_10435[(1)] = (10));


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
});})(c__9645__auto__))
;
return ((function (switch__9533__auto__,c__9645__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9534__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9534__auto____0 = (function (){
var statearr_10422 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10422[(0)] = cljs$core$async$reduce_$_state_machine__9534__auto__);

(statearr_10422[(1)] = (1));

return statearr_10422;
});
var cljs$core$async$reduce_$_state_machine__9534__auto____1 = (function (state_10403){
while(true){
var ret_value__9535__auto__ = (function (){try{while(true){
var result__9536__auto__ = switch__9533__auto__.call(null,state_10403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9536__auto__;
}
break;
}
}catch (e10423){if((e10423 instanceof Object)){
var ex__9537__auto__ = e10423;
var statearr_10424_10436 = state_10403;
(statearr_10424_10436[(5)] = ex__9537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10437 = state_10403;
state_10403 = G__10437;
continue;
} else {
return ret_value__9535__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9534__auto__ = function(state_10403){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9534__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9534__auto____1.call(this,state_10403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9534__auto____0;
cljs$core$async$reduce_$_state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9534__auto____1;
return cljs$core$async$reduce_$_state_machine__9534__auto__;
})()
;})(switch__9533__auto__,c__9645__auto__))
})();
var state__9647__auto__ = (function (){var statearr_10425 = f__9646__auto__.call(null);
(statearr_10425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9645__auto__);

return statearr_10425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9647__auto__);
});})(c__9645__auto__))
);

return c__9645__auto__;
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
var args10438 = [];
var len__7214__auto___10490 = arguments.length;
var i__7215__auto___10491 = (0);
while(true){
if((i__7215__auto___10491 < len__7214__auto___10490)){
args10438.push((arguments[i__7215__auto___10491]));

var G__10492 = (i__7215__auto___10491 + (1));
i__7215__auto___10491 = G__10492;
continue;
} else {
}
break;
}

var G__10440 = args10438.length;
switch (G__10440) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10438.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__9645__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9645__auto__){
return (function (){
var f__9646__auto__ = (function (){var switch__9533__auto__ = ((function (c__9645__auto__){
return (function (state_10465){
var state_val_10466 = (state_10465[(1)]);
if((state_val_10466 === (7))){
var inst_10447 = (state_10465[(2)]);
var state_10465__$1 = state_10465;
var statearr_10467_10494 = state_10465__$1;
(statearr_10467_10494[(2)] = inst_10447);

(statearr_10467_10494[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10466 === (1))){
var inst_10441 = cljs.core.seq.call(null,coll);
var inst_10442 = inst_10441;
var state_10465__$1 = (function (){var statearr_10468 = state_10465;
(statearr_10468[(7)] = inst_10442);

return statearr_10468;
})();
var statearr_10469_10495 = state_10465__$1;
(statearr_10469_10495[(2)] = null);

(statearr_10469_10495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10466 === (4))){
var inst_10442 = (state_10465[(7)]);
var inst_10445 = cljs.core.first.call(null,inst_10442);
var state_10465__$1 = state_10465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10465__$1,(7),ch,inst_10445);
} else {
if((state_val_10466 === (13))){
var inst_10459 = (state_10465[(2)]);
var state_10465__$1 = state_10465;
var statearr_10470_10496 = state_10465__$1;
(statearr_10470_10496[(2)] = inst_10459);

(statearr_10470_10496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10466 === (6))){
var inst_10450 = (state_10465[(2)]);
var state_10465__$1 = state_10465;
if(cljs.core.truth_(inst_10450)){
var statearr_10471_10497 = state_10465__$1;
(statearr_10471_10497[(1)] = (8));

} else {
var statearr_10472_10498 = state_10465__$1;
(statearr_10472_10498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10466 === (3))){
var inst_10463 = (state_10465[(2)]);
var state_10465__$1 = state_10465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10465__$1,inst_10463);
} else {
if((state_val_10466 === (12))){
var state_10465__$1 = state_10465;
var statearr_10473_10499 = state_10465__$1;
(statearr_10473_10499[(2)] = null);

(statearr_10473_10499[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10466 === (2))){
var inst_10442 = (state_10465[(7)]);
var state_10465__$1 = state_10465;
if(cljs.core.truth_(inst_10442)){
var statearr_10474_10500 = state_10465__$1;
(statearr_10474_10500[(1)] = (4));

} else {
var statearr_10475_10501 = state_10465__$1;
(statearr_10475_10501[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10466 === (11))){
var inst_10456 = cljs.core.async.close_BANG_.call(null,ch);
var state_10465__$1 = state_10465;
var statearr_10476_10502 = state_10465__$1;
(statearr_10476_10502[(2)] = inst_10456);

(statearr_10476_10502[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10466 === (9))){
var state_10465__$1 = state_10465;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10477_10503 = state_10465__$1;
(statearr_10477_10503[(1)] = (11));

} else {
var statearr_10478_10504 = state_10465__$1;
(statearr_10478_10504[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10466 === (5))){
var inst_10442 = (state_10465[(7)]);
var state_10465__$1 = state_10465;
var statearr_10479_10505 = state_10465__$1;
(statearr_10479_10505[(2)] = inst_10442);

(statearr_10479_10505[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10466 === (10))){
var inst_10461 = (state_10465[(2)]);
var state_10465__$1 = state_10465;
var statearr_10480_10506 = state_10465__$1;
(statearr_10480_10506[(2)] = inst_10461);

(statearr_10480_10506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10466 === (8))){
var inst_10442 = (state_10465[(7)]);
var inst_10452 = cljs.core.next.call(null,inst_10442);
var inst_10442__$1 = inst_10452;
var state_10465__$1 = (function (){var statearr_10481 = state_10465;
(statearr_10481[(7)] = inst_10442__$1);

return statearr_10481;
})();
var statearr_10482_10507 = state_10465__$1;
(statearr_10482_10507[(2)] = null);

(statearr_10482_10507[(1)] = (2));


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
});})(c__9645__auto__))
;
return ((function (switch__9533__auto__,c__9645__auto__){
return (function() {
var cljs$core$async$state_machine__9534__auto__ = null;
var cljs$core$async$state_machine__9534__auto____0 = (function (){
var statearr_10486 = [null,null,null,null,null,null,null,null];
(statearr_10486[(0)] = cljs$core$async$state_machine__9534__auto__);

(statearr_10486[(1)] = (1));

return statearr_10486;
});
var cljs$core$async$state_machine__9534__auto____1 = (function (state_10465){
while(true){
var ret_value__9535__auto__ = (function (){try{while(true){
var result__9536__auto__ = switch__9533__auto__.call(null,state_10465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9536__auto__;
}
break;
}
}catch (e10487){if((e10487 instanceof Object)){
var ex__9537__auto__ = e10487;
var statearr_10488_10508 = state_10465;
(statearr_10488_10508[(5)] = ex__9537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10509 = state_10465;
state_10465 = G__10509;
continue;
} else {
return ret_value__9535__auto__;
}
break;
}
});
cljs$core$async$state_machine__9534__auto__ = function(state_10465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9534__auto____1.call(this,state_10465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9534__auto____0;
cljs$core$async$state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9534__auto____1;
return cljs$core$async$state_machine__9534__auto__;
})()
;})(switch__9533__auto__,c__9645__auto__))
})();
var state__9647__auto__ = (function (){var statearr_10489 = f__9646__auto__.call(null);
(statearr_10489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9645__auto__);

return statearr_10489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9647__auto__);
});})(c__9645__auto__))
);

return c__9645__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async10731 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10731 = (function (mult,ch,cs,meta10732){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta10732 = meta10732;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10733,meta10732__$1){
var self__ = this;
var _10733__$1 = this;
return (new cljs.core.async.t_cljs$core$async10731(self__.mult,self__.ch,self__.cs,meta10732__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10731.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10733){
var self__ = this;
var _10733__$1 = this;
return self__.meta10732;
});})(cs))
;

cljs.core.async.t_cljs$core$async10731.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10731.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10731.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async10731.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10731.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10731.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10731.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10732","meta10732",-2027619952,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10731.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10731.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10731";

cljs.core.async.t_cljs$core$async10731.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10731");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async10731 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10731(mult__$1,ch__$1,cs__$1,meta10732){
return (new cljs.core.async.t_cljs$core$async10731(mult__$1,ch__$1,cs__$1,meta10732));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10731(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__9645__auto___10952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9645__auto___10952,cs,m,dchan,dctr,done){
return (function (){
var f__9646__auto__ = (function (){var switch__9533__auto__ = ((function (c__9645__auto___10952,cs,m,dchan,dctr,done){
return (function (state_10864){
var state_val_10865 = (state_10864[(1)]);
if((state_val_10865 === (7))){
var inst_10860 = (state_10864[(2)]);
var state_10864__$1 = state_10864;
var statearr_10866_10953 = state_10864__$1;
(statearr_10866_10953[(2)] = inst_10860);

(statearr_10866_10953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (20))){
var inst_10765 = (state_10864[(7)]);
var inst_10775 = cljs.core.first.call(null,inst_10765);
var inst_10776 = cljs.core.nth.call(null,inst_10775,(0),null);
var inst_10777 = cljs.core.nth.call(null,inst_10775,(1),null);
var state_10864__$1 = (function (){var statearr_10867 = state_10864;
(statearr_10867[(8)] = inst_10776);

return statearr_10867;
})();
if(cljs.core.truth_(inst_10777)){
var statearr_10868_10954 = state_10864__$1;
(statearr_10868_10954[(1)] = (22));

} else {
var statearr_10869_10955 = state_10864__$1;
(statearr_10869_10955[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (27))){
var inst_10812 = (state_10864[(9)]);
var inst_10807 = (state_10864[(10)]);
var inst_10736 = (state_10864[(11)]);
var inst_10805 = (state_10864[(12)]);
var inst_10812__$1 = cljs.core._nth.call(null,inst_10805,inst_10807);
var inst_10813 = cljs.core.async.put_BANG_.call(null,inst_10812__$1,inst_10736,done);
var state_10864__$1 = (function (){var statearr_10870 = state_10864;
(statearr_10870[(9)] = inst_10812__$1);

return statearr_10870;
})();
if(cljs.core.truth_(inst_10813)){
var statearr_10871_10956 = state_10864__$1;
(statearr_10871_10956[(1)] = (30));

} else {
var statearr_10872_10957 = state_10864__$1;
(statearr_10872_10957[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (1))){
var state_10864__$1 = state_10864;
var statearr_10873_10958 = state_10864__$1;
(statearr_10873_10958[(2)] = null);

(statearr_10873_10958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (24))){
var inst_10765 = (state_10864[(7)]);
var inst_10782 = (state_10864[(2)]);
var inst_10783 = cljs.core.next.call(null,inst_10765);
var inst_10745 = inst_10783;
var inst_10746 = null;
var inst_10747 = (0);
var inst_10748 = (0);
var state_10864__$1 = (function (){var statearr_10874 = state_10864;
(statearr_10874[(13)] = inst_10746);

(statearr_10874[(14)] = inst_10747);

(statearr_10874[(15)] = inst_10748);

(statearr_10874[(16)] = inst_10745);

(statearr_10874[(17)] = inst_10782);

return statearr_10874;
})();
var statearr_10875_10959 = state_10864__$1;
(statearr_10875_10959[(2)] = null);

(statearr_10875_10959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (39))){
var state_10864__$1 = state_10864;
var statearr_10879_10960 = state_10864__$1;
(statearr_10879_10960[(2)] = null);

(statearr_10879_10960[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (4))){
var inst_10736 = (state_10864[(11)]);
var inst_10736__$1 = (state_10864[(2)]);
var inst_10737 = (inst_10736__$1 == null);
var state_10864__$1 = (function (){var statearr_10880 = state_10864;
(statearr_10880[(11)] = inst_10736__$1);

return statearr_10880;
})();
if(cljs.core.truth_(inst_10737)){
var statearr_10881_10961 = state_10864__$1;
(statearr_10881_10961[(1)] = (5));

} else {
var statearr_10882_10962 = state_10864__$1;
(statearr_10882_10962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (15))){
var inst_10746 = (state_10864[(13)]);
var inst_10747 = (state_10864[(14)]);
var inst_10748 = (state_10864[(15)]);
var inst_10745 = (state_10864[(16)]);
var inst_10761 = (state_10864[(2)]);
var inst_10762 = (inst_10748 + (1));
var tmp10876 = inst_10746;
var tmp10877 = inst_10747;
var tmp10878 = inst_10745;
var inst_10745__$1 = tmp10878;
var inst_10746__$1 = tmp10876;
var inst_10747__$1 = tmp10877;
var inst_10748__$1 = inst_10762;
var state_10864__$1 = (function (){var statearr_10883 = state_10864;
(statearr_10883[(18)] = inst_10761);

(statearr_10883[(13)] = inst_10746__$1);

(statearr_10883[(14)] = inst_10747__$1);

(statearr_10883[(15)] = inst_10748__$1);

(statearr_10883[(16)] = inst_10745__$1);

return statearr_10883;
})();
var statearr_10884_10963 = state_10864__$1;
(statearr_10884_10963[(2)] = null);

(statearr_10884_10963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (21))){
var inst_10786 = (state_10864[(2)]);
var state_10864__$1 = state_10864;
var statearr_10888_10964 = state_10864__$1;
(statearr_10888_10964[(2)] = inst_10786);

(statearr_10888_10964[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (31))){
var inst_10812 = (state_10864[(9)]);
var inst_10816 = done.call(null,null);
var inst_10817 = cljs.core.async.untap_STAR_.call(null,m,inst_10812);
var state_10864__$1 = (function (){var statearr_10889 = state_10864;
(statearr_10889[(19)] = inst_10816);

return statearr_10889;
})();
var statearr_10890_10965 = state_10864__$1;
(statearr_10890_10965[(2)] = inst_10817);

(statearr_10890_10965[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (32))){
var inst_10807 = (state_10864[(10)]);
var inst_10804 = (state_10864[(20)]);
var inst_10806 = (state_10864[(21)]);
var inst_10805 = (state_10864[(12)]);
var inst_10819 = (state_10864[(2)]);
var inst_10820 = (inst_10807 + (1));
var tmp10885 = inst_10804;
var tmp10886 = inst_10806;
var tmp10887 = inst_10805;
var inst_10804__$1 = tmp10885;
var inst_10805__$1 = tmp10887;
var inst_10806__$1 = tmp10886;
var inst_10807__$1 = inst_10820;
var state_10864__$1 = (function (){var statearr_10891 = state_10864;
(statearr_10891[(22)] = inst_10819);

(statearr_10891[(10)] = inst_10807__$1);

(statearr_10891[(20)] = inst_10804__$1);

(statearr_10891[(21)] = inst_10806__$1);

(statearr_10891[(12)] = inst_10805__$1);

return statearr_10891;
})();
var statearr_10892_10966 = state_10864__$1;
(statearr_10892_10966[(2)] = null);

(statearr_10892_10966[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (40))){
var inst_10832 = (state_10864[(23)]);
var inst_10836 = done.call(null,null);
var inst_10837 = cljs.core.async.untap_STAR_.call(null,m,inst_10832);
var state_10864__$1 = (function (){var statearr_10893 = state_10864;
(statearr_10893[(24)] = inst_10836);

return statearr_10893;
})();
var statearr_10894_10967 = state_10864__$1;
(statearr_10894_10967[(2)] = inst_10837);

(statearr_10894_10967[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (33))){
var inst_10823 = (state_10864[(25)]);
var inst_10825 = cljs.core.chunked_seq_QMARK_.call(null,inst_10823);
var state_10864__$1 = state_10864;
if(inst_10825){
var statearr_10895_10968 = state_10864__$1;
(statearr_10895_10968[(1)] = (36));

} else {
var statearr_10896_10969 = state_10864__$1;
(statearr_10896_10969[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (13))){
var inst_10755 = (state_10864[(26)]);
var inst_10758 = cljs.core.async.close_BANG_.call(null,inst_10755);
var state_10864__$1 = state_10864;
var statearr_10897_10970 = state_10864__$1;
(statearr_10897_10970[(2)] = inst_10758);

(statearr_10897_10970[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (22))){
var inst_10776 = (state_10864[(8)]);
var inst_10779 = cljs.core.async.close_BANG_.call(null,inst_10776);
var state_10864__$1 = state_10864;
var statearr_10898_10971 = state_10864__$1;
(statearr_10898_10971[(2)] = inst_10779);

(statearr_10898_10971[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (36))){
var inst_10823 = (state_10864[(25)]);
var inst_10827 = cljs.core.chunk_first.call(null,inst_10823);
var inst_10828 = cljs.core.chunk_rest.call(null,inst_10823);
var inst_10829 = cljs.core.count.call(null,inst_10827);
var inst_10804 = inst_10828;
var inst_10805 = inst_10827;
var inst_10806 = inst_10829;
var inst_10807 = (0);
var state_10864__$1 = (function (){var statearr_10899 = state_10864;
(statearr_10899[(10)] = inst_10807);

(statearr_10899[(20)] = inst_10804);

(statearr_10899[(21)] = inst_10806);

(statearr_10899[(12)] = inst_10805);

return statearr_10899;
})();
var statearr_10900_10972 = state_10864__$1;
(statearr_10900_10972[(2)] = null);

(statearr_10900_10972[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (41))){
var inst_10823 = (state_10864[(25)]);
var inst_10839 = (state_10864[(2)]);
var inst_10840 = cljs.core.next.call(null,inst_10823);
var inst_10804 = inst_10840;
var inst_10805 = null;
var inst_10806 = (0);
var inst_10807 = (0);
var state_10864__$1 = (function (){var statearr_10901 = state_10864;
(statearr_10901[(10)] = inst_10807);

(statearr_10901[(20)] = inst_10804);

(statearr_10901[(21)] = inst_10806);

(statearr_10901[(27)] = inst_10839);

(statearr_10901[(12)] = inst_10805);

return statearr_10901;
})();
var statearr_10902_10973 = state_10864__$1;
(statearr_10902_10973[(2)] = null);

(statearr_10902_10973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (43))){
var state_10864__$1 = state_10864;
var statearr_10903_10974 = state_10864__$1;
(statearr_10903_10974[(2)] = null);

(statearr_10903_10974[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (29))){
var inst_10848 = (state_10864[(2)]);
var state_10864__$1 = state_10864;
var statearr_10904_10975 = state_10864__$1;
(statearr_10904_10975[(2)] = inst_10848);

(statearr_10904_10975[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (44))){
var inst_10857 = (state_10864[(2)]);
var state_10864__$1 = (function (){var statearr_10905 = state_10864;
(statearr_10905[(28)] = inst_10857);

return statearr_10905;
})();
var statearr_10906_10976 = state_10864__$1;
(statearr_10906_10976[(2)] = null);

(statearr_10906_10976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (6))){
var inst_10796 = (state_10864[(29)]);
var inst_10795 = cljs.core.deref.call(null,cs);
var inst_10796__$1 = cljs.core.keys.call(null,inst_10795);
var inst_10797 = cljs.core.count.call(null,inst_10796__$1);
var inst_10798 = cljs.core.reset_BANG_.call(null,dctr,inst_10797);
var inst_10803 = cljs.core.seq.call(null,inst_10796__$1);
var inst_10804 = inst_10803;
var inst_10805 = null;
var inst_10806 = (0);
var inst_10807 = (0);
var state_10864__$1 = (function (){var statearr_10907 = state_10864;
(statearr_10907[(10)] = inst_10807);

(statearr_10907[(20)] = inst_10804);

(statearr_10907[(21)] = inst_10806);

(statearr_10907[(29)] = inst_10796__$1);

(statearr_10907[(30)] = inst_10798);

(statearr_10907[(12)] = inst_10805);

return statearr_10907;
})();
var statearr_10908_10977 = state_10864__$1;
(statearr_10908_10977[(2)] = null);

(statearr_10908_10977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (28))){
var inst_10804 = (state_10864[(20)]);
var inst_10823 = (state_10864[(25)]);
var inst_10823__$1 = cljs.core.seq.call(null,inst_10804);
var state_10864__$1 = (function (){var statearr_10909 = state_10864;
(statearr_10909[(25)] = inst_10823__$1);

return statearr_10909;
})();
if(inst_10823__$1){
var statearr_10910_10978 = state_10864__$1;
(statearr_10910_10978[(1)] = (33));

} else {
var statearr_10911_10979 = state_10864__$1;
(statearr_10911_10979[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (25))){
var inst_10807 = (state_10864[(10)]);
var inst_10806 = (state_10864[(21)]);
var inst_10809 = (inst_10807 < inst_10806);
var inst_10810 = inst_10809;
var state_10864__$1 = state_10864;
if(cljs.core.truth_(inst_10810)){
var statearr_10912_10980 = state_10864__$1;
(statearr_10912_10980[(1)] = (27));

} else {
var statearr_10913_10981 = state_10864__$1;
(statearr_10913_10981[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (34))){
var state_10864__$1 = state_10864;
var statearr_10914_10982 = state_10864__$1;
(statearr_10914_10982[(2)] = null);

(statearr_10914_10982[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (17))){
var state_10864__$1 = state_10864;
var statearr_10915_10983 = state_10864__$1;
(statearr_10915_10983[(2)] = null);

(statearr_10915_10983[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (3))){
var inst_10862 = (state_10864[(2)]);
var state_10864__$1 = state_10864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10864__$1,inst_10862);
} else {
if((state_val_10865 === (12))){
var inst_10791 = (state_10864[(2)]);
var state_10864__$1 = state_10864;
var statearr_10916_10984 = state_10864__$1;
(statearr_10916_10984[(2)] = inst_10791);

(statearr_10916_10984[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (2))){
var state_10864__$1 = state_10864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10864__$1,(4),ch);
} else {
if((state_val_10865 === (23))){
var state_10864__$1 = state_10864;
var statearr_10917_10985 = state_10864__$1;
(statearr_10917_10985[(2)] = null);

(statearr_10917_10985[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (35))){
var inst_10846 = (state_10864[(2)]);
var state_10864__$1 = state_10864;
var statearr_10918_10986 = state_10864__$1;
(statearr_10918_10986[(2)] = inst_10846);

(statearr_10918_10986[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (19))){
var inst_10765 = (state_10864[(7)]);
var inst_10769 = cljs.core.chunk_first.call(null,inst_10765);
var inst_10770 = cljs.core.chunk_rest.call(null,inst_10765);
var inst_10771 = cljs.core.count.call(null,inst_10769);
var inst_10745 = inst_10770;
var inst_10746 = inst_10769;
var inst_10747 = inst_10771;
var inst_10748 = (0);
var state_10864__$1 = (function (){var statearr_10919 = state_10864;
(statearr_10919[(13)] = inst_10746);

(statearr_10919[(14)] = inst_10747);

(statearr_10919[(15)] = inst_10748);

(statearr_10919[(16)] = inst_10745);

return statearr_10919;
})();
var statearr_10920_10987 = state_10864__$1;
(statearr_10920_10987[(2)] = null);

(statearr_10920_10987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (11))){
var inst_10745 = (state_10864[(16)]);
var inst_10765 = (state_10864[(7)]);
var inst_10765__$1 = cljs.core.seq.call(null,inst_10745);
var state_10864__$1 = (function (){var statearr_10921 = state_10864;
(statearr_10921[(7)] = inst_10765__$1);

return statearr_10921;
})();
if(inst_10765__$1){
var statearr_10922_10988 = state_10864__$1;
(statearr_10922_10988[(1)] = (16));

} else {
var statearr_10923_10989 = state_10864__$1;
(statearr_10923_10989[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (9))){
var inst_10793 = (state_10864[(2)]);
var state_10864__$1 = state_10864;
var statearr_10924_10990 = state_10864__$1;
(statearr_10924_10990[(2)] = inst_10793);

(statearr_10924_10990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (5))){
var inst_10743 = cljs.core.deref.call(null,cs);
var inst_10744 = cljs.core.seq.call(null,inst_10743);
var inst_10745 = inst_10744;
var inst_10746 = null;
var inst_10747 = (0);
var inst_10748 = (0);
var state_10864__$1 = (function (){var statearr_10925 = state_10864;
(statearr_10925[(13)] = inst_10746);

(statearr_10925[(14)] = inst_10747);

(statearr_10925[(15)] = inst_10748);

(statearr_10925[(16)] = inst_10745);

return statearr_10925;
})();
var statearr_10926_10991 = state_10864__$1;
(statearr_10926_10991[(2)] = null);

(statearr_10926_10991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (14))){
var state_10864__$1 = state_10864;
var statearr_10927_10992 = state_10864__$1;
(statearr_10927_10992[(2)] = null);

(statearr_10927_10992[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (45))){
var inst_10854 = (state_10864[(2)]);
var state_10864__$1 = state_10864;
var statearr_10928_10993 = state_10864__$1;
(statearr_10928_10993[(2)] = inst_10854);

(statearr_10928_10993[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (26))){
var inst_10796 = (state_10864[(29)]);
var inst_10850 = (state_10864[(2)]);
var inst_10851 = cljs.core.seq.call(null,inst_10796);
var state_10864__$1 = (function (){var statearr_10929 = state_10864;
(statearr_10929[(31)] = inst_10850);

return statearr_10929;
})();
if(inst_10851){
var statearr_10930_10994 = state_10864__$1;
(statearr_10930_10994[(1)] = (42));

} else {
var statearr_10931_10995 = state_10864__$1;
(statearr_10931_10995[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (16))){
var inst_10765 = (state_10864[(7)]);
var inst_10767 = cljs.core.chunked_seq_QMARK_.call(null,inst_10765);
var state_10864__$1 = state_10864;
if(inst_10767){
var statearr_10932_10996 = state_10864__$1;
(statearr_10932_10996[(1)] = (19));

} else {
var statearr_10933_10997 = state_10864__$1;
(statearr_10933_10997[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (38))){
var inst_10843 = (state_10864[(2)]);
var state_10864__$1 = state_10864;
var statearr_10934_10998 = state_10864__$1;
(statearr_10934_10998[(2)] = inst_10843);

(statearr_10934_10998[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (30))){
var state_10864__$1 = state_10864;
var statearr_10935_10999 = state_10864__$1;
(statearr_10935_10999[(2)] = null);

(statearr_10935_10999[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (10))){
var inst_10746 = (state_10864[(13)]);
var inst_10748 = (state_10864[(15)]);
var inst_10754 = cljs.core._nth.call(null,inst_10746,inst_10748);
var inst_10755 = cljs.core.nth.call(null,inst_10754,(0),null);
var inst_10756 = cljs.core.nth.call(null,inst_10754,(1),null);
var state_10864__$1 = (function (){var statearr_10936 = state_10864;
(statearr_10936[(26)] = inst_10755);

return statearr_10936;
})();
if(cljs.core.truth_(inst_10756)){
var statearr_10937_11000 = state_10864__$1;
(statearr_10937_11000[(1)] = (13));

} else {
var statearr_10938_11001 = state_10864__$1;
(statearr_10938_11001[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (18))){
var inst_10789 = (state_10864[(2)]);
var state_10864__$1 = state_10864;
var statearr_10939_11002 = state_10864__$1;
(statearr_10939_11002[(2)] = inst_10789);

(statearr_10939_11002[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (42))){
var state_10864__$1 = state_10864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10864__$1,(45),dchan);
} else {
if((state_val_10865 === (37))){
var inst_10736 = (state_10864[(11)]);
var inst_10832 = (state_10864[(23)]);
var inst_10823 = (state_10864[(25)]);
var inst_10832__$1 = cljs.core.first.call(null,inst_10823);
var inst_10833 = cljs.core.async.put_BANG_.call(null,inst_10832__$1,inst_10736,done);
var state_10864__$1 = (function (){var statearr_10940 = state_10864;
(statearr_10940[(23)] = inst_10832__$1);

return statearr_10940;
})();
if(cljs.core.truth_(inst_10833)){
var statearr_10941_11003 = state_10864__$1;
(statearr_10941_11003[(1)] = (39));

} else {
var statearr_10942_11004 = state_10864__$1;
(statearr_10942_11004[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10865 === (8))){
var inst_10747 = (state_10864[(14)]);
var inst_10748 = (state_10864[(15)]);
var inst_10750 = (inst_10748 < inst_10747);
var inst_10751 = inst_10750;
var state_10864__$1 = state_10864;
if(cljs.core.truth_(inst_10751)){
var statearr_10943_11005 = state_10864__$1;
(statearr_10943_11005[(1)] = (10));

} else {
var statearr_10944_11006 = state_10864__$1;
(statearr_10944_11006[(1)] = (11));

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
});})(c__9645__auto___10952,cs,m,dchan,dctr,done))
;
return ((function (switch__9533__auto__,c__9645__auto___10952,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9534__auto__ = null;
var cljs$core$async$mult_$_state_machine__9534__auto____0 = (function (){
var statearr_10948 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10948[(0)] = cljs$core$async$mult_$_state_machine__9534__auto__);

(statearr_10948[(1)] = (1));

return statearr_10948;
});
var cljs$core$async$mult_$_state_machine__9534__auto____1 = (function (state_10864){
while(true){
var ret_value__9535__auto__ = (function (){try{while(true){
var result__9536__auto__ = switch__9533__auto__.call(null,state_10864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9536__auto__;
}
break;
}
}catch (e10949){if((e10949 instanceof Object)){
var ex__9537__auto__ = e10949;
var statearr_10950_11007 = state_10864;
(statearr_10950_11007[(5)] = ex__9537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11008 = state_10864;
state_10864 = G__11008;
continue;
} else {
return ret_value__9535__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9534__auto__ = function(state_10864){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9534__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9534__auto____1.call(this,state_10864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9534__auto____0;
cljs$core$async$mult_$_state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9534__auto____1;
return cljs$core$async$mult_$_state_machine__9534__auto__;
})()
;})(switch__9533__auto__,c__9645__auto___10952,cs,m,dchan,dctr,done))
})();
var state__9647__auto__ = (function (){var statearr_10951 = f__9646__auto__.call(null);
(statearr_10951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9645__auto___10952);

return statearr_10951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9647__auto__);
});})(c__9645__auto___10952,cs,m,dchan,dctr,done))
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
var args11009 = [];
var len__7214__auto___11012 = arguments.length;
var i__7215__auto___11013 = (0);
while(true){
if((i__7215__auto___11013 < len__7214__auto___11012)){
args11009.push((arguments[i__7215__auto___11013]));

var G__11014 = (i__7215__auto___11013 + (1));
i__7215__auto___11013 = G__11014;
continue;
} else {
}
break;
}

var G__11011 = args11009.length;
switch (G__11011) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11009.length)].join('')));

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
var len__7214__auto___11026 = arguments.length;
var i__7215__auto___11027 = (0);
while(true){
if((i__7215__auto___11027 < len__7214__auto___11026)){
args__7221__auto__.push((arguments[i__7215__auto___11027]));

var G__11028 = (i__7215__auto___11027 + (1));
i__7215__auto___11027 = G__11028;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((3) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7222__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11020){
var map__11021 = p__11020;
var map__11021__$1 = ((((!((map__11021 == null)))?((((map__11021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11021):map__11021);
var opts = map__11021__$1;
var statearr_11023_11029 = state;
(statearr_11023_11029[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__11021,map__11021__$1,opts){
return (function (val){
var statearr_11024_11030 = state;
(statearr_11024_11030[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__11021,map__11021__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_11025_11031 = state;
(statearr_11025_11031[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11016){
var G__11017 = cljs.core.first.call(null,seq11016);
var seq11016__$1 = cljs.core.next.call(null,seq11016);
var G__11018 = cljs.core.first.call(null,seq11016__$1);
var seq11016__$2 = cljs.core.next.call(null,seq11016__$1);
var G__11019 = cljs.core.first.call(null,seq11016__$2);
var seq11016__$3 = cljs.core.next.call(null,seq11016__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11017,G__11018,G__11019,seq11016__$3);
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
if(typeof cljs.core.async.t_cljs$core$async11195 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11195 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11196){
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
this.meta11196 = meta11196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11197,meta11196__$1){
var self__ = this;
var _11197__$1 = this;
return (new cljs.core.async.t_cljs$core$async11195(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11196__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11195.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11197){
var self__ = this;
var _11197__$1 = this;
return self__.meta11196;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11195.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11195.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11195.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async11195.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11195.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11195.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11195.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11195.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async11195.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11196","meta11196",-750570082,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11195.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11195";

cljs.core.async.t_cljs$core$async11195.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async11195");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async11195 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async11195(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11196){
return (new cljs.core.async.t_cljs$core$async11195(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11196));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async11195(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9645__auto___11358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9645__auto___11358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9646__auto__ = (function (){var switch__9533__auto__ = ((function (c__9645__auto___11358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11295){
var state_val_11296 = (state_11295[(1)]);
if((state_val_11296 === (7))){
var inst_11213 = (state_11295[(2)]);
var state_11295__$1 = state_11295;
var statearr_11297_11359 = state_11295__$1;
(statearr_11297_11359[(2)] = inst_11213);

(statearr_11297_11359[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (20))){
var inst_11225 = (state_11295[(7)]);
var state_11295__$1 = state_11295;
var statearr_11298_11360 = state_11295__$1;
(statearr_11298_11360[(2)] = inst_11225);

(statearr_11298_11360[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (27))){
var state_11295__$1 = state_11295;
var statearr_11299_11361 = state_11295__$1;
(statearr_11299_11361[(2)] = null);

(statearr_11299_11361[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (1))){
var inst_11201 = (state_11295[(8)]);
var inst_11201__$1 = calc_state.call(null);
var inst_11203 = (inst_11201__$1 == null);
var inst_11204 = cljs.core.not.call(null,inst_11203);
var state_11295__$1 = (function (){var statearr_11300 = state_11295;
(statearr_11300[(8)] = inst_11201__$1);

return statearr_11300;
})();
if(inst_11204){
var statearr_11301_11362 = state_11295__$1;
(statearr_11301_11362[(1)] = (2));

} else {
var statearr_11302_11363 = state_11295__$1;
(statearr_11302_11363[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (24))){
var inst_11255 = (state_11295[(9)]);
var inst_11269 = (state_11295[(10)]);
var inst_11248 = (state_11295[(11)]);
var inst_11269__$1 = inst_11248.call(null,inst_11255);
var state_11295__$1 = (function (){var statearr_11303 = state_11295;
(statearr_11303[(10)] = inst_11269__$1);

return statearr_11303;
})();
if(cljs.core.truth_(inst_11269__$1)){
var statearr_11304_11364 = state_11295__$1;
(statearr_11304_11364[(1)] = (29));

} else {
var statearr_11305_11365 = state_11295__$1;
(statearr_11305_11365[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (4))){
var inst_11216 = (state_11295[(2)]);
var state_11295__$1 = state_11295;
if(cljs.core.truth_(inst_11216)){
var statearr_11306_11366 = state_11295__$1;
(statearr_11306_11366[(1)] = (8));

} else {
var statearr_11307_11367 = state_11295__$1;
(statearr_11307_11367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (15))){
var inst_11242 = (state_11295[(2)]);
var state_11295__$1 = state_11295;
if(cljs.core.truth_(inst_11242)){
var statearr_11308_11368 = state_11295__$1;
(statearr_11308_11368[(1)] = (19));

} else {
var statearr_11309_11369 = state_11295__$1;
(statearr_11309_11369[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (21))){
var inst_11247 = (state_11295[(12)]);
var inst_11247__$1 = (state_11295[(2)]);
var inst_11248 = cljs.core.get.call(null,inst_11247__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11249 = cljs.core.get.call(null,inst_11247__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11250 = cljs.core.get.call(null,inst_11247__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11295__$1 = (function (){var statearr_11310 = state_11295;
(statearr_11310[(12)] = inst_11247__$1);

(statearr_11310[(11)] = inst_11248);

(statearr_11310[(13)] = inst_11249);

return statearr_11310;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11295__$1,(22),inst_11250);
} else {
if((state_val_11296 === (31))){
var inst_11277 = (state_11295[(2)]);
var state_11295__$1 = state_11295;
if(cljs.core.truth_(inst_11277)){
var statearr_11311_11370 = state_11295__$1;
(statearr_11311_11370[(1)] = (32));

} else {
var statearr_11312_11371 = state_11295__$1;
(statearr_11312_11371[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (32))){
var inst_11254 = (state_11295[(14)]);
var state_11295__$1 = state_11295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11295__$1,(35),out,inst_11254);
} else {
if((state_val_11296 === (33))){
var inst_11247 = (state_11295[(12)]);
var inst_11225 = inst_11247;
var state_11295__$1 = (function (){var statearr_11313 = state_11295;
(statearr_11313[(7)] = inst_11225);

return statearr_11313;
})();
var statearr_11314_11372 = state_11295__$1;
(statearr_11314_11372[(2)] = null);

(statearr_11314_11372[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (13))){
var inst_11225 = (state_11295[(7)]);
var inst_11232 = inst_11225.cljs$lang$protocol_mask$partition0$;
var inst_11233 = (inst_11232 & (64));
var inst_11234 = inst_11225.cljs$core$ISeq$;
var inst_11235 = (inst_11233) || (inst_11234);
var state_11295__$1 = state_11295;
if(cljs.core.truth_(inst_11235)){
var statearr_11315_11373 = state_11295__$1;
(statearr_11315_11373[(1)] = (16));

} else {
var statearr_11316_11374 = state_11295__$1;
(statearr_11316_11374[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (22))){
var inst_11255 = (state_11295[(9)]);
var inst_11254 = (state_11295[(14)]);
var inst_11253 = (state_11295[(2)]);
var inst_11254__$1 = cljs.core.nth.call(null,inst_11253,(0),null);
var inst_11255__$1 = cljs.core.nth.call(null,inst_11253,(1),null);
var inst_11256 = (inst_11254__$1 == null);
var inst_11257 = cljs.core._EQ_.call(null,inst_11255__$1,change);
var inst_11258 = (inst_11256) || (inst_11257);
var state_11295__$1 = (function (){var statearr_11317 = state_11295;
(statearr_11317[(9)] = inst_11255__$1);

(statearr_11317[(14)] = inst_11254__$1);

return statearr_11317;
})();
if(cljs.core.truth_(inst_11258)){
var statearr_11318_11375 = state_11295__$1;
(statearr_11318_11375[(1)] = (23));

} else {
var statearr_11319_11376 = state_11295__$1;
(statearr_11319_11376[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (36))){
var inst_11247 = (state_11295[(12)]);
var inst_11225 = inst_11247;
var state_11295__$1 = (function (){var statearr_11320 = state_11295;
(statearr_11320[(7)] = inst_11225);

return statearr_11320;
})();
var statearr_11321_11377 = state_11295__$1;
(statearr_11321_11377[(2)] = null);

(statearr_11321_11377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (29))){
var inst_11269 = (state_11295[(10)]);
var state_11295__$1 = state_11295;
var statearr_11322_11378 = state_11295__$1;
(statearr_11322_11378[(2)] = inst_11269);

(statearr_11322_11378[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (6))){
var state_11295__$1 = state_11295;
var statearr_11323_11379 = state_11295__$1;
(statearr_11323_11379[(2)] = false);

(statearr_11323_11379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (28))){
var inst_11265 = (state_11295[(2)]);
var inst_11266 = calc_state.call(null);
var inst_11225 = inst_11266;
var state_11295__$1 = (function (){var statearr_11324 = state_11295;
(statearr_11324[(7)] = inst_11225);

(statearr_11324[(15)] = inst_11265);

return statearr_11324;
})();
var statearr_11325_11380 = state_11295__$1;
(statearr_11325_11380[(2)] = null);

(statearr_11325_11380[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (25))){
var inst_11291 = (state_11295[(2)]);
var state_11295__$1 = state_11295;
var statearr_11326_11381 = state_11295__$1;
(statearr_11326_11381[(2)] = inst_11291);

(statearr_11326_11381[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (34))){
var inst_11289 = (state_11295[(2)]);
var state_11295__$1 = state_11295;
var statearr_11327_11382 = state_11295__$1;
(statearr_11327_11382[(2)] = inst_11289);

(statearr_11327_11382[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (17))){
var state_11295__$1 = state_11295;
var statearr_11328_11383 = state_11295__$1;
(statearr_11328_11383[(2)] = false);

(statearr_11328_11383[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (3))){
var state_11295__$1 = state_11295;
var statearr_11329_11384 = state_11295__$1;
(statearr_11329_11384[(2)] = false);

(statearr_11329_11384[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (12))){
var inst_11293 = (state_11295[(2)]);
var state_11295__$1 = state_11295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11295__$1,inst_11293);
} else {
if((state_val_11296 === (2))){
var inst_11201 = (state_11295[(8)]);
var inst_11206 = inst_11201.cljs$lang$protocol_mask$partition0$;
var inst_11207 = (inst_11206 & (64));
var inst_11208 = inst_11201.cljs$core$ISeq$;
var inst_11209 = (inst_11207) || (inst_11208);
var state_11295__$1 = state_11295;
if(cljs.core.truth_(inst_11209)){
var statearr_11330_11385 = state_11295__$1;
(statearr_11330_11385[(1)] = (5));

} else {
var statearr_11331_11386 = state_11295__$1;
(statearr_11331_11386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (23))){
var inst_11254 = (state_11295[(14)]);
var inst_11260 = (inst_11254 == null);
var state_11295__$1 = state_11295;
if(cljs.core.truth_(inst_11260)){
var statearr_11332_11387 = state_11295__$1;
(statearr_11332_11387[(1)] = (26));

} else {
var statearr_11333_11388 = state_11295__$1;
(statearr_11333_11388[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (35))){
var inst_11280 = (state_11295[(2)]);
var state_11295__$1 = state_11295;
if(cljs.core.truth_(inst_11280)){
var statearr_11334_11389 = state_11295__$1;
(statearr_11334_11389[(1)] = (36));

} else {
var statearr_11335_11390 = state_11295__$1;
(statearr_11335_11390[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (19))){
var inst_11225 = (state_11295[(7)]);
var inst_11244 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11225);
var state_11295__$1 = state_11295;
var statearr_11336_11391 = state_11295__$1;
(statearr_11336_11391[(2)] = inst_11244);

(statearr_11336_11391[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (11))){
var inst_11225 = (state_11295[(7)]);
var inst_11229 = (inst_11225 == null);
var inst_11230 = cljs.core.not.call(null,inst_11229);
var state_11295__$1 = state_11295;
if(inst_11230){
var statearr_11337_11392 = state_11295__$1;
(statearr_11337_11392[(1)] = (13));

} else {
var statearr_11338_11393 = state_11295__$1;
(statearr_11338_11393[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (9))){
var inst_11201 = (state_11295[(8)]);
var state_11295__$1 = state_11295;
var statearr_11339_11394 = state_11295__$1;
(statearr_11339_11394[(2)] = inst_11201);

(statearr_11339_11394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (5))){
var state_11295__$1 = state_11295;
var statearr_11340_11395 = state_11295__$1;
(statearr_11340_11395[(2)] = true);

(statearr_11340_11395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (14))){
var state_11295__$1 = state_11295;
var statearr_11341_11396 = state_11295__$1;
(statearr_11341_11396[(2)] = false);

(statearr_11341_11396[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (26))){
var inst_11255 = (state_11295[(9)]);
var inst_11262 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11255);
var state_11295__$1 = state_11295;
var statearr_11342_11397 = state_11295__$1;
(statearr_11342_11397[(2)] = inst_11262);

(statearr_11342_11397[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (16))){
var state_11295__$1 = state_11295;
var statearr_11343_11398 = state_11295__$1;
(statearr_11343_11398[(2)] = true);

(statearr_11343_11398[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (38))){
var inst_11285 = (state_11295[(2)]);
var state_11295__$1 = state_11295;
var statearr_11344_11399 = state_11295__$1;
(statearr_11344_11399[(2)] = inst_11285);

(statearr_11344_11399[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (30))){
var inst_11255 = (state_11295[(9)]);
var inst_11248 = (state_11295[(11)]);
var inst_11249 = (state_11295[(13)]);
var inst_11272 = cljs.core.empty_QMARK_.call(null,inst_11248);
var inst_11273 = inst_11249.call(null,inst_11255);
var inst_11274 = cljs.core.not.call(null,inst_11273);
var inst_11275 = (inst_11272) && (inst_11274);
var state_11295__$1 = state_11295;
var statearr_11345_11400 = state_11295__$1;
(statearr_11345_11400[(2)] = inst_11275);

(statearr_11345_11400[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (10))){
var inst_11201 = (state_11295[(8)]);
var inst_11221 = (state_11295[(2)]);
var inst_11222 = cljs.core.get.call(null,inst_11221,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11223 = cljs.core.get.call(null,inst_11221,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11224 = cljs.core.get.call(null,inst_11221,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11225 = inst_11201;
var state_11295__$1 = (function (){var statearr_11346 = state_11295;
(statearr_11346[(7)] = inst_11225);

(statearr_11346[(16)] = inst_11223);

(statearr_11346[(17)] = inst_11222);

(statearr_11346[(18)] = inst_11224);

return statearr_11346;
})();
var statearr_11347_11401 = state_11295__$1;
(statearr_11347_11401[(2)] = null);

(statearr_11347_11401[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (18))){
var inst_11239 = (state_11295[(2)]);
var state_11295__$1 = state_11295;
var statearr_11348_11402 = state_11295__$1;
(statearr_11348_11402[(2)] = inst_11239);

(statearr_11348_11402[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (37))){
var state_11295__$1 = state_11295;
var statearr_11349_11403 = state_11295__$1;
(statearr_11349_11403[(2)] = null);

(statearr_11349_11403[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11296 === (8))){
var inst_11201 = (state_11295[(8)]);
var inst_11218 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11201);
var state_11295__$1 = state_11295;
var statearr_11350_11404 = state_11295__$1;
(statearr_11350_11404[(2)] = inst_11218);

(statearr_11350_11404[(1)] = (10));


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
});})(c__9645__auto___11358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9533__auto__,c__9645__auto___11358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9534__auto__ = null;
var cljs$core$async$mix_$_state_machine__9534__auto____0 = (function (){
var statearr_11354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11354[(0)] = cljs$core$async$mix_$_state_machine__9534__auto__);

(statearr_11354[(1)] = (1));

return statearr_11354;
});
var cljs$core$async$mix_$_state_machine__9534__auto____1 = (function (state_11295){
while(true){
var ret_value__9535__auto__ = (function (){try{while(true){
var result__9536__auto__ = switch__9533__auto__.call(null,state_11295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9536__auto__;
}
break;
}
}catch (e11355){if((e11355 instanceof Object)){
var ex__9537__auto__ = e11355;
var statearr_11356_11405 = state_11295;
(statearr_11356_11405[(5)] = ex__9537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11406 = state_11295;
state_11295 = G__11406;
continue;
} else {
return ret_value__9535__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9534__auto__ = function(state_11295){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9534__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9534__auto____1.call(this,state_11295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9534__auto____0;
cljs$core$async$mix_$_state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9534__auto____1;
return cljs$core$async$mix_$_state_machine__9534__auto__;
})()
;})(switch__9533__auto__,c__9645__auto___11358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9647__auto__ = (function (){var statearr_11357 = f__9646__auto__.call(null);
(statearr_11357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9645__auto___11358);

return statearr_11357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9647__auto__);
});})(c__9645__auto___11358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args11407 = [];
var len__7214__auto___11410 = arguments.length;
var i__7215__auto___11411 = (0);
while(true){
if((i__7215__auto___11411 < len__7214__auto___11410)){
args11407.push((arguments[i__7215__auto___11411]));

var G__11412 = (i__7215__auto___11411 + (1));
i__7215__auto___11411 = G__11412;
continue;
} else {
}
break;
}

var G__11409 = args11407.length;
switch (G__11409) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11407.length)].join('')));

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
var args11415 = [];
var len__7214__auto___11540 = arguments.length;
var i__7215__auto___11541 = (0);
while(true){
if((i__7215__auto___11541 < len__7214__auto___11540)){
args11415.push((arguments[i__7215__auto___11541]));

var G__11542 = (i__7215__auto___11541 + (1));
i__7215__auto___11541 = G__11542;
continue;
} else {
}
break;
}

var G__11417 = args11415.length;
switch (G__11417) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11415.length)].join('')));

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
return (function (p1__11414_SHARP_){
if(cljs.core.truth_(p1__11414_SHARP_.call(null,topic))){
return p1__11414_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11414_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6156__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async11418 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11418 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11419){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11419 = meta11419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11420,meta11419__$1){
var self__ = this;
var _11420__$1 = this;
return (new cljs.core.async.t_cljs$core$async11418(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11419__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11418.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11420){
var self__ = this;
var _11420__$1 = this;
return self__.meta11419;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11418.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11418.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11418.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async11418.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11418.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async11418.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11418.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11418.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11419","meta11419",1159703134,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11418.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11418";

cljs.core.async.t_cljs$core$async11418.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async11418");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async11418 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11418(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11419){
return (new cljs.core.async.t_cljs$core$async11418(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11419));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11418(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9645__auto___11544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9645__auto___11544,mults,ensure_mult,p){
return (function (){
var f__9646__auto__ = (function (){var switch__9533__auto__ = ((function (c__9645__auto___11544,mults,ensure_mult,p){
return (function (state_11492){
var state_val_11493 = (state_11492[(1)]);
if((state_val_11493 === (7))){
var inst_11488 = (state_11492[(2)]);
var state_11492__$1 = state_11492;
var statearr_11494_11545 = state_11492__$1;
(statearr_11494_11545[(2)] = inst_11488);

(statearr_11494_11545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (20))){
var state_11492__$1 = state_11492;
var statearr_11495_11546 = state_11492__$1;
(statearr_11495_11546[(2)] = null);

(statearr_11495_11546[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (1))){
var state_11492__$1 = state_11492;
var statearr_11496_11547 = state_11492__$1;
(statearr_11496_11547[(2)] = null);

(statearr_11496_11547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (24))){
var inst_11471 = (state_11492[(7)]);
var inst_11480 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11471);
var state_11492__$1 = state_11492;
var statearr_11497_11548 = state_11492__$1;
(statearr_11497_11548[(2)] = inst_11480);

(statearr_11497_11548[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (4))){
var inst_11423 = (state_11492[(8)]);
var inst_11423__$1 = (state_11492[(2)]);
var inst_11424 = (inst_11423__$1 == null);
var state_11492__$1 = (function (){var statearr_11498 = state_11492;
(statearr_11498[(8)] = inst_11423__$1);

return statearr_11498;
})();
if(cljs.core.truth_(inst_11424)){
var statearr_11499_11549 = state_11492__$1;
(statearr_11499_11549[(1)] = (5));

} else {
var statearr_11500_11550 = state_11492__$1;
(statearr_11500_11550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (15))){
var inst_11465 = (state_11492[(2)]);
var state_11492__$1 = state_11492;
var statearr_11501_11551 = state_11492__$1;
(statearr_11501_11551[(2)] = inst_11465);

(statearr_11501_11551[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (21))){
var inst_11485 = (state_11492[(2)]);
var state_11492__$1 = (function (){var statearr_11502 = state_11492;
(statearr_11502[(9)] = inst_11485);

return statearr_11502;
})();
var statearr_11503_11552 = state_11492__$1;
(statearr_11503_11552[(2)] = null);

(statearr_11503_11552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (13))){
var inst_11447 = (state_11492[(10)]);
var inst_11449 = cljs.core.chunked_seq_QMARK_.call(null,inst_11447);
var state_11492__$1 = state_11492;
if(inst_11449){
var statearr_11504_11553 = state_11492__$1;
(statearr_11504_11553[(1)] = (16));

} else {
var statearr_11505_11554 = state_11492__$1;
(statearr_11505_11554[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (22))){
var inst_11477 = (state_11492[(2)]);
var state_11492__$1 = state_11492;
if(cljs.core.truth_(inst_11477)){
var statearr_11506_11555 = state_11492__$1;
(statearr_11506_11555[(1)] = (23));

} else {
var statearr_11507_11556 = state_11492__$1;
(statearr_11507_11556[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (6))){
var inst_11471 = (state_11492[(7)]);
var inst_11473 = (state_11492[(11)]);
var inst_11423 = (state_11492[(8)]);
var inst_11471__$1 = topic_fn.call(null,inst_11423);
var inst_11472 = cljs.core.deref.call(null,mults);
var inst_11473__$1 = cljs.core.get.call(null,inst_11472,inst_11471__$1);
var state_11492__$1 = (function (){var statearr_11508 = state_11492;
(statearr_11508[(7)] = inst_11471__$1);

(statearr_11508[(11)] = inst_11473__$1);

return statearr_11508;
})();
if(cljs.core.truth_(inst_11473__$1)){
var statearr_11509_11557 = state_11492__$1;
(statearr_11509_11557[(1)] = (19));

} else {
var statearr_11510_11558 = state_11492__$1;
(statearr_11510_11558[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (25))){
var inst_11482 = (state_11492[(2)]);
var state_11492__$1 = state_11492;
var statearr_11511_11559 = state_11492__$1;
(statearr_11511_11559[(2)] = inst_11482);

(statearr_11511_11559[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (17))){
var inst_11447 = (state_11492[(10)]);
var inst_11456 = cljs.core.first.call(null,inst_11447);
var inst_11457 = cljs.core.async.muxch_STAR_.call(null,inst_11456);
var inst_11458 = cljs.core.async.close_BANG_.call(null,inst_11457);
var inst_11459 = cljs.core.next.call(null,inst_11447);
var inst_11433 = inst_11459;
var inst_11434 = null;
var inst_11435 = (0);
var inst_11436 = (0);
var state_11492__$1 = (function (){var statearr_11512 = state_11492;
(statearr_11512[(12)] = inst_11434);

(statearr_11512[(13)] = inst_11458);

(statearr_11512[(14)] = inst_11435);

(statearr_11512[(15)] = inst_11433);

(statearr_11512[(16)] = inst_11436);

return statearr_11512;
})();
var statearr_11513_11560 = state_11492__$1;
(statearr_11513_11560[(2)] = null);

(statearr_11513_11560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (3))){
var inst_11490 = (state_11492[(2)]);
var state_11492__$1 = state_11492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11492__$1,inst_11490);
} else {
if((state_val_11493 === (12))){
var inst_11467 = (state_11492[(2)]);
var state_11492__$1 = state_11492;
var statearr_11514_11561 = state_11492__$1;
(statearr_11514_11561[(2)] = inst_11467);

(statearr_11514_11561[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (2))){
var state_11492__$1 = state_11492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11492__$1,(4),ch);
} else {
if((state_val_11493 === (23))){
var state_11492__$1 = state_11492;
var statearr_11515_11562 = state_11492__$1;
(statearr_11515_11562[(2)] = null);

(statearr_11515_11562[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (19))){
var inst_11473 = (state_11492[(11)]);
var inst_11423 = (state_11492[(8)]);
var inst_11475 = cljs.core.async.muxch_STAR_.call(null,inst_11473);
var state_11492__$1 = state_11492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11492__$1,(22),inst_11475,inst_11423);
} else {
if((state_val_11493 === (11))){
var inst_11447 = (state_11492[(10)]);
var inst_11433 = (state_11492[(15)]);
var inst_11447__$1 = cljs.core.seq.call(null,inst_11433);
var state_11492__$1 = (function (){var statearr_11516 = state_11492;
(statearr_11516[(10)] = inst_11447__$1);

return statearr_11516;
})();
if(inst_11447__$1){
var statearr_11517_11563 = state_11492__$1;
(statearr_11517_11563[(1)] = (13));

} else {
var statearr_11518_11564 = state_11492__$1;
(statearr_11518_11564[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (9))){
var inst_11469 = (state_11492[(2)]);
var state_11492__$1 = state_11492;
var statearr_11519_11565 = state_11492__$1;
(statearr_11519_11565[(2)] = inst_11469);

(statearr_11519_11565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (5))){
var inst_11430 = cljs.core.deref.call(null,mults);
var inst_11431 = cljs.core.vals.call(null,inst_11430);
var inst_11432 = cljs.core.seq.call(null,inst_11431);
var inst_11433 = inst_11432;
var inst_11434 = null;
var inst_11435 = (0);
var inst_11436 = (0);
var state_11492__$1 = (function (){var statearr_11520 = state_11492;
(statearr_11520[(12)] = inst_11434);

(statearr_11520[(14)] = inst_11435);

(statearr_11520[(15)] = inst_11433);

(statearr_11520[(16)] = inst_11436);

return statearr_11520;
})();
var statearr_11521_11566 = state_11492__$1;
(statearr_11521_11566[(2)] = null);

(statearr_11521_11566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (14))){
var state_11492__$1 = state_11492;
var statearr_11525_11567 = state_11492__$1;
(statearr_11525_11567[(2)] = null);

(statearr_11525_11567[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (16))){
var inst_11447 = (state_11492[(10)]);
var inst_11451 = cljs.core.chunk_first.call(null,inst_11447);
var inst_11452 = cljs.core.chunk_rest.call(null,inst_11447);
var inst_11453 = cljs.core.count.call(null,inst_11451);
var inst_11433 = inst_11452;
var inst_11434 = inst_11451;
var inst_11435 = inst_11453;
var inst_11436 = (0);
var state_11492__$1 = (function (){var statearr_11526 = state_11492;
(statearr_11526[(12)] = inst_11434);

(statearr_11526[(14)] = inst_11435);

(statearr_11526[(15)] = inst_11433);

(statearr_11526[(16)] = inst_11436);

return statearr_11526;
})();
var statearr_11527_11568 = state_11492__$1;
(statearr_11527_11568[(2)] = null);

(statearr_11527_11568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (10))){
var inst_11434 = (state_11492[(12)]);
var inst_11435 = (state_11492[(14)]);
var inst_11433 = (state_11492[(15)]);
var inst_11436 = (state_11492[(16)]);
var inst_11441 = cljs.core._nth.call(null,inst_11434,inst_11436);
var inst_11442 = cljs.core.async.muxch_STAR_.call(null,inst_11441);
var inst_11443 = cljs.core.async.close_BANG_.call(null,inst_11442);
var inst_11444 = (inst_11436 + (1));
var tmp11522 = inst_11434;
var tmp11523 = inst_11435;
var tmp11524 = inst_11433;
var inst_11433__$1 = tmp11524;
var inst_11434__$1 = tmp11522;
var inst_11435__$1 = tmp11523;
var inst_11436__$1 = inst_11444;
var state_11492__$1 = (function (){var statearr_11528 = state_11492;
(statearr_11528[(12)] = inst_11434__$1);

(statearr_11528[(17)] = inst_11443);

(statearr_11528[(14)] = inst_11435__$1);

(statearr_11528[(15)] = inst_11433__$1);

(statearr_11528[(16)] = inst_11436__$1);

return statearr_11528;
})();
var statearr_11529_11569 = state_11492__$1;
(statearr_11529_11569[(2)] = null);

(statearr_11529_11569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (18))){
var inst_11462 = (state_11492[(2)]);
var state_11492__$1 = state_11492;
var statearr_11530_11570 = state_11492__$1;
(statearr_11530_11570[(2)] = inst_11462);

(statearr_11530_11570[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11493 === (8))){
var inst_11435 = (state_11492[(14)]);
var inst_11436 = (state_11492[(16)]);
var inst_11438 = (inst_11436 < inst_11435);
var inst_11439 = inst_11438;
var state_11492__$1 = state_11492;
if(cljs.core.truth_(inst_11439)){
var statearr_11531_11571 = state_11492__$1;
(statearr_11531_11571[(1)] = (10));

} else {
var statearr_11532_11572 = state_11492__$1;
(statearr_11532_11572[(1)] = (11));

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
});})(c__9645__auto___11544,mults,ensure_mult,p))
;
return ((function (switch__9533__auto__,c__9645__auto___11544,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9534__auto__ = null;
var cljs$core$async$state_machine__9534__auto____0 = (function (){
var statearr_11536 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11536[(0)] = cljs$core$async$state_machine__9534__auto__);

(statearr_11536[(1)] = (1));

return statearr_11536;
});
var cljs$core$async$state_machine__9534__auto____1 = (function (state_11492){
while(true){
var ret_value__9535__auto__ = (function (){try{while(true){
var result__9536__auto__ = switch__9533__auto__.call(null,state_11492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9536__auto__;
}
break;
}
}catch (e11537){if((e11537 instanceof Object)){
var ex__9537__auto__ = e11537;
var statearr_11538_11573 = state_11492;
(statearr_11538_11573[(5)] = ex__9537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11574 = state_11492;
state_11492 = G__11574;
continue;
} else {
return ret_value__9535__auto__;
}
break;
}
});
cljs$core$async$state_machine__9534__auto__ = function(state_11492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9534__auto____1.call(this,state_11492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9534__auto____0;
cljs$core$async$state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9534__auto____1;
return cljs$core$async$state_machine__9534__auto__;
})()
;})(switch__9533__auto__,c__9645__auto___11544,mults,ensure_mult,p))
})();
var state__9647__auto__ = (function (){var statearr_11539 = f__9646__auto__.call(null);
(statearr_11539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9645__auto___11544);

return statearr_11539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9647__auto__);
});})(c__9645__auto___11544,mults,ensure_mult,p))
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
var args11575 = [];
var len__7214__auto___11578 = arguments.length;
var i__7215__auto___11579 = (0);
while(true){
if((i__7215__auto___11579 < len__7214__auto___11578)){
args11575.push((arguments[i__7215__auto___11579]));

var G__11580 = (i__7215__auto___11579 + (1));
i__7215__auto___11579 = G__11580;
continue;
} else {
}
break;
}

var G__11577 = args11575.length;
switch (G__11577) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11575.length)].join('')));

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
var args11582 = [];
var len__7214__auto___11585 = arguments.length;
var i__7215__auto___11586 = (0);
while(true){
if((i__7215__auto___11586 < len__7214__auto___11585)){
args11582.push((arguments[i__7215__auto___11586]));

var G__11587 = (i__7215__auto___11586 + (1));
i__7215__auto___11586 = G__11587;
continue;
} else {
}
break;
}

var G__11584 = args11582.length;
switch (G__11584) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11582.length)].join('')));

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
var args11589 = [];
var len__7214__auto___11660 = arguments.length;
var i__7215__auto___11661 = (0);
while(true){
if((i__7215__auto___11661 < len__7214__auto___11660)){
args11589.push((arguments[i__7215__auto___11661]));

var G__11662 = (i__7215__auto___11661 + (1));
i__7215__auto___11661 = G__11662;
continue;
} else {
}
break;
}

var G__11591 = args11589.length;
switch (G__11591) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11589.length)].join('')));

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
var c__9645__auto___11664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9645__auto___11664,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9646__auto__ = (function (){var switch__9533__auto__ = ((function (c__9645__auto___11664,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11630){
var state_val_11631 = (state_11630[(1)]);
if((state_val_11631 === (7))){
var state_11630__$1 = state_11630;
var statearr_11632_11665 = state_11630__$1;
(statearr_11632_11665[(2)] = null);

(statearr_11632_11665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (1))){
var state_11630__$1 = state_11630;
var statearr_11633_11666 = state_11630__$1;
(statearr_11633_11666[(2)] = null);

(statearr_11633_11666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (4))){
var inst_11594 = (state_11630[(7)]);
var inst_11596 = (inst_11594 < cnt);
var state_11630__$1 = state_11630;
if(cljs.core.truth_(inst_11596)){
var statearr_11634_11667 = state_11630__$1;
(statearr_11634_11667[(1)] = (6));

} else {
var statearr_11635_11668 = state_11630__$1;
(statearr_11635_11668[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (15))){
var inst_11626 = (state_11630[(2)]);
var state_11630__$1 = state_11630;
var statearr_11636_11669 = state_11630__$1;
(statearr_11636_11669[(2)] = inst_11626);

(statearr_11636_11669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (13))){
var inst_11619 = cljs.core.async.close_BANG_.call(null,out);
var state_11630__$1 = state_11630;
var statearr_11637_11670 = state_11630__$1;
(statearr_11637_11670[(2)] = inst_11619);

(statearr_11637_11670[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (6))){
var state_11630__$1 = state_11630;
var statearr_11638_11671 = state_11630__$1;
(statearr_11638_11671[(2)] = null);

(statearr_11638_11671[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (3))){
var inst_11628 = (state_11630[(2)]);
var state_11630__$1 = state_11630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11630__$1,inst_11628);
} else {
if((state_val_11631 === (12))){
var inst_11616 = (state_11630[(8)]);
var inst_11616__$1 = (state_11630[(2)]);
var inst_11617 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11616__$1);
var state_11630__$1 = (function (){var statearr_11639 = state_11630;
(statearr_11639[(8)] = inst_11616__$1);

return statearr_11639;
})();
if(cljs.core.truth_(inst_11617)){
var statearr_11640_11672 = state_11630__$1;
(statearr_11640_11672[(1)] = (13));

} else {
var statearr_11641_11673 = state_11630__$1;
(statearr_11641_11673[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (2))){
var inst_11593 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11594 = (0);
var state_11630__$1 = (function (){var statearr_11642 = state_11630;
(statearr_11642[(9)] = inst_11593);

(statearr_11642[(7)] = inst_11594);

return statearr_11642;
})();
var statearr_11643_11674 = state_11630__$1;
(statearr_11643_11674[(2)] = null);

(statearr_11643_11674[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (11))){
var inst_11594 = (state_11630[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11630,(10),Object,null,(9));
var inst_11603 = chs__$1.call(null,inst_11594);
var inst_11604 = done.call(null,inst_11594);
var inst_11605 = cljs.core.async.take_BANG_.call(null,inst_11603,inst_11604);
var state_11630__$1 = state_11630;
var statearr_11644_11675 = state_11630__$1;
(statearr_11644_11675[(2)] = inst_11605);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11630__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (9))){
var inst_11594 = (state_11630[(7)]);
var inst_11607 = (state_11630[(2)]);
var inst_11608 = (inst_11594 + (1));
var inst_11594__$1 = inst_11608;
var state_11630__$1 = (function (){var statearr_11645 = state_11630;
(statearr_11645[(7)] = inst_11594__$1);

(statearr_11645[(10)] = inst_11607);

return statearr_11645;
})();
var statearr_11646_11676 = state_11630__$1;
(statearr_11646_11676[(2)] = null);

(statearr_11646_11676[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (5))){
var inst_11614 = (state_11630[(2)]);
var state_11630__$1 = (function (){var statearr_11647 = state_11630;
(statearr_11647[(11)] = inst_11614);

return statearr_11647;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11630__$1,(12),dchan);
} else {
if((state_val_11631 === (14))){
var inst_11616 = (state_11630[(8)]);
var inst_11621 = cljs.core.apply.call(null,f,inst_11616);
var state_11630__$1 = state_11630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11630__$1,(16),out,inst_11621);
} else {
if((state_val_11631 === (16))){
var inst_11623 = (state_11630[(2)]);
var state_11630__$1 = (function (){var statearr_11648 = state_11630;
(statearr_11648[(12)] = inst_11623);

return statearr_11648;
})();
var statearr_11649_11677 = state_11630__$1;
(statearr_11649_11677[(2)] = null);

(statearr_11649_11677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (10))){
var inst_11598 = (state_11630[(2)]);
var inst_11599 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11630__$1 = (function (){var statearr_11650 = state_11630;
(statearr_11650[(13)] = inst_11598);

return statearr_11650;
})();
var statearr_11651_11678 = state_11630__$1;
(statearr_11651_11678[(2)] = inst_11599);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11630__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11631 === (8))){
var inst_11612 = (state_11630[(2)]);
var state_11630__$1 = state_11630;
var statearr_11652_11679 = state_11630__$1;
(statearr_11652_11679[(2)] = inst_11612);

(statearr_11652_11679[(1)] = (5));


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
});})(c__9645__auto___11664,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9533__auto__,c__9645__auto___11664,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9534__auto__ = null;
var cljs$core$async$state_machine__9534__auto____0 = (function (){
var statearr_11656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11656[(0)] = cljs$core$async$state_machine__9534__auto__);

(statearr_11656[(1)] = (1));

return statearr_11656;
});
var cljs$core$async$state_machine__9534__auto____1 = (function (state_11630){
while(true){
var ret_value__9535__auto__ = (function (){try{while(true){
var result__9536__auto__ = switch__9533__auto__.call(null,state_11630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9536__auto__;
}
break;
}
}catch (e11657){if((e11657 instanceof Object)){
var ex__9537__auto__ = e11657;
var statearr_11658_11680 = state_11630;
(statearr_11658_11680[(5)] = ex__9537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11681 = state_11630;
state_11630 = G__11681;
continue;
} else {
return ret_value__9535__auto__;
}
break;
}
});
cljs$core$async$state_machine__9534__auto__ = function(state_11630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9534__auto____1.call(this,state_11630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9534__auto____0;
cljs$core$async$state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9534__auto____1;
return cljs$core$async$state_machine__9534__auto__;
})()
;})(switch__9533__auto__,c__9645__auto___11664,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9647__auto__ = (function (){var statearr_11659 = f__9646__auto__.call(null);
(statearr_11659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9645__auto___11664);

return statearr_11659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9647__auto__);
});})(c__9645__auto___11664,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args11683 = [];
var len__7214__auto___11739 = arguments.length;
var i__7215__auto___11740 = (0);
while(true){
if((i__7215__auto___11740 < len__7214__auto___11739)){
args11683.push((arguments[i__7215__auto___11740]));

var G__11741 = (i__7215__auto___11740 + (1));
i__7215__auto___11740 = G__11741;
continue;
} else {
}
break;
}

var G__11685 = args11683.length;
switch (G__11685) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11683.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9645__auto___11743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9645__auto___11743,out){
return (function (){
var f__9646__auto__ = (function (){var switch__9533__auto__ = ((function (c__9645__auto___11743,out){
return (function (state_11715){
var state_val_11716 = (state_11715[(1)]);
if((state_val_11716 === (7))){
var inst_11694 = (state_11715[(7)]);
var inst_11695 = (state_11715[(8)]);
var inst_11694__$1 = (state_11715[(2)]);
var inst_11695__$1 = cljs.core.nth.call(null,inst_11694__$1,(0),null);
var inst_11696 = cljs.core.nth.call(null,inst_11694__$1,(1),null);
var inst_11697 = (inst_11695__$1 == null);
var state_11715__$1 = (function (){var statearr_11717 = state_11715;
(statearr_11717[(7)] = inst_11694__$1);

(statearr_11717[(8)] = inst_11695__$1);

(statearr_11717[(9)] = inst_11696);

return statearr_11717;
})();
if(cljs.core.truth_(inst_11697)){
var statearr_11718_11744 = state_11715__$1;
(statearr_11718_11744[(1)] = (8));

} else {
var statearr_11719_11745 = state_11715__$1;
(statearr_11719_11745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11716 === (1))){
var inst_11686 = cljs.core.vec.call(null,chs);
var inst_11687 = inst_11686;
var state_11715__$1 = (function (){var statearr_11720 = state_11715;
(statearr_11720[(10)] = inst_11687);

return statearr_11720;
})();
var statearr_11721_11746 = state_11715__$1;
(statearr_11721_11746[(2)] = null);

(statearr_11721_11746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11716 === (4))){
var inst_11687 = (state_11715[(10)]);
var state_11715__$1 = state_11715;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11715__$1,(7),inst_11687);
} else {
if((state_val_11716 === (6))){
var inst_11711 = (state_11715[(2)]);
var state_11715__$1 = state_11715;
var statearr_11722_11747 = state_11715__$1;
(statearr_11722_11747[(2)] = inst_11711);

(statearr_11722_11747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11716 === (3))){
var inst_11713 = (state_11715[(2)]);
var state_11715__$1 = state_11715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11715__$1,inst_11713);
} else {
if((state_val_11716 === (2))){
var inst_11687 = (state_11715[(10)]);
var inst_11689 = cljs.core.count.call(null,inst_11687);
var inst_11690 = (inst_11689 > (0));
var state_11715__$1 = state_11715;
if(cljs.core.truth_(inst_11690)){
var statearr_11724_11748 = state_11715__$1;
(statearr_11724_11748[(1)] = (4));

} else {
var statearr_11725_11749 = state_11715__$1;
(statearr_11725_11749[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11716 === (11))){
var inst_11687 = (state_11715[(10)]);
var inst_11704 = (state_11715[(2)]);
var tmp11723 = inst_11687;
var inst_11687__$1 = tmp11723;
var state_11715__$1 = (function (){var statearr_11726 = state_11715;
(statearr_11726[(10)] = inst_11687__$1);

(statearr_11726[(11)] = inst_11704);

return statearr_11726;
})();
var statearr_11727_11750 = state_11715__$1;
(statearr_11727_11750[(2)] = null);

(statearr_11727_11750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11716 === (9))){
var inst_11695 = (state_11715[(8)]);
var state_11715__$1 = state_11715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11715__$1,(11),out,inst_11695);
} else {
if((state_val_11716 === (5))){
var inst_11709 = cljs.core.async.close_BANG_.call(null,out);
var state_11715__$1 = state_11715;
var statearr_11728_11751 = state_11715__$1;
(statearr_11728_11751[(2)] = inst_11709);

(statearr_11728_11751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11716 === (10))){
var inst_11707 = (state_11715[(2)]);
var state_11715__$1 = state_11715;
var statearr_11729_11752 = state_11715__$1;
(statearr_11729_11752[(2)] = inst_11707);

(statearr_11729_11752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11716 === (8))){
var inst_11687 = (state_11715[(10)]);
var inst_11694 = (state_11715[(7)]);
var inst_11695 = (state_11715[(8)]);
var inst_11696 = (state_11715[(9)]);
var inst_11699 = (function (){var cs = inst_11687;
var vec__11692 = inst_11694;
var v = inst_11695;
var c = inst_11696;
return ((function (cs,vec__11692,v,c,inst_11687,inst_11694,inst_11695,inst_11696,state_val_11716,c__9645__auto___11743,out){
return (function (p1__11682_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11682_SHARP_);
});
;})(cs,vec__11692,v,c,inst_11687,inst_11694,inst_11695,inst_11696,state_val_11716,c__9645__auto___11743,out))
})();
var inst_11700 = cljs.core.filterv.call(null,inst_11699,inst_11687);
var inst_11687__$1 = inst_11700;
var state_11715__$1 = (function (){var statearr_11730 = state_11715;
(statearr_11730[(10)] = inst_11687__$1);

return statearr_11730;
})();
var statearr_11731_11753 = state_11715__$1;
(statearr_11731_11753[(2)] = null);

(statearr_11731_11753[(1)] = (2));


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
});})(c__9645__auto___11743,out))
;
return ((function (switch__9533__auto__,c__9645__auto___11743,out){
return (function() {
var cljs$core$async$state_machine__9534__auto__ = null;
var cljs$core$async$state_machine__9534__auto____0 = (function (){
var statearr_11735 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11735[(0)] = cljs$core$async$state_machine__9534__auto__);

(statearr_11735[(1)] = (1));

return statearr_11735;
});
var cljs$core$async$state_machine__9534__auto____1 = (function (state_11715){
while(true){
var ret_value__9535__auto__ = (function (){try{while(true){
var result__9536__auto__ = switch__9533__auto__.call(null,state_11715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9536__auto__;
}
break;
}
}catch (e11736){if((e11736 instanceof Object)){
var ex__9537__auto__ = e11736;
var statearr_11737_11754 = state_11715;
(statearr_11737_11754[(5)] = ex__9537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11755 = state_11715;
state_11715 = G__11755;
continue;
} else {
return ret_value__9535__auto__;
}
break;
}
});
cljs$core$async$state_machine__9534__auto__ = function(state_11715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9534__auto____1.call(this,state_11715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9534__auto____0;
cljs$core$async$state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9534__auto____1;
return cljs$core$async$state_machine__9534__auto__;
})()
;})(switch__9533__auto__,c__9645__auto___11743,out))
})();
var state__9647__auto__ = (function (){var statearr_11738 = f__9646__auto__.call(null);
(statearr_11738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9645__auto___11743);

return statearr_11738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9647__auto__);
});})(c__9645__auto___11743,out))
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
var args11756 = [];
var len__7214__auto___11805 = arguments.length;
var i__7215__auto___11806 = (0);
while(true){
if((i__7215__auto___11806 < len__7214__auto___11805)){
args11756.push((arguments[i__7215__auto___11806]));

var G__11807 = (i__7215__auto___11806 + (1));
i__7215__auto___11806 = G__11807;
continue;
} else {
}
break;
}

var G__11758 = args11756.length;
switch (G__11758) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11756.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9645__auto___11809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9645__auto___11809,out){
return (function (){
var f__9646__auto__ = (function (){var switch__9533__auto__ = ((function (c__9645__auto___11809,out){
return (function (state_11782){
var state_val_11783 = (state_11782[(1)]);
if((state_val_11783 === (7))){
var inst_11764 = (state_11782[(7)]);
var inst_11764__$1 = (state_11782[(2)]);
var inst_11765 = (inst_11764__$1 == null);
var inst_11766 = cljs.core.not.call(null,inst_11765);
var state_11782__$1 = (function (){var statearr_11784 = state_11782;
(statearr_11784[(7)] = inst_11764__$1);

return statearr_11784;
})();
if(inst_11766){
var statearr_11785_11810 = state_11782__$1;
(statearr_11785_11810[(1)] = (8));

} else {
var statearr_11786_11811 = state_11782__$1;
(statearr_11786_11811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (1))){
var inst_11759 = (0);
var state_11782__$1 = (function (){var statearr_11787 = state_11782;
(statearr_11787[(8)] = inst_11759);

return statearr_11787;
})();
var statearr_11788_11812 = state_11782__$1;
(statearr_11788_11812[(2)] = null);

(statearr_11788_11812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (4))){
var state_11782__$1 = state_11782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11782__$1,(7),ch);
} else {
if((state_val_11783 === (6))){
var inst_11777 = (state_11782[(2)]);
var state_11782__$1 = state_11782;
var statearr_11789_11813 = state_11782__$1;
(statearr_11789_11813[(2)] = inst_11777);

(statearr_11789_11813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (3))){
var inst_11779 = (state_11782[(2)]);
var inst_11780 = cljs.core.async.close_BANG_.call(null,out);
var state_11782__$1 = (function (){var statearr_11790 = state_11782;
(statearr_11790[(9)] = inst_11779);

return statearr_11790;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11782__$1,inst_11780);
} else {
if((state_val_11783 === (2))){
var inst_11759 = (state_11782[(8)]);
var inst_11761 = (inst_11759 < n);
var state_11782__$1 = state_11782;
if(cljs.core.truth_(inst_11761)){
var statearr_11791_11814 = state_11782__$1;
(statearr_11791_11814[(1)] = (4));

} else {
var statearr_11792_11815 = state_11782__$1;
(statearr_11792_11815[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (11))){
var inst_11759 = (state_11782[(8)]);
var inst_11769 = (state_11782[(2)]);
var inst_11770 = (inst_11759 + (1));
var inst_11759__$1 = inst_11770;
var state_11782__$1 = (function (){var statearr_11793 = state_11782;
(statearr_11793[(8)] = inst_11759__$1);

(statearr_11793[(10)] = inst_11769);

return statearr_11793;
})();
var statearr_11794_11816 = state_11782__$1;
(statearr_11794_11816[(2)] = null);

(statearr_11794_11816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (9))){
var state_11782__$1 = state_11782;
var statearr_11795_11817 = state_11782__$1;
(statearr_11795_11817[(2)] = null);

(statearr_11795_11817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (5))){
var state_11782__$1 = state_11782;
var statearr_11796_11818 = state_11782__$1;
(statearr_11796_11818[(2)] = null);

(statearr_11796_11818[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (10))){
var inst_11774 = (state_11782[(2)]);
var state_11782__$1 = state_11782;
var statearr_11797_11819 = state_11782__$1;
(statearr_11797_11819[(2)] = inst_11774);

(statearr_11797_11819[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11783 === (8))){
var inst_11764 = (state_11782[(7)]);
var state_11782__$1 = state_11782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11782__$1,(11),out,inst_11764);
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
});})(c__9645__auto___11809,out))
;
return ((function (switch__9533__auto__,c__9645__auto___11809,out){
return (function() {
var cljs$core$async$state_machine__9534__auto__ = null;
var cljs$core$async$state_machine__9534__auto____0 = (function (){
var statearr_11801 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11801[(0)] = cljs$core$async$state_machine__9534__auto__);

(statearr_11801[(1)] = (1));

return statearr_11801;
});
var cljs$core$async$state_machine__9534__auto____1 = (function (state_11782){
while(true){
var ret_value__9535__auto__ = (function (){try{while(true){
var result__9536__auto__ = switch__9533__auto__.call(null,state_11782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9536__auto__;
}
break;
}
}catch (e11802){if((e11802 instanceof Object)){
var ex__9537__auto__ = e11802;
var statearr_11803_11820 = state_11782;
(statearr_11803_11820[(5)] = ex__9537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11821 = state_11782;
state_11782 = G__11821;
continue;
} else {
return ret_value__9535__auto__;
}
break;
}
});
cljs$core$async$state_machine__9534__auto__ = function(state_11782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9534__auto____1.call(this,state_11782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9534__auto____0;
cljs$core$async$state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9534__auto____1;
return cljs$core$async$state_machine__9534__auto__;
})()
;})(switch__9533__auto__,c__9645__auto___11809,out))
})();
var state__9647__auto__ = (function (){var statearr_11804 = f__9646__auto__.call(null);
(statearr_11804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9645__auto___11809);

return statearr_11804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9647__auto__);
});})(c__9645__auto___11809,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11829 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11829 = (function (map_LT_,f,ch,meta11830){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11830 = meta11830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11831,meta11830__$1){
var self__ = this;
var _11831__$1 = this;
return (new cljs.core.async.t_cljs$core$async11829(self__.map_LT_,self__.f,self__.ch,meta11830__$1));
});

cljs.core.async.t_cljs$core$async11829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11831){
var self__ = this;
var _11831__$1 = this;
return self__.meta11830;
});

cljs.core.async.t_cljs$core$async11829.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11829.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11829.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11829.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11829.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async11832 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11832 = (function (map_LT_,f,ch,meta11830,_,fn1,meta11833){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11830 = meta11830;
this._ = _;
this.fn1 = fn1;
this.meta11833 = meta11833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11834,meta11833__$1){
var self__ = this;
var _11834__$1 = this;
return (new cljs.core.async.t_cljs$core$async11832(self__.map_LT_,self__.f,self__.ch,self__.meta11830,self__._,self__.fn1,meta11833__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async11832.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11834){
var self__ = this;
var _11834__$1 = this;
return self__.meta11833;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11832.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11832.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11832.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11832.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11822_SHARP_){
return f1.call(null,(((p1__11822_SHARP_ == null))?null:self__.f.call(null,p1__11822_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async11832.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11830","meta11830",1975509754,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11829","cljs.core.async/t_cljs$core$async11829",-65347821,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11833","meta11833",-1300638556,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11832.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11832";

cljs.core.async.t_cljs$core$async11832.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async11832");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async11832 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11832(map_LT___$1,f__$1,ch__$1,meta11830__$1,___$2,fn1__$1,meta11833){
return (new cljs.core.async.t_cljs$core$async11832(map_LT___$1,f__$1,ch__$1,meta11830__$1,___$2,fn1__$1,meta11833));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async11832(self__.map_LT_,self__.f,self__.ch,self__.meta11830,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async11829.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11829.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async11829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11830","meta11830",1975509754,null)], null);
});

cljs.core.async.t_cljs$core$async11829.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11829";

cljs.core.async.t_cljs$core$async11829.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async11829");
});

cljs.core.async.__GT_t_cljs$core$async11829 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11829(map_LT___$1,f__$1,ch__$1,meta11830){
return (new cljs.core.async.t_cljs$core$async11829(map_LT___$1,f__$1,ch__$1,meta11830));
});

}

return (new cljs.core.async.t_cljs$core$async11829(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11838 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11838 = (function (map_GT_,f,ch,meta11839){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta11839 = meta11839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11840,meta11839__$1){
var self__ = this;
var _11840__$1 = this;
return (new cljs.core.async.t_cljs$core$async11838(self__.map_GT_,self__.f,self__.ch,meta11839__$1));
});

cljs.core.async.t_cljs$core$async11838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11840){
var self__ = this;
var _11840__$1 = this;
return self__.meta11839;
});

cljs.core.async.t_cljs$core$async11838.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11838.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11838.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11838.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11838.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11838.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async11838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11839","meta11839",928563470,null)], null);
});

cljs.core.async.t_cljs$core$async11838.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11838";

cljs.core.async.t_cljs$core$async11838.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async11838");
});

cljs.core.async.__GT_t_cljs$core$async11838 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11838(map_GT___$1,f__$1,ch__$1,meta11839){
return (new cljs.core.async.t_cljs$core$async11838(map_GT___$1,f__$1,ch__$1,meta11839));
});

}

return (new cljs.core.async.t_cljs$core$async11838(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async11844 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11844 = (function (filter_GT_,p,ch,meta11845){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta11845 = meta11845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11846,meta11845__$1){
var self__ = this;
var _11846__$1 = this;
return (new cljs.core.async.t_cljs$core$async11844(self__.filter_GT_,self__.p,self__.ch,meta11845__$1));
});

cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11846){
var self__ = this;
var _11846__$1 = this;
return self__.meta11845;
});

cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11844.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async11844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11845","meta11845",-1073878825,null)], null);
});

cljs.core.async.t_cljs$core$async11844.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11844";

cljs.core.async.t_cljs$core$async11844.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async11844");
});

cljs.core.async.__GT_t_cljs$core$async11844 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11844(filter_GT___$1,p__$1,ch__$1,meta11845){
return (new cljs.core.async.t_cljs$core$async11844(filter_GT___$1,p__$1,ch__$1,meta11845));
});

}

return (new cljs.core.async.t_cljs$core$async11844(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args11847 = [];
var len__7214__auto___11891 = arguments.length;
var i__7215__auto___11892 = (0);
while(true){
if((i__7215__auto___11892 < len__7214__auto___11891)){
args11847.push((arguments[i__7215__auto___11892]));

var G__11893 = (i__7215__auto___11892 + (1));
i__7215__auto___11892 = G__11893;
continue;
} else {
}
break;
}

var G__11849 = args11847.length;
switch (G__11849) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11847.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9645__auto___11895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9645__auto___11895,out){
return (function (){
var f__9646__auto__ = (function (){var switch__9533__auto__ = ((function (c__9645__auto___11895,out){
return (function (state_11870){
var state_val_11871 = (state_11870[(1)]);
if((state_val_11871 === (7))){
var inst_11866 = (state_11870[(2)]);
var state_11870__$1 = state_11870;
var statearr_11872_11896 = state_11870__$1;
(statearr_11872_11896[(2)] = inst_11866);

(statearr_11872_11896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11871 === (1))){
var state_11870__$1 = state_11870;
var statearr_11873_11897 = state_11870__$1;
(statearr_11873_11897[(2)] = null);

(statearr_11873_11897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11871 === (4))){
var inst_11852 = (state_11870[(7)]);
var inst_11852__$1 = (state_11870[(2)]);
var inst_11853 = (inst_11852__$1 == null);
var state_11870__$1 = (function (){var statearr_11874 = state_11870;
(statearr_11874[(7)] = inst_11852__$1);

return statearr_11874;
})();
if(cljs.core.truth_(inst_11853)){
var statearr_11875_11898 = state_11870__$1;
(statearr_11875_11898[(1)] = (5));

} else {
var statearr_11876_11899 = state_11870__$1;
(statearr_11876_11899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11871 === (6))){
var inst_11852 = (state_11870[(7)]);
var inst_11857 = p.call(null,inst_11852);
var state_11870__$1 = state_11870;
if(cljs.core.truth_(inst_11857)){
var statearr_11877_11900 = state_11870__$1;
(statearr_11877_11900[(1)] = (8));

} else {
var statearr_11878_11901 = state_11870__$1;
(statearr_11878_11901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11871 === (3))){
var inst_11868 = (state_11870[(2)]);
var state_11870__$1 = state_11870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11870__$1,inst_11868);
} else {
if((state_val_11871 === (2))){
var state_11870__$1 = state_11870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11870__$1,(4),ch);
} else {
if((state_val_11871 === (11))){
var inst_11860 = (state_11870[(2)]);
var state_11870__$1 = state_11870;
var statearr_11879_11902 = state_11870__$1;
(statearr_11879_11902[(2)] = inst_11860);

(statearr_11879_11902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11871 === (9))){
var state_11870__$1 = state_11870;
var statearr_11880_11903 = state_11870__$1;
(statearr_11880_11903[(2)] = null);

(statearr_11880_11903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11871 === (5))){
var inst_11855 = cljs.core.async.close_BANG_.call(null,out);
var state_11870__$1 = state_11870;
var statearr_11881_11904 = state_11870__$1;
(statearr_11881_11904[(2)] = inst_11855);

(statearr_11881_11904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11871 === (10))){
var inst_11863 = (state_11870[(2)]);
var state_11870__$1 = (function (){var statearr_11882 = state_11870;
(statearr_11882[(8)] = inst_11863);

return statearr_11882;
})();
var statearr_11883_11905 = state_11870__$1;
(statearr_11883_11905[(2)] = null);

(statearr_11883_11905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11871 === (8))){
var inst_11852 = (state_11870[(7)]);
var state_11870__$1 = state_11870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11870__$1,(11),out,inst_11852);
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
});})(c__9645__auto___11895,out))
;
return ((function (switch__9533__auto__,c__9645__auto___11895,out){
return (function() {
var cljs$core$async$state_machine__9534__auto__ = null;
var cljs$core$async$state_machine__9534__auto____0 = (function (){
var statearr_11887 = [null,null,null,null,null,null,null,null,null];
(statearr_11887[(0)] = cljs$core$async$state_machine__9534__auto__);

(statearr_11887[(1)] = (1));

return statearr_11887;
});
var cljs$core$async$state_machine__9534__auto____1 = (function (state_11870){
while(true){
var ret_value__9535__auto__ = (function (){try{while(true){
var result__9536__auto__ = switch__9533__auto__.call(null,state_11870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9536__auto__;
}
break;
}
}catch (e11888){if((e11888 instanceof Object)){
var ex__9537__auto__ = e11888;
var statearr_11889_11906 = state_11870;
(statearr_11889_11906[(5)] = ex__9537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11907 = state_11870;
state_11870 = G__11907;
continue;
} else {
return ret_value__9535__auto__;
}
break;
}
});
cljs$core$async$state_machine__9534__auto__ = function(state_11870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9534__auto____1.call(this,state_11870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9534__auto____0;
cljs$core$async$state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9534__auto____1;
return cljs$core$async$state_machine__9534__auto__;
})()
;})(switch__9533__auto__,c__9645__auto___11895,out))
})();
var state__9647__auto__ = (function (){var statearr_11890 = f__9646__auto__.call(null);
(statearr_11890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9645__auto___11895);

return statearr_11890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9647__auto__);
});})(c__9645__auto___11895,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args11908 = [];
var len__7214__auto___11911 = arguments.length;
var i__7215__auto___11912 = (0);
while(true){
if((i__7215__auto___11912 < len__7214__auto___11911)){
args11908.push((arguments[i__7215__auto___11912]));

var G__11913 = (i__7215__auto___11912 + (1));
i__7215__auto___11912 = G__11913;
continue;
} else {
}
break;
}

var G__11910 = args11908.length;
switch (G__11910) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11908.length)].join('')));

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
var c__9645__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9645__auto__){
return (function (){
var f__9646__auto__ = (function (){var switch__9533__auto__ = ((function (c__9645__auto__){
return (function (state_12080){
var state_val_12081 = (state_12080[(1)]);
if((state_val_12081 === (7))){
var inst_12076 = (state_12080[(2)]);
var state_12080__$1 = state_12080;
var statearr_12082_12123 = state_12080__$1;
(statearr_12082_12123[(2)] = inst_12076);

(statearr_12082_12123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12081 === (20))){
var inst_12046 = (state_12080[(7)]);
var inst_12057 = (state_12080[(2)]);
var inst_12058 = cljs.core.next.call(null,inst_12046);
var inst_12032 = inst_12058;
var inst_12033 = null;
var inst_12034 = (0);
var inst_12035 = (0);
var state_12080__$1 = (function (){var statearr_12083 = state_12080;
(statearr_12083[(8)] = inst_12033);

(statearr_12083[(9)] = inst_12035);

(statearr_12083[(10)] = inst_12057);

(statearr_12083[(11)] = inst_12032);

(statearr_12083[(12)] = inst_12034);

return statearr_12083;
})();
var statearr_12084_12124 = state_12080__$1;
(statearr_12084_12124[(2)] = null);

(statearr_12084_12124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12081 === (1))){
var state_12080__$1 = state_12080;
var statearr_12085_12125 = state_12080__$1;
(statearr_12085_12125[(2)] = null);

(statearr_12085_12125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12081 === (4))){
var inst_12021 = (state_12080[(13)]);
var inst_12021__$1 = (state_12080[(2)]);
var inst_12022 = (inst_12021__$1 == null);
var state_12080__$1 = (function (){var statearr_12086 = state_12080;
(statearr_12086[(13)] = inst_12021__$1);

return statearr_12086;
})();
if(cljs.core.truth_(inst_12022)){
var statearr_12087_12126 = state_12080__$1;
(statearr_12087_12126[(1)] = (5));

} else {
var statearr_12088_12127 = state_12080__$1;
(statearr_12088_12127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12081 === (15))){
var state_12080__$1 = state_12080;
var statearr_12092_12128 = state_12080__$1;
(statearr_12092_12128[(2)] = null);

(statearr_12092_12128[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12081 === (21))){
var state_12080__$1 = state_12080;
var statearr_12093_12129 = state_12080__$1;
(statearr_12093_12129[(2)] = null);

(statearr_12093_12129[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12081 === (13))){
var inst_12033 = (state_12080[(8)]);
var inst_12035 = (state_12080[(9)]);
var inst_12032 = (state_12080[(11)]);
var inst_12034 = (state_12080[(12)]);
var inst_12042 = (state_12080[(2)]);
var inst_12043 = (inst_12035 + (1));
var tmp12089 = inst_12033;
var tmp12090 = inst_12032;
var tmp12091 = inst_12034;
var inst_12032__$1 = tmp12090;
var inst_12033__$1 = tmp12089;
var inst_12034__$1 = tmp12091;
var inst_12035__$1 = inst_12043;
var state_12080__$1 = (function (){var statearr_12094 = state_12080;
(statearr_12094[(8)] = inst_12033__$1);

(statearr_12094[(9)] = inst_12035__$1);

(statearr_12094[(14)] = inst_12042);

(statearr_12094[(11)] = inst_12032__$1);

(statearr_12094[(12)] = inst_12034__$1);

return statearr_12094;
})();
var statearr_12095_12130 = state_12080__$1;
(statearr_12095_12130[(2)] = null);

(statearr_12095_12130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12081 === (22))){
var state_12080__$1 = state_12080;
var statearr_12096_12131 = state_12080__$1;
(statearr_12096_12131[(2)] = null);

(statearr_12096_12131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12081 === (6))){
var inst_12021 = (state_12080[(13)]);
var inst_12030 = f.call(null,inst_12021);
var inst_12031 = cljs.core.seq.call(null,inst_12030);
var inst_12032 = inst_12031;
var inst_12033 = null;
var inst_12034 = (0);
var inst_12035 = (0);
var state_12080__$1 = (function (){var statearr_12097 = state_12080;
(statearr_12097[(8)] = inst_12033);

(statearr_12097[(9)] = inst_12035);

(statearr_12097[(11)] = inst_12032);

(statearr_12097[(12)] = inst_12034);

return statearr_12097;
})();
var statearr_12098_12132 = state_12080__$1;
(statearr_12098_12132[(2)] = null);

(statearr_12098_12132[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12081 === (17))){
var inst_12046 = (state_12080[(7)]);
var inst_12050 = cljs.core.chunk_first.call(null,inst_12046);
var inst_12051 = cljs.core.chunk_rest.call(null,inst_12046);
var inst_12052 = cljs.core.count.call(null,inst_12050);
var inst_12032 = inst_12051;
var inst_12033 = inst_12050;
var inst_12034 = inst_12052;
var inst_12035 = (0);
var state_12080__$1 = (function (){var statearr_12099 = state_12080;
(statearr_12099[(8)] = inst_12033);

(statearr_12099[(9)] = inst_12035);

(statearr_12099[(11)] = inst_12032);

(statearr_12099[(12)] = inst_12034);

return statearr_12099;
})();
var statearr_12100_12133 = state_12080__$1;
(statearr_12100_12133[(2)] = null);

(statearr_12100_12133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12081 === (3))){
var inst_12078 = (state_12080[(2)]);
var state_12080__$1 = state_12080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12080__$1,inst_12078);
} else {
if((state_val_12081 === (12))){
var inst_12066 = (state_12080[(2)]);
var state_12080__$1 = state_12080;
var statearr_12101_12134 = state_12080__$1;
(statearr_12101_12134[(2)] = inst_12066);

(statearr_12101_12134[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12081 === (2))){
var state_12080__$1 = state_12080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12080__$1,(4),in$);
} else {
if((state_val_12081 === (23))){
var inst_12074 = (state_12080[(2)]);
var state_12080__$1 = state_12080;
var statearr_12102_12135 = state_12080__$1;
(statearr_12102_12135[(2)] = inst_12074);

(statearr_12102_12135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12081 === (19))){
var inst_12061 = (state_12080[(2)]);
var state_12080__$1 = state_12080;
var statearr_12103_12136 = state_12080__$1;
(statearr_12103_12136[(2)] = inst_12061);

(statearr_12103_12136[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12081 === (11))){
var inst_12032 = (state_12080[(11)]);
var inst_12046 = (state_12080[(7)]);
var inst_12046__$1 = cljs.core.seq.call(null,inst_12032);
var state_12080__$1 = (function (){var statearr_12104 = state_12080;
(statearr_12104[(7)] = inst_12046__$1);

return statearr_12104;
})();
if(inst_12046__$1){
var statearr_12105_12137 = state_12080__$1;
(statearr_12105_12137[(1)] = (14));

} else {
var statearr_12106_12138 = state_12080__$1;
(statearr_12106_12138[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12081 === (9))){
var inst_12068 = (state_12080[(2)]);
var inst_12069 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12080__$1 = (function (){var statearr_12107 = state_12080;
(statearr_12107[(15)] = inst_12068);

return statearr_12107;
})();
if(cljs.core.truth_(inst_12069)){
var statearr_12108_12139 = state_12080__$1;
(statearr_12108_12139[(1)] = (21));

} else {
var statearr_12109_12140 = state_12080__$1;
(statearr_12109_12140[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12081 === (5))){
var inst_12024 = cljs.core.async.close_BANG_.call(null,out);
var state_12080__$1 = state_12080;
var statearr_12110_12141 = state_12080__$1;
(statearr_12110_12141[(2)] = inst_12024);

(statearr_12110_12141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12081 === (14))){
var inst_12046 = (state_12080[(7)]);
var inst_12048 = cljs.core.chunked_seq_QMARK_.call(null,inst_12046);
var state_12080__$1 = state_12080;
if(inst_12048){
var statearr_12111_12142 = state_12080__$1;
(statearr_12111_12142[(1)] = (17));

} else {
var statearr_12112_12143 = state_12080__$1;
(statearr_12112_12143[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12081 === (16))){
var inst_12064 = (state_12080[(2)]);
var state_12080__$1 = state_12080;
var statearr_12113_12144 = state_12080__$1;
(statearr_12113_12144[(2)] = inst_12064);

(statearr_12113_12144[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12081 === (10))){
var inst_12033 = (state_12080[(8)]);
var inst_12035 = (state_12080[(9)]);
var inst_12040 = cljs.core._nth.call(null,inst_12033,inst_12035);
var state_12080__$1 = state_12080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12080__$1,(13),out,inst_12040);
} else {
if((state_val_12081 === (18))){
var inst_12046 = (state_12080[(7)]);
var inst_12055 = cljs.core.first.call(null,inst_12046);
var state_12080__$1 = state_12080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12080__$1,(20),out,inst_12055);
} else {
if((state_val_12081 === (8))){
var inst_12035 = (state_12080[(9)]);
var inst_12034 = (state_12080[(12)]);
var inst_12037 = (inst_12035 < inst_12034);
var inst_12038 = inst_12037;
var state_12080__$1 = state_12080;
if(cljs.core.truth_(inst_12038)){
var statearr_12114_12145 = state_12080__$1;
(statearr_12114_12145[(1)] = (10));

} else {
var statearr_12115_12146 = state_12080__$1;
(statearr_12115_12146[(1)] = (11));

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
});})(c__9645__auto__))
;
return ((function (switch__9533__auto__,c__9645__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9534__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9534__auto____0 = (function (){
var statearr_12119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12119[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9534__auto__);

(statearr_12119[(1)] = (1));

return statearr_12119;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9534__auto____1 = (function (state_12080){
while(true){
var ret_value__9535__auto__ = (function (){try{while(true){
var result__9536__auto__ = switch__9533__auto__.call(null,state_12080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9536__auto__;
}
break;
}
}catch (e12120){if((e12120 instanceof Object)){
var ex__9537__auto__ = e12120;
var statearr_12121_12147 = state_12080;
(statearr_12121_12147[(5)] = ex__9537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12148 = state_12080;
state_12080 = G__12148;
continue;
} else {
return ret_value__9535__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9534__auto__ = function(state_12080){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9534__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9534__auto____1.call(this,state_12080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9534__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9534__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9534__auto__;
})()
;})(switch__9533__auto__,c__9645__auto__))
})();
var state__9647__auto__ = (function (){var statearr_12122 = f__9646__auto__.call(null);
(statearr_12122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9645__auto__);

return statearr_12122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9647__auto__);
});})(c__9645__auto__))
);

return c__9645__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args12149 = [];
var len__7214__auto___12152 = arguments.length;
var i__7215__auto___12153 = (0);
while(true){
if((i__7215__auto___12153 < len__7214__auto___12152)){
args12149.push((arguments[i__7215__auto___12153]));

var G__12154 = (i__7215__auto___12153 + (1));
i__7215__auto___12153 = G__12154;
continue;
} else {
}
break;
}

var G__12151 = args12149.length;
switch (G__12151) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12149.length)].join('')));

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
var args12156 = [];
var len__7214__auto___12159 = arguments.length;
var i__7215__auto___12160 = (0);
while(true){
if((i__7215__auto___12160 < len__7214__auto___12159)){
args12156.push((arguments[i__7215__auto___12160]));

var G__12161 = (i__7215__auto___12160 + (1));
i__7215__auto___12160 = G__12161;
continue;
} else {
}
break;
}

var G__12158 = args12156.length;
switch (G__12158) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12156.length)].join('')));

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
var args12163 = [];
var len__7214__auto___12214 = arguments.length;
var i__7215__auto___12215 = (0);
while(true){
if((i__7215__auto___12215 < len__7214__auto___12214)){
args12163.push((arguments[i__7215__auto___12215]));

var G__12216 = (i__7215__auto___12215 + (1));
i__7215__auto___12215 = G__12216;
continue;
} else {
}
break;
}

var G__12165 = args12163.length;
switch (G__12165) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12163.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9645__auto___12218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9645__auto___12218,out){
return (function (){
var f__9646__auto__ = (function (){var switch__9533__auto__ = ((function (c__9645__auto___12218,out){
return (function (state_12189){
var state_val_12190 = (state_12189[(1)]);
if((state_val_12190 === (7))){
var inst_12184 = (state_12189[(2)]);
var state_12189__$1 = state_12189;
var statearr_12191_12219 = state_12189__$1;
(statearr_12191_12219[(2)] = inst_12184);

(statearr_12191_12219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12190 === (1))){
var inst_12166 = null;
var state_12189__$1 = (function (){var statearr_12192 = state_12189;
(statearr_12192[(7)] = inst_12166);

return statearr_12192;
})();
var statearr_12193_12220 = state_12189__$1;
(statearr_12193_12220[(2)] = null);

(statearr_12193_12220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12190 === (4))){
var inst_12169 = (state_12189[(8)]);
var inst_12169__$1 = (state_12189[(2)]);
var inst_12170 = (inst_12169__$1 == null);
var inst_12171 = cljs.core.not.call(null,inst_12170);
var state_12189__$1 = (function (){var statearr_12194 = state_12189;
(statearr_12194[(8)] = inst_12169__$1);

return statearr_12194;
})();
if(inst_12171){
var statearr_12195_12221 = state_12189__$1;
(statearr_12195_12221[(1)] = (5));

} else {
var statearr_12196_12222 = state_12189__$1;
(statearr_12196_12222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12190 === (6))){
var state_12189__$1 = state_12189;
var statearr_12197_12223 = state_12189__$1;
(statearr_12197_12223[(2)] = null);

(statearr_12197_12223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12190 === (3))){
var inst_12186 = (state_12189[(2)]);
var inst_12187 = cljs.core.async.close_BANG_.call(null,out);
var state_12189__$1 = (function (){var statearr_12198 = state_12189;
(statearr_12198[(9)] = inst_12186);

return statearr_12198;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12189__$1,inst_12187);
} else {
if((state_val_12190 === (2))){
var state_12189__$1 = state_12189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12189__$1,(4),ch);
} else {
if((state_val_12190 === (11))){
var inst_12169 = (state_12189[(8)]);
var inst_12178 = (state_12189[(2)]);
var inst_12166 = inst_12169;
var state_12189__$1 = (function (){var statearr_12199 = state_12189;
(statearr_12199[(10)] = inst_12178);

(statearr_12199[(7)] = inst_12166);

return statearr_12199;
})();
var statearr_12200_12224 = state_12189__$1;
(statearr_12200_12224[(2)] = null);

(statearr_12200_12224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12190 === (9))){
var inst_12169 = (state_12189[(8)]);
var state_12189__$1 = state_12189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12189__$1,(11),out,inst_12169);
} else {
if((state_val_12190 === (5))){
var inst_12166 = (state_12189[(7)]);
var inst_12169 = (state_12189[(8)]);
var inst_12173 = cljs.core._EQ_.call(null,inst_12169,inst_12166);
var state_12189__$1 = state_12189;
if(inst_12173){
var statearr_12202_12225 = state_12189__$1;
(statearr_12202_12225[(1)] = (8));

} else {
var statearr_12203_12226 = state_12189__$1;
(statearr_12203_12226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12190 === (10))){
var inst_12181 = (state_12189[(2)]);
var state_12189__$1 = state_12189;
var statearr_12204_12227 = state_12189__$1;
(statearr_12204_12227[(2)] = inst_12181);

(statearr_12204_12227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12190 === (8))){
var inst_12166 = (state_12189[(7)]);
var tmp12201 = inst_12166;
var inst_12166__$1 = tmp12201;
var state_12189__$1 = (function (){var statearr_12205 = state_12189;
(statearr_12205[(7)] = inst_12166__$1);

return statearr_12205;
})();
var statearr_12206_12228 = state_12189__$1;
(statearr_12206_12228[(2)] = null);

(statearr_12206_12228[(1)] = (2));


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
});})(c__9645__auto___12218,out))
;
return ((function (switch__9533__auto__,c__9645__auto___12218,out){
return (function() {
var cljs$core$async$state_machine__9534__auto__ = null;
var cljs$core$async$state_machine__9534__auto____0 = (function (){
var statearr_12210 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12210[(0)] = cljs$core$async$state_machine__9534__auto__);

(statearr_12210[(1)] = (1));

return statearr_12210;
});
var cljs$core$async$state_machine__9534__auto____1 = (function (state_12189){
while(true){
var ret_value__9535__auto__ = (function (){try{while(true){
var result__9536__auto__ = switch__9533__auto__.call(null,state_12189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9536__auto__;
}
break;
}
}catch (e12211){if((e12211 instanceof Object)){
var ex__9537__auto__ = e12211;
var statearr_12212_12229 = state_12189;
(statearr_12212_12229[(5)] = ex__9537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12230 = state_12189;
state_12189 = G__12230;
continue;
} else {
return ret_value__9535__auto__;
}
break;
}
});
cljs$core$async$state_machine__9534__auto__ = function(state_12189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9534__auto____1.call(this,state_12189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9534__auto____0;
cljs$core$async$state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9534__auto____1;
return cljs$core$async$state_machine__9534__auto__;
})()
;})(switch__9533__auto__,c__9645__auto___12218,out))
})();
var state__9647__auto__ = (function (){var statearr_12213 = f__9646__auto__.call(null);
(statearr_12213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9645__auto___12218);

return statearr_12213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9647__auto__);
});})(c__9645__auto___12218,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args12231 = [];
var len__7214__auto___12301 = arguments.length;
var i__7215__auto___12302 = (0);
while(true){
if((i__7215__auto___12302 < len__7214__auto___12301)){
args12231.push((arguments[i__7215__auto___12302]));

var G__12303 = (i__7215__auto___12302 + (1));
i__7215__auto___12302 = G__12303;
continue;
} else {
}
break;
}

var G__12233 = args12231.length;
switch (G__12233) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12231.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9645__auto___12305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9645__auto___12305,out){
return (function (){
var f__9646__auto__ = (function (){var switch__9533__auto__ = ((function (c__9645__auto___12305,out){
return (function (state_12271){
var state_val_12272 = (state_12271[(1)]);
if((state_val_12272 === (7))){
var inst_12267 = (state_12271[(2)]);
var state_12271__$1 = state_12271;
var statearr_12273_12306 = state_12271__$1;
(statearr_12273_12306[(2)] = inst_12267);

(statearr_12273_12306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12272 === (1))){
var inst_12234 = (new Array(n));
var inst_12235 = inst_12234;
var inst_12236 = (0);
var state_12271__$1 = (function (){var statearr_12274 = state_12271;
(statearr_12274[(7)] = inst_12236);

(statearr_12274[(8)] = inst_12235);

return statearr_12274;
})();
var statearr_12275_12307 = state_12271__$1;
(statearr_12275_12307[(2)] = null);

(statearr_12275_12307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12272 === (4))){
var inst_12239 = (state_12271[(9)]);
var inst_12239__$1 = (state_12271[(2)]);
var inst_12240 = (inst_12239__$1 == null);
var inst_12241 = cljs.core.not.call(null,inst_12240);
var state_12271__$1 = (function (){var statearr_12276 = state_12271;
(statearr_12276[(9)] = inst_12239__$1);

return statearr_12276;
})();
if(inst_12241){
var statearr_12277_12308 = state_12271__$1;
(statearr_12277_12308[(1)] = (5));

} else {
var statearr_12278_12309 = state_12271__$1;
(statearr_12278_12309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12272 === (15))){
var inst_12261 = (state_12271[(2)]);
var state_12271__$1 = state_12271;
var statearr_12279_12310 = state_12271__$1;
(statearr_12279_12310[(2)] = inst_12261);

(statearr_12279_12310[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12272 === (13))){
var state_12271__$1 = state_12271;
var statearr_12280_12311 = state_12271__$1;
(statearr_12280_12311[(2)] = null);

(statearr_12280_12311[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12272 === (6))){
var inst_12236 = (state_12271[(7)]);
var inst_12257 = (inst_12236 > (0));
var state_12271__$1 = state_12271;
if(cljs.core.truth_(inst_12257)){
var statearr_12281_12312 = state_12271__$1;
(statearr_12281_12312[(1)] = (12));

} else {
var statearr_12282_12313 = state_12271__$1;
(statearr_12282_12313[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12272 === (3))){
var inst_12269 = (state_12271[(2)]);
var state_12271__$1 = state_12271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12271__$1,inst_12269);
} else {
if((state_val_12272 === (12))){
var inst_12235 = (state_12271[(8)]);
var inst_12259 = cljs.core.vec.call(null,inst_12235);
var state_12271__$1 = state_12271;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12271__$1,(15),out,inst_12259);
} else {
if((state_val_12272 === (2))){
var state_12271__$1 = state_12271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12271__$1,(4),ch);
} else {
if((state_val_12272 === (11))){
var inst_12251 = (state_12271[(2)]);
var inst_12252 = (new Array(n));
var inst_12235 = inst_12252;
var inst_12236 = (0);
var state_12271__$1 = (function (){var statearr_12283 = state_12271;
(statearr_12283[(10)] = inst_12251);

(statearr_12283[(7)] = inst_12236);

(statearr_12283[(8)] = inst_12235);

return statearr_12283;
})();
var statearr_12284_12314 = state_12271__$1;
(statearr_12284_12314[(2)] = null);

(statearr_12284_12314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12272 === (9))){
var inst_12235 = (state_12271[(8)]);
var inst_12249 = cljs.core.vec.call(null,inst_12235);
var state_12271__$1 = state_12271;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12271__$1,(11),out,inst_12249);
} else {
if((state_val_12272 === (5))){
var inst_12236 = (state_12271[(7)]);
var inst_12239 = (state_12271[(9)]);
var inst_12235 = (state_12271[(8)]);
var inst_12244 = (state_12271[(11)]);
var inst_12243 = (inst_12235[inst_12236] = inst_12239);
var inst_12244__$1 = (inst_12236 + (1));
var inst_12245 = (inst_12244__$1 < n);
var state_12271__$1 = (function (){var statearr_12285 = state_12271;
(statearr_12285[(12)] = inst_12243);

(statearr_12285[(11)] = inst_12244__$1);

return statearr_12285;
})();
if(cljs.core.truth_(inst_12245)){
var statearr_12286_12315 = state_12271__$1;
(statearr_12286_12315[(1)] = (8));

} else {
var statearr_12287_12316 = state_12271__$1;
(statearr_12287_12316[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12272 === (14))){
var inst_12264 = (state_12271[(2)]);
var inst_12265 = cljs.core.async.close_BANG_.call(null,out);
var state_12271__$1 = (function (){var statearr_12289 = state_12271;
(statearr_12289[(13)] = inst_12264);

return statearr_12289;
})();
var statearr_12290_12317 = state_12271__$1;
(statearr_12290_12317[(2)] = inst_12265);

(statearr_12290_12317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12272 === (10))){
var inst_12255 = (state_12271[(2)]);
var state_12271__$1 = state_12271;
var statearr_12291_12318 = state_12271__$1;
(statearr_12291_12318[(2)] = inst_12255);

(statearr_12291_12318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12272 === (8))){
var inst_12235 = (state_12271[(8)]);
var inst_12244 = (state_12271[(11)]);
var tmp12288 = inst_12235;
var inst_12235__$1 = tmp12288;
var inst_12236 = inst_12244;
var state_12271__$1 = (function (){var statearr_12292 = state_12271;
(statearr_12292[(7)] = inst_12236);

(statearr_12292[(8)] = inst_12235__$1);

return statearr_12292;
})();
var statearr_12293_12319 = state_12271__$1;
(statearr_12293_12319[(2)] = null);

(statearr_12293_12319[(1)] = (2));


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
});})(c__9645__auto___12305,out))
;
return ((function (switch__9533__auto__,c__9645__auto___12305,out){
return (function() {
var cljs$core$async$state_machine__9534__auto__ = null;
var cljs$core$async$state_machine__9534__auto____0 = (function (){
var statearr_12297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12297[(0)] = cljs$core$async$state_machine__9534__auto__);

(statearr_12297[(1)] = (1));

return statearr_12297;
});
var cljs$core$async$state_machine__9534__auto____1 = (function (state_12271){
while(true){
var ret_value__9535__auto__ = (function (){try{while(true){
var result__9536__auto__ = switch__9533__auto__.call(null,state_12271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9536__auto__;
}
break;
}
}catch (e12298){if((e12298 instanceof Object)){
var ex__9537__auto__ = e12298;
var statearr_12299_12320 = state_12271;
(statearr_12299_12320[(5)] = ex__9537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12321 = state_12271;
state_12271 = G__12321;
continue;
} else {
return ret_value__9535__auto__;
}
break;
}
});
cljs$core$async$state_machine__9534__auto__ = function(state_12271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9534__auto____1.call(this,state_12271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9534__auto____0;
cljs$core$async$state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9534__auto____1;
return cljs$core$async$state_machine__9534__auto__;
})()
;})(switch__9533__auto__,c__9645__auto___12305,out))
})();
var state__9647__auto__ = (function (){var statearr_12300 = f__9646__auto__.call(null);
(statearr_12300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9645__auto___12305);

return statearr_12300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9647__auto__);
});})(c__9645__auto___12305,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args12322 = [];
var len__7214__auto___12396 = arguments.length;
var i__7215__auto___12397 = (0);
while(true){
if((i__7215__auto___12397 < len__7214__auto___12396)){
args12322.push((arguments[i__7215__auto___12397]));

var G__12398 = (i__7215__auto___12397 + (1));
i__7215__auto___12397 = G__12398;
continue;
} else {
}
break;
}

var G__12324 = args12322.length;
switch (G__12324) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12322.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9645__auto___12400 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9645__auto___12400,out){
return (function (){
var f__9646__auto__ = (function (){var switch__9533__auto__ = ((function (c__9645__auto___12400,out){
return (function (state_12366){
var state_val_12367 = (state_12366[(1)]);
if((state_val_12367 === (7))){
var inst_12362 = (state_12366[(2)]);
var state_12366__$1 = state_12366;
var statearr_12368_12401 = state_12366__$1;
(statearr_12368_12401[(2)] = inst_12362);

(statearr_12368_12401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (1))){
var inst_12325 = [];
var inst_12326 = inst_12325;
var inst_12327 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12366__$1 = (function (){var statearr_12369 = state_12366;
(statearr_12369[(7)] = inst_12326);

(statearr_12369[(8)] = inst_12327);

return statearr_12369;
})();
var statearr_12370_12402 = state_12366__$1;
(statearr_12370_12402[(2)] = null);

(statearr_12370_12402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (4))){
var inst_12330 = (state_12366[(9)]);
var inst_12330__$1 = (state_12366[(2)]);
var inst_12331 = (inst_12330__$1 == null);
var inst_12332 = cljs.core.not.call(null,inst_12331);
var state_12366__$1 = (function (){var statearr_12371 = state_12366;
(statearr_12371[(9)] = inst_12330__$1);

return statearr_12371;
})();
if(inst_12332){
var statearr_12372_12403 = state_12366__$1;
(statearr_12372_12403[(1)] = (5));

} else {
var statearr_12373_12404 = state_12366__$1;
(statearr_12373_12404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (15))){
var inst_12356 = (state_12366[(2)]);
var state_12366__$1 = state_12366;
var statearr_12374_12405 = state_12366__$1;
(statearr_12374_12405[(2)] = inst_12356);

(statearr_12374_12405[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (13))){
var state_12366__$1 = state_12366;
var statearr_12375_12406 = state_12366__$1;
(statearr_12375_12406[(2)] = null);

(statearr_12375_12406[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (6))){
var inst_12326 = (state_12366[(7)]);
var inst_12351 = inst_12326.length;
var inst_12352 = (inst_12351 > (0));
var state_12366__$1 = state_12366;
if(cljs.core.truth_(inst_12352)){
var statearr_12376_12407 = state_12366__$1;
(statearr_12376_12407[(1)] = (12));

} else {
var statearr_12377_12408 = state_12366__$1;
(statearr_12377_12408[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (3))){
var inst_12364 = (state_12366[(2)]);
var state_12366__$1 = state_12366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12366__$1,inst_12364);
} else {
if((state_val_12367 === (12))){
var inst_12326 = (state_12366[(7)]);
var inst_12354 = cljs.core.vec.call(null,inst_12326);
var state_12366__$1 = state_12366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12366__$1,(15),out,inst_12354);
} else {
if((state_val_12367 === (2))){
var state_12366__$1 = state_12366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12366__$1,(4),ch);
} else {
if((state_val_12367 === (11))){
var inst_12330 = (state_12366[(9)]);
var inst_12334 = (state_12366[(10)]);
var inst_12344 = (state_12366[(2)]);
var inst_12345 = [];
var inst_12346 = inst_12345.push(inst_12330);
var inst_12326 = inst_12345;
var inst_12327 = inst_12334;
var state_12366__$1 = (function (){var statearr_12378 = state_12366;
(statearr_12378[(11)] = inst_12346);

(statearr_12378[(7)] = inst_12326);

(statearr_12378[(12)] = inst_12344);

(statearr_12378[(8)] = inst_12327);

return statearr_12378;
})();
var statearr_12379_12409 = state_12366__$1;
(statearr_12379_12409[(2)] = null);

(statearr_12379_12409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (9))){
var inst_12326 = (state_12366[(7)]);
var inst_12342 = cljs.core.vec.call(null,inst_12326);
var state_12366__$1 = state_12366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12366__$1,(11),out,inst_12342);
} else {
if((state_val_12367 === (5))){
var inst_12330 = (state_12366[(9)]);
var inst_12327 = (state_12366[(8)]);
var inst_12334 = (state_12366[(10)]);
var inst_12334__$1 = f.call(null,inst_12330);
var inst_12335 = cljs.core._EQ_.call(null,inst_12334__$1,inst_12327);
var inst_12336 = cljs.core.keyword_identical_QMARK_.call(null,inst_12327,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12337 = (inst_12335) || (inst_12336);
var state_12366__$1 = (function (){var statearr_12380 = state_12366;
(statearr_12380[(10)] = inst_12334__$1);

return statearr_12380;
})();
if(cljs.core.truth_(inst_12337)){
var statearr_12381_12410 = state_12366__$1;
(statearr_12381_12410[(1)] = (8));

} else {
var statearr_12382_12411 = state_12366__$1;
(statearr_12382_12411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (14))){
var inst_12359 = (state_12366[(2)]);
var inst_12360 = cljs.core.async.close_BANG_.call(null,out);
var state_12366__$1 = (function (){var statearr_12384 = state_12366;
(statearr_12384[(13)] = inst_12359);

return statearr_12384;
})();
var statearr_12385_12412 = state_12366__$1;
(statearr_12385_12412[(2)] = inst_12360);

(statearr_12385_12412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (10))){
var inst_12349 = (state_12366[(2)]);
var state_12366__$1 = state_12366;
var statearr_12386_12413 = state_12366__$1;
(statearr_12386_12413[(2)] = inst_12349);

(statearr_12386_12413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12367 === (8))){
var inst_12326 = (state_12366[(7)]);
var inst_12330 = (state_12366[(9)]);
var inst_12334 = (state_12366[(10)]);
var inst_12339 = inst_12326.push(inst_12330);
var tmp12383 = inst_12326;
var inst_12326__$1 = tmp12383;
var inst_12327 = inst_12334;
var state_12366__$1 = (function (){var statearr_12387 = state_12366;
(statearr_12387[(14)] = inst_12339);

(statearr_12387[(7)] = inst_12326__$1);

(statearr_12387[(8)] = inst_12327);

return statearr_12387;
})();
var statearr_12388_12414 = state_12366__$1;
(statearr_12388_12414[(2)] = null);

(statearr_12388_12414[(1)] = (2));


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
});})(c__9645__auto___12400,out))
;
return ((function (switch__9533__auto__,c__9645__auto___12400,out){
return (function() {
var cljs$core$async$state_machine__9534__auto__ = null;
var cljs$core$async$state_machine__9534__auto____0 = (function (){
var statearr_12392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12392[(0)] = cljs$core$async$state_machine__9534__auto__);

(statearr_12392[(1)] = (1));

return statearr_12392;
});
var cljs$core$async$state_machine__9534__auto____1 = (function (state_12366){
while(true){
var ret_value__9535__auto__ = (function (){try{while(true){
var result__9536__auto__ = switch__9533__auto__.call(null,state_12366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9536__auto__;
}
break;
}
}catch (e12393){if((e12393 instanceof Object)){
var ex__9537__auto__ = e12393;
var statearr_12394_12415 = state_12366;
(statearr_12394_12415[(5)] = ex__9537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12416 = state_12366;
state_12366 = G__12416;
continue;
} else {
return ret_value__9535__auto__;
}
break;
}
});
cljs$core$async$state_machine__9534__auto__ = function(state_12366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9534__auto____1.call(this,state_12366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9534__auto____0;
cljs$core$async$state_machine__9534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9534__auto____1;
return cljs$core$async$state_machine__9534__auto__;
})()
;})(switch__9533__auto__,c__9645__auto___12400,out))
})();
var state__9647__auto__ = (function (){var statearr_12395 = f__9646__auto__.call(null);
(statearr_12395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9645__auto___12400);

return statearr_12395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9647__auto__);
});})(c__9645__auto___12400,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
