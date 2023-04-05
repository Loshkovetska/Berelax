"use strict";
(() => {
var exports = {};
exports.id = 8494;
exports.ids = [8494];
exports.modules = {

/***/ 8540:
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
/* harmony import */ var _hooks_ClickOutSide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2811);
/* harmony import */ var _hooks_getWindowDimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4219);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5975);
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9815);
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4812);
/* harmony import */ var _common_IconComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9286);
/* harmony import */ var _common_InViewComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2949);
/* harmony import */ var _common_RetailerSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5465);
/* harmony import */ var _common_RetailMap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7766);
/* harmony import */ var _common_RetailPop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1925);
/* harmony import */ var _common_Text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2785);
/* harmony import */ var _common_Title__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4353);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_InViewComponent__WEBPACK_IMPORTED_MODULE_10__]);
_common_InViewComponent__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















const RetailerContent = (0,mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(()=>{
    const { content  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_6__/* .useContentState */ .b3)();
    const { 0: results , 1: setResults  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(Array());
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: showAdd , 1: setShowAdd  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: currentLocation , 1: setLocation  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        lat: 40.866667,
        lng: 34.566667
    });
    const { 0: value , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const { width  } = (0,_hooks_getWindowDimensions__WEBPACK_IMPORTED_MODULE_5__/* .useWindowDimensions */ .d)();
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const outSide = (0,_hooks_ClickOutSide__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(ref);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setTimeout(()=>{
            setShow(true);
        }, 300);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (value?.title?.length || value) {
            search(value);
        } else {
            (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_7__/* .retailerLocationsList */ .NG)().then((r)=>{
                setResults(r);
                setShowAdd(false);
            });
        }
    }, [
        value
    ]);
    const search = async (value)=>{
        await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_7__/* .retailerLocationsList */ .NG)().then((r)=>{
            const res = r.filter((c)=>{
                let lc = (c.title + c.text).toLowerCase();
                let searchText = value?.title ? value?.title : value;
                if (lc.includes(searchText?.toLowerCase())) {
                    return c;
                }
            });
            if (res.length) {
                setShowAdd(true);
            }
            setResults(res);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (outSide) {
            _stores_GlobalState__WEBPACK_IMPORTED_MODULE_8__/* ["default"].locoScroll */ .ZP.locoScroll && _stores_GlobalState__WEBPACK_IMPORTED_MODULE_8__/* ["default"].locoScroll.start */ .ZP.locoScroll.start();
        }
    }, [
        outSide
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const cards = document.querySelectorAll(".location-card");
        if (cards) {
            cards.forEach((c, i)=>{
                if (c) {
                    const lat = c.dataset.coordlat, lng = c.dataset.coordlng;
                    if (+lat == +currentLocation.lat && +lng == +currentLocation.lng) {
                        c.classList.add("active");
                        c.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            inline: "nearest"
                        });
                    } else c.classList.remove("active");
                }
            });
        }
    }, [
        currentLocation
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "retailer",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "retailer__container",
                style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Title__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                            classStr: "retailer__title",
                            text: content?.title
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        delay: 0.3,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Text__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            classStr: "retailer__text",
                            text: content?.text
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                delay: 0.5,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "retail-pop__container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "retail-pop__map",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("retail-pop__tooltip", show && "show"),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "retail-pop__tooltip-text",
                                            dangerouslySetInnerHTML: {
                                                __html: content?.tooltip
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_IconComponent__WEBPACK_IMPORTED_MODULE_9__/* .IconComponent */ .o, {
                                            name: "menu/close",
                                            className: "retail-pop__tooltip-close",
                                            onClick: ()=>setShow(false)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_RetailMap__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    results: results,
                                    location: currentLocation,
                                    setPos: (value)=>setLocation(value)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "retail-pop__right",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_RetailerSelect__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    placeholder: content?.placeholder,
                                    getValue: setState
                                }),
                                value?.title?.length && showAdd ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "retail-pop__subtitle",
                                    children: [
                                        results?.length,
                                        " “",
                                        value?.title,
                                        "” locations"
                                    ]
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                                results.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "retail-pop__list",
                                    ref: ref,
                                    onScroll: ()=>width > 1024 && _stores_GlobalState__WEBPACK_IMPORTED_MODULE_8__/* ["default"].locoScroll */ .ZP.locoScroll && _stores_GlobalState__WEBPACK_IMPORTED_MODULE_8__/* ["default"].locoScroll.stop */ .ZP.locoScroll.stop(),
                                    onMouseLeave: ()=>_stores_GlobalState__WEBPACK_IMPORTED_MODULE_8__/* ["default"].locoScroll */ .ZP.locoScroll && _stores_GlobalState__WEBPACK_IMPORTED_MODULE_8__/* ["default"].locoScroll.start */ .ZP.locoScroll.start(),
                                    children: results.map((re, id)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_RetailPop__WEBPACK_IMPORTED_MODULE_13__/* .LocationCard */ .b, {
                                            dt: re,
                                            // setLocation={setLocation}
                                            isActive: currentLocation && currentLocation?.lat == re.coords?.lat && currentLocation?.lng == re.coords?.lng
                                        }, id))
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                            ]
                        })
                    ]
                })
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RetailerContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ getRetailer)
/* harmony export */ });
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9815);

const getRetailer = async ()=>{
    const { header , footer , countrypop  } = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getHeader */ .Pg)(), { content , seo  } = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getRetailerPage */ .mW)();
    return {
        header,
        footer,
        content,
        countrypop,
        seo
    };
};


/***/ }),

/***/ 5007:
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
/* harmony import */ var _components_pages_retailer_RetailerContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8540);
/* harmony import */ var _api_getRetailer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8921);
/* harmony import */ var _components_common_SeoBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_Layout__WEBPACK_IMPORTED_MODULE_4__, _components_pages_retailer_RetailerContent__WEBPACK_IMPORTED_MODULE_5__]);
([_components_common_Layout__WEBPACK_IMPORTED_MODULE_4__, _components_pages_retailer_RetailerContent__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const ProductsRegister = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(({ hydrationData: props  })=>{
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_SeoBlock__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                seo: props.seo
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                delay: 1,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_retailer_RetailerContent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsRegister);
async function getStaticProps() {
    const response = await (0,_api_getRetailer__WEBPACK_IMPORTED_MODULE_6__/* .getRetailer */ .l)();
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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,7378,991,491], () => (__webpack_exec__(5007)));
module.exports = __webpack_exports__;

})();