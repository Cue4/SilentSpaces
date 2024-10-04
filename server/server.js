const express = require('express');
const cors = require('cors');
const db = require('./config/connection');
const routes = require('./routes');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(cors());  // Still needed for handling Cross-Origin requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes
app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something broke!' });
});

// Start server after DB connection
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});