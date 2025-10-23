import { States } from './VerifyOtp.types'

export const isComplete = (states: States) => states.otp.every(v => v !== '')