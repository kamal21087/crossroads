// routes/location.js
const express = require('express');
const locationController = require('../controllers/locationController');
const router = express.Router();

router.get('/', locationController.getLocations);

module.exports = router;
