import jwt from 'jsonwebtoken';

export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

export const verifyToken = (token) => {
  jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
    if (err) throw err;
    return data;
  });
};
