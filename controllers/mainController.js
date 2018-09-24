var bodyParser = require('body-parser');
var yelp = require('./yelpController');
var coordinates = {};

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

  //Handles all GET requests from the site
  app.get("/",function(req,res){
    res.render("main");
  });

  app.post("/",urlencodedParser,function(req,res){
  });
};
