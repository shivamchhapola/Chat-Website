import express from 'express';
import dotenv from 'dotenv';
import { ConnectDB } from './config/db.js';
import { joinRouter } from './routes/join.js';

dotenv.config();

const app = express();
app.use(express.json()); //To enable JSON
ConnectDB(); //Establish Connection with MongoDB

//Api Home
app.get('/', (req, res) => {
  res.status(200).send('Nothing Here');
});

//User Signup and Login stuff
app.use(joinRouter);

app.listen(process.env.PORT || '5000', () => {
  console.log('Server Started on ' + (process.env.PORT || '5000'));
});
