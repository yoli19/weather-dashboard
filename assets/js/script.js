var getCityWeather = function() {
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&appid=aa7982e284ea366d41b02f49e85f3779";

    fetch(apiUrl).then(function(response) {
        response.json().then(function (data) {
            console.log(data);
        });
    });
};

getCityWeather();