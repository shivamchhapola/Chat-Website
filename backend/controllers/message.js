import expressAsyncHandler from 'express-async-handler';
import Message from '../models/MessageModel.js';
import User from '../models/UserModel.js';

export const createMessage = expressAsyncHandler(async (req, res) => {
  if (!req.body.content || !req.body.chat)
    return res.status(500).send('Invalid Request');
  await User.findById(req.user.id)
    .catch((e) => {
      return res.status(500).send('Could not fetch the User: ' + e);
    })
    .then(async (user) => {
      await Message.create({
        sender: user.name,
        content: req.body.content,
        chat: req.body.chat,
        pic: user.pic,
      })
        .catch((e) => {
          return res.status(500).send('Message not sent: ' + e);
        })
        .then((msg) => {
          return res.status(200).json(msg);
        });
    });
});

export const fetchMessages = expressAsyncHandler(async (req, res) => {
  await Message.find({ chat: req.body.chat })
    .sort({
      updatedAt: 1,
    })
    .limit(100)
    .catch((e) => {
      return res.status(500).send('Error: ' + e);
    })
    .then((messages) => {
      return res.status(200).json(messages);
    });
});
