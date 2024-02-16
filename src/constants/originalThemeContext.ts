'use client'
import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

export const originalTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1025,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: red[800],
    },
  },
  typography: {
    fontFamily: ['Arial', 'Roboto'].join(','),
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          height: 100vh;
          min-height: -webkit-fill-available;
        }
      `,
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
  },
})
