import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { PortfolioApp } from './portfolioApp'
import { BrowserRouter } from 'react-router'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <PortfolioApp />
    </BrowserRouter>
  </StrictMode>,
)
