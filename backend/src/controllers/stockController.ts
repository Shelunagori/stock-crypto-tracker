import { Request, Response, NextFunction } from 'express';
import StockService from '../services/stockService';
import { asyncHandler } from '../utils/asyncHandler';

class StockController {
  fetchStockList = asyncHandler(async (req: Request, res: Response) => {
    const stock = await StockService.fetchStocksList();
    res.json(stock);
  });

  getStockPrices = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { symbol } = req.params;
    const stocks = await StockService.getStockPrices(symbol);
    res.json(stocks);
  });
}

export default new StockController();
