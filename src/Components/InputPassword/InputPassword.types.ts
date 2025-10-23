import { TextStyle, ViewStyle } from 'react-native'
import type { FormikProps } from 'formik'

import type { LoginFormValues, RegisterFormValues } from '../../Types'

export type Styles = {
  label: TextStyle
  passwordWrapper: ViewStyle
  inputPassword: ViewStyle & TextStyle
  iconPassword: ViewStyle
  errorText: TextStyle
}

export type Props<T extends LoginFormValues | RegisterFormValues> = {
  label: string
  name: keyof T
  placeholder: string
  showPassword: boolean
  onPressIconPassword: () => void
  formik: FormikProps<T>
  onHandleBlur: () => void
}
