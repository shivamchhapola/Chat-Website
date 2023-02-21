import { Router } from 'express';
import { authUser } from '../middleware/auth.js';
import { fetchUser, updateUser, fetchUserById } from '../controllers/user.js';

const userRouter = Router();

userRouter.post('/fetchUser', authUser, fetchUser);
userRouter.post('/fetchUserById', authUser, fetchUserById);
userRouter.post('/updateUser', authUser, updateUser);

export { userRouter };
