// routes/restaurantRoutes.js
const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

// Add a new restaurant
router.post('/add', async (req, res) => {
  try {
    const newRestaurant = await Restaurant.create(req.body);
    res.json(newRestaurant);
  } catch (error) {
    res.status(500).json({ message: 'Error adding restaurant', error });
  }
});

// Delete a restaurant
router.delete('/delete/:id', async (req, res) => {
  try {
    await Restaurant.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Restaurant deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting restaurant', error });
  }
});

module.exports = router;
