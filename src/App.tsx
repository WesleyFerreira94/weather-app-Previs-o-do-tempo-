// Componente principal da aplicação
// Aqui é definido o layout geral e os componentes que serão exibidos na tela

import './App.css'
import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './components/weatherCard';
import type { WeatherData } from './types/weather';

const App: React.FC = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState('');

  const apiKey = import.meta.env.VITE_WEATHERAPI_KEY;
  console.log('Chave da API:', apiKey);

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
