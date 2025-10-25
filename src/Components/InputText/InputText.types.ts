import { TextStyle, ViewStyle, KeyboardTypeOptions } from 'react-native'
import type { FormikProps } from 'formik'

import type { LoginFormValues, RegisterFormValues, InputEmailFormValues } from '../../Types'

export type Styles = {
  label: TextStyle
  input: ViewStyle & TextStyle
  errorText: TextStyle
}

export type Props<T extends LoginFormValues | RegisterFormValues | InputEmailFormValues> = {
  label: string
  name: keyof T
  placeholder: string
  keyboardType: KeyboardTypeOptions | undefined
  autoCapitalize: 'none' | 'sentences' | 'words' | 'characters' | undefined
  formik: FormikProps<T>
  onHandleBlur: () => void
}
