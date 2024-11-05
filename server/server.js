const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const locationRoutes = require('./routes/location');
const db = require('./models'); // Import database and models


dotenv.config(); // configure the dotenv module. 
const app = express(); // create an express application.
app.use(express.json()); // use the express.json() middleware to parse incoming requests with JSON payloads.

// Use routes
app.use('/auth', authRoutes); // use the auth routes.
app.use('/location', locationRoutes); // use the location routes.

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

