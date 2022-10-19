import expressAsyncHandler from 'express-async-handler';
import Joi from 'joi';
import { generateToken } from '../config/jwt.js';
import User from '../models/UserModel.js';

//Main Login function handled by expressAsyncHandler to catch errors
const login = expressAsyncHandler(async (req, res) => {
  const { username, password } = req.body;

  //Empty fields check
  if (!username) return res.status(500).send('"username" not found in body');
  if (!password) return res.status(500).send('"password" not found in body');

  //Check if the provided value in the username field is an Email address
  const isEmail = Joi.string()
    .email({ tlds: { allow: false } })
    .validate(username).error
    ? false
    : true;

  //Finds an user with the provided Email
  const user = await User.findOne(isEmail ? { email: username } : { username });
  if (!user)
    return res
      .status(500)
      .send('Could not find an account with given Username/Email');

  if (user && user.matchPass(password))
    return res.status(200).json({
      name: user.name,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
});

export default login;
