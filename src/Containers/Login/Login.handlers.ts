import type { FormikProps } from 'formik'

import type { LoginFormValues, States } from './Login.types'

export const onHandleBlur = ({ handleBlur }: FormikProps<LoginFormValues>, input: string) => () => {
  handleBlur(input)
}

export const onSubmitForm = () => (values: LoginFormValues) => {
  console.log('Login submit:', values)
}

export const onPressButtonSubmit = ({ handleSubmit }: FormikProps<LoginFormValues>) => () => {
  handleSubmit()
}

export const onPressIconPassword = (states: States) => () => {
  states.setShowPassword(!states.showPassword)
}
