import { useSnackbar } from '@/contexts/snackbarContext'
import {
  LoginDocument,
  LoginMutation,
  MutationLoginArgs,
} from '@/generated/graphql'
import { useTranslation } from '@/i18n/client'
import { NAMESPACE_OPTIONS } from '@/i18n/settings'
import { validation_login } from '@/validations/validationSchema'
import { useMutation } from '@apollo/client'
import { yupResolver } from '@hookform/resolvers/yup'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const useSignIn = () => {
  const { t: loginT } = useTranslation(NAMESPACE_OPTIONS.login)
  const router = useRouter()
  const [login] = useMutation<LoginMutation>(LoginDocument)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const showSnackbar = useSnackbar()
  const [showPassword, setShowPassword] = useState(false)
  const handleShowPassword = () => setShowPassword((prev) => !prev)

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<MutationLoginArgs>({
    resolver: yupResolver(validation_login),
  })

  const onSubmit = (data: MutationLoginArgs) => {
    setIsLoading(true)
    login({ variables: data })
      .then((row) => {
        if (row.data?.login.token) {
          showSnackbar({
            newMessage: loginT('LOGGED IN OK!!'),
            newSeverity: 'success',
          })
          Cookies.set('token', row.data.login.token, {
            path: '/',
            secure: true,
            sameSite: 'none',
          })
          router.push('/dashboard')
        }
      })
      .catch((error: any) => {
        showSnackbar({ newMessage: error.message, newSeverity: 'error' })
      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  return {
    showPassword,
    setShowPassword,
    handleShowPassword,
    onSubmit,
    register,
    setError,
    handleSubmit,
    errors,
    isLoading,
    setIsLoading,
    reset,
    loginT,
  }
}
