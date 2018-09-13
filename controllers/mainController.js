var bodyParser = require('body-parser');
var yelp = require('./yelpController');
var coordinates = {};

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

  app.get("/",function(req,res){
    res.render("main");
     // res.send(yelp.geoSearch(coordinates.lat,coordinates.long));
  });

  app.post("/",urlencodedParser,function(req,res){
    coordinates = req.body;
    console.log(coordinates.lat);
    //res.json(coordinates);
    var restauran = yelp.geoSearch(coordinates.lat,coordinates.long);
    res.json(restauran);
  });
};
