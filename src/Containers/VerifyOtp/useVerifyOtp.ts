import { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import type { TextInput } from 'react-native'

import type { ReduxState, UseNavigation } from '../../Types'

import type { UseOtpConfig, States } from './VerifyOtp.types'

const useVerifyOtp = (config: UseOtpConfig = {}): States => {
  const { length = 6 } = config
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''))
  const inputRefs = useRef<TextInput[]>([])
  const registration = useSelector((state: ReduxState) => state.registration)
  const [timer, setTimer] = useState(60)
  const [showLoadingMask, setShowLoadingMask] = useState(false)
  const dispatch = useDispatch()
  const navigation = useNavigation<UseNavigation>()

  return {
    otp,
    setOtp,
    inputRefs,
    length,
    registration,
    timer,
    setTimer,
    showLoadingMask,
    setShowLoadingMask,
    dispatch,
    navigation
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
