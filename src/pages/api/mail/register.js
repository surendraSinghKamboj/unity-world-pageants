const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER_E_MAIL,
    pass: process.env.USER_PASS
  }
});

async function sendEmail(req, res) {
  const {
    prefix,
    firstName,
    lastName,
    imgOne,
    imgTwo,
    city,
    zip,
    country,
    email,
    phone,
    occupation,
    lifeAmbition,
    imgThree,
    category,
    facebook,
    instagram,
    experience,
    height,
    nationalDirector
  } = req.body

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
      return res.status(200).json({ status: true, message: "Message sent Successfull", message_id: info.messageId })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ status: false, message: "Message sent failed" })
    }
  }
}

export default sendEmail;
