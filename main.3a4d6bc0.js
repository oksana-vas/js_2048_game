parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";function e(e){return o(e)||n(e)||t(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,r){if(e){if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,r):void 0}}function n(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function o(e){if(Array.isArray(e))return a(e)}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var c=document.querySelector(".button"),i=document.querySelector(".game-field"),s=document.querySelector(".game-score"),u=document.querySelectorAll(".field-cell"),f=document.querySelectorAll(".message"),l=document.querySelector(".message-lose"),d=document.querySelector(".message-win"),v=0,m=4,y=2048,h="ArrowUp",g="ArrowDown",S="ArrowLeft",A="ArrowRight",b=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];function p(){c.classList.remove("start"),c.classList.add("restart"),c.textContent="Restart"}function w(){if(j()){for(var e=[],r=0;r<m;r++)for(var t=0;t<m;t++)0===b[r][t]&&e.push({x:r,y:t});var n=Math.random()<.9?2:4;if(e.length){var o=e[Math.floor(Math.random()*e.length)];b[o.x][o.y]=n}}}function L(){for(var e=0;e<m;e++)for(var r=0;r<m;r++){var t=i.rows[e].cells[r];t.className="field-cell field-cell--".concat(b[e][r]),t.textContent=b[e][r]||""}}function k(e){v+=e,s.textContent=v}function q(){return e(u).some(function(e){return e.classList.contains("field-cell--".concat(y))})}function x(r){if(j()||O()){for(var t=!1,n=0;n<m;n++){var o=e(b[n]),a=b[n];r===A&&a.reverse(),a=M(a),r===A&&a.reverse(),b[n]=a,E(o,a)&&(t=!0)}t&&(w(),L())}else l.classList.remove("hidden")}function C(r){if(j()||O()){for(var t=!1,n=0;n<m;n++){var o=[b[0][n],b[1][n],b[2][n],b[3][n]],a=e(o);r===g&&o.reverse(),o=M(o),r===g&&o.reverse();for(var c=0;c<m;c++)b[c][n]=o[c];E(a,o)&&(t=!0)}t&&(w(),L())}else l.classList.remove("hidden")}function E(e,r){return JSON.stringify(e)!==JSON.stringify(r)}function M(e){for(var r=N(e),t=0;t<r.length-1;t++)r[t]===r[t+1]&&(r[t]*=2,r[t+1]=0,k(r[t]));for(r=N(r);r.length<m;)r.push(0);return r}function N(e){return e.filter(function(e){return 0!==e})}function O(){for(var e=!1,r=0;r<m-1;r++)for(var t=0;t<m-1;t++)if(b[r][t]===b[r+1][t]||b[r][t]===b[r][t+1])return e=!0;return e}function j(){for(var e=0;e<m;e++)for(var r=0;r<m;r++)if(0===b[e][r])return!0;return!1}c.addEventListener("click",function(){c.classList.contains("start")&&p(),e(f).forEach(function(e){return e.classList.add("hidden")});for(var r=0;r<m;r++)for(var t=0;t<m;t++)b[r][t]=0;e(u).forEach(function(e){e.className="field-cell",e.textContent=""}),v=0,s.textContent=v,w(),w(),L()}),document.addEventListener("keydown",function(e){switch(e.key){case h:case g:C(e.key);break;case S:case A:x(e.key);break;default:return}q()&&d.classList.remove("hidden")});
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.3a4d6bc0.js.map