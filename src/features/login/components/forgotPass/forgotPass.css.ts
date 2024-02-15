import { style } from '@vanilla-extract/css'

/* wip */
export const forgotPassStyle = {
  cardContainer: style({
    position: 'absolute',
    width: '400px',
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
    width: '300px',
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
  errorColumnMessage: style({
    display: 'flex',
    flexDirection: 'row',
    marginTop: '5px',
  }),
  errorLogo: style({}),
  btn: style({
    border: 0,
    marginTop: '30px',
  }),
  btnSubmit: style({
    WebkitAppearance: 'button',
    width: '100%',
  }),
  backIcon: style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '30px',
    height: '30px',
    marginTop: '30px',
    marginLeft: '30px',
    fontSize: '30px',
    color: '#4f5763',
    cursor: 'pointer',
  }),
  titleForgot: style({
    fontFamily: '"Open Sans", sans-serif',
    paddingTop: '20px',
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#4f5763',
  }),
  subTitle: style({
    fontFamily: '"Open Sans", sans-serif',
    color: '#8492a6',
    fontSize: '14px',
    margin: '5px 90px',
  }),
}
