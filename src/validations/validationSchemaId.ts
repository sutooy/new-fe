import * as yup from 'yup'

/* regex password can't start or end with blank space */
const validPass = /^\S.*\S.*\S$/

export const validation_login_v2_id = yup.object().shape({
  /* LOGIN v2*/
  username: yup.string().required('Masukan Username Anda'),
  password: yup
    .string()
    .required('Masukkan kata sandi')
    .matches(validPass, 'Awal dan akhir kata sandi tidak boleh spasi'),
})
