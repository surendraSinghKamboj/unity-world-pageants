import Query from "../../../../models/query";
import connectDb from "../../../../middlewares/connectDb";

const handler = async (req, res) => {
    if (req.method === "DELETE") {
        const { id } = req.body;
        if (!id) {
            res.status(400).json({ success: false, message: "Missing id parameter" });
            return;
        }
        try {
            const query = await Query.findOneAndDelete({ _id: id });
            if (!query) {
                return res.status(404).json({ success: false, message: "Query not found" });
            }
            res.status(204).json({ success: true, message: "Deleted Successfully" });
        } catch (error) {
            console.error("Cannot delete query:", error);
            res.status(500).json({
                success: false,
                message: "delete request failed",
                error: error.message,
            });
        }
    } else {
        res.status(404).json({ message: "Bad request" });
    }
};

export default connectDb(handler);
