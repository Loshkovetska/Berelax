"use strict";
(() => {
var exports = {};
exports.id = 9848;
exports.ids = [9848];
exports.modules = {

/***/ 6211:
/***/ ((module) => {

module.exports = require("mobx");

/***/ }),

/***/ 4956:
/***/ ((module) => {

module.exports = require("reading-time");

/***/ }),

/***/ 9995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5079);

const getLocation = async (slug)=>{
    const locts = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getLocations */ .JC)();
    let cu = locts.find((l)=>l.slug == slug);
    const { header , countrypop , footer  } = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getHeader */ .Pg)(), { content , seo  } = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getLocationPage */ .hO)(cu);
    return {
        header,
        footer,
        content,
        countrypop,
        seo
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLocation);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5079], () => (__webpack_exec__(9995)));
module.exports = __webpack_exports__;

})();