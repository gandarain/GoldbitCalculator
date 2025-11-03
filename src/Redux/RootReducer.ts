import { combineReducers } from '@reduxjs/toolkit'

import registrationReducers from './Reducers/RegistrationReducers/Registration.reducers'
import settingReducers from './Reducers/SettingReducers/Setting.reducers'
import authenticationReducers from './Reducers/AuthenticationReducers/Authentication.reducers'
import otpReducers from './Reducers/OtpReducers/Otp.reducers'

const rootReducer = combineReducers({
  registration: registrationReducers,
  setting: settingReducers,
  authentication: authenticationReducers,
  otp: otpReducers
})

export default rootReducer
