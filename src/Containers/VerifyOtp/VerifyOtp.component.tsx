import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native'

import { useVerifyOtp, useResendOtp } from './useVerifyOtp'
import { handleAddDigit, handleDeleteDigit, handleVerifyOtp, handleResendOtp } from './VerifyOtp.handlers'
import { isComplete } from './VerifyOtp.utils'
import config from './VerifyOtp.config'
import styles from './VerifyOtp.styles'
import type { States } from './VerifyOtp.types'

const renderInputs = ({ length, inputRefs, otp }: States) =>
  Array.from({ length }).map((_, index) => (
    <TextInput
      key={index}
      ref={el => {
        inputRefs.current[index] = el!
      }}
      value={otp[index]}
      style={styles.otpInput}
      editable={false}
    />
  ))

const renderKeypad = ({ setOtp, otp }: States) => (
  <View style={styles.keypadContainer}>
    {config.keypad.map(num => (
      <TouchableOpacity
        key={num}
        style={styles.keypadButton}
        onPress={handleAddDigit(num, otp, setOtp)}>
        <Text style={styles.keypadText}>{num}</Text>
      </TouchableOpacity>
    ))}
    <TouchableOpacity
      style={[styles.keypadButton, styles.deleteButton]}
      onPress={handleDeleteDigit(otp, setOtp)}>
      <Text style={styles.keypadText}>⌫</Text>
    </TouchableOpacity>
  </View>
)

const renderButton = (states: States) => (
  <View style={styles.footer}>
    <TouchableOpacity
      style={[
        styles.verifyButton,
        isComplete(states) ? styles.activeButton : {}
      ]}
      onPress={handleVerifyOtp(states.otp)}
      disabled={!isComplete(states)}>
      <Text style={styles.verifyText}>Verifikasi</Text>
    </TouchableOpacity>
    <View style={styles.resendContainer}>
      {states.timer > 0 ? (
        <Text style={styles.timerText}>
          Kirim ulang OTP dalam {states.timer}s
        </Text>
      ) : (
        <TouchableOpacity
          onPress={handleResendOtp(states.setOtp, states.setTimer)}>
          <Text style={styles.resendText}>Kirim ulang OTP</Text>
        </TouchableOpacity>
      )}
    </View>
  </View>
)

const VerifyOtp = () => {
  const states = useVerifyOtp({ length: config.defaultOtpLength })

  useResendOtp(states)

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>OTP telah berhasil dikirimkan ke {states.registration.email}</Text>
          <View style={styles.otpContainer}>{renderInputs(states)}</View>
          {renderKeypad(states)}
        </View>
      </ScrollView>
      {renderButton(states)}
    </KeyboardAvoidingView>
  )
}

export default VerifyOtp
