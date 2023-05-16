"use strict";
(() => {
var exports = {};
exports.id = 6848;
exports.ids = [6848];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 8097:
/***/ ((module) => {

module.exports = require("uniqid");

/***/ }),

/***/ 8565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _middlewares_connectDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7133);
/* harmony import */ var _models_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6748);


const handler = async (req, res)=>{
    if (req.method === "PUT") {
        const { ide , pde  } = req.body;
        try {
            const user = await _models_users__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(pde);
            if (user.verified) {
                return res.status(200).json({
                    status: true,
                    message: "User already verified"
                });
            } else if (ide === user.verificationId) {
                const verify = await _models_users__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOneAndUpdate */ .Z.findOneAndUpdate({
                    _id: pde
                }, {
                    verified: true
                });
                if (verify) {
                    return res.status(200).json({
                        status: true,
                        message: "User verification successfully."
                    });
                } else {
                    return res.status(300).json({
                        status: true,
                        message: "Verification fail"
                    });
                }
            }
        } catch (error) {
            return res.status(300).json({
                status: true,
                message: "Verification fail"
            });
        }
    } else {
        res.status(300).json({
            message: "Bad request"
        });
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
var __webpack_exports__ = __webpack_require__.X(0, [5132], () => (__webpack_exec__(8565)));
module.exports = __webpack_exports__;

})();