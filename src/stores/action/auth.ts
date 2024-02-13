import { History } from 'history'
import { Dispatch } from 'react'

export const dataSuccess =
  (isSuccess: boolean) =>
  async (dispatch: Dispatch<{ type: string; payload: boolean }>) => {
    dispatch({ type: 'ACTION_SUCCESS', payload: isSuccess })
  }

export const clearError =
  () => async (dispatch: Dispatch<{ type: string }>) => {
    dispatch({ type: 'AUTH_CLEAR_ERROR' })
    dispatch({ type: 'SERVER_CLEAR_ERROR' })
  }

export const dataLoading =
  (isLoading: boolean) =>
  async (dispatch: Dispatch<{ type: string; payload: boolean }>) => {
    dispatch({ type: 'AUTH_ACTION_LOADING', payload: isLoading })
  }

export const signInV2 =
  (authData: any, history: History<any>, message: any) =>
  async (dispatch: Dispatch<any>) => {
    dispatch(dataLoading(true))

    /* api
      .signInV2(authData)
      .then((res) => {
        const token = res.data.token
        const refreshToken = res.data.refreshToken
        const approveToken = Cookies.get().approve
        Cookies.set('token', token, {
          path: '/',
          secure: true,
          sameSite: 'none',
        })

        Cookies.set('ref', refreshToken, {
          path: '/',
          secure: true,
          sameSite: 'none',
        })

        const decoded = jwtDecode(token)

        dispatch({ type: 'LOGIN_SUCCESS', payload: decoded })
        dispatch({ type: 'CHECK_LOGIN', payload: 'LOGGED IN OK!' })
        dispatch(dataSuccess(res.message))

        message(res.data.message)
        dispatch(clearError())
        dispatch(checkWhiteList())
        dispatch(dataLoading(false))

        if (approveToken) {
          history.push(`/application-approval?token=${approveToken}`)
        } else {
          history.push('/')
        }
      })
      .catch((error) => {
        if (error.response) {
          dispatch({
            type: 'AUTH_GET_ERROR',
            payload: error.response.data.message,
          })
        } else {
          dispatch({
            type: 'SERVER_GET_ERROR',
            payload: 'Oops, failed to connect to server. Please try again.',
          })
        }
        dispatch(dataLoading(false))
      }) */
  }
