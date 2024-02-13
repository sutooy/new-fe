'use client'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
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
}

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
}: Props) => {
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
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          color="error"
          className={Style.closeBtn}
          onClick={closeCallBack}
        >
          {closeBtnText ? closeBtnText : 'Cancel'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
