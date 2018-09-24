
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        posLat = position.coords.latitude; // LATITTUDE
        posLong = position.coords.longitude; // LONGITUDE
        geoloc = true;
      }, function() {
        $("#location").html("<form id=\"userLocation\" target=\"_\">" +
          "<input type=\"text\" placeholder=\"Enter zipcode or city\">" +
          "</form>");
      });
    }
  };

  getLocation();
