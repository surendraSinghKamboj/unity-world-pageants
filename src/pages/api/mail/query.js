import axios from 'axios';

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
  const { name, email, mobile, message } = req.body;

  if (req.method === "POST") {
    try {
      await axios.post("http://localhost:3000/api/queries/query", { name, email, mobile, message });
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
      return res.status(200).json({ status: true, message: "Message sent Successfull", message_id: info.messageId })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ status: false, message: "Message sent failed" })
    }
  }
}

export default sendEmail;