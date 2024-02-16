import { style } from '@vanilla-extract/css'

export const Style = {
  menu: style({
    overflowY: 'scroll',
    height: 'calc(100vh - 38px)',
    marginTop: '38px',
  }),

  icon: style({
    minWidth: 'fit-content!important',
    width: 'fit-content',
  }),

  iconSvg: style({
    color: 'rgba(0,0,0,.8)',
  }),

  text: style({
    paddingLeft: '10px',
  }),
}
