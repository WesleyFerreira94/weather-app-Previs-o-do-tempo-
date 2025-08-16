/*import React from 'react';

interface WeatherCardProps {
  temperature: number;
  condition: string;
  city: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ temperature, condition, city }) => {
  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>{city}</h2>
      <p>{condition}</p>
      <h3>{temperature}°C</h3>
    </div>
  );
};

export default WeatherCard;*/

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
