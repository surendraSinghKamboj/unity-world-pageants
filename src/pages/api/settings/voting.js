import connectDb from "../../../../middlewares/connectDb";
import setting from "../../../../models/settings";
import Users from "../../../../models/users";
import { isAdminAuth } from "../../../../middlewares/isAdminAuth";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const adminToken = req.cookies.adminToken
        try {
            const result = await isAdminAuth(Users, res, adminToken)

            if (result) {

                const response = await setting.findOne({ _id: process.env.VOTING_ID })
                if (response) {
                    const update = await setting.findOneAndUpdate({ _id: process.env.VOTING_ID }, { voting: !response.voting })
                    if (update) {
                        return res.status(202).json({ status: true, message: "Setting Changed users can vote now." })
                    }
                }
            }
        } catch (error) {
            return res.status(401).json({ message: "Error while changing settings" })
        }
    } else if (req.method === "GET") {
        try {
            const response = await setting.findOne({ _id: process.env.VOTING_ID })
            if (response) {
                res.status(200).json({ status: response.voting })
            }
        } catch (error) {
            return res.status(401).json({ message: "Error while geting settings" })
        }
    } else {
        return res.status(404).json({ message: "Bad Request" })
    }
}

export default connectDb(handler)
