import React from 'react'
import { Text, TextInput } from 'react-native'

import Colors from '../../Assets/Colors'
import type { LoginFormValues, RegisterFormValues } from '../../Types'

import styles from './InputText.styles'
import type { Props } from './InputText.types'

const InputText = <T extends LoginFormValues | RegisterFormValues>({
  label,
  name,
  placeholder,
  keyboardType,
  autoCapitalize,
  formik,
  onHandleBlur
}: Props<T>) => (
  <>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      autoCapitalize={autoCapitalize}
      keyboardType={keyboardType}
      placeholder={placeholder}
      placeholderTextColor={Colors.SECOND_GREY}
      style={styles.input}
      value={formik.values[name] as string}
      onBlur={onHandleBlur}
      onChangeText={formik.handleChange(name)}
    />
    {formik.touched.email && formik.errors.email && (
      <Text style={styles.errorText}>{formik.errors[name] as string}</Text>
    )}
  </>
)

export default InputText
