import Joi from 'joi';
import JoiPasswordComplexity from 'joi-password-complexity';

const ComplexityOptions = {
  min: 6,
  max: 30,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 0,
  requirementCount: 6,
};

export const RegistrationValidate = (data) => {
  const schema = Joi.object({
    name: Joi.string().label('Name').required(),
    email: Joi.string()
      .label('Email')
      .required()
      .email({ tlds: { allow: false } }),
    password: JoiPasswordComplexity(ComplexityOptions)
      .label('Password')
      .required(),
    confirmPassword: Joi.string().required().equal(data['password']).messages({
      'any.only': '"Confirm Password" must be same as "Password"',
    }),
  });
  return schema.validate(data);
};

export const LoginValidate = (data) => {
  const schema = Joi.object({
    username: Joi.string().label('Username/Email').required(),
    password: JoiPasswordComplexity(ComplexityOptions)
      .label('Password')
      .required(),
  });
  return schema.validate(data);
};
