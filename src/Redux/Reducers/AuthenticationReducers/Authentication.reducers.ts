import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AuthenticationConstants from '../../../Constants/Authentication'

import type { AuthenticationState, AuthenticationPayload } from './Authentication.reducers.types'

const initialState: AuthenticationState = {
  isLogin: false
}

export const setLoginWithToken = createAsyncThunk(
  'authentication/setLoginWithToken',
  async (payload: AuthenticationPayload, { dispatch }) => {
    if (payload.token) {
      await AsyncStorage.setItem(AuthenticationConstants.ACCESS_TOKEN, payload.token)
    }
    dispatch(setIsLogin({ isLogin: payload.isLogin }))
  }
)

export const logoutUser = createAsyncThunk('authentication/logoutUser', async (_, { dispatch }) => {
  await AsyncStorage.removeItem(AuthenticationConstants.ACCESS_TOKEN)
  dispatch(setIsLogin({ isLogin: false }))
})

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setIsLogin(state, action: PayloadAction<Pick<AuthenticationPayload, 'isLogin'>>) {
      state.isLogin = action.payload.isLogin
    }
  }
})

export const { setIsLogin } = authenticationSlice.actions
export default authenticationSlice.reducer
