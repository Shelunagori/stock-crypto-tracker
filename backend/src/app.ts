import express from 'express';
import connectDB from './config/dbConfig';
import stockRoutes from './routes/stockRoutes';
const app = express();
// Middleware
app.use(express.json());


// Routes
app.get("/health-check", (req, res) => {
    res.json("ALL GOOD");
});

app.use('/api', stockRoutes);


// Connect to MongoDB
connectDB();
export default app;