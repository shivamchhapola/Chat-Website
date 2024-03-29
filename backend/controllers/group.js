import expressAsyncHandler from 'express-async-handler';
import fetch from 'node-fetch';
import GroupChatModel from '../models/GroupChatModel.js';
import ChatModel from '../models/ChatModel.js';
import { nanoid } from 'nanoid';

export const createGroup = expressAsyncHandler(async (req, res) => {
  const { image, name, bio } = req.body;
  const admin = req.user.id;
  const uniqueId = nanoid(10);

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
          authorization: req.token,
        },
        body: JSON.stringify({ name: 'general', id: group._id }),
      })
        .then((cr) => {
          fetch('http://localhost:9000/api/user/updateUser', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              authorization: req.token,
            },
            body: JSON.stringify({ $addToSet: { groups: group._id } }),
          });
          return res.status(200).json(group);
        })
        .catch((e) => {
          return res.status(500).send('Could not create a Groupchat: ' + e);
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
          if (group.admin != req.user.id)
            return res.status(500).send('Invalid request: ' + group);
          group.rooms.push(chatroom._id);
          group.save();
          return res.status(200).json(chatroom);
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
            authorization: req.token,
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
  await GroupChatModel.findById(req.body.gid)
    .catch((e) => {
      return res.status(500).send('Could not find the group: ' + e);
    })
    .then((group) => {
      group.members.push(req.body.mid);
      group.save();
      fetch('http://localhost:9000/api/user/updateUser', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: req.token,
        },
        body: JSON.stringify({ $addToSet: { groups: group._id } }),
      });
      return res.status(200).send('Added Member: ' + req.body.mid);
    });
});

export const removeMember = expressAsyncHandler(async (req, res) => {
  await GroupChatModel.findById(req.body.gid)
    .catch((e) => {
      return res.status(500).send('Could not find the group: ' + e);
    })
    .then((g) => {
      g.members = g.members.filter((i) => i != req.body.mid);
      g.save();
      return res.status(200).send('Removed Member: ' + req.body.mid);
    });
});

export const removeChatroom = expressAsyncHandler(async (req, res) => {
  await GroupChatModel.findById(req.body.gid)
    .catch((e) => {
      return res.status(500).send('Could not find the group: ' + e);
    })
    .then((g) => {
      g.rooms = g.rooms.filter((i) => i != req.body.cid);
      g.save();
      fetch('http://localhost:9000/api/group/deletechatroom', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: req.token,
        },
        body: JSON.stringify({ id: req.body.cid }),
      });
      return res.status(200).send('Removed Chatroom: ' + req.body.cid);
    });
});

export const findGroup = expressAsyncHandler(async (req, res) => {
  await GroupChatModel.find({ uniqueId: req.body.uid })
    .catch((e) => {
      return res.status(500).send('Could not Fetch the Group: ' + e);
    })
    .then((group) => {
      return res.status(200).json(group[0]);
    });
});
