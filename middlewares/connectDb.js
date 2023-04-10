const mongoose = require("mongoose")

const connectDb = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res)
    }

    try {
        const response = await mongoose.connect(process.env.MONGO_URI, { dbName: "uwp" })
        if (response) {
            console.log("Database connected successfull.")
        }
    } catch (error) {
        console.error(error)
    }

}


export default connectDb