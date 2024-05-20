import express from 'express';

const app = express();

app.get('/', (req, res) => {
  const PORT = process.env.PORT || 3000;
  res.send(`Hello from Sara, Server is running on port ${PORT}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
