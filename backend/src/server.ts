import app from './app';
import { initializeScheduler } from './scheduler/syncData';
import dotenv from 'dotenv';
dotenv.config();


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
  initializeScheduler();
});
