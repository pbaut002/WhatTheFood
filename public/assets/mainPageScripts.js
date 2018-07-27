
var posLat;
var posLong;

// Gets Location of User
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    posLat = position.coords.latitude;
    posLong = position.coords.longitude;
  });
};

document.addEventListener('DOMContentLoaded',function() {
  document.getElementById('nextRestaurant').onclick=function(){
    $("#restName").html(posLat + " " + posLong);
  };
});
