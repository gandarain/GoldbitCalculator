import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import type { UseNavigationUnauthorizedRoutes } from '../../Types'

import type { States } from './Register.types'

const useGetStateAndSetters = (): States => {
  const dispatch = useDispatch()
  const navigation = useNavigation<UseNavigationUnauthorizedRoutes>()
  const [showPassword, setShowPassword] = React.useState(false)
  const [showConfirmationPassword, setShowConfirmationPassword] = React.useState(false)
  const [showLoadingMask, setShowLoadingMask] = React.useState(false)

  return {
    showPassword,
    setShowPassword,
    showConfirmationPassword,
    setShowConfirmationPassword,
    dispatch,
    navigation,
    showLoadingMask,
    setShowLoadingMask
  }
}

export { useGetStateAndSetters }
