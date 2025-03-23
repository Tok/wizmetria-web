goog.provide('wizmetria_web.sym');
/**
 * A=1, B=2, C=3 .. Z=26
 */
wizmetria_web.sym.ordinal = (function wizmetria_web$sym$ordinal(c){
return (c.charCodeAt((0)) - "@".charCodeAt((0)));
});
wizmetria_web.sym.sum__GT_id = (function wizmetria_web$sym$sum__GT_id(ordinal_sum){
return cljs.core.mod((ordinal_sum - (2)),(26));
});
wizmetria_web.sym.ord__GT_id = (function wizmetria_web$sym$ord__GT_id(ordinal){
return cljs.core.mod(((ordinal - (1)) * (2)),(26));
});
wizmetria_web.sym.id__GT_axis_name = (function wizmetria_web$sym$id__GT_axis_name(id){
var v = ((cljs.core.mod(id,(26)) / (2)) + "A".charCodeAt((0)));
var c0 = cljs.core.char$(v);
var c1 = cljs.core.char$((v + (1)));
var c13 = cljs.core.char$((v + (13)));
var c14 = cljs.core.char$((v + (14)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, ["[","A","@","Z"], null),((cljs.core.even_QMARK_(id))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(c0),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c13)].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(c0),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c13),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c14)].join(''))));
});
wizmetria_web.sym.on_axis_QMARK_ = (function wizmetria_web$sym$on_axis_QMARK_(c,total){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wizmetria_web.sym.sum__GT_id(total),wizmetria_web.sym.ord__GT_id(wizmetria_web.sym.ordinal(c)));
});
wizmetria_web.sym.axis_ordinal = (function wizmetria_web$sym$axis_ordinal(c,total){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wizmetria_web.sym.sum__GT_id(total),wizmetria_web.sym.ordinal(c));
});
wizmetria_web.sym.sym_QMARK_ = (function wizmetria_web$sym$sym_QMARK_(word,total){
while(true){
var w = wizmetria_web.util.clean(word);
var on_QMARK_ = ((function (word,total,w){
return (function wizmetria_web$sym$sym_QMARK__$_on_QMARK_(){
return wizmetria_web.sym.on_axis_QMARK_(cljs.core.first(w),total);
});})(word,total,w))
;
var accept_QMARK_ = ((function (word,total,w){
return (function wizmetria_web$sym$sym_QMARK__$_accept_QMARK_(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return on_QMARK_();
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((a + b),total);
}
});})(word,total,w))
;
var G__11981 = ((w).length);
switch (G__11981) {
case (0):
return true;

break;
case (1):
return wizmetria_web.sym.on_axis_QMARK_(cljs.core.first(w),total);

break;
default:
var a = wizmetria_web.sym.ordinal(cljs.core.first(w));
var b = wizmetria_web.sym.ordinal(cljs.core.last(w));
var next = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(w,(1))));
var and__5000__auto__ = accept_QMARK_(a,b);
if(cljs.core.truth_(and__5000__auto__)){
var G__12254 = next;
var G__12255 = total;
word = G__12254;
total = G__12255;
continue;
} else {
return and__5000__auto__;
}

}
break;
}
});
/**
 * Check if word has rotation symmetry (characters like HYRULE with consecutive letter pairs)
 */
wizmetria_web.sym.rotation_sym_QMARK_ = (function wizmetria_web$sym$rotation_sym_QMARK_(word){
var w = wizmetria_web.util.clean(word);
var chars = cljs.core.vec(cljs.core.seq(w));
var offsets = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12049_SHARP_){
return (wizmetria_web.sym.ordinal((function (){var G__12067 = (p1__12049_SHARP_ + (1));
return (chars.cljs$core$IFn$_invoke$arity$1 ? chars.cljs$core$IFn$_invoke$arity$1(G__12067) : chars.call(null, G__12067));
})()) - wizmetria_web.sym.ordinal((chars.cljs$core$IFn$_invoke$arity$1 ? chars.cljs$core$IFn$_invoke$arity$1(p1__12049_SHARP_) : chars.call(null, p1__12049_SHARP_))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(cljs.core.count(chars) - (1))));
return (((cljs.core.count(chars) > (2))) && (cljs.core.every_QMARK_((function (p1__12059_SHARP_){
return (((p1__12059_SHARP_ > (0))) && ((p1__12059_SHARP_ <= (2))));
}),offsets)));
});
wizmetria_web.sym.symmetric_QMARK_ = (function wizmetria_web$sym$symmetric_QMARK_(word,sum){
return cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12084_SHARP_){
return wizmetria_web.sym.sym_QMARK_(word,p1__12084_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sum,(sum + (26)),(sum + (52))], null)));
});
wizmetria_web.sym.not_symmetric_QMARK_ = (function wizmetria_web$sym$not_symmetric_QMARK_(word,sum){
return cljs.core.not(wizmetria_web.sym.symmetric_QMARK_(word,sum));
});
wizmetria_web.sym.az_symmetric_QMARK_ = (function wizmetria_web$sym$az_symmetric_QMARK_(s){
return wizmetria_web.sym.sym_QMARK_(s,(27));
});
wizmetria_web.sym.symmetric_word_QMARK_ = (function wizmetria_web$sym$symmetric_word_QMARK_(word){
var cleaned = wizmetria_web.util.clean(word);
var mirror_sym = cljs.core.some((function (sum){
return wizmetria_web.sym.sym_QMARK_(cleaned,sum);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(53)));
var or__5002__auto__ = mirror_sym;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return wizmetria_web.sym.rotation_sym_QMARK_(cleaned);
}
});
wizmetria_web.sym.rotation_symmetric_word_QMARK_ = (function wizmetria_web$sym$rotation_symmetric_word_QMARK_(word){
var cleaned = wizmetria_web.util.clean(word);
var chars = cljs.core.vec(cljs.core.seq(cleaned));
var char_freqs = cljs.core.frequencies(chars);
return (((cljs.core.count(chars) > (2))) && (cljs.core.every_QMARK_((function (p__12112){
var vec__12114 = p__12112;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12114,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12114,(1),null);
var ord = wizmetria_web.sym.ordinal(c);
var pair_ord = cljs.core.mod((ord + (13)),(26));
var pair_char = cljs.core.char$((pair_ord + "@".charCodeAt((0))));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(freq,cljs.core.get.cljs$core$IFn$_invoke$arity$3(char_freqs,pair_char,(0)));
}),char_freqs)));
});
wizmetria_web.sym.clean = (function wizmetria_web$sym$clean(s){
return wizmetria_web.util.clean(s);
});
wizmetria_web.sym.axis_id_for_word = (function wizmetria_web$sym$axis_id_for_word(word){
var w = wizmetria_web.util.clean(word);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((w).length),(1))){
return wizmetria_web.sym.ord__GT_id(wizmetria_web.sym.ordinal(cljs.core.first(w)));
} else {
if(cljs.core.truth_(wizmetria_web.sym.az_symmetric_QMARK_(w))){
return (25);
} else {
return cljs.core.first((function (){var iter__5480__auto__ = (function wizmetria_web$sym$axis_id_for_word_$_iter__12140(s__12141){
return (new cljs.core.LazySeq(null,(function (){
var s__12141__$1 = s__12141;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12141__$1);
if(temp__5804__auto__){
var s__12141__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12141__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12141__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12145 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12144 = (0);
while(true){
if((i__12144 < size__5479__auto__)){
var sum = cljs.core._nth(c__5478__auto__,i__12144);
if(cljs.core.truth_(wizmetria_web.sym.sym_QMARK_(w,sum))){
cljs.core.chunk_append(b__12145,wizmetria_web.sym.sum__GT_id(sum));

var G__12277 = (i__12144 + (1));
i__12144 = G__12277;
continue;
} else {
var G__12278 = (i__12144 + (1));
i__12144 = G__12278;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12145),wizmetria_web$sym$axis_id_for_word_$_iter__12140(cljs.core.chunk_rest(s__12141__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12145),null);
}
} else {
var sum = cljs.core.first(s__12141__$2);
if(cljs.core.truth_(wizmetria_web.sym.sym_QMARK_(w,sum))){
return cljs.core.cons(wizmetria_web.sym.sum__GT_id(sum),wizmetria_web$sym$axis_id_for_word_$_iter__12140(cljs.core.rest(s__12141__$2)));
} else {
var G__12279 = cljs.core.rest(s__12141__$2);
s__12141__$1 = G__12279;
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
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(53)));
})());

}
}
});
wizmetria_web.sym.rotation_symmetry_axis_id_for_word = (function wizmetria_web$sym$rotation_symmetry_axis_id_for_word(word){
var w = wizmetria_web.util.clean(word);
var first_char = cljs.core.first(w);
var first_ord = wizmetria_web.sym.ordinal(first_char);
var axis_id = cljs.core.mod((first_ord + (3)),(26));
return axis_id;
});
wizmetria_web.sym.filter_sym = (function wizmetria_web$sym$filter_sym(id,coll){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12176_SHARP_){
return wizmetria_web.sym.symmetric_QMARK_(p1__12176_SHARP_,(id + (2)));
}),coll);
});
wizmetria_web.sym.find_sym = (function wizmetria_web$sym$find_sym(id,coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.count,wizmetria_web.sym.filter_sym(id,coll)))], null);
});
wizmetria_web.sym.filter_results = (function wizmetria_web$sym$filter_results(results){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,cljs.core.second),results);
});
wizmetria_web.sym.evaluate = (function wizmetria_web$sym$evaluate(words){
return wizmetria_web.sym.filter_results(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12185_SHARP_){
return wizmetria_web.sym.find_sym(p1__12185_SHARP_,words);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((26))));
});

//# sourceMappingURL=wizmetria_web.sym.js.map
