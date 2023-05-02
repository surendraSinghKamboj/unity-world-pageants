import connectDb from "../../../../middlewares/connectDb";
import setting from "../../../../models/settings";

const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            const response = await setting.findOneAndUpdate({ _id: "6450e5eb8343a880473b2d02" }, { voting: !voting })
            if (response) {
                res.status(200).json({ message: "Voting successfull......" })
            }
        } catch (error) {
            return res.status(401).json({ message: "Error while voting....." })
        }
    }
}

export default connectDb(handler)
