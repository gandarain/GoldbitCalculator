import OtpConstants from '../../Constants/Otp'

type OtpType = (typeof OtpConstants.TYPE)[keyof typeof OtpConstants.TYPE]

export type RequestOtpBody = {
  email: string
  type: OtpType
}

export type RequestOtpResponse = {
  message: string
  error?: string
}

export type VerifyOtpBody = {
  email: string
  type: OtpType
  otp: string
}

export type VerifyOtpResponse = {
  message: string
  error?: string
}
