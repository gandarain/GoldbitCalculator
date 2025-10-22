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

import HeaderBackground from '../../Assets/Images/HeaderBackground.png'
import Colors from '../../Assets/Colors'
import { InputPassword } from '../../Components'
import type { FormikFormLogin } from '../../Types'

import { onHandleBlur, onSubmitForm, onPressButtonSubmit, onPressIconPassword } from './Login.handlers'
import { useGetStateAndSetters } from './useLogin'
import config from './Login.config'
import styles from './Login.styles'
import type { States } from './Login.types'

const renderInputEmail = (formik: FormikFormLogin) => (
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
