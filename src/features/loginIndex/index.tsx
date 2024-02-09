'use client'

import { Footer } from '@/features/footer'
import {
  LoginDocument,
  LoginMutation,
  MutationLoginArgs,
} from '@/generated/graphql'
import { useTranslation } from '@/i18n/client'
import { NAMESPACE_OPTIONS } from '@/i18n/settings'
import mouvsLogo from '@/images/logo-movus-grey.svg'
import { useMutation } from '@apollo/client'
import { gsap } from 'gsap'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ForgotPass } from '../ForgotPass'
import { Login } from '../login'
import { LoginIndexBackground } from './components/loginIndexBackground'

export const LoginIndex = () => {
  const { t: loginT, i18n } = useTranslation(NAMESPACE_OPTIONS.login)

  const [login] = useMutation<LoginMutation>(LoginDocument)
  const router = useRouter()
  const [requestError, setRequestError] = useState('')
  const [displayForgotPass, setDisplayForgotPass] = useState(false)
  const handleDisplayForgotPass = () => {
    setDisplayForgotPass(true)
  }

  const handleHideForgotPass = () => {
    setDisplayForgotPass(false)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MutationLoginArgs>()

  const onSubmit = (data: MutationLoginArgs) => {
    login({ variables: data })
      .then((row) => {
        if (row.data?.login.token) router.push('/dashboard')
      })
      .catch((error: any) => {
        setRequestError(error.message)
      })
  }

  useEffect(() => {
    var viewport = document.querySelector('meta[name=viewport]')
    viewport?.setAttribute(
      'content',
      (viewport as any).content + ', height=' + window.innerHeight
    )

    const carRight = document.getElementById('car-right')
    const carLeft = document.getElementById('car-left')

    gsap.to(carRight, {
      duration: 7,
      x: 2000,
      y: 0,
      ease: 'none',
      repeat: -1,
      repeatDelay: 1,
    })

    gsap.to(carLeft, {
      duration: 7,
      x: -2000,
      y: 0,
      ease: 'none',
      repeat: -1,
      repeatDelay: 1,
    })

    /* if (Cookies.get().token) {
      dispatch(verifyRoute());
    } */
  }, [])

  return (
    <div className="base-container">
      <div className="movus-logo">
        <Image src={mouvsLogo} width="250" height="40" alt="movus"></Image>
      </div>
      <div className="city-map h-full">
        <LoginIndexBackground />
      </div>

      {displayForgotPass ? (
        <div className="App">
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
