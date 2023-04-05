"use strict";
exports.id = 8510;
exports.ids = [8510];
exports.modules = {

/***/ 8510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_getWindowDimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4219);
/* harmony import */ var _hooks_useScrollPos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7767);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8133);
/* harmony import */ var _IconComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9286);
/* harmony import */ var _ImageComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9808);








const ServiceItem = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(({ item  })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { width  } = (0,_hooks_getWindowDimensions__WEBPACK_IMPORTED_MODULE_3__/* .useWindowDimensions */ .d)();
    const getTime = (time)=>{
        if (time.length == 1) {
            return `${time[0]} minutes`;
        }
        const first = time[0], last = time[time.length - 1];
        return `${first}-${last} minutes`;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (width < 1024) return;
        if (!ref.current) return;
        const countLines = parseInt(getComputedStyle(ref.current).webkitLineClamp);
        const lineHeight = parseInt(getComputedStyle(ref.current).lineHeight);
        ref.current.style.height = `${lineHeight * countLines}px`;
    }, [
        width
    ]);
    const { x , y  } = (0,_hooks_useScrollPos__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const setPos = (x, y)=>{
        sessionStorage.setItem("position", JSON.stringify({
            x,
            y
        }));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: width > 480 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: "service-item",
            href: `${item.link}`,
            onMouseEnter: ()=>{
                if (width < 1024) return;
                if (!ref.current) return;
                const height = ref.current.scrollHeight;
                requestAnimationFrame(()=>{
                    ref.current.style.height = `${height}px`;
                });
            },
            onClick: ()=>setPos(0, y),
            onMouseLeave: ()=>{
                if (width < 1024) return;
                if (!ref.current) return;
                const countLines = parseInt(getComputedStyle(ref.current).webkitLineClamp);
                const lineHeight = parseInt(getComputedStyle(ref.current).lineHeight);
                requestAnimationFrame(()=>{
                    ref.current.style.height = `${lineHeight * countLines}px`;
                });
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "service-item__img",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        src: item.img,
                        alt: item.alt
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "service-item__content",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "service-item__content-top",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "service-item__content-time",
                                    children: getTime(item.time)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "service-item__content-title",
                                    children: item.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "service-item__content-text",
                                    ref: ref,
                                    dangerouslySetInnerHTML: {
                                        __html: item.text
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            classStr: "beige button-search",
                            isLink: true,
                            link: item.link,
                            inner: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IconComponent__WEBPACK_IMPORTED_MODULE_6__/* .IconComponent */ .o, {
                                    name: "arrow"
                                })
                            })
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: "service-item2",
            href: `${item.link}`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "service-item2__img",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            src: item.img,
                            alt: item.alt
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "service-item2__time",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IconComponent__WEBPACK_IMPORTED_MODULE_6__/* .IconComponent */ .o, {
                                    name: "news/duration"
                                }),
                                getTime(item.time).replaceAll("minutes", "min")
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "service-item2__content",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "service-item2__title",
                            children: item.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            classStr: "white button-arrow button-svg",
                            isLink: true,
                            link: item.link,
                            inner: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    "See Details",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IconComponent__WEBPACK_IMPORTED_MODULE_6__/* .IconComponent */ .o, {
                                        name: "arrow"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceItem);


/***/ })

};
;