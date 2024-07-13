import Stock from '../models/stockModel';
import apiClient from '../utils/apiClient';

class StockService {

  async fetchStocksList() {
    try {
      const response = await apiClient.get(`/markets?vs_currency=usd&per_page=3&page=1`);
      const bulkOps = response.data.map((stockData:any) => {
        return {
          updateOne: {
            filter: { api_id: stockData.id },
            update: {
              $set: {
                current_price: stockData.current_price,
                last_updated: new Date(stockData.last_updated)
              },
              $setOnInsert: {
                api_id: stockData.id,
                name: stockData.name,
                image: stockData.image,
                symbol: stockData.symbol
              }
            },
            upsert: true
          }
        };
      });
      await Stock.bulkWrite(bulkOps); 
      return response.data.map((stockData: any) => ({
        app_id: stockData.id,
        symbol: stockData.symbol,
        name: stockData.name,
        image: stockData.image,
        current_price: stockData.current_price,
        last_updated: stockData.last_updated
      }));
    } catch (error:any) {
      throw new Error(error.message);
    }
  }


  async getStockPrices(symbol: string) {
    try {
      const stocks = await Stock.find({ symbol }).sort({ timestamp: -1 }).limit(20);
      return stocks;
    } catch (error) {
      throw new Error('Unable to get stock prices');
    }
  }
}

export default new StockService();
