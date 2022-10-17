import expressAsyncHandler from 'express-async-handler';
import Joi from 'joi';
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

  //Password verification
  if (user && user.password !== password)
    return res.status(400).send('Incorrect Username/Email or Passoword');

  if (user) return res.status(200).send(user);
});

export default login;
