const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const locationRoutes = require('./routes/location');
const db = require('./models'); // Import database and models

dotenv.config();
const app = express();
app.use(express.json());

// Use routes
app.use('/auth', authRoutes);
app.use('/location', locationRoutes);

// Sync models with the database
db.sequelize.sync().then(() => {
  // Start server after syncing
  const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
}).catch((error) => {
  console.error('Error syncing with the database:', error);
});
