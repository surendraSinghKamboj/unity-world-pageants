import mongoose from "mongoose"

const contestantSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    occupation: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    biography: {
        type: String,
        required: true
    },
    volunteerCharityProject: {
        type: String,
        required: true
    },
    reasonForEnteringPageant: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        select: false
    },
    images: {
        type: [String],
        select: false
    },
    hobbies: {
        type: [String],
        required: true
    },
    awards: {
        type: [String],
        required: false
    }
});

mongoose.models = {}

export default mongoose.model('Contestant', contestantSchema);


