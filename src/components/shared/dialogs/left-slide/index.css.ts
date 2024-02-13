import { style } from '@vanilla-extract/css'

export const Style = {
  closeBtn: style({
    width: 'fit-content',
    marginTop: '20px!important',
    ':hover': {
      backgroundColor: '#d32f2f!important',
      color: '#fff',
    },
  }),
}

export const DialogStyle = {
  muiDialogContainer: {
    justifyContent: 'flex-end',
  },

  muiPaperRoot: {
    margin: 0,
    borderRadius: 0,
    height: '100%',
    maxHeight: '100Vh',
    padding: '24px',
  },
}
