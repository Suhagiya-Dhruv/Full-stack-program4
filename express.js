const express = require('express');
const { dbConnection } = require('./config/dbConnection');
const userRouter = require('./routers/userRouter');

const app = express();
dbConnection()

//router 
app.use(express.json());
app.use('/user', userRouter)

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});