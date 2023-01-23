import expressAsyncHandler from 'express-async-handler';
import GroupChatModel from '../models/GroupChatModel.js';
import ChatModel from '../models/ChatModel.js';
import { nanoid } from 'nanoid';

const creategroup = expressAsyncHandler(async (req, res) => {
  const { image, name, bio, admin } = req.body;
  const uniqueId = nanoid(10);

  if (!image) return res.status(500).send('"image" not found');
  if (!name) return res.status(500).send('"name" not found');
  if (!bio) return res.status(500).send('"bio" not found');
  if (!admin) return res.status(500).send('"admin" not found');

  const data = { uniqueId, image, name, bio, admin };

  const createdGroup = await GroupChatModel.create(data).catch((err) => {
    return res.status(500).send('Could not create a Groupchat: ' + err);
  });

  const generalChatRoom = await ChatModel.create({
    chatName: 'general',
    isGroupChat: true,
    groupChat: createdGroup._id,
  });

  if (createdGroup)
    return res.status(200).json({ uniqueId, image, name, bio, admin });
});

export default creategroup;
