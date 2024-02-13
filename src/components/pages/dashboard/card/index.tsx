'use client'
import { Style } from './index.css';

type Props = {
  // タイトル
  title: string
  // サブテキスト
  subText?: string
}


export const H1Header: React.FC<Props> = ({ title, subText }: Props) => {
  return (
    <h1 className={Style.h1}>
      <div className={Style.title}>{title}</div>
      <div className={Style.subTitle}>{subText}</div>
    </h1>
  )
}
