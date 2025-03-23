goog.provide('wizmetria_web.views.symmetry');
wizmetria_web.views.symmetry.input_field = (function wizmetria_web$views$symmetry$input_field(){
var word = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word","word",-420123725)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.items-center.mb-4","div.flex.flex-col.items-center.mb-4",-975996923),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.text-lg.mb-1.text-purple-200","label.text-lg.mb-1.text-purple-200",367141769),wizmetria_web.i18n.t(new cljs.core.Keyword(null,"input-label","input-label",139046498))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.w-full.max-w-md.shadow-lg","div.flex.w-full.max-w-md.shadow-lg",-755489767),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.w-full.px-4.py-2.bg-gray-800.border-2.border-purple-700.rounded-l-lg.focus:outline-none.focus:ring-2.focus:ring-indigo-500.text-gray-100.placeholder-gray-500","input.w-full.px-4.py-2.bg-gray-800.border-2.border-purple-700.rounded-l-lg.focus:outline-none.focus:ring-2.focus:ring-indigo-500.text-gray-100.placeholder-gray-500",2128386662),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),word,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"e.g. WIZARD",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12399_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),p1__12399_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.bg-purple-700.text-white.px-5.py-2.rounded-r-lg.hover:bg-purple-600.focus:outline-none.focus:ring-2.focus:ring-purple-500.transition-colors.duration-200.font-medium","button.bg-purple-700.text-white.px-5.py-2.rounded-r-lg.hover:bg-purple-600.focus:outline-none.focus:ring-2.focus:ring-purple-500.transition-colors.duration-200.font-medium",616991360),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"check-symmetry","check-symmetry",508011107)], null));
})], null),wizmetria_web.i18n.t(new cljs.core.Keyword(null,"analyze-button","analyze-button",2084395347))], null)], null)], null);
});
wizmetria_web.views.symmetry.check_word = (function wizmetria_web$views$symmetry$check_word(){
var word = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word","word",-420123725)], null)));
var cleaned_word = wizmetria_web.util.clean(word);
var axis_id = ((cljs.core.seq(cleaned_word))?wizmetria_web.sym.axis_id_for_word(cleaned_word):null);
var rotation_axis_id = ((cljs.core.seq(cleaned_word))?wizmetria_web.sym.rotation_symmetry_axis_id_for_word(cleaned_word):null);
var has_mirror_symmetry = (function (){var and__5000__auto__ = cljs.core.seq(cleaned_word);
if(and__5000__auto__){
return wizmetria_web.sym.symmetric_word_QMARK_(cleaned_word);
} else {
return and__5000__auto__;
}
})();
var has_rotation_symmetry = ((cljs.core.seq(cleaned_word)) && (((cljs.core.not(has_mirror_symmetry)) && (wizmetria_web.sym.rotation_symmetric_word_QMARK_(cleaned_word)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-4.text-center","div.mt-4.text-center",443254909),((cljs.core.empty_QMARK_(cleaned_word))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-gray-400","p.text-gray-400",-85453884),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"input-label","input-label",139046498)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"for","for",-1323786319)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"symmetry-axis","symmetry-axis",1569891606)))].join('')], null):(cljs.core.truth_(has_mirror_symmetry)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-green-400","p.text-green-400",-246314548),["\"",cleaned_word,"\" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"with","with",-1536296876)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"mirror-symmetry","mirror-symmetry",2143234979)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"around-axis","around-axis",103851693)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(axis_id)?wizmetria_web.sym.id__GT_axis_name(axis_id):null))].join('')], null):((has_rotation_symmetry)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-green-400","p.text-green-400",-246314548),["\"",cleaned_word,"\" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"with","with",-1536296876)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"rotation-symmetry","rotation-symmetry",-1324263018)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"around-axis","around-axis",103851693)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(rotation_axis_id)?wizmetria_web.sym.id__GT_axis_name(rotation_axis_id):null))].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-red-400","p.text-red-400",934700533),["\"",cleaned_word,"\" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"no-symmetry","no-symmetry",-969868718)))].join('')], null)
)))], null);
});
wizmetria_web.views.symmetry.symmetry_display = (function wizmetria_web$views$symmetry$symmetry_display(){
var results = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symmetry-results","symmetry-results",-430563317)], null)));
var word = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word","word",-420123725)], null)));
var cleaned_word = wizmetria_web.util.clean(word);
var word_axis_id = (cljs.core.truth_(cljs.core.not_empty(cleaned_word))?wizmetria_web.sym.axis_id_for_word(cleaned_word):null);
var rotation_axis_id = (cljs.core.truth_(cljs.core.not_empty(cleaned_word))?wizmetria_web.sym.rotation_symmetry_axis_id_for_word(cleaned_word):null);
var has_mirror_symmetry = (function (){var and__5000__auto__ = (!((word_axis_id == null)));
if(and__5000__auto__){
return wizmetria_web.sym.symmetric_word_QMARK_(cleaned_word);
} else {
return and__5000__auto__;
}
})();
var has_rotation_symmetry = ((cljs.core.not(has_mirror_symmetry)) && (((cljs.core.seq(cleaned_word)) && (wizmetria_web.sym.rotation_symmetric_word_QMARK_(cleaned_word)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_((function (){var and__5000__auto__ = results;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.seq(results);
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-4.w-full.flex.flex-col.items-center","div.mt-4.w-full.flex.flex-col.items-center",270726641),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-xl.mb-3.text-center.text-purple-300.font-semibold","h2.text-xl.mb-3.text-center.text-purple-300.font-semibold",-1900533154),wizmetria_web.i18n.t(new cljs.core.Keyword(null,"symmetry-results","symmetry-results",-430563317))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.views.symmetry.check_word], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-wrap.justify-center.gap-6.w-full.mt-4","div.flex.flex-wrap.justify-center.gap-6.w-full.mt-4",335939809),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-gray-800.p-4.rounded-lg.shadow-lg.flex.flex-col.items-center.w-80.border.border-indigo-700.transform.transition-all.duration-300.hover:scale-105","div.bg-gray-800.p-4.rounded-lg.shadow-lg.flex.flex-col.items-center.w-80.border.border-indigo-700.transform.transition-all.duration-300.hover:scale-105",1296333517),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((((cljs.core.not(has_mirror_symmetry)) && ((!(has_rotation_symmetry)))))?"no-symmetry-container":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg.mb-2.text-center.text-indigo-300.font-medium","h3.text-lg.mb-2.text-center.text-indigo-300.font-medium",-1082222183),(cljs.core.truth_(has_mirror_symmetry)?wizmetria_web.i18n.t(new cljs.core.Keyword(null,"mirror-symmetry","mirror-symmetry",2143234979)):((has_rotation_symmetry)?wizmetria_web.i18n.t(new cljs.core.Keyword(null,"rotation-symmetry","rotation-symmetry",-1324263018)):wizmetria_web.i18n.t(new cljs.core.Keyword(null,"no-symmetry","no-symmetry",-969868718))
))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.alphabet-circle.flex.items-center.justify-center.bg-gray-900.rounded-full.p-1","div.alphabet-circle.flex.items-center.justify-center.bg-gray-900.rounded-full.p-1",264756903),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.grid.symmetry_view,word,(cljs.core.truth_(has_mirror_symmetry)?word_axis_id:((has_rotation_symmetry)?rotation_axis_id:null
)),(function (){var or__5002__auto__ = has_mirror_symmetry;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return has_rotation_symmetry;
}
})()], null)], null)], null)], null)], null):null)], null);
});

//# sourceMappingURL=wizmetria_web.views.symmetry.js.map
