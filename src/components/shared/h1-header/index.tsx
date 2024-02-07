'use client'
import React, { useState } from 'react';
import { Style } from './index.css';

type Props = {
  // タイトル
  title: string
  // サブテキスト
  subText?: string
}


export const H1Header: React.FC<Props> = ({ title, subText }: Props) => {
  // i18nの言語推定の反映を待ち、hydration errorを避ける
  const [initialRenderComplete, setInitialRenderComplete] =
    useState<boolean>(false)

  return (
    <h1 className={Style.h1}>
      <div className={Style.title}>{title}</div>
      <div className={Style.subTitle}>{subText}</div>
    </h1>
  )
}
