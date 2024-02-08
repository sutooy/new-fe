import { style } from '@vanilla-extract/css'
export const footerStyle = {
  footer: style({
    width: '100%',
    height: '500px',
    paddingTop: '80px',
    paddingBottom: '80px',
    backgroundColor: '#a4252a',
  }),
  footerContainer: style({
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    margin: '0 200px',
  }),
  footerLogo: style({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: '30px',
  }),
  footerMiddle: style({
    display: 'flex',
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    justifyContent: 'space-between',
    /* TODO: apply default font style */
    //font-family: $default-font;
  }),
  footerSocial: style({
    width: '250px',
  }),
  footerParagraph: style({
    display: 'flex',
    marginBottom: '1em',
  }),
  iconListSocial: style({
    fontSize: '28px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1em',
  }),
  iconItemSocial: style({
    color: 'white',
    width: '30px',
    height: '30px',
  }),
  footerDownload: style({
    width: '250px',
  }),
  iconListApp: style({
    fontSize: '28px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '1em',
  }),
  iconItemPlaystore: style({
    color: 'white',
    width: '30px',
    height: '30px',
  }),
  iconItemAppstore: style({
    color: 'white',
    fontSize: '35px',
    width: '35px',
    height: '35px',
    paddingLeft: '50px',
  }),
  hrLarge: style({
    height: '100px',
    borderTopColor: '#8492a6',
  }),
  footerBottom: style({
    display: 'flex',
    fontWeight: 'bold',
    justifyContent: 'center',
    flexDirection: 'column',
  }),
  footerInfo: style({
    display: 'flex',
    justifyContent: 'center',
  }),
  footerPrivpol: style({
    display: 'flex',
  }),
  footerInfoItem: style({
    /* TODO: apply default font style */
    //font-family: $default-font;
    color: 'white',
    fontSize: '15px',
    textDecoration: 'underline',
    fontWeight: 'lighter',
  }),
  footerTnc: style({
    marginLeft: '200px',
    display: 'flex',
  }),
  footerHelp: style({
    marginLeft: '200px',
    display: 'flex',
  }),
  footerDescription: style({
    marginTop: '50px',
    display: 'flex',
    /* TODO: apply default font style */
    //font-family: $default-font;
    color: 'white',
    fontSize: '15px',
    fontWeight: 'lighter',
    justifyContent: 'center',
  }),
}
