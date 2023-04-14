import mongoose from "mongoose";

const contestentSchema = new mongoose.Schema({
    prefix: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
    },
    facebook: {
        type: String,
        required: true
    },
    instagram: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    photos: {
        type: Array,
        required: true
    },
    occupation: {
        type: String,
    },
    height: {
        type: String,
        required: true
    },
    lifeAmbition: {
        type: String,
        required: true
    },
    exprience: {
        type: String,
    },
    nationalDirector: {
        type: String
    }
}, { timestamps: true })

mongoose.models = {}

export default mongoose.model("contestent", contestentSchema)