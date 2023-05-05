import jwt from "jsonwebtoken"

export const isAuth = async (token, res, Users) => {
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    if (!decode) {
        return res.status(300).json({ status: false })
    }
    try {
        const user = await Users.findById(decode._id)
        if (user) {
            return true
        }
    } catch (error) {
        return res.status(300).json({ status: false })
    }
}