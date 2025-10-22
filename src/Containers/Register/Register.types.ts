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
  passwordWrapper: ViewStyle,
  inputPassword: ViewStyle & TextStyle,
  iconPassword: ViewStyle,
  errorText: TextStyle,
  footer: ViewStyle,
  button: ViewStyle,
  buttonText: TextStyle
}

export type RegisterFormValues = {
  fullName: string,
  email: string,
  password: string,
  confirmationPassword: string
}

export type States = {
  showPassword: boolean,
  setShowPassword: (value: boolean) => void,
  showConfirmationPassword: boolean,
  setShowConfirmationPassword: (value: boolean) => void
}
