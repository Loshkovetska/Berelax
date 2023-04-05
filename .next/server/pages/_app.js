"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 5656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5975);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stores_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4812);






function MyApp({ Component , pageProps  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        function get_browser() {
            var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if (/trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                return {
                    name: "IE",
                    version: tem[1] || ""
                };
            }
            if (M[1] === "Chrome") {
                tem = ua.match(/\bOPR|Edge\/(\d+)/);
                if (tem != null) {
                    return {
                        name: "Opera",
                        version: tem[1]
                    };
                }
            }
            M = M[2] ? [
                M[1],
                M[2]
            ] : [
                navigator.appName,
                navigator.appVersion,
                "-?"
            ];
            if ((tem = ua.match(/version\/(\d+)/i)) != null) {
                M.splice(1, 1, tem[1]);
            }
            return {
                name: M[0],
                version: M[1]
            };
        }
        if (get_browser().version <= "83" && get_browser().name == "Chrome" || get_browser().version <= "14" && get_browser().name == "Safari" || get_browser().version <= "62" && get_browser().name == "Firefox" || get_browser().version <= "69" && get_browser().name == "Opera") {
            document.querySelector("body")?.classList.add("old-device");
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        let vh = window.innerHeight * 0.01;
        const s = document.querySelector("html");
        if (!s) return;
        s.style.setProperty("--viewport-height", `${vh}px`);
        window.addEventListener("resize", function(e) {
            let vh = window.innerHeight * 0.01;
            s.style.setProperty("--viewport-height", `${vh}px`);
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (sessionStorage.getItem("locale")) {
            const locale = JSON.parse(sessionStorage.getItem("locale"));
            if (locale.country) {
                (0,_stores_GlobalState__WEBPACK_IMPORTED_MODULE_3__/* .changeLocale */ .wo)();
            }
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hooks_RootStoreProvider__WEBPACK_IMPORTED_MODULE_1__/* .RootStoreProvider */ .LD, {
        hydrationData: pageProps?.hydrationData,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);


/***/ }),

/***/ 6211:
/***/ ((module) => {

module.exports = require("mobx");

/***/ }),

/***/ 5944:
/***/ ((module) => {

module.exports = require("mobx-react-lite");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4956:
/***/ ((module) => {

module.exports = require("reading-time");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7378], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();