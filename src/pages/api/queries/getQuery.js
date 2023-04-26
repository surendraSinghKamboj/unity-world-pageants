import Query from "../../../../models/query";
import connectDb from "../../../../middlewares/connectDb";

const handler = async (req, res) => {
    if (req.method === "GET") {
        try {
            const query = await Query.find()
            if (query) {
                res.status(201).json({ success: true, message: "message sent successfull.", result: query })
            }
        } catch (error) {
            console.error("Query request failed");
            res.status(401).json({
                success: false,
                message: "Query request failed.",
            });
        }
    } else {
        res.status(404).json({ message: "Bad request" })
    }
}

export default connectDb(handler)