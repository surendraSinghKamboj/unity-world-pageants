"use strict";
(() => {
var exports = {};
exports.id = 605;
exports.ids = [605];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 8833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1757);
/* harmony import */ var _middlewares_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7133);


const handler = async (req, res)=>{
    if (req.method === "DELETE") {
        const { id  } = req.body;
        if (!id) {
            res.status(400).json({
                success: false,
                message: "Missing id parameter"
            });
            return;
        }
        try {
            const query = await _models_query__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOneAndDelete */ .Z.findOneAndDelete({
                _id: id
            });
            if (!query) {
                return res.status(404).json({
                    success: false,
                    message: "Query not found"
                });
            }
            res.status(204).json({
                success: true,
                message: "Deleted Successfully"
            });
        } catch (error) {
            console.error("Cannot delete query:", error);
            res.status(500).json({
                success: false,
                message: "delete request failed",
                error: error.message
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
var __webpack_exports__ = __webpack_require__.X(0, [5046], () => (__webpack_exec__(8833)));
module.exports = __webpack_exports__;

})();