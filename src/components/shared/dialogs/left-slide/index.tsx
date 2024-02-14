'use client'
import CloseIcon from '@mui/icons-material/Close'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Slide,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import React from 'react'
import { DialogStyle, Style } from './index.css'

type Props = {
  children: React.ReactNode
  // 開閉フラグ
  isOpen: boolean
  // 閉じるコールバック
  closeCallBack: () => void
  // 閉じるボタンテキスト
  closeBtnText?: string
  // 横幅
  width?: string
  // キャンセルボタン非表示
  isHideCancelBtn?: boolean
}

// 横幅デフォルト
const defaultWidth = '525px'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />
})

export const LeftSlideDialog: React.FC<Props> = ({
  children,
  isOpen,
  closeCallBack,
  closeBtnText,
  width,
  isHideCancelBtn,
}: Props) => {
  DialogStyle.muiPaperRoot.width = width ? `${width}px` : defaultWidth
  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={closeCallBack}
      aria-describedby="alert-dialog-slide-description"
      sx={{
        '& .MuiDialog-container': DialogStyle.muiDialogContainer,
        '& .MuiPaper-root': DialogStyle.muiPaperRoot,
      }}
    >
      <div className={DialogStyle.header}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={closeCallBack}
          edge="start"
          sx={{ marginLeft: 0 }}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <DialogContent>{children}</DialogContent>
      {!isHideCancelBtn && (
        <DialogActions sx={{ justifyContent: 'flex-start' }}>
          <Button
            variant="outlined"
            color="error"
            className={Style.closeBtn}
            onClick={closeCallBack}
          >
            {closeBtnText ? closeBtnText : 'Cancel'}
          </Button>
        </DialogActions>
      )}
    </Dialog>
  )
}
