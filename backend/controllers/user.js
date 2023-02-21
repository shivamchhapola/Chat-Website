import expressAsyncHandler from 'express-async-handler';
import UserModel from '../models/UserModel.js';

export const fetchUserById = expressAsyncHandler(async (req, res) => {
  await UserModel.findById(req.body.id)
    .catch((e) => {
      return res.status(500).send('Could not fetch the User: ' + e);
    })
    .then((u) => {
      return res
        .status(200)
        .json({ name: u.name, pic: u.pic, bio: u.bio, _id: u._id });
    });
});

export const fetchUser = expressAsyncHandler(async (req, res) => {
  await UserModel.findById(req.user.id)
    .catch((e) => {
      return res.status(500).send('Could not fetch the User: ' + e);
    })
    .then((user) => {
      return res.status(200).json(user);
    });
});

export const updateUser = expressAsyncHandler(async (req, res) => {
  await UserModel.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
  })
    .catch((e) => {
      return res.status(500).send('Could not Update the User: ' + e);
    })
    .then((user) => {
      return res.status(200).json(user);
    });
});
