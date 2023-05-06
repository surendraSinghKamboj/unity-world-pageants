import connectDb from "../../../../middlewares/connectDb";
import contestants from "../../../../models/contestants";
import Users from "../../../../models/users";
import { isAdminAuth } from "../../../../middlewares/isAdminAuth";

const handler = async (req, res) => {
    if (req.method === "DELETE") {
        const adminToken = req.cookies.adminToken
        const { id } = req.query
        
        try {

            const result = await isAdminAuth(Users, res, adminToken)

            if (result) {
                const response = await contestants.findOneAndDelete({ _id: id })
                if (response) {
                    res.status(203).json({ message: "Contestent Deleted...." })
                }
            }
            // logic code 
        } catch (error) {
            return res.status(401).json({ message: "Data fetching failed" })
        }
    }
}

export default connectDb(handler)