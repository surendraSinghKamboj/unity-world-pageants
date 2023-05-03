import Users from "../../../../models/users";
import connectDb from "../../../../middlewares/connectDb";
import bcrypt from "bcrypt"
import { sendToken } from "../../../../utils/token";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const { email, password } = req.body
        try {

            const user = await Users.findOne({ email })
            console.log(1)
            if (!user) {
                return res.status(400).json({ success: false, message: "Email-id or password is invalid" })
            }
            const { admin } = user;
            if (admin) {
                const verifyPassword = await bcrypt.compare(password, user.password)

                if (!verifyPassword) {
                    return res.status(404).json({ success: false, message: "Email-id or password is invalid" })
                }
                console.log(4)
                sendToken(user, res, "Login Successfully......", 200)

            } else {
                return res.status(404).json({ success: false, message: "Email-id or password is invalid." })
            }
        } catch (error) {
            console.log("Backend error:")
            return res.status(403).json({ success: false, message: "Internal Server error" })
        }

    } else {
        res.status(404).json({ message: "Invalid request" })
    }
}

export default connectDb(handler)
