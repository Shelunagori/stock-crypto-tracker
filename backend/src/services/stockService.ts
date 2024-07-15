import Stock from '../models/stockModel';
import apiClient from '../utils/apiClient';
import { logger } from '../config/loggerConfig';
class StockService {

  async fetchStocksList() {
    try {
      const coinList = await Stock.find({}, { prices: { $slice: 20 } });
      return coinList;
    } catch (error: any) {
      logger.error(`Error while fetching coins list: ${error.message}`);
      throw new Error(error.message);
    }
  }

  async syncStockList() {
    try {      
      const response = await apiClient.get(`/markets?vs_currency=usd&per_page=50&page=1`);
      const bulkOps = response.data.map((stockData: any) => {
        return {
          updateOne: {
            filter: { api_id: stockData.id },
            update: {
              $set: {
                name: stockData.name,
                image: stockData.image,
                symbol: stockData.symbol,
              },
              $push: {
                prices: {
                  $each: [{
                    current_price: stockData.current_price,
                    last_updated: stockData.last_updated,
                  }],
                  $position: 0,
                },
              },
            },
            upsert: true,
          },
        };
      });
      return await Stock.bulkWrite(bulkOps);
    } catch (error:any) {
      logger.error(`Error while fetching coins list: ${error.message}`);
      throw new Error(error.message);
    }
  }

  async getStockPrices(symbol: string) {
    try {
      const stock = await Stock.findOne({ symbol });
      if (!stock) {
        throw new Error('Stock not found');
      }
      stock.prices = stock.prices.slice(0, 20);
      return stock;
    } catch (error: any) {
      logger.error(`Error while getting stock prices: ${error.message}`);
      throw new Error('Unable to get stock prices');
    }
  }
}

export default new StockService();
