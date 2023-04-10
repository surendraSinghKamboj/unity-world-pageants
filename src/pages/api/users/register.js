import Users from "../../../../models/users";
import connectDb from "../../../../middlewares/connectDb";
import { sendToken } from "../../../../utils/token";
import bcrypt from "bcrypt"

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

            sendToken(user, res, "Registered Succussfully......", 201)

            res.status(201).json({ message: "account created successfull." })
        } catch (error) {
            console.error("Accout Creatation failed....");
            res.status(401).json({
                success: false,
                message: "Accout Creatation failed....",
            });
        }
    } else {
        res.status(404).json({ message: "Invalid request" })
    }
}

export default connectDb(handler)