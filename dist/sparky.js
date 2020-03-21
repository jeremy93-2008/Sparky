!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).sparky={})}(this,(function(e){"use strict";
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
    ***************************************************************************** */var t=function(){return(t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function n(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],i=0,c=a.length;i<c;i++,o++)r[o]=a[i];return r}
// This alphabet uses a-z A-Z 0-9 _- symbols.
// Symbols are generated for smaller size.
// -_zyxwvutsrqponmlkjihgfedcba9876543210ZYXWVUTSRQPONMLKJIHGFEDCBA
for(var r="-_",o=36
// Loop from 36 to 0 (from z to a and 9 to 0 in Base36).
;o--;)
// 36 is radix. Number.prototype.toString(36) returns number
// in Base36 representation. Base36 is like hex, but it uses 0–9 and a-z.
r+=o.toString(36);
// Loop from 36 to 10 (from Z to A in Base36).
for(o=36;o---10;)r+=o.toString(36).toUpperCase();
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
     */var a,i,c,u,s=function(e){var t="";
// Compact alternative for `for (var i = 0; i < size; i++)`
for(o=e||21;o--;)
// `| 0` is compact and faster alternative for `Math.floor()`
t+=r[64*Math.random()|0];return t};Array.from||(Array.from=(a=Object.prototype.toString,i=function(e){return"function"==typeof e||"[object Function]"===a.call(e)},c=Math.pow(2,53)-1,u=function(e){var t,n=(t=Number(e),isNaN(t)?0:0!==t&&isFinite(t)?(0<t?1:-1)*Math.floor(Math.abs(t)):t);return Math.min(Math.max(n,0),c)},function(e){var t=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var n,r=1<arguments.length?arguments[1]:void 0;if(void 0!==r){if(!i(r))throw new TypeError("Array.from: when provided, the second argument must be a function");2<arguments.length&&(n=arguments[2])}for(var o,a=u(t.length),c=i(this)?Object(new this(a)):new Array(a),s=0;s<a;)o=t[s],c[s]=r?void 0===n?r(o,s):r.call(n,o,s):o,s+=1;return c.length=a,c})),Array.prototype.find||(Array.prototype.find=function(e){if(null==this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var t=Object(this),n=t.length>>>0,r=arguments[1],o=void 0,a=0;a<n;a++)if(o=t[a],e.call(r,o,a,t))return o});var f=null;function l(){return f}function d(e){f=e}function p(e,t){if(!t)return null;if(!e&&t)return t;if(e.isEqualNode(t))return e;if(e.nodeName!==t.nodeName)return t;for(var n=[[e,t]],r=function(){var e=n.shift(),t=e[0],r=e[1],o=[];!function(e,t){if(!e.attributes||!t.attributes)return;var n=Array.from(e.attributes).sort((function(e,t){return h(e,t)})),r=Array.from(t.attributes).sort((function(e,t){return h(e,t)})),o=[];n.forEach((function(t,n){var a=r[n];if(a)return t.name!==a.name?(o.push(t),void e.setAttribute(a.name,a.value)):void(t.value!==a.value&&(t.value=a.value));o.push(t)}));for(var a=n.length;a<r.length;a++){var i=r[a];e.setAttribute(i.name,i.value)}o.forEach((function(t){return e.removeAttribute(t.name)}))}(t,r);var a=r.childNodes;t.childNodes.forEach((function(e,r){var i=a.item(r);i?e.isEqualNode(i)||(e.nodeName===i.nodeName?"#text"!=e.nodeName||e.textContent===i.textContent?n.push([e,i]):e.textContent=i.textContent:t.replaceChild(i.cloneNode(!0),e)):o.push(e)}));for(var i=t.childNodes.length;i<r.childNodes.length;i++){var c=r.childNodes.item(i);t.appendChild(c.cloneNode(!0))}o.forEach((function(e){t.removeChild(e)}))};n.length>0;)r();return e}function h(e,t){return e.name<t.name?-1:e.name>t.name?1:0}
/*
     * Node.isConnected polyfill for IE and EdgeHTML
     * 2020-02-04
     *
     * By Eli Grey, https://eligrey.com
     * Public domain.
     * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
     */function m(){"isConnected"in Node.prototype||Object.defineProperty(Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}m();var y=/** @class */function(){function e(){}return e.listen=function(t){var n=this;e.removeUnusedEvents();var r=t||this.eventList;r.forEach((function(e){var t=e.type;n.isEventTypeListening(t)||(document.addEventListener(t,(function(e){return n.dispatchEvent(e,r)})),n.eventListType.push(t))}))},e.dispatchEvent=function(e,t){var n=this;t.find((function(t){n.isEventTarget(t,e)&&t.type===e.type&&t.callbackFn(e)}))},e.addEvent=function(e){var t=e.dom,n=e.type,r=e.context,o=e.callbackFn;this.eventList.push({dom:t,type:n,context:r,callbackFn:o})},e.removeUnusedEvents=function(){this.eventList=this.eventList.filter((function(e){return e.dom.isConnected}))},e.isEventTypeListening=function(e){return this.eventListType.find((function(t){return t==e}))},e.isEventTarget=function(e,t){return e.dom===t.target||e.dom.contains(t.target)},e.oldEventType=[],e.eventList=[],e.eventListType=[],e}(),v=Object.prototype.toString,x=function(e){if(void 0===e)return"undefined";if(null===e)return"null";var t=typeof e;if("boolean"===t)return"boolean";if("string"===t)return"string";if("number"===t)return"number";if("symbol"===t)return"symbol";if("function"===t)return"GeneratorFunction"===g(e)?"generatorfunction":"function";if(function(e){return Array.isArray?Array.isArray(e):e instanceof Array}(e))return"array";if(
/**
     * If you need to support Safari 5-7 (8-10 yr-old browser),
     * take a look at https://github.com/feross/is-buffer
     */
function(e){if(e.constructor&&"function"==typeof e.constructor.isBuffer)return e.constructor.isBuffer(e);return!1}
/*!
     * isobject <https://github.com/jonschlinkert/isobject>
     *
     * Copyright (c) 2014-2017, Jon Schlinkert.
     * Released under the MIT License.
     */(e))return"buffer";if(function(e){try{if("number"==typeof e.length&&"function"==typeof e.callee)return!0}catch(e){if(-1!==e.message.indexOf("callee"))return!0}return!1}(e))return"arguments";if(function(e){return e instanceof Date||"function"==typeof e.toDateString&&"function"==typeof e.getDate&&"function"==typeof e.setDate}(e))return"date";if(function(e){return e instanceof Error||"string"==typeof e.message&&e.constructor&&"number"==typeof e.constructor.stackTraceLimit}(e))return"error";if(function(e){return e instanceof RegExp||"string"==typeof e.flags&&"boolean"==typeof e.ignoreCase&&"boolean"==typeof e.multiline&&"boolean"==typeof e.global}(e))return"regexp";switch(g(e)){case"Symbol":return"symbol";case"Promise":return"promise";
// Set, Map, WeakSet, WeakMap
case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";
// 8-bit typed arrays
case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";
// 16-bit typed arrays
case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";
// 32-bit typed arrays
case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(function(e){return"function"==typeof e.throw&&"function"==typeof e.return&&"function"==typeof e.next}(e))return"generator";
// Non-plain objects
switch(t=v.call(e)){case"[object Object]":return"object";
// iterators
case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}
// other
return t.slice(8,-1).toLowerCase().replace(/\s/g,"")};function g(e){return"function"==typeof e.constructor?e.constructor.name:null}function b(e){return!0==(null!=(t=e)&&"object"==typeof t&&!1===Array.isArray(t))&&"[object Object]"===Object.prototype.toString.call(e);var t}const C=Symbol.prototype.valueOf;
/**
     * Expose `clone`
     */
var w=function(e,t){switch(x(e)){case"array":return e.slice();case"object":return Object.assign({},e);case"date":return new e.constructor(Number(e));case"map":return new Map(e);case"set":return new Set(e);case"buffer":return function(e){const t=e.length,n=Buffer.allocUnsafe?Buffer.allocUnsafe(t):Buffer.from(t);return e.copy(n),n}(e);case"symbol":return function(e){return C?Object(C.call(e)):{}}(e);case"arraybuffer":return function(e){const t=new e.constructor(e.byteLength);return new Uint8Array(t).set(new Uint8Array(e)),t}(e);case"float32array":case"float64array":case"int16array":case"int32array":case"int8array":case"uint16array":case"uint32array":case"uint8clampedarray":case"uint8array":return function(e,t){return new e.constructor(e.buffer,e.byteOffset,e.length)}(e);case"regexp":return function(e){const t=void 0!==e.flags?e.flags:/\w+$/.exec(e)||void 0,n=new e.constructor(e.source,t);return n.lastIndex=e.lastIndex,n}(e);case"error":return Object.create(e);default:return e}};
/**
     * Module dependenices
     */function E(e,t){switch(x(e)){case"object":return function(e,t){if("function"==typeof t)return t(e);if(t||(n=e,!1!==b(n)&&"function"==typeof(
// If has modified constructor
r=n.constructor)&&!1!==b(
// If has modified prototype
o=r.prototype)&&!1!==o.hasOwnProperty("isPrototypeOf"))){const n=new e.constructor;for(let r in e)n[r]=E(e[r],t);return n}var n,r,o;return e}(e,t);case"array":return function(e,t){const n=new e.constructor(e.length);for(let r=0;r<e.length;r++)n[r]=E(e[r],t);return n}
/**
     * Expose `cloneDeep`
     */(e,t);default:return w(e)}}var _=E,A={__root:null,__id:"",props:{},state:{},cachedMemo:[],cachedUpdate:[],cachedState:[],indexes:{memo:0,update:0,state:0},renderFunc:null},S=/** @class */function(){function e(){}return e.getCurrentContext=function(){return this.__context},e.setCurrentContext=function(e){this.__context=e},e.resetIndexes=function(){if(!this.__context)throw new ReferenceError("Try to reset index on a undefined context");this.__context.indexes.memo=0,this.__context.indexes.update=0,this.__context.indexes.state=0},e.newContext=function(e){return _(t(t(t({},this.__defaultContext),e),{__id:s(12)}))},e.__defaultContext=A,e}();function T(e,t,r,o,a){var i=r[function(e,t){return"memoize"==t?e.indexes.memo:e.indexes.update}(e,t)];!function(e,t){"memoize"==t?++e.indexes.memo:++e.indexes.update}(e,t);var c,u,s,f,l={fn:o,result:null,dependencies:a};return i&&a?(c=i.dependencies,u=function(e,t){var n=e.length,r=t.length;return n>r?{bigArray:e,smallArray:t}:{bigArray:t,smallArray:e}}(c,a),s=u.bigArray,f=u.smallArray,s.every((function(e,t){return e==(f?f[t]:null)}))||(i.dependencies=a,i.result=o.call.apply(o,n([window],a))),i.result):(l.result=o.call(window,a?n(a):null),r.push(l),l.result)}window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)};var j=function(){var e=S.getCurrentContext();if(!e)throw new ReferenceError("Sparky Function only can be used in the lifecycle of a Sparky application");return e},k=function(e){var n;n=this.context,S.setCurrentContext(n),S.resetIndexes();var r=j();return r.indexes.state=this.state,r.cachedState[r.indexes.state]=e,r.indexes.state++,r.__root?S.setCurrentContext(F.mount(t(t({},r.__root),{currentContext:r}))):S.setCurrentContext(F.mount({type:"SparkyComponent",context:r,currentContext:r,renderFn:r.renderFunc})),k};m();var F=/** @class */function(){function e(){}
/**
         * Generate a Sparky Component that can be mount.
         * @param renderFunc The function that going to be execute to render html template
         */return e.component=function(e,t){var n=S.newContext({props:t,renderFunc:e});return{type:"SparkyComponent",context:n,currentContext:n,renderFn:e}},
/**
         * Mount a Sparky Component in the DOM Tree and keep it updated.
         * @param component Sparky Component
         * @param dom The dom element where you want to mount this component
         */
e.mount=function(n,r){e._DEV_&&console.time();var o=n.context,a=n.renderFn,i=_(n.currentContext.indexes);S.setCurrentContext(o),S.resetIndexes();var c=a(Object.freeze(o.props)),u=N(c.html);u=O.populate(u,c,n);var s=p(l(),u);if(s)return!s.isConnected&&r&&r.appendChild(s),y.listen(thisTestEvent),d(s),e._DEV_&&console.timeEnd(),"undefined"!=typeof thisTest&&thisTest.testing&&(thisTest.__testUtilData={root:l(),component:n,eventList:thisTestEvent}),t(t({},n.currentContext),{indexes:i})},
/**
         * Reconciliate the current DOM with the new DOM Node
         * @param oldNode Node that need to be reconcile
         * @param newNode Node that have the new elements
         */
e.reconciliate=function(e,t){return p(e,t)},e._DEV_=!0,e}();function N(e){var t=document.createElement("div");if(t.innerHTML=e,t.children.length>1)throw new TypeError("Adjacent elements on the root level are forbidden.");return t.firstElementChild}String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return t=t||0,this.substr(t,e.length)===e});var O=/** @class */function(){function e(){}return e.populate=function(e,t,n){for(var r=this,o=[[t,n,e]],a=0,i=function(){var e=o.shift(),i=e[0],u=e[1],s=e[2];c.cachedComponent[a]||(c.cachedComponent[a]=[]),i.func.forEach((function(e,t){var n=function(e,t,n){for(var r=[e];r.length>0;){var o=r.shift(),a=Array.from(o.attributes).find((function(e){if(e.name.startsWith("on"))return e.value=="SparkyFunction#"+t+"#"+n}));if(a)return{dom:o,attr:a};for(var i=0;i<o.children.length;i++)r.push(o.children[i])}}(s,i.renderId,t),r=n.attr.name.replace("on","");y.addEvent({dom:n.dom,type:r,context:u.context,callbackFn:e.func}),n.dom.removeAttribute(n.attr.name)})),i.children.forEach((function(e){o.push([e,u,s])})),i.nestedComponents.forEach((function(e,c){var u,f=r.cachedComponent[a][c],l=r.findComment(s,i.renderId,c,e.renderFn.name);f&&(""==f.component.renderFn.name?f.component.renderFn.toString()==e.renderFn.toString()&&(e=I(f,e)):f.component.renderFn.name==e.renderFn.name&&(e=I(f,e))),S.setCurrentContext(e.context),S.resetIndexes();var d=e.renderFn(Object.freeze(e.context.props));if(l){var p=N(d.html);l.parentNode.replaceChild(p,l),e.context.__root=n,(u=t.func).push.apply(u,d.func),o.push([d,e,p]),r.cachedComponent[a][c]={component:e,dom:s}}})),i.nestedComponents.length>0&&a++},c=this;o.length>0;)i();return window.thisTestEvent=y.eventList,e},e.findComment=function(e,t,n,r){for(var o=[e];o.length>0;){var a=o.shift();if("#comment"==a.nodeName&&a.nodeValue.trim()=="SparkyComponent#"+r+"#"+n+"#"+t)return a;for(var i=0;i<a.childNodes.length;i++)o.push(a.childNodes[i])}},e.cachedComponent=[],e}();function I(e,t){return e.component.context.props=t.context.props,t=e.component}m();var D=/** @class */function(){function e(){}
/**
         * Generate a Sparky Component that can be mount.
         * @param renderFunc The function that going to be execute to render html template
         */return e.component=function(e,t){var n=S.newContext({props:t,renderFunc:e});return{type:"SparkyComponent",context:n,currentContext:n,renderFn:e}},
/**
         * Mount a Sparky Component in the DOM Tree and keep it updated.
         * @param component Sparky Component
         * @param dom The dom element where you want to mount this component
         */
e.mount=function(n,r){e._DEV_&&console.time();var o=n.context,a=n.renderFn,i=_(n.currentContext.indexes);S.setCurrentContext(o),S.resetIndexes();var c=a(Object.freeze(o.props)),u=z(c.html);u=O.populate(u,c,n);var s=p(l(),u);if(s)return!s.isConnected&&r&&r.appendChild(s),y.listen(thisTestEvent),d(s),e._DEV_&&console.timeEnd(),"undefined"!=typeof thisTest&&thisTest.testing&&(thisTest.__testUtilData={root:l(),component:n,eventList:thisTestEvent}),t(t({},n.currentContext),{indexes:i})},
/**
         * Reconciliate the current DOM with the new DOM Node
         * @param oldNode Node that need to be reconcile
         * @param newNode Node that have the new elements
         */
e.reconciliate=function(e,t){return p(e,t)},e._DEV_=!0,e}(),L=function(e,t){var n=j();window.requestIdleCallback((function(){T(n,"update",n.cachedUpdate,e,t)}),{timeout:250})},M=function(e){var t=j(),n={context:t,state:t.indexes.state},r=t.cachedState[t.indexes.state];if(r)return t.indexes.state++,[r,k.bind(n)];var o=function(e){var t=j();return t.cachedState[t.indexes.state]=e,k}(e);t.indexes.state++;var a=t.indexes.state-1;return[t.cachedState[a],o.bind(n)]},U=function(e,t){var n=j();T(n,"memoize",n.cachedMemo,e,t)};
/**
     * Function will be run after the render is commited to the screen.
     * @param callbackFn - The function to run
     * @param dependenciesChanged - Array of values that the function depends on
     */function P(e,t,n,r,o,a,i){if("function"==typeof e[t])n.push({index:n.length-1,renderId:i,func:e[t]}),r+="'SparkyFunction#"+i+"#"+(n.length-1)+"'";else if("SparkyRender"==e[t].type){var c=e[t];r+=c.html,a.push(c)}else if("SparkyComponent"==e[t].type){var u=e[t];r+="\x3c!-- SparkyComponent#"+u.renderFn.name+"#"+o.length+"#"+i+" --\x3e",o.push(u)}else e[t]=Array.isArray(e[t])?e[t].join(""):new String(e[t]),e[t].startsWith("<")?r+=e[t]:r+="<span class='computed'>"+e[t]+"</span>";return r}function z(e){var t=document.createElement("div");if(t.innerHTML=e,t.children.length>1)throw new TypeError("Adjacent elements on the root level are forbidden.");return t.firstElementChild}e.Sparky=D,e.memoize=U,e.render=
/**
     * Render the html string template to HTML elements
     * @param html Array of HTML String
     * @param computedProps Computed Props used to pass Javascript into template
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
     */
function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=[],o=[],a=[],i=s(12),c="string"==typeof e?e:e.map((function(e,n){var c="";return c+=e,t[n]?c=P(t,n,r,c,o,a,i):c})),u=Array.isArray(c)?c.join(""):c;return{type:"SparkyRender",html:u,func:r,nestedComponents:o,children:a,renderId:i}},e.renderToDOMNode=z,e.state=M,e.update=L,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=sparky.js.map
