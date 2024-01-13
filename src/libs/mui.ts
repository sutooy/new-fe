'use client'
import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: red[800],
    },
    secondary: {
      main: red[50],
    },
  },
})
