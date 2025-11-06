import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import type { UseNavigationUnauthorizedRoutes } from '../../Types'

import type { States } from './InputEmail.types'

const useGetStateAndSetters = (): States => {
  const dispatch = useDispatch()
  const navigation = useNavigation<UseNavigationUnauthorizedRoutes>()

  return {
    dispatch,
    navigation
  }
}

export { useGetStateAndSetters }
