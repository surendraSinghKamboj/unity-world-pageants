import connectDb from "../../../../middlewares/connectDb";
import contestants from "../../../../models/contestants";

const handler = async (req, res) => {
    if (req.method === "GET") {
        try {
            const response = await contestants.find()
            if (response) {
                res.status(200).json(response)
            }
        } catch (error) {
            return res.status(401).json({ message: "Data fetching failed" })
        }
    }
}

export default connectDb(handler)



export const config = {
    runtime:"experimental-edge"
}
