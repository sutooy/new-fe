'use client'

import { Footer } from '@/features/login/components/footer'
import mouvsLogo from '@/images/logo-movus-grey.svg'
import Image from 'next/image'
import { ForgotPass } from './components/forgotPass'
import { LoginIndexBackground } from './components/loginBackground'
import { SignIn } from './components/signIn'
import { useLogin } from './hooks/useLogin'
import { loginStyle } from './login.css'

export const Login = () => {
  const { displayForgotPass, handleHideForgotPass, handleDisplayForgotPass } =
    useLogin()

  return (
    <div className={loginStyle.baseContainer}>
      <div className={loginStyle.movusLogo}>
        <Image src={mouvsLogo} width="200" height="32" alt="movus"></Image>
      </div>
      <div className={loginStyle.cityMap}>
        <LoginIndexBackground />
      </div>

      {displayForgotPass ? (
        <div className={loginStyle.app}>
          <ForgotPass hideForgotPass={handleHideForgotPass} />
        </div>
      ) : (
        <div>
          <SignIn displayForgotPass={handleDisplayForgotPass} />
        </div>
      )}
      <Footer></Footer>
    </div>
  )
}
