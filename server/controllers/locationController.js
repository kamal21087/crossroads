const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.getLocations = async (req, res) => {
  try {
    const { category, location } = req.query;
    const radius = 1500; // Radius in meters, can be adjusted

    const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=${category}&key=${process.env.GOOGLE_API_KEY}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log(data.results);
    res.json(data.results);
  } catch (error) {
    console.error('Error fetching locations:', error);
    res.status(500).json({ error: 'Failed to retrieve locations' });
  }
};

