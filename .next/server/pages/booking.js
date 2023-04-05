"use strict";
(() => {
var exports = {};
exports.id = 4882;
exports.ids = [4882];
exports.modules = {

/***/ 4682:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5975);
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4812);
/* harmony import */ var _Steps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4355);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Steps__WEBPACK_IMPORTED_MODULE_7__]);
_Steps__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const TimePop = (0,mobx_react__WEBPACK_IMPORTED_MODULE_3__.observer)(()=>{
    const { content  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_5__/* .useContentState */ .b3)();
    const card = _stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP?.cardTime;
    let prices = [];
    if (_Steps__WEBPACK_IMPORTED_MODULE_7__/* .UserData.location */ .mt.location) {
        prices = card?.prices.map((f)=>{
            let amount = f.amount.find((a)=>a.country.includes(_Steps__WEBPACK_IMPORTED_MODULE_7__/* .UserData.location.country */ .mt.location.country));
            return {
                time: f.time,
                amount: amount?.value + " " + amount?.currency
            };
        });
    } else {
        prices = card?.prices.map((f)=>{
            let amount = f.amount.find((a)=>a.country.includes("United State of America"));
            if (!amount) {
            // amount = f.amount[0]
            }
            return {
                time: f.time,
                amount: amount?.currency + " " + amount?.value
            };
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("time-pop", _stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__/* ["default"].isTimePop */ .ZP.isTimePop && "open"),
        onClick: ()=>(0,_stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__/* .changeTimeState */ .cu)(card),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "time-pop__container",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "time-pop__title",
                    children: ![
                        "nail-care",
                        "beauty"
                    ].includes(card?.category || "") ? content?.popDurationTitle : "Choose"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "time-pop__list",
                    children: prices?.map((p, i)=>{
                        if (p.amount.includes("undefined")) {
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {}, i);
                        }
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "time-pop__item",
                            onClick: ()=>{
                                let treats = JSON.parse(JSON.stringify(_Steps__WEBPACK_IMPORTED_MODULE_7__/* .UserData.treatments */ .mt.treatments));
                                treats = treats.map((tr, i)=>{
                                    if (tr.id == card.id) {
                                        tr.time = p.time;
                                        tr.price = p.amount;
                                    }
                                    return tr;
                                });
                                (0,mobx__WEBPACK_IMPORTED_MODULE_2__.runInAction)(()=>{
                                    _Steps__WEBPACK_IMPORTED_MODULE_7__/* .UserData.treatments */ .mt.treatments = treats;
                                });
                                (0,_stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__/* .changeTimeState */ .cu)(card);
                            },
                            children: [
                                p.time,
                                " ",
                                ![
                                    "nail-care",
                                    "beauty"
                                ].includes(card?.category || "") && "mins",
                                " ",
                                "- ",
                                p.amount
                            ]
                        }, i);
                    })
                })
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimePop);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ getBooking)
/* harmony export */ });
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9815);

const getBooking = async ()=>{
    const { header , countrypop , footer  } = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getHeader */ .Pg)(), { content , seo  } = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getBookingPage */ .E7)(), airports = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getSortLocations */ .eq)();
    return {
        header,
        footer,
        content,
        airports,
        countrypop,
        seo
    };
};


/***/ }),

/***/ 6518:
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
/* harmony import */ var _api_getBooking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5236);
/* harmony import */ var _components_pages_booking_Steps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4355);
/* harmony import */ var _components_pages_booking_TimePop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4682);
/* harmony import */ var _components_common_Calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6386);
/* harmony import */ var _components_common_SeoBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_Layout__WEBPACK_IMPORTED_MODULE_4__, _components_pages_booking_Steps__WEBPACK_IMPORTED_MODULE_6__, _components_pages_booking_TimePop__WEBPACK_IMPORTED_MODULE_7__, _components_common_Calendar__WEBPACK_IMPORTED_MODULE_8__]);
([_components_common_Layout__WEBPACK_IMPORTED_MODULE_4__, _components_pages_booking_Steps__WEBPACK_IMPORTED_MODULE_6__, _components_pages_booking_TimePop__WEBPACK_IMPORTED_MODULE_7__, _components_common_Calendar__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Booking = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(({ hydrationData: props  })=>{
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                delay: 1,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_booking_Steps__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_booking_TimePop__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Calendar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                beforeDate: true
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Booking);
async function getStaticProps() {
    const response = await (0,_api_getBooking__WEBPACK_IMPORTED_MODULE_5__/* .getBooking */ .l)();
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

/***/ 4676:
/***/ ((module) => {

module.exports = require("react-trip-date");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,7378,991,6386], () => (__webpack_exec__(6518)));
module.exports = __webpack_exports__;

})();