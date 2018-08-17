!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=n(2);n(6),function(){var t={home:function(){return new i.Home}};new r.Router({"/":t.home}).init("/")}()},function(t,e,n){!function(t){var e=document.location;function n(){return""===e.hash||"#"===e.hash}var r={mode:"modern",hash:e.hash,history:!1,check:function(){var t=e.hash;t!=this.hash&&(this.hash=t,this.onHashChanged())},fire:function(){"modern"===this.mode?!0===this.history?window.onpopstate():window.onhashchange():this.onHashChanged()},init:function(t,e){var n=this;function r(t){for(var e=0,n=i.listeners.length;e<n;e++)i.listeners[e](t)}if(this.history=e,i.listeners||(i.listeners=[]),"onhashchange"in window&&(void 0===document.documentMode||document.documentMode>7))!0===this.history?setTimeout(function(){window.onpopstate=r},500):window.onhashchange=r,this.mode="modern";else{var o=document.createElement("iframe");o.id="state-frame",o.style.display="none",document.body.appendChild(o),this.writeFrame(""),"onpropertychange"in document&&"attachEvent"in document&&document.attachEvent("onpropertychange",function(){"location"===event.propertyName&&n.check()}),window.setInterval(function(){n.check()},50),this.onHashChanged=r,this.mode="legacy"}return i.listeners.push(t),this.mode},destroy:function(t){if(i&&i.listeners)for(var e=i.listeners,n=e.length-1;n>=0;n--)e[n]===t&&e.splice(n,1)},setHash:function(t){return"legacy"===this.mode&&this.writeFrame(t),!0===this.history?(window.history.pushState({},document.title,t),this.fire()):e.hash="/"===t[0]?t:"/"+t,this},writeFrame:function(t){var e=document.getElementById("state-frame"),n=e.contentDocument||e.contentWindow.document;n.open(),n.write("<script>_hash = '"+t+"'; onload = parent.listener.syncHash;<script>"),n.close()},syncHash:function(){var t=this._hash;return t!=e.hash&&(e.hash=t),this},onHashChanged:function(){}},i=t.Router=function(t){if(!(this instanceof i))return new i(t);this.params={},this.routes={},this.methods=["on","once","after","before"],this.scope=[],this._methods={},this._insert=this.insert,this.insert=this.insertEx,this.historySupport=null!=(null!=window.history?window.history.pushState:null),this.configure(),this.mount(t||{})};function o(t,e){for(var n=0;n<t.length;n+=1)if(!1===e(t[n],n,t))return}function a(t){for(var e=[],n=0,r=t.length;n<r;n++)e=e.concat(t[n]);return e}function c(t,e,n){if(!t.length)return n();var r=0;!function i(){e(t[r],function(e){e||!1===e?(n(e),n=function(){}):(r+=1)===t.length?n():i()})}()}function u(t,e,n){for(var r in n=t,e)if(e.hasOwnProperty(r)&&(n=e[r](t))!==t)break;return n===t?"([._a-zA-Z0-9-%()]+)":n}function f(t,e,n,r){var i,o=0,s=0,a=0;n=(n||"(").toString(),r=(r||")").toString();for(i=0;i<t.length;i++){var c=t[i];if(c.indexOf(n,o)>c.indexOf(r,o)||~c.indexOf(n,o)&&!~c.indexOf(r,o)||!~c.indexOf(n,o)&&~c.indexOf(r,o)){if(s=c.indexOf(n,o),a=c.indexOf(r,o),~s&&!~a||!~s&&~a)t=[t.slice(0,(i||1)+1).join(e)].concat(t.slice((i||1)+1));o=(a>s?a:s)+1,i=0}else o=0}return t}i.prototype.init=function(t){var i,o=this;return this.handler=function(t){var e=t&&t.newURL||window.location.hash,n=!0===o.history?o.getPath():e.replace(/.*#/,"");o.dispatch("on","/"===n.charAt(0)?n:"/"+n)},r.init(this.handler,this.history),!1===this.history?n()&&t?e.hash=t:n()||o.dispatch("on","/"+e.hash.replace(/^(#\/|#|\/)/,"")):(this.convert_hash_in_init?(i=n()&&t?t:n()?null:e.hash.replace(/^#/,""))&&window.history.replaceState({},document.title,i):i=this.getPath(),(i||!0===this.run_in_init)&&this.handler()),this},i.prototype.explode=function(){var t=!0===this.history?this.getPath():e.hash;return"/"===t.charAt(1)&&(t=t.slice(1)),t.slice(1,t.length).split("/")},i.prototype.setRoute=function(t,e,n){var i=this.explode();return"number"==typeof t&&"string"==typeof e?i[t]=e:"string"==typeof n?i.splice(t,e,s):i=[t],r.setHash(i.join("/")),i},i.prototype.insertEx=function(t,e,n,r){return"once"===t&&(t="on",n=function(t){var e=!1;return function(){if(!e)return e=!0,t.apply(this,arguments)}}(n)),this._insert(t,e,n,r)},i.prototype.getRoute=function(t){var e=t;if("number"==typeof t)e=this.explode()[t];else if("string"==typeof t){e=this.explode().indexOf(t)}else e=this.explode();return e},i.prototype.destroy=function(){return r.destroy(this.handler),this},i.prototype.getPath=function(){var t=window.location.pathname;return"/"!==t.substr(0,1)&&(t="/"+t),t};var h=/\?.*/;i.prototype.configure=function(t){t=t||{};for(var e=0;e<this.methods.length;e++)this._methods[this.methods[e]]=!0;return this.recurse=t.recurse||this.recurse||!1,this.async=t.async||!1,this.delimiter=t.delimiter||"/",this.strict=void 0===t.strict||t.strict,this.notfound=t.notfound,this.resource=t.resource,this.history=t.html5history&&this.historySupport||!1,this.run_in_init=!0===this.history&&!1!==t.run_handler_in_init,this.convert_hash_in_init=!0===this.history&&!1!==t.convert_hash_in_init,this.every={after:t.after||null,before:t.before||null,on:t.on||null},this},i.prototype.param=function(t,e){":"!==t[0]&&(t=":"+t);var n=new RegExp(t,"g");return this.params[t]=function(t){return t.replace(n,e.source||e)},this},i.prototype.on=i.prototype.route=function(t,e,n){var r=this;return n||"function"!=typeof e||(n=e,e=t,t="on"),Array.isArray(e)?e.forEach(function(e){r.on(t,e,n)}):(e.source&&(e=e.source.replace(/\\\//gi,"/")),Array.isArray(t)?t.forEach(function(t){r.on(t.toLowerCase(),e,n)}):(e=f(e=e.split(new RegExp(this.delimiter)),this.delimiter),void this.insert(t,this.scope.concat(e),n)))},i.prototype.path=function(t,e){var n=this.scope.length;t.source&&(t=t.source.replace(/\\\//gi,"/")),t=f(t=t.split(new RegExp(this.delimiter)),this.delimiter),this.scope=this.scope.concat(t),e.call(this,this),this.scope.splice(n,t.length)},i.prototype.dispatch=function(t,e,n){var r,i=this,o=this.traverse(t,e.replace(h,""),this.routes,""),s=this._invoked;if(this._invoked=!0,!o||0===o.length)return this.last=[],"function"==typeof this.notfound&&this.invoke([this.notfound],{method:t,path:e},n),!1;function a(){i.last=o.after,i.invoke(i.runlist(o),i,n)}return"forward"===this.recurse&&(o=o.reverse()),(r=this.every&&this.every.after?[this.every.after].concat(this.last):[this.last])&&r.length>0&&s?(this.async?this.invoke(r,this,a):(this.invoke(r,this),a()),!0):(a(),!0)},i.prototype.invoke=function(t,e,n){var r,i=this;this.async?c(t,r=function(n,i){if(Array.isArray(n))return c(n,r,i);"function"==typeof n&&n.apply(e,(t.captures||[]).concat(i))},function(){n&&n.apply(e,arguments)}):o(t,r=function(n){return Array.isArray(n)?o(n,r):"function"==typeof n?n.apply(e,t.captures||[]):void("string"==typeof n&&i.resource&&i.resource[n].apply(e,t.captures||[]))})},i.prototype.traverse=function(t,e,n,r,i){var o,s,a,c,u=[];function f(t){if(!i)return t;var e=function t(e){for(var n=[],r=0;r<e.length;r++)n[r]=Array.isArray(e[r])?t(e[r]):e[r];return n}(t);return e.matched=t.matched,e.captures=t.captures,e.after=t.after.filter(i),function t(e){for(var n=e.length-1;n>=0;n--)Array.isArray(e[n])?(t(e[n]),0===e[n].length&&e.splice(n,1)):i(e[n])||e.splice(n,1)}(e),e}if(e===this.delimiter&&n[t])return(c=[[n.before,n[t]].filter(Boolean)]).after=[n.after].filter(Boolean),c.matched=!0,c.captures=[],f(c);for(var h in n)if(n.hasOwnProperty(h)&&(!this._methods[h]||this._methods[h]&&"object"==typeof n[h]&&!Array.isArray(n[h]))){if(o=s=r+this.delimiter+h,this.strict||(s+="["+this.delimiter+"]?"),!(a=e.match(new RegExp("^"+s))))continue;if(a[0]&&a[0]==e&&n[h][t])return(c=[[n[h].before,n[h][t]].filter(Boolean)]).after=[n[h].after].filter(Boolean),c.matched=!0,c.captures=a.slice(1),this.recurse&&n===this.routes&&(c.push([n.before,n.on].filter(Boolean)),c.after=c.after.concat([n.after].filter(Boolean))),f(c);if((c=this.traverse(t,e,n[h],o)).matched)return c.length>0&&(u=u.concat(c)),this.recurse&&(u.push([n[h].before,n[h].on].filter(Boolean)),c.after=c.after.concat([n[h].after].filter(Boolean)),n===this.routes&&(u.push([n.before,n.on].filter(Boolean)),c.after=c.after.concat([n.after].filter(Boolean)))),u.matched=!0,u.captures=c.captures,u.after=c.after,f(u)}return!1},i.prototype.insert=function(t,e,n,r){var i,o,s,a;if(e=e.filter(function(t){return t&&t.length>0}),r=r||this.routes,a=e.shift(),/\:|\*/.test(a)&&!/\\d|\\w/.test(a)&&(a=function(t,e){for(var n,r=0,i="";n=t.substr(r).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/);)r=n.index+n[0].length,n[0]=n[0].replace(/^\*/,"([_.()!\\ %@&a-zA-Z0-9-]+)"),i+=t.substr(0,n.index)+n[0];var o,s,a=(t=i+=t.substr(r)).match(/:([^\/]+)/gi);if(a){s=a.length;for(var c=0;c<s;c++)t="::"===(o=a[c]).slice(0,2)?o.slice(1):t.replace(o,u(o,e))}return t}(a,this.params)),e.length>0)return r[a]=r[a]||{},this.insert(t,e,n,r[a]);if(a||e.length||r!==this.routes){if(i=typeof r[a],o=Array.isArray(r[a]),r[a]&&!o&&"object"==i)switch(typeof r[a][t]){case"function":return void(r[a][t]=[r[a][t],n]);case"object":return void r[a][t].push(n);case"undefined":return void(r[a][t]=n)}else if("undefined"==i)return(s={})[t]=n,void(r[a]=s);throw new Error("Invalid route context: "+i)}switch(typeof r[t]){case"function":return void(r[t]=[r[t],n]);case"object":return void r[t].push(n);case"undefined":return void(r[t]=n)}},i.prototype.extend=function(t){var e,n=this,r=t.length;function i(t){n._methods[t]=!0,n[t]=function(){var e=1===arguments.length?[t,""]:[t];n.on.apply(n,e.concat(Array.prototype.slice.call(arguments)))}}for(e=0;e<r;e++)i(t[e])},i.prototype.runlist=function(t){var e=this.every&&this.every.before?[this.every.before].concat(a(t)):a(t);return this.every&&this.every.on&&e.push(this.every.on),e.captures=t.captures,e.source=t.source,e},i.prototype.mount=function(t,e){if(t&&"object"==typeof t&&!Array.isArray(t)){var n=this;for(var r in e=e||[],Array.isArray(e)||(e=e.split(n.delimiter)),t)t.hasOwnProperty(r)&&i(r,e.slice(0))}function i(e,r){var i=e,o=e.split(n.delimiter),s=typeof t[e],a=""===o[0]||!n._methods[o[0]],c=a?"on":i;if(a&&(i=i.slice((i.match(new RegExp("^"+n.delimiter))||[""])[0].length),o.shift()),a&&"object"===s&&!Array.isArray(t[e]))return r=r.concat(o),void n.mount(t[e],r);a&&(r=f(r=r.concat(i.split(n.delimiter)),n.delimiter)),n.insert(c,r,t[e])}}}(e)},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),o=n(4),s=n(5),a=function(t){function e(){var e=t.call(this,o)||this;return document.getElementById("dreams").src=s,e}return r(e,t),e}(i.Page);e.Home=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){return function(t){document.getElementById("app").innerHTML=t.toString()}}();e.Page=r},function(t,e){t.exports='<h1>it\'s built</h1>\r\n<img id="dreams">'},function(t,e,n){t.exports=n.p+"e85618248d094a030ed04fa4803c6b1f.png"},function(t,e,n){var r=n(7);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(9)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(8)(!1)).push([t.i,"#app {\n  text-align: center; }\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([i]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var r={},i=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),o=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),s=null,a=0,c=[],u=n(10);function f(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=r[i.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](i.parts[s]);for(;s<i.parts.length;s++)o.parts.push(v(i.parts[s],e))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(v(i.parts[s],e));r[i.id]={id:i.id,refs:1,parts:a}}}}function h(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function l(t,e){var n=o(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),c.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=o(t.insertAt.before,n);n.insertBefore(e,i)}}function p(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function d(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return y(e,t.attrs),l(t,e),e}function y(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function v(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var c=a++;n=s||(s=d(e)),r=g.bind(null,n,c,!1),i=g.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),l(t,e),e}(e),r=function(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=u(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),i=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=d(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){p(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return f(n,e),function(t){for(var i=[],o=0;o<n.length;o++){var s=n[o];(a=r[s.id]).refs--,i.push(a)}t&&f(h(t,e),e);for(o=0;o<i.length;o++){var a;if(0===(a=i[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete r[a.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function g(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}}]);
//# sourceMappingURL=app.bundle.js.map