import React from 'react'
import { useWeather } from '../contexts/WeatherContext';

const Days = () => {
  const { hour, days, icons, temps, status, city } = useWeather();
  /*const dayDetails = [
    hour,
    days,
    icons,
    temps,
    city,
    status
  ]*/

  const getStatus = (status) => {
    switch(status) {
      case "broken clouds":
      case "overcast clouds":
        return "Cloudy";
        break;
        
      case "scattered clouds":
      case "few clouds":
        return "Partly Cloudy";
        break;
        
      case "clear sky":
        return "Sunny";
        break;

      case "light rain":
        return "Rainy";
        break;

      case "light snow":
      case "snow":
        return "Snowy";
        break;

      default:
        return ""
    }
  }

  const getIcon = (icon) => {
    switch(icon) {
      case "01n":
        return "icons/sun.png";
        break;
        
      case "03n":
      case "02n":
        return "icons/cloudy.png";
        break;

      case "04n":
        return "icons/cloud.png";
        break;
        
      case "10n":
        return "icons/rainy.png";
        break;

      case "13n":
        return "icons/snowy.png";
        break;

      default:
        return ""
    }
  }

  return (
    <div className="weather-container">
      <div className="today-weather-details-container">
        <div className="today-weather-details">
          <h1 className="location">{city}</h1>
          <p className="today-weather-status">{getStatus(status[0])}</p>
          <p className="humidity">{temps[0].humidity} Humidity</p>
          <p className="wind">{temps[0].windSpeed} km/h Wind</p>
        </div>
        {/* <img className="today-weather-status-image" src="https://assets.ccbp.in/frontend/intermediate-rwd/partly-sunny-img.png" /> */}
        <img className="today-weather-status-image" src={getIcon(icons[0])} />
      </div>
      <div className="weekly-weather-details-container">
        
        <div className="daily-weather-details-card">
          <div className='weather-main'>
            <p className="date">Today</p>
            <img className="weather-status-image" src={getIcon(icons[0])} />
          </div>
          <div className='weather-detail'>
            <div className="temperature-range-container">
              <p className="max-temperature">{temps[0].max}<sup>o</sup></p>
              <p className="min-temperature">{temps[0].min}<sup>o</sup></p>
            </div>
            <p className="weather-status">{getStatus(status[0])}</p>
          </div>
        </div>
        
        <div className="daily-weather-details-card">
          <div className='weather-main'>
            <p className="date">{days[1]}</p>
            <img className="weather-status-image" src={getIcon(icons[1])} />
          </div>
          <div className='weather-detail'>
            <div className="temperature-range-container">
              <p className="max-temperature">{temps[1].max}<sup>o</sup></p>
              <p className="min-temperature">{temps[1].min}<sup>o</sup></p>
            </div>
            <p className="weather-status">{getStatus(status[1])}</p>
          </div>
        </div>

        <div className="daily-weather-details-card">
          <div className='weather-main'>
            <p className="date">{days[2]}</p>
            <img className="weather-status-image" src={getIcon(icons[2])} />
          </div>
          <div className='weather-detail'>
            <div className="temperature-range-container">
              <p className="max-temperature">{temps[2].max}<sup>o</sup></p>
              <p className="min-temperature">{temps[2].min}<sup>o</sup></p>
            </div>
            <p className="weather-status">{getStatus(status[2])}</p>
          </div>
        </div>

        <div className="daily-weather-details-card">
          <div className='weather-main'>
            <p className="date">{days[3]}</p>
            <img className="weather-status-image" src={getIcon(icons[3])} />
          </div>
          <div className='weather-detail'>
            <div className="temperature-range-container">
              <p className="max-temperature">{temps[3].max}<sup>o</sup></p>
              <p className="min-temperature">{temps[3].min}<sup>o</sup></p>
            </div>
            <p className="weather-status">{getStatus(status[3])}</p>
          </div>
        </div>

        <div className="daily-weather-details-card">
          <div className='weather-main'>
            <p className="date">{days[4]}</p>
            <img className="weather-status-image" src={getIcon(icons[4])} />
          </div>
          <div className='weather-detail'>
            <div className="temperature-range-container">
              <p className="max-temperature">{temps[4].max}<sup>o</sup></p>
              <p className="min-temperature">{temps[4].min}<sup>o</sup></p>
            </div>
            <p className="weather-status">{getStatus(status[4])}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Days;