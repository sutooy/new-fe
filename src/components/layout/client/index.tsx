'use client'
import ApploClientProvider from '@/components/providers/apollo'
import { SnackbarProvider } from '@/contexts/snackbarContext'
import { theme } from '@/libs/mui'

import { ThemeProvider } from '@mui/material/styles'
import React, { useEffect, useState } from 'react'

type Props = {
  children: React.ReactNode
}

export const ClientLayout: React.FC<Props> = ({ children }: Props) => {
  // i18nの言語推定の反映を待ち、hydration errorを避ける
  const [initialRenderComplete, setInitialRenderComplete] =
    useState<boolean>(false)

  useEffect(() => {
    setInitialRenderComplete(true)
  }, [])

  if (!initialRenderComplete) return <></>
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <ApploClientProvider>{children}</ApploClientProvider>
      </SnackbarProvider>
    </ThemeProvider>
  )
}