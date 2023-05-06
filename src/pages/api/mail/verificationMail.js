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
    const { name, email, pde, ide } = req.body;

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
            return res.status(200).json({ status: true, message: "Message sent Successfull", message_id: info.messageId })
        } catch (error) {
            console.log(error)
            return res.status(400).json({ status: false, message: "Message sent failed" })
        }
    }
}

export default sendEmail;