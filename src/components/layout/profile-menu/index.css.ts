import { style } from '@vanilla-extract/css'

export const Style = {
  imgBox: style({
    borderRadius: '50%',
    boxShadow: '2px 2px 5px rgba(0,0,0,.3)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
}
