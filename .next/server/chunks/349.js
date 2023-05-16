"use strict";
exports.id = 349;
exports.ids = [349];
exports.modules = {

/***/ 349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IH": () => (/* binding */ add),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "cl": () => (/* binding */ removeItem),
/* harmony export */   "le": () => (/* binding */ addMore),
/* harmony export */   "vH": () => (/* binding */ resetHobbies)
/* harmony export */ });
/* unused harmony export update */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    Hobbies: [
        ""
    ],
    Awards: [
        ""
    ]
};
const hobbiesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "hobbies",
    initialState,
    reducers: {
        add: (state, action)=>{
            const { index , value , title  } = action.payload;
            return {
                ...state,
                [title]: state[title].map((item, i)=>{
                    if (i === index) {
                        return value;
                    }
                    return item;
                })
            };
        },
        addMore: (state, action)=>{
            const { category  } = action.payload;
            if (category === "Hobbies") {
                const temp = [
                    ...state.Hobbies
                ];
                temp.push("");
                const newState = {
                    ...state,
                    Hobbies: temp
                };
                return newState;
            } else {
                const temp = [
                    ...state.Awards
                ];
                temp.push("");
                const newState = {
                    ...state,
                    Awards: temp
                };
                return newState;
            }
        },
        removeItem: (state, action)=>{
            const { category , index  } = action.payload;
            if (category === "Hobbies") {
                state.Hobbies.splice(index, 1);
            } else {
                state.Awards.splice(index, 1);
            }
        },
        update: (state, { payload  })=>{
            const tempState = {
                ...state
            };
            state[payload[0]] = payload[1];
            return tempState;
        },
        resetHobbies: (state, { payload  })=>{
            return payload;
        }
    }
});
const { add , addMore , removeItem , update , resetHobbies  } = hobbiesSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hobbiesSlice.reducer);


/***/ })

};
;