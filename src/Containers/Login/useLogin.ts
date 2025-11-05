import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import type { UseNavigation } from '../../Types'

import type { States } from './Login.types'

const useGetStateAndSetters = (): States => {
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = React.useState(false)
  const navigation = useNavigation<UseNavigation>()
  const [showLoadingMask, setShowLoadingMask] = React.useState(false)

  return {
    showPassword,
    setShowPassword,
    navigation,
    dispatch,
    showLoadingMask,
    setShowLoadingMask
  }
}

export { useGetStateAndSetters }
