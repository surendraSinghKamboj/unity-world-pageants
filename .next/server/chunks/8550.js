"use strict";
exports.id = 8550;
exports.ids = [8550];
exports.modules = {

/***/ 8550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const contestantSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    occupation: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    biography: {
        type: String,
        required: true
    },
    volunteerCharityProject: {
        type: String,
        required: true
    },
    reasonForEnteringPageant: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default: 0,
        select: false
    },
    images: {
        type: [
            String
        ],
        select: false
    },
    hobbies: {
        type: [
            String
        ],
        required: true
    },
    awards: {
        type: [
            String
        ],
        required: false
    }
});
(mongoose__WEBPACK_IMPORTED_MODULE_0___default().models) = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Contestant", contestantSchema));


/***/ })

};
;