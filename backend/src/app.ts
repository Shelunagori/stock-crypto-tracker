import express from 'express';
const app = express();
// Middleware
app.use(express.json());

app.get("/health-check", (req, res) => {
    res.json("ALL GOOD");
});

export default app;