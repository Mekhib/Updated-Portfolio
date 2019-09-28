var APIKey = "e3e26770ea91f1526f1d91e4b4212507";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip=19104,us&units=imperial&appid=" + APIKey;

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(queryURL);
    console.log(response);
    $(".weather1").append("Current Temperature: " + response.main.temp + `\u00B0` + "F");
    $(".weather2").append("Today's High: " + response.main.temp_max + `\u00B0` + "F");
    $(".weather3").append("Today's Low: " + response.main.temp_min + `\u00B0` + "F");
    var icon = response.weather[0].icon
    var url = `http://openweathermap.org/img/wn/${icon}@2x.png`
    $('.weatherp').attr('src', url)
    $('.weatherp').append(response.weather[0].description)
});

$("#submit").on("click", function() {
    console.log("You clicked me!");
});