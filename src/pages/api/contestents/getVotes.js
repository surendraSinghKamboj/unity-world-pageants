import connectDb from "../../../../middlewares/connectDb";
import contestants from "../../../../models/contestants";
import Users from "../../../../models/users";
import { isAdminAuth } from "../../../../middlewares/isAdminAuth";



const handler = async (req, res) => {
    if (req.method === "GET") {
        const adminToken = req.cookies.adminToken
        try {
            const result = await isAdminAuth(Users, res, adminToken)

            if (result) {
                const response = await contestants.find().select("name").select("votes").select("image").lean()
                if (response) {
                    res.status(200).json(response)
                }
            }
        } catch (error) {
            return res.status(401).json({ message: "Data fetching failed" })
        }
    }
}

export default connectDb(handler)
