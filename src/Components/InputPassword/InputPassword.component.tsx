import React from 'react'
import { Text, TextInput, View, TouchableOpacity } from 'react-native'

import MaterialIcons from '@react-native-vector-icons/material-design-icons'

import Colors from '../../Assets/Colors'
import { scaleSize } from '../../Utils/Size'
import type { LoginFormValues, RegisterFormValues } from '../../Types'

import config from './InputPassword.config'
import styles from './InputPassword.styles'
import type { Props } from './InputPassword.types'

const InputPassword = <T extends LoginFormValues | RegisterFormValues>({
  label, name, placeholder, showPassword, formik, onPressIconPassword, onHandleBlur
}: Props<T>) => (
  <>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.passwordWrapper}>
      <TextInput
        style={styles.inputPassword}
        placeholder={placeholder}
        placeholderTextColor={Colors.SECOND_GREY}
        secureTextEntry={!showPassword}
        value={formik.values[name] as string}
        onChangeText={formik.handleChange(name)}
        onBlur={onHandleBlur}
      />
      <TouchableOpacity
        style={styles.iconPassword}
        onPress={onPressIconPassword}
        hitSlop={config.hitSlopIconPassword}
        activeOpacity={0.7}
      >
        <MaterialIcons
          name={showPassword ? 'eye-outline' : 'eye-off'}
          size={scaleSize(18)}
          color={Colors.GREY}
        />
      </TouchableOpacity>
    </View>
    {formik.touched.password && formik.errors.password && (
      <Text style={styles.errorText}>{formik.errors[name] as string}</Text>
    )}
  </>
)

export default InputPassword
