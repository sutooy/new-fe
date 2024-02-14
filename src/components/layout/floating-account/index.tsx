'use client'
import DefaultProfileIcon from '@/images/icon/default-profile.png'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Notifications } from '../notifications'
import { Style } from './index.css'
type Props = {
  // todo アカウント情報
  property?: any
}

export const FloatingAccount: React.FC<Props> = ({ property }: Props) => {
  // 追従フラグ
  const [isFixedNav, serIsFixedNav] = useState(false)

  const windowScroll = () => {
    debugger
    serIsFixedNav(window.scrollY > 50)
  }
  // アカウントの追従バー
  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('scroll', windowScroll)
      return () => window.removeEventListener('scroll', windowScroll)
    }, 0)
  }, [])

  return (
    <div
      className={`${Style.account} ${isFixedNav ? Style.accountFixed : ''} `}
    >
      {/* お知らせ */}
      <Notifications />
      {/* プロフィール */}
      <div>
        <div className={Style.userName}>Takayuki Miwa</div>
        <div className={Style.role}>admin</div>
      </div>
      <div className={Style.imgBox}>
        <Image src={DefaultProfileIcon} width={41} height={41} alt="profile" />
      </div>
    </div>
  )
}
