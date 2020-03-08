!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).sparky={})}(this,function(e){"use strict";
// This alphabet uses a-z A-Z 0-9 _- symbols.
// Symbols are generated for smaller size.
// -_zyxwvutsrqponmlkjihgfedcba9876543210ZYXWVUTSRQPONMLKJIHGFEDCBA
for(var s="-_",f=36
// Loop from 36 to 0 (from z to a and 9 to 0 in Base36).
;f--;)
// 36 is radix. Number.prototype.toString(36) returns number
// in Base36 representation. Base36 is like hex, but it uses 0–9 and a-z.
s+=f.toString(36);
// Loop from 36 to 10 (from Z to A in Base36).
for(f=36;f---10;)s+=f.toString(36).toUpperCase();
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
   */var t,c,r,d;Array.from||(Array.from=(t=Object.prototype.toString,c=function(e){return"function"==typeof e||"[object Function]"===t.call(e)},r=Math.pow(2,53)-1,d=function(e){var t,n=(t=Number(e),isNaN(t)?0:0!==t&&isFinite(t)?(0<t?1:-1)*Math.floor(Math.abs(t)):t);return Math.min(Math.max(n,0),r)},function(e){var t=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var n,r=1<arguments.length?arguments[1]:void 0;if(void 0!==r){if(!c(r))throw new TypeError("Array.from: when provided, the second argument must be a function");2<arguments.length&&(n=arguments[2])}for(var o,i=d(t.length),a=c(this)?Object(new this(i)):new Array(i),u=0;u<i;)o=t[u],a[u]=r?void 0===n?r(o,u):r.call(n,o,u):o,u+=1;return a.length=i,a})),Array.prototype.find||(Array.prototype.find=function(e){if(null==this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var t=Object(this),n=t.length>>>0,r=arguments[1],o=void 0,i=0;i<n;i++)if(o=t[i],e.call(r,o,i,t))return o});
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
var o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},n=null;function i(){return n}function a(e){n=e}function u(e,t){if(!e&&!t)return null;if(e&&!t)return null;if(!e&&t)return t;for(var n=[e],r=[t],o=e;0<n.length||0<r.length;){var i=n.shift(),a=r.shift();!i||a?i||!a?i.isEqualNode(a)||(i.nodeName!==a.nodeName&&i.parentElement.replaceChild(a,i),"#text"!=i.nodeName||"#text"==a.nodeName?(("#text"==i.nodeName&&"#text"==a.nodeName||1==a.childNodes.length&&"#text"==a.childNodes[0].nodeName)&&i.textContent!==a.textContent&&(i.textContent=a.textContent),h(i,a),o=l(i,o,n,a,r)):(o.removeChild(i),o.appendChild(a))):o.appendChild(a):i.parentElement.removeChild(i)}return e}function l(e,t,n,r,o){return 0<e.childNodes.length&&(t=p(e,t,e,n)),0<r.childNodes.length&&(t=p(e,t,r,o)),t}function p(t,e,n,r){return t&&(e=t),Array.from(n.childNodes).forEach(function(e){1==t.childNodes.length&&"#text"==t.childNodes[0].nodeName||r.push(e)}),e}function h(e,t){for(var n,r=e&&e.attributes?y(e.attributes):[],o=t&&t.attributes?y(t.attributes):[];0<o.length;){var i=r.shift(),a=o.shift();v(i,a,e),e&&a&&m(i,a,e)}0<r.length&&(n=e,r.forEach(function(e){return n.attributes.removeNamedItem(e.name)}))}function m(e,t,n){e.name!=t.name&&(n.removeAttribute(e.name),n.setAttribute(t.name,t.value)),e.value!=t.value&&(n.getAttributeNode(t.name).value=t.value)}function v(e,t,n){e&&!t&&n.removeAttribute(e.name),!e&&t&&n.setAttribute(t.name,t.value)}function y(e){return Array.from(e).sort(function(e,t){return e.name.localeCompare(t.name)})}
/*
   * Node.isConnected polyfill for IE and EdgeHTML
   * 2020-02-04
   *
   * By Eli Grey, https://eligrey.com
   * Public domain.
   * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
   */function C(){"isConnected"in Node.prototype||Object.defineProperty(Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}C();var g=(b.listen=function(){var n=this;b.removeUnusedEvents(),this.eventList.forEach(function(e){var t=e.type;n.isEventTypeListening(t)||(document.addEventListener(t,function(e){return n.dispatchEvent(e)}),n.eventListType.push(t))})},b.dispatchEvent=function(t){var n=this;this.eventList.find(function(e){n.isEventTarget(e,t)&&e.type===t.type&&e.callbackFn(t)})},b.addEvent=function(e){var t=e.dom,n=e.type,r=e.callbackFn;this.eventList.push({dom:t,type:n,callbackFn:r})},b.removeUnusedEvents=function(){this.eventList=this.eventList.filter(function(e){return e.dom.isConnected})},b.isEventTypeListening=function(t){return this.eventListType.find(function(e){return e==t})},b.isEventTarget=function(e,t){return e.dom===t.target||e.dom.contains(t.target)},b.oldEventType=[],b.eventList=[],b.eventListType=[],b);function b(){}String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return t=t||0,this.substr(t,e.length)===e});var w=(E.populate=function(u,c){for(var s=this,f=[u],d=0,e=function(){var a=f.shift();t.cachedComponent[d]||(t.cachedComponent[d]=[]),a.func.forEach(function(e,t){var n=function(e,t,n){for(var r=[e];0<r.length;){var o=r.shift(),i=Array.from(o.attributes).find(function(e){if(e.name.startsWith("on"))return e.value=="SparkyFunction#"+t+"#"+n});if(i)return{dom:o,attr:i};Array.from(o.children).forEach(function(e){r.push(e)})}}(u.dom,a.renderId,t),r=n.attr.name.replace("on","");g.addEvent({dom:n.dom,type:r,callbackFn:e.func.bind(window,event)}),n.dom.removeAttribute(n.attr.name)}),a.children.forEach(function(e){f.push(e)}),a.nestedComponents.forEach(function(e,t){var n;if("SparkyComponent"===e.type){var r=s.cachedComponent[d][t],o=s.findComment(u.dom,a.renderId,t,e.selfFn.name);r&&(r.component.self.props=e.self.props,e=r.component);var i=e.selfFn(e.self,Object.freeze(e.self.props));o&&(o.parentNode.replaceChild(i.dom,o),e.self.__root=c,(n=u.func).push.apply(n,i.func),f.push(i),s.cachedComponent[d].push({component:e,dom:i.dom}))}}),d++},t=this;0<f.length;)e();return u.dom},E.findComment=function(e,t,n,r){for(var o=[e];0<o.length;){var i=o.shift();if("#comment"==i.nodeName&&i.nodeValue.trim()=="SparkyComponent#"+r+"#"+n+"#"+t)return i;Array.from(i.childNodes).forEach(function(e){o.push(e)})}},E.cachedComponent=[],E);function E(){}C();var N=(
/**
       * Generate a Sparky Component that can be mount.
       * @param renderFunc The function that going to be execute to render html template
       */
_.component=function(e,t){return{type:"SparkyComponent",self:new k(e,t),selfFn:e}},
/**
       * Mount a Sparky Component in the DOM Tree and keep it updated.
       * @param component Sparky Component
       * @param dom The dom element where you want to mount this component
       */
_.mount=function(e,t){this._DEV_&&console.time();var n=e.self,r=e.selfFn.call(window,n,Object.freeze(n.props));r.dom=w.populate(r,e);var o=u(i(),r.dom);o&&(!o.isConnected&&t&&t.appendChild(o),g.listen(),a(o),this._DEV_&&console.timeEnd())},
/**
       * Reconciliate the current DOM with the new DOM Node
       * @param oldNode Node that need to be reconcile
       * @param newNode Node that have the new elements
       */
_.reconciliate=function(e,t){return u(e,t)},_._DEV_=!0,_);function _(){}window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)};var k=function(e,t){var n=this;this.newProps=[],
/**
           * Execute after the render/update of the DOM tree.
           * @param callback - The function that you want to execute
           * @param dependenciesChanged - An array of keys to know when the onUpdate need to be executed
           */
this.onUpdate=function(e,t){(!t&&0==n.newProps.length||t&&0==t.length||n.newProps.some(function(e){return t&&t.includes(e)}))&&
//@ts-ignore
window.requestIdleCallback(function(){return e.call(n)})},
/**
          * Get State object value of this context
          * @param props - the specific key of the value that you want to retrieve
          */
this.getState=function(e){return e?n.state[e]:n.state},
/**
           * Add/Set a new value into the State object of the context
           * @param newState - new Value
           */
this.setState=function(e){n.newProps=Object.keys(e),n.state=o(o({},n.state),e),n.__root?N.mount(n.__root):N.mount({type:"SparkyComponent",self:n,selfFn:n.renderFunc})},this.props=Object.freeze(t||{}),this.state={},this.renderFunc=e,this.__root=null};C();var T=(
/**
       * Generate a Sparky Component that can be mount.
       * @param renderFunc The function that going to be execute to render html template
       */
S.component=function(e,t){return{type:"SparkyComponent",self:new k(e,t),selfFn:e}},
/**
       * Mount a Sparky Component in the DOM Tree and keep it updated.
       * @param component Sparky Component
       * @param dom The dom element where you want to mount this component
       */
S.mount=function(e,t){this._DEV_&&console.time();var n=e.self,r=e.selfFn.call(window,n,Object.freeze(n.props));r.dom=w.populate(r,e);var o=u(i(),r.dom);o&&(!o.isConnected&&t&&t.appendChild(o),g.listen(),a(o),this._DEV_&&console.timeEnd())},
/**
       * Reconciliate the current DOM with the new DOM Node
       * @param oldNode Node that need to be reconcile
       * @param newNode Node that have the new elements
       */
S.reconciliate=function(e,t){return u(e,t)},S._DEV_=!0,S);
/**
   * Render the html string template to HTML elements
   * @param html Array of HTML String
   * @param computedProps Computed Props used to pass Javascript into template
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
   */function S(){}e.Sparky=T,e.render=function(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];var n=document.createElement("div"),o=[],i=[],a=[],u=function(e){var t="";
// Compact alternative for `for (var i = 0; i < size; i++)`
for(f=e||21;f--;)
// `| 0` is compact and faster alternative for `Math.floor()`
t+=s[64*Math.random()|0];return t}(12),c="string"==typeof e?e:e.map(function(e,t){var n="";return n+=e,r[t]?n=function(e,t,n,r,o,i,a){if("function"==typeof e[t])n.push({index:n.length-1,renderId:a,func:e[t]}),r+="'SparkyFunction#"+a+"#"+(n.length-1)+"'";else if("SparkyRender"==e[t].type){var u=e[t];r=function(e,t){var n=document.createElement("div");return n.appendChild(e.dom),t+=n.innerHTML}(u,r),i.push(u)}else if("SparkyComponent"==e[t].type){var c=e[t];r+="\x3c!-- SparkyComponent#"+c.selfFn.name+"#"+o.length+"#"+a+" --\x3e",o.push(c)}else e[t]=new String(e[t]),e[t].startsWith("<")?r+=e[t]:r+="<span class='computed'>"+e[t]+"</span>";return r}(r,t,o,n,i,a,u):n});if(n.innerHTML=Array.isArray(c)?c.join(""):c,1<n.children.length)throw new TypeError("The render HTML can only had one root node");return{type:"SparkyRender",dom:n.firstElementChild,func:o,nestedComponents:i,children:a,renderId:u}},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=sparky.js.map
