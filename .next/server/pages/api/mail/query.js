"use strict";
(() => {
var exports = {};
exports.id = 1383;
exports.ids = [1383];
exports.modules = {

/***/ 99:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 1334:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

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
    const { name , email , mobile , message  } = req.body;
    if (req.method === "POST") {
        try {
            const info = await transporter.sendMail({
                from: process.env.USER_E_MAIL,
                to: process.env.RECIVE_E_MAIL,
                subject: "Query From UWP",
                html: `
              <html>
                <head>
                  <link rel="stylesheet" href="/style.css">
                </head>
                <style>
                  .container{
                      display:flex;
                      justify-content:center;
                      align-items:center;
                      width:100%;
                      gap:1%;
                  }
                </style>
                <body>
                  <h3>Query from UWP</h3>
                  <div class="container">
                  <table>
                    <th>
                      <tr>
                          <td>Title</td>
                          <td>Detail</td>
                      </tr>
                    </th>
                      <tbody>
                        
                        <tr><td>Full Name</td><td>${name}</td></tr>
                        
                        <tr><td>Email Address</td><td>${email}</td></tr>
                        <tr><td>Phone</td><td>${mobile}</td></tr>
                        <tr><td>Message</td><td>${message}</td></tr>
                      </tbody>
                    </table>
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1334));
module.exports = __webpack_exports__;

})();