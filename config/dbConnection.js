const mongoose = require("mongoose");

const dbConnection = () => {
    const url = 'mongodb://localhost:27017/school'

    mongoose.connect(url).then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Error connecting to MongoDB:', err);
    })
}

module.exports = { dbConnection };