import expressAsyncHandler from 'express-async-handler';
import Chat from '../models/ChatModel.js';
import User from '../models/UserModel.js';
import fetch from 'node-fetch';

export const sendMessage = expressAsyncHandler(async (req, res) => {
  await Chat.findOne({
    isGroupChat: false,
    users: { $size: 2, $all: [req.user.id, req.body.chat] },
  })
    .catch((e) => {
      return res.status(500).send('Error: ' + e);
    })
    .then((c) => {
      if (!c) {
        c = Chat.create({
          chatName: '',
          isGroupChat: false,
          users: [req.user.id, req.body.id],
        }).catch((e) => {
          return res.status(500).send('Error: ' + e);
        });
      }
      fetch('http://localhost:9000/api/message/createMessage', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: req.token,
        },
        body: JSON.stringify({
          sender: req.user.id,
          content: req.body.content,
          chat: c._id,
        }),
      }).catch((e) => {
        return res.status(500).send('Error: ' + e);
      });
    });
});

export const addPersonal = expressAsyncHandler(async (req, res) => {
  await User.findOne({ username: req.body.id })
    .catch((e) => {
      return res.status(500).send('Error: ' + e);
    })
    .then(async (u) => {
      if (u.chats.includes(req.user.id))
        return res.status(500).send('Chat Already exists');
      u.chats.push(req.user.id);
      u.chats = [...new Set(u.chats)];
      u.save();
      await User.findById(req.user.id)
        .catch((e) => {
          return res.status(500).send('Error: ' + e);
        })
        .then(async (u2) => {
          if (u2.chats.includes(u._id))
            return res.status(500).send('Chat Already exists');
          u2.chats.push(u._id);
          u2.chats = [...new Set(u2.chats)];
          u2.save();
          await Chat.create({
            chatName: '',
            isGroupChat: false,
            users: [req.user.id, u._id],
          })
            .catch((e) => {
              return res.status(500).send('Error: ' + e);
            })
            .then((c) => {
              return res
                .status(200)
                .json({ name: u.name, pic: u.pic, bio: u.bio, _id: u._id });
            });
        });
    });
});
