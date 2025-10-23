import React from 'react'

import { useDispatch } from 'react-redux'

import type { States } from './Register.types'

const useGetStateAndSetters = (): States => {
  const [showPassword, setShowPassword] = React.useState(false)
  const [showConfirmationPassword, setShowConfirmationPassword] = React.useState(false)
  const dispatch = useDispatch()

  return {
    showPassword,
    setShowPassword,
    showConfirmationPassword,
    setShowConfirmationPassword,
    dispatch
  }
}

export { useGetStateAndSetters }