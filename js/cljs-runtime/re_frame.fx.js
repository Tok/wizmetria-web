goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null, re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__22234 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__22235 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__22235);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___22443 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___22443)){
var new_db_22444 = temp__5804__auto___22443;
var fexpr__22242_22445 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__22242_22445.cljs$core$IFn$_invoke$arity$1 ? fexpr__22242_22445.cljs$core$IFn$_invoke$arity$1(new_db_22444) : fexpr__22242_22445.call(null, new_db_22444));
} else {
}

var seq__22244 = cljs.core.seq(effects_without_db);
var chunk__22245 = null;
var count__22246 = (0);
var i__22247 = (0);
while(true){
if((i__22247 < count__22246)){
var vec__22267 = chunk__22245.cljs$core$IIndexed$_nth$arity$2(null, i__22247);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22267,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22267,(1),null);
var temp__5802__auto___22446 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22446)){
var effect_fn_22447 = temp__5802__auto___22446;
(effect_fn_22447.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22447.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22447.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__22448 = seq__22244;
var G__22449 = chunk__22245;
var G__22450 = count__22246;
var G__22451 = (i__22247 + (1));
seq__22244 = G__22448;
chunk__22245 = G__22449;
count__22246 = G__22450;
i__22247 = G__22451;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22244);
if(temp__5804__auto__){
var seq__22244__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22244__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22244__$1);
var G__22453 = cljs.core.chunk_rest(seq__22244__$1);
var G__22454 = c__5525__auto__;
var G__22455 = cljs.core.count(c__5525__auto__);
var G__22456 = (0);
seq__22244 = G__22453;
chunk__22245 = G__22454;
count__22246 = G__22455;
i__22247 = G__22456;
continue;
} else {
var vec__22275 = cljs.core.first(seq__22244__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22275,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22275,(1),null);
var temp__5802__auto___22460 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22460)){
var effect_fn_22462 = temp__5802__auto___22460;
(effect_fn_22462.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22462.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22462.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__22465 = cljs.core.next(seq__22244__$1);
var G__22466 = null;
var G__22467 = (0);
var G__22468 = (0);
seq__22244 = G__22465;
chunk__22245 = G__22466;
count__22246 = G__22467;
i__22247 = G__22468;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__21307__auto___22470 = re_frame.interop.now();
var duration__21308__auto___22471 = (end__21307__auto___22470 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__21308__auto___22471,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__21307__auto___22470);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__22234);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___22479 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___22479)){
var new_db_22480 = temp__5804__auto___22479;
var fexpr__22278_22481 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__22278_22481.cljs$core$IFn$_invoke$arity$1 ? fexpr__22278_22481.cljs$core$IFn$_invoke$arity$1(new_db_22480) : fexpr__22278_22481.call(null, new_db_22480));
} else {
}

var seq__22280 = cljs.core.seq(effects_without_db);
var chunk__22281 = null;
var count__22282 = (0);
var i__22283 = (0);
while(true){
if((i__22283 < count__22282)){
var vec__22300 = chunk__22281.cljs$core$IIndexed$_nth$arity$2(null, i__22283);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22300,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22300,(1),null);
var temp__5802__auto___22484 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22484)){
var effect_fn_22486 = temp__5802__auto___22484;
(effect_fn_22486.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22486.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22486.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__22488 = seq__22280;
var G__22489 = chunk__22281;
var G__22490 = count__22282;
var G__22491 = (i__22283 + (1));
seq__22280 = G__22488;
chunk__22281 = G__22489;
count__22282 = G__22490;
i__22283 = G__22491;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22280);
if(temp__5804__auto__){
var seq__22280__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22280__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22280__$1);
var G__22493 = cljs.core.chunk_rest(seq__22280__$1);
var G__22494 = c__5525__auto__;
var G__22495 = cljs.core.count(c__5525__auto__);
var G__22496 = (0);
seq__22280 = G__22493;
chunk__22281 = G__22494;
count__22282 = G__22495;
i__22283 = G__22496;
continue;
} else {
var vec__22311 = cljs.core.first(seq__22280__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22311,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22311,(1),null);
var temp__5802__auto___22497 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22497)){
var effect_fn_22498 = temp__5802__auto___22497;
(effect_fn_22498.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22498.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22498.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__22501 = cljs.core.next(seq__22280__$1);
var G__22502 = null;
var G__22503 = (0);
var G__22504 = (0);
seq__22280 = G__22501;
chunk__22281 = G__22502;
count__22282 = G__22503;
i__22283 = G__22504;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__22332){
var map__22337 = p__22332;
var map__22337__$1 = cljs.core.__destructure_map(map__22337);
var effect = map__22337__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22337__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22337__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__22350 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__22351 = null;
var count__22352 = (0);
var i__22353 = (0);
while(true){
if((i__22353 < count__22352)){
var effect = chunk__22351.cljs$core$IIndexed$_nth$arity$2(null, i__22353);
re_frame.fx.dispatch_later(effect);


var G__22510 = seq__22350;
var G__22511 = chunk__22351;
var G__22512 = count__22352;
var G__22513 = (i__22353 + (1));
seq__22350 = G__22510;
chunk__22351 = G__22511;
count__22352 = G__22512;
i__22353 = G__22513;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22350);
if(temp__5804__auto__){
var seq__22350__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22350__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22350__$1);
var G__22514 = cljs.core.chunk_rest(seq__22350__$1);
var G__22515 = c__5525__auto__;
var G__22516 = cljs.core.count(c__5525__auto__);
var G__22517 = (0);
seq__22350 = G__22514;
chunk__22351 = G__22515;
count__22352 = G__22516;
i__22353 = G__22517;
continue;
} else {
var effect = cljs.core.first(seq__22350__$1);
re_frame.fx.dispatch_later(effect);


var G__22518 = cljs.core.next(seq__22350__$1);
var G__22519 = null;
var G__22520 = (0);
var G__22521 = (0);
seq__22350 = G__22518;
chunk__22351 = G__22519;
count__22352 = G__22520;
i__22353 = G__22521;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__22372 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__22373 = null;
var count__22374 = (0);
var i__22375 = (0);
while(true){
if((i__22375 < count__22374)){
var vec__22390 = chunk__22373.cljs$core$IIndexed$_nth$arity$2(null, i__22375);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22390,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22390,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___22523 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22523)){
var effect_fn_22524 = temp__5802__auto___22523;
(effect_fn_22524.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22524.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22524.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__22526 = seq__22372;
var G__22527 = chunk__22373;
var G__22528 = count__22374;
var G__22529 = (i__22375 + (1));
seq__22372 = G__22526;
chunk__22373 = G__22527;
count__22374 = G__22528;
i__22375 = G__22529;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22372);
if(temp__5804__auto__){
var seq__22372__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22372__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22372__$1);
var G__22535 = cljs.core.chunk_rest(seq__22372__$1);
var G__22536 = c__5525__auto__;
var G__22537 = cljs.core.count(c__5525__auto__);
var G__22538 = (0);
seq__22372 = G__22535;
chunk__22373 = G__22536;
count__22374 = G__22537;
i__22375 = G__22538;
continue;
} else {
var vec__22401 = cljs.core.first(seq__22372__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22401,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22401,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___22539 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22539)){
var effect_fn_22540 = temp__5802__auto___22539;
(effect_fn_22540.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22540.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22540.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__22541 = cljs.core.next(seq__22372__$1);
var G__22542 = null;
var G__22543 = (0);
var G__22544 = (0);
seq__22372 = G__22541;
chunk__22373 = G__22542;
count__22374 = G__22543;
i__22375 = G__22544;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__22413 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__22415 = null;
var count__22416 = (0);
var i__22417 = (0);
while(true){
if((i__22417 < count__22416)){
var event = chunk__22415.cljs$core$IIndexed$_nth$arity$2(null, i__22417);
re_frame.router.dispatch(event);


var G__22548 = seq__22413;
var G__22549 = chunk__22415;
var G__22550 = count__22416;
var G__22551 = (i__22417 + (1));
seq__22413 = G__22548;
chunk__22415 = G__22549;
count__22416 = G__22550;
i__22417 = G__22551;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22413);
if(temp__5804__auto__){
var seq__22413__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22413__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22413__$1);
var G__22552 = cljs.core.chunk_rest(seq__22413__$1);
var G__22553 = c__5525__auto__;
var G__22554 = cljs.core.count(c__5525__auto__);
var G__22555 = (0);
seq__22413 = G__22552;
chunk__22415 = G__22553;
count__22416 = G__22554;
i__22417 = G__22555;
continue;
} else {
var event = cljs.core.first(seq__22413__$1);
re_frame.router.dispatch(event);


var G__22556 = cljs.core.next(seq__22413__$1);
var G__22557 = null;
var G__22558 = (0);
var G__22559 = (0);
seq__22413 = G__22556;
chunk__22415 = G__22557;
count__22416 = G__22558;
i__22417 = G__22559;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__22429 = cljs.core.seq(value);
var chunk__22430 = null;
var count__22431 = (0);
var i__22432 = (0);
while(true){
if((i__22432 < count__22431)){
var event = chunk__22430.cljs$core$IIndexed$_nth$arity$2(null, i__22432);
clear_event(event);


var G__22561 = seq__22429;
var G__22562 = chunk__22430;
var G__22563 = count__22431;
var G__22564 = (i__22432 + (1));
seq__22429 = G__22561;
chunk__22430 = G__22562;
count__22431 = G__22563;
i__22432 = G__22564;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22429);
if(temp__5804__auto__){
var seq__22429__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22429__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22429__$1);
var G__22567 = cljs.core.chunk_rest(seq__22429__$1);
var G__22568 = c__5525__auto__;
var G__22569 = cljs.core.count(c__5525__auto__);
var G__22570 = (0);
seq__22429 = G__22567;
chunk__22430 = G__22568;
count__22431 = G__22569;
i__22432 = G__22570;
continue;
} else {
var event = cljs.core.first(seq__22429__$1);
clear_event(event);


var G__22571 = cljs.core.next(seq__22429__$1);
var G__22572 = null;
var G__22573 = (0);
var G__22574 = (0);
seq__22429 = G__22571;
chunk__22430 = G__22572;
count__22431 = G__22573;
i__22432 = G__22574;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
