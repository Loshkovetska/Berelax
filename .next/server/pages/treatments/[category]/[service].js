"use strict";
(() => {
var exports = {};
exports.id = 3938;
exports.ids = [3938];
exports.modules = {

/***/ 3484:
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
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8133);
/* harmony import */ var _common_IconComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9286);
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4812);
/* harmony import */ var _common_InViewComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2949);
/* harmony import */ var _common_ImageComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9808);
/* harmony import */ var _common_Title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4353);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_InViewComponent__WEBPACK_IMPORTED_MODULE_6__]);
_common_InViewComponent__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const Intro = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(()=>{
    const { content  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_2__/* .useContentState */ .b3)();
    const book = ()=>{
        let amount = content?.price[0].amount.find((a)=>a.country.includes(_stores_GlobalState__WEBPACK_IMPORTED_MODULE_5__/* ["default"].currentLocale.country */ .ZP.currentLocale.country));
        if (!amount) {
            amount = content?.price[0].amount.find((a)=>a.country.includes("United States of America"));
        }
        localStorage.setItem("treatment", JSON.stringify({
            id: content?.id,
            time: content?.price[0].time,
            category: content?.section,
            img: content?.img,
            name: content?.title,
            price: amount.value
        }));
        window.location.href = "/booking";
    };
    let pricelist = [];
    pricelist = content?.price?.map((p)=>{
        if (p.amount) {
            let currency = "USD", country = "";
            let amount = p.amount.find((a)=>_stores_GlobalState__WEBPACK_IMPORTED_MODULE_5__/* ["default"].currentLocale.country.includes */ .ZP.currentLocale.country.includes(a.country));
            if (amount) {
                currency = amount.currency;
                country = amount.country;
                amount = amount.value;
            } else {
                // amount = p.amount.find((a: any) =>
                //   a.country.includes('United State of America'),
                // )
                // currency = amount?.currency || ''
                // if (amount) {
                //   country = amount?.country || ''
                //   amount = amount.value || 0
                // }
                return null;
            }
            return {
                value: amount,
                currency,
                time: p.time,
                country
            };
        }
    }).filter((c)=>c);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "service-intro",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "service-intro__container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    animationClass: "fadein service-intro__img-cont",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "service-intro__img",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ImageComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            src: content?.img,
                            alt: content?.alt
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "service-intro__col",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Title__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                classStr: "service-intro__title",
                                text: content?.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "service-intro__text",
                                dangerouslySetInnerHTML: {
                                    __html: content?.text
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                classStr: `beige button-svg button-arrow p20p40 ${!pricelist?.length ? "disabled" : ""}`,
                                action: book,
                                isLink: false,
                                inner: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        content?.bookText,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_IconComponent__WEBPACK_IMPORTED_MODULE_4__/* .IconComponent */ .o, {
                                            name: "arrow"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "service-intro__responsive desk",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "service-intro__table",
                                        children: pricelist.map((p, i)=>{
                                            if (!p.currency?.length || !p.value?.length) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_9__.Fragment, {}, i);
                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "service-intro__table-row",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "service-intro__table-time",
                                                        children: [
                                                            p.time,
                                                            " ",
                                                            content.section != "nail-care" && content.section != "beauty" && "mins"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "service-intro__table-price",
                                                        children: [
                                                            p.currency,
                                                            " ",
                                                            p.value
                                                        ]
                                                    })
                                                ]
                                            }, i);
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "service-intro__bottom",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "service-intro__subtext",
                                                children: pricelist?.length ? `*Prices are for ${pricelist[0].country} locations only   ` : `This service is unavailable in your location.  `
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "service-intro__link",
                                                onClick: _stores_GlobalState__WEBPACK_IMPORTED_MODULE_5__/* .changeCountryState */ .wg,
                                                children: content?.changeLocationText
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "service-intro__responsive mob",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "service-intro__table",
                                children: pricelist.map((p, i)=>{
                                    if (!p.currency?.length || !p.value?.length) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_9__.Fragment, {}, i);
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "service-intro__table-row",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "service-intro__table-time",
                                                children: [
                                                    p.time,
                                                    " ",
                                                    content.section != "nail-care" && content.section != "beauty" && "mins"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "service-intro__table-price",
                                                children: [
                                                    p.currency,
                                                    " ",
                                                    p.value
                                                ]
                                            })
                                        ]
                                    }, i);
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "service-intro__bottom",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "service-intro__subtext",
                                        children: pricelist?.length ? `*Prices are for ${pricelist[0].country} locations only   ` : `This service is unavailable in your location.  `
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "service-intro__link",
                                        onClick: _stores_GlobalState__WEBPACK_IMPORTED_MODULE_5__/* .changeCountryState */ .wg,
                                        children: content?.changeLocationText
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ getService)
/* harmony export */ });
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9815);

const getService = async (service)=>{
    const services = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getServices */ .U2)();
    const singleServ = services.find((s)=>s.slug == service);
    const { header , footer , countrypop  } = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getHeader */ .Pg)(), { content , seo  } = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getServicePage */ ._W)(singleServ.id);
    return {
        header,
        footer,
        content,
        countrypop,
        seo
    };
};


/***/ }),

/***/ 7970:
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
/* harmony import */ var _api_getService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5196);
/* harmony import */ var _components_pages_location_Banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2749);
/* harmony import */ var _components_pages_service_Intro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3484);
/* harmony import */ var _components_pages_service_Benefits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(785);
/* harmony import */ var _components_pages_service_Similiar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9227);
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4367);
/* harmony import */ var _components_common_SeoBlock__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_pages_location_Banner__WEBPACK_IMPORTED_MODULE_6__, _components_pages_service_Intro__WEBPACK_IMPORTED_MODULE_7__, _components_pages_service_Benefits__WEBPACK_IMPORTED_MODULE_8__, _components_pages_service_Similiar__WEBPACK_IMPORTED_MODULE_9__, _components_common_Layout__WEBPACK_IMPORTED_MODULE_10__]);
([_components_pages_location_Banner__WEBPACK_IMPORTED_MODULE_6__, _components_pages_service_Intro__WEBPACK_IMPORTED_MODULE_7__, _components_pages_service_Benefits__WEBPACK_IMPORTED_MODULE_8__, _components_pages_service_Similiar__WEBPACK_IMPORTED_MODULE_9__, _components_common_Layout__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












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
                delay: 1,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_service_Intro__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_service_Benefits__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_location_Banner__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_service_Similiar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreatmentsCategoryPage);
async function getStaticPaths() {
    const list = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_4__/* .getServices */ .U2)();
    const paths = [];
    list?.map((p)=>{
        paths.push({
            params: {
                category: p.category,
                service: p.slug,
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
    const response = await (0,_api_getService__WEBPACK_IMPORTED_MODULE_5__/* .getService */ .k)(params.service) || null;
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,7378,991,2749,2804,8510,5789], () => (__webpack_exec__(7970)));
module.exports = __webpack_exports__;

})();