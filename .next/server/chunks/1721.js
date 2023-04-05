"use strict";
exports.id = 1721;
exports.ids = [1721];
exports.modules = {

/***/ 1721:
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
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5975);
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8133);
/* harmony import */ var _common_CustomSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9742);
/* harmony import */ var _common_IconComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9286);
/* harmony import */ var _common_InViewComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2949);
/* harmony import */ var _common_Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2785);
/* harmony import */ var _common_Title54__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9452);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_CustomSlider__WEBPACK_IMPORTED_MODULE_5__, _common_InViewComponent__WEBPACK_IMPORTED_MODULE_7__]);
([_common_CustomSlider__WEBPACK_IMPORTED_MODULE_5__, _common_InViewComponent__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Follow = (0,mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(()=>{
    const { content  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__/* .useContentState */ .b3)();
    const follow = content?.follow;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "follow-us linkedin",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "follow-us__container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("follow-us__top"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Title54__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                classStr: "follow-us__title",
                                text: follow?.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Text__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                classStr: "follow-us__text",
                                text: follow?.text
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                classStr: "white button-arrow button-svg p24",
                                isLink: true,
                                link: follow?.link,
                                target: true,
                                inner: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        follow?.textLink,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_IconComponent__WEBPACK_IMPORTED_MODULE_6__/* .IconComponent */ .o, {
                                            name: "arrow"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "follow-us__blocks",
                    children: follow?.list?.map((f, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            delay: f,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "follow-us__blocks-item",
                                dangerouslySetInnerHTML: {
                                    __html: f
                                }
                            })
                        }, i))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "follow-us__slider",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_CustomSlider__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        variableWidth: true,
                        children: follow?.list?.map((f, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                delay: f,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "follow-us__blocks-item",
                                    onClick: ()=>{
                                        const el = document.createElement("div");
                                        el.insertAdjacentHTML("beforeend", f);
                                        const frame = el.querySelector("iframe");
                                        window.open(frame?.src.replaceAll("/embed", ""), "_blank");
                                    },
                                    dangerouslySetInnerHTML: {
                                        __html: f
                                    }
                                })
                            }, i))
                    })
                })
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Follow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;