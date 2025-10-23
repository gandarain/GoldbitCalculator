import { combineReducers } from '@reduxjs/toolkit'

import registrationReducers from './Reducers/Registration.reducers'

const rootReducer = combineReducers({
  registration: registrationReducers
})

export default rootReducer
