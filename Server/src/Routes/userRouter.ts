import express, { Request, Response, NextFunction } from 'express';
import userController from '../Controllers/user-controller';

// Middleware
import authMiddleware from '../Middlewares/auth-middleware';

const userRouter = express.Router();

userRouter.get('/', authMiddleware, userController.getUsers);

export default userRouter;