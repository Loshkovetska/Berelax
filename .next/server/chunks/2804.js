"use strict";
exports.id = 2804;
exports.ids = [2804];
exports.modules = {

/***/ 2804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useScrollPos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7767);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8133);
/* harmony import */ var _IconComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9286);
/* harmony import */ var _ImageComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4042);








const ProductItem = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(({ item , buttonText  })=>{
    const titleRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null), ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null), textRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null), contentRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null), imgRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const changeValues = ()=>{
        let titleHeight = 0, textHeight = 0;
        if (titleRef.current) {
            const countLines = parseInt(getComputedStyle(titleRef.current).webkitLineClamp);
            const lineHeight = parseInt(getComputedStyle(titleRef.current).lineHeight);
            if (lineHeight * countLines >= titleRef.current.scrollHeight) {
                titleRef.current.style.minHeight = `${titleRef.current.scrollHeight}px`;
                titleHeight = titleRef.current.scrollHeight;
            } else {
                titleRef.current.style.minHeight = `${lineHeight * countLines}px`;
                titleHeight = lineHeight * countLines;
            }
            ref.current.style.setProperty("--title-height", titleHeight + "px");
        }
        if (textRef.current) {
            const countLines1 = parseInt(getComputedStyle(textRef.current).webkitLineClamp);
            const lineHeight1 = parseInt(getComputedStyle(textRef.current).lineHeight);
            textRef.current.style.minHeight = `${lineHeight1 * countLines1}px`;
            textHeight = lineHeight1 * countLines1;
            ref.current.style.setProperty("--text-height", textHeight + "px");
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (window.innerWidth > 900) {
            changeValues();
            window.addEventListener("resize", ()=>{
                changeValues();
            });
        }
    }, []);
    const { x , y  } = (0,_hooks_useScrollPos__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const setPos = (x, y)=>{
        sessionStorage.setItem("position", JSON.stringify({
            x,
            y
        }));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: item.link,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: "product-item",
            ref: ref,
            onClick: ()=>setPos(0, y),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "product-item__img",
                    ref: imgRef,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        src: item.img
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "product-item__content",
                    ref: contentRef,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "product-item__title",
                            dangerouslySetInnerHTML: {
                                __html: item.title
                            },
                            ref: titleRef
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "product-item__text",
                            dangerouslySetInnerHTML: {
                                __html: item.text
                            },
                            ref: textRef
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            isLink: true,
                            link: item.link,
                            inner: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    buttonText,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IconComponent__WEBPACK_IMPORTED_MODULE_6__/* .IconComponent */ .o, {
                                        name: "arrow"
                                    })
                                ]
                            }),
                            classStr: "white button-arrow button-svg p16p20"
                        })
                    ]
                })
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductItem);


/***/ })

};
;