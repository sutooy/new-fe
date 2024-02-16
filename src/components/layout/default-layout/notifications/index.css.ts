import { style } from '@vanilla-extract/css'

export const Style = {
  notifications: style({
    position: 'relative',
    marginRight: '15px',
  }),
  notificationIcon: style({
    fontSize: '28px!important',
  }),
  badge: style({
    position: 'absolute',
    top: 0,
    right: '-10px',
    zIndex: '10',
    background: '#e60012',
    color: '#fff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px',
    fontSize: '12px',
    fontWeight: 'bold',
    pointerEvents: 'none',
  }),
}
