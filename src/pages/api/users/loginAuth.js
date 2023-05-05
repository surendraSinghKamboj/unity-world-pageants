import Users from "../../../../models/users";
import connectDb from "../../../../middlewares/connectDb";
import bcrypt from "bcrypt"
import { sendToken } from "../../../../utils/token";
import cookie from "cookie"

const handler = async (req, res) => {
    if (req.method === "POST") {
        const { email, password } = req.body
        console.log(email, password)
        try {

            const user = await Users.findOne({ email })

            if (!user) {
                res.status(400).json({ success: false, message: "Email-id or password is invailid" })
            }

            const verifyPassword = await bcrypt.compare(password, user.password)
            console.log(verifyPassword)
            if (!verifyPassword) {
                return res.status(404).json({ success: false, message: "Email-id or password is invailid" })
            }

            const token = sendToken(user);

            if (token) {
                const cookieSerialized = cookie.serialize("token", token, {
                    httpOnly: true,
                    maxAge: 43200000,
                    path: "/"
                });
                res.setHeader('Set-Cookie', cookieSerialized);
                return res.status(201).json({ status: true, message: "Login successfully." })
            }

        } catch (error) {

        }
    } else {
        res.status(404).json({ message: "Invalid request" })
    }
}

export default connectDb(handler)