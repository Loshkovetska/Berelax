"use strict";
exports.id = 8725;
exports.ids = [8725];
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

/***/ 8226:
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
/* harmony import */ var _common_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7976);
/* harmony import */ var _common_Title40__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6336);
/* harmony import */ var _booking_Steps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4355);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5623);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _common_PhoneSelect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6057);
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9815);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_Select__WEBPACK_IMPORTED_MODULE_9__, _booking_Steps__WEBPACK_IMPORTED_MODULE_11__, _common_PhoneSelect__WEBPACK_IMPORTED_MODULE_13__]);
([_common_Select__WEBPACK_IMPORTED_MODULE_9__, _booking_Steps__WEBPACK_IMPORTED_MODULE_11__, _common_PhoneSelect__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const ResumeForm = (0,mobx_react__WEBPACK_IMPORTED_MODULE_3__.observer)(({ isCareerPage  })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null), recaptchaRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const { 0: isVerify , 1: setVerify  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
        fname: "",
        lname: "",
        email: "",
        city: "",
        country: "",
        phone: "",
        profType: "",
        location: null,
        message: "",
        file2: null,
        file: null
    });
    const { 0: resetState , 1: setReset  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { content , airports  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_5__/* .useContentState */ .b3)();
    const form = content?.form;
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
    const submit = ()=>{
        if (!ref.current || !isVerify) return;
        if (isCareerPage && (!state.profType.length || !state.location)) return;
        (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_14__/* .vacancyForm */ .Hl)({
            ...state,
            lmail: state.location?.continent.includes("North America") ? 1 : 0
        }).then(()=>{
            (0,_stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__/* .changeSmallPopState */ .to)();
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (_common_Select__WEBPACK_IMPORTED_MODULE_9__/* .SelectState.selected */ .t.selected) {
            setState({
                ...state,
                location: _common_Select__WEBPACK_IMPORTED_MODULE_9__/* .SelectState.selected */ .t.selected
            });
        }
    }, [
        _common_Select__WEBPACK_IMPORTED_MODULE_9__/* .SelectState.selected */ .t.selected
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (_booking_Steps__WEBPACK_IMPORTED_MODULE_11__/* .UserData.time */ .mt.time) {
            setState({
                ...state,
                profType: _booking_Steps__WEBPACK_IMPORTED_MODULE_11__/* .UserData.time */ .mt.time || ""
            });
        }
    }, [
        _booking_Steps__WEBPACK_IMPORTED_MODULE_11__/* .UserData.time */ .mt.time
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (_stores_GlobalState__WEBPACK_IMPORTED_MODULE_6__/* ["default"].isSmallOpen */ .ZP.isSmallOpen) {
            setState({
                ...state,
                fname: "",
                lname: "",
                file: null,
                file2: null,
                profType: "",
                location: null,
                email: "",
                message: "",
                phone: "",
                city: "",
                country: ""
            });
            (0,mobx__WEBPACK_IMPORTED_MODULE_2__.runInAction)(()=>{
                _booking_Steps__WEBPACK_IMPORTED_MODULE_11__/* .UserData.time */ .mt.time = null;
                _common_Select__WEBPACK_IMPORTED_MODULE_9__/* .SelectState.selected */ .t.selected = null;
            });
            setReset(true);
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
        className: "resume-form",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "resume-form__container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Title40__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    text: form?.title,
                    classStr: "resume-form__title"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "resume-form__text",
                    dangerouslySetInnerHTML: {
                        __html: form?.text
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    className: "resume-form__form",
                    ref: ref,
                    onSubmit: (e)=>{
                        e.preventDefault();
                        submit();
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "resume-form__form-cont",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "resume-form__form-row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        value: state.fname,
                                        setValue: (value)=>setState({
                                                ...state,
                                                fname: value
                                            }),
                                        name: "fname",
                                        isRequired: true,
                                        placeHolder: form?.fnamePlaceholder,
                                        classStr: "mr"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        value: state.lname,
                                        setValue: (value)=>setState({
                                                ...state,
                                                lname: value
                                            }),
                                        name: "lname",
                                        isRequired: true,
                                        placeHolder: form?.lnamePlaceholder,
                                        classStr: ""
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "resume-form__form-row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    value: state.email,
                                    setValue: (value)=>setState({
                                            ...state,
                                            email: value
                                        }),
                                    name: "email",
                                    type: "email",
                                    isRequired: true,
                                    placeHolder: form?.emailPlaceholder,
                                    classStr: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "resume-form__form-row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_PhoneSelect__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    isRequired: true,
                                    placeholder: form?.phoneNumberPlaceholder,
                                    resetField: resetState,
                                    setPhoneNumber: (value)=>setState({
                                            ...state,
                                            phone: value
                                        })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "resume-form__form-row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        value: state.city,
                                        setValue: (value)=>setState({
                                                ...state,
                                                city: value
                                            }),
                                        name: "city",
                                        isRequired: true,
                                        placeHolder: form?.cityPlaceHolder,
                                        classStr: "mr"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        value: state.country,
                                        setValue: (value)=>setState({
                                                ...state,
                                                country: value
                                            }),
                                        name: "country",
                                        isRequired: true,
                                        placeHolder: form?.countryPlaceHolder,
                                        classStr: ""
                                    })
                                ]
                            }),
                            isCareerPage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "resume-form__form-row",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Select__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            value: state.profType,
                                            isLocate: false,
                                            withSearch: false,
                                            placeholder: form?.profPlaceholder,
                                            isTimeSelect: true,
                                            dt: JSON.parse(JSON.stringify(form?.profSelect)).sort((a, b)=>a.localeCompare(b))
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "resume-form__form-row",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Select__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            value: "",
                                            isLocate: true,
                                            withSearch: true,
                                            placeholder: form?.locatePlaceholder,
                                            dt: airports
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "resume-form__form-row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    className: "input",
                                    value: state.message,
                                    required: true,
                                    placeholder: form?.msgPlaceholder,
                                    onChange: (e)=>setState({
                                            ...state,
                                            message: e.target.value
                                        })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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
                                                        children: form?.uploadResume
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "contact__form-row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("product-reg__form-bg", state.file2 && "selected"),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("product-reg__form-file"),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "file",
                                                onChange: fileLoad2
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
                                                        children: form?.coverLetter
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_12___default()), {
                                ref: recaptchaRef,
                                sitekey: "6Legy0ojAAAAAOWqwkihlGuTyRkgTOVGR9HhBFIe",
                                render: "explicit",
                                onChange: onReCAPTCHAChange
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                type: "submit",
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("button beige button-arrow button-svg p20p40"),
                                children: [
                                    form?.buttonTitle,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_IconComponent__WEBPACK_IMPORTED_MODULE_7__/* .IconComponent */ .o, {
                                        name: "arrow"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResumeForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ getDate),
/* harmony export */   "q": () => (/* binding */ getDateShortMonth)
/* harmony export */ });
const getDate = (date)=>{
    const dt = new Date(date);
    return dt.toLocaleDateString("en", {
        dateStyle: "long"
    });
};
const getDateShortMonth = (date)=>{
    const dt = new Date(date);
    return dt.toLocaleDateString("en", {
        dateStyle: "medium"
    });
};


/***/ })

};
;