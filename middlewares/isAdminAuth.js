import cookie from "cookie"
import jwt from "jsonwebtoken"



export const isAdminAuth = async (Users, res, adminToken) => {
    const decode = jwt.verify(adminToken, process.env.JWT_SECRET)
    try {
        const user = await Users.findById(decode._id)
        if (user.admin === true) {
            return true
        } else {
            const cookieSerialized = cookie.serialize('adminToken', "token", {
                httpOnly: true,
                maxAge: 0,
                path: "/",
            });

            res.setHeader('Set-Cookie', cookieSerialized);
            return res.status(404).json({ status: false, message: "You are not admin" })
        }
    } catch (error) {
        const cookieSerialized = cookie.serialize('adminToken', "token", {
            httpOnly: true,
            maxAge: 0,
            path: "/",
        });

        res.setHeader('Set-Cookie', cookieSerialized);
        return res.status(404).json({ status: false, message: "You are not admin" })
    }
}