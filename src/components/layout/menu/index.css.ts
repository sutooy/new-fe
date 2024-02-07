import { style } from '@vanilla-extract/css'

export const Style = {
  menu: style({
    overflowY: 'scroll',
    height: 'calc(100vh - 38px)',
    marginTop: '38px',
  }),

  icon: style({
    minWidth: '30px!important',
    margin: '0 auto',
  }),

  minIcon: style({
    minWidth: '10px!important',
  }),
  iconSvg: style({
    fontSize: '18px!important',
    color: 'rgba(0,0,0,.8)',
  }),
}
