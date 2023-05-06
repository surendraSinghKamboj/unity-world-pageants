import connectDb from "../../../../middlewares/connectDb";
import Users from "../../../../models/users";

const handler = async (req, res) => {
    if (req.method === "PUT") {
        const { ide, pde } = req.body
        try {
            const user = await Users.findById(pde)
            if (user.verified) {
                return res.status(200).json({ status: true, message: 'User already verified' });
            } else if (ide === user.verificationId) {
                const verify = await Users.findOneAndUpdate({ _id: pde }, { verified: true })
                if (verify) {
                    return res.status(200).json({ status: true, message: 'User verification successfully.' });
                } else {
                    return res.status(300).json({ status: true, message: 'Verification fail' });
                }
            }
        } catch (error) {
            return res.status(300).json({ status: true, message: 'Verification fail' });
        }
    } else {
        res.status(300).json({ message: "Bad request" })
    }
}


export default connectDb(handler)