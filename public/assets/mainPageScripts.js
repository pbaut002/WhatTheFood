
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
          url:"/yelpQuery",
          data: {lat: posLat,long: posLong},
          success: function(data) {
            chooseRestaurant(data);
          },
        });
    }, function() {
      $("#location").html("<form id=\"userLocation\" target=\"_\">" +
        "<input type=\"text\" placeholder=\"Enter zipcode or city\">" +
        "</form>");
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

  // $("#initialButton").click(function(){
  //   $("#restName").html(data);
  // })
