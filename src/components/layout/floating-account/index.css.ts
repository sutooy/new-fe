import { style } from '@vanilla-extract/css'

export const Style = {
  account: style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '5px',
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

  userName: style({
    fontSize: '14px',
    fontWeight: 700,
    textAlign: 'right',
  }),
  role: style({
    fontSize: '12px',
    color: '#8492a6',
    fontWeight: 700,
    textAlign: 'right',
  }),
}
