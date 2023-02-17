import { Router } from 'express';
import { authUser } from '../middleware/auth.js';
import { fetchUser, updateUser } from '../controllers/user.js';

const userRouter = Router();

userRouter.post('/fetchUser', authUser, fetchUser);
userRouter.post('/updateUser', authUser, updateUser);

export { userRouter };
