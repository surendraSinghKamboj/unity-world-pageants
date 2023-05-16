"use strict";
(() => {
var exports = {};
exports.id = 8428;
exports.ids = [8428];
exports.modules = {

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

/***/ 7441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ voting)
});

// EXTERNAL MODULE: ./middlewares/connectDb.js
var connectDb = __webpack_require__(7133);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./models/settings.js

const settings = new (external_mongoose_default()).Schema({
    voting: {
        type: Boolean,
        default: false
    }
});
(external_mongoose_default()).models = {};
/* harmony default export */ const models_settings = (external_mongoose_default().model("settings", settings));

// EXTERNAL MODULE: ./models/users.js
var users = __webpack_require__(6748);
// EXTERNAL MODULE: ./middlewares/isAdminAuth.js
var isAdminAuth = __webpack_require__(3412);
;// CONCATENATED MODULE: ./src/pages/api/settings/voting.js




const handler = async (req, res)=>{
    if (req.method === "POST") {
        const adminToken = req.cookies.adminToken;
        try {
            const result = await (0,isAdminAuth/* isAdminAuth */.z)(users/* default */.Z, res, adminToken);
            if (result) {
                const response = await models_settings.findOne({
                    _id: process.env.VOTING_ID
                });
                if (response) {
                    const update = await models_settings.findOneAndUpdate({
                        _id: process.env.VOTING_ID
                    }, {
                        voting: !response.voting
                    });
                    if (update) {
                        return res.status(202).json({
                            status: true,
                            message: "Setting Changed users can vote now."
                        });
                    }
                }
            }
        } catch (error) {
            return res.status(401).json({
                message: "Error while changing settings"
            });
        }
    } else if (req.method === "GET") {
        try {
            const response = await models_settings.findOne({
                _id: process.env.VOTING_ID
            });
            if (response) {
                res.status(200).json({
                    status: response.voting
                });
            }
        } catch (error) {
            return res.status(401).json({
                message: "Error while geting settings"
            });
        }
    } else {
        return res.status(404).json({
            message: "Bad Request"
        });
    }
};
/* harmony default export */ const voting = ((0,connectDb/* default */.Z)(handler));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5132,3412], () => (__webpack_exec__(7441)));
module.exports = __webpack_exports__;

})();