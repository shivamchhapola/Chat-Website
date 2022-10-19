import expressAsyncHandler from 'express-async-handler';
import { nanoid } from 'nanoid'; //Used to generate unique username
import User from '../models/UserModel.js';
import Joi from 'joi';
import JoiPasswordComplexity from 'joi-password-complexity';
import { generateToken } from '../config/jwt.js';

//Sets requirements for password
const ComplexityOptions = {
  min: 6,
  max: 30,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 0,
  requirementCount: 6,
};

//Joi Validation Schema for different input values
const validationSchema = Joi.object({
  username: Joi.string().required(),
  name: Joi.string().required(),
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } }),
  password: JoiPasswordComplexity(ComplexityOptions).required(),
});

//Main signup function handled by expressAsyncHandler to catch errors
const signup = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const username = req.body.username || nanoid(10); //provides a randomly generated username if not provided in the request body.

  //Empty fields check
  if (!name) return res.status(500).send('"name" not found in body');
  if (!email) return res.status(500).send('"email" not in body');
  if (!password) return res.status(500).send('"password" not in body');

  //Packs the data in a single variable for more redability
  const data = { username, name, email, password };

  //Joi Validation using the Schema created above
  const validate = validationSchema.validate(data);
  if (validate.error)
    return res.status(400).send(validate.error.details[0].message);

  //Checks if the Email already exists in the DB
  const alreadyExists = await User.findOne({ email });
  if (alreadyExists)
    return res.status(400).send('An account with this Email already exists');

  //Inserts the data into User collection
  const user = await User.create(data).catch((err) => {
    return res.status(500).send('Could not create an account: ' + err);
  });
  if (user)
    return res.status(200).json({
      name: user.name,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
});

export default signup;
