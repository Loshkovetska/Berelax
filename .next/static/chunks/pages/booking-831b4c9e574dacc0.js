(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4882],{8679:function(e,t,n){"use strict";var r=n(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function s(e){return r.isMemo(e)?c:a[e.$$typeof]||o}a[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[r.Memo]=c;var u=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(m){var o=d(n);o&&o!==m&&e(t,o,r)}var c=f(n);l&&(c=c.concat(l(n)));for(var a=s(t),y=s(n),v=0;v<c.length;++v){var b=c[v];if(!i[b]&&(!r||!r[b])&&(!y||!y[b])&&(!a||!a[b])){var h=p(n,b);try{u(t,b,h)}catch(S){}}}}return t}},2385:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/booking",function(){return n(5192)}])},6386:function(e,t,n){"use strict";var r=n(1799),o=n(9396),i=n(5893),c=n(9323),a=n(7294),s=n(3400),u=n(9818),f=n(4219),l=n(4184),p=n.n(l),d=n(4812),m=n(8949),y=n(5068),v=(0,c.Pi)((function(e){var t=e.beforeDate,n=void 0!==t&&t,c=e.afterDate,l=void 0!==c&&c,v=(0,a.useState)("2022-12"),b=v[0],h=v[1],S=(0,a.useState)("2022-12-21"),_=S[0],x=S[1],g=((0,a.useRef)(null),(0,s.b3)().content),$=(0,f.d)(),P=$.width;$.height;(0,a.useEffect)((function(){var e=document.querySelectorAll(".calendar .action");e&&e.forEach((function(e){e&&(e.innerHTML='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M2.34375 5.64328L8.00042 11.3L13.6571 5.64328L12.7144 4.69995L8.00042 9.41462L3.28642 4.69995L2.34375 5.64328Z" fill="#13233B"/>\n</svg>\n')}))}),[]),(0,a.useEffect)((function(){var e=new Date;h("".concat(e.getFullYear(),"-").concat(e.getMonth()+1)),x("".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate()))}),[]);var j={};return l&&(j={disabledAfterDate:_}),(0,i.jsx)("section",{className:p()("calendar",d.ZP.isCalendar&&"open"),onClick:d.bu,children:(0,i.jsxs)("div",{className:"calendar__container",onClick:function(e){return e.stopPropagation()},children:[(0,i.jsx)("div",{className:"calendar__row",children:(0,i.jsx)(u.Mt,(0,o.Z)((0,r.Z)({disabledBeforeToday:n},j),{initialMonthAndYear:b,onChange:function(e){(0,m.z)((function(){y.mt.date=e[0]})),(0,d.bu)()},autoResponsive:!1,numberOfMonths:P>900?2:1,numberOfSelectableDays:1}))}),(0,i.jsx)("div",{className:"calendar__text",children:null===g||void 0===g?void 0:g.popCalendarText})]})})}));t.Z=v},5192:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return S},default:function(){return _}});var r=n(5893),o=n(9008),i=n.n(o),c=n(9323),a=n(7294),s=n(3355),u=n(2251),f=n(5068),l=n(4184),p=n.n(l),d=n(8949),m=n(3400),y=n(4812),v=(0,c.Pi)((function(){var e,t=(0,m.b3)().content,n=null===y.ZP||void 0===y.ZP?void 0:y.ZP.cardTime;return(0,r.jsx)("section",{className:p()("time-pop",y.ZP.isTimePop&&"open"),onClick:function(){return(0,y.cu)(n)},children:(0,r.jsxs)("div",{className:"time-pop__container",onClick:function(e){return e.stopPropagation()},children:[(0,r.jsx)("div",{className:"time-pop__title",children:null===t||void 0===t?void 0:t.popDurationTitle}),(0,r.jsx)("div",{className:"time-pop__list",children:null===n||void 0===n||null===(e=n.price)||void 0===e?void 0:e.map((function(e,t){return(0,r.jsxs)("div",{className:"time-pop__item",onClick:function(){var t=JSON.parse(JSON.stringify(f.mt.treatments));t=t.map((function(t,r){return t.id==n.id&&(t.time=e.time,t.price=e.amount),t})),(0,d.z)((function(){f.mt.treatments=t})),(0,y.cu)(n)},children:[e.time," mins - $",e.amount]},t)}))})]})})})),b=n(6386),h=(0,c.Pi)((function(e){e.hydrationData;var t=(0,a.useState)(!1),n=t[0];t[1],(0,a.useRef)(null);return(0,s.Z)(!n),(0,a.useEffect)((function(){n||window.document}),[n]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i(),{children:(0,r.jsx)("title",{children:"Be relax"})}),(0,r.jsx)(u.Z,{delay:1,children:(0,r.jsx)(f.ZP,{})}),(0,r.jsx)(v,{}),(0,r.jsx)(b.Z,{beforeDate:!0})]})})),S=!0,_=h},9921:function(e,t){"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,l=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,y=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.block"):60121,h=n?Symbol.for("react.fundamental"):60117,S=n?Symbol.for("react.responder"):60118,_=n?Symbol.for("react.scope"):60119;function x(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case f:case l:case i:case a:case c:case d:return e;default:switch(e=e&&e.$$typeof){case u:case p:case v:case y:case s:return e;default:return t}}case o:return t}}}function g(e){return x(e)===l}t.AsyncMode=f,t.ConcurrentMode=l,t.ContextConsumer=u,t.ContextProvider=s,t.Element=r,t.ForwardRef=p,t.Fragment=i,t.Lazy=v,t.Memo=y,t.Portal=o,t.Profiler=a,t.StrictMode=c,t.Suspense=d,t.isAsyncMode=function(e){return g(e)||x(e)===f},t.isConcurrentMode=g,t.isContextConsumer=function(e){return x(e)===u},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===p},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===v},t.isMemo=function(e){return x(e)===y},t.isPortal=function(e){return x(e)===o},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===c},t.isSuspense=function(e){return x(e)===d},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===l||e===a||e===c||e===d||e===m||"object"===typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===y||e.$$typeof===s||e.$$typeof===u||e.$$typeof===p||e.$$typeof===h||e.$$typeof===S||e.$$typeof===_||e.$$typeof===b)},t.typeOf=x},9864:function(e,t,n){"use strict";e.exports=n(9921)}},function(e){e.O(0,[1255,6871,9818,7751,9774,2888,179],(function(){return t=2385,e(e.s=t);var t}));var t=e.O();_N_E=t}]);