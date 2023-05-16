"use strict";
exports.id = 5046;
exports.ids = [5046];
exports.modules = {

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

/***/ 1757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const querySchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    mobile: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true
    },
    resolved: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
(mongoose__WEBPACK_IMPORTED_MODULE_0___default().models) = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("queries", querySchema));


/***/ })

};
;