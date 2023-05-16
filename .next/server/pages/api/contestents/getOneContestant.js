"use strict";
(() => {
var exports = {};
exports.id = 6455;
exports.ids = [6455];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 7133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mongoose = __webpack_require__(1185);
const connectDb = (handler)=>async (req, res)=>{
        if (mongoose.connections[0].readyState) {
            return handler(req, res);
        }
        try {
            const response = await mongoose.connect(process.env.MONGO_URI, {
                dbName: "uwp"
            });
            if (response) {
                console.log("Database connected successfull.");
            }
        } catch (error) {
            console.error(error);
        }
    };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDb);


/***/ }),

/***/ 1321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _middlewares_connectDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7133);
/* harmony import */ var _models_contestants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8550);


const handler = async (req, res)=>{
    if (req.method === "GET") {
        const id = req.query.id;
        try {
            const response = await _models_contestants__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(id).select("-votes -__v").populate({
                path: "images",
                select: "-_id"
            }).lean();
            if (response) {
                res.status(200).json({
                    response
                });
            }
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
var __webpack_exports__ = __webpack_require__.X(0, [8550], () => (__webpack_exec__(1321)));
module.exports = __webpack_exports__;

})();