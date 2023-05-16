"use strict";
(() => {
var exports = {};
exports.id = 8394;
exports.ids = [8394];
exports.modules = {

/***/ 99:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 6455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const nodemailer = __webpack_require__(99);
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER_E_MAIL,
        pass: process.env.USER_PASS
    }
});
async function sendEmail(req, res) {
    const { name , email , pde , ide  } = req.body;
    if (req.method === "POST") {
        try {
            const info = await transporter.sendMail({
                from: process.env.USER_E_MAIL,
                to: email,
                subject: "UWP account Verification Email",
                html: `
                <html>
                <head>
                    <link rel="stylesheet" href="/style.css" />
                </head>
                <style>
                    .container {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        width: 100%;
                        gap: 1%;
                    }
                </style>
                <body>
                    <h3>Query from UWP</h3>
                    <div class="container">
                        <h3>Hey, ${name}</h3>
                        <h4>Welcome to Uninty World Pageants</h4>
                        <p>To verify your account Please click below</p>
                        <a target="_blank" href="${process.env.DOMAIN_NAME}/verify/${ide}/${pde}"
                            ><button>Verify now</button></a
                        >
                    </div>
                </body>
            </html>
            `
            });
            return res.status(200).json({
                status: true,
                message: "Message sent Successfull",
                message_id: info.messageId
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                status: false,
                message: "Message sent failed"
            });
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendEmail);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6455));
module.exports = __webpack_exports__;

})();