import { useTranslation } from '@/i18n/client'
import { NAMESPACE_OPTIONS } from '@/i18n/settings'
import { State } from '@/stores'
import { clearError, dataSuccess, signInV2 } from '@/stores/action/auth'
import { validation_login_v2 } from '@/validations/validationSchema'
import { validation_login_v2_id } from '@/validations/validationSchemaId'
import { yupResolver } from '@hookform/resolvers/yup'
import { message } from 'antd'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import * as FaIcon from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { useLogin } from './hooks/useLogin'
import { loginStyle } from './login.css'

interface Props {
  displayForgotPass: () => void
}

export const Login = ({ displayForgotPass }: Props) => {
  /* 後でi18n組み込む */
  const { t: loginT, i18n } = useTranslation(NAMESPACE_OPTIONS.login)
  const {
    onSubmit,
    errors,
    register,
    handleSubmit,
    requestError,
    setRequestError,
  } = useLogin()
  let history = useHistory()

  const dispatch = useDispatch()

  const { setError: setErrorEN, reset: resetEN } = useForm<any>({
    resolver: yupResolver(validation_login_v2),
  })

  const {
    register: registerID,
    handleSubmit: handleSubmitID,
    setError: setErrorID,
    formState: { errors: errorsID },
    reset: resetID,
  } = useForm<any>({
    resolver: yupResolver(validation_login_v2_id),
  })

  const submitFormV2 = (data: any) => {
    dispatch(signInV2(data, history, message))
  }

  const selectedLang = useSelector((state: State) => state.lang)
  const authData = useSelector((state: State) => state.auths)

  const [showPassword, setShowPassword] = useState(false)
  const handleShowPassword = () => setShowPassword((prev) => !prev)

  useEffect(() => {
    if (selectedLang === 'EN') {
      resetEN()
    } else if (selectedLang === 'ID') {
      resetID()
    }

    if (authData.isFailed) {
      if (selectedLang === 'EN') {
        if (authData.isFailed === 'Email Not Registered') {
          setErrorEN('email', {
            message: 'The email provided is not registered',
          })
        } else if (authData.isFailed === 'Wrong Password') {
          setErrorEN('password', {
            message: 'Sorry, your password was incorrect.',
          })
        }
      } else {
        if (authData.isFailed === 'Email Not Registered') {
          setErrorID('email', {
            message: 'Email tidak ditemukan. Silakan coba lagi.',
          })
        } else if (authData.isFailed === 'Wrong Password') {
          setErrorID('password', {
            message: 'Maaf, kata sandi anda salah.',
          })
        }
      }
    }
  }, [selectedLang, authData])

  // ALERT
  if (authData?.isSuccess) {
    const successAlert = () => {
      message?.success(authData?.isSuccess)
    }

    successAlert()
    dispatch(dataSuccess(false))
  }

  if (authData?.isFailed !== null) {
    const errorAlert = () => {
      message?.error(authData?.isFailed)
    }

    errorAlert()
    dispatch(clearError())
  }

  return (
    <div className={loginStyle.cardContainer}>
      <div className={loginStyle.title}>{loginT('login.title')}</div>
      <div className={loginStyle.content}>
        <div style={{ margin: '-5px 0 0 0' }} className={loginStyle.content}>
          <form
            className={loginStyle.form}
            onSubmit={
              selectedLang === 'EN'
                ? handleSubmit(submitFormV2)
                : handleSubmitID(submitFormV2)
            }
          >
            <div
              className={
                selectedLang === 'EN'
                  ? errors.username
                    ? `${loginStyle.inputGroup} ${loginStyle.error}`
                    : loginStyle.inputGroup
                  : errors.username
                    ? `${loginStyle.inputGroup} ${loginStyle.error}`
                    : loginStyle.inputGroup
              }
            >
              {selectedLang === 'EN' ? (
                <input
                  id="name"
                  type="text"
                  className={
                    errors.username
                      ? `${loginStyle.inputControl} ${loginStyle.error}`
                      : loginStyle.inputControl
                  }
                  placeholder=" "
                  {...register('username')}
                />
              ) : (
                <input
                  id="name"
                  type="text"
                  className={
                    errorsID.username
                      ? `${loginStyle.inputControl} ${loginStyle.error}`
                      : loginStyle.inputControl
                  }
                  placeholder=" "
                  {...registerID('username')}
                />
              )}

              <label className={loginStyle.inputLabel}>
                {loginT('login.username')}
              </label>
            </div>

            {selectedLang === 'EN'
              ? errors.username && (
                  <div className={loginStyle.errorColumnMessage}>
                    <div className={loginStyle.errorLogo}>
                      <FaIcon.FaExclamationCircle />
                    </div>
                    {errors.username.message}
                  </div>
                )
              : errorsID.username && (
                  <div className={loginStyle.errorColumnMessage}>
                    <div className={loginStyle.errorLogo}>
                      <FaIcon.FaExclamationCircle />
                    </div>
                    {(errorsID as any).username.message}
                  </div>
                )}

            <div
              className={
                selectedLang === 'EN'
                  ? errors.password
                    ? `${loginStyle.inputGroup} ${loginStyle.error}`
                    : loginStyle.inputGroup
                  : errorsID.password
                    ? `${loginStyle.inputGroup} ${loginStyle.error}`
                    : loginStyle.inputGroup
              }
            >
              {selectedLang == 'EN' ? (
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className={
                    errors.password
                      ? `${loginStyle.inputControl} ${loginStyle.error}`
                      : loginStyle.inputControl
                  }
                  placeholder=""
                  {...register('password')}
                />
              ) : (
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className={
                    errorsID.password
                      ? `${loginStyle.inputControl} ${loginStyle.error}`
                      : loginStyle.inputControl
                  }
                  placeholder=""
                  {...registerID('password')}
                />
              )}

              <label className={loginStyle.inputLabel}>
                {loginT('login.password')}
              </label>

              <div
                className={loginStyle.showPassIcon}
                onClick={handleShowPassword}
              >
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </div>
            </div>

            {selectedLang === 'EN'
              ? errors.password && (
                  <div className={loginStyle.errorColumnMessage}>
                    <div className={loginStyle.errorLogo}>
                      <FaIcon.FaExclamationCircle />
                    </div>
                    {errors.password.message}
                  </div>
                )
              : errorsID.password && (
                  <div className={loginStyle.errorColumnMessage}>
                    <div className={loginStyle.errorLogo}>
                      <FaIcon.FaExclamationCircle />
                    </div>
                    {(errorsID as any).password.message}
                  </div>
                )}

            <div className={loginStyle.inputGroupBtn}>
              <button className={loginStyle.btnSubmit} type="submit">
                {authData.isLoading ? (
                  <FaIcon.FaCircleNotch className={loginStyle.spinner} />
                ) : (
                  loginT('login.button')
                )}
              </button>
            </div>
          </form>
        </div>
        <button className={loginStyle.forgotPass} onClick={displayForgotPass}>
          {loginT('login.forgot')}
        </button>
      </div>
    </div>
  )
}
