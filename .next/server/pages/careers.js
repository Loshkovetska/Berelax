"use strict";
(() => {
var exports = {};
exports.id = 1698;
exports.ids = [1698];
exports.modules = {

/***/ 2403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _funcs_dates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7380);
/* harmony import */ var _hooks_useScrollPos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7767);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8133);
/* harmony import */ var _IconComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9286);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2785);
/* harmony import */ var _Title40__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6336);








const OfferItem = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(({ item , buttonTitle  })=>{
    const { x , y  } = (0,_hooks_useScrollPos__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const setPos = (x, y)=>{
        sessionStorage.setItem("position", JSON.stringify({
            x,
            y
        }));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        className: "offer",
        onClick: ()=>setPos(0, y),
        href: item.link,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "offer__top",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Title40__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    text: item.title,
                    classStr: "offer__title"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    text: item.text,
                    classStr: "offer__text"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "offer__bottom",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "offer__bottom-locate",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IconComponent__WEBPACK_IMPORTED_MODULE_4__/* .IconComponent */ .o, {
                                    name: "location-point 1"
                                }),
                                " ",
                                item?.location?.length > 0 && item?.location[0].post_title
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "offer__bottom-row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    classStr: "grey p12",
                                    inner: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: item.typeContract
                                    }),
                                    isLink: true,
                                    link: item.link
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "offer__bottom-date",
                                    children: (0,_funcs_dates__WEBPACK_IMPORTED_MODULE_7__/* .getDate */ ._)(item.datetime)
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OfferItem);


/***/ }),

/***/ 5717:
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
/* harmony import */ var _common_CustomSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9742);
/* harmony import */ var _common_ImageComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9808);
/* harmony import */ var _common_InViewComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2949);
/* harmony import */ var _common_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2785);
/* harmony import */ var _common_Title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4353);
/* harmony import */ var _common_Title40__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6336);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_CustomSlider__WEBPACK_IMPORTED_MODULE_3__, _common_InViewComponent__WEBPACK_IMPORTED_MODULE_5__]);
([_common_CustomSlider__WEBPACK_IMPORTED_MODULE_3__, _common_InViewComponent__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Intro = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(()=>{
    const { content  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_2__/* .useContentState */ .b3)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "career-intro",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "career-intro__container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Title__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            text: content?.title,
                            classStr: "career-intro__title"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            text: content?.text,
                            classStr: "career-intro__text"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "career-intro__list",
                    children: content?.blocks?.map((bl, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            delay: 0.1 * i,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "career-intro__item",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "career-intro__item-img",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ImageComponent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            src: bl.img,
                                            alt: bl.alt
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Title40__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        text: bl.title,
                                        classStr: "career-intro__item-title"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "career-intro__item-text",
                                        dangerouslySetInnerHTML: {
                                            __html: bl.text
                                        }
                                    })
                                ]
                            })
                        }, i))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "career-intro__slider",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_CustomSlider__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        showArrows: false,
                        variableWidth: true,
                        infinite: false,
                        children: content?.blocks?.map((bl, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                delay: 0,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "career-intro__item",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "career-intro__item-img",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ImageComponent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                src: bl.img,
                                                alt: bl.alt
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Title40__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            text: bl.title,
                                            classStr: "career-intro__item-title"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "career-intro__item-text",
                                            dangerouslySetInnerHTML: {
                                                __html: bl.text
                                            }
                                        })
                                    ]
                                })
                            }, i))
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

/***/ 6428:
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
/* harmony import */ var _common_InViewComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2949);
/* harmony import */ var _common_MainSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5619);
/* harmony import */ var _common_OfferItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2403);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_InViewComponent__WEBPACK_IMPORTED_MODULE_4__]);
_common_InViewComponent__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Offers = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(()=>{
    const { 0: filters , 1: setFilters  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        p1: [],
        p2: []
    });
    const { content , airports , cards  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_3__/* .useContentState */ .b3)();
    let list = [];
    if (airports) {
        airports.forEach((a)=>{
            a.list.forEach((li)=>{
                list.push(li.title);
            });
        });
        list = Array.from(new Set(list)).sort((a, b)=>a.localeCompare(b));
    }
    // useEffect(() => {
    //   if (content?.offers && !filters.p1?.length) {
    //     setFilters({
    //       ...filters,
    //       p1: content?.offers?.select1[0],
    //     })
    //   }
    // }, [content, filters])
    const results = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        let res = cards;
        if (!filters.p1?.length && !filters.p2?.length) {
            return res;
        }
        if (filters.p1) {
            filters.p1?.forEach((p)=>{
                res = res.filter((r)=>r.type == p);
            });
        }
        if (filters.p2) {
            filters.p2?.forEach((p)=>{
                res = res.filter((r)=>{
                    const s = r.location.find((l)=>l.post_title.includes(p));
                    if (s) {
                        return r;
                    }
                });
            });
        }
        return res;
    }, [
        filters,
        cards
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "offers",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "offers__container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        dangerouslySetInnerHTML: {
                            __html: content?.offers?.title
                        },
                        className: "offers__title"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    delay: 0.3,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "offers__selects",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_MainSelect__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                placeholder: content?.offers?.select1Placeholder,
                                dt: JSON.parse(JSON.stringify(content?.offers?.select1)).sort((a, b)=>a.localeCompare(b)),
                                multiple: true,
                                getValue: (value)=>{
                                    setFilters({
                                        ...filters,
                                        p1: value
                                    });
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_MainSelect__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                multiple: true,
                                placeholder: content?.offers?.select2Placeholder,
                                dt: list,
                                getValue: (value)=>{
                                    setFilters({
                                        ...filters,
                                        p2: value
                                    });
                                }
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "offers__list",
                    children: results?.map((re, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            delay: i * 0.1,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_OfferItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                item: re,
                                buttonTitle: content?.offers?.buttonTitle
                            })
                        }, i))
                })
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Offers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ getCareer)
/* harmony export */ });
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9815);

const getCareer = async ()=>{
    const { header , footer , countrypop  } = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getHeader */ .Pg)(), { content , seo  } = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getCareerPage */ .OW)(), airports = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getSortLocations */ .eq)(), cards = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getVacancies */ .qE)();
    return {
        header,
        footer,
        content,
        countrypop,
        airports,
        cards,
        seo
    };
};


/***/ }),

/***/ 4471:
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
/* harmony import */ var _components_common_SmallPop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1867);
/* harmony import */ var _components_pages_career_Intro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5717);
/* harmony import */ var _api_getCareer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3441);
/* harmony import */ var _components_pages_career_Offers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6428);
/* harmony import */ var _components_pages_career_Follow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1721);
/* harmony import */ var _components_pages_career_ResumeForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8226);
/* harmony import */ var _components_common_SeoBlock__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_Layout__WEBPACK_IMPORTED_MODULE_4__, _components_pages_career_Intro__WEBPACK_IMPORTED_MODULE_6__, _components_pages_career_Offers__WEBPACK_IMPORTED_MODULE_8__, _components_pages_career_Follow__WEBPACK_IMPORTED_MODULE_9__, _components_pages_career_ResumeForm__WEBPACK_IMPORTED_MODULE_10__]);
([_components_common_Layout__WEBPACK_IMPORTED_MODULE_4__, _components_pages_career_Intro__WEBPACK_IMPORTED_MODULE_6__, _components_pages_career_Offers__WEBPACK_IMPORTED_MODULE_8__, _components_pages_career_Follow__WEBPACK_IMPORTED_MODULE_9__, _components_pages_career_ResumeForm__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const CareerPage = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(({ hydrationData: props  })=>{
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_common_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                delay: 1,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_career_Intro__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_career_Offers__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_career_Follow__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_career_ResumeForm__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        isCareerPage: true
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_SmallPop__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CareerPage);
async function getStaticProps() {
    const response = await (0,_api_getCareer__WEBPACK_IMPORTED_MODULE_7__/* .getCareer */ .k)();
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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,7378,991,1867,5619,8725,1721], () => (__webpack_exec__(4471)));
module.exports = __webpack_exports__;

})();