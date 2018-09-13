$(document).ready(function() {
  var posLat;
  var posLong;
  var zipcode;
  var geoloc = false;

  // Gets Location of User

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        posLat = position.coords.latitude; // LATITTUDE
        posLong = position.coords.longitude; // LONGITUDE
        geoloc = true;
      }, function() {
        $("#location").html("<form id=\"userLocation\" target=\"www.facebook.com\">" +
          "<input type=\"text\" placeholder=\"Enter zipcode or city\">" +
          "</form>");
      });
    }
  };

  getLocation();


  $(document).on('click', "#initialButton", function() {
    $("#clickButton").html("<button id=\"nextRestaurant\"><strong>Start Looking</strong></button>");
    var coordinates = {lat: posLat, long: posLong};

    if(geoloc){
      $.ajax({
        type: "POST",
        url: "/",
        data: coordinates,
        success: function(){
          //location.reload();
        }
      });
    } else{ // Case of zip code/city"
      console.log(document.getElementById("userLocation").value);
    }

  });

  $(document).on('click',"#nextRestaurant",function(){
    $("#restName").html(posLat + " " + posLong);
  });



});
