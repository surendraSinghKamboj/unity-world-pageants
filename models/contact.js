import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
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
    whatsapp: {
        type: String,
        required: true,
        trim: true,
    },
    text: {
        type: String,
        required: true,
    },
    websiteUrl:{
        type:String
    }
}, { timestamps: true });


mongoose.models = {}

export default mongoose.model("contacts", contactSchema);