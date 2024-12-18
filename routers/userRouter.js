import express from 'express';
import { createUser, loginUser } from '../controller/userController.js';
import { adminVerifyToken } from '../middleware/adminVerifyToken.js';

const Router = express.Router();

Router.post('/create', adminVerifyToken, createUser);
Router.post('/login', loginUser)

export default Router;