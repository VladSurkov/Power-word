import express, { Request, Response, NextFunction} from 'express';
import { body } from 'express-validator';

// Routers
import userRouter from './userRouter';

// Controllers
import userController from '../Controllers/user-controller';

const mainRouter = express.Router();

mainRouter.use('/users', userRouter);

mainRouter.post('/registration', 
    body('email').isEmail(),
    body('password').isLength({ min: 8, max: 32}),
    userController.registration
);
mainRouter.post('/login', userController.login);
mainRouter.post('/logout', userController.logout);
mainRouter.get('/activate/:link', userController.activate);
mainRouter.get('/refresh', userController.refresh);

export default mainRouter;