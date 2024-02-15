import { style } from '@vanilla-extract/css'
export const footerStyle = {
  footer: style({
    width: '100%',
    height: '500px',
    paddingTop: '80px',
    paddingBottom: '80px',
    backgroundColor: '#a4252a',
    boxSizing: 'border-box',
  }),
  footerContainer: style({
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    margin: '0 100px',
    boxSizing: 'border-box',
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
    fontSize: '16px',
    fontWeight: 'bold',
    justifyContent: 'space-between',
    marginBottom: '25px',
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
    listStyle: 'none',
    margin: 0,
    padding: 0,
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
    listStyle: 'none',
    margin: 0,
    padding: 0,
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
    height: '0',
    borderTopColor: '#8492a6',
    overflow: 'visible',
    boxSizing: 'content-box',
    margin: 0,
    color: 'inherit',
    borderTopWidth: '1px',
    marginBottom: '100px',
  }),
  footerBottom: style({
    display: 'flex',
    fontWeight: 'bold',
    justifyContent: 'center',
    flexDirection: 'column',
    boxSizing: 'border-box',
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
    fontSize: '13px',
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
    marginTop: '25px',
    display: 'flex',
    /* TODO: apply default font style */
    //font-family: $default-font;
    color: 'white',
    fontSize: '15px',
    fontWeight: 'lighter',
    justifyContent: 'center',
  }),
}
