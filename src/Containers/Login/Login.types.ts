import { TextStyle, ViewStyle } from 'react-native'

export type Styles = {
  contentContainerStyle: ViewStyle,
  container: ViewStyle,
  content: ViewStyle,
  imageBackground: ViewStyle,
  textTitle: TextStyle,
  form: ViewStyle,
  label: TextStyle,
  input: ViewStyle & TextStyle,
  errorText: TextStyle,
  footer: ViewStyle,
  button: ViewStyle,
  buttonText: TextStyle
}

export type States = {
  showPassword: boolean,
  setShowPassword: (value: boolean) => void
}
