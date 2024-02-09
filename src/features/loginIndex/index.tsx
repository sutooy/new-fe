'use client'

import { Footer } from '@/features/footer'
import mouvsLogo from '@/images/logo-movus-grey.svg'
import Image from 'next/image'
import { ForgotPass } from '../ForgotPass'
import { Login } from '../login'
import { LoginIndexBackground } from './components/loginIndexBackground'
import { useLoginIndex } from './hooks/useLoginIndex'
import { loginIndexStyle } from './loginIndex.css'

export const LoginIndex = () => {
  const { displayForgotPass, handleHideForgotPass, handleDisplayForgotPass } =
    useLoginIndex()

  return (
    <div className={loginIndexStyle.baseContainer}>
      <div className={loginIndexStyle.movusLogo}>
        <Image src={mouvsLogo} width="200" height="32" alt="movus"></Image>
      </div>
      <div className={loginIndexStyle.cityMap}>
        <LoginIndexBackground />
      </div>

      {displayForgotPass ? (
        <div className={loginIndexStyle.app}>
          <ForgotPass hideForgotPass={handleHideForgotPass} />
        </div>
      ) : (
        <div>
          <Login displayForgotPass={handleDisplayForgotPass} />
        </div>
      )}
      <Footer></Footer>
    </div>
  )
}
