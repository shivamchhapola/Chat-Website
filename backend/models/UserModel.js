import mongoose from 'mongoose';

const UserModel = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      require: true,
    },
    pic: {
      type: String,
      required: true,
      default: 'https://cdn-icons-png.flaticon.com/512/456/456283.png',
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', UserModel);

module.exports = User;
