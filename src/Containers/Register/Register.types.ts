import { TextStyle, ViewStyle } from 'react-native'

import type { Dispatch, UseNavigation } from '../../Types'

export type Styles = {
  contentContainerStyle: ViewStyle
  container: ViewStyle
  content: ViewStyle
  imageBackground: ViewStyle
  textTitle: TextStyle
  form: ViewStyle
  footer: ViewStyle
  button: ViewStyle
  buttonText: TextStyle
}

export type States = {
  dispatch: Dispatch
  navigation: UseNavigation
  showPassword: boolean
  setShowPassword: (value: boolean) => void
  showConfirmationPassword: boolean
  setShowConfirmationPassword: (value: boolean) => void
  showLoadingMask: boolean
  setShowLoadingMask: (value: boolean) => void
}
