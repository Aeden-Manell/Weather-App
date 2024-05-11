import React, { useState } from 'react';
import "./mainstyle.css";

import searchIcon from "../assets/search.png";
import drizzelIcon from "../assets/drizzel.png";
import cloudIcon from "../assets/cloud.png";
import clearIcon from "../assets/clear.png";
import humidityIcon from "../assets/humidity.png";
import rainIcon from "../assets/rain.png";
import snowIcon from "../assets/snow.png";
import windIcon from "../assets/wind.png";

const Main = () => {
  let apiKey = "498bd9fbcb722911b5c58ca03a759297";
  const [weatherIcon, setWeatherIcon] = useState(cloudIcon);

  const SearchCity = async () => {
    const element = document.getElementsByClassName("cityInput");

    if (element[0].value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${apiKey}&units=Metric`;

    let response = await fetch(url);
    let data = await response.json();

    // Get references to the HTML elements where we will display the weather data
    const humidity = document.getElementsByClassName("humiditypercent");
    const wind = document.getElementsByClassName("humidityrate");
    const longitude = document.getElementsByClassName("lon");
    const latitude = document.getElementsByClassName("lat");
    const temperature = document.getElementsByClassName("weathertemp");
    const feelsliketemperature = document.getElementsByClassName("weatherfeelslike");
    const location = document.getElementsByClassName("weatherlocation");
    const windpressure = document.getElementsByClassName("windpressure");

    // Update the HTML elements with the weather data from the API response
    // Display humidity percentage
    humidity[0].innerHTML = data.main.humidity + " %";
    // Display wind speed in km/h
    wind[0].innerHTML = data.wind.speed + " km/h";
    // Display temperature in Celsius
    temperature[0].innerHTML = data.main.temp + " °C";
    // Display longitude
    longitude[0].innerHTML = "Longitude: " + data.coord.lon + " °";
    // Display latitude
    latitude[0].innerHTML = "Latitude: " + data.coord.lat + " °";
    // Display feels-like temperature
    feelsliketemperature[0].innerHTML = data.main.feels_like + " °C";
    // Display the city name
    location[0].innerHTML = data.name;
    // Display wind pressure in millibars
    windpressure[0].innerHTML = data.main.pressure + " mb";

    /*
      As per the OpenWeatherMap documentation, the weather icons correspond to different weather conditions.
      Here are the mappings between the icons and their respective weather conditions:
      
      Day icon      Night icon      Description
      01d.png       01n.png         Clear sky
      02d.png       02n.png         Few clouds
      03d.png       03n.png         Scattered clouds
      04d.png       04n.png         Broken clouds
      09d.png       09n.png         Shower rain
      10d.png       10n.png         Rain
      11d.png       11n.png         Thunderstorm
      13d.png       13n.png         Snow
    */

    // set the weather icon to the clearIcon.
    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWeatherIcon(clearIcon);
    }
    // set the weather icon to the cloudIcon.
    else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
      setWeatherIcon(cloudIcon);
    }
    // set the weather icon to the drizzelIcon.
    else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
      setWeatherIcon(drizzelIcon);
    }
    // set the weather icon to the drizzelIcon.
    else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
      setWeatherIcon(drizzelIcon);
    }
    // set the weather icon to the rainIcon.
    else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
      setWeatherIcon(rainIcon);
    }
    // set the weather icon to the rainIcon.
    else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
      setWeatherIcon(rainIcon);
    }
    // set the weather icon to the snowIcon.
    else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
      setWeatherIcon(snowIcon);
    }
    // If none of the above conditions are met, set the weather icon to the clearIcon as a fallback.
    else {
      setWeatherIcon(clearIcon);
    }

  };

  return (
    <div className='main'>
      <div className='topbar'>
        <input type='text' className='cityInput' placeholder='Location' />
        <div className="searchicon" onClick={SearchCity} >
          <img src={searchIcon} alt='' />
        </div>
      </div>
      <div className='weathersection'>
        <div className='imagediv'>
          <div className='weatherimage'>
            <img src={weatherIcon} alt='' />
          </div>
        </div>
        <div className='detailsdiv'>
          <div className='weathertemp' id='detailstext'>22'C</div>
          <div className='weatherlocation' id='detailstext'>London</div>
          <div className='co-ordinates'>
            <p className='lon text'>Longitude: 55'</p>
            <p className='lat text'>Latitude: 32'</p>
          </div>
        </div>
      </div>
      <div className='datacontainer'>
        <div className='element card'>
          <div className='data'>
            <div className='text'>Humidity</div>
            <div className='humiditypercent'>66%</div>
          </div>
        </div>
        <div className='element card'>
          <div className='data'>
            <div className='text'>Wind Speed</div>
            <div className='humidityrate'>65 km/h</div>
          </div>
        </div>
      </div>
      <div className='datacontainer'>
        <div className='element card'>
          <div className='data'>
            <div className='text'>Feels Like</div>
            <div className='weatherfeelslike'>66%</div>
          </div>
        </div>
        <div className='element card'>
          <div className='data'>
            <div className='text'>Wind Pressure</div>
            <div className='windpressure'>65  mb</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;