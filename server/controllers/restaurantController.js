const Restaurant = require('../models/Restaurant'); // import the Restaurant model from the models folder.
const googleMapsService = require("../services/googleMapsService"); 
const weatherService = require("../services/weatherService");

exports.getRestaurants = async (req, res) => { // async function to get all restaurants. 
  try {
    const restaurants = await Restaurant.findAll(); // fetch all restaurants from the database
    res.json(restaurants);
  } catch (error) { // error handling in case of failure to fetch restaurants from the database. 
    res.status(500).json({ error: 'Failed to fetch restaurants' }); // send a 500 status code and an error message.
  }
};

exports.addRestaurant = async (req, res) => { // async function to add a new restaurant. 
  const { name, address, rooftop, type } = req.body; // get the name, address, rooftop, and type from the request body.
  try {                                               // try block to add a new restaurant to the database. 
    const newRestaurant = await Restaurant.create({ name, address, rooftop, type }); // create a new restaurant in the database. 
    res.json(newRestaurant);
  } catch (error) { // error handling in case of failure to add a new restaurant to the database. 
    res.status(500).json({ error: 'Failed to add restaurant' });  
  }
};

exports.getRestaurantById = async (req, res) => { // async function to get a restaurant by ID.
  try { // try block to fetch a restaurant by ID. 
    const restaurant = await Restaurant.findByPk(req.params.id); // find a restaurant by its primary key (ID).  
    if (restaurant) { // if the restaurant is found, return it.   
      res.json(restaurant);
    } else { // if the restaurant is not found, return an error message. 
      res.status(404).json({ error: 'Restaurant not found' }); 
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch restaurant' }); 
  }
};

exports.deleteRestaurant = async (req, res) => { // async function to delete a restaurant by ID.  
  try { 
    const restaurant = await Restaurant.findByPk(req.params.id);
    if (restaurant) {
      await restaurant.destroy();
      res.json({ message: 'Restaurant deleted' });
    } else {
      res.status(404).json({ error: 'Restaurant not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete restaurant' });
  }
};


async function getRestaurantDetails(req, res) {
  const { currentLocation, restaurantAddress, restaurantLat, restaurantLon } = req.query;

  try {
    const travelTime = await googleMapsService.getTravelTime(currentLocation, restaurantAddress);
    const weather = await weatherService.getWeather(restaurantLat, restaurantLon);

    res.json({
      travelTime,
      weather
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurant details" });
  }
}

module.exports = { getRestaurantDetails };
