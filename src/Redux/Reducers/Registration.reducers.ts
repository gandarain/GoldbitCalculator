import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type {
  RegistrationState,
  RegistrationPayload,
  RegistrationEmailPayload
} from './Registration.reducers.types'

const initialState: RegistrationState = {
  fullName: '',
  email: '',
  password: '',
  confirmationPassword: ''
}

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setRegistration(state, action: PayloadAction<RegistrationPayload>) {
      state.fullName = action.payload.fullName
      state.email = action.payload.email
      state.password = action.payload.password
      state.confirmationPassword = action.payload.confirmationPassword
    },
    setEmailRegistration(state, action: PayloadAction<RegistrationEmailPayload>) {
      state.email = action.payload
    }
  }
})

export const { setRegistration, setEmailRegistration } = registrationSlice.actions

export default registrationSlice.reducer
