import userModel from "../models/userModel.js"

export const createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password || !role) {
            return res.status(400).json({
                message: "All filed required",
                status: false,
                data: null
            })
        }

        const user = await userModel.findOne({ email })

        if (user) {
            return res.status(200).json({
                message: "user already exits",
                status: false,
                data: null
            })
        }

        const newUser = await userModel.create({
            name,
            email,
            password,
            role
        })

        return res.status(201).json({
            message: "user created",
            status: true,
            data: newUser
        })

    } catch (e) {
        return res.status(500).json({
            message: e.message,
            status: false,
            data: null
        })
    }
}