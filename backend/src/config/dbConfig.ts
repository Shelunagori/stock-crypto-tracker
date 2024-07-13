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

export default connectDB;
