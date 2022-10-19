import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ConnectDB } from './config/db.js';
import { joinRouter } from './routes/join.js';
import { errorHandler, notFound } from './middleware/error.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); //To enable JSON
ConnectDB(); //Establish Connection with MongoDB

//Api Home
app.get('/', (req, res) => {
  res.status(200).send('Nothing Here');
});

//User Signup and Login stuff
app.use('/api', joinRouter);

//Error Handling
app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || '5000', () => {
  console.log('Server Started on ' + (process.env.PORT || '5000'));
});
