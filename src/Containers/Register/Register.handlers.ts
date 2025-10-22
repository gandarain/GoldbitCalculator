import type { FormikFormRegister, RegisterFormValues } from '../../Types'

import type { States } from './Register.types'

export const onHandleBlur = ({ handleBlur }: FormikFormRegister, input: string) => () => {
  handleBlur(input)
}

export const onSubmitForm = () => (values: RegisterFormValues) => {
  console.log('Login submit:', values)
}

export const onPressButtonSubmit = ({ handleSubmit }: FormikFormRegister) => () => {
  handleSubmit()
}

export const onPressIconPassword = (states: States) => () => {
  states.setShowPassword(!states.showPassword)
}

export const onPressIconConfirmationPassword = (states: States) => () => {
  states.setShowConfirmationPassword(!states.showConfirmationPassword)
}
