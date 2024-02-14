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
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

export const useSignIn = () => {
  const { t: loginT } = useTranslation(NAMESPACE_OPTIONS.login)
  const router = useRouter()
  const [login] = useMutation<LoginMutation>(LoginDocument)
  const [requestError, setRequestError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const showSnackbar = useSnackbar()
  const [showPassword, setShowPassword] = useState(false)
  const handleShowPassword = () => setShowPassword((prev) => !prev)

  useEffect(() => {
    reset()
    if (requestError) {
      if (requestError === loginT('Email Not Registered')) {
        setError('username', {
          message: loginT('The email provided is not registered'),
        })
      } else if (requestError === loginT('Wrong Password')) {
        setError('password', {
          message: loginT('Sorry, your password was incorrect.'),
        })
      }
    }
  }, [requestError])

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
          router.push('/dashboard')
        }
      })
      .catch((error: any) => {
        setRequestError(error.message)
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
    requestError,
    setRequestError,
    isLoading,
    setIsLoading,
    reset,
    loginT,
  }
}
