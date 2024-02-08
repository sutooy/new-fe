'use client'

import { Footer } from '@/features/footer'
import {
  LoginDocument,
  LoginMutation,
  MutationLoginArgs,
} from '@/generated/graphql'
import { useTranslation } from '@/i18n/client'
import { NAMESPACE_OPTIONS } from '@/i18n/settings'
import { useMutation } from '@apollo/client'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import {
  Alert,
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { teal } from '@mui/material/colors'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const Login = () => {
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
      <Paper
        elevation={3}
        sx={{
          p: 4,
          height: '70vh',
          margin: '60px 120px',
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Avatar sx={{ bgcolor: teal[400] }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant={'h5'} sx={{ m: '30px' }}>
            {loginT('title')}
          </Typography>
        </Grid>
        {requestError && (
          <Alert sx={{ mb: 2 }} color="error">
            {requestError}
          </Alert>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Username"
            variant="standard"
            {...register('username', { required: 'usernameは必須です' })}
            fullWidth
            error={errors.username?.message ? true : false}
            helperText={errors?.username?.message}
          />
          <TextField
            type="password"
            label="Password"
            variant="standard"
            {...register('password', { required: 'passwordは必須です' })}
            helperText={errors?.username?.message}
            error={errors.username?.message ? true : false}
            fullWidth
            sx={{ mt: 3 }}
          />
          <Box mt={3}>
            <Button type="submit" color="primary" variant="contained" fullWidth>
              サインイン
            </Button>
          </Box>
        </form>
      </Paper>
      <Footer />
    </>
  )
}
