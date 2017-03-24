$(function() {

  function getQuote(lat, lon) {
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=06056baaac623ac8cf8ea30e51d60e20",
      dataType: "jsonp",
      success: function(data) {
        console.log(data);
        data;
      }
     }); 
  }

  var x = document.getElementById("demo");
  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(updatePosition);
      } else {
          x.innerHTML = "Geolocation is not supported by this browser.";
      }
  }
  function updatePosition(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude; 
      getQuote(lat, lon);
  }

  getLocation()

});