'use client'
import ApploClientProvider from '@/contexts/apolloContext'
import { AuthProvider } from '@/contexts/authContext'
import { SnackbarProvider } from '@/contexts/snackbarContext'
import { ThemeProvider } from '@/contexts/themeContext'
import React, { useEffect, useState } from 'react'

type Props = {
  children: React.ReactNode
}

export const ClientWrapperLayout: React.FC<Props> = ({ children }: Props) => {
  // i18nの言語推定の反映を待ち、hydration errorを避ける
  const [initialRenderComplete, setInitialRenderComplete] =
    useState<boolean>(false)

  useEffect(() => {
    setInitialRenderComplete(true)
  }, [])

  if (!initialRenderComplete) return <></>
  return (
    <ThemeProvider>
      <AuthProvider>
        <SnackbarProvider>
          <ApploClientProvider>{children}</ApploClientProvider>
        </SnackbarProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
