import mongoose from 'mongoose';

const UserModel = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique,
    },
    password: {
      type: String,
      require: true,
    },
    pic: {
      type: String,
      default: 'https://cdn-icons-png.flaticon.com/512/456/456283.png',
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', UserModel);

module.exports = User;
