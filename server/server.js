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

// what ChatGPT recommended:
// --------------------------------------------
// require('dotenv').config();
// const express = require('express');
// const sequelize = require('./config/db');
// const restaurantRoutes = require('./routes/restaurantRoutes');

// const app = express();
// app.use(express.json());

// app.use('/api/restaurants', restaurantRoutes);

// sequelize.sync()
//   .then(() => {
//     app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
//   })
//   .catch((err) => console.log('Error: ' + err));
// --------------------------------------------