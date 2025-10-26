import Routes from '../../Navigation/Routes'
import type { FormikFormLogin, LoginFormValues } from '../../Types'

import type { States } from './Login.types'

export const onHandleBlur =
  ({ handleBlur }: FormikFormLogin, input: string) =>
  () => {
    handleBlur(input)
  }

export const onSubmitForm = (states: States) => (values: LoginFormValues) => {
  // eslint-disable-next-line no-console
  console.log('Login submit:', values)
  states.navigation.navigate(Routes.MainTab)
}

export const onPressButtonSubmit =
  ({ handleSubmit }: FormikFormLogin) =>
  () => {
    handleSubmit()
  }

export const onPressIconPassword = (states: States) => () => {
  states.setShowPassword(!states.showPassword)
}

export const onPressForgetPassword = (states: States) => () => {
  states.navigation.navigate(Routes.InputEmail)
}
