"use strict";
(() => {
var exports = {};
exports.id = 7708;
exports.ids = [7708];
exports.modules = {

/***/ 8262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5975);
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8133);
/* harmony import */ var _common_IconComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9286);
/* harmony import */ var _common_ImageComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9808);






const ProductBanner = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(()=>{
    const { content  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_2__/* .useContentState */ .b3)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "product-banner",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "product-banner__img",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ImageComponent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    src: content?.banner?.img
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "product-banner__content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "product-banner__title",
                        style: {
                            color: content?.banner?.title_color
                        },
                        dangerouslySetInnerHTML: {
                            __html: content?.banner?.title
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "product-banner__text",
                        style: {
                            color: content?.banner?.text_color
                        },
                        dangerouslySetInnerHTML: {
                            __html: content?.banner?.text
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        isLink: true,
                        link: content?.banner?.link,
                        inner: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                content?.banner?.buttonText,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_IconComponent__WEBPACK_IMPORTED_MODULE_4__/* .IconComponent */ .o, {
                                    name: "arrow"
                                })
                            ]
                        }),
                        classStr: "beige button-arrow button-svg p20p32"
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductBanner);


/***/ }),

/***/ 1992:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_getWindowDimensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4219);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5975);
/* harmony import */ var _common_InViewComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2949);
/* harmony import */ var _common_MainSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5619);
/* harmony import */ var _common_ProductItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2804);
/* harmony import */ var _ProductBanner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8262);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_InViewComponent__WEBPACK_IMPORTED_MODULE_6__]);
_common_InViewComponent__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const ProductsList = (0,mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(()=>{
    const { width , height  } = (0,_hooks_getWindowDimensions__WEBPACK_IMPORTED_MODULE_4__/* .useWindowDimensions */ .d)();
    const { content , cards  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_5__/* .useContentState */ .b3)();
    const { 0: filters , 1: setFilters  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        p1: null,
        p2: null,
        p3: null
    });
    const services = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        let res = cards;
        const params = content?.paramsForFilter;
        if (!filters.p1?.length && !filters.p2?.length && !filters.p3?.length) {
            return cards;
        }
        if (filters.p1) {
            filters.p1.forEach((f)=>{
                if (f == "New") {
                    res = res.filter((r)=>r.isNew);
                } else {
                    res = res.filter((r)=>r.isBestSeller);
                }
            });
        }
        if (filters.p2) {
            if (params[1] == "color") {
                filters.p2.forEach((c)=>{
                    let sub = Array.from(res).filter((ci)=>{
                        if (ci.color.includes(c)) {
                            return ci;
                        }
                    });
                    res = sub;
                });
            }
            if (params[1] == "bodyPart") {
                filters.p2.forEach((c)=>{
                    let sub = Array.from(res).filter((ci)=>{
                        if (ci.bodyPart.includes(c)) {
                            return ci;
                        }
                    });
                    res = sub;
                });
            }
            if (params[1] == "concern") {
                filters.p2.forEach((c)=>{
                    let sub = Array.from(res).filter((ci)=>{
                        if (ci.concern.includes(c)) {
                            return ci;
                        }
                    });
                    res = sub;
                });
            }
        }
        if (filters.p3) {
            if (params[2] == "type") {
                filters.p3?.forEach((p)=>{
                    res = Array.from(res).filter((ci)=>{
                        if (ci.type.includes(p)) {
                            return ci;
                        }
                    });
                });
            }
        }
        return res;
    }, [
        filters,
        cards,
        content?.paramsForFilter
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "products-list",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "products-list__container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    delay: 0.5,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("products-list__selects", !content?.select3?.length && "two-selects"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_MainSelect__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                placeholder: content?.select1Title,
                                dt: JSON.parse(JSON.stringify(content?.select1)).sort((a, b)=>a.localeCompare(b)),
                                multiple: true,
                                getValue: (value)=>{
                                    setFilters({
                                        ...filters,
                                        p1: value
                                    });
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_MainSelect__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                multiple: true,
                                placeholder: content?.select2Title,
                                dt: JSON.parse(JSON.stringify(content?.select2)).sort((a, b)=>a.localeCompare(b)),
                                getValue: (value)=>{
                                    setFilters({
                                        ...filters,
                                        p2: value
                                    });
                                }
                            }),
                            content.select3?.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_MainSelect__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                multiple: true,
                                //={content?.paramsForFilter[2] == 'type' ? false : true}
                                placeholder: content?.select3Title,
                                dt: JSON.parse(JSON.stringify(content?.select3)).sort((a, b)=>a.localeCompare(b)),
                                getValue: (value)=>{
                                    setFilters({
                                        ...filters,
                                        p3: value
                                    });
                                }
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "products-list__list",
                    children: services?.slice(0, width > 900 ? 3 : 4).map((si, i)=>{
                        let delay = 0;
                        delay = i == 1 ? 0.6 + 0.1 : 0;
                        if (!i) {
                            delay = 0.6;
                        }
                        if (i == 2) {
                            delay = 0.7;
                        }
                        if (i > 2) {
                            delay = !((i + 1) % 2) ? 0.1 : 0;
                        }
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            delay: width > 576 ? delay : 0,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ProductItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                item: si,
                                buttonText: content?.buttonText
                            })
                        }, i);
                    })
                }),
                services && services?.length > 3 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "products-list__banner",
                        children: [
                            width > 900 && services?.slice(3, 4).map((si, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ProductItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    item: si,
                                    buttonText: content?.buttonText
                                }, i)),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductBanner__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                        ]
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                services && services?.length > 4 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "products-list__list",
                    children: services?.slice(4).map((si, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            delay: width > 576 ? i * 0.1 : 0,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ProductItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                item: si,
                                buttonText: content?.buttonText
                            })
                        }, i))
                })
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ getProductCat)
/* harmony export */ });
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9815);

const getProductCat = async (cat)=>{
    const pg = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getProductsCat */ .iB)();
    const page = pg.find((p)=>p.slug == cat);
    const products = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getProducts */ .Xp)();
    const { header , footer , countrypop  } = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getHeader */ .Pg)(), { content , seo  } = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getProductCatPage */ .fm)(page.id), cards = products.filter((c)=>c.category == cat);
    return {
        header,
        footer,
        content,
        countrypop,
        cards,
        seo
    };
};


/***/ }),

/***/ 5829:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useLoco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3355);
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9815);
/* harmony import */ var _components_pages_treatcat_Categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2944);
/* harmony import */ var _components_pages_treatcat_Intro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2073);
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4367);
/* harmony import */ var _api_getProductCat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5276);
/* harmony import */ var _components_pages_prodcat_ProductsList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1992);
/* harmony import */ var _components_common_SeoBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_pages_treatcat_Categories__WEBPACK_IMPORTED_MODULE_5__, _components_pages_treatcat_Intro__WEBPACK_IMPORTED_MODULE_6__, _components_common_Layout__WEBPACK_IMPORTED_MODULE_7__, _components_pages_prodcat_ProductsList__WEBPACK_IMPORTED_MODULE_9__]);
([_components_pages_treatcat_Categories__WEBPACK_IMPORTED_MODULE_5__, _components_pages_treatcat_Intro__WEBPACK_IMPORTED_MODULE_6__, _components_common_Layout__WEBPACK_IMPORTED_MODULE_7__, _components_pages_prodcat_ProductsList__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_SeoBlock__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                seo: props.seo
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_common_Layout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                isTreatCat: true,
                isTreats: false,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_treatcat_Categories__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        isTreats: false
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_treatcat_Intro__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_prodcat_ProductsList__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreatmentsCategoryPage);
async function getStaticPaths() {
    const paths = [];
    const productCats = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_4__/* .getProductsCat */ .iB)();
    productCats?.map((p)=>{
        paths.push({
            params: {
                category: p.slug,
                path: p.link
            }
        });
    });
    return {
        paths: paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const response = await (0,_api_getProductCat__WEBPACK_IMPORTED_MODULE_8__/* .getProductCat */ .l)(params.category);
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,7378,991,5619,2804,2073], () => (__webpack_exec__(5829)));
module.exports = __webpack_exports__;

})();