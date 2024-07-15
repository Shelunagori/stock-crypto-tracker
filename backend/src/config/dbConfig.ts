import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  const dbUri = process.env.NODE_ENV === 'test' ? process.env.MONGO_URI_TEST : process.env.MONGO_URI_DEV;
  try {
    await mongoose.connect(dbUri!);
    console.log('MongoDB connected');
  } catch (error) {
    const err = error as Error;
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log('MongoDB disconnected');
  } catch (error) {
    const err = error as Error;
    console.error(`Error disconnecting from MongoDB: ${err.message}`);
  }
};

export { connectDB, disconnectDB };
