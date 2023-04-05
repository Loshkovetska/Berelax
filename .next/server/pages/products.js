"use strict";
(() => {
var exports = {};
exports.id = 7345;
exports.ids = [7345];
exports.modules = {

/***/ 9688:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5975);
/* harmony import */ var _common_CustomSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9742);
/* harmony import */ var _common_InViewComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2949);
/* harmony import */ var _common_ProductItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2804);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_CustomSlider__WEBPACK_IMPORTED_MODULE_3__, _common_InViewComponent__WEBPACK_IMPORTED_MODULE_4__]);
([_common_CustomSlider__WEBPACK_IMPORTED_MODULE_3__, _common_InViewComponent__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Explore = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(()=>{
    const { content  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_2__/* .useContentState */ .b3)();
    if (!content?.explore?.list.length) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "explore-block",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "explore-block__container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "explore-block__title",
                        dangerouslySetInnerHTML: {
                            __html: content?.explore?.title
                        }
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "explore-block__list",
                    children: content?.explore?.list?.map((li, id)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            delay: id * 0.2,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ProductItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                item: li,
                                buttonText: content?.explore?.buttonText
                            })
                        }, id))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "explore-block__slider",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_CustomSlider__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        slidesToScroll: 1,
                        slidesToShow: 1,
                        infinite: false,
                        variableWidth: true,
                        children: content?.explore?.list?.map((li, id)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                delay: id * 0.2,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ProductItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    item: li,
                                    buttonText: content?.explore?.buttonText
                                })
                            }, id))
                    })
                })
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Explore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5664:
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
/* harmony import */ var _common_CustomSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9742);
/* harmony import */ var _common_InViewComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2949);
/* harmony import */ var _common_ProductCat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3680);
/* harmony import */ var _common_Title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4353);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_CustomSlider__WEBPACK_IMPORTED_MODULE_4__, _common_InViewComponent__WEBPACK_IMPORTED_MODULE_5__, _common_ProductCat__WEBPACK_IMPORTED_MODULE_6__]);
([_common_CustomSlider__WEBPACK_IMPORTED_MODULE_4__, _common_InViewComponent__WEBPACK_IMPORTED_MODULE_5__, _common_ProductCat__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const ProductsIntro = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(()=>{
    const { content  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__/* .useContentState */ .b3)();
    const { width  } = (0,_hooks_getWindowDimensions__WEBPACK_IMPORTED_MODULE_2__/* .useWindowDimensions */ .d)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "products-intro",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "products-intro__container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "products-intro__top",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Title__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                classStr: "products-intro__title",
                                text: content?.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "products-intro__text",
                                dangerouslySetInnerHTML: {
                                    __html: content?.text
                                }
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "products-intro__list",
                    children: content?.list?.map((li, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            delay: i * 0.1,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ProductCat__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                pr: li,
                                buttonTitle: content?.buttonTitle,
                                isDark: (i + 1) % 2 == 0
                            })
                        }, i))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "products-intro__slider",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_CustomSlider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        slidesToShow: width > 576 ? 2 : 1,
                        slidesToScroll: width > 576 ? 2 : 1,
                        showArrows: false,
                        variableWidth: true,
                        infinite: false,
                        children: content?.list?.map((li, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                delay: i * 0.1,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ProductCat__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    pr: li,
                                    buttonTitle: content?.buttonTitle,
                                    isDark: (i + 1) % 2 == 0
                                })
                            }, i))
                    })
                })
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsIntro);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ getProductsC)
/* harmony export */ });
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9815);

const getProductsC = async ()=>{
    const { header , footer , countrypop  } = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getHeader */ .Pg)(), { content , seo  } = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getProductsContent */ .t_)(190);
    return {
        header,
        footer,
        content,
        countrypop,
        seo
    };
};


/***/ }),

/***/ 810:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useLoco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3355);
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4367);
/* harmony import */ var _api_getProductsC__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6840);
/* harmony import */ var _components_pages_products_ProductsIntro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5664);
/* harmony import */ var _components_pages_location_Banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2749);
/* harmony import */ var _components_pages_products_Explore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9688);
/* harmony import */ var _components_common_SeoBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_Layout__WEBPACK_IMPORTED_MODULE_4__, _components_pages_products_ProductsIntro__WEBPACK_IMPORTED_MODULE_6__, _components_pages_location_Banner__WEBPACK_IMPORTED_MODULE_7__, _components_pages_products_Explore__WEBPACK_IMPORTED_MODULE_8__]);
([_components_common_Layout__WEBPACK_IMPORTED_MODULE_4__, _components_pages_products_ProductsIntro__WEBPACK_IMPORTED_MODULE_6__, _components_pages_location_Banner__WEBPACK_IMPORTED_MODULE_7__, _components_pages_products_Explore__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const TreatmentsCategoryPage = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(({ hydrationData: props  })=>{
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    (0,_hooks_useLoco__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(!loading);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!loading) {
            if (true) {
                return;
            }
        }
    }, [
        loading
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (props.content) {
            setLoading(false);
        }
    }, [
        props
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_SeoBlock__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                seo: props.seo
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_common_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                delay: 1,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_products_ProductsIntro__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_location_Banner__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        theme: "blue"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_products_Explore__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreatmentsCategoryPage);
async function getStaticProps() {
    const response = await (0,_api_getProductsC__WEBPACK_IMPORTED_MODULE_5__/* .getProductsC */ .R)();
    return {
        props: {
            hydrationData: {
                ...response
            }
        },
        revalidate: 10
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2433:
/***/ ((module) => {

module.exports = require("@react-google-maps/api");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 1834:
/***/ ((module) => {

module.exports = require("locomotive-scroll");

/***/ }),

/***/ 6211:
/***/ ((module) => {

module.exports = require("mobx");

/***/ }),

/***/ 2062:
/***/ ((module) => {

module.exports = require("mobx-react");

/***/ }),

/***/ 5944:
/***/ ((module) => {

module.exports = require("mobx-react-lite");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3599:
/***/ ((module) => {

module.exports = require("react-device-detect");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4956:
/***/ ((module) => {

module.exports = require("reading-time");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 4009:
/***/ ((module) => {

module.exports = import("react-intersection-observer");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,7378,991,2749,2804,3680], () => (__webpack_exec__(810)));
module.exports = __webpack_exports__;

})();