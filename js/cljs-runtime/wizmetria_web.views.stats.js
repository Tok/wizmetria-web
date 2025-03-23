goog.provide('wizmetria_web.views.stats');
wizmetria_web.views.stats.symmetry_stats_card = (function wizmetria_web$views$stats$symmetry_stats_card(label,count){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-gray-700.rounded-lg.p-3.flex.flex-col.items-center.justify-center","div.bg-gray-700.rounded-lg.p-3.flex.flex-col.items-center.justify-center",1339936344),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-2xl.font-bold.text-indigo-300","span.text-2xl.font-bold.text-indigo-300",-1063022623),count], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-gray-300","span.text-xs.text-gray-300",-287440621),label], null)], null);
});
wizmetria_web.views.stats.symmetric_word_list = (function wizmetria_web$views$stats$symmetric_word_list(title,words){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-4","div.mb-4",-1002350692),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg.mb-2.text-indigo-300.font-medium","h3.text-lg.mb-2.text-indigo-300.font-medium",2119703403),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-wrap.gap-2","div.flex.flex-wrap.gap-2",-1252302895),(function (){var iter__5480__auto__ = (function wizmetria_web$views$stats$symmetric_word_list_$_iter__12634(s__12635){
return (new cljs.core.LazySeq(null,(function (){
var s__12635__$1 = s__12635;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12635__$1);
if(temp__5804__auto__){
var s__12635__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12635__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12635__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12637 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12636 = (0);
while(true){
if((i__12636 < size__5479__auto__)){
var word = cljs.core._nth(c__5478__auto__,i__12636);
cljs.core.chunk_append(b__12637,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bg-gray-700.px-3.py-1.rounded-md.cursor-pointer.hover:bg-gray-600.transition-colors.text-indigo-200.text-sm","span.bg-gray-700.px-3.py-1.rounded-md.cursor-pointer.hover:bg-gray-600.transition-colors.text-indigo-200.text-sm",-204006898),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__12636,word,c__5478__auto__,size__5479__auto__,b__12637,s__12635__$2,temp__5804__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),word], null));
});})(i__12636,word,c__5478__auto__,size__5479__auto__,b__12637,s__12635__$2,temp__5804__auto__))
], null),word], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),word], null)));

var G__12653 = (i__12636 + (1));
i__12636 = G__12653;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12637),wizmetria_web$views$stats$symmetric_word_list_$_iter__12634(cljs.core.chunk_rest(s__12635__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12637),null);
}
} else {
var word = cljs.core.first(s__12635__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bg-gray-700.px-3.py-1.rounded-md.cursor-pointer.hover:bg-gray-600.transition-colors.text-indigo-200.text-sm","span.bg-gray-700.px-3.py-1.rounded-md.cursor-pointer.hover:bg-gray-600.transition-colors.text-indigo-200.text-sm",-204006898),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (word,s__12635__$2,temp__5804__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),word], null));
});})(word,s__12635__$2,temp__5804__auto__))
], null),word], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),word], null)),wizmetria_web$views$stats$symmetric_word_list_$_iter__12634(cljs.core.rest(s__12635__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(words);
})()], null)], null);
});
wizmetria_web.views.stats.symmetry_axis_section = (function wizmetria_web$views$stats$symmetry_axis_section(axis_id,words){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-gray-700.rounded-lg.p-3","div.bg-gray-700.rounded-lg.p-3",-268768400),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.text-indigo-200.font-medium.mb-1.text-sm","h4.text-indigo-200.font-medium.mb-1.text-sm",1683388601),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.sym.id__GT_axis_name(axis_id))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"axis","axis",-1215390822)))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(words))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"for","for",-1323786319))),")"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-wrap.gap-1","div.flex.flex-wrap.gap-1",1063862912),(function (){var iter__5480__auto__ = (function wizmetria_web$views$stats$symmetry_axis_section_$_iter__12638(s__12639){
return (new cljs.core.LazySeq(null,(function (){
var s__12639__$1 = s__12639;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12639__$1);
if(temp__5804__auto__){
var s__12639__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12639__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12639__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12641 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12640 = (0);
while(true){
if((i__12640 < size__5479__auto__)){
var word = cljs.core._nth(c__5478__auto__,i__12640);
cljs.core.chunk_append(b__12641,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bg-gray-600.px-2.py-0.5.rounded-md.text-xs.cursor-pointer.hover:bg-gray-500.transition-colors.text-indigo-100","span.bg-gray-600.px-2.py-0.5.rounded-md.text-xs.cursor-pointer.hover:bg-gray-500.transition-colors.text-indigo-100",-1247288065),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__12640,word,c__5478__auto__,size__5479__auto__,b__12641,s__12639__$2,temp__5804__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),word], null));
});})(i__12640,word,c__5478__auto__,size__5479__auto__,b__12641,s__12639__$2,temp__5804__auto__))
], null),word], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),word], null)));

var G__12654 = (i__12640 + (1));
i__12640 = G__12654;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12641),wizmetria_web$views$stats$symmetry_axis_section_$_iter__12638(cljs.core.chunk_rest(s__12639__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12641),null);
}
} else {
var word = cljs.core.first(s__12639__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bg-gray-600.px-2.py-0.5.rounded-md.text-xs.cursor-pointer.hover:bg-gray-500.transition-colors.text-indigo-100","span.bg-gray-600.px-2.py-0.5.rounded-md.text-xs.cursor-pointer.hover:bg-gray-500.transition-colors.text-indigo-100",-1247288065),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (word,s__12639__$2,temp__5804__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),word], null));
});})(word,s__12639__$2,temp__5804__auto__))
], null),word], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),word], null)),wizmetria_web$views$stats$symmetry_axis_section_$_iter__12638(cljs.core.rest(s__12639__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),words));
})()], null)], null);
});
wizmetria_web.views.stats.wordlist_stats = (function wizmetria_web$views$stats$wordlist_stats(){
var stats = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wordlist-stats","wordlist-stats",-1375753320)], null)));
if(cljs.core.truth_(stats)){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-gray-800.p-4.rounded-lg.shadow-lg.mb-4.border.border-purple-700.text-gray-200","div.bg-gray-800.p-4.rounded-lg.shadow-lg.mb-4.border.border-purple-700.text-gray-200",-1531848105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-xl.mb-3.text-purple-300.font-semibold","h2.text-xl.mb-3.text-purple-300.font-semibold",1714944561),wizmetria_web.i18n.t(new cljs.core.Keyword(null,"stats-title","stats-title",945280418))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.md:grid-cols-3.gap-3.mb-4","div.grid.grid-cols-1.md:grid-cols-3.gap-3.mb-4",1938660865),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.views.stats.symmetry_stats_card,wizmetria_web.i18n.t(new cljs.core.Keyword(null,"stats-unique-words","stats-unique-words",574203879)),new cljs.core.Keyword(null,"total-words","total-words",-2062349296).cljs$core$IFn$_invoke$arity$1(stats)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.views.stats.symmetry_stats_card,wizmetria_web.i18n.t(new cljs.core.Keyword(null,"stats-mirror-words","stats-mirror-words",-1453942045)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stats,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mirror","mirror",1914600218),new cljs.core.Keyword(null,"count","count",2139924085)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.views.stats.symmetry_stats_card,wizmetria_web.i18n.t(new cljs.core.Keyword(null,"stats-rotation-words","stats-rotation-words",1621442299)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stats,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"count","count",2139924085)], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.views.stats.symmetric_word_list,["Top 10 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"mirror-symmetry","mirror-symmetry",2143234979)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"for","for",-1323786319)))].join(''),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stats,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mirror","mirror",1914600218),new cljs.core.Keyword(null,"top-n","top-n",1854609254)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.views.stats.symmetric_word_list,["Top 10 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"rotation-symmetry","rotation-symmetry",-1324263018)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"for","for",-1323786319)))].join(''),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stats,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"top-n","top-n",1854609254)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg.mb-2.text-indigo-300.font-medium","h3.text-lg.mb-2.text-indigo-300.font-medium",2119703403),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"for","for",-1323786319)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"by","by",30600856)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"symmetry-axis","symmetry-axis",1569891606)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.md:grid-cols-2.gap-3","div.grid.grid-cols-1.md:grid-cols-2.gap-3",-1883427666),(function (){var iter__5480__auto__ = (function wizmetria_web$views$stats$wordlist_stats_$_iter__12643(s__12644){
return (new cljs.core.LazySeq(null,(function (){
var s__12644__$1 = s__12644;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12644__$1);
if(temp__5804__auto__){
var s__12644__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12644__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12644__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12646 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12645 = (0);
while(true){
if((i__12645 < size__5479__auto__)){
var vec__12647 = cljs.core._nth(c__5478__auto__,i__12645);
var axis_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12647,(0),null);
var words = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12647,(1),null);
if(cljs.core.seq(words)){
cljs.core.chunk_append(b__12646,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.views.stats.symmetry_axis_section,axis_id,words], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),axis_id], null)));

var G__12655 = (i__12645 + (1));
i__12645 = G__12655;
continue;
} else {
var G__12656 = (i__12645 + (1));
i__12645 = G__12656;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12646),wizmetria_web$views$stats$wordlist_stats_$_iter__12643(cljs.core.chunk_rest(s__12644__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12646),null);
}
} else {
var vec__12650 = cljs.core.first(s__12644__$2);
var axis_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12650,(0),null);
var words = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12650,(1),null);
if(cljs.core.seq(words)){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.views.stats.symmetry_axis_section,axis_id,words], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),axis_id], null)),wizmetria_web$views$stats$wordlist_stats_$_iter__12643(cljs.core.rest(s__12644__$2)));
} else {
var G__12658 = cljs.core.rest(s__12644__$2);
s__12644__$1 = G__12658;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stats,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mirror","mirror",1914600218),new cljs.core.Keyword(null,"by-axis","by-axis",1460307363)], null)));
})()], null)], null)], null);
} else {
return null;
}
});

//# sourceMappingURL=wizmetria_web.views.stats.js.map
