goog.provide('wizmetria_web.views.error');
/**
 * Display an error message with recovery options
 */
wizmetria_web.views.error.error_message = (function wizmetria_web$views$error$error_message(p__12854){
var map__12855 = p__12854;
var map__12855__$1 = cljs.core.__destructure_map(map__12855);
var error_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12855__$1,new cljs.core.Keyword(null,"error-message","error-message",1756021561));
var details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12855__$1,new cljs.core.Keyword(null,"details","details",1956795411));
var retry_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12855__$1,new cljs.core.Keyword(null,"retry-fn","retry-fn",2112998225));
var dismiss_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12855__$1,new cljs.core.Keyword(null,"dismiss-fn","dismiss-fn",63925212));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-red-900.border-l-4.border-red-500.text-white.p-4.mb-6.rounded-lg.shadow-lg","div.bg-red-900.border-l-4.border-red-500.text-white.p-4.mb-6.rounded-lg.shadow-lg",-1171074756),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"alert"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-shrink-0.mr-2","div.flex-shrink-0.mr-2",-1838455400),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.h-5.w-5.fill-current.text-red-300","svg.h-5.w-5.fill-current.text-red-300",274079977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.font-bold.text-lg","p.font-bold.text-lg",152583052),"Error"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-red-200","p.text-red-200",-766047344),error_message], null),(cljs.core.truth_(details)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-red-300.text-sm.mt-1","p.text-red-300.text-sm.mt-1",-175648689),details], null):null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-3.flex.justify-end.space-x-2","div.mt-3.flex.justify-end.space-x-2",-2069292468),(cljs.core.truth_(retry_fn)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.bg-red-600.hover:bg-red-700.text-white.font-bold.py-1.px-3.rounded.text-sm","button.bg-red-600.hover:bg-red-700.text-white.font-bold.py-1.px-3.rounded.text-sm",-1899871525),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),retry_fn], null),"Try Again"], null):null),(cljs.core.truth_(dismiss_fn)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.bg-gray-700.hover:bg-gray-800.text-white.font-bold.py-1.px-3.rounded.text-sm","button.bg-gray-700.hover:bg-gray-800.text-white.font-bold.py-1.px-3.rounded.text-sm",-1349362631),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),dismiss_fn], null),"Dismiss"], null):null)], null)], null);
});
/**
 * Error component specifically for processing errors with retry capability
 */
wizmetria_web.views.error.processing_error = (function wizmetria_web$views$error$processing_error(){
var processing_state = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processing-state","processing-state",-162524375)], null)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(processing_state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.views.error.error_message,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(processing_state);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "An unknown error occurred during processing";
}
})(),new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(processing_state),new cljs.core.Keyword(null,"retry-fn","retry-fn",2112998225),(function (){
var temp__5804__auto__ = new cljs.core.Keyword(null,"file-obj","file-obj",-1013340987).cljs$core$IFn$_invoke$arity$1(processing_state);
if(cljs.core.truth_(temp__5804__auto__)){
var file = temp__5804__auto__;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-file","process-file",335835811),file], null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"dismiss-fn","dismiss-fn",63925212),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-processing-error","clear-processing-error",263502218)], null));
})], null)], null);
} else {
return null;
}
});
/**
 * A smaller inline error display for form fields
 */
wizmetria_web.views.error.inline_error = (function wizmetria_web$views$error$inline_error(message){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-red-500.text-sm.mt-1","div.text-red-500.text-sm.mt-1",-1892443031),message], null);
});

//# sourceMappingURL=wizmetria_web.views.error.js.map
