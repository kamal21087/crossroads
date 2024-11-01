const express = require('express');
const router = express.Router();
const { getRestaurants, addRestaurant, getRestaurantById, deleteRestaurant } = require('../controllers/restaurantController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, getRestaurants);
router.post('/', authMiddleware, addRestaurant);
router.get('/:id', authMiddleware, getRestaurantById);
router.delete('/:id', authMiddleware, deleteRestaurant);

module.exports = router;
