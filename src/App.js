//7 day
//https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${apikey}&cnt=40

//current
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

import React from 'react';
import './App.css';
import Container from './components/Container';
import { SelectContextProvider } from "./contexts/SelectContext";
import { WeatherContextProvider } from "./contexts/WeatherContext";

function App() {
  return (
    <div className='App'>
      <SelectContextProvider>
        <WeatherContextProvider>
          <Container />
        </WeatherContextProvider>
      </SelectContextProvider>
    </div>
  );
}

export default App;
