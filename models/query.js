import mongoose from "mongoose";

const querySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    mobile: {
        type: String,
        required: true,
        trim: true,
    },
    message: {
        type: String,
        required: true,
    },
    resolved: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });


mongoose.models = {}

export default mongoose.model("queries", querySchema);
