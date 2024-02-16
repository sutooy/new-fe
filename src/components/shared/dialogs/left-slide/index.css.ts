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
  header: style({
    borderBottom: '1px solid rgba(5, 5, 5, 0.06)',
  }),
  muiDialogContainer: {
    justifyContent: 'flex-end',
  },

  muiPaperRoot: {
    margin: 0,
    borderRadius: 0,
    height: '100%',
    maxHeight: '100Vh',
    width: 'auto',
  },

  dialogActions: style({
    justifyContent: 'flex-start',
  }),
}
