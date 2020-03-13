!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).sparky={})}(this,function(e){"use strict";
// This alphabet uses a-z A-Z 0-9 _- symbols.
// Symbols are generated for smaller size.
// -_zyxwvutsrqponmlkjihgfedcba9876543210ZYXWVUTSRQPONMLKJIHGFEDCBA
for(var d="-_",f=36
// Loop from 36 to 0 (from z to a and 9 to 0 in Base36).
;f--;)
// 36 is radix. Number.prototype.toString(36) returns number
// in Base36 representation. Base36 is like hex, but it uses 0–9 and a-z.
d+=f.toString(36);
// Loop from 36 to 10 (from Z to A in Base36).
for(f=36;f---10;)d+=f.toString(36).toUpperCase();
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
   */var n,u,r,s;Array.from||(Array.from=(n=Object.prototype.toString,u=function(e){return"function"==typeof e||"[object Function]"===n.call(e)},r=Math.pow(2,53)-1,s=function(e){var n,t=(n=Number(e),isNaN(n)?0:0!==n&&isFinite(n)?(0<n?1:-1)*Math.floor(Math.abs(n)):n);return Math.min(Math.max(t,0),r)},function(e){var n=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var t,r=1<arguments.length?arguments[1]:void 0;if(void 0!==r){if(!u(r))throw new TypeError("Array.from: when provided, the second argument must be a function");2<arguments.length&&(t=arguments[2])}for(var o,i=s(n.length),a=u(this)?Object(new this(i)):new Array(i),c=0;c<i;)o=n[c],a[c]=r?void 0===t?r(o,c):r.call(t,o,c):o,c+=1;return a.length=i,a})),Array.prototype.find||(Array.prototype.find=function(e){if(null==this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var n=Object(this),t=n.length>>>0,r=arguments[1],o=void 0,i=0;i<t;i++)if(o=n[i],e.call(r,o,i,n))return o});var a=null;function c(e,n){if(!n)return null;if(!e&&n)return n;if(e.isEqualNode(n))return e;if(e.nodeName!==n.nodeName)return n;for(var c=[[e,n]],t=function(){var e=c.shift(),r=e[0],n=e[1],o=[];!function(r,e){if(!r.attributes||!e.attributes)return;var n=Array.from(r.attributes).sort(function(e,n){return p(e,n)}),o=Array.from(e.attributes).sort(function(e,n){return p(e,n)}),i=[];n.forEach(function(e,n){var t=o[n];if(t)return e.name!==t.name?(i.push(e),void r.setAttribute(t.name,t.value)):void(e.value!==t.value&&(e.value=t.value));i.push(e)});for(var t=n.length;t<o.length;t++){var a=o[t];r.setAttribute(a.name,a.value)}i.forEach(function(e){return r.removeAttribute(e.name)})}(r,n);var i=n.childNodes;r.childNodes.forEach(function(e,n){var t=i.item(n);t?e.isEqualNode(t)||(e.nodeName===t.nodeName?"#text"!=e.nodeName||e.textContent===t.textContent?c.push([e,t]):e.textContent=t.textContent:r.replaceChild(t.cloneNode(!0),e)):o.push(e)});for(var t=r.childNodes.length;t<n.childNodes.length;t++){var a=n.childNodes.item(t);r.appendChild(a.cloneNode(!0))}o.forEach(function(e){r.removeChild(e)})};0<c.length;)t();return e}function p(e,n){return e.name<n.name?-1:e.name>n.name?1:0}
/*
   * Node.isConnected polyfill for IE and EdgeHTML
   * 2020-02-04
   *
   * By Eli Grey, https://eligrey.com
   * Public domain.
   * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
   */function t(){"isConnected"in Node.prototype||Object.defineProperty(Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}t();var h=(o.listen=function(){var t=this;o.removeUnusedEvents(),this.eventList.forEach(function(e){var n=e.type;t.isEventTypeListening(n)||(document.addEventListener(n,function(e){return t.dispatchEvent(e)}),t.eventListType.push(n))})},o.dispatchEvent=function(n){var t=this;this.eventList.find(function(e){t.isEventTarget(e,n)&&e.type===n.type&&e.callbackFn(n)})},o.addEvent=function(e){var n=e.dom,t=e.type,r=e.callbackFn;this.eventList.push({dom:n,type:t,callbackFn:r})},o.removeUnusedEvents=function(){this.eventList=this.eventList.filter(function(e){return e.dom.isConnected})},o.isEventTypeListening=function(n){return this.eventListType.find(function(e){return e==n})},o.isEventTarget=function(e,n){return e.dom===n.target||e.dom.contains(n.target)},o.oldEventType=[],o.eventList=[],o.eventListType=[],o);function o(){}String.prototype.startsWith||(String.prototype.startsWith=function(e,n){return n=n||0,this.substr(n,e.length)===e});
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
var i=function(){return(i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},m={__root:null,props:{},state:{},cachedMemo:[],cachedUpdate:[],indexes:{memo:0,update:0},renderFunc:null},l=(v.getCurrentContext=function(){return this.__context},v.setCurrentContext=function(e){this.__context=e},v.resetIndexes=function(){if(!this.__context)throw new ReferenceError("Try to reset index on a undefined context");this.__context.indexes.memo=0,this.__context.indexes.update=0},v.newContext=function(e){return i(i({},this.__defaultContext),e)},v.__defaultContext=m,v);function v(){}var y=(C.populate=function(c,u){for(var d=this,f=[c],s=0,e=function(){var a=f.shift();n.cachedComponent[s]||(n.cachedComponent[s]=[]),a.func.forEach(function(e,n){var t=function(e,n,t){for(var r=[e];0<r.length;){var o=r.shift(),i=Array.from(o.attributes).find(function(e){if(e.name.startsWith("on"))return e.value=="SparkyFunction#"+n+"#"+t});if(i)return{dom:o,attr:i};Array.from(o.children).forEach(function(e){r.push(e)})}}(c.dom,a.renderId,n),r=t.attr.name.replace("on","");h.addEvent({dom:t.dom,type:r,callbackFn:e.func}),t.dom.removeAttribute(t.attr.name)}),a.children.forEach(function(e){f.push(e)}),a.nestedComponents.forEach(function(e,n){var t;if("SparkyComponent"===e.type){var r=d.cachedComponent[s][n],o=d.findComment(c.dom,a.renderId,n,e.renderFn.name);r&&(""==r.component.renderFn.name?r.component.renderFn.toString()==e.renderFn.toString()&&(e=E(r,e)):r.component.renderFn.name==e.renderFn.name&&(e=E(r,e)));var i=e.renderFn(Object.freeze(e.context.props));o&&(o.parentNode.replaceChild(i.dom,o),e.context.__root=u,(t=c.func).push.apply(t,i.func),f.push(i),d.cachedComponent[s].push({component:e,dom:i.dom}))}}),s++},n=this;0<f.length;)e();return c.dom},C.findComment=function(e,n,t,r){for(var o=[e];0<o.length;){var i=o.shift();if("#comment"==i.nodeName&&i.nodeValue.trim()=="SparkyComponent#"+r+"#"+t+"#"+n)return i;Array.from(i.childNodes).forEach(function(e){o.push(e)})}},C.cachedComponent=[],C);function C(){}function E(e,n){return l.setCurrentContext(e.component.context),e.component.context.props=n.context.props,n=e.component}t();var g=(
/**
       * Generate a Sparky Component that can be mount.
       * @param renderFunc The function that going to be execute to render html template
       */
x.component=function(e,n){return{type:"SparkyComponent",context:l.newContext({props:n,renderFunc:e}),renderFn:e}},
/**
       * Mount a Sparky Component in the DOM Tree and keep it updated.
       * @param component Sparky Component
       * @param dom The dom element where you want to mount this component
       */
x.mount=function(e,n){x._DEV_&&console.time();var t=e.context,r=e.renderFn;l.setCurrentContext(t),l.resetIndexes();var o=r(Object.freeze(t.props));o.dom=y.populate(o,e);var i=c(a,o.dom);i&&(!i.isConnected&&n&&n.appendChild(i),h.listen(),a=i,x._DEV_&&console.timeEnd())},
/**
       * Reconciliate the current DOM with the new DOM Node
       * @param oldNode Node that need to be reconcile
       * @param newNode Node that have the new elements
       */
x.reconciliate=function(e,n){return c(e,n)},x._DEV_=!0,x);
/**
   * Render the html string template to HTML elements
   * @param html Array of HTML String
   * @param computedProps Computed Props used to pass Javascript into template
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
   */function x(){}e.Sparky=g,e.render=function(e){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];var t=document.createElement("div"),o=[],i=[],a=[],c=function(e){var n="";
// Compact alternative for `for (var i = 0; i < size; i++)`
for(f=e||21;f--;)
// `| 0` is compact and faster alternative for `Math.floor()`
n+=d[64*Math.random()|0];return n}(12),u="string"==typeof e?e:e.map(function(e,n){var t="";return t+=e,r[n]?t=function(e,n,t,r,o,i,a){if("function"==typeof e[n])t.push({index:t.length-1,renderId:a,func:e[n]}),r+="'SparkyFunction#"+a+"#"+(t.length-1)+"'";else if("SparkyRender"==e[n].type){var c=e[n];r=function(e,n){var t=document.createElement("div");return t.appendChild(e.dom),n+=t.innerHTML}(c,r),i.push(c)}else if("SparkyComponent"==e[n].type){var u=e[n];r+="\x3c!-- SparkyComponent#"+u.renderFn.name+"#"+o.length+"#"+a+" --\x3e",o.push(u)}else e[n]=Array.isArray(e[n])?e[n].join(""):new String(e[n]),e[n].startsWith("<")?r+=e[n]:r+="<span class='computed'>"+e[n]+"</span>";return r}(r,n,o,t,i,a,c):t});if(t.innerHTML=Array.isArray(u)?u.join(""):u,1<t.children.length)throw new TypeError("The render HTML can only had one root node");return{type:"SparkyRender",dom:t.firstElementChild,func:o,nestedComponents:i,children:a,renderId:c}},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=sparky.js.map
