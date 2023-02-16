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
        ref: 'User',
      },
    ],
    groupChat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'GroupChat',
    },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model('Chat', ChatModel);

export default Chat;
