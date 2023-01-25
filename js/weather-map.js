$(document).ready(function() {
    "use strict";

    let cityInput = document.getElementById('searchInput').value;

    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: keys.openWeather,
        q: 'San Antonio, US',
        units: "imperial"
    }).done(function (data) {

        // Convert unix timestamp to usable date
        let unixDate = data.dt;
        let milliseconds = unixDate * 1000;
        let dateObject = new Date(milliseconds);
        let currentDate = dateObject.toLocaleString();
        let wkDay = dateObject.toLocaleString("en-US", {weekday: "long"}) // Monday
        let month = dateObject.toLocaleString("en-US", {month: "long"}) // December
        let dtDay = dateObject.toLocaleString("en-US", {day: "numeric"}) // 9
        let year = dateObject.toLocaleString("en-US", {year: "numeric"}) // 2019
        let readableDate = dtDay + ' ' + month + ' ' + year;

        $('.dateToday').html(readableDate);

        let city = data.name;
        $('.currentCity').html(city);

        let currentTemp = data.main.temp;
        $('.currentTemp').html(currentTemp);

    })

    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: keys.openWeather,
        q: 'San Antonio, US',
        units: "imperial"
    }).done(function (data) {
        let forecast = data.list;
        console.log(forecast);
        let dayOne = forecast[3];
        console.log(dayOne);
        let dayTwo = forecast[11];
        console.log(dayTwo);
        let dayThree = forecast[19];
        console.log(dayThree);
        let dayFour = forecast[27];
        console.log(dayFour);
        let dayFive = forecast[35];
        console.log(dayFive);

        $('.dayOneSnap, .dayOneDate').html(dayOne.dt_txt);
        $('.dayTwoSnap, .dayTwoDate').html(dayTwo.dt_txt);
        $('.dayThreeSnap, .dayThreeDate').html(dayThree.dt_txt);
        $('.dayFourSnap, .dayFourDate').html(dayFour.dt_txt);
        $('.dayFiveSnap, .dayFiveDate').html(dayFive.dt_txt);

        $('.dayOneForecast, .dayOneClouds').html(`${dayOne.main.temp} ${dayOne.weather[0].description}`);
        $('.dayTwoForecast, .dayTwoClouds').html(`${dayTwo.main.temp} ${dayTwo.weather[0].description}`);
        $('.dayThreeForecast, .dayThreeClouds').html(`${dayThree.main.temp} ${dayThree.weather[0].description}`);
        $('.dayFourForecast, .dayFourClouds').html(`${dayFour.main.temp} ${dayFour.weather[0].description}`);
        $('.dayFiveForecast, .dayFiveClouds').html(`${dayFive.main.temp} ${dayFive.weather[0].description}`);

        $('.dayOneTemp').html(dayOne.main.temp);
        $('.dayTwoTemp').html(dayOne.main.temp);
        $('.dayThreeTemp').html(dayOne.main.temp);
        $('.dayFourTemp').html(dayOne.main.temp);
        $('.dayFiveTemp').html(dayOne.main.temp);

        })


    mapboxgl.accessToken = keys.mapbox;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [-98.4916, 29.4252]
    });

    let codeupPopup = new mapboxgl.Popup()
        .setHTML("<p>Codeup</p>");


    // the  geocode method from mapbox-geocoder-utils.js
    geocode("600 Navarro St #350, San Antonio, TX 78205", keys.mapbox).then(function(result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(15);
    });

})