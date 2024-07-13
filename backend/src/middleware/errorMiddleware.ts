import { Request, Response, NextFunction } from 'express';
import { logger } from '../config/loggerConfig';

interface ErrorHandler extends Error {
  statusCode?: number;
}

const errorHandlerMiddleware = (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  logger.error(`Error: ${message}`);

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });
};

export default errorHandlerMiddleware;
