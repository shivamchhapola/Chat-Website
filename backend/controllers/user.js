import expressAsyncHandler from 'express-async-handler';
import UserModel from '../models/UserModel.js';
import { verifyToken } from '../config/jwt.js';

export const verifyUser = expressAsyncHandler(async (req, res) => {});

export const fetchUser = expressAsyncHandler(async (req, res) => {
  await UserModel.findById(req.body.id)
    .catch((e) => {
      return res.status(500).send('Could not fetch the User: ' + e);
    })
    .then((user) => {
      return res.status(200).json(user);
    });
});

export const updateUser = expressAsyncHandler(async (req, res) => {
  await GroupChatModel.findByIdAndUpdate(req.body.id, req.body.data, {
    new: true,
  })
    .catch((e) => {
      return res.status(500).send('Could not Update the User: ' + e);
    })
    .then((user) => {
      return res.status(200).send('Updated the User: ' + user);
    });
});
