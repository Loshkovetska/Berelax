(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5202],{646:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/treatments/[category]",function(){return t(7168)}])},5619:function(e,n,t){"use strict";var i=t(5018),l=t(5893),r=t(4184),s=t.n(r),c=t(9323),o=t(7294),a=t(2811),u=t(4812),d=t(3619),v=t(9286),f=t(5590),m=(0,c.Pi)((function(e){var n=e.placeholder,t=e.dt,r=e.getValue,c=e.multiple,m=e.defaultValue,h=void 0===m?"":m,x=(0,o.useState)(!1),_=x[0],j=x[1],p=(0,o.useRef)(null),g=(0,a.Z)(p),N=(0,o.useState)(Array()),Z=N[0],b=N[1],y=(0,o.useState)(""),S=y[0],w=y[1],k=(0,o.useState)(!1),E=k[0],C=k[1];return(0,o.useEffect)((function(){g&&j(!1)}),[g]),(0,o.useEffect)((function(){!S.length&&h.length&&w(h)}),[h,S]),(0,o.useEffect)((function(){_?C(!0):(setTimeout((function(){C(!1)}),400),c?Z.length?r(Z):r([]):S.length?r(S):r(""))}),[_,Z,S]),(0,l.jsxs)("div",{className:s()("select",_&&"open",E&&"visible"),ref:p,children:[(0,l.jsxs)("div",{className:"select__top",onClick:function(){return j(!_)},children:[(0,l.jsx)("span",{className:"select__value",children:c?(0,l.jsx)(l.Fragment,{children:Z.length?Z.join(", "):n}):(0,l.jsx)(l.Fragment,{children:(null===S||void 0===S?void 0:S.length)?S:n})}),(0,l.jsx)(v.o,{name:"ic"})]}),(0,l.jsx)("div",{className:"select__list",onScroll:function(){u.ZP.locoScroll&&u.ZP.locoScroll.stop()},onMouseLeave:function(){return u.ZP.locoScroll&&u.ZP.locoScroll.start()},children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,l.jsx)("div",{className:"select__item",children:c?(0,l.jsx)(d.Z,{value:Z.includes(e),returnValue:function(n){var t=Z;n?t.push(e):t=t.filter((function(n){return n!=e})),b((0,i.Z)(t))},label:e}):(0,l.jsx)(f.Z,{value:S==e,returnValue:function(n){w(e)},label:e})},n)}))})]})}));n.Z=m},8510:function(e,n,t){"use strict";var i=t(5893),l=t(9323),r=t(7294),s=t(4219),c=t(7767),o=t(8133),a=t(9286),u=t(9808),d=(0,l.Pi)((function(e){var n=e.item,t=(0,r.useRef)(null),l=(0,s.d)().width,d=function(e){if(1==e.length)return"".concat(e[0]," minutes");var n=e[0],t=e[e.length-1];return"".concat(n,"-").concat(t," minutes")};(0,r.useEffect)((function(){if(!(l<1024)&&t.current){var e=parseInt(getComputedStyle(t.current).webkitLineClamp),n=parseInt(getComputedStyle(t.current).lineHeight);t.current.style.height="".concat(n*e,"px")}}),[l]);var v=(0,c.Z)(),f=(v.x,v.y);return(0,i.jsx)(i.Fragment,{children:l>480?(0,i.jsxs)("a",{className:"service-item",href:"".concat(n.link),onMouseEnter:function(){if(!(l<1024)&&t.current){var e=t.current.scrollHeight;requestAnimationFrame((function(){t.current.style.height="".concat(e,"px")}))}},onClick:function(){return function(e,n){sessionStorage.setItem("position",JSON.stringify({x:e,y:n}))}(0,f)},onMouseLeave:function(){if(!(l<1024)&&t.current){var e=parseInt(getComputedStyle(t.current).webkitLineClamp),n=parseInt(getComputedStyle(t.current).lineHeight);requestAnimationFrame((function(){t.current.style.height="".concat(n*e,"px")}))}},children:[(0,i.jsx)("div",{className:"service-item__img",children:(0,i.jsx)(u.Z,{src:n.img,alt:n.alt})}),(0,i.jsxs)("div",{className:"service-item__content",children:[(0,i.jsxs)("div",{className:"service-item__content-top",children:[(0,i.jsx)("div",{className:"service-item__content-time",children:d(n.time)}),(0,i.jsx)("div",{className:"service-item__content-title",children:n.title}),(0,i.jsx)("div",{className:"service-item__content-text",ref:t,dangerouslySetInnerHTML:{__html:n.text}})]}),(0,i.jsx)(o.Z,{classStr:"beige button-search",isLink:!0,link:n.link,inner:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a.o,{name:"arrow"})})})]})]}):(0,i.jsxs)("a",{className:"service-item2",href:"".concat(n.link),children:[(0,i.jsxs)("div",{className:"service-item2__img",children:[(0,i.jsx)(u.Z,{src:n.img,alt:n.alt}),(0,i.jsxs)("div",{className:"service-item2__time",children:[(0,i.jsx)(a.o,{name:"news/duration"}),d(n.time).replaceAll("minutes","min")]})]}),(0,i.jsxs)("div",{className:"service-item2__content",children:[(0,i.jsx)("div",{className:"service-item2__title",children:n.title}),(0,i.jsx)(o.Z,{classStr:"white button-arrow button-svg",isLink:!0,link:n.link,inner:(0,i.jsxs)(i.Fragment,{children:["See Details",(0,i.jsx)(a.o,{name:"arrow"})]})})]})]})})}));n.Z=d},2749:function(e,n,t){"use strict";var i=t(5893),l=t(4184),r=t.n(l),s=t(9323),c=t(2846),o=t(8133),a=t(9286),u=t(9808),d=t(2949),v=(0,s.Pi)((function(e){var n,t,l,s,v,f,m,h,x,_=e.theme,j=void 0===_?"beige":_,p=(0,c.b3)().content;return(0,i.jsx)("section",{className:r()("banner","blue"==j&&"blue"),children:(0,i.jsx)(d.Z,{children:(0,i.jsxs)("div",{className:"banner__container",children:[(0,i.jsxs)("div",{className:"banner__content",children:[(0,i.jsxs)("div",{className:"banner__top",children:[(0,i.jsx)("h3",{className:"banner__title",style:{color:null===p||void 0===p||null===(n=p.banner)||void 0===n?void 0:n.title_color},dangerouslySetInnerHTML:{__html:null===p||void 0===p||null===(t=p.banner)||void 0===t?void 0:t.title}}),(null===p||void 0===p||null===(l=p.banner)||void 0===l?void 0:l.text)&&(0,i.jsx)("div",{className:"banner__text",style:{color:null===p||void 0===p||null===(s=p.banner)||void 0===s?void 0:s.text_color},dangerouslySetInnerHTML:{__html:null===p||void 0===p||null===(v=p.banner)||void 0===v?void 0:v.text}})]}),(0,i.jsx)(o.Z,{classStr:"white button-arrow button-svg p24",isLink:!0,link:null===p||void 0===p||null===(f=p.banner)||void 0===f?void 0:f.link,inner:(0,i.jsxs)(i.Fragment,{children:[null===p||void 0===p||null===(m=p.banner)||void 0===m?void 0:m.buttonText,(0,i.jsx)(a.o,{name:"arrow"})]})})]}),(0,i.jsx)("div",{className:"banner__img",children:(0,i.jsx)(u.Z,{src:null===p||void 0===p||null===(h=p.banner)||void 0===h?void 0:h.img,alt:null===p||void 0===p||null===(x=p.banner)||void 0===x?void 0:x.alt})})]})})})}));n.Z=v},2073:function(e,n,t){"use strict";var i=t(5893),l=t(9323),r=t(2846),s=t(2949),c=t(4353),o=(0,l.Pi)((function(){var e=(0,r.b3)().content,n="treatcat-intro";return(0,i.jsx)("section",{className:n,children:(0,i.jsx)(s.Z,{delay:.5,children:(0,i.jsxs)("div",{className:n+"__top",children:[(0,i.jsx)(c.Z,{classStr:n+"__title",text:null===e||void 0===e?void 0:e.title}),(0,i.jsx)("div",{className:n+"__text",dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.text}})]})})})}));n.Z=o},7168:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return b},default:function(){return y}});var i=t(5893),l=t(9323),r=t(7294),s=t(3355),c=t(2944),o=t(2073),a=t(1799),u=t(9396),d=t(4184),v=t.n(d),f=t(4219),m=t(2846),h=t(2949),x=t(5619),_=t(8510),j=(0,l.Pi)((function(){var e,n,t=(0,m.b3)(),l=t.content,s=t.cards,c=(0,f.d)().width,o=(0,r.useState)({p1:null,p2:null,p3:null}),d=o[0],j=o[1],p=(0,r.useMemo)((function(){var e,n,t,i=s,r=null===l||void 0===l?void 0:l.paramsForFilter;return(null===(e=d.p1)||void 0===e?void 0:e.length)||(null===(n=d.p2)||void 0===n?void 0:n.length)||(null===(t=d.p3)||void 0===t?void 0:t.length)?(d.p1&&"time"==r[0]&&d.p1.forEach((function(e){var n=e.replace(/[^0-9]/g," ").trim().split(" ").filter((function(e){return e.length}));if(e.includes("-")){var t=Array.from(i).filter((function(e){if(e.time.filter((function(e){return e>=n[0]&&e<=n[1]})).length)return e}));i=t}else{var l=Array.from(i).filter((function(e){if(e.time.filter((function(e){return e>n[0]})).length)return e}));i=l}})),d.p2&&"locations"==r[1]&&d.p2.forEach((function(e){var n=Array.from(i).filter((function(n){if(n.locations.includes(e))return n}));i=n})),d.p3&&(i=Array.from(i),"bodyPart"==r[2]&&d.p3.forEach((function(e){var n=Array.from(i).filter((function(n){if(n.bodyPart.includes(e))return n}));i=n})),"serviceType"==r[2]&&d.p3.forEach((function(e){i=Array.from(i).filter((function(n){if(n.serviceType.includes(e))return n}))}))),i):i}),[d,s,null===l||void 0===l?void 0:l.paramsForFilter]);return(0,i.jsxs)("section",{className:"services-list",children:[(0,i.jsx)(h.Z,{delay:.5,children:(0,i.jsxs)("div",{className:v()("services-list__selects",!(null===l||void 0===l||null===(e=l.select3)||void 0===e?void 0:e.length)&&"two-selects"),children:[(0,i.jsx)(x.Z,{placeholder:null===l||void 0===l?void 0:l.select1Title,dt:JSON.parse(JSON.stringify(null===l||void 0===l?void 0:l.select1)).sort((function(e,n){return e.localeCompare(n)})),multiple:!0,getValue:function(e){j((0,u.Z)((0,a.Z)({},d),{p1:e}))}}),(0,i.jsx)(x.Z,{multiple:!0,placeholder:null===l||void 0===l?void 0:l.select2Title,dt:JSON.parse(JSON.stringify(null===l||void 0===l?void 0:l.select2)).sort((function(e,n){return e.localeCompare(n)})),getValue:function(e){j((0,u.Z)((0,a.Z)({},d),{p2:e}))}}),(null===l||void 0===l||null===(n=l.select3)||void 0===n?void 0:n.length)>0&&(0,i.jsx)(x.Z,{multiple:!0,placeholder:null===l||void 0===l?void 0:l.select3Title,dt:JSON.parse(JSON.stringify(null===l||void 0===l?void 0:l.select3)).sort((function(e,n){return e.localeCompare(n)})),getValue:function(e){j((0,u.Z)((0,a.Z)({},d),{p3:e}))}})]})}),(0,i.jsx)("div",{className:"services-list__list",children:null===p||void 0===p?void 0:p.map((function(e,n){var t=0;return t=1==n?.7:0,n||(t=.6),n>1&&(t=(n+1)%2?0:.1),(0,i.jsx)(h.Z,{delay:c>767?t:0,children:(0,i.jsx)(_.Z,{item:e})},n)}))})]})})),p=t(2749),g=t(2251),N=t(3534),Z=(0,l.Pi)((function(e){var n=e.hydrationData,t=(0,r.useState)(!0),l=t[0],a=t[1];return(0,s.Z)(!l),(0,r.useEffect)((function(){l||window.document}),[l]),(0,r.useEffect)((function(){n.content&&a(!1)}),[n]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(N.Z,{seo:n.seo}),(0,i.jsxs)(g.Z,{isTreatCat:!0,children:[(0,i.jsx)(c.Z,{}),(0,i.jsx)(o.Z,{}),(0,i.jsx)(j,{}),(0,i.jsx)(p.Z,{})]})]})})),b=!0,y=Z}},function(e){e.O(0,[1255,2299,7566,9774,2888,179],(function(){return n=646,e(e.s=n);var n}));var n=e.O();_N_E=n}]);