import cron from 'node-cron';
import StockService from '../services/stockService';
import { logger } from '../config/loggerConfig';

export function initializeScheduler() {
    cron.schedule('0 */5 * * * *', async () => {
        try {
            console.log("CRON date & time ",    new Date().toLocaleDateString(),  new Date().toLocaleTimeString())
            await StockService.syncStockList();
        } catch (error: any) {
            logger.error(`Error while fetching coins list: ${error.message}`);
        }
    });
    console.log('Task scheduled to run every 5 minute.');
}
