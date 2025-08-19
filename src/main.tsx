// Arquivo principal que pode ser usado para configurar rotas, contexto global ou temas.
// Em projetos com Vite, pode ser o ponto inicial para configurações mais avançadas.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
