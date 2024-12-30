// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/addresses', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Address Schema
const addressSchema = new mongoose.Schema({
  house: String,
  apartment: String,
  category: String,
});

const Address = mongoose.model('Address', addressSchema);

// Routes
app.get('/addresses', async (req, res) => {
  const addresses = await Address.find();
  res.json(addresses);
});

app.post('/addresses', async (req, res) => {
  const newAddress = new Address(req.body);
  await newAddress.save();
  res.status(201).json(newAddress);
});

app.delete('/addresses/:id', async (req, res) => {
  await Address.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

// Start server
app.listen(5000, () => console.log('Server running on port 5000'));
