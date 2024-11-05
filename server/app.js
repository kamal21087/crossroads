const express = require('express');
const cors = require('cors');
const restaurantRoutes = require("../server/routes/restaurantRoute");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/restaurants', restaurantRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
