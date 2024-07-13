import winston from 'winston';
import { v4 as uuidv4 } from 'uuid';
import { createNamespace } from 'cls-hooked';

const namespace = createNamespace('stock-request');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  defaultMeta: { service: 'stock-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: './logs/combined.log' }),
  ],
});

export { logger, namespace, uuidv4 };
