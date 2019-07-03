!function(o){var i={};function n(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=o,n.c=i,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=48)}([function(e,t){
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t,o){var i=e.__flags||(e.__flags=Object.create(null));if(3!==arguments.length)return i[t];i[t]=o}},function(e,t,o){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var i=[];
/*!
 * Chai version
 */t.version="4.2.0",
/*!
 * Assertion Error
 */
t.AssertionError=o(9);
/*!
 * Utils for plugins (not exported)
 */
var n=o(16);t.use=function(e){return~i.indexOf(e)||(e(t,n),i.push(e)),t},
/*!
 * Utility Functions
 */
t.util=n;
/*!
 * Configuration
 */
var r=o(3);t.config=r;
/*!
 * Primary `Assertion` prototype
 */
var a=o(34);t.use(a);
/*!
 * Core Assertions
 */
var s=o(35);t.use(s);
/*!
 * Expect interface
 */
var l=o(36);t.use(l);
/*!
 * Should interface
 */
var c=o(37);t.use(c);
/*!
 * Assert interface
 */
var u=o(38);t.use(u)},function(e,t){
/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t,o){var i=e.__flags||(e.__flags=Object.create(null));for(var n in t.__flags||(t.__flags=Object.create(null)),o=3!==arguments.length||o,i)(o||"object"!==n&&"ssfi"!==n&&"lockSsfi"!==n&&"message"!=n)&&(t.__flags[n]=i[n])}},function(e,t){e.exports={includeStack:!1,showDiff:!0,truncateThreshold:40,useProxy:!0,proxyExcludedKeys:["then","catch","inspect","toJSON"]}},function(e,t,o){var i=o(3);
/*!
 * Chai - isProxyEnabled helper
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */e.exports=function(){return i.useProxy&&"undefined"!=typeof Proxy&&"undefined"!=typeof Reflect}},function(e,t){var i=Object.getOwnPropertyDescriptor(function(){},"length");
/*!
 * Chai - addLengthGuard utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */e.exports=function(e,t,o){return i.configurable&&Object.defineProperty(e,"length",{get:function(){if(o)throw Error("Invalid Chai property: "+t+'.length. Due to a compatibility issue, "length" cannot directly follow "'+t+'". Use "'+t+'.lengthOf" instead.');throw Error("Invalid Chai property: "+t+'.length. See docs for proper usage of "'+t+'".')}}),e}},function(e,t,o){var a=o(3),s=o(0),l=o(13),i=o(4),c=["__flags","__methods","_obj","assert"];e.exports=function(e,r){return i()?new Proxy(e,{get:function e(t,o){if("string"!=typeof o||-1!==a.proxyExcludedKeys.indexOf(o)||Reflect.has(t,o))return-1!==c.indexOf(o)||s(t,"lockSsfi")||s(t,"ssfi",e),Reflect.get(t,o);if(r)throw Error("Invalid Chai property: "+r+"."+o+'. See docs for proper usage of "'+r+'".');var i=null,n=4;throw l(t).forEach(function(e){if(!Object.prototype.hasOwnProperty(e)&&-1===c.indexOf(e)){var t=function(e,t,o){if(Math.abs(e.length-t.length)>=o)return o;for(var i=[],n=0;n<=e.length;n++)i[n]=Array(t.length+1).fill(0),i[n][0]=n;for(var r=0;r<t.length;r++)i[0][r]=r;for(n=1;n<=e.length;n++){var a=e.charCodeAt(n-1);for(r=1;r<=t.length;r++)Math.abs(n-r)>=o?i[n][r]=o:i[n][r]=Math.min(i[n-1][r]+1,i[n][r-1]+1,i[n-1][r-1]+(a===t.charCodeAt(r-1)?0:1))}return i[e.length][t.length]}(o,e,n);t<n&&(i=e,n=t)}}),null!==i?Error("Invalid Chai property: "+o+'. Did you mean "'+i+'"?'):Error("Invalid Chai property: "+o)}}):e}},function(e,t,o){(function(N){e.exports=function(){"use strict";var n="function"==typeof Promise,r="object"==typeof self?self:N,e="undefined"!=typeof Symbol,a="undefined"!=typeof Map,s="undefined"!=typeof Set,l="undefined"!=typeof WeakMap,c="undefined"!=typeof WeakSet,u="undefined"!=typeof DataView,t=e&&void 0!==Symbol.iterator,d=e&&void 0!==Symbol.toStringTag,o=s&&"function"==typeof Set.prototype.entries,i=a&&"function"==typeof Map.prototype.entries,p=o&&Object.getPrototypeOf((new Set).entries()),f=i&&Object.getPrototypeOf((new Map).entries()),h=t&&"function"==typeof Array.prototype[Symbol.iterator],b=h&&Object.getPrototypeOf([][Symbol.iterator]()),M=t&&"function"==typeof String.prototype[Symbol.iterator],w=M&&Object.getPrototypeOf(""[Symbol.iterator]());return function(e){var t=typeof e;if("object"!=t)return t;if(null===e)return"null";if(e===r)return"global";if(Array.isArray(e)&&(!1==d||!(Symbol.toStringTag in e)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&e===window.location)return"Location";if("object"==typeof window.document&&e===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&e===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&e===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&e instanceof window.HTMLElement){if("BLOCKQUOTE"===e.tagName)return"HTMLQuoteElement";if("TD"===e.tagName)return"HTMLTableDataCellElement";if("TH"===e.tagName)return"HTMLTableHeaderCellElement"}}var o=d&&e[Symbol.toStringTag];if("string"==typeof o)return o;var i=Object.getPrototypeOf(e);if(i===RegExp.prototype)return"RegExp";if(i===Date.prototype)return"Date";if(n&&i===Promise.prototype)return"Promise";if(s&&i===Set.prototype)return"Set";if(a&&i===Map.prototype)return"Map";if(c&&i===WeakSet.prototype)return"WeakSet";if(l&&i===WeakMap.prototype)return"WeakMap";if(u&&i===DataView.prototype)return"DataView";if(a&&i===f)return"Map Iterator";if(s&&i===p)return"Set Iterator";if(h&&i===b)return"Array Iterator";if(M&&i===w)return"String Iterator";return null!==i?Object.prototype.toString.call(e).slice(8,-1):"Object"}}()}).call(this,o(19))},function(e,M,t){var w=t(12),N=t(13),y=t(22),O=t(3);e.exports=function(e,t,o,i){return S({showHidden:t,seen:[],stylize:function(e){return e}},e,void 0===o?2:o)};var m=function(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&"nodeType"in e&&1===e.nodeType&&"string"==typeof e.nodeName};function S(t,o,i){if(o&&"function"==typeof o.inspect&&o.inspect!==M.inspect&&(!o.constructor||o.constructor.prototype!==o)){var e=o.inspect(i,t);return"string"!=typeof e&&(e=S(t,e,i)),e}var n=function(e,t){switch(typeof t){case"undefined":return e.stylize("undefined","undefined");case"string":var o="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(o,"string");case"number":return 0===t&&1/t==-1/0?e.stylize("-0","number"):e.stylize(""+t,"number");case"boolean":return e.stylize(""+t,"boolean");case"symbol":return e.stylize(t.toString(),"symbol")}if(null===t)return e.stylize("null","null")}(t,o);if(n)return n;if(m(o)){if("outerHTML"in o)return o.outerHTML;try{if(document.xmlVersion)return(new XMLSerializer).serializeToString(o);var r=document.createElementNS("http://www.w3.org/1999/xhtml","_");r.appendChild(o.cloneNode(!1));var a=r.innerHTML.replace("><",">"+o.innerHTML+"<");return r.innerHTML="",a}catch(e){}}var s,l,c=y(o),u=t.showHidden?N(o):c;if(0===u.length||T(o)&&(1===u.length&&"stack"===u[0]||2===u.length&&"description"===u[0]&&"stack"===u[1])){if("function"==typeof o)return l=(s=w(o))?": "+s:"",t.stylize("[Function"+l+"]","special");if(I(o))return t.stylize(RegExp.prototype.toString.call(o),"regexp");if(W(o))return t.stylize(Date.prototype.toUTCString.call(o),"date");if(T(o))return v(o)}var d,p="",f=!1,h=!1,b=["{","}"];if(function(e){return"object"==typeof e&&/\w+Array]$/.test(k(e))}(o)&&(h=!0,b=["[","]"]),function(e){return Array.isArray(e)||"object"==typeof e&&"[object Array]"===k(e)}(o)&&(f=!0,b=["[","]"]),"function"==typeof o&&(p=" [Function"+(l=(s=w(o))?": "+s:"")+"]"),I(o)&&(p=" "+RegExp.prototype.toString.call(o)),W(o)&&(p=" "+Date.prototype.toUTCString.call(o)),T(o))return v(o);if(0===u.length&&(!f||0==o.length))return b[0]+p+b[1];if(i<0)return I(o)?t.stylize(RegExp.prototype.toString.call(o),"regexp"):t.stylize("[Object]","special");if(t.seen.push(o),f)d=function(t,o,i,n,e){for(var r=[],a=0,s=o.length;a<s;++a)Object.prototype.hasOwnProperty.call(o,String(a))?r.push(g(t,o,i,n,String(a),!0)):r.push("");return e.forEach(function(e){e.match(/^\d+$/)||r.push(g(t,o,i,n,e,!0))}),r}(t,o,i,c,u);else{if(h)return function(e){for(var t="[ ",o=0;o<e.length;++o){if(t.length>=O.truncateThreshold-7){t+="...";break}t+=e[o]+", "}-1!==(t+=" ]").indexOf(",  ]")&&(t=t.replace(",  ]"," ]"));return t}(o);d=u.map(function(e){return g(t,o,i,c,e,f)})}return t.seen.pop(),function(e,t,o){if(60<e.reduce(function(e,t){return e+t.length+1},0))return o[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+o[1];return o[0]+t+" "+e.join(", ")+" "+o[1]}(d,p,b)}function v(e){return"["+Error.prototype.toString.call(e)+"]"}function g(e,t,o,i,n,r){var a,s,l=Object.getOwnPropertyDescriptor(t,n);if(l&&(l.get?s=l.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):l.set&&(s=e.stylize("[Setter]","special"))),i.indexOf(n)<0&&(a="["+n+"]"),s||(e.seen.indexOf(t[n])<0?-1<(s=S(e,t[n],null===o?null:o-1)).indexOf("\n")&&(s=r?s.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+s.split("\n").map(function(e){return"   "+e}).join("\n")):s=e.stylize("[Circular]","special")),void 0===a){if(r&&n.match(/^\d+$/))return s;a=(a=JSON.stringify(""+n)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),e.stylize(a,"string"))}return a+": "+s}function I(e){return"object"==typeof e&&"[object RegExp]"===k(e)}function W(e){return"object"==typeof e&&"[object Date]"===k(e)}function T(e){return"object"==typeof e&&"[object Error]"===k(e)}function k(e){return Object.prototype.toString.call(e)}},function(e,t){
/*!
 * assertion-error
 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */
/*!
 * Return a function that will copy properties from
 * one object to another excluding any originally
 * listed. Returned function will create a new `{}`.
 *
 * @param {String} excluded properties ...
 * @return {Function}
 */
function r(){var i=[].slice.call(arguments);function n(t,o){Object.keys(o).forEach(function(e){~i.indexOf(e)||(t[e]=o[e])})}return function(){for(var e=[].slice.call(arguments),t=0,o={};t<e.length;t++)n(o,e[t]);return o}}function a(e,t,o){var i=r("name","message","stack","constructor","toJSON")(t||{});for(var n in this.message=e||"Unspecified AssertionError",this.showDiff=!1,i)this[n]=i[n];if(o=o||a,Error.captureStackTrace)Error.captureStackTrace(this,o);else try{throw new Error}catch(e){this.stack=e.stack}}
/*!
 * Inherit from Error.prototype
 */
/*!
 * Statically set name
 */
((
/*!
 * Primary Exports
 */
e.exports=a).prototype=Object.create(Error.prototype)).name="AssertionError",(
/*!
 * Ensure correct constructor
 */
a.prototype.constructor=a).prototype.toJSON=function(e){var t=r("constructor","toJSON","stack")({name:this.name},this);return!1!==e&&this.stack&&(t.stack=this.stack),t}},function(e,t){
/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t){return 4<t.length?t[4]:e._obj}},function(e,t,o){
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var n=o(8),r=o(3);e.exports=function(e){var t=n(e),o=Object.prototype.toString.call(e);if(r.truncateThreshold&&t.length>=r.truncateThreshold){if("[object Function]"===o)return e.name&&""!==e.name?"[Function: "+e.name+"]":"[Function]";if("[object Array]"===o)return"[ Array("+e.length+") ]";if("[object Object]"!==o)return t;var i=Object.keys(e);return"{ Object ("+(2<i.length?i.splice(0,2).join(", ")+", ...":i.join(", "))+") }"}return t}},function(e,t,o){"use strict";var i=Function.prototype.toString,n=/\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/;e.exports=function(e){if("function"!=typeof e)return null;var t="";if(void 0===Function.prototype.name&&void 0===e.name){var o=i.call(e).match(n);o&&(t=o[1])}else t=e.name;return t}},function(e,t){
/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e){var t=Object.getOwnPropertyNames(e);function o(e){-1===t.indexOf(e)&&t.push(e)}for(var i=Object.getPrototypeOf(e);null!==i;)Object.getOwnPropertyNames(i).forEach(o),i=Object.getPrototypeOf(i);return t}},function(e,t){
/*!
 * Chai - getOwnEnumerablePropertySymbols utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(t){return"function"!=typeof Object.getOwnPropertySymbols?[]:Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})}},function(e,t,o){e.exports=o(1)},function(e,t,o){
/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Dependencies that are used for multiple exports are required here only once
 */
var i=o(17);
/*!
 * test utility
 */t.test=o(18),
/*!
 * type utility
 */
t.type=o(7),
/*!
 * expectTypes utility
 */
t.expectTypes=o(20),
/*!
 * message utility
 */
t.getMessage=o(21),
/*!
 * actual utility
 */
t.getActual=o(10),
/*!
 * Inspect util
 */
t.inspect=o(8),
/*!
 * Object Display util
 */
t.objDisplay=o(11),
/*!
 * Flag utility
 */
t.flag=o(0),
/*!
 * Flag transferring utility
 */
t.transferFlags=o(2),
/*!
 * Deep equal utility
 */
t.eql=o(23),
/*!
 * Deep path info
 */
t.getPathInfo=i.getPathInfo,
/*!
 * Check if a property exists
 */
t.hasProperty=i.hasProperty,
/*!
 * Function name
 */
t.getName=o(12),
/*!
 * add Property
 */
t.addProperty=o(24),
/*!
 * add Method
 */
t.addMethod=o(25),
/*!
 * overwrite Property
 */
t.overwriteProperty=o(26),
/*!
 * overwrite Method
 */
t.overwriteMethod=o(27),
/*!
 * Add a chainable method
 */
t.addChainableMethod=o(28),
/*!
 * Overwrite chainable method
 */
t.overwriteChainableMethod=o(29),
/*!
 * Compare by inspect method
 */
t.compareByInspect=o(30),
/*!
 * Get own enumerable property symbols method
 */
t.getOwnEnumerablePropertySymbols=o(14),
/*!
 * Get own enumerable properties method
 */
t.getOwnEnumerableProperties=o(31),
/*!
 * Checks error against a given set of criteria
 */
t.checkError=o(32),
/*!
 * Proxify util
 */
t.proxify=o(6),
/*!
 * addLengthGuard util
 */
t.addLengthGuard=o(5),
/*!
 * isProxyEnabled helper
 */
t.isProxyEnabled=o(4),
/*!
 * isNaN method
 */
t.isNaN=o(33)},function(e,t,o){"use strict";function r(e,t){return null!=e&&t in Object(e)}function a(e){return e.replace(/([^\\])\[/g,"$1.[").match(/(\\\.|[^.]+?)+/g).map(function(e){var t=/^\[(\d+)\]$/.exec(e);return t?{i:parseFloat(t[1])}:{p:e.replace(/\\([.\[\]])/g,"$1")}})}function s(e,t,o){var i=e,n=null;o=void 0===o?t.length:o;for(var r=0;r<o;r++){var a=t[r];i&&(i=void 0===a.p?i[a.i]:i[a.p],r===o-1&&(n=i))}return n}function i(e,t){var o=a(t),i=o[o.length-1],n={parent:1<o.length?s(e,o,o.length-1):e,name:i.p||i.i,value:s(e,o)};return n.exists=r(n.parent,n.name),n}e.exports={hasProperty:r,getPathInfo:i,getPathValue:function(e,t){return i(e,t).value},setPathValue:function(e,t,o){return function(e,t,o){for(var i=e,n=o.length,r=null,a=0;a<n;a++){var s=null,l=null;if(r=o[a],a===n-1)i[s=void 0===r.p?r.i:r.p]=t;else if(void 0!==r.p&&i[r.p])i=i[r.p];else if(void 0!==r.i&&i[r.i])i=i[r.i];else{var c=o[a+1];s=void 0===r.p?r.i:r.p,l=void 0===c.p?[]:{},i[s]=l,i=i[s]}}}(e,o,a(t)),e}}},function(e,t,o){
/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var n=o(0);e.exports=function(e,t){var o=n(e,"negate"),i=t[0];return o?!i:i}},function(e,t){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"==typeof window&&(o=window)}e.exports=o},function(e,t,o){
/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var a=o(9),s=o(0),l=o(7);e.exports=function(e,i){var t=s(e,"message"),o=s(e,"ssfi");t=t?t+": ":"",e=s(e,"object"),(i=i.map(function(e){return e.toLowerCase()})).sort();var n=i.map(function(e,t){var o=~["a","e","i","o","u"].indexOf(e.charAt(0))?"an":"a";return(1<i.length&&t===i.length-1?"or ":"")+o+" "+e}).join(", "),r=l(e).toLowerCase();if(!i.some(function(e){return r===e}))throw new a(t+"object tested must be "+n+", but "+r+" given",void 0,o)}},function(e,t,o){
/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var l=o(0),c=o(10),u=o(11);e.exports=function(e,t){var o=l(e,"negate"),i=l(e,"object"),n=t[3],r=c(e,t),a=o?t[2]:t[1],s=l(e,"message");return"function"==typeof a&&(a=a()),a=(a=a||"").replace(/#\{this\}/g,function(){return u(i)}).replace(/#\{act\}/g,function(){return u(r)}).replace(/#\{exp\}/g,function(){return u(n)}),s?s+": "+a:a}},function(e,t){
/*!
 * Chai - getEnumerableProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e){var t=[];for(var o in e)t.push(o);return t}},function(e,t,o){"use strict";
/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */var u=o(7);function i(){this._key="chai/deep-eql__"+Math.random()+Date.now()}i.prototype={get:function(e){return e[this._key]},set:function(e,t){Object.isExtensible(e)&&Object.defineProperty(e,this._key,{value:t,configurable:!0})}};var d="function"==typeof WeakMap?WeakMap:i;
/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function p(e,t,o){if(!o||r(e)||r(t))return null;var i=o.get(e);if(i){var n=i.get(t);if("boolean"==typeof n)return n}return null}
/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function f(e,t,o,i){if(o&&!r(e)&&!r(t)){var n=o.get(e);n?n.set(t,i):((n=new d).set(t,i),o.set(e,n))}}
/*!
 * Primary Export
 */function h(e,t,o){if(o&&o.comparator)return n(e,t,o);var i=b(e,t);return null!==i?i:n(e,t,o)}function b(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t||!r(e)&&!r(t)&&null}
/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/function n(e,t,o){(o=o||{}).memoize=!1!==o.memoize&&(o.memoize||new d);var i=o&&o.comparator,n=p(e,t,o.memoize);if(null!==n)return n;var r=p(t,e,o.memoize);if(null!==r)return r;if(i){var a=i(e,t);if(!1===a||!0===a)return f(e,t,o.memoize,a),a;var s=b(e,t);if(null!==s)return s}var l=u(e);if(l!==u(t))return f(e,t,o.memoize,!1),!1;f(e,t,o.memoize,!0);var c=function(e,t,o,i){switch(o){case"String":case"Number":case"Boolean":case"Date":return h(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":case"Error":return e===t;case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return w(e,t,i);case"RegExp":
/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */
return function(e,t){return e.toString()===t.toString()}
/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */(e,t);case"Generator":
/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
return function(e,t,o){return w(y(e),y(t),o)}
/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */(e,t,i);case"DataView":return w(new Uint8Array(e.buffer),new Uint8Array(t.buffer),i);case"ArrayBuffer":return w(new Uint8Array(e),new Uint8Array(t),i);case"Set":case"Map":return M(e,t,i);default:
/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
return function(e,t,o){var i=O(e),n=O(t);if(i.length&&i.length===n.length)return i.sort(),n.sort(),!1!==w(i,n)&&
/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function(e,t,o,i){var n=o.length;if(0===n)return!0;for(var r=0;r<n;r+=1)if(!1===h(e[o[r]],t[o[r]],i))return!1;return!0}(e,t,i,o);var r=N(e),a=N(t);if(r.length&&r.length===a.length)return r.sort(),a.sort(),w(r,a,o);return 0===i.length&&0===r.length&&0===n.length&&0===a.length}
/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */(e,t,i)}}(e,t,l,o);return f(e,t,o.memoize,c),c}function M(e,t,o){if(e.size!==t.size)return!1;if(0===e.size)return!0;var i=[],n=[];return e.forEach(function(e,t){i.push([e,t])}),t.forEach(function(e,t){n.push([e,t])}),w(i.sort(),n.sort(),o)}
/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function w(e,t,o){var i=e.length;if(i!==t.length)return!1;if(0===i)return!0;for(var n=-1;++n<i;)if(!1===h(e[n],t[n],o))return!1;return!0}
/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */
function N(e){if(function(e){return"undefined"!=typeof Symbol&&"object"==typeof e&&void 0!==Symbol.iterator&&"function"==typeof e[Symbol.iterator]}(e))try{return y(e[Symbol.iterator]())}catch(e){return[]}return[]}
/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function y(e){for(var t=e.next(),o=[t.value];!1===t.done;)t=e.next(),o.push(t.value);return o}
/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function O(e){var t=[];for(var o in e)t.push(o);return t}function r(e){return null===e||"object"!=typeof e}e.exports=h,e.exports.MemoizeMap=d},function(e,t,o){
/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var n=o(1),r=o(0),a=o(4),s=o(2);e.exports=function(e,t,i){i=void 0===i?function(){}:i,Object.defineProperty(e,t,{get:function e(){a()||r(this,"lockSsfi")||r(this,"ssfi",e);var t=i.call(this);if(void 0!==t)return t;var o=new n.Assertion;return s(this,o),o},configurable:!0})}},function(e,t,o){
/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var n=o(5),r=o(1),a=o(0),s=o(6),l=o(2);e.exports=function(e,t,o){var i=function(){a(this,"lockSsfi")||a(this,"ssfi",i);var e=o.apply(this,arguments);if(void 0!==e)return e;var t=new r.Assertion;return l(this,t),t};n(i,t,!1),e[t]=s(i,t)}},function(e,t,o){
/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var a=o(1),s=o(0),l=o(4),c=o(2);e.exports=function(e,t,n){var o=Object.getOwnPropertyDescriptor(e,t),r=function(){};o&&"function"==typeof o.get&&(r=o.get),Object.defineProperty(e,t,{get:function e(){l()||s(this,"lockSsfi")||s(this,"ssfi",e);var t=s(this,"lockSsfi");s(this,"lockSsfi",!0);var o=n(r).call(this);if(s(this,"lockSsfi",t),void 0!==o)return o;var i=new a.Assertion;return c(this,i),i},configurable:!0})}},function(e,t,o){
/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var a=o(5),s=o(1),l=o(0),c=o(6),u=o(2);e.exports=function(e,t,i){var o=e[t],n=function(){throw new Error(t+" is not a function")};o&&"function"==typeof o&&(n=o);var r=function(){l(this,"lockSsfi")||l(this,"ssfi",r);var e=l(this,"lockSsfi");l(this,"lockSsfi",!0);var t=i(n).apply(this,arguments);if(l(this,"lockSsfi",e),void 0!==t)return t;var o=new s.Assertion;return u(this,o),o};a(r,t,!1),e[t]=c(r,t)}},function(e,t,o){function i(){}
/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var r=o(5),a=o(1),s=o(0),l=o(6),c=o(2),u="function"==typeof Object.setPrototypeOf,d=Object.getOwnPropertyNames(i).filter(function(e){var t=Object.getOwnPropertyDescriptor(i,e);return"object"!=typeof t||!t.configurable}),p=Function.prototype.call,f=Function.prototype.apply;e.exports=function(i,t,e,o){"function"!=typeof o&&(o=function(){});var n={method:e,chainingBehavior:o};i.__methods||(i.__methods={}),i.__methods[t]=n,Object.defineProperty(i,t,{get:function(){n.chainingBehavior.call(this);var o=function(){s(this,"lockSsfi")||s(this,"ssfi",o);var e=n.method.apply(this,arguments);if(void 0!==e)return e;var t=new a.Assertion;return c(this,t),t};if(r(o,t,!0),u){var e=Object.create(this);e.call=p,e.apply=f,Object.setPrototypeOf(o,e)}else{Object.getOwnPropertyNames(i).forEach(function(e){if(-1===d.indexOf(e)){var t=Object.getOwnPropertyDescriptor(i,e);Object.defineProperty(o,e,t)}})}return c(this,o),l(o)},configurable:!0})}},function(e,t,o){
/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var s=o(1),l=o(2);e.exports=function(e,t,o,i){var n=e.__methods[t],r=n.chainingBehavior;n.chainingBehavior=function(){var e=i(r).call(this);if(void 0!==e)return e;var t=new s.Assertion;return l(this,t),t};var a=n.method;n.method=function(){var e=o(a).apply(this,arguments);if(void 0!==e)return e;var t=new s.Assertion;return l(this,t),t}}},function(e,t,o){
/*!
 * Chai - compareByInspect utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var i=o(8);e.exports=function(e,t){return i(e)<i(t)?-1:1}},function(e,t,o){
/*!
 * Chai - getOwnEnumerableProperties utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var i=o(14);e.exports=function(e){return Object.keys(e).concat(i(e))}},function(e,t,o){"use strict";var i=/\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\(\/]+)/;function n(e){var t="";if(void 0===e.name){var o=String(e).match(i);o&&(t=o[1])}else t=e.name;return t}e.exports={compatibleInstance:function(e,t){return t instanceof Error&&e===t},compatibleConstructor:function(e,t){return t instanceof Error?e.constructor===t.constructor||e instanceof t.constructor:(t.prototype instanceof Error||t===Error)&&(e.constructor===t||e instanceof t)},compatibleMessage:function(e,t){var o="string"==typeof e?e:e.message;return t instanceof RegExp?t.test(o):"string"==typeof t&&-1!==o.indexOf(t)},getMessage:function(e){var t="";return e&&e.message?t=e.message:"string"==typeof e&&(t=e),t},getConstructorName:function(e){var t=e;return e instanceof Error?t=n(e.constructor):"function"==typeof e&&(t=n(e).trim()||n(new e)),t}}},function(e,t){e.exports=Number.isNaN||
/*!
 * Chai - isNaN utility
 * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
 * MIT Licensed
 */
function(e){return e!=e}},function(e,t,o){
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var d=o(3);e.exports=function(e,l){
/*!
   * Module dependencies.
   */
var c=e.AssertionError,u=l.flag;
/*!
   * Module export.
   */
/*!
   * Assertion Constructor
   *
   * Creates object for chaining.
   *
   * `Assertion` objects contain metadata in the form of flags. Three flags can
   * be assigned during instantiation by passing arguments to this constructor:
   *
   * - `object`: This flag contains the target of the assertion. For example, in
   *   the assertion `expect(numKittens).to.equal(7);`, the `object` flag will
   *   contain `numKittens` so that the `equal` assertion can reference it when
   *   needed.
   *
   * - `message`: This flag contains an optional custom error message to be
   *   prepended to the error message that's generated by the assertion when it
   *   fails.
   *
   * - `ssfi`: This flag stands for "start stack function indicator". It
   *   contains a function reference that serves as the starting point for
   *   removing frames from the stack trace of the error that's created by the
   *   assertion when it fails. The goal is to provide a cleaner stack trace to
   *   end users by removing Chai's internal functions. Note that it only works
   *   in environments that support `Error.captureStackTrace`, and only when
   *   `Chai.config.includeStack` hasn't been set to `false`.
   *
   * - `lockSsfi`: This flag controls whether or not the given `ssfi` flag
   *   should retain its current value, even as assertions are chained off of
   *   this object. This is usually set to `true` when creating a new assertion
   *   from within another assertion. It's also temporarily set to `true` before
   *   an overwritten assertion gets called by the overwriting assertion.
   *
   * @param {Mixed} obj target of the assertion
   * @param {String} msg (optional) custom error message
   * @param {Function} ssfi (optional) starting point for removing stack frames
   * @param {Boolean} lockSsfi (optional) whether or not the ssfi flag is locked
   * @api private
   */
function n(e,t,o,i){return u(this,"ssfi",o||n),u(this,"lockSsfi",i),u(this,"object",e),u(this,"message",t),l.proxify(this)}e.Assertion=n,Object.defineProperty(n,"includeStack",{get:function(){return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),d.includeStack},set:function(e){console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),d.includeStack=e}}),Object.defineProperty(n,"showDiff",{get:function(){return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),d.showDiff},set:function(e){console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),d.showDiff=e}}),n.addProperty=function(e,t){l.addProperty(this.prototype,e,t)},n.addMethod=function(e,t){l.addMethod(this.prototype,e,t)},n.addChainableMethod=function(e,t,o){l.addChainableMethod(this.prototype,e,t,o)},n.overwriteProperty=function(e,t){l.overwriteProperty(this.prototype,e,t)},n.overwriteMethod=function(e,t){l.overwriteMethod(this.prototype,e,t)},n.overwriteChainableMethod=function(e,t,o){l.overwriteChainableMethod(this.prototype,e,t,o)},n.prototype.assert=function(e,t,o,i,n,r){var a=l.test(this,arguments);if(!1!==r&&(r=!0),void 0===i&&void 0===n&&(r=!1),!0!==d.showDiff&&(r=!1),!a){t=l.getMessage(this,arguments);var s=l.getActual(this,arguments);throw new c(t,{actual:s,expected:i,showDiff:r},d.includeStack?this.assert:u(this,"ssfi"))}},
/*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   */
Object.defineProperty(n.prototype,"_obj",{get:function(){return u(this,"object")},set:function(e){u(this,"object",e)}})}},function(e,t){
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,w){var M=e.Assertion,N=e.AssertionError,y=w.flag;function t(e,t){t&&y(this,"message",t),e=e.toLowerCase();var o=y(this,"object"),i=~["a","e","i","o","u"].indexOf(e.charAt(0))?"an ":"a ";this.assert(e===w.type(o).toLowerCase(),"expected #{this} to be "+i+e,"expected #{this} not to be "+i+e)}function h(e,t){return w.isNaN(e)&&w.isNaN(t)||e===t}function o(){y(this,"contains",!0)}function i(o,e){e&&y(this,"message",e);var i=y(this,"object"),t=w.type(i).toLowerCase(),n=y(this,"message"),r=y(this,"negate"),a=y(this,"ssfi"),s=y(this,"deep"),l=s?"deep ":"";n=n?n+": ":"";var c=!1;switch(t){case"string":c=-1!==i.indexOf(o);break;case"weakset":if(s)throw new N(n+"unable to use .deep.include with WeakSet",void 0,a);c=i.has(o);break;case"map":var u=s?w.eql:h;i.forEach(function(e){c=c||u(e,o)});break;case"set":s?i.forEach(function(e){c=c||w.eql(e,o)}):c=i.has(o);break;case"array":c=s?i.some(function(e){return w.eql(e,o)}):-1!==i.indexOf(o);break;default:if(o!==Object(o))throw new N(n+"object tested must be an array, a map, an object, a set, a string, or a weakset, but "+t+" given",void 0,a);var d=Object.keys(o),p=null,f=0;if(d.forEach(function(e){var t=new M(i);if(w.transferFlags(this,t,!0),y(t,"lockSsfi",!0),r&&1!==d.length)try{t.property(e,o[e])}catch(e){if(!w.checkError.compatibleConstructor(e,N))throw e;null===p&&(p=e),f++}else t.property(e,o[e])},this),r&&1<d.length&&f===d.length)throw p;return}this.assert(c,"expected #{this} to "+l+"include "+w.inspect(o),"expected #{this} to not "+l+"include "+w.inspect(o))}function n(){var e=y(this,"object"),t=w.type(e);this.assert("Arguments"===t,"expected #{this} to be arguments but got "+t,"expected #{this} to not be arguments")}function r(e,t){t&&y(this,"message",t);var o=y(this,"object");if(y(this,"deep")){var i=y(this,"lockSsfi");y(this,"lockSsfi",!0),this.eql(e),y(this,"lockSsfi",i)}else this.assert(e===o,"expected #{this} to equal #{exp}","expected #{this} to not equal #{exp}",e,this._obj,!0)}function a(e,t){t&&y(this,"message",t),this.assert(w.eql(e,y(this,"object")),"expected #{this} to deeply equal #{exp}","expected #{this} to not deeply equal #{exp}",e,this._obj,!0)}function s(e,t){t&&y(this,"message",t);var o,i=y(this,"object"),n=y(this,"doLength"),r=y(this,"message"),a=r?r+": ":"",s=y(this,"ssfi"),l=w.type(i).toLowerCase(),c=w.type(e).toLowerCase(),u=!0;if(n&&"map"!==l&&"set"!==l&&new M(i,r,s,!0).to.have.property("length"),n||"date"!==l||"date"===c)if("number"===c||!n&&"number"!==l)if(n||"date"===l||"number"===l)u=!1;else{o=a+"expected "+("string"===l?"'"+i+"'":i)+" to be a number or a date"}else o=a+"the argument to above must be a number";else o=a+"the argument to above must be a date";if(u)throw new N(o,void 0,s);if(n){var d,p="length";d="map"===l||"set"===l?(p="size",i.size):i.length,this.assert(e<d,"expected #{this} to have a "+p+" above #{exp} but got #{act}","expected #{this} to not have a "+p+" above #{exp}",e,d)}else this.assert(e<i,"expected #{this} to be above #{exp}","expected #{this} to be at most #{exp}",e)}function l(e,t){t&&y(this,"message",t);var o,i=y(this,"object"),n=y(this,"doLength"),r=y(this,"message"),a=r?r+": ":"",s=y(this,"ssfi"),l=w.type(i).toLowerCase(),c=w.type(e).toLowerCase(),u=!0;if(n&&"map"!==l&&"set"!==l&&new M(i,r,s,!0).to.have.property("length"),n||"date"!==l||"date"===c)if("number"===c||!n&&"number"!==l)if(n||"date"===l||"number"===l)u=!1;else{o=a+"expected "+("string"===l?"'"+i+"'":i)+" to be a number or a date"}else o=a+"the argument to least must be a number";else o=a+"the argument to least must be a date";if(u)throw new N(o,void 0,s);if(n){var d,p="length";d="map"===l||"set"===l?(p="size",i.size):i.length,this.assert(e<=d,"expected #{this} to have a "+p+" at least #{exp} but got #{act}","expected #{this} to have a "+p+" below #{exp}",e,d)}else this.assert(e<=i,"expected #{this} to be at least #{exp}","expected #{this} to be below #{exp}",e)}function c(e,t){t&&y(this,"message",t);var o,i=y(this,"object"),n=y(this,"doLength"),r=y(this,"message"),a=r?r+": ":"",s=y(this,"ssfi"),l=w.type(i).toLowerCase(),c=w.type(e).toLowerCase(),u=!0;if(n&&"map"!==l&&"set"!==l&&new M(i,r,s,!0).to.have.property("length"),n||"date"!==l||"date"===c)if("number"===c||!n&&"number"!==l)if(n||"date"===l||"number"===l)u=!1;else{o=a+"expected "+("string"===l?"'"+i+"'":i)+" to be a number or a date"}else o=a+"the argument to below must be a number";else o=a+"the argument to below must be a date";if(u)throw new N(o,void 0,s);if(n){var d,p="length";d="map"===l||"set"===l?(p="size",i.size):i.length,this.assert(d<e,"expected #{this} to have a "+p+" below #{exp} but got #{act}","expected #{this} to not have a "+p+" below #{exp}",e,d)}else this.assert(i<e,"expected #{this} to be below #{exp}","expected #{this} to be at least #{exp}",e)}function u(e,t){t&&y(this,"message",t);var o,i=y(this,"object"),n=y(this,"doLength"),r=y(this,"message"),a=r?r+": ":"",s=y(this,"ssfi"),l=w.type(i).toLowerCase(),c=w.type(e).toLowerCase(),u=!0;if(n&&"map"!==l&&"set"!==l&&new M(i,r,s,!0).to.have.property("length"),n||"date"!==l||"date"===c)if("number"===c||!n&&"number"!==l)if(n||"date"===l||"number"===l)u=!1;else{o=a+"expected "+("string"===l?"'"+i+"'":i)+" to be a number or a date"}else o=a+"the argument to most must be a number";else o=a+"the argument to most must be a date";if(u)throw new N(o,void 0,s);if(n){var d,p="length";d="map"===l||"set"===l?(p="size",i.size):i.length,this.assert(d<=e,"expected #{this} to have a "+p+" at most #{exp} but got #{act}","expected #{this} to have a "+p+" above #{exp}",e,d)}else this.assert(i<=e,"expected #{this} to be at most #{exp}","expected #{this} to be above #{exp}",e)}function d(t,e){e&&y(this,"message",e);var o=y(this,"object"),i=y(this,"ssfi"),n=y(this,"message");try{var r=o instanceof t}catch(e){if(e instanceof TypeError)throw new N((n=n?n+": ":"")+"The instanceof assertion needs a constructor but "+w.type(t)+" was given.",void 0,i);throw e}var a=w.getName(t);null===a&&(a="an unnamed constructor"),this.assert(r,"expected #{this} to be an instance of "+a,"expected #{this} to not be an instance of "+a)}function p(e,t,o){o&&y(this,"message",o);var i=y(this,"nested"),n=y(this,"own"),r=y(this,"message"),a=y(this,"object"),s=y(this,"ssfi"),l=typeof e;if(r=r?r+": ":"",i){if("string"!=l)throw new N(r+"the argument to property must be a string when using nested syntax",void 0,s)}else if("string"!=l&&"number"!=l&&"symbol"!=l)throw new N(r+"the argument to property must be a string, number, or symbol",void 0,s);if(i&&n)throw new N(r+'The "nested" and "own" flags cannot be combined.',void 0,s);if(null==a)throw new N(r+"Target cannot be null or undefined.",void 0,s);var c,u=y(this,"deep"),d=y(this,"negate"),p=i?w.getPathInfo(a,e):null,f=i?p.value:a[e],h="";u&&(h+="deep "),n&&(h+="own "),i&&(h+="nested "),h+="property ",c=n?Object.prototype.hasOwnProperty.call(a,e):i?p.exists:w.hasProperty(a,e),d&&1!==arguments.length||this.assert(c,"expected #{this} to have "+h+w.inspect(e),"expected #{this} to not have "+h+w.inspect(e)),1<arguments.length&&this.assert(c&&(u?w.eql(t,f):t===f),"expected #{this} to have "+h+w.inspect(e)+" of #{exp}, but got #{act}","expected #{this} to not have "+h+w.inspect(e)+" of #{act}",t,f),y(this,"object",f)}function f(e,t,o){y(this,"own",!0),p.apply(this,arguments)}function b(e,t,o){"string"==typeof t&&(o=t,t=null),o&&y(this,"message",o);var i=y(this,"object"),n=Object.getOwnPropertyDescriptor(Object(i),e);n&&t?this.assert(w.eql(t,n),"expected the own property descriptor for "+w.inspect(e)+" on #{this} to match "+w.inspect(t)+", got "+w.inspect(n),"expected the own property descriptor for "+w.inspect(e)+" on #{this} to not match "+w.inspect(t),t,n,!0):this.assert(n,"expected #{this} to have an own property descriptor for "+w.inspect(e),"expected #{this} to not have an own property descriptor for "+w.inspect(e)),y(this,"object",n)}function O(){y(this,"doLength",!0)}function m(e,t){t&&y(this,"message",t);var o,i=y(this,"object"),n=w.type(i).toLowerCase(),r=y(this,"message"),a=y(this,"ssfi"),s="length";switch(n){case"map":case"set":s="size",o=i.size;break;default:new M(i,r,a,!0).to.have.property("length"),o=i.length}this.assert(o==e,"expected #{this} to have a "+s+" of #{exp} but got #{act}","expected #{this} to not have a "+s+" of #{act}",e,o)}function S(e,t){t&&y(this,"message",t);var o=y(this,"object");this.assert(e.exec(o),"expected #{this} to match "+e,"expected #{this} not to match "+e)}function v(e){var t,o,i=y(this,"object"),n=w.type(i),r=w.type(e),a=y(this,"ssfi"),s=y(this,"deep"),l="",c=!0,u=y(this,"message"),d=(u=u?u+": ":"")+"when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";if("Map"===n||"Set"===n)l=s?"deeply ":"",o=[],i.forEach(function(e,t){o.push(t)}),"Array"!==r&&(e=Array.prototype.slice.call(arguments));else{switch(o=w.getOwnEnumerableProperties(i),r){case"Array":if(1<arguments.length)throw new N(d,void 0,a);break;case"Object":if(1<arguments.length)throw new N(d,void 0,a);e=Object.keys(e);break;default:e=Array.prototype.slice.call(arguments)}e=e.map(function(e){return"symbol"==typeof e?e:String(e)})}if(!e.length)throw new N(u+"keys required",void 0,a);var p=e.length,f=y(this,"any"),h=y(this,"all"),b=e;if(f||h||(h=!0),f&&(c=b.some(function(t){return o.some(function(e){return s?w.eql(t,e):t===e})})),h&&(c=b.every(function(t){return o.some(function(e){return s?w.eql(t,e):t===e})}),y(this,"contains")||(c=c&&e.length==o.length)),1<p){var M=(e=e.map(function(e){return w.inspect(e)})).pop();h&&(t=e.join(", ")+", and "+M),f&&(t=e.join(", ")+", or "+M)}else t=w.inspect(e[0]);t=(1<p?"keys ":"key ")+t,t=(y(this,"contains")?"contain ":"have ")+t,this.assert(c,"expected #{this} to "+l+t,"expected #{this} to not "+l+t,b.slice(0).sort(w.compareByInspect),o.sort(w.compareByInspect),!0)}function g(e,t,o){o&&y(this,"message",o);var i,n=y(this,"object"),r=y(this,"ssfi"),a=y(this,"message"),s=y(this,"negate")||!1;new M(n,a,r,!0).is.a("function"),(e instanceof RegExp||"string"==typeof e)&&(t=e,e=null);try{n()}catch(e){i=e}var l=void 0===e&&void 0===t,c=Boolean(e&&t),u=!1,d=!1;if(l||!l&&!s){var p="an error";e instanceof Error?p="#{exp}":e&&(p=w.checkError.getConstructorName(e)),this.assert(i,"expected #{this} to throw "+p,"expected #{this} to not throw an error but #{act} was thrown",e&&e.toString(),i instanceof Error?i.toString():"string"==typeof i?i:i&&w.checkError.getConstructorName(i))}if(e&&i){if(e instanceof Error)w.checkError.compatibleInstance(i,e)===s&&(c&&s?u=!0:this.assert(s,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}"+(i&&!s?" but #{act} was thrown":""),e.toString(),i.toString()));w.checkError.compatibleConstructor(i,e)===s&&(c&&s?u=!0:this.assert(s,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}"+(i?" but #{act} was thrown":""),e instanceof Error?e.toString():e&&w.checkError.getConstructorName(e),i instanceof Error?i.toString():i&&w.checkError.getConstructorName(i)))}if(i&&null!=t){var f="including";t instanceof RegExp&&(f="matching"),w.checkError.compatibleMessage(i,t)===s&&(c&&s?d=!0:this.assert(s,"expected #{this} to throw error "+f+" #{exp} but got #{act}","expected #{this} to throw error not "+f+" #{exp}",t,w.checkError.getMessage(i)))}u&&d&&this.assert(s,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}"+(i?" but #{act} was thrown":""),e instanceof Error?e.toString():e&&w.checkError.getConstructorName(e),i instanceof Error?i.toString():i&&w.checkError.getConstructorName(i)),y(this,"object",i)}function I(e,t){t&&y(this,"message",t);var o=y(this,"object"),i=y(this,"itself"),n="function"!=typeof o||i?o[e]:o.prototype[e];this.assert("function"==typeof n,"expected #{this} to respond to "+w.inspect(e),"expected #{this} to not respond to "+w.inspect(e))}function W(e,t){t&&y(this,"message",t);var o=e(y(this,"object"));this.assert(o,"expected #{this} to satisfy "+w.objDisplay(e),"expected #{this} to not satisfy"+w.objDisplay(e),!y(this,"negate"),o)}function T(e,t,o){o&&y(this,"message",o);var i=y(this,"object"),n=y(this,"message"),r=y(this,"ssfi");if(new M(i,n,r,!0).is.a("number"),"number"!=typeof e||"number"!=typeof t)throw new N((n=n?n+": ":"")+"the arguments to closeTo or approximately must be numbers",void 0,r);this.assert(Math.abs(i-e)<=t,"expected #{this} to be close to "+e+" +/- "+t,"expected #{this} not to be close to "+e+" +/- "+t)}function k(e,t,o){o&&y(this,"message",o);var i,n=y(this,"object"),r=y(this,"message"),a=y(this,"ssfi");new M(n,r,a,!0).is.a("function"),i=t?(new M(e,r,a,!0).to.have.property(t),e[t]):(new M(e,r,a,!0).is.a("function"),e()),n();var s=null==t?e():e[t],l=null==t?i:"."+t;y(this,"deltaMsgObj",l),y(this,"initialDeltaValue",i),y(this,"finalDeltaValue",s),y(this,"deltaBehavior","change"),y(this,"realDelta",s!==i),this.assert(i!==s,"expected "+l+" to change","expected "+l+" to not change")}function A(e,t,o){o&&y(this,"message",o);var i,n=y(this,"object"),r=y(this,"message"),a=y(this,"ssfi");new M(n,r,a,!0).is.a("function"),i=t?(new M(e,r,a,!0).to.have.property(t),e[t]):(new M(e,r,a,!0).is.a("function"),e()),new M(i,r,a,!0).is.a("number"),n();var s=null==t?e():e[t],l=null==t?i:"."+t;y(this,"deltaMsgObj",l),y(this,"initialDeltaValue",i),y(this,"finalDeltaValue",s),y(this,"deltaBehavior","increase"),y(this,"realDelta",s-i),this.assert(0<s-i,"expected "+l+" to increase","expected "+l+" to not increase")}function P(e,t,o){o&&y(this,"message",o);var i,n=y(this,"object"),r=y(this,"message"),a=y(this,"ssfi");new M(n,r,a,!0).is.a("function"),i=t?(new M(e,r,a,!0).to.have.property(t),e[t]):(new M(e,r,a,!0).is.a("function"),e()),new M(i,r,a,!0).is.a("number"),n();var s=null==t?e():e[t],l=null==t?i:"."+t;y(this,"deltaMsgObj",l),y(this,"initialDeltaValue",i),y(this,"finalDeltaValue",s),y(this,"deltaBehavior","decrease"),y(this,"realDelta",i-s),this.assert(s-i<0,"expected "+l+" to decrease","expected "+l+" to not decrease")}["to","be","been","is","and","has","have","with","that","which","at","of","same","but","does","still"].forEach(function(e){M.addProperty(e)}),M.addProperty("not",function(){y(this,"negate",!0)}),M.addProperty("deep",function(){y(this,"deep",!0)}),M.addProperty("nested",function(){y(this,"nested",!0)}),M.addProperty("own",function(){y(this,"own",!0)}),M.addProperty("ordered",function(){y(this,"ordered",!0)}),M.addProperty("any",function(){y(this,"any",!0),y(this,"all",!1)}),M.addProperty("all",function(){y(this,"all",!0),y(this,"any",!1)}),M.addChainableMethod("an",t),M.addChainableMethod("a",t),M.addChainableMethod("include",i,o),M.addChainableMethod("contain",i,o),M.addChainableMethod("contains",i,o),M.addChainableMethod("includes",i,o),M.addProperty("ok",function(){this.assert(y(this,"object"),"expected #{this} to be truthy","expected #{this} to be falsy")}),M.addProperty("true",function(){this.assert(!0===y(this,"object"),"expected #{this} to be true","expected #{this} to be false",!y(this,"negate"))}),M.addProperty("false",function(){this.assert(!1===y(this,"object"),"expected #{this} to be false","expected #{this} to be true",!!y(this,"negate"))}),M.addProperty("null",function(){this.assert(null===y(this,"object"),"expected #{this} to be null","expected #{this} not to be null")}),M.addProperty("undefined",function(){this.assert(void 0===y(this,"object"),"expected #{this} to be undefined","expected #{this} not to be undefined")}),M.addProperty("NaN",function(){this.assert(w.isNaN(y(this,"object")),"expected #{this} to be NaN","expected #{this} not to be NaN")}),M.addProperty("exist",function(){var e=y(this,"object");this.assert(null!=e,"expected #{this} to exist","expected #{this} to not exist")}),M.addProperty("empty",function(){var e,t=y(this,"object"),o=y(this,"ssfi"),i=y(this,"message");switch(i=i?i+": ":"",w.type(t).toLowerCase()){case"array":case"string":e=t.length;break;case"map":case"set":e=t.size;break;case"weakmap":case"weakset":throw new N(i+".empty was passed a weak collection",void 0,o);case"function":var n=i+".empty was passed a function "+w.getName(t);throw new N(n.trim(),void 0,o);default:if(t!==Object(t))throw new N(i+".empty was passed non-string primitive "+w.inspect(t),void 0,o);e=Object.keys(t).length}this.assert(0===e,"expected #{this} to be empty","expected #{this} not to be empty")}),M.addProperty("arguments",n),M.addProperty("Arguments",n),M.addMethod("equal",r),M.addMethod("equals",r),M.addMethod("eq",r),M.addMethod("eql",a),M.addMethod("eqls",a),M.addMethod("above",s),M.addMethod("gt",s),M.addMethod("greaterThan",s),M.addMethod("least",l),M.addMethod("gte",l),M.addMethod("below",c),M.addMethod("lt",c),M.addMethod("lessThan",c),M.addMethod("most",u),M.addMethod("lte",u),M.addMethod("within",function(e,t,o){o&&y(this,"message",o);var i,n=y(this,"object"),r=y(this,"doLength"),a=y(this,"message"),s=a?a+": ":"",l=y(this,"ssfi"),c=w.type(n).toLowerCase(),u=w.type(e).toLowerCase(),d=w.type(t).toLowerCase(),p=!0,f="date"===u&&"date"===d?e.toUTCString()+".."+t.toUTCString():e+".."+t;if(r&&"map"!==c&&"set"!==c&&new M(n,a,l,!0).to.have.property("length"),r||"date"!==c||"date"===u&&"date"===d)if("number"===u&&"number"===d||!r&&"number"!==c)if(r||"date"===c||"number"===c)p=!1;else{i=s+"expected "+("string"===c?"'"+n+"'":n)+" to be a number or a date"}else i=s+"the arguments to within must be numbers";else i=s+"the arguments to within must be dates";if(p)throw new N(i,void 0,l);if(r){var h,b="length";h="map"===c||"set"===c?(b="size",n.size):n.length,this.assert(e<=h&&h<=t,"expected #{this} to have a "+b+" within "+f,"expected #{this} to not have a "+b+" within "+f)}else this.assert(e<=n&&n<=t,"expected #{this} to be within "+f,"expected #{this} to not be within "+f)}),M.addMethod("instanceof",d),M.addMethod("instanceOf",d),M.addMethod("property",p),M.addMethod("ownProperty",f),M.addMethod("haveOwnProperty",f),M.addMethod("ownPropertyDescriptor",b),M.addMethod("haveOwnPropertyDescriptor",b),M.addChainableMethod("length",m,O),M.addChainableMethod("lengthOf",m,O),M.addMethod("match",S),M.addMethod("matches",S),M.addMethod("string",function(e,t){t&&y(this,"message",t);var o=y(this,"object"),i=y(this,"message"),n=y(this,"ssfi");new M(o,i,n,!0).is.a("string"),this.assert(~o.indexOf(e),"expected #{this} to contain "+w.inspect(e),"expected #{this} to not contain "+w.inspect(e))}),M.addMethod("keys",v),M.addMethod("key",v),M.addMethod("throw",g),M.addMethod("throws",g),M.addMethod("Throw",g),M.addMethod("respondTo",I),M.addMethod("respondsTo",I),M.addProperty("itself",function(){y(this,"itself",!0)}),M.addMethod("satisfy",W),M.addMethod("satisfies",W),M.addMethod("closeTo",T),M.addMethod("approximately",T),M.addMethod("members",function(e,t){t&&y(this,"message",t);var o=y(this,"object"),i=y(this,"message"),n=y(this,"ssfi");new M(o,i,n,!0).to.be.an("array"),new M(e,i,n,!0).to.be.an("array");var r,a,s,l=y(this,"contains"),c=y(this,"ordered");s=l?(a="expected #{this} to be "+(r=c?"an ordered superset":"a superset")+" of #{exp}","expected #{this} to not be "+r+" of #{exp}"):(a="expected #{this} to have the same "+(r=c?"ordered members":"members")+" as #{exp}","expected #{this} to not have the same "+r+" as #{exp}");var u=y(this,"deep")?w.eql:void 0;this.assert(function(e,i,n,r,a){if(!r){if(e.length!==i.length)return!1;i=i.slice()}return e.every(function(o,e){if(a)return n?n(o,i[e]):o===i[e];if(n)return i.some(function(e,t){return!!n(o,e)&&(r||i.splice(t,1),!0)});var t=i.indexOf(o);return-1!==t&&(r||i.splice(t,1),!0)})}(e,o,u,l,c),a,s,e,o,!0)}),M.addMethod("oneOf",function(e,t){t&&y(this,"message",t);var o=y(this,"object"),i=y(this,"message"),n=y(this,"ssfi");new M(e,i,n,!0).to.be.an("array"),this.assert(-1<e.indexOf(o),"expected #{this} to be one of #{exp}","expected #{this} to not be one of #{exp}",e,o)}),M.addMethod("change",k),M.addMethod("changes",k),M.addMethod("increase",A),M.addMethod("increases",A),M.addMethod("decrease",P),M.addMethod("decreases",P),M.addMethod("by",function(e,t){t&&y(this,"message",t);var o,i=y(this,"deltaMsgObj"),n=y(this,"initialDeltaValue"),r=y(this,"finalDeltaValue"),a=y(this,"deltaBehavior"),s=y(this,"realDelta");o="change"===a?Math.abs(r-n)===Math.abs(e):s===Math.abs(e),this.assert(o,"expected "+i+" to "+a+" by "+e,"expected "+i+" to not "+a+" by "+e)}),M.addProperty("extensible",function(){var e=y(this,"object"),t=e===Object(e)&&Object.isExtensible(e);this.assert(t,"expected #{this} to be extensible","expected #{this} to not be extensible")}),M.addProperty("sealed",function(){var e=y(this,"object"),t=e!==Object(e)||Object.isSealed(e);this.assert(t,"expected #{this} to be sealed","expected #{this} to not be sealed")}),M.addProperty("frozen",function(){var e=y(this,"object"),t=e!==Object(e)||Object.isFrozen(e);this.assert(t,"expected #{this} to be frozen","expected #{this} to not be frozen")}),M.addProperty("finite",function(e){var t=y(this,"object");this.assert("number"==typeof t&&isFinite(t),"expected #{this} to be a finite number","expected #{this} to not be a finite number")})}},function(e,t){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(n,e){n.expect=function(e,t){return new n.Assertion(e,t)},n.expect.fail=function(e,t,o,i){throw arguments.length<2&&(o=e,e=void 0),o=o||"expect.fail()",new n.AssertionError(o,{actual:e,expected:t,operator:i},n.expect.fail)}}},function(e,t){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(r,e){var a=r.Assertion;function t(){Object.defineProperty(Object.prototype,"should",{set:function(e){Object.defineProperty(this,"should",{value:e,enumerable:!0,configurable:!0,writable:!0})},get:function e(){return this instanceof String||this instanceof Number||this instanceof Boolean||"function"==typeof Symbol&&this instanceof Symbol?new a(this.valueOf(),null,e):new a(this,null,e)},configurable:!0});var n={fail:function(e,t,o,i){throw arguments.length<2&&(o=e,e=void 0),o=o||"should.fail()",new r.AssertionError(o,{actual:e,expected:t,operator:i},n.fail)},equal:function(e,t,o){new a(e,o).to.equal(t)},Throw:function(e,t,o,i){new a(e,i).to.Throw(t,o)},exist:function(e,t){new a(e,t).to.exist},not:{}};return n.not.equal=function(e,t,o){new a(e,o).to.not.equal(t)},n.not.Throw=function(e,t,o,i){new a(e,i).to.not.Throw(t,o)},n.not.exist=function(e,t){new a(e,t).to.not.exist},n.throw=n.Throw,n.not.throw=n.not.Throw,n}r.should=t,r.Should=t}},function(e,t){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(a,s){
/*!
   * Chai dependencies.
   */
var l=a.Assertion,c=s.flag,u=a.assert=function(e,t){new l(null,null,a.assert,!0).assert(e,t,"[ negation message unavailable ]")};
/*!
   * Module export.
   */u.fail=function(e,t,o,i){throw arguments.length<2&&(o=e,e=void 0),o=o||"assert.fail()",new a.AssertionError(o,{actual:e,expected:t,operator:i},u.fail)},u.isOk=function(e,t){new l(e,t,u.isOk,!0).is.ok},u.isNotOk=function(e,t){new l(e,t,u.isNotOk,!0).is.not.ok},u.equal=function(e,t,o){var i=new l(e,o,u.equal,!0);i.assert(t==c(i,"object"),"expected #{this} to equal #{exp}","expected #{this} to not equal #{act}",t,e,!0)},u.notEqual=function(e,t,o){var i=new l(e,o,u.notEqual,!0);i.assert(t!=c(i,"object"),"expected #{this} to not equal #{exp}","expected #{this} to equal #{act}",t,e,!0)},u.strictEqual=function(e,t,o){new l(e,o,u.strictEqual,!0).to.equal(t)},u.notStrictEqual=function(e,t,o){new l(e,o,u.notStrictEqual,!0).to.not.equal(t)},u.deepEqual=u.deepStrictEqual=function(e,t,o){new l(e,o,u.deepEqual,!0).to.eql(t)},u.notDeepEqual=function(e,t,o){new l(e,o,u.notDeepEqual,!0).to.not.eql(t)},u.isAbove=function(e,t,o){new l(e,o,u.isAbove,!0).to.be.above(t)},u.isAtLeast=function(e,t,o){new l(e,o,u.isAtLeast,!0).to.be.least(t)},u.isBelow=function(e,t,o){new l(e,o,u.isBelow,!0).to.be.below(t)},u.isAtMost=function(e,t,o){new l(e,o,u.isAtMost,!0).to.be.most(t)},u.isTrue=function(e,t){new l(e,t,u.isTrue,!0).is.true},u.isNotTrue=function(e,t){new l(e,t,u.isNotTrue,!0).to.not.equal(!0)},u.isFalse=function(e,t){new l(e,t,u.isFalse,!0).is.false},u.isNotFalse=function(e,t){new l(e,t,u.isNotFalse,!0).to.not.equal(!1)},u.isNull=function(e,t){new l(e,t,u.isNull,!0).to.equal(null)},u.isNotNull=function(e,t){new l(e,t,u.isNotNull,!0).to.not.equal(null)},u.isNaN=function(e,t){new l(e,t,u.isNaN,!0).to.be.NaN},u.isNotNaN=function(e,t){new l(e,t,u.isNotNaN,!0).not.to.be.NaN},u.exists=function(e,t){new l(e,t,u.exists,!0).to.exist},u.notExists=function(e,t){new l(e,t,u.notExists,!0).to.not.exist},u.isUndefined=function(e,t){new l(e,t,u.isUndefined,!0).to.equal(void 0)},u.isDefined=function(e,t){new l(e,t,u.isDefined,!0).to.not.equal(void 0)},u.isFunction=function(e,t){new l(e,t,u.isFunction,!0).to.be.a("function")},u.isNotFunction=function(e,t){new l(e,t,u.isNotFunction,!0).to.not.be.a("function")},u.isObject=function(e,t){new l(e,t,u.isObject,!0).to.be.a("object")},u.isNotObject=function(e,t){new l(e,t,u.isNotObject,!0).to.not.be.a("object")},u.isArray=function(e,t){new l(e,t,u.isArray,!0).to.be.an("array")},u.isNotArray=function(e,t){new l(e,t,u.isNotArray,!0).to.not.be.an("array")},u.isString=function(e,t){new l(e,t,u.isString,!0).to.be.a("string")},u.isNotString=function(e,t){new l(e,t,u.isNotString,!0).to.not.be.a("string")},u.isNumber=function(e,t){new l(e,t,u.isNumber,!0).to.be.a("number")},u.isNotNumber=function(e,t){new l(e,t,u.isNotNumber,!0).to.not.be.a("number")},u.isFinite=function(e,t){new l(e,t,u.isFinite,!0).to.be.finite},u.isBoolean=function(e,t){new l(e,t,u.isBoolean,!0).to.be.a("boolean")},u.isNotBoolean=function(e,t){new l(e,t,u.isNotBoolean,!0).to.not.be.a("boolean")},u.typeOf=function(e,t,o){new l(e,o,u.typeOf,!0).to.be.a(t)},u.notTypeOf=function(e,t,o){new l(e,o,u.notTypeOf,!0).to.not.be.a(t)},u.instanceOf=function(e,t,o){new l(e,o,u.instanceOf,!0).to.be.instanceOf(t)},u.notInstanceOf=function(e,t,o){new l(e,o,u.notInstanceOf,!0).to.not.be.instanceOf(t)},u.include=function(e,t,o){new l(e,o,u.include,!0).include(t)},u.notInclude=function(e,t,o){new l(e,o,u.notInclude,!0).not.include(t)},u.deepInclude=function(e,t,o){new l(e,o,u.deepInclude,!0).deep.include(t)},u.notDeepInclude=function(e,t,o){new l(e,o,u.notDeepInclude,!0).not.deep.include(t)},u.nestedInclude=function(e,t,o){new l(e,o,u.nestedInclude,!0).nested.include(t)},u.notNestedInclude=function(e,t,o){new l(e,o,u.notNestedInclude,!0).not.nested.include(t)},u.deepNestedInclude=function(e,t,o){new l(e,o,u.deepNestedInclude,!0).deep.nested.include(t)},u.notDeepNestedInclude=function(e,t,o){new l(e,o,u.notDeepNestedInclude,!0).not.deep.nested.include(t)},u.ownInclude=function(e,t,o){new l(e,o,u.ownInclude,!0).own.include(t)},u.notOwnInclude=function(e,t,o){new l(e,o,u.notOwnInclude,!0).not.own.include(t)},u.deepOwnInclude=function(e,t,o){new l(e,o,u.deepOwnInclude,!0).deep.own.include(t)},u.notDeepOwnInclude=function(e,t,o){new l(e,o,u.notDeepOwnInclude,!0).not.deep.own.include(t)},u.match=function(e,t,o){new l(e,o,u.match,!0).to.match(t)},u.notMatch=function(e,t,o){new l(e,o,u.notMatch,!0).to.not.match(t)},u.property=function(e,t,o){new l(e,o,u.property,!0).to.have.property(t)},u.notProperty=function(e,t,o){new l(e,o,u.notProperty,!0).to.not.have.property(t)},u.propertyVal=function(e,t,o,i){new l(e,i,u.propertyVal,!0).to.have.property(t,o)},u.notPropertyVal=function(e,t,o,i){new l(e,i,u.notPropertyVal,!0).to.not.have.property(t,o)},u.deepPropertyVal=function(e,t,o,i){new l(e,i,u.deepPropertyVal,!0).to.have.deep.property(t,o)},u.notDeepPropertyVal=function(e,t,o,i){new l(e,i,u.notDeepPropertyVal,!0).to.not.have.deep.property(t,o)},u.ownProperty=function(e,t,o){new l(e,o,u.ownProperty,!0).to.have.own.property(t)},u.notOwnProperty=function(e,t,o){new l(e,o,u.notOwnProperty,!0).to.not.have.own.property(t)},u.ownPropertyVal=function(e,t,o,i){new l(e,i,u.ownPropertyVal,!0).to.have.own.property(t,o)},u.notOwnPropertyVal=function(e,t,o,i){new l(e,i,u.notOwnPropertyVal,!0).to.not.have.own.property(t,o)},u.deepOwnPropertyVal=function(e,t,o,i){new l(e,i,u.deepOwnPropertyVal,!0).to.have.deep.own.property(t,o)},u.notDeepOwnPropertyVal=function(e,t,o,i){new l(e,i,u.notDeepOwnPropertyVal,!0).to.not.have.deep.own.property(t,o)},u.nestedProperty=function(e,t,o){new l(e,o,u.nestedProperty,!0).to.have.nested.property(t)},u.notNestedProperty=function(e,t,o){new l(e,o,u.notNestedProperty,!0).to.not.have.nested.property(t)},u.nestedPropertyVal=function(e,t,o,i){new l(e,i,u.nestedPropertyVal,!0).to.have.nested.property(t,o)},u.notNestedPropertyVal=function(e,t,o,i){new l(e,i,u.notNestedPropertyVal,!0).to.not.have.nested.property(t,o)},u.deepNestedPropertyVal=function(e,t,o,i){new l(e,i,u.deepNestedPropertyVal,!0).to.have.deep.nested.property(t,o)},u.notDeepNestedPropertyVal=function(e,t,o,i){new l(e,i,u.notDeepNestedPropertyVal,!0).to.not.have.deep.nested.property(t,o)},u.lengthOf=function(e,t,o){new l(e,o,u.lengthOf,!0).to.have.lengthOf(t)},u.hasAnyKeys=function(e,t,o){new l(e,o,u.hasAnyKeys,!0).to.have.any.keys(t)},u.hasAllKeys=function(e,t,o){new l(e,o,u.hasAllKeys,!0).to.have.all.keys(t)},u.containsAllKeys=function(e,t,o){new l(e,o,u.containsAllKeys,!0).to.contain.all.keys(t)},u.doesNotHaveAnyKeys=function(e,t,o){new l(e,o,u.doesNotHaveAnyKeys,!0).to.not.have.any.keys(t)},u.doesNotHaveAllKeys=function(e,t,o){new l(e,o,u.doesNotHaveAllKeys,!0).to.not.have.all.keys(t)},u.hasAnyDeepKeys=function(e,t,o){new l(e,o,u.hasAnyDeepKeys,!0).to.have.any.deep.keys(t)},u.hasAllDeepKeys=function(e,t,o){new l(e,o,u.hasAllDeepKeys,!0).to.have.all.deep.keys(t)},u.containsAllDeepKeys=function(e,t,o){new l(e,o,u.containsAllDeepKeys,!0).to.contain.all.deep.keys(t)},u.doesNotHaveAnyDeepKeys=function(e,t,o){new l(e,o,u.doesNotHaveAnyDeepKeys,!0).to.not.have.any.deep.keys(t)},u.doesNotHaveAllDeepKeys=function(e,t,o){new l(e,o,u.doesNotHaveAllDeepKeys,!0).to.not.have.all.deep.keys(t)},u.throws=function(e,t,o,i){("string"==typeof t||t instanceof RegExp)&&(o=t,t=null);var n=new l(e,i,u.throws,!0).to.throw(t,o);return c(n,"object")},u.doesNotThrow=function(e,t,o,i){("string"==typeof t||t instanceof RegExp)&&(o=t,t=null),new l(e,i,u.doesNotThrow,!0).to.not.throw(t,o)},u.operator=function(e,t,o,i){var n;switch(t){case"==":n=e==o;break;case"===":n=e===o;break;case">":n=o<e;break;case">=":n=o<=e;break;case"<":n=e<o;break;case"<=":n=e<=o;break;case"!=":n=e!=o;break;case"!==":n=e!==o;break;default:throw i=i?i+": ":i,new a.AssertionError(i+'Invalid operator "'+t+'"',void 0,u.operator)}var r=new l(n,i,u.operator,!0);r.assert(!0===c(r,"object"),"expected "+s.inspect(e)+" to be "+t+" "+s.inspect(o),"expected "+s.inspect(e)+" to not be "+t+" "+s.inspect(o))},u.closeTo=function(e,t,o,i){new l(e,i,u.closeTo,!0).to.be.closeTo(t,o)},u.approximately=function(e,t,o,i){new l(e,i,u.approximately,!0).to.be.approximately(t,o)},u.sameMembers=function(e,t,o){new l(e,o,u.sameMembers,!0).to.have.same.members(t)},u.notSameMembers=function(e,t,o){new l(e,o,u.notSameMembers,!0).to.not.have.same.members(t)},u.sameDeepMembers=function(e,t,o){new l(e,o,u.sameDeepMembers,!0).to.have.same.deep.members(t)},u.notSameDeepMembers=function(e,t,o){new l(e,o,u.notSameDeepMembers,!0).to.not.have.same.deep.members(t)},u.sameOrderedMembers=function(e,t,o){new l(e,o,u.sameOrderedMembers,!0).to.have.same.ordered.members(t)},u.notSameOrderedMembers=function(e,t,o){new l(e,o,u.notSameOrderedMembers,!0).to.not.have.same.ordered.members(t)},u.sameDeepOrderedMembers=function(e,t,o){new l(e,o,u.sameDeepOrderedMembers,!0).to.have.same.deep.ordered.members(t)},u.notSameDeepOrderedMembers=function(e,t,o){new l(e,o,u.notSameDeepOrderedMembers,!0).to.not.have.same.deep.ordered.members(t)},u.includeMembers=function(e,t,o){new l(e,o,u.includeMembers,!0).to.include.members(t)},u.notIncludeMembers=function(e,t,o){new l(e,o,u.notIncludeMembers,!0).to.not.include.members(t)},u.includeDeepMembers=function(e,t,o){new l(e,o,u.includeDeepMembers,!0).to.include.deep.members(t)},u.notIncludeDeepMembers=function(e,t,o){new l(e,o,u.notIncludeDeepMembers,!0).to.not.include.deep.members(t)},u.includeOrderedMembers=function(e,t,o){new l(e,o,u.includeOrderedMembers,!0).to.include.ordered.members(t)},u.notIncludeOrderedMembers=function(e,t,o){new l(e,o,u.notIncludeOrderedMembers,!0).to.not.include.ordered.members(t)},u.includeDeepOrderedMembers=function(e,t,o){new l(e,o,u.includeDeepOrderedMembers,!0).to.include.deep.ordered.members(t)},u.notIncludeDeepOrderedMembers=function(e,t,o){new l(e,o,u.notIncludeDeepOrderedMembers,!0).to.not.include.deep.ordered.members(t)},u.oneOf=function(e,t,o){new l(e,o,u.oneOf,!0).to.be.oneOf(t)},u.changes=function(e,t,o,i){3===arguments.length&&"function"==typeof t&&(i=o,o=null),new l(e,i,u.changes,!0).to.change(t,o)},u.changesBy=function(e,t,o,i,n){if(4===arguments.length&&"function"==typeof t){var r=i;i=o,n=r}else 3===arguments.length&&(i=o,o=null);new l(e,n,u.changesBy,!0).to.change(t,o).by(i)},u.doesNotChange=function(e,t,o,i){return 3===arguments.length&&"function"==typeof t&&(i=o,o=null),new l(e,i,u.doesNotChange,!0).to.not.change(t,o)},u.changesButNotBy=function(e,t,o,i,n){if(4===arguments.length&&"function"==typeof t){var r=i;i=o,n=r}else 3===arguments.length&&(i=o,o=null);new l(e,n,u.changesButNotBy,!0).to.change(t,o).but.not.by(i)},u.increases=function(e,t,o,i){return 3===arguments.length&&"function"==typeof t&&(i=o,o=null),new l(e,i,u.increases,!0).to.increase(t,o)},u.increasesBy=function(e,t,o,i,n){if(4===arguments.length&&"function"==typeof t){var r=i;i=o,n=r}else 3===arguments.length&&(i=o,o=null);new l(e,n,u.increasesBy,!0).to.increase(t,o).by(i)},u.doesNotIncrease=function(e,t,o,i){return 3===arguments.length&&"function"==typeof t&&(i=o,o=null),new l(e,i,u.doesNotIncrease,!0).to.not.increase(t,o)},u.increasesButNotBy=function(e,t,o,i,n){if(4===arguments.length&&"function"==typeof t){var r=i;i=o,n=r}else 3===arguments.length&&(i=o,o=null);new l(e,n,u.increasesButNotBy,!0).to.increase(t,o).but.not.by(i)},u.decreases=function(e,t,o,i){return 3===arguments.length&&"function"==typeof t&&(i=o,o=null),new l(e,i,u.decreases,!0).to.decrease(t,o)},u.decreasesBy=function(e,t,o,i,n){if(4===arguments.length&&"function"==typeof t){var r=i;i=o,n=r}else 3===arguments.length&&(i=o,o=null);new l(e,n,u.decreasesBy,!0).to.decrease(t,o).by(i)},u.doesNotDecrease=function(e,t,o,i){return 3===arguments.length&&"function"==typeof t&&(i=o,o=null),new l(e,i,u.doesNotDecrease,!0).to.not.decrease(t,o)},u.doesNotDecreaseBy=function(e,t,o,i,n){if(4===arguments.length&&"function"==typeof t){var r=i;i=o,n=r}else 3===arguments.length&&(i=o,o=null);return new l(e,n,u.doesNotDecreaseBy,!0).to.not.decrease(t,o).by(i)},u.decreasesButNotBy=function(e,t,o,i,n){if(4===arguments.length&&"function"==typeof t){var r=i;i=o,n=r}else 3===arguments.length&&(i=o,o=null);new l(e,n,u.decreasesButNotBy,!0).to.decrease(t,o).but.not.by(i)}
/*!
   * ### .ifError(object)
   *
   * Asserts if value is not a false value, and throws if it is a true value.
   * This is added to allow for chai to be a drop-in replacement for Node's
   * assert class.
   *
   *     var err = new Error('I am a custom error');
   *     assert.ifError(err); // Rethrows err!
   *
   * @name ifError
   * @param {Object} object
   * @namespace Assert
   * @api public
   */,u.ifError=function(e){if(e)throw e},u.isExtensible=function(e,t){new l(e,t,u.isExtensible,!0).to.be.extensible},u.isNotExtensible=function(e,t){new l(e,t,u.isNotExtensible,!0).to.not.be.extensible},u.isSealed=function(e,t){new l(e,t,u.isSealed,!0).to.be.sealed},u.isNotSealed=function(e,t){new l(e,t,u.isNotSealed,!0).to.not.be.sealed},u.isFrozen=function(e,t){new l(e,t,u.isFrozen,!0).to.be.frozen},u.isNotFrozen=function(e,t){new l(e,t,u.isNotFrozen,!0).to.not.be.frozen},u.isEmpty=function(e,t){new l(e,t,u.isEmpty,!0).to.be.empty},u.isNotEmpty=function(e,t){new l(e,t,u.isNotEmpty,!0).to.not.be.empty},
/*!
   * Aliases.
   */
function e(t,o){return u[o]=u[t],e}("isOk","ok")("isNotOk","notOk")("throws","throw")("throws","Throw")("isExtensible","extensible")("isNotExtensible","notExtensible")("isSealed","sealed")("isNotSealed","notSealed")("isFrozen","frozen")("isNotFrozen","notFrozen")("isEmpty","empty")("isNotEmpty","notEmpty")}},function(e,t,o){"use strict";e.exports=function(e,t,o){if(e.name!==t||"UNKNOWN"===e.name)return NaN;for(var i=e.version.split("."),n=0,r=i.length;n<r;n++)i[n]=parseInt(i[n],10);for(var a=o.split("."),s=0,l=a.length;s<l;s++)a[s]=parseInt(a[s],10);for(var c=0,u=i.length;c<u;c++){if(c>=a.length)return 1;if(i[c].length||isNaN(i[c])||a[c].length||isNaN(a[c]))return NaN;if(i[c]<a[c])return-1;if(i[c]>a[c])return 1}return i.length<a.length?-1:0}},function(e,t,o){"use strict";var i=o(39);e.exports=function(){var o={};return Object.defineProperties(o,{lt:{enumerable:!0,value:function(e,t){return i(o,e,t)<0}},lte:{enumerable:!0,value:function(e,t){return i(o,e,t)<=0}},gt:{enumerable:!0,value:function(e,t){return 0<i(o,e,t)}},gte:{enumerable:!0,value:function(e,t){return 0<=i(o,e,t)}},eq:{enumerable:!0,value:function(e,t){return 0===i(o,e,t)}},ne:{enumerable:!0,value:function(e,t){return 0!==i(o,e,t)}}}),o}},function(e,t,o){"use strict";e.exports=function(e,t,o){o=o||1;var i=e.indexOf(t);if(i<0)return null;var n=e.slice(i+t.length);n=n.replace(/[^0-9)]*/,"");for(var r="",a=0;a<o;a++){var s=/[^0-9]/.exec(n);s&&0<s.index&&(r+="."+n.slice(0,s.index),n=n.slice(s.index+1))}return r.slice(1)}},function(e,t,o){"use strict";e.exports=function(e,t,o,i){Object.defineProperty(e,"name",{enumerable:!0,value:o}),Object.defineProperty(e,"version",{enumerable:!0,value:i}),Object.defineProperty(e,o,{enumerable:!0,value:!0});for(var n=0,r=t.length;n<r;n++)t[n]!==o&&Object.defineProperty(e,t[n],{enumerable:!0,value:!1})}},function(e){e.exports=JSON.parse('[{"id":"","ua":["UNKNOWN",""],"os":["UNKNOWN",""]},{"id":"AAA BBB CCC 12.3","ua":["UNKNOWN",""],"os":["UNKNOWN",""]},{"id":"Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586","ua":["EDGE","13"],"os":["WINNT","10.0"]},{"id":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586","ua":["EDGE","13"],"os":["WINNT","10.0"]},{"id":"Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko","ua":["MSIE","11"],"os":["WINNT","10.0"]},{"id":"Mozilla/5.0 (Windows NT 10.0; Trident/7.0; Touch; rv:11.0) like Gecko","ua":["MSIE","11"],"os":["WINNT","10.0"]},{"id":"Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko","ua":["MSIE","11"],"os":["WINNT","10.0"]},{"id":"Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; Touch; rv:11.0) like Gecko","ua":["MSIE","11"],"os":["WINNT","10.0"]},{"id":"Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko","ua":["MSIE","11"],"os":["WINNT","6.3"]},{"id":"Mozilla/5.0 (Windows NT 6.3; Trident/7.0; Touch; rv:11.0) like Gecko","ua":["MSIE","11"],"os":["WINNT","6.3"]},{"id":"Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko","ua":["MSIE","11"],"os":["WINNT","6.3"]},{"id":"Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; rv:11.0) like Gecko","ua":["MSIE","11"],"os":["WINNT","6.3"]},{"id":"Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; rv:11.0) like Gecko","ua":["MSIE","11"],"os":["WINNT","6.3"]},{"id":"Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; Touch; rv:11.0) like Gecko","ua":["MSIE","11"],"os":["WINNT","6.3"]},{"id":"Mozilla/5.0 (Windows NT 6.3; ARM; Trident/7.0; rv:11.0) like Gecko","ua":["MSIE","11"],"os":["WINNT","6.3"]},{"id":"Mozilla/5.0 (Windows NT 6.3; ARM; Trident/7.0; Touch; rv:11.0) like Gecko","ua":["MSIE","11"],"os":["WINNT","6.3"]},{"id":"Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko","ua":["MSIE","11"],"os":["WINNT","6.1"]},{"id":"Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko","ua":["MSIE","11"],"os":["WINNT","6.1"]},{"id":"Mozilla/5.0 (Windows NT 6.1; Win64; x64; Trident/7.0; rv:11.0) like Gecko","ua":["MSIE","11"],"os":["WINNT","6.1"]},{"id":"Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)","ua":["MSIE","10"],"os":["WINNT","6.2"]},{"id":"Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; Touch)","ua":["MSIE","10"],"os":["WINNT","6.2"]},{"id":"Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0)","ua":["MSIE","10"],"os":["WINNT","6.2"]},{"id":"Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0; Touch)","ua":["MSIE","10"],"os":["WINNT","6.2"]},{"id":"Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Win64; x64; Trident/6.0)","ua":["MSIE","10"],"os":["WINNT","6.2"]},{"id":"Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Win64; x64; Trident/6.0; Touch)","ua":["MSIE","10"],"os":["WINNT","6.2"]},{"id":"Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; ARM; Trident/6.0)","ua":["MSIE","10"],"os":["WINNT","6.2"]},{"id":"Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; ARM; Trident/6.0; Touch)","ua":["MSIE","10"],"os":["WINNT","6.2"]},{"id":"Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)","ua":["MSIE","10"],"os":["WINNT","6.1"]},{"id":"Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)","ua":["MSIE","10"],"os":["WINNT","6.1"]},{"id":"Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Win64; x64; Trident/6.0)","ua":["MSIE","10"],"os":["WINNT","6.1"]},{"id":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)","ua":["MSIE","9"],"os":["WINNT","6.1"]},{"id":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)","ua":["MSIE","9"],"os":["WINNT","6.1"]},{"id":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)","ua":["MSIE","9"],"os":["WINNT","6.1"]},{"id":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/5.0)","ua":["MSIE","9"],"os":["WINNT","6.0"]},{"id":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; WOW64; Trident/5.0)","ua":["MSIE","9"],"os":["WINNT","6.0"]},{"id":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Win64; x64; Trident/5.0)","ua":["MSIE","9"],"os":["WINNT","6.0"]},{"id":"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)","ua":["MSIE","8"],"os":["WINNT","6.1"]},{"id":"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0)","ua":["MSIE","8"],"os":["WINNT","6.1"]},{"id":"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Win64; x64; Trident/4.0)","ua":["MSIE","8"],"os":["WINNT","6.1"]},{"id":"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)","ua":["MSIE","8"],"os":["WINNT","6.0"]},{"id":"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; WOW64; Trident/4.0)","ua":["MSIE","8"],"os":["WINNT","6.0"]},{"id":"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Win64; x64; Trident/4.0)","ua":["MSIE","8"],"os":["WINNT","6.0"]},{"id":"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0)","ua":["MSIE","8"],"os":["WINNT","5.1"]},{"id":"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.2; WOW64; Trident/4.0)","ua":["MSIE","8"],"os":["WINNT","5.2"]},{"id":"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.2; Win64; x64; Trident/4.0)","ua":["MSIE","8"],"os":["WINNT","5.2"]},{"id":"Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1)","ua":["MSIE","7"],"os":["WINNT","6.0"]},{"id":"Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; WOW64; Trident/4.0; SLCC1)","ua":["MSIE","7"],"os":["WINNT","6.0"]},{"id":"Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Win64; x64; Trident/4.0; SLCC1)","ua":["MSIE","7"],"os":["WINNT","6.0"]},{"id":"Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)","ua":["MSIE","7"],"os":["WINNT","5.1"]},{"id":"Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.2)","ua":["MSIE","7"],"os":["WINNT","5.2"]},{"id":"Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.2; Win64; x64)","ua":["MSIE","7"],"os":["WINNT","5.2"]},{"id":"Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)","ua":["MSIE","6"],"os":["WINNT","5.1"]},{"id":"Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; WOW64; SV1)","ua":["MSIE","6"],"os":["WINNT","5.2"]},{"id":"Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; Win64; x64; SV1)","ua":["MSIE","6"],"os":["WINNT","5.2"]},{"id":"Mozilla/5.0 (Windows NT 10.0; rv:43.0) Gecko/20100101 Firefox/43.0","ua":["FIREFOX","43"],"os":["WINNT","10.0"]},{"id":"Mozilla/5.0 (Windows NT 10.0; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0","ua":["FIREFOX","43"],"os":["WINNT","10.0"]},{"id":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:43.0) Gecko/20100101 Firefox/43.0","ua":["FIREFOX","43"],"os":["WINNT","10.0"]},{"id":"Mozilla/5.0 (Windows NT 6.3; rv:43.0) Gecko/20100101 Firefox/43.0","ua":["FIREFOX","43"],"os":["WINNT","6.3"]},{"id":"Mozilla/5.0 (Windows NT 6.3; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0","ua":["FIREFOX","43"],"os":["WINNT","6.3"]},{"id":"Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:43.0) Gecko/20100101 Firefox/43.0","ua":["FIREFOX","43"],"os":["WINNT","6.3"]},{"id":"Mozilla/5.0 (Windows NT 6.2; rv:43.0) Gecko/20100101 Firefox/43.0","ua":["FIREFOX","43"],"os":["WINNT","6.2"]},{"id":"Mozilla/5.0 (Windows NT 6.2; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0","ua":["FIREFOX","43"],"os":["WINNT","6.2"]},{"id":"Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:43.0) Gecko/20100101 Firefox/43.0","ua":["FIREFOX","43"],"os":["WINNT","6.2"]},{"id":"Mozilla/5.0 (Windows NT 6.1; rv:43.0) Gecko/20100101 Firefox/43.0","ua":["FIREFOX","43"],"os":["WINNT","6.1"]},{"id":"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0","ua":["FIREFOX","43"],"os":["WINNT","6.1"]},{"id":"Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:43.0) Gecko/20100101 Firefox/43.0","ua":["FIREFOX","43"],"os":["WINNT","6.1"]},{"id":"Mozilla/5.0 (Windows NT 6.0; rv:43.0) Gecko/20100101 Firefox/43.0","ua":["FIREFOX","43"],"os":["WINNT","6.0"]},{"id":"Mozilla/5.0 (Windows NT 6.0; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0","ua":["FIREFOX","43"],"os":["WINNT","6.0"]},{"id":"Mozilla/5.0 (Windows NT 5.1; rv:43.0) Gecko/20100101 Firefox/43.0","ua":["FIREFOX","43"],"os":["WINNT","5.1"]},{"id":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:43.0) Gecko/20100101 Firefox/43.0","ua":["FIREFOX","43"],"os":["MACOS","10.11"]},{"id":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:43.0) Gecko/20100101 Firefox/43.0","ua":["FIREFOX","43"],"os":["MACOS","10.10"]},{"id":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:43.0) Gecko/20100101 Firefox/43.0","ua":["FIREFOX","43"],"os":["MACOS","10.9"]},{"id":"Mozilla/5.0 (X11; Linux i686; rv:43.0) Gecko/20100101 Firefox/43.0","ua":["FIREFOX","43"],"os":["LINUX",""]},{"id":"Mozilla/5.0 (X11; Linux x86_64; rv:43.0) Gecko/20100101 Firefox/43.0","ua":["FIREFOX","43"],"os":["LINUX",""]},{"id":"Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:43.0) Gecko/20100101 Firefox/43.0","ua":["FIREFOX","43"],"os":["LINUX",""]},{"id":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:43.0) Gecko/20100101 Firefox/43.0","ua":["FIREFOX","43"],"os":["LINUX",""]},{"id":"Mozilla/5.0 (iPhone; CPU iPhone OS 9_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) FxiOS/1.2 Mobile/13C75 Safari/601.1.46","ua":["FIREFOX",""],"os":["IPHONE","9.2"]},{"id":"Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_1 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) FxiOS/5.1 Mobile/14A403 Safari/602.1.50","ua":["FIREFOX",""],"os":["IPHONE","10.0"]},{"id":"Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36","ua":["CHROME","47"],"os":["WINNT","10.0"]},{"id":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36","ua":["CHROME","47"],"os":["WINNT","10.0"]},{"id":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36","ua":["CHROME","47"],"os":["WINNT","10.0"]},{"id":"Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36","ua":["CHROME","47"],"os":["WINNT","6.3"]},{"id":"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36","ua":["CHROME","47"],"os":["WINNT","6.3"]},{"id":"Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36","ua":["CHROME","47"],"os":["WINNT","6.3"]},{"id":"Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36","ua":["CHROME","47"],"os":["WINNT","6.2"]},{"id":"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36","ua":["CHROME","47"],"os":["WINNT","6.2"]},{"id":"Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36","ua":["CHROME","47"],"os":["WINNT","6.2"]},{"id":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36","ua":["CHROME","47"],"os":["WINNT","6.1"]},{"id":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36","ua":["CHROME","47"],"os":["WINNT","6.1"]},{"id":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36","ua":["CHROME","47"],"os":["WINNT","6.1"]},{"id":"Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36","ua":["CHROME","47"],"os":["WINNT","6.0"]},{"id":"Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36","ua":["CHROME","47"],"os":["WINNT","6.0"]},{"id":"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36","ua":["CHROME","47"],"os":["WINNT","5.1"]},{"id":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36","ua":["CHROME","47"],"os":["MACOS","10.11"]},{"id":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36","ua":["CHROME","47"],"os":["MACOS","10.10"]},{"id":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36","ua":["CHROME","47"],"os":["MACOS","10.9"]},{"id":"Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36","ua":["CHROME","47"],"os":["LINUX",""]},{"id":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36","ua":["CHROME","47"],"os":["LINUX",""]},{"id":"Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1 (KHTML, like Gecko) CriOS/50.0.2661.95 Mobile/13F69 Safari/601.1.46","ua":["CHROME","50"],"os":["IPHONE","9.3"]},{"id":"Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5 Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83 Safari/537.36","ua":["CHROME","47"],"os":["ANDROID","6.0"]},{"id":"Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50","ua":["OPERA","34"],"os":["WINNT","10.0"]},{"id":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50","ua":["OPERA","34"],"os":["WINNT","10.0"]},{"id":"Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50","ua":["OPERA","34"],"os":["WINNT","6.3"]},{"id":"Opera/9.80 (Windows NT 6.2) Presto/2.12.388 Version/12.17","ua":["OPERA","12"],"os":["WINNT","6.2"]},{"id":"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50","ua":["OPERA","34"],"os":["WINNT","6.3"]},{"id":"Opera/9.80 (Windows NT 6.2; WOW64) Presto/2.12.388 Version/12.17","ua":["OPERA","12"],"os":["WINNT","6.2"]},{"id":"Opera/9.80 (Windows NT 6.2; Win64; x64) Presto/2.12.388 Version/12.17","ua":["OPERA","12"],"os":["WINNT","6.2"]},{"id":"Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50","ua":["OPERA","34"],"os":["WINNT","6.2"]},{"id":"Opera/9.80 (Windows NT 6.2) Presto/2.12.388 Version/12.17","ua":["OPERA","12"],"os":["WINNT","6.2"]},{"id":"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50","ua":["OPERA","34"],"os":["WINNT","6.2"]},{"id":"Opera/9.80 (Windows NT 6.2; WOW64) Presto/2.12.388 Version/12.17","ua":["OPERA","12"],"os":["WINNT","6.2"]},{"id":"Opera/9.80 (Windows NT 6.2; Win64; x64) Presto/2.12.388 Version/12.17","ua":["OPERA","12"],"os":["WINNT","6.2"]},{"id":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50","ua":["OPERA","34"],"os":["WINNT","6.1"]},{"id":"Opera/9.80 (Windows NT 6.1) Presto/2.12.388 Version/12.17","ua":["OPERA","12"],"os":["WINNT","6.1"]},{"id":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50","ua":["OPERA","34"],"os":["WINNT","6.1"]},{"id":"Opera/9.80 (Windows NT 6.1; WOW64) Presto/2.12.388 Version/12.17","ua":["OPERA","12"],"os":["WINNT","6.1"]},{"id":"Opera/9.80 (Windows NT 6.1; Win64; x64) Presto/2.12.388 Version/12.17","ua":["OPERA","12"],"os":["WINNT","6.1"]},{"id":"Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50","ua":["OPERA","34"],"os":["WINNT","6.0"]},{"id":"Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.17","ua":["OPERA","12"],"os":["WINNT","6.0"]},{"id":"Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50","ua":["OPERA","34"],"os":["WINNT","6.0"]},{"id":"Opera/9.80 (Windows NT 6.0; WOW64) Presto/2.12.388 Version/12.17","ua":["OPERA","12"],"os":["WINNT","6.0"]},{"id":"Opera/9.80 (Windows NT 6.0; Win64; x64) Presto/2.12.388 Version/12.17","ua":["OPERA","12"],"os":["WINNT","6.0"]},{"id":"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50","ua":["OPERA","34"],"os":["WINNT","5.1"]},{"id":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50","ua":["OPERA","34"],"os":["MACOS","10.11"]},{"id":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50","ua":["OPERA","34"],"os":["MACOS","10.10"]},{"id":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50","ua":["OPERA","34"],"os":["MACOS","10.9"]},{"id":"Opera/9.80 (Macintosh; Intel Mac OS X 10.10.5) Presto/2.12.388 Version/12.16","ua":["OPERA","12"],"os":["MACOS","10.10"]},{"id":"Opera/9.80 (Macintosh; Intel Mac OS X 10.9.5) Presto/2.12.388 Version/12.16","ua":["OPERA","12"],"os":["MACOS","10.9"]},{"id":"Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50","ua":["OPERA","34"],"os":["LINUX",""]},{"id":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36 OPR/34.0.2036.50","ua":["OPERA","34"],"os":["LINUX",""]},{"id":"Opera/9.80 (X11; Linux i686) Presto/2.12.388 Version/12.16","ua":["OPERA","12"],"os":["LINUX",""]},{"id":"Opera/9.80 (X11; Linux x86_64) Presto/2.12.388 Version/12.16","ua":["OPERA","12"],"os":["LINUX",""]},{"id":"Opera/9.80 (X11; Linux i686; Edition Linux Mint) Presto/2.12.388 Version/12.16","ua":["OPERA","12"],"os":["LINUX",""]},{"id":"Opera/9.80 (X11; Linux x86_64; Edition Linux Mint) Presto/2.12.388 Version/12.16","ua":["OPERA","12"],"os":["LINUX",""]},{"id":"Mozilla/5.0 (iPhone; CPU iPhone OS 9_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) OPiOS/12.1.1.98980 Mobile/13C75 Safari/9537.53","ua":["OPERA","12"],"os":["IPHONE","9.2"]},{"id":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9","ua":["SAFARI","9"],"os":["MACOS","10.11"]},{"id":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9","ua":["SAFARI","9"],"os":["MACOS","10.10"]},{"id":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/537.86.3","ua":["SAFARI","9"],"os":["MACOS","10.9"]},{"id":"Mozilla/5.0 (iPhone; CPU iPhone OS 9_2_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13D15 Safari/601.1","ua":["SAFARI","9"],"os":["IPHONE","9.2"]},{"id":"Mozilla/5.0 (iPhone; CPU iPhone OS 9_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13C75 Safari/601.1","ua":["SAFARI","9"],"os":["IPHONE","9.2"]},{"id":"Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1","ua":["SAFARI","9"],"os":["IPHONE","9.1"]},{"id":"Mozilla/5.0 (iPhone; CPU iPhone OS 9_0_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A452 Safari/601.1","ua":["SAFARI","9"],"os":["IPHONE","9.0"]},{"id":"Mozilla/5.0 (iPhone; CPU iPhone OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H321 Safari/600.1.4","ua":["SAFARI","8"],"os":["IPHONE","8.4"]},{"id":"Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4","ua":["SAFARI","8"],"os":["IPHONE","8.3"]},{"id":"Mozilla/5.0 (iPhone; CPU iPhone OS 8_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12D508 Safari/600.1.4","ua":["SAFARI","8"],"os":["IPHONE","8.2"]},{"id":"Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B466 Safari/600.1.4","ua":["SAFARI","8"],"os":["IPHONE","8.1"]},{"id":"Mozilla/5.0 (iPhone; CPU iPhone OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A405 Safari/600.1.4","ua":["SAFARI","8"],"os":["IPHONE","8.0"]},{"id":"Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53","ua":["SAFARI","7"],"os":["IPHONE","7.1"]},{"id":"Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_6 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B651 Safari/9537.53","ua":["SAFARI","7"],"os":["IPHONE","7.0"]},{"id":"Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_6 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B500 Safari/8536.25","ua":["SAFARI","6"],"os":["IPHONE","6.1"]},{"id":"Mozilla/5.0 (iPhone; CPU iPhone OS 6_0_2 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A551 Safari/8536.25","ua":["SAFARI","6"],"os":["IPHONE","6.0"]},{"id":"Mozilla/5.0 (iPad; CPU OS 9_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13C75 Safari/601.1","ua":["SAFARI","9"],"os":["IPAD","9.2"]},{"id":"Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1","ua":["SAFARI","9"],"os":["IPAD","9.1"]},{"id":"Mozilla/5.0 (iPad; CPU OS 9_0_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A452 Safari/601.1","ua":["SAFARI","9"],"os":["IPAD","9.0"]},{"id":"Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H321 Safari/600.1.4","ua":["SAFARI","8"],"os":["IPAD","8.4"]},{"id":"Mozilla/5.0 (iPad; CPU OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F69 Safari/600.1.4","ua":["SAFARI","8"],"os":["IPAD","8.3"]},{"id":"Mozilla/5.0 (iPad; CPU OS 8_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12D508 Safari/600.1.4","ua":["SAFARI","8"],"os":["IPAD","8.2"]},{"id":"Mozilla/5.0 (iPad; CPU OS 8_1_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B466 Safari/600.1.4","ua":["SAFARI","8"],"os":["IPAD","8.1"]},{"id":"Mozilla/5.0 (iPad; CPU OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A405 Safari/600.1.4","ua":["SAFARI","8"],"os":["IPAD","8.0"]},{"id":"Mozilla/5.0 (iPad; CPU OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53","ua":["SAFARI","7"],"os":["IPAD","7.1"]},{"id":"Mozilla/5.0 (iPad; CPU OS 7_0_6 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B651 Safari/9537.53","ua":["SAFARI","7"],"os":["IPAD","7.0"]},{"id":"Mozilla/5.0 (iPad; CPU OS 6_1_6 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B500 Safari/8536.25","ua":["SAFARI","6"],"os":["IPAD","6.1"]},{"id":"Mozilla/5.0 (iPad; CPU OS 6_0_2 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A550 Safari/8536.25","ua":["SAFARI","6"],"os":["IPAD","6.0"]},{"id":"Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10","ua":["SAFARI","4"],"os":["IPAD","3.2"]},{"id":"Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10","ua":["SAFARI","4"],"os":["IPAD","3.2"]},{"id":"Mozilla/5.0 (iPod touch; CPU iPhone OS 9_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13C75 Safari/601.1","ua":["SAFARI","9"],"os":["IPOD","9.2"]},{"id":"Mozilla/5.0 (iPod touch; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1","ua":["SAFARI","9"],"os":["IPOD","9.1"]},{"id":"Mozilla/5.0 (iPod touch; CPU iPhone OS 9_0_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A452 Safari/601.1","ua":["SAFARI","9"],"os":["IPOD","9.0"]},{"id":"Mozilla/5.0 (iPod touch; CPU iPhone OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H321 Safari/600.1.4","ua":["SAFARI","8"],"os":["IPOD","8.4"]},{"id":"Mozilla/5.0 (iPod touch; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F69 Safari/600.1.4","ua":["SAFARI","8"],"os":["IPOD","8.3"]},{"id":"Mozilla/5.0 (iPod touch; CPU iPhone OS 8_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12D508 Safari/600.1.4","ua":["SAFARI","8"],"os":["IPOD","8.2"]},{"id":"Mozilla/5.0 (iPod touch; CPU iPhone OS 8_1_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B466 Safari/600.1.4","ua":["SAFARI","8"],"os":["IPOD","8.1"]},{"id":"Mozilla/5.0 (iPod touch; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML,like Gecko) Version/8.0 Mobile/12A365 Safari/600.1.4","ua":["SAFARI","8"],"os":["IPOD","8.0"]},{"id":"Mozilla/5.0 (iPod touch; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53","ua":["SAFARI","7"],"os":["IPOD","7.1"]},{"id":"Mozilla/5.0 (iPod touch; CPU iPhone OS 7_0_6 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B651 Safari/9537.53","ua":["SAFARI","7"],"os":["IPOD","7.0"]},{"id":"Mozilla/5.0 (iPod; CPU iPhone OS 6_1_6 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B500 Safari/8536.25","ua":["SAFARI","6"],"os":["IPOD","6.1"]},{"id":"Mozilla/5.0 (iPod; CPU iPhone OS 6_0_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A523 Safari/8536.25","ua":["SAFARI","6"],"os":["IPOD","6.0"]},{"id":"Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37","ua":["VIVALDI","1"],"os":["WINNT","10.0"]},{"id":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37","ua":["VIVALDI","1"],"os":["WINNT","10.0"]},{"id":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37","ua":["VIVALDI","1"],"os":["WINNT","10.0"]},{"id":"Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37","ua":["VIVALDI","1"],"os":["WINNT","6.3"]},{"id":"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37","ua":["VIVALDI","1"],"os":["WINNT","6.3"]},{"id":"Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37","ua":["VIVALDI","1"],"os":["WINNT","6.3"]},{"id":"Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37","ua":["VIVALDI","1"],"os":["WINNT","6.2"]},{"id":"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37","ua":["VIVALDI","1"],"os":["WINNT","6.2"]},{"id":"Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37","ua":["VIVALDI","1"],"os":["WINNT","6.2"]},{"id":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37","ua":["VIVALDI","1"],"os":["WINNT","6.1"]},{"id":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37","ua":["VIVALDI","1"],"os":["WINNT","6.1"]},{"id":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37","ua":["VIVALDI","1"],"os":["WINNT","6.1"]},{"id":"Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37","ua":["VIVALDI","1"],"os":["WINNT","6.0"]},{"id":"Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37","ua":["VIVALDI","1"],"os":["WINNT","6.0"]},{"id":"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37","ua":["VIVALDI","1"],"os":["WINNT","5.1"]},{"id":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37","ua":["VIVALDI","1"],"os":["MACOS","10.11"]},{"id":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37","ua":["VIVALDI","1"],"os":["MACOS","10.10"]},{"id":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37","ua":["VIVALDI","1"],"os":["MACOS","10.9"]},{"id":"Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37","ua":["VIVALDI","1"],"os":["LINUX",""]},{"id":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Vivaldi/1.0.344.37","ua":["VIVALDI","1"],"os":["LINUX",""]},{"id":"Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/538.1 (KHTML, like Gecko) PhantomJS/2.1.1 Safari/538.1","ua":["PHANTOMJS","2"],"os":["MACOS",""]}]')},,,,,function(e,t,o){e.exports=o(49)},function(e,t,o){"use strict";var i=o(15).expect,n=o(50),r=o(43);describe("detect-os",function(){r.forEach(function(t){var e=t.ua[0]+" "+t.ua[1]+" on "+t.os[0]+" "+t.os[1];it(e,function(){var e=n(t.id.toUpperCase());i(e.name).to.equal(t.os[0]),i(e.version).to.equal(t.os[1]),function(e,t){i(e.WINNT).to.equal("WINNT"===t),i(e.MACOS).to.equal("MACOS"===t),i(e.LINUX).to.equal("LINUX"===t),i(e.IPHONE).to.equal("IPHONE"===t),i(e.IPAD).to.equal("IPAD"===t),i(e.IPOD).to.equal("IPOD"===t),i(e.ANDROID).to.equal("ANDROID"===t),i(e.UNKNOWN).to.equal("UNKNOWN"===t),i(e.IOS).to.equal("IPHONE"===t||"IPAD"===t||"IPOD"===t)}(e,t.os[0])})})})},function(e,t,o){"use strict";var n=o(40),r=o(41),a=o(42);e.exports=function(e){var t,o=n(),i=["IPOD","IPAD","IPHONE","ANDROID","WINNT","MACOS","LINUX","UNKNOWN"];return 0<=e.indexOf("IPOD")?(t=r(e,"IPHONE OS",2),a(o,i,"IPOD",t),Object.defineProperty(o,"IOS",{enumerable:!0,value:!0})):0<=e.indexOf("IPAD")?(t=(t=r(e,"IPHONE OS",2))||r(e,"CPU OS",2),a(o,i,"IPAD",t),Object.defineProperty(o,"IOS",{enumerable:!0,value:!0})):0<=e.indexOf("IPHONE")?(t=r(e,"IPHONE OS",2),a(o,i,"IPHONE",t),Object.defineProperty(o,"IOS",{enumerable:!0,value:!0})):(null!=(t=r(e,"ANDROID",2))?a(o,i,"ANDROID",t):null!=(t=r(e,"WINDOWS",2))?a(o,i,"WINNT",t):null!=(t=r(e,"MAC OS X",2))?a(o,i,"MACOS",t):0<=e.indexOf("LINUX")?a(o,i,"LINUX",""):a(o,i,"UNKNOWN",""),Object.defineProperty(o,"IOS",{enumerable:!0,value:!1})),o}}]);