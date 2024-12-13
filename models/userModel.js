const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true,
        unique: true
    },
    role:{
        type: String,
        required: true,
        enum: ['Admin', 'User']
    }
},{versionKey: false});

module.exports = mongoose.model('user', userModel)