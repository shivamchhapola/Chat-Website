import mongoose from 'mongoose';

const ChatModel = mongoose.Schema(
  {
    chatName: {
      type: String,
      trim: true,
    },
    isGroupChat: {
      type: Boolean,
      trim: true,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    groupChat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'groupchat',
    },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model('Chat', ChatModel);

module.exports = Chat;
