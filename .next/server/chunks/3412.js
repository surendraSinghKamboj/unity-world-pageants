"use strict";
exports.id = 3412;
exports.ids = [3412];
exports.modules = {

/***/ 3412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ isAdminAuth)
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


const isAdminAuth = async (Users, res, adminToken)=>{
    const decode = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(adminToken, process.env.JWT_SECRET);
    try {
        const user = await Users.findById(decode._id);
        if (user.admin === true) {
            return true;
        } else {
            const cookieSerialized = cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize("adminToken", "token", {
                httpOnly: true,
                maxAge: 0,
                path: "/"
            });
            res.setHeader("Set-Cookie", cookieSerialized);
            return res.status(404).json({
                status: false,
                message: "You are not admin"
            });
        }
    } catch (error) {
        const cookieSerialized = cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize("adminToken", "token", {
            httpOnly: true,
            maxAge: 0,
            path: "/"
        });
        res.setHeader("Set-Cookie", cookieSerialized);
        return res.status(404).json({
            status: false,
            message: "You are not admin"
        });
    }
};


/***/ })

};
;