import express from 'express';
import cors from 'cors';
import connectDB from './config/dbConfig';
import stockRoutes from './routes/stockRoutes';
import { assignRequestId, logRequest } from './middleware/loggerMiddleware';
import errorHandlerMiddleware from './middleware/errorMiddleware';
const app = express();
// Middleware
app.use(cors({
    origin: process.env.CORS_PROXY_URL
}));
app.use(express.json());
app.use(assignRequestId);
app.use(logRequest);
// Routes
app.get("/health-check", (req, res) => {
    res.json("ALL GOOD");
});

app.use('/api', stockRoutes);

// Error handling middleware
app.use(errorHandlerMiddleware);
// Connect to MongoDB
connectDB();
export default app;