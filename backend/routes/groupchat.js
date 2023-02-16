import { Router } from 'express';
import {
  createGroup,
  createChatRoom,
  deleteGroup,
  deleteChatRoom,
  updateGroup,
  updateChatRoom,
  fetchGroup,
  fetchChatRoom,
} from '../controllers/group.js';

const groupRouter = Router();

groupRouter.post('/creategroup', createGroup);
groupRouter.post('/createchatroom', createChatRoom);
groupRouter.post('/deletegroup', deleteGroup);
groupRouter.post('/deletechatroom', deleteChatRoom);
groupRouter.post('/updategroup', updateGroup);
groupRouter.post('/updatechatroom', updateChatRoom);
groupRouter.post('/fetchgroup', fetchGroup);
groupRouter.post('/fetchchatroom', fetchChatRoom);

export { groupRouter };
