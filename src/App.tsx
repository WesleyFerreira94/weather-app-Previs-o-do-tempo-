/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'

/*import { useState } from 'react';
import axios from 'axios';
import WeatherCard from './components/weatherCard';
import type { WeatherData } from './types/weather';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState('');


  const apiKey = import.meta.env.VITE_WEATHERAPI_KEY;
  console.log('Chave da API:', apiKey);

  const fetchWeather = async () => {
    try {
      const response = await axios.get<WeatherData>(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=pt`
        //const response = await axios.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);

    );
      setWeather(response.data);
      setError('');
    } catch {
      setError('Cidade não encontrada');
      setWeather(null);
    }
  };

/*function setCity(value: string): void {
  throw new Error('Function not implemented.');
}

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Previsão do Tempo</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Digite a cidade"
      />
      <button onClick={fetchWeather}>Buscar</button>

      {error && <p>{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}*/

import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './components/weatherCard';
import type { WeatherData } from './types/weather';

const App: React.FC = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState('');

  const apiKey = import.meta.env.VITE_WEATHERAPI_KEY;

  const fetchWeather = async () => {
    try {
      const response = await axios.get<WeatherData>(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=pt`
      );
      setWeather(response.data);
      setError('');
    } catch {
      setError('Cidade não encontrada');
      setWeather(null);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Previsão do Tempo</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Digite a cidade"
      />
      <button onClick={fetchWeather}>Buscar</button>

      {error && <p>{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
};

export default App;


/*function setWeather(arg0: null) {
  throw new Error('Function not implemented.');
}

function setError(arg0: string) {
  throw new Error('Function not implemented.');
}
*/
