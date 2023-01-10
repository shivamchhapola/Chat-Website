import { Router } from 'express';
import creategroup from '../controllers/creategroup';

const groupRouter = Router();

groupRouter.post('/create', creategroup);

export { groupRouter };
