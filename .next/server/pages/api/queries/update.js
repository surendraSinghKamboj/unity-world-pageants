"use strict";
(() => {
var exports = {};
exports.id = 1529;
exports.ids = [1529];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1757);
/* harmony import */ var _middlewares_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7133);


const handler = async (req, res)=>{
    if (req.method === "PUT") {
        const { id  } = req.body;
        try {
            const resolveType = req.headers["resolve-type"];
            const query = await _models_query__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOneAndUpdate */ .Z.findOneAndUpdate({
                _id: id
            }, {
                resolved: !resolveType
            });
            if (query) {
                res.status(201).json({
                    success: true,
                    message: "message sent successfull.",
                    result: query
                });
            }
        } catch (error) {
            console.error("Query request failed");
            res.status(401).json({
                success: false,
                message: "Query request failed."
            });
        }
    } else {
        res.status(404).json({
            message: "Bad request"
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middlewares_connectDb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(handler));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5046], () => (__webpack_exec__(6106)));
module.exports = __webpack_exports__;

})();