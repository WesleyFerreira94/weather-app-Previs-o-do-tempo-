# 🌦️ Weather App - Previsão do Tempo

Aplicação web desenvolvida com **React**, **TypeScript** e **Vite**, que permite consultar a previsão do tempo em qualquer cidade do mundo. O projeto consome dados da [WeatherAPI](https://www.weatherapi.com/) e apresenta as informações de forma clara e responsiva.

---

## 📸 Interface

A interface é simples e direta: o usuário digita o nome da cidade, clica em "Buscar" e recebe os dados meteorológicos atuais.  
O componente principal (`App.tsx`) gerencia os estados da aplicação e faz a requisição à API, enquanto o componente `WeatherCard` exibe os dados formatados.

---

## 🚀 Funcionalidades

- 🔍 Busca por cidade
- 🌡️ Exibição de temperatura, umidade e condições climáticas
- 📅 Previsão atual com suporte ao idioma português
- 📱 Interface responsiva e amigável

---

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [WeatherAPI](https://www.weatherapi.com/)
- CSS

---

## 📦 Instalação e uso local

```bash
# Instalar dependências
npm install

# Rodar o projeto em modo desenvolvimento
npm run dev

├── public/
├── src/
│   ├── components/
│   │   └── WeatherCard.tsx
│   ├── types/
│   │   └── weather.ts
│   ├── App.tsx
│   └── main.tsx
├── .github/
├── .env
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md

Autor
Desenvolvido por Wesley Ferreira

GitHub: WesleyFerreira94
Linkedin: www.linkedin.com/in/wesley-ferreira-leite
Acesse o projeto funcionando aqui: https://previs.netlify.app
