import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { Button, IconButton, InputAdornment, TextField } from '@mui/material'
import * as FaIcon from 'react-icons/fa'
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
        <div style={{ margin: '-5px 0 0 0' }} className={signInStyle.content}>
          <form className={signInStyle.form} onSubmit={handleSubmit(onSubmit)}>
            <div
              className={
                errors.username
                  ? `${signInStyle.inputGroup} ${signInStyle.error}`
                  : signInStyle.inputGroup
              }
            >
              <TextField
                id="name"
                type="text"
                className={`${signInStyle.inputControl} ${
                  errors.username ? signInStyle.error : ''
                }`}
                {...register('username')}
                label={loginT('login.username')}
              />
            </div>
            {errors.username && (
              <div className={signInStyle.errorColumnMessage}>
                <div className={signInStyle.errorLogo}>
                  <FaIcon.FaExclamationCircle />
                </div>
                {errors.username.message}
              </div>
            )}

            <div
              className={
                errors.password
                  ? `${signInStyle.inputGroup} ${signInStyle.error}`
                  : signInStyle.inputGroup
              }
            >
              <TextField
                id="password"
                type={showPassword ? 'text' : 'password'}
                className={`${signInStyle.inputControl} ${
                  errors.password ? signInStyle.error : ''
                }`}
                label={loginT('login.password')}
                {...register('password')}
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

            {errors.password && (
              <div className={signInStyle.errorColumnMessage}>
                <div className={signInStyle.errorLogo}>
                  <FaIcon.FaExclamationCircle />
                </div>
                {errors.password.message}
              </div>
            )}

            <div className={signInStyle.inputGroup}>
              <Button
                variant="contained"
                className={signInStyle.btnSubmit}
                type="submit"
              >
                {isLoading ? (
                  <FaIcon.FaCircleNotch className={signInStyle.spinner} />
                ) : (
                  loginT('login.button')
                )}
              </Button>
            </div>
          </form>
        </div>
        <button className={signInStyle.forgotPass} onClick={displayForgotPass}>
          {loginT('login.forgot')}
        </button>
      </div>
    </div>
  )
}
