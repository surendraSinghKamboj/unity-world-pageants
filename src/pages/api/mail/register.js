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
    const { prefix, category, facebook, instagram, experience, height } = req.body

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
                .p{
                    color:red;
                }
              </style>
              <body>
                <div class="container">
                  <h2>New message from your website</h2>
                  <p class="p">Full name: ${prefix}</p>
                  <p class="p">Category: ${category}</p>
                  <p class="p">Facebook: ${facebook}</p>
                  <p class="p">Instagram: ${instagram}</p>
                  <p class="p">Experience: ${experience}</p>
                  <p class="p">height: ${height}</p>
                </div>
              </body>
            </html>
          `
            });
            console.log('Message sent: %s', info.messageId);
            return res.status(200).json({ message: "Message sent Successfull", message_id: info.messageId })
        } catch (error) {
            console.error(error);
            return res.status(400).json({ message: "Message sent failed" })
        }
    }
}

export default sendEmail;
