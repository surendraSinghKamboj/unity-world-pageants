import connectDb from "../../../../middlewares/connectDb";
import contestants from "../../../../models/contestants";

const handler = async (req, res) => {
    if (req.method === "DELETE") {
        const { id } = req.query
        try {
            const response = await contestants.findOneAndDelete({ _id: id })
            if (response) {
                res.status(203).json({ message: "Contestent Deleted...." })
            }
        } catch (error) {
            return res.status(401).json({ message: "Data fetching failed" })
        }
    }
}

export default connectDb(handler)