import { Router } from 'express';
import signup from '../controllers/signup.js';
import login from '../controllers/login.js';

const joinRouter = Router();

joinRouter.post('/login', login);
joinRouter.post('/signup', signup);

export { joinRouter };
