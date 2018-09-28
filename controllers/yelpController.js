const yelpFusion = require('yelp-fusion');

var apiKey = process.env.SECRET;

const yelp = yelpFusion.client(apiKey);


function getRestaurantsByGeo(lat, long) {
  yelp.search({
    latitude: lat,
    longitude: long,
    radius: 40000
  }).then(response => {
    console.log(response.jsonBody.businesses[0]); //response.jsonBody is the list of JSON items
  }).catch(e => {
    console.log(e);
  });


};


module.exports = {
  geoSearch: getRestaurantsByGeo
};
