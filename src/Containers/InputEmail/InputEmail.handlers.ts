import type { FormikFormInputEmail, InputEmailFormValues } from '../../Types'

export const onHandleBlur =
  ({ handleBlur }: FormikFormInputEmail, input: string) =>
  () => {
    handleBlur(input)
  }

export const onSubmitForm = () => (values: InputEmailFormValues) => {
  // eslint-disable-next-line no-console
  console.log('Login submit:', values)
}

export const onPressButtonSubmit =
  ({ handleSubmit }: FormikFormInputEmail) =>
  () => {
    handleSubmit()
  }
