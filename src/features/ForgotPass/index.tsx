import { Button } from '@mui/material'

interface Props {
  hideForgotPass: () => void
}

export const ForgotPass = ({ hideForgotPass }: Props) => {
  return (
    <>
      <h1>ForgotPass</h1>
      <Button onClick={hideForgotPass}>切り替え用テストボタン</Button>
    </>
  )
}
