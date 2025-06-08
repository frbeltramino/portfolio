import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

export const blueTheme = createTheme({
  palette: {
    primary: { main: "#3b5bc1" },
    secondary: { main: "#6b86f1" },
    altSecondary: { main: "#4a5aa0" },
    text: {
      primary: "rgba(255, 255, 255, 0.87)",
      secondary: "rgba(255, 255, 255, 0.6)",
      disabled: "rgba(255, 255, 255, 0.38)",
      hint: "rgba(255, 255, 255, 0.38)",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 500,
      color: "#ffffff", // ✅ Ahora sí se aplica
    },
    altBody1: {
      fontSize: '1.125rem',
    }
  },
   
})