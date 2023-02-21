import { Router } from 'express';
import { authUser } from '../middleware/auth.js';
import { sendMessage, addPersonal } from '../controllers/personal.js';

const personalRouter = Router();

personalRouter.post('/sendMessage', authUser, sendMessage);
personalRouter.post('/addPersonal', authUser, addPersonal);

export { personalRouter };
