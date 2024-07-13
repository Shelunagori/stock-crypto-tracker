import express from 'express';
import morgan from 'morgan';
import { logger } from './config/loggerConfig';
import connectDB from './config/dbConfig';
import stockRoutes from './routes/stockRoutes';
import { assignRequestId, logRequest } from './middleware/loggerMiddleware';
const app = express();
// Middleware
app.use(express.json());
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));
app.use(assignRequestId);
app.use(logRequest);


// Routes
app.get("/health-check", (req, res) => {
    res.json("ALL GOOD");
});

app.use('/api', stockRoutes);


// Connect to MongoDB
connectDB();
export default app;