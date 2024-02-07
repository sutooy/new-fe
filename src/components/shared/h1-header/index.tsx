'use client'
import React, { useState } from 'react';


import styles from './index.module.scss';
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
    <h1 className={styles.h1}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subTitle}>{subText}</div>
    </h1>
  )
}
