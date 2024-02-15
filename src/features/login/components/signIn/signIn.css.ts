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

export const signInStyle = {
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
  cardContainer: style({
    position: 'absolute',
    width: '400px',
    height: '450px',
    backgroundColor: 'white',
    borderRadius: '5px',
    right: '150px',
    top: '120px',
    boxShadow: '4px 6px 10px 4px rgba(0,0,0,0.2)',
    textAlign: 'center',
  }),
  title: style({
    paddingTop: 50,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4f5763',
  }),
  content: style({
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    height: '260px',
    margin: '10px auto',
  }),
  form: style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: '10px auto',
    marginTop: '1em',
  }),
  inputGroup: style({
    display: 'flex',
    position: 'relative',
    marginTop: '1.5rem',
    width: '300px',
    height: '50px',
    borderRadius: '0.5rem',
    padding: '1.6px',
  }),
  inputGroupBtn: style({}),
  error: style({}),
  inputControl: style({
    width: '100%',
    height: '100%',
    padding: '3px 15px',
    outline: 'none',
    background: 'none',
    zIndex: '1',
    fontSize: 16,
  }),
  inputLabel: style({
    position: 'absolute',
    left: '1rem',
    top: '1rem',
    padding: '0 0.25rem',
    backgroundColor: 'white',
    color: '#8492a6',
    transition: '0.3s',
  }),
  errorColumnMessage: style({}),
  errorLogo: style({}),
  showPassIcon: style({
    display: 'flex',
    alignItems: 'center',
    fontSize: 20,
    cursor: 'pointer',
    paddingRight: 15,
  }),
  btn: style({
    border: 0,
  }),
  btnSubmit: style({
    WebkitAppearance: 'button',
    width: '100%',
  }),
  spinner: style({}),
  forgotPass: style({
    display: 'inline',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#8492a6',
  }),
}
