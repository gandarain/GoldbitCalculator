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
import { InputText } from '../../Components'
import type { FormikFormInputEmail } from '../../Types'

import { onHandleBlur, onSubmitForm, onPressButtonSubmit } from './InputEmail.handlers'
import config from './InputEmail.config'
import styles from './InputEmail.styles'

const renderInputEmail = (formik: FormikFormInputEmail) => (
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

const renderButton = (formik: FormikFormInputEmail) => (
  <TouchableOpacity style={styles.button} onPress={onPressButtonSubmit(formik)}>
    <Text style={styles.buttonText}>Submit</Text>
  </TouchableOpacity>
)

const renderForm = () => (
  <Formik
    initialValues={config.initialValues}
    validationSchema={config.LoginSchema}
    onSubmit={onSubmitForm()}
  >
    {formik => (
      <View style={styles.content}>
        <View style={styles.form}>{renderInputEmail(formik)}</View>
        <View style={styles.footer}>{renderButton(formik)}</View>
      </View>
    )}
  </Formik>
)

const renderImageBackground = () => (
  <ImageBackground resizeMode="stretch" source={HeaderBackground} style={styles.imageBackground}>
    <Text style={styles.textTitle}>
      Pastikan email aktif karena OTP akan dikirimkan ke email anda
    </Text>
  </ImageBackground>
)

const InputEmail = (): React.JSX.Element => (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    style={styles.container}
  >
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      {renderImageBackground()}
      {renderForm()}
    </ScrollView>
  </KeyboardAvoidingView>
)

export default InputEmail
