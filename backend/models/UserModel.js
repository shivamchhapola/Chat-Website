import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      default: 'Bruh',
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      require: true,
    },
    pic: {
      type: String,
      default: 'https://cdn-icons-png.flaticon.com/512/456/456283.png',
    },
    groups: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'GroupChat',
      },
    ],
    chats: [
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

UserSchema.methods.matchPass = async function (password) {
  let match = false;
  await bcrypt.compare(password, this.password).then((res) => (match = res));
  return match;
};

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', UserSchema);

export default User;
