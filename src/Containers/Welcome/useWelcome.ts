import { useNavigation } from '@react-navigation/native'

import type { UseNavigationUnauthorizedRoutes } from '../../Types'

import type { States } from './Welcome.types'

const useGetStateAndSetters = (): States => {
  const navigation = useNavigation<UseNavigationUnauthorizedRoutes>()

  return {
    navigation
  }
}

export { useGetStateAndSetters }
