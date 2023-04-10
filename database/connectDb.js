const mongoose = require("mongoose")

export const connectDb = async () => {
    try {
        const response = await mongoose.connect(process.env.MONGO_URI, {
            dbName: "uwp"
        })
        console.log(response)

        if (response) {
            console.log("Database connected successfull");
        }
    } catch (error) {
        console.error("error while connecting database");
    }
}
