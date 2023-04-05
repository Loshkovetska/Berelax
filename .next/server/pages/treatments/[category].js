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
/* harmony import */ var _common_ServiceItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8510);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_InViewComponent__WEBPACK_IMPORTED_MODULE_6__]);
_common_InViewComponent__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const ServicesList = (0,mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(()=>{
    const { content , cards  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_5__/* .useContentState */ .b3)();
    const { width  } = (0,_hooks_getWindowDimensions__WEBPACK_IMPORTED_MODULE_4__/* .useWindowDimensions */ .d)();
    const { 0: filters , 1: setFilters  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        p1: null,
        p2: null,
        p3: null
    });
    const services = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        let res = cards;
        const params = content?.paramsForFilter;
        if (!filters.p1?.length && !filters.p2?.length && !filters.p3?.length) {
            return res;
        }
        if (filters.p1) {
            if (params[0] == "time") {
                filters.p1.forEach((c)=>{
                    const vals = c.replace(/[^0-9]/g, " ").trim().split(" ").filter((ci)=>ci.length);
                    if (c.includes("-")) {
                        const sub = Array.from(res).filter((c)=>{
                            const r = c.time.filter((t)=>t >= vals[0] && t <= vals[1]);
                            // +c.time[0] >= +vals[0] && +c.time[c.time.length - 1] <= +vals[1]
                            if (r.length) {
                                //.length
                                return c;
                            }
                        });
                        res = sub;
                    } else {
                        const sub1 = Array.from(res).filter((c)=>{
                            const r = c.time.filter((t)=>t > vals[0]) //+c.time[c.time.length - 1] > +vals[0]
                            ;
                            if (r.length) {
                                return c;
                            }
                        });
                        res = sub1;
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
                    res = Array.from(res).filter((ci)=>{
                        if (ci.serviceType.includes(c)) {
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "services-list",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                delay: width > 767 ? 0.5 : 0.5,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("services-list__selects", !content?.select3?.length && "two-selects"),
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
                        content?.select3?.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_MainSelect__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
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
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        delay: width > 767 ? delay : 0,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ServiceItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
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
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9815);

const getTreatCat = async (cat)=>{
    const cats = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getServiceCat */ .cP)();
    let dt = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getServices */ .U2)();
    const current = cats.find((c)=>c.slug == cat);
    const { header , footer , countrypop  } = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getHeader */ .Pg)(), { content , seo  } = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getTreatCatPage */ .su)(current.id), cards = dt.filter((d)=>d.category == cat);
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
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useLoco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3355);
/* harmony import */ var _api_getTreatCat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9481);
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9815);
/* harmony import */ var _components_pages_treatcat_Categories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2944);
/* harmony import */ var _components_pages_treatcat_Intro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2073);
/* harmony import */ var _components_pages_treatcat_ServicesList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6222);
/* harmony import */ var _components_pages_location_Banner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2749);
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4367);
/* harmony import */ var _components_common_SeoBlock__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_pages_treatcat_Categories__WEBPACK_IMPORTED_MODULE_6__, _components_pages_treatcat_Intro__WEBPACK_IMPORTED_MODULE_7__, _components_pages_treatcat_ServicesList__WEBPACK_IMPORTED_MODULE_8__, _components_pages_location_Banner__WEBPACK_IMPORTED_MODULE_9__, _components_common_Layout__WEBPACK_IMPORTED_MODULE_10__]);
([_components_pages_treatcat_Categories__WEBPACK_IMPORTED_MODULE_6__, _components_pages_treatcat_Intro__WEBPACK_IMPORTED_MODULE_7__, _components_pages_treatcat_ServicesList__WEBPACK_IMPORTED_MODULE_8__, _components_pages_location_Banner__WEBPACK_IMPORTED_MODULE_9__, _components_common_Layout__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_SeoBlock__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                seo: props.seo
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_common_Layout__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                isTreatCat: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_treatcat_Categories__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_treatcat_Intro__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_treatcat_ServicesList__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_location_Banner__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreatmentsCategoryPage);
async function getStaticPaths() {
    const sv = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_5__/* .getServiceCat */ .cP)();
    const paths = [];
    sv?.map((p)=>{
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
    const response = await (0,_api_getTreatCat__WEBPACK_IMPORTED_MODULE_4__/* .getTreatCat */ .n)(params.category);
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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,7378,991,2749,5619,8510,2073], () => (__webpack_exec__(9490)));
module.exports = __webpack_exports__;

})();