import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { PortfolioApp } from './PortfolioApp'
import { BrowserRouter } from 'react-router'
import "./i18n"



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <PortfolioApp />
    </BrowserRouter>
  </StrictMode>,
)
