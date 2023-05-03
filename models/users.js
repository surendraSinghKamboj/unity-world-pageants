import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    admin: {
        type: Boolean,
        default: false
    },
    otp: {
        type: Number,
        default: Math.floor(100000 + Math.random() * 900000)
    },
    verified: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });


mongoose.models = {}

export default mongoose.model("users", userSchema);
