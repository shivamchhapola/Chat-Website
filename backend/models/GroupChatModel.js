import mongoose from 'mongoose';

const GroupChatModel = mongoose.Schema(
  {
    uniqueId: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: 'https://cdn-icons-png.flaticon.com/512/1769/1769041.png',
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    bio: {
      type: String,
      required: true,
      default: '',
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    rooms: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat',
      },
    ],
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const GroupChat = mongoose.model('GroupChat', GroupChatModel);

export default GroupChat;
