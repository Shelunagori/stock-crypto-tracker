import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { createNamespace } from 'cls-hooked';
import { logger, namespace } from '../config/loggerConfig';

export const assignRequestId = (req: Request, res: Response, next: NextFunction) => {
  namespace.bindEmitter(req);
  namespace.bindEmitter(res);

  const requestId = uuidv4();
  namespace.run(() => {
    namespace.set('requestId', requestId);
    next();
  });
};

export const logRequest = (req: Request, res: Response, next: NextFunction) => {
  const requestId = namespace.get('requestId');
  logger.info(`[${requestId}] ${req.method} ${req.url}`);
  next();
};
