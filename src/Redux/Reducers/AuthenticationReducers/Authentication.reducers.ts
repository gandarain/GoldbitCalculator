import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AuthenticationState, AuthenticationPayload } from './Authentication.reducers.types'

const initialState: AuthenticationState = {
  isLogin: false
}

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setIsLogin(state, action: PayloadAction<AuthenticationPayload>) {
      state.isLogin = action.payload
    }
  }
})

export const { setIsLogin } = authenticationSlice.actions

export default authenticationSlice.reducer
