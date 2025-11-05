import { TextStyle, ViewStyle } from 'react-native'

import type { DispatchRedux, UseNavigation } from '../../Types'

export type Styles = {
  contentContainerStyle: ViewStyle
  container: ViewStyle
  imageBackground: ViewStyle
  textTitle: TextStyle
  accountContainer: ViewStyle
  textTitleContent: TextStyle
  textTitleSubContent: TextStyle
  emailContainer: ViewStyle
  emailContent: ViewStyle
  textDescriptionContent: TextStyle
}

export type States = {
  dispatch: DispatchRedux
  navigation: UseNavigation
}
