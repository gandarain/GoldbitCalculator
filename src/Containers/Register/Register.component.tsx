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
import type { FormikFormRegister } from '../../Types'

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
import type { States } from './Register.types'

const renderInputFullName = (formik: FormikFormRegister) => (
  <InputText
    label='Nama Lengkap'
    name='fullName'
    placeholder='Masukkan nama lengkap anda'
    keyboardType={undefined}
    autoCapitalize={undefined}
    formik={formik}
    onHandleBlur={onHandleBlur(formik, 'fullName')}
  />
)

const renderInputEmail = (formik: FormikFormRegister) => (
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

const renderInputPassword = (states: States, formik: FormikFormRegister) => (
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

const renderInputConfirmationPassword = (states: States, formik: FormikFormRegister) => (
  <InputPassword
    label='Konfirmasi Password'
    name='confirmationPassword'
    placeholder='Masukkan konfirmasi password anda'
    showPassword={states.showConfirmationPassword}
    formik={formik}
    onPressIconPassword={onPressIconConfirmationPassword(states)}
    onHandleBlur={onHandleBlur(formik, 'confirmationPassword')}
  />
)

const renderButton = (formik: FormikFormRegister) => (
  <TouchableOpacity style={styles.button} onPress={onPressButtonSubmit(formik)}>
    <Text style={styles.buttonText}>Login</Text>
  </TouchableOpacity>
)

const renderForm = (states: States) => (
  <Formik
    initialValues={config.initialValues}
    validationSchema={config.RegisterSchema}
    onSubmit={onSubmitForm(states)}
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
