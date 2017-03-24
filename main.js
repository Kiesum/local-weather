$(function() {

  var temperatureKelvin;
  var temperatureCelcius;
  var temperatureFarenheit;

  function updatePosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude; 
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=06056baaac623ac8cf8ea30e51d60e20",
      dataType: "jsonp",
      success: function(data) {
        console.log(data);
        $('#location').html(data.name + ", " + data.sys.country);
        temperatureKelvin = data.main.temp;
        toCelcius();
      }
     }); 
  }

  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(updatePosition);
      } else {
          x.innerHTML = "Geolocation is not supported by this browser.";
      }
  }

  function toCelcius() {
    temperatureCelcius = Math.floor(temperatureKelvin - 273.15);
    $('#temperature').html(temperatureCelcius + " &degC");
  } 

  function toFarenheit() {
    temperatureFarenheit = Math.floor(9/5 * (temperatureKelvin - 273) + 32);
    $('#temperature').html(temperatureFarenheit + " &degF");
  }
  // function updatePosition(position) {
  //     var lat = position.coords.latitude;
  //     var lon = position.coords.longitude; 
  //     getQuote(lat, lon);
  // }

  $('#farenheit').on('click', function() {
    toFarenheit();
  });

  $('#celcius').on('click', function() {
    toCelcius();
  });

  getLocation()

});