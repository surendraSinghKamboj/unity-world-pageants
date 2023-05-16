"use strict";
(() => {
var exports = {};
exports.id = 1844;
exports.ids = [1844];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

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

/***/ 7254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6748);
/* harmony import */ var _middlewares_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7133);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2805);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_4__);





const handler = async (req, res)=>{
    if (req.method === "POST") {
        const { email , password  } = req.body;
        console.log(email, password);
        try {
            const user = await _models_users__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOne */ .Z.findOne({
                email
            });
            if (!user) {
                res.status(400).json({
                    success: false,
                    message: "Email-id or password is invailid"
                });
            }
            const verifyPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(password, user.password);
            console.log(verifyPassword);
            if (!verifyPassword) {
                return res.status(404).json({
                    success: false,
                    message: "Email-id or password is invailid"
                });
            }
            const token = (0,_utils_token__WEBPACK_IMPORTED_MODULE_3__/* .sendToken */ .w)(user);
            if (token) {
                const cookieSerialized = cookie__WEBPACK_IMPORTED_MODULE_4___default().serialize("token", token, {
                    httpOnly: true,
                    maxAge: 43200000,
                    path: "/"
                });
                res.setHeader("Set-Cookie", cookieSerialized);
                return res.status(201).json({
                    status: true,
                    message: "Login successfully."
                });
            }
        } catch (error) {}
    } else {
        res.status(404).json({
            message: "Invalid request"
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middlewares_connectDb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(handler));


/***/ }),

/***/ 2805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ sendToken)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

const sendToken = (user)=>{
    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({
        _id: user._id
    }, process.env.JWT_SECRET);
    return token;
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5132], () => (__webpack_exec__(7254)));
module.exports = __webpack_exports__;

})();