"use strict";
exports.id = 491;
exports.ids = [491];
exports.modules = {

/***/ 7766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_RetailMap)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@react-google-maps/api"
var api_ = __webpack_require__(2433);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./assets/find/loc.png
var loc = __webpack_require__(2400);
;// CONCATENATED MODULE: ./assets/retail/shop.png
/* harmony default export */ const shop = ({"src":"/_next/static/media/shop.7ef1ebb9.png","height":192,"width":192,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2ElEQVR42mOQz5rMxAAEStmTpXVzJ9fpZU+os8ztlwaJaaZ2guUYFLKnyIllTHrBEN3xnyGo4T9DRMMLg5RWWQYY4EufUK2eNfH/3LV7vy/bcvB7UsOM/wxOhdUMcODVkJrRvvD/odNXfvcv3PTbPL3tP0NgeSoDHMR3iEkld37VSOn4z+Bd/p8huPKrXkKdGFiOO76NBURzJbTVMsQ0/RePqf8vEFlTCxITiqplYRBJaGWEGSQY13SWM6ruLIzPHlENkeOJawZ7hzemUZ43tkkebGJUHVgMAIx1R+e1quGsAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./hooks/getWindowDimensions.tsx
var getWindowDimensions = __webpack_require__(4219);
// EXTERNAL MODULE: ./mocks/map.ts
var map = __webpack_require__(6280);
// EXTERNAL MODULE: ./stores/GlobalState.ts
var GlobalState = __webpack_require__(4812);
// EXTERNAL MODULE: ./components/common/IconComponent/index.tsx
var IconComponent = __webpack_require__(9286);
;// CONCATENATED MODULE: ./components/common/RetailMap/index.tsx









const containerStyle = {
    width: "100%",
    height: "100%"
};
const RetailMap = ({ results , location , setPos  })=>{
    const mapRef = (0,external_react_.useRef)(null);
    const { 0: zoom , 1: setZoom  } = (0,external_react_.useState)(2);
    const { 0: currentPosition , 1: setPosition  } = (0,external_react_.useState)(null);
    const { 0: center , 1: setCenter  } = (0,external_react_.useState)({
        lat: 40.866667,
        lng: 34.566667
    });
    let { isLoaded  } = (0,api_.useJsApiLoader)({
        googleMapsApiKey: "AIzaSyDGhdmlq3VJzRbKTvQ9zvmvN1-nqA8Q1bU"
    });
    (0,external_react_.useEffect)(()=>{
        if (!mapRef.current) return;
        requestAnimationFrame(()=>{
            mapRef.current?.panTo(new window.google.maps.LatLng(+location?.lat, +location?.lng));
            setTimeout(()=>{
                setCenter({
                    lat: +location?.lat || 0,
                    lng: +location?.lng || 0
                });
            }, 500);
        });
    }, [
        location
    ]);
    const { width , height  } = (0,getWindowDimensions/* useWindowDimensions */.d)();
    if (!isLoaded) return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "map"
    });
    const locatorSizes = width > 1024 ? 48 : width <= 1024 && width > 900 ? 38 : 32;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "map",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "map__zooms",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "map__zoom in",
                        onClick: ()=>setZoom(zoom + 1),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(IconComponent/* IconComponent */.o, {
                            name: "menu/Plus"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "map__zoom out",
                        onClick: ()=>{
                            if (zoom) {
                                setZoom(zoom - 1);
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(IconComponent/* IconComponent */.o, {
                            name: "find/Minus"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(api_.GoogleMap, {
                mapContainerStyle: containerStyle,
                center: center,
                zoom: zoom,
                onLoad: (map)=>{
                    mapRef.current = map;
                },
                onUnmount: (map)=>{
                    mapRef.current = map;
                },
                options: {
                    styles: map/* default */.Z,
                    zoomControl: false,
                    mapTypeControl: false,
                    scaleControl: true,
                    panControl: true,
                    streetViewControl: false,
                    fullscreenControl: false,
                    scrollwheel: true,
                    tilt: 0,
                    disableDefaultUI: true
                },
                onMouseOut: ()=>GlobalState/* default.locoScroll */.ZP.locoScroll && GlobalState/* default.locoScroll.start */.ZP.locoScroll.start(),
                onMouseMove: ()=>GlobalState/* default.locoScroll */.ZP.locoScroll && GlobalState/* default.locoScroll.stop */.ZP.locoScroll.stop(),
                onDrag: ()=>{
                    GlobalState/* default.locoScroll */.ZP.locoScroll && GlobalState/* default.locoScroll.stop */.ZP.locoScroll.stop();
                },
                onDragEnd: ()=>{
                    GlobalState/* default.locoScroll */.ZP.locoScroll && GlobalState/* default.locoScroll.start */.ZP.locoScroll.start();
                },
                onZoomChanged: ()=>{
                    if (mapRef.current) {
                        setZoom(mapRef.current.getZoom());
                    }
                },
                children: results?.map((ci, i)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(api_.Marker, {
                            onClick: ()=>{
                                setPos(ci.coords);
                                requestAnimationFrame(()=>{
                                    mapRef.current?.panTo(new window.google.maps.LatLng(+ci.coords?.lat, +ci.coords?.lng));
                                    setTimeout(()=>{
                                        setCenter({
                                            lat: +ci.coords?.lat,
                                            lng: +ci.coords?.lng
                                        });
                                    }, 500);
                                });
                            },
                            zIndex: 2,
                            icon: {
                                url: ci.isAirport ? loc/* default.src */.Z.src : shop.src,
                                scaledSize: new window.google.maps.Size(locatorSizes, locatorSizes),
                                size: new window.google.maps.Size(locatorSizes, locatorSizes)
                            },
                            position: {
                                lat: +ci.coords?.lat,
                                lng: +ci.coords?.lng
                            }
                        })
                    }, i))
            })
        ]
    });
};
/* harmony default export */ const common_RetailMap = (RetailMap);


/***/ }),

/***/ 1925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "b": () => (/* binding */ LocationCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_ClickOutSide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2811);
/* harmony import */ var _hooks_getWindowDimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4219);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5975);
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9815);
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4812);
/* harmony import */ var _IconComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9286);
/* harmony import */ var _RetailerSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5465);
/* harmony import */ var _RetailMap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7766);
/* harmony import */ var _Title54__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9452);













const RetailPop = (0,mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(()=>{
    const { content  } = (0,_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_6__/* .useContentState */ .b3)();
    const { 0: value , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const { 0: results , 1: setResults  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(Array());
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: showAdd , 1: setShowAdd  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { width  } = (0,_hooks_getWindowDimensions__WEBPACK_IMPORTED_MODULE_5__/* .useWindowDimensions */ .d)();
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const outSide = (0,_hooks_ClickOutSide__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(ref);
    const { 0: currentLocation , 1: setLocation  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        lat: 40.866667,
        lng: 34.566667
    });
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setTimeout(()=>{
            setShow(true);
        }, 300);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (value?.title?.length || value) {
            search(value);
        } else {
            (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_7__/* .retailerLocationsList */ .NG)().then((r)=>{
                setResults(r);
                setShowAdd(false);
            });
        }
    }, [
        value
    ]);
    const search = async (value)=>{
        await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_7__/* .retailerLocationsList */ .NG)().then((r)=>{
            const res = r.filter((c)=>{
                let lc = (c.title + c.text).toLowerCase();
                let searchText = value?.title ? value?.title : value;
                if (lc.includes(searchText?.toLowerCase())) {
                    return c;
                }
            });
            if (res.length) {
                setShowAdd(true);
            }
            setResults(res);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!_stores_GlobalState__WEBPACK_IMPORTED_MODULE_8__/* ["default"].isRetailerOpen */ .ZP.isRetailerOpen) {
            _stores_GlobalState__WEBPACK_IMPORTED_MODULE_8__/* ["default"].locoScroll */ .ZP.locoScroll && _stores_GlobalState__WEBPACK_IMPORTED_MODULE_8__/* ["default"].locoScroll.start */ .ZP.locoScroll.start();
        }
    }, [
        _stores_GlobalState__WEBPACK_IMPORTED_MODULE_8__/* ["default"].isRetailerOpen */ .ZP.isRetailerOpen
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const cards = document.querySelectorAll(".location-card");
        if (cards) {
            cards.forEach((c, i)=>{
                if (c) {
                    const lat = c.dataset.coordlat, lng = c.dataset.coordlng;
                    if (+lat == +currentLocation.lat && +lng == +currentLocation.lng) {
                        c.classList.add("active");
                        c.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            inline: "nearest"
                        });
                    } else c.classList.remove("active");
                }
            });
        }
    }, [
        currentLocation
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (outSide) {
            _stores_GlobalState__WEBPACK_IMPORTED_MODULE_8__/* ["default"].locoScroll */ .ZP.locoScroll && _stores_GlobalState__WEBPACK_IMPORTED_MODULE_8__/* ["default"].locoScroll.start */ .ZP.locoScroll.start();
        }
    }, [
        outSide
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("retail-pop", _stores_GlobalState__WEBPACK_IMPORTED_MODULE_8__/* ["default"].isRetailerOpen */ .ZP.isRetailerOpen && "show"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IconComponent__WEBPACK_IMPORTED_MODULE_9__/* .IconComponent */ .o, {
                name: "menu/close",
                className: "retail-pop__close",
                onClick: _stores_GlobalState__WEBPACK_IMPORTED_MODULE_8__/* .changeRetailerState */ .S
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "retail-pop__container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "retail-pop__map",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("retail-pop__tooltip", show && "show"),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "retail-pop__tooltip-text",
                                        dangerouslySetInnerHTML: {
                                            __html: content?.pop?.tooltip
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IconComponent__WEBPACK_IMPORTED_MODULE_9__/* .IconComponent */ .o, {
                                        name: "menu/close",
                                        className: "retail-pop__tooltip-close",
                                        onClick: ()=>setShow(false)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RetailMap__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                results: results,
                                location: currentLocation,
                                setPos: (value)=>setLocation(value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "retail-pop__right",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Title54__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                text: content?.pop?.title,
                                classStr: "retail-pop__title"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RetailerSelect__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                placeholder: content?.pop?.placeholder,
                                getValue: setState
                            }),
                            value?.title?.length && showAdd ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "retail-pop__subtitle",
                                children: [
                                    results?.length,
                                    " “",
                                    value?.title,
                                    "” locations"
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                            results.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "retail-pop__list",
                                ref: ref,
                                onScroll: ()=>width > 1024 && _stores_GlobalState__WEBPACK_IMPORTED_MODULE_8__/* ["default"].locoScroll */ .ZP.locoScroll && _stores_GlobalState__WEBPACK_IMPORTED_MODULE_8__/* ["default"].locoScroll.stop */ .ZP.locoScroll.stop(),
                                onMouseLeave: ()=>_stores_GlobalState__WEBPACK_IMPORTED_MODULE_8__/* ["default"].locoScroll */ .ZP.locoScroll && _stores_GlobalState__WEBPACK_IMPORTED_MODULE_8__/* ["default"].locoScroll.start */ .ZP.locoScroll.start(),
                                children: results.map((re, id)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LocationCard, {
                                        dt: re,
                                        // setLocation={setLocation}
                                        isActive: currentLocation && currentLocation?.lat == re.coords.lat && currentLocation?.lng == re.coords.lng
                                    }, id))
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                        ]
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RetailPop);
const LocationCard = (0,mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(({ dt , // setLocation,
isActive  })=>{
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!show) {
            ref.current && ref.current.style.setProperty("--text-height", 0 + "px");
        } else {
            ref.current && ref.current.style.setProperty("--text-height", ref.current.scrollHeight + 12 + "px");
        }
    }, [
        show
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("location-card"),
        "data-coordlat": dt.coords.lat,
        "data-coordlng": dt.coords.lng,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "location-card__top",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IconComponent__WEBPACK_IMPORTED_MODULE_9__/* .IconComponent */ .o, {
                        name: "retail/plane",
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("", dt.isAirport && "visible")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IconComponent__WEBPACK_IMPORTED_MODULE_9__/* .IconComponent */ .o, {
                        name: "retail/location",
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("shop", !dt.isAirport && "visible")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "location-card__title",
                        children: dt?.title
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "location-card__content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "location-card__text",
                        children: dt?.text
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("location-card__more", show && "show"),
                        onClick: (e)=>{
                            e.stopPropagation();
                            setShow(!show);
                        },
                        children: [
                            !show ? "See" : "Hide",
                            " Details ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IconComponent__WEBPACK_IMPORTED_MODULE_9__/* .IconComponent */ .o, {
                                name: "ic"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "location-card__addInfo",
                        ref: ref,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "location-card__text",
                                children: dt?.schedule
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "location-card__text",
                                children: dt?.phone
                            })
                        ]
                    })
                ]
            })
        ]
    });
});


/***/ }),

/***/ 5465:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_ClickOutSide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2811);
/* harmony import */ var _hooks_getWindowDimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4219);
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9815);
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4812);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8133);
/* harmony import */ var _IconComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9286);










const RetailerSelect = (0,mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(({ placeholder , getValue  })=>{
    const { 0: userLocation , 1: setLocation  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const outside = (0,_hooks_ClickOutSide__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(ref);
    const { 0: val , 1: setVal  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const { 0: list , 1: setList  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const { width , height  } = (0,_hooks_getWindowDimensions__WEBPACK_IMPORTED_MODULE_5__/* .useWindowDimensions */ .d)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (outside) {
            setOpen(false);
        }
    }, [
        outside
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!open) {
            setList(null);
            _stores_GlobalState__WEBPACK_IMPORTED_MODULE_7__/* ["default"].locoScroll */ .ZP.locoScroll && _stores_GlobalState__WEBPACK_IMPORTED_MODULE_7__/* ["default"].locoScroll.start */ .ZP.locoScroll.start();
        }
    }, [
        open
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (val?.length && val != selected?.title) {
            (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_6__/* .retailerSearch */ .Sv)(val).then((r)=>{
                if (!r.length) {
                    setList(r);
                    setOpen(false);
                    return;
                }
                let res = r.map((c)=>{
                    return {
                        title: c.post_title,
                        text: c.post_content,
                        id: c.ID
                    };
                });
                if (res.length) {
                    setList(res);
                    setOpen(true);
                }
            });
        } else {
            setOpen(false);
            setList(null);
            if (!val.length) {
                setSelected(null);
                getValue(null);
            }
        }
    }, [
        val
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("loc-select", open && "open"),
        ref: ref,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "loc-select__top",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        value: val,
                        placeholder: placeholder,
                        className: "loc-select__input",
                        onChange: (e)=>{
                            setVal(e.target.value);
                            setSelected(null);
                        },
                        autoFocus: open
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        inner: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IconComponent__WEBPACK_IMPORTED_MODULE_9__/* .IconComponent */ .o, {
                                name: "Search"
                            })
                        }),
                        classStr: classnames__WEBPACK_IMPORTED_MODULE_1___default()("beige button-search", "search-btn"),
                        isLink: false,
                        action: ()=>{
                            getValue(selected ? selected : val);
                            setOpen(false);
                        }
                    })
                ]
            }),
            list && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "loc-select__list",
                onScroll: ()=>{
                    _stores_GlobalState__WEBPACK_IMPORTED_MODULE_7__/* ["default"].locoScroll */ .ZP.locoScroll && _stores_GlobalState__WEBPACK_IMPORTED_MODULE_7__/* ["default"].locoScroll.stop */ .ZP.locoScroll.stop();
                },
                onMouseLeave: ()=>_stores_GlobalState__WEBPACK_IMPORTED_MODULE_7__/* ["default"].locoScroll */ .ZP.locoScroll && _stores_GlobalState__WEBPACK_IMPORTED_MODULE_7__/* ["default"].locoScroll.start */ .ZP.locoScroll.start(),
                children: list && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: list?.sort((a, b)=>a.title.localeCompare(b.title)).map((li, id)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "loc-select__subitem",
                            onClick: ()=>{
                                setOpen(false);
                                setSelected(li);
                                setVal(li?.title);
                            },
                            children: li.title
                        }, id))
                })
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RetailerSelect);


/***/ }),

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


/***/ })

};
;