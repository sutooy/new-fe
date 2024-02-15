import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { Button, IconButton, InputAdornment, TextField } from '@mui/material'
import { useLogin } from './hooks/useLogin'
import { loginStyle } from './login.css'

interface Props {
  displayForgotPass: () => void
}

export const Login = ({ displayForgotPass }: Props) => {
  const {
    onSubmit,
    errors,
    register,
    handleSubmit,
    isLoading,
    showPassword,
    handleShowPassword,
    loginT,
  } = useLogin()

  return (
    <div className={loginStyle.cardContainer}>
      <div className={loginStyle.title}>{loginT('login.title')}</div>
      <div className={loginStyle.content}>
        <div className={loginStyle.content}>
          <form className={loginStyle.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={loginStyle.inputGroup}>
              <TextField
                id="name"
                type="text"
                className={loginStyle.inputControl}
                {...register('username')}
                label={loginT('login.username')}
                error={
                  errors.username !== null && errors.username !== undefined
                }
                helperText={errors?.username?.message}
              />
            </div>
            <div className={loginStyle.inputGroup}>
              <TextField
                id="password"
                type={showPassword ? 'text' : 'password'}
                className={`${loginStyle.inputControl} ${errors.password}`}
                label={loginT('login.password')}
                {...register('password')}
                error={
                  errors.password !== null && errors.password !== undefined
                }
                helperText={errors?.password?.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => handleShowPassword()}
                        onMouseDown={(event) => event.preventDefault()}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className={loginStyle.inputGroup}>
              <Button
                variant="contained"
                className={loginStyle.btnSubmit}
                type="submit"
              >
                {isLoading ? (
                  <DonutLargeIcon className={loginStyle.spinner} />
                ) : (
                  loginT('login.button')
                )}
              </Button>
            </div>
          </form>
        </div>
        <Button
          variant="text"
          className={loginStyle.forgotPass}
          onClick={displayForgotPass}
        >
          {loginT('login.forgot')}
        </Button>
      </div>
    </div>
  )
}
