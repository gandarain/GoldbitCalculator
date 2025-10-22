import { useNavigation } from '@react-navigation/native'

import type { UseNavigation } from '../../Types'

import type { States } from './Welcome.types'

const useGetStateAndSetters = (): States => {
  const navigation = useNavigation<UseNavigation>()

  return {
    navigation
  }
}

export { useGetStateAndSetters }