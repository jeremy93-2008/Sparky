!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).sparky={})}(this,(function(t){"use strict";
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
    ***************************************************************************** */var e=function(){return(e=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function n(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var a=arguments[e],i=0,s=a.length;i<s;i++,o++)r[o]=a[i];return r}
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
     */var a=function(t){var e="";
// Compact alternative for `for (var i = 0; i < size; i++)`
for(o=t||21;o--;)
// `| 0` is compact and faster alternative for `Math.floor()`
e+=r[64*Math.random()|0];return e};
/**
     * @internal
     */function i(t,e){if(!e)return null;if(!t&&e)return e;if(t.isEqualNode(e))return t;if(t.nodeName!==e.nodeName)return e;for(var n=[[t,e]],r=function(){var t=n.shift(),e=t[0],r=t[1],o=[];!
/**
     * @internal
     */
function(t,e){if(!t.attributes||!e.attributes)return;var n=Array.from(t.attributes).sort((function(t,e){return s(t,e)})),r=Array.from(e.attributes).sort((function(t,e){return s(t,e)})),o=[];n.forEach((function(e,n){var a=r[n];if(a)return e.name!==a.name?(o.push(e),void t.setAttribute(a.name,a.value)):void(e.value!==a.value&&(e.value=a.value));o.push(e)}));for(var a=n.length;a<r.length;a++){var i=r[a];t.setAttribute(i.name,i.value)}o.forEach((function(e){return t.removeAttribute(e.name)}))}
/**
     * @internal
     */(e,r),"#text"!=r.nodeName&&r.__sparkyEvent&&(e.__sparkyEvent=r.__sparkyEvent),"#text"!=r.nodeName&&r.__sparkyRoot&&(e.__sparkyRoot=r.__sparkyRoot);var a=r.childNodes;e.childNodes.forEach((function(t,r){var i=a.item(r);if(i){if(!t.isEqualNode(i))if(t.isEqualNode(i.nextElementSibling)){var s=i.cloneNode(!0),c=i.parentElement.replaceChild(s,i);t.parentNode.insertBefore(c,t)}else if(t.nodeName===i.nodeName)"#text"!=t.nodeName||t.textContent===i.textContent?n.push([t,i]):t.textContent=i.textContent;else{s=i.cloneNode(!0),c=i.parentElement.replaceChild(s,i);e.replaceChild(c,t)}}else o.push(t)}));for(var i=e.childNodes.length;i<r.childNodes.length;i++){var c=r.childNodes.item(i),u=c.cloneNode(!0),p=null;
// Internet Explorer 9/10/11 strange behavior
c.parentElement&&(p=c.parentElement.replaceChild(u,c),e.appendChild(p))}o.forEach((function(t){e.removeChild(t)}))};n.length>0;)r();return t}function s(t,e){return t.name<e.name?-1:t.name>e.name?1:0}
/**
     * @internal
     */var c=/** @class */function(){function t(){}return t.listen=function(e){var n=this;t.removeAllEvents(),t.populateEvents(e),t.removeUnusedEvents(),window.thisTestEvent=t.eventList,this.eventList.forEach((function(t){var e=t.type;n.isEventTypeListening(e)||(document.addEventListener(e,(function(t){return n.dispatchEvent(t)})),n.eventListType.push(e))}))},t.dispatchEvent=function(t){var e=this;this.eventList.find((function(n){e.isEventTarget(n,t)&&n.type===t.type&&n.callbackFn(t)}))},t.addEvent=function(t){var e=t.dom,n=t.type,r=t.context,o=t.callbackFn;this.eventList.push({dom:e,type:n,context:r,callbackFn:o})},t.populateEvents=function(t){for(var e=[t];e.length>0;){var n=e.shift();if(n.__sparkyEvent){var r=n.__sparkyEvent,o=r.callbackFn,a=r.type,i=r.context;this.addEvent({dom:n,type:a,context:i,callbackFn:o})}for(var s=0;s<n.children.length;s++)e.push(n.children[s])}},t.removeAllEvents=function(){this.eventList=[]},t.removeUnusedEvents=function(){this.eventList=this.eventList.filter((function(t){return t.dom.isConnected}))},t.isEventTypeListening=function(t){return this.eventListType.find((function(e){return e==t}))},t.isEventTarget=function(t,e){return t.dom===e.target||t.dom.contains(e.target)},t.oldEventType=[],t.eventList=[],t.eventListType=[],t}(),u=Object.prototype.toString,p=function(t){if(void 0===t)return"undefined";if(null===t)return"null";var e=typeof t;if("boolean"===e)return"boolean";if("string"===e)return"string";if("number"===e)return"number";if("symbol"===e)return"symbol";if("function"===e)return"GeneratorFunction"===f(t)?"generatorfunction":"function";if(function(t){return Array.isArray?Array.isArray(t):t instanceof Array}(t))return"array";if(
/**
     * If you need to support Safari 5-7 (8-10 yr-old browser),
     * take a look at https://github.com/feross/is-buffer
     */
function(t){if(t.constructor&&"function"==typeof t.constructor.isBuffer)return t.constructor.isBuffer(t);return!1}
/*!
     * isobject <https://github.com/jonschlinkert/isobject>
     *
     * Copyright (c) 2014-2017, Jon Schlinkert.
     * Released under the MIT License.
     */(t))return"buffer";if(function(t){try{if("number"==typeof t.length&&"function"==typeof t.callee)return!0}catch(t){if(-1!==t.message.indexOf("callee"))return!0}return!1}(t))return"arguments";if(function(t){return t instanceof Date||"function"==typeof t.toDateString&&"function"==typeof t.getDate&&"function"==typeof t.setDate}(t))return"date";if(function(t){return t instanceof Error||"string"==typeof t.message&&t.constructor&&"number"==typeof t.constructor.stackTraceLimit}(t))return"error";if(function(t){return t instanceof RegExp||"string"==typeof t.flags&&"boolean"==typeof t.ignoreCase&&"boolean"==typeof t.multiline&&"boolean"==typeof t.global}(t))return"regexp";switch(f(t)){case"Symbol":return"symbol";case"Promise":return"promise";
// Set, Map, WeakSet, WeakMap
case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";
// 8-bit typed arrays
case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";
// 16-bit typed arrays
case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";
// 32-bit typed arrays
case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(function(t){return"function"==typeof t.throw&&"function"==typeof t.return&&"function"==typeof t.next}(t))return"generator";
// Non-plain objects
switch(e=u.call(t)){case"[object Object]":return"object";
// iterators
case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}
// other
return e.slice(8,-1).toLowerCase().replace(/\s/g,"")};function f(t){return"function"==typeof t.constructor?t.constructor.name:null}function l(t){return!0==(null!=(e=t)&&"object"==typeof e&&!1===Array.isArray(e))&&"[object Object]"===Object.prototype.toString.call(t);var e}const d=Symbol.prototype.valueOf;
/**
     * Expose `clone`
     */
var h=function(t,e){switch(p(t)){case"array":return t.slice();case"object":return Object.assign({},t);case"date":return new t.constructor(Number(t));case"map":return new Map(t);case"set":return new Set(t);case"buffer":return function(t){const e=t.length,n=Buffer.allocUnsafe?Buffer.allocUnsafe(e):Buffer.from(e);return t.copy(n),n}(t);case"symbol":return function(t){return d?Object(d.call(t)):{}}(t);case"arraybuffer":return function(t){const e=new t.constructor(t.byteLength);return new Uint8Array(e).set(new Uint8Array(t)),e}(t);case"float32array":case"float64array":case"int16array":case"int32array":case"int8array":case"uint16array":case"uint32array":case"uint8clampedarray":case"uint8array":return function(t,e){return new t.constructor(t.buffer,t.byteOffset,t.length)}(t);case"regexp":return function(t){const e=void 0!==t.flags?t.flags:/\w+$/.exec(t)||void 0,n=new t.constructor(t.source,e);return n.lastIndex=t.lastIndex,n}(t);case"error":return Object.create(t);default:return t}};
/**
     * Module dependenices
     */function y(t,e){switch(p(t)){case"object":return function(t,e){if("function"==typeof e)return e(t);if(e||(n=t,!1!==l(n)&&"function"==typeof(
// If has modified constructor
r=n.constructor)&&!1!==l(
// If has modified prototype
o=r.prototype)&&!1!==o.hasOwnProperty("isPrototypeOf"))){const n=new t.constructor;for(let r in t)n[r]=y(t[r],e);return n}var n,r,o;return t}(t,e);case"array":return function(t,e){const n=new t.constructor(t.length);for(let r=0;r<t.length;r++)n[r]=y(t[r],e);return n}
/**
     * Expose `cloneDeep`
     */(t,e);default:return h(t)}}var m=y,v={__rootElement:null,__root:null,__id:"",props:{},state:{},cachedMemo:[],cachedUpdate:[],cachedState:[],indexes:{memo:0,update:0,state:0},renderFunc:null},_=/** @class */function(){function t(){}return t.getCurrentContext=function(){return this.__context},t.setCurrentContext=function(t){this.__context=t},t.resetIndexes=function(){if(!this.__context)throw new ReferenceError("Try to reset index on a undefined context");this.__context.indexes.memo=0,this.__context.indexes.update=0,this.__context.indexes.state=0},t.newContext=function(t){return m(e(e(e({},this.__defaultContext),t),{__id:a(12)}))},t.__defaultContext=v,t}();
/**
     * @internal
     */
/**
     * @internal
     */
function g(t,e,r,o,a){var i,s,c,u,p=r[
/**
     * @internal
     */
function(t,e){return"memoize"==e?t.indexes.memo:t.indexes.update}
/**
     * @internal
     */(t,e)],f={fn:o,result:null,dependencies:a};return p?(i=p.dependencies,s=
/**
     * @internal
     */
function(t,e){var n=t.length,r=e.length;return n>r?{bigArray:t,smallArray:e}:{bigArray:e,smallArray:t}}(i,a),c=s.bigArray,u=s.smallArray,c.every((function(t,e){return t==(u?u[e]:null)}))||(p.dependencies=a,p.result=o.call.apply(o,n([window],a))),p.result):(f.result=o.call(window,a?n(a):null),r.push(f),f.result)}function b(t,e){return"memoize"==e?++t.indexes.memo:++t.indexes.update}
/**
     * @internal
     */function x(t,e,n){if(!n.__sparkyRoot.isRoutingEnabled)throw TypeError("To use route() function, you need to pass a Sparky.router object on the mount function");if(window.requestIdleCallback((function(){window.addEventListener("hashchange",(function(r){k(r,t,e,n)}))})),"undefined"!=typeof thisTest&&thisTest.testing){var r=new Event("hashchange");Object.defineProperty(r,"oldUrl",{writable:!1,value:""}),Object.defineProperty(r,"newURL",{writable:!0,value:"#"}),k(r,t,e,n),n.__sparkyRoot.stateChanging=!0,n.__sparkyRoot.basename=n.__sparkyRoot.basename?n.__sparkyRoot.basename:"",n.__sparkyRoot.forceURLUpdate=!0,k(r,t,e,n)}}
/**
     * @internal
     */function k(t,e,n,r){var o=document;if(r.__sparkyRoot.forceURLUpdate&&(o.__sparkyRoutingId=r.__sparkyRoot.id),o.__sparkyRoutingId&&o.__sparkyRoutingId!=r.__sparkyRoot.id)console.warn("Only one route object can have the control of URL");else if(t.oldURL==t.newURL||r.__sparkyRoot.stateChanging)r.__sparkyRoot.stateChanging=!1;else{var a=C(e,location.hash);a.hash=location.hash,r.__sparkyRoot.params=j(a.path,location.hash),E(r.__sparkyRoot,a),a&&n(a.component),o.__sparkyRoutingId=r.__sparkyRoot.id}}
/**
     * @internal
     */function C(t,n){return t.find((function(t,e){return"string"==typeof t.path&&(t.exact=!0,
/**
     * @internal
     */
function(t,e){if(t.includes("*")){if(t.split("*")[1].includes("/"))throw TypeError("The wildcard can only be the last element to be identified on the url")}var n=t.split("/").filter((function(t){return!t.startsWith(":")&&!t.startsWith("*")}));return e.includes(n.join("/"))}
/**
     * @internal
     */(t.path,n))}))||e(e({},t[0]),{exact:!1})}
/**
     * @internal
     */function E(t,e){t.historyIndex<history.length-1&&(t.history=t.history.slice(0,t.historyIndex+1)),t.history.push(e),t.historyIndex=t.history.length-1}
/**
     * @internal
     */function R(){this.__sparkyRoot.history=[],this.__sparkyRoot.historyIndex=0,this.__sparkyRoot.stateChanging=!0,location.hash=""}
/**
     * @internal
     */function w(t){var e=this.__sparkyRoot,n=e.routing,r=e.type,o=e.basename,a=C(n,t);a.hash=t,a.exact&&(this.__sparkyRoot.params=j(a.path,t)),this.__sparkyRoot.stateChanging=!0;var i=t;switch(r){case"hash":location.hash="/"+i;break;case"browser":location.pathname=o+"/"+i}E(this.__sparkyRoot,a),N.mount(a.component,this)}
/**
     * @internal
     */function S(){var t=this.__sparkyRoot,e=t.history,n=t.type,r=t.basename;if(!(this.__sparkyRoot.historyIndex-1<0)){var o=e[--this.__sparkyRoot.historyIndex];o.exact&&(this.__sparkyRoot.params=j(o.path,o.hash)),this.__sparkyRoot.stateChanging=!0;var a=o.hash;switch(n){case"hash":location.hash="/"+a;break;case"browser":location.pathname=r+"/"+a}N.mount(o.component,this)}}
/**
     * @internal
     */function A(){var t=this.__sparkyRoot,e=t.history,n=t.type,r=t.basename;if(!(this.__sparkyRoot.historyIndex+1>e.length-1)){var o=e[++this.__sparkyRoot.historyIndex];o.exact&&(this.__sparkyRoot.params=j(o.path,o.hash)),this.__sparkyRoot.stateChanging=!0;var a=o.hash;switch(n){case"hash":location.hash="/"+a;break;case"browser":location.pathname=r+"/"+a}N.mount(o.component,this)}}
/**
     * @internal
     */function T(){return this.__sparkyRoot.params}
/**
     * @internal
     */function I(){var t=this.__sparkyRoot;return t.history[t.historyIndex]}
/**
     * @internal
     */function j(t,e){if(t.includes("*")&&t.split("*")[1].includes("/"))throw TypeError("The wildcard can only be the last element to be identified on the url");var n=e.split("/"),r=[];return t.split("/").reduce((function(t,e,r){if(e.startsWith(":"))(o={})[e.slice(1,e.length)]=n[r],t.push(o);else if(e.startsWith("*")){var o;(o={})[e.slice(1,e.length)]=n.slice(r,n.length).join(""),t.push(o)}return t}),r),r}window.requestIdleCallback=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout((function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(t){clearTimeout(t)};var U=function(){var t=_.getCurrentContext();if(!t)throw new ReferenceError("Sparky Function only can be used in the lifecycle of a Sparky application");return t},L=function(t){var n;n=this.context,_.setCurrentContext(n),_.resetIndexes();var r=U();r.indexes.state=this.state;var o=r.cachedState[r.indexes.state];r.cachedState[r.indexes.state]="function"==typeof t?t(o):t,r.indexes.state++,r.__root?_.setCurrentContext(N.mount(e(e({},r.__root),{currentContext:r}),r.__rootElement)):_.setCurrentContext(N.mount({type:"SparkyComponent",context:r,currentContext:r,renderFn:r.renderFunc},r.__rootElement))},F=function(t){return[t.store,function(e){return t.dispatcher(t,e)}]},N=/** @class */function(){function t(){}
/**
         * Generate a Sparky Component that can be mount.
         * @param renderFunc The function that going to be execute to render html template
         */return t.component=function(t,e){var n=_.newContext({props:e,renderFunc:t});return{type:"SparkyComponent",context:n,currentContext:n,renderFn:t}},
/**
         * Create a routing component that manage history
         * @param stateRoute
         */
t.router=function(t,e){e||(e={type:"hash"});var n="";"hash"==e.type?n=location.hash.slice(2,location.hash.length):"browser"==e.type&&(n=location.pathname);var r=C(t,n);r.hash=n;var o=[];return r.exact&&(o=j(r.path,n)),{type:"SparkyRouter",component:r.component,routing:t,history:[r],params:o,options:e}},
/**
         * Mount a Sparky Component in the DOM Tree and keep it updated.
         * @param component Sparky Component
         * @param dom The dom element where you want to mount this component
         */
t.mount=function(t,n){var r=function(){if("undefined"!=typeof process&&process.env)return process.env.NODE_ENV;return"production"}
/**
     * @internal
     * @param dom
     * @param element
     */();"development"===r&&console.time();var o="SparkyComponent"==t.type?t:t.component;O(n,t);var a=o.context,s=o.renderFn,u=m(o.currentContext.indexes);a.__rootElement=n,_.setCurrentContext(a),_.resetIndexes();var p=s(Object.freeze(a.props)),f=n.__sparkyRoot.updateAt?n.firstElementChild:null,l=D(p.html),d=i(f,l=M.populate(l,p,o));if(d)return!d.isConnected&&n&&n.appendChild(d),n.__sparkyRoot.updateAt=(new Date).getTime(),c.listen(d),"development"===r&&console.timeEnd(),"undefined"!=typeof thisTest&&thisTest.testing&&(thisTest.__testUtilData={root:n,component:o,eventList:thisTestEvent}),e(e({},o.currentContext),{indexes:u})},
/**
         * Create a Store to using it on components
         * @param newStore Object that will be Store
         * @param dispatcher Function that will run for changing programatically store object
         */
t.createStore=function(t,e){return{type:"SparkyStore",store:t,dispatcher:function(t,n){t.store=e(t.store,n)}}},
/**
         * Reconciliate the current DOM with the new DOM Node
         * @internal
         * @param oldNode Node that need to be reconcile
         * @param newNode Node that have the new elements
         */
t.reconciliate=function(t,e){return i(t,e)},t}();
/**
     * @internal
     */function O(t,n){if(t&&!t.__sparkyRoot&&(
/**
     * @internal
     * @param dom
     */
function(t){t.__sparkyRoot={id:a(12),isRoutingEnabled:!1,basename:"",params:[],forceURLUpdate:!1,type:"hash",historyIndex:0,stateChanging:!1,history:[],routing:[],updateAt:null}}
/**
     * @internal
     * @param html
     */(t),"SparkyRouter"==n.type)){var r=n,o=r.history,i=r.routing,s=r.params,c=r.options;t.__sparkyRoot=e(e({},t.__sparkyRoot),{history:o,routing:i,params:s,basename:null==c?void 0:c.basename,isRoutingEnabled:!0,forceURLUpdate:null==c?void 0:c.forceUrlUpdate,type:null==c?void 0:c.type}),"hash"==t.__sparkyRoot.type&&x(i,(function(e){N.mount(e,t)}),t)}}function D(t){var e=document.createElement("div");if(e.innerHTML=t,e.children.length>1)throw new TypeError("Adjacent elements on the root level are forbidden.");return e.firstElementChild}
/**
     * @internal
     */
/**
     * @internal
     */
var M=/** @class */function(){function t(){}return t.populate=function(t,e,n){for(var r=this,o=[[e,n,t]],a=0,i=function(){var t=o.shift(),i=t[0],c=t[1],u=t[2];s.cachedComponent[a]||(s.cachedComponent[a]=[]),i.func.forEach((function(t,e){var n=function(t,e,n){for(var r=[t];r.length>0;){var o=r.shift(),a=Array.from(o.attributes).find((function(t){if(t.name.startsWith("on"))return t.value=="SparkyFunction#"+e+"#"+n}));if(a)return{dom:o,attr:a};for(var i=0;i<o.children.length;i++)r.push(o.children[i])}}(u,i.renderId,e),r=n.attr.name.replace("on","");n.dom.__sparkyEvent={type:r,context:c.context,callbackFn:t.func},n.dom.removeAttribute(n.attr.name)})),i.children.forEach((function(t){o.push([t,c,u])})),i.nestedComponents.forEach((function(t,s){var c,p=r.cachedComponent[a][s],f=r.findComment(u,i.renderId,s,t.renderFn.name);p&&(""==p.component.renderFn.name?p.component.renderFn.toString()==t.renderFn.toString()&&(t=z(p,t)):p.component.renderFn.name==t.renderFn.name&&(t=z(p,t))),_.setCurrentContext(t.context),_.resetIndexes(),t.context.__root=n,t.context.__rootElement=n.context.__rootElement;var l=t.renderFn(Object.freeze(t.context.props));if(f){var d=D(l.html);f.parentNode.replaceChild(d,f),(c=e.func).push.apply(c,l.func),o.push([l,t,d]),r.cachedComponent[a][s]={component:t,dom:u}}})),i.nestedComponents.length>0&&a++},s=this;o.length>0;)i();return t},t.findComment=function(t,e,n,r){for(var o=[t];o.length>0;){var a=o.shift();if("#comment"==a.nodeName&&a.nodeValue.trim()=="SparkyComponent#"+r+"#"+n+"#"+e)return a;for(var i=0;i<a.childNodes.length;i++)o.push(a.childNodes[i])}},t.cachedComponent=[],t}();
/**
     * @internal
     */function z(t,e){return t.component.context.props=e.context.props,e=t.component}var P=/** @class */function(){function t(){}
/**
         * Generate a Sparky Component that can be mount.
         * @param renderFunc The function that going to be execute to render html template
         */return t.component=function(t,e){var n=_.newContext({props:e,renderFunc:t});return{type:"SparkyComponent",context:n,currentContext:n,renderFn:t}},
/**
         * Create a routing component that manage history
         * @param stateRoute
         */
t.router=function(t,e){e||(e={type:"hash"});var n="";"hash"==e.type?n=location.hash.slice(2,location.hash.length):"browser"==e.type&&(n=location.pathname);var r=C(t,n);r.hash=n;var o=[];return r.exact&&(o=j(r.path,n)),{type:"SparkyRouter",component:r.component,routing:t,history:[r],params:o,options:e}},
/**
         * Mount a Sparky Component in the DOM Tree and keep it updated.
         * @param component Sparky Component
         * @param dom The dom element where you want to mount this component
         */
t.mount=function(t,n){var r=function(){if("undefined"!=typeof process&&process.env)return process.env.NODE_ENV;return"production"}
/**
     * Function will be run after the render is commited to the screen.
     * @param callbackFn - The function to run
     * @param dependenciesChanged - Array of values that the function depends on
     */();"development"===r&&console.time();var o="SparkyComponent"==t.type?t:t.component;!
/**
     * @internal
     * @param dom
     * @param element
     */
function(t,n){if(t&&!t.__sparkyRoot&&(
/**
     * @internal
     * @param dom
     */
function(t){t.__sparkyRoot={id:a(12),isRoutingEnabled:!1,basename:"",params:[],forceURLUpdate:!1,type:"hash",historyIndex:0,stateChanging:!1,history:[],routing:[],updateAt:null}}
/**
     * @internal
     * @param html
     */(t),"SparkyRouter"==n.type)){var r=n,o=r.history,i=r.routing,s=r.params,c=r.options;t.__sparkyRoot=e(e({},t.__sparkyRoot),{history:o,routing:i,params:s,basename:null==c?void 0:c.basename,isRoutingEnabled:!0,forceURLUpdate:null==c?void 0:c.forceUrlUpdate,type:null==c?void 0:c.type}),"hash"==t.__sparkyRoot.type&&x(i,(function(e){P.mount(e,t)}),t)}}(n,t);var s=o.context,u=o.renderFn,p=m(o.currentContext.indexes);s.__rootElement=n,_.setCurrentContext(s),_.resetIndexes();var f=u(Object.freeze(s.props)),l=n.__sparkyRoot.updateAt?n.firstElementChild:null,d=G(f.html),h=i(l,d=M.populate(d,f,o));if(h)return!h.isConnected&&n&&n.appendChild(h),n.__sparkyRoot.updateAt=(new Date).getTime(),c.listen(h),"development"===r&&console.timeEnd(),"undefined"!=typeof thisTest&&thisTest.testing&&(thisTest.__testUtilData={root:n,component:o,eventList:thisTestEvent}),e(e({},o.currentContext),{indexes:p})},
/**
         * Create a Store to using it on components
         * @param newStore Object that will be Store
         * @param dispatcher Function that will run for changing programatically store object
         */
t.createStore=function(t,e){return{type:"SparkyStore",store:t,dispatcher:function(t,n){t.store=e(t.store,n)}}},
/**
         * Reconciliate the current DOM with the new DOM Node
         * @internal
         * @param oldNode Node that need to be reconcile
         * @param newNode Node that have the new elements
         */
t.reconciliate=function(t,e){return i(t,e)},t}();var q=function(t,n){var r=U(),o=e({},r.indexes);b(r,"update"),window.requestIdleCallback((function(){g(e(e({},r),{indexes:o}),"update",r.cachedUpdate,t,n)}),{timeout:250})},B=function(t){if("object"==typeof t){var e=t;if(e.type&&"SparkyStore"==e.type)return F(e)}var n=U(),r={context:n,state:n.indexes.state},o=n.cachedState[n.indexes.state];if(o)return n.indexes.state++,[o,L.bind(r)];var a=function(t){var e=U();return e.cachedState[e.indexes.state]=t,L}(t);n.indexes.state++;var i=n.indexes.state-1;return[n.cachedState[i],a.bind(r)]},W=function(t,e){var n=U();g(n,"memoize",n.cachedMemo,t,e),b(n,"memoize")},H=function(){var t=U();if(!t.__rootElement.__sparkyRoot.isRoutingEnabled)throw TypeError("To use router() function, you need to pass a Sparky.router object on the mount function");return{goToState:w.bind(t.__rootElement),goBack:S.bind(t.__rootElement),goAfter:A.bind(t.__rootElement),getParams:T.bind(t.__rootElement),cleanHistory:R.bind(t.__rootElement),getCurrentState:I.bind(t.__rootElement)}};
/**
     * Returns a stateful value, and a function to update it.
     * @param initialState The value during the first render
     */
/**
     * @internal
     * @param computedProps
     * @param i
     * @param func
     * @param htmlLine
     * @param nestedComponents
     * @param children
     * @param renderId
     */
function V(t,e,n,r,o,a,i){if("function"==typeof t[e])n.push({index:n.length-1,renderId:i,func:t[e]}),r+="'SparkyFunction#"+i+"#"+(n.length-1)+"'";else if("SparkyRender"==t[e].type){var s=t[e];r+=s.html,a.push(s)}else if("SparkyComponent"==t[e].type){var c=t[e];r+="\x3c!-- SparkyComponent#"+c.renderFn.name+"#"+o.length+"#"+i+" --\x3e",o.push(c)}else t[e]=Array.isArray(t[e])?t[e].join(""):new String(t[e]),r+=t[e];return r}function G(t){var e=document.createElement("div");if(e.innerHTML=t,e.children.length>1)throw new TypeError("Adjacent elements on the root level are forbidden.");return e.firstElementChild}t.Sparky=P,t.html=
/**
     * Render the html string template to HTML elements
     * @param html Array of HTML String
     * @param computedProps Computed Props used to pass Javascript into template
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
     */
function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=[],o=[],i=[],s=a(12),c="string"==typeof t?t:t.map((function(t,n){var a="";return a+=t,e[n]?a=V(e,n,r,a,o,i,s):a})),u=Array.isArray(c)?c.join(""):c;return{type:"SparkyRender",html:u,func:r,nestedComponents:o,children:i,renderId:s}},t.memoize=W,t.renderToDOMNode=G,t.router=H,t.state=B,t.update=q,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=sparky.js.map
