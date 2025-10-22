import React from 'react'
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { Formik } from 'formik'

import HeaderBackground from '../../Assets/Images/HeaderBackground.png'
import { InputPassword, InputText } from '../../Components'
import type { FormikFormLogin } from '../../Types'

import { onHandleBlur, onSubmitForm, onPressButtonSubmit, onPressIconPassword } from './Login.handlers'
import { useGetStateAndSetters } from './useLogin'
import config from './Login.config'
import styles from './Login.styles'
import type { States } from './Login.types'

const renderInputEmail = (formik: FormikFormLogin) => (
  <InputText
    label='Email'
    name='email'
    placeholder='Masukkan email anda'
    keyboardType="email-address"
    autoCapitalize="none"
    formik={formik}
    onHandleBlur={onHandleBlur(formik, 'email')}
  />
)

const renderInputPassword = (states: States, formik: FormikFormLogin) => (
  <InputPassword
    label='Password'
    name='password'
    placeholder='Masukkan password anda'
    showPassword={states.showPassword}
    formik={formik}
    onPressIconPassword={onPressIconPassword(states)}
    onHandleBlur={onHandleBlur(formik, 'password')}
  />
)

const renderButton = (formik: FormikFormLogin) => (
  <TouchableOpacity style={styles.button} onPress={onPressButtonSubmit(formik)}>
    <Text style={styles.buttonText}>Login</Text>
  </TouchableOpacity>
)

const renderForm = (states: States) => (
  <Formik
    initialValues={config.initialValues}
    validationSchema={config.LoginSchema}
    onSubmit={onSubmitForm()}
  >
    {(formik) => (
      <View style={styles.content}>
        <View style={styles.form}>
          {renderInputEmail(formik)}
          {renderInputPassword(states, formik)}
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
    <Text style={styles.textTitle}>Masukkan email dan password anda</Text>
  </ImageBackground>
)

const Login = (): React.JSX.Element => {
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

export default Login
