const express = require('express'); // import the express module.
const dotenv = require('dotenv'); // import the dotenv module. 
const authRoutes = require('./routes/auth'); // import the auth routes.
const locationRoutes = require('./routes/location'); // import the location routes.

dotenv.config(); // configure the dotenv module. 
const app = express(); // create an express application.
app.use(express.json()); // use the express.json() middleware to parse incoming requests with JSON payloads.

// Use routes
app.use('/auth', authRoutes); // use the auth routes.
app.use('/location', locationRoutes); // use the location routes.

// Start server
const PORT = process.env.PORT || 3000; // set the port number. 
app.listen(PORT, () => { // start the server.
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