import { setEmailRegistration } from '../../Redux/Reducers/RegistrationReducers/Registration.reducers'
import Routes from '../../Navigation/Routes'
import type { FormikFormInputEmail, InputEmailFormValues } from '../../Types'

import type { States } from './InputEmail.types'

export const onHandleBlur =
  ({ handleBlur }: FormikFormInputEmail, input: string) =>
  () => {
    handleBlur(input)
  }

export const onSubmitForm = (states: States) => (values: InputEmailFormValues) => {
  states.dispatch(setEmailRegistration(values.email))
  states.navigation.navigate(Routes.VerifyOtp)
}

export const onPressButtonSubmit =
  ({ handleSubmit }: FormikFormInputEmail) =>
  () => {
    handleSubmit()
  }
