import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { OtpState, SetOtpPayload } from './Otp.reducers.types'

const initialState: OtpState = {
  otp: ''
}

const otpSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setOtp(state, action: PayloadAction<SetOtpPayload>) {
      state.otp = action.payload
    }
  }
})

export const { setOtp } = otpSlice.actions

export default otpSlice.reducer
