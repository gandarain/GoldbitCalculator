import React from 'react'
import { useNavigation } from '@react-navigation/native'

import type { UseNavigation } from '../../Types'

import type { States } from './Login.types'

const useGetStateAndSetters = (): States => {
  const [showPassword, setShowPassword] = React.useState(false)
  const navigation = useNavigation<UseNavigation>()

  return {
    showPassword,
    setShowPassword,
    navigation
  }
}

export { useGetStateAndSetters }
