import { keyframes, style } from '@vanilla-extract/css'

const floating = keyframes({
  from: {
    transform: 'rotate(360deg) translate(-30px) rotate(-360deg)',
  },
  to: {
    transform: 'rotate(0deg) translate(-30px) rotate(0deg)',
  },
})

const floating2 = keyframes({
  from: {
    transform: 'rotate(360deg) translate(30px) rotate(-360deg)',
  },
  to: {
    transform: 'rotate(0deg) translate(30px) rotate(0deg)',
  },
})

const floating3 = keyframes({
  from: {
    transform: 'rotate(360deg) translate(-30px) rotate(-360deg)',
  },
  to: {
    transform: 'rotate(0deg) translate(-30px) rotate(0deg)',
  },
})

export const loginBackgroundStyle = {
  cloud1: style({
    animation: `${floating} 20s linear infinite`,
  }),
  cloud2: style({
    animation: `${floating3} 30s linear infinite`,
  }),
  cloud3: style({
    animation: `${floating2} 30s linear infinite`,
  }),
  cls1: style({
    fill: '#f16484',
  }),
  cls2: style({
    fill: '#e6e6e5',
  }),
  cls3: style({
    fill: '#fff',
  }),
  cls4: style({
    fill: '#cccccb',
  }),
  cls5: style({
    fill: '#403d56',
  }),
  cls6: style({
    fill: '#e41e26',
  }),
  cls7: style({
    fill: 'none',
  }),
  cls8: style({
    fill: '#f3f3f3',
  }),
  cls9: style({
    fill: '#4b3952',
  }),
  svg: style({
    position: 'absolute',
    right: 0,
    width: '100%',
    height: 'auto',
    top: '230px',
  }),
}
