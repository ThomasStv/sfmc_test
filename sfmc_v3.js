if (window.Evergage && window.SalesforceInteractions && window.SalesforceInteractions.mcis) {
    try {
        window.SalesforceInteractions.log.warn("Aborting SDK load since the SalesforceInteractions SDK was already found on this page.");
    } catch(e) {}
} else {
window.evergageBeaconParseTimeStart = (new Date().getTime());
'use strict';var Evergage=function(n){function z(c){z="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(d){return typeof d}:function(d){return d&&"function"===typeof Symbol&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d};return z(c)}function ea(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function");}function uc(c,d){for(var a=0;a<d.length;a++){var b=d[a];b.enumerable=b.enumerable||!1;b.configurable=!0;"value"in b&&(b.writable=!0);Object.defineProperty(c,
b.key,b)}}function fa(c,d,a){d&&uc(c.prototype,d);a&&uc(c,a);return c}function L(c,d,a){d in c?Object.defineProperty(c,d,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[d]=a;return c}function vc(c,d){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(c);d&&(b=b.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}));a.push.apply(a,b)}return a}function y(c){for(var d=1;d<arguments.length;d++){var a=null!=arguments[d]?arguments[d]:{};
d%2?vc(a,!0).forEach(function(b){L(c,b,a[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):vc(a).forEach(function(b){Object.defineProperty(c,b,Object.getOwnPropertyDescriptor(a,b))})}return c}function Na(c,d){if("function"!==typeof d&&null!==d)throw new TypeError("Super expression must either be null or a function");c.prototype=Object.create(d&&d.prototype,{constructor:{value:c,writable:!0,configurable:!0}});d&&nb(c,d)}function I(c){I=Object.setPrototypeOf?
Object.getPrototypeOf:function(d){return d.__proto__||Object.getPrototypeOf(d)};return I(c)}function nb(c,d){nb=Object.setPrototypeOf||function(a,b){a.__proto__=b;return a};return nb(c,d)}function ua(c,d){if(null==c)return{};if(null==c)var a={};else{a={};var b=Object.keys(c),e;for(e=0;e<b.length;e++){var f=b[e];0<=d.indexOf(f)||(a[f]=c[f])}}if(Object.getOwnPropertySymbols)for(e=Object.getOwnPropertySymbols(c),f=0;f<e.length;f++)b=e[f],0<=d.indexOf(b)||Object.prototype.propertyIsEnumerable.call(c,
b)&&(a[b]=c[b]);return a}function Oa(c,d){if(d&&("object"===typeof d||"function"===typeof d))return d;if(void 0===c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}function ha(c,d,a){ha="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(a,d,c){for(;!Object.prototype.hasOwnProperty.call(a,d)&&(a=I(a),null!==a););if(a)return d=Object.getOwnPropertyDescriptor(a,d),d.get?d.get.call(c):d.value};return ha(c,d,a||c)}function va(c,d){var a=Array.isArray(c)?
c:void 0;if(!a){a=[];var b=!0,e=!1,f=void 0;try{for(var g=c[Symbol.iterator](),h;!(b=(h=g.next()).done)&&(a.push(h.value),!d||a.length!==d);b=!0);}catch(l){e=!0,f=l}finally{try{if(!b&&null!=g["return"])g["return"]()}finally{if(e)throw f;}}}if(!(c=a))throw new TypeError("Invalid attempt to destructure non-iterable instance");return c}function ob(c){if(Array.isArray(c)){var d=0;for(var a=Array(c.length);d<c.length;d++)a[d]=c[d];d=a}else d=void 0;d||(d=Symbol.iterator in Object(c)||"[object Arguments]"===
Object.prototype.toString.call(c)?Array.from(c):void 0);if(!(c=d))throw new TypeError("Invalid attempt to spread non-iterable instance");return c}function pb(c){var d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:R;return d&&9===d.nodeType||d&&1===d.nodeType?pe.test(c)?d.getElementsByClassName(c.slice(1)):qe.test(c)?d.getElementsByTagName(c):d.querySelectorAll(c):[]}function wa(c){return c.replace(re,function(d,a){return a.toUpperCase()})}function C(c,d,a){if(a)for(a=c.length;a--&&!1!==d.call(c[a],
a,c[a]););else{a=0;for(var b=c.length;a<b&&!1!==d.call(c[a],a,c[a]);a++);}return c}function qb(c,d){var a=c&&(c.matches||c.webkitMatchesSelector||c.msMatchesSelector);return!!a&&a.call(c,d)}function rb(c){return!!c&&c===c.window}function ia(c){return"function"===typeof c}function F(c){return"string"===typeof c}function wc(c){return!isNaN(parseFloat(c))&&isFinite(c)}function sb(c){return F(c)?function(d,a){return qb(a,c)}:ia(c)?c:c instanceof Pa?function(d,a){return c.is(a)}:c?function(d,a){return a===
c}:function(){return!1}}function pa(c,d){return d?c.filter(d):c}function Qa(c){return F(c)?c.match(se)||[]:[]}function U(c,d,a){for(var b=[],e=ia(d),f=0,g=c.length;f<g;f++)if(e){var h=d(c[f]);h.length&&te.apply(b,h)}else for(h=c[f][d];null!=h;)b.push(h),h=a?h[d]:null;return b}function S(c){return 1<c.length?tb.call(c,function(d,a,b){return xc.call(b,d)===a}):c}function ja(c,d,a){if(c&&1===c.nodeType&&d)return c=xa.getComputedStyle(c,null),d?a?c.getPropertyValue(d)||void 0:c[d]:c}function qa(c,d){return parseInt(ja(c,
d),10)||0}function yc(c){if(1<arguments.length&&void 0!==arguments[1]?arguments[1]:ub.test(c))return c;if(!vb[c]){var d=wa(c),a="".concat(d[0].toUpperCase()).concat(d.slice(1));d="".concat(d," ").concat(ue.join("".concat(a," "))).concat(a).split(" ");C(d,function(a,d){if(d in ve)return vb[c]=d,!1})}return vb[c]}function zc(c,d){return(2<arguments.length&&void 0!==arguments[2]?arguments[2]:ub.test(c))||we[c]||!wc(d)?d:"".concat(d,"px")}function Ac(c,d){c=c.dataset[d]||c.dataset[wa(d)];try{return JSON.parse(c)}catch(a){}return c}
function Bc(c,d){return qa(c,"border".concat(d?"Left":"Top","Width"))+qa(c,"padding".concat(d?"Left":"Top"))+qa(c,"padding".concat(d?"Right":"Bottom"))+qa(c,"border".concat(d?"Right":"Bottom","Width"))}function Cc(c,d){return!d||!wb.call(d,function(a){return 0>c.indexOf(a)})}function xe(c,d,a,b,e){e.guid=e.guid||p.guid++;var f=c.___ce=c.___ce||{};f[d]=f[d]||[];f[d].push([a,b,e]);c.addEventListener(d,e)}function xb(c){c=c.split(".");return[c[0],c.slice(1).sort()]}function Ra(c,d,a,b,e){var f=c.___ce=
c.___ce||{};if(d)f[d]&&(f[d]=f[d].filter(function(f){var g=va(f,3);f=g[0];var l=g[1];g=g[2];if(e&&g.guid!==e.guid||!Cc(f,a)||b&&b!==l)return!0;c.removeEventListener(d,g)}));else for(d in f)Ra(c,d,a,b,e)}function Dc(c){return c.multiple&&c.options?U(tb.call(c.options,function(d){return d.selected&&!d.disabled&&!d.parentNode.disabled}),"value"):c.value||""}function Ec(c){if(!F(c))return[];if(ye.test(c))return[ka(RegExp.$1)];var d=ze.test(c)&&RegExp.$1;d=Fc[d]||Fc["*"];d.innerHTML=c;return p(d.childNodes).detach().get()}
function Ae(c,d){c=p(c);c.filter("script").add(c.find("script")).each(function(a,b){if(Be.test(b.type)&&yb.contains(b)){var c=ka("script");c.text=b.textContent.replace(Ce,"");C(De,function(a,d){b[d]&&(c[d]=b[d])});d.head.insertBefore(c,null);d.head.removeChild(c)}})}function aa(c,d,a,b,e,f,g,h){C(c,function(c,f){C(p(f),function(c,f){C(p(d),function(d,c){var g=a?c:f;c=a?f:c;d=d?g.cloneNode(!0):g;e?c.insertBefore(d,b?c.firstElementChild:null):c.parentNode.insertBefore(d,b?c:c.nextElementSibling);Ae(d,
c.ownerDocument)},h)},g)},f);return d}function Gc(c,d){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(c);d&&(b=b.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}));a.push.apply(a,b)}return a}function A(c){for(var d=1;d<arguments.length;d++){var a=null!=arguments[d]?arguments[d]:{};d%2?Gc(Object(a),!0).forEach(function(b){Ta(c,b,a[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):
Gc(Object(a)).forEach(function(b){Object.defineProperty(c,b,Object.getOwnPropertyDescriptor(a,b))})}return c}function J(c){"@babel/helpers - typeof";return J="function"==typeof Symbol&&"symbol"==z(Symbol.iterator)?function(d){return z(d)}:function(d){return d&&"function"==typeof Symbol&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":z(d)},J(c)}function za(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function");}function Hc(c,d){for(var a=0;a<d.length;a++){var b=d[a];
b.enumerable=b.enumerable||!1;b.configurable=!0;"value"in b&&(b.writable=!0);Object.defineProperty(c,Ic(b.key),b)}}function Aa(c,d,a){d&&Hc(c.prototype,d);a&&Hc(c,a);Object.defineProperty(c,"prototype",{writable:!1});return c}function Ta(c,d,a){d=Ic(d);d in c?Object.defineProperty(c,d,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[d]=a;return c}function Ge(c,d){if("function"!==typeof d&&null!==d)throw new TypeError("Super expression must either be null or a function");c.prototype=Object.create(d&&
d.prototype,{constructor:{value:c,writable:!0,configurable:!0}});Object.defineProperty(c,"prototype",{writable:!1});d&&zb(c,d)}function la(c){la=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(d){return d.__proto__||Object.getPrototypeOf(d)};return la(c)}function zb(c,d){zb=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,b){a.__proto__=b;return a};return zb(c,d)}function He(){if("undefined"===typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"===
typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(c){return!1}}function Ie(c){var d=He();return function(){var a=la(c);if(d){var b=la(this).constructor;a=Reflect.construct(a,arguments,b)}else a=a.apply(this,arguments);if(!a||"object"!==z(a)&&"function"!==typeof a){if(void 0!==a)throw new TypeError("Derived constructors may only return object or undefined");if(void 0===this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
a=this}return a}}function Ua(){Ua="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(c,d,a){var b;for(b=c;!Object.prototype.hasOwnProperty.call(b,d)&&(b=la(b),null!==b););if(b)return b=Object.getOwnPropertyDescriptor(b,d),b.get?b.get.call(3>arguments.length?c:a):b.value};return Ua.apply(this,arguments)}function Jc(c){var d=Array.isArray(c)?Ab(c):void 0;d||(d="undefined"!==typeof Symbol&&null!=c[Symbol.iterator]||null!=c["@@iterator"]?Array.from(c):void 0);if(!(c=d||Kc(c)))throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
return c}function Kc(c,d){if(c){if("string"===typeof c)return Ab(c,d);var a=Object.prototype.toString.call(c).slice(8,-1);"Object"===a&&c.constructor&&(a=c.constructor.name);if("Map"===a||"Set"===a)return Array.from(c);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Ab(c,d)}}function Ab(c,d){if(null==d||d>c.length)d=c.length;for(var a=0,b=Array(d);a<d;a++)b[a]=c[a];return b}function Bb(c,d){var a="undefined"!==typeof Symbol&&c[Symbol.iterator]||c["@@iterator"];if(!a){if(Array.isArray(c)||
(a=Kc(c))||d&&c&&"number"===typeof c.length){a&&(c=a);var b=0;d=function(){};return{s:d,n:function(){return b>=c.length?{done:!0}:{done:!1,value:c[b++]}},e:function(a){throw a;},f:d}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var e=!0,f=!1,g;return{s:function(){a=a.call(c)},n:function(){var b=a.next();e=b.done;return b},e:function(a){f=!0;g=a},f:function(){try{e||null==a.return||a.return()}finally{if(f)throw g;
}}}}function Ic(c){a:if("object"===z(c)&&null!==c){var d=c[Symbol.toPrimitive];if(void 0!==d){c=d.call(c,"string");if("object"!==z(c))break a;throw new TypeError("@@toPrimitive must return a primitive value.");}c=String(c)}return"symbol"===z(c)?c:String(c)}function Lc(c){r.setLoggingLevel(c)}function Mc(){return r.getLoggingLevel()}function Cb(c){var d,a,b,e=[],f=[a=1732584193,b=4023233417,~a,~b,3285377520],g=[],h=unescape(encodeURI(c))+"\u0080",l=h.length;for(g[c=--l/4+2|15]=8*l;~l;)g[l>>2]|=h.charCodeAt(l)<<
8*~l--;for(d=l=0;d<c;d+=16){for(a=f;80>l;a=[a[4]+(e[l]=16>l?~~g[d+l]:2*h|0>h)+1518500249+[b&ya|~b&k,h=341275144+(b^ya^k),882459459+(b&ya|b&k|ya&k),h+1535694389][l++/5>>2]+((h=a[0])<<5|h>>>27),h,b<<30|b>>>2,ya,k]){h=e[l-3]^e[l-8]^e[l-14]^e[l-16];b=a[1];var ya=a[2];var k=a[3]}for(l=5;l;)f[--l]+=a[l]}for(h="";40>l;)h+=(f[l>>3]>>4*(7-l++)&15).toString(16);return h}function Nc(){var c=(window.navigator.userAgent||"")+(window.navigator.platform||"")+(new Date).getTime+JSON.stringify({})+Math.random();return Ba(c).slice(0,
16)}function Oc(c,d,a){return"function"===typeof a?{bind:c,selector:d,callback:a}:null}function Je(){Db=u.onFireException.on(function(c,d){document.dispatchEvent(new CustomEvent(v.OnException,{detail:{error:c,context:d}}))});Eb=u.onEventSend.on(function(c){document.dispatchEvent(new CustomEvent(v.OnBeforeEventSend,{detail:{actionEvent:c},cancelable:!0}))&&document.dispatchEvent(new CustomEvent(v.OnEventSend,{detail:{actionEvent:c}}))});Fb=u.onPageMatchStatusUpdated.on(function(c){document.dispatchEvent(new CustomEvent(v.OnPageMatchStatusUpdated,
{detail:{matchStatus:c}}))});Gb=u.onInitSitemap.on(function(c){document.dispatchEvent(new CustomEvent(v.OnInitSitemap,{detail:{sitemapConfig:c}}))})}function V(c){Db&&Db();Eb&&Eb();Fb&&Fb();Gb&&Gb();document.dispatchEvent(new CustomEvent(v.OnShutDown,{detail:{message:c}}));Hb="shutDown";return!1}function Va(c,d,a,b){return c.addEventListener?(c.addEventListener(d,a,b),!0):!1}function ba(c,d,a,b){return c.removeEventListener?(c.removeEventListener(d,a,b),!0):!1}function Ib(c){var d=document.createElement("a");
d.href=c;return d}function Pc(c){try{return decodeURIComponent(c.replace(/\+/g," "))}catch(d){return null}}function Qc(c){if(c=c.detail&&c.detail.actionEvent)if(c.itemAction&&c.itemAction.includes("View"))Wa();else{var d;if(d=c.interaction)c=c.interaction.name,d=c===ma.ViewCatalogObject||c===ma.ViewCatalogObjectDetail||c===ma.QuickViewCatalogObject||c===Ca.StopQuickViewCatalogObject;d&&Wa()}}function Jb(c){-1!==W&&(Kb(!1,c),clearTimeout(W),W=-1)}function Wa(){if(!q.beaconConfig.doNotTrackPingRequestsForActions){Jb(!0);
document.removeEventListener(n.CustomEvents.OnEventSend,Qc);document.addEventListener(n.CustomEvents.OnEventSend,Qc);var c=Date.now();if(-1===G||c-G>=q.beaconConfig.minimumActivityTimeToRegister)G=c;W=setTimeout(function(){Kb(!0)},q.beaconConfig.timeOnPageTimerLengthMillis);r.info("Setting up time on page listeners.");ba(window,"unload",Lb);Va(window,"unload",Lb);ba(window,"blur",Mb);Va(window,"blur",Mb);ba(window,"focus",Nb);Va(window,"focus",Nb);ba(document,"mousemove keydown scroll click",Da);
Va(document,"mousemove keydown scroll click",Da)}}function Kb(c,d){var a=Date.now();-1!==G&&(a-=G,q.beaconConfig.timeOnPageTimerLengthMillis<a?Xa():(r.trace("Evergage: timeOnPage before: sendActivityPingRequest: ".concat(D)),D+=a,r.trace("Evergage: timeOnPage after: sendActivityPingRequest: ".concat(D)),-1!==X&&clearTimeout(X),X=setTimeout(Xa,q.beaconConfig.timeOnPageTimerLengthMillis-a)));if(0<D){D=Math.min(D,q.beaconConfig.timeOnPageTimerLengthMillis);if(!0!==d||2E3<=D)d=Ke(D),Le(d),Rc(d);D=0}0>
D&&(D=0);c&&(-1!==W&&clearTimeout(W),W=setTimeout(function(){Kb(!0)},q.beaconConfig.timeOnPageTimerLengthMillis))}function Ke(c){c={timeOnPageMillis:c};var d=Sc(),a={};if(d&&d.itemAction&&d.catalog)a=d.catalog;else if(d&&d.interaction&&d.interaction.catalogObject){a=d.interaction.catalogObject;var b={},e=a.id,f=a.type,g=ua(a,["id","type"]);e&&f&&(b[a.type]={_id:e});a.relatedCatalogObjects&&(f=g.relatedCatalogObjects,e=f.Category,f=ua(f,["Category"]),Array.isArray(e)&&(b[a.type].categories=Tc(e)),
0!==Object.keys(f).length&&(b[a.type].relatedCatalogObjects=f));a=b}0!==Object.keys(a).length&&(c.catalog=a);d&&d.interaction&&null!=d.interaction.name?c.action=d.interaction.name:d&&null!=d.action&&(c.action=d.action);Uc();c.performance={};d=ua(x,["sdkLoadTime","sdkParseTime"]);for(var h in d)x[h]&&(c.performance[h]=x[h]);return c}function Lb(c){Jb()}function Mb(c){try{r.trace("Evergage: window blurred"),Xa()}catch(d){w(d,"windowBlurFunction")}}function Nb(c){try{r.trace("Evergage: window focused"),
Da()}catch(d){w(d,"windowFocusFunction")}}function Xa(){try{-1!==X&&(clearTimeout(X),X=-1);var c=Date.now(),d=0;-1!==G&&(d=c-G);r.trace("Evergage: timeOnPage before: setUserInactive: ".concat(D));D+=d;r.trace("Evergage: timeOnPage after: setUserInactive: ".concat(D));G=-1}catch(a){w(a,"setUserInactive")}}function Da(){r.trace("activity registered");try{-1!==X&&(clearTimeout(X),X=-1);var c=Date.now();if(-1===G||c-G>=q.beaconConfig.minimumActivityTimeToRegister)-1!==G&&(r.trace("Evergage: timeOnPage before: activityRegistered: ".concat(D)),
D+=c-Math.max(G,-1),r.trace("Evergage: timeOnPage after: activityRegistered: ".concat(D))),G=c}catch(d){w(d,"activityRegistered")}}function Ob(c,d){c="string"===typeof c?Error(c):c;for(var a in d)Object.defineProperty(c,a,{value:d[a],enumerable:!1});return c}var M=function(c,d){return d={exports:{}},c(d,d.exports),d.exports}(function(c,d){c.exports=function(){function a(){for(var a=0,b={};a<arguments.length;a++){var d=arguments[a],c;for(c in d)b[c]=d[c]}return b}function b(d){function c(){}function e(b,
e,f){if("undefined"!==typeof document){f=a({path:"/"},c.defaults,f);"number"===typeof f.expires&&(f.expires=new Date(1*new Date+864E5*f.expires));f.expires=f.expires?f.expires.toUTCString():"";try{var g=JSON.stringify(e);/^[\{\[]/.test(g)&&(e=g)}catch(qg){}e=d.write?d.write(e,b):encodeURIComponent(String(e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent);b=encodeURIComponent(String(b)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,
escape);g="";for(var h in f)f[h]&&(g+="; "+h,!0!==f[h]&&(g+="="+f[h].split(";")[0]));return document.cookie=b+"="+e+g}}function h(a,b){if("undefined"!==typeof document){for(var c={},e=document.cookie?document.cookie.split("; "):[],f=0;f<e.length;f++){var g=e[f].split("="),h=g.slice(1).join("=");b||'"'!==h.charAt(0)||(h=h.slice(1,-1));try{var l=g[0].replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent);h=(d.read||d)(h,l)||h.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent);if(b)try{h=JSON.parse(h)}catch(Me){}c[l]=
h;if(a===l)break}catch(Me){}}return a?c[a]:c}}c.set=e;c.get=function(a){return h(a,!1)};c.getJSON=function(a){return h(a,!0)};c.remove=function(b,d){e(b,"",a(d,{expires:-1}))};c.defaults={};c.withConverter=b;return c}return b(function(){})}()}),R=document,xa=window,yb=R.documentElement,ka=R.createElement.bind(R),Vc=ka("div"),Pb=ka("table"),Ne=ka("tbody"),Wc=ka("tr"),Qb=Array.isArray,ca=Array.prototype,tb=ca.filter,xc=ca.indexOf,Oe=ca.map,te=ca.push,Xc=ca.slice,wb=ca.some,Pe=ca.splice,Qe=/^#[\w-]*$/,
pe=/^\.[\w-]*$/,Re=/<.+>/,qe=/^\w+$/,Pa=function(){function c(d){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:R;ea(this,c);if(d){if(d instanceof Pa)return d;var b=d;if(F(d)){if(b=a instanceof Pa?a[0]:a,b=Qe.test(d)?b.getElementById(d.slice(1)):Re.test(d)?Ec(d):pb(d,b),!b)return}else if(ia(d))return this.ready(d);if(b.nodeType||b===xa)b=[b];this.length=b.length;a=0;for(var e=this.length;a<e;a++)this[a]=b[a]}}fa(c,[{key:"init",value:function(d,a){return new c(d,a)}}]);return c}(),m=
Pa.prototype,p=m.init;p.fn=p.prototype=m;m.length=0;m.splice=Pe;"function"===typeof Symbol&&(m[Symbol.iterator]=ca[Symbol.iterator]);m.map=function(c){return p(Oe.call(this,function(d,a){return c.call(d,a,d)}))};m.slice=function(c,d){return p(Xc.call(this,c,d))};var re=/-([a-z])/g;p.camelCase=wa;p.each=C;m.each=function(c){return C(this,c)};m.removeProp=function(c){return this.each(function(d,a){delete a[c]})};p.extend=function(c){for(var d=arguments.length,a=Array(1<d?d-1:0),b=1;b<d;b++)a[b-1]=arguments[b];
d=arguments.length;for(a=2>d?0:1;a<d;a++)for(var e in arguments[a])c[e]=arguments[a][e];return c};m.extend=function(c){return p.extend(m,c)};p.guid=1;p.matches=qb;p.isWindow=rb;p.isFunction=ia;p.isString=F;p.isNumeric=wc;p.isArray=Qb;m.prop=function(c,d){if(c){if(F(c))return 2>arguments.length?this[0]&&this[0][c]:this.each(function(a,e){e[c]=d});for(var a in c)this.prop(a,c[a]);return this}};m.get=function(c){return void 0===c?Xc.call(this):this[0>c?c+this.length:c]};m.eq=function(c){return p(this.get(c))};
m.first=function(){return this.eq(0)};m.last=function(){return this.eq(-1)};m.filter=function(c){var d=sb(c);return p(tb.call(this,function(a,b){return d.call(a,b,a)}))};var se=/\S+/g;m.hasClass=function(c){return!!c&&wb.call(this,function(d){return d.classList.contains(c)})};m.removeAttr=function(c){var d=Qa(c);return this.each(function(a,b){C(d,function(a,d){b.removeAttribute(d)})})};m.attr=function(c,d){if(c){if(F(c)){if(2>arguments.length){if(!this[0])return;var a=this[0].getAttribute(c);return null===
a?void 0:a}return void 0===d?this:null===d?this.removeAttr(c):this.each(function(a,e){e.setAttribute(c,d)})}for(a in c)this.attr(a,c[a]);return this}};m.toggleClass=function(c,d){var a=Qa(c),b=void 0!==d;return this.each(function(c,f){C(a,function(a,c){b?d?f.classList.add(c):f.classList.remove(c):f.classList.toggle(c)})})};m.addClass=function(c){return this.toggleClass(c,!0)};m.removeClass=function(c){return arguments.length?this.toggleClass(c,!1):this.attr("class","")};p.unique=S;m.add=function(c,
d){return p(S(this.get().concat(p(c,d).get())))};var ub=/^--/,vb={},ve=Vc.style,ue=["webkit","moz","ms"];p.prefixedProp=yc;var we={animationIterationCount:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0};m.css=function(c,d){if(F(c)){var a=ub.test(c);c=yc(c,a);if(2>arguments.length)return this[0]&&ja(this[0],c,a);if(!c)return this;d=zc(c,d,a);return this.each(function(b,f){f&&1===f.nodeType&&(a?f.style.setProperty(c,d):f.style[c]=
d)})}for(var b in c)this.css(b,c[b]);return this};m.data=function(c,d){if(!c){if(!this[0])return;var a={},b;for(b in this[0].dataset)a[b]=Ac(this[0],b);return a}if(F(c))return 2>arguments.length?this[0]&&Ac(this[0],c):this.each(function(a,b){a=d;try{a=JSON.stringify(a)}catch(g){}b.dataset[wa(c)]=a});for(a in c)this.data(a,c[a]);return this};C([!0,!1],function(c,d){C(["Width","Height"],function(a,b){var c="".concat(d?"outer":"inner").concat(b);m[c]=function(e){if(this[0])return rb(this[0])?xa[c]:this[0]["".concat(d?
"offset":"client").concat(b)]+(e&&d?qa(this[0],"margin".concat(a?"Top":"Left"))+qa(this[0],"margin".concat(a?"Bottom":"Right")):0)}})});C(["width","height"],function(c,d){m[d]=function(a){if(!this[0])return void 0===a?void 0:this;if(!arguments.length)return rb(this[0])?this[0][wa("outer-".concat(d))]:this[0].getBoundingClientRect()[d]-Bc(this[0],!c);var b=parseInt(a,10);return this.each(function(a,f){f&&1===f.nodeType&&(a=ja(f,"boxSizing"),f.style[d]=zc(d,b+("border-box"===a?Bc(f,!c):0)))})}});var Rb=
{};m.toggle=function(c){return this.each(function(d,a){if(void 0===c?"none"===ja(a,"display"):c){if(a.style.display=a.___cd||"","none"===ja(a,"display")){d=a.style;a=a.tagName;if(Rb[a])a=Rb[a];else{var b=ka(a);R.body.insertBefore(b,null);var e=ja(b,"display");R.body.removeChild(b);a=Rb[a]="none"!==e?e:"block"}d.display=a}}else a.___cd=ja(a,"display"),a.style.display="none"})};m.hide=function(){return this.toggle(!1)};m.show=function(){return this.toggle(!0)};var Sb={focus:"focusin",blur:"focusout"},
Yc={mouseenter:"mouseover",mouseleave:"mouseout"},Se=/^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;m.off=function(c,d,a){var b=this;if(void 0===c)this.each(function(a,b){Ra(b)});else if(F(c))ia(d)&&(a=d,d=""),C(Qa(c),function(c,e){c=xb(Yc[e]||Sb[e]||e);c=va(c,2);var f=c[0],g=c[1];b.each(function(b,c){Ra(c,f,g,d,a)})});else for(var e in c)this.off(e,c[e]);return this};m.on=function(c,d,a,b){var e=this;if(!F(c)){for(var f in c)this.on(f,d,c[f]);return this}ia(d)&&(a=d,d="");C(Qa(c),function(c,
f){c=xb(Yc[f]||Sb[f]||f);c=va(c,2);var g=c[0],h=c[1];e.each(function(c,e){c=function Fe(c){if(!c.namespace||Cc(h,c.namespace.split("."))){var f=e;if(d){for(var l=c.target;!qb(l,d);){if(l===e)return;l=l.parentNode;if(!l)return}f=l;c.___cd=!0}c.___cd&&Object.defineProperty(c,"currentTarget",{configurable:!0,get:function(){return f}});l=a.call(f,c,c.data);b&&Ra(e,g,h,d,Fe);!1===l&&(c.preventDefault(),c.stopPropagation())}};c.guid=a.guid=a.guid||p.guid++;xe(e,g,h,d,c)})});return this};m.one=function(c,
d,a){return this.on(c,d,a,!0)};m.ready=function(c){"loading"!==R.readyState?c(p):R.addEventListener("DOMContentLoaded",function(){c(p)});return this};m.trigger=function(c,d){if(F(c)){var a=xb(c),b=va(a,2);a=b[0];b=b[1];var e=Se.test(a)?"MouseEvents":"HTMLEvents";c=R.createEvent(e);c.initEvent(a,!0,!0);c.namespace=b.join(".")}c.data=d;var f=c.type in Sb;return this.each(function(a,b){if(f&&ia(b[c.type]))b[c.type]();else b.dispatchEvent(c)})};var Te=/%20/g,Ue=/file|reset|submit|button|image/i,Ve=/radio|checkbox/i;
m.serialize=function(){var c="";this.each(function(d,a){C(a.elements||[a],function(a,d){d.disabled||!d.name||"FIELDSET"===d.tagName||Ue.test(d.type)||Ve.test(d.type)&&!d.checked||(a=Dc(d),void 0!==a&&(a=Qb(a)?a:[a],C(a,function(a,b){a=c;b="&".concat(encodeURIComponent(d.name),"=").concat(encodeURIComponent(b).replace(Te,"+"));c=a+b})))})});return c.slice(1)};m.val=function(c){return void 0===c?this[0]&&Dc(this[0]):this.each(function(d,a){if("SELECT"===a.tagName){var b=Qb(c)?c:null===c?[]:[c];C(a.options,
function(a,c){c.selected=0<=b.indexOf(c.value)})}else a.value=null===c?"":c})};m.clone=function(){return this.map(function(c,d){return d.cloneNode(!0)})};m.detach=function(){return this.each(function(c,d){d.parentNode&&d.parentNode.removeChild(d)})};var ze=/^\s*<(\w+)[^>]*>/,ye=/^\s*<(\w+)\s*\/?>(?:<\/\1>)?\s*$/,Fc={"*":Vc,tr:Ne,td:Wc,th:Wc,thead:Pb,tbody:Pb,tfoot:Pb};p.parseHTML=Ec;m.empty=function(){return this.each(function(c,d){for(;d.firstChild;)d.removeChild(d.firstChild)})};m.html=function(c){return void 0===
c?this[0]&&this[0].innerHTML:this.each(function(d,a){a.innerHTML=c})};m.remove=function(){return this.detach().off()};m.text=function(c){return void 0===c?this[0]?this[0].textContent:"":this.each(function(d,a){a.textContent=c})};m.unwrap=function(){this.parent().each(function(c,d){c=p(d);c.replaceWith(c.children())});return this};m.offset=function(){var c=this[0];if(c)return c=c.getBoundingClientRect(),{top:c.top+xa.pageYOffset-yb.clientTop,left:c.left+xa.pageXOffset-yb.clientLeft}};m.offsetParent=
function(){return p(this[0]&&this[0].offsetParent)};m.position=function(){var c=this[0];if(c)return{left:c.offsetLeft,top:c.offsetTop}};m.children=function(c){return pa(p(S(U(this,function(c){return c.children}))),c)};m.contents=function(){return p(S(U(this,function(c){return"IFRAME"===c.tagName?[c.contentDocument]:c.childNodes})))};m.find=function(c){return p(S(U(this,function(d){return pb(c,d)})))};var Ce=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Be=/^$|^module$|\/(java|ecma)script/i,De=["type",
"src","nonce","noModule"];m.after=function(){return aa(arguments,this,!1,!1,!1,!0,!0)};m.append=function(){return aa(arguments,this,!1,!1,!0)};m.appendTo=function(c){return aa(arguments,this,!0,!1,!0)};m.before=function(){return aa(arguments,this,!1,!0)};m.insertAfter=function(c){return aa(arguments,this,!0,!1,!1,!1,!1,!0)};m.insertBefore=function(c){return aa(arguments,this,!0,!0)};m.prepend=function(){return aa(arguments,this,!1,!0,!0,!0,!0)};m.prependTo=function(c){return aa(arguments,this,!0,
!0,!0,!1,!1,!0)};m.replaceWith=function(c){return this.before(c).remove()};m.replaceAll=function(c){p(c).replaceWith(this);return this};m.wrapAll=function(c){c=p(c);for(var d=c[0];d.children.length;)d=d.firstElementChild;this.first().before(c);return this.appendTo(d)};m.wrap=function(c){return this.each(function(d,a){var b=p(c)[0];p(a).wrapAll(d?b.cloneNode(!0):b)})};m.wrapInner=function(c){return this.each(function(d,a){d=p(a);a=d.contents();a.length?a.wrapAll(c):d.append(c)})};m.has=function(c){var d=
F(c)?function(a,b){return pb(c,b).length}:function(a,b){return b.contains(c)};return this.filter(d)};m.is=function(c){var d=sb(c);return wb.call(this,function(a,b){return d.call(a,b,a)})};m.next=function(c,d){return pa(p(S(U(this,"nextElementSibling",d))),c)};m.nextAll=function(c){return this.next(c,!0)};m.not=function(c){var d=sb(c);return this.filter(function(a,b){return!d.call(b,a,b)})};m.parent=function(c){return pa(p(S(U(this,"parentNode"))),c)};m.index=function(c){var d=c?p(c)[0]:this[0];c=
c?this:p(d).parent().children();return xc.call(c,d)};m.closest=function(c){var d=this.filter(c);if(d.length)return d;var a=this.parent();return a.length?a.closest(c):d};m.parents=function(c){return pa(p(S(U(this,"parentElement",!0))),c)};m.prev=function(c,d){return pa(p(S(U(this,"previousElementSibling",d))),c)};m.prevAll=function(c){return this.prev(c,!0)};m.siblings=function(c){return pa(p(S(U(this,function(c){return p(c).parent().children().not(c)}))),c)};var Tb=["error","warn","info","debug",
"trace"],r=new (function(){function c(){var d=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;za(this,c);this.console=window.console;this.level=a;this.prefix=d;this.buildLogFunctions()}Aa(c,[{key:"shouldLog",value:function(c){return c<=this.level}},{key:"setLoggingLevel",value:function(c){this.level="string"===typeof c?Tb.indexOf(c.toLowerCase())+1:c||0;this.buildLogFunctions()}},{key:"getLoggingLevel",value:function(){return this.level}},
{key:"setPrefix",value:function(c){this.prefix=c;this.buildLogFunctions()}},{key:"getPrefix",value:function(){return this.prefix}},{key:"buildLogFunctions",value:function(){var c=this;Tb.forEach(function(a,b){a=Tb[b];c[a]=c.shouldLog(b+1)?c.getLogFn(a):function(){}})}},{key:"getLogFn",value:function(c){return Function.prototype.bind.call(this.console.log,this.console,"[".concat(c.toUpperCase(),"]").concat(this.prefix?"("+this.prefix+")":"",":"))}}]);return c}()),v;(function(c){c.OnEventSend="interactions:onEventSend";
c.OnBeforeEventSend="interactions:onBeforeEventSend";c.OnException="interactions:onException";c.OnPageMatchStatusUpdated="interactions:onPageMatchStatusUpdated";c.OnInit="interactions:onInit";c.OnInitSitemap="interactions:onInitSitemap";c.OnShutDown="interactions:onShutDown";c.OnSetAnonymousId="interactions:onSetAnonymousId";c.OnResetAnonymousId="interactions:onResetAnonymousId";c.OnClearPersistedIdentities="interactions:onClearPersistedIdentities";c.OnClearCookie="interactions:onClearCookie";c.OnConsentRevoke=
"interactions:onConsentRevoke";c.OnBeforeInit="interactions:onBeforeInit"})(v||(v={}));var Ba=Cb.default?Cb.default:Cb,Zc,na=window.location.hostname,Ub=function(c){na=c;$c()},$c=function(){Zc=Ba("".concat(Ba(na+"/").slice(0,4))).slice(0,4)},Ea=function(){return"".concat("_sfid","_").concat(Zc)},ad;document.addEventListener(v.OnClearCookie,function(c){var d=c.detail&&c.detail.options||{};d.domain&&Ub(c.detail.options.domain);bd(A({domain:na},d))});var Vb=function(){return M.getJSON(Ea())},bd=function(c){M.remove(Ea(),
c)},cd=function(c){ra.write(A(A({},Vb()),{},{consents:c}),730)},ra={read:Vb,write:function(c,d){ad?M.set(Ea(),c,{expires:d,domain:na,secure:!0}):M.set(Ea(),c,{expires:d,domain:na});M.get(Ea())||r.warn("Web SDK cookie (_sfid) could not be set. This is possibly due to a restricted top level domain. See https://publicsuffix.org/learn/ for more information.")},remove:bd},We=[/bot/i,/spider/i,/facebookexternalhit/i,/simplepie/i,/yahooseeker/i,/embedly/i,/quora link preview/i,/outbrain/i,/vkshare/i,/monit/i,
/Pingability/i,/Monitoring/i,/WinHttpRequest/i,/Apache-HttpClient/i,/getprismatic.com/i,/python-requests/i,/Twurly/i,/yandex/i,/browserproxy/i,/crawler/i,/Qwantify/i,/Yahoo! Slurp/i,/pinterest/i,/Tumblr\/14.0.835.186/i,/Tumblr Agent 14.0/i],Xe=function(c){return We.some(function(d){return d.test(c)})},Ye=navigator.vendor&&-1<navigator.vendor.indexOf("Apple")&&navigator.userAgent&&-1==navigator.userAgent.indexOf("CriOS")&&-1==navigator.userAgent.indexOf("FxiOS"),T="";document.addEventListener(v.OnResetAnonymousId,
function(){ra.remove();dd()});document.addEventListener(v.OnSetAnonymousId,function(c){c.detail&&c.detail.newAnonymousId&&(c=c.detail.newAnonymousId,ra.write(A(A({},Vb()),{},{anonymousId:c}),730))});var Ya=function(c){(T=c)?document.dispatchEvent(new CustomEvent(v.OnSetAnonymousId,{detail:{newAnonymousId:c}})):r.warn("Attempted to setAnonymousId but not parameter is undefined")},dd=function(){ed()?(T=ra.read().anonymousId,Ya(T),r.debug("Loaded anonymous identity record from cookie: ".concat(JSON.stringify(T)))):
(Ya(Nc()),r.debug("Created new anonymous identity record. anonymousId: ".concat(T)));return T},ed=function(){var c=ra.read();return!!(c&&"object"===J(c)&&0<Object.keys(c).length)},Za=function(){function c(){za(this,c);this.listeners=[]}Aa(c,[{key:"on",value:function(c){var a=this;(this.listeners=this.listeners||[]).push(c);return function(){a.listeners=a.listeners.filter(function(a){return a!==c})}}},{key:"once",value:function(c){var a=this;return this.on(function(){a.unbindAll();try{for(var b=arguments.length,
d=Array(b),f=0;f<b;f++)d[f]=arguments[f];c.apply(a,d)}catch(g){r.error("Signal listener callback error: "+g)}})}},{key:"emit",value:function(){for(var c=this,a=arguments.length,b=Array(a),e=0;e<a;e++)b[e]=arguments[e];0!==this.listeners.length&&this.listeners.forEach(function(a){try{a.apply(c,b)}catch(g){r.error("Signal listener callback error: "+g)}})}},{key:"unbindAll",value:function(){this.listeners=[]}}]);return c}(),Ze=function(c){r.debug("Unbinding all signals for type: ",c);Object.keys(c).forEach(function(d){c[d].unbindAll&&
c[d].unbindAll()})},u=Aa(function d(){za(this,d)});u.onEventSend=new Za;u.onFireException=new Za;u.onPageMatchStatusUpdated=new Za;u.onInitSitemap=new Za;u.unbindAll=function(){Ze(u)};var t={currentPage:null,matchedConfig:null,matchStatus:null},N={pageTypes:[]},E=null,O;(function(d){d.Pending="pending";d.Running="running";d.Selected="selected";d.Matched="matched";d.Rejected="rejected"})(O||(O={}));var $a=function(d){return new Promise(function(a,b){var e=N.pageTypeDefault;e&&Fa({pageName:e.name,status:O.Pending});
e&&!d.length?(Wb(e),a(e)):($e(d),d.map(function(f){af(f).then(function(g){g?(e&&fd(e),Wb(f),a(f)):(fd(f),bf(d)||(e?(Wb(e),a(e)):b("No matching page found")))}).catch(function(a){"sitemap_reinit"!==a&&u.onFireException.emit(Error("isMatch failed while evaluating the ".concat(f.name," page config")),"Site-wide Javascript")})}))})},gd=function(){t.matchStatus&&(t.matchStatus.forEach(function(d){d.status===O.Running&&d._reject("sitemap_reinit")}),t.matchStatus=[]);u.onPageMatchStatusUpdated.emit(t.matchStatus)},
$e=function(d){d.forEach(function(a){Fa({pageName:a.name,status:O.Pending})})},Wb=function(d){Fa({pageName:d.name,endTime:Date.now(),status:t.matchStatus.find(function(a){return a.status===O.Selected})?O.Matched:O.Selected})},fd=function(d){Fa({pageName:d.name,status:O.Rejected,endTime:Date.now()})},bf=function(d){return t.matchStatus.filter(function(a){return a.status===O.Rejected},0).length<d.length},af=function(d){return new Promise(function(a,b){Fa({pageName:d.name,status:O.Running,startTime:Date.now(),
_reject:b});"function"===typeof d.isMatch?(b=d.isMatch(),"object"===J(b)?b.then(function(b){a(b)}).catch(function(){}):a(b)):u.onFireException.emit(Error("isMatch failed while evaluating the ".concat(d.name," page config. isMatch must be a function.")),"Site-wide Javascript")})},Fa=function(d){t.matchStatus=[].concat(Jc(t.matchStatus||[]),[d]);u.onPageMatchStatusUpdated.emit(t.matchStatus)},ma;(function(d){d.ViewCatalogObject="View Catalog Object";d.ViewCatalogObjectDetail="View Catalog Object Detail";
d.QuickViewCatalogObject="Quick View Catalog Object";d.ShareCatalogObject="Share Catalog Object";d.ReviewCatalogObject="Review Catalog Object";d.CommentCatalogObject="Comment Catalog Object";d.FavoriteCatalogObject="Favorite Catalog Object"})(ma||(ma={}));var Xb;(function(d){d.AddToCart="Add To Cart";d.RemoveFromCart="Remove From Cart";d.ReplaceCart="Replace Cart"})(Xb||(Xb={}));var Yb;(function(d){d.Purchase="Purchase";d.Preorder="Preorder";d.Cancel="Cancel";d.Ship="Ship";d.Deliver="Deliver";d.Return=
"Return";d.Exchange="Exchange"})(Yb||(Yb={}));var sa;(sa||(sa={})).MetadataUpdate="MetadataUpdate";var hd;(hd||(hd={})).Tracking="Tracking";(function(d){d.OptIn="Opt In";d.OptOut="Opt Out"})(n.ConsentStatus||(n.ConsentStatus={}));var w=function(d,a,b){u.onFireException.emit(d,a);r.warn("sendException",{event,errorSection:a})},P=[],id=function(){return P},jd=function(d){return P.find(function(a){return d.purpose==a.consent.purpose})},Zb=function(d){kd(d,!0)},kd=function(d,a){Array.isArray(d)?d.forEach(function(b){ld(b,
a)}):ld(d,a);cd(P)},ld=function(d,a){if(d&&"object"==J(d)&&d.purpose&&d.provider&&d.status)var b=!0;else w(Error("Invalid consent, check that consent is a valid object and all fields are defined: ".concat(JSON.stringify(d))),"Salesforce Web SDK"),b=!1;if(b)if(b=jd(d)){var e=b.consent.status;if(b.consent.status!=d.status||b.consent.provider!=d.provider)b.consent=d,b.lastUpdateTime=(new Date).toISOString();a&&e==n.ConsentStatus.OptIn&&d.status==n.ConsentStatus.OptOut&&md(b)}else d={consent:d,lastUpdateTime:(new Date).toISOString()},
P.push(d),a&&d.consent.status==n.ConsentStatus.OptOut&&md(d)},md=function(d){document.dispatchEvent(new CustomEvent(v.OnConsentRevoke,{detail:{revokedConsent:d}}))},cf=function(d){var a=(new Date).toISOString();d.forEach(function(b){jd(b).lastSentTime=a});cd(P)},ef=function(d){df();Promise.resolve(d).then(function(a){a&&0<a.length&&Zb(a)})},df=function(){var d=ra.read();d&&(P=d.consents||[])},ff=function(d){return 0<=d.findIndex(function(a){return a.status==n.ConsentStatus.OptIn})},gf=function(){return ff(P.map(function(d){return d.consent}))},
nd=function(d){d.source=d.source||{};var a=A({},d.source||{}),b;(b=d.source.pageType)||(b=t.currentPage&&t.currentPage.source?t.currentPage.source.pageType:void 0);d.source=A(a,{},{pageType:b,url:d.source.url||window.location.href,urlReferrer:d.source.urlReferrer||document.referrer,channel:d.source.channel||"Web"});d.user=A(A({},d.user||{}),{},{anonymousId:T});hf(d)},hf=function(d){d.consents&&kd(d.consents,!1);d.consents=P.filter(function(a){return!a.lastSentTime||new Date(a.lastUpdateTime)>=new Date(a.lastSentTime)}).map(function(a){return a.consent});
cf(d.consents)};document.addEventListener(v.OnConsentRevoke,function(d){d.detail&&d.detail.revokedConsent&&jf({interaction:{name:sa.MetadataUpdate},consents:[d.detail.revokedConsent.consent]})});var pd=function(d){return od(d,gf).catch(function(a){r.error(a.message);u.onFireException.emit(a,"Site-wide JavaScript");return d})},jf=function(d){od(d,function(){return!0}).then(function(){return r.debug("Consent revoked")},function(a){return u.onFireException.emit(a,"Site-wide JavaScript")})},od=function(d,
a){a:{var b=d,e=t.matchedConfig;try{b=e&&e.onActionEvent?e.onActionEvent(b):b;if("object"===J(b)){d=b;break a}u.onFireException.emit(Error("onActionEvent failed for the ".concat(t.matchedConfig.name," page config. Must return an object or null.")),"Site-wide Javascript")}catch(f){u.onFireException.emit(Error("onActionEvent failed for the ".concat(t.matchedConfig.name," page config. ").concat(f.message,".")),"Site-wide Javascript")}d=void 0}a:{b=d;try{b=N.global&&N.global.onActionEvent?N.global.onActionEvent(b):
b;if("object"===J(b)){d=b;break a}u.onFireException.emit(Error("onActionEvent failed for the global page config. Must return an object or null."),"Site-wide Javascript")}catch(f){u.onFireException.emit(Error("onActionEvent failed for the global page config. ".concat(f.message,".")),"Site-wide Javascript")}d=void 0}nd(d);a&&!a()&&r.debug("No opt-in consents provided. Event will still be dispatched.");r.debug("Sent event: ",d);u.onEventSend.emit(d);return Promise.resolve(d)},kf=function(d){return new Promise(function(a,
b){u.onInitSitemap.once(function(){return b("sitemap_reinit")});var e={name:null},f=[];Object.keys(d.interaction).forEach(function(a){var b=qd(d.interaction[a],a).then(function(b){e[a]=b});f.push(b)});Promise.all(f).then(function(){a(e)}).catch(function(a){u.onFireException.emit(Error("Catalog object interaction config was rejected"),"Site-wide Javascript")})})},qd=function(d,a){try{return E=a,"object"===J(d)&&!Array.isArray(d)&&0<Object.keys(d).length?lf(d):Promise.resolve(d).then(function(a){return"function"===
typeof a?a():a})}catch(b){u.onFireException.emit(Error("getValue for ".concat(a," failed on ").concat(t.matchedConfig.name," while evaluating custom function. ").concat(b.message,".")),"Site-wide Javascript")}},lf=function(d){var a={},b=Object.keys(d),e={};b.forEach(function(b){var e=qd(d[b],b);a[b]=e});return Promise.all(Object.values(a)).then(function(a){a.forEach(function(a,d){e[b[d]]=a});return e})},ab,mf=function(){$b();rd()&&(ab=setInterval(function(){var d=!1,a=(new Date).getTime(),b=t.matchedConfig.listeners.map(function(a){if(a.selectorFound)return a;
a=bb(a);d=a.selectorFound||d;return a});d&&Object.assign(t.matchedConfig,A(A({},t.matchedConfig),{},{listeners:b}));(50<(new Date).getTime()-a||!rd())&&$b()},1E3))},rd=function(){if(t.matchedConfig){var d=t.matchedConfig.listeners;return d?d.filter(function(a){return!a.selectorFound}).length:!1}return!1},$b=function(){"number"===typeof ab&&clearInterval(ab);ab=null},bb=function(d){var a=p(d.selector),b=A(A({},d),{},{selectorFound:0<a.length});a.on(b.bind,function(a){try{b.callback(a)}catch(f){u.onFireException.emit(Error("Listener callback on ".concat(b.bind,
" bound to ").concat(b.selector," failed for the ").concat(t.matchedConfig.name," page config. ").concat(f.message,".")),"Site-wide Javascript")}});return b},nf=function(){t&&t.matchedConfig&&t.matchedConfig.listeners&&t.matchedConfig.listeners.forEach(function(d){p(d.selector).off(d.bind)})},sd=function(d){d.global=d.global||{};"object"!=J(d.global)&&u.onFireException.emit(Error("The global config has a type of ".concat(J(d.global),", but it must be an object")),"Sitewide Javascript");Object.assign(N,
A({},d));u.onInitSitemap.emit(N)},td=function(d){of(d);return!0},ud=function(d){t.matchedConfig=A(A({},d),{},{listeners:pf(d)});t.currentPage=A(A({},t.currentPage||{}),{},{source:{pageType:d.name,locale:qf(d)},user:{anonymousId:null},interaction:null,pageView:!0});return d.interaction?kf(d).then(function(a){t.currentPage.interaction=a}):Promise.resolve()},pf=function(d){return(d.listeners||[]).map(function(a){return bb(a)})},qf=function(d){return"function"===typeof d.locale?d.locale():d.locale},rf=
function a(){for(var b=arguments.length,e=Array(b),f=0;f<b;f++)e[f]=arguments[f];return e.reduce(function(b,e){Object.keys(e).forEach(function(f){var g=b[f],h=e[f];Array.isArray(g)&&Array.isArray(h)?Object.assign(b,Ta({},f,g.concat.apply(g,Jc(h)))):g&&"object"===J(g)&&h&&"object"===J(h)?Object.assign(b,Ta({},f,a(g,h))):Object.assign(b,Ta({},f,h))});return b},{})},vd=function(a){var b=N.global||{},e=b.onActionEvent;delete b.onActionEvent;a=rf(b,a);b.onActionEvent=e;return a},sf=function(a){a.forEach(function(a){if(!a.name||
!a.isMatch)throw Error("All page configs must have a name and isMatch attribute defined");})},tf=function(){var a=t;pd(t.currentPage);t=a},of=function(a){sd(a);nf();gd();$b();t.currentPage=null;try{sf(a.pageTypes);var b=!0}catch(e){u.onFireException.emit(Error(e),"Sitemap"),b=!1}b&&$a(a.pageTypes).then(vd).then(ud).then(tf).then(mf).catch(function(a){"sitemap_reinit"!==a&&u.onFireException.emit(Error("Unhandled exception: ".concat(a)),"Site-wide Javascript")})},H=function(a,b){if(a)try{return a(b)}catch(e){return u.onFireException.emit(Error("getValue for ".concat(E,
" failed on ").concat(t.matchedConfig.name," inside of the custom transform function. ").concat(e)),"Site-wide Javascript"),null}return b},ac=function(a,b){b=b||window;a=a.split(".");a=Bb(a);var e;try{for(a.s();!(e=a.n()).done;){var f=e.value;var g=/(\w+)\[([0-9]+)\]/.exec(f);if(b[f])b=b[f];else if(g){if(b[g[1]]&&(b=b[g[1]][parseInt(g[2],10)],!b))return null}else return null}}catch(h){a.e(h)}finally{a.f()}return b},wd={fromSelector:function(a,b){return function(){if("string"!=typeof a)return u.onFireException.emit(Error("getValue for ".concat(E,
" failed on ").concat(t.matchedConfig.name,". Selector must be a string.")),"Site-wide Javascript"),null;var e=p(a).first().text();return e=H(b,e)}},fromSelectorAttribute:function(a,b,e){return function(){if("string"!=typeof a)return u.onFireException.emit(Error("getValue for ".concat(E," failed on ").concat(t.matchedConfig.name,". Selector must be a string.")),"Site-wide Javascript"),null;if("string"!=typeof b)return u.onFireException.emit(Error("getValue for ".concat(E," failed on ").concat(t.matchedConfig.name,
". Attribute must be a string.")),"Site-wide Javascript"),null;var f=p(a).first().attr(b);return f=H(e,f)}},fromSelectorMultiple:function(a,b){return function(){if("string"!=typeof a)return u.onFireException.emit(Error("getValue for ".concat(E," failed on ").concat(t.matchedConfig.name,". Selector must be a string.")),"Site-wide Javascript"),null;var e=p(a).get().map(function(a){return p(a).text()});return e=H(b,e)}},fromSelectorAttributeMultiple:function(a,b,e){return function(){if("string"!=typeof a)return u.onFireException.emit(Error("getValue for ".concat(E,
" failed on ").concat(t.matchedConfig.name,". Selector must be a string.")),"Site-wide Javascript"),null;if("string"!=typeof b)return u.onFireException.emit(Error("getValue for ".concat(E," failed on ").concat(t.matchedConfig.name,". Attribute must be a string.")),"Site-wide Javascript"),null;var f=p(a).get().map(function(a){return p(a).attr(b)});return f=H(e,f)}},fromItemProp:function(a,b){return function(){var e=p("[itemprop='"+a+"']").first().attr("content");return e=H(b,e)}},fromMeta:function(a,
b){return function(){var e=p("meta[name='"+a+"']").first().attr("content")||p("meta[property='"+a+"']").first().attr("content");return e=H(b,e)}},fromWindow:function(a,b){return function(){var e=ac(a);return e=H(b,e)}},fromJsonLd:function(a,b){return function(){var e=p("script[type='application/ld+json']").first().text();try{var f=JSON.parse(e);if(a){var g=ac(a,f);return H(b,g)}return H(b,f)}catch(h){u.onFireException.emit(Error("Parsing JSON-LD for ".concat(E," failed on ").concat(t.matchedConfig.name,
". ").concat(h)),"Site-wide Javascript")}}},fromCanonical:function(a){return function(){var b=p("link[rel=canonical]").attr("href");return b=H(a,b)}},fromHref:function(a){return function(){var b=window.location.href;return b=H(a,b)}},buildCategoryId:function(a,b,e,f){return function(){var g=Array.from(p(a));b&&(g=g.slice(b));e&&(g=g.slice(0,-1));var h=[];g.forEach(function(a){(a=p(a).text().trim())?h.push(a):u.onFireException.emit(Error("buildCategoryId for ".concat(E," failed on ").concat(t.matchedConfig.name,
". A category part is null.")),"Site-wide Javascript")});g=h.join("|");return g=H(f,g)}},buildCategoryIdAttribute:function(a,b,e,f,g){return function(){var h=Array.from(p(a));e&&(h=h.slice(e));f&&(h=h.slice(0,-1));var l=[];h.forEach(function(a){(a=p(a).attr(b).trim())?l.push(a):u.onFireException.emit(Error("buildCategoryId for ".concat(E," failed on ").concat(t.matchedConfig.name,". A category part is null.")),"Site-wide Javascript")});h=l.join("|");return h=H(g,h)}}},B=p,da={},Ga=function(a){if(!a||
"string"!==typeof a||"function"!==typeof da[a])return null;da[a]();delete da[a]},xd={resolveWhenTrue:{bind:function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Math.random().toString(36).slice(2),e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:2E3,f=3<arguments.length&&void 0!==arguments[3]?arguments[3]:100;if("function"===typeof a)return new Promise(function(g,h){var l=0,k=setInterval(function(){try{l+=f;var k=a();k?(Ga(b),g(k)):l>=e&&(Ga(b),g(!1))}catch(Sa){Ga(b),h(Sa)}},
f);da[b]=function(){clearInterval(k)}})},unbind:Ga,getBindings:function(){return da},clearBindings:function(){for(var a in da)da.hasOwnProperty(a)&&"function"===typeof da[a]&&Ga(a)}}};var Hb="shutDown";var cb={cookieDomain:null,consents:null},yd=function(){function a(a,b,f){if(f)for(a=Math.random().toString(36).slice(2);e[a];)a=Math.random().toString(36).slice(2);else a=a||b;return a}function b(b,f){return{pageElementLoaded:function(h,l){if("string"!==typeof l||""===l)l=0<B("body").length?"body":
"html";if("string"!==typeof h||""===h)throw Error("[pageElementLoaded] Invalid arguments");return new Promise(function(k){var m=B(h);if(0<m.length)k(m[0]);else{m=B(l)[0];if(!m)throw Error("pageElementLoaded cannot be bound. observerSelector ".concat(l," is not on the page"));var n=new MutationObserver(function(a,e){a=Bb(a);var f;try{for(a.s();!(f=a.n()).done;){var l=f.value;if(l.addedNodes&&0<l.addedNodes.length){var m=Bb(l.addedNodes),n;try{for(m.s();!(n=m.n()).done;){var p=n.value,q=B(p).is(h)?
p:B(p).find(h).get(0);if(q){b?g.unbind(b):e.disconnect();k(q);return}}}catch(bc){m.e(bc)}finally{m.f()}}}}catch(bc){a.e(bc)}finally{a.f()}});n.observe(m,{childList:!0,subtree:!0})}b=a(b,"<pageElementLoaded>"+h,f);e[b]=function(){n&&n.disconnect()}})},pageElementVisible:function(h,l){var k=l||0;if("string"!==typeof h||""===h||"number"!==typeof k||0>k||1<k)throw Error("[pageElementVisible] Invalid arguments");return new Promise(function(l){var m=B(h),n=new IntersectionObserver(function(a,e){for(var f=
0;f<a.length;f++)if(a[f].isIntersecting){b?g.unbind(b):e.disconnect();l(a[f]);break}},{threshold:k});n.observe(m[0]);b=a(b,"<pageElementVisible>"+h,f);e[b]=function(){n.disconnect()}})},pageExit:function(h){h=h||0;if("number"!==typeof h||0>h)throw Error("[pageExit] Invalid arguments");return new Promise(function(l){function k(a){clearTimeout(p);10>=a.pageY-window.pageYOffset&&(p=0<h?setTimeout(m.bind(this,a),h):m.call(this,a))}function m(a){b?g.unbind(b):n.off("mousemove",k);clearTimeout(p);l(a)}
var n=B(document),p;n.on("mousemove",k);b=a(b,"<pageExit>",f);e[b]=function(){n.off("mousemove",k)}})},pageInactive:function(h){function l(a,e){var f=new Promise(function(f){function h(a){a=a||new Event("pageInactive");b&&!e.isSubscribe?g.unbind(b):k.off("mousemove click scroll keyup keydown",l);f(a)}function l(b){clearTimeout(m);m=setTimeout(h.bind(this,b),a)}var k=B(document),m;l();k.on("mousemove click scroll keyup keydown",l)});f.subscribe=function(h){delete f.subscribe;e.isSubscribe=!0;f.then(function(f){f.disconnect=
function(){b?g.unbind(b):e.isDisconnected=!0};h(f);!e.isDisconnected&&l(a,e).subscribe(h)});return f};return f}if("number"!==typeof h||0>=h)throw Error("[pageInactive] Invalid arguments");var k={isDisconnected:!1,isSubscribe:!1};b=a(b,"<pageInactive>",f);e[b]=function(){k.isDisconnected=!0};return l(h,k)},pageScroll:function(h){if("number"!==typeof h||0>h||1<h)throw Error("[pageScroll] Invalid arguments");return new Promise(function(l){function k(a){window.scrollY/(document.documentElement.scrollHeight-
window.innerHeight)>=h&&(l(a),b?g.unbind(b):m.off("scroll",k))}var m=B(document);m.on("scroll",k);b=a(b,"<pageScroll>",f);e[b]=function(){m.off("scroll",k)}})}}}var e={},f=b(null,!0),g=function(){return{bind:function(a){a&&e[a]&&(e[a](),delete e[a]);return b(a)},unbind:function(a){if(!a||"string"!==typeof a||"function"!==typeof e[a])return null;e[a]();delete e[a]},getBindings:function(){return e},clearBindings:function(){for(var a in e)e.hasOwnProperty(a)&&(e[a](),delete e[a])}}}();return Object.assign(f,
g)}(),db=function(){function a(b){var e=this;za(this,a);this.clearRateLimiter=function(){e.sentEvents=[]};this.eventWithinLimitTimeRange=function(a,b,e){return e-b.time<a};this.getTimeRangeMax=function(){return e.eventRateLimiterConfig.globalTimeRange};this.removeOldEvents=function(a){for(var b=e.getTimeRangeMax(),f=e.sentEvents.length-1;0<=f;f--)if(!e.eventWithinLimitTimeRange(b,e.sentEvents[f],a)){e.sentEvents.splice(0,f+1);break}};this.checkGlobalLimits=function(a,b){var f=A({},e.eventRateLimiterConfig),
g=f.globalLimit;f=f.globalTimeRange;return e.eventWithinLimitTimeRange(f,e.sentEvents[a],b)&&(e.globalCounter++,e.globalCounter>g)?(r.info("Event rate limit exceeded. More than ".concat(g," events ")+"sent in ".concat(f,"ms.")),!0):!1};this.checkLimits=function(a,b){return e.checkGlobalLimits(a,b.time)};this.sentEvents=[];this.eventRateLimiterConfig=b}Aa(a,[{key:"resetCounters",value:function(){this.globalCounter=0}},{key:"isTriggerLimitExceeded",value:function(a){var b=Date.now();a=A(A({},a),{},
{time:b});this.sentEvents.push(a);this.removeOldEvents(b);this.resetCounters();for(b=this.sentEvents.length-1;0<=b;b--)if(this.checkLimits(b,a))return!0;return!1}}]);return a}(),uf=function(a){function b(a){za(this,b);var f=e.call(this,a);f.getTimeRangeMax=function(){return f.eventRateLimiterConfig.perInteractionTimeRange?Math.max(f.eventRateLimiterConfig.globalTimeRange,f.eventRateLimiterConfig.perInteractionTimeRange):f.eventRateLimiterConfig.globalTimeRange};f.checkInteractionLimits=function(a,
b,e){return f.eventRateLimiterConfig.perInteractionLimit&&f.eventRateLimiterConfig.perInteractionTimeRange&&f.eventWithinLimitTimeRange(f.eventRateLimiterConfig.perInteractionTimeRange,f.sentEvents[a],b)&&f.sentEvents[a].name===e&&(f.perEventCounter++,f.perEventCounter>f.eventRateLimiterConfig.perInteractionLimit)?(r.info("Event rate limit exceeded. More than ".concat(f.eventRateLimiterConfig.perInteractionLimit," events ")+"with interaction name of ".concat(e," sent in ").concat(f.eventRateLimiterConfig.perInteractionTimeRange,
"ms.")),!0):!1};f.checkLimits=function(a,b){return f.checkGlobalLimits(a,b.time)||f.checkInteractionLimits(a,b.time,b.name)};return f}Ge(b,a);var e=Ie(b);Aa(b,[{key:"resetCounters",value:function(){Ua(la(b.prototype),"resetCounters",this).call(this);this.perEventCounter=0}},{key:"isTriggerLimitExceeded",value:function(a){return Ua(la(b.prototype),"isTriggerLimitExceeded",this).call(this,a)}}]);return b}(db),Db,Eb,Fb,Gb,cc=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};
if(!(Xe(window.navigator.userAgent||"")?V("You are a robot."):"prerender"===document.visibilityState&&Ye?V("Page is pre-rendered and loaded in Safari."):1))return Promise.reject();"initialized"==Hb&&V("reinitializing Web SDK");a.cookieDomain&&Ub(a.cookieDomain);$c();cb=A(A({},cb),a);document.dispatchEvent(new CustomEvent(v.OnBeforeInit));Je();dd();Hb="initialized";document.dispatchEvent(new CustomEvent(v.OnInit,{detail:{sdkConfig:cb}}));ef(a.consents);return Promise.resolve()};window.SalesforceInteractions=
{init:cc,reinit:function(){var a=P.map(function(a){return a.consent});cc(A(A({},cb),{},{consents:a})).then(function(){td(N)})},sendEvent:pd,sendException:w,getAnonymousId:function(){return T},setAnonymousId:Ya,getCookieDomain:function(){return na},setCookieDomain:Ub,updateConsents:Zb,getConsents:id,ConsentStatus:n.ConsentStatus,log:r,getLoggingLevel:Mc,setLoggingLevel:Lc,initSitemap:td,getSitemapConfig:function(){return N},getSitemapResult:function(){return t},CatalogObjectInteractionName:ma,CartInteractionName:Xb,
OrderInteractionName:Yb,listener:Oc,build:function(a){$a(a.pageTypes).then(vd).then(ud).catch(function(a){"sitemap_reinit"!==a&&u.onFireException.emit(Error("Unhandled exception: ".concat(a)),"Site-wide Javascript")})},cashDom:B,resolvers:wd,util:xd,DisplayUtils:yd,CustomEvents:v};var vf="cdn.".concat("evergage.com"),dc;(function(a){a.Impression="i";a.Clickthrough="c";a.Dismissal="d";a.Unsubscribe="u";a.Send="s"})(dc||(dc={}));(function(a){a.Product="Product";a.Category="Category"})(n.ItemType||(n.ItemType=
{}));var Ca;(Ca||(Ca={})).StopQuickViewCatalogObject="Stop Quick View Catalog Object";var ec={Personalization:"Personalization"},fc;(function(a){a._id="_id";a.categories="categories";a.dimensions="dimensions";a.relatedCatalogObjects="relatedCatalogObjects"})(fc||(fc={}));(function(a){a.OnEventResponse="evergage:onEventResponse";a.OnEventSend="evergage:onEventSend";a.OnStatSend="evergage:onStatSend";a.OnException="evergage:onException";a.OnTemplateDisplayEnd="evergage:onTemplateDisplayEnd";a.OnPageMatchStatusUpdated=
"evergage:onPageMatchStatusUpdated";a.OnInit="evergage:onInit";a.OnInitSitemap="evergage:onInitSitemap";a.OnShutDown="evergage:onShutDown";a.OnConsentRevoke="evergage:onConsentRevoke"})(n.CustomEvents||(n.CustomEvents={}));var oa;(function(a){a.OnEventResponse="mcis:onEventResponse";a.OnStatSend="mcis:onStatSend";a.OnTemplateDisplayEnd="mcis:onTemplateDisplayEnd";a.OnBeforeEventSend="mcis:onBeforeEventSend";a.OnInit="mcis:onInit"})(oa||(oa={}));var q={endpointConfig:{},beaconConfig:{sendEvents:!0,
minimumActivityTimeToRegister:300,timeOnPageTimerLengthMillis:6E4,trackAnonymousVisitors:!0,corsAllowedOrigins:["*"],identityAttributes:[],rememberMeUserIdsMillis:63072E6,actionRateLimiterConfig:{globalLimit:10,globalTimeRange:5E3,perActionLimit:5,perActionTimeRange:2E3},pingRateLimiterConfig:{globalLimit:10,globalTimeRange:5E3},campaignStatRateLimiterConfig:{globalLimit:10,globalTimeRange:5E3,perExperienceLimit:5,perExperienceTimeRange:2E3},errorRateLimiterConfig:{globalLimit:10,globalTimeRange:5E3}},
beaconState:null},gc=function(){return y({},q.endpointConfig,{},q.beaconConfig)},zd=function(){var a=gc();return"account dataset cookieDomain consents cdnUrl trackerUrl siteConfigVersion minimumActivityTimeToRegister timeOnPageTimerLengthMillis sendEvents trackAnonymousVisitors doNotTrackPingRequestsForActions trackContextualRelatedItems identityAttributes actionRateLimiterConfig pingRateLimiterConfig campaignStatRateLimiterConfig errorRateLimiterConfig".split(" ").reduce(function(b,e){return b[e]=
a[e],b},{})},Ad;document.addEventListener(v.OnClearCookie,function(a){a=a.detail&&a.detail.options||{};hc("a",y({domain:q.beaconConfig.cookieDomain},a));hc("n",y({domain:q.beaconConfig.cookieDomain},a))});var Ha=function(a){return"".concat("_evg").concat(a,"_").concat(Ad)},hc=function(a,b){M.remove(Ha(a),b)},Q={setCookieHash:function(a,b,e){Ad=Ba("".concat(a,".").concat(b,".").concat(Ba(e+"/").slice(0,4))).slice(0,4)},read:function(a){return M.getJSON(Ha(a))},write:function(a,b,e,f){q.beaconConfig.secureCookie?
M.set(Ha(a),b,{expires:e,domain:f,secure:!0}):M.set(Ha(a),b,{expires:e,domain:f});M.get(Ha(a))||r.warn("Web SDK cookie (_evga) for the Interaction Studio module could not be set. This is possibly due to a restricted top level domain. See https://publicsuffix.org/learn/ for more information.")},remove:hc},Bd=function(a){return{uuid:a.uuid,affinityId:a.affinityId,persistedUserId:a.puid,persistedAccountId:a.paid}},Y=function(a){a=y({},K(),{},a);Q.write("a",{uuid:a.uuid,puid:a.persistedUserId,paid:a.persistedAccountId,
affinityId:a.affinityId},730,q.beaconConfig.cookieDomain);var b=Q.read("a");b&&r.debug("Stored visitor cookie. ".concat(JSON.stringify(b)));return a},ic=function(a){return 0===a.indexOf("www")?a.substring(4,a.length):a},Cd=function(a){return!!(a&&"object"===z(a)&&0<Object.keys(a).length)},jc=function(){var a=K().uuid;Ya(a)},K=function(){var a=Q.read("a");return Cd(a)?Bd(a):{}},wf=function(a){if(!a)return!1;a=(a||{}).user;a=void 0===a?{}:a;var b=y({},a.attributes,{},a.identities);return Object.keys(b).some(function(a){return q.beaconConfig.identityAttributes.includes(a)})||
!!a.id||!!K().persistedUserId},k={result:y({},t,{backgroundPage:null}),config:y({},N,{settings:{canonicalizeIds:!1,runOnTranslatedPage:!1,setDefaultListPrice:!1,truncateTranslated:!0},currentKey:null}),campaignResponses:[]},Sc=function(){return k.result.currentPage||{}},eb=function(){k.config.currentKey=E;return k},Dd=function(){return eb().result||null},Ed=function(){return eb().config||null},Fd=function(){return eb().campaignResponses||[]},Ia,Ja,kc=function(a){a[".bv"]=16;a._ak=q.endpointConfig.account;
a._ds=q.endpointConfig.dataset;a[".scv"]=q.endpointConfig.siteConfigVersion;a.channel="Web";a._r=String(Math.random()).slice(2,8)},lc=function(a){var b=K();a.userId?a._reqPersistedEntityIds="":b.persistedUserId&&(a._persistedUserId=b.persistedUserId);k&&k.result&&k.result.currentPage&&k.result.currentPage.user&&k.result.currentPage.user.attributes&&k.result.currentPage.user.attributes.customer_non_consent&&(a.customer_non_consent=k.result.currentPage.user.attributes.customer_non_consent);q.beaconConfig.trackAnonymousVisitors&&
(a[".anonId"]=b.uuid,null!=b.affinityId&&(a[".aaId"]=b.affinityId),a.userId||a._persistedUserId||a._persistedAccountId||(a._anon="true"));return a},Ka=function(a){a="".concat(a);if(null==a||974>=a.length)return a;var b=731,e=244;974!=b+e&&(b+=974-(b+e));10<e?e-=5:10<b&&(b-=5);return a.substring(0,b)+" ... "+a.substring(a.length-e)},Gd=function(a,b){var e=b.header,f=b.fileName,g=b.line;b=b.column;e&&(a[".ef"]=Ka(e));a[".eu"]=Ka(f);a[".el"]=Ka(g);a[".ec"]=Ka(b);return a},xf=(Ia={},L(Ia,".eu","sourceURL"),
L(Ia,".el","line"),L(Ia,".ec","column"),Ia),yf=(Ja={},L(Ja,".eu","fileName"),L(Ja,".el","lineNumber"),L(Ja,".ec","columnNumber"),Ja),Hd=function(a,b,e){return b?Gd(a,{header:!!b.stack&&"string"===typeof b.stack&&b.stack.substring(0,b.stack.indexOf("@")),fileName:b[e[".eu"]],line:b[e[".el"]],column:b[e[".ec"]]}):a},zf=function(a){var b=Object.keys(a)[0];if(!b)return{};a=a[b];b={type:b,_id:a._id};Array.isArray(a.categories)&&(b.categories=a.categories.map(function(a){return"string"===typeof a?{_id:a,
type:n.ItemType.Category}:a}));if("object"===z(a.dimensions)||"object"===z(a.relatedCatalogObjects)){b.dimensions={};a=a.relatedCatalogObjects||a.dimensions;for(var e in a)if(a.hasOwnProperty(e)){var f=a[e];Array.isArray(f)?b.dimensions[e]=f:b.dimensions[e]=[f]}}return b},Bf=function(a){var b=[];Object.keys(a).forEach(function(e){b=b.concat(Af(e,a[e]))});return b},Af=function(a,b){return b.map(function(b){var e=Cf(a);return{_id:b,type:e,tagType:"t"===e?a:void 0}})},Cf=function(a){switch(a){case "Product":return"p";
case "Article":return"a";case "Blog":return"b";case "Category":return"c";case "Promotion":return"P";default:return"t"}},Df=function(a){var b={type:"e",id:a.experienceId,stat:dc[a.stat],ug:a.control?"Control":void 0};a.catalog&&(b.piks=Bf(a.catalog));return b},Ef=function(a){var b={};b[".cStat"]=JSON.stringify(a.campaignStats.map(Df));kc(b);lc(b);return b},Ff=function(a){var b={};b[".top"]=""+a.timeOnPageMillis;a.catalog&&0<Object.keys(a.catalog).length&&(b.item=JSON.stringify(zf(a.catalog)));a.action&&
(b.action=a.action);if(a.performance){var e=a.performance.networkTime;e&&(b[".tt"]=e);(e=a.performance.eventDnsTime)&&(b[".ttdns"]=e);(e=a.performance.domLoadTime)&&(b[".dt"]=e);(e=a.performance.pageLoadTime)&&(b[".lt"]=e);(e=a.performance.sdkLoadTime)&&(b[".bt"]=e);(e=a.performance.sdkParseTime)&&(b[".pt"]=e);(a=a.performance.sdkDnsTime)&&(b[".btdns"]=a)}kc(b);lc(b);return b},Gf=Object.prototype.hasOwnProperty,Hf=function(a){function b(a){ea(this,b);var e=Oa(this,I(b).call(this,a));e.getTimeRangeMax=
function(){return e.eventRateLimiterConfig.perExperienceTimeRange?Math.max(e.eventRateLimiterConfig.globalTimeRange,e.eventRateLimiterConfig.perExperienceTimeRange):e.eventRateLimiterConfig.globalTimeRange};e.checkExperienceLimits=function(a,b){if(e.eventRateLimiterConfig.perExperienceLimit&&e.eventRateLimiterConfig.perExperienceTimeRange&&e.eventWithinLimitTimeRange(e.eventRateLimiterConfig.perExperienceTimeRange,e.sentEvents[a],b)&&e.sentEvents[a].experienceIds)for(a=e.sentEvents[a].experienceIds,
b=0;b<a.length;b++){var f=a[b];e.experienceRates.has(f)||e.experienceRates.set(f,0);e.experienceRates.set(f,e.experienceRates.get(f)+1);if(e.experienceRates.get(f)>e.eventRateLimiterConfig.perExperienceLimit)return r.info("Event rate limit exceeded. More than ".concat(e.eventRateLimiterConfig.perExperienceLimit," events ")+"with experience id of ".concat(f," sent in ").concat(e.eventRateLimiterConfig.perExperienceTimeRange,"ms.")),!0}};e.checkLimits=function(a,b){return e.checkGlobalLimits(a,b.time)||
e.checkExperienceLimits(a,b.time)};return e}Na(b,a);fa(b,[{key:"resetCounters",value:function(){ha(I(b.prototype),"resetCounters",this).call(this);this.experienceRates=new Map}},{key:"isTriggerLimitExceeded",value:function(a){return ha(I(b.prototype),"isTriggerLimitExceeded",this).call(this,a)}}]);return b}(db),mc=function(){function a(b){ea(this,a);this.baseURL=b}fa(a,[{key:"send",value:function(a){If(a);var b=this.baseURL+"?";var f="";var g=[],h;"string"!==typeof f&&(f="?");for(l in a)if(Gf.call(a,
l)){(h=a[l])||null!==h&&void 0!==h&&!isNaN(h)||(h="");var l=encodeURIComponent(l);h=encodeURIComponent(h);null!==l&&null!==h&&g.push(l+"="+h)}a=g.length?f+g.join("&"):"";b+=a;if(navigator&&navigator.sendBeacon)return a=new Blob([],{type:"application/x-www-form-urlencoded"}),navigator.sendBeacon(b,a);a=new XMLHttpRequest;a.open("GET",b,!0);a.send()}}]);return a}(),Jf=function(a){function b(a,f){ea(this,b);a=Oa(this,I(b).call(this,a));a.eventRateLimiter=f||new db({globalLimit:q.beaconConfig.errorRateLimiterConfig.globalLimit,
globalTimeRange:q.beaconConfig.errorRateLimiterConfig.globalTimeRange});return a}Na(b,a);fa(b,[{key:"send",value:function(a){if(this.eventRateLimiter.isTriggerLimitExceeded())r.warn("Error event rate limiter triggered.");else return ha(I(b.prototype),"send",this).call(this,a)}}]);return b}(mc),Kf=function(a){function b(a,f){ea(this,b);a=Oa(this,I(b).call(this,a));a.eventRateLimiter=f||new db({globalLimit:q.beaconConfig.pingRateLimiterConfig.globalLimit,globalTimeRange:q.beaconConfig.pingRateLimiterConfig.globalTimeRange});
return a}Na(b,a);fa(b,[{key:"send",value:function(a){if(this.eventRateLimiter.isTriggerLimitExceeded())r.warn("Ping event rate limiter triggered.");else return ha(I(b.prototype),"send",this).call(this,a)}}]);return b}(mc),Lf=function(a){function b(a,f){ea(this,b);a=Oa(this,I(b).call(this,a));a.eventRateLimiter=f||new Hf({globalLimit:q.beaconConfig.campaignStatRateLimiterConfig.globalLimit,globalTimeRange:q.beaconConfig.campaignStatRateLimiterConfig.globalTimeRange,perExperienceLimit:q.beaconConfig.campaignStatRateLimiterConfig.perExperienceLimit,
perExperienceTimeRange:q.beaconConfig.campaignStatRateLimiterConfig.perExperienceTimeRange});return a}Na(b,a);fa(b,[{key:"send",value:function(a,f){f=f?f:[];if(this.eventRateLimiter.isTriggerLimitExceeded({experienceIds:f}))r.warn("Campaign Stat event rate limiter triggered.");else return ha(I(b.prototype),"send",this).call(this,a)}}]);return b}(mc),If=function(a){Object.keys(a).forEach(function(b){var e=a[b];if("number"!=typeof e&&"boolean"!==typeof e&&null!=e)if("string"==typeof e){a:switch(b){case "url":case "urlref":e=
e.substring(0,3072);break a;case "title":e=e.substring(0,1024);break a;default:e=e.substring(0,1024)}a[b]=e}else"function"==typeof e?delete a[b]:a[b]=JSON.stringify(e)})},fb,gb,hb,Id=!1,Jd=!1,Kd=!1,x={sdkLoadTime:null,sdkParseTime:null,sdkDnsTime:null,pageLoadTime:null,domLoadTime:null,networkTime:null,eventDnsTime:null},Ld=function(){return window.performance.getEntriesByType?window.performance.getEntriesByType("resource").reverse().find(function(a){return 0<=a.name.indexOf("/api2/event/")}):null},
Md=function(){return window.performance.getEntriesByType?window.performance.getEntriesByType("resource").find(function(a){return/\/evergage(Small)?(\.min)?\.js$/.test(a.name)}):null},Nd=function(){if(window.performance.getEntriesByType){var a=window.performance.getEntriesByType("navigation");if(a&&0<a.length)return a=a[0],a||(a=window.performance.timing),a}return null},Rc=function(a){for(var b in a.performance)x[b]=null},Uc=function(){if(!Jd){var a=Nd();a&&0<a.domContentLoadedEventEnd&&(void 0!=a.entryType?
x.domLoadTime=Math.round(a.domContentLoadedEventEnd)||null:x.domLoadTime=Math.round(a.domContentLoadedEventEnd-window.performance.timing.navigationStart)||null);x.domLoadTime&&(Jd=!0)}if(!Id){if(a=Nd())void 0!=a.entryType?x.pageLoadTime=Math.round(a.loadEventEnd)||null:x.pageLoadTime=Math.round(a.loadEventEnd-window.performance.timing.navigationStart)||null;x.pageLoadTime&&(Id=!0)}},Od=function(a){a=a?(a=Ib(a))?a.pathname:"":"";return a},nc=function(a,b){b="undefined"===typeof b?location.search:b;
for(var e=/([^=?&]+)=?([^&]*)/g,f={},g;g=e.exec(b);){var h=Pc(g[1]);g=Pc(g[2]);null===h||null===g||h in f||(f[h]=g)}return f[a]||""},Pd=function(a,b){return(a=a.exec(b))&&2===a.length?a[1]:null},Qd=function(a){return Pd(/[/]?([^/]*)[/]?$/,Od(a))},oc=function(a){return"string"!==typeof a||""===a.trim()?null:Ib(a).href},ib=function(a){return a&&"string"===typeof a?(a=parseFloat(a.replace(/[^0-9.]+/g,"")),isNaN(a)?null:a):null},Rd=function(a){return a&&"string"===typeof a?(a=parseInt(a.trim().replace(/[^0-9.]+/g,
""),10),isNaN(a)?null:a):null},Mf=function(a){var b=t;if(b.currentPage&&b.currentPage.interaction&&b.currentPage.interaction.catalogObject)return(b=b.currentPage.interaction.catalogObject)?{catalogObjectType:b.type,catalogObjectId:b.id,price:b.attributes&&b.attributes.price?b.attributes.price:null,quantity:ib(p(a).val())}:null},ta={extractFirstGroup:Pd,getLastPathComponent:Qd,getLastPathComponentWithoutExtension:function(a){a=Qd(oc(a));var b=a.lastIndexOf(".");return 0<=b?a.substring(0,b):a},getParameterByName:nc,
getPathname:Od,qualifyUrl:oc,removeQueryString:function(a){if(!a)return"";a=Ib(a);return[a.protocol,"//","http:"===a.protocol&&"80"===a.port||"https:"===a.protocol&&"443"===a.port?a.hostname:a.host,a?a.pathname:""].join("")},getFloatValue:ib,getIntegerValue:Rd,getUtagFirstForField:function(a){var b=window.utag_data;if(b&&b[a]&&0<=b[a].length)return Array.isArray(b[a])?b[a][0]:b[a]},getValueFromNestedObject:ac,buildLineItemFromPageState:function(a){if(k.result.currentPage&&k.result.currentPage.catalog){var b=
k.result.currentPage.catalog[n.ItemType.Product];return b?{_id:b._id,price:b.price,quantity:ib(p(a).val())}:null}},resolveWhenTrue:xd.resolveWhenTrue,cookie:M},Nf=function(a){return new Promise(function(b,e){pc(e);Z(a,"lineItems",!1,!0).then(function(a){var e={complete:{Product:[]}};0===Object.keys(a).length&&b(e);a=Z(a,"lineItems",!0,!1);e.complete.Product=a;b(e)}).catch(function(){w(Error("Cart Config was rejected"),"Site-wide Javascript")})})},Z=function(a,b,e,f){try{E=b;if(a)if("dimensions"!==
b&&"relatedCatalogObjects"!==b&&"lineItems"!==b&&"attributes"!==b||!f){var g="function"===typeof a?a():a;"categories"===b&&Array.isArray(g)&&"object"!==z(g[0])&&"c"!==g[0].type&&"string"!==typeof g[0]._id?g=Tc(g):"lineItems"===b&&"object"===z(g)&&(g=Of(g))}else g=Pf(a,b);return e?qc(b,g,k.config.settings.canonicalizeIds):g}catch(h){w(Error("getValue for ".concat(b," failed on ").concat(k.result.matchedConfig.name," while evaluating custom function. ").concat(h.message,".")),"Site-wide Javascript")}},
Sd=function(a,b,e){if(a&&"object"===z(a)&&"function"===typeof a.then)w(Error("getValue for ".concat(b," failed on ").concat(k.result.matchedConfig.name," while evaluating custom function. ").concat(b," cannot be a Promise.")),"Site-wide Javascript");else if(a||"number"===typeof a||"boolean"===typeof a)e[b]=a},Qf=function(a,b){return new Promise(function(e,f){pc(f);var g=Object.keys(fc);f=[];for(var h=0;h<g.length;h++){var l=g[h];l=Z(a[l],l,!1,!0);f.push(l)}Promise.all(f).then(function(f){var h={_id:null};
f.forEach(function(a,b){b=g[b];a=Z(a,b,!0,!1);Sd(a,b,h)});Object.keys(a).forEach(function(b){if(!g.includes(b)){var e=Z(a[b],b,!0,!0);Sd(e,b,h)}});f=L({},b,h);e(f)}).catch(function(){w(Error("Catalog Config was rejected"),"Site-wide Javascript")})})},Rf=function(a){return new Promise(function(b,e){pc(e);var f=[],g=Object.keys(a);g.forEach(function(b){E=b;b=Z(a[b],b,!1,!0);f.push(b)});Promise.all(f).then(function(a){var e={},f={Product:{}};a.forEach(function(a,b){b=g[b];e[b]=Z(a,b,!0,!1)});f.Product=
e;b(f)}).catch(function(){w(Error("Order Config was rejected"),"Site-wide Javascript")})})},Of=function(a){var b;a._id?b=a._id.length:a.sku?b=a.sku.length:w(Error("Either _id or sku must be defined for lineItems"),"Sitemap");for(var e=[],f=function(){var a=va(h[g],2),f=a[0];a=a[1];a.length!=b?w(Error("Resolving multiple values for ".concat(f," failed on ").concat(k.result.matchedConfig.name,". ").concat(f," does not have the same number of values as _id")),"Site-wide Javascript"):a.forEach(function(a,
b){e[b]||(e[b]={_id:null,quantity:null});e[b][f]=a})},g=0,h=Object.entries(a);g<h.length;g++)f();return e},Tc=function(a){return a.map(function(a){return{type:"c",_id:a}})},Pf=function(a,b){var e={},f=Object.keys(a),g={};f.forEach(function(b){e[b]=Z(a[b],b,!1,!0)});return"lineItems"===b||"dimensions"===b||"relatedCatalogObjects"===b?Promise.all(Object.values(e)).then(function(a){a.forEach(function(a,b){b=f[b];(a=Z(a,b,!1,!1))&&(g[b]=a)});return g}):e},qc=function(a,b){var e=2<arguments.length&&void 0!==
arguments[2]?arguments[2]:!0;return b=Array.isArray(b)?"lineItems"===a?Sf(b,e):b.map(function(b){return Td(a,b,e)}):Td(a,b,e)},Sf=function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:!0;return a.map(function(a){return Tf(a,b)})},Tf=function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:!0,e;for(e in a)if("item"===e)for(var f in a[e])a[e][f]=qc(f,a[e][f],b);else a[e]=qc(e,a[e],b);return a},Td=function(a,b){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:
!0,f=b;"price"!==a&&"listPrice"!==a&&"totalValue"!==a&&"rating"!==a||"string"!==typeof f||(f=ib(f));if("url"===a||"imageUrl"===a)f=oc(f);"_id"!==a&&"sku"!==a&&"orderId"!==a||"number"!==typeof f||(f=f.toString());!e||"string"!==typeof f||"_id"!==a&&"sku"!==a&&"orderId"!==a&&"alternateId"!==a&&"parentId"!==a||(f=f.toUpperCase());"string"===typeof f&&(0<=f.indexOf("&")&&(e=document.createElement("textarea"),Object.assign(e,{innerHTML:f}),f=e.value),f=f.trim());"description"===a&&"string"===typeof f&&
200<f.length&&(f=f.substr(0,197)+"...");"quantity"!==a&&"inventoryCount"!==a&&"numRatings"!==a||"string"!==typeof f||(f=Rd(f));return f},pc=function(a){document.addEventListener(n.CustomEvents.OnInitSitemap,function(){a("sitemap_reinit")},{once:!0})},Uf=function(a){return P.some(function(b){return b.consent.purpose===a.purpose&&b.consent.status===a.status})},La=function(a){return q.beaconConfig.trackAnonymousVisitors||wf(a)?!Uf({purpose:ec.Personalization,status:n.ConsentStatus.OptOut})&&q.beaconConfig.sendEvents:
(r.debug("An anonymous event has been blocked. trackAnonymous has been turned off and event has no named user."),!1)},D=0,G=-1,W,X,Le=function(a){return La(a)?gb.send(Ff(a)):Promise.resolve(a)},Vf={setupActivityTimers:Wa,activityRegistered:Da,setUserInactive:Xa};(function(a){a.ViewItem="View Item";a.ViewItemOutOfStock="View Item Out Of Stock";a.ViewItemDetail="View Item Detail";a.QuickViewItem="Quick View Item";a.StopQuickViewItem="Stop Quick View Item";a.ViewCategory="View Category";a.ViewTag="View Tag";
a.AddToCart="Add To Cart";a.ViewCart="View Cart";a.Purchase="Purchase";a.Share="Share";a.Review="Review";a.Comment="Comment";a.Favorite="Favorite";a.Search="Search";a.SearchViewResults="Search View Results";a.SearchClick="Search Click";a.ClickThrough="Click Through";a.UpdateLineItem="Update Line Item";a.RemoveFromCart="Remove From Cart";a.ViewBanditItems="View Bandit Items"})(n.ItemAction||(n.ItemAction={}));var Wf=function(){function a(b,e){ea(this,a);this.baseURL=b;this.eventRateLimiter=e||new uf({globalLimit:q.beaconConfig.actionRateLimiterConfig.globalLimit,
globalTimeRange:q.beaconConfig.actionRateLimiterConfig.globalTimeRange,perInteractionLimit:q.beaconConfig.actionRateLimiterConfig.perActionLimit,perInteractionTimeRange:q.beaconConfig.actionRateLimiterConfig.perActionTimeRange})}fa(a,[{key:"handleSpecialEvent",value:function(a){var b=a.interaction&&a.interaction.name?a.interaction.name:a.itemAction;if(b===n.ItemAction.QuickViewItem||b===ma.QuickViewCatalogObject)k.result=y({},k.result,{backgroundPage:k.result.backgroundPage||k.result.currentPage,
currentPage:y({},a)}),b===n.ItemAction.QuickViewItem&&(k.result.currentPage.action=a.action||n.ItemAction.QuickViewItem,k.result.currentPage.itemAction=n.ItemAction.QuickViewItem);else if(b===n.ItemAction.StopQuickViewItem||b===Ca.StopQuickViewCatalogObject)k.result=y({},k.result,{backgroundPage:null,currentPage:k.result.backgroundPage||k.result.currentPage})}},{key:"handlePersistedIdentityInResponse",value:function(a){var b={},f=a.persistedUserId;a=a.anonAffinityId;if(f){var g=f.entityId;f=f.accountId;
g&&(b.persistedUserId=g);f&&(b.persistedAccountId=f)}a&&a!==b.affinityId&&(b.affinityId=a);Y(b)}},{key:"handlePerformanceTimingBeforeEvent",value:function(){Uc();if(!Kd){x.sdkLoadTime=Math.round((Md()||{}).duration)||null;window.evergageBeaconParseTimeStart&&window.window.evergageBeaconParseTimeEnd&&(x.sdkParseTime=window.evergageBeaconParseTimeEnd-window.evergageBeaconParseTimeStart);var a=Md();a&&void 0!=a.domainLookupEnd&&void 0!=a.domainLookupStart&&(x.sdkDnsTime=Math.round(a.domainLookupEnd-
a.domainLookupStart));Kd=!0}}},{key:"handlePerformanceTimingInResponse",value:function(){x.networkTime=Math.round((Ld()||{}).duration)||null;var a=Ld();a&&(x.eventDnsTime=Math.round(a.domainLookupEnd-a.domainLookupStart)||null);Jb();Wa()}},{key:"handleDebug",value:function(a){a.interaction&&a.interaction.name&&a.debug&&a.debug.explanations&&(a.explain=a.debug.explanations,delete a.debug.explanations)}},{key:"onEventSend",value:function(a){var b=this;this.handlePerformanceTimingBeforeEvent();document.dispatchEvent(new CustomEvent(n.CustomEvents.OnEventSend,
{detail:{actionEvent:a},cancelable:!0}))&&document.dispatchEvent(new CustomEvent(oa.OnBeforeEventSend,{detail:{actionEvent:a},cancelable:!0}))?(this.handleDebug(a),this.handleSpecialEvent(a),r.debug("Sending event: ",a),this.send(a).then(function(e){Rc(a);(a.pageView||a.flags&&a.flags.pageView)&&b.handlePerformanceTimingInResponse();b.handlePersistedIdentityInResponse(e);r.debug("Received event response: ",e);if(e.campaignResponses){var f=e.campaignResponses.map(function(a){return a.experienceId});
k.campaignResponses=[].concat(ob(e.campaignResponses),ob(k.campaignResponses.filter(function(a){return!f.includes(a.experienceId)})))}document.dispatchEvent(new CustomEvent(n.CustomEvents.OnEventResponse,{detail:{response:e,actionEvent:a}}));document.dispatchEvent(new CustomEvent(oa.OnEventResponse,{detail:{response:e,actionEvent:a}}))}).catch(function(a){w(a,"Server Response")})):r.debug("MCIS Module onBeforeEventSend cancelled.")}},{key:"send",value:function(a){var b=this;return new Promise(function(e,
g){if(b.eventRateLimiter.isTriggerLimitExceeded({name:a.action||a.interaction&&a.interaction.name}))g(Error("Event Rate Limiter triggered"));else{try{var f=JSON.stringify(a)}catch(Sa){return g(Sa)}var l=new XMLHttpRequest;l.onload=function(){if(200<=this.status&&300>this.status)try{var a=JSON.parse(l.response);e(a)}catch(Ee){g(Ob(Ee,{status:this.status,statusText:l.statusText}))}else g(Ob("Response was not OK: ".concat(l.responseText),{status:this.status,statusText:l.statusText}))};l.onerror=function(){if(""===
l.responseType||"text"===l.responseType){var a=l.responseText||l.statusText;if(a){g(Ob("Response error: ".concat(a),{status:this.status,statusText:l.statusText}));return}}r.debug("An error was sent with no text.                                      This is un-actionable so it is being logged instead of written.")};if(a.debug&&a.debug.explanations||a.explain)l.withCredentials=!0;if("true"==nc("isReadableEvent"))b.sendPost(l,b.baseURL,f);else try{if(!/^[\x20-\x7E]+$/.test(f))throw Error("GET request payload contains non-ASCII characters, try sending POST request");
var k=encodeURIComponent(window.btoa(f)),m=b.baseURL+"?event="+k;if(8192<m.length)throw Error("GET request URL exceeds 8192 characters, try sending POST request");b.sendGet(l,m)}catch(Sa){b.sendPost(l,b.baseURL,f)}}})}},{key:"sendGet",value:function(a,e){a.open("GET",e,!0);a.setRequestHeader("Accept","application/json, text/javascript, */*; q=0.01");a.send()}},{key:"sendPost",value:function(a,e,f){a.open("POST",e,!0);a.setRequestHeader("Accept","application/json, text/javascript, */*; q=0.01");a.setRequestHeader("Content-Type",
"application/x-www-form-urlencoded");a.send("event="+encodeURIComponent(f))}}]);return a}(),Ma,Ud=function(a){return(a.contentZones||[]).reduce(function(a,e){e=rc(e);"string"===typeof(e||{}).name&&""!==(e||{}).name&&a.push(e);return a},[])},Vd=function(a){return(a.contentZones||[]).reduce(function(a,e){e=rc(e);"string"===typeof(e||{}).name&&""!==(e||{}).name&&a.push((e||{}).name);return a},[])},rc=function(a){var b=!(a||{}).selector||0<B((a||{}).selector).length;return y({},a,{selectorFound:b})},
Wd=function(a){var b=(k.result.matchedConfig||{}).contentZones;return b?(b=b.find(function(b){return b.name===a}))&&b.selector?b.selector:null:null},jb,Yd=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:!0;kb();Xd(a)&&(jb=setInterval(function(){var b=!1,e=(new Date).getTime(),f=k.result.matchedConfig||{},g=f.listeners||[];f=f.contentZones||[];a&&(g=g.map(function(a){if(a.selectorFound)return a;a=bb(a);b=a.selectorFound||b;return a}));f=f.map(function(a){if(a.selectorFound)return a;
a=rc(a);b=a.selectorFound||b;return a});b&&Object.assign(k.result.matchedConfig,y({},k.result.matchedConfig,{contentZones:f,listeners:g}));(50<(new Date).getTime()-e||!Xd(a))&&kb()},1E3))},Xd=function(a){if(k.result.matchedConfig){var b=k.result.matchedConfig,e=b.listeners;b=b.contentZones;var f,g=!1;e&&a&&(f=!!e.filter(function(a){return!a.selectorFound}).length);b&&(g=!!b.filter(function(a){return!a.selectorFound}).length);return f||g}return!1},kb=function(){"number"===typeof jb&&clearInterval(jb);
jb=null},Xf=function(){k.result&&k.result.matchedConfig&&k.result.matchedConfig.listeners&&k.result.matchedConfig.listeners.forEach(function(a){B(a.selector).off(a.bind)})},Zd={_id:!0,id:!0,currency:!0,inventoryCount:!0,price:!0,tagType:!0,type:!0},sc=function(){var a=0<B('script[src*="//translate.googleusercontent.com"]').length,b=0<B("html.translated-ltr").length||0<B("html.translated-rtl").length;if(a||b)return r.debug("page is translated"),!0;try{var e=0<B(window.parent.document).find('script[src*="//www.microsofttranslator.com"]').length,
f=0<B(window.parent.document).find('frame[src*="//www.worldlingo.com"]').length;if(e||f)return r.debug("page is translated"),!0;r.debug("page is not translated");return!1}catch(g){return r.debug("exception caught, assuming page is untranslated "+g),!1}},Yf=function(a){Object.keys(a).forEach(function(b){var e=a[b];Object.keys(e).forEach(function(a){Zd[a]||delete e[a]})});return a},Zf=function(a){Object.keys(a).forEach(function(b){Zd[b]||delete a[b]});return a},$d=function(){return k.config&&k.config.settings&&
k.config.settings.truncateTranslated&&sc()},ae=function(a){(1<arguments.length&&void 0!==arguments[1]?arguments[1]:1)&&nd(a);if(!La(a))return Promise.resolve(a);$f(a);ag(a);Ma.onEventSend(a);return new Promise(function(a){document.addEventListener(n.CustomEvents.OnEventResponse,function(b){b&&b.detail&&b.detail.response&&a(b.detail.response)})})},$f=function(a){var b=K(),e=ua(a.user||{},["anonymousId"]);a.user=y({},e||{},{anonId:b.uuid});be(a)},be=function(a){var b=K();b.persistedUserId&&(a.user.encryptedId=
b.persistedUserId);b=K();a.account=a.account||{};b.persistedAccountId&&(a.account.encryptedId=b.persistedAccountId);if(b=nc("evergageTestMessages"))a.debug?a.debug.testMessages=b:a.debug={testMessages:b};a.source=y({},a.source||{},{beaconVersion:16,configVersion:q.endpointConfig.siteConfigVersion,contentZones:bg(a.source,a.pageView||(a.flags||{}).pageView)});if(x.domLoadTime||x.pageLoadTime||x.sdkParseTime||x.sdkLoadTime||x.sdkDnsTime)a.performance=y({},x.domLoadTime&&{domLoadTime:x.domLoadTime},
{},x.pageLoadTime&&{pageLoadTime:x.pageLoadTime},{},x.sdkParseTime&&{sdkParseTime:x.sdkParseTime},{},x.sdkLoadTime&&{sdkLoadTime:x.sdkLoadTime},{},x.sdkDnsTime&&{sdkDnsTime:x.sdkDnsTime})},bg=function(a,b){return(a.contentZones||[]).reduce(function(a,f){!b&&"object"===z(f)&&(f||{}).name&&r.warn("Using content zone objects in 'sendEvent' will soon be deprecated in favor of zone names as strings");f="string"===typeof f&&""!==f?f:(f||{}).name;"string"===typeof f&&""!==f&&a.push(f);return a},[])},ag=
function(a){a.catalog&&0<Object.keys(a.catalog).length&&Object.keys(a.catalog).forEach(function(b){if(a.catalog[b]){if(a.catalog[b].dimensions&&a.catalog[b].relatedCatalogObjects)return w(Error("Catalog cannot include both dimensions and relatedCatalogObjects"),"Sitemap"),!1;var e=a.catalog[b].relatedCatalogObjects||a.catalog[b].dimensions;e&&"object"===z(e)&&Object.keys(e).forEach(function(a){if(!Array.isArray(e[a]))return w(Error("".concat(a," is not an array. Related Catalog Objects must have type of string[]")),
"Sitemap"),!1})}});return!0},cg=function(a){a&&("catalogObject"in a?lb(a.catalogObject):"lineItem"in a?lb(a.lineItem):"lineItems"in a?a.lineItems.map(function(a){return lb(a)}):"order"in a&&lb(a.order))},lb=function(a){if("object"===z(a))for(var b=0,e=Object.keys(a);b<e.length;b++){var f=e[b],g=a[f];if("lineItems"===f&&Array.isArray(g))g.map(function(a){a.catalogObjectId&&"string"===typeof a.catalogObjectId&&(a.catalogObjectId=a.catalogObjectId.trim())});else if("relatedCatalogObjects"===f){f=0;for(var h=
Object.keys(g);f<h.length;f++){var k=h[f];Array.isArray(g[k])&&(g[k]=g[k].map(function(a){if("string"===typeof a)return a.trim()}))}}else"catalogObjectId"!==f&&"id"!==f||"string"!==typeof g||(a[f]=g.trim())}},mb=function(a){a:{var b=a,e=k.result.matchedConfig;try{b=e&&e.onActionEvent?e.onActionEvent(b):b;if("object"===z(b)){a=b;break a}w(Error("onActionEvent failed for the ".concat(k.result.matchedConfig.name," page config. Must return an object or null.")),"Site-wide Javascript")}catch(f){w(Error("onActionEvent failed for the ".concat(k.result.matchedConfig.name,
" page config. ").concat(f.message,".")),"Site-wide Javascript")}a=void 0}a:{b=a;e=k.config;try{b=e.global&&e.global.onActionEvent?e.global.onActionEvent(b):b;if("object"===z(b)){a=b;break a}w(Error("onActionEvent failed for the global page config. Must return an object or null."),"Site-wide Javascript")}catch(f){w(Error("onActionEvent failed for the global page config. ".concat(f.message,".")),"Site-wide Javascript")}a=void 0}return a.action===sa.MetadataUpdate?ae(a,!1):ae(a)},ce=function(){k.config=
y({},k.config,{},N);kb()},de=function(a){a=a.detail.actionEvent;try{var b=JSON.parse(JSON.stringify(a))}catch(f){w(f,"Copy ActionEvent")}if(b){var e=t;k.result=y({},k.result,{},e,{},{currentPage:k.result.currentPage});a===e.currentPage&&(k.result.currentPage=b);!La(a)||!k.config.settings.runOnTranslatedPage&&sc()||(b.interaction&&b.interaction.catalogObject&&$d()&&Zf(b.interaction.catalogObject),cg(b.interaction),be(b),b&&b.source&&Array.isArray(b.source.contentZones)&&0<b.source.contentZones.length||
(a=t.matchedConfig)&&b.pageView&&(k.result.matchedConfig=y({},a,{contentZones:Ud(a)}),k.result.currentPage=y({},k.result.currentPage||{},{source:y({},k.result.currentPage.source||{},{contentZones:Vd(a)})}),b.source.contentZones=k.result.currentPage.source.contentZones,Yd(!1)),Ma.onEventSend(b))}else r.warn("MCIS Module cannot parse event")},ee=function(a){k.result.matchStatus=t.matchStatus;document.dispatchEvent(new CustomEvent(n.CustomEvents.OnPageMatchStatusUpdated,{detail:{matchStatus:a.detail.matchStatus}}))},
fe=function(a){if(a&&a.detail){var b=a.detail.error;var e=a.detail.context;document.dispatchEvent(new CustomEvent(n.CustomEvents.OnException,{detail:{error:b,context:e}}));a={};kc(a);lc(a);a[".em"]=Ka(b.message||b);a[".es"]=e;var f=window.navigator.userAgent.toLowerCase();e="unknown";var g="";switch(!0){case -1<f.indexOf("edge"):e="ie";g="edge";break;case -1<f.indexOf("trident"):e="ie";g="trident";break;case -1<f.indexOf("chrome")&&!!window.chrome:g=e="chrome";break;case -1<f.indexOf("firefox"):g=
e="mozilla";break;case -1<f.indexOf("safari"):g=e="safari"}"unknown"!==e?(f=(new RegExp("".concat(g,"/(.*?)s"),"gm")).exec(f),f=parseInt(!!f&&f[1]),f=isNaN(f)?null:f):f=null;a[".vt"]=e;f&&(a[".vn"]=f);switch(e){case "safari":Hd(a,b,xf);break;case "mozilla":Hd(a,b,yf);break;default:b&&b.stack&&"string"===typeof b.stack&&(b=b.stack.split("\n")[1],b=b.substring(b.indexOf("at ")+3).match(/(.*) \((.*):(\d+):(\d+)\)/),Array.isArray(b)&&Gd(a,{header:b[1],fileName:b[2],line:b[3],column:b[4]}))}La(a)&&hb.send(a)}},
ge=function(a){document.dispatchEvent(new CustomEvent(n.CustomEvents.OnConsentRevoke,{detail:{revokedConsent:a.detail.revokedConsent}}))},he=function(a){if(a.detail&&a.detail.newAnonymousId){var b=K();a=a.detail.newAnonymousId;b.uuid!==a&&Y({uuid:a})}},dg=function(a){var b=a.detail.actionEvent;b.interaction&&b.interaction.name===sa.MetadataUpdate&&(a.preventDefault(),mb({action:sa.MetadataUpdate,consents:b.consents,source:b.source,user:b.user}))},tc=function(){document.removeEventListener(v.OnInitSitemap,
ce);document.removeEventListener(v.OnEventSend,de);document.removeEventListener(v.OnPageMatchStatusUpdated,ee);document.removeEventListener(v.OnException,fe);document.removeEventListener(v.OnConsentRevoke,ge);document.removeEventListener(v.OnSetAnonymousId,he)},eg=function(a){return(a.listeners||[]).map(function(a){return bb(a)})},ie=function(a){sd(a);document.dispatchEvent(new CustomEvent(n.CustomEvents.OnInitSitemap,{detail:{sitemapConfig:k.config}}))},ke=function(a){je(a);return!0},le=function(a){k.result.matchedConfig=
y({},a,{contentZones:Ud(a),listeners:eg(a)});var b=k.result,e=k.result.currentPage||{};var f="function"===typeof a.action?a.action():a.action;var g=a.catalog?a.itemAction||n.ItemAction.ViewItem:null,h=a.name;var l="function"===typeof a.locale?a.locale():a.locale;b.currentPage=y({},e,{action:f,itemAction:g,source:{pageType:h,locale:l,contentZones:Vd(a)},flags:{pageView:!0},user:{},performance:{},debug:{}});return fg(a)},fg=function(a){return a.itemAction===n.ItemAction.ViewCart||a&&a.cart&&a.cart.complete?
gg(a).then(function(a){k.result.currentPage.itemAction=n.ItemAction.ViewCart;k.result.currentPage.cart=a}):a.itemAction===n.ItemAction.Purchase||a&&a.order?hg(a).then(function(a){k.result.currentPage.itemAction=n.ItemAction.Purchase;k.result.currentPage.order=a}):ig(a).then(function(a){k.result.currentPage.catalog=a})},gg=function(a){var b={};if(!a.catalog&&!a.cart&&!a.order)return Promise.resolve(b);if(a.cart)var e=a.cart;else if(a.order||a.catalog){var f={},g=a.order||a.catalog;Object.keys(g).forEach(function(a){var b=
g[a];b&&b.lineItems&&(f[a]=b.lineItems)});e={complete:f}}if(e.complete){a=e.complete;for(var h in a)return Array.isArray(h.match(/[A-Z]/))?"Product"!==h?(w(Error("Item type must be Product"),"Sitewide Javascript"),Promise.resolve(b)):Nf(a[h]):(w(Error("Item types must be capitalized. Did you mean ".concat(h.replace(/^\w/,function(a){return a.toUpperCase()}),"?")),"Sitewide Javascript"),Promise.resolve(b))}},hg=function(a){var b={};if(!a.catalog&&!a.order)return Promise.resolve(b);a=a.order||a.catalog;
for(var e in a)return Array.isArray(e.match(/[A-Z]/))?"Product"!==e?(w(Error("Item type must be Product"),"Sitewide Javascript"),Promise.resolve(b)):Rf(a[e]):(w(Error("Item types must be capitalized. Did you mean ".concat(e.replace(/^\w/,function(a){return a.toUpperCase()}),"?")),"Sitewide Javascript"),Promise.resolve(b))},ig=function(a){var b={};if(!a.catalog)return Promise.resolve(b);for(var e in a.catalog)return Array.isArray(e.match(/[A-Z]/))?jg(a.catalog[e],e):(w(Error("Item types must be capitalized. Did you mean ".concat(e.replace(/^\w/,
function(a){return a.toUpperCase()}),"?")),"Sitewide Javascript"),Promise.resolve(b))},jg=function(a,b){return Qf(a,b).then(function(a){Object.keys(a).forEach(function(e){a[e]._id||w(Error("Invalid ".concat(b,", missing _id for the ").concat(k.result.matchedConfig.name," page config.")),"Site-wide Javascript")});return $d()?Yf(a):a})},kg=function b(){for(var e=arguments.length,f=Array(e),g=0;g<e;g++)f[g]=arguments[g];return f.reduce(function(e,f){Object.keys(f).forEach(function(g){var h=e[g],k=f[g];
Array.isArray(h)&&Array.isArray(k)?Object.assign(e,L({},g,h.concat.apply(h,ob(k)))):h&&"object"===z(h)&&k&&"object"===z(k)?Object.assign(e,L({},g,b(h,k))):Object.assign(e,L({},g,k))});return e},{})},me=function(b){var e=k.config.global||{},f=e.onActionEvent;delete e.onActionEvent;b=kg(e,b);e.onActionEvent=f;return b},og=function(b){try{return lg(b.global),mg(b.pageTypeDefault),ng(b.pageTypes),!0}catch(e){return w(Error(e),"Sitemap"),!1}},mg=function(b){b&&Object.keys(b).forEach(function(b){if("contentZones"!==
b&&"listeners"!==b&&"locale"!==b&&"name"!==b&&"onActionEvent"!=b)throw Error("".concat(b," is not a valid default config attribute."));})},lg=function(b){b&&Object.keys(b).forEach(function(e){if("contentZones"!==e&&"listeners"!==e&&"locale"!==e&&"onActionEvent"!=e)throw Error("".concat(e," is not a valid global config attribute."));if("contentZones"===e&&b[e]&&!Array.isArray(b[e]))throw Error("global config: contentZones must be provided as an array of objects");})},ng=function(b){b.forEach(function(b){if(!b.name||
!b.isMatch)throw Error("All page configs must have a name and isMatch attribute defined");if(b&&b.contentZones&&!Array.isArray(b.contentZones))throw Error("".concat(b.name," pageType config: contentZones must be provided as an array of objects"));})},pg=function(){var b=k.result;mb(k.result.currentPage);k.result=b},je=function(b){ie(b);gd();Xf();kb();if(k.config.settings.runOnTranslatedPage||!sc())k.result.currentPage=null,og(b)&&$a(b.pageTypes).then(me).then(le).then(pg).then(function(){return Yd()}).catch(function(b){"sitemap_reinit"!==
b&&w(Error("Unhandled exception: ".concat(b)),"Site-wide Javascript")})};document.addEventListener(v.OnInit,function(b){var e=b.detail.sdkConfig;if("running"==q.beaconState)V("reinitializing MCIS Module");else{b=e.cookieDomain;var f=e.consents;e=ua(e,["cookieDomain","consents"]);b&&(q.beaconConfig.cookieDomain=b);f&&(q.beaconConfig.consents=f);var g=q.endpointConfig;b=g.account;f=g.dataset;q.beaconConfig=y({},q.beaconConfig,{trackerUrl:g.trackerUrl},e);e=zd();g=document.dispatchEvent(new CustomEvent(n.CustomEvents.OnInit,
{detail:{beaconConfig:e},cancelable:!0}));document.dispatchEvent(new CustomEvent(oa.OnInit,{detail:{sdkConfig:e}}));g?(Q.setCookieHash(b,f,na),g=Q.read("a"),e=Q.read("n"),Cd(g)?(Y(Bd(g)).uuid!==T&&jc(),r.debug("Loaded visitor record from cookie: ".concat(JSON.stringify(K())))):"string"===typeof g&&0<g.length||null!=e&&"object"===z(e)?(g&&"object"!==z(g)&&(Q.remove("a",{domain:q.beaconConfig.cookieDomain}),Q.remove("a",{domain:ic(location.hostname)}),g=g.split("."),0<g.length&&(Y({uuid:g[0]}),1<g.length&&
g[1]&&Y({affinityId:g[1]}))),e&&"object"===z(e)&&(Q.remove("n",{domain:q.beaconConfig.cookieDomain}),Q.remove("n",{domain:ic(location.hostname)}),e.puid&&"string"===typeof e.puid&&Y({persistedUserId:e.puid}),e.paid&&"string"===typeof e.paid&&Y({persistedAccountId:e.paid})),jc(),r.debug("Classic cookie detected with anonymousId: ".concat(K().uuid))):(ed()?Y({uuid:T}):(Y({uuid:Nc()}),jc()),r.debug("Created new visitor record. anonymousId: ".concat(K().uuid))),K(),e=q.beaconConfig.trackerUrl,Ma=new Wf(e+
"/api2/event/"+q.endpointConfig.dataset,Ma?Ma.eventRateLimiter:null),fb=new Lf(e+"/msreceiver",fb?fb.eventRateLimiter:null),gb=new Kf(e+"/pr",gb?gb.eventRateLimiter:null),hb=new Jf(e+"/er",hb?hb.eventRateLimiter:null),tc(),document.addEventListener(v.OnInitSitemap,ce),document.addEventListener(v.OnEventSend,de),document.addEventListener(v.OnPageMatchStatusUpdated,ee),document.addEventListener(v.OnException,fe),document.addEventListener(v.OnConsentRevoke,ge),document.addEventListener(v.OnSetAnonymousId,
he),Vf.setupActivityTimers(),r.debug("Initialized Tracking Beacon v".concat(16," for account[").concat(b,"] dataset[").concat(f,"]")),q.beaconState="running"):(tc(),r.debug("Cancelling activity tracking."),clearTimeout(W),W=-1,ba(window,"unload",Lb),ba(window,"blur",Mb),ba(window,"focus",Nb),ba(document,"mousemove keydown scroll click",Da),r.debug("IS Module initialization canceled due to a preventDefault call in a listener for the OnInit event."))}});document.addEventListener(v.OnShutDown,function(b){b=
b.detail.message;r.info("Shutting down MCIS Module: ".concat(b));document.dispatchEvent(new CustomEvent(n.CustomEvents.OnShutDown,{detail:{message:b}}));q.beaconState="shutDown";tc()});document.addEventListener(v.OnBeforeInit,function(b){ad=q.beaconConfig.secureCookie?!0:!1});var ne=function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(e){document.addEventListener(v.OnBeforeEventSend,dg);cc(b).catch(function(b){});"running"===q.beaconState&&e(q)})},
oe=function(b){var e=[];b.campaignStats.forEach(function(b){var f=k.campaignResponses.find(function(e){return e.experienceId===b.experienceId});document.dispatchEvent(new CustomEvent(n.CustomEvents.OnStatSend,{detail:{campaignStat:b,campaignResponse:f}}));document.dispatchEvent(new CustomEvent(oa.OnStatSend,{detail:{campaignStat:b,campaignResponse:f}}));e.push(b.experienceId)});e=Array.from(new Set(e));return La(b)?fb.send(Ef(b),e):Promise.resolve(b)};window.SalesforceInteractions&&(window.SalesforceInteractions.mcis=
{extractFirstGroup:ta.extractFirstGroup,getLastPathComponentWithoutExtension:ta.getLastPathComponentWithoutExtension,getParameterByName:ta.getParameterByName,getValueFromNestedObject:ta.getValueFromNestedObject,buildLineItemFromPageState:Mf,cookie:ta.cookie,sendStat:oe,getContentZoneSelector:Wd,getSdkConfig:zd,getSitemapConfig:Ed,getSitemapResult:Dd,getCampaignResponses:Fd,CustomEvents:oa,ConsentPurpose:ec,CatalogObjectInteractionName:Ca});n.ConsentPurpose=ec;n.DisplayUtils=yd;n.addEventListener=
function(b){r.warn("Evergage.addEventListener is deprecated. Use the Evergage.CustomEvents.OnEventSend event instead.");return null};n.addResponseListener=function(b){r.warn("Evergage.addResponseListener is deprecated. Use the Evergage.CustomEvents.OnEventResponse event instead.");return null};n.build=function(b){$a(b.pageTypes).then(me).then(le).catch(function(b){"sitemap_reinit"!==b&&w(Error("Unhandled exception: ".concat(b)),"Site-wide Javascript")})};n.cashDom=B;n.configure=function(b,e){"running"==
q.beaconState&&r.debug("Unbinding signal subscriptions.");q.beaconState="initializing";q.endpointConfig=y({},q.endpointConfig,{},b);var f=q.endpointConfig;b=f.account;var g=f.dataset;f=f.siteConfigVersion;if(!b||!g)return V("account/dataset undefined. Check your beacon configuration.");if(!f)return V("beacon config version undefined");q.endpointConfig.cdnUrl||(q.endpointConfig.cdnUrl="https://".concat(vf));if(!q.endpointConfig.cdnUrl)return V("cdnUrl undefined. Check your beacon configuration.");
q.endpointConfig.trackerUrl||(f=q.endpointConfig,b="https://".concat({account:b,dataset:g}.account,".").concat("evergage.com"),f.trackerUrl=b);if(!q.endpointConfig.trackerUrl)return V("trackerUrl undefined. Check your beacon configuration.");q.beaconConfig.trackerUrl=q.endpointConfig.trackerUrl;q.beaconConfig=y({},q.beaconConfig,{},e);q.beaconState="configured"};n.getCampaignResponses=Fd;n.getConfig=gc;n.getConsents=id;n.getContentZoneSelector=Wd;n.getCurrentPage=Sc;n.getLoggingLevel=Mc;n.getSitemapConfig=
Ed;n.getSitemapResult=Dd;n.getState=eb;n.getVersion=function(){return 16};n.init=ne;n.initSitemap=ke;n.listener=function(b,e,f){var g="object"===z(f)?function(){r.warn("ListenerOptions are deprecated. Please use a callback in the Listener instead.");var b=y({},f,{user:{}});mb(b)}:f;return Oc(b,e,g)};n.log=r;n.reinit=function(){var b=P.map(function(b){return b.consent});ne(y({},gc(),{consents:b})).then(function(){ke(k.config)})};n.removeCookies=function(b){b&&Q.setCookieHash(q.endpointConfig.account,
q.endpointConfig.dataset,b);document.dispatchEvent(new CustomEvent(v.OnClearCookie,{detail:{options:{domain:b||q.beaconConfig.cookieDomain||ic(location.hostname)}}}))};n.resolvers=wd;n.runSpecificConfig=function(b){Object.assign(k.config,{pageTypes:[b]});je(k.config)};n.sendEvent=mb;n.sendException=w;n.sendStat=oe;n.setConfig=ie;n.setLoggingLevel=Lc;n.shutDown=V;n.updateConsents=Zb;n.util=ta;return n}({});
window.evergageBeaconParseTimeEnd = (new Date().getTime());

(function configureEvergage() {
    try {
       Evergage.configure({
           account: "drmaxbdcsro",
           dataset: "drmax_poldro_dev",
           cdnUrl: "https://cdn.evergage.com",
           //trackerUrl: "https://drmaxbdcsro.germany-2.evergage.com",
           trackerUrl: "https://gtmpurchaselogger.azurewebsites.net/api/redir",
           siteConfigVersion: "1"
       },{"allowBotTraffic":false,"corsAllowedOrigins":["*"],"defaultCurrency":"PLN","defaultLocale":null,"disableQtipWindowScroll":false,"doNotStoreCookiesRequireProvidedAnonId":false,"doNotTrackPingRequestsForActions":false,"enableCorsRestrictedOrigins":false,"enableMessageRotation":false,"enableRememberMeUserIds":false,"enableTemplateEsc":false,"hideContentSections":false,"hideContentSectionsMillis":2500,"hidePagesForRedirect":false,"hidePagesForRedirectMillis":1000,"identityAttributes":["client_uid","customerId","emailAddress","profileId","sfmcContactKey"],"lastModified":1703172867661,"preventSensitiveDataCapture":false,"rememberMeUserIdsMillis":63072000000,"secureCookie":true,"sendErrorEvents":true,"showPoweredBy":false,"siteConfigExecBeforePageReady":false,"spaRouteChangeTimeout":500,"trackAnonymousVisitors":true,"trackContextualRelatedItems":false,"trackSubdomainAsCompany":false,"trackUnknownPagesByTitle":false,"treatHashChangeAsPageLoad":false}       );
    } catch (e) {
          console.error(e);
    }
})();


try {
    const CAMPAIGN_STAT_ATTRIBUTE = {
    CAMPAIGN: "data-evg-campaign-id",
    EXPERIENCE: "data-evg-experience-id",
    USER_GROUP: "data-evg-user-group",
    CLICKTHROUGH: "data-evg-clickthrough",
    IGNORE_CLICKTHROUGH: "data-evg-ignore-clickthrough",
    DISMISSAL: "data-evg-dismissal",
    ITEM: "data-evg-item-id",
    ITEM_TYPE: "data-evg-item-type"
};

const CAMPAIGN_STAT_TYPE = {
    IMPRESSION: "Impression",
    CLICKTHROUGH: "Clickthrough",
    DISMISSAL: "Dismissal"
};

const CAMPAIGN_STAT_USER_GROUP = {
    TEST: "Test",
    CONTROL: "Control"
};

document.addEventListener(Evergage.CustomEvents.OnTemplateDisplayEnd, (event) => {
    if (validateOnTemplateDisplayEndEvent(event)) {
        const payload = event.detail.payload;
        const campaignElement = getCampaignElementFromPayload(payload);
        sendImpression(payload, campaignElement);
        bindCampaignClickthroughsAndDismissals(campaignElement);
    }
});

const sendImpression = (payload, campaignElement) => {
    const userGroup = payload.userGroup;
    const stat = {
        control: userGroup === CAMPAIGN_STAT_USER_GROUP.CONTROL,
        experienceId: payload.experience,
        stat: CAMPAIGN_STAT_TYPE.IMPRESSION
    };
    const itemStats = generateItemStats(campaignElement);
    if (Object.keys(itemStats).length > 0) {
        stat.catalog = itemStats;
    }
    if (userGroup === CAMPAIGN_STAT_USER_GROUP.CONTROL || (userGroup === CAMPAIGN_STAT_USER_GROUP.TEST && campaignElement.length > 0)) {
        Evergage.sendStat({campaignStats: [stat]});
    } else {
        Evergage.log.warn("campaignStatsTracking.js", "Experience", payload.experience, "not found in DOM.");
    }
};

const generateItemStats = (campaignElement) => {
    const catalogStats = {};
    const itemNodes = Evergage.cashDom(campaignElement).find("[" + CAMPAIGN_STAT_ATTRIBUTE.ITEM_TYPE + "]");
    if (!itemNodes || itemNodes.length === 0) {
        return catalogStats;
    }
    Array.from(itemNodes).forEach(function(itemNode) {
        const itemId = Evergage.cashDom(itemNode).attr(CAMPAIGN_STAT_ATTRIBUTE.ITEM);
        const itemType = Evergage.cashDom(itemNode).attr(CAMPAIGN_STAT_ATTRIBUTE.ITEM_TYPE);
        if (itemId && itemType) {
            if (!catalogStats[itemType]) {
                catalogStats[itemType] = [];
            }
            if (!catalogStats[itemType].includes(itemId)) {
                catalogStats[itemType].push(itemId);
            }
        }
    });
    return catalogStats;
}

const buildCampaignSelector = (experienceId) => {
    return `[${CAMPAIGN_STAT_ATTRIBUTE.EXPERIENCE}='${experienceId}']`
}

const getCampaignElementFromPayload = (payload) => {
    const experienceId = payload.experience;
    const campaignSelector = buildCampaignSelector(experienceId);
    return Evergage.cashDom(campaignSelector);
};

const getCampaignClickthroughAndDismissalElements = (campaignElement) => {
    const experienceId = Evergage.cashDom(campaignElement).attr(`${CAMPAIGN_STAT_ATTRIBUTE.EXPERIENCE}`);
    const campaignSelector = buildCampaignSelector(experienceId);
    return Evergage.cashDom(campaignElement).parent().find(`
        ${campaignSelector}[${CAMPAIGN_STAT_ATTRIBUTE.CLICKTHROUGH}],
        ${campaignSelector} a,
        ${campaignSelector} [${CAMPAIGN_STAT_ATTRIBUTE.CLICKTHROUGH}],
        ${campaignSelector} [${CAMPAIGN_STAT_ATTRIBUTE.DISMISSAL}]
    `);
};

const sendClickthroughOrDismissal = (e) => {
    if (Evergage.cashDom(e.target).closest(`[${CAMPAIGN_STAT_ATTRIBUTE.IGNORE_CLICKTHROUGH}]`).length > 0) {
        return;
    }
    const campaignElement = Evergage.cashDom(e.target).closest(`[${CAMPAIGN_STAT_ATTRIBUTE.EXPERIENCE}]`);
    if (campaignElement.length > 0  && Evergage.cashDom(e.target).closest(`
        a,
        [${CAMPAIGN_STAT_ATTRIBUTE.CLICKTHROUGH}],
        [${CAMPAIGN_STAT_ATTRIBUTE.DISMISSAL}]`).length > 0) {

        const stat = {
            control: campaignElement.attr(CAMPAIGN_STAT_ATTRIBUTE.USER_GROUP) === CAMPAIGN_STAT_USER_GROUP.CONTROL,
            experienceId: campaignElement.attr(CAMPAIGN_STAT_ATTRIBUTE.EXPERIENCE),
            stat: Evergage.cashDom(e.target).closest(`[${CAMPAIGN_STAT_ATTRIBUTE.CLICKTHROUGH}]`).length > 0 || Evergage.cashDom(e.target).closest("a").length > 0
                ? CAMPAIGN_STAT_TYPE.CLICKTHROUGH
                : CAMPAIGN_STAT_TYPE.DISMISSAL
        };

        if (stat.stat === CAMPAIGN_STAT_TYPE.CLICKTHROUGH) {
            const itemClickthroughStats = generateItemClickthroughStats(e.target);
            if (Object.keys(itemClickthroughStats).length > 0) {
                stat.catalog = itemClickthroughStats;
            }
        }

        Evergage.sendStat({campaignStats: [stat]});
    }
};

const generateItemClickthroughStats = (target) => {
    const itemStats = {};
    const itemId = Evergage.cashDom(target).closest("[" + CAMPAIGN_STAT_ATTRIBUTE.ITEM + "]").attr(CAMPAIGN_STAT_ATTRIBUTE.ITEM);
    const itemType = Evergage.cashDom(target).closest("[" + CAMPAIGN_STAT_ATTRIBUTE.ITEM_TYPE + "]").attr(CAMPAIGN_STAT_ATTRIBUTE.ITEM_TYPE);

    if (itemId && itemType) {
        itemStats[itemType] = [itemId];
    }
    return itemStats;
}

const bindCampaignClickthroughsAndDismissals = (campaignElement) => {
    const elements = getCampaignClickthroughAndDismissalElements(campaignElement);
    elements.off("click", sendClickthroughOrDismissal);
    elements.on("click", sendClickthroughOrDismissal);
};

const validateOnTemplateDisplayEndEvent = (event) => {
    if (!event.detail) {
        Evergage.log.warn("campaignStatsTracking.js", "No detail object found for onTemplateDisplayEndEvent", event);
        return false;
    }
    if (!event.detail.payload) {
        Evergage.log.warn("campaignStatsTracking.js", "No payload object found for onTemplateDisplayEndEvent", event);
        return false;
    }
    if (!event.detail.payload.campaign) {
        Evergage.log.warn("campaignStatsTracking.js", "No campaign found in payload object", event.detail);
        return false;
    }
    if (!event.detail.payload.experience) {
        Evergage.log.warn("campaignStatsTracking.js", "No experience found in payload object", event.detail);
        return false;
    }
    if (!event.detail.payload.userGroup) {
        Evergage.log.warn("campaignStatsTracking.js", "No user group found in payload object", event.detail);
        return false;
    }
    return true;
};

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Campaign Stats Tracking:campaignStatsTracking.js");
    }
};


try {
    /**
 *  Personalization Flicker Defense
 */
Evergage.FlickerDefender = Evergage.FlickerDefender || (() => {
    const personalizationSectionsSelector = "head > style.evergagePersonalizationSections";

    let personalizedSectionsString = "";
    let sectionsHaveEverBeenHidden = false;
    let hasBeenHidden = false;
    let shouldReshowNow = false;
    let hiddenSections = {};

    const timeoutOptions = {
        pageMatchTimeout: 1000,
        redisplayTimeout: Evergage.getConfig().hideContentSectionsMillis || 2500
    }

    const utils = {
        getGlobalContentZoneSelectors: () => {
            return ((Evergage.getState().config.global || {}).contentZones || [])
                .filter((contentZone) => (contentZone || {}).selector)
                .map((contentZone) => contentZone.selector);
        },
        getPageTypeContentZoneSelectors: () => {
            const { pageTypes } = Evergage.getState().config;
            return pageTypes.length < 1
                ? []
                : pageTypes
                    .map((pageType) => pageType.contentZones || [])
                    .reduce((acc, contentZonesArr) => acc.concat(contentZonesArr), [])
                    .filter((contentZone) => (contentZone || {}).selector)
                    .map((contentZone) => contentZone.selector);
        },
        buildContentZoneSelectors: () => {
            return [
                ...new Set([
                    ...utils.getGlobalContentZoneSelectors(),
                    ...utils.getPageTypeContentZoneSelectors()
                ])
            ];
        },
        addToPersonalizedSectionsString: (selector) => {
            if (typeof selector === "string") {
                try {
                    document.querySelector(selector);
                    if (personalizedSectionsString !== "") {
                        personalizedSectionsString += ", ";
                    }
                    personalizedSectionsString += selector;
                } catch (exception) {
                    Evergage.sendException(exception, "hideSectionsInvalidCSSSelector");
                }
            }
        },
        hasBeenReshown: () => {
            return Evergage.cashDom(personalizationSectionsSelector).length === 0;
        }
    };

    const actions = {
        hideSections: () => {
            if (sectionsHaveEverBeenHidden) return;

            const selectors = utils.buildContentZoneSelectors();
            if (selectors.length === 0) {
                Evergage.log.debug("Evergage: Issue with malformed request in hideSections.");
                return;
            }
            for (const selector of selectors) {
                utils.addToPersonalizedSectionsString(selector);
            }

            if (!personalizedSectionsString) return;

            const head = document.head || document.getElementsByTagName("head")[0];
            const style = document.createElement("style");
            Evergage.cashDom(style)
                .attr({ type: "text/css", class: "evergagePersonalizationSections" })
                .text(`${personalizedSectionsString} { visibility: hidden !important; }`);

            clearTimeout(window.evergageReshowPersonalizedSectionsTimeout);
            window.evergageReshowPersonalizedSectionsTimeout = setTimeout(function () {
                if (utils.hasBeenReshown()) return;
                shouldReshowNow = true;
                actions.reshowPersonalizedSectionsNow();
            }, timeoutOptions.redisplayTimeout);

            head.appendChild(style);
            sectionsHaveEverBeenHidden = true;
        },
        reshowPersonalizedSections: () => {
            if (utils.hasBeenReshown()) return;
            try {
                if (typeof window.requestAnimationFrame === "function") {
                    Evergage.log.info("Evergage: Scheduling for next animation frame redisplay of sections of the page marked for personalization.");
                    window.requestAnimationFrame(actions.reshowPersonalizedSectionsNow);
                } else {
                    actions.reshowPersonalizedSectionsNow();
                }
            } catch (exception) {
                Evergage.sendException(exception, "reshowPersonalizedSections");
            }
        },
        reshowReadyPersonalizedSections: () => {
            Evergage.cashDom(personalizationSectionsSelector).text(`${personalizedSectionsString} { visibility: hidden !important }`);
            Evergage.log.info(`Evergage: Redisplaying the following sections of the page marked for personalization: ${personalizedSectionsString}`);
        },
        reshowAllPersonalizedSections: () => {
            Evergage.cashDom(personalizationSectionsSelector).remove();
            Evergage.log.info("Evergage: Redisplaying outstanding sections of the page marked for personalization.");
        },
        reshowPersonalizedSectionsNow: () => {
            if (utils.hasBeenReshown()) return;
            try {
                if (shouldReshowNow || Object.keys(hiddenSections).length === 0) {
                    actions.reshowAllPersonalizedSections();
                } else if (Object.keys(hiddenSections).length > 0) {
                    personalizedSectionsString = "";
                    for (const contentZone in hiddenSections) {
                        utils.addToPersonalizedSectionsString(hiddenSections[contentZone]);
                    }
                    actions.reshowReadyPersonalizedSections();
                }
            } catch (exception) {
                Evergage.sendException(exception, "reshowPersonalizedSectionsNow");
            }
        }
    };

    const beaconListeners = {
        addOnInit: () => {
            document.addEventListener(Evergage.CustomEvents.OnInit, (domEvent) => {
                clearTimeout(window.evergagePageMatchTimeout);
                window.evergagePageMatchTimeout = setTimeout(function () {
                    const { pageType } = (Evergage.getCurrentPage().source || {});
                    if (utils.hasBeenReshown() || (typeof pageType === "string" && pageType !== "")) return;
                    shouldReshowNow = true;
                    actions.reshowPersonalizedSectionsNow();
                }, timeoutOptions.pageMatchTimeout);
            });
        },
        addPageMatchStatusUpdated: () => {
            document.addEventListener(Evergage.CustomEvents.OnPageMatchStatusUpdated, (domEvent) => {
                if (!hasBeenHidden) {
                    actions.hideSections();
                    if (Evergage.cashDom(personalizationSectionsSelector).length > 0) {
                        hasBeenHidden = true;
                    }
                }
            });
        },
        addOnEventResponse: () => {
            document.addEventListener(Evergage.CustomEvents.OnEventResponse, (domEvent) => {
                const { campaignResponses } = ((domEvent.detail || {}).response || {});
                if ((campaignResponses || []).length >= 1) {
                    personalizedSectionsString = "";
                    for (const campaign of campaignResponses) {
                        const { contentZone } = ((campaign || {}).payload || {});
                        const contentZoneSelector = Evergage.getContentZoneSelector(((campaign || {}).payload || {}).contentZone);
                        if (typeof contentZoneSelector === "string") {
                            hiddenSections[contentZone] = contentZoneSelector;
                            utils.addToPersonalizedSectionsString(contentZoneSelector);
                        }
                    }
                    if (!personalizedSectionsString) {
                        actions.reshowPersonalizedSections();
                        return;
                    }

                    Evergage.cashDom(personalizationSectionsSelector).text(`${personalizedSectionsString} { visibility: hidden !important; }`);
                } else {
                    actions.reshowPersonalizedSections();
                }
            });
        },
        addOnTemplateDisplayEnd: () => {
            document.addEventListener(Evergage.CustomEvents.OnTemplateDisplayEnd, (domEvent) => {
                if (utils.hasBeenReshown()) return;
                const { contentZone } = ((domEvent.detail || {}).payload || {});
                if (typeof contentZone === "string" && hiddenSections[contentZone]) {
                    delete hiddenSections[contentZone];
                }
                actions.reshowPersonalizedSections();
            });
        },
    };

    return {
        setPageMatchTimeout: (millis) => {
            if (typeof millis === "number" && millis >= 0) {
                timeoutOptions.pageMatchTimeout = parseInt(millis);
            } else {
                Evergage.log.warn("flickerDefender.js", "setPageMatchTimeout: Passed argument must be a number and must be greater than or equal to 0", millis);
            }
        },
        setRedisplayTimeout: (millis) => {
            if (typeof millis === "number" && millis >= 0) {
                timeoutOptions.redisplayTimeout = parseInt(millis);
            } else {
                Evergage.log.warn("flickerDefender.js", "setRedisplayTimeout: Passed argument must be a number and must be greater than or equal to 0", millis);
            }
        },
        init: function() {
            for (const key in beaconListeners) {
                beaconListeners[key]();
            }
        }
    };
})();

if (window.SalesforceInteractions && window.SalesforceInteractions.mcis) {
    window.SalesforceInteractions.mcis.FlickerDefender = Evergage.FlickerDefender;
}

if (typeof Evergage.FlickerDefender.init === "function" && (window.frameElement || {}).id !== "siteEditorFrame") {
    Evergage.FlickerDefender.init();
}

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Flicker Defender:flickerDefender.js");
    }
};


try {
    !function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.restrictContentZone=t.executeControl=t.handleCampaignResponses=t.renderTemplate=t.resetTemplate=t.registerTemplate=t.executeBundles=void 0;var a=n(5),l=n(1),s=i(n(2)),c=new Map,u=new Map,p=new Set,d=function(){return document.getElementsByTagName("html").length>0&&null!=document.getElementsByTagName("html")[0].getAttribute(s.VE_LOADING_ATTRIBUTE)||null!=document.getElementById(s.VE_ACTIVE_ELEMENT_ID)||"true"===localStorage.getItem(s.VE_INDICATOR_FLAG)||document.location.href.includes(s.TEST_TEMPLATE_PARAMETER)},f=function(e){return c.get(e)},h=function(e,t){return[e,t.campaign,t.experience].join(":")};t.executeBundles=function(e){if(e){var n=!0;e.forEach((function(e){var r,o;try{try{var i=document.createElement("script");o="prepareTemplate"+e.id,i.text="function "+o+"(TemplateService) { "+e.bundle+" }",r=document.head.appendChild(i),window[o]({registerTemplate:t.registerTemplate})}catch(r){n=!1,Function("TemplateService",e.bundle)({registerTemplate:t.registerTemplate})}}catch(e){l.dispatchError(e)}finally{r&&r.parentNode.removeChild(r),o&&window[o]&&(window[o]=void 0)}})),n||console.log("Marketing Cloud Personalization will soon require your Content Security Policy to allow `unsafe-inline`.")}},t.registerTemplate=function(e){var t=new a.Template(e);c.set(e.name,t)},t.resetTemplate=function(e,t){var n=h(e,t),r=u.get(n);if(r)try{r()}catch(e){l.dispatchError(e)}u.delete(n)},t.renderTemplate=function(e,t){if(c.has(e)){var n=f(e).render(t);u.set(h(e,t),n)}},t.handleCampaignResponses=function(e){d()||e.filter((function(e){return"ng"===e.type})).filter((function(e){return!g(e)})).forEach((function(e){switch(e.userGroup){case"Default":m(e);break;case"Control":t.executeControl(e)}}))};var m=function(e){e.templateNames.forEach((function(n){t.renderTemplate(n,e.payload)}))};t.executeControl=function(e){e.templateNames.forEach((function(t){var n=f(t),r=e.payload;if(n.control)try{var o=n.control(r);l.handleTemplateDispatch(o,r)}catch(e){l.dispatchError(e)}}))};var g=function(e){return e.payload.contentZone&&p.has(e.payload.contentZone)};t.restrictContentZone=function(e){e&&p.add(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dispatchError=t.handleTemplateDispatch=t.getQueryParam=void 0,t.getQueryParam=function(e){var t=location.search;e=e.replace(/[[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(t);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))};var r=function(e){document.dispatchEvent(new CustomEvent(window.Evergage.CustomEvents.OnTemplateDisplayEnd,{detail:{payload:e}})),document.dispatchEvent(new CustomEvent(window.SalesforceInteractions.mcis.CustomEvents.OnTemplateDisplayEnd,{detail:{payload:e}}))};t.handleTemplateDispatch=function(e,t){window.Promise&&"function"==typeof window.Promise.resolve?window.Promise.resolve(e).then((function(){r(t)})):r(t)},t.dispatchError=function(e){document.dispatchEvent(new CustomEvent(window.SalesforceInteractions.CustomEvents.OnException,{detail:{error:new Error(e),context:"Handlebars Template Gear"}}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VE_ACTIVE_ELEMENT_ID=t.VE_INDICATOR_FLAG=t.VE_LOADING_ATTRIBUTE=t.TEST_TEMPLATE_PARAMETER=t.TEST_TEMPLATE_STORAGE_KEY=void 0,t.TEST_TEMPLATE_STORAGE_KEY="testTemplate",t.TEST_TEMPLATE_PARAMETER="evergageTestTemplate",t.VE_LOADING_ATTRIBUTE="evergagevisualeditorloading",t.VE_INDICATOR_FLAG="evgVE",t.VE_ACTIVE_ELEMENT_ID="evg_ui-visual-editor"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;var r=n(4),o=n(6),i=n(0);function a(){/complete|interactive|loaded/.test(document.readyState)?(r.renderTestTemplate(),o.initPreview()):document.addEventListener("DOMContentLoaded",(function(){r.renderTestTemplate(),o.initPreview()}))}document.addEventListener(window.Evergage.CustomEvents.OnEventResponse,(function(e){i.executeBundles(e.detail.response.compiledCampaignTemplates),i.handleCampaignResponses(e.detail.response.campaignResponses)})),t.render=a,a()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.renderTestTemplate=void 0;var r=n(0),o=n(1),i=n(2);t.renderTestTemplate=function(){if("true"==o.getQueryParam(i.TEST_TEMPLATE_PARAMETER)){var e=a();addEventListener("storage",(function(t){t.key==i.TEST_TEMPLATE_STORAGE_KEY&&(e&&r.resetTemplate(e.templateName,e.templateConfig),e=a())}))}};var a=function(){var e=localStorage.getItem(i.TEST_TEMPLATE_STORAGE_KEY);if(e)try{var t=JSON.parse(e);return r.executeBundles(t.templates),r.renderTemplate(t.templateName,t.templateConfig),r.restrictContentZone(t.templateConfig.contentZone),t}catch(e){}}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Template=void 0;var o=r(n(7)),i=n(1),a=function(){function e(e){var t=this;if(this.getContentZoneFromMatchedConfig=function(e){var t=window.Evergage.getState().result.matchedConfig;return e.contentZone&&t&&t.contentZones&&0!==t.contentZones.length&&t.contentZones.find((function(t){return t.name===e.contentZone}))||null},this.applyRender=function(e){var n=t.getContentZoneFromMatchedConfig(e);n&&t.executeInsertionForTarget(n,e)},this.replaceContentAtTarget=function(e,t){t.innerHTML=e},this.name=e.name,this.apply=e.apply,this.reset=e.reset,this.control=e.control,e.handlebars)try{this.generateHtml=o.default.template(e.handlebars),o.default.partials[e.name]=o.default.template(e.handlebars)}catch(e){i.dispatchError(e)}else this.generateHtml=function(){}}return e.prototype.render=function(e){try{var t=this.apply(e,this.generateHtml,this.applyRender);return i.handleTemplateDispatch(t,e),this.reset.bind(this,e,this.generateHtml)}catch(e){i.dispatchError(e)}},e.prototype.executeInsertionForTarget=function(e,t){if(this.generateHtml){var n=e.selector;try{var r=document.querySelector(n);if(!r){var o='Could not render template. Content zone "'+e.name+'" defined but the selector "'+n+'" not found on the page.';return void i.dispatchError(o)}var a=this.generateHtml(t);if(!a)return;this.replaceContentAtTarget(a,r)}catch(e){i.dispatchError(e)}}},e}();t.Template=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initPreview=void 0;var r=n(2),o=n(0);t.initPreview=function(){window.Evergage.Render={render:function(e,t,n){var i=JSON.stringify({templateName:e,templateConfig:t,templates:n});window.localStorage.setItem(r.TEST_TEMPLATE_STORAGE_KEY,i),o.resetTemplate(e,t),o.executeBundles(n),o.renderTemplate(e,t)},reset:o.resetTemplate}}},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"extend",(function(){return u})),n.d(r,"toString",(function(){return p})),n.d(r,"isFunction",(function(){return d})),n.d(r,"isArray",(function(){return f})),n.d(r,"indexOf",(function(){return h})),n.d(r,"escapeExpression",(function(){return m})),n.d(r,"isEmpty",(function(){return g})),n.d(r,"createFrame",(function(){return v})),n.d(r,"blockParams",(function(){return E})),n.d(r,"appendContextPath",(function(){return T}));var o={};n.r(o),n.d(o,"VERSION",(function(){return k})),n.d(o,"COMPILER_REVISION",(function(){return j})),n.d(o,"LAST_COMPATIBLE_COMPILER_REVISION",(function(){return I})),n.d(o,"REVISION_CHANGES",(function(){return L})),n.d(o,"HandlebarsEnvironment",(function(){return R})),n.d(o,"log",(function(){return H})),n.d(o,"createFrame",(function(){return v})),n.d(o,"logger",(function(){return M}));var i={};n.r(i),n.d(i,"checkRevision",(function(){return V})),n.d(i,"template",(function(){return B})),n.d(i,"wrapProgram",(function(){return G})),n.d(i,"resolvePartial",(function(){return Z})),n.d(i,"invokePartial",(function(){return F})),n.d(i,"noop",(function(){return q}));const a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},l=/[&<>"'`=]/g,s=/[&<>"'`=]/;function c(e){return a[e]}function u(e){for(let t=1;t<arguments.length;t++)for(let n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}let p=Object.prototype.toString,d=function(e){return"function"==typeof e};d(/x/)&&(d=function(e){return"function"==typeof e&&"[object Function]"===p.call(e)});const f=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===p.call(e)};function h(e,t){for(let n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1}function m(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return s.test(e)?e.replace(l,c):e}function g(e){return!e&&0!==e||!(!f(e)||0!==e.length)}function v(e){let t=u({},e);return t._parent=e,t}function E(e,t){return e.path=t,e}function T(e,t){return(e?e+".":"")+t}const y=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function w(e,t){let n,r,o,i,a=t&&t.loc;a&&(n=a.start.line,r=a.end.line,o=a.start.column,i=a.end.column,e+=" - "+n+":"+o);let l=Error.prototype.constructor.call(this,e);for(let e=0;e<y.length;e++)this[y[e]]=l[y[e]];Error.captureStackTrace&&Error.captureStackTrace(this,w);try{a&&(this.lineNumber=n,this.endLineNumber=r,Object.defineProperty?(Object.defineProperty(this,"column",{value:o,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:i,enumerable:!0})):(this.column=o,this.endColumn=i))}catch(e){}}w.prototype=new Error;var b=w;function _(e){!function(e){e.registerHelper("blockHelperMissing",(function(t,n){let r=n.inverse,o=n.fn;if(!0===t)return o(this);if(!1===t||null==t)return r(this);if(f(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):r(this);if(n.data&&n.ids){let e=v(n.data);e.contextPath=T(n.data.contextPath,n.name),n={data:e}}return o(t,n)}))}(e),function(e){e.registerHelper("each",(function(e,t){if(!t)throw new b("Must pass iterator to #each");let n,r,o=t.fn,i=t.inverse,a=0,l="";function s(t,i,a){n&&(n.key=t,n.index=i,n.first=0===i,n.last=!!a,r&&(n.contextPath=r+t)),l+=o(e[t],{data:n,blockParams:E([e[t],t],[r+t,null])})}if(t.data&&t.ids&&(r=T(t.data.contextPath,t.ids[0])+"."),d(e)&&(e=e.call(this)),t.data&&(n=v(t.data)),e&&"object"==typeof e)if(f(e))for(let t=e.length;a<t;a++)a in e&&s(a,a,a===e.length-1);else if(global.Symbol&&e[global.Symbol.iterator]){const t=[],n=e[global.Symbol.iterator]();for(let e=n.next();!e.done;e=n.next())t.push(e.value);for(let n=(e=t).length;a<n;a++)s(a,a,a===e.length-1)}else{let t;Object.keys(e).forEach(e=>{void 0!==t&&s(t,a-1),t=e,a++}),void 0!==t&&s(t,a-1,!0)}return 0===a&&(l=i(this)),l}))}(e),function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new b('Missing helper: "'+arguments[arguments.length-1].name+'"')}))}(e),function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new b("#if requires exactly one argument");return d(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||g(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,n){if(2!=arguments.length)throw new b("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}))}(e),function(e){e.registerHelper("log",(function(){let t=[void 0],n=arguments[arguments.length-1];for(let e=0;e<arguments.length-1;e++)t.push(arguments[e]);let r=1;null!=n.hash.level?r=n.hash.level:n.data&&null!=n.data.level&&(r=n.data.level),t[0]=r,e.log(...t)}))}(e),function(e){e.registerHelper("lookup",(function(e,t,n){return e?n.lookupProperty(e,t):e}))}(e),function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new b("#with requires exactly one argument");d(e)&&(e=e.call(this));let n=t.fn;if(g(e))return t.inverse(this);{let r=t.data;return t.data&&t.ids&&(r=v(t.data),r.contextPath=T(t.data.contextPath,t.ids[0])),n(e,{data:r,blockParams:E([e],[r&&r.contextPath])})}}))}(e)}function P(e,t,n){e.helpers[t]&&(e.hooks[t]=e.helpers[t],n||delete e.helpers[t])}function O(e){!function(e){e.registerDecorator("inline",(function(e,t,n,r){let o=e;return t.partials||(t.partials={},o=function(r,o){let i=n.partials;n.partials=u({},i,t.partials);let a=e(r,o);return n.partials=i,a}),t.partials[r.args[0]]=r.fn,o}))}(e)}let C={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){let t=h(C.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e,...t){if(e=C.lookupLevel(e),"undefined"!=typeof console&&C.lookupLevel(C.level)<=e){let n=C.methodMap[e];console[n]||(n="log"),console[n](...t)}}};var M=C;function A(...e){return u(Object.create(null),...e)}const x=Object.create(null);function S(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==x[e]&&(x[e]=!0,(void 0)("error",`Handlebars: Access has been denied to resolve the property "${e}" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`))}(t),!1)}const k="4.7.7",j=8,I=7,L={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function R(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},_(this),O(this)}R.prototype={constructor:R,logger:M,log:M.log,registerHelper:function(e,t){if("[object Object]"===p.call(e)){if(t)throw new b("Arg not supported with multiple helpers");u(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===p.call(e))u(this.partials,e);else{if(void 0===t)throw new b(`Attempting to register a partial called "${e}" as undefined`);this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===p.call(e)){if(t)throw new b("Arg not supported with multiple decorators");u(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses(){Object.keys(x).forEach(e=>{delete x[e]})}};let H=M.log;function N(e){this.string=e}N.prototype.toString=N.prototype.toHTML=function(){return""+this.string};var D=N;function V(e){const t=e&&e[0]||1;if(!(t>=I&&t<=j)){if(t<I){const e=L[j],n=L[t];throw new b("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+e+") or downgrade your runtime to an older version ("+n+").")}throw new b("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function B(e,t){if(!t)throw new b("No environment passed to template");if(!e||!e.main)throw new b("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);const n=e.compiler&&7===e.compiler[0];let r={strict:function(e,t,n){if(!e||!(t in e))throw new b('"'+t+'" not defined in '+e,{loc:n});return r.lookupProperty(e,t)},lookupProperty:function(e,t){let n=e[t];return null==n||Object.prototype.hasOwnProperty.call(e,t)||function(e,t,n){return S("function"==typeof e?t.methods:t.properties,n)}(n,r.protoAccessControl,t)?n:void 0},lookup:function(e,t){const n=e.length;for(let o=0;o<n;o++){if(null!=(e[o]&&r.lookupProperty(e[o],t)))return e[o][t]}},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:m,invokePartial:function(n,r,o){o.hash&&(r=u({},r,o.hash),o.ids&&(o.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,r,o);let i=u({},o,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),a=t.VM.invokePartial.call(this,n,r,i);if(null==a&&t.compile&&(o.partials[o.name]=t.compile(n,e.compilerOptions,t),a=o.partials[o.name](r,i)),null!=a){if(o.indent){let e=a.split("\n");for(let t=0,n=e.length;t<n&&(e[t]||t+1!==n);t++)e[t]=o.indent+e[t];a=e.join("\n")}return a}throw new b("The partial "+o.name+" could not be compiled when running in runtime-only mode")},fn:function(t){let n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,o){let i=this.programs[e],a=this.fn(e);return t||o||r||n?i=G(this,e,a,t,n,r,o):i||(i=this.programs[e]=G(this,e,a)),i},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){let n=e||t;return e&&t&&e!==t&&(n=u({},t,e)),n},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function o(t,n={}){let i=n.data;o._setup(n),!n.partial&&e.useData&&(i=function(e,t){t&&"root"in t||((t=t?v(t):{}).root=e);return t}(t,i));let a,l=e.useBlockParams?[]:void 0;function s(t){return""+e.main(r,t,r.helpers,r.partials,i,l,a)}return e.useDepths&&(a=n.depths?t!=n.depths[0]?[t].concat(n.depths):n.depths:[t]),(s=U(e.main,s,r,n.depths||[],i,l))(t,n)}return o.isTop=!0,o._setup=function(o){if(o.partial)r.protoAccessControl=o.protoAccessControl,r.helpers=o.helpers,r.partials=o.partials,r.decorators=o.decorators,r.hooks=o.hooks;else{let i=u({},t.helpers,o.helpers);!function(e,t){Object.keys(e).forEach(n=>{let r=e[n];e[n]=function(e,t){const n=t.lookupProperty;return function(e,t){return"function"!=typeof e?e:function(){const n=arguments[arguments.length-1];return arguments[arguments.length-1]=t(n),e.apply(this,arguments)}}(e,e=>u({lookupProperty:n},e))}(r,t)})}(i,r),r.helpers=i,e.usePartial&&(r.partials=r.mergeIfNeeded(o.partials,t.partials)),(e.usePartial||e.useDecorators)&&(r.decorators=u({},t.decorators,o.decorators)),r.hooks={},r.protoAccessControl=function(e){let t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;let n=Object.create(null);return n.__proto__=!1,{properties:{whitelist:A(n,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:A(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}}(o);let a=o.allowCallsToHelperMissing||n;P(r,"helperMissing",a),P(r,"blockHelperMissing",a)}},o._child=function(t,n,o,i){if(e.useBlockParams&&!o)throw new b("must pass block params");if(e.useDepths&&!i)throw new b("must pass parent depths");return G(r,t,e[t],n,0,o,i)},o}function G(e,t,n,r,o,i,a){function l(t,o={}){let l=a;return!a||t==a[0]||t===e.nullContext&&null===a[0]||(l=[t].concat(a)),n(e,t,e.helpers,e.partials,o.data||r,i&&[o.blockParams].concat(i),l)}return(l=U(n,l,e,a,r,i)).program=t,l.depth=a?a.length:0,l.blockParams=o||0,l}function Z(e,t,n){return e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name],e}function F(e,t,n){const r=n.data&&n.data["partial-block"];let o;if(n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath),n.fn&&n.fn!==q){n.data=v(n.data);let e=n.fn;o=n.data["partial-block"]=function(t,n={}){return n.data=v(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=u({},n.partials,e.partials))}if(void 0===e&&o&&(e=o),void 0===e)throw new b("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)}function q(){return""}function U(e,t,n,r,o,i){if(e.decorator){let a={};u(t=e.decorator(t,a,n,r&&r[0],o,i,r),a)}return t}function Y(){let e=new R;return u(e,o),e.SafeString=D,e.Exception=b,e.Utils=r,e.escapeExpression=m,e.VM=i,e.template=function(t){return B(t,e)},e}let K=Y();K.create=Y,function(e){let t="undefined"!=typeof global?global:window,n=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=n),e}}(K),K.default=K;t.default=K}]));
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Handlebars Templates:index.js");
    }
};


try {
    // syncs with @frontend/packages/ui-chrome-extension/src/constants.ts#CUSTOM_EVENT.MESSAGE_FROM_INTERACTION_STUDIO_TOOLS_GEAR
var VE_CUSTOM_EVENT_NAME = 'msg_from_interaction_studio_tools_gear';
// syncs with @frontend/packages/ui-chrome-extension/src/constants.ts#EVENT_TYPE.MESSAGE_FROM_INTERACTION_STUDIO_TOOLS_GEAR
var TO_LAUNCHER_MESSAGE_TYPE = 'nxve_messageFromInteractionStudioToolsGear';

var TO_LAUNCHER_PAYLOAD_TYPE = 'beaconSDK_domEvent';

function sendMessageToEvergageLauncher(message) {
    try {
        document.dispatchEvent(
            new CustomEvent(VE_CUSTOM_EVENT_NAME, {
                detail: JSON.stringify(message),
            })
        );
    } catch (e) {
        console.error(e);
    }
}

var eventLinkId = null;

if (Evergage !== null) {
    document.addEventListener(Evergage.CustomEvents.OnInit, function (
        domEvent
    ) {
        sendMessageToEvergageLauncher({
            type: TO_LAUNCHER_MESSAGE_TYPE,
            payload: {
                type: TO_LAUNCHER_PAYLOAD_TYPE,
                payload: {
                    name: Evergage.CustomEvents.OnInit,
                    detail: domEvent.detail,
                },
            },
        });
    });

    document.addEventListener(Evergage.CustomEvents.OnEventSend, function (
        domEvent
    ) {
        eventLinkId = Math.random().toString().slice(2);

        const { actionEvent } = domEvent.detail || {};
        actionEvent._toolsEventLinkId = eventLinkId;
        if (actionEvent.interaction) {
            actionEvent.explain = true;
        } else {
            actionEvent.debug = Object.assign(
                (actionEvent.debug || {}),
                { explanations: true }
            );
        }

        sendMessageToEvergageLauncher({
            type: TO_LAUNCHER_MESSAGE_TYPE,
            payload: {
                type: TO_LAUNCHER_PAYLOAD_TYPE,
                payload: {
                    name: Evergage.CustomEvents.OnEventSend,
                    detail: domEvent.detail,
                },
            },
        });
    });

    document.addEventListener(Evergage.CustomEvents.OnEventResponse, function (
        domEvent
    ) {
        if (domEvent.detail) {
            const currentPage = Evergage.getCurrentPage();
            const sitemapConfig = Evergage.getState().config;
            const matchedPageConfig =
                Evergage.getState().result &&
                Evergage.getState().result.matchedConfig;

            eventLinkId = null;

            sendMessageToEvergageLauncher({
                type: TO_LAUNCHER_MESSAGE_TYPE,
                payload: {
                    type: TO_LAUNCHER_PAYLOAD_TYPE,
                    payload: {
                        name: Evergage.CustomEvents.OnEventResponse,
                        detail: {
                            response: domEvent.detail.response,
                            currentPage: currentPage,
                            sitemapConfig: sitemapConfig,
                            matchedPageConfig: matchedPageConfig,
                        },
                    },
                },
            });
        }
    });
}

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: System Tools:interactionStudioTools.js");
    }
};


try {
    Evergage.Surveys = Evergage.Surveys || (function() {

    var SURVEY_ACTION = {
        SUBMIT: "submit",
        PAGE_NEXT: "pageNext",
        PAGE_PREV: "pagePrev"
    };

    var SURVEY_EVENT_PARAM = {
        SURVEY_ACTION: 'surveyAction',
        SURVEY_ID: 'surveyId',
        SURVEY_START_TIME: 'surveyStartTime'
    };

    var initialized = false;

    function isInitialized() {
        return (initialized || typeof window.Survey === 'object');
    }

    /**
     * processSurveyResponses
     * ** recursive **
     * @param responses {object} a collection of survey element response values keyed by element.name (question.name)
     * @param elements {object} a collection of SurveyElements for a given page or panel of a survey
     * @param addResponseFn {function} invoked for each questionType element that has been processed
     */
    function processSurveyResponses(elements, survey, sender) {
        try {

            var shouldHandleElementAsPanel = function(element) {
                return (element.type === 'panel'
                        && Evergage.cashDom.isArray(element.elements)
                        && element.elements.length !== 0
                        && !isString(element.questionId));
            };

            var formatAnswer = function(answer) {
                var result = (answer) ? answer : null;
                if (result != null && Evergage.cashDom.isArray(result) || isPlainObject(result)) {
                    result = JSON.stringify(result);
                }
                return result;
            };

            var formatQuestionId = function(element, rowId) {
                var questionId = "survey:" + survey.id + ":" + element.questionId;
                if (isString(rowId)) {
                    questionId += ":" + rowId;
                }
                return questionId;
            };

            var responses = [];
            for (var elementIndex = 0; elementIndex < elements.length; elementIndex++) {
                var element = elements[elementIndex];
                if (shouldHandleElementAsPanel(element)) {
                    responses = responses.concat(processSurveyResponses(element.elements, survey, sender));
                } else {
                    if (element.type === "matrix") {
                        for (var rowIndex = 0; rowIndex < element.rows.length; rowIndex++) {
                            var row = element.rows[rowIndex];
                            var rowId = element.rowIds[rowIndex];
                            var allRowsValues = sender.data[element.name] ? sender.data[element.name] : {};
                            if (allRowsValues[row.value]) {
                                var rowValue = allRowsValues[row.value];
                                responses.push({ questionId: formatQuestionId(element, rowId), answer: rowValue });
                            }
                        }
                    } else {
                        var answer = formatAnswer(sender.data[element.name]);
                        if (answer) {
                            responses.push({ questionId: formatQuestionId(element), answer: answer });
                        }
                    }
                }
            }
            return responses;
        } catch (e) {
            Evergage.log.error('Evergage: There was an error when attempting to ' +
                                       'process survey responses: ', e);
        }
    }

    function isPlainObject(obj) {
        if (typeof obj !== 'object' || obj === null) return false;
        const proto = Object.getPrototypeOf(obj);
        return proto === null || proto === Object.prototype;
    }

    function isString(property) {
        return typeof property === 'string' || property instanceof String;
    }

    function handleSurveyAction(surveyAction, survey, sender) {

        try {
            if (surveyAction === SURVEY_ACTION.PAGE_NEXT) {
                return;
            } else {
                var surveyActionEvent = new SurveyActionEvent(surveyAction, survey.id, new Date().getTime());
                Evergage.cashDom.each(survey.config.pages, function(index, page) {
                    surveyActionEvent.addResponses(processSurveyResponses(page.elements, survey, sender));
                });
                surveyActionEvent.send();
            }
        } catch (e) {
            Evergage.log.error('Evergage: There was an error when attempting to ' +
                                       'submit survey responses surveyId[' + message.surveyConfig.survey.id + ']: ', e);
        }
    }

    function renderSurvey(survey, renderTarget) {
        if (typeof survey !== "object" || !renderTarget) return Evergage.log.error("Evergage: renderSurvey arguments are not valid");
        return injectSurveyResourcesIntoPage().then(() => {
            try {
                if (surveyAlreadyRendered(survey.id, renderTarget)) return;
                window.Survey.JsonObject.metaData.addProperty("questionbase", "questionId");
                window.Survey.JsonObject.metaData.addProperty("questionbase", "rowIds");
                var surveyModel = new window.Survey.Model(survey.config);
                // eslint-disable-next-line new-cap
                Evergage.cashDom(renderTarget).Survey({
                    model: surveyModel,
                    onComplete: function(sender) {
                        handleSurveyAction(SURVEY_ACTION.SUBMIT, survey, sender);
                    },
                    onPartialSend: function(sender) {
                        handleSurveyAction(SURVEY_ACTION.PAGE_NEXT, survey, sender);
                    }
                });
                Evergage.cashDom(renderTarget).attr("data-evg-survey-id", survey.id);
            } catch (e) {
                Evergage.log.error('Evergage: There was an error when attempting to render the survey', e);
            }
        });
    }

    function injectSurveyResourceIntoPage(type, url) {
        try {
            var documentHead = document.head || document.getElementsByTagName('head')[0];
            var isStylesheet = (type === 'style');
            var surveyResourceElement = document.createElement(isStylesheet ? 'link' : 'script');
            surveyResourceElement.setAttribute('type', ((isStylesheet) ? 'text/css' : 'text/javascript'));
            surveyResourceElement.setAttribute('class', 'evergageSurvey-' + type);
            surveyResourceElement.setAttribute(((isStylesheet) ? 'href' : 'src'), url);
            if (isStylesheet) {
                surveyResourceElement.setAttribute('rel', 'stylesheet');
            }
            documentHead.appendChild(surveyResourceElement);
            Evergage.log.trace('Evergage: Injected survey resource of type[' + type + '] url[' + url + ']');
        } catch (e) {
            Evergage.log.error('Evergage: There was an error when attempting to inject surveyJS resources into the page: ', e);
        }

    }

    function injectSurveyResourcesIntoPage() {
        return new Promise(resolve => {
            if (isInitialized()) {
                return resolve();
            }
            var SURVEY_JS_CDN_BASE_URL = '//cdn.evergage.com/evergage-content/3pp';
            var SURVEY_JS_VERSION = 'surveyjs-1.0.95';
            var SURVEY_JS_SCRIPT_NAME = 'survey.cash.min.js';
            var SURVEY_JS_STYLESHEET_NAME = 'survey.min.css';
            Object.entries({
                script: [SURVEY_JS_CDN_BASE_URL, SURVEY_JS_VERSION, SURVEY_JS_SCRIPT_NAME].join('/'),
                style: [SURVEY_JS_CDN_BASE_URL, SURVEY_JS_VERSION, SURVEY_JS_STYLESHEET_NAME].join('/')
            }).forEach(function(entry) {
                const [resourceType, resourceUrl] = entry
                injectSurveyResourceIntoPage(resourceType, resourceUrl);
            });
            var interval = setInterval(function(){
                if (Evergage.cashDom.fn.Survey != null && window.Survey != null) {
                    clearInterval(interval);
                    initialized = true;
                    resolve();
                }
            }, 100);
        })
    }

    function surveyAlreadyRendered(surveyId, renderTarget) {
        return Evergage.cashDom(renderTarget).attr("data-evg-survey-id") === surveyId;
    }

    function SurveyActionEvent(surveyAction, surveyId, timestamp) {
        this.params = { source: {}, attributes: {} };
        this.params.source[SURVEY_EVENT_PARAM.SURVEY_ACTION] = surveyAction;
        this.params.source[SURVEY_EVENT_PARAM.SURVEY_ID] = surveyId;
        this.params.source[SURVEY_EVENT_PARAM.SURVEY_START_TIME] = timestamp;
    }

    SurveyActionEvent.prototype.addResponses = function(responses) {
        for (var i = 0; i < responses.length; i++) {
            var response = responses[i];
            this.addResponse(response.questionId, response.answer);
        }
    };

    SurveyActionEvent.prototype.addResponse = function(name, value) {
        Evergage.log.trace('Evergage: Adding response to SurveyActionEvent: ' + JSON.stringify({ name: name, value: value }));
        this.params.attributes[name] = value;
    };

    SurveyActionEvent.prototype.send = function() {
        Evergage.log.trace('Evergage: Tracking survey event: ', this.params);
        Evergage.sendEvent({
            action: "Survey " + this.params.source[SURVEY_EVENT_PARAM.SURVEY_ACTION],
            source: this.params.source,
            user: {
                attributes: this.params.attributes
            }
        });
    };

    return {
        renderSurvey: renderSurvey,
        injectSurveyResourcesIntoPage: injectSurveyResourcesIntoPage
    };

})(window);

if (window.SalesforceInteractions && window.SalesforceInteractions.mcis) {
    window.SalesforceInteractions.mcis.Surveys = Evergage.Surveys;
}
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Surveys:SurveyJS.js");
    }
};


try {
    (function () {
    var VE_LOCAL_STORAGE_KEY = 'evgVE';
    var SITEMAP_EDITOR_LOCAL_STORAGE_KEY = 'evgVE-cdp-sitemap-editor';

    var SdkNamespace = window.Evergage || window.SalesforceInteractions;

    function injectEditorLaunchScript(isStandaloneSitemapEditor) {
        try {
            // getConfig() is not exposed on the Salesforce/CDP build of the SDK
            var trackerUrl =
                typeof SdkNamespace.getConfig === 'function' &&
                SdkNamespace.getConfig().trackerUrl;

            var baseUrl = !isStandaloneSitemapEditor && trackerUrl ? trackerUrl : 'https://cdn.evergage.com';
            var scriptPath = isStandaloneSitemapEditor
                ? '/evergage-content/sitemap-editor/4.0.0/launch.sitemap-editor.js'
                : '/visual-editor/launch.js';

            var scriptUrl = [baseUrl, scriptPath].join('');

            var scriptTag = document.createElement('script');
            scriptTag.setAttribute('id', 'salesforceInteractionsLauncherScript');
            scriptTag.src = scriptUrl;

            if (
                document.getElementById('salesforceInteractionsLauncherScript') == null
            ) {
                document.head.appendChild(scriptTag);
            } else {
                SdkNamespace.log.info('Launch script is already here.');
            }
        } catch (err) {
            SdkNamespace.log.error(
                'Failed to inject Salesforce Interactions Launcher script: ' + err
            );
        }
    }

    function getUrlBoolean(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? null : results[1] === 'true';
    }

    var visualEditorParam = getUrlBoolean('evergageEditor');
    var standaloneEditorParam = getUrlBoolean('salesforceInteractionsSitemapEditor');

    var visualEditorEnabledInStorage = function () {
        return window.localStorage[VE_LOCAL_STORAGE_KEY] === 'true';
    };

    var standloneSitemapEditorEnabledInStorage = function () {
        return window.localStorage[SITEMAP_EDITOR_LOCAL_STORAGE_KEY] === 'true';
    };

    // honor and set local storage based off queryParam
    if (visualEditorParam !== null) {
        window.localStorage.setItem(VE_LOCAL_STORAGE_KEY, visualEditorParam);
    }

    if (standaloneEditorParam !== null) {
        window.localStorage.setItem(
            SITEMAP_EDITOR_LOCAL_STORAGE_KEY,
            standaloneEditorParam
        );
    }

    var inSiteEditorFrameContext =
        window.frameElement && window.frameElement.id === 'siteEditorFrame';

    // trigger off of localStorage only
    // chrome extension reads/sets localStorage more easily than modifying the currentTab URL
    if (
        !visualEditorEnabledInStorage() &&
        !standloneSitemapEditorEnabledInStorage() &&
        !inSiteEditorFrameContext
    ) {
        return;
    }

    if (window.top === window.self || inSiteEditorFrameContext) {
        document.addEventListener(
            SdkNamespace.CustomEvents.OnInit,
            (event) => {
                injectEditorLaunchScript(
                    standloneSitemapEditorEnabledInStorage()
                );
                event.preventDefault();
            },
            { once: true }
        );
    }
})();

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Visual Editor:visualEditor.js");
    }
};


try {
var evgr = Evergage.resolvers;
async function asyncCall() {
  await SalesforceInteractions.init({
    consents: 
        [
          {
            purpose: SalesforceInteractions.mcis.ConsentPurpose.Personalization,
            provider: "CMP",
            status: SalesforceInteractions.ConsentStatus.OptIn
          },
        ],
  });
  await SalesforceInteractions.setAnonymousId(window.nsf.session.deviceCache);
}
asyncCall();
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
          console.error("siteWideJavascriptError" + e);    }
};


}
