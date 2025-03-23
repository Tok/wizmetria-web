goog.provide('wizmetria_web.grid');
wizmetria_web.grid.abc = cljs.core.seq("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
wizmetria_web.grid.radius = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(wizmetria_web.config.visualization_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle-radius","circle-radius",-1126504347)], null));
wizmetria_web.grid.center_x = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(wizmetria_web.config.visualization_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center-x","center-x",2109659472)], null));
wizmetria_web.grid.center_y = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(wizmetria_web.config.visualization_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center-y","center-y",-233780987)], null));
wizmetria_web.grid.letter_radius = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(wizmetria_web.config.visualization_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letter-radius","letter-radius",693115058)], null));
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
var vec__13459 = wizmetria_web.grid.polar__GT_cartesian(angle,wizmetria_web.grid.letter_radius);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13459,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13459,(1),null);
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
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(360),new cljs.core.Keyword(null,"height","height",1025178622),(360),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 360 360",new cljs.core.Keyword(null,"role","role",-736691072),"img",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),"circle-title circle-desc"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"circle-title"], null),"Letter Circle Visualization"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"circle-desc"], null),["A circular visualization showing the 26 letters of the alphabet arranged in a circle",((cljs.core.seq(cleaned_word))?[" with the word '",cleaned_word,"' highlighted"].join(''):null)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.main-orb","circle.main-orb",335128937),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cx","cx",1272694324),wizmetria_web.grid.center_x,new cljs.core.Keyword(null,"cy","cy",755331060),wizmetria_web.grid.center_y,new cljs.core.Keyword(null,"r","r",-471384190),wizmetria_web.grid.radius,new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8b5cf6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),(function (){var iter__5480__auto__ = (function wizmetria_web$grid$circle_view_$_iter__13468(s__13469){
return (new cljs.core.LazySeq(null,(function (){
var s__13469__$1 = s__13469;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13469__$1);
if(temp__5804__auto__){
var s__13469__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13469__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13469__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13471 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13470 = (0);
while(true){
if((i__13470 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__13470);
cljs.core.chunk_append(b__13471,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),wizmetria_web.grid.center_x,new cljs.core.Keyword(null,"y1","y1",589123466),wizmetria_web.grid.center_y,new cljs.core.Keyword(null,"x2","x2",-1362513475),(wizmetria_web.grid.center_x + (wizmetria_web.grid.radius * Math.cos(wizmetria_web.grid.deg__GT_rad(i)))),new cljs.core.Keyword(null,"y2","y2",-718691301),(wizmetria_web.grid.center_y + (wizmetria_web.grid.radius * Math.sin(wizmetria_web.grid.deg__GT_rad(i)))),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"rgba(139, 92, 246, 0.1)",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ray-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)));

var G__13712 = (i__13470 + (1));
i__13470 = G__13712;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13471),wizmetria_web$grid$circle_view_$_iter__13468(cljs.core.chunk_rest(s__13469__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13471),null);
}
} else {
var i = cljs.core.first(s__13469__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),wizmetria_web.grid.center_x,new cljs.core.Keyword(null,"y1","y1",589123466),wizmetria_web.grid.center_y,new cljs.core.Keyword(null,"x2","x2",-1362513475),(wizmetria_web.grid.center_x + (wizmetria_web.grid.radius * Math.cos(wizmetria_web.grid.deg__GT_rad(i)))),new cljs.core.Keyword(null,"y2","y2",-718691301),(wizmetria_web.grid.center_y + (wizmetria_web.grid.radius * Math.sin(wizmetria_web.grid.deg__GT_rad(i)))),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"rgba(139, 92, 246, 0.1)",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ray-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)),wizmetria_web$grid$circle_view_$_iter__13468(cljs.core.rest(s__13469__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(360),((360) / (26))));
})(),(function (){var iter__5480__auto__ = (function wizmetria_web$grid$circle_view_$_iter__13483(s__13484){
return (new cljs.core.LazySeq(null,(function (){
var s__13484__$1 = s__13484;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13484__$1);
if(temp__5804__auto__){
var s__13484__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13484__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13484__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13486 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13485 = (0);
while(true){
if((i__13485 < size__5479__auto__)){
var map__13487 = cljs.core._nth(c__5478__auto__,i__13485);
var map__13487__$1 = cljs.core.__destructure_map(map__13487);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13487__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13487__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var letter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13487__$1,new cljs.core.Keyword(null,"letter","letter",-125811450));
cljs.core.chunk_append(b__13486,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Letter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"fill","fill",883462889),"#d1d5db"], null),letter], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["letter-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join('')], null)));

var G__13713 = (i__13485 + (1));
i__13485 = G__13713;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13486),wizmetria_web$grid$circle_view_$_iter__13483(cljs.core.chunk_rest(s__13484__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13486),null);
}
} else {
var map__13489 = cljs.core.first(s__13484__$2);
var map__13489__$1 = cljs.core.__destructure_map(map__13489);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13489__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13489__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var letter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13489__$1,new cljs.core.Keyword(null,"letter","letter",-125811450));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Letter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"fill","fill",883462889),"#d1d5db"], null),letter], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["letter-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join('')], null)),wizmetria_web$grid$circle_view_$_iter__13483(cljs.core.rest(s__13484__$2)));
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
var pairs = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__13494){
var vec__13495 = p__13494;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13495,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13495,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,idx], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,word_letters,cljs.core.rest(word_letters)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Connections for word ",cleaned_word].join('')], null),(function (){var iter__5480__auto__ = (function wizmetria_web$grid$circle_view_$_iter__13499(s__13500){
return (new cljs.core.LazySeq(null,(function (){
var s__13500__$1 = s__13500;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13500__$1);
if(temp__5804__auto__){
var s__13500__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13500__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13500__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13502 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13501 = (0);
while(true){
if((i__13501 < size__5479__auto__)){
var vec__13504 = cljs.core._nth(c__5478__auto__,i__13501);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13504,(0),null);
var vec__13507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13504,(1),null);
var from_letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13507,(0),null);
var to_letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13507,(1),null);
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
cljs.core.chunk_append(b__13502,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(from_intersection),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(from_intersection),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(to_intersection),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(to_intersection),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8b5cf6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),2.5,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Connection from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from_letter)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(to_letter)].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["line-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from_letter),cljs.core.str.cljs$core$IFn$_invoke$arity$1(to_letter),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null)));

var G__13714 = (i__13501 + (1));
i__13501 = G__13714;
continue;
} else {
var G__13715 = (i__13501 + (1));
i__13501 = G__13715;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13502),wizmetria_web$grid$circle_view_$_iter__13499(cljs.core.chunk_rest(s__13500__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13502),null);
}
} else {
var vec__13510 = cljs.core.first(s__13500__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13510,(0),null);
var vec__13513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13510,(1),null);
var from_letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13513,(0),null);
var to_letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13513,(1),null);
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
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(from_intersection),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(from_intersection),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(to_intersection),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(to_intersection),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8b5cf6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),2.5,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Connection from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from_letter)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(to_letter)].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["line-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from_letter),cljs.core.str.cljs$core$IFn$_invoke$arity$1(to_letter),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null)),wizmetria_web$grid$circle_view_$_iter__13499(cljs.core.rest(s__13500__$2)));
} else {
var G__13716 = cljs.core.rest(s__13500__$2);
s__13500__$1 = G__13716;
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
})(),(function (){var iter__5480__auto__ = (function wizmetria_web$grid$circle_view_$_iter__13521(s__13522){
return (new cljs.core.LazySeq(null,(function (){
var s__13522__$1 = s__13522;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13522__$1);
if(temp__5804__auto__){
var s__13522__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13522__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13522__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13524 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13523 = (0);
while(true){
if((i__13523 < size__5479__auto__)){
var vec__13526 = cljs.core._nth(c__5478__auto__,i__13523);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13526,(0),null);
var letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13526,(1),null);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(letter_map,letter);
var intersection = wizmetria_web.grid.line_circle_intersection(pos);
if(cljs.core.truth_(pos)){
cljs.core.chunk_append(b__13524,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection),new cljs.core.Keyword(null,"r","r",-471384190),(4),new cljs.core.Keyword(null,"fill","fill",883462889),"#a855f7",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Letter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)," position marker"].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["dot-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null)));

var G__13717 = (i__13523 + (1));
i__13523 = G__13717;
continue;
} else {
var G__13718 = (i__13523 + (1));
i__13523 = G__13718;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13524),wizmetria_web$grid$circle_view_$_iter__13521(cljs.core.chunk_rest(s__13522__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13524),null);
}
} else {
var vec__13530 = cljs.core.first(s__13522__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13530,(0),null);
var letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13530,(1),null);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(letter_map,letter);
var intersection = wizmetria_web.grid.line_circle_intersection(pos);
if(cljs.core.truth_(pos)){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection),new cljs.core.Keyword(null,"r","r",-471384190),(4),new cljs.core.Keyword(null,"fill","fill",883462889),"#a855f7",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Letter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)," position marker"].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["dot-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null)),wizmetria_web$grid$circle_view_$_iter__13521(cljs.core.rest(s__13522__$2)));
} else {
var G__13719 = cljs.core.rest(s__13522__$2);
s__13522__$1 = G__13719;
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
var vec__13538 = wizmetria_web.grid.polar__GT_cartesian(angle,wizmetria_web.grid.radius);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13538,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13538,(1),null);
var vec__13541 = wizmetria_web.grid.polar__GT_cartesian((angle + Math.PI),wizmetria_web.grid.radius);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13541,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13541,(1),null);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(360),new cljs.core.Keyword(null,"height","height",1025178622),(360),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 360 360",new cljs.core.Keyword(null,"role","role",-736691072),"img",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),"axis-title axis-desc"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"axis-title"], null),"Symmetry Axis Visualization"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"axis-desc"], null),["Visualization showing symmetry axis ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(axis_id)," across the alphabet circle"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.main-orb","circle.main-orb",335128937),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cx","cx",1272694324),wizmetria_web.grid.center_x,new cljs.core.Keyword(null,"cy","cy",755331060),wizmetria_web.grid.center_y,new cljs.core.Keyword(null,"r","r",-471384190),wizmetria_web.grid.radius,new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8b5cf6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),(function (){var iter__5480__auto__ = (function wizmetria_web$grid$axis_view_$_iter__13545(s__13546){
return (new cljs.core.LazySeq(null,(function (){
var s__13546__$1 = s__13546;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13546__$1);
if(temp__5804__auto__){
var s__13546__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13546__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13546__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13548 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13547 = (0);
while(true){
if((i__13547 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__13547);
cljs.core.chunk_append(b__13548,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),wizmetria_web.grid.center_x,new cljs.core.Keyword(null,"y1","y1",589123466),wizmetria_web.grid.center_y,new cljs.core.Keyword(null,"x2","x2",-1362513475),(wizmetria_web.grid.center_x + (wizmetria_web.grid.radius * Math.cos(wizmetria_web.grid.deg__GT_rad(i)))),new cljs.core.Keyword(null,"y2","y2",-718691301),(wizmetria_web.grid.center_y + (wizmetria_web.grid.radius * Math.sin(wizmetria_web.grid.deg__GT_rad(i)))),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"rgba(139, 92, 246, 0.1)",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ray-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)));

var G__13720 = (i__13547 + (1));
i__13547 = G__13720;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13548),wizmetria_web$grid$axis_view_$_iter__13545(cljs.core.chunk_rest(s__13546__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13548),null);
}
} else {
var i = cljs.core.first(s__13546__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),wizmetria_web.grid.center_x,new cljs.core.Keyword(null,"y1","y1",589123466),wizmetria_web.grid.center_y,new cljs.core.Keyword(null,"x2","x2",-1362513475),(wizmetria_web.grid.center_x + (wizmetria_web.grid.radius * Math.cos(wizmetria_web.grid.deg__GT_rad(i)))),new cljs.core.Keyword(null,"y2","y2",-718691301),(wizmetria_web.grid.center_y + (wizmetria_web.grid.radius * Math.sin(wizmetria_web.grid.deg__GT_rad(i)))),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"rgba(139, 92, 246, 0.1)",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ray-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)),wizmetria_web$grid$axis_view_$_iter__13545(cljs.core.rest(s__13546__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(360),((360) / (26))));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475)],["5,5","#c026d3","true",y1,(2),x1,["Symmetry axis ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(axis_id)].join(''),y2,x2])], null),(function (){var iter__5480__auto__ = (function wizmetria_web$grid$axis_view_$_iter__13551(s__13552){
return (new cljs.core.LazySeq(null,(function (){
var s__13552__$1 = s__13552;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13552__$1);
if(temp__5804__auto__){
var s__13552__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13552__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13552__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13554 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13553 = (0);
while(true){
if((i__13553 < size__5479__auto__)){
var map__13559 = cljs.core._nth(c__5478__auto__,i__13553);
var map__13559__$1 = cljs.core.__destructure_map(map__13559);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13559__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13559__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var letter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13559__$1,new cljs.core.Keyword(null,"letter","letter",-125811450));
cljs.core.chunk_append(b__13554,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Letter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"fill","fill",883462889),"#d1d5db"], null),letter], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["alphabet-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join('')], null)));

var G__13721 = (i__13553 + (1));
i__13553 = G__13721;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13554),wizmetria_web$grid$axis_view_$_iter__13551(cljs.core.chunk_rest(s__13552__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13554),null);
}
} else {
var map__13561 = cljs.core.first(s__13552__$2);
var map__13561__$1 = cljs.core.__destructure_map(map__13561);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13561__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13561__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var letter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13561__$1,new cljs.core.Keyword(null,"letter","letter",-125811450));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Letter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"fill","fill",883462889),"#d1d5db"], null),letter], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["alphabet-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join('')], null)),wizmetria_web$grid$axis_view_$_iter__13551(cljs.core.rest(s__13552__$2)));
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
var vec__13567 = wizmetria_web.grid.polar__GT_cartesian(axis_angle,wizmetria_web.grid.radius);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13567,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13567,(1),null);
var vec__13570 = wizmetria_web.grid.polar__GT_cartesian((axis_angle + Math.PI),wizmetria_web.grid.radius);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13570,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13570,(1),null);
var is_rotation_axis = ((cljs.core.seq(cleaned_word)) && (((wizmetria_web.sym.rotation_symmetric_word_QMARK_(cleaned_word)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis_id,wizmetria_web.sym.rotation_symmetry_axis_id_for_word(cleaned_word))))));
var rotation_pairs = ((is_rotation_axis)?(function (){var chars = cljs.core.vec(cljs.core.seq(cleaned_word));
var char_set = cljs.core.set(chars);
var iter__5480__auto__ = (function wizmetria_web$grid$symmetry_view_$_iter__13573(s__13574){
return (new cljs.core.LazySeq(null,(function (){
var s__13574__$1 = s__13574;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13574__$1);
if(temp__5804__auto__){
var s__13574__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13574__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13574__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13576 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13575 = (0);
while(true){
if((i__13575 < size__5479__auto__)){
var c = cljs.core._nth(c__5478__auto__,i__13575);
var ord = wizmetria_web.grid.ordinal(c);
var pair_ord = cljs.core.mod((ord + (13)),(26));
var pair_char = cljs.core.char$((pair_ord + "@".charCodeAt((0))));
if(cljs.core.contains_QMARK_(char_set,pair_char)){
cljs.core.chunk_append(b__13576,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,pair_char], null));

var G__13722 = (i__13575 + (1));
i__13575 = G__13722;
continue;
} else {
var G__13723 = (i__13575 + (1));
i__13575 = G__13723;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13576),wizmetria_web$grid$symmetry_view_$_iter__13573(cljs.core.chunk_rest(s__13574__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13576),null);
}
} else {
var c = cljs.core.first(s__13574__$2);
var ord = wizmetria_web.grid.ordinal(c);
var pair_ord = cljs.core.mod((ord + (13)),(26));
var pair_char = cljs.core.char$((pair_ord + "@".charCodeAt((0))));
if(cljs.core.contains_QMARK_(char_set,pair_char)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,pair_char], null),wizmetria_web$grid$symmetry_view_$_iter__13573(cljs.core.rest(s__13574__$2)));
} else {
var G__13724 = cljs.core.rest(s__13574__$2);
s__13574__$1 = G__13724;
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
var pairs = (function (){var iter__5480__auto__ = (function wizmetria_web$grid$symmetry_view_$_iter__13595(s__13596){
return (new cljs.core.LazySeq(null,(function (){
var s__13596__$1 = s__13596;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13596__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var i = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__13596__$1,i,xs__6360__auto__,temp__5804__auto__,chars,positions,letter_map,cleaned_word,angle_per_letter,half_angle,axis_base_angle,axis_angle,vec__13567,x1,y1,vec__13570,x2,y2,is_rotation_axis,rotation_pairs){
return (function wizmetria_web$grid$symmetry_view_$_iter__13595_$_iter__13597(s__13598){
return (new cljs.core.LazySeq(null,((function (s__13596__$1,i,xs__6360__auto__,temp__5804__auto__,chars,positions,letter_map,cleaned_word,angle_per_letter,half_angle,axis_base_angle,axis_angle,vec__13567,x1,y1,vec__13570,x2,y2,is_rotation_axis,rotation_pairs){
return (function (){
var s__13598__$1 = s__13598;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13598__$1);
if(temp__5804__auto____$1){
var s__13598__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13598__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13598__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13600 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13599 = (0);
while(true){
if((i__13599 < size__5479__auto__)){
var j = cljs.core._nth(c__5478__auto__,i__13599);
var c1 = (chars.cljs$core$IFn$_invoke$arity$1 ? chars.cljs$core$IFn$_invoke$arity$1(i) : chars.call(null, i));
var c2 = (chars.cljs$core$IFn$_invoke$arity$1 ? chars.cljs$core$IFn$_invoke$arity$1(j) : chars.call(null, j));
var ord1 = wizmetria_web.grid.ordinal(c1);
var ord2 = wizmetria_web.grid.ordinal(c2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod((ord1 + ord2),(26)),cljs.core.mod((axis_id + (2)),(26)))){
cljs.core.chunk_append(b__13600,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,i,j], null));

var G__13725 = (i__13599 + (1));
i__13599 = G__13725;
continue;
} else {
var G__13726 = (i__13599 + (1));
i__13599 = G__13726;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13600),wizmetria_web$grid$symmetry_view_$_iter__13595_$_iter__13597(cljs.core.chunk_rest(s__13598__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13600),null);
}
} else {
var j = cljs.core.first(s__13598__$2);
var c1 = (chars.cljs$core$IFn$_invoke$arity$1 ? chars.cljs$core$IFn$_invoke$arity$1(i) : chars.call(null, i));
var c2 = (chars.cljs$core$IFn$_invoke$arity$1 ? chars.cljs$core$IFn$_invoke$arity$1(j) : chars.call(null, j));
var ord1 = wizmetria_web.grid.ordinal(c1);
var ord2 = wizmetria_web.grid.ordinal(c2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod((ord1 + ord2),(26)),cljs.core.mod((axis_id + (2)),(26)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,i,j], null),wizmetria_web$grid$symmetry_view_$_iter__13595_$_iter__13597(cljs.core.rest(s__13598__$2)));
} else {
var G__13727 = cljs.core.rest(s__13598__$2);
s__13598__$1 = G__13727;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__13596__$1,i,xs__6360__auto__,temp__5804__auto__,chars,positions,letter_map,cleaned_word,angle_per_letter,half_angle,axis_base_angle,axis_angle,vec__13567,x1,y1,vec__13570,x2,y2,is_rotation_axis,rotation_pairs))
,null,null));
});})(s__13596__$1,i,xs__6360__auto__,temp__5804__auto__,chars,positions,letter_map,cleaned_word,angle_per_letter,half_angle,axis_base_angle,axis_angle,vec__13567,x1,y1,vec__13570,x2,y2,is_rotation_axis,rotation_pairs))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((i + (1)),cljs.core.count(chars))));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,wizmetria_web$grid$symmetry_view_$_iter__13595(cljs.core.rest(s__13596__$1)));
} else {
var G__13728 = cljs.core.rest(s__13596__$1);
s__13596__$1 = G__13728;
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
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__13610){
var vec__13611 = p__13610;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13611,(0),null);
var __ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13611,(1),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13611,(2),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13611,(3),null);
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
})())?" Rotation pairs are connected with dashed pink lines.":null)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.main-orb","circle.main-orb",335128937),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cx","cx",1272694324),wizmetria_web.grid.center_x,new cljs.core.Keyword(null,"cy","cy",755331060),wizmetria_web.grid.center_y,new cljs.core.Keyword(null,"r","r",-471384190),wizmetria_web.grid.radius,new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8b5cf6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),(function (){var iter__5480__auto__ = (function wizmetria_web$grid$symmetry_view_$_iter__13614(s__13615){
return (new cljs.core.LazySeq(null,(function (){
var s__13615__$1 = s__13615;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13615__$1);
if(temp__5804__auto__){
var s__13615__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13615__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13615__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13617 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13616 = (0);
while(true){
if((i__13616 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__13616);
cljs.core.chunk_append(b__13617,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),wizmetria_web.grid.center_x,new cljs.core.Keyword(null,"y1","y1",589123466),wizmetria_web.grid.center_y,new cljs.core.Keyword(null,"x2","x2",-1362513475),(wizmetria_web.grid.center_x + (wizmetria_web.grid.radius * Math.cos(wizmetria_web.grid.deg__GT_rad(i)))),new cljs.core.Keyword(null,"y2","y2",-718691301),(wizmetria_web.grid.center_y + (wizmetria_web.grid.radius * Math.sin(wizmetria_web.grid.deg__GT_rad(i)))),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"rgba(139, 92, 246, 0.1)",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ray-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)));

var G__13729 = (i__13616 + (1));
i__13616 = G__13729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13617),wizmetria_web$grid$symmetry_view_$_iter__13614(cljs.core.chunk_rest(s__13615__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13617),null);
}
} else {
var i = cljs.core.first(s__13615__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),wizmetria_web.grid.center_x,new cljs.core.Keyword(null,"y1","y1",589123466),wizmetria_web.grid.center_y,new cljs.core.Keyword(null,"x2","x2",-1362513475),(wizmetria_web.grid.center_x + (wizmetria_web.grid.radius * Math.cos(wizmetria_web.grid.deg__GT_rad(i)))),new cljs.core.Keyword(null,"y2","y2",-718691301),(wizmetria_web.grid.center_y + (wizmetria_web.grid.radius * Math.sin(wizmetria_web.grid.deg__GT_rad(i)))),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"rgba(139, 92, 246, 0.1)",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ray-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)),wizmetria_web$grid$symmetry_view_$_iter__13614(cljs.core.rest(s__13615__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(360),((360) / (26))));
})(),(function (){var iter__5480__auto__ = (function wizmetria_web$grid$symmetry_view_$_iter__13623(s__13624){
return (new cljs.core.LazySeq(null,(function (){
var s__13624__$1 = s__13624;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13624__$1);
if(temp__5804__auto__){
var s__13624__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13624__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13624__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13626 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13625 = (0);
while(true){
if((i__13625 < size__5479__auto__)){
var map__13630 = cljs.core._nth(c__5478__auto__,i__13625);
var map__13630__$1 = cljs.core.__destructure_map(map__13630);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13630__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13630__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var letter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13630__$1,new cljs.core.Keyword(null,"letter","letter",-125811450));
cljs.core.chunk_append(b__13626,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Letter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"fill","fill",883462889),"#d1d5db"], null),letter], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["alphabet-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join('')], null)));

var G__13730 = (i__13625 + (1));
i__13625 = G__13730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13626),wizmetria_web$grid$symmetry_view_$_iter__13623(cljs.core.chunk_rest(s__13624__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13626),null);
}
} else {
var map__13632 = cljs.core.first(s__13624__$2);
var map__13632__$1 = cljs.core.__destructure_map(map__13632);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13632__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13632__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var letter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13632__$1,new cljs.core.Keyword(null,"letter","letter",-125811450));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Letter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"fill","fill",883462889),"#d1d5db"], null),letter], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["alphabet-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join('')], null)),wizmetria_web$grid$symmetry_view_$_iter__13623(cljs.core.rest(s__13624__$2)));
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
var pairs = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__13635){
var vec__13636 = p__13635;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13636,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13636,(1),null);
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
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Mirror symmetry connections"], null),(function (){var iter__5480__auto__ = (function wizmetria_web$grid$symmetry_view_$_iter__13639(s__13640){
return (new cljs.core.LazySeq(null,(function (){
var s__13640__$1 = s__13640;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13640__$1);
if(temp__5804__auto__){
var s__13640__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13640__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13640__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13642 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13641 = (0);
while(true){
if((i__13641 < size__5479__auto__)){
var vec__13646 = cljs.core._nth(c__5478__auto__,i__13641);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13646,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13646,(1),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13646,(2),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13646,(3),null);
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
cljs.core.chunk_append(b__13642,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Mirror pair ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1)," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2)].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#c026d3",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#c026d3",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"2,4"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"r","r",-471384190),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"#c026d3",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.15], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"r","r",-471384190),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"#c026d3",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.15], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["mirror-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')], null)));

var G__13731 = (i__13641 + (1));
i__13641 = G__13731;
continue;
} else {
var G__13732 = (i__13641 + (1));
i__13641 = G__13732;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13642),wizmetria_web$grid$symmetry_view_$_iter__13639(cljs.core.chunk_rest(s__13640__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13642),null);
}
} else {
var vec__13654 = cljs.core.first(s__13640__$2);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13654,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13654,(1),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13654,(2),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13654,(3),null);
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
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Mirror pair ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1)," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2)].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#c026d3",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#c026d3",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"2,4"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"r","r",-471384190),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"#c026d3",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.15], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"r","r",-471384190),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"#c026d3",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.15], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["mirror-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')], null)),wizmetria_web$grid$symmetry_view_$_iter__13639(cljs.core.rest(s__13640__$2)));
} else {
var G__13733 = cljs.core.rest(s__13640__$2);
s__13640__$1 = G__13733;
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
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Rotation symmetry connections"], null),(function (){var iter__5480__auto__ = (function wizmetria_web$grid$symmetry_view_$_iter__13659(s__13660){
return (new cljs.core.LazySeq(null,(function (){
var s__13660__$1 = s__13660;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13660__$1);
if(temp__5804__auto__){
var s__13660__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13660__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13660__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13662 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13661 = (0);
while(true){
if((i__13661 < size__5479__auto__)){
var vec__13667 = cljs.core._nth(c__5478__auto__,i__13661);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13667,(0),null);
var vec__13670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13667,(1),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13670,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13670,(1),null);
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
cljs.core.chunk_append(b__13662,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Rotation pair ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1)," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2)].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#f472b6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#f472b6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"2,4"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"r","r",-471384190),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"#f472b6",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.15], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"r","r",-471384190),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"#f472b6",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.15], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["rotation-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null)));

var G__13734 = (i__13661 + (1));
i__13661 = G__13734;
continue;
} else {
var G__13735 = (i__13661 + (1));
i__13661 = G__13735;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13662),wizmetria_web$grid$symmetry_view_$_iter__13659(cljs.core.chunk_rest(s__13660__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13662),null);
}
} else {
var vec__13677 = cljs.core.first(s__13660__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13677,(0),null);
var vec__13680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13677,(1),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13680,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13680,(1),null);
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
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Rotation pair ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1)," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2)].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#f472b6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#f472b6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"2,4"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection1),new cljs.core.Keyword(null,"r","r",-471384190),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"#f472b6",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.15], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection2),new cljs.core.Keyword(null,"r","r",-471384190),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"#f472b6",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.15], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["rotation-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null)),wizmetria_web$grid$symmetry_view_$_iter__13659(cljs.core.rest(s__13660__$2)));
} else {
var G__13736 = cljs.core.rest(s__13660__$2);
s__13660__$1 = G__13736;
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
})()], null):null),(cljs.core.truth_(has_symmetry)?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),[((is_rotation_axis)?"Rotation":"Mirror")," symmetry axis ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(axis_id)].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x1,new cljs.core.Keyword(null,"y1","y1",589123466),y1,new cljs.core.Keyword(null,"x2","x2",-1362513475),x2,new cljs.core.Keyword(null,"y2","y2",-718691301),y2,new cljs.core.Keyword(null,"stroke","stroke",1741823555),((is_rotation_axis)?"#f472b6":"#c026d3"),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(6),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.2], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x1,new cljs.core.Keyword(null,"y1","y1",589123466),y1,new cljs.core.Keyword(null,"x2","x2",-1362513475),x2,new cljs.core.Keyword(null,"y2","y2",-718691301),y2,new cljs.core.Keyword(null,"stroke","stroke",1741823555),((is_rotation_axis)?"#f472b6":"#c026d3"),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),((is_rotation_axis)?"10,5":"5,5")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),x1,new cljs.core.Keyword(null,"cy","cy",755331060),y1,new cljs.core.Keyword(null,"r","r",-471384190),(4),new cljs.core.Keyword(null,"fill","fill",883462889),((is_rotation_axis)?"#f472b6":"#c026d3")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),x2,new cljs.core.Keyword(null,"cy","cy",755331060),y2,new cljs.core.Keyword(null,"r","r",-471384190),(4),new cljs.core.Keyword(null,"fill","fill",883462889),((is_rotation_axis)?"#f472b6":"#c026d3")], null)], null)], null):null),(function (){var iter__5480__auto__ = (function wizmetria_web$grid$symmetry_view_$_iter__13686(s__13687){
return (new cljs.core.LazySeq(null,(function (){
var s__13687__$1 = s__13687;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13687__$1);
if(temp__5804__auto__){
var s__13687__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13687__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13687__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13689 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13688 = (0);
while(true){
if((i__13688 < size__5479__auto__)){
var vec__13691 = cljs.core._nth(c__5478__auto__,i__13688);
var from_letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13691,(0),null);
var to_letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13691,(1),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13691,(2),null);
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
cljs.core.chunk_append(b__13689,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(from_intersection),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(from_intersection),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(to_intersection),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(to_intersection),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8b5cf6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),2.5,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Connection from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from_letter)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(to_letter)].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["line-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from_letter),cljs.core.str.cljs$core$IFn$_invoke$arity$1(to_letter),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null)));

var G__13737 = (i__13688 + (1));
i__13688 = G__13737;
continue;
} else {
var G__13738 = (i__13688 + (1));
i__13688 = G__13738;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13689),wizmetria_web$grid$symmetry_view_$_iter__13686(cljs.core.chunk_rest(s__13687__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13689),null);
}
} else {
var vec__13696 = cljs.core.first(s__13687__$2);
var from_letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13696,(0),null);
var to_letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13696,(1),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13696,(2),null);
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
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(from_intersection),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(from_intersection),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(to_intersection),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(to_intersection),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8b5cf6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),2.5,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Connection from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from_letter)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(to_letter)].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["line-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from_letter),cljs.core.str.cljs$core$IFn$_invoke$arity$1(to_letter),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null)),wizmetria_web$grid$symmetry_view_$_iter__13686(cljs.core.rest(s__13687__$2)));
} else {
var G__13739 = cljs.core.rest(s__13687__$2);
s__13687__$1 = G__13739;
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
})(),(function (){var iter__5480__auto__ = (function wizmetria_web$grid$symmetry_view_$_iter__13702(s__13703){
return (new cljs.core.LazySeq(null,(function (){
var s__13703__$1 = s__13703;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13703__$1);
if(temp__5804__auto__){
var s__13703__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13703__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13703__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13705 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13704 = (0);
while(true){
if((i__13704 < size__5479__auto__)){
var vec__13706 = cljs.core._nth(c__5478__auto__,i__13704);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13706,(0),null);
var letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13706,(1),null);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(letter_map,letter);
var intersection = wizmetria_web.grid.line_circle_intersection(pos);
if(cljs.core.truth_(pos)){
cljs.core.chunk_append(b__13705,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection),new cljs.core.Keyword(null,"r","r",-471384190),(4),new cljs.core.Keyword(null,"fill","fill",883462889),"#a855f7",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Marker for letter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["dot-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null)));

var G__13740 = (i__13704 + (1));
i__13704 = G__13740;
continue;
} else {
var G__13741 = (i__13704 + (1));
i__13704 = G__13741;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13705),wizmetria_web$grid$symmetry_view_$_iter__13702(cljs.core.chunk_rest(s__13703__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13705),null);
}
} else {
var vec__13709 = cljs.core.first(s__13703__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13709,(0),null);
var letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13709,(1),null);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(letter_map,letter);
var intersection = wizmetria_web.grid.line_circle_intersection(pos);
if(cljs.core.truth_(pos)){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(intersection),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(intersection),new cljs.core.Keyword(null,"r","r",-471384190),(4),new cljs.core.Keyword(null,"fill","fill",883462889),"#a855f7",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),["Marker for letter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join(''),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["dot-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null)),wizmetria_web$grid$symmetry_view_$_iter__13702(cljs.core.rest(s__13703__$2)));
} else {
var G__13742 = cljs.core.rest(s__13703__$2);
s__13703__$1 = G__13742;
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
