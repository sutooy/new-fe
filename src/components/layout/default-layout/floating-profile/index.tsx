'use client'
import { Notifications } from '@/components/layout/default-layout/notifications'
import { ProfileMenu } from '@/components/layout/default-layout/profile-menu'
import React, { useEffect, useState } from 'react'
import { Style } from './index.css'
type Props = {
  // todo アカウント情報
  property?: any
}

export const FloatingProfile: React.FC<Props> = ({ property }: Props) => {
  // 追従フラグ
  const [isFixedNav, serIsFixedNav] = useState(false)

  const windowScroll = () => {
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
      <ProfileMenu />
    </div>
  )
}
