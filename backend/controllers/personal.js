import expressAsyncHandler from 'express-async-handler';
import Chat from '../models/ChatModel';

export const sendMessage = expressAsyncHandler(async (req, res) => {
  await Chat.findOne({
    isGroupChat: false,
    users: { $size: 2, $all: [req.body.mid, req.body.rid] },
  })
    .catch((e) => {
      return res.status(500).send('Error: ' + e);
    })
    .then((c) => {
      if (!c) {
        c = Chat.create({
          chatName: 'personal',
          isGroupChat: false,
          users: [req.body.mid, req.body.rid],
        }).catch((e) => {
          return res.status(500).send('Error: ' + e);
        });
      }
      fetch('http://localhost:9000/api/message/createMessage', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender: req.body.sender,
          content: req.body.content,
          chat: c._id,
        }),
      }).catch((e) => {
        return res.status(500).send('Error: ' + e);
      });
    });
});
