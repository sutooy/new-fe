'use client'

import { Footer } from '@/features/login/components/footer'
import mouvsLogo from '@/images/logo-movus-grey.svg'
import Image from 'next/image'
import { ForgotPass } from './components/forgotPass'
import { LoginIndexBackground } from './components/loginBackground'

import { Login } from './components/login'
import { useLoginContainer } from './hooks/useLoginContainer'
import { loginContainerStyle } from './loginContainer.css'

export const LoginContainer = () => {
  const { displayForgotPass, handleHideForgotPass, handleDisplayForgotPass } =
    useLoginContainer()

  return (
    <div className={loginContainerStyle.baseContainer}>
      <div className={loginContainerStyle.movusLogo}>
        <Image src={mouvsLogo} width="200" height="32" alt="movus"></Image>
      </div>
      <div className={loginContainerStyle.cityMap}>
        <LoginIndexBackground />
      </div>

      {displayForgotPass ? (
        <div className={loginContainerStyle.app}>
          <ForgotPass hideForgotPass={handleHideForgotPass} />
        </div>
      ) : (
        <div>
          <Login displayForgotPass={handleDisplayForgotPass} />
        </div>
      )}
      <Footer />
    </div>
  )
}
