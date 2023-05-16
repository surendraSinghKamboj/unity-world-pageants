"use strict";
(() => {
var exports = {};
exports.id = 555;
exports.ids = [555];
exports.modules = {

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

/***/ 5607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ votes)
});

// EXTERNAL MODULE: ./middlewares/connectDb.js
var connectDb = __webpack_require__(7133);
// EXTERNAL MODULE: ./models/contestants.js
var contestants = __webpack_require__(8550);
// EXTERNAL MODULE: ./models/users.js
var users = __webpack_require__(6748);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9344);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
;// CONCATENATED MODULE: ./middlewares/isAuth.js

const isAuth = async (token, res, Users)=>{
    const decode = external_jsonwebtoken_default().verify(token, process.env.JWT_SECRET);
    if (!decode) {
        return res.status(300).json({
            status: false
        });
    }
    try {
        const user = await Users.findById(decode._id);
        if (user) {
            return user;
        }
    } catch (error) {
        return res.status(300).json({
            status: false
        });
    }
};

;// CONCATENATED MODULE: ./src/pages/api/contestents/votes.js




const handler = async (req, res)=>{
    if (req.method === "POST") {
        const token = req.cookies.token;
        const { id  } = req.body;
        if (!token) {
            return res.status(300).json({
                message: "User unAuthorized"
            });
        }
        try {
            const user = await isAuth(token, res, users/* default */.Z);
            if (user) {
                if (user.verified) {
                    if (user.voted) {
                        return res.status(200).json({
                            message: "Already Voted."
                        });
                    } else {
                        const update = await users/* default.findOneAndUpdate */.Z.findOneAndUpdate({
                            _id: user.id
                        }, {
                            voted: true
                        });
                        const response = await contestants/* default.findOneAndUpdate */.Z.findOneAndUpdate({
                            _id: id
                        }, {
                            $inc: {
                                votes: 1
                            }
                        });
                        if (response) {
                            return res.status(200).json({
                                message: "Voting successfull."
                            });
                        }
                    }
                } else {
                    return res.status(200).json({
                        message: "Please check your email and verify your email."
                    });
                }
            }
        } catch (error) {
            return res.status(401).json({
                message: "Error while voting....."
            });
        }
    }
};
/* harmony default export */ const votes = ((0,connectDb/* default */.Z)(handler));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5132,8550], () => (__webpack_exec__(5607)));
module.exports = __webpack_exports__;

})();