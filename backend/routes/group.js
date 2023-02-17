import { Router } from 'express';
import { authUser } from '../middleware/auth.js';
import {
  createGroup,
  createChatRoom,
  deleteGroup,
  deleteChatRoom,
  updateGroup,
  updateChatRoom,
  fetchGroup,
  fetchChatRoom,
  addMember,
  removeMember,
  removeChatroom,
} from '../controllers/group.js';

const groupRouter = Router();

groupRouter.post('/creategroup', authUser, createGroup);
groupRouter.post('/createchatroom', authUser, createChatRoom);
groupRouter.post('/deletegroup', authUser, deleteGroup);
groupRouter.post('/deletechatroom', authUser, deleteChatRoom);
groupRouter.post('/updategroup', authUser, updateGroup);
groupRouter.post('/updatechatroom', authUser, updateChatRoom);
groupRouter.post('/fetchgroup', authUser, fetchGroup);
groupRouter.post('/fetchchatroom', authUser, fetchChatRoom);
groupRouter.post('/addMember', authUser, addMember);
groupRouter.post('/removeMember', authUser, removeMember);
groupRouter.post('/removeChatroom', authUser, removeChatroom);

export { groupRouter };
