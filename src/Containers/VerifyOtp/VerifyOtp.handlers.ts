import type { Dispatch, SetStateAction } from 'react'
import { AxiosError } from 'axios'

import { verifyOtp } from '../../Services/OtpServices/Otp.services'
import { Otp, Snackbar } from '../../Constants'
import { showSnackBar } from '../../Utils/Snackbar'

import defaultOtpLength from './VerifyOtp.config'
import type { States } from './VerifyOtp.types'

const {
  TYPE: { REGISTER }
} = Otp
const {
  TYPE: { SUCCESS, FAILED }
} = Snackbar

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

export const handleVerifyOtp = (states: States) => async () => {
  const code = states.otp.join('')

  if (states.otp.includes('')) return

  states.setShowLoadingMask(true)

  const verifyOtpBody = {
    email: states.registration.email,
    type: REGISTER,
    otp: code
  }

  try {
    await verifyOtp(verifyOtpBody)

    showSnackBar('OTP berhasil dikirim ke email anda.', SUCCESS)
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
