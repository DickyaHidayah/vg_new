const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectDb } = require('./models');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server sedang jalan di ${PORT}`);
  });
});
