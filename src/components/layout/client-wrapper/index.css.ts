import { style } from '@vanilla-extract/css'
export const Style = {
  layout: style({
    display: 'flex',
  }),

  logo: style({
    margin: '30px auto',
    width: '100%',
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
