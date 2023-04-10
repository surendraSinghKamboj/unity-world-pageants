import jwt from "jsonwebtoken"

export const sendToken = (user, res, message, statusCode = 200) => {

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)

    res.status(statusCode).json({
        success: true,
        message,
        token
    });

}