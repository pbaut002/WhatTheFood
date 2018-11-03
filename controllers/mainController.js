require('dotenv').config();

var bodyParser = require('body-parser');
const yelpFusion = require('yelp-fusion');
var apiKey = process.env.SECRET;

const yelp = yelpFusion.client(apiKey);


var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

  //Handles all GET requests from the site
  app.get("/",function(req,res){
    console.log("hello");
    res.render("main");
  });

  app.post("/sendCoords",urlencodedParser,function(req,res){
    // coordinates.push(req.body);
    // console.log(coordinates[0].long);
    // console.log("success");
  });

  app.post("/yelpQueryByCoords",urlencodedParser,function(req,res){
    var coordinates = [];
    coordinates.push(req.body);
    console.log(req.body);
    yelp.search({
      latitude: coordinates[0].lat,
      longitude: coordinates[0].long,
      radius: 40000
    }).then(response => {
      res.send(response.jsonBody.businesses);
    }).catch(e => {
      console.log(e);
    });
  });

  app.post("/yelpQueryByLocation",urlencodedParser,function(req,res){
    var coordinates = [];
    console.log(req.body);
    coordinates.push(req.body);
    console.log(coordinates[0].cityOrZip);
    yelp.search({
      location: coordinates[0].cityOrZip,
      radius: 40000
    }).then(response => {
      res.send(response.jsonBody.businesses);
    }).catch(e => {
      console.log(e);
    });
  });

  app.post("/",urlencodedParser,function(req,res){
  });
};

// console.log(response.jsonBody.businesses[0].name); //response.jsonBody is the list of JSON items
// console.log(response.jsonBody.businesses);