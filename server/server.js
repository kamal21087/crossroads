const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const locationRoutes = require('./routes/location');

dotenv.config();
const app = express();
app.use(express.json());

// Use routes
app.use('/auth', authRoutes);
app.use('/location', locationRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});