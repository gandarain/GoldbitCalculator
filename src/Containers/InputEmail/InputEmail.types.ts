import type { TextStyle, ViewStyle } from 'react-native'

import type { DispatchRedux, UseNavigationUnauthorizedRoutes } from '../../Types'

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
  dispatch: DispatchRedux
  navigation: UseNavigationUnauthorizedRoutes
}
