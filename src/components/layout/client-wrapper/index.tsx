'use client'
import { DefaultLayout } from '@/components/layout/default-layout'
import { AuthProvider } from '@/contexts/authContext'
import { SnackbarProvider } from '@/contexts/snackbarContext'
import { ThemeProvider } from '@/contexts/themeContext'
import React from 'react'
import { Style } from './index.css'

type Props = {
  children: React.ReactNode
}

export const ClientWrapperLayout: React.FC<Props> = ({ children }: Props) => {
  // サイドメニュー・追従プロフィールの表示フラグ
  // todo 一旦一律true、今後判定を入れる
  const [isShowDefaultParts, setIsShowDefaultParts] =
    React.useState<boolean>(true)

  return (
    <ThemeProvider>
      <AuthProvider>
        <SnackbarProvider>
          {!isShowDefaultParts && (
            <div className={Style.layout}>{children}</div>
          )}
          {isShowDefaultParts && <DefaultLayout>{children}</DefaultLayout>}
        </SnackbarProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
