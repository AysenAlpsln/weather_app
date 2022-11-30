import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useSelect } from "./SelectContext";

const WeatherContext = createContext();

export const WeatherContextProvider = ({children}) =>{
  const { select } = useSelect();
  const initialValue = [
    {
      dt_txt: "",
      weather: [{ icon: "" }],
      main: { temp_max: 0, temp_min: 0 },
    },
    {
      dt_txt: "",
      weather: [{ icon: "" }],
      main: { temp_max: 0, temp_min: 0 },
    },
    {
      dt_txt: "",
      weather: [{ icon: "" }],
      main: { temp_max: 0, temp_min: 0 },
    },
    {
      dt_txt: "",
      weather: [{ icon: "" }],
      main: { temp_max: 0, temp_min: 0 },
    },
    {
      dt_txt: "",
      weather: [{ icon: "" }],
      main: { temp_max: 0, temp_min: 0 },
    },
  ];

  const [weathers, setWeathers] = useState(initialValue);
  const [city, setCity] = useState();
  const apikey = process.env.REACT_APP_WEATHER_API_KEY;

  

  useEffect(() => {
    let forecastArray = [];
    var cityName = "";
    axios(`https://api.openweathermap.org/data/2.5/forecast?q=${select}&appid=${apikey}&cnt=56`)
    .then((res) => {
      var forecast = res.data.list;
      cityName = res.data.city.name.replace("Province","").trim()
      let todayDate = forecast[0].dt_txt;
      todayDate = todayDate.substring(11,19);
      forecast.map((item) => {
        if(item.dt_txt.substring(11,19) === todayDate){
          forecastArray.push(item);
        }
        setWeathers(forecastArray);
        setCity(cityName);
        return "";
      });
    });
  }, [select]);

  let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]

  let hour = weathers[0].dt_txt.substring(11, 16);
  let days = [];
  let icons = [];
  let temps = [];
  let status = [];

  for(let item of weathers) {
    let date = new Date(item.dt_txt);
    date = date.getDay();
    //her gün değeri için weekdays array içinden gün ismi çekilir.
    days.push(weekdays[date]);
    //her gün için hava durumu iconu çekilir.
    icons.push(item.weather[0].icon);
    temps.push({
      //dereceler çevrilir.
      max:(item.main.temp_max -271).toFixed(),
      min:(item.main.temp_min -271).toFixed(),
      humidity:item.main.humidity,
      windSpeed:item.wind?.speed,
    });
    status.push(item.weather[0].main)
  }

  const values = {
    hour,
    days,
    icons,
    temps,
    status,
    city
  };

  return (
    <WeatherContext.Provider value={values}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);

  return context;
};