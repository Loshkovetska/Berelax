"use strict";
(() => {
var exports = {};
exports.id = 5202;
exports.ids = [5202];
exports.modules = {

/***/ 6222:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
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
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5975);
/* harmony import */ var _common_InViewComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2949);
/* harmony import */ var _common_MainSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5619);
/* harmony import */ var _common_ServiceItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8510);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_InViewComponent__WEBPACK_IMPORTED_MODULE_5__]);
_common_InViewComponent__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const ServicesList = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(()=>{
    const { 0: services , 1: setServices  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { content , cards  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_4__/* .useContentState */ .b3)();
    const { width  } = (0,_hooks_getWindowDimensions__WEBPACK_IMPORTED_MODULE_3__/* .useWindowDimensions */ .d)();
    const { 0: filters , 1: setFilters  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        p1: null,
        p2: null,
        p3: null
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!services) {
            setServices(cards);
        }
    }, [
        cards
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        let res = cards;
        const params = content?.paramsForFilter;
        if (!filters.p1 && !filters.p2 && !filters.p3) {
            setServices(cards);
            return;
        }
        if (filters.p1) {
            if (params[0] == "time") {
                filters.p1.forEach((c)=>{
                    const vals = c.replaceAll("from", "").replaceAll("to", "").trim();
                    const ars = vals.split(" ").filter((c)=>c != "");
                    if (c.includes("to") && c.includes("from")) {
                        const sub = Array.from(res).filter((c)=>{
                            const r = c.time.filter((t)=>t >= ars[0] && t <= ars[1]);
                            if (r.length) {
                                return c;
                            }
                        });
                        res = sub;
                    }
                    if (c.includes("to") && !c.includes("from")) {
                        const sub1 = Array.from(res).filter((c)=>{
                            const r = c.time.filter((t)=>t <= ars[0]);
                            if (r.length) {
                                return c;
                            }
                        });
                        res = sub1;
                    }
                    if (!c.includes("to") && c.includes("from")) {
                        const sub2 = Array.from(res).filter((c)=>{
                            const r = c.time.filter((t)=>t >= ars[0]);
                            if (r.length) {
                                return c;
                            }
                        });
                        res = sub2;
                    }
                });
            }
        }
        if (filters.p2) {
            if (params[1] == "locations") {
                filters.p2.forEach((c)=>{
                    let sub = Array.from(res).filter((ci)=>{
                        if (ci.locations.includes(c)) {
                            return ci;
                        }
                    });
                    res = sub;
                });
            }
        }
        if (filters.p3) {
            res = Array.from(res);
            if (params[2] == "bodyPart") {
                filters.p3.forEach((c)=>{
                    let sub = Array.from(res).filter((ci)=>{
                        if (ci.bodyPart.includes(c)) {
                            return ci;
                        }
                    });
                    res = sub;
                });
            }
            if (params[2] == "serviceType") {
                filters.p3.forEach((c)=>{
                    let sub = Array.from(res).filter((ci)=>{
                        if (ci.serviceType.includes(c)) {
                            return ci;
                        }
                    });
                    res = sub;
                });
            }
        }
        setServices(res);
    }, [
        filters
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "services-list",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                delay: width > 767 ? 0.5 : 0.5,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "services-list__selects",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_MainSelect__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
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
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_MainSelect__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
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
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_MainSelect__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            multiple: true,
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
                className: "services-list__list",
                children: services?.map((ca, i)=>{
                    let delay = 0;
                    delay = i == 1 ? 0.6 + 0.1 : 0;
                    if (!i) {
                        delay = 0.6;
                    }
                    if (i > 1) {
                        delay = !((i + 1) % 2) ? 0.1 : 0;
                    }
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        delay: width > 767 ? delay : 0,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ServiceItem__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            item: ca
                        })
                    }, i);
                })
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServicesList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ getTreatCat)
/* harmony export */ });
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9787);

const getTreatCat = async (cat)=>{
    const header = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getHeader */ .Pg)(), footer = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getFooter */ .PX)(), content = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getTreatCatPage */ .su)(cat), countrypop = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getCountryPop */ .Pc)(), cards = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getServices */ .U2)();
    return {
        header,
        footer,
        content,
        countrypop,
        cards
    };
};


/***/ }),

/***/ 9490:
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useLoco__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3355);
/* harmony import */ var _api_getTreatCat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9481);
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9787);
/* harmony import */ var _components_pages_treatcat_Categories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2944);
/* harmony import */ var _components_pages_treatcat_Intro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2073);
/* harmony import */ var _components_pages_treatcat_ServicesList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6222);
/* harmony import */ var _components_pages_location_Banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2749);
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4367);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_pages_treatcat_Categories__WEBPACK_IMPORTED_MODULE_7__, _components_pages_treatcat_Intro__WEBPACK_IMPORTED_MODULE_8__, _components_pages_treatcat_ServicesList__WEBPACK_IMPORTED_MODULE_9__, _components_pages_location_Banner__WEBPACK_IMPORTED_MODULE_10__, _components_common_Layout__WEBPACK_IMPORTED_MODULE_11__]);
([_components_pages_treatcat_Categories__WEBPACK_IMPORTED_MODULE_7__, _components_pages_treatcat_Intro__WEBPACK_IMPORTED_MODULE_8__, _components_pages_treatcat_ServicesList__WEBPACK_IMPORTED_MODULE_9__, _components_pages_location_Banner__WEBPACK_IMPORTED_MODULE_10__, _components_common_Layout__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const TreatmentsCategoryPage = (0,mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(({ hydrationData: props  })=>{
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    (0,_hooks_useLoco__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(!loading);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!loading) {
            if (true) {
                return;
            }
        }
    }, [
        loading
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Be relax"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_common_Layout__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                isTreatCat: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_treatcat_Categories__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_treatcat_Intro__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_treatcat_ServicesList__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_location_Banner__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreatmentsCategoryPage);
async function getStaticPaths() {
    const footer = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_6__/* .getFooter */ .PX)();
    const paths = [];
    const treats = footer?.cols[1]?.list;
    treats?.map((p)=>{
        paths.push({
            params: {
                category: p.link.replaceAll("/", "").replaceAll("treatments", ""),
                path: p.link
            }
        });
    });
    return {
        paths: paths,
        fallback: "blocking"
    };
}
async function getStaticProps({ params  }) {
    const response = await (0,_api_getTreatCat__WEBPACK_IMPORTED_MODULE_5__/* .getTreatCat */ .n)(params.category);
    return {
        props: {
            hydrationData: {
                ...response
            }
        }
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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5975,7077,2749,5619,8510,2073], () => (__webpack_exec__(9490)));
module.exports = __webpack_exports__;

})();