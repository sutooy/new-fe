import { style } from '@vanilla-extract/css'

/* wip */
export const forgotPassStyle = {
  cardContainer: style({
    position: 'absolute',
    width: '500px',
    height: '450px',
    backgroundColor: 'white',
    borderRadius: '5px',
    right: '150px',
    top: '120px',
    boxShadow: '4px 6px 10px 4px rgba(0,0,0,0.2)',
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
  errorColumnMessage: style({}),
  errorLogo: style({}),
  btn: style({
    border: 0,
  }),
  btnSubmit: style({
    WebkitAppearance: 'button',
  }),
  backIcon: style({}),
  titleForgot: style({}),
  subTitle: style({}),
}
