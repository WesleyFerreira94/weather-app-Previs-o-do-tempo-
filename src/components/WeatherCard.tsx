import React from 'react';
import type { WeatherData } from '../types/Weather';

interface Props {
  data: WeatherData;
}

const WeatherCard: React.FC<Props> = ({ data }) => {
  const { name, main, weather } = data;
  const { temp } = main;
  const { description, icon } = weather[0];

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Temperatura: {temp}°C</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="Ícone do clima"
      />
    </div>
  );
};

export default WeatherCard;
