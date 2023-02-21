import expressAsyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

export const authUser = expressAsyncHandler(async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(500).send('Invalid Token');
      req.token = authHeader;
      req.user = user;
      next();
    });
  } else return res.status(401).send('Enter User Token');
});
