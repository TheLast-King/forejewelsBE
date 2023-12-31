const express = require('express');
const mongoose = require('mongoose');
const inventoryRoutes = require('./routes/inventoryRoutes');
const itemRoutes = require('./routes/itemRoutes');
const connectDB = require('./config/database');
const cors = require("cors")
const app = express();

// Connect to MongoDB
connectDB();
app.use(cors())

// Middleware
app.use(express.json());

// Routes
app.use('/api', inventoryRoutes);
// app.use('/api', itemRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
