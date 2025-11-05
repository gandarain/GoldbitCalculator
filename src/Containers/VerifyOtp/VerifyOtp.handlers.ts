import type { Dispatch, SetStateAction } from 'react'
import type { AxiosError } from 'axios'

import { OtpServices, AuthenticationServices } from '../../Services'
import { Otp, Snackbar } from '../../Constants'
import { showSnackBar } from '../../Utils/Snackbar'
import { setLoginWithToken } from '../../Redux/Reducers/AuthenticationReducers/Authentication.reducers'
import Routes from '../../Navigation/Routes'

import defaultOtpLength from './VerifyOtp.config'
import type { States } from './VerifyOtp.types'

const {
  TYPE: { REGISTER }
} = Otp
const {
  TYPE: { SUCCESS, FAILED }
} = Snackbar
const { verifyOtp } = OtpServices
const { register } = AuthenticationServices

export const handleAddDigit =
  (digit: string, otp: string[], setOtp: Dispatch<SetStateAction<string[]>>) => () => {
    if (digit.length !== 1 || !/^\d$/.test(digit)) return

    const nextOtp = [...otp]
    const firstEmptyIndex = nextOtp.findIndex(v => v === '')

    if (firstEmptyIndex !== -1) {
      nextOtp[firstEmptyIndex] = digit
      setOtp(nextOtp)
    }
  }

export const handleDeleteDigit =
  (otp: string[], setOtp: Dispatch<SetStateAction<string[]>>) => () => {
    const lastFilledIndex = otp
      .slice()
      .reverse()
      .findIndex(v => v !== '')

    if (lastFilledIndex !== -1) {
      const realIndex = otp.length - 1 - lastFilledIndex
      const newOtp = [...otp]
      newOtp[realIndex] = ''
      setOtp(newOtp)
    }
  }

const generatePayloadVerifyOtp = (states: States, code: string) => ({
  email: states.registration.email,
  type: REGISTER,
  otp: code
})

const generatePayloadRegister = (states: States) => ({
  fullName: states.registration.fullName,
  email: states.registration.email,
  password: states.registration.password
})

export const handleVerifyOtp = (states: States) => async () => {
  const code = states.otp.join('')

  if (states.otp.includes('')) return

  states.setShowLoadingMask(true)

  const verifyOtpBody = generatePayloadVerifyOtp(states, code)
  const registerBody = generatePayloadRegister(states)

  try {
    await verifyOtp(verifyOtpBody)
    const registerResponse = await register(registerBody)

    showSnackBar('Register berhasil.', SUCCESS)
    states.dispatch(setLoginWithToken({ isLogin: true, token: registerResponse?.token }))
    states.navigation.reset({
      index: 0,
      routes: [{ name: Routes.MainTab }]
    })
    states.setShowLoadingMask(false)
  } catch (error) {
    showSnackBar('', FAILED, error as AxiosError<{ message?: string }>)
    states.setShowLoadingMask(false)
  }
}

export const handleResendOtp =
  (setOtp: Dispatch<SetStateAction<string[]>>, setTimer: Dispatch<SetStateAction<number>>) =>
  () => {
    setOtp(Array(defaultOtpLength.defaultOtpLength).fill(''))
    setTimer(60)
  }
