"use strict";
exports.id = 4534;
exports.ids = [4534];
exports.modules = {

/***/ 4534:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8133);
/* harmony import */ var _common_IconComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9286);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4009);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5975);
/* harmony import */ var _common_ImageComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9808);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__]);
react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const FollowUs = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(()=>{
    const { content: { follow  } ,  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_7__/* .useContentState */ .b3)();
    const { 0: photos , 1: setPhotos  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    const { 0: end , 1: setEnd  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { ref , inView , entry  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)({
        threshold: 0
    });
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (!end) {
            setEnd(inView);
        }
    }, [
        inView
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (follow) {
            const items = document.querySelectorAll(".follow-us__img");
            if (items) {
                items.forEach((i, id)=>{
                    if (i) {
                        i.style.transitionDelay = `${id * 0.1}s`;
                    }
                });
            }
        }
    }, [
        follow
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "follow-us",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "follow-us__container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("follow-us__top", end && "animated"),
                    ref: ref,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "follow-us__title",
                            dangerouslySetInnerHTML: {
                                __html: follow?.title
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "follow-us__text",
                            dangerouslySetInnerHTML: {
                                __html: follow?.text
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            classStr: "white button-arrow button-svg p24",
                            isLink: true,
                            link: follow?.link,
                            target: true,
                            inner: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    follow?.textLink,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_IconComponent__WEBPACK_IMPORTED_MODULE_3__/* .IconComponent */ .o, {
                                        name: "arrow"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "follow-us__list",
                    children: (photos?.length > 0 ? photos : follow?.images)?.map((f, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FollowUsImage, {
                            f: f
                        }, i))
                })
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowUs);
const FollowUsImage = ({ f  })=>{
    const { 0: end , 1: setEnd  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { ref , inView , entry  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)({
        threshold: 0
    });
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (!end) {
            setEnd(inView);
        }
    }, [
        inView
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("follow-us__img", end && "animated"),
        ref: ref,
        href: f.link,
        target: "_blank",
        rel: "noreferrer",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ImageComponent__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            src: f.img || "",
            alt: f.alt
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;