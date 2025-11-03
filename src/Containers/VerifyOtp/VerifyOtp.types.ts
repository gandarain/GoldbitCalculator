import { TextStyle, ViewStyle, TextInput } from 'react-native'
import type { RefObject, Dispatch, SetStateAction } from 'react'

import type { RegistrationState } from '../../Redux/Reducers/RegistrationReducers/Registration.reducers.types'

export type Styles = {
  container: ViewStyle
  scrollContainer: ViewStyle
  innerContainer: ViewStyle
  title: TextStyle
  otpContainer: ViewStyle
  otpInput: ViewStyle & TextStyle
  keypadContainer: ViewStyle
  keypadRow: ViewStyle
  lastRow: ViewStyle
  keypadButton: ViewStyle
  keypadText: TextStyle
  deleteButton: ViewStyle
  footer: ViewStyle
  verifyButton: ViewStyle
  activeButton: ViewStyle
  verifyText: TextStyle
  resendContainer: ViewStyle
  timerText: TextStyle
  resendText: TextStyle
}

export type UseOtpConfig = {
  length?: number
}

export type States = {
  otp: string[]
  setOtp: Dispatch<SetStateAction<string[]>>
  inputRefs: RefObject<TextInput[]>
  length: number
  registration: RegistrationState
  timer: number
  setTimer: Dispatch<SetStateAction<number>>
  showLoadingMask: boolean
  setShowLoadingMask: (value: boolean) => void
}
