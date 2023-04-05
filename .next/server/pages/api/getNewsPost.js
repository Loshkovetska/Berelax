"use strict";
(() => {
var exports = {};
exports.id = 111;
exports.ids = [111];
exports.modules = {

/***/ 6211:
/***/ ((module) => {

module.exports = require("mobx");

/***/ }),

/***/ 4956:
/***/ ((module) => {

module.exports = require("reading-time");

/***/ }),

/***/ 6188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNewsPost": () => (/* binding */ getNewsPost)
/* harmony export */ });
/* harmony import */ var _stores_ContentState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5079);

const getNewsPost = async (slug)=>{
    const news = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getNews */ .dD)();
    const current = news.find((n)=>n.slug == slug);
    const { header , footer , countrypop  } = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getHeader */ .Pg)(), { seo , content  } = await (0,_stores_ContentState__WEBPACK_IMPORTED_MODULE_0__/* .getNewsPostPage */ .Kv)(current);
    return {
        header,
        footer,
        content,
        countrypop,
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
var __webpack_exports__ = __webpack_require__.X(0, [5079], () => (__webpack_exec__(6188)));
module.exports = __webpack_exports__;

})();