import { TextStyle, ViewStyle } from 'react-native'

import type { Dispatch, UseNavigation } from '../../Types'

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
  dispatch: Dispatch
  navigation: UseNavigation
}
