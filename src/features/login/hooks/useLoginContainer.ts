import { useState } from 'react'

export const useLoginContainer = () => {
  const [displayForgotPass, setDisplayForgotPass] = useState(false)
  const handleDisplayForgotPass = () => {
    setDisplayForgotPass(true)
  }

  const handleHideForgotPass = () => {
    setDisplayForgotPass(false)
  }
  return {
    displayForgotPass,
    setDisplayForgotPass,
    handleDisplayForgotPass,
    handleHideForgotPass,
  }
}
