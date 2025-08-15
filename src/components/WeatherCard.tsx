import React from 'react';
import type { WeatherData } from '../types/weather';

interface Props {
  data: WeatherData;
}

/*const WeatherCard: React.FC<Props> = ({ data }) => {
  const { name, main, weather } = data;
  const { temp } = main;
  //const { description, icon } = weather[0];
  const { description, icon } = weather?.[0] ?? { description: '', icon: '' };


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
};*/

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
