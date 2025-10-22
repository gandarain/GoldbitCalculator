import { ImageStyle, TextStyle, ViewStyle } from 'react-native'

import type { UseNavigation } from '../../Types'

export type Styles = {
  container: ViewStyle,
  content: ViewStyle,
  imageBanner: ImageStyle,
  containerDescription: ViewStyle,
  textTitle: TextStyle,
  textSubtitle: TextStyle,
  containerButton: ViewStyle,
  buttonLogin: ViewStyle,
  textButtonLogin: TextStyle,
  buttonRegister: ViewStyle,
  textButtonRegister: TextStyle
}

export type States = {
  navigation: UseNavigation
}
