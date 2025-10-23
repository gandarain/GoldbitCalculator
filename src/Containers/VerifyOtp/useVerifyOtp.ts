import { useState, useRef, useEffect } from 'react'
import type { TextInput } from 'react-native'
import { useSelector } from 'react-redux'

import type { ReduxState } from '../../Types'

import type { UseOtpConfig, States } from './VerifyOtp.types'

const useVerifyOtp = (config: UseOtpConfig = {}): States => {
  const { length = 6 } = config
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''))
  const inputRefs = useRef<TextInput[]>([])
  const registration = useSelector((state: ReduxState) => state.registration)
  const [timer, setTimer] = useState(60)

  return {
    otp,
    setOtp,
    inputRefs,
    length,
    registration,
    timer,
    setTimer
  }
}

const useResendOtp = (states: States) => {
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (states.timer > 0) {
      interval = setInterval(() => states.setTimer(prev => prev - 1), 1000)
    }

    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [states.timer])
}

export { useVerifyOtp, useResendOtp }
