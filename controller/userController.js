const UserModel = require('../models/userModel');

const getUser = async (req, res) => {
    try {
        const user = await UserModel.find({});

        return res.json(user);
    } catch (err) {
        return res.json(err)
    }
}

// Error handling

const createUser = async (req, res) => {
    try {
        const { name, mobile, role } = req.body;

        // find
        const user = await UserModel.findOne({ mobile }); // single user find

        if (user) {
            return res.send("user already exits..!")
        }

        const resposne = await UserModel.create({
            name,
            mobile,
            role
        }) // data create

        return res.status(201).send('User created successfully');

    } catch (err) {
        return res.send(err)
    }
}

module.exports = {
    getUser,
    createUser
}