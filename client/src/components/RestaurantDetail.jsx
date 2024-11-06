import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { restaurantData } from "../services/restaurantServices";
import axios from 'axios';

function RestaurantDetail() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [travelTime, setTravelTime] = useState('');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Find the restaurant data by ID
    const selectedRestaurant = restaurantData.find((item) => item.id === parseInt(id));
    setRestaurant(selectedRestaurant);

    // Fetch travel time and weather info if location and restaurant data exist
    if (selectedRestaurant) {
      const userLocation = JSON.parse(localStorage.getItem('userLocation'));
      if (userLocation) {
        fetchTravelTime(userLocation, selectedRestaurant.address);
        fetchWeather(selectedRestaurant.address);
      }
    }
  }, [id]);

  // Fetch travel time from Google Maps API
  const fetchTravelTime = async (userLocation, destination) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${userLocation}&destinations=${destination}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`
      );
      const travelInfo = response.data.rows[0].elements[0];
      setTravelTime(travelInfo.duration.text);
    } catch (error) {
      console.error('Error fetching travel time:', error);
    }
  };

  // Fetch weather data from Weather API
  const fetchWeather = async (destination) => {
    try {
      // Fetch geolocation for the address
      const geocodeResponse = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${destination}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`
      );
      const location = geocodeResponse.data.results[0].geometry.location;

      // Use the location coordinates to fetch weather
      const weatherResponse = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${location.lat},${location.lng}`
      );
      setWeather(weatherResponse.data.current);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  if (!restaurant) return <p>Loading restaurant details...</p>;

  return (
    <div className="container">
      <h1 className="title">{restaurant.name}</h1>
      <p><strong>Address:</strong> {restaurant.address}</p>
      <p><strong>Type:</strong> {restaurant.type}</p>
      <p><strong>Rooftop:</strong> {restaurant.rooftop ? 'Yes' : 'No'}</p>
      <p><a href={restaurant.website} target="_blank" rel="noopener noreferrer">Visit Website</a></p>

      {travelTime && (
        <p><strong>Estimated Travel Time:</strong> {travelTime}</p>
      )}

      {weather && (
        <div>
          <h2 className="subtitle">Current Weather</h2>
          <p><strong>Temperature:</strong> {weather.temp_c}°C</p>
          <p><strong>Condition:</strong> {weather.condition.text}</p>
          <img src={weather.condition.icon} alt="Weather icon" />
        </div>
      )}
    </div>
  );
}

export default RestaurantDetail;
