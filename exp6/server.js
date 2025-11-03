const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const todoRoutes = require('./routes/todoRoutes');

const app = express();

// Middleware
app.use(express.json());  // built-in middleware for JSON
app.use(logger);        
app.use((req, res, next) => {
    console.log("✅ Test middleware reached");
    next();
  })  

// Routes
app.use('/api/todos', todoRoutes);

// Error Handling Middleware
app.use(errorHandler);    

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/exp6db')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ DB Connection Error:', err.message));

app.listen(8000, () => {
  console.log('🚀 Server running on port 8000');
});