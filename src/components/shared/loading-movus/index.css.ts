import { keyframes, style } from '@vanilla-extract/css'

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const Style = {
  loading: style({
    position: 'fixed',
    zIndex: '999',
    overflow: 'show',
    margin: 'auto',
    height: 'fit-content',
    width: 'fit-content',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    animation: 'spin infinite 1s linear',
    animationName: rotate,
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  }),
}
