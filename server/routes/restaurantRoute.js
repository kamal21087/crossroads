const express = require('express'); // import the express module.
const router = express.Router(); // create a new router object. A router object is an isolated instance of middleware and routes.     
const restaurantController = require('../controllers/restaurantController'); // import the restaurant controller.
const { getRestaurants, addRestaurant, getRestaurantById, deleteRestaurant } = require('../controllers/restaurantController'); // import the controller functions.  
const authMiddleware = require('../middleware/authMiddleware'); // import the authentication middleware.

router.get('/details', restaurantController.getRestaurantDetails); // define the route for the restaurant details API.
router.get('/', authMiddleware, getRestaurants); // define the routes for the restaurant API.  
router.post('/', authMiddleware, addRestaurant); // use the authMiddleware to protect the routes. 
router.get('/:id', authMiddleware, getRestaurantById); // define the routes for the restaurant API.
router.delete('/:id', authMiddleware, deleteRestaurant); // use the authMiddleware to protect the routes.

module.exports = router;  
 