import Users from "../../../../models/users";
import connectDb from "../../../../middlewares/connectDb";
import { sendToken } from "../../../../utils/token";
import bcrypt from "bcrypt"
import cookie from "cookie"

const handler = async (req, res) => {
    if (req.method === "POST") {
        const { name, email, mobile, password } = req.body;

        try {


            let user = await Users.findOne({ email });



            if (user) {
                return res.status(400).json({
                    success: false,
                    message: "email id already Registered",
                    name: user.name,
                    email: user.email
                });
            }

            const hashedPassword = await bcrypt.hash(password, 10);


            user = await Users.create({
                name,
                email,
                mobile,
                password: hashedPassword,
            });

            const token = sendToken(user)

            if (token) {
                const cookieSerialized = cookie.serialize("token", token, {
                    httpOnly: true,
                    maxAge: 43200000,
                });
                res.setHeader('Set-Cookie', cookieSerialized);
                res.status(201).json({ status: true, message: "Account created successfully." })
            }
        } catch (error) {
            console.error("Accout Creatation failed: ", error);
            res.status(401).json({
                success: false,
                message: "Accout Creatation failed",
            });
        }
    } else {
        res.status(404).json({ message: "Invalid request" })
    }
}

export default connectDb(handler)