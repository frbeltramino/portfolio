import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { PortfolioPage } from '../pages/PortfolioPage'

export const PortfolioRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <PortfolioPage /> } />
      <Route path="/*" element={ <Navigate to="/"/> } />
    </Routes>
  )
}
