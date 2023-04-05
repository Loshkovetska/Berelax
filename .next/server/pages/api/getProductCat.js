"use strict";
(() => {
var exports = {};
exports.id = 7063;
exports.ids = [7063];
exports.modules = {

/***/ 6211:
/***/ ((module) => {

module.exports = require("mobx");

/***/ }),

/***/ 4956:
/***/ ((module) => {

module.exports = require("reading-time");

/***/ }),

/***/ 7880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProductCat": () => (/* binding */ getProductCat)
/* harmony export */ });
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5079);

const getProductCat = async (cat)=>{
    const pg = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getProductsCat */ .iB)();
    const page = pg.find((p)=>p.slug == cat);
    const products = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getProducts */ .Xp)();
    const { header , footer , countrypop  } = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getHeader */ .Pg)(), { content , seo  } = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getProductCatPage */ .fm)(page.id), cards = products.filter((c)=>c.category == cat);
    return {
        header,
        footer,
        content,
        countrypop,
        cards,
        seo
    };
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5079], () => (__webpack_exec__(7880)));
module.exports = __webpack_exports__;

})();