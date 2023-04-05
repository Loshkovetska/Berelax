"use strict";
(() => {
var exports = {};
exports.id = 8911;
exports.ids = [8911];
exports.modules = {

/***/ 6343:
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
/* harmony import */ var _hooks_getWindowDimensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4219);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5975);
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8133);
/* harmony import */ var _common_IconComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9286);
/* harmony import */ var _common_ImageComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9808);
/* harmony import */ var _common_InViewComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2949);
/* harmony import */ var _common_Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2785);
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4812);
/* harmony import */ var _ProductAside__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5389);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_InViewComponent__WEBPACK_IMPORTED_MODULE_9__]);
_common_InViewComponent__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const Intro = (0,mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(()=>{
    const { content  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_5__/* .useContentState */ .b3)();
    const { 0: selectedColor , 1: setColor  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { width  } = (0,_hooks_getWindowDimensions__WEBPACK_IMPORTED_MODULE_4__/* .useWindowDimensions */ .d)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (content?.colors) {
            setColor(content?.colors[0].title);
        }
    }, [
        content?.colors
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "product-intro",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "product-intro__container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "product-intro__gallery",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "product-intro__images",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "product-intro__images-item main",
                                        children: content?.gallery?.map((g, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("image-gallery", g?.color == selectedColor && "active", !g.color && "active"),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ImageComponent__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                    src: g.images[0].src,
                                                    alt: g.images[0].alt
                                                })
                                            }, i))
                                    }),
                                    content?.gallery?.map((g, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                                            children: (g?.color == selectedColor || !g.color) && g.images.slice(1).map((im, id)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("product-intro__images-item"),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ImageComponent__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                        src: im.src,
                                                        alt: im.alt
                                                    })
                                                }, id))
                                        }, i))
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "product-intro__images mobile",
                                children: content?.gallery?.map((g, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                                        children: (g?.color == selectedColor || !g.color) && g.images.map((im, id)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("product-intro__images-item", !id && "main"),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ImageComponent__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                    src: im.src,
                                                    alt: im.alt
                                                })
                                            }, id))
                                    }, i))
                            }),
                            content?.video && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "product-intro__video",
                                dangerouslySetInnerHTML: {
                                    __html: content?.video
                                }
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "product-intro__content",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductAside__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "product-intro__title",
                                    dangerouslySetInnerHTML: {
                                        __html: content?.title
                                    }
                                }),
                                content?.colors && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "product-intro__colors",
                                    children: content?.colors?.map((re, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("product-intro__colors-item", selectedColor == re.title && "active"),
                                            onClick: ()=>setColor(re.title),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                style: {
                                                    backgroundColor: re.bg
                                                }
                                            })
                                        }, i))
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "product-intro__response-div desk",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "product-intro__text",
                                            dangerouslySetInnerHTML: {
                                                __html: content?.text
                                            }
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "product-intro__btns",
                                            children: [
                                                !content?.buttonLink1.includes("#") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    classStr: "beige button-arrow button-svg p20p24",
                                                    isLink: true,
                                                    link: content?.buttonLink1,
                                                    target: true,
                                                    inner: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            content?.buttonTitle1,
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_IconComponent__WEBPACK_IMPORTED_MODULE_7__/* .IconComponent */ .o, {
                                                                name: "arrow"
                                                            })
                                                        ]
                                                    })
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "product-intro__link",
                                                    onClick: _stores_GlobalState__WEBPACK_IMPORTED_MODULE_11__/* .changeRetailerState */ .S,
                                                    children: content?.buttonTitle2
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "product-intro__bottom",
                                            children: content?.characteristicsList?.map((li, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Text__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                            classStr: "product-intro__bottom-title",
                                                            text: li?.title
                                                        }),
                                                        li?.list?.map((l, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "product-intro__bottom-item",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "product-intro__bottom-sub",
                                                                        children: l.title
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "product-intro__bottom-param",
                                                                        children: l.text
                                                                    })
                                                                ]
                                                            }, idx))
                                                    ]
                                                }, i))
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "product-intro__response-div mob",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_common_InViewComponent__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "product-intro__text",
                                dangerouslySetInnerHTML: {
                                    __html: content?.text
                                }
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "product-intro__btns",
                                children: [
                                    !content?.buttonLink1.includes("#") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        classStr: "beige button-arrow button-svg p20p24",
                                        isLink: true,
                                        link: content?.buttonLink1,
                                        target: true,
                                        inner: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                content?.buttonTitle1,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_IconComponent__WEBPACK_IMPORTED_MODULE_7__/* .IconComponent */ .o, {
                                                    name: "arrow"
                                                })
                                            ]
                                        })
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "product-intro__link",
                                        onClick: _stores_GlobalState__WEBPACK_IMPORTED_MODULE_11__/* .changeRetailerState */ .S,
                                        children: content?.buttonTitle2
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "product-intro__bottom",
                                children: content?.characteristicsList?.map((li, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Text__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                classStr: "product-intro__bottom-title",
                                                text: li?.title
                                            }),
                                            li?.list?.map((l, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "product-intro__bottom-item",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "product-intro__bottom-sub",
                                                            children: l.title
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "product-intro__bottom-param",
                                                            children: l.text
                                                        })
                                                    ]
                                                }, idx))
                                        ]
                                    }, i))
                            }),
                            content?.video && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "product-intro__video",
                                dangerouslySetInnerHTML: {
                                    __html: content?.video
                                }
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

/***/ 5389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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




const ProductAside = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(({ content  })=>{
    const translate = (scroll)=>{
        const smooth = document.querySelector(".smooth"), container = document?.querySelector(".product-intro__container"), vect = document.querySelector(".product-intro__scroll");
        if (!smooth || !container || !vect) return;
        var bodyRect = smooth.getBoundingClientRect(), elemRect = container.getBoundingClientRect(), offset = elemRect.top - bodyRect.top, offsetBottom = offset + elemRect.height - vect.getBoundingClientRect().height;
        if (scroll.y >= offset && scroll.y <= offsetBottom) {
            requestAnimationFrame(()=>{
                vect.style.transform = `translate3d(0, ${scroll.y - offset}px, 0)`;
            });
        } else if (scroll.y < offset) {
            requestAnimationFrame(()=>{
                vect.style.transform = `translate3d(0, ${0}px, 0)`;
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (window.innerWidth <= 1023 || window.innerWidth > 1023 && _stores_GlobalState__WEBPACK_IMPORTED_MODULE_3__/* ["default"].isTouch */ .ZP.isTouch) return;
        if (!_stores_GlobalState__WEBPACK_IMPORTED_MODULE_3__/* ["default"].isTouch */ .ZP.isTouch) {
            _stores_GlobalState__WEBPACK_IMPORTED_MODULE_3__/* ["default"].locoScroll */ .ZP.locoScroll && _stores_GlobalState__WEBPACK_IMPORTED_MODULE_3__/* ["default"].locoScroll.on */ .ZP.locoScroll.on("scroll", ({ scroll  })=>{
                translate(scroll);
            });
        } else {
        // window.addEventListener('scroll', () => {
        //   translate({
        //     y: window.scrollY,
        //   })
        // })
        }
    }, [
        _stores_GlobalState__WEBPACK_IMPORTED_MODULE_3__/* ["default"].locoScroll */ .ZP.locoScroll,
        _stores_GlobalState__WEBPACK_IMPORTED_MODULE_3__/* ["default"].isTouch */ .ZP.isTouch
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "product-intro__scroll",
        children: content
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductAside);


/***/ }),

/***/ 6062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ getProduct)
/* harmony export */ });
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9815);

const getProduct = async (service)=>{
    const products = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getProducts */ .Xp)();
    const page = products.find((p)=>p.slug == service);
    const { header , footer , countrypop  } = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getHeader */ .Pg)(), { content , seo  } = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getProductPage */ .WP)(page.id);
    return {
        header,
        footer,
        content,
        countrypop,
        seo
    };
};


/***/ }),

/***/ 9584:
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
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4367);
/* harmony import */ var _api_getProduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6062);
/* harmony import */ var _components_pages_product_Intro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6343);
/* harmony import */ var _components_pages_service_Benefits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(785);
/* harmony import */ var _components_pages_location_Banner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2749);
/* harmony import */ var _components_pages_service_Similiar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9227);
/* harmony import */ var _components_common_RetailPop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1925);
/* harmony import */ var _components_common_SeoBlock__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_Layout__WEBPACK_IMPORTED_MODULE_5__, _components_pages_product_Intro__WEBPACK_IMPORTED_MODULE_7__, _components_pages_service_Benefits__WEBPACK_IMPORTED_MODULE_8__, _components_pages_location_Banner__WEBPACK_IMPORTED_MODULE_9__, _components_pages_service_Similiar__WEBPACK_IMPORTED_MODULE_10__]);
([_components_common_Layout__WEBPACK_IMPORTED_MODULE_5__, _components_pages_product_Intro__WEBPACK_IMPORTED_MODULE_7__, _components_pages_service_Benefits__WEBPACK_IMPORTED_MODULE_8__, _components_pages_location_Banner__WEBPACK_IMPORTED_MODULE_9__, _components_pages_service_Similiar__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_SeoBlock__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                seo: props.seo
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_common_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                delay: 1,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_product_Intro__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_service_Benefits__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_location_Banner__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        theme: "blue"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pages_service_Similiar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        isProduct: true
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_RetailPop__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreatmentsCategoryPage);
async function getStaticPaths() {
    const list = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_4__/* .getProducts */ .Xp)();
    const paths = [];
    list?.map((li)=>{
        paths.push({
            params: {
                category: li.category,
                slug: li.slug,
                path: li.link
            }
        });
    });
    return {
        paths: paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const response = await (0,_api_getProduct__WEBPACK_IMPORTED_MODULE_6__/* .getProduct */ .w)(params.slug) || null;
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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,7378,991,2749,2804,8510,491,5789], () => (__webpack_exec__(9584)));
module.exports = __webpack_exports__;

})();