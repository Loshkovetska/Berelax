"use strict";
(() => {
var exports = {};
exports.id = 8455;
exports.ids = [8455];
exports.modules = {

/***/ 2785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);



const Text = (0,mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(({ text , classStr =""  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text", classStr),
        dangerouslySetInnerHTML: {
            __html: text
        }
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);


/***/ }),

/***/ 7417:
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
/* harmony import */ var _common_IconComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9286);
/* harmony import */ var _common_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4423);
/* harmony import */ var _common_InViewComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2949);
/* harmony import */ var _common_Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7976);
/* harmony import */ var _common_Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2785);
/* harmony import */ var _common_Title__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4353);
/* harmony import */ var _common_Title40__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6336);
/* harmony import */ var _booking_Steps__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4355);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5623);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_InViewComponent__WEBPACK_IMPORTED_MODULE_9__, _common_Select__WEBPACK_IMPORTED_MODULE_10__, _booking_Steps__WEBPACK_IMPORTED_MODULE_14__]);
([_common_InViewComponent__WEBPACK_IMPORTED_MODULE_9__, _common_Select__WEBPACK_IMPORTED_MODULE_10__, _booking_Steps__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const ContactForm = (0,mobx_react__WEBPACK_IMPORTED_MODULE_3__.observer)(()=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null), recaptchaRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const { 0: isVerify , 1: setVerify  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { content , airports  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_5__/* .useContentState */ .b3)();
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
        fname: "",
        lname: "",
        email: "",
        msg: "",
        subject: "",
        location: "",
        file: null,
        file2: null
    });
    const submit = ()=>{
        if (!ref.current || !isVerify) return;
        if (state.subject.includes("Defective") && !state.file && !state.file2) return;
        const fd = new FormData(ref.current);
        fd.append("subject", state.subject);
        fd.append("location", JSON.stringify(state.location));
        state.subject.includes("Defective") && state.file && fd.append("file", state.file);
        state.subject.includes("Defective") && state.file2 && fd.append("file2", state.file2);
        fd.append("status", "contact");
        // fetch('/', {
        //   method: 'POST',
        //   body: fd,
        // }).then(() => {})
        (0,_stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__/* .changeSmallPopState */ .to)();
    };
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
    const fileLoad2 = (e)=>{
        if (!e.target.files.length) {
            setState({
                ...state,
                file2: null
            });
            return;
        }
        var reader = new FileReader();
        var url = reader.readAsDataURL(e.target.files[0]);
        setState({
            ...state,
            file2: e.target.files[0]
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setState({
            ...state,
            subject: _booking_Steps__WEBPACK_IMPORTED_MODULE_14__/* .UserData.time */ .mt.time || ""
        });
    }, [
        _booking_Steps__WEBPACK_IMPORTED_MODULE_14__/* .UserData.time */ .mt.time
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (_common_Select__WEBPACK_IMPORTED_MODULE_10__/* .SelectState.selected */ .t.selected) {
            setState({
                ...state,
                location: _common_Select__WEBPACK_IMPORTED_MODULE_10__/* .SelectState.selected */ .t.selected
            });
        }
    }, [
        _common_Select__WEBPACK_IMPORTED_MODULE_10__/* .SelectState.selected */ .t.selected
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (_stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__/* ["default"].isSmallOpen */ .ZP.isSmallOpen) {
            setState({
                ...state,
                fname: "",
                lname: "",
                file: null,
                file2: null,
                subject: "",
                location: "",
                email: "",
                msg: ""
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
        className: "contact",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "contact__container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Title__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            text: content?.title,
                            classStr: "contact__title"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Text__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            text: content?.text,
                            classStr: "contact__text"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    delay: 1,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                        ref: ref,
                        className: "contact__form",
                        onSubmit: (e)=>{
                            e.preventDefault();
                            submit();
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "contact__form-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Title40__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    text: content?.formTitle,
                                    classStr: "contact__form-title"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "contact__form-row",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            value: state.fname,
                                            classStr: "mr",
                                            placeHolder: content?.fnamePlaceholder,
                                            name: "fname",
                                            isRequired: true,
                                            setValue: (value)=>setState({
                                                    ...state,
                                                    fname: value
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            value: state.lname,
                                            classStr: "",
                                            placeHolder: content?.lnamePlaceholder,
                                            name: "lname",
                                            isRequired: true,
                                            setValue: (value)=>setState({
                                                    ...state,
                                                    lname: value
                                                })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "contact__form-row",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        value: state.email,
                                        classStr: "",
                                        placeHolder: content?.emailPlaceholder,
                                        name: "email",
                                        isRequired: true,
                                        setValue: (value)=>setState({
                                                ...state,
                                                email: value
                                            })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "contact__form-row",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Select__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        withSearch: false,
                                        isLocate: false,
                                        isTimeSelect: true,
                                        dt: JSON.parse(JSON.stringify(content?.subjectSelect)).sort((a, b)=>a.localeCompare(b)),
                                        value: "",
                                        placeholder: content?.subjectPlaceholder
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "contact__form-row",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Select__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        withSearch: true,
                                        isLocate: true,
                                        dt: airports,
                                        value: "",
                                        placeholder: content?.locatePlaceholder
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "contact__form-row",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                        required: true,
                                        name: "message",
                                        value: state.msg,
                                        placeholder: content?.msgPlaceholder,
                                        className: "input",
                                        onChange: (e)=>setState({
                                                ...state,
                                                msg: e.target.value
                                            })
                                    })
                                }),
                                state?.subject.includes("Defective") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "contact__form-row",
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
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_IconComponent__WEBPACK_IMPORTED_MODULE_7__/* .IconComponent */ .o, {
                                                            name: "form/close+delete",
                                                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(state.file && "show")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_IconComponent__WEBPACK_IMPORTED_MODULE_7__/* .IconComponent */ .o, {
                                                            name: "form/upload",
                                                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(!state.file && "show")
                                                        }),
                                                        state.file ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: (state?.file)?.name
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: content?.uploadReciept
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                state?.subject.includes("Defective") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "contact__form-row",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("product-reg__form-bg", state.file2 && "selected"),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("product-reg__form-file"),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "file",
                                                    onChange: fileLoad2,
                                                    required: true
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "product-reg__form-text",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_IconComponent__WEBPACK_IMPORTED_MODULE_7__/* .IconComponent */ .o, {
                                                            name: "form/close+delete",
                                                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(state.file2 && "show")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_IconComponent__WEBPACK_IMPORTED_MODULE_7__/* .IconComponent */ .o, {
                                                            name: "form/upload",
                                                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(!state.file2 && "show")
                                                        }),
                                                        state.file2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: (state?.file2)?.name
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: content?.attachPhoto
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
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
                                    children: [
                                        content?.buttonTitle,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_IconComponent__WEBPACK_IMPORTED_MODULE_7__/* .IconComponent */ .o, {
                                            name: "arrow"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ getContact)
/* harmony export */ });
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9787);

const getContact = async ()=>{
    const header = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getHeader */ .Pg)(), footer = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getFooter */ .PX)(), airports = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getLocations */ .JC)(), content = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getContactPage */ .J4)(), countrypop = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getCountryPop */ .Pc)();
    return {
        header,
        footer,
        content,
        countrypop,
        airports
    };
};


/***/ }),

/***/ 7243:
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
/* harmony import */ var _api_getContact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3448);
/* harmony import */ var _components_pages_contact_ContactForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7417);
/* harmony import */ var _components_common_SmallPop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1867);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_Layout__WEBPACK_IMPORTED_MODULE_5__, _components_pages_contact_ContactForm__WEBPACK_IMPORTED_MODULE_7__]);
([_components_common_Layout__WEBPACK_IMPORTED_MODULE_5__, _components_pages_contact_ContactForm__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const ContactPage = (0,mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(({ hydrationData: props  })=>{
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
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
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_contact_ContactForm__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_SmallPop__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactPage);
async function getStaticProps() {
    const response = await (0,_api_getContact__WEBPACK_IMPORTED_MODULE_6__/* .getContact */ .v)();
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5975,7077,1867], () => (__webpack_exec__(7243)));
module.exports = __webpack_exports__;

})();