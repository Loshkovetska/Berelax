"use strict";
exports.id = 5789;
exports.ids = [5789];
exports.modules = {

/***/ 785:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5975);
/* harmony import */ var _common_ImageComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9808);
/* harmony import */ var _common_InViewComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2949);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_InViewComponent__WEBPACK_IMPORTED_MODULE_4__]);
_common_InViewComponent__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Benefits = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(()=>{
    const { content  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_2__/* .useContentState */ .b3)();
    if (!content?.benefits?.list?.length) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "benefits",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "benefits__title",
                    dangerouslySetInnerHTML: {
                        __html: content?.benefits?.title
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "benefits__list",
                children: content?.benefits?.list?.map((b, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        delay: i * 0.3,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "benefits__item",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "benefits__item-img",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ImageComponent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        src: b.src,
                                        alt: b.alt
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "benefits__item-col",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "benefits__item-title",
                                            children: b?.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "benefits__item-text",
                                            children: b?.text
                                        })
                                    ]
                                })
                            ]
                        })
                    }, i))
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Benefits);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9227:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_getWindowDimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4219);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5975);
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8133);
/* harmony import */ var _common_CustomSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9742);
/* harmony import */ var _common_IconComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9286);
/* harmony import */ var _common_InViewComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2949);
/* harmony import */ var _common_ProductItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2804);
/* harmony import */ var _common_ServiceItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8510);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_CustomSlider__WEBPACK_IMPORTED_MODULE_5__, _common_InViewComponent__WEBPACK_IMPORTED_MODULE_7__]);
([_common_CustomSlider__WEBPACK_IMPORTED_MODULE_5__, _common_InViewComponent__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Similiar = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(({ isProduct =false  })=>{
    const { content  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__/* .useContentState */ .b3)();
    const { width , height  } = (0,_hooks_getWindowDimensions__WEBPACK_IMPORTED_MODULE_2__/* .useWindowDimensions */ .d)();
    let slideToShow = 1;
    if (isProduct) {
        slideToShow = width >= 1024 ? 3 : width >= 900 ? 2 : 1;
    }
    if (!isProduct) {
        slideToShow = width >= 900 ? 2 : 1;
    }
    if (!content?.similiar?.cards.length) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "similiar",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "similiar__container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "similiar__top",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "similiar__top-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "similiar__title",
                                        dangerouslySetInnerHTML: {
                                            __html: content?.similiar?.title
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "similiar__text",
                                        dangerouslySetInnerHTML: {
                                            __html: content?.similiar?.text
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                isLink: true,
                                link: content?.similiar?.buttonLink,
                                inner: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        content?.similiar?.buttonTitle,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_IconComponent__WEBPACK_IMPORTED_MODULE_6__/* .IconComponent */ .o, {
                                            name: "arrow"
                                        })
                                    ]
                                }),
                                classStr: "beige button-arrow button-svg p20p28"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "similiar__list",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_CustomSlider__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        classSrtr: "story-slider blue-slider",
                        slidesToScroll: slideToShow,
                        slidesToShow: slideToShow,
                        variableWidth: width <= 900,
                        showArrows: true,
                        infinite: false,
                        children: content?.similiar?.cards?.map((ca, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                delay: width > 480 ? i * 0.3 : 0.3,
                                children: !isProduct ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ServiceItem__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    item: ca
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ProductItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    item: ca,
                                    buttonText: content?.similiar?.cardButton
                                })
                            }, i))
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        isLink: true,
                        link: content?.similiar?.buttonLink,
                        inner: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                content?.similiar?.buttonTitle,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_IconComponent__WEBPACK_IMPORTED_MODULE_6__/* .IconComponent */ .o, {
                                    name: "arrow"
                                })
                            ]
                        }),
                        classStr: "beige button-arrow button-svg p20p28"
                    })
                })
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Similiar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;