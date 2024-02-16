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

export const MenuStyle = {
  menuItem: style({
    color: '#e60112!important',
    fontSize: '14px!important',
    selectors: {
      '&:hover': {
        backgroundColor: '#e60112!important',
        color: '#fff!important',
      },
    },
  }),
}
