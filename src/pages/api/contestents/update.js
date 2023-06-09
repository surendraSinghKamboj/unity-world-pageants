import connectDb from "../../../../middlewares/connectDb";
import contestants from "../../../../models/contestants";
import Users from "../../../../models/users";
import { isAdminAuth } from "../../../../middlewares/isAdminAuth";

const handler = async (req, res) => {
    if (req.method === "PUT") {
        const adminToken = req.cookies.adminToken
        const {
            _id,
            name,
            images,
            title,
            age,
            occupation,
            height,
            hobbies,
            awards,
            biography,
            reasonForEnteringPageant,
            volunteerCharityProject
        } = req.body
        try {
            const result = await isAdminAuth(Users, res, adminToken)

            if (result) {
                const response = await contestants.findOneAndUpdate({ _id }, {
                    name,
                    title,
                    age,
                    occupation,
                    height,
                    hobbies,
                    awards,
                    biography,
                    images,
                    image: images[0],
                    reasonForEnteringPageant,
                    volunteerCharityProject
                })

                if (response) {
                    return res.status(201).json({ message: "Conetstent Saved Successfully", response })
                }
            }
        } catch (error) {
            console.log(error)
            return res.status(400).json({ messgae: "Catch block" })
        }
    }
}

export default connectDb(handler)