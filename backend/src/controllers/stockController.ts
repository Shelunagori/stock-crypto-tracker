import { Request, Response, NextFunction } from 'express';
import StockService from '../services/stockService';
class StockController {
  
  async fetchStockList(req: Request, res: Response) {
    try {      
      const stock = await StockService.fetchStocksList();
      res.json(stock);
    } catch (error : any) {
        throw new Error(error.message);
    }
  }
  
  async getStockPrices(req: Request, res: Response, next: NextFunction) {
    try {
      const { symbol } = req.params;
      const stocks = await StockService.getStockPrices(symbol);
      res.json(stocks);
    } catch (error : any) {
        throw new Error(error.message);
    }
  }
}

export default new StockController();
