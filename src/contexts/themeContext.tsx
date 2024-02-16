'use client'

import { originalTheme } from '@/constants/originalThemeContext'
import { CssBaseline } from '@mui/material'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { ReactNode } from 'react'

const theme = originalTheme

type Props = { children: ReactNode }

export const ThemeProvider = ({ children }: Props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
