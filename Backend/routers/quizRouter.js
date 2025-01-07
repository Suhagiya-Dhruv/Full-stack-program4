import express from 'express';
import { adminVerifyToken } from '../middleware/adminVerifyToken.js';
import { allQuizList, createQuiz, deleteQuiz, singleQuizList, updateQuiz } from '../controller/quizController.js';

const Router = express.Router();

Router.get('/list', allQuizList);
Router.get('/list/:id', singleQuizList);

Router.post('/create', adminVerifyToken, createQuiz);

Router.put('/update/:id', adminVerifyToken, updateQuiz);

Router.delete('/delete/:id',adminVerifyToken, deleteQuiz );



export default Router;