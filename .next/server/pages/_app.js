(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 4875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "We": () => (/* binding */ resetImage),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "nK": () => (/* binding */ imageFunction)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    imgOne: null,
    imgTwo: null,
    imgThree: null
};
const updateImages = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "update",
    initialState,
    reducers: {
        imageFunction: (state, { payload  })=>{
            const temp = {
                ...state
            };
            temp[payload[0]] = payload[1];
            return temp;
        },
        resetImage: (state, { payload  })=>{
            return payload;
        }
    }
});
const { imageFunction , resetImage  } = updateImages.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateImages.reducer);


/***/ }),

/***/ 4023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./Store/Features/Images.js
var Images = __webpack_require__(4875);
;// CONCATENATED MODULE: ./Store/Features/Title.js

const initialState = "";
const title = (0,toolkit_.createSlice)({
    name: "title",
    initialState,
    reducers: {
        updateTitle: (state, actions)=>{
            return state = actions.payload;
        }
    }
});
const { updateTitle  } = title.actions;
/* harmony default export */ const Title = (title.reducer);

// EXTERNAL MODULE: ./Store/Features/incrementalStorage.js
var incrementalStorage = __webpack_require__(349);
;// CONCATENATED MODULE: ./Store/Store.js




const Store = (0,toolkit_.configureStore)({
    reducer: {
        updateImages: Images/* default */.ZP,
        title: Title,
        hobbies: incrementalStorage/* default */.ZP
    },
    devTools: false
});
/* harmony default export */ const Store_Store = (Store);

// EXTERNAL MODULE: ./src/styles/globals.scss
var globals = __webpack_require__(6961);
// EXTERNAL MODULE: ./src/styles/tailwind.scss
var tailwind = __webpack_require__(513);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
;// CONCATENATED MODULE: ./src/pages/_app.js






function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: Store_Store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 6961:
/***/ (() => {



/***/ }),

/***/ 513:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [349], () => (__webpack_exec__(4023)));
module.exports = __webpack_exports__;

})();