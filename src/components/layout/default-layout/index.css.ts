import { createTheme } from '@mui/material/styles'
import { style } from '@vanilla-extract/css'

export const Style = {
  layout: style({
    display: 'flex',
    height: '100%',
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

  account: style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '50px',
    padding: '0 24px',
    position: 'sticky',
    top: '0',
    transform: 'translateZ(0)',
    transition:
      'box-shadow 0.15s cubic-bezier(0.4, 0, 1, 1),background-color 0.15s cubic-bezier(0.4, 0, 1, 1)',
    width: '100%',
    zIndex: '20',
    textAlign: 'right',
  }),

  accountFixed: style({
    background: '#fff',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
  }),

  mainContent: style({
    overflowY: 'scroll',
    padding: '10px',
  }),
}

const drawerWidth = 240
const theme = createTheme()

export const Mui = {
  drawer: style({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
  }),
  openedMixin: style({
    width: drawerWidth,
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
