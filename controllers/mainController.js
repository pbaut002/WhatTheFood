module.exports = function(app){

  app.get("/",function(req,res){
    res.render("main");
  });

  app.post("/",function(req,res){

  });
};
