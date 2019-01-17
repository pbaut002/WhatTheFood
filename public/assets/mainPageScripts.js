
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      posLat = position.coords.latitude; // LATITTUDE
      posLong = position.coords.longitude; // LONGITUDE
      geoloc = true;

      /*
        POST request to get the list of restaurants
      */
      $.ajax({
          type:"POST",
          url:"/yelpQueryByCoords",
          data: {lat: posLat,long: posLong},
          success: function(data) {
            chooseRestaurant(data);
          },
        });

    }, function() {
      $("#location").html("<form id=\"userLocation\">" +
        "<input type=\"text\" name=\"location\"  id=\"location\" placeholder=\"Enter zipcode or city\">" + //
        "<input type=\"submit\" value=\"Submit\" >" + 
        "</form>");

      var queryString;
      $("#userLocation").submit(function(e){
          e.preventDefault();
          queryString = $("#userLocation [name=location]").val().toString(); // Gets the input of form
            alert(queryString);

            /*
               Gets list of restaurants using the inputted form
            */
            $.ajax({
              type:"POST",
              url:"/yelpQueryByLocation",
              data: {cityOrZip: queryString},
              success: function(data) {
                console.log("Success");
                chooseRestaurant(data);
              },
           });

        });

      
    });
  }

};


function chooseRestaurant(restaurants){
  /*
   Chooses from lists of restaurants. This is where randomization happens
  */
  var usedNumbers = []; // Stores the numbers within
  
  $("#initialButton").click(function(){
    var num = Math.floor(Math.random()*20);
    $("#initialButton").html("<strong>Next Restaurant</strong>");
    if(usedNumbers.includes(num) == false){
      $("#restName").html("<strong>" + restaurants[num].name + "</strong>");
      $("#restLoc").html("<strong>" + restaurants[num].location.address1 + ",</strong>" +
                          "<strong>" + restaurants[num].location.city + " </strong>" +
                          "<strong>" + restaurants[num].location.state+ " </strong>" +
                          "<strong>" + restaurants[num].location.zip_code+ " </strong>");
      usedNumbers.push(num);
    }

  })
}
  
getLocation();
