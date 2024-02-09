import { style } from '@vanilla-extract/css'

export const Style = {
  menu: style({
    overflowY: 'scroll',
    height: 'calc(100vh - 38px)',
    marginTop: '38px',
  }),

  icon: style({
    minWidth: '18px!important',
    margin: '0 auto',
  }),

  iconSvg: style({
    fontSize: '18px!important',
    color: 'rgba(0,0,0,.8)',
    margin: '0 auto',
  }),
}
