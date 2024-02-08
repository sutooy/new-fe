'use client'
import { Menu } from '@/components/layout/menu/index'
import { H1Header } from '@/components/shared/h1-header/index'
import ApploClientProvider from '@/contexts/apolloContext'
import { AuthProvider } from '@/contexts/authContext'
import { SnackbarProvider } from '@/contexts/snackbarContext'
import { ThemeProvider } from '@/contexts/themeContext'
import mouvsLogo from '@/images/logo-movus-grey.svg'
import CancelIcon from '@mui/icons-material/Cancel'
import MenuIcon from '@mui/icons-material/Menu'
import MuiDrawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import { CSSObject, Theme, styled } from '@mui/material/styles'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Style } from './index.css'


type Props = {
  children: React.ReactNode
}

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



export const ClientWrapperLayout: React.FC<Props> = ({ children }: Props) => {
  // i18nの言語推定の反映を待ち、hydration errorを避ける
  const [initialRenderComplete, setInitialRenderComplete] =
    useState<boolean>(false)

  useEffect(() => {
    setInitialRenderComplete(true)
  }, [])

  const [isFixedNav, serIsFixedNav] = useState(false);

  const windowScroll = () => {
    serIsFixedNav(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", windowScroll);
    return () => window.removeEventListener("scroll", windowScroll);
  }, []);

  // メニュー開閉フラグ
  const localStorageName = "minMenu"
  const isMinMenu = localStorage.getItem(localStorageName)
  const [open, setOpen] = React.useState(isMinMenu !== null ? JSON.parse(isMinMenu) : true);
  const handleDrawer = (isMin:boolean) => {
    setOpen(isMin);
    localStorage.setItem(localStorageName, isMin.toString())
  };

  if (!initialRenderComplete) return <></>
  return (
    <ThemeProvider>
      <AuthProvider>
        <SnackbarProvider>
          <div className={Style.layout}>
            <Drawer variant="permanent" open={open}>
              <DrawerHeader
                sx={{display:'block'}}
              >
                {/* ロゴ */}
                {open && 
                  <div className={Style.logo}>
                    <Image src={mouvsLogo} width={144} height={23} alt="movus" />
                  </div>
                }
                {/* 開く */}
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={() => handleDrawer(true)}
                  edge="start"
                  sx={{
                    margin: '15px auto 43px',
                    ...(open && { display: 'none' }),
                  }}
                >
                  <MenuIcon />
                </IconButton>
                {/* 閉じる */}
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={() => handleDrawer(false)}
                  edge="start"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    ...(!open && { display: 'none' }),
                  }}
                >
                  <CancelIcon />
                </IconButton>
              </DrawerHeader>
              {/* メニュー */}
              <Menu isMin={open}/>
            </Drawer>
            <div className={Style.main}>
              <div className={`${Style.account} ${isFixedNav ? Style.accountFixed : ''} `}>
                アカウント
              </div>
              <div className={Style.mainContent}>
                <ApploClientProvider>
                  <H1Header title="タイトル" subText='subsubsubsubsubsubsubsubsub'/>
                  {children}
                </ApploClientProvider>
              </div>
            </div>
          </div>
        </SnackbarProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
