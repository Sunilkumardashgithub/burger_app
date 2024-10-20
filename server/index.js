const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes'); // Import the order routes

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(
  'mongodb+srv://babusunil453:sunil410453@cluster0.kddoa.mongodb.net/burgerDB?retryWrites=true&w=majority', 
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  });

app.use('/api/order', orderRoutes); // Use the order routes


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
