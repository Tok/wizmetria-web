goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__21341){
var map__21342 = p__21341;
var map__21342__$1 = cljs.core.__destructure_map(map__21342);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21342__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21342__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21342__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21342__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5002__auto__ = child_of;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__21347_21434 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__21348_21435 = null;
var count__21349_21436 = (0);
var i__21350_21437 = (0);
while(true){
if((i__21350_21437 < count__21349_21436)){
var vec__21372_21438 = chunk__21348_21435.cljs$core$IIndexed$_nth$arity$2(null, i__21350_21437);
var k_21439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21372_21438,(0),null);
var cb_21440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21372_21438,(1),null);
try{var G__21382_21442 = cljs.core.deref(re_frame.trace.traces);
(cb_21440.cljs$core$IFn$_invoke$arity$1 ? cb_21440.cljs$core$IFn$_invoke$arity$1(G__21382_21442) : cb_21440.call(null, G__21382_21442));
}catch (e21377){var e_21443 = e21377;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_21439,"while storing",cljs.core.deref(re_frame.trace.traces),e_21443], 0));
}

var G__21445 = seq__21347_21434;
var G__21446 = chunk__21348_21435;
var G__21447 = count__21349_21436;
var G__21448 = (i__21350_21437 + (1));
seq__21347_21434 = G__21445;
chunk__21348_21435 = G__21446;
count__21349_21436 = G__21447;
i__21350_21437 = G__21448;
continue;
} else {
var temp__5804__auto___21449 = cljs.core.seq(seq__21347_21434);
if(temp__5804__auto___21449){
var seq__21347_21450__$1 = temp__5804__auto___21449;
if(cljs.core.chunked_seq_QMARK_(seq__21347_21450__$1)){
var c__5525__auto___21451 = cljs.core.chunk_first(seq__21347_21450__$1);
var G__21452 = cljs.core.chunk_rest(seq__21347_21450__$1);
var G__21453 = c__5525__auto___21451;
var G__21454 = cljs.core.count(c__5525__auto___21451);
var G__21455 = (0);
seq__21347_21434 = G__21452;
chunk__21348_21435 = G__21453;
count__21349_21436 = G__21454;
i__21350_21437 = G__21455;
continue;
} else {
var vec__21390_21456 = cljs.core.first(seq__21347_21450__$1);
var k_21457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21390_21456,(0),null);
var cb_21458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21390_21456,(1),null);
try{var G__21396_21459 = cljs.core.deref(re_frame.trace.traces);
(cb_21458.cljs$core$IFn$_invoke$arity$1 ? cb_21458.cljs$core$IFn$_invoke$arity$1(G__21396_21459) : cb_21458.call(null, G__21396_21459));
}catch (e21395){var e_21460 = e21395;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_21457,"while storing",cljs.core.deref(re_frame.trace.traces),e_21460], 0));
}

var G__21465 = cljs.core.next(seq__21347_21450__$1);
var G__21466 = null;
var G__21467 = (0);
var G__21468 = (0);
seq__21347_21434 = G__21465;
chunk__21348_21435 = G__21466;
count__21349_21436 = G__21467;
i__21350_21437 = G__21468;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null, ));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
