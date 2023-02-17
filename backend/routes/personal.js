import { Router } from 'express';
import { authUser } from '../middleware/auth.js';
import { sendMessage } from '../controllers/personal';

const personalRouter = Router();

personalRouter.post('/sendMessage', authUser, sendMessage);

export { personalRouter };
