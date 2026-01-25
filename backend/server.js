const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

//миддлвары
app.use(cors());
app.use(express.json()); // Чтобы сервер понимал формат JSON

mongoose.connect('mongodb://localhost:27017/portfolio')
  .then(() => console.log('Ура! Мы подключились к MongoDB в Docker!'))
  .catch(err => console.error('Ошибка подключения к базе:', err));

app.get('/', (req, res) => {
  res.send('Сервер запущен и работает!');
});

app.listen(PORT, () => {
  console.log(`Сервер стартовал на http://localhost:${PORT}`);
});
