import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ConnectDB } from './config/db.js';
import { joinRouter } from './routes/join.js';
import { groupRouter } from './routes/group.js';
import { errorHandler, notFound } from './middleware/error.js';
import { userRouter } from './routes/user.js';
import { messageRouter } from './routes/message.js';
import { personalRouter } from './routes/personal.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); //To enable JSON
ConnectDB(); //Establish Connection with MongoDB

//Api Home
app.get('/', (req, res) => {
  res.status(200).send('Nothing Here');
});

//User, Signup and Login stuff
app.use('/api', joinRouter);

//Groupchat related stuff
app.use('/api/group', groupRouter);

//User related stuff
app.use('/api/user', userRouter);

//Message related stuff
app.use('/api/message', messageRouter);

//Personal Message stuff
app.use('/api/personal', personalRouter);

//Error Handling
app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || '9000', () => {
  console.log('Server Started on ' + (process.env.PORT || '9000'));
});
