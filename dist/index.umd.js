!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self)["styled-variants"]=e()}(this,(function(){"use strict";function t(t){return t&&"object"==typeof t&&!Array.isArray(t)}function e(t){return t&&"function"==typeof t}function n(t){return t.includes(":")}function o(t){return"!"===t.charAt(0)}function r(t){return t.split(",").map(t=>t.trim())}function i(e,...n){const o=e;return t(e)&&n.forEach(n=>{t(n)&&Object.keys(n).forEach(r=>{"__proto__"!==r&&(t(n[r])&&r in e?o[r]=i({...e[r]},n[r]):o[r]=n[r])})}),o}function s(s,u,c){const f=c&&u[c]||{};let l=function e(r,s){let u={...s};for(let[s,c]of Object.entries(u)){const f=o(s);let l=s;if(f&&(l=s.substring(1)),t(c)&&!n(s)){(f?!r[l]:!!r[l])&&(u=i({...u},e(r,u[s]))),delete u[s]}}return u}(s,i({...u},f));for(let[t,o]of Object.entries(l))if(e(o))l[t]=o(s);else if(n(t)){let n={};for(let[o,r]of Object.entries(l[t]))n[o]=e(r)?r(s):r;t.includes(",")?(r(t).forEach(t=>{l[t]={...n,...l[t]}}),delete l[t]):l[t]=n}return l}return function(t,n={}){function o(r){const u=r.theme&&r.theme.components&&r.theme.components[t]||{},c=s(r,u),f=s(r,e(n)?n(r):n);return console.log(i({...c},f,...o.styles.map(t=>t(r)))),i({...c},f,...o.styles.map(t=>t(r)))}return o.styles=[],o.addVariant=function(t,n){return this.styles.push((function(o){const r=o[t];return s(o,e(n)?n(o):n,r)})),this},o.addGlobalVariant=function(t,n){return this.styles.push((function(o){const r=o.theme[t];return s(o,e(n)?n(o):n,r)})),this},o}}));
