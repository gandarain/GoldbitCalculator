import { combineReducers } from '@reduxjs/toolkit'

import registrationReducers from './Reducers/RegistrationReducers/Registration.reducers'
import settingReducers from './Reducers/SettingReducers/Setting.reducers'

const rootReducer = combineReducers({
  registration: registrationReducers,
  setting: settingReducers
})

export default rootReducer
