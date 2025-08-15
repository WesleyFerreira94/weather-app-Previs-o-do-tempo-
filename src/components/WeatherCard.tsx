import React from 'react';
import type { WeatherData } from '../types/weather';

interface Props {
  data: WeatherData;
}

const WeatherCard: React.FC<Props> = ({ data }) => {
  const { location, current } = data;
  const { name, country } = location;
  const { temp_c, condition } = current;

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>{name}, {country}</h2>
      <p>{condition.text}</p>
      <p>Temperatura: {temp_c}°C</p>
      <img
        src={condition.icon}
        alt="Ícone do clima"
      />
    </div>
  );
};


export default WeatherCard;
