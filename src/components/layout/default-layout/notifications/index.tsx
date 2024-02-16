'use client'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import { Style } from './index.css'
type Props = {
  // todo お知らせ情報
  notificationList?: Array<any>
}

export const Notifications: React.FC<Props> = ({ notificationList }: Props) => {
  // 開閉フラグ
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={Style.notifications}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => setIsOpen(true)}
        edge="start"
      >
        <NotificationsIcon className={Style.notificationIcon} />
      </IconButton>
      <div className={Style.badge}>177</div>
    </div>
  )
}
