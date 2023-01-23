import mongoose from 'mongoose';

export const ConnectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to Database');
  } catch (e) {
    console.log('Could not Connect to Database: ' + e);
    process.exit(0);
  }
};
