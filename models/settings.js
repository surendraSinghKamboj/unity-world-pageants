import mongoose from "mongoose"

const settings = new mongoose.Schema({
    voting: {
        type: Boolean,
        default: false
    }
});

mongoose.models = {}

export default mongoose.model('settings', settings);
