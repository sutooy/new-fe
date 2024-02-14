import { useSnackbar } from '@/contexts/snackbarContext'
import {
  ForgotPassDocument,
  ForgotPassMutation,
  MutationForgotPasswordArgs,
} from '@/generated/graphql'
import { useTranslation } from '@/i18n/client'
import { NAMESPACE_OPTIONS } from '@/i18n/settings'
import { validation_email } from '@/validations/validationSchema'
import { useMutation } from '@apollo/client'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

export const useForgotPass = () => {
  const { t: loginT } = useTranslation(NAMESPACE_OPTIONS.login)
  const router = useRouter()
  const [forgotPass] = useMutation<ForgotPassMutation>(ForgotPassDocument)
  const showSnackbar = useSnackbar()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MutationForgotPasswordArgs>({
    resolver: yupResolver(validation_email),
  })

  const onSubmit = (data: MutationForgotPasswordArgs) => {
    forgotPass({ variables: data })
      .then((row) => {
        if (row.data?.forgotPassword.message) {
          showSnackbar({
            newMessage: loginT(row.data.forgotPassword.message),
            newSeverity: 'success',
          })
          router.push('/dashboard')
        }
      })
      .catch((error: any) => {
        showSnackbar({ newMessage: error.message, newSeverity: 'error' })
      })
  }
  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
    loginT,
  }
}
