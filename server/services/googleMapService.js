const axios = require('axios');

async function getTravelTime(origin, destination) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}`;
  
  try {
    const response = await axios.get(url);
    const { duration } = response.data.routes[0].legs[0];
    return duration.text;  // e.g., "25 mins"
  } catch (error) {
    console.error("Error fetching travel time:", error);
    throw error;
  }
}

module.exports = { getTravelTime };
