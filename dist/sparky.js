!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).sparky={})}(this,function(t){"use strict";
// This alphabet uses a-z A-Z 0-9 _- symbols.
// Symbols are generated for smaller size.
// -_zyxwvutsrqponmlkjihgfedcba9876543210ZYXWVUTSRQPONMLKJIHGFEDCBA
for(var f="-_",s=36
// Loop from 36 to 0 (from z to a and 9 to 0 in Base36).
;s--;)
// 36 is radix. Number.prototype.toString(36) returns number
// in Base36 representation. Base36 is like hex, but it uses 0–9 and a-z.
f+=s.toString(36);
// Loop from 36 to 10 (from Z to A in Base36).
for(s=36;s---10;)f+=s.toString(36).toUpperCase();
/**
   * Generate URL-friendly unique ID. This method use non-secure predictable
   * random generator with bigger collision probability.
   *
   * @param {number} [size=21] The number of symbols in ID.
   *
   * @return {string} Random string.
   *
   * @example
   * const nanoid = require('nanoid/non-secure')
   * model.id = nanoid() //=> "Uakgb_J5m9g-0JDMbcJqL"
   *
   * @name nonSecure
   * @function
   */var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t,e){return t(e={exports:{}},e.exports),e.exports}function n(t){return t&&t.Math==Math&&t}function g(t){try{return!!t()}catch(t){return!0}}function o(t){return c.call(t).slice(8,-1)}function l(t){if(null==t)throw TypeError("Can't call method on "+t);return t}function h(t){return S(l(t))}function p(t,e){if(!P(t))return t;var r,n;if(e&&"function"==typeof(r=t.toString)&&!P(n=r.call(t)))return n;if("function"==typeof(r=t.valueOf)&&!P(n=r.call(t)))return n;if(!e&&"function"==typeof(r=t.toString)&&!P(n=r.call(t)))return n;throw TypeError("Can't convert object to primitive value")}function i(t){return w?b.createElement(t):{}}function d(e,r){try{F(j,e,r)}catch(t){j[e]=r}return r}var j=
// eslint-disable-next-line no-undef
n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||
// eslint-disable-next-line no-new-func
Function("return this")(),C=!g(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}),a={}.propertyIsEnumerable,u=Object.getOwnPropertyDescriptor,v={f:u&&!a.call({1:2},1)?function(t){var e=u(this,t);return!!e&&e.enumerable}:a},k=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},c={}.toString,y="".split,S=g(function(){
// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins
return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==o(t)?y.call(t,""):Object(t)}:Object,P=function(t){return"object"==typeof t?null!==t:"function"==typeof t},m={}.hasOwnProperty,L=function(t,e){return m.call(t,e)},b=j.document,w=P(b)&&P(b.createElement),E=!C&&!g(function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}),A=Object.getOwnPropertyDescriptor,N={f:C?A:function(t,e){if(t=h(t),e=p(e,!0),E)try{return A(t,e)}catch(t){/* empty */}if(L(t,e))return k(!v.f.call(t,e),t[e])}},R=function(t){if(!P(t))throw TypeError(String(t)+" is not an object");return t},x=Object.defineProperty,_={f:C?x:function(t,e,r){if(R(t),e=p(e,!0),R(r),E)try{return x(t,e,r)}catch(t){/* empty */}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},F=C?function(t,e,r){return _.f(t,e,k(1,r))}:function(t,e,r){return t[e]=r,t},O="__core-js_shared__",T=j[O]||d(O,{}),I=Function.toString;
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
"function"!=typeof T.inspectSource&&(T.inspectSource=function(t){return I.call(t)});function M(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++$+Y).toString(36)}function U(t){return J[t]||(J[t]=M(t))}var D,B,z,W=T.inspectSource,q=j.WeakMap,V="function"==typeof q&&/native code/.test(W(q)),G=r(function(t){(t.exports=function(t,e){return T[t]||(T[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.4",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})}),$=0,Y=Math.random(),J=G("keys"),X={},H=j.WeakMap;if(V){var K=new H,Q=K.get,Z=K.has,tt=K.set;D=function(t,e){return tt.call(K,t,e),e},B=function(t){return Q.call(K,t)||{}},z=function(t){return Z.call(K,t)}}else{var et=U("state");X[et]=!0,D=function(t,e){return F(t,et,e),e},B=function(t){return L(t,et)?t[et]:{}},z=function(t){return L(t,et)}}function rt(t){return"function"==typeof t?t:void 0}function nt(t,e){return arguments.length<2?rt(mt[t])||rt(j[t]):mt[t]&&mt[t][e]||j[t]&&j[t][e]}function ot(t){return isNaN(t=+t)?0:(0<t?St:bt)(t)}function it(t){return 0<t?wt(ot(t),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
}function at(t,e){var r=ot(t);return r<0?Et(r+e,0):At(r,e)}function ut(u){return function(t,e,r){var n,o=h(t),i=it(o.length),a=at(r,i);
// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(u&&e!=e){for(;a<i;)
// eslint-disable-next-line no-self-compare
if((n=o[a++])!=n)return!0;
// Array#indexOf ignores holes, Array#includes - not
}else for(;a<i;a++)if((u||a in o)&&o[a]===e)return u||a||0;return!u&&-1}}function ct(t,e){var r,n=h(t),o=0,i=[];for(r in n)!L(X,r)&&L(n,r)&&i.push(r);
// Don't enum bug & hidden keys
for(;e.length>o;)L(n,r=e[o++])&&(~Ot(i,r)||i.push(r));return i}function ft(t,e){for(var r=jt(e),n=_.f,o=N.f,i=0;i<r.length;i++){var a=r[i];L(t,a)||n(t,a,o(e,a))}}function st(t,e){var r=Pt[kt(t)];return r==Nt||r!=Lt&&("function"==typeof e?g(e):!!e)}function lt(t,e){var r,n,o,i,a,u=t.target,c=t.global,f=t.stat;if(r=c?j:f?j[u]||d(u,{}):(j[u]||{}).prototype)for(n in e){
// contained in target
if(i=e[n],o=t.noTargetGet?(a=Ft(r,n))&&a.value:r[n],!_t(c?n:u+(f?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;ft(i,o)}
// add a flag to not completely full polyfills
(t.sham||o&&o.sham)&&F(i,"sham",!0),
// extend global
yt(r,n,i,t)}}function ht(t){return Object(l(t))}function pt(){/* empty */}function dt(t){return"<script>"+t+"</"+Gt+">"}var vt,gt={set:D,get:B,has:z,enforce:function(t){return z(t)?B(t):D(t,{})},getterFor:function(r){return function(t){var e;if(!P(t)||(e=B(t)).type!==r)throw TypeError("Incompatible receiver, "+r+" required");return e}}},yt=r(function(t){var e=gt.get,u=gt.enforce,c=String(String).split("String");(t.exports=function(t,e,r,n){var o=!!n&&!!n.unsafe,i=!!n&&!!n.enumerable,a=!!n&&!!n.noTargetGet;"function"==typeof r&&("string"!=typeof e||L(r,"name")||F(r,"name",e),u(r).source=c.join("string"==typeof e?e:"")),t!==j?(o?!a&&t[e]&&(i=!0):delete t[e],i?t[e]=r:F(t,e,r)):i?t[e]=r:d(e,r)})(Function.prototype,"toString",function(){return"function"==typeof this&&e(this).source||W(this)})}),mt=j,bt=Math.ceil,St=Math.floor,wt=Math.min,Et=Math.max,At=Math.min,xt={
// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
includes:ut(!0),
// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
indexOf:ut(!1)},Ot=xt.indexOf,Tt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Rt=Tt.concat("length","prototype"),It={f:Object.getOwnPropertyNames||function(t){return ct(t,Rt)}},Mt={f:Object.getOwnPropertySymbols},jt=nt("Reflect","ownKeys")||function(t){var e=It.f(R(t)),r=Mt.f;return r?e.concat(r(t)):e},Ct=/#|\.prototype\./,kt=st.normalize=function(t){return String(t).replace(Ct,".").toLowerCase()},Pt=st.data={},Lt=st.NATIVE="N",Nt=st.POLYFILL="P",_t=st,Ft=N.f,Ut=!!Object.getOwnPropertySymbols&&!g(function(){
// Chrome 38 Symbol has incorrect toString conversion
// eslint-disable-next-line no-undef
return!String(Symbol())}),Dt=Ut&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Bt=Array.isArray||function(t){return"Array"==o(t)},zt=Object.keys||function(t){return ct(t,Tt)},Wt=C?Object.defineProperties:function(t,e){R(t);for(var r,n=zt(e),o=n.length,i=0;i<o;)_.f(t,r=n[i++],e[r]);return t},qt=nt("document","documentElement"),Vt="prototype",Gt="script",$t=U("IE_PROTO"),Yt=function(){try{
/* global ActiveXObject */
vt=document.domain&&new ActiveXObject("htmlfile")}catch(t){/* ignore */}var t,e;Yt=vt?function(t){t.write(dt("")),t.close();var e=t.parentWindow.Object;// avoid memory leak
return t=null,e}(vt):((e=i("iframe")).style.display="none",qt.appendChild(e),
// https://github.com/zloirock/core-js/issues/475
e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(dt("document.F=Object")),t.close(),t.F);for(var r=Tt.length;r--;)delete Yt[Vt][Tt[r]];return Yt()};X[$t]=!0;function Jt(t){return L(se,t)||(Ut&&L(le,t)?se[t]=le[t]:se[t]=he("Symbol."+t)),se[t]}function Xt(t){var e=mt.Symbol||(mt.Symbol={});L(e,t)||de(e,t,{value:pe.f(t)})}function Ht(t,e,r){t&&!L(t=r?t:t.prototype,ge)&&ve(t,ge,{configurable:!0,value:e})}function Kt(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}function Qt(n,o,t){if(Kt(n),void 0===o)return n;switch(t){case 0:return function(){return n.call(o)};case 1:return function(t){return n.call(o,t)};case 2:return function(t,e){return n.call(o,t,e)};case 3:return function(t,e,r){return n.call(o,t,e,r)}}return function(){return n.apply(o,arguments)}}function Zt(t,e){var r;return Bt(t)&&(
// cross-realm fallback
"function"==typeof(r=t.constructor)&&(r===Array||Bt(r.prototype))||P(r)&&null===(r=r[ye]))&&(r=void 0),new(void 0===r?Array:r)(0===e?0:e)}function te(p){var d=1==p,v=2==p,g=3==p,y=4==p,m=6==p,b=5==p||m;return function(t,e,r,n){for(var o,i,a=ht(t),u=S(a),c=Qt(e,r,3),f=it(u.length),s=0,l=n||Zt,h=d?l(t,f):v?l(t,0):void 0;s<f;s++)if((b||s in u)&&(i=c(o=u[s],s,a),p))if(d)h[s]=i;// map
else if(i)switch(p){case 3:return!0;// some
case 5:return o;// find
case 6:return s;// findIndex
case 2:me.call(h,o);// filter
}else if(y)return!1;// every
return m?-1:g||y?y:h}}function ee(t,e){var r=Le[t]=ie(Ie[Ae]);return Oe(r,{type:Ee,tag:t,description:e}),C||(r.description=e),r}function re(e,t){R(e);var r=h(t),n=zt(r).concat(Ge(r));return Se(n,function(t){C&&!Ve.call(r,t)||qe(e,t,r[t])}),e}function ne(t,e){var r=h(t),n=p(e,!0);if(r!==Re||!L(Le,n)||L(Ne,n)){var o=je(r,n);return!o||!L(Le,n)||L(r,we)&&r[we][n]||(o.enumerable=!0),o}}function oe(t){var e=ke(h(t)),r=[];return Se(e,function(t){L(Le,t)||L(X,t)||r.push(t)}),r}
// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
var ie=Object.create||function(t,e){var r;return null!==t?(pt[Vt]=R(t),r=new pt,pt[Vt]=null,
// add "__proto__" for Object.getPrototypeOf polyfill
r[$t]=t):r=Yt(),void 0===e?r:Wt(r,e)},ae=It.f,ue={}.toString,ce="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],fe={f:function(t){return ce&&"[object Window]"==ue.call(t)?function(t){try{return ae(t)}catch(t){return ce.slice()}}(t):ae(h(t))}},se=G("wks"),le=j.Symbol,he=Dt?le:le&&le.withoutSetter||M,pe={f:Jt},de=_.f,ve=_.f,ge=Jt("toStringTag"),ye=Jt("species"),me=[].push,be={
// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
forEach:te(0),
// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
map:te(1),
// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
filter:te(2),
// `Array.prototype.some` method
// https://tc39.github.io/ecma262/#sec-array.prototype.some
some:te(3),
// `Array.prototype.every` method
// https://tc39.github.io/ecma262/#sec-array.prototype.every
every:te(4),
// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
find:te(5),
// `Array.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
findIndex:te(6)},Se=be.forEach,we=U("hidden"),Ee="Symbol",Ae="prototype",xe=Jt("toPrimitive"),Oe=gt.set,Te=gt.getterFor(Ee),Re=Object[Ae],Ie=j.Symbol,Me=nt("JSON","stringify"),je=N.f,Ce=_.f,ke=fe.f,Pe=v.f,Le=G("symbols"),Ne=G("op-symbols"),_e=G("string-to-symbol-registry"),Fe=G("symbol-to-string-registry"),Ue=G("wks"),De=j.QObject,Be=!De||!De[Ae]||!De[Ae].findChild,ze=C&&g(function(){return 7!=ie(Ce({},"a",{get:function(){return Ce(this,"a",{value:7}).a}})).a})?function(t,e,r){var n=je(Re,e);n&&delete Re[e],Ce(t,e,r),n&&t!==Re&&Ce(Re,e,n)}:Ce,We=Dt?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Ie},qe=function(t,e,r){t===Re&&qe(Ne,e,r),R(t);var n=p(e,!0);return R(r),L(Le,n)?(r.enumerable?(L(t,we)&&t[we][n]&&(t[we][n]=!1),r=ie(r,{enumerable:k(0,!1)})):(L(t,we)||Ce(t,we,k(1,{})),t[we][n]=!0),ze(t,n,r)):Ce(t,n,r)},Ve=function(t){var e=p(t,!0),r=Pe.call(this,e);return!(this===Re&&L(Le,e)&&!L(Ne,e))&&(!(r||!L(this,e)||!L(Le,e)||L(this,we)&&this[we][e])||r)},Ge=function(t){var e=t===Re,r=ke(e?Ne:h(t)),n=[];return Se(r,function(t){!L(Le,t)||e&&!L(Re,t)||n.push(Le[t])}),n};
// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if(
// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
Ut||(yt((Ie=function(t){if(this instanceof Ie)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==t?String(t):void 0,r=M(e),n=function(t){this===Re&&n.call(Ne,t),L(this,we)&&L(this[we],r)&&(this[we][r]=!1),ze(this,r,k(1,t))};return C&&Be&&ze(Re,r,{configurable:!0,set:n}),ee(r,e)})[Ae],"toString",function(){return Te(this).tag}),yt(Ie,"withoutSetter",function(t){return ee(M(t),t)}),v.f=Ve,_.f=qe,N.f=ne,It.f=fe.f=oe,Mt.f=Ge,pe.f=function(t){return ee(Jt(t),t)},C&&(
// https://github.com/tc39/proposal-Symbol-description
Ce(Ie[Ae],"description",{configurable:!0,get:function(){return Te(this).description}}),yt(Re,"propertyIsEnumerable",Ve,{unsafe:!0}))),lt({global:!0,wrap:!0,forced:!Ut,sham:!Ut},{Symbol:Ie}),Se(zt(Ue),function(t){Xt(t)}),lt({target:Ee,stat:!0,forced:!Ut},{
// `Symbol.for` method
// https://tc39.github.io/ecma262/#sec-symbol.for
for:function(t){var e=String(t);if(L(_e,e))return _e[e];var r=Ie(e);return _e[e]=r,Fe[r]=e,r},
// `Symbol.keyFor` method
// https://tc39.github.io/ecma262/#sec-symbol.keyfor
keyFor:function(t){if(!We(t))throw TypeError(t+" is not a symbol");if(L(Fe,t))return Fe[t]},useSetter:function(){Be=!0},useSimple:function(){Be=!1}}),lt({target:"Object",stat:!0,forced:!Ut,sham:!C},{
// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
create:function(t,e){return void 0===e?ie(t):re(ie(t),e)},
// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
defineProperty:qe,
// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
defineProperties:re,
// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
getOwnPropertyDescriptor:ne}),lt({target:"Object",stat:!0,forced:!Ut},{
// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
getOwnPropertyNames:oe,
// `Object.getOwnPropertySymbols` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
getOwnPropertySymbols:Ge}),
// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
lt({target:"Object",stat:!0,forced:g(function(){Mt.f(1)})},{getOwnPropertySymbols:function(t){return Mt.f(ht(t))}}),Me){var $e=!Ut||g(function(){var t=Ie();
// MS Edge converts symbol values to JSON as {}
return"[null]"!=Me([t])||"{}"!=Me({a:t})||"{}"!=Me(Object(t))});lt({target:"JSON",stat:!0,forced:$e},{
// eslint-disable-next-line no-unused-vars
stringify:function(t,e,r){for(var n,o=[t],i=1;i<arguments.length;)o.push(arguments[i++]);if((P(n=e)||void 0!==t)&&!We(t))// IE8 returns string on undefined
return Bt(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!We(e))return e}),o[1]=e,Me.apply(null,o)}})}
// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
Ie[Ae][xe]||F(Ie[Ae],xe,Ie[Ae].valueOf),
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
Ht(Ie,Ee),X[we]=!0,
// `Symbol.asyncIterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.asynciterator
Xt("asyncIterator");var Ye=_.f,Je=j.Symbol;if(!(!C||"function"!=typeof Je||"description"in Je.prototype&&
// Safari 12 bug
void 0===Je().description)){var Xe={},He=function(t){var e=arguments.length<1||void 0===t?void 0:String(t),r=this instanceof He?new Je(e):void 0===e?Je():Je(e);return""===e&&(Xe[r]=!0),r};
// wrap Symbol constructor for correct work with undefined description
ft(He,Je);var Ke=He.prototype=Je.prototype;Ke.constructor=He;var Qe=Ke.toString,Ze="Symbol(test)"==String(Je("test")),tr=/^Symbol\((.*)\)[^)]+$/;Ye(Ke,"description",{configurable:!0,get:function(){var t=P(this)?this.valueOf():this,e=Qe.call(t);if(L(Xe,t))return"";var r=Ze?e.slice(7,-1):e.replace(tr,"$1");return""===r?void 0:r}}),lt({global:!0,forced:!0},{Symbol:He})}
// `Symbol.hasInstance` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.hasinstance
Xt("hasInstance"),
// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable
Xt("isConcatSpreadable"),
// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
Xt("iterator"),
// `Symbol.match` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.match
Xt("match"),
// `Symbol.matchAll` well-known symbol
Xt("matchAll"),
// `Symbol.replace` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.replace
Xt("replace"),
// `Symbol.search` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.search
Xt("search"),
// `Symbol.species` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.species
Xt("species"),
// `Symbol.split` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.split
Xt("split"),
// `Symbol.toPrimitive` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.toprimitive
Xt("toPrimitive"),
// `Symbol.toStringTag` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.tostringtag
Xt("toStringTag"),
// `Symbol.unscopables` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.unscopables
Xt("unscopables");var er=Object.assign,rr=Object.defineProperty,nr=!er||g(function(){
// should have correct order of operations (Edge bug)
if(C&&1!==er({b:1},er(rr({},"a",{enumerable:!0,get:function(){rr(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return 1;
// should work with symbols and should have deterministic property order (V8 bug)
var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach(function(t){e[t]=t}),7!=er({},t)[r]||zt(er({},e)).join("")!=n})?function(t,e){for(// eslint-disable-line no-unused-vars
var r=ht(t),n=arguments.length,o=1,i=Mt.f,a=v.f;o<n;)for(var u,c=S(arguments[o++]),f=i?zt(c).concat(i(c)):zt(c),s=f.length,l=0;l<s;)u=f[l++],C&&!a.call(c,u)||(r[u]=c[u]);return r}:er;
// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
lt({target:"Object",stat:!0,forced:Object.assign!==nr},{assign:nr}),
// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
lt({target:"Object",stat:!0,sham:!C},{create:ie}),
// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
lt({target:"Object",stat:!0,forced:!C,sham:!C},{defineProperty:_.f}),
// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
lt({target:"Object",stat:!0,forced:!C,sham:!C},{defineProperties:Wt});function or(u){return function(t){for(var e,r=h(t),n=zt(r),o=n.length,i=0,a=[];i<o;)e=n[i++],C&&!ir.call(r,e)||a.push(u?[e,r[e]]:r[e]);return a}}var ir=v.f,ar={
// `Object.entries` method
// https://tc39.github.io/ecma262/#sec-object.entries
entries:or(!0),
// `Object.values` method
// https://tc39.github.io/ecma262/#sec-object.values
values:or(!1)},ur=ar.entries;
// `Object.{ entries, values }` methods implementation
// `Object.entries` method
// https://tc39.github.io/ecma262/#sec-object.entries
lt({target:"Object",stat:!0},{entries:function(t){return ur(t)}});var cr=!g(function(){return Object.isExtensible(Object.preventExtensions({}))}),fr=r(function(t){function r(t){e(t,n,{value:{objectID:"O"+ ++o,// object ID
weakData:{}}})}var e=_.f,n=M("meta"),o=0,i=Object.isExtensible||function(){return!0},a=t.exports={REQUIRED:!1,fastKey:function(t,e){
// return a primitive with prefix
if(!P(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!L(t,n)){
// can't set metadata to uncaught frozen object
if(!i(t))return"F";
// not necessary to add metadata
if(!e)return"E";
// add missing metadata
r(t)}return t[n].objectID},getWeakData:function(t,e){if(!L(t,n)){
// can't set metadata to uncaught frozen object
if(!i(t))return!0;
// not necessary to add metadata
if(!e)return!1;
// add missing metadata
r(t)}return t[n].weakData},onFreeze:function(t){return cr&&a.REQUIRED&&i(t)&&!L(t,n)&&r(t),t}};X[n]=!0}),sr=(fr.REQUIRED,fr.fastKey,fr.getWeakData,fr.onFreeze,fr.onFreeze),lr=Object.freeze,hr=g(function(){lr(1)});
// `Object.freeze` method
// https://tc39.github.io/ecma262/#sec-object.freeze
lt({target:"Object",stat:!0,forced:hr,sham:!cr},{freeze:function(t){return lr&&P(t)?lr(sr(t)):t}});function pr(t){return void 0!==t&&(dr.Array===t||gr[vr]===t)}var dr={},vr=Jt("iterator"),gr=Array.prototype,yr={};yr[Jt("toStringTag")]="z";function mr(t){if(null!=t)return t[Or]||t["@@iterator"]||dr[xr(t)]}function br(e,t,r,n){try{return n?t(R(r)[0],r[1]):t(r);
// 7.4.6 IteratorClose(iterator, completion)
}catch(t){var o=e.return;throw void 0!==o&&R(o.call(e)),t}}function Sr(t,e,r){var n=p(e);n in t?_.f(t,n,k(0,r)):t[n]=r}var wr="[object z]"===String(yr),Er=Jt("toStringTag"),Ar="Arguments"==o(function(){return arguments}()),xr=wr?o:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){/* empty */}}(e=Object(t),Er))?r:Ar?o(e):"Object"==(n=o(e))&&"function"==typeof e.callee?"Arguments":n},Or=Jt("iterator"),Tr=r(function(t){function p(t,e){this.stopped=t,this.result=e}(t.exports=function(t,e,r,n,o){var i,a,u,c,f,s,l,h=Qt(e,r,n?2:1);if(o)i=t;else{if("function"!=typeof(a=mr(t)))throw TypeError("Target is not iterable");
// optimisation for array iterators
if(pr(a)){for(u=0,c=it(t.length);u<c;u++)if((f=n?h(R(l=t[u])[0],l[1]):h(t[u]))&&f instanceof p)return f;return new p(!1)}i=a.call(t)}for(s=i.next;!(l=s.call(i)).done;)if("object"==typeof(f=br(i,h,l.value,n))&&f&&f instanceof p)return f;return new p(!1)}).stop=function(t){return new p(!0,t)}});
// `Object.fromEntries` method
// https://github.com/tc39/proposal-object-from-entries
lt({target:"Object",stat:!0},{fromEntries:function(t){var r={};return Tr(t,function(t,e){Sr(r,t,e)},void 0,!0),r}});var Rr=N.f,Ir=g(function(){Rr(1)});
// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
lt({target:"Object",stat:!0,forced:!C||Ir,sham:!C},{getOwnPropertyDescriptor:function(t,e){return Rr(h(t),e)}}),
// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
lt({target:"Object",stat:!0,sham:!C},{getOwnPropertyDescriptors:function(t){for(var e,r,n=h(t),o=N.f,i=jt(n),a={},u=0;i.length>u;)void 0!==(r=o(n,e=i[u++]))&&Sr(a,e,r);return a}});var Mr=fe.f,jr=g(function(){return!Object.getOwnPropertyNames(1)});
// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
lt({target:"Object",stat:!0,forced:jr},{getOwnPropertyNames:Mr});var Cr=!g(function(){function t(){/* empty */}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}),kr=U("IE_PROTO"),Pr=Object.prototype,Lr=Cr?Object.getPrototypeOf:function(t){return t=ht(t),L(t,kr)?t[kr]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Pr:null},Nr=g(function(){Lr(1)});
// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
lt({target:"Object",stat:!0,forced:Nr,sham:!Cr},{getPrototypeOf:function(t){return Lr(ht(t))}});
// `SameValue` abstract operation
// https://tc39.github.io/ecma262/#sec-samevalue
var _r=Object.is||function(t,e){
// eslint-disable-next-line no-self-compare
return t===e?0!==t||1/t==1/e:t!=t&&e!=e};
// `Object.is` method
// https://tc39.github.io/ecma262/#sec-object.is
lt({target:"Object",stat:!0},{is:_r});var Fr=Object.isExtensible,Ur=g(function(){Fr(1)});
// `Object.isExtensible` method
// https://tc39.github.io/ecma262/#sec-object.isextensible
lt({target:"Object",stat:!0,forced:Ur},{isExtensible:function(t){return!!P(t)&&(!Fr||Fr(t))}});var Dr=Object.isFrozen,Br=g(function(){Dr(1)});
// `Object.isFrozen` method
// https://tc39.github.io/ecma262/#sec-object.isfrozen
lt({target:"Object",stat:!0,forced:Br},{isFrozen:function(t){return!P(t)||!!Dr&&Dr(t)}});var zr=Object.isSealed,Wr=g(function(){zr(1)});
// `Object.isSealed` method
// https://tc39.github.io/ecma262/#sec-object.issealed
lt({target:"Object",stat:!0,forced:Wr},{isSealed:function(t){return!P(t)||!!zr&&zr(t)}});var qr=g(function(){zt(1)});
// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
lt({target:"Object",stat:!0,forced:qr},{keys:function(t){return zt(ht(t))}});var Vr=fr.onFreeze,Gr=Object.preventExtensions,$r=g(function(){Gr(1)});
// `Object.preventExtensions` method
// https://tc39.github.io/ecma262/#sec-object.preventextensions
lt({target:"Object",stat:!0,forced:$r,sham:!cr},{preventExtensions:function(t){return Gr&&P(t)?Gr(Vr(t)):t}});var Yr=fr.onFreeze,Jr=Object.seal,Xr=g(function(){Jr(1)});
// `Object.seal` method
// https://tc39.github.io/ecma262/#sec-object.seal
lt({target:"Object",stat:!0,forced:Xr,sham:!cr},{seal:function(t){return Jr&&P(t)?Jr(Yr(t)):t}});function Hr(t){if(!P(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}var Kr=Object.setPrototypeOf||("__proto__"in{}?function(){var r,n=!1,t={};try{(r=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(t,[]),n=t instanceof Array}catch(t){/* empty */}return function(t,e){return R(t),Hr(e),n?r.call(t,e):t.__proto__=e,t}}():void 0);
// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
lt({target:"Object",stat:!0},{setPrototypeOf:Kr});var Qr=ar.values;
// `Object.values` method
// https://tc39.github.io/ecma262/#sec-object.values
lt({target:"Object",stat:!0},{values:function(t){return Qr(t)}});
// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
var Zr=wr?{}.toString:function(){return"[object "+xr(this)+"]"};
// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
wr||yt(Object.prototype,"toString",Zr,{unsafe:!0});
// Forced replacement object prototype accessors methods
var tn=!g(function(){var t=Math.random();
// In FF throws only define methods
// eslint-disable-next-line no-undef, no-useless-call
__defineSetter__.call(null,t,function(){/* empty */}),delete j[t]});
// `Object.prototype.__defineGetter__` method
// https://tc39.github.io/ecma262/#sec-object.prototype.__defineGetter__
C&&lt({target:"Object",proto:!0,forced:tn},{__defineGetter__:function(t,e){_.f(ht(this),t,{get:Kt(e),enumerable:!0,configurable:!0})}}),
// `Object.prototype.__defineSetter__` method
// https://tc39.github.io/ecma262/#sec-object.prototype.__defineSetter__
C&&lt({target:"Object",proto:!0,forced:tn},{__defineSetter__:function(t,e){_.f(ht(this),t,{set:Kt(e),enumerable:!0,configurable:!0})}});var en=N.f;
// `Object.prototype.__lookupGetter__` method
// https://tc39.github.io/ecma262/#sec-object.prototype.__lookupGetter__
C&&lt({target:"Object",proto:!0,forced:tn},{__lookupGetter__:function(t){var e,r=ht(this),n=p(t,!0);do{if(e=en(r,n))return e.get}while(r=Lr(r))}});var rn=N.f;
// `Object.prototype.__lookupSetter__` method
// https://tc39.github.io/ecma262/#sec-object.prototype.__lookupSetter__
C&&lt({target:"Object",proto:!0,forced:tn},{__lookupSetter__:function(t){var e,r=ht(this),n=p(t,!0);do{if(e=rn(r,n))return e.set}while(r=Lr(r))}});var nn=[].slice,on={},an=Function.bind||function(e/* , ...args */){var r=Kt(this),n=nn.call(arguments,1),o=function(){var t=n.concat(nn.call(arguments));return this instanceof o?function(t,e,r){if(!(e in on)){for(var n=[],o=0;o<e;o++)n[o]="a["+o+"]";
// eslint-disable-next-line no-new-func
on[e]=Function("C,a","return new C("+n.join(",")+")")}return on[e](t,r)}(r,t.length,t):r.apply(e,t)};return P(r.prototype)&&(o.prototype=r.prototype),o};
// `Function.prototype.bind` method
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
lt({target:"Function",proto:!0},{bind:an});var un=_.f,cn=Function.prototype,fn=cn.toString,sn=/^\s*function ([^ (]*)/;
// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
!C||"name"in cn||un(cn,"name",{configurable:!0,get:function(){try{return fn.call(this).match(sn)[1]}catch(t){return""}}});var ln=Jt("hasInstance"),hn=Function.prototype;
// `Function.prototype[@@hasInstance]` method
// https://tc39.github.io/ecma262/#sec-function.prototype-@@hasinstance
ln in hn||_.f(hn,ln,{value:function(t){if("function"!=typeof this||!P(t))return!1;if(!P(this.prototype))return t instanceof this;
// for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
for(;t=Lr(t);)if(this.prototype===t)return!0;return!1}}),
// `globalThis` object
// https://github.com/tc39/proposal-global
lt({global:!0},{globalThis:j});function pn(t/* , mapfn = undefined, thisArg = undefined */,e,r){var n,o,i,a,u,c,f=ht(t),s="function"==typeof this?this:Array,l=arguments.length,h=1<l?e:void 0,p=void 0!==h,d=mr(f),v=0;
// if the target is not iterable or it's an array with the default iterator - use a simple case
if(p&&(h=Qt(h,2<l?r:void 0,2)),null==d||s==Array&&pr(d))for(o=new s(n=it(f.length));v<n;v++)c=p?h(f[v],v):f[v],Sr(o,v,c);else for(u=(a=d.call(f)).next,o=new s;!(i=u.call(a)).done;v++)c=p?br(a,h,[i.value,v],!0):i.value,Sr(o,v,c);return o.length=v,o}
// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
var dn=Jt("iterator"),vn=!1;try{var gn=0,yn={next:function(){return{done:!!gn++}},return:function(){vn=!0}};yn[dn]=function(){return this},
// eslint-disable-next-line no-throw-literal
Array.from(yn,function(){throw 2})}catch(t){/* empty */}function mn(t,e){if(!e&&!vn)return!1;var r=!1;try{var n={};n[dn]=function(){return{next:function(){return{done:r=!0}}}},t(n)}catch(t){/* empty */}return r}var bn=!mn(function(t){Array.from(t)});
// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
lt({target:"Array",stat:!0,forced:bn},{from:pn}),
// `Array.isArray` method
// https://tc39.github.io/ecma262/#sec-array.isarray
lt({target:"Array",stat:!0},{isArray:Bt});var Sn=g(function(){function t(){/* empty */}return!(Array.of.call(t)instanceof t)});
// `Array.of` method
// https://tc39.github.io/ecma262/#sec-array.of
// WebKit Array.of isn't generic
lt({target:"Array",stat:!0,forced:Sn},{of:function(){for(var t=0,e=arguments.length,r=new("function"==typeof this?this:Array)(e);t<e;)Sr(r,t,arguments[t++]);return r.length=e,r}});var wn,En,An=nt("navigator","userAgent")||"",xn=j.process,On=xn&&xn.versions,Tn=On&&On.v8;Tn?En=(wn=Tn.split("."))[0]+wn[1]:An&&(!(wn=An.match(/Edge\/(\d+)/))||74<=wn[1])&&(wn=An.match(/Chrome\/(\d+)/))&&(En=wn[1]);function Rn(e){
// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/677
return 51<=Mn||!g(function(){var t=[];return(t.constructor={})[jn]=function(){return{foo:1}},1!==t[e](Boolean).foo})}function In(t){if(P(t)){var e=t[Cn];return void 0!==e?!!e:Bt(t)}}var Mn=En&&+En,jn=Jt("species"),Cn=Jt("isConcatSpreadable"),kn=9007199254740991,Pn="Maximum allowed index exceeded",Ln=51<=Mn||!g(function(){var t=[];return t[Cn]=!1,t.concat()[0]!==t}),Nn=Rn("concat");
// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
lt({target:"Array",proto:!0,forced:!Ln||!Nn},{concat:function(t){// eslint-disable-line no-unused-vars
var e,r,n,o,i,a=ht(this),u=Zt(a,0),c=0;for(e=-1,n=arguments.length;e<n;e++)if(In(i=-1===e?a:arguments[e])){if(o=it(i.length),kn<c+o)throw TypeError(Pn);for(r=0;r<o;r++,c++)r in i&&Sr(u,c,i[r])}else{if(kn<=c)throw TypeError(Pn);Sr(u,c++,i)}return u.length=c,u}});var _n=Math.min,Fn=[].copyWithin||function(t/* = 0 */,e/* = 0, end = @length */,r){var n=ht(this),o=it(n.length),i=at(t,o),a=at(e,o),u=2<arguments.length?r:void 0,c=_n((void 0===u?o:at(u,o))-a,o-i),f=1;for(a<i&&i<a+c&&(f=-1,a+=c-1,i+=c-1);0<c--;)a in n?n[i]=n[a]:delete n[i],i+=f,a+=f;return n},Un=Jt("unscopables"),Dn=Array.prototype;
// `Array.prototype.copyWithin` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.copywithin
// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
null==Dn[Un]&&_.f(Dn,Un,{configurable:!0,value:ie(null)});
// add a key to Array.prototype[@@unscopables]
function Bn(t){Dn[Un][t]=!0}
// `Array.prototype.copyWithin` method
// https://tc39.github.io/ecma262/#sec-array.prototype.copywithin
lt({target:"Array",proto:!0},{copyWithin:Fn}),
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
Bn("copyWithin");function zn(t,e){var r=[][t];return!!r&&g(function(){
// eslint-disable-next-line no-useless-call,no-throw-literal
r.call(null,e||function(){throw 1},1)})}function Wn(t){throw t}function qn(t,e){if(L(Gn,t))return Gn[t];var r=[][t],n=!!L(e=e||{},"ACCESSORS")&&e.ACCESSORS,o=L(e,0)?e[0]:Wn,i=L(e,1)?e[1]:void 0;return Gn[t]=!!r&&!g(function(){if(n&&!C)return 1;var t={length:-1};n?Vn(t,1,{enumerable:!0,get:Wn}):t[1]=1,r.call(t,o,i)})}var Vn=Object.defineProperty,Gn={},$n=be.every,Yn=zn("every"),Jn=qn("every");
// `Array.prototype.every` method
// https://tc39.github.io/ecma262/#sec-array.prototype.every
lt({target:"Array",proto:!0,forced:!Yn||!Jn},{every:function(t/* , thisArg */,e){return $n(this,t,1<arguments.length?e:void 0)}});function Xn(t/* , start = 0, end = @length */,e,r){for(var n=ht(this),o=it(n.length),i=arguments.length,a=at(1<i?e:void 0,o),u=2<i?r:void 0,c=void 0===u?o:at(u,o);a<c;)n[a++]=t;return n}
// `Array.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
lt({target:"Array",proto:!0},{fill:Xn}),
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
Bn("fill");var Hn=be.filter,Kn=Rn("filter"),Qn=qn("filter");
// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
lt({target:"Array",proto:!0,forced:!Kn||!Qn},{filter:function(t/* , thisArg */,e){return Hn(this,t,1<arguments.length?e:void 0)}});var Zn=be.find,to="find",eo=!0,ro=qn(to);
// Shouldn't skip holes
to in[]&&Array(1)[to](function(){eo=!1}),
// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
lt({target:"Array",proto:!0,forced:eo||!ro},{find:function(t/* , that = undefined */,e){return Zn(this,t,1<arguments.length?e:void 0)}}),
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
Bn(to);var no=be.findIndex,oo="findIndex",io=!0,ao=qn(oo);
// Shouldn't skip holes
oo in[]&&Array(1)[oo](function(){io=!1}),
// `Array.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
lt({target:"Array",proto:!0,forced:io||!ao},{findIndex:function(t/* , that = undefined */,e){return no(this,t,1<arguments.length?e:void 0)}}),
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
Bn(oo);
// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var uo=function(t,e,r,n,o,i,a,u){for(var c,f=o,s=0,l=!!a&&Qt(a,u,3);s<n;){if(s in r){if(c=l?l(r[s],s,e):r[s],0<i&&Bt(c))f=uo(t,e,c,it(c.length),f,i-1)-1;else{if(9007199254740991<=f)throw TypeError("Exceed the acceptable array length");t[f]=c}f++}s++}return f},co=uo;
// `Array.prototype.flat` method
// https://github.com/tc39/proposal-flatMap
lt({target:"Array",proto:!0},{flat:function(t){var e=arguments.length?t:void 0,r=ht(this),n=it(r.length),o=Zt(r,0);return o.length=co(o,r,r,n,0,void 0===e?1:ot(e)),o}}),
// `Array.prototype.flatMap` method
// https://github.com/tc39/proposal-flatMap
lt({target:"Array",proto:!0},{flatMap:function(t/* , thisArg */,e){var r,n=ht(this),o=it(n.length);return Kt(t),(r=Zt(n,0)).length=co(r,n,n,o,0,1,t,1<arguments.length?e:void 0),r}});var fo=be.forEach,so=zn("forEach"),lo=qn("forEach"),ho=so&&lo?[].forEach:function(t/* , thisArg */,e){return fo(this,t,1<arguments.length?e:void 0)};
// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
lt({target:"Array",proto:!0,forced:[].forEach!=ho},{forEach:ho});var po=xt.includes,vo=qn("indexOf",{ACCESSORS:!0,1:0});
// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
lt({target:"Array",proto:!0,forced:!vo},{includes:function(t/* , fromIndex = 0 */,e){return po(this,t,1<arguments.length?e:void 0)}}),
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
Bn("includes");var go=xt.indexOf,yo=[].indexOf,mo=!!yo&&1/[1].indexOf(1,-0)<0,bo=zn("indexOf"),So=qn("indexOf",{ACCESSORS:!0,1:0});
// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
lt({target:"Array",proto:!0,forced:mo||!bo||!So},{indexOf:function(t/* , fromIndex = 0 */,e){return mo?yo.apply(this,arguments)||0:go(this,t,1<arguments.length?e:void 0)}});var wo=[].join,Eo=S!=Object,Ao=zn("join",",");
// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
lt({target:"Array",proto:!0,forced:Eo||!Ao},{join:function(t){return wo.call(h(this),void 0===t?",":t)}});var xo=Math.min,Oo=[].lastIndexOf,To=!!Oo&&1/[1].lastIndexOf(1,-0)<0,Ro=zn("lastIndexOf"),Io=qn("indexOf",{ACCESSORS:!0,1:0}),Mo=To||!Ro||!Io?function(t/* , fromIndex = @[*-1] */,e){
// convert -0 to +0
if(To)return Oo.apply(this,arguments)||0;var r=h(this),n=it(r.length),o=n-1;for(1<arguments.length&&(o=xo(o,ot(e))),o<0&&(o=n+o);0<=o;o--)if(o in r&&r[o]===t)return o||0;return-1}:Oo;
// `Array.prototype.lastIndexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof
lt({target:"Array",proto:!0,forced:Mo!==[].lastIndexOf},{lastIndexOf:Mo});var jo=be.map,Co=Rn("map"),ko=qn("map");
// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
lt({target:"Array",proto:!0,forced:!Co||!ko},{map:function(t/* , thisArg */,e){return jo(this,t,1<arguments.length?e:void 0)}});function Po(f){return function(t,e,r,n){Kt(e);var o=ht(t),i=S(o),a=it(o.length),u=f?a-1:0,c=f?-1:1;if(r<2)for(;;){if(u in i){n=i[u],u+=c;break}if(u+=c,f?u<0:a<=u)throw TypeError("Reduce of empty array with no initial value")}for(;f?0<=u:u<a;u+=c)u in i&&(n=e(n,i[u],u,o));return n}}
// `Array.prototype.{ reduce, reduceRight }` methods implementation
var Lo={
// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
left:Po(!1),
// `Array.prototype.reduceRight` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
right:Po(!0)},No=Lo.left,_o=zn("reduce"),Fo=qn("reduce",{1:0});
// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
lt({target:"Array",proto:!0,forced:!_o||!Fo},{reduce:function(t/* , initialValue */,e){return No(this,t,arguments.length,1<arguments.length?e:void 0)}});var Uo=Lo.right,Do=zn("reduceRight"),Bo=qn("reduce",{1:0});
// `Array.prototype.reduceRight` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
lt({target:"Array",proto:!0,forced:!Do||!Bo},{reduceRight:function(t/* , initialValue */,e){return Uo(this,t,arguments.length,1<arguments.length?e:void 0)}});var zo=[].reverse,Wo=[1,2];
// `Array.prototype.reverse` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
lt({target:"Array",proto:!0,forced:String(Wo)===String(Wo.reverse())},{reverse:function(){
// eslint-disable-next-line no-self-assign
return Bt(this)&&(this.length=this.length),zo.call(this)}});var qo=Rn("slice"),Vo=qn("slice",{ACCESSORS:!0,0:0,1:2}),Go=Jt("species"),$o=[].slice,Yo=Math.max;
// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
lt({target:"Array",proto:!0,forced:!qo||!Vo},{slice:function(t,e){var r,n,o,i=h(this),a=it(i.length),u=at(t,a),c=at(void 0===e?a:e,a);if(Bt(i)&&(
// cross-realm fallback
("function"==typeof(r=i.constructor)&&(r===Array||Bt(r.prototype))||P(r)&&null===(r=r[Go]))&&(r=void 0),r===Array||void 0===r))return $o.call(i,u,c);for(n=new(void 0===r?Array:r)(Yo(c-u,0)),o=0;u<c;u++,o++)u in i&&Sr(n,o,i[u]);return n.length=o,n}});var Jo=be.some,Xo=zn("some"),Ho=qn("some");
// `Array.prototype.some` method
// https://tc39.github.io/ecma262/#sec-array.prototype.some
lt({target:"Array",proto:!0,forced:!Xo||!Ho},{some:function(t/* , thisArg */,e){return Jo(this,t,1<arguments.length?e:void 0)}});var Ko=[],Qo=Ko.sort,Zo=g(function(){Ko.sort(void 0)}),ti=g(function(){Ko.sort(null)}),ei=zn("sort");
// `Array.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-array.prototype.sort
lt({target:"Array",proto:!0,forced:Zo||!ti||!ei},{sort:function(t){return void 0===t?Qo.call(ht(this)):Qo.call(ht(this),Kt(t))}});var ri=Rn("splice"),ni=qn("splice",{ACCESSORS:!0,0:0,1:2}),oi=Math.max,ii=Math.min;
// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
lt({target:"Array",proto:!0,forced:!ri||!ni},{splice:function(t,e/* , ...items */){var r,n,o,i,a,u,c=ht(this),f=it(c.length),s=at(t,f),l=arguments.length;if(0===l?r=n=0:n=1===l?(r=0,f-s):(r=l-2,ii(oi(ot(e),0),f-s)),9007199254740991<f+r-n)throw TypeError("Maximum allowed length exceeded");for(o=Zt(c,n),i=0;i<n;i++)(a=s+i)in c&&Sr(o,i,c[a]);if(r<(o.length=n)){for(i=s;i<f-n;i++)u=i+r,(a=i+n)in c?c[u]=c[a]:delete c[u];for(i=f;f-n+r<i;i--)delete c[i-1]}else if(n<r)for(i=f-n;s<i;i--)u=i+r-1,(a=i+n-1)in c?c[u]=c[a]:delete c[u];for(i=0;i<r;i++)c[i+s]=arguments[i+2];return c.length=f-n+r,o}});function ai(t){var e=nt(t),r=_.f;C&&e&&!e[ui]&&r(e,ui,{configurable:!0,get:function(){return this}})}var ui=Jt("species");
// `Array[@@species]` getter
// https://tc39.github.io/ecma262/#sec-get-array-@@species
ai("Array"),
// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
Bn("flat"),
// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
Bn("flatMap");var ci,fi,si,li=Jt("iterator"),hi=!1;[].keys&&(
// Safari 8 has buggy iterators w/o `next`
"next"in(si=[].keys())?(fi=Lr(Lr(si)))!==Object.prototype&&(ci=fi):hi=!0),null==ci&&(ci={}),
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
L(ci,li)||F(ci,li,function(){return this});function pi(){return this}function di(t,e,r){var n=e+" Iterator";return t.prototype=ie(mi,{next:k(1,r)}),Ht(t,n,!1),dr[n]=pi,t}function vi(){return this}function gi(t,e,r,n,o,i,a){function u(t){if(t===o&&v)return v;if(!Si&&t in p)return p[t];switch(t){case"keys":case Ei:case Ai:return function(){return new r(this,t)}}return function(){return new r(this)}}di(r,e,n);var c,f,s,l=e+" Iterator",h=!1,p=t.prototype,d=p[wi]||p["@@iterator"]||o&&p[o],v=!Si&&d||u(o),g="Array"==e&&p.entries||d;
// export additional methods
if(
// fix native
g&&(c=Lr(g.call(new t)),bi!==Object.prototype&&c.next&&(Lr(c)!==bi&&(Kr?Kr(c,bi):"function"!=typeof c[wi]&&F(c,wi,vi)),
// Set @@toStringTag to native iterators
Ht(c,l,!0))),
// fix Array#{values, @@iterator}.name in V8 / FF
o==Ei&&d&&d.name!==Ei&&(h=!0,v=function(){return d.call(this)}),
// define iterator
p[wi]!==v&&F(p,wi,v),dr[e]=v,o)if(f={values:u(Ei),keys:i?v:u("keys"),entries:u(Ai)},a)for(s in f)!Si&&!h&&s in p||yt(p,s,f[s]);else lt({target:e,proto:!0,forced:Si||h},f);return f}var yi={IteratorPrototype:ci,BUGGY_SAFARI_ITERATORS:hi},mi=yi.IteratorPrototype,bi=yi.IteratorPrototype,Si=yi.BUGGY_SAFARI_ITERATORS,wi=Jt("iterator"),Ei="values",Ai="entries",xi="Array Iterator",Oi=gt.set,Ti=gt.getterFor(xi),Ri=gi(Array,"Array",function(t,e){Oi(this,{type:xi,target:h(t),// target
index:0,// next index
kind:e});
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
},function(){var t=Ti(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?{value:t.target=void 0,done:!0}:"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}},"values");
// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
dr.Arguments=dr.Array,
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
Bn("keys"),Bn("values"),Bn("entries");var Ii=String.fromCharCode,Mi=String.fromCodePoint,ji=!!Mi&&1!=Mi.length;
// `String.fromCodePoint` method
// https://tc39.github.io/ecma262/#sec-string.fromcodepoint
lt({target:"String",stat:!0,forced:ji},{fromCodePoint:function(t){for(// eslint-disable-line no-unused-vars
var e,r=[],n=arguments.length,o=0;o<n;){if(e=+arguments[o++],at(e,1114111)!==e)throw RangeError(e+" is not a valid code point");r.push(e<65536?Ii(e):Ii(55296+((e-=65536)>>10),e%1024+56320))}return r.join("")}}),
// `String.raw` method
// https://tc39.github.io/ecma262/#sec-string.raw
lt({target:"String",stat:!0},{raw:function(t){for(var e=h(t.raw),r=it(e.length),n=arguments.length,o=[],i=0;i<r;)o.push(String(e[i++])),i<n&&o.push(String(arguments[i]));return o.join("")}});function Ci(u){return function(t,e){var r,n,o=String(l(t)),i=ot(e),a=o.length;return i<0||a<=i?u?"":void 0:(r=o.charCodeAt(i))<55296||56319<r||i+1===a||(n=o.charCodeAt(i+1))<56320||57343<n?u?o.charAt(i):r:u?o.slice(i,i+2):n-56320+(r-55296<<10)+65536}}
// `String.prototype.{ codePointAt, at }` methods implementation
var ki={
// `String.prototype.codePointAt` method
// https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
codeAt:Ci(!1),
// `String.prototype.at` method
// https://github.com/mathiasbynens/String.prototype.at
charAt:Ci(!0)},Pi=ki.codeAt;
// `String.prototype.codePointAt` method
// https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
lt({target:"String",proto:!0},{codePointAt:function(t){return Pi(this,t)}});function Li(t){var e;return P(t)&&(void 0!==(e=t[Ui])?!!e:"RegExp"==o(t))}function Ni(t){if(Li(t))throw TypeError("The method doesn't accept regular expressions");return t}function _i(e){var r=/./;try{"/./"[e](r)}catch(t){try{return r[Di]=!1,"/./"[e](r)}catch(t){/* empty */}}return!1}var Fi,Ui=Jt("match"),Di=Jt("match"),Bi=N.f,zi="".endsWith,Wi=Math.min,qi=_i("endsWith"),Vi=!(qi||(!(Fi=Bi(String.prototype,"endsWith"))||Fi.writable));
// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
// `String.prototype.endsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.endswith
lt({target:"String",proto:!0,forced:!Vi&&!qi},{endsWith:function(t/* , endPosition = @length */,e){var r=String(l(this));Ni(t);var n=1<arguments.length?e:void 0,o=it(r.length),i=void 0===n?o:Wi(it(n),o),a=String(t);return zi?zi.call(r,a,i):r.slice(i-a.length,i)===a}}),
// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
lt({target:"String",proto:!0,forced:!_i("includes")},{includes:function(t/* , position = 0 */,e){return!!~String(l(this)).indexOf(Ni(t),1<arguments.length?e:void 0)}});function Gi(){var t=R(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}
// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function $i(t,e){return RegExp(t,e)}var Yi,Ji,Xi={UNSUPPORTED_Y:g(function(){
// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var t=$i("a","y");return t.lastIndex=2,null!=t.exec("abcd")}),BROKEN_CARET:g(function(){
// https://bugzilla.mozilla.org/show_bug.cgi?id=773687
var t=$i("^r","gy");return t.lastIndex=2,null!=t.exec("str")})},Hi=RegExp.prototype.exec,Ki=String.prototype.replace,Qi=Hi,Zi=(Yi=/a/,Ji=/b*/g,Hi.call(Yi,"a"),Hi.call(Ji,"a"),0!==Yi.lastIndex||0!==Ji.lastIndex),ta=Xi.UNSUPPORTED_Y||Xi.BROKEN_CARET,ea=void 0!==/()??/.exec("")[1];(Zi||ea||ta)&&(Qi=function(t){var e,r,n,o,i=this,a=ta&&i.sticky,u=Gi.call(i),c=i.source,f=0,s=t;return a&&(-1===(u=u.replace("y","")).indexOf("g")&&(u+="g"),s=String(t).slice(i.lastIndex),
// Support anchored sticky behavior.
0<i.lastIndex&&(!i.multiline||i.multiline&&"\n"!==t[i.lastIndex-1])&&(c="(?: "+c+")",s=" "+s,f++),
// ^(? + rx + ) is needed, in combination with some str slicing, to
// simulate the 'y' flag.
r=new RegExp("^(?:"+c+")",u)),ea&&(r=new RegExp("^"+c+"$(?!\\s)",u)),Zi&&(e=i.lastIndex),n=Hi.call(a?r:i,s),a?n?(n.input=n.input.slice(f),n[0]=n[0].slice(f),n.index=i.lastIndex,i.lastIndex+=n[0].length):i.lastIndex=0:Zi&&n&&(i.lastIndex=i.global?n.index+n[0].length:e),ea&&n&&1<n.length&&
// Fix browsers whose `exec` methods don't consistently return `undefined`
// for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
Ki.call(n[0],r,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)}),n});var ra=Qi;lt({target:"RegExp",proto:!0,forced:/./.exec!==ra},{exec:ra});function na(r,t,e,n){var o=Jt(r),i=!g(function(){
// String methods call symbol-named RegEp methods
var t={};return t[o]=function(){return 7},7!=""[r](t)}),a=i&&!g(function(){
// Symbol-named RegExp methods call .exec
var t=!1,e=/a/;return"split"===r&&(
// We can't use real regex here since it causes deoptimization
// and serious performance degradation in V8
// https://github.com/zloirock/core-js/issues/306
(e={
// RegExp[@@split] doesn't call the regex's exec method, but first creates
// a new one. We need to return the patched regex when creating the new one.
constructor:{}}).constructor[aa]=function(){return e},e.flags="",e[o]=/./[o]),e.exec=function(){return t=!0,null},e[o](""),!t});if(!i||!a||"replace"===r&&(!ua||!ca||sa)||"split"===r&&!la){var u=/./[o],c=e(o,""[r],function(t,e,r,n,o){return e.exec===ra?i&&!o?{done:!0,value:u.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}},{REPLACE_KEEPS_$0:ca,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:sa}),f=c[0],s=c[1];yt(String.prototype,r,f),yt(RegExp.prototype,o,2==t?function(t,e){return s.call(t,this,e)}
// 21.2.5.6 RegExp.prototype[@@match](string)
// 21.2.5.9 RegExp.prototype[@@search](string)
:function(t){return s.call(t,this)})}n&&F(RegExp.prototype[o],"sham",!0)}function oa(t,e,r){return e+(r?ha(t,e).length:1)}function ia(t,e){var r=t.exec;if("function"==typeof r){var n=r.call(t,e);if("object"!=typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==o(t))throw TypeError("RegExp#exec called on incompatible receiver");return ra.call(t,e)}
// TODO: Remove from `core-js@4` since it's moved to entry points
var aa=Jt("species"),ua=!g(function(){
// #replace needs built-in support for named groups.
// #match works fine because it just return the exec results, even if it has
// a "grops" property.
var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),ca="$0"==="a".replace(/./,"$0"),fa=Jt("replace"),sa=!!/./[fa]&&""===/./[fa]("a","$0"),la=!g(function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}),ha=ki.charAt;
// @@match logic
na("match",1,function(n,f,s){return[
// `String.prototype.match` method
// https://tc39.github.io/ecma262/#sec-string.prototype.match
function(t){var e=l(this),r=null==t?void 0:t[n];return void 0!==r?r.call(t,e):new RegExp(t)[n](String(e))},
// `RegExp.prototype[@@match]` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
function(t){var e=s(f,t,this);if(e.done)return e.value;var r=R(t),n=String(this);if(!r.global)return ia(r,n);for(var o,i=r.unicode,a=[],u=r.lastIndex=0;null!==(o=ia(r,n));){var c=String(o[0]);""===(a[u]=c)&&(r.lastIndex=oa(n,it(r.lastIndex),i)),u++}return 0===u?null:a}]});function pa(t,e){var r,n=R(t).constructor;return void 0===n||null==(r=R(n)[va])?e:Kt(r)}function da(t){var e,r,n,o,i,a,u=R(this),c=String(t);return e=pa(u,RegExp),void 0===(r=u.flags)&&u instanceof RegExp&&!("flags"in wa)&&(r=Gi.call(u)),n=void 0===r?"":String(r),o=new e(e===RegExp?u.source:u,n),i=!!~n.indexOf("g"),a=!!~n.indexOf("u"),o.lastIndex=it(u.lastIndex),new Oa(o,c,i,a)}var va=Jt("species"),ga=Jt("matchAll"),ya="RegExp String",ma=ya+" Iterator",ba=gt.set,Sa=gt.getterFor(ma),wa=RegExp.prototype,Ea=wa.exec,Aa="".matchAll,xa=!!Aa&&!g(function(){"a".matchAll(/./)}),Oa=di(function(t,e,r,n){ba(this,{type:ma,regexp:t,string:e,global:r,unicode:n,done:!1})},ya,function(){var t=Sa(this);if(t.done)return{value:void 0,done:!0};var e=t.regexp,r=t.string,n=function(t,e){var r,n=t.exec;if("function"!=typeof n)return Ea.call(t,e);if("object"!=typeof(r=n.call(t,e)))throw TypeError("Incorrect exec result");return r}(e,r);return null===n?{value:void 0,done:t.done=!0}:t.global?(""==String(n[0])&&(e.lastIndex=oa(r,it(e.lastIndex),t.unicode)),{value:n,done:!1}):{value:n,done:!(t.done=!0)}});
// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
// `String.prototype.matchAll` method
// https://github.com/tc39/proposal-string-matchall
lt({target:"String",proto:!0,forced:xa},{matchAll:function(t){var e,r,n=l(this);if(null!=t){if(Li(t)&&!~String(l("flags"in wa?t.flags:Gi.call(t))).indexOf("g"))throw TypeError("`.matchAll` does not allow non-global regexes");if(xa)return Aa.apply(n,arguments);if(null!=(r=t[ga]))return Kt(r).call(t,n)}else if(xa)return Aa.apply(n,arguments);return e=String(n),new RegExp(t,"g")[ga](e)}}),ga in wa||F(wa,ga,da);function Ta(f){return function(t,e,r){var n,o,i=String(l(t)),a=i.length,u=void 0===r?" ":String(r),c=it(e);return c<=a||""==u?i:(n=c-a,(o=Ra.call(u,Ia(n/u.length))).length>n&&(o=o.slice(0,n)),f?i+o:o+i)}}
// `String.prototype.repeat` method implementation
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
var Ra="".repeat||function(t){var e=String(l(this)),r="",n=ot(t);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;0<n;(n>>>=1)&&(e+=e))1&n&&(r+=e);return r},Ia=Math.ceil,Ma={
// `String.prototype.padStart` method
// https://tc39.github.io/ecma262/#sec-string.prototype.padstart
start:Ta(!1),
// `String.prototype.padEnd` method
// https://tc39.github.io/ecma262/#sec-string.prototype.padend
end:Ta(!0)},ja=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(An),Ca=Ma.end;
// https://github.com/tc39/proposal-string-pad-start-end
// `String.prototype.padEnd` method
// https://tc39.github.io/ecma262/#sec-string.prototype.padend
lt({target:"String",proto:!0,forced:ja},{padEnd:function(t/* , fillString = ' ' */,e){return Ca(this,t,1<arguments.length?e:void 0)}});var ka=Ma.start;
// `String.prototype.padStart` method
// https://tc39.github.io/ecma262/#sec-string.prototype.padstart
lt({target:"String",proto:!0,forced:ja},{padStart:function(t/* , fillString = ' ' */,e){return ka(this,t,1<arguments.length?e:void 0)}}),
// `String.prototype.repeat` method
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
lt({target:"String",proto:!0},{repeat:Ra});var Pa=Math.max,La=Math.min,Na=Math.floor,_a=/\$([$&'`]|\d\d?|<[^>]*>)/g,Fa=/\$([$&'`]|\d\d?)/g;
// @@replace logic
na("replace",2,function(o,w,E,t){var A=t.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,x=t.REPLACE_KEEPS_$0,O=A?"$":"$0";return[
// `String.prototype.replace` method
// https://tc39.github.io/ecma262/#sec-string.prototype.replace
function(t,e){var r=l(this),n=null==t?void 0:t[o];return void 0!==n?n.call(t,r,e):w.call(String(r),t,e)},
// `RegExp.prototype[@@replace]` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
function(t,e){if(!A&&x||"string"==typeof e&&-1===e.indexOf(O)){var r=E(w,t,this,e);if(r.done)return r.value}var n=R(t),o=String(this),i="function"==typeof e;i||(e=String(e));var a=n.global;if(a){var u=n.unicode;n.lastIndex=0}for(var c=[];;){var f=ia(n,o);if(null===f)break;if(c.push(f),!a)break;""===String(f[0])&&(n.lastIndex=oa(o,it(n.lastIndex),u))}for(var s,l="",h=0,p=0;p<c.length;p++){f=c[p];
// NOTE: This is equivalent to
//   captures = result.slice(1).map(maybeToString)
// but for some reason `nativeSlice.call(result, 1, result.length)` (called in
// the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
// causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
for(var d=String(f[0]),v=Pa(La(ot(f.index),o.length),0),g=[],y=1;y<f.length;y++)g.push(void 0===(s=f[y])?s:String(s));var m=f.groups;if(i){var b=[d].concat(g,v,o);void 0!==m&&b.push(m);var S=String(e.apply(void 0,b))}else S=T(d,o,v,g,m,e);h<=v&&(l+=o.slice(h,v)+S,h=v+d.length)}return l+o.slice(h)}];
// https://tc39.github.io/ecma262/#sec-getsubstitution
function T(i,a,u,c,f,t){var s=u+i.length,l=c.length,e=Fa;return void 0!==f&&(f=ht(f),e=_a),w.call(t,e,function(t,e){var r;switch(e.charAt(0)){case"$":return"$";case"&":return i;case"`":return a.slice(0,u);case"'":return a.slice(s);case"<":r=f[e.slice(1,-1)];break;default:// \d\d?
var n=+e;if(0==n)return t;if(l<n){var o=Na(n/10);return 0===o?t:o<=l?void 0===c[o-1]?e.charAt(1):c[o-1]+e.charAt(1):t}r=c[n-1]}return void 0===r?"":r})}}),
// @@search logic
na("search",1,function(n,a,u){return[
// `String.prototype.search` method
// https://tc39.github.io/ecma262/#sec-string.prototype.search
function(t){var e=l(this),r=null==t?void 0:t[n];return void 0!==r?r.call(t,e):new RegExp(t)[n](String(e))},
// `RegExp.prototype[@@search]` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
function(t){var e=u(a,t,this);if(e.done)return e.value;var r=R(t),n=String(this),o=r.lastIndex;_r(o,0)||(r.lastIndex=0);var i=ia(r,n);return _r(r.lastIndex,o)||(r.lastIndex=o),null===i?-1:i.index}]});var Ua=[].push,Da=Math.min,Ba=4294967295,za=!g(function(){return!RegExp(Ba,"y")});
// @@split logic
na("split",2,function(o,g,y){var m;
// based on es5-shim implementation, need to rework it
return m="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||1<".".split(/()()/).length||"".split(/.?/).length?function(t,e){var r=String(l(this)),n=void 0===e?Ba:e>>>0;if(0==n)return[];if(void 0===t)return[r];
// If `separator` is not a regex, use native split
if(!Li(t))return g.call(r,t,n);for(var o,i,a,u=[],c=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,s=new RegExp(t.source,c+"g");(o=ra.call(s,r))&&!(f<(i=s.lastIndex)&&(u.push(r.slice(f,o.index)),1<o.length&&o.index<r.length&&Ua.apply(u,o.slice(1)),a=o[0].length,f=i,u.length>=n));)s.lastIndex===o.index&&s.lastIndex++;// Avoid an infinite loop
return f===r.length?!a&&s.test("")||u.push(""):u.push(r.slice(f)),u.length>n?u.slice(0,n):u}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:g.call(this,t,e)}:g,[
// `String.prototype.split` method
// https://tc39.github.io/ecma262/#sec-string.prototype.split
function(t,e){var r=l(this),n=null==t?void 0:t[o];return void 0!==n?n.call(t,r,e):m.call(String(r),t,e)},
// `RegExp.prototype[@@split]` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
//
// NOTE: This cannot be properly polyfilled in engines that don't support
// the 'y' flag.
function(t,e){var r=y(m,t,this,e,m!==g);if(r.done)return r.value;var n=R(t),o=String(this),i=pa(n,RegExp),a=n.unicode,u=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(za?"y":"g"),c=new i(za?n:"^(?:"+n.source+")",u),f=void 0===e?Ba:e>>>0;if(0==f)return[];if(0===o.length)return null===ia(c,o)?[o]:[];for(var s=0,l=0,h=[];l<o.length;){c.lastIndex=za?l:0;var p,d=ia(c,za?o:o.slice(l));if(null===d||(p=Da(it(c.lastIndex+(za?0:l)),o.length))===s)l=oa(o,l,a);else{if(h.push(o.slice(s,l)),h.length===f)return h;for(var v=1;v<=d.length-1;v++)if(h.push(d[v]),h.length===f)return h;l=s=p}}return h.push(o.slice(s)),h}]},!za);var Wa,qa=N.f,Va="".startsWith,Ga=Math.min,$a=_i("startsWith"),Ya=!($a||(!(Wa=qa(String.prototype,"startsWith"))||Wa.writable));
// `String.prototype.startsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.startswith
lt({target:"String",proto:!0,forced:!Ya&&!$a},{startsWith:function(t/* , position = 0 */,e){var r=String(l(this));Ni(t);var n=it(Ga(1<arguments.length?e:void 0,r.length)),o=String(t);return Va?Va.call(r,o,n):r.slice(n,n+o.length)===o}});function Ja(r){return function(t){var e=String(l(t));return 1&r&&(e=e.replace(Qa,"")),2&r&&(e=e.replace(Za,"")),e}}function Xa(t){return g(function(){return Ha[t]()||"​᠎"!="​᠎"[t]()||Ha[t].name!==t})}
// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
var Ha="\t\n\v\f\r                　\u2028\u2029\ufeff",Ka="["+Ha+"]",Qa=RegExp("^"+Ka+Ka+"*"),Za=RegExp(Ka+Ka+"*$"),tu={
// `String.prototype.{ trimLeft, trimStart }` methods
// https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
start:Ja(1),
// `String.prototype.{ trimRight, trimEnd }` methods
// https://tc39.github.io/ecma262/#sec-string.prototype.trimend
end:Ja(2),
// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
trim:Ja(3)},eu=tu.trim;
// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
lt({target:"String",proto:!0,forced:Xa("trim")},{trim:function(){return eu(this)}});var ru=tu.start,nu=Xa("trimStart"),ou=nu?function(){return ru(this)}:"".trimStart;
// `String.prototype.{ trimStart, trimLeft }` methods
// https://github.com/tc39/ecmascript-string-left-right-trim
lt({target:"String",proto:!0,forced:nu},{trimStart:ou,trimLeft:ou});var iu=tu.end,au=Xa("trimEnd"),uu=au?function(){return iu(this)}:"".trimEnd;
// `String.prototype.{ trimEnd, trimRight }` methods
// https://github.com/tc39/ecmascript-string-left-right-trim
lt({target:"String",proto:!0,forced:au},{trimEnd:uu,trimRight:uu});var cu=ki.charAt,fu="String Iterator",su=gt.set,lu=gt.getterFor(fu);
// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
gi(String,"String",function(t){su(this,{type:fu,string:String(t),index:0});
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
},function(){var t,e=lu(this),r=e.string,n=e.index;return n>=r.length?{value:void 0,done:!0}:(t=cu(r,n),e.index+=t.length,{value:t,done:!1})});function hu(t,e,r,n){var o=String(l(t)),i="<"+e;return""!==r&&(i+=" "+r+'="'+String(n).replace(du,"&quot;")+'"'),i+">"+o+"</"+e+">"}function pu(e){return g(function(){var t=""[e]('"');return t!==t.toLowerCase()||3<t.split('"').length})}var du=/"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.github.io/ecma262/#sec-createhtml
// `String.prototype.anchor` method
// https://tc39.github.io/ecma262/#sec-string.prototype.anchor
lt({target:"String",proto:!0,forced:pu("anchor")},{anchor:function(t){return hu(this,"a","name",t)}}),
// `String.prototype.big` method
// https://tc39.github.io/ecma262/#sec-string.prototype.big
lt({target:"String",proto:!0,forced:pu("big")},{big:function(){return hu(this,"big","","")}}),
// `String.prototype.blink` method
// https://tc39.github.io/ecma262/#sec-string.prototype.blink
lt({target:"String",proto:!0,forced:pu("blink")},{blink:function(){return hu(this,"blink","","")}}),
// `String.prototype.bold` method
// https://tc39.github.io/ecma262/#sec-string.prototype.bold
lt({target:"String",proto:!0,forced:pu("bold")},{bold:function(){return hu(this,"b","","")}}),
// `String.prototype.fixed` method
// https://tc39.github.io/ecma262/#sec-string.prototype.fixed
lt({target:"String",proto:!0,forced:pu("fixed")},{fixed:function(){return hu(this,"tt","","")}}),
// `String.prototype.fontcolor` method
// https://tc39.github.io/ecma262/#sec-string.prototype.fontcolor
lt({target:"String",proto:!0,forced:pu("fontcolor")},{fontcolor:function(t){return hu(this,"font","color",t)}}),
// `String.prototype.fontsize` method
// https://tc39.github.io/ecma262/#sec-string.prototype.fontsize
lt({target:"String",proto:!0,forced:pu("fontsize")},{fontsize:function(t){return hu(this,"font","size",t)}}),
// `String.prototype.italics` method
// https://tc39.github.io/ecma262/#sec-string.prototype.italics
lt({target:"String",proto:!0,forced:pu("italics")},{italics:function(){return hu(this,"i","","")}}),
// `String.prototype.link` method
// https://tc39.github.io/ecma262/#sec-string.prototype.link
lt({target:"String",proto:!0,forced:pu("link")},{link:function(t){return hu(this,"a","href",t)}}),
// `String.prototype.small` method
// https://tc39.github.io/ecma262/#sec-string.prototype.small
lt({target:"String",proto:!0,forced:pu("small")},{small:function(){return hu(this,"small","","")}}),
// `String.prototype.strike` method
// https://tc39.github.io/ecma262/#sec-string.prototype.strike
lt({target:"String",proto:!0,forced:pu("strike")},{strike:function(){return hu(this,"strike","","")}}),
// `String.prototype.sub` method
// https://tc39.github.io/ecma262/#sec-string.prototype.sub
lt({target:"String",proto:!0,forced:pu("sub")},{sub:function(){return hu(this,"sub","","")}}),
// `String.prototype.sup` method
// https://tc39.github.io/ecma262/#sec-string.prototype.sup
lt({target:"String",proto:!0,forced:pu("sup")},{sup:function(){return hu(this,"sup","","")}});function vu(t,e,r){var n,o;
// it can work only with native `setPrototypeOf`
return Kr&&
// we haven't completely correct pre-ES6 way for getting `new.target`, so use this
"function"==typeof(n=e.constructor)&&n!==r&&P(o=n.prototype)&&o!==r.prototype&&Kr(t,o),t}
// makes subclassing work correct for wrapped built-ins
var gu=_.f,yu=It.f,mu=gt.set,bu=Jt("match"),Su=j.RegExp,wu=Su.prototype,Eu=/a/g,Au=/a/g,xu=new Su(Eu)!==Eu,Ou=Xi.UNSUPPORTED_Y;
// `RegExp` constructor
// https://tc39.github.io/ecma262/#sec-regexp-constructor
if(C&&_t("RegExp",!xu||Ou||g(function(){
// RegExp constructor can alter flags and IsRegExp works correct with @@match
return Au[bu]=!1,Su(Eu)!=Eu||Su(Au)==Au||"/a/i"!=Su(Eu,"i")}))){for(var Tu=function(t,e){var r,n=this instanceof Tu,o=Li(t),i=void 0===e;if(!n&&o&&t.constructor===Tu&&i)return t;xu?o&&!i&&(t=t.source):t instanceof Tu&&(i&&(e=Gi.call(t)),t=t.source),Ou&&(r=!!e&&-1<e.indexOf("y"))&&(e=e.replace(/y/g,""));var a=vu(xu?new Su(t,e):Su(t,e),n?this:wu,Tu);return Ou&&r&&mu(a,{sticky:r}),a},Ru=function(e){e in Tu||gu(Tu,e,{configurable:!0,get:function(){return Su[e]},set:function(t){Su[e]=t}})},Iu=yu(Su),Mu=0;Iu.length>Mu;)Ru(Iu[Mu++]);(wu.constructor=Tu).prototype=wu,yt(j,"RegExp",Tu)}
// https://tc39.github.io/ecma262/#sec-get-regexp-@@species
ai("RegExp"),
// `RegExp.prototype.flags` getter
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
C&&("g"!=/./g.flags||Xi.UNSUPPORTED_Y)&&_.f(RegExp.prototype,"flags",{configurable:!0,get:Gi});var ju=Xi.UNSUPPORTED_Y,Cu=_.f,ku=gt.get,Pu=RegExp.prototype;
// `RegExp.prototype.sticky` getter
C&&ju&&Cu(RegExp.prototype,"sticky",{configurable:!0,get:function(){if(this!==Pu){
// We can't use InternalStateModule.getterFor because
// we don't add metadata for regexps created by a literal.
if(this instanceof RegExp)return!!ku(this).sticky;throw TypeError("Incompatible receiver, RegExp required")}}});
// TODO: Remove from `core-js@4` since it's moved to entry points
var Lu,Nu,_u=(Lu=!1,(Nu=/[ac]/).exec=function(){return Lu=!0,/./.exec.apply(this,arguments)},!0===Nu.test("abc")&&Lu),Fu=/./.test;lt({target:"RegExp",proto:!0,forced:!_u},{test:function(t){if("function"!=typeof this.exec)return Fu.call(this,t);var e=this.exec(t);if(null!==e&&!P(e))throw new Error("RegExp exec method returned something other than an Object or null");return!!e}});var Uu="toString",Du=RegExp.prototype,Bu=Du[Uu],zu=g(function(){return"/a/b"!=Bu.call({source:"a",flags:"b"})}),Wu=Bu.name!=Uu;
// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
(zu||Wu)&&yt(RegExp.prototype,Uu,function(){var t=R(this),e=String(t.source),r=t.flags;return"/"+e+"/"+String(void 0===r&&t instanceof RegExp&&!("flags"in Du)?Gi.call(t):r)},{unsafe:!0});var qu=tu.trim,Vu=j.parseInt,Gu=/^[+-]?0[Xx]/,$u=8!==Vu(Ha+"08")||22!==Vu(Ha+"0x16")?function(t,e){var r=qu(String(t));return Vu(r,e>>>0||(Gu.test(r)?16:10))}:Vu;
// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
lt({global:!0,forced:parseInt!=$u},{parseInt:$u});var Yu=tu.trim,Ju=j.parseFloat,Xu=1/Ju(Ha+"-0")!=-1/0?function(t){var e=Yu(String(t)),r=Ju(e);return 0===r&&"-"==e.charAt(0)?-0:r}:Ju;
// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
lt({global:!0,forced:parseFloat!=Xu},{parseFloat:Xu});function Hu(t){var e,r,n,o,i,a,u,c,f=p(t,!1);if("string"==typeof f&&2<f.length)if(43===(e=(f=tc(f)).charCodeAt(0))||45===e){if(88===(r=f.charCodeAt(2))||120===r)return NaN;// Number('+0x1') should be NaN, old V8 fix
}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:n=2,o=49;break;// fast equal of /^0b[01]+$/i
case 79:case 111:n=8,o=55;break;// fast equal of /^0o[0-7]+$/i
default:return+f}for(a=(i=f.slice(2)).length,u=0;u<a;u++)
// parseInt parses a string to a first unavailable symbol
// but ToNumber should return NaN if a string contains unavailable symbols
if((c=i.charCodeAt(u))<48||o<c)return NaN;return parseInt(i,n)}return+f}var Ku=It.f,Qu=N.f,Zu=_.f,tc=tu.trim,ec="Number",rc=j[ec],nc=rc.prototype,oc=o(ie(nc))==ec;
// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if(_t(ec,!rc(" 0o1")||!rc("0b1")||rc("+0x1"))){for(var ic,ac=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof ac&&(oc?g(function(){nc.valueOf.call(r)}):o(r)!=ec)?vu(new rc(Hu(e)),r,ac):Hu(e)},uc=C?Ku(rc):
// ES3:
"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),cc=0;uc.length>cc;cc++)L(rc,ic=uc[cc])&&!L(ac,ic)&&Zu(ac,ic,Qu(rc,ic));(ac.prototype=nc).constructor=ac,yt(j,ec,ac)}
// `Number.EPSILON` constant
// https://tc39.github.io/ecma262/#sec-number.epsilon
lt({target:"Number",stat:!0},{EPSILON:Math.pow(2,-52)});var fc=j.isFinite,sc=Number.isFinite||function(t){return"number"==typeof t&&fc(t)};
// `Number.isFinite` method
// https://tc39.github.io/ecma262/#sec-number.isfinite
// `Number.isFinite` method
// https://tc39.github.io/ecma262/#sec-number.isfinite
lt({target:"Number",stat:!0},{isFinite:sc});function lc(t){return!P(t)&&isFinite(t)&&hc(t)===t}var hc=Math.floor;
// `Number.isInteger` method implementation
// https://tc39.github.io/ecma262/#sec-number.isinteger
// `Number.isInteger` method
// https://tc39.github.io/ecma262/#sec-number.isinteger
lt({target:"Number",stat:!0},{isInteger:lc}),
// `Number.isNaN` method
// https://tc39.github.io/ecma262/#sec-number.isnan
lt({target:"Number",stat:!0},{isNaN:function(t){
// eslint-disable-next-line no-self-compare
return t!=t}});var pc=Math.abs;
// `Number.isSafeInteger` method
// https://tc39.github.io/ecma262/#sec-number.issafeinteger
lt({target:"Number",stat:!0},{isSafeInteger:function(t){return lc(t)&&pc(t)<=9007199254740991}}),
// `Number.MAX_SAFE_INTEGER` constant
// https://tc39.github.io/ecma262/#sec-number.max_safe_integer
lt({target:"Number",stat:!0},{MAX_SAFE_INTEGER:9007199254740991}),
// `Number.MIN_SAFE_INTEGER` constant
// https://tc39.github.io/ecma262/#sec-number.min_safe_integer
lt({target:"Number",stat:!0},{MIN_SAFE_INTEGER:-9007199254740991}),
// `Number.parseFloat` method
// https://tc39.github.io/ecma262/#sec-number.parseFloat
lt({target:"Number",stat:!0,forced:Number.parseFloat!=Xu},{parseFloat:Xu}),
// `Number.parseInt` method
// https://tc39.github.io/ecma262/#sec-number.parseint
lt({target:"Number",stat:!0,forced:Number.parseInt!=$u},{parseInt:$u});function dc(t){if("number"!=typeof t&&"Number"!=o(t))throw TypeError("Incorrect invocation");return+t}
// `thisNumberValue` abstract operation
// https://tc39.github.io/ecma262/#sec-thisnumbervalue
var vc=1..toFixed,gc=Math.floor,yc=function(t,e,r){return 0===e?r:e%2==1?yc(t,e-1,r*t):yc(t*t,e/2,r)},mc=vc&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!g(function(){
// V8 ~ Android 4.3-
vc.call({})});
// `Number.prototype.toFixed` method
// https://tc39.github.io/ecma262/#sec-number.prototype.tofixed
lt({target:"Number",proto:!0,forced:mc},{
// eslint-disable-next-line max-statements
toFixed:function(t){function e(t,e){for(var r=-1,n=e;++r<6;)n+=t*s[r],s[r]=n%1e7,n=gc(n/1e7)}function r(t){for(var e=6,r=0;0<=--e;)r+=s[e],s[e]=gc(r/t),r=r%t*1e7}function n(){for(var t=6,e="";0<=--t;)if(""!==e||0===t||0!==s[t]){var r=String(s[t]);e=""===e?r:e+Ra.call("0",7-r.length)+r}return e}var o,i,a,u,c=dc(this),f=ot(t),s=[0,0,0,0,0,0],l="",h="0";if(f<0||20<f)throw RangeError("Incorrect fraction digits");
// eslint-disable-next-line no-self-compare
if(c!=c)return"NaN";if(c<=-1e21||1e21<=c)return String(c);if(c<0&&(l="-",c=-c),1e-21<c)if(i=(o=function(t){for(var e=0,r=t;4096<=r;)e+=12,r/=4096;for(;2<=r;)e+=1,r/=2;return e}(c*yc(2,69,1))-69)<0?c*yc(2,-o,1):c/yc(2,o,1),i*=4503599627370496,0<(o=52-o)){for(e(0,i),a=f;7<=a;)e(1e7,0),a-=7;for(e(yc(10,a,1),0),a=o-1;23<=a;)r(1<<23),a-=23;r(1<<a),e(1,1),r(2),h=n()}else e(0,i),e(1<<-o,0),h=n()+Ra.call("0",f);return h=0<f?l+((u=h.length)<=f?"0."+Ra.call("0",f-u)+h:h.slice(0,u-f)+"."+h.slice(u-f)):l+h}});var bc=1..toPrecision,Sc=g(function(){
// IE7-
return"1"!==bc.call(1,void 0)})||!g(function(){
// V8 ~ Android 4.3-
bc.call({})});
// `Number.prototype.toPrecision` method
// https://tc39.github.io/ecma262/#sec-number.prototype.toprecision
lt({target:"Number",proto:!0,forced:Sc},{toPrecision:function(t){return void 0===t?bc.call(dc(this)):bc.call(dc(this),t)}});var wc=Math.log,Ec=Math.log1p||function(t){return-1e-8<(t=+t)&&t<1e-8?t-t*t/2:wc(1+t)},Ac=Math.acosh,xc=Math.log,Oc=Math.sqrt,Tc=Math.LN2,Rc=!Ac||710!=Math.floor(Ac(Number.MAX_VALUE))||Ac(1/0)!=1/0;
// `Math.log1p` method implementation
// https://tc39.github.io/ecma262/#sec-math.log1p
// `Math.acosh` method
// https://tc39.github.io/ecma262/#sec-math.acosh
lt({target:"Math",stat:!0,forced:Rc},{acosh:function(t){return(t=+t)<1?NaN:94906265.62425156<t?xc(t)+Tc:Ec(t-1+Oc(t-1)*Oc(t+1))}});var Ic=Math.asinh,Mc=Math.log,jc=Math.sqrt;
// `Math.asinh` method
// https://tc39.github.io/ecma262/#sec-math.asinh
// Tor Browser bug: Math.asinh(0) -> -0
lt({target:"Math",stat:!0,forced:!(Ic&&0<1/Ic(0))},{asinh:function t(e){return isFinite(e=+e)&&0!=e?e<0?-t(-e):Mc(e+jc(e*e+1)):e}});var Cc=Math.atanh,kc=Math.log;
// `Math.atanh` method
// https://tc39.github.io/ecma262/#sec-math.atanh
// Tor Browser bug: Math.atanh(-0) -> 0
lt({target:"Math",stat:!0,forced:!(Cc&&1/Cc(-0)<0)},{atanh:function(t){return 0==(t=+t)?t:kc((1+t)/(1-t))/2}});
// `Math.sign` method implementation
// https://tc39.github.io/ecma262/#sec-math.sign
var Pc=Math.sign||function(t){
// eslint-disable-next-line no-self-compare
return 0==(t=+t)||t!=t?t:t<0?-1:1},Lc=Math.abs,Nc=Math.pow;
// `Math.cbrt` method
// https://tc39.github.io/ecma262/#sec-math.cbrt
lt({target:"Math",stat:!0},{cbrt:function(t){return Pc(t=+t)*Nc(Lc(t),1/3)}});var _c=Math.floor,Fc=Math.log,Uc=Math.LOG2E;
// `Math.clz32` method
// https://tc39.github.io/ecma262/#sec-math.clz32
lt({target:"Math",stat:!0},{clz32:function(t){return(t>>>=0)?31-_c(Fc(t+.5)*Uc):32}});var Dc=Math.expm1,Bc=Math.exp,zc=!Dc||22025.465794806718<Dc(10)||Dc(10)<22025.465794806718||-2e-17!=Dc(-2e-17)?function(t){return 0==(t=+t)?t:-1e-6<t&&t<1e-6?t+t*t/2:Bc(t)-1}:Dc,Wc=Math.cosh,qc=Math.abs,Vc=Math.E;
// `Math.cosh` method
// https://tc39.github.io/ecma262/#sec-math.cosh
lt({target:"Math",stat:!0,forced:!Wc||Wc(710)===1/0},{cosh:function(t){var e=zc(qc(t)-1)+1;return(e+1/(e*Vc*Vc))*(Vc/2)}}),
// `Math.expm1` method
// https://tc39.github.io/ecma262/#sec-math.expm1
lt({target:"Math",stat:!0,forced:zc!=Math.expm1},{expm1:zc});var Gc=Math.abs,$c=Math.pow,Yc=$c(2,-52),Jc=$c(2,-23),Xc=$c(2,127)*(2-Jc),Hc=$c(2,-126),Kc=Math.fround||function(t){var e,r,n=Gc(t),o=Pc(t);return n<Hc?o*(n/Hc/Jc+1/Yc-1/Yc)*Hc*Jc:
// eslint-disable-next-line no-self-compare
Xc<(r=(e=(1+Jc/Yc)*n)-(e-n))||r!=r?o*(1/0):o*r};
// `Math.fround` method
// https://tc39.github.io/ecma262/#sec-math.fround
lt({target:"Math",stat:!0},{fround:Kc});var Qc=Math.hypot,Zc=Math.abs,tf=Math.sqrt,ef=!!Qc&&Qc(1/0,NaN)!==1/0;
// `Math.hypot` method
// https://tc39.github.io/ecma262/#sec-math.hypot
lt({target:"Math",stat:!0,forced:ef},{hypot:function(t,e){for(// eslint-disable-line no-unused-vars
var r,n,o=0,i=0,a=arguments.length,u=0;i<a;)u<(r=Zc(arguments[i++]))?(o=o*(n=u/r)*n+1,u=r):o+=0<r?(n=r/u)*n:r;return u===1/0?1/0:u*tf(o)}});var rf=Math.imul,nf=g(function(){return-5!=rf(4294967295,5)||2!=rf.length});
// `Math.imul` method
// https://tc39.github.io/ecma262/#sec-math.imul
// some WebKit versions fails with big numbers, some has wrong arity
lt({target:"Math",stat:!0,forced:nf},{imul:function(t,e){var r=65535,n=+t,o=+e,i=r&n,a=r&o;return 0|i*a+((r&n>>>16)*a+i*(r&o>>>16)<<16>>>0)}});var of=Math.log,af=Math.LOG10E;
// `Math.log10` method
// https://tc39.github.io/ecma262/#sec-math.log10
lt({target:"Math",stat:!0},{log10:function(t){return of(t)*af}}),
// `Math.log1p` method
// https://tc39.github.io/ecma262/#sec-math.log1p
lt({target:"Math",stat:!0},{log1p:Ec});var uf=Math.log,cf=Math.LN2;
// `Math.log2` method
// https://tc39.github.io/ecma262/#sec-math.log2
lt({target:"Math",stat:!0},{log2:function(t){return uf(t)/cf}}),
// `Math.sign` method
// https://tc39.github.io/ecma262/#sec-math.sign
lt({target:"Math",stat:!0},{sign:Pc});var ff=Math.abs,sf=Math.exp,lf=Math.E,hf=g(function(){return-2e-17!=Math.sinh(-2e-17)});
// `Math.sinh` method
// https://tc39.github.io/ecma262/#sec-math.sinh
// V8 near Chromium 38 has a problem with very small numbers
lt({target:"Math",stat:!0,forced:hf},{sinh:function(t){return ff(t=+t)<1?(zc(t)-zc(-t))/2:(sf(t-1)-sf(-t-1))*(lf/2)}});var pf=Math.exp;
// `Math.tanh` method
// https://tc39.github.io/ecma262/#sec-math.tanh
lt({target:"Math",stat:!0},{tanh:function(t){var e=zc(t=+t),r=zc(-t);return e==1/0?1:r==1/0?-1:(e-r)/(pf(t)+pf(-t))}}),
// Math[@@toStringTag] property
// https://tc39.github.io/ecma262/#sec-math-@@tostringtag
Ht(Math,"Math",!0);var df=Math.ceil,vf=Math.floor;
// `Math.trunc` method
// https://tc39.github.io/ecma262/#sec-math.trunc
lt({target:"Math",stat:!0},{trunc:function(t){return(0<t?vf:df)(t)}}),
// `Date.now` method
// https://tc39.github.io/ecma262/#sec-date.now
lt({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}});var gf=g(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})});
// `Date.prototype.toJSON` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tojson
lt({target:"Date",proto:!0,forced:gf},{
// eslint-disable-next-line no-unused-vars
toJSON:function(){var t=ht(this),e=p(t);return"number"!=typeof e||isFinite(e)?t.toISOString():null}});var yf=Ma.start,mf=Math.abs,bf=Date.prototype,Sf=bf.getTime,wf=bf.toISOString,Ef=g(function(){return"0385-07-25T07:06:39.999Z"!=wf.call(new Date(-5e13-1))})||!g(function(){wf.call(new Date(NaN))})?function(){if(!isFinite(Sf.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),r=t.getUTCMilliseconds(),n=e<0?"-":9999<e?"+":"";return n+yf(mf(e),n?6:4,0)+"-"+yf(t.getUTCMonth()+1,2,0)+"-"+yf(t.getUTCDate(),2,0)+"T"+yf(t.getUTCHours(),2,0)+":"+yf(t.getUTCMinutes(),2,0)+":"+yf(t.getUTCSeconds(),2,0)+"."+yf(r,3,0)+"Z"}:wf;
// `Date.prototype.toISOString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit has a broken implementations
lt({target:"Date",proto:!0,forced:Date.prototype.toISOString!==Ef},{toISOString:Ef});var Af=Date.prototype,xf="Invalid Date",Of="toString",Tf=Af[Of],Rf=Af.getTime;
// `Date.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tostring
new Date(NaN)+""!=xf&&yt(Af,Of,function(){var t=Rf.call(this);
// eslint-disable-next-line no-self-compare
return t==t?Tf.call(this):xf});var If=Jt("toPrimitive"),Mf=Date.prototype;
// `Date.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-date.prototype-@@toprimitive
If in Mf||F(Mf,If,function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return p(R(this),"number"!==t)});function jf(t,e,r){var n=r.charAt(e-1),o=r.charAt(e+1);return Pf.test(t)&&!Lf.test(o)||Lf.test(t)&&!Pf.test(n)?"\\u"+t.charCodeAt(0).toString(16):t}var Cf=nt("JSON","stringify"),kf=/[\uD800-\uDFFF]/g,Pf=/^[\uD800-\uDBFF]$/,Lf=/^[\uDC00-\uDFFF]$/,Nf=g(function(){return'"\\udf06\\ud834"'!==Cf("\udf06\ud834")||'"\\udead"'!==Cf("\udead")});Cf&&
// https://github.com/tc39/proposal-well-formed-stringify
lt({target:"JSON",stat:!0,forced:Nf},{
// eslint-disable-next-line no-unused-vars
stringify:function(t,e,r){var n=Cf.apply(null,arguments);return"string"==typeof n?n.replace(kf,jf):n}}),
// JSON[@@toStringTag] property
// https://tc39.github.io/ecma262/#sec-json-@@tostringtag
Ht(j.JSON,"JSON",!0);function _f(t,e,r){for(var n in e)yt(t,n,e[n],r);return t}function Ff(t,e,r){if(!(t instanceof e))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return t}function Uf(t){
// eslint-disable-next-line no-prototype-builtins
if(ts.hasOwnProperty(t)){var e=ts[t];delete ts[t],e()}}function Df(t){return function(){Uf(t)}}function Bf(t){Uf(t.data)}function zf(t){
// old engines have not location.origin
j.postMessage(t+"",Yf.protocol+"//"+Yf.host)}var Wf,qf,Vf,Gf=j.Promise,$f=/(iphone|ipod|ipad).*applewebkit/i.test(An),Yf=j.location,Jf=j.setImmediate,Xf=j.clearImmediate,Hf=j.process,Kf=j.MessageChannel,Qf=j.Dispatch,Zf=0,ts={},es="onreadystatechange";
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
Jf&&Xf||(Jf=function(t){for(var e=[],r=1;r<arguments.length;)e.push(arguments[r++]);return ts[++Zf]=function(){
// eslint-disable-next-line no-new-func
("function"==typeof t?t:Function(t)).apply(void 0,e)},Wf(Zf),Zf},Xf=function(t){delete ts[t]},
// Node.js 0.8-
"process"==o(Hf)?Wf=function(t){Hf.nextTick(Df(t))}:Qf&&Qf.now?Wf=function(t){Qf.now(Df(t))}:Kf&&!$f?(Vf=(qf=new Kf).port2,qf.port1.onmessage=Bf,Wf=Qt(Vf.postMessage,Vf,1)):!j.addEventListener||"function"!=typeof postMessage||j.importScripts||g(zf)?Wf=es in i("script")?function(t){qt.appendChild(i("script"))[es]=function(){qt.removeChild(this),Uf(t)}}:function(t){setTimeout(Df(t),0)}:(Wf=zf,j.addEventListener("message",Bf,!1)));var rs,ns,os,is,as,us,cs,fs,ss={set:Jf,clear:Xf},ls=N.f,hs=ss.set,ps=j.MutationObserver||j.WebKitMutationObserver,ds=j.process,vs=j.Promise,gs="process"==o(ds),ys=ls(j,"queueMicrotask"),ms=ys&&ys.value;
// modern engines have queueMicrotask method
ms||(rs=function(){var t,e;for(gs&&(t=ds.domain)&&t.exit();ns;){e=ns.fn,ns=ns.next;try{e()}catch(t){throw ns?is():os=void 0,t}}os=void 0,t&&t.enter()},
// Node.js
is=gs?function(){ds.nextTick(rs)}:ps&&!$f?(as=!0,us=document.createTextNode(""),new ps(rs).observe(us,{characterData:!0}),function(){us.data=as=!as}):vs&&vs.resolve?(
// Promise.resolve without an argument throws an error in LG WebOS 2
cs=vs.resolve(void 0),fs=cs.then,function(){fs.call(cs,rs)}):function(){
// strange IE + webpack dev server bug - use .call(global)
hs.call(j,rs)});function bs(t){var r,n;this.promise=new t(function(t,e){if(void 0!==r||void 0!==n)throw TypeError("Bad Promise constructor");r=t,n=e}),this.resolve=Kt(r),this.reject=Kt(n)}function Ss(t,e){if(R(t),P(e)&&e.constructor===t)return e;var r=ks.f(t);return(0,r.resolve)(e),r.promise}function ws(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}function Es(t){var e;return!(!P(t)||"function"!=typeof(e=t.then))&&e}function As(l,h,p){if(!h.notified){h.notified=!0;var d=h.reactions;Cs(function(){
// variable length - can't use forEach
for(var t=h.value,e=1==h.state,r=0;d.length>r;){var n,o,i,a=d[r++],u=e?a.ok:a.fail,c=a.resolve,f=a.reject,s=a.domain;try{u?(e||(2===h.rejection&&Zs(l,h),h.rejection=1),!0===u?n=t:(s&&s.enter(),n=u(t),// can throw
s&&(s.exit(),i=!0)),n===a.promise?f(Bs("Promise-chain cycle")):(o=Es(n))?o.call(n,c,f):c(n)):f(t)}catch(t){s&&!i&&s.exit(),f(t)}}h.reactions=[],h.notified=!1,p&&!h.rejection&&Ks(l,h)})}}function xs(t,e,r){var n,o;Ys?((n=zs.createEvent("Event")).promise=e,n.reason=r,n.initEvent(t,!1,!0),j.dispatchEvent(n)):n={promise:e,reason:r},(o=j["on"+t])?o(n):t===Js&&function(t,e){var r=j.console;r&&r.error&&(1===arguments.length?r.error(t):r.error(t,e))}("Unhandled promise rejection",r)}function Os(e,r,n,o){return function(t){e(r,n,t,o)}}function Ts(t,e,r,n){e.done||(e.done=!0,n&&(e=n),e.value=r,e.state=2,As(t,e,!0))}var Rs,Is,Ms,js,Cs=ms||function(t){var e={fn:t,next:void 0};os&&(os.next=e),ns||(ns=e,is()),os=e},ks={f:function(t){return new bs(t)}},Ps=ss.set,Ls=Jt("species"),Ns="Promise",_s=gt.get,Fs=gt.set,Us=gt.getterFor(Ns),Ds=Gf,Bs=j.TypeError,zs=j.document,Ws=j.process,qs=nt("fetch"),Vs=ks.f,Gs=Vs,$s="process"==o(Ws),Ys=!!(zs&&zs.createEvent&&j.dispatchEvent),Js="unhandledrejection",Xs=_t(Ns,function(){if(!(W(Ds)!==String(Ds))){
// V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
// https://bugs.chromium.org/p/chromium/issues/detail?id=830565
// We can't detect it synchronously, so just check versions
if(66===Mn)return!0;
// Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
if(!$s&&"function"!=typeof PromiseRejectionEvent)return!0}
// We can't use @@species feature detection in V8 since it causes
// deoptimization and performance degradation
// https://github.com/zloirock/core-js/issues/679
if(51<=Mn&&/native code/.test(Ds))return!1;
// Detect correctness of subclassing with @@species support
function t(t){t(function(){/* empty */},function(){/* empty */})}var e=Ds.resolve(1);return(e.constructor={})[Ls]=t,!(e.then(function(){/* empty */})instanceof t)}),Hs=Xs||!mn(function(t){Ds.all(t).catch(function(){/* empty */})}),Ks=function(r,n){Ps.call(j,function(){var t,e=n.value;if(Qs(n)&&(t=ws(function(){$s?Ws.emit("unhandledRejection",e,r):xs(Js,r,e)}),
// Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
n.rejection=$s||Qs(n)?2:1,t.error))throw t.value})},Qs=function(t){return 1!==t.rejection&&!t.parent},Zs=function(t,e){Ps.call(j,function(){$s?Ws.emit("rejectionHandled",t):xs("rejectionhandled",t,e.value)})},tl=function(r,n,t,e){if(!n.done){n.done=!0,e&&(n=e);try{if(r===t)throw Bs("Promise can't be resolved itself");var o=Es(t);o?Cs(function(){var e={done:!1};try{o.call(t,Os(tl,r,e,n),Os(Ts,r,e,n))}catch(t){Ts(r,e,t,n)}}):(n.value=t,n.state=1,As(r,n,!1))}catch(t){Ts(r,{done:!1},t,n)}}};
// constructor polyfill
Xs&&(
// 25.4.3.1 Promise(executor)
Ds=function(t){Ff(this,Ds,Ns),Kt(t),Rs.call(this);var e=_s(this);try{t(Os(tl,this,e),Os(Ts,this,e))}catch(t){Ts(this,e,t)}},(
// eslint-disable-next-line no-unused-vars
Rs=function(){Fs(this,{type:Ns,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=_f(Ds.prototype,{
// `Promise.prototype.then` method
// https://tc39.github.io/ecma262/#sec-promise.prototype.then
then:function(t,e){var r=Us(this),n=Vs(pa(this,Ds));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=$s?Ws.domain:void 0,r.parent=!0,r.reactions.push(n),0!=r.state&&As(this,r,!1),n.promise},
// `Promise.prototype.catch` method
// https://tc39.github.io/ecma262/#sec-promise.prototype.catch
catch:function(t){return this.then(void 0,t)}}),Is=function(){var t=new Rs,e=_s(t);this.promise=t,this.resolve=Os(tl,t,e),this.reject=Os(Ts,t,e)},ks.f=Vs=function(t){return t===Ds||t===Ms?new Is:Gs(t)},"function"==typeof Gf&&(js=Gf.prototype.then,
// wrap native Promise#then for native async functions
yt(Gf.prototype,"then",function(t,e){var r=this;return new Ds(function(t,e){js.call(r,t,e)}).then(t,e);
// https://github.com/zloirock/core-js/issues/640
},{unsafe:!0}),
// wrap fetch result
"function"==typeof qs&&lt({global:!0,enumerable:!0,forced:!0},{
// eslint-disable-next-line no-unused-vars
fetch:function(t/* , init */){return Ss(Ds,qs.apply(j,arguments))}}))),lt({global:!0,wrap:!0,forced:Xs},{Promise:Ds}),Ht(Ds,Ns,!1),ai(Ns),Ms=nt(Ns),
// statics
lt({target:Ns,stat:!0,forced:Xs},{
// `Promise.reject` method
// https://tc39.github.io/ecma262/#sec-promise.reject
reject:function(t){var e=Vs(this);return e.reject.call(void 0,t),e.promise}}),lt({target:Ns,stat:!0,forced:Xs},{
// `Promise.resolve` method
// https://tc39.github.io/ecma262/#sec-promise.resolve
resolve:function(t){return Ss(this,t)}}),lt({target:Ns,stat:!0,forced:Hs},{
// `Promise.all` method
// https://tc39.github.io/ecma262/#sec-promise.all
all:function(t){var u=this,e=Vs(u),c=e.resolve,f=e.reject,r=ws(function(){var n=Kt(u.resolve),o=[],i=0,a=1;Tr(t,function(t){var e=i++,r=!1;o.push(void 0),a++,n.call(u,t).then(function(t){r||(r=!0,o[e]=t,--a||c(o))},f)}),--a||c(o)});return r.error&&f(r.value),e.promise},
// `Promise.race` method
// https://tc39.github.io/ecma262/#sec-promise.race
race:function(t){var r=this,n=Vs(r),o=n.reject,e=ws(function(){var e=Kt(r.resolve);Tr(t,function(t){e.call(r,t).then(n.resolve,o)})});return e.error&&o(e.value),n.promise}}),
// `Promise.allSettled` method
// https://github.com/tc39/proposal-promise-allSettled
lt({target:"Promise",stat:!0},{allSettled:function(t){var u=this,e=ks.f(u),c=e.resolve,r=e.reject,n=ws(function(){var n=Kt(u.resolve),o=[],i=0,a=1;Tr(t,function(t){var e=i++,r=!1;o.push(void 0),a++,n.call(u,t).then(function(t){r||(r=!0,o[e]={status:"fulfilled",value:t},--a||c(o))},function(t){r||(r=!0,o[e]={status:"rejected",reason:t},--a||c(o))})}),--a||c(o)});return n.error&&r(n.value),e.promise}});
// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var el=!!Gf&&g(function(){Gf.prototype.finally.call({then:function(){/* empty */}},function(){/* empty */})});
// `Promise.prototype.finally` method
// https://tc39.github.io/ecma262/#sec-promise.prototype.finally
lt({target:"Promise",proto:!0,real:!0,forced:el},{finally:function(e){var r=pa(this,nt("Promise")),t="function"==typeof e;return this.then(t?function(t){return Ss(r,e()).then(function(){return t})}:e,t?function(t){return Ss(r,e()).then(function(){throw t})}:e)}}),
// patch native Promise.prototype for native async functions
"function"!=typeof Gf||Gf.prototype.finally||yt(Gf.prototype,"finally",nt("Promise").prototype.finally);function rl(n,t,e){function r(t){var r=c[t];yt(c,t,"add"==t?function(t){return r.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(i&&!P(t))&&r.call(this,0===t?0:t)}:"get"==t?function(t){return i&&!P(t)?void 0:r.call(this,0===t?0:t)}:"has"==t?function(t){return!(i&&!P(t))&&r.call(this,0===t?0:t)}:function(t,e){return r.call(this,0===t?0:t,e),this})}var o=-1!==n.indexOf("Map"),i=-1!==n.indexOf("Weak"),a=o?"set":"add",u=j[n],c=u&&u.prototype,f=u,s={};
// eslint-disable-next-line max-len
if(_t(n,"function"!=typeof u||!(i||c.forEach&&!g(function(){(new u).entries().next()}))))
// create collection constructor
f=e.getConstructor(t,n,o,a),fr.REQUIRED=!0;else if(_t(n,!0)){var l=new f,h=l[a](i?{}:-0,1)!=l,p=g(function(){l.has(1)}),d=mn(function(t){new u(t)}),v=!i&&g(function(){for(
// V8 ~ Chromium 42- fails only with 5+ elements
var t=new u,e=5;e--;)t[a](e,e);return!t.has(-0)});
// early implementations not supports chaining
d||(((f=t(function(t,e){Ff(t,f,n);var r=vu(new u,t,f);return null!=e&&Tr(e,r[a],r,o),r})).prototype=c).constructor=f),(p||v)&&(r("delete"),r("has"),o&&r("get")),(v||h)&&r(a),
// weak collections should not contains .clear method
i&&c.clear&&delete c.clear}return s[n]=f,lt({global:!0,forced:f!=u},s),Ht(f,n),i||e.setStrong(f,n,o),f}function nl(t){return t.frozen||(t.frozen=new gl)}function ol(t,e){return pl(t.entries,function(t){return t[0]===e})}var il=_.f,al=fr.fastKey,ul=gt.set,cl=gt.getterFor,fl={getConstructor:function(t,r,n,o){function i(t,e,r){var n,o,i=u(t),a=c(t,e);
// change existing entry
return a?a.value=r:(i.last=a={index:o=al(e,!0),key:e,value:r,previous:n=i.last,next:void 0,removed:!1},i.first||(i.first=a),n&&(n.next=a),C?i.size++:t.size++,
// add to index
"F"!==o&&(i.index[o]=a)),t}var a=t(function(t,e){Ff(t,a,r),ul(t,{type:r,index:ie(null),first:void 0,last:void 0,size:0}),C||(t.size=0),null!=e&&Tr(e,t[o],t,n)}),u=cl(r),c=function(t,e){var r,n=u(t),o=al(e);
// fast case
if("F"!==o)return n.index[o];
// frozen object case
for(r=n.first;r;r=r.next)if(r.key==e)return r};return _f(a.prototype,{
// 23.1.3.1 Map.prototype.clear()
// 23.2.3.2 Set.prototype.clear()
clear:function(){for(var t=u(this),e=t.index,r=t.first;r;)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete e[r.index],r=r.next;t.first=t.last=void 0,C?t.size=0:this.size=0},
// 23.1.3.3 Map.prototype.delete(key)
// 23.2.3.4 Set.prototype.delete(value)
delete:function(t){var e=u(this),r=c(this,t);if(r){var n=r.next,o=r.previous;delete e.index[r.index],r.removed=!0,o&&(o.next=n),n&&(n.previous=o),e.first==r&&(e.first=n),e.last==r&&(e.last=o),C?e.size--:this.size--}return!!r},
// 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
// 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
forEach:function(t/* , that = undefined */,e){for(var r,n=u(this),o=Qt(t,1<arguments.length?e:void 0,3);r=r?r.next:n.first;)
// revert to the last existing entry
for(o(r.value,r.key,this);r&&r.removed;)r=r.previous},
// 23.1.3.7 Map.prototype.has(key)
// 23.2.3.7 Set.prototype.has(value)
has:function(t){return!!c(this,t)}}),_f(a.prototype,n?{
// 23.1.3.6 Map.prototype.get(key)
get:function(t){var e=c(this,t);return e&&e.value},
// 23.1.3.9 Map.prototype.set(key, value)
set:function(t,e){return i(this,0===t?0:t,e)}}:{
// 23.2.3.1 Set.prototype.add(value)
add:function(t){return i(this,t=0===t?0:t,t)}}),C&&il(a.prototype,"size",{get:function(){return u(this).size}}),a},setStrong:function(t,e,r){var n=e+" Iterator",o=cl(e),i=cl(n);
// add .keys, .values, .entries, [@@iterator]
// 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
gi(t,e,function(t,e){ul(this,{type:n,target:t,state:o(t),kind:e,last:void 0})},function(){
// revert to the last existing entry
for(var t=i(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;
// get next entry
return t.target&&(t.last=r=r?r.next:t.state.first)?
// return step by kind
"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:{value:
// or finish the iteration
t.target=void 0,done:!0}},r?"entries":"values",!r,!0),
// add [@@species], 23.1.2.2, 23.2.2.2
ai(e)}},sl=(rl("Map",function(e){return function(t){return e(this,arguments.length?t:void 0)}},fl),rl("Set",function(e){return function(t){return e(this,arguments.length?t:void 0)}},fl),fr.getWeakData),ll=gt.set,hl=gt.getterFor,pl=be.find,dl=be.findIndex,vl=0,gl=function(){this.entries=[]};gl.prototype={get:function(t){var e=ol(this,t);if(e)return e[1]},has:function(t){return!!ol(this,t)},set:function(t,e){var r=ol(this,t);r?r[1]=e:this.entries.push([t,e])},delete:function(e){var t=dl(this.entries,function(t){return t[0]===e});return~t&&this.entries.splice(t,1),!!~t}};var yl={getConstructor:function(t,r,n,o){function i(t,e,r){var n=u(t),o=sl(R(e),!0);return!0===o?nl(n).set(e,r):o[n.id]=r,t}var a=t(function(t,e){Ff(t,a,r),ll(t,{type:r,id:vl++,frozen:void 0}),null!=e&&Tr(e,t[o],t,n)}),u=hl(r);return _f(a.prototype,{
// 23.3.3.2 WeakMap.prototype.delete(key)
// 23.4.3.3 WeakSet.prototype.delete(value)
delete:function(t){var e=u(this);if(!P(t))return!1;var r=sl(t);return!0===r?nl(e).delete(t):r&&L(r,e.id)&&delete r[e.id]},
// 23.3.3.4 WeakMap.prototype.has(key)
// 23.4.3.4 WeakSet.prototype.has(value)
has:function(t){var e=u(this);if(!P(t))return!1;var r=sl(t);return!0===r?nl(e).has(t):r&&L(r,e.id)}}),_f(a.prototype,n?{
// 23.3.3.3 WeakMap.prototype.get(key)
get:function(t){var e=u(this);if(P(t)){var r=sl(t);return!0===r?nl(e).get(t):r?r[e.id]:void 0}},
// 23.3.3.5 WeakMap.prototype.set(key, value)
set:function(t,e){return i(this,t,e)}}:{
// 23.4.3.1 WeakSet.prototype.add(value)
add:function(t){return i(this,t,!0)}}),a}};r(function(t){function e(e){return function(t){return e(this,arguments.length?t:void 0)}}var n,o=gt.enforce,r=!j.ActiveXObject&&"ActiveXObject"in j,i=Object.isExtensible,a=t.exports=rl("WeakMap",e,yl);
// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if(V&&r){n=yl.getConstructor(e,"WeakMap",!0),fr.REQUIRED=!0;var u=a.prototype,c=u.delete,f=u.has,s=u.get,l=u.set;_f(u,{delete:function(t){if(!P(t)||i(t))return c.call(this,t);var e=o(this);return e.frozen||(e.frozen=new n),c.call(this,t)||e.frozen.delete(t)},has:function(t){if(!P(t)||i(t))return f.call(this,t);var e=o(this);return e.frozen||(e.frozen=new n),f.call(this,t)||e.frozen.has(t)},get:function(t){if(!P(t)||i(t))return s.call(this,t);var e=o(this);return e.frozen||(e.frozen=new n),f.call(this,t)?s.call(this,t):e.frozen.get(t)},set:function(t,e){if(P(t)&&!i(t)){var r=o(this);r.frozen||(r.frozen=new n),f.call(this,t)?l.call(this,t,e):r.frozen.set(t,e)}else l.call(this,t,e);return this}})}});
// `WeakSet` constructor
// https://tc39.github.io/ecma262/#sec-weakset-constructor
rl("WeakSet",function(e){return function(t){return e(this,arguments.length?t:void 0)}},yl);function ml(t){if(void 0===t)return 0;var e=ot(t),r=it(e);if(e!==r)throw RangeError("Wrong length or index");return r}function bl(t){return[255&t]}function Sl(t){return[255&t,t>>8&255]}function wl(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function El(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function Al(t){return Hl(t,23,4)}function xl(t){return Hl(t,52,8)}function Ol(t,e){Fl(t[Wl],e,{get:function(){return Ul(this)[e]}})}function Tl(t,e,r,n){var o=ml(r),i=Ul(t);if(o+e>i.byteLength)throw Xl(ql);var a=Ul(i.buffer).bytes,u=o+i.byteOffset,c=a.slice(u,u+e);return n?c:c.reverse()}function Rl(t,e,r,n,o,i){var a=ml(r),u=Ul(t);if(a+e>u.byteLength)throw Xl(ql);for(var c=Ul(u.buffer).bytes,f=a+u.byteOffset,s=n(+o),l=0;l<e;l++)c[f+l]=s[i?l:e-l-1]}var Il="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView,Ml=Math.abs,jl=Math.pow,Cl=Math.floor,kl=Math.log,Pl=Math.LN2,Ll=function(t,e,r){var n,o,i,a=new Array(r),u=8*r-e-1,c=(1<<u)-1,f=c>>1,s=23===e?jl(2,-24)-jl(2,-77):0,l=t<0||0===t&&1/t<0?1:0,h=0;for(
// eslint-disable-next-line no-self-compare
(t=Ml(t))!=t||t===1/0?(
// eslint-disable-next-line no-self-compare
o=t!=t?1:0,n=c):(n=Cl(kl(t)/Pl),t*(i=jl(2,-n))<1&&(n--,i*=2),2<=(t+=1<=n+f?s/i:s*jl(2,1-f))*i&&(n++,i/=2),c<=n+f?(o=0,n=c):1<=n+f?(o=(t*i-1)*jl(2,e),n+=f):(o=t*jl(2,f-1)*jl(2,e),n=0));8<=e;a[h++]=255&o,o/=256,e-=8);for(n=n<<e|o,u+=e;0<u;a[h++]=255&n,n/=256,u-=8);return a[--h]|=128*l,a},Nl=function(t,e){var r,n=t.length,o=8*n-e-1,i=(1<<o)-1,a=i>>1,u=o-7,c=n-1,f=t[c--],s=127&f;for(f>>=7;0<u;s=256*s+t[c],c--,u-=8);for(r=s&(1<<-u)-1,s>>=-u,u+=e;0<u;r=256*r+t[c],c--,u-=8);if(0===s)s=1-a;else{if(s===i)return r?NaN:f?-1/0:1/0;r+=jl(2,e),s-=a}return(f?-1:1)*r*jl(2,s-e)},_l=It.f,Fl=_.f,Ul=gt.get,Dl=gt.set,Bl="ArrayBuffer",zl="DataView",Wl="prototype",ql="Wrong index",Vl=j[Bl],Gl=Vl,$l=j[zl],Yl=$l&&$l[Wl],Jl=Object.prototype,Xl=j.RangeError,Hl=Ll,Kl=Nl;
// `ToIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-toindex
if(Il){if(!g(function(){Vl(1)})||!g(function(){new Vl(-1);// eslint-disable-line no-new
})||g(function(){// eslint-disable-line no-new
return new Vl,// eslint-disable-line no-new
new Vl(1.5),// eslint-disable-line no-new
new Vl(NaN),Vl.name!=Bl})){for(var Ql,Zl=(Gl=function(t){return Ff(this,Gl),new Vl(ml(t))})[Wl]=Vl[Wl],th=_l(Vl),eh=0;th.length>eh;)(Ql=th[eh++])in Gl||F(Gl,Ql,Vl[Ql]);Zl.constructor=Gl}
// WebKit bug - the same parent prototype for typed arrays and data view
Kr&&Lr(Yl)!==Jl&&Kr(Yl,Jl);
// iOS Safari 7.x bug
var rh=new $l(new Gl(2)),nh=Yl.setInt8;rh.setInt8(0,2147483648),rh.setInt8(1,2147483649),!rh.getInt8(0)&&rh.getInt8(1)||_f(Yl,{setInt8:function(t,e){nh.call(this,t,e<<24>>24)},setUint8:function(t,e){nh.call(this,t,e<<24>>24)}},{unsafe:!0})}else Gl=function(t){Ff(this,Gl,Bl);var e=ml(t);Dl(this,{bytes:Xn.call(new Array(e),0),byteLength:e}),C||(this.byteLength=e)},$l=function(t,e,r){Ff(this,$l,zl),Ff(t,Gl,zl);var n=Ul(t).byteLength,o=ot(e);if(o<0||n<o)throw Xl("Wrong offset");if(n<o+(r=void 0===r?n-o:it(r)))throw Xl("Wrong length");Dl(this,{buffer:t,byteLength:r,byteOffset:o}),C||(this.buffer=t,this.byteLength=r,this.byteOffset=o)},C&&(Ol(Gl,"byteLength"),Ol($l,"buffer"),Ol($l,"byteLength"),Ol($l,"byteOffset")),_f($l[Wl],{getInt8:function(t){return Tl(this,1,t)[0]<<24>>24},getUint8:function(t){return Tl(this,1,t)[0]},getInt16:function(t/* , littleEndian */,e){var r=Tl(this,2,t,1<arguments.length?e:void 0);return(r[1]<<8|r[0])<<16>>16},getUint16:function(t/* , littleEndian */,e){var r=Tl(this,2,t,1<arguments.length?e:void 0);return r[1]<<8|r[0]},getInt32:function(t/* , littleEndian */,e){return El(Tl(this,4,t,1<arguments.length?e:void 0))},getUint32:function(t/* , littleEndian */,e){return El(Tl(this,4,t,1<arguments.length?e:void 0))>>>0},getFloat32:function(t/* , littleEndian */,e){return Kl(Tl(this,4,t,1<arguments.length?e:void 0),23)},getFloat64:function(t/* , littleEndian */,e){return Kl(Tl(this,8,t,1<arguments.length?e:void 0),52)},setInt8:function(t,e){Rl(this,1,t,bl,e)},setUint8:function(t,e){Rl(this,1,t,bl,e)},setInt16:function(t,e/* , littleEndian */,r){Rl(this,2,t,Sl,e,2<arguments.length?r:void 0)},setUint16:function(t,e/* , littleEndian */,r){Rl(this,2,t,Sl,e,2<arguments.length?r:void 0)},setInt32:function(t,e/* , littleEndian */,r){Rl(this,4,t,wl,e,2<arguments.length?r:void 0)},setUint32:function(t,e/* , littleEndian */,r){Rl(this,4,t,wl,e,2<arguments.length?r:void 0)},setFloat32:function(t,e/* , littleEndian */,r){Rl(this,4,t,Al,e,2<arguments.length?r:void 0)},setFloat64:function(t,e/* , littleEndian */,r){Rl(this,8,t,xl,e,2<arguments.length?r:void 0)}});Ht(Gl,Bl),Ht($l,zl);var oh={ArrayBuffer:Gl,DataView:$l},ih="ArrayBuffer",ah=oh[ih],uh=j[ih];
// `ArrayBuffer` constructor
// https://tc39.github.io/ecma262/#sec-arraybuffer-constructor
lt({global:!0,forced:uh!==ah},{ArrayBuffer:ah}),ai(ih);function ch(t){return P(t)&&L(Ah,xr(t))}var fh,sh=_.f,lh=j.Int8Array,hh=lh&&lh.prototype,ph=j.Uint8ClampedArray,dh=ph&&ph.prototype,vh=lh&&Lr(lh),gh=hh&&Lr(hh),yh=Object.prototype,mh=yh.isPrototypeOf,bh=Jt("toStringTag"),Sh=M("TYPED_ARRAY_TAG"),wh=Il&&!!Kr&&"Opera"!==xr(j.opera),Eh=!1,Ah={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8};for(fh in Ah)j[fh]||(wh=!1);
// WebKit bug - typed arrays constructors prototype is Object.prototype
if((!wh||"function"!=typeof vh||vh===Function.prototype)&&(
// eslint-disable-next-line no-shadow
vh=function(){throw TypeError("Incorrect invocation")},wh))for(fh in Ah)j[fh]&&Kr(j[fh],vh);if((!wh||!gh||gh===yh)&&(gh=vh.prototype,wh))for(fh in Ah)j[fh]&&Kr(j[fh].prototype,gh);
// WebKit bug - one more object in Uint8ClampedArray prototype chain
if(wh&&Lr(dh)!==gh&&Kr(dh,gh),C&&!L(gh,bh))for(fh in Eh=!0,sh(gh,bh,{get:function(){return P(this)?this[Sh]:void 0}}),Ah)j[fh]&&F(j[fh],Sh,fh);var xh={NATIVE_ARRAY_BUFFER_VIEWS:wh,TYPED_ARRAY_TAG:Eh&&Sh,aTypedArray:function(t){if(ch(t))return t;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(t){if(Kr){if(mh.call(vh,t))return t}else for(var e in Ah)if(L(Ah,fh)){var r=j[e];if(r&&(t===r||mh.call(r,t)))return t}throw TypeError("Target is not a typed array constructor")},exportTypedArrayMethod:function(t,e,r){if(C){if(r)for(var n in Ah){var o=j[n];o&&L(o.prototype,t)&&delete o.prototype[t]}gh[t]&&!r||yt(gh,t,!r&&wh&&hh[t]||e)}},exportTypedArrayStaticMethod:function(t,e,r){var n,o;if(C){if(Kr){if(r)for(n in Ah)(o=j[n])&&L(o,t)&&delete o[t];if(vh[t]&&!r)return;
// V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
try{return yt(vh,t,!r&&wh&&lh[t]||e)}catch(t){/* empty */}}for(n in Ah)!(o=j[n])||o[t]&&!r||yt(o,t,e)}},isView:function(t){var e=xr(t);return"DataView"===e||L(Ah,e)},isTypedArray:ch,TypedArray:vh,TypedArrayPrototype:gh};
// `ArrayBuffer.isView` method
// https://tc39.github.io/ecma262/#sec-arraybuffer.isview
lt({target:"ArrayBuffer",stat:!0,forced:!xh.NATIVE_ARRAY_BUFFER_VIEWS},{isView:xh.isView});var Oh=oh.ArrayBuffer,Th=oh.DataView,Rh=Oh.prototype.slice,Ih=g(function(){return!new Oh(2).slice(1,void 0).byteLength});
// `ArrayBuffer.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-arraybuffer.prototype.slice
lt({target:"ArrayBuffer",proto:!0,unsafe:!0,forced:Ih},{slice:function(t,e){if(void 0!==Rh&&void 0===e)return Rh.call(R(this),t);// FF fix
for(var r=R(this).byteLength,n=at(t,r),o=at(void 0===e?r:e,r),i=new(pa(this,Oh))(it(o-n)),a=new Th(this),u=new Th(i),c=0;n<o;)u.setUint8(c++,a.getUint8(n++));return i}}),
// `DataView` constructor
// https://tc39.github.io/ecma262/#sec-dataview-constructor
lt({global:!0,forced:!Il},{DataView:oh.DataView});function Mh(t,e){var r=function(t){var e=ot(t);if(e<0)throw RangeError("The argument can't be less than 0");return e}(t);if(r%e)throw RangeError("Wrong offset");return r}function jh(t/* , mapfn, thisArg */,e,r){var n,o,i,a,u,c,f=ht(t),s=arguments.length,l=1<s?e:void 0,h=void 0!==l,p=mr(f);if(null!=p&&!pr(p))for(c=(u=p.call(f)).next,f=[];!(a=c.call(u)).done;)f.push(a.value);for(h&&2<s&&(l=Qt(l,r,2)),o=it(f.length),i=new(Nh(this))(o),n=0;n<o;n++)i[n]=h?l(f[n],n):f[n];return i}
/* eslint-disable no-new */
var Ch=xh.NATIVE_ARRAY_BUFFER_VIEWS,kh=j.ArrayBuffer,Ph=j.Int8Array,Lh=!Ch||!g(function(){Ph(1)})||!g(function(){new Ph(-1)})||!mn(function(t){new Ph,new Ph(null),new Ph(1.5),new Ph(t)},!0)||g(function(){
// Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
return 1!==new Ph(new kh(2),1,void 0).length}),Nh=xh.aTypedArrayConstructor,_h=r(function(t){function d(t,e){for(var r=0,n=e.length,o=new(a(t))(n);r<n;)o[r]=e[r++];return o}function e(t,e){m(t,e,{get:function(){return g(this)[e]}})}function v(t){var e;return t instanceof w||"ArrayBuffer"==(e=xr(t))||"SharedArrayBuffer"==e}function n(t,e){return R(t)&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)}function r(t,e){return n(t,e=p(e,!0))?k(2,t[e]):i(t,e)}function o(t,e,r){return!(n(t,e=p(e,!0))&&P(r)&&L(r,"value"))||L(r,"get")||L(r,"set")||r.configurable||L(r,"writable")&&!r.writable||L(r,"enumerable")&&!r.enumerable?m(t,e,r):(t[e]=r.value,t)}var c=It.f,f=be.forEach,g=gt.get,y=gt.set,m=_.f,i=N.f,b=Math.round,S=j.RangeError,w=oh.ArrayBuffer,E=oh.DataView,A=xh.NATIVE_ARRAY_BUFFER_VIEWS,x=xh.TYPED_ARRAY_TAG,O=xh.TypedArray,T=xh.TypedArrayPrototype,a=xh.aTypedArrayConstructor,R=xh.isTypedArray,I="BYTES_PER_ELEMENT",M="Wrong length";C?(A||(N.f=r,_.f=o,e(T,"buffer"),e(T,"byteOffset"),e(T,"byteLength"),e(T,"length")),lt({target:"Object",stat:!0,forced:!A},{getOwnPropertyDescriptor:r,defineProperty:o}),t.exports=function(t,e,i){function s(t,o){m(t,o,{get:function(){return t=o,(e=g(this)).view[r](t*l+e.byteOffset,!0);var t,e},set:function(t){return e=o,r=t,n=g(this),i&&(r=(r=b(r))<0?0:255<r?255:255&r),void n.view[a](e*l+n.byteOffset,r,!0);var e,r,n},enumerable:!0})}var l=t.match(/\d+$/)[0]/8,h=t+(i?"Clamped":"")+"Array",r="get"+t,a="set"+t,o=j[h],p=o,n=p&&p.prototype,u={};A?Lh&&(p=e(function(t,e,r,n){return Ff(t,p,h),vu(P(e)?v(e)?void 0!==n?new o(e,Mh(r,l),n):void 0!==r?new o(e,Mh(r,l)):new o(e):R(e)?d(p,e):jh.call(p,e):new o(ml(e)),t,p)}),Kr&&Kr(p,O),f(c(o),function(t){t in p||F(p,t,o[t])}),p.prototype=n):(p=e(function(t,e,r,n){Ff(t,p,h);var o,i,a,u=0,c=0;if(P(e)){if(!v(e))return R(e)?d(p,e):jh.call(p,e);o=e,c=Mh(r,l);var f=e.byteLength;if(void 0===n){if(f%l)throw S(M);if((i=f-c)<0)throw S(M)}else if(f<(i=it(n)*l)+c)throw S(M);a=i/l}else a=ml(e),o=new w(i=a*l);for(y(t,{buffer:o,byteOffset:c,byteLength:i,length:a,view:new E(o)});u<a;)s(t,u++)}),Kr&&Kr(p,O),n=p.prototype=ie(T)),n.constructor!==p&&F(n,"constructor",p),x&&F(n,x,h),u[h]=p,lt({global:!0,forced:p!=o,sham:!A},u),I in p||F(p,I,l),I in n||F(n,I,l),ai(h)}):t.exports=function(){/* empty */}});
// `Int8Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
_h("Int8",function(n){return function(t,e,r){return n(this,t,e,r)}}),
// `Uint8Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
_h("Uint8",function(n){return function(t,e,r){return n(this,t,e,r)}}),
// `Uint8ClampedArray` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
_h("Uint8",function(n){return function(t,e,r){return n(this,t,e,r)}},!0),
// `Int16Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
_h("Int16",function(n){return function(t,e,r){return n(this,t,e,r)}}),
// `Uint16Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
_h("Uint16",function(n){return function(t,e,r){return n(this,t,e,r)}}),
// `Int32Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
_h("Int32",function(n){return function(t,e,r){return n(this,t,e,r)}}),
// `Uint32Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
_h("Uint32",function(n){return function(t,e,r){return n(this,t,e,r)}}),
// `Float32Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
_h("Float32",function(n){return function(t,e,r){return n(this,t,e,r)}}),
// `Float64Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
_h("Float64",function(n){return function(t,e,r){return n(this,t,e,r)}}),
// `%TypedArray%.from` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.from
(0,xh.exportTypedArrayStaticMethod)("from",jh,Lh);var Fh=xh.aTypedArrayConstructor;
// `%TypedArray%.of` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.of
(0,xh.exportTypedArrayStaticMethod)("of",function(){for(var t=0,e=arguments.length,r=new(Fh(this))(e);t<e;)r[t]=arguments[t++];return r},Lh);var Uh=xh.aTypedArray;
// `%TypedArray%.prototype.copyWithin` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.copywithin
(0,xh.exportTypedArrayMethod)("copyWithin",function(t,e/* , end */,r){return Fn.call(Uh(this),t,e,2<arguments.length?r:void 0)});var Dh=be.every,Bh=xh.aTypedArray;
// `%TypedArray%.prototype.every` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.every
(0,xh.exportTypedArrayMethod)("every",function(t/* , thisArg */,e){return Dh(Bh(this),t,1<arguments.length?e:void 0)});var zh=xh.aTypedArray;
// `%TypedArray%.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.fill
// eslint-disable-next-line no-unused-vars
(0,xh.exportTypedArrayMethod)("fill",function(t/* , start, end */){return Xn.apply(zh(this),arguments)});var Wh=be.filter,qh=xh.aTypedArray,Vh=xh.aTypedArrayConstructor;
// `%TypedArray%.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.filter
(0,xh.exportTypedArrayMethod)("filter",function(t/* , thisArg */,e){for(var r=Wh(qh(this),t,1<arguments.length?e:void 0),n=pa(this,this.constructor),o=0,i=r.length,a=new(Vh(n))(i);o<i;)a[o]=r[o++];return a});var Gh=be.find,$h=xh.aTypedArray;
// `%TypedArray%.prototype.find` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.find
(0,xh.exportTypedArrayMethod)("find",function(t/* , thisArg */,e){return Gh($h(this),t,1<arguments.length?e:void 0)});var Yh=be.findIndex,Jh=xh.aTypedArray;
// `%TypedArray%.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.findindex
(0,xh.exportTypedArrayMethod)("findIndex",function(t/* , thisArg */,e){return Yh(Jh(this),t,1<arguments.length?e:void 0)});var Xh=be.forEach,Hh=xh.aTypedArray;
// `%TypedArray%.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.foreach
(0,xh.exportTypedArrayMethod)("forEach",function(t/* , thisArg */,e){Xh(Hh(this),t,1<arguments.length?e:void 0)});var Kh=xt.includes,Qh=xh.aTypedArray;
// `%TypedArray%.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.includes
(0,xh.exportTypedArrayMethod)("includes",function(t/* , fromIndex */,e){return Kh(Qh(this),t,1<arguments.length?e:void 0)});var Zh=xt.indexOf,tp=xh.aTypedArray;
// `%TypedArray%.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.indexof
(0,xh.exportTypedArrayMethod)("indexOf",function(t/* , fromIndex */,e){return Zh(tp(this),t,1<arguments.length?e:void 0)});function ep(){return op.call(up(this))}var rp=Jt("iterator"),np=j.Uint8Array,op=Ri.values,ip=Ri.keys,ap=Ri.entries,up=xh.aTypedArray,cp=xh.exportTypedArrayMethod,fp=np&&np.prototype[rp],sp=!!fp&&("values"==fp.name||null==fp.name);
// `%TypedArray%.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.entries
cp("entries",function(){return ap.call(up(this))}),
// `%TypedArray%.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.keys
cp("keys",function(){return ip.call(up(this))}),
// `%TypedArray%.prototype.values` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.values
cp("values",ep,!sp),
// `%TypedArray%.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype-@@iterator
cp(rp,ep,!sp);var lp=xh.aTypedArray,hp=[].join;
// `%TypedArray%.prototype.join` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.join
// eslint-disable-next-line no-unused-vars
(0,xh.exportTypedArrayMethod)("join",function(t){return hp.apply(lp(this),arguments)});var pp=xh.aTypedArray;
// `%TypedArray%.prototype.lastIndexOf` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.lastindexof
// eslint-disable-next-line no-unused-vars
(0,xh.exportTypedArrayMethod)("lastIndexOf",function(t/* , fromIndex */){return Mo.apply(pp(this),arguments)});var dp=be.map,vp=xh.aTypedArray,gp=xh.aTypedArrayConstructor;
// `%TypedArray%.prototype.map` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.map
(0,xh.exportTypedArrayMethod)("map",function(t/* , thisArg */,e){return dp(vp(this),t,1<arguments.length?e:void 0,function(t,e){return new(gp(pa(t,t.constructor)))(e)})});var yp=Lo.left,mp=xh.aTypedArray;
// `%TypedArray%.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reduce
(0,xh.exportTypedArrayMethod)("reduce",function(t/* , initialValue */,e){return yp(mp(this),t,arguments.length,1<arguments.length?e:void 0)});var bp=Lo.right,Sp=xh.aTypedArray;
// `%TypedArray%.prototype.reduceRicht` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reduceright
(0,xh.exportTypedArrayMethod)("reduceRight",function(t/* , initialValue */,e){return bp(Sp(this),t,arguments.length,1<arguments.length?e:void 0)});var wp=xh.aTypedArray,Ep=xh.exportTypedArrayMethod,Ap=Math.floor;
// `%TypedArray%.prototype.reverse` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reverse
Ep("reverse",function(){for(var t,e=this,r=wp(e).length,n=Ap(r/2),o=0;o<n;)t=e[o],e[o++]=e[--r],e[r]=t;return e});var xp=xh.aTypedArray;
// `%TypedArray%.prototype.set` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.set
(0,xh.exportTypedArrayMethod)("set",function(t/* , offset */,e){xp(this);var r=Mh(1<arguments.length?e:void 0,1),n=this.length,o=ht(t),i=it(o.length),a=0;if(n<i+r)throw RangeError("Wrong length");for(;a<i;)this[r+a]=o[a++]},g(function(){
// eslint-disable-next-line no-undef
new Int8Array(1).set({})}));var Op=xh.aTypedArray,Tp=xh.aTypedArrayConstructor,Rp=[].slice;
// `%TypedArray%.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.slice
(0,xh.exportTypedArrayMethod)("slice",function(t,e){for(var r=Rp.call(Op(this),t,e),n=pa(this,this.constructor),o=0,i=r.length,a=new(Tp(n))(i);o<i;)a[o]=r[o++];return a},g(function(){
// eslint-disable-next-line no-undef
new Int8Array(1).slice()}));var Ip=be.some,Mp=xh.aTypedArray;
// `%TypedArray%.prototype.some` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.some
(0,xh.exportTypedArrayMethod)("some",function(t/* , thisArg */,e){return Ip(Mp(this),t,1<arguments.length?e:void 0)});var jp=xh.aTypedArray,Cp=[].sort;
// `%TypedArray%.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.sort
(0,xh.exportTypedArrayMethod)("sort",function(t){return Cp.call(jp(this),t)});var kp=xh.aTypedArray;
// `%TypedArray%.prototype.subarray` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.subarray
(0,xh.exportTypedArrayMethod)("subarray",function(t,e){var r=kp(this),n=r.length,o=at(t,n);return new(pa(r,r.constructor))(r.buffer,r.byteOffset+o*r.BYTES_PER_ELEMENT,it((void 0===e?n:at(e,n))-o))});var Pp=j.Int8Array,Lp=xh.aTypedArray,Np=xh.exportTypedArrayMethod,_p=[].toLocaleString,Fp=[].slice,Up=!!Pp&&g(function(){_p.call(new Pp(1))});
// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.tolocalestring
Np("toLocaleString",function(){return _p.apply(Up?Fp.call(Lp(this)):Lp(this),arguments)},g(function(){return[1,2].toLocaleString()!=new Pp([1,2]).toLocaleString()})||!g(function(){Pp.prototype.toLocaleString.call([1,2])}));var Dp=xh.exportTypedArrayMethod,Bp=j.Uint8Array,zp=Bp&&Bp.prototype||{},Wp=[].toString,qp=[].join;g(function(){Wp.call({})})&&(Wp=function(){return qp.call(this)}),
// `%TypedArray%.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.tostring
Dp("toString",Wp,zp.toString!=Wp);var Vp=nt("Reflect","apply"),Gp=Function.apply,$p=!g(function(){Vp(function(){/* empty */})});
// `Reflect.apply` method
// https://tc39.github.io/ecma262/#sec-reflect.apply
lt({target:"Reflect",stat:!0,forced:$p},{apply:function(t,e,r){return Kt(t),R(r),Vp?Vp(t,e,r):Gp.call(t,e,r)}});var Yp=nt("Reflect","construct"),Jp=g(function(){function t(){/* empty */}return!(Yp(function(){/* empty */},[],t)instanceof t)}),Xp=!g(function(){Yp(function(){/* empty */})}),Hp=Jp||Xp;
// `Reflect.construct` method
// https://tc39.github.io/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
lt({target:"Reflect",stat:!0,forced:Hp,sham:Hp},{construct:function(t,e/* , newTarget */,r){Kt(t),R(e);var n=arguments.length<3?t:Kt(r);if(Xp&&!Jp)return Yp(t,e,n);if(t==n){
// w/o altered newTarget, optimization for 0-4 arguments
switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}
// w/o altered newTarget, lot of arguments case
var o=[null];return o.push.apply(o,e),new(an.apply(t,o))}
// with altered newTarget, not support built-in constructors
var i=n.prototype,a=ie(P(i)?i:Object.prototype),u=Function.apply.call(t,a,e);return P(u)?u:a}});
// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
var Kp=g(function(){
// eslint-disable-next-line no-undef
Reflect.defineProperty(_.f({},1,{value:1}),1,{value:2})});
// `Reflect.defineProperty` method
// https://tc39.github.io/ecma262/#sec-reflect.defineproperty
lt({target:"Reflect",stat:!0,forced:Kp,sham:!C},{defineProperty:function(t,e,r){R(t);var n=p(e,!0);R(r);try{return _.f(t,n,r),!0}catch(t){return!1}}});var Qp=N.f;
// `Reflect.deleteProperty` method
// https://tc39.github.io/ecma262/#sec-reflect.deleteproperty
lt({target:"Reflect",stat:!0},{deleteProperty:function(t,e){var r=Qp(R(t),e);return!(r&&!r.configurable)&&delete t[e]}}),lt({target:"Reflect",stat:!0},{get:
// `Reflect.get` method
// https://tc39.github.io/ecma262/#sec-reflect.get
function t(e,r/* , receiver */){var n,o,i=arguments.length<3?e:arguments[2];return R(e)===i?e[r]:(n=N.f(e,r))?L(n,"value")?n.value:void 0===n.get?void 0:n.get.call(i):P(o=Lr(e))?t(o,r,i):void 0}}),
// `Reflect.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-reflect.getownpropertydescriptor
lt({target:"Reflect",stat:!0,sham:!C},{getOwnPropertyDescriptor:function(t,e){return N.f(R(t),e)}}),
// `Reflect.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-reflect.getprototypeof
lt({target:"Reflect",stat:!0,sham:!Cr},{getPrototypeOf:function(t){return Lr(R(t))}}),
// `Reflect.has` method
// https://tc39.github.io/ecma262/#sec-reflect.has
lt({target:"Reflect",stat:!0},{has:function(t,e){return e in t}});var Zp=Object.isExtensible;
// `Reflect.isExtensible` method
// https://tc39.github.io/ecma262/#sec-reflect.isextensible
lt({target:"Reflect",stat:!0},{isExtensible:function(t){return R(t),!Zp||Zp(t)}}),
// `Reflect.ownKeys` method
// https://tc39.github.io/ecma262/#sec-reflect.ownkeys
lt({target:"Reflect",stat:!0},{ownKeys:jt}),
// `Reflect.preventExtensions` method
// https://tc39.github.io/ecma262/#sec-reflect.preventextensions
lt({target:"Reflect",stat:!0,sham:!cr},{preventExtensions:function(t){R(t);try{var e=nt("Object","preventExtensions");return e&&e(t),!0}catch(t){return!1}}});
// MS Edge 17-18 Reflect.set allows setting the property to object
// with non-writable property on the prototype
var td=g(function(){var t=_.f({},"a",{configurable:!0});
// eslint-disable-next-line no-undef
return!1!==Reflect.set(Lr(t),"a",1,t)});lt({target:"Reflect",stat:!0,forced:td},{set:
// `Reflect.set` method
// https://tc39.github.io/ecma262/#sec-reflect.set
function t(e,r,n/* , receiver */){var o,i,a=arguments.length<4?e:arguments[3],u=N.f(R(e),r);if(!u){if(P(i=Lr(e)))return t(i,r,n,a);u=k(0)}if(L(u,"value")){if(!1===u.writable||!P(a))return!1;if(o=N.f(a,r)){if(o.get||o.set||!1===o.writable)return!1;o.value=n,_.f(a,r,o)}else _.f(a,r,k(0,n));return!0}return void 0!==u.set&&(u.set.call(a,n),!0)}}),
// `Reflect.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-reflect.setprototypeof
Kr&&lt({target:"Reflect",stat:!0},{setPrototypeOf:function(t,e){R(t),Hr(e);try{return Kr(t,e),!0}catch(t){return!1}}});
// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var ed={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};for(var rd in ed){var nd=j[rd],od=nd&&nd.prototype;
// some Chrome versions have non-configurable methods on DOMTokenList
if(od&&od.forEach!==ho)try{F(od,"forEach",ho)}catch(t){od.forEach=ho}}var id=Jt("iterator"),ad=Jt("toStringTag"),ud=Ri.values;for(var cd in ed){var fd=j[cd],sd=fd&&fd.prototype;if(sd){
// some Chrome versions have non-configurable methods on DOMTokenList
if(sd[id]!==ud)try{F(sd,id,ud)}catch(t){sd[id]=ud}if(sd[ad]||F(sd,ad,cd),ed[cd])for(var ld in Ri)
// some Chrome versions have non-configurable methods on DOMTokenList
if(sd[ld]!==Ri[ld])try{F(sd,ld,Ri[ld])}catch(t){sd[ld]=Ri[ld]}}}var hd=!j.setImmediate||!j.clearImmediate;
// http://w3c.github.io/setImmediate/
lt({global:!0,bind:!0,enumerable:!0,forced:hd},{
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
setImmediate:ss.set,
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
clearImmediate:ss.clear});var pd=j.process,dd="process"==o(pd);
// `queueMicrotask` method
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-queuemicrotask
lt({global:!0,enumerable:!0,noTargetGet:!0},{queueMicrotask:function(t){var e=dd&&pd.domain;Cs(e?e.bind(t):t)}});function vd(o){return function(t,e/* , ...arguments */){var r=2<arguments.length,n=r?gd.call(arguments,2):void 0;return o(r?function(){
// eslint-disable-next-line no-new-func
("function"==typeof t?t:Function(t)).apply(this,n)}:t,e)}}var gd=[].slice,yd=/MSIE .\./.test(An);
// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
lt({global:!0,bind:!0,forced:yd},{
// `setTimeout` method
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
setTimeout:vd(j.setTimeout),
// `setInterval` method
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
setInterval:vd(j.setInterval)});function md(t){
//  0..25 map to ASCII a..z or A..Z
// 26..35 map to ASCII 0..9
return t+22+75*(t<26)}function bd(t,e,r){var n=0;for(t=r?Nd(t/700):t>>1,t+=Nd(t/e);455<t;n+=36)t=Nd(t/35);return Nd(n+36*t/(t+38))}function Sd(t){var e,r,n=[],o=(
// Convert the input in UCS-2 to an array of Unicode code points.
t=function(t){for(var e=[],r=0,n=t.length;r<n;){var o=t.charCodeAt(r++);if(55296<=o&&o<=56319&&r<n){
// It's a high surrogate, and there is a next character.
var i=t.charCodeAt(r++);56320==(64512&i)?// Low surrogate.
e.push(((1023&o)<<10)+(1023&i)+65536):(
// It's an unmatched surrogate; only append this code unit, in case the
// next code unit is the high surrogate of a surrogate pair.
e.push(o),r--)}else e.push(o)}return e}(t)).length,i=128,a=0,u=72;
// Handle the basic code points.
for(e=0;e<t.length;e++)(r=t[e])<128&&n.push(_d(r));var c=n.length,f=c;// number of basic code points.
// Main encoding loop:
for(// number of code points that have been handled;
// Finish the basic string with a delimiter unless it's empty.
c&&n.push("-");f<o;){
// All non-basic code points < n have been handled already. Find the next larger one:
var s=Cd;for(e=0;e<t.length;e++)i<=(r=t[e])&&r<s&&(s=r);
// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
var l=f+1;if(s-i>Nd((Cd-a)/l))throw RangeError(Ld);for(a+=(s-i)*l,i=s,e=0;e<t.length;e++){if((r=t[e])<i&&++a>Cd)throw RangeError(Ld);if(r==i){for(
// Represent delta as a generalized variable-length integer.
var h=a,p=36;;p+=36){var d=p<=u?1:u+26<=p?26:p-u;if(h<d)break;var v=h-d,g=36-d;n.push(_d(md(d+v%g))),h=Nd(v/g)}n.push(_d(md(h))),u=bd(a,l,f==c),a=0,++f}}++a,++i}return n.join("")}function wd(t){var e=mr(t);if("function"!=typeof e)throw TypeError(String(t)+" is not iterable");return R(e.call(t))}function Ed(e){try{return decodeURIComponent(e)}catch(t){return e}}function Ad(t){var e,r=t.replace(Gd," "),n=4;try{return decodeURIComponent(r)}catch(t){for(;n;)r=r.replace((e=n--,$d[e-1]||($d[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))),Ed);return r}}function xd(t){return Jd[t]}function Od(t){return encodeURIComponent(t).replace(Yd,xd)}function Td(t,e){if(e)for(var r,n,o=e.split("&"),i=0;i<o.length;)(r=o[i++]).length&&(n=r.split("="),t.push({key:Ad(n.shift()),value:Ad(n.join("="))}))}function Rd(t){this.entries.length=0,Td(this.entries,t)}function Id(t,e){if(t<e)throw TypeError("Not enough arguments")}var Md=Jt("iterator"),jd=!g(function(){var t=new URL("b?a=1&b=2&c=3","http://a"),r=t.searchParams,n="";return t.pathname="c%20d",r.forEach(function(t,e){r.delete("b"),n+=e+t}),!r.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==r.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!r[Md]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host}),Cd=2147483647,kd=/[^\0-\u007E]/,Pd=/[.\u3002\uFF0E\uFF61]/g,Ld="Overflow: input needs wider integers to process",Nd=Math.floor,_d=String.fromCharCode,Fd=nt("fetch"),Ud=nt("Headers"),Dd=Jt("iterator"),Bd="URLSearchParams",zd=Bd+"Iterator",Wd=gt.set,qd=gt.getterFor(Bd),Vd=gt.getterFor(zd),Gd=/\+/g,$d=Array(4),Yd=/[!'()~]|%20/g,Jd={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},Xd=di(function(t,e){Wd(this,{type:zd,iterator:wd(qd(t).entries),kind:e})},"Iterator",function(){var t=Vd(this),e=t.kind,r=t.iterator.next(),n=r.value;return r.done||(r.value="keys"===e?n.key:"values"===e?n.value:[n.key,n.value]),r}),Hd=function(t){Ff(this,Hd,Bd);var e,r,n,o,i,a,u,c,f,s=0<arguments.length?t:void 0,l=[];if(Wd(this,{type:Bd,entries:l,updateURL:function(){/* empty */},updateSearchParams:Rd}),void 0!==s)if(P(s))if("function"==typeof(e=mr(s)))for(n=(r=e.call(s)).next;!(o=n.call(r)).done;){if((u=(a=(i=wd(R(o.value))).next).call(i)).done||(c=a.call(i)).done||!a.call(i).done)throw TypeError("Expected sequence with length 2");l.push({key:u.value+"",value:c.value+""})}else for(f in s)L(s,f)&&l.push({key:f,value:s[f]+""});else Td(l,"string"==typeof s?"?"===s.charAt(0)?s.slice(1):s:s+"")},Kd=Hd.prototype;_f(Kd,{
// `URLSearchParams.prototype.appent` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-append
append:function(t,e){Id(arguments.length,2);var r=qd(this);r.entries.push({key:t+"",value:e+""}),r.updateURL()},
// `URLSearchParams.prototype.delete` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-delete
delete:function(t){Id(arguments.length,1);for(var e=qd(this),r=e.entries,n=t+"",o=0;o<r.length;)r[o].key===n?r.splice(o,1):o++;e.updateURL()},
// `URLSearchParams.prototype.get` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-get
get:function(t){Id(arguments.length,1);for(var e=qd(this).entries,r=t+"",n=0;n<e.length;n++)if(e[n].key===r)return e[n].value;return null},
// `URLSearchParams.prototype.getAll` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-getall
getAll:function(t){Id(arguments.length,1);for(var e=qd(this).entries,r=t+"",n=[],o=0;o<e.length;o++)e[o].key===r&&n.push(e[o].value);return n},
// `URLSearchParams.prototype.has` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-has
has:function(t){Id(arguments.length,1);for(var e=qd(this).entries,r=t+"",n=0;n<e.length;)if(e[n++].key===r)return!0;return!1},
// `URLSearchParams.prototype.set` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-set
set:function(t,e){Id(arguments.length,1);for(var r,n=qd(this),o=n.entries,i=!1,a=t+"",u=e+"",c=0;c<o.length;c++)(r=o[c]).key===a&&(i?o.splice(c--,1):(i=!0,r.value=u));i||o.push({key:a,value:u}),n.updateURL()},
// `URLSearchParams.prototype.sort` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-sort
sort:function(){var t,e,r,n=qd(this),o=n.entries,i=o.slice();for(r=o.length=0;r<i.length;r++){for(t=i[r],e=0;e<r;e++)if(o[e].key>t.key){o.splice(e,0,t);break}e===r&&o.push(t)}n.updateURL()},
// `URLSearchParams.prototype.forEach` method
forEach:function(t/* , thisArg */,e){for(var r,n=qd(this).entries,o=Qt(t,1<arguments.length?e:void 0,3),i=0;i<n.length;)o((r=n[i++]).value,r.key,this)},
// `URLSearchParams.prototype.keys` method
keys:function(){return new Xd(this,"keys")},
// `URLSearchParams.prototype.values` method
values:function(){return new Xd(this,"values")},
// `URLSearchParams.prototype.entries` method
entries:function(){return new Xd(this,"entries")}},{enumerable:!0}),
// `URLSearchParams.prototype[@@iterator]` method
yt(Kd,Dd,Kd.entries),
// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
yt(Kd,"toString",function(){for(var t,e=qd(this).entries,r=[],n=0;n<e.length;)t=e[n++],r.push(Od(t.key)+"="+Od(t.value));return r.join("&")},{enumerable:!0}),Ht(Hd,Bd),lt({global:!0,forced:!jd},{URLSearchParams:Hd}),
// Wrap `fetch` for correct work with polyfilled `URLSearchParams`
// https://github.com/zloirock/core-js/issues/674
jd||"function"!=typeof Fd||"function"!=typeof Ud||lt({global:!0,enumerable:!0,forced:!0},{fetch:function(t/* , init */,e){var r,n,o,i=[t];return 1<arguments.length&&(P(r=e)&&(n=r.body,xr(n)===Bd&&((o=r.headers?new Ud(r.headers):new Ud).has("content-type")||o.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),r=ie(r,{body:k(0,String(n)),headers:k(0,o)}))),i.push(r)),Fd.apply(this,i)}});function Qd(t,e){var r,n,o;if("["==e.charAt(0)){if("]"!=e.charAt(e.length-1))return mv;if(!(r=kv(e.slice(1,-1))))return mv;t.host=r}else if(Dv(t)){if(e=function(t){var e,r,n=[],o=t.toLowerCase().replace(Pd,".").split(".");for(e=0;e<o.length;e++)r=o[e],n.push(kd.test(r)?"xn--"+Sd(r):r);return n.join(".")}(e),Rv.test(e))return mv;if(null===(r=Cv(e)))return mv;t.host=r}else{if(Iv.test(e))return mv;for(r="",n=pn(e),o=0;o<n.length;o++)r+=Fv(n[o],Pv);t.host=r}}function Zd(t){var e,r,n,o;
// ipv4
if("number"==typeof t){for(e=[],r=0;r<4;r++)e.unshift(t%256),t=vv(t/256);return e.join(".");
// ipv6
}if("object"!=typeof t)return t;for(e="",n=function(t){for(var e=null,r=1,n=null,o=0,i=0;i<8;i++)0!==t[i]?(r<o&&(e=n,r=o),n=null,o=0):(null===n&&(n=i),++o);return r<o&&(e=n,r=o),e}(t),r=0;r<8;r++)o&&0===t[r]||(o=o&&!1,n===r?(e+=r?":":"::",o=!0):(e+=t[r].toString(16),r<7&&(e+=":")));return"["+e+"]"}function tv(t){return""!=t.username||""!=t.password}function ev(t){return!t.host||t.cannotBeABaseURL||"file"==t.scheme}function rv(t,e){var r;return 2==t.length&&Sv.test(t.charAt(0))&&(":"==(r=t.charAt(1))||!e&&"|"==r)}function nv(t){var e;return 1<t.length&&rv(t.slice(0,2))&&(2==t.length||"/"===(e=t.charAt(2))||"\\"===e||"?"===e||"#"===e)}function ov(t){var e=t.path,r=e.length;!r||"file"==t.scheme&&1==r&&rv(e[0],!0)||e.pop()}function iv(t,e,r,n){var o,i,a,u,c,f,s=r||Bv,l=0,h="",p=!1,d=!1,v=!1;for(r||(t.scheme="",t.username="",t.password="",t.host=null,t.port=null,t.path=[],t.query=null,t.fragment=null,t.cannotBeABaseURL=!1,e=e.replace(Mv,"")),e=e.replace(jv,""),o=pn(e);l<=o.length;){switch(i=o[l],s){case Bv:if(!i||!Sv.test(i)){if(r)return yv;s=Wv;continue}h+=i.toLowerCase(),s=zv;break;case zv:if(i&&(wv.test(i)||"+"==i||"-"==i||"."==i))h+=i.toLowerCase();else{if(":"!=i){if(r)return yv;h="",s=Wv,l=0;continue}if(r&&(Dv(t)!=L(Uv,h)||"file"==h&&(tv(t)||null!==t.port)||"file"==t.scheme&&!t.host))return;if(t.scheme=h,r)return void(Dv(t)&&Uv[t.scheme]==t.port&&(t.port=null));h="","file"==t.scheme?s=Zv:Dv(t)&&n&&n.scheme==t.scheme?s=qv:Dv(t)?s=Yv:"/"==o[l+1]?(s=Vv,l++):(t.cannotBeABaseURL=!0,t.path.push(""),s=og)}break;case Wv:if(!n||n.cannotBeABaseURL&&"#"!=i)return yv;if(n.cannotBeABaseURL&&"#"==i){t.scheme=n.scheme,t.path=n.path.slice(),t.query=n.query,t.fragment="",t.cannotBeABaseURL=!0,s=ag;break}s="file"==n.scheme?Zv:Gv;continue;case qv:if("/"!=i||"/"!=o[l+1]){s=Gv;continue}s=Jv,l++;break;case Vv:if("/"==i){s=Xv;break}s=ng;continue;case Gv:if(t.scheme=n.scheme,i==uv)t.username=n.username,t.password=n.password,t.host=n.host,t.port=n.port,t.path=n.path.slice(),t.query=n.query;else if("/"==i||"\\"==i&&Dv(t))s=$v;else if("?"==i)t.username=n.username,t.password=n.password,t.host=n.host,t.port=n.port,t.path=n.path.slice(),t.query="",s=ig;else{if("#"!=i){t.username=n.username,t.password=n.password,t.host=n.host,t.port=n.port,t.path=n.path.slice(),t.path.pop(),s=ng;continue}t.username=n.username,t.password=n.password,t.host=n.host,t.port=n.port,t.path=n.path.slice(),t.query=n.query,t.fragment="",s=ag}break;case $v:if(!Dv(t)||"/"!=i&&"\\"!=i){if("/"!=i){t.username=n.username,t.password=n.password,t.host=n.host,t.port=n.port,s=ng;continue}s=Xv}else s=Jv;break;case Yv:if(s=Jv,"/"!=i||"/"!=h.charAt(l+1))continue;l++;break;case Jv:if("/"==i||"\\"==i)break;s=Xv;continue;case Xv:if("@"==i){p&&(h="%40"+h),p=!0,a=pn(h);for(var g=0;g<a.length;g++){var y=a[g];if(":"!=y||v){var m=Fv(y,_v);v?t.password+=m:t.username+=m}else v=!0}h=""}else if(i==uv||"/"==i||"?"==i||"#"==i||"\\"==i&&Dv(t)){if(p&&""==h)return"Invalid authority";l-=pn(h).length+1,h="",s=Hv}else h+=i;break;case Hv:case Kv:if(r&&"file"==t.scheme){s=eg;continue}if(":"!=i||d){if(i==uv||"/"==i||"?"==i||"#"==i||"\\"==i&&Dv(t)){if(Dv(t)&&""==h)return mv;if(r&&""==h&&(tv(t)||null!==t.port))return;if(u=Qd(t,h))return u;if(h="",s=rg,r)return;continue}"["==i?d=!0:"]"==i&&(d=!1),h+=i}else{if(""==h)return mv;if(u=Qd(t,h))return u;if(h="",s=Qv,r==Kv)return}break;case Qv:if(!Ev.test(i)){if(i==uv||"/"==i||"?"==i||"#"==i||"\\"==i&&Dv(t)||r){if(""!=h){var b=parseInt(h,10);if(65535<b)return bv;t.port=Dv(t)&&b===Uv[t.scheme]?null:b,h=""}if(r)return;s=rg;continue}return bv}h+=i;break;case Zv:if(t.scheme="file","/"==i||"\\"==i)s=tg;else{if(!n||"file"!=n.scheme){s=ng;continue}if(i==uv)t.host=n.host,t.path=n.path.slice(),t.query=n.query;else if("?"==i)t.host=n.host,t.path=n.path.slice(),t.query="",s=ig;else{if("#"!=i){nv(o.slice(l).join(""))||(t.host=n.host,t.path=n.path.slice(),ov(t)),s=ng;continue}t.host=n.host,t.path=n.path.slice(),t.query=n.query,t.fragment="",s=ag}}break;case tg:if("/"==i||"\\"==i){s=eg;break}n&&"file"==n.scheme&&!nv(o.slice(l).join(""))&&(rv(n.path[0],!0)?t.path.push(n.path[0]):t.host=n.host),s=ng;continue;case eg:if(i==uv||"/"==i||"\\"==i||"?"==i||"#"==i){if(!r&&rv(h))s=ng;else if(""==h){if(t.host="",r)return;s=rg}else{if(u=Qd(t,h))return u;if("localhost"==t.host&&(t.host=""),r)return;h="",s=rg}continue}h+=i;break;case rg:if(Dv(t)){if(s=ng,"/"!=i&&"\\"!=i)continue}else if(r||"?"!=i)if(r||"#"!=i){if(i!=uv&&(s=ng,"/"!=i))continue}else t.fragment="",s=ag;else t.query="",s=ig;break;case ng:if(i==uv||"/"==i||"\\"==i&&Dv(t)||!r&&("?"==i||"#"==i)){if(".."===(f=(f=h).toLowerCase())||"%2e."===f||".%2e"===f||"%2e%2e"===f?(ov(t),"/"==i||"\\"==i&&Dv(t)||t.path.push("")):"."===(c=h)||"%2e"===c.toLowerCase()?"/"==i||"\\"==i&&Dv(t)||t.path.push(""):("file"==t.scheme&&!t.path.length&&rv(h)&&(t.host&&(t.host=""),h=h.charAt(0)+":"),t.path.push(h)),h="","file"==t.scheme&&(i==uv||"?"==i||"#"==i))for(;1<t.path.length&&""===t.path[0];)t.path.shift();"?"==i?(t.query="",s=ig):"#"==i&&(t.fragment="",s=ag)}else h+=Fv(i,Nv);break;case og:"?"==i?(t.query="",s=ig):"#"==i?(t.fragment="",s=ag):i!=uv&&(t.path[0]+=Fv(i,Pv));break;case ig:r||"#"!=i?i!=uv&&("'"==i&&Dv(t)?t.query+="%27":t.query+="#"==i?"%23":Fv(i,Pv)):(t.fragment="",s=ag);break;case ag:i!=uv&&(t.fragment+=Fv(i,Lv))}l++}}function av(t,e){return{get:t,set:e,configurable:!0,enumerable:!0}}var uv,cv={URLSearchParams:Hd,getState:qd},fv=ki.codeAt,sv=j.URL,lv=cv.URLSearchParams,hv=cv.getState,pv=gt.set,dv=gt.getterFor("URL"),vv=Math.floor,gv=Math.pow,yv="Invalid scheme",mv="Invalid host",bv="Invalid port",Sv=/[A-Za-z]/,wv=/[\d+\-.A-Za-z]/,Ev=/\d/,Av=/^(0x|0X)/,xv=/^[0-7]+$/,Ov=/^\d+$/,Tv=/^[\dA-Fa-f]+$/,Rv=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,Iv=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,Mv=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,jv=/[\u0009\u000A\u000D]/g,Cv=function(t){var e,r,n,o,i,a,u,c=t.split(".");if(c.length&&""==c[c.length-1]&&c.pop(),4<(e=c.length))return t;for(r=[],n=0;n<e;n++){if(""==(o=c[n]))return t;if(i=10,1<o.length&&"0"==o.charAt(0)&&(i=Av.test(o)?16:8,o=o.slice(8==i?1:2)),""===o)a=0;else{if(!(10==i?Ov:8==i?xv:Tv).test(o))return t;a=parseInt(o,i)}r.push(a)}for(n=0;n<e;n++)if(a=r[n],n==e-1){if(a>=gv(256,5-e))return null}else if(255<a)return null;for(u=r.pop(),n=0;n<r.length;n++)u+=r[n]*gv(256,3-n);return u},kv=function(t){function e(){return t.charAt(h)}var r,n,o,i,a,u,c,f=[0,0,0,0,0,0,0,0],s=0,l=null,h=0;if(":"==e()){if(":"!=t.charAt(1))return;h+=2,l=++s}for(;e();){if(8==s)return;if(":"!=e()){for(r=n=0;n<4&&Tv.test(e());)r=16*r+parseInt(e(),16),h++,n++;if("."==e()){if(0==n)return;if(h-=n,6<s)return;for(o=0;e();){if(i=null,0<o){if(!("."==e()&&o<4))return;h++}if(!Ev.test(e()))return;for(;Ev.test(e());){if(a=parseInt(e(),10),null===i)i=a;else{if(0==i)return;i=10*i+a}if(255<i)return;h++}f[s]=256*f[s]+i,2!=++o&&4!=o||s++}if(4!=o)return;break}if(":"==e()){if(h++,!e())return}else if(e())return;f[s++]=r}else{if(null!==l)return;h++,l=++s}}if(null!==l)for(u=s-l,s=7;0!=s&&0<u;)c=f[s],f[s--]=f[l+u-1],f[l+--u]=c;else if(8!=s)return;return f},Pv={},Lv=nr({},Pv,{" ":1,'"':1,"<":1,">":1,"`":1}),Nv=nr({},Lv,{"#":1,"?":1,"{":1,"}":1}),_v=nr({},Nv,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),Fv=function(t,e){var r=fv(t,0);return 32<r&&r<127&&!L(e,t)?t:encodeURIComponent(t)},Uv={ftp:21,file:null,http:80,https:443,ws:80,wss:443},Dv=function(t){return L(Uv,t.scheme)},Bv={},zv={},Wv={},qv={},Vv={},Gv={},$v={},Yv={},Jv={},Xv={},Hv={},Kv={},Qv={},Zv={},tg={},eg={},rg={},ng={},og={},ig={},ag={},ug=function(t/* , base */,e){var r,n,o=Ff(this,ug,"URL"),i=1<arguments.length?e:void 0,a=String(t),u=pv(o,{type:"URL"});if(void 0!==i)if(i instanceof ug)r=dv(i);else if(n=iv(r={},String(i)))throw TypeError(n);if(n=iv(u,a,null,r))throw TypeError(n);var c=u.searchParams=new lv,f=hv(c);f.updateSearchParams(u.query),f.updateURL=function(){u.query=String(c)||null},C||(o.href=fg.call(o),o.origin=sg.call(o),o.protocol=lg.call(o),o.username=hg.call(o),o.password=pg.call(o),o.host=dg.call(o),o.hostname=vg.call(o),o.port=gg.call(o),o.pathname=yg.call(o),o.search=mg.call(o),o.searchParams=bg.call(o),o.hash=Sg.call(o))},cg=ug.prototype,fg=function(){var t=dv(this),e=t.scheme,r=t.username,n=t.password,o=t.host,i=t.port,a=t.path,u=t.query,c=t.fragment,f=e+":";return null!==o?(f+="//",tv(t)&&(f+=r+(n?":"+n:"")+"@"),f+=Zd(o),null!==i&&(f+=":"+i)):"file"==e&&(f+="//"),f+=t.cannotBeABaseURL?a[0]:a.length?"/"+a.join("/"):"",null!==u&&(f+="?"+u),null!==c&&(f+="#"+c),f},sg=function(){var t=dv(this),e=t.scheme,r=t.port;if("blob"==e)try{return new URL(e.path[0]).origin}catch(t){return"null"}return"file"!=e&&Dv(t)?e+"://"+Zd(t.host)+(null!==r?":"+r:""):"null"},lg=function(){return dv(this).scheme+":"},hg=function(){return dv(this).username},pg=function(){return dv(this).password},dg=function(){var t=dv(this),e=t.host,r=t.port;return null===e?"":null===r?Zd(e):Zd(e)+":"+r},vg=function(){var t=dv(this).host;return null===t?"":Zd(t)},gg=function(){var t=dv(this).port;return null===t?"":String(t)},yg=function(){var t=dv(this),e=t.path;return t.cannotBeABaseURL?e[0]:e.length?"/"+e.join("/"):""},mg=function(){var t=dv(this).query;return t?"?"+t:""},bg=function(){return dv(this).searchParams},Sg=function(){var t=dv(this).fragment;return t?"#"+t:""};
// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
if(C&&Wt(cg,{
// `URL.prototype.href` accessors pair
// https://url.spec.whatwg.org/#dom-url-href
href:av(fg,function(t){var e=dv(this),r=String(t),n=iv(e,r);if(n)throw TypeError(n);hv(e.searchParams).updateSearchParams(e.query)}),
// `URL.prototype.origin` getter
// https://url.spec.whatwg.org/#dom-url-origin
origin:av(sg),
// `URL.prototype.protocol` accessors pair
// https://url.spec.whatwg.org/#dom-url-protocol
protocol:av(lg,function(t){var e=dv(this);iv(e,String(t)+":",Bv)}),
// `URL.prototype.username` accessors pair
// https://url.spec.whatwg.org/#dom-url-username
username:av(hg,function(t){var e=dv(this),r=pn(String(t));if(!ev(e)){e.username="";for(var n=0;n<r.length;n++)e.username+=Fv(r[n],_v)}}),
// `URL.prototype.password` accessors pair
// https://url.spec.whatwg.org/#dom-url-password
password:av(pg,function(t){var e=dv(this),r=pn(String(t));if(!ev(e)){e.password="";for(var n=0;n<r.length;n++)e.password+=Fv(r[n],_v)}}),
// `URL.prototype.host` accessors pair
// https://url.spec.whatwg.org/#dom-url-host
host:av(dg,function(t){var e=dv(this);e.cannotBeABaseURL||iv(e,String(t),Hv)}),
// `URL.prototype.hostname` accessors pair
// https://url.spec.whatwg.org/#dom-url-hostname
hostname:av(vg,function(t){var e=dv(this);e.cannotBeABaseURL||iv(e,String(t),Kv)}),
// `URL.prototype.port` accessors pair
// https://url.spec.whatwg.org/#dom-url-port
port:av(gg,function(t){var e=dv(this);ev(e)||(""==(t=String(t))?e.port=null:iv(e,t,Qv))}),
// `URL.prototype.pathname` accessors pair
// https://url.spec.whatwg.org/#dom-url-pathname
pathname:av(yg,function(t){var e=dv(this);e.cannotBeABaseURL||(e.path=[],iv(e,t+"",rg))}),
// `URL.prototype.search` accessors pair
// https://url.spec.whatwg.org/#dom-url-search
search:av(mg,function(t){var e=dv(this);""==(t=String(t))?e.query=null:("?"==t.charAt(0)&&(t=t.slice(1)),e.query="",iv(e,t,ig)),hv(e.searchParams).updateSearchParams(e.query)}),
// `URL.prototype.searchParams` getter
// https://url.spec.whatwg.org/#dom-url-searchparams
searchParams:av(bg),
// `URL.prototype.hash` accessors pair
// https://url.spec.whatwg.org/#dom-url-hash
hash:av(Sg,function(t){var e=dv(this);""!=(t=String(t))?("#"==t.charAt(0)&&(t=t.slice(1)),e.fragment="",iv(e,t,ag)):e.fragment=null})}),
// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
yt(cg,"toJSON",function(){return fg.call(this)},{enumerable:!0}),
// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
yt(cg,"toString",function(){return fg.call(this)},{enumerable:!0}),sv){var wg=sv.createObjectURL,Eg=sv.revokeObjectURL;
// `URL.createObjectURL` method
// https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
// eslint-disable-next-line no-unused-vars
wg&&yt(ug,"createObjectURL",function(t){return wg.apply(sv,arguments)}),
// `URL.revokeObjectURL` method
// https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
// eslint-disable-next-line no-unused-vars
Eg&&yt(ug,"revokeObjectURL",function(t){return Eg.apply(sv,arguments)})}Ht(ug,"URL"),lt({global:!0,forced:!jd,sham:!C},{URL:ug}),
// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
lt({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}});
/*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */
var Ag=function(){return(Ag=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},xg=null;function Og(){return xg}function Tg(t){xg=t}function Rg(t,e){if(!t&&!e)return null;if(t&&!e)return null;if(!t&&e)return e;for(var r=[t],n=[e],o=t;0<r.length||0<n.length;){var i=r.shift(),a=n.shift();!i||a?i||!a?i.isEqualNode(a)||(i.nodeName!==a.nodeName&&i.parentElement.replaceChild(a,i),"#text"!=i.nodeName||"#text"==a.nodeName?(("#text"==i.nodeName&&"#text"==a.nodeName||1==a.childNodes.length&&"#text"==a.childNodes[0].nodeName)&&i.textContent!==a.textContent&&(i.textContent=a.textContent),jg(i,a),o=Ig(i,o,r,a,n)):(o.removeChild(i),o.appendChild(a))):o.appendChild(a):i.parentElement.removeChild(i)}return t}function Ig(t,e,r,n,o){return 0<t.childNodes.length&&(e=Mg(t,e,t,r)),0<n.childNodes.length&&(e=Mg(t,e,n,o)),e}function Mg(e,t,r,n){return e&&(t=e),Array.from(r.childNodes).forEach(function(t){1==e.childNodes.length&&"#text"==e.childNodes[0].nodeName||n.push(t)}),t}function jg(t,e){for(var r,n=t&&t.attributes?Pg(t.attributes):[],o=e&&e.attributes?Pg(e.attributes):[];0<o.length;){var i=n.shift(),a=o.shift();kg(i,a,t),t&&a&&Cg(i,a,t)}0<n.length&&(r=t,n.forEach(function(t){return r.attributes.removeNamedItem(t.name)}))}function Cg(t,e,r){t.name!=e.name&&(r.removeAttribute(t.name),r.setAttribute(e.name,e.value)),t.value!=e.value&&(r.getAttributeNode(e.name).value=e.value)}function kg(t,e,r){t&&!e&&r.removeAttribute(t.name),!t&&e&&r.setAttribute(e.name,e.value)}function Pg(t){return Array.from(t).sort(function(t,e){return t.name.localeCompare(e.name)})}
/*
   * Node.isConnected polyfill for IE and EdgeHTML
   * 2020-02-04
   *
   * By Eli Grey, https://eligrey.com
   * Public domain.
   * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
   */function Lg(){"isConnected"in Node.prototype||Object.defineProperty(Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}Lg();var Ng,_g,Fg=(Ug.listen=function(){var r=this;Ug.removeUnusedEvents(),this.eventList.forEach(function(t){var e=t.type;r.isEventTypeListening(e)||(document.addEventListener(e,function(t){return r.dispatchEvent(t)}),r.eventListType.push(e))})},Ug.dispatchEvent=function(e){var r=this;this.eventList.find(function(t){r.isEventTarget(t,e)&&t.type===e.type&&t.callbackFn(e)})},Ug.addEvent=function(t){var e=t.dom,r=t.type,n=t.callbackFn;this.eventList.push({dom:e,type:r,callbackFn:n})},Ug.removeUnusedEvents=function(){this.eventList=this.eventList.filter(function(t){return t.dom.isConnected})},Ug.isEventTypeListening=function(e){return this.eventListType.find(function(t){return t==e})},Ug.isEventTarget=function(t,e){return t.dom===e.target||t.dom.contains(e.target)},Ug.oldEventType=[],Ug.eventList=[],Ug.eventListType=[],Ug);
/*! http://mths.be/startswith v0.2.0 by @mathias */function Ug(){}function Dg(t){if(null==this)throw TypeError();var e=String(this);if(t&&"[object RegExp]"==_g.call(t))throw TypeError();var r=e.length,n=String(t),o=n.length,i=1<arguments.length?arguments[1]:void 0,a=i?Number(i):0;a!=a&&(// better `isNaN`
a=0);var u=Math.min(Math.max(a,0),r);
// Avoid the `indexOf` call if no match is possible
if(r<o+u)return!1;for(var c=-1;++c<o;)if(e.charCodeAt(u+c)!=n.charCodeAt(c))return!1;return!0}String.prototype.startsWith||(Ng=function(){
// IE 8 only supports `Object.defineProperty` on DOM elements
try{var t={},e=Object.defineProperty,r=e(t,t,t)&&e}catch(t){}return r}(),_g={}.toString,Ng?Ng(String.prototype,"startsWith",{value:Dg,configurable:!0,writable:!0}):String.prototype.startsWith=Dg);var Bg=(zg.populate=function(u,c){for(var f=this,s=[u],l=0,t=function(){var a=s.shift();e.cachedComponent[l]||(e.cachedComponent[l]=[]),a.func.forEach(function(t,e){var r=function(t,e,r){for(var n=[t];0<n.length;){var o=n.shift(),i=Array.from(o.attributes).find(function(t){if(t.name.startsWith("on"))return t.value=="SparkyFunction#"+e+"#"+r});if(i)return{dom:o,attr:i};Array.from(o.children).forEach(function(t){n.push(t)})}}(u.dom,a.renderId,e),n=r.attr.name.replace("on","");Fg.addEvent({dom:r.dom,type:n,callbackFn:t.func.bind(window,event)}),r.dom.removeAttribute(r.attr.name)}),a.children.forEach(function(t){s.push(t)}),a.nestedComponents.forEach(function(t,e){var r;if("SparkyComponent"===t.type){var n=f.cachedComponent[l][e],o=f.findComment(u.dom,a.renderId,e,t.selfFn.name);n&&(n.component.self.props=t.self.props,t=n.component);var i=t.selfFn(t.self,Object.freeze(t.self.props));o&&(o.parentNode.replaceChild(i.dom,o),t.self.__root=c,(r=u.func).push.apply(r,i.func),s.push(i),f.cachedComponent[l].push({component:t,dom:i.dom}))}}),l++},e=this;0<s.length;)t();return u.dom},zg.findComment=function(t,e,r,n){for(var o=[t];0<o.length;){var i=o.shift();if("#comment"==i.nodeName&&i.nodeValue.trim()=="SparkyComponent#"+n+"#"+r+"#"+e)return i;Array.from(i.childNodes).forEach(function(t){o.push(t)})}},zg.cachedComponent=[],zg);function zg(){}Lg();var Wg=(
/**
       * Generate a Sparky Component that can be mount.
       * @param renderFunc The function that going to be execute to render html template
       */
qg.component=function(t,e){return{type:"SparkyComponent",self:new Vg(t,e),selfFn:t}},
/**
       * Mount a Sparky Component in the DOM Tree and keep it updated.
       * @param component Sparky Component
       * @param dom The dom element where you want to mount this component
       */
qg.mount=function(t,e){this._DEV_&&console.time();var r=t.self,n=t.selfFn.call(window,r,Object.freeze(r.props));n.dom=Bg.populate(n,t);var o=Rg(Og(),n.dom);o&&(!o.isConnected&&e&&e.appendChild(o),Fg.listen(),Tg(o),this._DEV_&&console.timeEnd())},
/**
       * Reconciliate the current DOM with the new DOM Node
       * @param oldNode Node that need to be reconcile
       * @param newNode Node that have the new elements
       */
qg.reconciliate=function(t,e){return Rg(t,e)},qg._DEV_=!0,qg);function qg(){}window.requestIdleCallback=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(t){clearTimeout(t)};var Vg=function(t,e){var r=this;this.newProps=[],
/**
           * Execute after the render/update of the DOM tree.
           * @param callback - The function that you want to execute
           * @param dependenciesChanged - An array of keys to know when the onUpdate need to be executed
           */
this.onUpdate=function(t,e){(!e&&0==r.newProps.length||e&&0==e.length||r.newProps.some(function(t){return e&&e.includes(t)}))&&
//@ts-ignore
window.requestIdleCallback(function(){return t.call(r)})},
/**
          * Get State object value of this context
          * @param props - the specific key of the value that you want to retrieve
          */
this.getState=function(t){return t?r.state[t]:r.state},
/**
           * Add/Set a new value into the State object of the context
           * @param newState - new Value
           */
this.setState=function(t){r.newProps=Object.keys(t),r.state=Ag(Ag({},r.state),t),r.__root?Wg.mount(r.__root):Wg.mount({type:"SparkyComponent",self:r,selfFn:r.renderFunc})},this.props=Object.freeze(e),this.state={},this.renderFunc=t,this.__root=null};Lg();var Gg=(
/**
       * Generate a Sparky Component that can be mount.
       * @param renderFunc The function that going to be execute to render html template
       */
$g.component=function(t,e){return{type:"SparkyComponent",self:new Vg(t,e),selfFn:t}},
/**
       * Mount a Sparky Component in the DOM Tree and keep it updated.
       * @param component Sparky Component
       * @param dom The dom element where you want to mount this component
       */
$g.mount=function(t,e){this._DEV_&&console.time();var r=t.self,n=t.selfFn.call(window,r,Object.freeze(r.props));n.dom=Bg.populate(n,t);var o=Rg(Og(),n.dom);o&&(!o.isConnected&&e&&e.appendChild(o),Fg.listen(),Tg(o),this._DEV_&&console.timeEnd())},
/**
       * Reconciliate the current DOM with the new DOM Node
       * @param oldNode Node that need to be reconcile
       * @param newNode Node that have the new elements
       */
$g.reconciliate=function(t,e){return Rg(t,e)},$g._DEV_=!0,$g);
/**
   * Render the html string template to HTML elements
   * @param html Array of HTML String
   * @param computedProps Computed Props used to pass Javascript into template
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
   */function $g(){}t.Sparky=Gg,t.render=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];var r=document.createElement("div"),o=[],i=[],a=[],u=function(t){var e="";
// Compact alternative for `for (var i = 0; i < size; i++)`
for(s=t||21;s--;)
// `| 0` is compact and faster alternative for `Math.floor()`
e+=f[64*Math.random()|0];return e}(12),c="string"==typeof t?t:t.map(function(t,e){var r="";return r+=t,n[e]?r=function(t,e,r,n,o,i,a){if("function"==typeof t[e])r.push({index:r.length-1,renderId:a,func:t[e]}),n+="'SparkyFunction#"+a+"#"+(r.length-1)+"'";else if("SparkyRender"==t[e].type){var u=t[e];n=function(t,e){var r=document.createElement("div");return r.appendChild(t.dom),e+=r.innerHTML}(u,n),i.push(u)}else if("SparkyComponent"==t[e].type){var c=t[e];n+="\x3c!-- SparkyComponent#"+c.selfFn.name+"#"+o.length+"#"+a+" --\x3e",o.push(c)}else t[e]=new String(t[e]),t[e].startsWith("<")?n+=t[e]:n+="<span class='computed'>"+t[e]+"</span>";return n}(n,e,o,r,i,a,u):r});if(r.innerHTML=Array.isArray(c)?c.join(""):c,1<r.children.length)throw new TypeError("The render HTML can only had one root node");return{type:"SparkyRender",dom:r.firstElementChild,func:o,nestedComponents:i,children:a,renderId:u}},Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=sparky.js.map
