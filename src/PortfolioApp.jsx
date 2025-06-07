import React from 'react'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme'

export const PortfolioApp = () => {
  return (
    <>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </>
    
  )
}
