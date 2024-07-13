import express from 'express';
const app = express();
// Middleware
app.use(express.json());
export default app;