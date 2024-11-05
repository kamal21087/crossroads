const axios = require('axios');

async function getWeather(lat, lon) {
  const apiKey = process.env.WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  
  try {
    const response = await axios.get(url);
    const { temp, weather } = response.data.main;
    return {
      temperature: temp,
      description: weather[0].description
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}

module.exports = { getWeather };
