import { style } from '@vanilla-extract/css'

export const loginContainerStyle = {
  baseContainer: style({
    width: '100%',
    boxSizing: 'border-box',
  }),
  movusLogo: style({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    top: '100px',
    left: '250px',
    boxSizing: 'border-box',
  }),
  cityMap: style({
    display: 'flex',
    overflow: 'hidden',
    height: '100vh',
    boxSizing: 'border-box',
  }),
  app: style({
    textAlign: 'center',
  }),
}
