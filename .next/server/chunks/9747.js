"use strict";
exports.id = 9747;
exports.ids = [9747];
exports.modules = {

/***/ 4875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 9747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Store_Features_Images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4875);





const Uploadimage = ({ fetched  })=>{
    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((result)=>result.updateImages);
    const { imgOne , imgTwo , imgThree  } = data;
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    /// Admin panel handler
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (fetched) {
            dispatch((0,_Store_Features_Images__WEBPACK_IMPORTED_MODULE_4__/* .imageFunction */ .nK)([
                "imgOne",
                fetched[0]
            ]));
            dispatch((0,_Store_Features_Images__WEBPACK_IMPORTED_MODULE_4__/* .imageFunction */ .nK)([
                "imgTwo",
                fetched[1]
            ]));
            dispatch((0,_Store_Features_Images__WEBPACK_IMPORTED_MODULE_4__/* .imageFunction */ .nK)([
                "imgThree",
                fetched[2]
            ]));
        }
    }, [
        dispatch,
        fetched
    ]);
    const handleChange = async (e)=>{
        // event blob converter
        if (e.target.name === "fileOne") {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = ()=>{
                dispatch((0,_Store_Features_Images__WEBPACK_IMPORTED_MODULE_4__/* .imageFunction */ .nK)([
                    "imgOne",
                    reader.result
                ]));
            };
            if (file) {
                reader.readAsDataURL(file);
            } else {}
        }
        if (e.target.name === "fileTwo") {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = ()=>{
                dispatch((0,_Store_Features_Images__WEBPACK_IMPORTED_MODULE_4__/* .imageFunction */ .nK)([
                    "imgTwo",
                    reader.result
                ]));
            };
            if (file) {
                reader.readAsDataURL(file);
            } else {}
        }
        if (e.target.name === "fileThree") {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = ()=>{
                dispatch((0,_Store_Features_Images__WEBPACK_IMPORTED_MODULE_4__/* .imageFunction */ .nK)([
                    "imgThree",
                    reader.result
                ]));
            };
            if (file) {
                reader.readAsDataURL(file);
            } else {}
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex justify-center items-center gap-3 my-3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: "fileUploadOne",
                className: " flex justify-start  text-left",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "md:w-36 w-20 flex justify-center items-center flex-col rounded-3xl cursor-pointer h-20 md:h-36 bg-slate-400",
                    children: imgOne ? // eslint-disable-next-line @next/next/no-img-element
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        alt: "img",
                        src: imgOne,
                        className: "md:w-36 w-20 flex justify-center items-center flex-col rounded-3xl cursor-pointer h-20 md:h-36 bg-slate-400"
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineCloudUpload, {
                                className: "text-3xl"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "hidden md:inline",
                                children: "Upload Image"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                onChange: handleChange,
                type: "file",
                name: "fileOne",
                id: "fileUploadOne",
                className: "hidden"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: "fileUploadTwo",
                className: " flex justify-start  text-left",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "md:w-36 w-20 flex justify-center items-center flex-col rounded-3xl cursor-pointer h-20 md:h-36 bg-slate-400",
                    children: imgTwo ? // eslint-disable-next-line @next/next/no-img-element
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        alt: "img",
                        src: imgTwo,
                        className: "md:w-36 w-20 flex justify-center items-center flex-col rounded-3xl cursor-pointer h-20 md:h-36 bg-slate-400"
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineCloudUpload, {
                                className: "text-3xl"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "hidden md:inline",
                                children: "Upload Image"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                onChange: handleChange,
                type: "file",
                name: "fileTwo",
                id: "fileUploadTwo",
                className: "hidden"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: "fileUploadThree",
                className: " flex justify-start  text-left",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "md:w-36 w-20 flex justify-center items-center flex-col rounded-3xl cursor-pointer h-20 md:h-36 bg-slate-400",
                    children: imgThree ? // eslint-disable-next-line @next/next/no-img-element
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        alt: "img",
                        src: imgThree,
                        className: "md:w-36 w-20 flex justify-center items-center flex-col rounded-3xl cursor-pointer h-20 md:h-36 bg-slate-400"
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineCloudUpload, {
                                className: "text-3xl"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "hidden md:inline",
                                children: "Upload Image"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                onChange: handleChange,
                type: "file",
                name: "fileThree",
                id: "fileUploadThree",
                className: "hidden"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Uploadimage);


/***/ })

};
;