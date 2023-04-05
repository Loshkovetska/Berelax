"use strict";
(() => {
var exports = {};
exports.id = 9924;
exports.ids = [9924];
exports.modules = {

/***/ 6211:
/***/ ((module) => {

module.exports = require("mobx");

/***/ }),

/***/ 4956:
/***/ ((module) => {

module.exports = require("reading-time");

/***/ }),

/***/ 6185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCareer": () => (/* binding */ getCareer)
/* harmony export */ });
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5079);

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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5079], () => (__webpack_exec__(6185)));
module.exports = __webpack_exports__;

})();