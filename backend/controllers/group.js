import expressAsyncHandler from 'express-async-handler';
import fetch from 'node-fetch';
import GroupChatModel from '../models/GroupChatModel.js';
import ChatModel from '../models/ChatModel.js';
import { nanoid } from 'nanoid';

export const createGroup = expressAsyncHandler(async (req, res) => {
  const { image, name, bio, admin } = req.body;
  const uniqueId = nanoid(10);

  if (!image) return res.status(500).send('"image" not found');
  if (!name) return res.status(500).send('"name" not found');
  if (!bio) return res.status(500).send('"bio" not found');
  if (!admin) return res.status(500).send('"admin" not found');

  const data = {
    uniqueId,
    image,
    name,
    bio,
    admin,
    members: [admin],
  };

  await GroupChatModel.create(data)
    .catch((e) => {
      return res.status(500).send('Could not create a Groupchat: ' + e);
    })
    .then((group) => {
      fetch('http://localhost:9000/api/group/createchatroom', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: 'general', id: group._id }),
      }).then((g) => {
        if (g.status === 200)
          return res.status(200).send('Created group: ' + group);
      });
    });
});

export const createChatRoom = expressAsyncHandler(async (req, res) => {
  await ChatModel.create({
    chatName: req.body.name,
    isGroupChat: true,
    groupChat: req.body.id,
  })
    .catch((e) => {
      return res.status(500).send('Could not create a Chatroom: ' + e);
    })
    .then((chatroom) => {
      GroupChatModel.findById(req.body.id)
        .catch((e) => {
          return res.status(500).send('Could not find the group: ' + e);
        })
        .then((group) => {
          group.rooms.push(chatroom._id);
          group.save();
          return res.status(200).send('Created Chatroom: ' + chatroom._id);
        });
    });
});

export const deleteGroup = expressAsyncHandler(async (req, res) => {
  await GroupChatModel.findById(req.body.id)
    .catch((e) => {
      return res.status(500).send(e);
    })
    .then((group) => {
      group.rooms.forEach((room) => {
        fetch('http://localhost:9000/api/group/deletechatroom', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: room._id }),
        });
      });
      group
        .remove()
        .catch((err) => {
          return res.status(500).send('Could not delete the group: ' + err);
        })
        .then((g) => {
          return res.status(200).send('Deleted the group: ' + g);
        });
    });
});

export const deleteChatRoom = expressAsyncHandler(async (req, res) => {
  await ChatModel.findByIdAndRemove(req.body.id)
    .catch((e) => {
      return res.status(500).send(e);
    })
    .then((c) => {
      return res.status(200).send('Deleted Chatroom: ' + c);
    });
});

export const updateGroup = expressAsyncHandler(async (req, res) => {
  await GroupChatModel.findByIdAndUpdate(req.body.id, req.body.data, {
    new: true,
  })
    .catch((e) => {
      return res.status(500).send('Could not Update the Group: ' + e);
    })
    .then((group) => {
      return res.status(200).send('Updated the Group: ' + group);
    });
});

export const updateChatRoom = expressAsyncHandler(async (req, res) => {
  await ChatModel.findByIdAndUpdate(req.body.id, req.body.data, { new: true })
    .catch((e) => {
      return res.status(500).send('Could not Update the Chatroom: ' + e);
    })
    .then((chatroom) => {
      return res.status(200).send('Updated the Chatroom: ' + chatroom);
    });
});

export const fetchGroup = expressAsyncHandler(async (req, res) => {
  await GroupChatModel.findById(req.body.id)
    .catch((e) => {
      return res.status(500).send('Could not Fetch the Group: ' + e);
    })
    .then((group) => {
      return res.status(200).json(group);
    });
});

export const fetchChatRoom = expressAsyncHandler(async (req, res) => {
  await ChatModel.findById(req.body.id)
    .catch((e) => {
      return res.status(500).send('Could not Fetch the Chatroom: ' + e);
    })
    .then((chatroom) => {
      return res.status(200).json(chatroom);
    });
});

export const addMember = expressAsyncHandler(async (req, res) => {
  GroupChatModel.findById(req.body.gid)
    .catch((e) => {
      return res.status(500).send('Could not find the group: ' + e);
    })
    .then((group) => {
      group.members.push(req.body.mid);
      group.save();
      return res.status(200).send('Added Member: ' + req.body.mid);
    });
});
