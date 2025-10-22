import React from 'react'

import type { States } from './Login.types'

const useGetStateAndSetters = (): States => {
  const [showPassword, setShowPassword] = React.useState(false)

  return {
    showPassword,
    setShowPassword
  }
}

export { useGetStateAndSetters }