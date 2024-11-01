import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RestaurantDetail() {
  const { id } = useParams(); // Get the restaurant ID from the URL
  const [restaurant, setRestaurant] = useState(null);
  const [travelTime, setTravelTime] = useState(null);
  const [weather, setWeather] = useState(null);

  // Fetch restaurant details from the backend
  useEffect(() => {
    axios.get(`${process.env.VITE_BACKEND_URL}/api/restaurants/${id}`)
      .then(response => setRestaurant(response.data))
      .catch(error => console.log("Error fetching restaurant details:", error));
  }, [id]);

  // Fetch Google Maps travel time and Weather API data
  useEffect(() => {
    if (restaurant) {
      const userLocation = JSON.parse(localStorage.getItem('userLocation'));

      // Fetch travel time using Google Maps API
      axios.get(`https://maps.googleapis.com/maps/api/directions/json`, {
        params: {
          origin: `${userLocation.latitude},${userLocation.longitude}`,
          destination: restaurant.address,
          key: process.env.VITE_GOOGLE_MAPS_API_KEY,
        },
      })
      .then(response => {
        if (response.data.routes.length > 0) {
          setTravelTime(response.data.routes[0].legs[0].duration.text);
        }
      })
      .catch(error => console.log("Error fetching travel time:", error));

      // Fetch weather at the restaurant's location
      axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          lat: restaurant.latitude,
          lon: restaurant.longitude,
          appid: process.env.VITE_WEATHER_API_KEY,
          units: 'metric',
        },
      })
      .then(response => {
        setWeather({
          temp: response.data.main.temp,
          description: response.data.weather[0].description,
        });
      })
      .catch(error => console.log("Error fetching weather data:", error));
    }
  }, [restaurant]);

  return (
    <div className="container">
      {restaurant ? (
        <>
          <h1 className="title">{restaurant.name}</h1>
          <p><strong>Address:</strong> {restaurant.address}</p>
          <p><strong>Type:</strong> {restaurant.type}</p>
          <p><strong>Rooftop:</strong> {restaurant.rooftop ? 'Yes' : 'No'}</p>

          {travelTime && (
            <p><strong>Travel Time from Your Location:</strong> {travelTime}</p>
          )}

          {weather && (
            <div>
              <p><strong>Weather at Restaurant:</strong></p>
              <p>Temperature: {weather.temp}°C</p>
              <p>Conditions: {weather.description}</p>
            </div>
          )}
        </>
      ) : (
        <p>Loading restaurant details...</p>
      )}
    </div>
  );
}

export default RestaurantDetail;
