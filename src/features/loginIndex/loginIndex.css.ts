import { style } from '@vanilla-extract/css'

export const loginIndexStyle = {
  baseContainer: style({
    width: '100%',
  }),
  movusLogo: style({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    top: '100px',
    left: '250px',
  }),
  cityMap: style({
    display: 'flex',
    overflow: 'hidden',
    height: '100vh',
  }),
  app: style({
    textAlign: 'center',
  }),
}
