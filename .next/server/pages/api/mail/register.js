"use strict";
(() => {
var exports = {};
exports.id = 2420;
exports.ids = [2420];
exports.modules = {

/***/ 99:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 6549:
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
    const { prefix , firstName , lastName , imgOne , imgTwo , city , zip , country , email , phone , occupation , lifeAmbition , imgThree , category , facebook , instagram , experience , height , nationalDirector  } = req.body;
    if (req.method === "POST") {
        try {
            const info = await transporter.sendMail({
                from: process.env.USER_E_MAIL,
                to: process.env.RECIVE_E_MAIL,
                subject: "Contestents Registeration request",
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
                img{
                  width:32%;
                }
              </style>
              <body>
                <div class="container">
                  <img alt="${firstName + " " + lastName}" src="${imgOne}">
                  <img alt="${firstName + " " + lastName}" src="${imgTwo}">
                  <img alt="${firstName + " " + lastName}" src="${imgThree}">
                </div>
                <div class="container">
                <table>
                  <th>
                    <tr>
                        <td>Title</td>
                        <td>Detail</td>
                    </tr>
                  </th>
                    <tbody>
                      <tr><td>Prefix</td><td>${prefix}</td></tr>
                      <tr><td>First Name</td><td>${firstName}</td></tr>
                      <tr><td>Last Name</td><td>${lastName}</td></tr>
                      <tr><td>Email Address</td><td>${email}</td></tr>
                      <tr><td>Phone</td><td>${phone}</td></tr>
                      <tr><td>City</td><td>${city}</td></tr>
                      <tr><td>Zip</td><td>${zip}</td></tr>
                      <tr><td>Country</td><td>${country}</td></tr>
                      <tr><td>Facebook</td><td>${facebook}</td></tr>
                      <tr><td>Instagram</td><td>${instagram}</td></tr>
                      <tr><td>Category</td><td>${category}</td></tr>
                      <tr><td>Occupation</td><td>${occupation}</td></tr>
                      <tr><td>Height</td><td>${height}</td></tr>
                      <tr><td>Life ambition</td><td>${lifeAmbition}</td></tr>
                      <tr><td>Experience</td><td>${experience}</td></tr>
                      <tr><td>National Director</td><td>${nationalDirector}</td></tr>
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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6549));
module.exports = __webpack_exports__;

})();