"use strict";
(() => {
var exports = {};
exports.id = 4304;
exports.ids = [4304];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 8097:
/***/ ((module) => {

module.exports = require("uniqid");

/***/ }),

/***/ 5478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _middlewares_connectDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7133);
/* harmony import */ var _models_contestants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8550);
/* harmony import */ var _models_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6748);
/* harmony import */ var _middlewares_isAdminAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3412);




const handler = async (req, res)=>{
    if (req.method === "DELETE") {
        const adminToken = req.cookies.adminToken;
        const { id  } = req.query;
        try {
            const result = await (0,_middlewares_isAdminAuth__WEBPACK_IMPORTED_MODULE_3__/* .isAdminAuth */ .z)(_models_users__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, res, adminToken);
            if (result) {
                const response = await _models_contestants__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOneAndDelete */ .Z.findOneAndDelete({
                    _id: id
                });
                if (response) {
                    res.status(203).json({
                        message: "Contestent Deleted...."
                    });
                }
            }
        // logic code 
        } catch (error) {
            return res.status(401).json({
                message: "Data fetching failed"
            });
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middlewares_connectDb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(handler));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5132,8550,3412], () => (__webpack_exec__(5478)));
module.exports = __webpack_exports__;

})();