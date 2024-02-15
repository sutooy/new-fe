import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { Button, IconButton, InputAdornment, TextField } from '@mui/material'
import { useSignIn } from './hooks/useSignIn'
import { signInStyle } from './signIn.css'

interface Props {
  displayForgotPass: () => void
}

export const SignIn = ({ displayForgotPass }: Props) => {
  const {
    onSubmit,
    errors,
    register,
    handleSubmit,
    isLoading,
    showPassword,
    handleShowPassword,
    loginT,
  } = useSignIn()

  return (
    <div className={signInStyle.cardContainer}>
      <div className={signInStyle.title}>{loginT('login.title')}</div>
      <div className={signInStyle.content}>
        <div className={signInStyle.content}>
          <form className={signInStyle.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={signInStyle.inputGroup}>
              <TextField
                id="name"
                type="text"
                className={signInStyle.inputControl}
                {...register('username')}
                label={loginT('login.username')}
                error={
                  errors.username !== null && errors.username !== undefined
                }
                helperText={errors?.username?.message}
              />
            </div>
            <div className={signInStyle.inputGroup}>
              <TextField
                id="password"
                type={showPassword ? 'text' : 'password'}
                className={`${signInStyle.inputControl} ${errors.password}`}
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
            <div className={signInStyle.inputGroup}>
              <Button
                variant="contained"
                className={signInStyle.btnSubmit}
                type="submit"
              >
                {isLoading ? (
                  <DonutLargeIcon className={signInStyle.spinner} />
                ) : (
                  loginT('login.button')
                )}
              </Button>
            </div>
          </form>
        </div>
        <Button
          variant="text"
          className={signInStyle.forgotPass}
          onClick={displayForgotPass}
        >
          {loginT('login.forgot')}
        </Button>
      </div>
    </div>
  )
}
