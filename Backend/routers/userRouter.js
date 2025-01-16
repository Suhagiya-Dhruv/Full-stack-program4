import express from 'express';
import { createUser, loginUser, banUnbanUser, listUsers } from '../controller/userController.js';
import { adminVerifyToken } from '../middleware/adminVerifyToken.js';

const Router = express.Router();

Router.post('/login', loginUser);

Router.post('/create', adminVerifyToken, createUser);
Router.patch('/ban/:id', adminVerifyToken, banUnbanUser)

Router.get('/list', adminVerifyToken, listUsers);
export default Router;