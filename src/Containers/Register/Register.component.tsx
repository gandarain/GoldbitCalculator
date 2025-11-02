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
    autoCapitalize={undefined}
    formik={formik}
    keyboardType={undefined}
    label="Nama Lengkap"
    name="fullName"
    placeholder="Masukkan nama lengkap anda"
    onHandleBlur={onHandleBlur(formik, 'fullName')}
  />
)

const renderInputEmail = (formik: FormikFormRegister) => (
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

const renderInputPassword = (states: States, formik: FormikFormRegister) => (
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

const renderInputConfirmationPassword = (states: States, formik: FormikFormRegister) => (
  <InputPassword
    formik={formik}
    label="Konfirmasi Password"
    name="confirmationPassword"
    placeholder="Masukkan konfirmasi password anda"
    showPassword={states.showConfirmationPassword}
    onHandleBlur={onHandleBlur(formik, 'confirmationPassword')}
    onPressIconPassword={onPressIconConfirmationPassword(states)}
  />
)

const renderButton = (formik: FormikFormRegister) => (
  <TouchableOpacity style={styles.button} onPress={onPressButtonSubmit(formik)}>
    <Text style={styles.buttonText}>Register</Text>
  </TouchableOpacity>
)

const renderForm = (states: States) => (
  <Formik
    initialValues={config.initialValues}
    validationSchema={config.RegisterSchema}
    onSubmit={onSubmitForm(states)}
  >
    {formik => (
      <View style={styles.content}>
        <View style={styles.form}>
          {renderInputFullName(formik)}
          {renderInputEmail(formik)}
          {renderInputPassword(states, formik)}
          {renderInputConfirmationPassword(states, formik)}
        </View>
        <View style={styles.footer}>{renderButton(formik)}</View>
      </View>
    )}
  </Formik>
)

const renderImageBackground = () => (
  <ImageBackground resizeMode="stretch" source={HeaderBackground} style={styles.imageBackground}>
    <Text style={styles.textTitle}>Masukkan data diri anda</Text>
  </ImageBackground>
)

const Register = (): React.JSX.Element => {
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

export default Register
