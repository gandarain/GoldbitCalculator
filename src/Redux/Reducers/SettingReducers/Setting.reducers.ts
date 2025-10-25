import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { SettingState, SetLanguagePayload } from './SettingReducers.types'

const initialState: SettingState = {
  language: ''
}

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<SetLanguagePayload>) {
      state.language = action.payload
    }
  }
})

export const { setLanguage } = settingSlice.actions

export default settingSlice.reducer
