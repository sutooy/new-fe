'use client'
import mouvsLoading from '@/images/loading-movus.svg'
import Image from 'next/image'
import React from 'react'
import { Style } from './index.css'

type Props = {
  // アイコンサイズ
  size?: number
}

// デフォルトサイズ
const defaultSize = 64

export const MouvsLoading: React.FC<Props> = ({ size }: Props) => {
  return (
    <div className={Style.loading}>
      <Image
        src={mouvsLoading}
        width={size ? size : defaultSize}
        height={size ? size : defaultSize}
        alt="loading"
      />
    </div>
  )
}
