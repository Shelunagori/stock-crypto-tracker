import { connectDB, disconnectDB } from '../src/config/dbConfig';
import StockService from '../src/services/stockService';

const seed = async (): Promise<void> => {
  try {
    await connectDB();
    await StockService.syncStockList();
    console.log('Stock list synchronized successfully');
  } catch (error: any) {
    console.error(`Error fetching data: ${error.message}`);
    throw error;
  } finally {
    await disconnectDB();
  }
};

seed()
  .then(() => {
    console.log('Data seeding completed successfully.');
  })
  .catch(error => {
    console.error('Error during data seeding:', error);
  });
