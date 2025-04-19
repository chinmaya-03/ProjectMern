// const User = require("./User");
// const Resistance = require("./Resistance");
// const Cardio = require("./Cardio");
// module.exports = { User, Resistance, Cardio };


const express = require('express');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/fitnesstracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('✅ MongoDB connected');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Your route handlers here

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});


