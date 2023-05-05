import connectDb from "../../../../middlewares/connectDb";
import contestants from "../../../../models/contestants";
import Users from "../../../../models/users";
import { isAuth } from "../../../../middlewares/isAuth";


const handler = async (req, res) => {
    if (req.method === "POST") {
        const token = req.cookies.token
        const { id } = req.body
        if (!token) {
            return res.status(300).json({ message: "User unAuthorized" })
        }
        try {
            const user = await isAuth(token, res, Users)
            if (user) {
                if (user.verified) {
                    if (user.voted) {
                        return res.status(200).json({ message: "Already Voted." })
                    } else {
                        const update = await Users.findOneAndUpdate({ _id: user.id }, { voted: true })
                        const response = await contestants.findOneAndUpdate({ _id: id }, { $inc: { votes: 1 } })
                        if (response) {
                            return res.status(200).json({ message: "Voting successfull." })
                        }
                    }
                } else {
                    return res.status(200).json({ message: "Please check your email and verify your email." })
                }
            }
        } catch (error) {
            return res.status(401).json({ message: "Error while voting....." })
        }
    }
}

export default connectDb(handler)
