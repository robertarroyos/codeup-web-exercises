$(document).ready(function () {
    "use strict";

    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: keys.openWeather,
        q: 'San Antonio, US',
        units: "imperial"
    }).done(function (data) {
        let cityName = data.city.name;
        // console.log(data);

        // function to sort through and retrieve relevant data into object
        let forecastData = [];
        for (let i = 0; i < data.list.length; i++) {
            if ( i % 8 === 0) {
                forecastData.push(data.list[i]);
            }
        }

        // Change date format to useful date format - WkDay Mmm DD YYYY
        for (let i = 0; i < forecastData.length; i++) {
            forecastData[i].dt_txt = new Date(forecastData[i].dt_txt).toDateString();
        }

        // Round temperatures to nearest int
        for (let i = 0; i < forecastData.length; i++) {
            forecastData[i].main.temp = Math.round(forecastData[i].main.temp);
        }

        // Send city name to html document
        document.querySelector('#cityHeader').innerHTML = cityName;

        // Send relevant data to html document - 5 day snap shot
        let text = '';
        for ( let i = 0; i < forecastData.length; i++) {
            text +=
                `<div class="column snapShot">
                    <div class="row snapShotText snapShotDate">${forecastData[i].dt_txt}</div>
                       <div class="row snapShotText snapShotTemp">Temp: ${forecastData[i].main.temp}</div>
                </div>`
            $('#snapShotBox').html(text);
        }

        // Send relevant data to html document - 5 day forecast
        let html = '';
        for ( let i = 0; i < forecastData.length; i++) {
            html +=
                `<div class="column fiveDayForecast">
                    <div class="row forecastText forecastDate">${forecastData[i].dt_txt}</div>
                    <div class="row forecastText forecastTempHumidity">
                        <div class="column forecastText forecastTemp">${forecastData[i].main.temp}</div>
                        <div class="column forecastText forecastHumidity">${forecastData[i].main.humidity}</div>
                    </div>
                    <div class="row forecastClouds">${forecastData[i].weather[0].description}</div>
                </div>`
            $('#fiveDayForecast').html(html);
        }
    })
});

(() => {
    "use strict"

    function weather(e) {
        e.preventDefault();
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: keys.openWeather,
            q: `${searchInput.value}, US`,
            units: "imperial"
        }).done(function (data) {
            let cityName = data.city.name;

            // function to sort through and retrieve relevant data into object
            let forecastData = [];
            for (let i = 0; i < data.list.length; i++) {
                if ( i % 8 === 0) {
                    forecastData.push(data.list[i]);
                }
            }

            // Change date format to useful date format - WkDay Mmm DD YYYY
            for (let i = 0; i < forecastData.length; i++) {
                forecastData[i].dt_txt = new Date(forecastData[i].dt_txt).toDateString();
            }

            // Round temperatures to nearest int
            for (let i = 0; i < forecastData.length; i++) {
                forecastData[i].main.temp = Math.round(forecastData[i].main.temp);
            }

            // Send city name to html document
            document.querySelector('#cityHeader').innerHTML = cityName;

            // Send relevant data to html document - 5 day snap shot
            let text = '';
            for ( let i = 0; i < forecastData.length; i++) {
                text +=
                    `<div class="column snapShot">
                    <div class="row snapShotText snapShotDate">${forecastData[i].dt_txt}</div>
                       <div class="row snapShotText snapShotTemp">Temp: ${forecastData[i].main.temp}</div>
                </div>`
                $('#snapShotBox').html(text);
            }

            // Send relevant data to html document - 5 day forecast
            let html = '';
            for ( let i = 0; i < forecastData.length; i++) {
                html +=
                    `<div class="column fiveDayForecast">
                    <div class="row forecastText forecastDate">${forecastData[i].dt_txt}</div>
                    <div class="row forecastText forecastTempHumidity">
                        <div class="column forecastText forecastTemp">${forecastData[i].main.temp}</div>
                        <div class="column forecastText forecastHumidity">${forecastData[i].main.humidity}</div>
                    </div>
                    <div class="row forecastClouds">${forecastData[i].weather[0].description}</div>
                </div>`
                $('#fiveDayForecast').html(html);
            }
        })
    }

    let submitButton = document.querySelector('#searchBtn');
    let searchInput = document.querySelector('#cityInput');
    submitButton.addEventListener('click', weather);

})();