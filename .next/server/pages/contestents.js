"use strict";
(() => {
var exports = {};
exports.id = 6906;
exports.ids = [6906];
exports.modules = {

/***/ 1184:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _websitecontent_contries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7659);
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9016);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1042);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__]);
axios__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const RegisterUser = ({ switcher  })=>{
    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Submit");
    const inputs = [
        {
            type: "text",
            name: "name",
            placeholder: "Full name"
        },
        {
            type: "email",
            name: "email",
            placeholder: "E-mail"
        },
        {
            type: "text",
            name: "mobile",
            placeholder: "Conatct number"
        }
    ];
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const handleChange = (e)=>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async ()=>{
        const { name , email , mobile , country , password  } = data;
        if (!name || !email || !mobile || !password || !country) {
            setText("All feildes are medatory");
        } else if (mobile.length !== 10) {
            setText("Please enter correct mobile number");
        } else {
            try {
                setStatus("Sending");
                const response = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].post(`/api/users/register`, {
                    name,
                    email,
                    mobile: `+${country}-${mobile}`,
                    password
                });
                setStatus("Submit");
                setText(response.data.message);
                if (response.data.message === "Account created successfully.") {
                    switcher("old");
                }
            } catch (error) {
                setStatus("Submit");
                console.log("error");
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setTimeout(()=>setText(""), 3000);
    }, [
        text
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col justify-center items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Alert__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                text: text
            }),
            inputs && inputs.map(({ type , name , placeholder  }, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: type,
                    placeholder: placeholder,
                    name: name,
                    onChange: (e)=>handleChange(e),
                    className: "rounded-lg px-2 border-2 mt-2 border-white bg-slate-800 py-1 w-72"
                }, index)),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                name: "country",
                id: "country",
                onChange: (e)=>handleChange(e),
                className: "rounded-lg px-2 border-2 mt-2 border-white bg-slate-800 py-1 w-72",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: null,
                        className: "text-white w-72 overflow-x-hidden",
                        children: "Select Country"
                    }),
                    _websitecontent_contries__WEBPACK_IMPORTED_MODULE_2__/* ["default"].map */ .Z.map(({ countryName , code  }, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: code,
                            className: "text-white w-72 overflow-x-hidden hover:bg-[#350200]",
                            children: countryName
                        }, index))
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "password",
                placeholder: "Enter Password",
                name: "password",
                onChange: (e)=>handleChange(e),
                className: "rounded-lg px-2 border-2 mt-2 border-white bg-slate-800 py-1 w-72"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "mt-4 border-2 shadow-md shadow-white active:translate-y-1 active:shadow-none transition-all duration-500 px-4 rounded-md py-1 hover:opacity-80  hover:text-white",
                onClick: handleSubmit,
                children: status
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterUser);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3863:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9016);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _websitecontent_content__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4252);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(270);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7623);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_LoginUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(140);
/* harmony import */ var _components_RegisterUser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1184);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_4__, _components_Navbar__WEBPACK_IMPORTED_MODULE_7__, _components_LoginUser__WEBPACK_IMPORTED_MODULE_10__, _components_RegisterUser__WEBPACK_IMPORTED_MODULE_11__, react_toastify__WEBPACK_IMPORTED_MODULE_12__]);
([axios__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_4__, _components_Navbar__WEBPACK_IMPORTED_MODULE_7__, _components_LoginUser__WEBPACK_IMPORTED_MODULE_10__, _components_RegisterUser__WEBPACK_IMPORTED_MODULE_11__, react_toastify__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable react-hooks/rules-of-hooks */ /* eslint-disable @next/next/no-img-element */ 













const contestents = ({ data  })=>{
    // const [data, setData] = useState([]);
    const [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [viewData, setViewData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const [fetchedImages, setFetchedImages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [viewImage, setViewImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [voting, setVoting] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const [logPage, setLogPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("new");
    const handleView = async (id)=>{
        setView(true);
        const [item] = data.filter((item)=>item._id === id ? item : null);
        setViewData(item);
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`/api/contestents/getImages?id=${id}`);
            if (res) {
                const fetchedImagesResult = res.data.response.images;
                setViewImage(fetchedImagesResult[0]);
                setFetchedImages(fetchedImagesResult);
            }
        } catch (error) {
            console.log("fail to fetch images");
        }
    };
    const voteNow = async (id)=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].post(`/api/contestents/votes`, {
                id
            });
            if (response?.response?.status) console.log(response.response.status);
            if (response.data) {
                const mesg = response.data.message;
                if (mesg === "Voting successfull.") {
                    react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success(response.data.message);
                } else {
                    react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.info(response.data.message);
                }
            }
        } catch (error) {
            setLogPage(true);
        }
    };
    // useEffect(() => {
    // 	const getSetting = async () => {
    // 		try {
    // 			const response = await axios.get("/api/settings/voting");
    // 			if (response) {
    // 				setVoting(response.data.status);
    // 			}
    // 		} catch (error) {
    // 			console.log(error);
    // 		}
    // 	};
    // 	getSetting();
    // }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const fetchData = async ()=>{
            try {
                const result = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/api/contestents/toClient");
                if (result) {
                    setData(result.data);
                }
            } catch (error) {}
        };
        fetchData();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Unity World Pageants || Contestents"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: _websitecontent_content__WEBPACK_IMPORTED_MODULE_13__/* .seoDescription */ .l
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_12__.ToastContainer, {}),
            logPage ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "fixed translate-x-[-50%] border-2 border-white translate-y-[-50%] text-white bg-[#350200] top-[50%] left-[50%] md:w-1/2 h-[80vh] w-[90%]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillCloseCircle, {
                            onClick: ()=>setLogPage(false),
                            className: "absolute right-1 top-1 hover:rotate-180 text-white hover:scale-110 transition-all duration-500 cursor-pointer"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col justify-around items-center mt-3",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex w-full justify-around items-center mt-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        onClick: ()=>setType("new"),
                                        className: "list-none cursor-pointer",
                                        children: "Register"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        onClick: ()=>setType("old"),
                                        className: "list-none cursor-pointer",
                                        children: "Login"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative h-1 w-full bg-slate-800",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `w-[50%] transition-all duration-500 absolute h-1 bg-white ${type === "new" ? "left-0" : "left-[50%]"}`
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_9___default()), {
                                src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
                                alt: "logo",
                                width: 100
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: type === "old" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LoginUser__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RegisterUser__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            switcher: setLogPage
                        })
                    })
                ]
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-1 uppercase py-2 text-white bg-[#350200] text-center",
                children: "contestents"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex w-[90%] md:w-[80%] md:justify-center m-auto gap-4 mt-3 justify-center items-center flex-wrap",
                children: data && data.map((item)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-48 hover:shadow-md shadow-[#350200]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: item.image,
                                alt: item.name,
                                className: "rounded-xl"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-center",
                                children: item.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "w-full bg-[#350200] text-white hover:opacity-80 my-3 text-center",
                                onClick: ()=>handleView(item._id),
                                children: "View Details"
                            }),
                            voting && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "w-full bg-green-600 text-white hover:opacity-80 text-center",
                                onClick: ()=>{
                                    voteNow(item._id);
                                // setLogPage(true);
                                },
                                children: "Vote Now"
                            })
                        ]
                    }, item._id);
                })
            }),
            view ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                initial: {
                    scale: 0
                },
                animate: {
                    scale: 1
                },
                className: "md:flex md:flex-row gap-4 flex flex-col fixed top-0 w-full min-h-screen bg-[#350200]",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "md:flex md:w-[90%] md:flex-row m-auto gap-4 flex flex-col top-0 w-full min-h-screen bg-[#350200]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineClose, {
                            onClick: ()=>{
                                setView(false);
                                setViewData({});
                            },
                            className: "text-3xl text-white rounded-full cursor-pointer hover:text-black hover:rotate-180 transition-all duration-500 hover:bg-white absolute top-4 right-4"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-[40%] mt-[40px] flex justify-center flex-col items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    alt: viewData.name,
                                    src: viewImage,
                                    className: "h-96"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex justify-center gap-1 mt-2",
                                    children: fetchedImages && fetchedImages.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: item,
                                            alt: viewData.name,
                                            className: `w-[30%] rounded-xl ${viewImage === item ? "opacity-100 scale-100" : "opacity-50 scale-75"} cursor-pointer transition-all duration-500`,
                                            onClick: ()=>setViewImage(item)
                                        }, index))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-[60%] mt-[40px] text-white",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "w-40",
                                            children: "Name"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "ml-3",
                                            children: viewData.name
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "w-40",
                                            children: "Title"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "ml-3",
                                            children: viewData.title
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "w-40",
                                            children: "Age"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "ml-3",
                                            children: [
                                                viewData.age,
                                                " Years"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "w-40",
                                            children: "Height"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "ml-3",
                                            children: [
                                                viewData.height,
                                                "cms"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "w-40",
                                            children: "Occupation"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "ml-3",
                                            children: viewData.occupation
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "w-40",
                                            children: "Hobbies"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "ml-3",
                                            children: viewData.hobbies && viewData.hobbies.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: item
                                                }, index))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "w-40",
                                            children: "Awards"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "ml-3",
                                            children: viewData.awards && viewData.awards.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: item
                                                }, index))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "w-40",
                                            children: "Biography"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "ml-4",
                                            children: viewData.biography
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "w-40",
                                            children: "Volunteer / Charity Project"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "ml-4",
                                            children: viewData.volunteerCharityProject
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "w-40",
                                            children: "Reason for entering the pageant"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "ml-4",
                                            children: viewData.reasonForEnteringPageant
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
        ]
    });
};
const getServerSideProps = async ()=>{
    try {
        console.log("first");
        const response = await fetch(`${process.env.DOMAIN_NAME}/api/contestents/toClient`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return {
            props: {
                data
            }
        };
    } catch (error) {
        console.error(error);
        return {
            notFound: true
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contestents);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 8098:
/***/ ((module) => {

module.exports = require("react-icons/ri");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,2636,5675,9829], () => (__webpack_exec__(3863)));
module.exports = __webpack_exports__;

})();