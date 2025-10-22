import React from 'react'
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { Formik } from 'formik'
import MaterialIcons from '@react-native-vector-icons/material-design-icons'
import type { FormikProps } from 'formik'

import HeaderBackground from '../../Assets/Images/HeaderBackground.png'
import Colors from '../../Assets/Colors'
import { scaleSize } from '../../Utils/Size'

import {
  onHandleBlur,
  onSubmitForm,
  onPressButtonSubmit,
  onPressIconPassword,
  onPressIconConfirmationPassword
} from './Register.handlers'
import { useGetStateAndSetters } from './useRegister'
import config from './Register.config'
import styles from './Register.styles'
import type { RegisterFormValues, States } from './Register.types'

const renderInputFullName = (formik: FormikProps<RegisterFormValues>) => (
  <>
    <Text style={styles.label}>Nama Lengkap</Text>
    <TextInput
      style={styles.input}
      placeholder="Masukkan nama lengkap anda"
      placeholderTextColor={Colors.SECOND_GREY}
      autoCapitalize="none"
      value={formik.values.fullName}
      onChangeText={formik.handleChange('fullName')}
      onBlur={onHandleBlur(formik, 'fullName')}
    />
    {formik.touched.fullName && formik.errors.fullName && (
      <Text style={styles.errorText}>{formik.errors.fullName}</Text>
    )}
  </>
)

const renderInputEmail = (formik: FormikProps<RegisterFormValues>) => (
  <>
    <Text style={styles.label}>Email</Text>
    <TextInput
      style={styles.input}
      placeholder="Masukkan email anda"
      placeholderTextColor={Colors.SECOND_GREY}
      keyboardType="email-address"
      autoCapitalize="none"
      value={formik.values.email}
      onChangeText={formik.handleChange('email')}
      onBlur={onHandleBlur(formik, 'email')}
    />
    {formik.touched.email && formik.errors.email && (
      <Text style={styles.errorText}>{formik.errors.email}</Text>
    )}
  </>
)

const renderInputPassword = (states: States, formik: FormikProps<RegisterFormValues>) => (
  <>
    <Text style={styles.label}>Password</Text>
    <View style={styles.passwordWrapper}>
      <TextInput
        style={styles.inputPassword}
        placeholder="Masukkan password anda"
        placeholderTextColor={Colors.SECOND_GREY}
        secureTextEntry={!states.showPassword}
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={onHandleBlur(formik, 'password')}
      />
      <TouchableOpacity
        style={styles.iconPassword}
        onPress={onPressIconPassword(states)}
        hitSlop={config.hitSlopIconPassword}
        activeOpacity={0.7}
      >
        <MaterialIcons
          name={states.showPassword ? 'eye-outline' : 'eye-off'}
          size={scaleSize(18)}
          color={Colors.GREY}
        />
      </TouchableOpacity>
    </View>
    {formik.touched.password && formik.errors.password && (
      <Text style={styles.errorText}>{formik.errors.password}</Text>
    )}
  </>
)

const renderInputConfirmationPassword = (states: States, formik: FormikProps<RegisterFormValues>) => (
  <>
    <Text style={styles.label}>Konfirmasi Password</Text>
    <View style={styles.passwordWrapper}>
      <TextInput
        style={styles.inputPassword}
        placeholder="Masukkan konfirmasi password anda"
        placeholderTextColor={Colors.SECOND_GREY}
        secureTextEntry={!states.showConfirmationPassword}
        value={formik.values.confirmationPassword}
        onChangeText={formik.handleChange('confirmationPassword')}
        onBlur={onHandleBlur(formik, 'confirmationPassword')}
      />
      <TouchableOpacity
        style={styles.iconPassword}
        onPress={onPressIconConfirmationPassword(states)}
        hitSlop={config.hitSlopIconPassword}
        activeOpacity={0.7}
      >
        <MaterialIcons
          name={states.showConfirmationPassword ? 'eye-outline' : 'eye-off'}
          size={scaleSize(18)}
          color={Colors.GREY}
        />
      </TouchableOpacity>
    </View>
    {formik.touched.confirmationPassword && formik.errors.confirmationPassword && (
      <Text style={styles.errorText}>{formik.errors.confirmationPassword}</Text>
    )}
  </>
)

const renderButton = (formik: FormikProps<RegisterFormValues>) => (
  <TouchableOpacity style={styles.button} onPress={onPressButtonSubmit(formik)}>
    <Text style={styles.buttonText}>Login</Text>
  </TouchableOpacity>
)

const renderForm = (states: States) => (
  <Formik
    initialValues={config.initialValues}
    validationSchema={config.RegisterSchema}
    onSubmit={onSubmitForm()}
  >
    {(formik) => (
      <View style={styles.content}>
        <View style={styles.form}>
          {renderInputFullName(formik)}
          {renderInputEmail(formik)}
          {renderInputPassword(states, formik)}
          {renderInputConfirmationPassword(states, formik)}
        </View>
        <View style={styles.footer}>
          {renderButton(formik)}
        </View>
      </View>
    )}
  </Formik>
)

const renderImageBackground = () => (
  <ImageBackground
    source={HeaderBackground}
    style={styles.imageBackground}
    resizeMode="stretch"
  >
    <Text style={styles.textTitle}>Masukkan data diri anda</Text>
  </ImageBackground>
)

const Register = (): React.JSX.Element => {
  const states = useGetStateAndSetters()

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {renderImageBackground()}
        {renderForm(states)}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Register
