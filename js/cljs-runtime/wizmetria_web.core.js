goog.provide('wizmetria_web.core');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"word","word",-420123725),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"symmetry-results","symmetry-results",-430563317),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"symmetry-results","symmetry-results",-430563317).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"wordlist-stats","wordlist-stats",-1375753320),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"wordlist-stats","wordlist-stats",-1375753320).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"processing-state","processing-state",-162524375),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"processing-state","processing-state",-162524375).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"shiny-effects-enabled","shiny-effects-enabled",-227811223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"shiny-effects-enabled","shiny-effects-enabled",-227811223),false);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
var default_word = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(wizmetria_web.config.processing_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default-word","default-word",98622944)], null));
var initial_db = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"word","word",-420123725),default_word,new cljs.core.Keyword(null,"symmetry-results","symmetry-results",-430563317),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"wordlist-stats","wordlist-stats",-1375753320),null,new cljs.core.Keyword(null,"processing-state","processing-state",-162524375),null,new cljs.core.Keyword(null,"shiny-effects-enabled","shiny-effects-enabled",-227811223),false], null);
setTimeout((function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-language","init-language",311526816)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),default_word], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"check-symmetry","check-symmetry",508011107)], null));
}),(10));

return initial_db;
}));
wizmetria_web.core.main_panel = (function wizmetria_web$core$main_panel(){
var text_direction = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-direction","text-direction",590275785)], null)));
var shiny_enabled_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shiny-effects-enabled","shiny-effects-enabled",-227811223)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.min-h-screen.bg-gray-900.text-purple-100.flex.flex-col","div.min-h-screen.bg-gray-900.text-purple-100.flex.flex-col",-1664456384),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dir","dir",1734754661),text_direction,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(shiny_enabled_QMARK_)?"shiny-enabled":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-grow.px-4.py-6.flex.flex-col.items-center","div.flex-grow.px-4.py-6.flex.flex-col.items-center",494484617),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.views.layout.header], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.max-w-5xl","div.w-full.max-w-5xl",-800976454),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.views.explanation.explanation], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.views.symmetry.input_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.views.symmetry.symmetry_display], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.views.analysis.text_analysis], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.views.stats.wordlist_stats], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.views.layout.footer], null)], null);
});
wizmetria_web.core.mount_root = (function wizmetria_web$core$mount_root(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

var body_13479 = document.body;
var app_db_13480 = cljs.core.deref(re_frame.db.app_db);
var shiny_enabled_QMARK__13481 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(app_db_13480,new cljs.core.Keyword(null,"shiny-effects-enabled","shiny-effects-enabled",-227811223),false);
if(cljs.core.truth_((function (){var and__5000__auto__ = body_13479;
if(cljs.core.truth_(and__5000__auto__)){
return shiny_enabled_QMARK__13481;
} else {
return and__5000__auto__;
}
})())){
body_13479.classList.add("shiny-enabled");
} else {
}

var root = reagent.dom.client.create_root(document.getElementById("app"));
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.core.main_panel], null));
});
wizmetria_web.core.init = (function wizmetria_web$core$init(){
wizmetria_web.core.mount_root();

return window.addEventListener("beforeunload",(function (_){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shutdown","shutdown",-1876565378)], null));
}));
});

//# sourceMappingURL=wizmetria_web.core.js.map
