import mongoose from 'mongoose';

const MessageModel = mongoose.Schema(
  {
    sender: {
      type: String,
      trim: true,
    },
    content: {
      type: String,
      trim: true,
    },
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chat',
    },
    pic: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model('Message', MessageModel);

export default Message;
