'use client'
import { AuthProvider } from '@/contexts/authContext'
import { ThemeProvider } from '@/contexts/themeContext'
import { DefaultLayout } from '../default-layout'

type Props = {
  children: React.ReactNode
}

export const ClientWrapperLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <DefaultLayout>{children}</DefaultLayout>
      </AuthProvider>
    </ThemeProvider>
  )
}
