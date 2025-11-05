import { TextStyle, ViewStyle } from 'react-native'

import type { UseNavigation, DispatchRedux } from '../../Types'

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
  forgetPasswordContainer: ViewStyle
  forgetPasswordText: TextStyle
}

export type States = {
  showPassword: boolean
  setShowPassword: (value: boolean) => void
  navigation: UseNavigation
  dispatch: DispatchRedux
  showLoadingMask: boolean
  setShowLoadingMask: (value: boolean) => void
}
