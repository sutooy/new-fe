'use client'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import React from 'react'

type Props = {
  children: React.ReactNode
  // 開閉フラグ
  isOpen: boolean
  // OKコールバック
  okCallBack?: () => void
  // キャンセルコールバック
  cancelCallBack: () => void
  // OKボタンテキスト
  okBtnText?: string
  // キャンセルボタンテキスト
  cancelBtnText?: string
  // タイトル
  title?: string
  // 横幅
  width?: string
}

// 横幅デフォルト
const defaultWidth = '600px'

export const PopupDialog: React.FC<Props> = ({
  children,
  isOpen,
  okCallBack,
  cancelCallBack,
  okBtnText,
  cancelBtnText,
  title,
  width,
}: Props) => {
  return (
    <Dialog
      open={isOpen}
      onClose={cancelCallBack}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        '& .MuiPaper-root': {
          width: width ? `${width}px` : defaultWidth,
        },
      }}
    >
      {/* タイトル */}
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        {/* 本文 */}
        <DialogContentText id="alert-dialog-slide-description">
          {children}
        </DialogContentText>
      </DialogContent>
      {/* アクションボタン */}
      <DialogActions>
        {/* cancel */}
        <Button onClick={cancelCallBack}>
          {cancelBtnText ? cancelBtnText : 'Cancel'}
        </Button>
        {/* ok */}
        {okCallBack && (
          <Button onClick={okCallBack}>{okBtnText ? okBtnText : 'OK'}</Button>
        )}
      </DialogActions>
    </Dialog>
  )
}
