import React from 'react'
import { useWeather } from '../contexts/WeatherContext';

const Days = () => {
  const { hour, days, icons, temps, city } = useWeather();

  return (
    <div className="weather-container">
      <div className="today-weather-details-container">
        <div className="today-weather-details">
          <h1 className="location">{city}</h1>
          <p className="today-weather-status">Sunny</p>
          <p className="humidity">78% Humidity</p>
          <p className="wind">5.15 km/h Wind</p>
        </div>
        <img className="today-weather-status-image" src="https://assets.ccbp.in/frontend/intermediate-rwd/partly-sunny-img.png" />
      </div>
      <div className="weekly-weather-details-container">
        <div className="daily-weather-details-card">
          <p className="date">Today</p>
          <img className="weather-status-image" src="https://assets.ccbp.in/frontend/intermediate-rwd/partly-cloudy-img.png" />
          <div className="temperature-range-container">
            <p className="max-temperature">32<sup>o</sup></p>
            <p className="min-temperature">24<sup>o</sup></p>
          </div>
          <p className="weather-status">Cloudy</p>
        </div>
        <div className="daily-weather-details-card">
          <p className="date">Friday</p>
          <img className="weather-status-image" src="https://assets.ccbp.in/frontend/intermediate-rwd/rain-with-sun-img.png" />
          <div className="temperature-range-container">
            <p className="max-temperature">26<sup>o</sup></p>
            <p className="min-temperature">20<sup>o</sup></p>
          </div>
          <p className="weather-status">Rainy</p>
        </div>
        <div className="daily-weather-details-card">
          <p className="date">Saturday</p>
          <img className="weather-status-image" src="https://assets.ccbp.in/frontend/intermediate-rwd/sunny-img.png" />
          <div className="temperature-range-container">
            <p className="max-temperature">48<sup>o</sup></p>
            <p className="min-temperature">36<sup>o</sup></p>
          </div>
          <p className="weather-status">Sunny</p>
        </div>
        <div className="daily-weather-details-card">
          <p className="date">Sunday</p>
          <img className="weather-status-image" src="https://assets.ccbp.in/frontend/intermediate-rwd/rain-with-sun-img.png" />
          <div className="temperature-range-container">
            <p className="max-temperature">26<sup>o</sup></p>
            <p className="min-temperature">18<sup>o</sup></p>
          </div>
          <p className="weather-status">Rainy</p>
        </div>
        <div className="daily-weather-details-card">
          <p className="date">Monday</p>
          <img className="weather-status-image" src="https://assets.ccbp.in/frontend/intermediate-rwd/sunny-img.png" />
          <div className="temperature-range-container">
            <p className="max-temperature">44<sup>o</sup></p>
            <p className="min-temperature">32<sup>o</sup></p>
          </div>
          <p className="weather-status">Sunny</p>
        </div>
        <div className="daily-weather-details-card">
          <p className="date">Tuesday</p>
          <img className="weather-status-image" src="https://assets.ccbp.in/frontend/intermediate-rwd/partly-cloudy-img.png" />
          <div className="temperature-range-container">
            <p className="max-temperature">35<sup>o</sup></p>
            <p className="min-temperature">26<sup>o</sup></p>
          </div>
          <p className="weather-status">Cloudy</p>
        </div>
        <div className="daily-weather-details-card last-day-card">
          <p className="date">Wednesday</p>
          <img className="weather-status-image" src="https://assets.ccbp.in/frontend/intermediate-rwd/rain-with-sun-img.png" />
          <div className="temperature-range-container">
            <p className="max-temperature">29<sup>o</sup></p>
            <p className="min-temperature">22<sup>o</sup></p>
          </div>
          <p className="weather-status">Rainy</p>
        </div>
      </div>
    </div>
  )
}

export default Days