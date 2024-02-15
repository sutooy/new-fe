'use client'
import { CssBaseline } from '@mui/material'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { ReactNode } from 'react'
import { originalTheme } from './originalThemeContext'

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
export { originalTheme }
