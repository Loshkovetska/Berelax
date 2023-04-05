"use strict";
(() => {
var exports = {};
exports.id = 9603;
exports.ids = [9603];
exports.modules = {

/***/ 9907:
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
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5975);
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8133);
/* harmony import */ var _common_IconComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9286);
/* harmony import */ var _common_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4423);
/* harmony import */ var _common_MainSelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5619);
/* harmony import */ var _common_NewsPost__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3438);
/* harmony import */ var _common_ProductItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2804);
/* harmony import */ var _common_ServiceItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8510);
/* harmony import */ var _common_InViewComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2949);
/* harmony import */ var _common_Title__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4353);
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9815);
/* harmony import */ var _pages_search__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2564);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_NewsPost__WEBPACK_IMPORTED_MODULE_9__, _common_InViewComponent__WEBPACK_IMPORTED_MODULE_12__, _pages_search__WEBPACK_IMPORTED_MODULE_15__]);
([_common_NewsPost__WEBPACK_IMPORTED_MODULE_9__, _common_InViewComponent__WEBPACK_IMPORTED_MODULE_12__, _pages_search__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const SearchContent = (0,mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(()=>{
    const { 0: searchTitle , 1: setSearchTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);
    const { content  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_4__/* .useContentState */ .b3)();
    const { 0: value , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: section , 1: setSection  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: all , 1: setAll  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (sessionStorage.getItem("search-value")) {
            setTitle(sessionStorage.getItem("search-value") || "");
            search(sessionStorage.getItem("search-value") || "");
        }
        if (content?.sections) {
            setSection(content?.sections[0]);
        }
    }, [
        content?.sections
    ]);
    const search = async (value)=>{
        (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_14__/* .searchByParams */ .P4)(value).then((res)=>{
            const result = [];
            const resultProducts = Array();
            const resultServices = Array();
            const resultNews = Array();
            res.forEach((r)=>{
                if (r.post_type == "products") {
                    const product = _pages_search__WEBPACK_IMPORTED_MODULE_15__.StateArrays.products?.find((p)=>p.id == r.ID);
                    if (product) {
                        resultProducts.push(product);
                    }
                }
                if (r.post_type == "treatments") {
                    const product1 = _pages_search__WEBPACK_IMPORTED_MODULE_15__.StateArrays.services?.find((p)=>p.id == r.ID);
                    if (product1) {
                        resultServices.push(product1);
                    }
                }
                if (r.post_type == "post") {
                    const product2 = _pages_search__WEBPACK_IMPORTED_MODULE_15__.StateArrays.news?.find((p)=>p.id == r.ID);
                    if (product2) {
                        resultNews.push(product2);
                    }
                }
            });
            result.push({
                section: "products",
                list: resultProducts
            });
            result.push({
                section: "treatments",
                list: resultServices
            });
            result.push({
                section: "news",
                list: resultNews
            });
            setAll(result);
            setSearchTitle(value);
        });
    };
    const results = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        if (!all.length) {
            return null;
        }
        const res = all?.find((a)=>a.section == section)?.list;
        return {
            section: section,
            list: res || []
        };
    }, [
        all,
        section
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "search-content",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "search-content__container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Title__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            classStr: "search-content__title",
                            text: searchTitle
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "search-content__count",
                            children: [
                                results?.list?.length ? results?.list?.length : 0,
                                " ",
                                !results?.list?.length || results?.list?.length > 1 ? "results" : "result"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    delay: 0.1,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "search-content__search",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                className: "loc-select",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "loc-select__top",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            classStr: "",
                                            value: value,
                                            setValue: setTitle,
                                            placeHolder: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            inner: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_IconComponent__WEBPACK_IMPORTED_MODULE_6__/* .IconComponent */ .o, {
                                                    name: "Search"
                                                })
                                            }),
                                            classStr: "beige button-search",
                                            isLink: false,
                                            action: ()=>search(value)
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_MainSelect__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                defaultValue: section,
                                placeholder: section,
                                getValue: (value)=>{
                                    if (!value.length) return;
                                    setSection(value);
                                },
                                multiple: false,
                                dt: JSON.parse(JSON.stringify(content?.sections)).sort((a, b)=>a.localeCompare(b))
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "search-content__result",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            delay: 0.2,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: "search-content__result-title",
                                children: [
                                    results?.list?.length || 0,
                                    " “",
                                    searchTitle,
                                    "” ",
                                    results?.section
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("search-content__result-list", results?.section == "news" && "single", results?.section == "products" && "three", results?.section == "treatments" && "two"),
                            children: results?.list?.map((re, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                                    children: [
                                        results?.section == "news" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            delay: i * 0.1 + 0.2,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_NewsPost__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                post: re
                                            })
                                        }),
                                        results?.section == "products" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            delay: i * 0.1 + 0.2,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ProductItem__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                item: re,
                                                buttonText: content?.productButton
                                            })
                                        }),
                                        results?.section == "treatments" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            delay: i * 0.1 + 0.2,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ServiceItem__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                item: re
                                            })
                                        })
                                    ]
                                }, i))
                        })
                    ]
                })
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ getSearch)
/* harmony export */ });
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9815);

const getSearch = async ()=>{
    const { header , footer , countrypop  } = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getHeader */ .Pg)(), { content , seo  } = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getSearchContent */ .no)();
    return {
        header,
        footer,
        content,
        countrypop,
        seo
    };
};


/***/ }),

/***/ 2564:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateArrays": () => (/* binding */ StateArrays),
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
/* harmony import */ var _api_getSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(602);
/* harmony import */ var _components_pages_search_SearchContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9907);
/* harmony import */ var _components_common_SeoBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3534);
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9815);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_Layout__WEBPACK_IMPORTED_MODULE_4__, _components_pages_search_SearchContent__WEBPACK_IMPORTED_MODULE_6__]);
([_components_common_Layout__WEBPACK_IMPORTED_MODULE_4__, _components_pages_search_SearchContent__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const StateArrays = (0,mobx__WEBPACK_IMPORTED_MODULE_9__.observable)({
    products: null,
    services: null,
    news: null
});
const Search = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(({ hydrationData: props  })=>{
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
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
        if (ref.current) return;
        (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_8__/* .getProducts */ .Xp)().then((res)=>{
            (0,mobx__WEBPACK_IMPORTED_MODULE_9__.runInAction)(()=>{
                StateArrays.products = res;
            });
        });
        (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_8__/* .getNews */ .dD)().then((res)=>{
            (0,mobx__WEBPACK_IMPORTED_MODULE_9__.runInAction)(()=>{
                StateArrays.news = res;
            });
        });
        (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_8__/* .getServices */ .U2)().then((res)=>{
            (0,mobx__WEBPACK_IMPORTED_MODULE_9__.runInAction)(()=>{
                StateArrays.services = res;
            });
        });
        ref.current = true;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (StateArrays.news && StateArrays.products && StateArrays.services) {
            setTimeout(()=>{
                setLoading(false);
            }, 200);
        }
    }, [
        StateArrays.news,
        StateArrays.products,
        StateArrays.services
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_SeoBlock__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                seo: props.seo
            }),
            !loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_search_SearchContent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    width: "100%",
                    height: 500
                }
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);
async function getStaticProps() {
    const response = await (0,_api_getSearch__WEBPACK_IMPORTED_MODULE_5__/* .getSearch */ .o)();
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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,7378,991,5619,2804,8510,3438], () => (__webpack_exec__(2564)));
module.exports = __webpack_exports__;

})();