import React from 'react'
import { Text, TextInput, View, TouchableOpacity } from 'react-native'

import MaterialIcons from '@react-native-vector-icons/material-design-icons'

import Colors from '../../Assets/Colors'
import { scaleSize } from '../../Utils/Size'
import type { LoginFormValues, RegisterFormValues } from '../../Types'

import config from './InputPassword.config'
import styles from './InputPassword.styles'
import type { Props } from './InputPassword.types'

const renderTextInputPassword = <T extends LoginFormValues | RegisterFormValues>({
  placeholder,
  showPassword,
  formik,
  name,
  onHandleBlur
}: Props<T>) => (
  <TextInput
    placeholder={placeholder}
    placeholderTextColor={Colors.SECOND_GREY}
    secureTextEntry={!showPassword}
    style={styles.inputPassword}
    value={formik.values[name] as string}
    onBlur={onHandleBlur}
    onChangeText={formik.handleChange(name)}
  />
)

const renderButtonPassword = <T extends LoginFormValues | RegisterFormValues>({
  showPassword,
  onPressIconPassword
}: Props<T>) => (
  <TouchableOpacity
    activeOpacity={0.7}
    hitSlop={config.hitSlopIconPassword}
    style={styles.iconPassword}
    onPress={onPressIconPassword}
  >
    <MaterialIcons
      color={Colors.GREY}
      name={showPassword ? 'eye-outline' : 'eye-off'}
      size={scaleSize(18)}
    />
  </TouchableOpacity>
)

const InputPassword = <T extends LoginFormValues | RegisterFormValues>(props: Props<T>) => (
  <>
    <Text style={styles.label}>{props.label}</Text>
    <View style={styles.passwordWrapper}>
      {renderTextInputPassword(props)}
      {renderButtonPassword(props)}
    </View>
    {props.formik.touched[props.name] && props.formik.errors[props.name] && (
      <Text style={styles.errorText}>{props.formik.errors[props.name] as string}</Text>
    )}
  </>
)

export default InputPassword
