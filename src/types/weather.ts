// Define o formato dos dados do clima que vêm da API
// Inclui o nome da cidade, país, temperatura atual e descrição do tempo
// Usado para garantir que o TypeScript reconheça essas informações corretamente

export interface WeatherData {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

