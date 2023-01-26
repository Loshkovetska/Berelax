"use strict";
(() => {
var exports = {};
exports.id = 8418;
exports.ids = [8418];
exports.modules = {

/***/ 6211:
/***/ ((module) => {

module.exports = require("mobx");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getContact": () => (/* binding */ getContact)
/* harmony export */ });
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8340);

const getContact = async ()=>{
    const header = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getHeader */ .Pg)(), footer = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getFooter */ .PX)(), airports = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getLocations */ .JC)(), content = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getContactPage */ .J4)(), countrypop = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getCountryPop */ .Pc)();
    return {
        header,
        footer,
        content,
        countrypop,
        airports
    };
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8340], () => (__webpack_exec__(2819)));
module.exports = __webpack_exports__;

})();