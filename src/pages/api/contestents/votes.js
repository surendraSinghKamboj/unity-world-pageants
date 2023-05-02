import connectDb from "../../../../middlewares/connectDb";
import contestants from "../../../../models/contestants";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const { id } = req.body
        try {
            const response = await contestants.findOneAndUpdate({ _id: id }, { $inc: { votes: 1 } })
            if (response) {
                res.status(200).json({ message: "Voting successfull......" })
            }
        } catch (error) {
            return res.status(401).json({ message: "Error while voting....." })
        }
    }
}

export default connectDb(handler)
