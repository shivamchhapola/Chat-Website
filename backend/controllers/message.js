import expressAsyncHandler from 'express-async-handler';
import Message from '../models/MessageModel.js';

export const createMessage = expressAsyncHandler(async (req, res) => {
  if (!req.body.sender || !req.body.content || !req.body.chat)
    return res.status(500).send('Invalid Request');
  await Message.create(req.body).catch((e) => {
    return res.status(500).send('Message not sent: ' + e);
  });
});

export const fetchMessages = expressAsyncHandler(async (req, res) => {
  await Message.find({ chat: req.body.chat })
    .sort({
      updatedAt: -1,
    })
    .limit(1000)
    .catch((e) => {
      return res.status(500).send('Error: ' + e);
    })
    .then((messages) => {
      return res.status(200).json(messages);
    });
});
