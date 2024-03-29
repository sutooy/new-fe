'use client'
import { FloatingProfile } from '@/components/layout/default-layout/floating-profile'
import { SystemMenu } from '@/components/layout/default-layout/system-menu/index'
import mouvsLogo from '@/images/logo-movus-grey.svg'
import CancelIcon from '@mui/icons-material/Cancel'
import MenuIcon from '@mui/icons-material/Menu'
import MuiDrawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Drawer, Style } from './index.css'

type Props = {
  children: React.ReactNode
}

export const DefaultLayout: React.FC<Props> = ({ children }: Props) => {
  // i18nの言語推定の反映を待ち、hydration errorを避ける
  const [initialRenderComplete, setInitialRenderComplete] =
    useState<boolean>(false)

  useEffect(() => {
    setInitialRenderComplete(true)
  }, [])

  // メニュー開閉フラグ
  const localStorageName = 'minMenu'
  let isMinMenu = null

  if (typeof window !== 'undefined') {
    isMinMenu = localStorage.getItem(localStorageName)
  }

  const [isMin, setIsMin] = React.useState(
    isMinMenu !== null ? JSON.parse(isMinMenu) : false
  )

  // メニュー開閉トグル
  const handleIsMin = (isMin: boolean) => {
    setIsMin(isMin)
    localStorage.setItem(localStorageName, isMin.toString())
  }

  if (!initialRenderComplete) return <></>
  return (
    <div className={Style.layout}>
      <MuiDrawer
        variant="permanent"
        className={`${Drawer.drawer}  ${
          isMin ? Drawer.closedMixin : Drawer.openedMixin
        }`}
        open={!isMin}
        classes={{
          paper: !isMin ? Drawer.muiPaperRoot : '',
        }}
      >
        <div className={Drawer.drawerHeader}>
          {/* ロゴ */}
          {!isMin && (
            <div className={Style.logo}>
              <Image src={mouvsLogo} width={144} height={23} alt="movus" />
            </div>
          )}
          {/* 開く */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleIsMin(false)}
            edge="start"
            sx={{
              margin: '15px auto 43px',
              ...(!isMin && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          {/* 閉じる */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleIsMin(true)}
            edge="start"
            sx={{
              position: 'absolute',
              top: 20,
              right: 10,
              ...(isMin && { display: 'none' }),
            }}
          >
            <CancelIcon />
          </IconButton>
        </div>
        {/* メニュー */}
        <SystemMenu isMin={isMin} />
      </MuiDrawer>
      <div className={Style.main}>
        {/* フローティングアカウント */}
        <FloatingProfile />
        {/* メインコンテンツ */}
        <div className={Style.mainContent}>{children}</div>
      </div>
    </div>
  )
}
