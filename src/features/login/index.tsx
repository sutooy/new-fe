import { Button } from '@mui/material'

interface Props {
  displayForgotPass: () => void
}

export const Login = ({ displayForgotPass }: Props) => {
  /* 後でi18n組み込む */
  //const { t: loginT, i18n } = useTranslation(NAMESPACE_OPTIONS.login)
  //const { onSubmit } = useLogin();

  return (
    <>
      <h1>Login</h1>
      <Button onClick={displayForgotPass}>切り替え用テストボタン</Button>
    </>
  )
}
