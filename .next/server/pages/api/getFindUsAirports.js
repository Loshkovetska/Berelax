"use strict";
(() => {
var exports = {};
exports.id = 5249;
exports.ids = [5249];
exports.modules = {

/***/ 6211:
/***/ ((module) => {

module.exports = require("mobx");

/***/ }),

/***/ 4956:
/***/ ((module) => {

module.exports = require("reading-time");

/***/ }),

/***/ 1185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFindUsAirports": () => (/* binding */ getFindUsAirports)
/* harmony export */ });
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5079);

const getFindUsAirports = async (slug)=>{
    const { header , footer , countrypop  } = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getHeader */ .Pg)(), { content  } = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getFindUsPage */ .qK)(), airports = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getSortLocations */ .eq)();
    const cats = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getLocationsCategories */ .RG)();
    const current = cats.find((c)=>c.slug == slug);
    const seo = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getContentByPage */ .OA)("cat-sky", current.id);
    return {
        header,
        footer,
        content,
        airports,
        countrypop,
        seo: seo?.yoast_head
    };
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5079], () => (__webpack_exec__(1185)));
module.exports = __webpack_exports__;

})();