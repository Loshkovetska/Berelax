"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 6655:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5975);
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8133);
/* harmony import */ var _common_IconComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9286);
/* harmony import */ var _common_ImageComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4042);
/* harmony import */ var _common_InViewComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2949);
/* harmony import */ var _common_Title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4353);
/* harmony import */ var _IntroVideo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3750);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_InViewComponent__WEBPACK_IMPORTED_MODULE_7__, _IntroVideo__WEBPACK_IMPORTED_MODULE_9__]);
([_common_InViewComponent__WEBPACK_IMPORTED_MODULE_7__, _IntroVideo__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Intro = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(()=>{
    const { content: { intro  } ,  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__/* .useContentState */ .b3)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "intro",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                animationClass: "zoomin",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "intro__top",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Title__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            classStr: "intro__title",
                            text: intro?.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            classStr: "beige button-svg p20p28 button-arrow",
                            isLink: true,
                            link: "/find-us",
                            inner: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    intro?.button,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_IconComponent__WEBPACK_IMPORTED_MODULE_5__/* .IconComponent */ .o, {
                                        name: "arrow"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            intro?.images?.length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "intro__scroll",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "intro__gallery",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    delay: 0.5,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "intro__gallery-col center middle",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "intro__gallery-img b48 h300",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ImageComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                src: intro.images[0]
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    delay: 1,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "intro__gallery-col small",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "intro__gallery-img b104 h339",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ImageComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    src: intro.images[1]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "intro__gallery-img b48 h200",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ImageComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    src: intro.images[2]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IntroVideo__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    delay: 1,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "intro__gallery-col small",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "intro__gallery-img b48 h200",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ImageComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    src: intro.images[3]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "intro__gallery-img b104 h339",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ImageComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    src: intro.images[4]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    delay: 0.5,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "intro__gallery-col center middle",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "intro__gallery-img b48 h300 ",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ImageComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                src: intro.images[5]
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        animationClass: "apear",
                        delay: 1,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "intro__img-mobile",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ImageComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                src: intro?.mainImg
                            })
                        })
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3750:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4812);
/* harmony import */ var _common_InViewComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2949);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5975);
/* harmony import */ var _common_ImageComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4042);
/* harmony import */ var _hooks_getWindowDimensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4219);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_InViewComponent__WEBPACK_IMPORTED_MODULE_4__]);
_common_InViewComponent__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const IntroVideo = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(()=>{
    const { content: { intro  } ,  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_5__/* .useContentState */ .b3)();
    const { width  } = (0,_hooks_getWindowDimensions__WEBPACK_IMPORTED_MODULE_7__/* .useWindowDimensions */ .d)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (intro) {
            const scroll = document.querySelector(".intro__scroll");
            const smooth = document.querySelector(".smooth");
            const gallery = document.querySelector(".intro__gallery");
            const bigCol = document.querySelector(".intro__gallery-col.big");
            const video = document.querySelector(".intro__gallery-img.video");
            const imgBig = document.querySelector(".intro__gallery-img.b72");
            const galleryColsSmall = document.querySelectorAll(".intro__gallery-col.small");
            const galleryColsMiddle = document.querySelectorAll(".intro__gallery-col.middle");
            //----
            if (scroll && smooth && gallery && bigCol && video && imgBig && galleryColsSmall && galleryColsMiddle) {
                const v = video.querySelector("video"), img = video.querySelector("img");
                //----
                const height = gallery.getBoundingClientRect().height;
                const bodyTop = smooth.getBoundingClientRect().top;
                const rectTop = scroll.getBoundingClientRect().top;
                const windowDiff = (window.innerHeight - height) / 2;
                const offset = rectTop - bodyTop - windowDiff;
                const bottom = scroll.getBoundingClientRect().bottom - height - windowDiff;
                const columnGap = 32 / (window.innerWidth / 100);
                if (!_stores_GlobalState__WEBPACK_IMPORTED_MODULE_3__/* ["default"].isTouch */ .ZP.isTouch) {
                    _stores_GlobalState__WEBPACK_IMPORTED_MODULE_3__/* ["default"].locoScroll */ .ZP.locoScroll && _stores_GlobalState__WEBPACK_IMPORTED_MODULE_3__/* ["default"].locoScroll.on */ .ZP.locoScroll.on("scroll", ({ scroll  })=>{
                        if (window.innerWidth >= 1024) {
                            if (scroll.y < offset) {
                                requestAnimationFrame(()=>{
                                    gallery.style.transform = `translate3d(0, ${0}px, 0)`;
                                    bigCol.style.clipPath = `
                 inset(18% 23% round 72px)`;
                                    galleryColsSmall[0].style.transform = `translate3d(${0}px,0,0)`;
                                    galleryColsSmall[1].style.transform = `translate3d(-${0}px,0,0)`;
                                    galleryColsMiddle[0].style.transform = `translate3d(${0}px,0,0)`;
                                    galleryColsMiddle[1].style.transform = `translate3d(-${0}px,0,0)`;
                                });
                            }
                            if (scroll.y >= offset && scroll.y <= bottom) {
                                const diff = bottom - offset;
                                const lastDiff = (scroll.y - offset) / diff;
                                if (lastDiff >= 0.6) {
                                    v?.classList.add("hidden");
                                    img?.classList.remove("hidden");
                                } else {
                                    v?.classList.remove("hidden");
                                    img?.classList.add("hidden");
                                }
                                const marginMinus = lastDiff * (16 + columnGap) < 16 + columnGap ? lastDiff * (16 + columnGap) : 16 + columnGap;
                                requestAnimationFrame(()=>{
                                    gallery.style.transform = `translate3d(0, ${scroll.y - offset >= 1500 ? 1500 : scroll.y - offset}px, 0)`;
                                    bigCol.style.clipPath = `
                 inset(${18 - lastDiff * 18 < 0 ? 0 : 18 - lastDiff * 18}% ${23 - lastDiff * 23 < 0 ? 0 : 23 - lastDiff * 23}% round ${78 - lastDiff * 48 < 48 ? 48 : 78 - lastDiff * 48}px)`;
                                    galleryColsSmall[0].style.transform = `translate3d(-${marginMinus}vw,0,0)`;
                                    galleryColsSmall[1].style.transform = `translate3d(${marginMinus}vw,0,0)`;
                                    galleryColsMiddle[0].style.transform = `translate3d(-${marginMinus}vw,0,0)`;
                                    galleryColsMiddle[1].style.transform = `translate3d(${marginMinus}vw,0,0)`;
                                });
                            }
                        }
                        if (window.innerWidth < 1024) {
                            const viewportMargin = window.innerWidth > 900 ? 32 : 16;
                            if (scroll.y < offset) {
                                requestAnimationFrame(()=>{
                                    gallery.style.transform = `translate3d(0, ${0}px, 0)`;
                                    bigCol.style.clipPath = `inset(${viewportMargin} round 48px)`;
                                });
                            }
                            if (scroll.y >= offset && scroll.y <= bottom) {
                                const diff1 = bottom - offset;
                                const lastDiff1 = (scroll.y - offset) / diff1;
                                if (lastDiff1 >= 0.8) {
                                    v?.classList.add("hidden");
                                    img?.classList.remove("hidden");
                                } else {
                                    v?.classList.remove("hidden");
                                    img?.classList.add("hidden");
                                }
                                const insetOffset = viewportMargin - lastDiff1 * viewportMargin < 0 ? 0 : viewportMargin - lastDiff1 * viewportMargin;
                                requestAnimationFrame(()=>{
                                    gallery.style.transform = `translate3d(0, ${scroll.y - offset >= 1500 ? 1500 : scroll.y - offset}px, 0)`;
                                    bigCol.style.clipPath = `inset(${insetOffset}px round ${48 - lastDiff1 * 48 < 0 ? 0 : 48 - lastDiff1 * 48}px)`;
                                });
                            }
                        }
                    });
                } else {
                    window.addEventListener("scroll", ()=>{
                        const scroll = {
                            y: window.scrollY
                        };
                        if (window.innerWidth >= 1024) {
                            if (scroll.y < offset) {
                                requestAnimationFrame(()=>{
                                    gallery.style.transform = `translate3d(0, ${0}px, 0)`;
                                    bigCol.style.clipPath = `
                 inset(18% 23% round 72px)`;
                                    galleryColsSmall[0].style.transform = `translate3d(${0}px,0,0)`;
                                    galleryColsSmall[1].style.transform = `translate3d(-${0}px,0,0)`;
                                    galleryColsMiddle[0].style.transform = `translate3d(${0}px,0,0)`;
                                    galleryColsMiddle[1].style.transform = `translate3d(-${0}px,0,0)`;
                                });
                            }
                            if (scroll.y >= offset && scroll.y <= bottom) {
                                const diff = bottom - offset;
                                const lastDiff = (scroll.y - offset) / diff;
                                if (lastDiff >= 0.6) {
                                    v?.classList.add("hidden");
                                    img?.classList.remove("hidden");
                                } else {
                                    v?.classList.remove("hidden");
                                    img?.classList.add("hidden");
                                }
                                const marginMinus = lastDiff * (16 + columnGap) < 16 + columnGap ? lastDiff * (16 + columnGap) : 16 + columnGap;
                                requestAnimationFrame(()=>{
                                    gallery.style.transform = `translate3d(0, ${scroll.y - offset >= 1500 ? 1500 : scroll.y - offset}px, 0)`;
                                    bigCol.style.clipPath = `
                 inset(${18 - lastDiff * 18 < 0 ? 0 : 18 - lastDiff * 18}% ${23 - lastDiff * 23 < 0 ? 0 : 23 - lastDiff * 23}% round ${78 - lastDiff * 48 < 48 ? 48 : 78 - lastDiff * 48}px)`;
                                    galleryColsSmall[0].style.transform = `translate3d(-${marginMinus}vw,0,0)`;
                                    galleryColsSmall[1].style.transform = `translate3d(${marginMinus}vw,0,0)`;
                                    galleryColsMiddle[0].style.transform = `translate3d(-${marginMinus}vw,0,0)`;
                                    galleryColsMiddle[1].style.transform = `translate3d(${marginMinus}vw,0,0)`;
                                });
                            }
                        }
                        if (window.innerWidth < 1024) {
                            const viewportMargin = window.innerWidth > 900 ? 32 : 16;
                            if (scroll.y < offset) {
                                requestAnimationFrame(()=>{
                                    gallery.style.transform = `translate3d(0, ${0}px, 0)`;
                                    bigCol.style.clipPath = `inset(${viewportMargin} round 48px)`;
                                });
                            }
                            if (scroll.y >= offset && scroll.y <= bottom) {
                                const diff1 = bottom - offset;
                                const lastDiff1 = (scroll.y - offset) / diff1;
                                if (lastDiff1 >= 0.8) {
                                    v?.classList.add("hidden");
                                    img?.classList.remove("hidden");
                                } else {
                                    v?.classList.remove("hidden");
                                    img?.classList.add("hidden");
                                }
                                const insetOffset = viewportMargin - lastDiff1 * viewportMargin < 0 ? 0 : viewportMargin - lastDiff1 * viewportMargin;
                                requestAnimationFrame(()=>{
                                    gallery.style.transform = `translate3d(0, ${scroll.y - offset >= 1500 ? 1500 : scroll.y - offset}px, 0)`;
                                    bigCol.style.clipPath = `inset(${insetOffset}px round ${48 - lastDiff1 * 48 < 0 ? 0 : 48 - lastDiff1 * 48}px)`;
                                });
                            }
                        }
                    });
                }
            }
        }
    }, [
        intro,
        _stores_GlobalState__WEBPACK_IMPORTED_MODULE_3__/* ["default"].locoScroll */ .ZP.locoScroll,
        _stores_GlobalState__WEBPACK_IMPORTED_MODULE_3__/* ["default"].isTouch */ .ZP.isTouch
    ]);
    if (width <= 1023) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        delay: 1.5,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "intro__gallery-col big center",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "intro__gallery-img video b72",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                        src: intro?.mainVideo.video,
                        autoPlay: true,
                        muted: true,
                        poster: intro?.mainVideo.poster,
                        playsInline: true,
                        loop: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                            type: "video/mp4",
                            src: intro?.mainVideo.video
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ImageComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        src: intro?.mainImg,
                        classStr: "hidden intro-img"
                    })
                ]
            })
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntroVideo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3664:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8133);
/* harmony import */ var _common_IconComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9286);
/* harmony import */ var _common_NewsPost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3438);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4009);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5975);
/* harmony import */ var _common_InViewComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2949);
/* harmony import */ var _common_CustomSlider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9742);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_NewsPost__WEBPACK_IMPORTED_MODULE_6__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__, _common_InViewComponent__WEBPACK_IMPORTED_MODULE_10__, _common_CustomSlider__WEBPACK_IMPORTED_MODULE_11__]);
([_common_NewsPost__WEBPACK_IMPORTED_MODULE_6__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__, _common_InViewComponent__WEBPACK_IMPORTED_MODULE_10__, _common_CustomSlider__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const News = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(()=>{
    const { content: { news  } , news: newsList ,  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_9__/* .useContentState */ .b3)();
    const navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: end , 1: setEnd  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { ref , inView , entry  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__.useInView)({
        threshold: 0
    });
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!end) {
            setEnd(inView);
        }
    }, [
        inView
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (news) {
            const items = document.querySelectorAll(".news-post");
            if (items) {
                items.forEach((i, id)=>{
                    if (i) {
                        i.style.transitionDelay = `${id * 0.1}s`;
                    }
                });
            }
        }
    }, [
        news
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "news",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "news__container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()("news__top", end && "animated"),
                    ref: ref,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "news__title",
                            dangerouslySetInnerHTML: {
                                __html: news?.title
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            isLink: true,
                            link: "/news",
                            inner: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    news?.buttonTitle,
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_IconComponent__WEBPACK_IMPORTED_MODULE_5__/* .IconComponent */ .o, {
                                        name: "arrow"
                                    })
                                ]
                            }),
                            classStr: "button-arrow button-svg beige p20p40"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "news__list",
                    children: JSON.parse(JSON.stringify(newsList))?.sort((a, b)=>new Date(b.datetime).getTime() - new Date(a.datetime).getTime()).slice(0, 3).map((ni, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_NewsPost__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            post: ni
                        }, i))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "news__slider",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_CustomSlider__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        variableWidth: true,
                        infinite: false,
                        children: JSON.parse(JSON.stringify(newsList))?.sort((a, b)=>new Date(b.datetime).getTime() - new Date(a.datetime).getTime()).slice(0, 3).map((ni, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_NewsPost__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                post: ni
                            }, i))
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        isLink: true,
                        link: "/news",
                        inner: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                news?.buttonTitle,
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_IconComponent__WEBPACK_IMPORTED_MODULE_5__/* .IconComponent */ .o, {
                                    name: "arrow"
                                })
                            ]
                        }),
                        classStr: "button-arrow button-svg beige p20p40"
                    })
                })
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (News);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7819:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_getWindowDimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4219);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5975);
/* harmony import */ var _common_CustomSlider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9742);
/* harmony import */ var _common_ProductCat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3680);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_CustomSlider__WEBPACK_IMPORTED_MODULE_7__, _common_ProductCat__WEBPACK_IMPORTED_MODULE_8__]);
([_common_CustomSlider__WEBPACK_IMPORTED_MODULE_7__, _common_ProductCat__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Products = (0,mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(()=>{
    const { content: { products  } ,  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_6__/* .useContentState */ .b3)();
    const navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { width  } = (0,_hooks_getWindowDimensions__WEBPACK_IMPORTED_MODULE_5__/* .useWindowDimensions */ .d)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (products) {
            const items = document.querySelectorAll(".products__item");
            if (items) {
                items.forEach((i, id)=>{
                    if (i) {
                        i.style.transitionDelay = `${id * 0.1}s`;
                    }
                });
            }
        }
    }, [
        products
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "products",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "products__container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "products__top",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("products__title"),
                            dangerouslySetInnerHTML: {
                                __html: products?.title
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "products__text",
                            dangerouslySetInnerHTML: {
                                __html: products?.text
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "products__list",
                    children: products?.list?.map((pr, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ProductCat__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            pr: pr,
                            isDark: (i + 1) % 2 == 0,
                            buttonTitle: products?.buttonTitle
                        }, i))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "products__slider",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_CustomSlider__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        slidesToShow: width > 576 ? 2 : 1,
                        slidesToScroll: width > 576 ? 2 : 1,
                        showArrows: false,
                        variableWidth: true,
                        infinite: false,
                        children: products?.list?.map((pr, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ProductCat__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                pr: pr,
                                isDark: (i + 1) % 2 == 0,
                                buttonTitle: products?.buttonTitle
                            }, i))
                    })
                })
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Products);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7179:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4009);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5975);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__]);
react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const TextBlock = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(()=>{
    const { content: { block2  } ,  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_4__/* .useContentState */ .b3)();
    const { ref , inView , entry  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView)({
        threshold: 0.4,
        triggerOnce: true
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "intro-text",
        ref: ref,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("intro-text__text", inView && "animated"),
            dangerouslySetInnerHTML: {
                __html: block2?.text
            }
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextBlock);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ getHome)
/* harmony export */ });
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9787);

const getHome = async ()=>{
    const header = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getHeader */ .Pg)(), footer = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getFooter */ .PX)(), content = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getHomePage */ .tn)(), countrypop = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getCountryPop */ .Pc)(), news = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getNews */ .dD)();
    return {
        header,
        footer,
        content,
        countrypop,
        news
    };
};


/***/ }),

/***/ 5075:
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
/* harmony import */ var _components_pages_home_Intro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6655);
/* harmony import */ var _components_pages_home_TextBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7179);
/* harmony import */ var _components_pages_home_Services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8621);
/* harmony import */ var _components_pages_home_BookBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3510);
/* harmony import */ var _components_pages_home_Products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7819);
/* harmony import */ var _components_pages_home_News__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3664);
/* harmony import */ var _components_pages_home_FollowUs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4534);
/* harmony import */ var _api_getHome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7777);
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4367);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_pages_home_Intro__WEBPACK_IMPORTED_MODULE_5__, _components_pages_home_TextBlock__WEBPACK_IMPORTED_MODULE_6__, _components_pages_home_Services__WEBPACK_IMPORTED_MODULE_7__, _components_pages_home_BookBlock__WEBPACK_IMPORTED_MODULE_8__, _components_pages_home_Products__WEBPACK_IMPORTED_MODULE_9__, _components_pages_home_News__WEBPACK_IMPORTED_MODULE_10__, _components_pages_home_FollowUs__WEBPACK_IMPORTED_MODULE_11__, _components_common_Layout__WEBPACK_IMPORTED_MODULE_13__]);
([_components_pages_home_Intro__WEBPACK_IMPORTED_MODULE_5__, _components_pages_home_TextBlock__WEBPACK_IMPORTED_MODULE_6__, _components_pages_home_Services__WEBPACK_IMPORTED_MODULE_7__, _components_pages_home_BookBlock__WEBPACK_IMPORTED_MODULE_8__, _components_pages_home_Products__WEBPACK_IMPORTED_MODULE_9__, _components_pages_home_News__WEBPACK_IMPORTED_MODULE_10__, _components_pages_home_FollowUs__WEBPACK_IMPORTED_MODULE_11__, _components_common_Layout__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const Home = (0,mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(({ hydrationData: props  })=>{
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_common_Layout__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                isMain: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_home_Intro__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_home_TextBlock__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_home_Services__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_home_BookBlock__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_home_Products__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_home_News__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_home_FollowUs__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
async function getStaticProps() {
    const response = await (0,_api_getHome__WEBPACK_IMPORTED_MODULE_12__/* .getHome */ .e)();
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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5975,7077,3438,6184,4534,3680], () => (__webpack_exec__(5075)));
module.exports = __webpack_exports__;

})();