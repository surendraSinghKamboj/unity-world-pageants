import connectDb from "../../../../middlewares/connectDb";
import contestants from "../../../../models/contestants";


const handler = async (req, res) => {
    if (req.method === "POST") {
        const { name, title, age, occupation, height, hobbies, awards, biography, reasonForEnteringPageant, volunteerCharityProject } = req.body

        try {
            const response = await contestants.create({
                name,
                title,
                age,
                occupation,
                height,
                hobbies,
                awards,
                biography,
                reasonForEnteringPageant,
                volunteerCharityProject
            })

            if (response) {
                return res.status(201).json({ response })
            }
        } catch (error) {
            console.log(error)
            return res.status(400).json({ messgae: "Catch block" })
        }
    }
}

export default connectDb(handler)