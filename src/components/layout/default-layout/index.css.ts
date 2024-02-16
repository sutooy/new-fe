import { originalTheme } from '@/constants/originalThemeContext'
import { style } from '@vanilla-extract/css'

export const Style = {
  layout: style({
    display: 'flex',
  }),

  logo: style({
    margin: '70px auto 30px',
  }),

  main: style({
    width: '100%',
    height: '100%',
    position: 'relative',
    background: '#f6f7f9',
  }),

  mainContent: style({
    overflowY: 'scroll',
    padding: '10px',
  }),
}

const drawerWidth = 240
const theme = originalTheme

export const Drawer = {
  drawer: style({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
  }),
  muiPaperRoot: style({
    width: drawerWidth,
  }),
  openedMixin: style({
    width: drawerWidth,
    minWidth: drawerWidth,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),

  closedMixin: style({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)})`,
  }),

  drawerHeader: style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }),
}
