import type { ViewStyle } from 'react-native'
import type { NavigationContainerRef } from '@react-navigation/native'
import type { AppDispatch } from '../Redux/store'

export type States = {
  navigationRef: React.RefObject<NavigationContainerRef<ReactNavigation.RootParamList> | null>
  dispatch: AppDispatch
  isLogin: boolean
  isLoading: boolean
  setIsLoading: (value: boolean) => void
}

export type Styles = {
  containerLoading: ViewStyle
}
