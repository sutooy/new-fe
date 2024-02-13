import * as yup from 'yup'

/* regex password can't start or end with blank space */
const validPass = /^\S.*\S.*\S$/

export const validation_login_v2 = yup.object().shape({
  /* LOGIN v2*/
  username: yup.string().required('Enter your Username'),
  password: yup
    .string()
    .required('Enter a password')
    .matches(validPass, 'Password can’t start or end with a blank space'),
})
