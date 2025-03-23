goog.provide('wizmetria_web.grid');
wizmetria_web.grid.abc = cljs.core.seq("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
wizmetria_web.grid.radius = (150);
wizmetria_web.grid.center_x = (180);
wizmetria_web.grid.center_y = (180);
wizmetria_web.grid.letter_radius = (160);
wizmetria_web.grid.ordinal = (function wizmetria_web$grid$ordinal(c){
return (c.charCodeAt((0)) - "@".charCodeAt((0)));
});
wizmetria_web.grid.polar__GT_cartesian = (function wizmetria_web$grid$polar__GT_cartesian(angle,radius){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(wizmetria_web.grid.center_x + (radius * Math.cos(angle))),(wizmetria_web.grid.center_y + (radius * Math.sin(angle)))], null);
});
wizmetria_web.grid.line_circle_intersection = (function wizmetria_web$grid$line_circle_intersection(point){
var dx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point) - wizmetria_web.grid.center_x);
var dy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point) - wizmetria_web.grid.center_y);
var length = Math.sqrt(((dx * dx) + (dy * dy)));
var unit_dx = (dx / length);
var unit_dy = (dy / length);
var x = (wizmetria_web.grid.center_x + (wizmetria_web.grid.radius * unit_dx));
var y = (wizmetria_web.grid.center_y + (wizmetria_web.grid.radius * unit_dy));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
});
wizmetria_web.grid.letter_position = (function wizmetria_web$grid$letter_position(index){
var angle_per_letter = (((2) * Math.PI) / (26));
var half_angle = (angle_per_letter / (2));
var offset = ((Math.PI + (Math.PI / (2))) + half_angle);
var angle = cljs.core.mod((offset + (angle_per_letter * index)),((2) * Math.PI));
var vec__17764 = wizmetria_web.grid.polar__GT_cartesian(angle,wizmetria_web.grid.letter_radius);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17764,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17764,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"letter","letter",-125811450),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(wizmetria_web.grid.abc,index)], null);
});
wizmetria_web.grid.letter_positions = (function wizmetria_web$grid$letter_positions(){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(wizmetria_web.grid.letter_position,cljs.core.range.cljs$core$IFn$_invoke$arity$1((26)));
});
wizmetria_web.grid.deg__GT_rad = (function wizmetria_web$grid$deg__GT_rad(deg){
return (deg * (Math.PI / (180)));
});
wizmetria_web.grid.circle_view = (function wizmetria_web$grid$circle_view(word){
var positions = wizmetria_web.grid.letter_positions();
var letter_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (pos){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letter","letter",-125811450).cljs$core$IFn$_invoke$arity$1(pos),pos], null);
}),positions));
var cleaned_word = wizmetria_web.util.clean(word);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(360),new cljs.core.Keyword(null,"height","height",1025178622),(360),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 360 360",new cljs.core.Keyword(null,"role","role",-736691072),"img",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),"circle-title circle-desc"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"circle-title"], null),"Letter Circle Visualization"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"circle-desc"], null),["A circular visualization showing the 26 letters of the alphabet arranged in a circle",((cljs.core.seq(cleaned_word))?[" with the word '",cleaned_word,"' highlighted"].join(''):null)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.main-orb","circle.main-orb",335128937),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cx","cx",1272694324),wizmetria_web.grid.center_x,new cljs.core.Keyword(null,"cy","cy",755331060),wizmetria_web.grid.center_y,new cljs.core.Keyword(null,"r","r",-471384190),wizmetria_web.grid.radius,new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8b5cf6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),(function (){var iter__5480__auto__ = (function wizmetria_web$grid$circle_view_$_iter__17767(s__17768){
return (new cljs.core.LazySeq(null,(function (){
var s__17768__$1 = s__17768;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17768__$1);
if(temp__5804__auto__){
var s__17768__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17768__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17768__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17770 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17769 = (0);
while(true){
if((i__17769 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__17769);
cljs.core.chunk_append(b__17770,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),wizmetria_web.grid.center_x,new cljs.core.Keyword(null,"y1","y1",589123466),wizmetria_web.grid.center_y,new cljs.core.Keyword(null,"x2","x2",-1362513475),(wizmetria_web.grid.center_x + (wizmetria_web.grid.radius * Math.cos(wizmetria_web.grid.deg__GT_rad(i)))),new cljs.core.Keyword(null,"y2","y2",-718691301),(wizmetria_web.grid.center_y + (wizmetria_web.grid.radius * Math.sin(wizmetria_web.grid.deg__GT_rad(i)))),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"rgba(139, 92, 246, 0.1)",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ray-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)));

var G__17907 = (i__17769 + (1));
i__17769 = G__17907;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17770),wizmetria_web$grid$circle_view_$_iter__17767(cljs.core.chunk_rest(s__17768__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17770),null);
}
} else {
var i = cljs.core.first(s__17768__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),wizmetria_web.grid.center_x,new cljs.core.Keyword(null,"y1","y1",589123466),wizmetria_web.grid.center_y,new cljs.core.Keyword(null,"x2","x2",-1362513475),(wizmetria_web.grid.center_x + (wizmetria_web.grid.radius * Math.cos(wizmetria_web.grid.deg__GT_rad(i)))),new cljs.core.Keyword(null,"y2","y2",-718691301),(wizmetria_web.grid.center_y + (wizmetria_web.grid.radius * Math.sin(wizmetria_web.grid.deg__GT_rad(i)))),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"rgba(139, 92, 246, 0.1)",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ray-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)),wizmetria_web$grid$circle_view_$_iter__17767(cljs.core.rest(s__17768__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(360),((360) / (26))));
})(),(function (){var iter__5480__auto__ = (function wizmetria_web$grid$circle_view_$_iter__17771(s__17772){
return (new cljs.core.LazySeq(null,(function (){
var s__17772__$1 = s__17772;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17772__$1);
if(temp__5804__auto__){
var s__17772__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17772__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17772__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17774 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17773 = (0);
while(true){
if((i__17773 < size__5479__auto__)){
var map__17775 = cljs.core._nth(c__5478__auto__,i__17773);
var map__17775__$1 = cljs.core.__destructure_map(map__17775);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17775__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17775__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var letter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17775__$1,new cljs.core.Keyword(null,"letter","letter",-125811450));
cljs.core.chunk_append(b__17774,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Letter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"fill","fill",883462889),"#d1d5db"], null),letter], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["letter-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join('')], null)));

var G__17914 = (i__17773 + (1));
i__17773 = G__17914;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17774),wizmetria_web$grid$circle_view_$_iter__17771(cljs.core.chunk_rest(s__17772__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17774),null);
}
} else {
var map__17776 = cljs.core.first(s__17772__$2);
var map__17776__$1 = cljs.core.__destructure_map(map__17776);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17776__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17776__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var letter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17776__$1,new cljs.core.Keyword(null,"letter","letter",-125811450));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Letter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"fill","fill",883462889),"#d1d5db"], null),letter], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["letter-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join('')], null)),wizmetria_web$grid$circle_view_$_iter__17771(cljs.core.rest(s__17772__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(positions);
})(),((cljs.core.seq(cleaned_word))?(function (){var word_letters = cljs.core.seq(cleaned_word);
var pairs = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__17777){
var vec__17778 = p__17777;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17778,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17778,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,idx], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,word_letters,cljs.core.rest(word_letters)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Connections for word ",cleaned_word].join('')], null),(function (){var iter__5480__auto__ = (function wizmetria_web$grid$circle_view_$_iter__17781(s__17782){
return (new cljs.core.LazySeq(null,(function (){
var s__17782__$1 = s__17782;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17782__$1);
if(temp__5804__auto__){
var s__17782__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17782__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17782__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17784 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17783 = (0);
while(true){
if((i__17783 < size__5479__auto__)){
var vec__17785 = cljs.core._nth(c__5478__auto__,i__17783);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17785,(0),null);
var vec__17788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17785,(1),null);
var from_letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17788,(0),null);
var to_letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17788,(1),null);
var from_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(letter_map,from_letter);
var to_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(letter_map,to_letter);
var from_intersection = wizmetria_web.grid.line_circle_intersection(from_pos);
var to_intersection = wizmetria_web.grid.line_circle_intersection(to_pos);
if(cljs.core.truth_((function (){var and__5000__auto__ = from_pos;
if(cljs.core.truth_(and__5000__auto__)){
return to_pos;
} else {
return and__5000__auto__;
}
})())){
cljs.core.chunk_append(b__17784,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(from_intersection),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(from_intersection),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(to_intersection),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(to_intersection),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8b5cf6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),2.5,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Connection from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from_letter)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(to_letter)].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["line-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from_letter),cljs.core.str.cljs$core$IFn$_invoke$arity$1(to_letter),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null)));

var G__17916 = (i__17783 + (1));
i__17783 = G__17916;
continue;
} else {
var G__17917 = (i__17783 + (1));
i__17783 = G__17917;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17784),wizmetria_web$grid$circle_view_$_iter__17781(cljs.core.chunk_rest(s__17782__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17784),null);
}
} else {
var vec__17791 = cljs.core.first(s__17782__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17791,(0),null);
var vec__17794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17791,(1),null);
var from_letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17794,(0),null);
var to_letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17794,(1),null);
var from_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(letter_map,from_letter);
var to_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(letter_map,to_letter);
var from_intersection = wizmetria_web.grid.line_circle_intersection(from_pos);
var to_intersection = wizmetria_web.grid.line_circle_intersection(to_pos);
if(cljs.core.truth_((function (){var and__5000__auto__ = from_pos;
if(cljs.core.truth_(and__5000__auto__)){
return to_pos;
} else {
return and__5000__auto__;
}
})())){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(from_intersection),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(from_intersection),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(to_intersection),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(to_intersection),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8b5cf6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),2.5,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Connection from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from_letter)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(to_letter)].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["line-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from_letter),cljs.core.str.cljs$core$IFn$_invoke$arity$1(to_letter),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null)),wizmetria_web$grid$circle_view_$_iter__17781(cljs.core.rest(s__17782__$2)));
} else {
var G__17927 = cljs.core.rest(s__17782__$2);
s__17782__$1 = G__17927;
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
return iter__5480__auto__(pairs);
})(),(function (){var iter__5480__auto__ = (function wizmetria_web$grid$circle_view_$_iter__17797(s__17798){
return (new cljs.core.LazySeq(null,(function (){
var s__17798__$1 = s__17798;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17798__$1);
if(temp__5804__auto__){
var s__17798__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17798__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17798__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17800 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17799 = (0);
while(true){
if((i__17799 < size__5479__auto__)){
var vec__17801 = cljs.core._nth(c__5478__auto__,i__17799);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17801,(0),null);
var letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17801,(1),null);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(letter_map,letter);
var intersection = wizmetria_web.grid.line_circle_intersection(pos);
if(cljs.core.truth_(pos)){
cljs.core.chunk_append(b__17800,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection),new cljs.core.Keyword(null,"r","r",-471384190),(4),new cljs.core.Keyword(null,"fill","fill",883462889),"#a855f7",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Letter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)," position marker"].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["dot-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null)));

var G__17929 = (i__17799 + (1));
i__17799 = G__17929;
continue;
} else {
var G__17930 = (i__17799 + (1));
i__17799 = G__17930;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17800),wizmetria_web$grid$circle_view_$_iter__17797(cljs.core.chunk_rest(s__17798__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17800),null);
}
} else {
var vec__17804 = cljs.core.first(s__17798__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17804,(0),null);
var letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17804,(1),null);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(letter_map,letter);
var intersection = wizmetria_web.grid.line_circle_intersection(pos);
if(cljs.core.truth_(pos)){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection),new cljs.core.Keyword(null,"r","r",-471384190),(4),new cljs.core.Keyword(null,"fill","fill",883462889),"#a855f7",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Letter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)," position marker"].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["dot-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null)),wizmetria_web$grid$circle_view_$_iter__17797(cljs.core.rest(s__17798__$2)));
} else {
var G__17932 = cljs.core.rest(s__17798__$2);
s__17798__$1 = G__17932;
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
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,word_letters));
})()], null);
})():null)], null);
});
wizmetria_web.grid.axis_view = (function wizmetria_web$grid$axis_view(axis_id){
var angle = ((Math.PI / (13)) * (axis_id / (2)));
var vec__17807 = wizmetria_web.grid.polar__GT_cartesian(angle,wizmetria_web.grid.radius);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17807,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17807,(1),null);
var vec__17810 = wizmetria_web.grid.polar__GT_cartesian((angle + Math.PI),wizmetria_web.grid.radius);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17810,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17810,(1),null);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(360),new cljs.core.Keyword(null,"height","height",1025178622),(360),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 360 360",new cljs.core.Keyword(null,"role","role",-736691072),"img",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),"axis-title axis-desc"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"axis-title"], null),"Symmetry Axis Visualization"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"axis-desc"], null),["Visualization showing symmetry axis ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(axis_id)," across the alphabet circle"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.main-orb","circle.main-orb",335128937),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cx","cx",1272694324),wizmetria_web.grid.center_x,new cljs.core.Keyword(null,"cy","cy",755331060),wizmetria_web.grid.center_y,new cljs.core.Keyword(null,"r","r",-471384190),wizmetria_web.grid.radius,new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8b5cf6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),(function (){var iter__5480__auto__ = (function wizmetria_web$grid$axis_view_$_iter__17813(s__17814){
return (new cljs.core.LazySeq(null,(function (){
var s__17814__$1 = s__17814;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17814__$1);
if(temp__5804__auto__){
var s__17814__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17814__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17814__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17816 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17815 = (0);
while(true){
if((i__17815 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__17815);
cljs.core.chunk_append(b__17816,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),wizmetria_web.grid.center_x,new cljs.core.Keyword(null,"y1","y1",589123466),wizmetria_web.grid.center_y,new cljs.core.Keyword(null,"x2","x2",-1362513475),(wizmetria_web.grid.center_x + (wizmetria_web.grid.radius * Math.cos(wizmetria_web.grid.deg__GT_rad(i)))),new cljs.core.Keyword(null,"y2","y2",-718691301),(wizmetria_web.grid.center_y + (wizmetria_web.grid.radius * Math.sin(wizmetria_web.grid.deg__GT_rad(i)))),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"rgba(139, 92, 246, 0.1)",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ray-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)));

var G__17934 = (i__17815 + (1));
i__17815 = G__17934;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17816),wizmetria_web$grid$axis_view_$_iter__17813(cljs.core.chunk_rest(s__17814__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17816),null);
}
} else {
var i = cljs.core.first(s__17814__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),wizmetria_web.grid.center_x,new cljs.core.Keyword(null,"y1","y1",589123466),wizmetria_web.grid.center_y,new cljs.core.Keyword(null,"x2","x2",-1362513475),(wizmetria_web.grid.center_x + (wizmetria_web.grid.radius * Math.cos(wizmetria_web.grid.deg__GT_rad(i)))),new cljs.core.Keyword(null,"y2","y2",-718691301),(wizmetria_web.grid.center_y + (wizmetria_web.grid.radius * Math.sin(wizmetria_web.grid.deg__GT_rad(i)))),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"rgba(139, 92, 246, 0.1)",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ray-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)),wizmetria_web$grid$axis_view_$_iter__17813(cljs.core.rest(s__17814__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(360),((360) / (26))));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475)],["5,5","#c026d3","true",y1,(2),x1,["Symmetry axis ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(axis_id)].join(''),y2,x2])], null),(function (){var iter__5480__auto__ = (function wizmetria_web$grid$axis_view_$_iter__17817(s__17818){
return (new cljs.core.LazySeq(null,(function (){
var s__17818__$1 = s__17818;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17818__$1);
if(temp__5804__auto__){
var s__17818__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17818__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17818__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17820 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17819 = (0);
while(true){
if((i__17819 < size__5479__auto__)){
var map__17821 = cljs.core._nth(c__5478__auto__,i__17819);
var map__17821__$1 = cljs.core.__destructure_map(map__17821);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17821__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17821__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var letter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17821__$1,new cljs.core.Keyword(null,"letter","letter",-125811450));
cljs.core.chunk_append(b__17820,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Letter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"fill","fill",883462889),"#d1d5db"], null),letter], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["alphabet-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join('')], null)));

var G__17939 = (i__17819 + (1));
i__17819 = G__17939;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17820),wizmetria_web$grid$axis_view_$_iter__17817(cljs.core.chunk_rest(s__17818__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17820),null);
}
} else {
var map__17822 = cljs.core.first(s__17818__$2);
var map__17822__$1 = cljs.core.__destructure_map(map__17822);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17822__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17822__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var letter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17822__$1,new cljs.core.Keyword(null,"letter","letter",-125811450));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Letter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"fill","fill",883462889),"#d1d5db"], null),letter], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["alphabet-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join('')], null)),wizmetria_web$grid$axis_view_$_iter__17817(cljs.core.rest(s__17818__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(wizmetria_web.grid.letter_positions());
})()], null);
});
wizmetria_web.grid.symmetry_view = (function wizmetria_web$grid$symmetry_view(word,axis_id,has_symmetry){
var positions = wizmetria_web.grid.letter_positions();
var letter_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (pos){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letter","letter",-125811450).cljs$core$IFn$_invoke$arity$1(pos),pos], null);
}),positions));
var cleaned_word = wizmetria_web.util.clean(word);
var angle_per_letter = (((2) * Math.PI) / (26));
var half_angle = (angle_per_letter / (2));
var axis_base_angle = ((Math.PI / (13)) * (axis_id / (2)));
var axis_angle = ((axis_base_angle + (Math.PI / (2))) + half_angle);
var vec__17823 = wizmetria_web.grid.polar__GT_cartesian(axis_angle,wizmetria_web.grid.radius);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17823,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17823,(1),null);
var vec__17826 = wizmetria_web.grid.polar__GT_cartesian((axis_angle + Math.PI),wizmetria_web.grid.radius);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17826,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17826,(1),null);
var is_rotation_axis = ((cljs.core.seq(cleaned_word)) && (((wizmetria_web.sym.rotation_symmetric_word_QMARK_(cleaned_word)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis_id,wizmetria_web.sym.rotation_symmetry_axis_id_for_word(cleaned_word))))));
var rotation_pairs = ((is_rotation_axis)?(function (){var chars = cljs.core.vec(cljs.core.seq(cleaned_word));
var char_set = cljs.core.set(chars);
var iter__5480__auto__ = (function wizmetria_web$grid$symmetry_view_$_iter__17829(s__17830){
return (new cljs.core.LazySeq(null,(function (){
var s__17830__$1 = s__17830;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17830__$1);
if(temp__5804__auto__){
var s__17830__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17830__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17830__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17832 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17831 = (0);
while(true){
if((i__17831 < size__5479__auto__)){
var c = cljs.core._nth(c__5478__auto__,i__17831);
var ord = wizmetria_web.grid.ordinal(c);
var pair_ord = cljs.core.mod((ord + (13)),(26));
var pair_char = cljs.core.char$((pair_ord + "@".charCodeAt((0))));
if(cljs.core.contains_QMARK_(char_set,pair_char)){
cljs.core.chunk_append(b__17832,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,pair_char], null));

var G__17950 = (i__17831 + (1));
i__17831 = G__17950;
continue;
} else {
var G__17951 = (i__17831 + (1));
i__17831 = G__17951;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17832),wizmetria_web$grid$symmetry_view_$_iter__17829(cljs.core.chunk_rest(s__17830__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17832),null);
}
} else {
var c = cljs.core.first(s__17830__$2);
var ord = wizmetria_web.grid.ordinal(c);
var pair_ord = cljs.core.mod((ord + (13)),(26));
var pair_char = cljs.core.char$((pair_ord + "@".charCodeAt((0))));
if(cljs.core.contains_QMARK_(char_set,pair_char)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,pair_char], null),wizmetria_web$grid$symmetry_view_$_iter__17829(cljs.core.rest(s__17830__$2)));
} else {
var G__17953 = cljs.core.rest(s__17830__$2);
s__17830__$1 = G__17953;
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
return iter__5480__auto__(chars);
})():null);
var mirror_pairs = (cljs.core.truth_((function (){var and__5000__auto__ = has_symmetry;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = (!(is_rotation_axis));
if(and__5000__auto____$1){
var and__5000__auto____$2 = axis_id;
if(cljs.core.truth_(and__5000__auto____$2)){
return cljs.core.seq(cleaned_word);
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())?(function (){var chars = cljs.core.vec(cljs.core.seq(cleaned_word));
var pairs = (function (){var iter__5480__auto__ = (function wizmetria_web$grid$symmetry_view_$_iter__17833(s__17834){
return (new cljs.core.LazySeq(null,(function (){
var s__17834__$1 = s__17834;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17834__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var i = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__17834__$1,i,xs__6360__auto__,temp__5804__auto__,chars,positions,letter_map,cleaned_word,angle_per_letter,half_angle,axis_base_angle,axis_angle,vec__17823,x1,y1,vec__17826,x2,y2,is_rotation_axis,rotation_pairs){
return (function wizmetria_web$grid$symmetry_view_$_iter__17833_$_iter__17835(s__17836){
return (new cljs.core.LazySeq(null,((function (s__17834__$1,i,xs__6360__auto__,temp__5804__auto__,chars,positions,letter_map,cleaned_word,angle_per_letter,half_angle,axis_base_angle,axis_angle,vec__17823,x1,y1,vec__17826,x2,y2,is_rotation_axis,rotation_pairs){
return (function (){
var s__17836__$1 = s__17836;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__17836__$1);
if(temp__5804__auto____$1){
var s__17836__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17836__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17836__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17838 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17837 = (0);
while(true){
if((i__17837 < size__5479__auto__)){
var j = cljs.core._nth(c__5478__auto__,i__17837);
var c1 = (chars.cljs$core$IFn$_invoke$arity$1 ? chars.cljs$core$IFn$_invoke$arity$1(i) : chars.call(null, i));
var c2 = (chars.cljs$core$IFn$_invoke$arity$1 ? chars.cljs$core$IFn$_invoke$arity$1(j) : chars.call(null, j));
var ord1 = wizmetria_web.grid.ordinal(c1);
var ord2 = wizmetria_web.grid.ordinal(c2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod((ord1 + ord2),(26)),cljs.core.mod((axis_id + (2)),(26)))){
cljs.core.chunk_append(b__17838,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,i,j], null));

var G__17954 = (i__17837 + (1));
i__17837 = G__17954;
continue;
} else {
var G__17955 = (i__17837 + (1));
i__17837 = G__17955;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17838),wizmetria_web$grid$symmetry_view_$_iter__17833_$_iter__17835(cljs.core.chunk_rest(s__17836__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17838),null);
}
} else {
var j = cljs.core.first(s__17836__$2);
var c1 = (chars.cljs$core$IFn$_invoke$arity$1 ? chars.cljs$core$IFn$_invoke$arity$1(i) : chars.call(null, i));
var c2 = (chars.cljs$core$IFn$_invoke$arity$1 ? chars.cljs$core$IFn$_invoke$arity$1(j) : chars.call(null, j));
var ord1 = wizmetria_web.grid.ordinal(c1);
var ord2 = wizmetria_web.grid.ordinal(c2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod((ord1 + ord2),(26)),cljs.core.mod((axis_id + (2)),(26)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,i,j], null),wizmetria_web$grid$symmetry_view_$_iter__17833_$_iter__17835(cljs.core.rest(s__17836__$2)));
} else {
var G__17956 = cljs.core.rest(s__17836__$2);
s__17836__$1 = G__17956;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__17834__$1,i,xs__6360__auto__,temp__5804__auto__,chars,positions,letter_map,cleaned_word,angle_per_letter,half_angle,axis_base_angle,axis_angle,vec__17823,x1,y1,vec__17826,x2,y2,is_rotation_axis,rotation_pairs))
,null,null));
});})(s__17834__$1,i,xs__6360__auto__,temp__5804__auto__,chars,positions,letter_map,cleaned_word,angle_per_letter,half_angle,axis_base_angle,axis_angle,vec__17823,x1,y1,vec__17826,x2,y2,is_rotation_axis,rotation_pairs))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((i + (1)),cljs.core.count(chars))));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,wizmetria_web$grid$symmetry_view_$_iter__17833(cljs.core.rest(s__17834__$1)));
} else {
var G__17957 = cljs.core.rest(s__17834__$1);
s__17834__$1 = G__17957;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(chars)));
})();
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__17839){
var vec__17840 = p__17839;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17840,(0),null);
var __ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17840,(1),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17840,(2),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17840,(3),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(Math.abs((i - j)),(1));
}),pairs);
})():null);
var symmetry_type = ((cljs.core.not(has_symmetry))?"no":((is_rotation_axis)?"rotation":"mirror"
));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),(360),new cljs.core.Keyword(null,"height","height",1025178622),(360),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 360 360",new cljs.core.Keyword(null,"role","role",-736691072),"img",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),"symmetry-title symmetry-desc",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"symmetry-title"], null),["Symmetry visualization for ",cleaned_word].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"symmetry-desc"], null),["A visualization showing the word '",cleaned_word,"' with ",symmetry_type," symmetry",(cljs.core.truth_(has_symmetry)?[" along axis ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(axis_id)].join(''):null),". Letters are arranged in a circle with connections between consecutive letters.",(cljs.core.truth_((function (){var and__5000__auto__ = has_symmetry;
if(cljs.core.truth_(and__5000__auto__)){
return (!(is_rotation_axis));
} else {
return and__5000__auto__;
}
})())?" Mirror pairs are connected with dashed purple lines.":null),(cljs.core.truth_((function (){var and__5000__auto__ = has_symmetry;
if(cljs.core.truth_(and__5000__auto__)){
return is_rotation_axis;
} else {
return and__5000__auto__;
}
})())?" Rotation pairs are connected with dashed pink lines.":null)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.main-orb","circle.main-orb",335128937),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cx","cx",1272694324),wizmetria_web.grid.center_x,new cljs.core.Keyword(null,"cy","cy",755331060),wizmetria_web.grid.center_y,new cljs.core.Keyword(null,"r","r",-471384190),wizmetria_web.grid.radius,new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8b5cf6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),(function (){var iter__5480__auto__ = (function wizmetria_web$grid$symmetry_view_$_iter__17843(s__17844){
return (new cljs.core.LazySeq(null,(function (){
var s__17844__$1 = s__17844;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17844__$1);
if(temp__5804__auto__){
var s__17844__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17844__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17844__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17846 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17845 = (0);
while(true){
if((i__17845 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__17845);
cljs.core.chunk_append(b__17846,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),wizmetria_web.grid.center_x,new cljs.core.Keyword(null,"y1","y1",589123466),wizmetria_web.grid.center_y,new cljs.core.Keyword(null,"x2","x2",-1362513475),(wizmetria_web.grid.center_x + (wizmetria_web.grid.radius * Math.cos(wizmetria_web.grid.deg__GT_rad(i)))),new cljs.core.Keyword(null,"y2","y2",-718691301),(wizmetria_web.grid.center_y + (wizmetria_web.grid.radius * Math.sin(wizmetria_web.grid.deg__GT_rad(i)))),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"rgba(139, 92, 246, 0.1)",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ray-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)));

var G__17958 = (i__17845 + (1));
i__17845 = G__17958;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17846),wizmetria_web$grid$symmetry_view_$_iter__17843(cljs.core.chunk_rest(s__17844__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17846),null);
}
} else {
var i = cljs.core.first(s__17844__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),wizmetria_web.grid.center_x,new cljs.core.Keyword(null,"y1","y1",589123466),wizmetria_web.grid.center_y,new cljs.core.Keyword(null,"x2","x2",-1362513475),(wizmetria_web.grid.center_x + (wizmetria_web.grid.radius * Math.cos(wizmetria_web.grid.deg__GT_rad(i)))),new cljs.core.Keyword(null,"y2","y2",-718691301),(wizmetria_web.grid.center_y + (wizmetria_web.grid.radius * Math.sin(wizmetria_web.grid.deg__GT_rad(i)))),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"rgba(139, 92, 246, 0.1)",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ray-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)),wizmetria_web$grid$symmetry_view_$_iter__17843(cljs.core.rest(s__17844__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(360),((360) / (26))));
})(),(function (){var iter__5480__auto__ = (function wizmetria_web$grid$symmetry_view_$_iter__17847(s__17848){
return (new cljs.core.LazySeq(null,(function (){
var s__17848__$1 = s__17848;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17848__$1);
if(temp__5804__auto__){
var s__17848__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17848__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17848__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17850 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17849 = (0);
while(true){
if((i__17849 < size__5479__auto__)){
var map__17851 = cljs.core._nth(c__5478__auto__,i__17849);
var map__17851__$1 = cljs.core.__destructure_map(map__17851);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17851__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17851__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var letter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17851__$1,new cljs.core.Keyword(null,"letter","letter",-125811450));
cljs.core.chunk_append(b__17850,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Letter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"fill","fill",883462889),"#d1d5db"], null),letter], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["alphabet-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join('')], null)));

var G__17959 = (i__17849 + (1));
i__17849 = G__17959;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17850),wizmetria_web$grid$symmetry_view_$_iter__17847(cljs.core.chunk_rest(s__17848__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17850),null);
}
} else {
var map__17852 = cljs.core.first(s__17848__$2);
var map__17852__$1 = cljs.core.__destructure_map(map__17852);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17852__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17852__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var letter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17852__$1,new cljs.core.Keyword(null,"letter","letter",-125811450));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Letter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"fill","fill",883462889),"#d1d5db"], null),letter], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["alphabet-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join('')], null)),wizmetria_web$grid$symmetry_view_$_iter__17847(cljs.core.rest(s__17848__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(positions);
})(),((cljs.core.seq(cleaned_word))?(function (){var word_letters = cljs.core.seq(cleaned_word);
var pairs = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__17853){
var vec__17854 = p__17853;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17854,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17854,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,idx], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,word_letters,cljs.core.rest(word_letters)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Word connections for ",cleaned_word].join('')], null),(cljs.core.truth_((function (){var and__5000__auto__ = (!(is_rotation_axis));
if(and__5000__auto__){
var and__5000__auto____$1 = has_symmetry;
if(cljs.core.truth_(and__5000__auto____$1)){
return cljs.core.seq(mirror_pairs);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Mirror symmetry connections"], null),(function (){var iter__5480__auto__ = (function wizmetria_web$grid$symmetry_view_$_iter__17857(s__17858){
return (new cljs.core.LazySeq(null,(function (){
var s__17858__$1 = s__17858;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17858__$1);
if(temp__5804__auto__){
var s__17858__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17858__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17858__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17860 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17859 = (0);
while(true){
if((i__17859 < size__5479__auto__)){
var vec__17861 = cljs.core._nth(c__5478__auto__,i__17859);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17861,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17861,(1),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17861,(2),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17861,(3),null);
var pos1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(letter_map,c1);
var pos2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(letter_map,c2);
var intersection1 = wizmetria_web.grid.line_circle_intersection(pos1);
var intersection2 = wizmetria_web.grid.line_circle_intersection(pos2);
if(cljs.core.truth_((function (){var and__5000__auto__ = pos1;
if(cljs.core.truth_(and__5000__auto__)){
return pos2;
} else {
return and__5000__auto__;
}
})())){
cljs.core.chunk_append(b__17860,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Mirror pair ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1)," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2)].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#c026d3",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#c026d3",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"2,4"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"r","r",-471384190),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"#c026d3",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.15], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"r","r",-471384190),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"#c026d3",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.15], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["mirror-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')], null)));

var G__17960 = (i__17859 + (1));
i__17859 = G__17960;
continue;
} else {
var G__17961 = (i__17859 + (1));
i__17859 = G__17961;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17860),wizmetria_web$grid$symmetry_view_$_iter__17857(cljs.core.chunk_rest(s__17858__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17860),null);
}
} else {
var vec__17864 = cljs.core.first(s__17858__$2);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17864,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17864,(1),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17864,(2),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17864,(3),null);
var pos1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(letter_map,c1);
var pos2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(letter_map,c2);
var intersection1 = wizmetria_web.grid.line_circle_intersection(pos1);
var intersection2 = wizmetria_web.grid.line_circle_intersection(pos2);
if(cljs.core.truth_((function (){var and__5000__auto__ = pos1;
if(cljs.core.truth_(and__5000__auto__)){
return pos2;
} else {
return and__5000__auto__;
}
})())){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Mirror pair ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1)," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2)].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#c026d3",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#c026d3",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"2,4"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"r","r",-471384190),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"#c026d3",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.15], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"r","r",-471384190),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"#c026d3",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.15], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["mirror-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')], null)),wizmetria_web$grid$symmetry_view_$_iter__17857(cljs.core.rest(s__17858__$2)));
} else {
var G__17962 = cljs.core.rest(s__17858__$2);
s__17858__$1 = G__17962;
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
return iter__5480__auto__(mirror_pairs);
})()], null):null),(cljs.core.truth_((function (){var and__5000__auto__ = is_rotation_axis;
if(and__5000__auto__){
return has_symmetry;
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Rotation symmetry connections"], null),(function (){var iter__5480__auto__ = (function wizmetria_web$grid$symmetry_view_$_iter__17867(s__17868){
return (new cljs.core.LazySeq(null,(function (){
var s__17868__$1 = s__17868;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17868__$1);
if(temp__5804__auto__){
var s__17868__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17868__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17868__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17870 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17869 = (0);
while(true){
if((i__17869 < size__5479__auto__)){
var vec__17871 = cljs.core._nth(c__5478__auto__,i__17869);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17871,(0),null);
var vec__17874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17871,(1),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17874,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17874,(1),null);
var pos1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(letter_map,c1);
var pos2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(letter_map,c2);
var intersection1 = wizmetria_web.grid.line_circle_intersection(pos1);
var intersection2 = wizmetria_web.grid.line_circle_intersection(pos2);
if(cljs.core.truth_((function (){var and__5000__auto__ = pos1;
if(cljs.core.truth_(and__5000__auto__)){
return pos2;
} else {
return and__5000__auto__;
}
})())){
cljs.core.chunk_append(b__17870,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Rotation pair ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1)," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2)].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#f472b6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#f472b6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"2,4"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"r","r",-471384190),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"#f472b6",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.15], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"r","r",-471384190),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"#f472b6",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.15], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["rotation-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null)));

var G__17964 = (i__17869 + (1));
i__17869 = G__17964;
continue;
} else {
var G__17965 = (i__17869 + (1));
i__17869 = G__17965;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17870),wizmetria_web$grid$symmetry_view_$_iter__17867(cljs.core.chunk_rest(s__17868__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17870),null);
}
} else {
var vec__17877 = cljs.core.first(s__17868__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17877,(0),null);
var vec__17880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17877,(1),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17880,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17880,(1),null);
var pos1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(letter_map,c1);
var pos2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(letter_map,c2);
var intersection1 = wizmetria_web.grid.line_circle_intersection(pos1);
var intersection2 = wizmetria_web.grid.line_circle_intersection(pos2);
if(cljs.core.truth_((function (){var and__5000__auto__ = pos1;
if(cljs.core.truth_(and__5000__auto__)){
return pos2;
} else {
return and__5000__auto__;
}
})())){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Rotation pair ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1)," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2)].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#f472b6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#f472b6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"2,4"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"r","r",-471384190),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"#f472b6",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.15], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"r","r",-471384190),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"#f472b6",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.15], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["rotation-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null)),wizmetria_web$grid$symmetry_view_$_iter__17867(cljs.core.rest(s__17868__$2)));
} else {
var G__17966 = cljs.core.rest(s__17868__$2);
s__17868__$1 = G__17966;
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
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,rotation_pairs));
})()], null):null),(cljs.core.truth_(has_symmetry)?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),[((is_rotation_axis)?"Rotation":"Mirror")," symmetry axis ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(axis_id)].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x1,new cljs.core.Keyword(null,"y1","y1",589123466),y1,new cljs.core.Keyword(null,"x2","x2",-1362513475),x2,new cljs.core.Keyword(null,"y2","y2",-718691301),y2,new cljs.core.Keyword(null,"stroke","stroke",1741823555),((is_rotation_axis)?"#f472b6":"#c026d3"),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(6),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.2], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x1,new cljs.core.Keyword(null,"y1","y1",589123466),y1,new cljs.core.Keyword(null,"x2","x2",-1362513475),x2,new cljs.core.Keyword(null,"y2","y2",-718691301),y2,new cljs.core.Keyword(null,"stroke","stroke",1741823555),((is_rotation_axis)?"#f472b6":"#c026d3"),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),((is_rotation_axis)?"10,5":"5,5")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),x1,new cljs.core.Keyword(null,"cy","cy",755331060),y1,new cljs.core.Keyword(null,"r","r",-471384190),(4),new cljs.core.Keyword(null,"fill","fill",883462889),((is_rotation_axis)?"#f472b6":"#c026d3")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),x2,new cljs.core.Keyword(null,"cy","cy",755331060),y2,new cljs.core.Keyword(null,"r","r",-471384190),(4),new cljs.core.Keyword(null,"fill","fill",883462889),((is_rotation_axis)?"#f472b6":"#c026d3")], null)], null)], null):null),(function (){var iter__5480__auto__ = (function wizmetria_web$grid$symmetry_view_$_iter__17883(s__17884){
return (new cljs.core.LazySeq(null,(function (){
var s__17884__$1 = s__17884;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17884__$1);
if(temp__5804__auto__){
var s__17884__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17884__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17884__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17886 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17885 = (0);
while(true){
if((i__17885 < size__5479__auto__)){
var vec__17887 = cljs.core._nth(c__5478__auto__,i__17885);
var from_letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17887,(0),null);
var to_letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17887,(1),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17887,(2),null);
var from_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(letter_map,from_letter);
var to_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(letter_map,to_letter);
var from_intersection = wizmetria_web.grid.line_circle_intersection(from_pos);
var to_intersection = wizmetria_web.grid.line_circle_intersection(to_pos);
if(cljs.core.truth_((function (){var and__5000__auto__ = from_pos;
if(cljs.core.truth_(and__5000__auto__)){
return to_pos;
} else {
return and__5000__auto__;
}
})())){
cljs.core.chunk_append(b__17886,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(from_intersection),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(from_intersection),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(to_intersection),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(to_intersection),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8b5cf6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),2.5,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Connection from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from_letter)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(to_letter)].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["line-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from_letter),cljs.core.str.cljs$core$IFn$_invoke$arity$1(to_letter),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null)));

var G__17971 = (i__17885 + (1));
i__17885 = G__17971;
continue;
} else {
var G__17972 = (i__17885 + (1));
i__17885 = G__17972;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17886),wizmetria_web$grid$symmetry_view_$_iter__17883(cljs.core.chunk_rest(s__17884__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17886),null);
}
} else {
var vec__17890 = cljs.core.first(s__17884__$2);
var from_letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17890,(0),null);
var to_letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17890,(1),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17890,(2),null);
var from_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(letter_map,from_letter);
var to_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(letter_map,to_letter);
var from_intersection = wizmetria_web.grid.line_circle_intersection(from_pos);
var to_intersection = wizmetria_web.grid.line_circle_intersection(to_pos);
if(cljs.core.truth_((function (){var and__5000__auto__ = from_pos;
if(cljs.core.truth_(and__5000__auto__)){
return to_pos;
} else {
return and__5000__auto__;
}
})())){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(from_intersection),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(from_intersection),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(to_intersection),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(to_intersection),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8b5cf6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),2.5,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Connection from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from_letter)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(to_letter)].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["line-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from_letter),cljs.core.str.cljs$core$IFn$_invoke$arity$1(to_letter),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null)),wizmetria_web$grid$symmetry_view_$_iter__17883(cljs.core.rest(s__17884__$2)));
} else {
var G__17973 = cljs.core.rest(s__17884__$2);
s__17884__$1 = G__17973;
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
return iter__5480__auto__(pairs);
})(),(function (){var iter__5480__auto__ = (function wizmetria_web$grid$symmetry_view_$_iter__17893(s__17894){
return (new cljs.core.LazySeq(null,(function (){
var s__17894__$1 = s__17894;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17894__$1);
if(temp__5804__auto__){
var s__17894__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17894__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17894__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17896 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17895 = (0);
while(true){
if((i__17895 < size__5479__auto__)){
var vec__17897 = cljs.core._nth(c__5478__auto__,i__17895);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17897,(0),null);
var letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17897,(1),null);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(letter_map,letter);
var intersection = wizmetria_web.grid.line_circle_intersection(pos);
if(cljs.core.truth_(pos)){
cljs.core.chunk_append(b__17896,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection),new cljs.core.Keyword(null,"r","r",-471384190),(4),new cljs.core.Keyword(null,"fill","fill",883462889),"#a855f7",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Marker for letter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["dot-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null)));

var G__17974 = (i__17895 + (1));
i__17895 = G__17974;
continue;
} else {
var G__17979 = (i__17895 + (1));
i__17895 = G__17979;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17896),wizmetria_web$grid$symmetry_view_$_iter__17893(cljs.core.chunk_rest(s__17894__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17896),null);
}
} else {
var vec__17900 = cljs.core.first(s__17894__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17900,(0),null);
var letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17900,(1),null);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(letter_map,letter);
var intersection = wizmetria_web.grid.line_circle_intersection(pos);
if(cljs.core.truth_(pos)){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection),new cljs.core.Keyword(null,"r","r",-471384190),(4),new cljs.core.Keyword(null,"fill","fill",883462889),"#a855f7",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Marker for letter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["dot-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null)),wizmetria_web$grid$symmetry_view_$_iter__17893(cljs.core.rest(s__17894__$2)));
} else {
var G__17980 = cljs.core.rest(s__17894__$2);
s__17894__$1 = G__17980;
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
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,word_letters));
})()], null);
})():null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.outer-circle","circle.outer-circle",-306220999),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cx","cx",1272694324),wizmetria_web.grid.center_x,new cljs.core.Keyword(null,"cy","cy",755331060),wizmetria_web.grid.center_y,new cljs.core.Keyword(null,"r","r",-471384190),(wizmetria_web.grid.letter_radius + (30)),new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#a855f7",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),2.5,new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null)], null);
});

//# sourceMappingURL=wizmetria_web.grid.js.map
