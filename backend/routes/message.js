import { Router } from 'express';
import { authUser } from '../middleware/auth.js';
import { createMessage, fetchMessages } from '../controllers/message.js';

const messageRouter = Router();

messageRouter.post('/createMessage', authUser, createMessage);
messageRouter.post('/fetchMessages', authUser, fetchMessages);

export { messageRouter };
