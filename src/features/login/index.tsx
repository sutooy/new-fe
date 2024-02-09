import {
  LoginDocument,
  LoginMutation,
  MutationLoginArgs,
} from '@/generated/graphql'
import { useTranslation } from '@/i18n/client'
import { NAMESPACE_OPTIONS } from '@/i18n/settings'
import { useMutation } from '@apollo/client'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface Props {
  displayForgotPass: () => void
}

export const Login = ({ displayForgotPass }: Props) => {
  const { t: loginT, i18n } = useTranslation(NAMESPACE_OPTIONS.login)

  const [login] = useMutation<LoginMutation>(LoginDocument)
  const router = useRouter()
  const [requestError, setRequestError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MutationLoginArgs>()

  const onSubmit = (data: MutationLoginArgs) => {
    login({ variables: data })
      .then((row) => {
        if (row.data?.login.token) router.push('/dashboard')
      })
      .catch((error: any) => {
        setRequestError(error.message)
      })
  }
  return (
    <>
      <h1>Login</h1>
      <Button onClick={displayForgotPass}>切り替え用テストボタン</Button>
    </>
  )
}
