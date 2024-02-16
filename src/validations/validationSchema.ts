import {
  MutationForgotPasswordArgs,
  MutationLoginArgs,
} from '@/generated/graphql'
import * as yup from 'yup'

/* regex password can't start or end with blank space */
const validPass = /^\S.*\S.*\S$/

export const validation_login: yup.SchemaOf<MutationLoginArgs> = yup
  .object()
  .shape({
    /* LOGIN v2*/
    username: yup.string().required('Enter your Username'),
    password: yup
      .string()
      .required('Enter a password')
      .matches(validPass, 'Password can’t start or end with a blank space'),
  })

export const validation_email: yup.SchemaOf<MutationForgotPasswordArgs> = yup
  .object()
  .shape({
    email: yup.string().email('Enter a valid email').required('Enter an email'),
  })
