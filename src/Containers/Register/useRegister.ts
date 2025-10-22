import React from 'react'

import type { States } from './Register.types'

const useGetStateAndSetters = (): States => {
  const [showPassword, setShowPassword] = React.useState(false)
  const [showConfirmationPassword, setShowConfirmationPassword] = React.useState(false)

  return {
    showPassword,
    setShowPassword,
    showConfirmationPassword,
    setShowConfirmationPassword
  }
}

export { useGetStateAndSetters }