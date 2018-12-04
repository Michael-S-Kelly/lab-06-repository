'use strict';

// application dependencies
const express = require('express');
const cors = require('cors');

// get project environment variables
require('dotenv').config();

// application constants
const PORT = process.env.PORT || 3000;
const app = express();

// application middleware (not that important yet)
app.use(cors());

//test route for checking to ensure API works
app.get('/testroute', function(request, response) {
  let animal = { type: 'turtle', name: 'tim' };
  response.json(animal);
});

// app.get('/location', (request, response) => {
//   console.log('my request object:', request);
//   const locationData = searchToLatLong(request.query.data);
//   response.send(locationData);
// });

// helper function goes here

// function searchToLatLong(query) {
//   const geoData = require('./data/geo.json');
//   const location = new Location(geoData.results[0]);
//   location.search_query = query;
//   return location;
// }

// function Location(data) {
//   this.formatted_query = data.formatted_address;
//   this.latitude = data.geometry.location.lat;
//   this.longitude = data.geometry.location.lng;
// }

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});