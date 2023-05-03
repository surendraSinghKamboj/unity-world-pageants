import Users from "../../../../models/users";
import connectDb from "../../../../middlewares/connectDb";
import bcrypt from "bcrypt"
import { sendToken } from "../../../../utils/token";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const { email, password } = req.body

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

            sendToken(user, res, "Login Succussfully......", 200)

        } catch (error) {

        }
    } else {
        res.status(404).json({ message: "Invalid request" })
    }
}

export default connectDb(handler)