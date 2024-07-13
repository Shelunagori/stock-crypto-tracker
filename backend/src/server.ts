import app from './app';

app.get("/health-check", (req, res) => {
    res.json("ALL GOOD");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
