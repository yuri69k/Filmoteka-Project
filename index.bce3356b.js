!function(){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},t={},n=o.parcelRequired7c6;null==n&&((n=function(o){if(o in e)return e[o].exports;if(o in t){var n=t[o];delete t[o];var r={id:o,exports:{}};return e[o]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+o+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(o,e){t[o]=e},o.parcelRequired7c6=n),n("leAp0");var r={};r=function o(e,t,n){function r(a,c){if(!t[a]){if(!e[a]){var d=void 0;if(!c&&d)return d(a,!0);if(i)return i(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var l=t[a]={exports:{}};e[a][0].call(l.exports,(function(o){return r(e[a][1][o]||o)}),l,l.exports,o,e,t,n)}return t[a].exports}for(var i=void 0,a=0;a<n.length;a++)r(n[a]);return r}({1:[function(o,e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.create=t.visible=void 0;var n=function(o){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.createElement("div");return t.innerHTML=o.trim(),!0===e?t.children:t.firstChild},r=function(o,e){var t=o.children;return 1===t.length&&t[0].tagName===e},i=function(o){return null!=(o=o||document.querySelector(".basicLightbox"))&&!0===o.ownerDocument.body.contains(o)};t.visible=i,t.create=function(o,e){var t=function(o,e){var t=n('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=t.querySelector(".basicLightbox__placeholder");o.forEach((function(o){return i.appendChild(o)}));var a=r(i,"IMG"),c=r(i,"VIDEO"),d=r(i,"IFRAME");return!0===a&&t.classList.add("basicLightbox--img"),!0===c&&t.classList.add("basicLightbox--video"),!0===d&&t.classList.add("basicLightbox--iframe"),t}(o=function(o){var e="string"==typeof o,t=o instanceof HTMLElement==1;if(!1===e&&!1===t)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(n(o,!0)):"TEMPLATE"===o.tagName?[o.content.cloneNode(!0)]:Array.from(o.children)}(o),e=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(o=Object.assign({},o)).closable&&(o.closable=!0),null==o.className&&(o.className=""),null==o.onShow&&(o.onShow=function(){}),null==o.onClose&&(o.onClose=function(){}),"boolean"!=typeof o.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof o.className)throw new Error("Property `className` must be a string");if("function"!=typeof o.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof o.onClose)throw new Error("Property `onClose` must be a function");return o}(e)),a=function(o){return!1!==e.onClose(c)&&function(o,e){return o.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(o)||o.parentElement.removeChild(o),e()}),410),!0}(t,(function(){if("function"==typeof o)return o(c)}))};!0===e.closable&&t.addEventListener("click",(function(o){o.target===t&&a()}));var c={element:function(){return t},visible:function(){return i(t)},show:function(o){return!1!==e.onShow(c)&&function(o,e){return document.body.appendChild(o),setTimeout((function(){requestAnimationFrame((function(){return o.classList.add("basicLightbox--visible"),e()}))}),10),!0}(t,(function(){if("function"==typeof o)return o(c)}))},close:a};return c}},{}]},{},[1])(1);r.create('<div class="loader-chase">\n    <div class="loader-chase-dot"></div>\n    <div class="loader-chase-dot"></div>\n    <div class="loader-chase-dot"></div>\n    <div class="loader-chase-dot"></div>\n    <div class="loader-chase-dot"></div>\n    <div class="loader-chase-dot"></div>\n  </div>');n("dsFN9"),n("faulO"),n("fqcgb"),n("aEzlg");var i,a,c={};function d(o){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}i="undefined"!=typeof self?self:void 0,a=function(o){o.addBackToTop=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=o.backgroundColor,t=void 0===e?"#000":e,n=o.cornerOffset,r=void 0===n?20:n,i=o.diameter,a=void 0===i?56:i,c=o.ease,d=void 0===c?H:c,s=o.id,l=void 0===s?"back-to-top":s,u=o.innerHTML,f=void 0===u?'<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>':u,p=o.onClickScrollTo,m=void 0===p?0:p,v=o.scrollContainer,b=void 0===v?document.body:v,h=o.scrollDuration,y=void 0===h?100:h,g=o.showWhenScrollTopIs,w=void 0===g?1:g,x=o.size,E=void 0===x?a:x,L=o.textColor,T=void 0===L?"#fff":L,C=o.zIndex,M=void 0===C?1:C,N=b===document.body,k=N&&document.documentElement;I();var S=A(),O=!0,z=N?window:b;function _(){F()>=w?D():q()}function D(){O&&(S.className="",O=!1)}function q(){O||(S.className="hidden",O=!0)}function A(){var o=document.createElement("div");return o.id=l,o.className="hidden",o.innerHTML=f,o.addEventListener("click",(function(o){o.preventDefault(),P()})),document.body.appendChild(o),o}function I(){var o=Math.round(.43*E),e=Math.round(.29*E),n="#"+l+"{background:"+t+";-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;bottom:"+r+"px;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-moz-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);color:"+T+";cursor:pointer;display:block;height:"+E+"px;opacity:1;outline:0;position:fixed;right:"+r+"px;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-transition:bottom .2s,opacity .2s;-o-transition:bottom .2s,opacity .2s;-moz-transition:bottom .2s,opacity .2s;transition:bottom .2s,opacity .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:"+E+"px;z-index:"+M+"}#"+l+" svg{display:block;fill:currentColor;height:"+o+"px;margin:"+e+"px auto 0;width:"+o+"px}#"+l+".hidden{bottom:-"+E+"px;opacity:0}",i=document.createElement("style");i.appendChild(document.createTextNode(n)),document.head.insertAdjacentElement("afterbegin",i)}function P(){var o="function"==typeof m?m():m,e=window,t=e.performance,n=e.requestAnimationFrame;if(y<=0||void 0===t||void 0===n)return j(o);var r=t.now(),i=F(),a=i-o;n((function o(e){var t=Math.min((e-r)/y,1);j(i-Math.round(d(t)*a)),t<1&&n(o)}))}function F(){return b.scrollTop||k&&document.documentElement.scrollTop||0}function j(o){b.scrollTop=o,k&&(document.documentElement.scrollTop=o)}function H(o){return.5*(1-Math.cos(Math.PI*o))}z.addEventListener("scroll",_),_()}},"function"==typeof define&&define.amd?define(["exports"],a):"object"===d(c)&&"string"!=typeof c.nodeName?a(c):a(i.commonJsStrict={}),(0,c.addBackToTop)({diameter:40,backgroundColor:"#ddd",textColor:"#ff6b08"}),n("925Iw"),n("22Kz9"),n("doiym"),n("2qlop"),n("5y5G6")}();
//# sourceMappingURL=index.bce3356b.js.map