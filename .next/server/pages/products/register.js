"use strict";
(() => {
var exports = {};
exports.id = 1361;
exports.ids = [1361];
exports.modules = {

/***/ 5499:
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
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8133);
/* harmony import */ var _common_CheckBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3619);
/* harmony import */ var _common_IconComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9286);
/* harmony import */ var _common_Input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4423);
/* harmony import */ var _common_InViewComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2949);
/* harmony import */ var _common_Select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7976);
/* harmony import */ var _common_Title__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4353);
/* harmony import */ var _booking_Steps__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4355);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5623);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_InViewComponent__WEBPACK_IMPORTED_MODULE_11__, _common_Select__WEBPACK_IMPORTED_MODULE_12__, _booking_Steps__WEBPACK_IMPORTED_MODULE_14__]);
([_common_InViewComponent__WEBPACK_IMPORTED_MODULE_11__, _common_Select__WEBPACK_IMPORTED_MODULE_12__, _booking_Steps__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const ProdRegister = (0,mobx_react__WEBPACK_IMPORTED_MODULE_3__.observer)(()=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null), recaptchaRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const { 0: isVerify , 1: setVerify  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { content  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_5__/* .useContentState */ .b3)();
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
        fname: "",
        lname: "",
        product: {
            title: "",
            id: null
        },
        date: null,
        serialNumber: "",
        file: null,
        check1: false,
        check2: false
    });
    const fileLoad = (e)=>{
        if (!e.target.files.length) {
            setState({
                ...state,
                file: null
            });
            return;
        }
        var reader = new FileReader();
        var url = reader.readAsDataURL(e.target.files[0]);
        setState({
            ...state,
            file: e.target.files[0]
        });
    };
    const submit = ()=>{
        if (!ref.current || !isVerify) return;
        if (state.check1) {
            const fd = new FormData(ref.current);
            fd.append("product", state.product.id?.toString() || "");
            state.date && fd.append("date", state.date);
            state.file && fd.append("file", state.file);
            state.check2 && fd.append("sign-up", state.check2.toString());
            fd.append("status", "product-register");
            //   fetch('/', {
            //     method: 'POST',
            //     body: fd,
            //   }).then(() => {})
            (0,_stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__/* .changeSmallPopState */ .to)();
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setState({
            ...state,
            date: _booking_Steps__WEBPACK_IMPORTED_MODULE_14__/* .UserData.date */ .mt.date
        });
    }, [
        _booking_Steps__WEBPACK_IMPORTED_MODULE_14__/* .UserData.date */ .mt.date
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const el = content?.products?.find((p)=>p.title == _booking_Steps__WEBPACK_IMPORTED_MODULE_14__/* .UserData.time */ .mt.time);
        if (el) {
            setState({
                ...state,
                product: el
            });
        }
    }, [
        _booking_Steps__WEBPACK_IMPORTED_MODULE_14__/* .UserData.time */ .mt.time
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (_stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__/* ["default"].isSmallOpen */ .ZP.isSmallOpen) {
            setState({
                ...state,
                fname: "",
                lname: "",
                product: {
                    ...state.product,
                    title: "",
                    id: null
                },
                date: null,
                serialNumber: "",
                file: null,
                check1: false,
                check2: false
            });
            (0,mobx__WEBPACK_IMPORTED_MODULE_2__.runInAction)(()=>{
                _booking_Steps__WEBPACK_IMPORTED_MODULE_14__/* .UserData.time */ .mt.time = null;
                _booking_Steps__WEBPACK_IMPORTED_MODULE_14__/* .UserData.date */ .mt.date = null;
            });
            recaptchaRef.current?.reset();
        }
    }, [
        _stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__/* ["default"].isSmallOpen */ .ZP.isSmallOpen
    ]);
    const onReCAPTCHAChange = (captchaCode)=>{
        if (!captchaCode) {
            setVerify(false);
            return;
        }
        setVerify(true);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "product-reg",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "product-reg__container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "product-reg__top",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Title__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                classStr: "product-reg__title",
                                text: content?.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "product-reg__text",
                                dangerouslySetInnerHTML: {
                                    __html: content?.text
                                }
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    delay: 1,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                        ref: ref,
                        className: "product-reg__form",
                        onSubmit: (e)=>{
                            e.preventDefault();
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "product-reg__form-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "product-reg__form-title",
                                    dangerouslySetInnerHTML: {
                                        __html: content?.formTitle
                                    }
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "product-reg__form-row",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Input__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            name: "fname",
                                            placeHolder: content?.fnamePlaceholder,
                                            classStr: "mr",
                                            value: state.fname,
                                            isRequired: true,
                                            setValue: (value)=>setState({
                                                    ...state,
                                                    fname: value
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Input__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            name: "lname",
                                            placeHolder: content?.lnamePlaceholder,
                                            classStr: "",
                                            isRequired: true,
                                            value: state.lname,
                                            setValue: (value)=>setState({
                                                    ...state,
                                                    lname: value
                                                })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "product-reg__form-row",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Select__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        isLocate: false,
                                        isTimeSelect: true,
                                        withSearch: false,
                                        placeholder: content?.productPlaceholder,
                                        value: state.product?.title,
                                        dt: JSON.parse(JSON.stringify(content?.products.map((p)=>p.title))).sort((a, b)=>a.localeCompare(b))
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "product-reg__form-row",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("loc-select"),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "loc-select__top",
                                            onClick: ()=>{},
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "loc-select__value",
                                                    children: state.date ? new Date(state.date).toLocaleDateString() : content?.datePlaceholder
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                    inner: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_IconComponent__WEBPACK_IMPORTED_MODULE_9__/* .IconComponent */ .o, {
                                                            name: "socials/calendar"
                                                        })
                                                    }),
                                                    classStr: "beige button-search",
                                                    isLink: false,
                                                    action: _stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__/* .changeCalendarState */ .bu
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "product-reg__form-row",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Input__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        placeHolder: content?.serialPlaceholder,
                                        classStr: "",
                                        name: "serialNumber",
                                        isRequired: true,
                                        value: state.serialNumber,
                                        setValue: (value)=>setState({
                                                ...state,
                                                serialNumber: value
                                            })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "product-reg__form-row",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("product-reg__form-bg", state.file && "selected"),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("product-reg__form-file"),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "file",
                                                    onChange: fileLoad,
                                                    accept: ".doc,.docx,.pdf",
                                                    required: true
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "product-reg__form-text",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_IconComponent__WEBPACK_IMPORTED_MODULE_9__/* .IconComponent */ .o, {
                                                            name: "form/close+delete",
                                                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(state.file && "show")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_IconComponent__WEBPACK_IMPORTED_MODULE_9__/* .IconComponent */ .o, {
                                                            name: "form/upload",
                                                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(!state.file && "show")
                                                        }),
                                                        state.file ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: (state?.file)?.name
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: content?.fileText
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "product-reg__form-bottom",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_CheckBox__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            label: content?.checkOne,
                                            value: state.check1,
                                            returnValue: (value)=>setState({
                                                    ...state,
                                                    check1: value
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_CheckBox__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            label: content?.checkTwo,
                                            value: state.check2,
                                            returnValue: (value)=>setState({
                                                    ...state,
                                                    check2: value
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_15___default()), {
                                            ref: recaptchaRef,
                                            sitekey: "6Legy0ojAAAAAOWqwkihlGuTyRkgTOVGR9HhBFIe",
                                            render: "explicit",
                                            onChange: onReCAPTCHAChange
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            type: "submit",
                                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("button beige button-arrow button-svg p20p40"),
                                            onClick: submit,
                                            children: [
                                                content?.buttonTitle,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_IconComponent__WEBPACK_IMPORTED_MODULE_9__/* .IconComponent */ .o, {
                                                    name: "arrow"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProdRegister);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ getProdReg)
/* harmony export */ });
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9787);

const getProdReg = async ()=>{
    const header = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getHeader */ .Pg)(), footer = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getFooter */ .PX)(), content = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getProductRegister */ .d1)(), countrypop = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getCountryPop */ .Pc)();
    return {
        header,
        footer,
        content,
        countrypop
    };
};


/***/ }),

/***/ 4440:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
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
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4367);
/* harmony import */ var _api_getProdReg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3126);
/* harmony import */ var _components_pages_products_ProdRegister__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5499);
/* harmony import */ var _components_common_Calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6386);
/* harmony import */ var _components_common_SmallPop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1867);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_Layout__WEBPACK_IMPORTED_MODULE_5__, _components_pages_products_ProdRegister__WEBPACK_IMPORTED_MODULE_7__, _components_common_Calendar__WEBPACK_IMPORTED_MODULE_8__]);
([_components_common_Layout__WEBPACK_IMPORTED_MODULE_5__, _components_pages_products_ProdRegister__WEBPACK_IMPORTED_MODULE_7__, _components_common_Calendar__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const ProductsRegister = (0,mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(({ hydrationData: props  })=>{
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                delay: 1,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_products_ProdRegister__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Calendar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                afterDate: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_SmallPop__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsRegister);
async function getStaticProps() {
    const response = await (0,_api_getProdReg__WEBPACK_IMPORTED_MODULE_6__/* .getProdReg */ .X)();
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

/***/ 5623:
/***/ ((module) => {

module.exports = require("react-google-recaptcha");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5975,7077,1867,6386], () => (__webpack_exec__(4440)));
module.exports = __webpack_exports__;

})();