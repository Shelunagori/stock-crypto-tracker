import { Router } from 'express';
import StockController from '../controllers/stockController';

const router = Router();

router.get('/stock/list', StockController.fetchStockList);
router.get('/stock/:symbol/prices', StockController.getStockPrices);

export default router;
