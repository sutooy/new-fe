'use client'

import { Footer } from '@/features/footer'
import { loginIndexStyle } from '@/features/loginIndex/loginIndex.css'
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

export const LoginIndex = () => {
  const { t: loginT, i18n } = useTranslation(NAMESPACE_OPTIONS.login)

  const [login] = useMutation<LoginMutation>(LoginDocument)
  const router = useRouter()
  const [requestError, setRequestError] = useState('')

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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="255 -50 1600 625">
          <defs></defs>
          <title></title>
          <g id="planet">
            <circle
              className={loginIndexStyle.cls1}
              cx="505.43"
              cy="78.05"
              r="54.36"
            />
          </g>
          <g className={loginIndexStyle.cloud1} id="cloud1">
            <path
              className={loginIndexStyle.cls2}
              d="M50.67,169.49s1.53-10.39,9.78-8.86c0,0,6.42,3.67,10.7-.16,0,0,2.45-1.37,9.18,2,0,0,10.39-7,16.2,5.2,0,0,2.14,4-15.59,4.43,0,0-8,.77-13.76-1.37C67.18,170.72,61.37,173.77,50.67,169.49Z"
              transform="translate(242.51 -81.91)"
            />
          </g>
          <g className={loginIndexStyle.cloud2} id="cloud2">
            <path
              className={loginIndexStyle.cls2}
              d="M362.33,93.74s2.38-13.23,15.22-11.28c0,0,10,4.67,16.64-.2,0,0,3.81-1.75,14.27,2.53,0,0,16.17-9,25.21,6.62,0,0,3.33,5-24.26,5.64,0,0-12.36,1-21.4-1.75C388,95.3,379,99.19,362.33,93.74Z"
              transform="translate(242.51 -81.91)"
            />
          </g>
          <g className={loginIndexStyle.cloud3} id="cloud3">
            <path
              className={loginIndexStyle.cls2}
              d="M673.42,143.15s1.52-10.39,9.78-8.87c0,0,6.42,3.67,10.7-.15,0,0,2.45-1.37,9.17,2,0,0,10.4-7,16.21,5.2,0,0,2.14,4-15.6,4.43,0,0-7.95.76-13.75-1.38C689.93,144.37,684.12,147.43,673.42,143.15Z"
              transform="translate(242.51 -81.91)"
            />
          </g>
          <g id="tree">
            <path
              className={loginIndexStyle.cls2}
              d="M691.44,270.65s9.63-40.82,28-62.83L727.67,223l-4.59,8.26L730,225.7s8.71,18.35,9.17,22.48l-8.25,16.05,11.46-7.34S768,329.35,723.54,367l.92,100.89h-7.34l3.46-99.51s-42-9.17-29.14-85.3l9.63,8.71Z"
              transform="translate(242.51 -81.91)"
            />
            <path
              className={loginIndexStyle.cls2}
              d="M152.12,345.53s6-25.31,17.35-39l5.12,9.38-2.85,5.12,4.27-3.41s5.4,11.38,5.69,13.94l-5.12,9.95,7.11-4.55s15.93,44.94-11.66,68.27l.57,62.57h-4.55l2.14-61.72s-26-5.69-18.07-52.91l6,5.41Z"
              transform="translate(242.51 -81.91)"
            />
          </g>
          <g id="building">
            <polygon
              className={loginIndexStyle.cls2}
              points="527.77 386.98 527.77 118.09 527.77 90.17 752.57 90.17 752.57 386.99 527.77 386.98"
            />
            <rect
              className={loginIndexStyle.cls3}
              x="550.4"
              y="102.76"
              width="26.34"
              height="52.71"
            />
            <rect
              className={loginIndexStyle.cls3}
              x="591.41"
              y="102.76"
              width="26.34"
              height="52.71"
            />
            <rect
              className={loginIndexStyle.cls3}
              x="669.68"
              y="102.76"
              width="26.34"
              height="52.71"
            />
            <rect
              className={loginIndexStyle.cls3}
              x="714.21"
              y="102.76"
              width="26.34"
              height="52.71"
            />
            <rect
              className={loginIndexStyle.cls3}
              x="547.75"
              y="181.97"
              width="26.34"
              height="52.71"
            />
            <rect
              className={loginIndexStyle.cls3}
              x="591.41"
              y="181.97"
              width="26.34"
              height="52.71"
            />
            <rect
              className={loginIndexStyle.cls3}
              x="669.68"
              y="181.97"
              width="26.34"
              height="52.71"
            />
            <rect
              className={loginIndexStyle.cls3}
              x="715.73"
              y="181.97"
              width="26.34"
              height="52.71"
            />
            <rect
              className={loginIndexStyle.cls3}
              x="546.63"
              y="253.9"
              width="26.34"
              height="52.71"
            />
            <rect
              className={loginIndexStyle.cls3}
              x="590.28"
              y="253.9"
              width="26.34"
              height="52.71"
            />
            <rect
              className={loginIndexStyle.cls3}
              x="668.56"
              y="253.9"
              width="26.34"
              height="52.71"
            />
            <rect
              className={loginIndexStyle.cls3}
              x="714.61"
              y="253.9"
              width="26.34"
              height="52.71"
            />
            <rect
              className={loginIndexStyle.cls4}
              x="629.05"
              y="331.4"
              width="27.41"
              height="55.04"
            />
            <rect
              className={loginIndexStyle.cls3}
              x="562.59"
              y="331.24"
              width="14.15"
              height="13.02"
            />
            <rect
              className={loginIndexStyle.cls3}
              x="587.14"
              y="331.24"
              width="14.15"
              height="13.02"
            />
            <rect
              className={loginIndexStyle.cls3}
              x="562.59"
              y="352.41"
              width="14.15"
              height="13.02"
            />
            <rect
              className={loginIndexStyle.cls3}
              x="587.14"
              y="352.41"
              width="14.15"
              height="13.02"
            />
            <rect
              className={loginIndexStyle.cls3}
              x="680.99"
              y="331.24"
              width="14.15"
              height="13.02"
            />
            <rect
              className={loginIndexStyle.cls3}
              x="705.54"
              y="331.24"
              width="14.15"
              height="13.02"
            />
            <rect
              className={loginIndexStyle.cls3}
              x="680.99"
              y="352.41"
              width="14.15"
              height="13.02"
            />
            <rect
              className={loginIndexStyle.cls3}
              x="705.54"
              y="352.41"
              width="14.15"
              height="13.02"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="527.77"
              y="118.4"
              width="224.8"
              height="4.33"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="527.77"
              y="132.84"
              width="224.8"
              height="4.33"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="527.77"
              y="151.61"
              width="224.8"
              height="7.7"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="545.1"
              y="122.73"
              width="5.29"
              height="28.88"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="571.44"
              y="122.68"
              width="5.29"
              height="28.88"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="597.76"
              y="122.68"
              width="5.29"
              height="28.88"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="624.71"
              y="122.68"
              width="5.29"
              height="28.88"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="651.03"
              y="122.73"
              width="5.29"
              height="28.88"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="677.56"
              y="122.73"
              width="5.29"
              height="28.88"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="703.66"
              y="122.73"
              width="5.29"
              height="28.88"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="730.4"
              y="122.73"
              width="5.29"
              height="28.88"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="527.77"
              y="273.4"
              width="224.8"
              height="4.33"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="527.77"
              y="287.84"
              width="224.8"
              height="4.33"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="527.77"
              y="306.61"
              width="224.8"
              height="7.7"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="545.1"
              y="277.73"
              width="5.29"
              height="28.88"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="571.44"
              y="277.68"
              width="5.29"
              height="28.88"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="597.76"
              y="277.68"
              width="5.29"
              height="28.88"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="624.71"
              y="277.68"
              width="5.29"
              height="28.88"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="651.03"
              y="277.73"
              width="5.29"
              height="28.88"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="677.56"
              y="277.73"
              width="5.29"
              height="28.88"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="703.66"
              y="277.73"
              width="5.29"
              height="28.88"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="730.4"
              y="277.73"
              width="5.29"
              height="28.88"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="527.77"
              y="201.65"
              width="224.8"
              height="4.33"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="527.77"
              y="216.09"
              width="224.8"
              height="4.33"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="527.77"
              y="234.87"
              width="224.8"
              height="7.7"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="545.1"
              y="205.98"
              width="5.29"
              height="28.88"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="571.44"
              y="205.93"
              width="5.29"
              height="28.88"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="597.76"
              y="205.93"
              width="5.29"
              height="28.88"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="624.71"
              y="205.93"
              width="5.29"
              height="28.88"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="651.03"
              y="205.98"
              width="5.29"
              height="28.88"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="677.56"
              y="205.98"
              width="5.29"
              height="28.88"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="703.66"
              y="205.98"
              width="5.29"
              height="28.88"
            />
            <rect
              className={loginIndexStyle.cls5}
              x="730.4"
              y="205.98"
              width="5.29"
              height="28.88"
            />
            <path
              className={loginIndexStyle.cls6}
              d="M324.25,460.8s5.19-8.18,10.46-2.4c0,0,4.14-4.79,8.16.17,0,0,8.18-6.91,11.07,4v5.61H324.25"
              transform="translate(242.51 -81.91)"
            />
            <path
              className={loginIndexStyle.cls6}
              d="M441.71,460.8s5.18-8.18,10.45-2.4c0,0,4.15-4.79,8.16.17,0,0,8.18-6.91,11.07,4v5.61H441.71"
              transform="translate(242.51 -81.91)"
            />
            <polygon
              className={loginIndexStyle.cls5}
              points="763.48 90.56 517.66 90.56 517.66 78.05 705.18 78.05 763.48 78.05 763.48 90.56"
            />
            <polygon
              className={loginIndexStyle.cls5}
              points="703.66 43.39 705.18 78.05 743.9 78.05 703.66 43.39"
            />
          </g>
          <g id="road">
            <rect
              className={loginIndexStyle.cls5}
              y="386.15"
              width="1920"
              height="0.97"
            />
            <rect
              className={loginIndexStyle.cls2}
              x="467.95"
              y="423.56"
              width="113.77"
              height="5.52"
            />
            <rect
              className={loginIndexStyle.cls2}
              x="714.06"
              y="423.56"
              width="113.77"
              height="5.52"
            />
            <rect
              className={loginIndexStyle.cls2}
              x="957.78"
              y="423.56"
              width="113.77"
              height="5.52"
            />
            <rect
              className={loginIndexStyle.cls2}
              x="1197.85"
              y="423.56"
              width="113.77"
              height="5.52"
            />
            <rect
              className={loginIndexStyle.cls2}
              x="1438.65"
              y="423.56"
              width="113.77"
              height="5.52"
            />
            <rect
              className={loginIndexStyle.cls2}
              x="223.65"
              y="423.56"
              width="113.77"
              height="5.52"
            />
            <rect
              className={loginIndexStyle.cls2}
              y="423.56"
              width="113.77"
              height="5.52"
            />
            <rect
              className={loginIndexStyle.cls2}
              x="1689.18"
              y="420.8"
              width="113.77"
              height="5.52"
            />
          </g>
          <g id="car-right" transform="translate(-100)">
            <ellipse
              className={loginIndexStyle.cls2}
              cx="322.86"
              cy="406.39"
              rx="11.99"
              ry="1.93"
            />
            <ellipse
              className={loginIndexStyle.cls2}
              cx="269.49"
              cy="406.39"
              rx="11.99"
              ry="1.93"
            />
            <path
              className={loginIndexStyle.cls6}
              d="M11.45,460.28l4-24.86H64.22L82,450.19s11.14.47,13.72,5.63a12.78,12.78,0,0,1,3.17,5.39l.58,17.12h-8.2s0,7.16-9,10H78.11s-7.3-2.75-8-9.7l-32.36.09s.61,6.12-7.57,9.61h-5.8a13.73,13.73,0,0,1-8-8.38l-8.62-.09v-2.46l1.84.08S4.33,464.82,11.45,460.28Z"
              transform="translate(242.51 -81.91)"
            />
            <rect
              className={loginIndexStyle.cls7}
              x="264.96"
              y="366.27"
              width="13.78"
              height="0.7"
            />
            <rect
              className={loginIndexStyle.cls3}
              x="264.96"
              y="357.01"
              width="13.78"
              height="9.15"
            />
            <rect
              className={loginIndexStyle.cls8}
              x="264.96"
              y="356.24"
              width="13.78"
              height="0.94"
            />
            <rect
              className={loginIndexStyle.cls8}
              x="264.96"
              y="366.15"
              width="13.78"
              height="1"
            />
            <polygon
              className={loginIndexStyle.cls8}
              points="265.08 363.22 265.67 363.22 265.67 362.17 266.49 362.17 266.49 361.35 267.11 361.35 267.11 359.94 267.84 359.94 267.84 359.26 268.54 359.26 268.54 357.83 269.31 357.83 269.31 357.18 267.2 357.18 267.2 357.92 266.45 357.89 266.47 358.53 265.64 358.53 265.66 359.12 264.96 359.12 264.96 363.22 265.08 363.22"
            />
            <polygon
              className={loginIndexStyle.cls3}
              points="283.05 357.12 283.05 366.27 311.9 366.27 311.9 362.63 305.51 357.12 283.05 357.12"
            />
            <rect
              className={loginIndexStyle.cls8}
              x="283.05"
              y="356.19"
              width="22.46"
              height="0.94"
            />
            <rect
              className={loginIndexStyle.cls8}
              x="283.05"
              y="366.27"
              width="33.55"
              height="0.7"
            />
            <polyline
              className={loginIndexStyle.cls8}
              points="283.05 364.06 283.82 364.06 283.82 363.34 284.55 363.34 284.55 361.95 285.32 361.95 285.32 361.21 286.02 361.21 286.02 360.5 286.7 360.5 286.7 359.16 287.43 359.16 287.43 358.41 288.06 358.41 288.06 357.71 288.83 357.71 288.83 356.36 286.72 356.36 286.75 356.96 285.94 356.98 285.94 357.8 285.21 357.78 285.21 359.01 284.46 358.99 284.48 359.8 283.73 359.8 283.73 361.14 283.05 361.14 283.05 364.06"
            />
            <polygon
              className={loginIndexStyle.cls8}
              points="288.83 366.33 288.83 365.41 289.6 365.41 289.6 364.23 290.2 364.23 290.2 363.43 290.97 363.43 290.97 362.14 291.71 362.14 291.71 360.71 292.59 360.71 292.59 359.94 293.1 359.94 293.1 358.64 293.8 358.64 293.8 357.87 294.51 357.87 294.51 357.06 297.39 357.06 297.39 357.76 296.73 357.74 296.75 358.4 295.91 358.42 295.91 359.26 295.34 359.26 295.34 360.62 294.49 360.6 294.46 361.32 293.67 361.3 293.69 362.75 293.11 362.73 293.11 363.41 292.4 363.37 292.42 364.69 291.63 364.69 291.63 366.33 288.83 366.33"
            />
            <polyline
              className={loginIndexStyle.cls3}
              points="311.9 362.63 316.6 366.27 311.9 366.27"
            />
            <rect
              className={loginIndexStyle.cls8}
              x="68.34"
              y="435.61"
              width="0.82"
              height="15.69"
              transform="translate(-72.66 129.21) rotate(-50.01)"
            />
            <polyline
              className={loginIndexStyle.cls8}
              points="317.54 366.27 318.55 366.97 316.15 366.97"
            />
            <path
              className={loginIndexStyle.cls5}
              d="M66.85,450.71v1.49h3.47v-1.49s3.61-2.64,0-5.85H68.24v5.89Z"
              transform="translate(242.51 -81.91)"
            />
            <rect
              className={loginIndexStyle.cls9}
              x="283.05"
              y="374.76"
              width="1.56"
              height="2.73"
            />
            <path
              className={loginIndexStyle.cls5}
              d="M96,456.23s-3.56,3.52-1.54,7.39c0,0,.31,1.89,4.62,3l-.27-5.8S98.51,458.83,96,456.23Z"
              transform="translate(242.51 -81.91)"
            />
            <polygon
              className={loginIndexStyle.cls5}
              points="249.46 395.14 249.46 398.58 260.64 397.91 260.64 396.64 252.33 396.47 251.99 395.58 249.46 395.14"
            />
            <circle
              className={loginIndexStyle.cls5}
              cx="269.49"
              cy="396.74"
              r="10.79"
            />
            <ellipse
              className={loginIndexStyle.cls4}
              cx="269.49"
              cy="396.74"
              rx="6.33"
              ry="6.49"
            />
            <circle
              className={loginIndexStyle.cls5}
              cx="322.86"
              cy="396.74"
              r="10.79"
            />
            <ellipse
              className={loginIndexStyle.cls4}
              cx="322.86"
              cy="396.74"
              rx="6.33"
              ry="6.49"
            />
          </g>
          <g id="car-left" transform="translate(450, 20)">
            <ellipse
              className={loginIndexStyle.cls2}
              cx="1468.42"
              cy="443.04"
              rx="11.99"
              ry="1.93"
            />
            <ellipse
              className={loginIndexStyle.cls2}
              cx="1521.79"
              cy="443.04"
              rx="11.99"
              ry="1.93"
            />
            <path
              className={loginIndexStyle.cls6}
              d="M1294.81,496.92l-4-24.86H1242l-17.83,14.78s-11.14.47-13.72,5.63a12.74,12.74,0,0,0-3.16,5.39l-.59,17.12H1215s0,7.15,9,10h4.16s7.3-2.76,8-9.71l32.36.09s-.62,6.13,7.56,9.62h5.81a13.76,13.76,0,0,0,8-8.39l8.62-.09V514l-1.85.09S1301.93,501.47,1294.81,496.92Z"
              transform="translate(242.51 -81.91)"
            />
            <rect
              className={loginIndexStyle.cls7}
              x="1512.54"
              y="402.92"
              width="13.78"
              height="0.7"
            />
            <rect
              className={loginIndexStyle.cls3}
              x="1512.54"
              y="393.65"
              width="13.78"
              height="9.15"
            />
            <rect
              className={loginIndexStyle.cls8}
              x="1512.54"
              y="392.89"
              width="13.78"
              height="0.94"
            />
            <rect
              className={loginIndexStyle.cls8}
              x="1512.54"
              y="402.8"
              width="13.78"
              height="1"
            />
            <polygon
              className={loginIndexStyle.cls8}
              points="1526.19 399.87 1525.61 399.87 1525.61 398.81 1524.79 398.81 1524.79 397.99 1524.16 397.99 1524.16 396.58 1523.44 396.58 1523.44 395.9 1522.73 395.9 1522.73 394.47 1521.96 394.47 1521.96 393.83 1524.08 393.83 1524.08 394.56 1524.82 394.54 1524.8 395.18 1525.64 395.18 1525.61 395.77 1526.32 395.77 1526.32 399.87 1526.19 399.87"
            />
            <polygon
              className={loginIndexStyle.cls3}
              points="1508.22 393.77 1508.22 402.92 1479.38 402.92 1479.38 399.28 1485.77 393.77 1508.22 393.77"
            />
            <rect
              className={loginIndexStyle.cls8}
              x="1485.77"
              y="392.83"
              width="22.46"
              height="0.94"
            />
            <rect
              className={loginIndexStyle.cls8}
              x="1474.67"
              y="402.92"
              width="33.55"
              height="0.7"
            />
            <polyline
              className={loginIndexStyle.cls8}
              points="1508.22 400.71 1507.45 400.71 1507.45 399.98 1506.73 399.98 1506.73 398.6 1505.96 398.6 1505.96 397.85 1505.26 397.85 1505.26 397.15 1504.57 397.15 1504.57 395.81 1503.85 395.81 1503.85 395.06 1503.21 395.06 1503.21 394.36 1502.44 394.36 1502.44 393.01 1504.55 393.01 1504.53 393.61 1505.33 393.63 1505.33 394.44 1506.07 394.42 1506.07 395.65 1506.82 395.63 1506.79 396.44 1507.54 396.44 1507.54 397.79 1508.22 397.79 1508.22 400.71"
            />
            <polygon
              className={loginIndexStyle.cls8}
              points="1502.44 402.97 1502.44 402.06 1501.67 402.06 1501.67 400.87 1501.08 400.87 1501.08 400.08 1500.31 400.08 1500.31 398.78 1499.56 398.78 1499.56 397.35 1498.68 397.35 1498.68 396.58 1498.17 396.58 1498.17 395.29 1497.47 395.29 1497.47 394.52 1496.77 394.52 1496.77 393.71 1493.89 393.71 1493.89 394.41 1494.55 394.38 1494.53 395.04 1495.36 395.07 1495.36 395.9 1495.94 395.9 1495.94 397.26 1496.79 397.24 1496.81 397.97 1497.6 397.95 1497.58 399.4 1498.16 399.38 1498.16 400.06 1498.88 400.01 1498.86 401.33 1499.65 401.33 1499.65 402.97 1502.44 402.97"
            />
            <polyline
              className={loginIndexStyle.cls3}
              points="1479.38 399.28 1474.67 402.92 1479.38 402.92"
            />
            <rect
              className={loginIndexStyle.cls8}
              x="1229.66"
              y="479.68"
              width="15.69"
              height="0.82"
              transform="translate(223.38 825.72) rotate(-39.99)"
            />
            <polyline
              className={loginIndexStyle.cls8}
              points="1473.74 402.92 1472.73 403.62 1475.13 403.62"
            />
            <path
              className={loginIndexStyle.cls5}
              d="M1239.41,487.35v1.5h-3.48v-1.5s-3.6-2.64,0-5.85H1238v5.9Z"
              transform="translate(242.51 -81.91)"
            />
            <rect
              className={loginIndexStyle.cls9}
              x="1506.66"
              y="411.41"
              width="1.56"
              height="2.73"
            />
            <path
              className={loginIndexStyle.cls5}
              d="M1210.26,492.88s3.56,3.52,1.54,7.39c0,0-.31,1.89-4.62,3l.26-5.81S1207.75,495.47,1210.26,492.88Z"
              transform="translate(242.51 -81.91)"
            />
            <polygon
              className={loginIndexStyle.cls5}
              points="1541.82 431.78 1541.82 435.22 1530.64 434.56 1530.64 433.28 1538.95 433.11 1539.29 432.23 1541.82 431.78"
            />
            <circle
              className={loginIndexStyle.cls5}
              cx="1521.79"
              cy="433.39"
              r="10.79"
            />
            <ellipse
              className={loginIndexStyle.cls4}
              cx="1521.79"
              cy="433.39"
              rx="6.33"
              ry="6.49"
            />
            <circle
              className={loginIndexStyle.cls5}
              cx="1468.42"
              cy="433.39"
              r="10.79"
            />
            <ellipse
              className={loginIndexStyle.cls4}
              cx="1468.42"
              cy="433.39"
              rx="6.33"
              ry="6.49"
            />
          </g>
        </svg>
      </div>

      {/* {displayForgotPass ? (
        <div className="App">
          <ForgotPass hideForgotPass={handleHideForgotPass} />
        </div>
      ) : (
        <div>
          <Login displayForgotPass={handleDisplayForgotPass} />
        </div>
      )} */}
      <Footer></Footer>
    </div>
  )
}
