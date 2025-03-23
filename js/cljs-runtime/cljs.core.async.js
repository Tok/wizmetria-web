goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15059 = (function (f,blockable,meta15060){
this.f = f;
this.blockable = blockable;
this.meta15060 = meta15060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15061,meta15060__$1){
var self__ = this;
var _15061__$1 = this;
return (new cljs.core.async.t_cljs$core$async15059(self__.f,self__.blockable,meta15060__$1));
}));

(cljs.core.async.t_cljs$core$async15059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15061){
var self__ = this;
var _15061__$1 = this;
return self__.meta15060;
}));

(cljs.core.async.t_cljs$core$async15059.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15059.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15059.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15059.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15059.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15060","meta15060",216957912,null)], null);
}));

(cljs.core.async.t_cljs$core$async15059.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15059.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15059");

(cljs.core.async.t_cljs$core$async15059.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15059");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15059.
 */
cljs.core.async.__GT_t_cljs$core$async15059 = (function cljs$core$async$__GT_t_cljs$core$async15059(f,blockable,meta15060){
return (new cljs.core.async.t_cljs$core$async15059(f,blockable,meta15060));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15048 = arguments.length;
switch (G__15048) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async15059(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__15129 = arguments.length;
switch (G__15129) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15162 = arguments.length;
switch (G__15162) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__15197 = arguments.length;
switch (G__15197) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19496 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19496) : fn1.call(null, val_19496));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19496) : fn1.call(null, val_19496));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15239 = arguments.length;
switch (G__15239) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___19499 = n;
var x_19500 = (0);
while(true){
if((x_19500 < n__5593__auto___19499)){
(a[x_19500] = x_19500);

var G__19502 = (x_19500 + (1));
x_19500 = G__19502;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15301 = (function (flag,meta15302){
this.flag = flag;
this.meta15302 = meta15302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15303,meta15302__$1){
var self__ = this;
var _15303__$1 = this;
return (new cljs.core.async.t_cljs$core$async15301(self__.flag,meta15302__$1));
}));

(cljs.core.async.t_cljs$core$async15301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15303){
var self__ = this;
var _15303__$1 = this;
return self__.meta15302;
}));

(cljs.core.async.t_cljs$core$async15301.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15301.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15301.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15301.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15302","meta15302",-1227009956,null)], null);
}));

(cljs.core.async.t_cljs$core$async15301.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15301.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15301");

(cljs.core.async.t_cljs$core$async15301.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15301");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15301.
 */
cljs.core.async.__GT_t_cljs$core$async15301 = (function cljs$core$async$__GT_t_cljs$core$async15301(flag,meta15302){
return (new cljs.core.async.t_cljs$core$async15301(flag,meta15302));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15301(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15345 = (function (flag,cb,meta15347){
this.flag = flag;
this.cb = cb;
this.meta15347 = meta15347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15348,meta15347__$1){
var self__ = this;
var _15348__$1 = this;
return (new cljs.core.async.t_cljs$core$async15345(self__.flag,self__.cb,meta15347__$1));
}));

(cljs.core.async.t_cljs$core$async15345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15348){
var self__ = this;
var _15348__$1 = this;
return self__.meta15347;
}));

(cljs.core.async.t_cljs$core$async15345.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15345.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15345.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15345.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15345.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15347","meta15347",-1808899823,null)], null);
}));

(cljs.core.async.t_cljs$core$async15345.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15345.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15345");

(cljs.core.async.t_cljs$core$async15345.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15345");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15345.
 */
cljs.core.async.__GT_t_cljs$core$async15345 = (function cljs$core$async$__GT_t_cljs$core$async15345(flag,cb,meta15347){
return (new cljs.core.async.t_cljs$core$async15345(flag,cb,meta15347));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15345(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15379_SHARP_){
var G__15391 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15379_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15391) : fret.call(null, G__15391));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15381_SHARP_){
var G__15392 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15381_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15392) : fret.call(null, G__15392));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19507 = (i + (1));
i = G__19507;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__5732__auto__ = [];
var len__5726__auto___19514 = arguments.length;
var i__5727__auto___19515 = (0);
while(true){
if((i__5727__auto___19515 < len__5726__auto___19514)){
args__5732__auto__.push((arguments[i__5727__auto___19515]));

var G__19516 = (i__5727__auto___19515 + (1));
i__5727__auto___19515 = G__19516;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15402){
var map__15403 = p__15402;
var map__15403__$1 = cljs.core.__destructure_map(map__15403);
var opts = map__15403__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15395){
var G__15396 = cljs.core.first(seq15395);
var seq15395__$1 = cljs.core.next(seq15395);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15396,seq15395__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__15417 = arguments.length;
switch (G__15417) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14771__auto___19522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14772__auto__ = (function (){var switch__13655__auto__ = (function (state_15517){
var state_val_15518 = (state_15517[(1)]);
if((state_val_15518 === (7))){
var inst_15507 = (state_15517[(2)]);
var state_15517__$1 = state_15517;
var statearr_15530_19523 = state_15517__$1;
(statearr_15530_19523[(2)] = inst_15507);

(statearr_15530_19523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15518 === (1))){
var state_15517__$1 = state_15517;
var statearr_15535_19524 = state_15517__$1;
(statearr_15535_19524[(2)] = null);

(statearr_15535_19524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15518 === (4))){
var inst_15469 = (state_15517[(7)]);
var inst_15469__$1 = (state_15517[(2)]);
var inst_15482 = (inst_15469__$1 == null);
var state_15517__$1 = (function (){var statearr_15541 = state_15517;
(statearr_15541[(7)] = inst_15469__$1);

return statearr_15541;
})();
if(cljs.core.truth_(inst_15482)){
var statearr_15545_19525 = state_15517__$1;
(statearr_15545_19525[(1)] = (5));

} else {
var statearr_15546_19526 = state_15517__$1;
(statearr_15546_19526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15518 === (13))){
var state_15517__$1 = state_15517;
var statearr_15552_19527 = state_15517__$1;
(statearr_15552_19527[(2)] = null);

(statearr_15552_19527[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15518 === (6))){
var inst_15469 = (state_15517[(7)]);
var state_15517__$1 = state_15517;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15517__$1,(11),to,inst_15469);
} else {
if((state_val_15518 === (3))){
var inst_15512 = (state_15517[(2)]);
var state_15517__$1 = state_15517;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15517__$1,inst_15512);
} else {
if((state_val_15518 === (12))){
var state_15517__$1 = state_15517;
var statearr_15565_19531 = state_15517__$1;
(statearr_15565_19531[(2)] = null);

(statearr_15565_19531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15518 === (2))){
var state_15517__$1 = state_15517;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15517__$1,(4),from);
} else {
if((state_val_15518 === (11))){
var inst_15493 = (state_15517[(2)]);
var state_15517__$1 = state_15517;
if(cljs.core.truth_(inst_15493)){
var statearr_15573_19532 = state_15517__$1;
(statearr_15573_19532[(1)] = (12));

} else {
var statearr_15574_19533 = state_15517__$1;
(statearr_15574_19533[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15518 === (9))){
var state_15517__$1 = state_15517;
var statearr_15575_19534 = state_15517__$1;
(statearr_15575_19534[(2)] = null);

(statearr_15575_19534[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15518 === (5))){
var state_15517__$1 = state_15517;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15577_19535 = state_15517__$1;
(statearr_15577_19535[(1)] = (8));

} else {
var statearr_15578_19539 = state_15517__$1;
(statearr_15578_19539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15518 === (14))){
var inst_15503 = (state_15517[(2)]);
var state_15517__$1 = state_15517;
var statearr_15580_19540 = state_15517__$1;
(statearr_15580_19540[(2)] = inst_15503);

(statearr_15580_19540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15518 === (10))){
var inst_15490 = (state_15517[(2)]);
var state_15517__$1 = state_15517;
var statearr_15581_19541 = state_15517__$1;
(statearr_15581_19541[(2)] = inst_15490);

(statearr_15581_19541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15518 === (8))){
var inst_15486 = cljs.core.async.close_BANG_(to);
var state_15517__$1 = state_15517;
var statearr_15582_19542 = state_15517__$1;
(statearr_15582_19542[(2)] = inst_15486);

(statearr_15582_19542[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__13656__auto__ = null;
var cljs$core$async$state_machine__13656__auto____0 = (function (){
var statearr_15600 = [null,null,null,null,null,null,null,null];
(statearr_15600[(0)] = cljs$core$async$state_machine__13656__auto__);

(statearr_15600[(1)] = (1));

return statearr_15600;
});
var cljs$core$async$state_machine__13656__auto____1 = (function (state_15517){
while(true){
var ret_value__13657__auto__ = (function (){try{while(true){
var result__13658__auto__ = switch__13655__auto__(state_15517);
if(cljs.core.keyword_identical_QMARK_(result__13658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13658__auto__;
}
break;
}
}catch (e15601){var ex__13659__auto__ = e15601;
var statearr_15603_19549 = state_15517;
(statearr_15603_19549[(2)] = ex__13659__auto__);


if(cljs.core.seq((state_15517[(4)]))){
var statearr_15604_19550 = state_15517;
(statearr_15604_19550[(1)] = cljs.core.first((state_15517[(4)])));

} else {
throw ex__13659__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19551 = state_15517;
state_15517 = G__19551;
continue;
} else {
return ret_value__13657__auto__;
}
break;
}
});
cljs$core$async$state_machine__13656__auto__ = function(state_15517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13656__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13656__auto____1.call(this,state_15517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13656__auto____0;
cljs$core$async$state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13656__auto____1;
return cljs$core$async$state_machine__13656__auto__;
})()
})();
var state__14773__auto__ = (function (){var statearr_15627 = f__14772__auto__();
(statearr_15627[(6)] = c__14771__auto___19522);

return statearr_15627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14773__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15641){
var vec__15644 = p__15641;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15644,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15644,(1),null);
var job = vec__15644;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14771__auto___19555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14772__auto__ = (function (){var switch__13655__auto__ = (function (state_15654){
var state_val_15655 = (state_15654[(1)]);
if((state_val_15655 === (1))){
var state_15654__$1 = state_15654;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15654__$1,(2),res,v);
} else {
if((state_val_15655 === (2))){
var inst_15651 = (state_15654[(2)]);
var inst_15652 = cljs.core.async.close_BANG_(res);
var state_15654__$1 = (function (){var statearr_15666 = state_15654;
(statearr_15666[(7)] = inst_15651);

return statearr_15666;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15654__$1,inst_15652);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____0 = (function (){
var statearr_15667 = [null,null,null,null,null,null,null,null];
(statearr_15667[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__);

(statearr_15667[(1)] = (1));

return statearr_15667;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____1 = (function (state_15654){
while(true){
var ret_value__13657__auto__ = (function (){try{while(true){
var result__13658__auto__ = switch__13655__auto__(state_15654);
if(cljs.core.keyword_identical_QMARK_(result__13658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13658__auto__;
}
break;
}
}catch (e15668){var ex__13659__auto__ = e15668;
var statearr_15669_19557 = state_15654;
(statearr_15669_19557[(2)] = ex__13659__auto__);


if(cljs.core.seq((state_15654[(4)]))){
var statearr_15670_19558 = state_15654;
(statearr_15670_19558[(1)] = cljs.core.first((state_15654[(4)])));

} else {
throw ex__13659__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19559 = state_15654;
state_15654 = G__19559;
continue;
} else {
return ret_value__13657__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__ = function(state_15654){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____1.call(this,state_15654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__;
})()
})();
var state__14773__auto__ = (function (){var statearr_15684 = f__14772__auto__();
(statearr_15684[(6)] = c__14771__auto___19555);

return statearr_15684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14773__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15694){
var vec__15698 = p__15694;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15698,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15698,(1),null);
var job = vec__15698;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___19563 = n;
var __19564 = (0);
while(true){
if((__19564 < n__5593__auto___19563)){
var G__15710_19565 = type;
var G__15710_19566__$1 = (((G__15710_19565 instanceof cljs.core.Keyword))?G__15710_19565.fqn:null);
switch (G__15710_19566__$1) {
case "compute":
var c__14771__auto___19568 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19564,c__14771__auto___19568,G__15710_19565,G__15710_19566__$1,n__5593__auto___19563,jobs,results,process__$1,async){
return (function (){
var f__14772__auto__ = (function (){var switch__13655__auto__ = ((function (__19564,c__14771__auto___19568,G__15710_19565,G__15710_19566__$1,n__5593__auto___19563,jobs,results,process__$1,async){
return (function (state_15730){
var state_val_15731 = (state_15730[(1)]);
if((state_val_15731 === (1))){
var state_15730__$1 = state_15730;
var statearr_15737_19570 = state_15730__$1;
(statearr_15737_19570[(2)] = null);

(statearr_15737_19570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15731 === (2))){
var state_15730__$1 = state_15730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15730__$1,(4),jobs);
} else {
if((state_val_15731 === (3))){
var inst_15728 = (state_15730[(2)]);
var state_15730__$1 = state_15730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15730__$1,inst_15728);
} else {
if((state_val_15731 === (4))){
var inst_15720 = (state_15730[(2)]);
var inst_15721 = process__$1(inst_15720);
var state_15730__$1 = state_15730;
if(cljs.core.truth_(inst_15721)){
var statearr_15748_19571 = state_15730__$1;
(statearr_15748_19571[(1)] = (5));

} else {
var statearr_15750_19572 = state_15730__$1;
(statearr_15750_19572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15731 === (5))){
var state_15730__$1 = state_15730;
var statearr_15755_19573 = state_15730__$1;
(statearr_15755_19573[(2)] = null);

(statearr_15755_19573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15731 === (6))){
var state_15730__$1 = state_15730;
var statearr_15756_19575 = state_15730__$1;
(statearr_15756_19575[(2)] = null);

(statearr_15756_19575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15731 === (7))){
var inst_15726 = (state_15730[(2)]);
var state_15730__$1 = state_15730;
var statearr_15763_19576 = state_15730__$1;
(statearr_15763_19576[(2)] = inst_15726);

(statearr_15763_19576[(1)] = (3));


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
});})(__19564,c__14771__auto___19568,G__15710_19565,G__15710_19566__$1,n__5593__auto___19563,jobs,results,process__$1,async))
;
return ((function (__19564,switch__13655__auto__,c__14771__auto___19568,G__15710_19565,G__15710_19566__$1,n__5593__auto___19563,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____0 = (function (){
var statearr_15764 = [null,null,null,null,null,null,null];
(statearr_15764[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__);

(statearr_15764[(1)] = (1));

return statearr_15764;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____1 = (function (state_15730){
while(true){
var ret_value__13657__auto__ = (function (){try{while(true){
var result__13658__auto__ = switch__13655__auto__(state_15730);
if(cljs.core.keyword_identical_QMARK_(result__13658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13658__auto__;
}
break;
}
}catch (e15766){var ex__13659__auto__ = e15766;
var statearr_15770_19587 = state_15730;
(statearr_15770_19587[(2)] = ex__13659__auto__);


if(cljs.core.seq((state_15730[(4)]))){
var statearr_15774_19588 = state_15730;
(statearr_15774_19588[(1)] = cljs.core.first((state_15730[(4)])));

} else {
throw ex__13659__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19589 = state_15730;
state_15730 = G__19589;
continue;
} else {
return ret_value__13657__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__ = function(state_15730){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____1.call(this,state_15730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__;
})()
;})(__19564,switch__13655__auto__,c__14771__auto___19568,G__15710_19565,G__15710_19566__$1,n__5593__auto___19563,jobs,results,process__$1,async))
})();
var state__14773__auto__ = (function (){var statearr_15779 = f__14772__auto__();
(statearr_15779[(6)] = c__14771__auto___19568);

return statearr_15779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14773__auto__);
});})(__19564,c__14771__auto___19568,G__15710_19565,G__15710_19566__$1,n__5593__auto___19563,jobs,results,process__$1,async))
);


break;
case "async":
var c__14771__auto___19590 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19564,c__14771__auto___19590,G__15710_19565,G__15710_19566__$1,n__5593__auto___19563,jobs,results,process__$1,async){
return (function (){
var f__14772__auto__ = (function (){var switch__13655__auto__ = ((function (__19564,c__14771__auto___19590,G__15710_19565,G__15710_19566__$1,n__5593__auto___19563,jobs,results,process__$1,async){
return (function (state_15794){
var state_val_15795 = (state_15794[(1)]);
if((state_val_15795 === (1))){
var state_15794__$1 = state_15794;
var statearr_15797_19596 = state_15794__$1;
(statearr_15797_19596[(2)] = null);

(statearr_15797_19596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15795 === (2))){
var state_15794__$1 = state_15794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15794__$1,(4),jobs);
} else {
if((state_val_15795 === (3))){
var inst_15792 = (state_15794[(2)]);
var state_15794__$1 = state_15794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15794__$1,inst_15792);
} else {
if((state_val_15795 === (4))){
var inst_15782 = (state_15794[(2)]);
var inst_15783 = async(inst_15782);
var state_15794__$1 = state_15794;
if(cljs.core.truth_(inst_15783)){
var statearr_15798_19597 = state_15794__$1;
(statearr_15798_19597[(1)] = (5));

} else {
var statearr_15799_19598 = state_15794__$1;
(statearr_15799_19598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15795 === (5))){
var state_15794__$1 = state_15794;
var statearr_15804_19599 = state_15794__$1;
(statearr_15804_19599[(2)] = null);

(statearr_15804_19599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15795 === (6))){
var state_15794__$1 = state_15794;
var statearr_15805_19600 = state_15794__$1;
(statearr_15805_19600[(2)] = null);

(statearr_15805_19600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15795 === (7))){
var inst_15789 = (state_15794[(2)]);
var state_15794__$1 = state_15794;
var statearr_15806_19604 = state_15794__$1;
(statearr_15806_19604[(2)] = inst_15789);

(statearr_15806_19604[(1)] = (3));


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
});})(__19564,c__14771__auto___19590,G__15710_19565,G__15710_19566__$1,n__5593__auto___19563,jobs,results,process__$1,async))
;
return ((function (__19564,switch__13655__auto__,c__14771__auto___19590,G__15710_19565,G__15710_19566__$1,n__5593__auto___19563,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____0 = (function (){
var statearr_15808 = [null,null,null,null,null,null,null];
(statearr_15808[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__);

(statearr_15808[(1)] = (1));

return statearr_15808;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____1 = (function (state_15794){
while(true){
var ret_value__13657__auto__ = (function (){try{while(true){
var result__13658__auto__ = switch__13655__auto__(state_15794);
if(cljs.core.keyword_identical_QMARK_(result__13658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13658__auto__;
}
break;
}
}catch (e15811){var ex__13659__auto__ = e15811;
var statearr_15812_19605 = state_15794;
(statearr_15812_19605[(2)] = ex__13659__auto__);


if(cljs.core.seq((state_15794[(4)]))){
var statearr_15813_19606 = state_15794;
(statearr_15813_19606[(1)] = cljs.core.first((state_15794[(4)])));

} else {
throw ex__13659__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19607 = state_15794;
state_15794 = G__19607;
continue;
} else {
return ret_value__13657__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__ = function(state_15794){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____1.call(this,state_15794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__;
})()
;})(__19564,switch__13655__auto__,c__14771__auto___19590,G__15710_19565,G__15710_19566__$1,n__5593__auto___19563,jobs,results,process__$1,async))
})();
var state__14773__auto__ = (function (){var statearr_15815 = f__14772__auto__();
(statearr_15815[(6)] = c__14771__auto___19590);

return statearr_15815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14773__auto__);
});})(__19564,c__14771__auto___19590,G__15710_19565,G__15710_19566__$1,n__5593__auto___19563,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15710_19566__$1)].join('')));

}

var G__19608 = (__19564 + (1));
__19564 = G__19608;
continue;
} else {
}
break;
}

var c__14771__auto___19609 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14772__auto__ = (function (){var switch__13655__auto__ = (function (state_15844){
var state_val_15845 = (state_15844[(1)]);
if((state_val_15845 === (7))){
var inst_15839 = (state_15844[(2)]);
var state_15844__$1 = state_15844;
var statearr_15849_19610 = state_15844__$1;
(statearr_15849_19610[(2)] = inst_15839);

(statearr_15849_19610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15845 === (1))){
var state_15844__$1 = state_15844;
var statearr_15850_19611 = state_15844__$1;
(statearr_15850_19611[(2)] = null);

(statearr_15850_19611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15845 === (4))){
var inst_15818 = (state_15844[(7)]);
var inst_15818__$1 = (state_15844[(2)]);
var inst_15821 = (inst_15818__$1 == null);
var state_15844__$1 = (function (){var statearr_15852 = state_15844;
(statearr_15852[(7)] = inst_15818__$1);

return statearr_15852;
})();
if(cljs.core.truth_(inst_15821)){
var statearr_15854_19612 = state_15844__$1;
(statearr_15854_19612[(1)] = (5));

} else {
var statearr_15855_19613 = state_15844__$1;
(statearr_15855_19613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15845 === (6))){
var inst_15818 = (state_15844[(7)]);
var inst_15825 = (state_15844[(8)]);
var inst_15825__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15826 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15828 = [inst_15818,inst_15825__$1];
var inst_15829 = (new cljs.core.PersistentVector(null,2,(5),inst_15826,inst_15828,null));
var state_15844__$1 = (function (){var statearr_15858 = state_15844;
(statearr_15858[(8)] = inst_15825__$1);

return statearr_15858;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15844__$1,(8),jobs,inst_15829);
} else {
if((state_val_15845 === (3))){
var inst_15841 = (state_15844[(2)]);
var state_15844__$1 = state_15844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15844__$1,inst_15841);
} else {
if((state_val_15845 === (2))){
var state_15844__$1 = state_15844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15844__$1,(4),from);
} else {
if((state_val_15845 === (9))){
var inst_15836 = (state_15844[(2)]);
var state_15844__$1 = (function (){var statearr_15867 = state_15844;
(statearr_15867[(9)] = inst_15836);

return statearr_15867;
})();
var statearr_15868_19615 = state_15844__$1;
(statearr_15868_19615[(2)] = null);

(statearr_15868_19615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15845 === (5))){
var inst_15823 = cljs.core.async.close_BANG_(jobs);
var state_15844__$1 = state_15844;
var statearr_15871_19616 = state_15844__$1;
(statearr_15871_19616[(2)] = inst_15823);

(statearr_15871_19616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15845 === (8))){
var inst_15825 = (state_15844[(8)]);
var inst_15831 = (state_15844[(2)]);
var state_15844__$1 = (function (){var statearr_15873 = state_15844;
(statearr_15873[(10)] = inst_15831);

return statearr_15873;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15844__$1,(9),results,inst_15825);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____0 = (function (){
var statearr_15881 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15881[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__);

(statearr_15881[(1)] = (1));

return statearr_15881;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____1 = (function (state_15844){
while(true){
var ret_value__13657__auto__ = (function (){try{while(true){
var result__13658__auto__ = switch__13655__auto__(state_15844);
if(cljs.core.keyword_identical_QMARK_(result__13658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13658__auto__;
}
break;
}
}catch (e15883){var ex__13659__auto__ = e15883;
var statearr_15886_19618 = state_15844;
(statearr_15886_19618[(2)] = ex__13659__auto__);


if(cljs.core.seq((state_15844[(4)]))){
var statearr_15891_19619 = state_15844;
(statearr_15891_19619[(1)] = cljs.core.first((state_15844[(4)])));

} else {
throw ex__13659__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19620 = state_15844;
state_15844 = G__19620;
continue;
} else {
return ret_value__13657__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__ = function(state_15844){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____1.call(this,state_15844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__;
})()
})();
var state__14773__auto__ = (function (){var statearr_15902 = f__14772__auto__();
(statearr_15902[(6)] = c__14771__auto___19609);

return statearr_15902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14773__auto__);
}));


var c__14771__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14772__auto__ = (function (){var switch__13655__auto__ = (function (state_15966){
var state_val_15967 = (state_15966[(1)]);
if((state_val_15967 === (7))){
var inst_15954 = (state_15966[(2)]);
var state_15966__$1 = state_15966;
var statearr_15981_19621 = state_15966__$1;
(statearr_15981_19621[(2)] = inst_15954);

(statearr_15981_19621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15967 === (20))){
var state_15966__$1 = state_15966;
var statearr_15982_19622 = state_15966__$1;
(statearr_15982_19622[(2)] = null);

(statearr_15982_19622[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15967 === (1))){
var state_15966__$1 = state_15966;
var statearr_15985_19623 = state_15966__$1;
(statearr_15985_19623[(2)] = null);

(statearr_15985_19623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15967 === (4))){
var inst_15905 = (state_15966[(7)]);
var inst_15905__$1 = (state_15966[(2)]);
var inst_15907 = (inst_15905__$1 == null);
var state_15966__$1 = (function (){var statearr_15992 = state_15966;
(statearr_15992[(7)] = inst_15905__$1);

return statearr_15992;
})();
if(cljs.core.truth_(inst_15907)){
var statearr_15993_19624 = state_15966__$1;
(statearr_15993_19624[(1)] = (5));

} else {
var statearr_15994_19625 = state_15966__$1;
(statearr_15994_19625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15967 === (15))){
var inst_15927 = (state_15966[(8)]);
var state_15966__$1 = state_15966;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15966__$1,(18),to,inst_15927);
} else {
if((state_val_15967 === (21))){
var inst_15945 = (state_15966[(2)]);
var state_15966__$1 = state_15966;
var statearr_15997_19627 = state_15966__$1;
(statearr_15997_19627[(2)] = inst_15945);

(statearr_15997_19627[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15967 === (13))){
var inst_15951 = (state_15966[(2)]);
var state_15966__$1 = (function (){var statearr_15998 = state_15966;
(statearr_15998[(9)] = inst_15951);

return statearr_15998;
})();
var statearr_15999_19630 = state_15966__$1;
(statearr_15999_19630[(2)] = null);

(statearr_15999_19630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15967 === (6))){
var inst_15905 = (state_15966[(7)]);
var state_15966__$1 = state_15966;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15966__$1,(11),inst_15905);
} else {
if((state_val_15967 === (17))){
var inst_15940 = (state_15966[(2)]);
var state_15966__$1 = state_15966;
if(cljs.core.truth_(inst_15940)){
var statearr_16006_19634 = state_15966__$1;
(statearr_16006_19634[(1)] = (19));

} else {
var statearr_16010_19635 = state_15966__$1;
(statearr_16010_19635[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15967 === (3))){
var inst_15956 = (state_15966[(2)]);
var state_15966__$1 = state_15966;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15966__$1,inst_15956);
} else {
if((state_val_15967 === (12))){
var inst_15920 = (state_15966[(10)]);
var state_15966__$1 = state_15966;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15966__$1,(14),inst_15920);
} else {
if((state_val_15967 === (2))){
var state_15966__$1 = state_15966;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15966__$1,(4),results);
} else {
if((state_val_15967 === (19))){
var state_15966__$1 = state_15966;
var statearr_16021_19645 = state_15966__$1;
(statearr_16021_19645[(2)] = null);

(statearr_16021_19645[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15967 === (11))){
var inst_15920 = (state_15966[(2)]);
var state_15966__$1 = (function (){var statearr_16032 = state_15966;
(statearr_16032[(10)] = inst_15920);

return statearr_16032;
})();
var statearr_16037_19647 = state_15966__$1;
(statearr_16037_19647[(2)] = null);

(statearr_16037_19647[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15967 === (9))){
var state_15966__$1 = state_15966;
var statearr_16052_19649 = state_15966__$1;
(statearr_16052_19649[(2)] = null);

(statearr_16052_19649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15967 === (5))){
var state_15966__$1 = state_15966;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16060_19651 = state_15966__$1;
(statearr_16060_19651[(1)] = (8));

} else {
var statearr_16066_19652 = state_15966__$1;
(statearr_16066_19652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15967 === (14))){
var inst_15927 = (state_15966[(8)]);
var inst_15934 = (state_15966[(11)]);
var inst_15927__$1 = (state_15966[(2)]);
var inst_15933 = (inst_15927__$1 == null);
var inst_15934__$1 = cljs.core.not(inst_15933);
var state_15966__$1 = (function (){var statearr_16074 = state_15966;
(statearr_16074[(8)] = inst_15927__$1);

(statearr_16074[(11)] = inst_15934__$1);

return statearr_16074;
})();
if(inst_15934__$1){
var statearr_16087_19658 = state_15966__$1;
(statearr_16087_19658[(1)] = (15));

} else {
var statearr_16089_19659 = state_15966__$1;
(statearr_16089_19659[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15967 === (16))){
var inst_15934 = (state_15966[(11)]);
var state_15966__$1 = state_15966;
var statearr_16096_19661 = state_15966__$1;
(statearr_16096_19661[(2)] = inst_15934);

(statearr_16096_19661[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15967 === (10))){
var inst_15913 = (state_15966[(2)]);
var state_15966__$1 = state_15966;
var statearr_16109_19662 = state_15966__$1;
(statearr_16109_19662[(2)] = inst_15913);

(statearr_16109_19662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15967 === (18))){
var inst_15937 = (state_15966[(2)]);
var state_15966__$1 = state_15966;
var statearr_16111_19663 = state_15966__$1;
(statearr_16111_19663[(2)] = inst_15937);

(statearr_16111_19663[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15967 === (8))){
var inst_15910 = cljs.core.async.close_BANG_(to);
var state_15966__$1 = state_15966;
var statearr_16112_19664 = state_15966__$1;
(statearr_16112_19664[(2)] = inst_15910);

(statearr_16112_19664[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____0 = (function (){
var statearr_16123 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16123[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__);

(statearr_16123[(1)] = (1));

return statearr_16123;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____1 = (function (state_15966){
while(true){
var ret_value__13657__auto__ = (function (){try{while(true){
var result__13658__auto__ = switch__13655__auto__(state_15966);
if(cljs.core.keyword_identical_QMARK_(result__13658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13658__auto__;
}
break;
}
}catch (e16129){var ex__13659__auto__ = e16129;
var statearr_16131_19668 = state_15966;
(statearr_16131_19668[(2)] = ex__13659__auto__);


if(cljs.core.seq((state_15966[(4)]))){
var statearr_16133_19670 = state_15966;
(statearr_16133_19670[(1)] = cljs.core.first((state_15966[(4)])));

} else {
throw ex__13659__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19671 = state_15966;
state_15966 = G__19671;
continue;
} else {
return ret_value__13657__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__ = function(state_15966){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____1.call(this,state_15966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13656__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13656__auto__;
})()
})();
var state__14773__auto__ = (function (){var statearr_16136 = f__14772__auto__();
(statearr_16136[(6)] = c__14771__auto__);

return statearr_16136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14773__auto__);
}));

return c__14771__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16143 = arguments.length;
switch (G__16143) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__16194 = arguments.length;
switch (G__16194) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__16237 = arguments.length;
switch (G__16237) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14771__auto___19703 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14772__auto__ = (function (){var switch__13655__auto__ = (function (state_16288){
var state_val_16289 = (state_16288[(1)]);
if((state_val_16289 === (7))){
var inst_16284 = (state_16288[(2)]);
var state_16288__$1 = state_16288;
var statearr_16294_19706 = state_16288__$1;
(statearr_16294_19706[(2)] = inst_16284);

(statearr_16294_19706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16289 === (1))){
var state_16288__$1 = state_16288;
var statearr_16295_19707 = state_16288__$1;
(statearr_16295_19707[(2)] = null);

(statearr_16295_19707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16289 === (4))){
var inst_16262 = (state_16288[(7)]);
var inst_16262__$1 = (state_16288[(2)]);
var inst_16266 = (inst_16262__$1 == null);
var state_16288__$1 = (function (){var statearr_16298 = state_16288;
(statearr_16298[(7)] = inst_16262__$1);

return statearr_16298;
})();
if(cljs.core.truth_(inst_16266)){
var statearr_16304_19709 = state_16288__$1;
(statearr_16304_19709[(1)] = (5));

} else {
var statearr_16305_19711 = state_16288__$1;
(statearr_16305_19711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16289 === (13))){
var state_16288__$1 = state_16288;
var statearr_16306_19713 = state_16288__$1;
(statearr_16306_19713[(2)] = null);

(statearr_16306_19713[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16289 === (6))){
var inst_16262 = (state_16288[(7)]);
var inst_16271 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16262) : p.call(null, inst_16262));
var state_16288__$1 = state_16288;
if(cljs.core.truth_(inst_16271)){
var statearr_16310_19714 = state_16288__$1;
(statearr_16310_19714[(1)] = (9));

} else {
var statearr_16311_19715 = state_16288__$1;
(statearr_16311_19715[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16289 === (3))){
var inst_16286 = (state_16288[(2)]);
var state_16288__$1 = state_16288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16288__$1,inst_16286);
} else {
if((state_val_16289 === (12))){
var state_16288__$1 = state_16288;
var statearr_16312_19716 = state_16288__$1;
(statearr_16312_19716[(2)] = null);

(statearr_16312_19716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16289 === (2))){
var state_16288__$1 = state_16288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16288__$1,(4),ch);
} else {
if((state_val_16289 === (11))){
var inst_16262 = (state_16288[(7)]);
var inst_16275 = (state_16288[(2)]);
var state_16288__$1 = state_16288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16288__$1,(8),inst_16275,inst_16262);
} else {
if((state_val_16289 === (9))){
var state_16288__$1 = state_16288;
var statearr_16328_19725 = state_16288__$1;
(statearr_16328_19725[(2)] = tc);

(statearr_16328_19725[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16289 === (5))){
var inst_16268 = cljs.core.async.close_BANG_(tc);
var inst_16269 = cljs.core.async.close_BANG_(fc);
var state_16288__$1 = (function (){var statearr_16333 = state_16288;
(statearr_16333[(8)] = inst_16268);

return statearr_16333;
})();
var statearr_16334_19726 = state_16288__$1;
(statearr_16334_19726[(2)] = inst_16269);

(statearr_16334_19726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16289 === (14))){
var inst_16282 = (state_16288[(2)]);
var state_16288__$1 = state_16288;
var statearr_16335_19730 = state_16288__$1;
(statearr_16335_19730[(2)] = inst_16282);

(statearr_16335_19730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16289 === (10))){
var state_16288__$1 = state_16288;
var statearr_16336_19731 = state_16288__$1;
(statearr_16336_19731[(2)] = fc);

(statearr_16336_19731[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16289 === (8))){
var inst_16277 = (state_16288[(2)]);
var state_16288__$1 = state_16288;
if(cljs.core.truth_(inst_16277)){
var statearr_16339_19737 = state_16288__$1;
(statearr_16339_19737[(1)] = (12));

} else {
var statearr_16342_19739 = state_16288__$1;
(statearr_16342_19739[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__13656__auto__ = null;
var cljs$core$async$state_machine__13656__auto____0 = (function (){
var statearr_16350 = [null,null,null,null,null,null,null,null,null];
(statearr_16350[(0)] = cljs$core$async$state_machine__13656__auto__);

(statearr_16350[(1)] = (1));

return statearr_16350;
});
var cljs$core$async$state_machine__13656__auto____1 = (function (state_16288){
while(true){
var ret_value__13657__auto__ = (function (){try{while(true){
var result__13658__auto__ = switch__13655__auto__(state_16288);
if(cljs.core.keyword_identical_QMARK_(result__13658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13658__auto__;
}
break;
}
}catch (e16351){var ex__13659__auto__ = e16351;
var statearr_16354_19743 = state_16288;
(statearr_16354_19743[(2)] = ex__13659__auto__);


if(cljs.core.seq((state_16288[(4)]))){
var statearr_16355_19744 = state_16288;
(statearr_16355_19744[(1)] = cljs.core.first((state_16288[(4)])));

} else {
throw ex__13659__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19745 = state_16288;
state_16288 = G__19745;
continue;
} else {
return ret_value__13657__auto__;
}
break;
}
});
cljs$core$async$state_machine__13656__auto__ = function(state_16288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13656__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13656__auto____1.call(this,state_16288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13656__auto____0;
cljs$core$async$state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13656__auto____1;
return cljs$core$async$state_machine__13656__auto__;
})()
})();
var state__14773__auto__ = (function (){var statearr_16362 = f__14772__auto__();
(statearr_16362[(6)] = c__14771__auto___19703);

return statearr_16362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14773__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14771__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14772__auto__ = (function (){var switch__13655__auto__ = (function (state_16476){
var state_val_16477 = (state_16476[(1)]);
if((state_val_16477 === (7))){
var inst_16458 = (state_16476[(2)]);
var state_16476__$1 = state_16476;
var statearr_16521_19746 = state_16476__$1;
(statearr_16521_19746[(2)] = inst_16458);

(statearr_16521_19746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (1))){
var inst_16398 = init;
var inst_16406 = inst_16398;
var state_16476__$1 = (function (){var statearr_16524 = state_16476;
(statearr_16524[(7)] = inst_16406);

return statearr_16524;
})();
var statearr_16525_19747 = state_16476__$1;
(statearr_16525_19747[(2)] = null);

(statearr_16525_19747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (4))){
var inst_16419 = (state_16476[(8)]);
var inst_16419__$1 = (state_16476[(2)]);
var inst_16424 = (inst_16419__$1 == null);
var state_16476__$1 = (function (){var statearr_16529 = state_16476;
(statearr_16529[(8)] = inst_16419__$1);

return statearr_16529;
})();
if(cljs.core.truth_(inst_16424)){
var statearr_16532_19752 = state_16476__$1;
(statearr_16532_19752[(1)] = (5));

} else {
var statearr_16533_19753 = state_16476__$1;
(statearr_16533_19753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (6))){
var inst_16433 = (state_16476[(9)]);
var inst_16406 = (state_16476[(7)]);
var inst_16419 = (state_16476[(8)]);
var inst_16433__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16406,inst_16419) : f.call(null, inst_16406,inst_16419));
var inst_16438 = cljs.core.reduced_QMARK_(inst_16433__$1);
var state_16476__$1 = (function (){var statearr_16534 = state_16476;
(statearr_16534[(9)] = inst_16433__$1);

return statearr_16534;
})();
if(inst_16438){
var statearr_16536_19754 = state_16476__$1;
(statearr_16536_19754[(1)] = (8));

} else {
var statearr_16539_19755 = state_16476__$1;
(statearr_16539_19755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (3))){
var inst_16461 = (state_16476[(2)]);
var state_16476__$1 = state_16476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16476__$1,inst_16461);
} else {
if((state_val_16477 === (2))){
var state_16476__$1 = state_16476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16476__$1,(4),ch);
} else {
if((state_val_16477 === (9))){
var inst_16433 = (state_16476[(9)]);
var inst_16406 = inst_16433;
var state_16476__$1 = (function (){var statearr_16543 = state_16476;
(statearr_16543[(7)] = inst_16406);

return statearr_16543;
})();
var statearr_16544_19756 = state_16476__$1;
(statearr_16544_19756[(2)] = null);

(statearr_16544_19756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (5))){
var inst_16406 = (state_16476[(7)]);
var state_16476__$1 = state_16476;
var statearr_16547_19757 = state_16476__$1;
(statearr_16547_19757[(2)] = inst_16406);

(statearr_16547_19757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (10))){
var inst_16456 = (state_16476[(2)]);
var state_16476__$1 = state_16476;
var statearr_16550_19761 = state_16476__$1;
(statearr_16550_19761[(2)] = inst_16456);

(statearr_16550_19761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (8))){
var inst_16433 = (state_16476[(9)]);
var inst_16448 = cljs.core.deref(inst_16433);
var state_16476__$1 = state_16476;
var statearr_16552_19766 = state_16476__$1;
(statearr_16552_19766[(2)] = inst_16448);

(statearr_16552_19766[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13656__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13656__auto____0 = (function (){
var statearr_16557 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16557[(0)] = cljs$core$async$reduce_$_state_machine__13656__auto__);

(statearr_16557[(1)] = (1));

return statearr_16557;
});
var cljs$core$async$reduce_$_state_machine__13656__auto____1 = (function (state_16476){
while(true){
var ret_value__13657__auto__ = (function (){try{while(true){
var result__13658__auto__ = switch__13655__auto__(state_16476);
if(cljs.core.keyword_identical_QMARK_(result__13658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13658__auto__;
}
break;
}
}catch (e16561){var ex__13659__auto__ = e16561;
var statearr_16562_19767 = state_16476;
(statearr_16562_19767[(2)] = ex__13659__auto__);


if(cljs.core.seq((state_16476[(4)]))){
var statearr_16563_19768 = state_16476;
(statearr_16563_19768[(1)] = cljs.core.first((state_16476[(4)])));

} else {
throw ex__13659__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19770 = state_16476;
state_16476 = G__19770;
continue;
} else {
return ret_value__13657__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13656__auto__ = function(state_16476){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13656__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13656__auto____1.call(this,state_16476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13656__auto____0;
cljs$core$async$reduce_$_state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13656__auto____1;
return cljs$core$async$reduce_$_state_machine__13656__auto__;
})()
})();
var state__14773__auto__ = (function (){var statearr_16569 = f__14772__auto__();
(statearr_16569[(6)] = c__14771__auto__);

return statearr_16569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14773__auto__);
}));

return c__14771__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__14771__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14772__auto__ = (function (){var switch__13655__auto__ = (function (state_16579){
var state_val_16580 = (state_16579[(1)]);
if((state_val_16580 === (1))){
var inst_16573 = cljs.core.async.reduce(f__$1,init,ch);
var state_16579__$1 = state_16579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16579__$1,(2),inst_16573);
} else {
if((state_val_16580 === (2))){
var inst_16575 = (state_16579[(2)]);
var inst_16576 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16575) : f__$1.call(null, inst_16575));
var state_16579__$1 = state_16579;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16579__$1,inst_16576);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13656__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13656__auto____0 = (function (){
var statearr_16610 = [null,null,null,null,null,null,null];
(statearr_16610[(0)] = cljs$core$async$transduce_$_state_machine__13656__auto__);

(statearr_16610[(1)] = (1));

return statearr_16610;
});
var cljs$core$async$transduce_$_state_machine__13656__auto____1 = (function (state_16579){
while(true){
var ret_value__13657__auto__ = (function (){try{while(true){
var result__13658__auto__ = switch__13655__auto__(state_16579);
if(cljs.core.keyword_identical_QMARK_(result__13658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13658__auto__;
}
break;
}
}catch (e16614){var ex__13659__auto__ = e16614;
var statearr_16615_19779 = state_16579;
(statearr_16615_19779[(2)] = ex__13659__auto__);


if(cljs.core.seq((state_16579[(4)]))){
var statearr_16616_19780 = state_16579;
(statearr_16616_19780[(1)] = cljs.core.first((state_16579[(4)])));

} else {
throw ex__13659__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19781 = state_16579;
state_16579 = G__19781;
continue;
} else {
return ret_value__13657__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13656__auto__ = function(state_16579){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13656__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13656__auto____1.call(this,state_16579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13656__auto____0;
cljs$core$async$transduce_$_state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13656__auto____1;
return cljs$core$async$transduce_$_state_machine__13656__auto__;
})()
})();
var state__14773__auto__ = (function (){var statearr_16618 = f__14772__auto__();
(statearr_16618[(6)] = c__14771__auto__);

return statearr_16618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14773__auto__);
}));

return c__14771__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__16625 = arguments.length;
switch (G__16625) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14771__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14772__auto__ = (function (){var switch__13655__auto__ = (function (state_16657){
var state_val_16658 = (state_16657[(1)]);
if((state_val_16658 === (7))){
var inst_16639 = (state_16657[(2)]);
var state_16657__$1 = state_16657;
var statearr_16669_19793 = state_16657__$1;
(statearr_16669_19793[(2)] = inst_16639);

(statearr_16669_19793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16658 === (1))){
var inst_16632 = cljs.core.seq(coll);
var inst_16633 = inst_16632;
var state_16657__$1 = (function (){var statearr_16670 = state_16657;
(statearr_16670[(7)] = inst_16633);

return statearr_16670;
})();
var statearr_16672_19802 = state_16657__$1;
(statearr_16672_19802[(2)] = null);

(statearr_16672_19802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16658 === (4))){
var inst_16633 = (state_16657[(7)]);
var inst_16637 = cljs.core.first(inst_16633);
var state_16657__$1 = state_16657;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16657__$1,(7),ch,inst_16637);
} else {
if((state_val_16658 === (13))){
var inst_16651 = (state_16657[(2)]);
var state_16657__$1 = state_16657;
var statearr_16678_19805 = state_16657__$1;
(statearr_16678_19805[(2)] = inst_16651);

(statearr_16678_19805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16658 === (6))){
var inst_16642 = (state_16657[(2)]);
var state_16657__$1 = state_16657;
if(cljs.core.truth_(inst_16642)){
var statearr_16682_19806 = state_16657__$1;
(statearr_16682_19806[(1)] = (8));

} else {
var statearr_16683_19807 = state_16657__$1;
(statearr_16683_19807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16658 === (3))){
var inst_16655 = (state_16657[(2)]);
var state_16657__$1 = state_16657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16657__$1,inst_16655);
} else {
if((state_val_16658 === (12))){
var state_16657__$1 = state_16657;
var statearr_16690_19809 = state_16657__$1;
(statearr_16690_19809[(2)] = null);

(statearr_16690_19809[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16658 === (2))){
var inst_16633 = (state_16657[(7)]);
var state_16657__$1 = state_16657;
if(cljs.core.truth_(inst_16633)){
var statearr_16691_19814 = state_16657__$1;
(statearr_16691_19814[(1)] = (4));

} else {
var statearr_16692_19816 = state_16657__$1;
(statearr_16692_19816[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16658 === (11))){
var inst_16648 = cljs.core.async.close_BANG_(ch);
var state_16657__$1 = state_16657;
var statearr_16694_19819 = state_16657__$1;
(statearr_16694_19819[(2)] = inst_16648);

(statearr_16694_19819[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16658 === (9))){
var state_16657__$1 = state_16657;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16696_19822 = state_16657__$1;
(statearr_16696_19822[(1)] = (11));

} else {
var statearr_16700_19823 = state_16657__$1;
(statearr_16700_19823[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16658 === (5))){
var inst_16633 = (state_16657[(7)]);
var state_16657__$1 = state_16657;
var statearr_16704_19824 = state_16657__$1;
(statearr_16704_19824[(2)] = inst_16633);

(statearr_16704_19824[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16658 === (10))){
var inst_16653 = (state_16657[(2)]);
var state_16657__$1 = state_16657;
var statearr_16706_19825 = state_16657__$1;
(statearr_16706_19825[(2)] = inst_16653);

(statearr_16706_19825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16658 === (8))){
var inst_16633 = (state_16657[(7)]);
var inst_16644 = cljs.core.next(inst_16633);
var inst_16633__$1 = inst_16644;
var state_16657__$1 = (function (){var statearr_16707 = state_16657;
(statearr_16707[(7)] = inst_16633__$1);

return statearr_16707;
})();
var statearr_16708_19828 = state_16657__$1;
(statearr_16708_19828[(2)] = null);

(statearr_16708_19828[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__13656__auto__ = null;
var cljs$core$async$state_machine__13656__auto____0 = (function (){
var statearr_16710 = [null,null,null,null,null,null,null,null];
(statearr_16710[(0)] = cljs$core$async$state_machine__13656__auto__);

(statearr_16710[(1)] = (1));

return statearr_16710;
});
var cljs$core$async$state_machine__13656__auto____1 = (function (state_16657){
while(true){
var ret_value__13657__auto__ = (function (){try{while(true){
var result__13658__auto__ = switch__13655__auto__(state_16657);
if(cljs.core.keyword_identical_QMARK_(result__13658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13658__auto__;
}
break;
}
}catch (e16713){var ex__13659__auto__ = e16713;
var statearr_16714_19832 = state_16657;
(statearr_16714_19832[(2)] = ex__13659__auto__);


if(cljs.core.seq((state_16657[(4)]))){
var statearr_16715_19834 = state_16657;
(statearr_16715_19834[(1)] = cljs.core.first((state_16657[(4)])));

} else {
throw ex__13659__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19836 = state_16657;
state_16657 = G__19836;
continue;
} else {
return ret_value__13657__auto__;
}
break;
}
});
cljs$core$async$state_machine__13656__auto__ = function(state_16657){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13656__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13656__auto____1.call(this,state_16657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13656__auto____0;
cljs$core$async$state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13656__auto____1;
return cljs$core$async$state_machine__13656__auto__;
})()
})();
var state__14773__auto__ = (function (){var statearr_16718 = f__14772__auto__();
(statearr_16718[(6)] = c__14771__auto__);

return statearr_16718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14773__auto__);
}));

return c__14771__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16728 = arguments.length;
switch (G__16728) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_19842 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19842(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19845 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19845(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19847 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19847(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19853 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19853(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16767 = (function (ch,cs,meta16768){
this.ch = ch;
this.cs = cs;
this.meta16768 = meta16768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16769,meta16768__$1){
var self__ = this;
var _16769__$1 = this;
return (new cljs.core.async.t_cljs$core$async16767(self__.ch,self__.cs,meta16768__$1));
}));

(cljs.core.async.t_cljs$core$async16767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16769){
var self__ = this;
var _16769__$1 = this;
return self__.meta16768;
}));

(cljs.core.async.t_cljs$core$async16767.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16767.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16767.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16767.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16767.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16767.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16768","meta16768",477311017,null)], null);
}));

(cljs.core.async.t_cljs$core$async16767.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16767");

(cljs.core.async.t_cljs$core$async16767.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16767");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16767.
 */
cljs.core.async.__GT_t_cljs$core$async16767 = (function cljs$core$async$__GT_t_cljs$core$async16767(ch,cs,meta16768){
return (new cljs.core.async.t_cljs$core$async16767(ch,cs,meta16768));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async16767(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14771__auto___19863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14772__auto__ = (function (){var switch__13655__auto__ = (function (state_16961){
var state_val_16962 = (state_16961[(1)]);
if((state_val_16962 === (7))){
var inst_16950 = (state_16961[(2)]);
var state_16961__$1 = state_16961;
var statearr_16965_19864 = state_16961__$1;
(statearr_16965_19864[(2)] = inst_16950);

(statearr_16965_19864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (20))){
var inst_16828 = (state_16961[(7)]);
var inst_16846 = cljs.core.first(inst_16828);
var inst_16847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16846,(0),null);
var inst_16848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16846,(1),null);
var state_16961__$1 = (function (){var statearr_16974 = state_16961;
(statearr_16974[(8)] = inst_16847);

return statearr_16974;
})();
if(cljs.core.truth_(inst_16848)){
var statearr_16981_19868 = state_16961__$1;
(statearr_16981_19868[(1)] = (22));

} else {
var statearr_16986_19870 = state_16961__$1;
(statearr_16986_19870[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (27))){
var inst_16887 = (state_16961[(9)]);
var inst_16892 = (state_16961[(10)]);
var inst_16785 = (state_16961[(11)]);
var inst_16885 = (state_16961[(12)]);
var inst_16892__$1 = cljs.core._nth(inst_16885,inst_16887);
var inst_16893 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16892__$1,inst_16785,done);
var state_16961__$1 = (function (){var statearr_16994 = state_16961;
(statearr_16994[(10)] = inst_16892__$1);

return statearr_16994;
})();
if(cljs.core.truth_(inst_16893)){
var statearr_17003_19872 = state_16961__$1;
(statearr_17003_19872[(1)] = (30));

} else {
var statearr_17004_19873 = state_16961__$1;
(statearr_17004_19873[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (1))){
var state_16961__$1 = state_16961;
var statearr_17011_19877 = state_16961__$1;
(statearr_17011_19877[(2)] = null);

(statearr_17011_19877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (24))){
var inst_16828 = (state_16961[(7)]);
var inst_16854 = (state_16961[(2)]);
var inst_16857 = cljs.core.next(inst_16828);
var inst_16795 = inst_16857;
var inst_16796 = null;
var inst_16797 = (0);
var inst_16798 = (0);
var state_16961__$1 = (function (){var statearr_17020 = state_16961;
(statearr_17020[(13)] = inst_16795);

(statearr_17020[(14)] = inst_16796);

(statearr_17020[(15)] = inst_16797);

(statearr_17020[(16)] = inst_16798);

(statearr_17020[(17)] = inst_16854);

return statearr_17020;
})();
var statearr_17022_19882 = state_16961__$1;
(statearr_17022_19882[(2)] = null);

(statearr_17022_19882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (39))){
var state_16961__$1 = state_16961;
var statearr_17034_19883 = state_16961__$1;
(statearr_17034_19883[(2)] = null);

(statearr_17034_19883[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (4))){
var inst_16785 = (state_16961[(11)]);
var inst_16785__$1 = (state_16961[(2)]);
var inst_16786 = (inst_16785__$1 == null);
var state_16961__$1 = (function (){var statearr_17037 = state_16961;
(statearr_17037[(11)] = inst_16785__$1);

return statearr_17037;
})();
if(cljs.core.truth_(inst_16786)){
var statearr_17038_19884 = state_16961__$1;
(statearr_17038_19884[(1)] = (5));

} else {
var statearr_17039_19885 = state_16961__$1;
(statearr_17039_19885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (15))){
var inst_16795 = (state_16961[(13)]);
var inst_16796 = (state_16961[(14)]);
var inst_16797 = (state_16961[(15)]);
var inst_16798 = (state_16961[(16)]);
var inst_16820 = (state_16961[(2)]);
var inst_16825 = (inst_16798 + (1));
var tmp17030 = inst_16795;
var tmp17032 = inst_16796;
var tmp17033 = inst_16797;
var inst_16795__$1 = tmp17030;
var inst_16796__$1 = tmp17032;
var inst_16797__$1 = tmp17033;
var inst_16798__$1 = inst_16825;
var state_16961__$1 = (function (){var statearr_17043 = state_16961;
(statearr_17043[(13)] = inst_16795__$1);

(statearr_17043[(14)] = inst_16796__$1);

(statearr_17043[(15)] = inst_16797__$1);

(statearr_17043[(16)] = inst_16798__$1);

(statearr_17043[(18)] = inst_16820);

return statearr_17043;
})();
var statearr_17044_19887 = state_16961__$1;
(statearr_17044_19887[(2)] = null);

(statearr_17044_19887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (21))){
var inst_16860 = (state_16961[(2)]);
var state_16961__$1 = state_16961;
var statearr_17048_19889 = state_16961__$1;
(statearr_17048_19889[(2)] = inst_16860);

(statearr_17048_19889[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (31))){
var inst_16892 = (state_16961[(10)]);
var inst_16896 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_16892);
var state_16961__$1 = state_16961;
var statearr_17049_19896 = state_16961__$1;
(statearr_17049_19896[(2)] = inst_16896);

(statearr_17049_19896[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (32))){
var inst_16886 = (state_16961[(19)]);
var inst_16884 = (state_16961[(20)]);
var inst_16887 = (state_16961[(9)]);
var inst_16885 = (state_16961[(12)]);
var inst_16898 = (state_16961[(2)]);
var inst_16899 = (inst_16887 + (1));
var tmp17045 = inst_16886;
var tmp17046 = inst_16884;
var tmp17047 = inst_16885;
var inst_16884__$1 = tmp17046;
var inst_16885__$1 = tmp17047;
var inst_16886__$1 = tmp17045;
var inst_16887__$1 = inst_16899;
var state_16961__$1 = (function (){var statearr_17053 = state_16961;
(statearr_17053[(21)] = inst_16898);

(statearr_17053[(19)] = inst_16886__$1);

(statearr_17053[(20)] = inst_16884__$1);

(statearr_17053[(9)] = inst_16887__$1);

(statearr_17053[(12)] = inst_16885__$1);

return statearr_17053;
})();
var statearr_17056_19899 = state_16961__$1;
(statearr_17056_19899[(2)] = null);

(statearr_17056_19899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (40))){
var inst_16919 = (state_16961[(22)]);
var inst_16925 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_16919);
var state_16961__$1 = state_16961;
var statearr_17061_19900 = state_16961__$1;
(statearr_17061_19900[(2)] = inst_16925);

(statearr_17061_19900[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (33))){
var inst_16905 = (state_16961[(23)]);
var inst_16907 = cljs.core.chunked_seq_QMARK_(inst_16905);
var state_16961__$1 = state_16961;
if(inst_16907){
var statearr_17062_19903 = state_16961__$1;
(statearr_17062_19903[(1)] = (36));

} else {
var statearr_17063_19904 = state_16961__$1;
(statearr_17063_19904[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (13))){
var inst_16810 = (state_16961[(24)]);
var inst_16817 = cljs.core.async.close_BANG_(inst_16810);
var state_16961__$1 = state_16961;
var statearr_17069_19905 = state_16961__$1;
(statearr_17069_19905[(2)] = inst_16817);

(statearr_17069_19905[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (22))){
var inst_16847 = (state_16961[(8)]);
var inst_16850 = cljs.core.async.close_BANG_(inst_16847);
var state_16961__$1 = state_16961;
var statearr_17070_19906 = state_16961__$1;
(statearr_17070_19906[(2)] = inst_16850);

(statearr_17070_19906[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (36))){
var inst_16905 = (state_16961[(23)]);
var inst_16910 = cljs.core.chunk_first(inst_16905);
var inst_16911 = cljs.core.chunk_rest(inst_16905);
var inst_16912 = cljs.core.count(inst_16910);
var inst_16884 = inst_16911;
var inst_16885 = inst_16910;
var inst_16886 = inst_16912;
var inst_16887 = (0);
var state_16961__$1 = (function (){var statearr_17071 = state_16961;
(statearr_17071[(19)] = inst_16886);

(statearr_17071[(20)] = inst_16884);

(statearr_17071[(9)] = inst_16887);

(statearr_17071[(12)] = inst_16885);

return statearr_17071;
})();
var statearr_17073_19910 = state_16961__$1;
(statearr_17073_19910[(2)] = null);

(statearr_17073_19910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (41))){
var inst_16905 = (state_16961[(23)]);
var inst_16927 = (state_16961[(2)]);
var inst_16928 = cljs.core.next(inst_16905);
var inst_16884 = inst_16928;
var inst_16885 = null;
var inst_16886 = (0);
var inst_16887 = (0);
var state_16961__$1 = (function (){var statearr_17074 = state_16961;
(statearr_17074[(19)] = inst_16886);

(statearr_17074[(25)] = inst_16927);

(statearr_17074[(20)] = inst_16884);

(statearr_17074[(9)] = inst_16887);

(statearr_17074[(12)] = inst_16885);

return statearr_17074;
})();
var statearr_17082_19913 = state_16961__$1;
(statearr_17082_19913[(2)] = null);

(statearr_17082_19913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (43))){
var state_16961__$1 = state_16961;
var statearr_17087_19914 = state_16961__$1;
(statearr_17087_19914[(2)] = null);

(statearr_17087_19914[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (29))){
var inst_16936 = (state_16961[(2)]);
var state_16961__$1 = state_16961;
var statearr_17092_19915 = state_16961__$1;
(statearr_17092_19915[(2)] = inst_16936);

(statearr_17092_19915[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (44))){
var inst_16947 = (state_16961[(2)]);
var state_16961__$1 = (function (){var statearr_17093 = state_16961;
(statearr_17093[(26)] = inst_16947);

return statearr_17093;
})();
var statearr_17094_19916 = state_16961__$1;
(statearr_17094_19916[(2)] = null);

(statearr_17094_19916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (6))){
var inst_16873 = (state_16961[(27)]);
var inst_16872 = cljs.core.deref(cs);
var inst_16873__$1 = cljs.core.keys(inst_16872);
var inst_16876 = cljs.core.count(inst_16873__$1);
var inst_16877 = cljs.core.reset_BANG_(dctr,inst_16876);
var inst_16883 = cljs.core.seq(inst_16873__$1);
var inst_16884 = inst_16883;
var inst_16885 = null;
var inst_16886 = (0);
var inst_16887 = (0);
var state_16961__$1 = (function (){var statearr_17095 = state_16961;
(statearr_17095[(19)] = inst_16886);

(statearr_17095[(28)] = inst_16877);

(statearr_17095[(20)] = inst_16884);

(statearr_17095[(27)] = inst_16873__$1);

(statearr_17095[(9)] = inst_16887);

(statearr_17095[(12)] = inst_16885);

return statearr_17095;
})();
var statearr_17096_19920 = state_16961__$1;
(statearr_17096_19920[(2)] = null);

(statearr_17096_19920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (28))){
var inst_16884 = (state_16961[(20)]);
var inst_16905 = (state_16961[(23)]);
var inst_16905__$1 = cljs.core.seq(inst_16884);
var state_16961__$1 = (function (){var statearr_17097 = state_16961;
(statearr_17097[(23)] = inst_16905__$1);

return statearr_17097;
})();
if(inst_16905__$1){
var statearr_17098_19921 = state_16961__$1;
(statearr_17098_19921[(1)] = (33));

} else {
var statearr_17099_19922 = state_16961__$1;
(statearr_17099_19922[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (25))){
var inst_16886 = (state_16961[(19)]);
var inst_16887 = (state_16961[(9)]);
var inst_16889 = (inst_16887 < inst_16886);
var inst_16890 = inst_16889;
var state_16961__$1 = state_16961;
if(cljs.core.truth_(inst_16890)){
var statearr_17101_19924 = state_16961__$1;
(statearr_17101_19924[(1)] = (27));

} else {
var statearr_17102_19925 = state_16961__$1;
(statearr_17102_19925[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (34))){
var state_16961__$1 = state_16961;
var statearr_17103_19927 = state_16961__$1;
(statearr_17103_19927[(2)] = null);

(statearr_17103_19927[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (17))){
var state_16961__$1 = state_16961;
var statearr_17105_19928 = state_16961__$1;
(statearr_17105_19928[(2)] = null);

(statearr_17105_19928[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (3))){
var inst_16952 = (state_16961[(2)]);
var state_16961__$1 = state_16961;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16961__$1,inst_16952);
} else {
if((state_val_16962 === (12))){
var inst_16865 = (state_16961[(2)]);
var state_16961__$1 = state_16961;
var statearr_17108_19929 = state_16961__$1;
(statearr_17108_19929[(2)] = inst_16865);

(statearr_17108_19929[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (2))){
var state_16961__$1 = state_16961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16961__$1,(4),ch);
} else {
if((state_val_16962 === (23))){
var state_16961__$1 = state_16961;
var statearr_17116_19931 = state_16961__$1;
(statearr_17116_19931[(2)] = null);

(statearr_17116_19931[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (35))){
var inst_16934 = (state_16961[(2)]);
var state_16961__$1 = state_16961;
var statearr_17120_19932 = state_16961__$1;
(statearr_17120_19932[(2)] = inst_16934);

(statearr_17120_19932[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (19))){
var inst_16828 = (state_16961[(7)]);
var inst_16835 = cljs.core.chunk_first(inst_16828);
var inst_16836 = cljs.core.chunk_rest(inst_16828);
var inst_16837 = cljs.core.count(inst_16835);
var inst_16795 = inst_16836;
var inst_16796 = inst_16835;
var inst_16797 = inst_16837;
var inst_16798 = (0);
var state_16961__$1 = (function (){var statearr_17131 = state_16961;
(statearr_17131[(13)] = inst_16795);

(statearr_17131[(14)] = inst_16796);

(statearr_17131[(15)] = inst_16797);

(statearr_17131[(16)] = inst_16798);

return statearr_17131;
})();
var statearr_17132_19935 = state_16961__$1;
(statearr_17132_19935[(2)] = null);

(statearr_17132_19935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (11))){
var inst_16828 = (state_16961[(7)]);
var inst_16795 = (state_16961[(13)]);
var inst_16828__$1 = cljs.core.seq(inst_16795);
var state_16961__$1 = (function (){var statearr_17136 = state_16961;
(statearr_17136[(7)] = inst_16828__$1);

return statearr_17136;
})();
if(inst_16828__$1){
var statearr_17138_19936 = state_16961__$1;
(statearr_17138_19936[(1)] = (16));

} else {
var statearr_17139_19937 = state_16961__$1;
(statearr_17139_19937[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (9))){
var inst_16867 = (state_16961[(2)]);
var state_16961__$1 = state_16961;
var statearr_17140_19938 = state_16961__$1;
(statearr_17140_19938[(2)] = inst_16867);

(statearr_17140_19938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (5))){
var inst_16793 = cljs.core.deref(cs);
var inst_16794 = cljs.core.seq(inst_16793);
var inst_16795 = inst_16794;
var inst_16796 = null;
var inst_16797 = (0);
var inst_16798 = (0);
var state_16961__$1 = (function (){var statearr_17144 = state_16961;
(statearr_17144[(13)] = inst_16795);

(statearr_17144[(14)] = inst_16796);

(statearr_17144[(15)] = inst_16797);

(statearr_17144[(16)] = inst_16798);

return statearr_17144;
})();
var statearr_17147_19939 = state_16961__$1;
(statearr_17147_19939[(2)] = null);

(statearr_17147_19939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (14))){
var state_16961__$1 = state_16961;
var statearr_17148_19941 = state_16961__$1;
(statearr_17148_19941[(2)] = null);

(statearr_17148_19941[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (45))){
var inst_16944 = (state_16961[(2)]);
var state_16961__$1 = state_16961;
var statearr_17151_19942 = state_16961__$1;
(statearr_17151_19942[(2)] = inst_16944);

(statearr_17151_19942[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (26))){
var inst_16873 = (state_16961[(27)]);
var inst_16940 = (state_16961[(2)]);
var inst_16941 = cljs.core.seq(inst_16873);
var state_16961__$1 = (function (){var statearr_17170 = state_16961;
(statearr_17170[(29)] = inst_16940);

return statearr_17170;
})();
if(inst_16941){
var statearr_17174_19947 = state_16961__$1;
(statearr_17174_19947[(1)] = (42));

} else {
var statearr_17175_19948 = state_16961__$1;
(statearr_17175_19948[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (16))){
var inst_16828 = (state_16961[(7)]);
var inst_16833 = cljs.core.chunked_seq_QMARK_(inst_16828);
var state_16961__$1 = state_16961;
if(inst_16833){
var statearr_17179_19949 = state_16961__$1;
(statearr_17179_19949[(1)] = (19));

} else {
var statearr_17180_19950 = state_16961__$1;
(statearr_17180_19950[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (38))){
var inst_16931 = (state_16961[(2)]);
var state_16961__$1 = state_16961;
var statearr_17181_19955 = state_16961__$1;
(statearr_17181_19955[(2)] = inst_16931);

(statearr_17181_19955[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (30))){
var state_16961__$1 = state_16961;
var statearr_17182_19956 = state_16961__$1;
(statearr_17182_19956[(2)] = null);

(statearr_17182_19956[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (10))){
var inst_16796 = (state_16961[(14)]);
var inst_16798 = (state_16961[(16)]);
var inst_16809 = cljs.core._nth(inst_16796,inst_16798);
var inst_16810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16809,(0),null);
var inst_16811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16809,(1),null);
var state_16961__$1 = (function (){var statearr_17183 = state_16961;
(statearr_17183[(24)] = inst_16810);

return statearr_17183;
})();
if(cljs.core.truth_(inst_16811)){
var statearr_17186_19958 = state_16961__$1;
(statearr_17186_19958[(1)] = (13));

} else {
var statearr_17187_19960 = state_16961__$1;
(statearr_17187_19960[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (18))){
var inst_16863 = (state_16961[(2)]);
var state_16961__$1 = state_16961;
var statearr_17190_19961 = state_16961__$1;
(statearr_17190_19961[(2)] = inst_16863);

(statearr_17190_19961[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (42))){
var state_16961__$1 = state_16961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16961__$1,(45),dchan);
} else {
if((state_val_16962 === (37))){
var inst_16905 = (state_16961[(23)]);
var inst_16919 = (state_16961[(22)]);
var inst_16785 = (state_16961[(11)]);
var inst_16919__$1 = cljs.core.first(inst_16905);
var inst_16922 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16919__$1,inst_16785,done);
var state_16961__$1 = (function (){var statearr_17191 = state_16961;
(statearr_17191[(22)] = inst_16919__$1);

return statearr_17191;
})();
if(cljs.core.truth_(inst_16922)){
var statearr_17193_19965 = state_16961__$1;
(statearr_17193_19965[(1)] = (39));

} else {
var statearr_17194_19966 = state_16961__$1;
(statearr_17194_19966[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (8))){
var inst_16797 = (state_16961[(15)]);
var inst_16798 = (state_16961[(16)]);
var inst_16803 = (inst_16798 < inst_16797);
var inst_16804 = inst_16803;
var state_16961__$1 = state_16961;
if(cljs.core.truth_(inst_16804)){
var statearr_17195_19968 = state_16961__$1;
(statearr_17195_19968[(1)] = (10));

} else {
var statearr_17196_19970 = state_16961__$1;
(statearr_17196_19970[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__13656__auto__ = null;
var cljs$core$async$mult_$_state_machine__13656__auto____0 = (function (){
var statearr_17204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17204[(0)] = cljs$core$async$mult_$_state_machine__13656__auto__);

(statearr_17204[(1)] = (1));

return statearr_17204;
});
var cljs$core$async$mult_$_state_machine__13656__auto____1 = (function (state_16961){
while(true){
var ret_value__13657__auto__ = (function (){try{while(true){
var result__13658__auto__ = switch__13655__auto__(state_16961);
if(cljs.core.keyword_identical_QMARK_(result__13658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13658__auto__;
}
break;
}
}catch (e17207){var ex__13659__auto__ = e17207;
var statearr_17208_19975 = state_16961;
(statearr_17208_19975[(2)] = ex__13659__auto__);


if(cljs.core.seq((state_16961[(4)]))){
var statearr_17209_19980 = state_16961;
(statearr_17209_19980[(1)] = cljs.core.first((state_16961[(4)])));

} else {
throw ex__13659__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19981 = state_16961;
state_16961 = G__19981;
continue;
} else {
return ret_value__13657__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13656__auto__ = function(state_16961){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13656__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13656__auto____1.call(this,state_16961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13656__auto____0;
cljs$core$async$mult_$_state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13656__auto____1;
return cljs$core$async$mult_$_state_machine__13656__auto__;
})()
})();
var state__14773__auto__ = (function (){var statearr_17215 = f__14772__auto__();
(statearr_17215[(6)] = c__14771__auto___19863);

return statearr_17215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14773__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__17230 = arguments.length;
switch (G__17230) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_19990 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_19990(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19995 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_19995(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20003 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20003(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20005 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_20005(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20011 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20011(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20018 = arguments.length;
var i__5727__auto___20019 = (0);
while(true){
if((i__5727__auto___20019 < len__5726__auto___20018)){
args__5732__auto__.push((arguments[i__5727__auto___20019]));

var G__20023 = (i__5727__auto___20019 + (1));
i__5727__auto___20019 = G__20023;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17286){
var map__17287 = p__17286;
var map__17287__$1 = cljs.core.__destructure_map(map__17287);
var opts = map__17287__$1;
var statearr_17288_20024 = state;
(statearr_17288_20024[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_17297_20025 = state;
(statearr_17297_20025[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_17301_20028 = state;
(statearr_17301_20028[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17263){
var G__17264 = cljs.core.first(seq17263);
var seq17263__$1 = cljs.core.next(seq17263);
var G__17265 = cljs.core.first(seq17263__$1);
var seq17263__$2 = cljs.core.next(seq17263__$1);
var G__17266 = cljs.core.first(seq17263__$2);
var seq17263__$3 = cljs.core.next(seq17263__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17264,G__17265,G__17266,seq17263__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17329 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17330){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17330 = meta17330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17331,meta17330__$1){
var self__ = this;
var _17331__$1 = this;
return (new cljs.core.async.t_cljs$core$async17329(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17330__$1));
}));

(cljs.core.async.t_cljs$core$async17329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17331){
var self__ = this;
var _17331__$1 = this;
return self__.meta17330;
}));

(cljs.core.async.t_cljs$core$async17329.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17329.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async17329.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17329.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async17329.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async17329.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async17329.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async17329.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async17329.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta17330","meta17330",-138359759,null)], null);
}));

(cljs.core.async.t_cljs$core$async17329.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17329");

(cljs.core.async.t_cljs$core$async17329.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17329");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17329.
 */
cljs.core.async.__GT_t_cljs$core$async17329 = (function cljs$core$async$__GT_t_cljs$core$async17329(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17330){
return (new cljs.core.async.t_cljs$core$async17329(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17330));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async17329(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14771__auto___20041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14772__auto__ = (function (){var switch__13655__auto__ = (function (state_17434){
var state_val_17436 = (state_17434[(1)]);
if((state_val_17436 === (7))){
var inst_17379 = (state_17434[(2)]);
var state_17434__$1 = state_17434;
if(cljs.core.truth_(inst_17379)){
var statearr_17439_20042 = state_17434__$1;
(statearr_17439_20042[(1)] = (8));

} else {
var statearr_17440_20043 = state_17434__$1;
(statearr_17440_20043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (20))){
var inst_17372 = (state_17434[(7)]);
var state_17434__$1 = state_17434;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17434__$1,(23),out,inst_17372);
} else {
if((state_val_17436 === (1))){
var inst_17350 = calc_state();
var inst_17351 = cljs.core.__destructure_map(inst_17350);
var inst_17352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17351,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17351,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17351,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17355 = inst_17350;
var state_17434__$1 = (function (){var statearr_17446 = state_17434;
(statearr_17446[(8)] = inst_17353);

(statearr_17446[(9)] = inst_17355);

(statearr_17446[(10)] = inst_17352);

(statearr_17446[(11)] = inst_17354);

return statearr_17446;
})();
var statearr_17450_20044 = state_17434__$1;
(statearr_17450_20044[(2)] = null);

(statearr_17450_20044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (24))){
var inst_17358 = (state_17434[(12)]);
var inst_17355 = inst_17358;
var state_17434__$1 = (function (){var statearr_17456 = state_17434;
(statearr_17456[(9)] = inst_17355);

return statearr_17456;
})();
var statearr_17457_20047 = state_17434__$1;
(statearr_17457_20047[(2)] = null);

(statearr_17457_20047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (4))){
var inst_17374 = (state_17434[(13)]);
var inst_17372 = (state_17434[(7)]);
var inst_17370 = (state_17434[(2)]);
var inst_17372__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17370,(0),null);
var inst_17373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17370,(1),null);
var inst_17374__$1 = (inst_17372__$1 == null);
var state_17434__$1 = (function (){var statearr_17463 = state_17434;
(statearr_17463[(13)] = inst_17374__$1);

(statearr_17463[(14)] = inst_17373);

(statearr_17463[(7)] = inst_17372__$1);

return statearr_17463;
})();
if(cljs.core.truth_(inst_17374__$1)){
var statearr_17468_20048 = state_17434__$1;
(statearr_17468_20048[(1)] = (5));

} else {
var statearr_17469_20049 = state_17434__$1;
(statearr_17469_20049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (15))){
var inst_17393 = (state_17434[(15)]);
var inst_17360 = (state_17434[(16)]);
var inst_17393__$1 = cljs.core.empty_QMARK_(inst_17360);
var state_17434__$1 = (function (){var statearr_17470 = state_17434;
(statearr_17470[(15)] = inst_17393__$1);

return statearr_17470;
})();
if(inst_17393__$1){
var statearr_17471_20050 = state_17434__$1;
(statearr_17471_20050[(1)] = (17));

} else {
var statearr_17472_20052 = state_17434__$1;
(statearr_17472_20052[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (21))){
var inst_17358 = (state_17434[(12)]);
var inst_17355 = inst_17358;
var state_17434__$1 = (function (){var statearr_17475 = state_17434;
(statearr_17475[(9)] = inst_17355);

return statearr_17475;
})();
var statearr_17476_20055 = state_17434__$1;
(statearr_17476_20055[(2)] = null);

(statearr_17476_20055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (13))){
var inst_17386 = (state_17434[(2)]);
var inst_17387 = calc_state();
var inst_17355 = inst_17387;
var state_17434__$1 = (function (){var statearr_17477 = state_17434;
(statearr_17477[(9)] = inst_17355);

(statearr_17477[(17)] = inst_17386);

return statearr_17477;
})();
var statearr_17484_20057 = state_17434__$1;
(statearr_17484_20057[(2)] = null);

(statearr_17484_20057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (22))){
var inst_17417 = (state_17434[(2)]);
var state_17434__$1 = state_17434;
var statearr_17485_20058 = state_17434__$1;
(statearr_17485_20058[(2)] = inst_17417);

(statearr_17485_20058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (6))){
var inst_17373 = (state_17434[(14)]);
var inst_17377 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17373,change);
var state_17434__$1 = state_17434;
var statearr_17488_20060 = state_17434__$1;
(statearr_17488_20060[(2)] = inst_17377);

(statearr_17488_20060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (25))){
var state_17434__$1 = state_17434;
var statearr_17491_20062 = state_17434__$1;
(statearr_17491_20062[(2)] = null);

(statearr_17491_20062[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (17))){
var inst_17361 = (state_17434[(18)]);
var inst_17373 = (state_17434[(14)]);
var inst_17395 = (inst_17361.cljs$core$IFn$_invoke$arity$1 ? inst_17361.cljs$core$IFn$_invoke$arity$1(inst_17373) : inst_17361.call(null, inst_17373));
var inst_17396 = cljs.core.not(inst_17395);
var state_17434__$1 = state_17434;
var statearr_17493_20064 = state_17434__$1;
(statearr_17493_20064[(2)] = inst_17396);

(statearr_17493_20064[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (3))){
var inst_17421 = (state_17434[(2)]);
var state_17434__$1 = state_17434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17434__$1,inst_17421);
} else {
if((state_val_17436 === (12))){
var state_17434__$1 = state_17434;
var statearr_17498_20065 = state_17434__$1;
(statearr_17498_20065[(2)] = null);

(statearr_17498_20065[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (2))){
var inst_17355 = (state_17434[(9)]);
var inst_17358 = (state_17434[(12)]);
var inst_17358__$1 = cljs.core.__destructure_map(inst_17355);
var inst_17360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17358__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17358__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17358__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17434__$1 = (function (){var statearr_17503 = state_17434;
(statearr_17503[(18)] = inst_17361);

(statearr_17503[(12)] = inst_17358__$1);

(statearr_17503[(16)] = inst_17360);

return statearr_17503;
})();
return cljs.core.async.ioc_alts_BANG_(state_17434__$1,(4),inst_17362);
} else {
if((state_val_17436 === (23))){
var inst_17404 = (state_17434[(2)]);
var state_17434__$1 = state_17434;
if(cljs.core.truth_(inst_17404)){
var statearr_17508_20067 = state_17434__$1;
(statearr_17508_20067[(1)] = (24));

} else {
var statearr_17509_20068 = state_17434__$1;
(statearr_17509_20068[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (19))){
var inst_17399 = (state_17434[(2)]);
var state_17434__$1 = state_17434;
var statearr_17513_20069 = state_17434__$1;
(statearr_17513_20069[(2)] = inst_17399);

(statearr_17513_20069[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (11))){
var inst_17373 = (state_17434[(14)]);
var inst_17383 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17373);
var state_17434__$1 = state_17434;
var statearr_17525_20071 = state_17434__$1;
(statearr_17525_20071[(2)] = inst_17383);

(statearr_17525_20071[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (9))){
var inst_17373 = (state_17434[(14)]);
var inst_17390 = (state_17434[(19)]);
var inst_17360 = (state_17434[(16)]);
var inst_17390__$1 = (inst_17360.cljs$core$IFn$_invoke$arity$1 ? inst_17360.cljs$core$IFn$_invoke$arity$1(inst_17373) : inst_17360.call(null, inst_17373));
var state_17434__$1 = (function (){var statearr_17526 = state_17434;
(statearr_17526[(19)] = inst_17390__$1);

return statearr_17526;
})();
if(cljs.core.truth_(inst_17390__$1)){
var statearr_17537_20072 = state_17434__$1;
(statearr_17537_20072[(1)] = (14));

} else {
var statearr_17538_20073 = state_17434__$1;
(statearr_17538_20073[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (5))){
var inst_17374 = (state_17434[(13)]);
var state_17434__$1 = state_17434;
var statearr_17541_20074 = state_17434__$1;
(statearr_17541_20074[(2)] = inst_17374);

(statearr_17541_20074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (14))){
var inst_17390 = (state_17434[(19)]);
var state_17434__$1 = state_17434;
var statearr_17545_20075 = state_17434__$1;
(statearr_17545_20075[(2)] = inst_17390);

(statearr_17545_20075[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (26))){
var inst_17409 = (state_17434[(2)]);
var state_17434__$1 = state_17434;
var statearr_17547_20076 = state_17434__$1;
(statearr_17547_20076[(2)] = inst_17409);

(statearr_17547_20076[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (16))){
var inst_17401 = (state_17434[(2)]);
var state_17434__$1 = state_17434;
if(cljs.core.truth_(inst_17401)){
var statearr_17551_20077 = state_17434__$1;
(statearr_17551_20077[(1)] = (20));

} else {
var statearr_17554_20078 = state_17434__$1;
(statearr_17554_20078[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (10))){
var inst_17419 = (state_17434[(2)]);
var state_17434__$1 = state_17434;
var statearr_17555_20079 = state_17434__$1;
(statearr_17555_20079[(2)] = inst_17419);

(statearr_17555_20079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (18))){
var inst_17393 = (state_17434[(15)]);
var state_17434__$1 = state_17434;
var statearr_17557_20080 = state_17434__$1;
(statearr_17557_20080[(2)] = inst_17393);

(statearr_17557_20080[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (8))){
var inst_17372 = (state_17434[(7)]);
var inst_17381 = (inst_17372 == null);
var state_17434__$1 = state_17434;
if(cljs.core.truth_(inst_17381)){
var statearr_17559_20081 = state_17434__$1;
(statearr_17559_20081[(1)] = (11));

} else {
var statearr_17562_20082 = state_17434__$1;
(statearr_17562_20082[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__13656__auto__ = null;
var cljs$core$async$mix_$_state_machine__13656__auto____0 = (function (){
var statearr_17564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17564[(0)] = cljs$core$async$mix_$_state_machine__13656__auto__);

(statearr_17564[(1)] = (1));

return statearr_17564;
});
var cljs$core$async$mix_$_state_machine__13656__auto____1 = (function (state_17434){
while(true){
var ret_value__13657__auto__ = (function (){try{while(true){
var result__13658__auto__ = switch__13655__auto__(state_17434);
if(cljs.core.keyword_identical_QMARK_(result__13658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13658__auto__;
}
break;
}
}catch (e17568){var ex__13659__auto__ = e17568;
var statearr_17569_20083 = state_17434;
(statearr_17569_20083[(2)] = ex__13659__auto__);


if(cljs.core.seq((state_17434[(4)]))){
var statearr_17570_20084 = state_17434;
(statearr_17570_20084[(1)] = cljs.core.first((state_17434[(4)])));

} else {
throw ex__13659__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20085 = state_17434;
state_17434 = G__20085;
continue;
} else {
return ret_value__13657__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13656__auto__ = function(state_17434){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13656__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13656__auto____1.call(this,state_17434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13656__auto____0;
cljs$core$async$mix_$_state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13656__auto____1;
return cljs$core$async$mix_$_state_machine__13656__auto__;
})()
})();
var state__14773__auto__ = (function (){var statearr_17571 = f__14772__auto__();
(statearr_17571[(6)] = c__14771__auto___20041);

return statearr_17571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14773__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20086 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20086(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20089 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20089(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20093 = (function() {
var G__20094 = null;
var G__20094__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20094__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20094 = function(p,v){
switch(arguments.length){
case 1:
return G__20094__1.call(this,p);
case 2:
return G__20094__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20094.cljs$core$IFn$_invoke$arity$1 = G__20094__1;
G__20094.cljs$core$IFn$_invoke$arity$2 = G__20094__2;
return G__20094;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17636 = arguments.length;
switch (G__17636) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20093(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20093(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17690 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17691){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17691 = meta17691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17692,meta17691__$1){
var self__ = this;
var _17692__$1 = this;
return (new cljs.core.async.t_cljs$core$async17690(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17691__$1));
}));

(cljs.core.async.t_cljs$core$async17690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17692){
var self__ = this;
var _17692__$1 = this;
return self__.meta17691;
}));

(cljs.core.async.t_cljs$core$async17690.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17690.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17690.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17690.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17690.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async17690.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17690.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17690.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17691","meta17691",-410944568,null)], null);
}));

(cljs.core.async.t_cljs$core$async17690.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17690.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17690");

(cljs.core.async.t_cljs$core$async17690.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17690");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17690.
 */
cljs.core.async.__GT_t_cljs$core$async17690 = (function cljs$core$async$__GT_t_cljs$core$async17690(ch,topic_fn,buf_fn,mults,ensure_mult,meta17691){
return (new cljs.core.async.t_cljs$core$async17690(ch,topic_fn,buf_fn,mults,ensure_mult,meta17691));
});


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
var G__17674 = arguments.length;
switch (G__17674) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__17669_SHARP_){
if(cljs.core.truth_((p1__17669_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17669_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17669_SHARP_.call(null, topic)))){
return p1__17669_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17669_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async17690(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14771__auto___20117 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14772__auto__ = (function (){var switch__13655__auto__ = (function (state_17819){
var state_val_17820 = (state_17819[(1)]);
if((state_val_17820 === (7))){
var inst_17815 = (state_17819[(2)]);
var state_17819__$1 = state_17819;
var statearr_17825_20118 = state_17819__$1;
(statearr_17825_20118[(2)] = inst_17815);

(statearr_17825_20118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17820 === (20))){
var state_17819__$1 = state_17819;
var statearr_17827_20119 = state_17819__$1;
(statearr_17827_20119[(2)] = null);

(statearr_17827_20119[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17820 === (1))){
var state_17819__$1 = state_17819;
var statearr_17828_20121 = state_17819__$1;
(statearr_17828_20121[(2)] = null);

(statearr_17828_20121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17820 === (24))){
var inst_17796 = (state_17819[(7)]);
var inst_17805 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17796);
var state_17819__$1 = state_17819;
var statearr_17830_20122 = state_17819__$1;
(statearr_17830_20122[(2)] = inst_17805);

(statearr_17830_20122[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17820 === (4))){
var inst_17746 = (state_17819[(8)]);
var inst_17746__$1 = (state_17819[(2)]);
var inst_17747 = (inst_17746__$1 == null);
var state_17819__$1 = (function (){var statearr_17832 = state_17819;
(statearr_17832[(8)] = inst_17746__$1);

return statearr_17832;
})();
if(cljs.core.truth_(inst_17747)){
var statearr_17839_20123 = state_17819__$1;
(statearr_17839_20123[(1)] = (5));

} else {
var statearr_17840_20124 = state_17819__$1;
(statearr_17840_20124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17820 === (15))){
var inst_17789 = (state_17819[(2)]);
var state_17819__$1 = state_17819;
var statearr_17841_20126 = state_17819__$1;
(statearr_17841_20126[(2)] = inst_17789);

(statearr_17841_20126[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17820 === (21))){
var inst_17810 = (state_17819[(2)]);
var state_17819__$1 = (function (){var statearr_17843 = state_17819;
(statearr_17843[(9)] = inst_17810);

return statearr_17843;
})();
var statearr_17844_20129 = state_17819__$1;
(statearr_17844_20129[(2)] = null);

(statearr_17844_20129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17820 === (13))){
var inst_17771 = (state_17819[(10)]);
var inst_17773 = cljs.core.chunked_seq_QMARK_(inst_17771);
var state_17819__$1 = state_17819;
if(inst_17773){
var statearr_17845_20130 = state_17819__$1;
(statearr_17845_20130[(1)] = (16));

} else {
var statearr_17847_20131 = state_17819__$1;
(statearr_17847_20131[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17820 === (22))){
var inst_17802 = (state_17819[(2)]);
var state_17819__$1 = state_17819;
if(cljs.core.truth_(inst_17802)){
var statearr_17848_20139 = state_17819__$1;
(statearr_17848_20139[(1)] = (23));

} else {
var statearr_17849_20140 = state_17819__$1;
(statearr_17849_20140[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17820 === (6))){
var inst_17798 = (state_17819[(11)]);
var inst_17746 = (state_17819[(8)]);
var inst_17796 = (state_17819[(7)]);
var inst_17796__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17746) : topic_fn.call(null, inst_17746));
var inst_17797 = cljs.core.deref(mults);
var inst_17798__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17797,inst_17796__$1);
var state_17819__$1 = (function (){var statearr_17854 = state_17819;
(statearr_17854[(11)] = inst_17798__$1);

(statearr_17854[(7)] = inst_17796__$1);

return statearr_17854;
})();
if(cljs.core.truth_(inst_17798__$1)){
var statearr_17855_20145 = state_17819__$1;
(statearr_17855_20145[(1)] = (19));

} else {
var statearr_17856_20146 = state_17819__$1;
(statearr_17856_20146[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17820 === (25))){
var inst_17807 = (state_17819[(2)]);
var state_17819__$1 = state_17819;
var statearr_17861_20147 = state_17819__$1;
(statearr_17861_20147[(2)] = inst_17807);

(statearr_17861_20147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17820 === (17))){
var inst_17771 = (state_17819[(10)]);
var inst_17780 = cljs.core.first(inst_17771);
var inst_17781 = cljs.core.async.muxch_STAR_(inst_17780);
var inst_17782 = cljs.core.async.close_BANG_(inst_17781);
var inst_17783 = cljs.core.next(inst_17771);
var inst_17756 = inst_17783;
var inst_17757 = null;
var inst_17758 = (0);
var inst_17759 = (0);
var state_17819__$1 = (function (){var statearr_17874 = state_17819;
(statearr_17874[(12)] = inst_17758);

(statearr_17874[(13)] = inst_17782);

(statearr_17874[(14)] = inst_17757);

(statearr_17874[(15)] = inst_17756);

(statearr_17874[(16)] = inst_17759);

return statearr_17874;
})();
var statearr_17877_20148 = state_17819__$1;
(statearr_17877_20148[(2)] = null);

(statearr_17877_20148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17820 === (3))){
var inst_17817 = (state_17819[(2)]);
var state_17819__$1 = state_17819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17819__$1,inst_17817);
} else {
if((state_val_17820 === (12))){
var inst_17791 = (state_17819[(2)]);
var state_17819__$1 = state_17819;
var statearr_17880_20150 = state_17819__$1;
(statearr_17880_20150[(2)] = inst_17791);

(statearr_17880_20150[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17820 === (2))){
var state_17819__$1 = state_17819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17819__$1,(4),ch);
} else {
if((state_val_17820 === (23))){
var state_17819__$1 = state_17819;
var statearr_17887_20155 = state_17819__$1;
(statearr_17887_20155[(2)] = null);

(statearr_17887_20155[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17820 === (19))){
var inst_17798 = (state_17819[(11)]);
var inst_17746 = (state_17819[(8)]);
var inst_17800 = cljs.core.async.muxch_STAR_(inst_17798);
var state_17819__$1 = state_17819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17819__$1,(22),inst_17800,inst_17746);
} else {
if((state_val_17820 === (11))){
var inst_17771 = (state_17819[(10)]);
var inst_17756 = (state_17819[(15)]);
var inst_17771__$1 = cljs.core.seq(inst_17756);
var state_17819__$1 = (function (){var statearr_17892 = state_17819;
(statearr_17892[(10)] = inst_17771__$1);

return statearr_17892;
})();
if(inst_17771__$1){
var statearr_17896_20160 = state_17819__$1;
(statearr_17896_20160[(1)] = (13));

} else {
var statearr_17897_20161 = state_17819__$1;
(statearr_17897_20161[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17820 === (9))){
var inst_17793 = (state_17819[(2)]);
var state_17819__$1 = state_17819;
var statearr_17903_20164 = state_17819__$1;
(statearr_17903_20164[(2)] = inst_17793);

(statearr_17903_20164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17820 === (5))){
var inst_17753 = cljs.core.deref(mults);
var inst_17754 = cljs.core.vals(inst_17753);
var inst_17755 = cljs.core.seq(inst_17754);
var inst_17756 = inst_17755;
var inst_17757 = null;
var inst_17758 = (0);
var inst_17759 = (0);
var state_17819__$1 = (function (){var statearr_17909 = state_17819;
(statearr_17909[(12)] = inst_17758);

(statearr_17909[(14)] = inst_17757);

(statearr_17909[(15)] = inst_17756);

(statearr_17909[(16)] = inst_17759);

return statearr_17909;
})();
var statearr_17913_20167 = state_17819__$1;
(statearr_17913_20167[(2)] = null);

(statearr_17913_20167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17820 === (14))){
var state_17819__$1 = state_17819;
var statearr_17923_20170 = state_17819__$1;
(statearr_17923_20170[(2)] = null);

(statearr_17923_20170[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17820 === (16))){
var inst_17771 = (state_17819[(10)]);
var inst_17775 = cljs.core.chunk_first(inst_17771);
var inst_17776 = cljs.core.chunk_rest(inst_17771);
var inst_17777 = cljs.core.count(inst_17775);
var inst_17756 = inst_17776;
var inst_17757 = inst_17775;
var inst_17758 = inst_17777;
var inst_17759 = (0);
var state_17819__$1 = (function (){var statearr_17926 = state_17819;
(statearr_17926[(12)] = inst_17758);

(statearr_17926[(14)] = inst_17757);

(statearr_17926[(15)] = inst_17756);

(statearr_17926[(16)] = inst_17759);

return statearr_17926;
})();
var statearr_17931_20172 = state_17819__$1;
(statearr_17931_20172[(2)] = null);

(statearr_17931_20172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17820 === (10))){
var inst_17758 = (state_17819[(12)]);
var inst_17757 = (state_17819[(14)]);
var inst_17756 = (state_17819[(15)]);
var inst_17759 = (state_17819[(16)]);
var inst_17764 = cljs.core._nth(inst_17757,inst_17759);
var inst_17765 = cljs.core.async.muxch_STAR_(inst_17764);
var inst_17766 = cljs.core.async.close_BANG_(inst_17765);
var inst_17768 = (inst_17759 + (1));
var tmp17914 = inst_17758;
var tmp17915 = inst_17757;
var tmp17916 = inst_17756;
var inst_17756__$1 = tmp17916;
var inst_17757__$1 = tmp17915;
var inst_17758__$1 = tmp17914;
var inst_17759__$1 = inst_17768;
var state_17819__$1 = (function (){var statearr_17940 = state_17819;
(statearr_17940[(12)] = inst_17758__$1);

(statearr_17940[(17)] = inst_17766);

(statearr_17940[(14)] = inst_17757__$1);

(statearr_17940[(15)] = inst_17756__$1);

(statearr_17940[(16)] = inst_17759__$1);

return statearr_17940;
})();
var statearr_17947_20179 = state_17819__$1;
(statearr_17947_20179[(2)] = null);

(statearr_17947_20179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17820 === (18))){
var inst_17786 = (state_17819[(2)]);
var state_17819__$1 = state_17819;
var statearr_17950_20180 = state_17819__$1;
(statearr_17950_20180[(2)] = inst_17786);

(statearr_17950_20180[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17820 === (8))){
var inst_17758 = (state_17819[(12)]);
var inst_17759 = (state_17819[(16)]);
var inst_17761 = (inst_17759 < inst_17758);
var inst_17762 = inst_17761;
var state_17819__$1 = state_17819;
if(cljs.core.truth_(inst_17762)){
var statearr_17952_20184 = state_17819__$1;
(statearr_17952_20184[(1)] = (10));

} else {
var statearr_17953_20185 = state_17819__$1;
(statearr_17953_20185[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__13656__auto__ = null;
var cljs$core$async$state_machine__13656__auto____0 = (function (){
var statearr_17961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17961[(0)] = cljs$core$async$state_machine__13656__auto__);

(statearr_17961[(1)] = (1));

return statearr_17961;
});
var cljs$core$async$state_machine__13656__auto____1 = (function (state_17819){
while(true){
var ret_value__13657__auto__ = (function (){try{while(true){
var result__13658__auto__ = switch__13655__auto__(state_17819);
if(cljs.core.keyword_identical_QMARK_(result__13658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13658__auto__;
}
break;
}
}catch (e17965){var ex__13659__auto__ = e17965;
var statearr_17966_20189 = state_17819;
(statearr_17966_20189[(2)] = ex__13659__auto__);


if(cljs.core.seq((state_17819[(4)]))){
var statearr_17967_20191 = state_17819;
(statearr_17967_20191[(1)] = cljs.core.first((state_17819[(4)])));

} else {
throw ex__13659__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20193 = state_17819;
state_17819 = G__20193;
continue;
} else {
return ret_value__13657__auto__;
}
break;
}
});
cljs$core$async$state_machine__13656__auto__ = function(state_17819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13656__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13656__auto____1.call(this,state_17819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13656__auto____0;
cljs$core$async$state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13656__auto____1;
return cljs$core$async$state_machine__13656__auto__;
})()
})();
var state__14773__auto__ = (function (){var statearr_17973 = f__14772__auto__();
(statearr_17973[(6)] = c__14771__auto___20117);

return statearr_17973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14773__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17988 = arguments.length;
switch (G__17988) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18035 = arguments.length;
switch (G__18035) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__18092 = arguments.length;
switch (G__18092) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14771__auto___20217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14772__auto__ = (function (){var switch__13655__auto__ = (function (state_18206){
var state_val_18207 = (state_18206[(1)]);
if((state_val_18207 === (7))){
var state_18206__$1 = state_18206;
var statearr_18209_20218 = state_18206__$1;
(statearr_18209_20218[(2)] = null);

(statearr_18209_20218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (1))){
var state_18206__$1 = state_18206;
var statearr_18210_20219 = state_18206__$1;
(statearr_18210_20219[(2)] = null);

(statearr_18210_20219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (4))){
var inst_18145 = (state_18206[(7)]);
var inst_18147 = (state_18206[(8)]);
var inst_18150 = (inst_18147 < inst_18145);
var state_18206__$1 = state_18206;
if(cljs.core.truth_(inst_18150)){
var statearr_18218_20221 = state_18206__$1;
(statearr_18218_20221[(1)] = (6));

} else {
var statearr_18219_20222 = state_18206__$1;
(statearr_18219_20222[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (15))){
var inst_18179 = (state_18206[(9)]);
var inst_18187 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18179);
var state_18206__$1 = state_18206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18206__$1,(17),out,inst_18187);
} else {
if((state_val_18207 === (13))){
var inst_18179 = (state_18206[(9)]);
var inst_18179__$1 = (state_18206[(2)]);
var inst_18180 = cljs.core.some(cljs.core.nil_QMARK_,inst_18179__$1);
var state_18206__$1 = (function (){var statearr_18221 = state_18206;
(statearr_18221[(9)] = inst_18179__$1);

return statearr_18221;
})();
if(cljs.core.truth_(inst_18180)){
var statearr_18223_20224 = state_18206__$1;
(statearr_18223_20224[(1)] = (14));

} else {
var statearr_18224_20225 = state_18206__$1;
(statearr_18224_20225[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (6))){
var state_18206__$1 = state_18206;
var statearr_18229_20228 = state_18206__$1;
(statearr_18229_20228[(2)] = null);

(statearr_18229_20228[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (17))){
var inst_18189 = (state_18206[(2)]);
var state_18206__$1 = (function (){var statearr_18234 = state_18206;
(statearr_18234[(10)] = inst_18189);

return statearr_18234;
})();
var statearr_18235_20230 = state_18206__$1;
(statearr_18235_20230[(2)] = null);

(statearr_18235_20230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (3))){
var inst_18195 = (state_18206[(2)]);
var state_18206__$1 = state_18206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18206__$1,inst_18195);
} else {
if((state_val_18207 === (12))){
var _ = (function (){var statearr_18236 = state_18206;
(statearr_18236[(4)] = cljs.core.rest((state_18206[(4)])));

return statearr_18236;
})();
var state_18206__$1 = state_18206;
var ex18233 = (state_18206__$1[(2)]);
var statearr_18238_20233 = state_18206__$1;
(statearr_18238_20233[(5)] = ex18233);


if((ex18233 instanceof Object)){
var statearr_18239_20234 = state_18206__$1;
(statearr_18239_20234[(1)] = (11));

(statearr_18239_20234[(5)] = null);

} else {
throw ex18233;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (2))){
var inst_18142 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18145 = cnt;
var inst_18147 = (0);
var state_18206__$1 = (function (){var statearr_18245 = state_18206;
(statearr_18245[(11)] = inst_18142);

(statearr_18245[(7)] = inst_18145);

(statearr_18245[(8)] = inst_18147);

return statearr_18245;
})();
var statearr_18250_20240 = state_18206__$1;
(statearr_18250_20240[(2)] = null);

(statearr_18250_20240[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (11))){
var inst_18158 = (state_18206[(2)]);
var inst_18159 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18206__$1 = (function (){var statearr_18255 = state_18206;
(statearr_18255[(12)] = inst_18158);

return statearr_18255;
})();
var statearr_18256_20241 = state_18206__$1;
(statearr_18256_20241[(2)] = inst_18159);

(statearr_18256_20241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (9))){
var inst_18147 = (state_18206[(8)]);
var _ = (function (){var statearr_18260 = state_18206;
(statearr_18260[(4)] = cljs.core.cons((12),(state_18206[(4)])));

return statearr_18260;
})();
var inst_18165 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18147) : chs__$1.call(null, inst_18147));
var inst_18166 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18147) : done.call(null, inst_18147));
var inst_18167 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18165,inst_18166);
var ___$1 = (function (){var statearr_18261 = state_18206;
(statearr_18261[(4)] = cljs.core.rest((state_18206[(4)])));

return statearr_18261;
})();
var state_18206__$1 = state_18206;
var statearr_18262_20247 = state_18206__$1;
(statearr_18262_20247[(2)] = inst_18167);

(statearr_18262_20247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (5))){
var inst_18177 = (state_18206[(2)]);
var state_18206__$1 = (function (){var statearr_18266 = state_18206;
(statearr_18266[(13)] = inst_18177);

return statearr_18266;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18206__$1,(13),dchan);
} else {
if((state_val_18207 === (14))){
var inst_18183 = cljs.core.async.close_BANG_(out);
var state_18206__$1 = state_18206;
var statearr_18279_20250 = state_18206__$1;
(statearr_18279_20250[(2)] = inst_18183);

(statearr_18279_20250[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (16))){
var inst_18192 = (state_18206[(2)]);
var state_18206__$1 = state_18206;
var statearr_18281_20251 = state_18206__$1;
(statearr_18281_20251[(2)] = inst_18192);

(statearr_18281_20251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (10))){
var inst_18147 = (state_18206[(8)]);
var inst_18170 = (state_18206[(2)]);
var inst_18171 = (inst_18147 + (1));
var inst_18147__$1 = inst_18171;
var state_18206__$1 = (function (){var statearr_18282 = state_18206;
(statearr_18282[(14)] = inst_18170);

(statearr_18282[(8)] = inst_18147__$1);

return statearr_18282;
})();
var statearr_18283_20252 = state_18206__$1;
(statearr_18283_20252[(2)] = null);

(statearr_18283_20252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (8))){
var inst_18175 = (state_18206[(2)]);
var state_18206__$1 = state_18206;
var statearr_18285_20253 = state_18206__$1;
(statearr_18285_20253[(2)] = inst_18175);

(statearr_18285_20253[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__13656__auto__ = null;
var cljs$core$async$state_machine__13656__auto____0 = (function (){
var statearr_18286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18286[(0)] = cljs$core$async$state_machine__13656__auto__);

(statearr_18286[(1)] = (1));

return statearr_18286;
});
var cljs$core$async$state_machine__13656__auto____1 = (function (state_18206){
while(true){
var ret_value__13657__auto__ = (function (){try{while(true){
var result__13658__auto__ = switch__13655__auto__(state_18206);
if(cljs.core.keyword_identical_QMARK_(result__13658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13658__auto__;
}
break;
}
}catch (e18288){var ex__13659__auto__ = e18288;
var statearr_18289_20256 = state_18206;
(statearr_18289_20256[(2)] = ex__13659__auto__);


if(cljs.core.seq((state_18206[(4)]))){
var statearr_18290_20257 = state_18206;
(statearr_18290_20257[(1)] = cljs.core.first((state_18206[(4)])));

} else {
throw ex__13659__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20258 = state_18206;
state_18206 = G__20258;
continue;
} else {
return ret_value__13657__auto__;
}
break;
}
});
cljs$core$async$state_machine__13656__auto__ = function(state_18206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13656__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13656__auto____1.call(this,state_18206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13656__auto____0;
cljs$core$async$state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13656__auto____1;
return cljs$core$async$state_machine__13656__auto__;
})()
})();
var state__14773__auto__ = (function (){var statearr_18292 = f__14772__auto__();
(statearr_18292[(6)] = c__14771__auto___20217);

return statearr_18292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14773__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18296 = arguments.length;
switch (G__18296) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14771__auto___20262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14772__auto__ = (function (){var switch__13655__auto__ = (function (state_18338){
var state_val_18339 = (state_18338[(1)]);
if((state_val_18339 === (7))){
var inst_18312 = (state_18338[(7)]);
var inst_18313 = (state_18338[(8)]);
var inst_18312__$1 = (state_18338[(2)]);
var inst_18313__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18312__$1,(0),null);
var inst_18315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18312__$1,(1),null);
var inst_18316 = (inst_18313__$1 == null);
var state_18338__$1 = (function (){var statearr_18342 = state_18338;
(statearr_18342[(9)] = inst_18315);

(statearr_18342[(7)] = inst_18312__$1);

(statearr_18342[(8)] = inst_18313__$1);

return statearr_18342;
})();
if(cljs.core.truth_(inst_18316)){
var statearr_18343_20267 = state_18338__$1;
(statearr_18343_20267[(1)] = (8));

} else {
var statearr_18344_20269 = state_18338__$1;
(statearr_18344_20269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18339 === (1))){
var inst_18302 = cljs.core.vec(chs);
var inst_18303 = inst_18302;
var state_18338__$1 = (function (){var statearr_18345 = state_18338;
(statearr_18345[(10)] = inst_18303);

return statearr_18345;
})();
var statearr_18350_20273 = state_18338__$1;
(statearr_18350_20273[(2)] = null);

(statearr_18350_20273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18339 === (4))){
var inst_18303 = (state_18338[(10)]);
var state_18338__$1 = state_18338;
return cljs.core.async.ioc_alts_BANG_(state_18338__$1,(7),inst_18303);
} else {
if((state_val_18339 === (6))){
var inst_18334 = (state_18338[(2)]);
var state_18338__$1 = state_18338;
var statearr_18355_20276 = state_18338__$1;
(statearr_18355_20276[(2)] = inst_18334);

(statearr_18355_20276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18339 === (3))){
var inst_18336 = (state_18338[(2)]);
var state_18338__$1 = state_18338;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18338__$1,inst_18336);
} else {
if((state_val_18339 === (2))){
var inst_18303 = (state_18338[(10)]);
var inst_18305 = cljs.core.count(inst_18303);
var inst_18306 = (inst_18305 > (0));
var state_18338__$1 = state_18338;
if(cljs.core.truth_(inst_18306)){
var statearr_18361_20279 = state_18338__$1;
(statearr_18361_20279[(1)] = (4));

} else {
var statearr_18362_20282 = state_18338__$1;
(statearr_18362_20282[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18339 === (11))){
var inst_18303 = (state_18338[(10)]);
var inst_18324 = (state_18338[(2)]);
var tmp18356 = inst_18303;
var inst_18303__$1 = tmp18356;
var state_18338__$1 = (function (){var statearr_18366 = state_18338;
(statearr_18366[(11)] = inst_18324);

(statearr_18366[(10)] = inst_18303__$1);

return statearr_18366;
})();
var statearr_18367_20283 = state_18338__$1;
(statearr_18367_20283[(2)] = null);

(statearr_18367_20283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18339 === (9))){
var inst_18313 = (state_18338[(8)]);
var state_18338__$1 = state_18338;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18338__$1,(11),out,inst_18313);
} else {
if((state_val_18339 === (5))){
var inst_18332 = cljs.core.async.close_BANG_(out);
var state_18338__$1 = state_18338;
var statearr_18368_20286 = state_18338__$1;
(statearr_18368_20286[(2)] = inst_18332);

(statearr_18368_20286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18339 === (10))){
var inst_18327 = (state_18338[(2)]);
var state_18338__$1 = state_18338;
var statearr_18369_20289 = state_18338__$1;
(statearr_18369_20289[(2)] = inst_18327);

(statearr_18369_20289[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18339 === (8))){
var inst_18315 = (state_18338[(9)]);
var inst_18312 = (state_18338[(7)]);
var inst_18303 = (state_18338[(10)]);
var inst_18313 = (state_18338[(8)]);
var inst_18319 = (function (){var cs = inst_18303;
var vec__18308 = inst_18312;
var v = inst_18313;
var c = inst_18315;
return (function (p1__18293_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18293_SHARP_);
});
})();
var inst_18320 = cljs.core.filterv(inst_18319,inst_18303);
var inst_18303__$1 = inst_18320;
var state_18338__$1 = (function (){var statearr_18373 = state_18338;
(statearr_18373[(10)] = inst_18303__$1);

return statearr_18373;
})();
var statearr_18375_20295 = state_18338__$1;
(statearr_18375_20295[(2)] = null);

(statearr_18375_20295[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__13656__auto__ = null;
var cljs$core$async$state_machine__13656__auto____0 = (function (){
var statearr_18383 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18383[(0)] = cljs$core$async$state_machine__13656__auto__);

(statearr_18383[(1)] = (1));

return statearr_18383;
});
var cljs$core$async$state_machine__13656__auto____1 = (function (state_18338){
while(true){
var ret_value__13657__auto__ = (function (){try{while(true){
var result__13658__auto__ = switch__13655__auto__(state_18338);
if(cljs.core.keyword_identical_QMARK_(result__13658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13658__auto__;
}
break;
}
}catch (e18384){var ex__13659__auto__ = e18384;
var statearr_18385_20300 = state_18338;
(statearr_18385_20300[(2)] = ex__13659__auto__);


if(cljs.core.seq((state_18338[(4)]))){
var statearr_18389_20302 = state_18338;
(statearr_18389_20302[(1)] = cljs.core.first((state_18338[(4)])));

} else {
throw ex__13659__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20305 = state_18338;
state_18338 = G__20305;
continue;
} else {
return ret_value__13657__auto__;
}
break;
}
});
cljs$core$async$state_machine__13656__auto__ = function(state_18338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13656__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13656__auto____1.call(this,state_18338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13656__auto____0;
cljs$core$async$state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13656__auto____1;
return cljs$core$async$state_machine__13656__auto__;
})()
})();
var state__14773__auto__ = (function (){var statearr_18393 = f__14772__auto__();
(statearr_18393[(6)] = c__14771__auto___20262);

return statearr_18393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14773__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__18398 = arguments.length;
switch (G__18398) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14771__auto___20307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14772__auto__ = (function (){var switch__13655__auto__ = (function (state_18424){
var state_val_18425 = (state_18424[(1)]);
if((state_val_18425 === (7))){
var inst_18406 = (state_18424[(7)]);
var inst_18406__$1 = (state_18424[(2)]);
var inst_18407 = (inst_18406__$1 == null);
var inst_18408 = cljs.core.not(inst_18407);
var state_18424__$1 = (function (){var statearr_18426 = state_18424;
(statearr_18426[(7)] = inst_18406__$1);

return statearr_18426;
})();
if(inst_18408){
var statearr_18428_20310 = state_18424__$1;
(statearr_18428_20310[(1)] = (8));

} else {
var statearr_18429_20311 = state_18424__$1;
(statearr_18429_20311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18425 === (1))){
var inst_18401 = (0);
var state_18424__$1 = (function (){var statearr_18430 = state_18424;
(statearr_18430[(8)] = inst_18401);

return statearr_18430;
})();
var statearr_18434_20314 = state_18424__$1;
(statearr_18434_20314[(2)] = null);

(statearr_18434_20314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18425 === (4))){
var state_18424__$1 = state_18424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18424__$1,(7),ch);
} else {
if((state_val_18425 === (6))){
var inst_18419 = (state_18424[(2)]);
var state_18424__$1 = state_18424;
var statearr_18435_20316 = state_18424__$1;
(statearr_18435_20316[(2)] = inst_18419);

(statearr_18435_20316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18425 === (3))){
var inst_18421 = (state_18424[(2)]);
var inst_18422 = cljs.core.async.close_BANG_(out);
var state_18424__$1 = (function (){var statearr_18436 = state_18424;
(statearr_18436[(9)] = inst_18421);

return statearr_18436;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18424__$1,inst_18422);
} else {
if((state_val_18425 === (2))){
var inst_18401 = (state_18424[(8)]);
var inst_18403 = (inst_18401 < n);
var state_18424__$1 = state_18424;
if(cljs.core.truth_(inst_18403)){
var statearr_18437_20319 = state_18424__$1;
(statearr_18437_20319[(1)] = (4));

} else {
var statearr_18438_20320 = state_18424__$1;
(statearr_18438_20320[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18425 === (11))){
var inst_18401 = (state_18424[(8)]);
var inst_18411 = (state_18424[(2)]);
var inst_18412 = (inst_18401 + (1));
var inst_18401__$1 = inst_18412;
var state_18424__$1 = (function (){var statearr_18442 = state_18424;
(statearr_18442[(10)] = inst_18411);

(statearr_18442[(8)] = inst_18401__$1);

return statearr_18442;
})();
var statearr_18443_20322 = state_18424__$1;
(statearr_18443_20322[(2)] = null);

(statearr_18443_20322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18425 === (9))){
var state_18424__$1 = state_18424;
var statearr_18449_20323 = state_18424__$1;
(statearr_18449_20323[(2)] = null);

(statearr_18449_20323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18425 === (5))){
var state_18424__$1 = state_18424;
var statearr_18450_20324 = state_18424__$1;
(statearr_18450_20324[(2)] = null);

(statearr_18450_20324[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18425 === (10))){
var inst_18416 = (state_18424[(2)]);
var state_18424__$1 = state_18424;
var statearr_18451_20326 = state_18424__$1;
(statearr_18451_20326[(2)] = inst_18416);

(statearr_18451_20326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18425 === (8))){
var inst_18406 = (state_18424[(7)]);
var state_18424__$1 = state_18424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18424__$1,(11),out,inst_18406);
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
});
return (function() {
var cljs$core$async$state_machine__13656__auto__ = null;
var cljs$core$async$state_machine__13656__auto____0 = (function (){
var statearr_18453 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18453[(0)] = cljs$core$async$state_machine__13656__auto__);

(statearr_18453[(1)] = (1));

return statearr_18453;
});
var cljs$core$async$state_machine__13656__auto____1 = (function (state_18424){
while(true){
var ret_value__13657__auto__ = (function (){try{while(true){
var result__13658__auto__ = switch__13655__auto__(state_18424);
if(cljs.core.keyword_identical_QMARK_(result__13658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13658__auto__;
}
break;
}
}catch (e18454){var ex__13659__auto__ = e18454;
var statearr_18455_20328 = state_18424;
(statearr_18455_20328[(2)] = ex__13659__auto__);


if(cljs.core.seq((state_18424[(4)]))){
var statearr_18456_20329 = state_18424;
(statearr_18456_20329[(1)] = cljs.core.first((state_18424[(4)])));

} else {
throw ex__13659__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20335 = state_18424;
state_18424 = G__20335;
continue;
} else {
return ret_value__13657__auto__;
}
break;
}
});
cljs$core$async$state_machine__13656__auto__ = function(state_18424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13656__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13656__auto____1.call(this,state_18424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13656__auto____0;
cljs$core$async$state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13656__auto____1;
return cljs$core$async$state_machine__13656__auto__;
})()
})();
var state__14773__auto__ = (function (){var statearr_18457 = f__14772__auto__();
(statearr_18457[(6)] = c__14771__auto___20307);

return statearr_18457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14773__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18478 = (function (f,ch,meta18467,_,fn1,meta18479){
this.f = f;
this.ch = ch;
this.meta18467 = meta18467;
this._ = _;
this.fn1 = fn1;
this.meta18479 = meta18479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18480,meta18479__$1){
var self__ = this;
var _18480__$1 = this;
return (new cljs.core.async.t_cljs$core$async18478(self__.f,self__.ch,self__.meta18467,self__._,self__.fn1,meta18479__$1));
}));

(cljs.core.async.t_cljs$core$async18478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18480){
var self__ = this;
var _18480__$1 = this;
return self__.meta18479;
}));

(cljs.core.async.t_cljs$core$async18478.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18478.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18478.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18478.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18465_SHARP_){
var G__18484 = (((p1__18465_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18465_SHARP_) : self__.f.call(null, p1__18465_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18484) : f1.call(null, G__18484));
});
}));

(cljs.core.async.t_cljs$core$async18478.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18467","meta18467",981671108,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18466","cljs.core.async/t_cljs$core$async18466",-1464111815,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18479","meta18479",1996311556,null)], null);
}));

(cljs.core.async.t_cljs$core$async18478.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18478.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18478");

(cljs.core.async.t_cljs$core$async18478.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18478");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18478.
 */
cljs.core.async.__GT_t_cljs$core$async18478 = (function cljs$core$async$__GT_t_cljs$core$async18478(f,ch,meta18467,_,fn1,meta18479){
return (new cljs.core.async.t_cljs$core$async18478(f,ch,meta18467,_,fn1,meta18479));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18466 = (function (f,ch,meta18467){
this.f = f;
this.ch = ch;
this.meta18467 = meta18467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18468,meta18467__$1){
var self__ = this;
var _18468__$1 = this;
return (new cljs.core.async.t_cljs$core$async18466(self__.f,self__.ch,meta18467__$1));
}));

(cljs.core.async.t_cljs$core$async18466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18468){
var self__ = this;
var _18468__$1 = this;
return self__.meta18467;
}));

(cljs.core.async.t_cljs$core$async18466.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18466.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18466.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18466.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18466.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async18478(self__.f,self__.ch,self__.meta18467,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18490 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18490) : self__.f.call(null, G__18490));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18466.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18466.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18467","meta18467",981671108,null)], null);
}));

(cljs.core.async.t_cljs$core$async18466.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18466");

(cljs.core.async.t_cljs$core$async18466.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18466");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18466.
 */
cljs.core.async.__GT_t_cljs$core$async18466 = (function cljs$core$async$__GT_t_cljs$core$async18466(f,ch,meta18467){
return (new cljs.core.async.t_cljs$core$async18466(f,ch,meta18467));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18466(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18495 = (function (f,ch,meta18496){
this.f = f;
this.ch = ch;
this.meta18496 = meta18496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18497,meta18496__$1){
var self__ = this;
var _18497__$1 = this;
return (new cljs.core.async.t_cljs$core$async18495(self__.f,self__.ch,meta18496__$1));
}));

(cljs.core.async.t_cljs$core$async18495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18497){
var self__ = this;
var _18497__$1 = this;
return self__.meta18496;
}));

(cljs.core.async.t_cljs$core$async18495.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18495.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18495.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18495.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18495.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18495.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18495.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18496","meta18496",663815227,null)], null);
}));

(cljs.core.async.t_cljs$core$async18495.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18495.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18495");

(cljs.core.async.t_cljs$core$async18495.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18495");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18495.
 */
cljs.core.async.__GT_t_cljs$core$async18495 = (function cljs$core$async$__GT_t_cljs$core$async18495(f,ch,meta18496){
return (new cljs.core.async.t_cljs$core$async18495(f,ch,meta18496));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18495(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18525 = (function (p,ch,meta18526){
this.p = p;
this.ch = ch;
this.meta18526 = meta18526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18527,meta18526__$1){
var self__ = this;
var _18527__$1 = this;
return (new cljs.core.async.t_cljs$core$async18525(self__.p,self__.ch,meta18526__$1));
}));

(cljs.core.async.t_cljs$core$async18525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18527){
var self__ = this;
var _18527__$1 = this;
return self__.meta18526;
}));

(cljs.core.async.t_cljs$core$async18525.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18525.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18525.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18525.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18525.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18525.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18525.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18525.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18526","meta18526",850726928,null)], null);
}));

(cljs.core.async.t_cljs$core$async18525.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18525.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18525");

(cljs.core.async.t_cljs$core$async18525.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18525");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18525.
 */
cljs.core.async.__GT_t_cljs$core$async18525 = (function cljs$core$async$__GT_t_cljs$core$async18525(p,ch,meta18526){
return (new cljs.core.async.t_cljs$core$async18525(p,ch,meta18526));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async18525(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__18573 = arguments.length;
switch (G__18573) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14771__auto___20354 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14772__auto__ = (function (){var switch__13655__auto__ = (function (state_18607){
var state_val_18608 = (state_18607[(1)]);
if((state_val_18608 === (7))){
var inst_18603 = (state_18607[(2)]);
var state_18607__$1 = state_18607;
var statearr_18615_20357 = state_18607__$1;
(statearr_18615_20357[(2)] = inst_18603);

(statearr_18615_20357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18608 === (1))){
var state_18607__$1 = state_18607;
var statearr_18616_20358 = state_18607__$1;
(statearr_18616_20358[(2)] = null);

(statearr_18616_20358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18608 === (4))){
var inst_18589 = (state_18607[(7)]);
var inst_18589__$1 = (state_18607[(2)]);
var inst_18590 = (inst_18589__$1 == null);
var state_18607__$1 = (function (){var statearr_18617 = state_18607;
(statearr_18617[(7)] = inst_18589__$1);

return statearr_18617;
})();
if(cljs.core.truth_(inst_18590)){
var statearr_18618_20359 = state_18607__$1;
(statearr_18618_20359[(1)] = (5));

} else {
var statearr_18619_20360 = state_18607__$1;
(statearr_18619_20360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18608 === (6))){
var inst_18589 = (state_18607[(7)]);
var inst_18594 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18589) : p.call(null, inst_18589));
var state_18607__$1 = state_18607;
if(cljs.core.truth_(inst_18594)){
var statearr_18620_20362 = state_18607__$1;
(statearr_18620_20362[(1)] = (8));

} else {
var statearr_18621_20363 = state_18607__$1;
(statearr_18621_20363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18608 === (3))){
var inst_18605 = (state_18607[(2)]);
var state_18607__$1 = state_18607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18607__$1,inst_18605);
} else {
if((state_val_18608 === (2))){
var state_18607__$1 = state_18607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18607__$1,(4),ch);
} else {
if((state_val_18608 === (11))){
var inst_18597 = (state_18607[(2)]);
var state_18607__$1 = state_18607;
var statearr_18622_20364 = state_18607__$1;
(statearr_18622_20364[(2)] = inst_18597);

(statearr_18622_20364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18608 === (9))){
var state_18607__$1 = state_18607;
var statearr_18623_20365 = state_18607__$1;
(statearr_18623_20365[(2)] = null);

(statearr_18623_20365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18608 === (5))){
var inst_18592 = cljs.core.async.close_BANG_(out);
var state_18607__$1 = state_18607;
var statearr_18624_20366 = state_18607__$1;
(statearr_18624_20366[(2)] = inst_18592);

(statearr_18624_20366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18608 === (10))){
var inst_18600 = (state_18607[(2)]);
var state_18607__$1 = (function (){var statearr_18628 = state_18607;
(statearr_18628[(8)] = inst_18600);

return statearr_18628;
})();
var statearr_18629_20367 = state_18607__$1;
(statearr_18629_20367[(2)] = null);

(statearr_18629_20367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18608 === (8))){
var inst_18589 = (state_18607[(7)]);
var state_18607__$1 = state_18607;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18607__$1,(11),out,inst_18589);
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
});
return (function() {
var cljs$core$async$state_machine__13656__auto__ = null;
var cljs$core$async$state_machine__13656__auto____0 = (function (){
var statearr_18630 = [null,null,null,null,null,null,null,null,null];
(statearr_18630[(0)] = cljs$core$async$state_machine__13656__auto__);

(statearr_18630[(1)] = (1));

return statearr_18630;
});
var cljs$core$async$state_machine__13656__auto____1 = (function (state_18607){
while(true){
var ret_value__13657__auto__ = (function (){try{while(true){
var result__13658__auto__ = switch__13655__auto__(state_18607);
if(cljs.core.keyword_identical_QMARK_(result__13658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13658__auto__;
}
break;
}
}catch (e18631){var ex__13659__auto__ = e18631;
var statearr_18632_20373 = state_18607;
(statearr_18632_20373[(2)] = ex__13659__auto__);


if(cljs.core.seq((state_18607[(4)]))){
var statearr_18635_20374 = state_18607;
(statearr_18635_20374[(1)] = cljs.core.first((state_18607[(4)])));

} else {
throw ex__13659__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20376 = state_18607;
state_18607 = G__20376;
continue;
} else {
return ret_value__13657__auto__;
}
break;
}
});
cljs$core$async$state_machine__13656__auto__ = function(state_18607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13656__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13656__auto____1.call(this,state_18607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13656__auto____0;
cljs$core$async$state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13656__auto____1;
return cljs$core$async$state_machine__13656__auto__;
})()
})();
var state__14773__auto__ = (function (){var statearr_18636 = f__14772__auto__();
(statearr_18636[(6)] = c__14771__auto___20354);

return statearr_18636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14773__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18645 = arguments.length;
switch (G__18645) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14771__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14772__auto__ = (function (){var switch__13655__auto__ = (function (state_18716){
var state_val_18717 = (state_18716[(1)]);
if((state_val_18717 === (7))){
var inst_18710 = (state_18716[(2)]);
var state_18716__$1 = state_18716;
var statearr_18727_20378 = state_18716__$1;
(statearr_18727_20378[(2)] = inst_18710);

(statearr_18727_20378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18717 === (20))){
var inst_18679 = (state_18716[(7)]);
var inst_18691 = (state_18716[(2)]);
var inst_18692 = cljs.core.next(inst_18679);
var inst_18664 = inst_18692;
var inst_18665 = null;
var inst_18666 = (0);
var inst_18667 = (0);
var state_18716__$1 = (function (){var statearr_18728 = state_18716;
(statearr_18728[(8)] = inst_18666);

(statearr_18728[(9)] = inst_18664);

(statearr_18728[(10)] = inst_18691);

(statearr_18728[(11)] = inst_18667);

(statearr_18728[(12)] = inst_18665);

return statearr_18728;
})();
var statearr_18729_20379 = state_18716__$1;
(statearr_18729_20379[(2)] = null);

(statearr_18729_20379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18717 === (1))){
var state_18716__$1 = state_18716;
var statearr_18730_20380 = state_18716__$1;
(statearr_18730_20380[(2)] = null);

(statearr_18730_20380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18717 === (4))){
var inst_18650 = (state_18716[(13)]);
var inst_18650__$1 = (state_18716[(2)]);
var inst_18651 = (inst_18650__$1 == null);
var state_18716__$1 = (function (){var statearr_18735 = state_18716;
(statearr_18735[(13)] = inst_18650__$1);

return statearr_18735;
})();
if(cljs.core.truth_(inst_18651)){
var statearr_18736_20381 = state_18716__$1;
(statearr_18736_20381[(1)] = (5));

} else {
var statearr_18739_20382 = state_18716__$1;
(statearr_18739_20382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18717 === (15))){
var state_18716__$1 = state_18716;
var statearr_18749_20383 = state_18716__$1;
(statearr_18749_20383[(2)] = null);

(statearr_18749_20383[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18717 === (21))){
var state_18716__$1 = state_18716;
var statearr_18760_20384 = state_18716__$1;
(statearr_18760_20384[(2)] = null);

(statearr_18760_20384[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18717 === (13))){
var inst_18666 = (state_18716[(8)]);
var inst_18664 = (state_18716[(9)]);
var inst_18667 = (state_18716[(11)]);
var inst_18665 = (state_18716[(12)]);
var inst_18674 = (state_18716[(2)]);
var inst_18675 = (inst_18667 + (1));
var tmp18744 = inst_18666;
var tmp18745 = inst_18664;
var tmp18746 = inst_18665;
var inst_18664__$1 = tmp18745;
var inst_18665__$1 = tmp18746;
var inst_18666__$1 = tmp18744;
var inst_18667__$1 = inst_18675;
var state_18716__$1 = (function (){var statearr_18762 = state_18716;
(statearr_18762[(14)] = inst_18674);

(statearr_18762[(8)] = inst_18666__$1);

(statearr_18762[(9)] = inst_18664__$1);

(statearr_18762[(11)] = inst_18667__$1);

(statearr_18762[(12)] = inst_18665__$1);

return statearr_18762;
})();
var statearr_18763_20392 = state_18716__$1;
(statearr_18763_20392[(2)] = null);

(statearr_18763_20392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18717 === (22))){
var state_18716__$1 = state_18716;
var statearr_18769_20393 = state_18716__$1;
(statearr_18769_20393[(2)] = null);

(statearr_18769_20393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18717 === (6))){
var inst_18650 = (state_18716[(13)]);
var inst_18661 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18650) : f.call(null, inst_18650));
var inst_18663 = cljs.core.seq(inst_18661);
var inst_18664 = inst_18663;
var inst_18665 = null;
var inst_18666 = (0);
var inst_18667 = (0);
var state_18716__$1 = (function (){var statearr_18771 = state_18716;
(statearr_18771[(8)] = inst_18666);

(statearr_18771[(9)] = inst_18664);

(statearr_18771[(11)] = inst_18667);

(statearr_18771[(12)] = inst_18665);

return statearr_18771;
})();
var statearr_18772_20394 = state_18716__$1;
(statearr_18772_20394[(2)] = null);

(statearr_18772_20394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18717 === (17))){
var inst_18679 = (state_18716[(7)]);
var inst_18683 = cljs.core.chunk_first(inst_18679);
var inst_18684 = cljs.core.chunk_rest(inst_18679);
var inst_18685 = cljs.core.count(inst_18683);
var inst_18664 = inst_18684;
var inst_18665 = inst_18683;
var inst_18666 = inst_18685;
var inst_18667 = (0);
var state_18716__$1 = (function (){var statearr_18778 = state_18716;
(statearr_18778[(8)] = inst_18666);

(statearr_18778[(9)] = inst_18664);

(statearr_18778[(11)] = inst_18667);

(statearr_18778[(12)] = inst_18665);

return statearr_18778;
})();
var statearr_18779_20397 = state_18716__$1;
(statearr_18779_20397[(2)] = null);

(statearr_18779_20397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18717 === (3))){
var inst_18713 = (state_18716[(2)]);
var state_18716__$1 = state_18716;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18716__$1,inst_18713);
} else {
if((state_val_18717 === (12))){
var inst_18700 = (state_18716[(2)]);
var state_18716__$1 = state_18716;
var statearr_18783_20398 = state_18716__$1;
(statearr_18783_20398[(2)] = inst_18700);

(statearr_18783_20398[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18717 === (2))){
var state_18716__$1 = state_18716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18716__$1,(4),in$);
} else {
if((state_val_18717 === (23))){
var inst_18708 = (state_18716[(2)]);
var state_18716__$1 = state_18716;
var statearr_18784_20399 = state_18716__$1;
(statearr_18784_20399[(2)] = inst_18708);

(statearr_18784_20399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18717 === (19))){
var inst_18695 = (state_18716[(2)]);
var state_18716__$1 = state_18716;
var statearr_18785_20400 = state_18716__$1;
(statearr_18785_20400[(2)] = inst_18695);

(statearr_18785_20400[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18717 === (11))){
var inst_18664 = (state_18716[(9)]);
var inst_18679 = (state_18716[(7)]);
var inst_18679__$1 = cljs.core.seq(inst_18664);
var state_18716__$1 = (function (){var statearr_18799 = state_18716;
(statearr_18799[(7)] = inst_18679__$1);

return statearr_18799;
})();
if(inst_18679__$1){
var statearr_18804_20401 = state_18716__$1;
(statearr_18804_20401[(1)] = (14));

} else {
var statearr_18805_20402 = state_18716__$1;
(statearr_18805_20402[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18717 === (9))){
var inst_18702 = (state_18716[(2)]);
var inst_18703 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18716__$1 = (function (){var statearr_18807 = state_18716;
(statearr_18807[(15)] = inst_18702);

return statearr_18807;
})();
if(cljs.core.truth_(inst_18703)){
var statearr_18808_20406 = state_18716__$1;
(statearr_18808_20406[(1)] = (21));

} else {
var statearr_18816_20411 = state_18716__$1;
(statearr_18816_20411[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18717 === (5))){
var inst_18653 = cljs.core.async.close_BANG_(out);
var state_18716__$1 = state_18716;
var statearr_18823_20415 = state_18716__$1;
(statearr_18823_20415[(2)] = inst_18653);

(statearr_18823_20415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18717 === (14))){
var inst_18679 = (state_18716[(7)]);
var inst_18681 = cljs.core.chunked_seq_QMARK_(inst_18679);
var state_18716__$1 = state_18716;
if(inst_18681){
var statearr_18831_20416 = state_18716__$1;
(statearr_18831_20416[(1)] = (17));

} else {
var statearr_18839_20417 = state_18716__$1;
(statearr_18839_20417[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18717 === (16))){
var inst_18698 = (state_18716[(2)]);
var state_18716__$1 = state_18716;
var statearr_18844_20418 = state_18716__$1;
(statearr_18844_20418[(2)] = inst_18698);

(statearr_18844_20418[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18717 === (10))){
var inst_18667 = (state_18716[(11)]);
var inst_18665 = (state_18716[(12)]);
var inst_18672 = cljs.core._nth(inst_18665,inst_18667);
var state_18716__$1 = state_18716;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18716__$1,(13),out,inst_18672);
} else {
if((state_val_18717 === (18))){
var inst_18679 = (state_18716[(7)]);
var inst_18688 = cljs.core.first(inst_18679);
var state_18716__$1 = state_18716;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18716__$1,(20),out,inst_18688);
} else {
if((state_val_18717 === (8))){
var inst_18666 = (state_18716[(8)]);
var inst_18667 = (state_18716[(11)]);
var inst_18669 = (inst_18667 < inst_18666);
var inst_18670 = inst_18669;
var state_18716__$1 = state_18716;
if(cljs.core.truth_(inst_18670)){
var statearr_18879_20420 = state_18716__$1;
(statearr_18879_20420[(1)] = (10));

} else {
var statearr_18880_20421 = state_18716__$1;
(statearr_18880_20421[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13656__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13656__auto____0 = (function (){
var statearr_18899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18899[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13656__auto__);

(statearr_18899[(1)] = (1));

return statearr_18899;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13656__auto____1 = (function (state_18716){
while(true){
var ret_value__13657__auto__ = (function (){try{while(true){
var result__13658__auto__ = switch__13655__auto__(state_18716);
if(cljs.core.keyword_identical_QMARK_(result__13658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13658__auto__;
}
break;
}
}catch (e18909){var ex__13659__auto__ = e18909;
var statearr_18911_20423 = state_18716;
(statearr_18911_20423[(2)] = ex__13659__auto__);


if(cljs.core.seq((state_18716[(4)]))){
var statearr_18913_20424 = state_18716;
(statearr_18913_20424[(1)] = cljs.core.first((state_18716[(4)])));

} else {
throw ex__13659__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20426 = state_18716;
state_18716 = G__20426;
continue;
} else {
return ret_value__13657__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13656__auto__ = function(state_18716){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13656__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13656__auto____1.call(this,state_18716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13656__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13656__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13656__auto__;
})()
})();
var state__14773__auto__ = (function (){var statearr_18920 = f__14772__auto__();
(statearr_18920[(6)] = c__14771__auto__);

return statearr_18920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14773__auto__);
}));

return c__14771__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18928 = arguments.length;
switch (G__18928) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18944 = arguments.length;
switch (G__18944) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18959 = arguments.length;
switch (G__18959) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14771__auto___20440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14772__auto__ = (function (){var switch__13655__auto__ = (function (state_18986){
var state_val_18987 = (state_18986[(1)]);
if((state_val_18987 === (7))){
var inst_18980 = (state_18986[(2)]);
var state_18986__$1 = state_18986;
var statearr_19002_20441 = state_18986__$1;
(statearr_19002_20441[(2)] = inst_18980);

(statearr_19002_20441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18987 === (1))){
var inst_18961 = null;
var state_18986__$1 = (function (){var statearr_19003 = state_18986;
(statearr_19003[(7)] = inst_18961);

return statearr_19003;
})();
var statearr_19004_20442 = state_18986__$1;
(statearr_19004_20442[(2)] = null);

(statearr_19004_20442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18987 === (4))){
var inst_18964 = (state_18986[(8)]);
var inst_18964__$1 = (state_18986[(2)]);
var inst_18965 = (inst_18964__$1 == null);
var inst_18966 = cljs.core.not(inst_18965);
var state_18986__$1 = (function (){var statearr_19013 = state_18986;
(statearr_19013[(8)] = inst_18964__$1);

return statearr_19013;
})();
if(inst_18966){
var statearr_19015_20443 = state_18986__$1;
(statearr_19015_20443[(1)] = (5));

} else {
var statearr_19017_20445 = state_18986__$1;
(statearr_19017_20445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18987 === (6))){
var state_18986__$1 = state_18986;
var statearr_19022_20446 = state_18986__$1;
(statearr_19022_20446[(2)] = null);

(statearr_19022_20446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18987 === (3))){
var inst_18982 = (state_18986[(2)]);
var inst_18983 = cljs.core.async.close_BANG_(out);
var state_18986__$1 = (function (){var statearr_19030 = state_18986;
(statearr_19030[(9)] = inst_18982);

return statearr_19030;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18986__$1,inst_18983);
} else {
if((state_val_18987 === (2))){
var state_18986__$1 = state_18986;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18986__$1,(4),ch);
} else {
if((state_val_18987 === (11))){
var inst_18964 = (state_18986[(8)]);
var inst_18974 = (state_18986[(2)]);
var inst_18961 = inst_18964;
var state_18986__$1 = (function (){var statearr_19038 = state_18986;
(statearr_19038[(10)] = inst_18974);

(statearr_19038[(7)] = inst_18961);

return statearr_19038;
})();
var statearr_19041_20447 = state_18986__$1;
(statearr_19041_20447[(2)] = null);

(statearr_19041_20447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18987 === (9))){
var inst_18964 = (state_18986[(8)]);
var state_18986__$1 = state_18986;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18986__$1,(11),out,inst_18964);
} else {
if((state_val_18987 === (5))){
var inst_18964 = (state_18986[(8)]);
var inst_18961 = (state_18986[(7)]);
var inst_18968 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18964,inst_18961);
var state_18986__$1 = state_18986;
if(inst_18968){
var statearr_19066_20448 = state_18986__$1;
(statearr_19066_20448[(1)] = (8));

} else {
var statearr_19067_20449 = state_18986__$1;
(statearr_19067_20449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18987 === (10))){
var inst_18977 = (state_18986[(2)]);
var state_18986__$1 = state_18986;
var statearr_19072_20451 = state_18986__$1;
(statearr_19072_20451[(2)] = inst_18977);

(statearr_19072_20451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18987 === (8))){
var inst_18961 = (state_18986[(7)]);
var tmp19054 = inst_18961;
var inst_18961__$1 = tmp19054;
var state_18986__$1 = (function (){var statearr_19086 = state_18986;
(statearr_19086[(7)] = inst_18961__$1);

return statearr_19086;
})();
var statearr_19087_20452 = state_18986__$1;
(statearr_19087_20452[(2)] = null);

(statearr_19087_20452[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__13656__auto__ = null;
var cljs$core$async$state_machine__13656__auto____0 = (function (){
var statearr_19093 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19093[(0)] = cljs$core$async$state_machine__13656__auto__);

(statearr_19093[(1)] = (1));

return statearr_19093;
});
var cljs$core$async$state_machine__13656__auto____1 = (function (state_18986){
while(true){
var ret_value__13657__auto__ = (function (){try{while(true){
var result__13658__auto__ = switch__13655__auto__(state_18986);
if(cljs.core.keyword_identical_QMARK_(result__13658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13658__auto__;
}
break;
}
}catch (e19099){var ex__13659__auto__ = e19099;
var statearr_19100_20453 = state_18986;
(statearr_19100_20453[(2)] = ex__13659__auto__);


if(cljs.core.seq((state_18986[(4)]))){
var statearr_19102_20455 = state_18986;
(statearr_19102_20455[(1)] = cljs.core.first((state_18986[(4)])));

} else {
throw ex__13659__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20461 = state_18986;
state_18986 = G__20461;
continue;
} else {
return ret_value__13657__auto__;
}
break;
}
});
cljs$core$async$state_machine__13656__auto__ = function(state_18986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13656__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13656__auto____1.call(this,state_18986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13656__auto____0;
cljs$core$async$state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13656__auto____1;
return cljs$core$async$state_machine__13656__auto__;
})()
})();
var state__14773__auto__ = (function (){var statearr_19117 = f__14772__auto__();
(statearr_19117[(6)] = c__14771__auto___20440);

return statearr_19117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14773__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19126 = arguments.length;
switch (G__19126) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14771__auto___20468 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14772__auto__ = (function (){var switch__13655__auto__ = (function (state_19225){
var state_val_19226 = (state_19225[(1)]);
if((state_val_19226 === (7))){
var inst_19208 = (state_19225[(2)]);
var state_19225__$1 = state_19225;
var statearr_19233_20471 = state_19225__$1;
(statearr_19233_20471[(2)] = inst_19208);

(statearr_19233_20471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19226 === (1))){
var inst_19156 = (new Array(n));
var inst_19157 = inst_19156;
var inst_19158 = (0);
var state_19225__$1 = (function (){var statearr_19242 = state_19225;
(statearr_19242[(7)] = inst_19157);

(statearr_19242[(8)] = inst_19158);

return statearr_19242;
})();
var statearr_19245_20472 = state_19225__$1;
(statearr_19245_20472[(2)] = null);

(statearr_19245_20472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19226 === (4))){
var inst_19162 = (state_19225[(9)]);
var inst_19162__$1 = (state_19225[(2)]);
var inst_19164 = (inst_19162__$1 == null);
var inst_19165 = cljs.core.not(inst_19164);
var state_19225__$1 = (function (){var statearr_19258 = state_19225;
(statearr_19258[(9)] = inst_19162__$1);

return statearr_19258;
})();
if(inst_19165){
var statearr_19260_20474 = state_19225__$1;
(statearr_19260_20474[(1)] = (5));

} else {
var statearr_19261_20475 = state_19225__$1;
(statearr_19261_20475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19226 === (15))){
var inst_19201 = (state_19225[(2)]);
var state_19225__$1 = state_19225;
var statearr_19262_20476 = state_19225__$1;
(statearr_19262_20476[(2)] = inst_19201);

(statearr_19262_20476[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19226 === (13))){
var state_19225__$1 = state_19225;
var statearr_19263_20477 = state_19225__$1;
(statearr_19263_20477[(2)] = null);

(statearr_19263_20477[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19226 === (6))){
var inst_19158 = (state_19225[(8)]);
var inst_19193 = (inst_19158 > (0));
var state_19225__$1 = state_19225;
if(cljs.core.truth_(inst_19193)){
var statearr_19268_20478 = state_19225__$1;
(statearr_19268_20478[(1)] = (12));

} else {
var statearr_19269_20479 = state_19225__$1;
(statearr_19269_20479[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19226 === (3))){
var inst_19211 = (state_19225[(2)]);
var state_19225__$1 = state_19225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19225__$1,inst_19211);
} else {
if((state_val_19226 === (12))){
var inst_19157 = (state_19225[(7)]);
var inst_19199 = cljs.core.vec(inst_19157);
var state_19225__$1 = state_19225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19225__$1,(15),out,inst_19199);
} else {
if((state_val_19226 === (2))){
var state_19225__$1 = state_19225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19225__$1,(4),ch);
} else {
if((state_val_19226 === (11))){
var inst_19187 = (state_19225[(2)]);
var inst_19188 = (new Array(n));
var inst_19157 = inst_19188;
var inst_19158 = (0);
var state_19225__$1 = (function (){var statearr_19276 = state_19225;
(statearr_19276[(7)] = inst_19157);

(statearr_19276[(10)] = inst_19187);

(statearr_19276[(8)] = inst_19158);

return statearr_19276;
})();
var statearr_19277_20483 = state_19225__$1;
(statearr_19277_20483[(2)] = null);

(statearr_19277_20483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19226 === (9))){
var inst_19157 = (state_19225[(7)]);
var inst_19185 = cljs.core.vec(inst_19157);
var state_19225__$1 = state_19225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19225__$1,(11),out,inst_19185);
} else {
if((state_val_19226 === (5))){
var inst_19162 = (state_19225[(9)]);
var inst_19157 = (state_19225[(7)]);
var inst_19172 = (state_19225[(11)]);
var inst_19158 = (state_19225[(8)]);
var inst_19167 = (inst_19157[inst_19158] = inst_19162);
var inst_19172__$1 = (inst_19158 + (1));
var inst_19180 = (inst_19172__$1 < n);
var state_19225__$1 = (function (){var statearr_19281 = state_19225;
(statearr_19281[(12)] = inst_19167);

(statearr_19281[(11)] = inst_19172__$1);

return statearr_19281;
})();
if(cljs.core.truth_(inst_19180)){
var statearr_19285_20487 = state_19225__$1;
(statearr_19285_20487[(1)] = (8));

} else {
var statearr_19286_20488 = state_19225__$1;
(statearr_19286_20488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19226 === (14))){
var inst_19204 = (state_19225[(2)]);
var inst_19206 = cljs.core.async.close_BANG_(out);
var state_19225__$1 = (function (){var statearr_19295 = state_19225;
(statearr_19295[(13)] = inst_19204);

return statearr_19295;
})();
var statearr_19296_20489 = state_19225__$1;
(statearr_19296_20489[(2)] = inst_19206);

(statearr_19296_20489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19226 === (10))){
var inst_19191 = (state_19225[(2)]);
var state_19225__$1 = state_19225;
var statearr_19298_20491 = state_19225__$1;
(statearr_19298_20491[(2)] = inst_19191);

(statearr_19298_20491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19226 === (8))){
var inst_19157 = (state_19225[(7)]);
var inst_19172 = (state_19225[(11)]);
var tmp19293 = inst_19157;
var inst_19157__$1 = tmp19293;
var inst_19158 = inst_19172;
var state_19225__$1 = (function (){var statearr_19300 = state_19225;
(statearr_19300[(7)] = inst_19157__$1);

(statearr_19300[(8)] = inst_19158);

return statearr_19300;
})();
var statearr_19302_20492 = state_19225__$1;
(statearr_19302_20492[(2)] = null);

(statearr_19302_20492[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__13656__auto__ = null;
var cljs$core$async$state_machine__13656__auto____0 = (function (){
var statearr_19307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19307[(0)] = cljs$core$async$state_machine__13656__auto__);

(statearr_19307[(1)] = (1));

return statearr_19307;
});
var cljs$core$async$state_machine__13656__auto____1 = (function (state_19225){
while(true){
var ret_value__13657__auto__ = (function (){try{while(true){
var result__13658__auto__ = switch__13655__auto__(state_19225);
if(cljs.core.keyword_identical_QMARK_(result__13658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13658__auto__;
}
break;
}
}catch (e19312){var ex__13659__auto__ = e19312;
var statearr_19313_20494 = state_19225;
(statearr_19313_20494[(2)] = ex__13659__auto__);


if(cljs.core.seq((state_19225[(4)]))){
var statearr_19314_20495 = state_19225;
(statearr_19314_20495[(1)] = cljs.core.first((state_19225[(4)])));

} else {
throw ex__13659__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20496 = state_19225;
state_19225 = G__20496;
continue;
} else {
return ret_value__13657__auto__;
}
break;
}
});
cljs$core$async$state_machine__13656__auto__ = function(state_19225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13656__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13656__auto____1.call(this,state_19225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13656__auto____0;
cljs$core$async$state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13656__auto____1;
return cljs$core$async$state_machine__13656__auto__;
})()
})();
var state__14773__auto__ = (function (){var statearr_19315 = f__14772__auto__();
(statearr_19315[(6)] = c__14771__auto___20468);

return statearr_19315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14773__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19331 = arguments.length;
switch (G__19331) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14771__auto___20507 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14772__auto__ = (function (){var switch__13655__auto__ = (function (state_19387){
var state_val_19389 = (state_19387[(1)]);
if((state_val_19389 === (7))){
var inst_19382 = (state_19387[(2)]);
var state_19387__$1 = state_19387;
var statearr_19390_20508 = state_19387__$1;
(statearr_19390_20508[(2)] = inst_19382);

(statearr_19390_20508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (1))){
var inst_19339 = [];
var inst_19340 = inst_19339;
var inst_19341 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19387__$1 = (function (){var statearr_19393 = state_19387;
(statearr_19393[(7)] = inst_19340);

(statearr_19393[(8)] = inst_19341);

return statearr_19393;
})();
var statearr_19394_20511 = state_19387__$1;
(statearr_19394_20511[(2)] = null);

(statearr_19394_20511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (4))){
var inst_19344 = (state_19387[(9)]);
var inst_19344__$1 = (state_19387[(2)]);
var inst_19345 = (inst_19344__$1 == null);
var inst_19346 = cljs.core.not(inst_19345);
var state_19387__$1 = (function (){var statearr_19396 = state_19387;
(statearr_19396[(9)] = inst_19344__$1);

return statearr_19396;
})();
if(inst_19346){
var statearr_19397_20512 = state_19387__$1;
(statearr_19397_20512[(1)] = (5));

} else {
var statearr_19398_20517 = state_19387__$1;
(statearr_19398_20517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (15))){
var inst_19340 = (state_19387[(7)]);
var inst_19374 = cljs.core.vec(inst_19340);
var state_19387__$1 = state_19387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19387__$1,(18),out,inst_19374);
} else {
if((state_val_19389 === (13))){
var inst_19366 = (state_19387[(2)]);
var state_19387__$1 = state_19387;
var statearr_19407_20519 = state_19387__$1;
(statearr_19407_20519[(2)] = inst_19366);

(statearr_19407_20519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (6))){
var inst_19340 = (state_19387[(7)]);
var inst_19371 = inst_19340.length;
var inst_19372 = (inst_19371 > (0));
var state_19387__$1 = state_19387;
if(cljs.core.truth_(inst_19372)){
var statearr_19408_20522 = state_19387__$1;
(statearr_19408_20522[(1)] = (15));

} else {
var statearr_19409_20523 = state_19387__$1;
(statearr_19409_20523[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (17))){
var inst_19379 = (state_19387[(2)]);
var inst_19380 = cljs.core.async.close_BANG_(out);
var state_19387__$1 = (function (){var statearr_19410 = state_19387;
(statearr_19410[(10)] = inst_19379);

return statearr_19410;
})();
var statearr_19411_20524 = state_19387__$1;
(statearr_19411_20524[(2)] = inst_19380);

(statearr_19411_20524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (3))){
var inst_19384 = (state_19387[(2)]);
var state_19387__$1 = state_19387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19387__$1,inst_19384);
} else {
if((state_val_19389 === (12))){
var inst_19340 = (state_19387[(7)]);
var inst_19359 = cljs.core.vec(inst_19340);
var state_19387__$1 = state_19387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19387__$1,(14),out,inst_19359);
} else {
if((state_val_19389 === (2))){
var state_19387__$1 = state_19387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19387__$1,(4),ch);
} else {
if((state_val_19389 === (11))){
var inst_19348 = (state_19387[(11)]);
var inst_19340 = (state_19387[(7)]);
var inst_19344 = (state_19387[(9)]);
var inst_19356 = inst_19340.push(inst_19344);
var tmp19413 = inst_19340;
var inst_19340__$1 = tmp19413;
var inst_19341 = inst_19348;
var state_19387__$1 = (function (){var statearr_19418 = state_19387;
(statearr_19418[(7)] = inst_19340__$1);

(statearr_19418[(8)] = inst_19341);

(statearr_19418[(12)] = inst_19356);

return statearr_19418;
})();
var statearr_19421_20530 = state_19387__$1;
(statearr_19421_20530[(2)] = null);

(statearr_19421_20530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (9))){
var inst_19341 = (state_19387[(8)]);
var inst_19352 = cljs.core.keyword_identical_QMARK_(inst_19341,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19387__$1 = state_19387;
var statearr_19423_20532 = state_19387__$1;
(statearr_19423_20532[(2)] = inst_19352);

(statearr_19423_20532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (5))){
var inst_19348 = (state_19387[(11)]);
var inst_19341 = (state_19387[(8)]);
var inst_19349 = (state_19387[(13)]);
var inst_19344 = (state_19387[(9)]);
var inst_19348__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19344) : f.call(null, inst_19344));
var inst_19349__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19348__$1,inst_19341);
var state_19387__$1 = (function (){var statearr_19424 = state_19387;
(statearr_19424[(11)] = inst_19348__$1);

(statearr_19424[(13)] = inst_19349__$1);

return statearr_19424;
})();
if(inst_19349__$1){
var statearr_19425_20535 = state_19387__$1;
(statearr_19425_20535[(1)] = (8));

} else {
var statearr_19426_20536 = state_19387__$1;
(statearr_19426_20536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (14))){
var inst_19348 = (state_19387[(11)]);
var inst_19344 = (state_19387[(9)]);
var inst_19361 = (state_19387[(2)]);
var inst_19362 = [];
var inst_19363 = inst_19362.push(inst_19344);
var inst_19340 = inst_19362;
var inst_19341 = inst_19348;
var state_19387__$1 = (function (){var statearr_19427 = state_19387;
(statearr_19427[(14)] = inst_19361);

(statearr_19427[(7)] = inst_19340);

(statearr_19427[(8)] = inst_19341);

(statearr_19427[(15)] = inst_19363);

return statearr_19427;
})();
var statearr_19428_20544 = state_19387__$1;
(statearr_19428_20544[(2)] = null);

(statearr_19428_20544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (16))){
var state_19387__$1 = state_19387;
var statearr_19433_20545 = state_19387__$1;
(statearr_19433_20545[(2)] = null);

(statearr_19433_20545[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (10))){
var inst_19354 = (state_19387[(2)]);
var state_19387__$1 = state_19387;
if(cljs.core.truth_(inst_19354)){
var statearr_19435_20546 = state_19387__$1;
(statearr_19435_20546[(1)] = (11));

} else {
var statearr_19436_20547 = state_19387__$1;
(statearr_19436_20547[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (18))){
var inst_19376 = (state_19387[(2)]);
var state_19387__$1 = state_19387;
var statearr_19437_20548 = state_19387__$1;
(statearr_19437_20548[(2)] = inst_19376);

(statearr_19437_20548[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (8))){
var inst_19349 = (state_19387[(13)]);
var state_19387__$1 = state_19387;
var statearr_19441_20549 = state_19387__$1;
(statearr_19441_20549[(2)] = inst_19349);

(statearr_19441_20549[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__13656__auto__ = null;
var cljs$core$async$state_machine__13656__auto____0 = (function (){
var statearr_19443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19443[(0)] = cljs$core$async$state_machine__13656__auto__);

(statearr_19443[(1)] = (1));

return statearr_19443;
});
var cljs$core$async$state_machine__13656__auto____1 = (function (state_19387){
while(true){
var ret_value__13657__auto__ = (function (){try{while(true){
var result__13658__auto__ = switch__13655__auto__(state_19387);
if(cljs.core.keyword_identical_QMARK_(result__13658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13658__auto__;
}
break;
}
}catch (e19444){var ex__13659__auto__ = e19444;
var statearr_19447_20551 = state_19387;
(statearr_19447_20551[(2)] = ex__13659__auto__);


if(cljs.core.seq((state_19387[(4)]))){
var statearr_19448_20553 = state_19387;
(statearr_19448_20553[(1)] = cljs.core.first((state_19387[(4)])));

} else {
throw ex__13659__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20555 = state_19387;
state_19387 = G__20555;
continue;
} else {
return ret_value__13657__auto__;
}
break;
}
});
cljs$core$async$state_machine__13656__auto__ = function(state_19387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13656__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13656__auto____1.call(this,state_19387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13656__auto____0;
cljs$core$async$state_machine__13656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13656__auto____1;
return cljs$core$async$state_machine__13656__auto__;
})()
})();
var state__14773__auto__ = (function (){var statearr_19452 = f__14772__auto__();
(statearr_19452[(6)] = c__14771__auto___20507);

return statearr_19452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14773__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
