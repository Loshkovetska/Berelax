"use strict";
(() => {
var exports = {};
exports.id = 2896;
exports.ids = [2896];
exports.modules = {

/***/ 6211:
/***/ ((module) => {

module.exports = require("mobx");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getService": () => (/* binding */ getService)
/* harmony export */ });
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8340);

const getService = async (service)=>{
    const header = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getHeader */ .Pg)(), footer = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getFooter */ .PX)(), content = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getServicePage */ ._W)(service), countrypop = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getCountryPop */ .Pc)();
    return {
        header,
        footer,
        content,
        countrypop
    };
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8340], () => (__webpack_exec__(9843)));
module.exports = __webpack_exports__;

})();