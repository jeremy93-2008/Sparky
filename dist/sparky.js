!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).sparky={})}(this,function(e){"use strict";
// This alphabet uses a-z A-Z 0-9 _- symbols.
// Symbols are generated for smaller size.
// -_zyxwvutsrqponmlkjihgfedcba9876543210ZYXWVUTSRQPONMLKJIHGFEDCBA
for(var s="-_",l=36
// Loop from 36 to 0 (from z to a and 9 to 0 in Base36).
;l--;)
// 36 is radix. Number.prototype.toString(36) returns number
// in Base36 representation. Base36 is like hex, but it uses 0–9 and a-z.
s+=l.toString(36);
// Loop from 36 to 10 (from Z to A in Base36).
for(l=36;l---10;)s+=l.toString(36).toUpperCase();
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
   */var n,c,r,f;Array.from||(Array.from=(n=Object.prototype.toString,c=function(e){return"function"==typeof e||"[object Function]"===n.call(e)},r=Math.pow(2,53)-1,f=function(e){var n,t=(n=Number(e),isNaN(n)?0:0!==n&&isFinite(n)?(0<n?1:-1)*Math.floor(Math.abs(n)):n);return Math.min(Math.max(t,0),r)},function(e){var n=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var t,r=1<arguments.length?arguments[1]:void 0;if(void 0!==r){if(!c(r))throw new TypeError("Array.from: when provided, the second argument must be a function");2<arguments.length&&(t=arguments[2])}for(var o,i=f(n.length),a=c(this)?Object(new this(i)):new Array(i),u=0;u<i;)o=n[u],a[u]=r?void 0===t?r(o,u):r.call(t,o,u):o,u+=1;return a.length=i,a})),Array.prototype.find||(Array.prototype.find=function(e){if(null==this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var n=Object(this),t=n.length>>>0,r=arguments[1],o=void 0,i=0;i<t;i++)if(o=n[i],e.call(r,o,i,n))return o});
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
var t=function(){return(t=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};function d(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var r=Array(e),o=0;for(n=0;n<t;n++)for(var i=arguments[n],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r}var o=null;function i(){return o}function a(e){o=e}function u(e,n){if(!e&&!n)return null;if(e&&!n)return null;if(!e&&n)return n;for(var t=[e],r=[n],o=e;0<t.length||0<r.length;){var i=t.shift(),a=r.shift();!i||a?i||!a?i.isEqualNode(a)||(i.nodeName!==a.nodeName&&i.parentElement.replaceChild(a,i),"#text"!=i.nodeName||"#text"==a.nodeName?(("#text"==i.nodeName&&"#text"==a.nodeName||1==a.childNodes.length&&"#text"==a.childNodes[0].nodeName)&&i.textContent!==a.textContent&&(i.textContent=a.textContent),m(i,a),o=p(i,o,t,a,r)):(o.removeChild(i),o.appendChild(a))):o.appendChild(a):i.parentElement.removeChild(i)}return e}function p(e,n,t,r,o){return 0<e.childNodes.length&&(n=h(e,n,e,t)),0<r.childNodes.length&&(n=h(e,n,r,o)),n}function h(n,e,t,r){return n&&(e=n),Array.from(t.childNodes).forEach(function(e){1==n.childNodes.length&&"#text"==n.childNodes[0].nodeName||r.push(e)}),e}function m(e,n){for(var t,r=e&&e.attributes?g(e.attributes):[],o=n&&n.attributes?g(n.attributes):[];0<o.length;){var i=r.shift(),a=o.shift();y(i,a,e),e&&a&&v(i,a,e)}0<r.length&&(t=e,r.forEach(function(e){return t.attributes.removeNamedItem(e.name)}))}function v(e,n,t){e.name!=n.name&&(t.removeAttribute(e.name),t.setAttribute(n.name,n.value)),e.value!=n.value&&(t.getAttributeNode(n.name).value=n.value)}function y(e,n,t){e&&!n&&t.removeAttribute(e.name),!e&&n&&t.setAttribute(n.name,n.value)}function g(e){return Array.from(e).sort(function(e,n){return e.name.localeCompare(n.name)})}
/*
   * Node.isConnected polyfill for IE and EdgeHTML
   * 2020-02-04
   *
   * By Eli Grey, https://eligrey.com
   * Public domain.
   * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
   */function b(){"isConnected"in Node.prototype||Object.defineProperty(Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}b();var w=(C.listen=function(){var t=this;C.removeUnusedEvents(),this.eventList.forEach(function(e){var n=e.type;t.isEventTypeListening(n)||(document.addEventListener(n,function(e){return t.dispatchEvent(e)}),t.eventListType.push(n))})},C.dispatchEvent=function(n){var t=this;this.eventList.find(function(e){t.isEventTarget(e,n)&&e.type===n.type&&e.callbackFn(n)})},C.addEvent=function(e){var n=e.dom,t=e.type,r=e.callbackFn;this.eventList.push({dom:n,type:t,callbackFn:r})},C.removeUnusedEvents=function(){this.eventList=this.eventList.filter(function(e){return e.dom.isConnected})},C.isEventTypeListening=function(n){return this.eventListType.find(function(e){return e==n})},C.isEventTarget=function(e,n){return e.dom===n.target||e.dom.contains(n.target)},C.oldEventType=[],C.eventList=[],C.eventListType=[],C);function C(){}String.prototype.startsWith||(String.prototype.startsWith=function(e,n){return n=n||0,this.substr(n,e.length)===e});var E=(N.populate=function(u,c){for(var s=this,l=[u],f=0,e=function(){var a=l.shift();n.cachedComponent[f]||(n.cachedComponent[f]=[]),a.func.forEach(function(e,n){var t=function(e,n,t){for(var r=[e];0<r.length;){var o=r.shift(),i=Array.from(o.attributes).find(function(e){if(e.name.startsWith("on"))return e.value=="SparkyFunction#"+n+"#"+t});if(i)return{dom:o,attr:i};Array.from(o.children).forEach(function(e){r.push(e)})}}(u.dom,a.renderId,n),r=t.attr.name.replace("on","");w.addEvent({dom:t.dom,type:r,callbackFn:e.func.bind(window,event)}),t.dom.removeAttribute(t.attr.name)}),a.children.forEach(function(e){l.push(e)}),a.nestedComponents.forEach(function(e,n){var t;if("SparkyComponent"===e.type){var r=s.cachedComponent[f][n],o=s.findComment(u.dom,a.renderId,n,e.selfFn.name);r&&(r.component.self.props=e.self.props,e=r.component);var i=e.selfFn(e.self,Object.freeze(e.self.props));o&&(o.parentNode.replaceChild(i.dom,o),e.self.__root=c,(t=u.func).push.apply(t,i.func),l.push(i),s.cachedComponent[f].push({component:e,dom:i.dom}))}}),f++},n=this;0<l.length;)e();return u.dom},N.findComment=function(e,n,t,r){for(var o=[e];0<o.length;){var i=o.shift();if("#comment"==i.nodeName&&i.nodeValue.trim()=="SparkyComponent#"+r+"#"+t+"#"+n)return i;Array.from(i.childNodes).forEach(function(e){o.push(e)})}},N.cachedComponent=[],N);function N(){}b();var A=(
/**
       * Generate a Sparky Component that can be mount.
       * @param renderFunc The function that going to be execute to render html template
       */
_.component=function(e,n){return{type:"SparkyComponent",self:new k(e,n),selfFn:e}},
/**
       * Mount a Sparky Component in the DOM Tree and keep it updated.
       * @param component Sparky Component
       * @param dom The dom element where you want to mount this component
       */
_.mount=function(e,n){_._DEV_&&console.time();var t=e.self,r=e.selfFn.call(window,t,Object.freeze(t.props));r.dom=E.populate(r,e);var o=u(i(),r.dom);o&&(!o.isConnected&&n&&n.appendChild(o),w.listen(),a(o),_._DEV_&&console.timeEnd())},
/**
       * Reconciliate the current DOM with the new DOM Node
       * @param oldNode Node that need to be reconcile
       * @param newNode Node that have the new elements
       */
_.reconciliate=function(e,n){return u(e,n)},_._DEV_=!0,_);function _(){}window.requestIdleCallback=window.requestIdleCallback||function(e){var n=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)};var k=function(e,n){var l=this;this.newProps=[],this.cachedMemo=[],
/**
           * Execute after the render/update of the DOM tree.
           * @param callback - The function that you want to execute
           * @param dependenciesChanged - An array of keys to know when the onUpdate need to be executed
           */
this.onUpdate=function(e,n){(!n&&0==l.newProps.length||n&&0==n.length||l.newProps.some(function(e){return n&&n.includes(e)}))&&
//@ts-ignore
window.requestIdleCallback(function(){return e.call(l)})},
/**
          * Get State object value of this context
          * @param props - the specific key of the value that you want to retrieve
          */
this.getState=function(e){return e?l.state[e]:l.state},
/**
           * Add/Set a new value into the State object of the context
           * @param newState - new Value
           */
this.setState=function(e){l.newProps=Object.keys(e),l.state=t(t({},l.state),e),l.__root?A.mount(l.__root):A.mount({type:"SparkyComponent",self:l,selfFn:l.renderFunc})},
/**
           * Call the function callback only when dependencies has changed
           * @param callbackFn - Callback to be called when needed
           * @param argumentsChanged - list of value that are used to know if the callback needed to be recalled
           */
this.memo=function(n,e){var t,r,o,i,a,u,c=l.cachedMemo.find(function(e){return n.toString()==e.fn.toString()}),s={fn:n,result:null,dependencies:e};return c?(t=c.dependencies,o=e,i=(r=t).length,a=o.length<i?{bigArray:r,smallArray:o}:{bigArray:o,smallArray:r},u=a.smallArray,a.bigArray.every(function(e,n){return e==(u?u[n]:null)})?c.result:(c.dependencies=e,n.call.apply(n,d([window],e)))):(s.result=n.call.apply(n,d([window],e)),l.cachedMemo.push(s),s.result)},this.props=Object.freeze(n||{}),this.state={},this.renderFunc=e,this.__root=null};b();var S=(
/**
       * Generate a Sparky Component that can be mount.
       * @param renderFunc The function that going to be execute to render html template
       */
T.component=function(e,n){return{type:"SparkyComponent",self:new k(e,n),selfFn:e}},
/**
       * Mount a Sparky Component in the DOM Tree and keep it updated.
       * @param component Sparky Component
       * @param dom The dom element where you want to mount this component
       */
T.mount=function(e,n){T._DEV_&&console.time();var t=e.self,r=e.selfFn.call(window,t,Object.freeze(t.props));r.dom=E.populate(r,e);var o=u(i(),r.dom);o&&(!o.isConnected&&n&&n.appendChild(o),w.listen(),a(o),T._DEV_&&console.timeEnd())},
/**
       * Reconciliate the current DOM with the new DOM Node
       * @param oldNode Node that need to be reconcile
       * @param newNode Node that have the new elements
       */
T.reconciliate=function(e,n){return u(e,n)},T._DEV_=!0,T);
/**
   * Render the html string template to HTML elements
   * @param html Array of HTML String
   * @param computedProps Computed Props used to pass Javascript into template
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
   */function T(){}e.Sparky=S,e.render=function(e){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];var t=document.createElement("div"),o=[],i=[],a=[],u=function(e){var n="";
// Compact alternative for `for (var i = 0; i < size; i++)`
for(l=e||21;l--;)
// `| 0` is compact and faster alternative for `Math.floor()`
n+=s[64*Math.random()|0];return n}(12),c="string"==typeof e?e:e.map(function(e,n){var t="";return t+=e,r[n]?t=function(e,n,t,r,o,i,a){if("function"==typeof e[n])t.push({index:t.length-1,renderId:a,func:e[n]}),r+="'SparkyFunction#"+a+"#"+(t.length-1)+"'";else if("SparkyRender"==e[n].type){var u=e[n];r=function(e,n){var t=document.createElement("div");return t.appendChild(e.dom),n+=t.innerHTML}(u,r),i.push(u)}else if("SparkyComponent"==e[n].type){var c=e[n];r+="\x3c!-- SparkyComponent#"+c.selfFn.name+"#"+o.length+"#"+a+" --\x3e",o.push(c)}else e[n]=new String(e[n]),e[n].startsWith("<")?r+=e[n]:r+="<span class='computed'>"+e[n]+"</span>";return r}(r,n,o,t,i,a,u):t});if(t.innerHTML=Array.isArray(c)?c.join(""):c,1<t.children.length)throw new TypeError("The render HTML can only had one root node");return{type:"SparkyRender",dom:t.firstElementChild,func:o,nestedComponents:i,children:a,renderId:u}},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=sparky.js.map
