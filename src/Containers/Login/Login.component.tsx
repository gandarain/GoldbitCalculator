import React from 'react'
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import { Formik } from 'formik'

import HeaderBackground from '../../Assets/Images/HeaderBackground.png'
import { InputPassword, InputText, LoadingMask } from '../../Components'
import type { FormikFormLogin } from '../../Types'

import {
  onHandleBlur,
  onSubmitForm,
  onPressButtonSubmit,
  onPressIconPassword,
  onPressForgetPassword
} from './Login.handlers'
import { useGetStateAndSetters } from './useLogin'
import config from './Login.config'
import styles from './Login.styles'
import type { States } from './Login.types'

const renderInputEmail = (formik: FormikFormLogin) => (
  <InputText
    autoCapitalize="none"
    formik={formik}
    keyboardType="email-address"
    label="Email"
    name="email"
    placeholder="Masukkan email anda"
    onHandleBlur={onHandleBlur(formik, 'email')}
  />
)

const renderInputPassword = (states: States, formik: FormikFormLogin) => (
  <InputPassword
    formik={formik}
    label="Password"
    name="password"
    placeholder="Masukkan password anda"
    showPassword={states.showPassword}
    onHandleBlur={onHandleBlur(formik, 'password')}
    onPressIconPassword={onPressIconPassword(states)}
  />
)

const renderForgetPassword = (states: States) => (
  <View style={styles.forgetPasswordContainer}>
    <TouchableOpacity onPress={onPressForgetPassword(states)}>
      <Text style={styles.forgetPasswordText}>Lupa password?</Text>
    </TouchableOpacity>
  </View>
)

const renderButton = (formik: FormikFormLogin) => (
  <TouchableOpacity style={styles.button} onPress={onPressButtonSubmit(formik)}>
    <Text style={styles.buttonText}>Lanjut</Text>
  </TouchableOpacity>
)

const renderForm = (states: States) => (
  <Formik
    initialValues={config.initialValues}
    validationSchema={config.LoginSchema}
    onSubmit={onSubmitForm(states)}
  >
    {formik => (
      <View style={styles.content}>
        <View style={styles.form}>
          {renderInputEmail(formik)}
          {renderInputPassword(states, formik)}
          {renderForgetPassword(states)}
        </View>
        <View style={styles.footer}>{renderButton(formik)}</View>
      </View>
    )}
  </Formik>
)

const renderImageBackground = () => (
  <ImageBackground resizeMode="stretch" source={HeaderBackground} style={styles.imageBackground}>
    <Text style={styles.textTitle}>Masukkan email dan password anda</Text>
  </ImageBackground>
)

const Login = (): React.JSX.Element => {
  const states = useGetStateAndSetters()

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          {renderImageBackground()}
          {renderForm(states)}
        </ScrollView>
      </KeyboardAvoidingView>
      <LoadingMask visible={states.showLoadingMask} />
    </>
  )
}

export default Login
