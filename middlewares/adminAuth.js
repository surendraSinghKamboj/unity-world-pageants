import jwt from "jsonwebtoken";
import cookie from "cookie";


const authMiddleware = (handler) => async (req, res) => {
    console.log(req.url)
    const cookies = cookie.parse(req.headers.cookie || '');
    const cookieValue = cookies.token;

    if (!cookieValue) {
        return res.redirect("/admin");
    }

    console.log(cookieValue)

    const decode = jwt.verify(cookieValue, process.env.JWT_SECRET)

    if (!decode) {
        return res.redirect("/admin")
    }

    req.decode = decode

    return handler(req, res)
};

export default authMiddleware;
