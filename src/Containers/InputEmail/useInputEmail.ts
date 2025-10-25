import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import type { UseNavigation } from '../../Types'

import type { States } from './InputEmail.types'

const useGetStateAndSetters = (): States => {
  const dispatch = useDispatch()
  const navigation = useNavigation<UseNavigation>()

  return {
    dispatch,
    navigation
  }
}

export { useGetStateAndSetters }
