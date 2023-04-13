import Query from "../../../../models/query";
import connectDb from "../../../../middlewares/connectDb";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const { name, email, mobile, message } = req.body;

        try {
            const query = await Query.create({
                name,
                email,
                mobile,
                message
            });
            if (query) {
                res.status(201).json({ success: true, message: "message sent successfull." })
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