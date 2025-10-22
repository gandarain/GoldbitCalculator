import type { FormikProps } from 'formik'

import type { RegisterFormValues, States } from './Register.types'

export const onHandleBlur = ({ handleBlur }: FormikProps<RegisterFormValues>, input: string) => () => {
  handleBlur(input)
}

export const onSubmitForm = () => (values: RegisterFormValues) => {
  console.log('Login submit:', values)
}

export const onPressButtonSubmit = ({ handleSubmit }: FormikProps<RegisterFormValues>) => () => {
  handleSubmit()
}

export const onPressIconPassword = (states: States) => () => {
  states.setShowPassword(!states.showPassword)
}

export const onPressIconConfirmationPassword = (states: States) => () => {
  states.setShowConfirmationPassword(!states.showConfirmationPassword)
}
