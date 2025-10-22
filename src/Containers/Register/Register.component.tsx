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

const renderInputEmail = (formik: FormikFormRegister) => (
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
