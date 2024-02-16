import ArrowBackIcon from '@mui/icons-material/ArrowBack'
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
            label="Email"
            className={forgotPassStyle.inputGroup}
            {...register('email')}
            error={errors.email !== null && errors.email !== undefined}
            helperText={errors?.email?.message}
          />
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
