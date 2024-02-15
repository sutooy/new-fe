import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ErrorIcon from '@mui/icons-material/Error'
import { Button, TextField } from '@mui/material'
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
        <ArrowBackIcon />
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
                <ErrorIcon />
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
              color="primary"
            >
              {loginT('forgot.button')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
