import Stock from '../models/stockModel';
import apiClient from '../utils/apiClient';

class StockService {

  async fetchStocksList() {
    try {
      const response = await apiClient.get(`/markets?vs_currency=usd&per_page=100&page=1`);
      const stocksData = response.data.map((item: any) => ({
        api_id: item.id,
        name: item.name,
        image: item.image,
        symbol: item.symbol,
        current_price: item.current_price,
        last_updated: item.last_updated
      }));
      await Stock.insertMany(stocksData);    
      return stocksData;
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
