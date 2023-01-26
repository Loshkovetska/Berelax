"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7324],{2804:function(e,i,n){var t=n(5893),s=n(9323),r=n(1664),l=n.n(r),c=n(7294),a=n(7767),o=n(8133),d=n(9286),u=n(4042),m=(0,s.Pi)((function(e){var i=e.item,n=e.buttonText,s=(0,c.useRef)(null),r=(0,c.useRef)(null),m=(0,c.useRef)(null),v=(0,c.useRef)(null),x=(0,c.useRef)(null),h=function(){var e=0,i=0;if(s.current){var n=parseInt(getComputedStyle(s.current).webkitLineClamp),t=parseInt(getComputedStyle(s.current).lineHeight);t*n>=s.current.scrollHeight?(s.current.style.minHeight="".concat(s.current.scrollHeight,"px"),e=s.current.scrollHeight):(s.current.style.minHeight="".concat(t*n,"px"),e=t*n),r.current.style.setProperty("--title-height",e+"px")}if(m.current){var l=parseInt(getComputedStyle(m.current).webkitLineClamp),c=parseInt(getComputedStyle(m.current).lineHeight);m.current.style.minHeight="".concat(c*l,"px"),i=c*l,r.current.style.setProperty("--text-height",i+"px")}};(0,c.useEffect)((function(){window.innerWidth>900&&(h(),window.addEventListener("resize",(function(){h()})))}),[]);var _=(0,a.Z)(),j=(_.x,_.y);return(0,t.jsx)(l(),{href:i.link,children:(0,t.jsxs)("a",{className:"product-item",ref:r,onClick:function(){return function(e,i){sessionStorage.setItem("position",JSON.stringify({x:e,y:i}))}(0,j)},children:[(0,t.jsx)("div",{className:"product-item__img",ref:x,children:(0,t.jsx)(u.Z,{src:i.img})}),(0,t.jsxs)("div",{className:"product-item__content",ref:v,children:[(0,t.jsx)("div",{className:"product-item__title",dangerouslySetInnerHTML:{__html:i.title},ref:s}),(0,t.jsx)("div",{className:"product-item__text",dangerouslySetInnerHTML:{__html:i.text},ref:m}),(0,t.jsx)(o.Z,{isLink:!0,link:i.link,inner:(0,t.jsxs)(t.Fragment,{children:[n,(0,t.jsx)(d.o,{name:"arrow"})]}),classStr:"white button-arrow button-svg p16p20"})]})]})})}));i.Z=m},8510:function(e,i,n){var t=n(5893),s=n(9323),r=n(1664),l=n.n(r),c=n(7294),a=n(4219),o=n(7767),d=n(8133),u=n(9286),m=n(4042),v=(0,s.Pi)((function(e){var i=e.item,n=(0,c.useRef)(null),s=(0,a.d)().width,r=function(e){var i=e[0],n=e[e.length-1];return"".concat(i,"-").concat(n," minutes")};(0,c.useEffect)((function(){if(!(s<1024)&&n.current){var e=parseInt(getComputedStyle(n.current).webkitLineClamp),i=parseInt(getComputedStyle(n.current).lineHeight);n.current.style.height="".concat(i*e,"px")}}));var v=(0,o.Z)(),x=(v.x,v.y);return(0,t.jsx)(l(),{href:"".concat(i.link),children:s>480?(0,t.jsxs)("a",{className:"service-item",onMouseEnter:function(){if(!(s<1024)&&n.current){var e=n.current.scrollHeight;requestAnimationFrame((function(){n.current.style.height="".concat(e,"px")}))}},onClick:function(){return function(e,i){sessionStorage.setItem("position",JSON.stringify({x:e,y:i}))}(0,x)},onMouseLeave:function(){if(!(s<1024)&&n.current){var e=parseInt(getComputedStyle(n.current).webkitLineClamp),i=parseInt(getComputedStyle(n.current).lineHeight);requestAnimationFrame((function(){n.current.style.height="".concat(i*e,"px")}))}},children:[(0,t.jsx)("div",{className:"service-item__img",children:(0,t.jsx)(m.Z,{src:i.img})}),(0,t.jsxs)("div",{className:"service-item__content",children:[(0,t.jsxs)("div",{className:"service-item__content-top",children:[(0,t.jsx)("div",{className:"service-item__content-time",children:r(i.time)}),(0,t.jsx)("div",{className:"service-item__content-title",children:i.title}),(0,t.jsx)("div",{className:"service-item__content-text",ref:n,children:i.text})]}),(0,t.jsx)(d.Z,{classStr:"beige button-search",isLink:!0,link:i.link,inner:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(u.o,{name:"arrow"})})})]})]}):(0,t.jsxs)("a",{className:"service-item2",children:[(0,t.jsxs)("div",{className:"service-item2__img",children:[(0,t.jsx)(m.Z,{src:i.img}),(0,t.jsxs)("div",{className:"service-item2__time",children:[(0,t.jsx)(u.o,{name:"news/duration"}),r(i.time).replaceAll("minutes","min")]})]}),(0,t.jsxs)("div",{className:"service-item2__content",children:[(0,t.jsx)("div",{className:"service-item2__title",children:i.title}),(0,t.jsx)(d.Z,{classStr:"white button-arrow button-svg",isLink:!0,link:i.link,inner:(0,t.jsxs)(t.Fragment,{children:["See Details",(0,t.jsx)(u.o,{name:"arrow"})]})})]})]})})}));i.Z=v},2749:function(e,i,n){var t=n(5893),s=n(4184),r=n.n(s),l=n(9323),c=n(3400),a=n(8133),o=n(9286),d=n(4042),u=n(2949),m=(0,l.Pi)((function(e){var i,n,s,l,m,v,x=e.theme,h=void 0===x?"beige":x,_=(0,c.b3)().content;return(0,t.jsx)("section",{className:r()("banner","blue"==h&&"blue"),children:(0,t.jsx)(u.Z,{children:(0,t.jsxs)("div",{className:"banner__container",children:[(0,t.jsxs)("div",{className:"banner__content",children:[(0,t.jsxs)("div",{className:"banner__top",children:[(0,t.jsx)("h3",{className:"banner__title",dangerouslySetInnerHTML:{__html:null===_||void 0===_||null===(i=_.banner)||void 0===i?void 0:i.title}}),(null===_||void 0===_||null===(n=_.banner)||void 0===n?void 0:n.text)&&(0,t.jsx)("div",{className:"banner__text",dangerouslySetInnerHTML:{__html:null===_||void 0===_||null===(s=_.banner)||void 0===s?void 0:s.text}})]}),(0,t.jsx)(a.Z,{classStr:"white button-arrow button-svg p24",isLink:!0,link:null===_||void 0===_||null===(l=_.banner)||void 0===l?void 0:l.link,inner:(0,t.jsxs)(t.Fragment,{children:[null===_||void 0===_||null===(m=_.banner)||void 0===m?void 0:m.buttonText,(0,t.jsx)(o.o,{name:"arrow"})]})})]}),(0,t.jsx)("div",{className:"banner__img",children:(0,t.jsx)(d.Z,{src:null===_||void 0===_||null===(v=_.banner)||void 0===v?void 0:v.img})})]})})})}));i.Z=m},785:function(e,i,n){var t=n(5893),s=n(9323),r=n(3400),l=n(4042),c=n(2949),a=(0,s.Pi)((function(){var e,i,n=(0,r.b3)().content;return(0,t.jsxs)("section",{className:"benefits",children:[(0,t.jsx)(c.Z,{children:(0,t.jsx)("h2",{className:"benefits__title",dangerouslySetInnerHTML:{__html:null===n||void 0===n||null===(e=n.benefits)||void 0===e?void 0:e.title}})}),(0,t.jsx)("div",{className:"benefits__list",children:null===n||void 0===n||null===(i=n.benefits)||void 0===i?void 0:i.list.map((function(e,i){return(0,t.jsx)(c.Z,{delay:.3*i,children:(0,t.jsxs)("div",{className:"benefits__item",children:[(0,t.jsx)("div",{className:"benefits__item-img",children:(0,t.jsx)(l.Z,{src:e.src})}),(0,t.jsxs)("div",{className:"benefits__item-col",children:[(0,t.jsx)("div",{className:"benefits__item-title",children:null===e||void 0===e?void 0:e.title}),(0,t.jsx)("div",{className:"benefits__item-text",children:null===e||void 0===e?void 0:e.text})]})]})},i)}))})]})}));i.Z=a},9227:function(e,i,n){var t=n(5893),s=n(9323),r=n(4219),l=n(3400),c=n(8133),a=n(9742),o=n(9286),d=n(2949),u=n(2804),m=n(8510),v=(0,s.Pi)((function(e){var i,n,s,v,x,h,_,j,f=e.isProduct,g=void 0!==f&&f,b=(0,l.b3)().content,p=(0,r.d)(),N=p.width,y=(p.height,1);return g&&(y=N>=1024?3:N>=900?2:1),g||(y=N>=900?2:1),(0,t.jsx)("section",{className:"similiar",children:(0,t.jsxs)("div",{className:"similiar__container",children:[(0,t.jsx)(d.Z,{children:(0,t.jsxs)("div",{className:"similiar__top",children:[(0,t.jsxs)("div",{className:"similiar__top-col",children:[(0,t.jsx)("h2",{className:"similiar__title",dangerouslySetInnerHTML:{__html:null===b||void 0===b||null===(i=b.similiar)||void 0===i?void 0:i.title}}),(0,t.jsx)("div",{className:"similiar__text",dangerouslySetInnerHTML:{__html:null===b||void 0===b||null===(n=b.similiar)||void 0===n?void 0:n.text}})]}),(0,t.jsx)(c.Z,{isLink:!0,link:null===b||void 0===b||null===(s=b.similiar)||void 0===s?void 0:s.buttonLink,inner:(0,t.jsxs)(t.Fragment,{children:[null===b||void 0===b||null===(v=b.similiar)||void 0===v?void 0:v.buttonTitle,(0,t.jsx)(o.o,{name:"arrow"})]}),classStr:"beige button-arrow button-svg p20p28"})]})}),(0,t.jsx)("div",{className:"similiar__list",children:(0,t.jsx)(a.Z,{classSrtr:"story-slider blue-slider",slidesToScroll:y,slidesToShow:y,variableWidth:N<=900,showArrows:!0,infinite:!1,children:null===b||void 0===b||null===(x=b.similiar)||void 0===x||null===(h=x.cards)||void 0===h?void 0:h.map((function(e,i){var n;return(0,t.jsx)(d.Z,{delay:N>480?.3*i:.3,children:g?(0,t.jsx)(u.Z,{item:e,buttonText:null===b||void 0===b||null===(n=b.similiar)||void 0===n?void 0:n.cardButton}):(0,t.jsx)(m.Z,{item:e})},i)}))})}),(0,t.jsx)(d.Z,{children:(0,t.jsx)(c.Z,{isLink:!0,link:null===b||void 0===b||null===(_=b.similiar)||void 0===_?void 0:_.buttonLink,inner:(0,t.jsxs)(t.Fragment,{children:[null===b||void 0===b||null===(j=b.similiar)||void 0===j?void 0:j.buttonTitle,(0,t.jsx)(o.o,{name:"arrow"})]}),classStr:"beige button-arrow button-svg p20p28"})})]})})}));i.Z=v}}]);