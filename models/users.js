import mongoose from "mongoose";
import uniqid from 'uniqid'

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
    verificationId: {
        type: String,
        default: uniqid()
    },
    verified: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });


mongoose.models = {}

export default mongoose.model("users", userSchema);
