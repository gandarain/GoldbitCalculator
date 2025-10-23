import type { Dispatch, SetStateAction } from 'react'

import defaultOtpLength from './VerifyOtp.config'

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

export const handleVerifyOtp = (otp: string[], onVerify?: (code: string) => void) => () => {
  const code = otp.join('')

  if (otp.includes('')) return

  onVerify?.(code)
}

export const handleResendOtp =
  (setOtp: Dispatch<SetStateAction<string[]>>, setTimer: Dispatch<SetStateAction<number>>) =>
  () => {
    setOtp(Array(defaultOtpLength.defaultOtpLength).fill(''))
    setTimer(60)
  }
