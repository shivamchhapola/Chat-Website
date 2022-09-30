import mongoose from 'mongoose';

const GroupChatModel = mongoose.Schema(
  {
    uniqueId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    rooms: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat',
      },
    ],
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    passRequired: {
      type: Boolean,
      required: true,
      default: false,
    },
    password: {
      type: String,
    },
    pic: {
      type: String,
      required: true,
      default: 'https://cdn-icons-png.flaticon.com/512/1769/1769041.png',
    },
  },
  {
    timestamps: true,
  }
);

const GroupChat = mongoose.model('GroupChat', GroupChatModel);

module.exports = GroupChat;
