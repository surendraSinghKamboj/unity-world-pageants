import mongoose from "mongoose"

const contestantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    hobbies: {
        type: [String],
        required: true
    },
    awards: {
        type: [String],
        required: false
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
    }
});

mongoose.models = {}

export default mongoose.model('Contestant', contestantSchema);


