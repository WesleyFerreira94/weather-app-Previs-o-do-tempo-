import React from 'react';
import type { WeatherData } from '../types/weather';

interface WeatherCardProps {
  data: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>{data.location.name}</h2>
      <p>{data.current.condition.text}</p>
      <h3>{data.current.temp_c}°C</h3>
    </div>
  );
};

export default WeatherCard;
