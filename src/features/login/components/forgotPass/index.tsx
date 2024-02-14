import { Button, TextField } from '@mui/material'
import * as FaIcon from 'react-icons/fa'
import { forgotPassStyle } from './forgotPass.css'
import { useForgotPass } from './hooks/useForgotPass'

interface Props {
  hideForgotPass: () => void
}

export const ForgotPass = ({ hideForgotPass }: Props) => {
  const { loginT, handleSubmit, onSubmit, errors, register } = useForgotPass()

  return (
    <div className={forgotPassStyle.cardContainer}>
      <div className={forgotPassStyle.backIcon} onClick={hideForgotPass}>
        <FaIcon.FaArrowLeft />
      </div>

      <div className={forgotPassStyle.titleForgot}>
        {loginT('forgot.title')}
      </div>
      <div className={forgotPassStyle.subTitle}>
        {loginT('forgot.sub_title')}
      </div>
      <div className={forgotPassStyle.content}>
        <form
          className={forgotPassStyle.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            id="name"
            type="text"
            className={
              errors.email
                ? `${forgotPassStyle.inputGroup} ${forgotPassStyle.error}`
                : forgotPassStyle.inputGroup
            }
            label="Email"
            {...register('email')}
          />

          {errors.email && (
            <div className={forgotPassStyle.errorColumnMessage}>
              <div className={forgotPassStyle.errorLogo}>
                <FaIcon.FaExclamationCircle />
              </div>
              {errors.email.message}
            </div>
          )}

          <div
            className={`${forgotPassStyle.inputGroup} ${forgotPassStyle.btn}`}
          >
            <Button
              variant="contained"
              className={forgotPassStyle.btnSubmit}
              type="submit"
            >
              {loginT('forgot.button')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
