parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"nKD1":[function(require,module,exports) {
var define;
var e;!function(n){"function"==typeof e&&e.amd?e(n):"undefined"!=typeof module&&module.exports?module.exports=n():window.enterView=n.call(this)}(function(){return function(e){function n(){var e=document.documentElement.clientHeight,n=window.innerHeight||0;A=Math.max(e,n)}function t(){x=!1;var e=function(){if(w&&"number"==typeof w){var e=Math.min(Math.max(0,w),1);return A-e*A}return A}();(y=y.filter(function(n){var t=n.getBoundingClientRect(),o=t.top,r=t.bottom,i=t.height,s=o<e,u=r<e;if(s&&!n.__ev_entered){if(_(n),n.__ev_progress=0,l(n,n.__ev_progress),p)return!1}else!s&&n.__ev_entered&&(n.__ev_progress=0,l(n,n.__ev_progress),f(n));if(s&&!u){var d=(e-o)/i;n.__ev_progress=Math.min(1,Math.max(0,d)),l(n,n.__ev_progress)}return s&&u&&1!==n.__ev_progress&&(n.__ev_progress=1,l(n,n.__ev_progress)),n.__ev_entered=s,!0})).length||window.removeEventListener("scroll",o,!0)}function o(){x||(x=!0,h(t))}function r(){n(),t()}function i(){n(),t()}function s(e){for(var n=e.length,t=[],o=0;o<n;o+=1)t.push(e[o]);return t}function u(){y=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"string"==typeof e?s(n.querySelectorAll(e)):e instanceof NodeList?s(e):e instanceof Array?e:void 0}(d)}var d=e.selector,a=e.enter,_=void 0===a?function(){}:a,c=e.exit,f=void 0===c?function(){}:c,v=e.progress,l=void 0===v?function(){}:v,m=e.offset,w=void 0===m?0:m,g=e.once,p=void 0!==g&&g,h=null,x=!1,y=[],A=0;d?(u(),y&&y.length?(h=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},window.addEventListener("resize",r,!0),window.addEventListener("scroll",o,!0),window.addEventListener("load",i,!0),r(),t()):console.error("no selector elements found")):console.error("must pass a selector")}});
},{}],"uGUE":[function(require,module,exports) {
var e=[],t=function(t){t?n(t):e=document.querySelectorAll(".balance-text"),i();var l=r(function(){i()},100);window.addEventListener("resize",l)},n=function(t){selectorArray=t.split(",");for(var n=0;n<selectorArray.length;n+=1)for(var r=document.querySelectorAll(selectorArray[n].trim()),i=0;i<r.length;i+=1){var l=r[i];e.push(l)}},r=function(e,t,n){var r;return function(){var i=this,l=arguments,o=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(i,l)},t),o&&e.apply(i,l)}},i=function(){var t,n;for(n=0;n<e.length;n+=1)t=e[n],o(t)&&(t.style.maxWidth="",l(t,t.clientHeight,0,t.clientWidth))},l=function(e,t,n,r){var i;n>=r?e.style.maxWidth=r+"px":(i=(n+r)/2,e.style.maxWidth=i+"px",e.clientHeight>t?l(e,t,i+1,r):l(e,t,n+1,i))},o=function(e){var t,n,r,i,l;return l=e.innerHTML,10,r=e.innerHTML.split(" "),(i=document.createElement("span")).id="element-first-word",i.innerHTML=r[0],r=r.slice(1),e.innerHTML="",e.appendChild(i),e.innerHTML+=" "+r.join(" "),t=(i=document.getElementById("element-first-word")).offsetHeight,n=e.offsetHeight,e.innerHTML=l,n-10>t};exports.balanceText=t;
},{}],"bpyv":[function(require,module,exports) {
module.exports={USE_COVER_HED:!1,DOC_URL:"https://docs.google.com/document/d/1Sba5SfdWovkDL2bfPSB2xKdXSSetbh-AxhhoHdpCZsk/edit",PART1_LINK:"https://www.columbiaspectator.com/eye-lead/2019/11/15/students-and-faculty-say-gender-based-harassment-and-discrimination-at-columbia-is-systemic-why-are-they-turning-away-from-the-system-built-to-address-it",PART2_LINK:"https://www.columbiaspectator.com/eye-lead/2019/11/15/eoaa-harassment-discrimination-title-ix-part-2",PART3_LINK:"https://www.columbiaspectator.com/eye-lead/2019/11/15/eoaa-harassment-discrimination-title-ix-part-3"};
},{}],"mpVp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.hamburgerTrigger=f;var e=o(require("enter-view")),t=o(require("text-balancer")),n=o(require("../config.yml"));function o(e){return e&&e.__esModule?e:{default:e}}var a=parseInt(document.getElementById("story-page").getAttribute("data-page-index"));if(1===a){var s=document.querySelector(".video-step:nth-child(5) p");s.textContent=s.textContent.replace("handes","handles")}if(a<3){var i=document.getElementById("refer"),c=n.default[[null,"PART2","PART3"][a]+"_LINK"];i.innerHTML='\n  <p class="g-body paragraph">\n    <a href="'.concat(c,'">Continue reading Part ').concat([null,"II","III"][a],".</a>\n  </p>\n  ")}document.getElementById("nav-link-"+a).classList.add("nav-link-highlighted");var r=document.getElementById("nav-section-name"),l=1===a?"Introduction":"Part ".concat(a,": ").concat(["Coming Forward","The EOAA","Beyond the System"][a-1]);r.textContent=l;var d=document.getElementById("video-cover"),u=document.getElementById("navbar");function f(){u.classList.toggle("show-nav-links")}1===a?((0,e.default)({selector:".video-step:nth-child(2)",offset:.3,enter:function(){u.classList.add("show-nav"),d.classList.add("bright")},exit:function(){u.classList.remove("show-nav"),d.classList.remove("bright")}}),(0,e.default)({selector:".video-step:nth-child(7)",offset:.3,enter:function(){d.classList.remove("bright")},exit:function(){d.classList.add("bright")}}),(0,e.default)({selector:".sectionhed",offset:1,enter:function(){r.style.opacity=0,setTimeout(function(){r.textContent="Part ".concat(a,": ").concat(["Coming Forward","The EOAA","Beyond the System"][a-1]),r.style.opacity=1},250)},exit:function(){r.style.opacity=0,setTimeout(function(){r.textContent=l,r.style.opacity=1},250)}})):u.classList.add("show-nav"),(0,e.default)({selector:".headline",offset:1,enter:function(){u.classList.remove("only-logo"),r.classList.add("show-section-name")},exit:function(){u.classList.add("only-logo"),r.classList.remove("show-section-name")}}),t.default.balanceText(".headline, .deck, .video-step p, .pullquote");
},{"enter-view":"nKD1","text-balancer":"uGUE","../config.yml":"bpyv"}]},{},["mpVp"], "script")
//# sourceMappingURL=https://spectator-static-assets.s3.amazonaws.com/eoaa/script.18b7fada.js.map