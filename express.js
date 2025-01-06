import express from 'express';
import { dbConnection } from "./config/dbConnection.js";
import userRouter from "./routers/userRouter.js";
import quizRouter from "./routers/quizRouter.js";
import questionRouter from "./routers/questionRouter.js";

const app = express();
dbConnection()

app.use(express.json());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/quiz', quizRouter);
app.use('/api/v1/question', questionRouter);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});