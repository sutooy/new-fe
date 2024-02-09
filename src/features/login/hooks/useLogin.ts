import {
  LoginDocument,
  LoginMutation,
  MutationLoginArgs,
} from '@/generated/graphql'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const useLogin = () => {
  const router = useRouter()
  const [login] = useMutation<LoginMutation>(LoginDocument)
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
  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
    requestError,
    setRequestError,
  }
}
