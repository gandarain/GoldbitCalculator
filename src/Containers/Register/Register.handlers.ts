import type { FormikFormRegister, RegisterFormValues } from '../../Types'

import { setRegistration } from '../../Redux/Reducers/RegistrationReducers/Registration.reducers'
import Routes from '../../Navigation/Routes'

import type { States } from './Register.types'

export const onHandleBlur =
  ({ handleBlur }: FormikFormRegister, input: string) =>
  () => {
    handleBlur(input)
  }

export const onSubmitForm = (states: States) => (values: RegisterFormValues) => {
  states.dispatch(setRegistration(values))
  states.navigation.navigate(Routes.VerifyOtp)
}

export const onPressButtonSubmit =
  ({ handleSubmit }: FormikFormRegister) =>
  () => {
    handleSubmit()
  }

export const onPressIconPassword = (states: States) => () => {
  states.setShowPassword(!states.showPassword)
}

export const onPressIconConfirmationPassword = (states: States) => () => {
  states.setShowConfirmationPassword(!states.showConfirmationPassword)
}
