import { AxiosError } from 'axios'

import { setRegistration } from '../../Redux/Reducers/RegistrationReducers/Registration.reducers'
import UnauthorizedRoutes from '../../Navigation/Routes/UnauthorizedRoutes'
import { requestOtp } from '../../Services/OtpServices/Otp.services'
import { Otp, Snackbar } from '../../Constants'
import { showSnackBar } from '../../Utils/Snackbar'
import type { FormikFormRegister, RegisterFormValues } from '../../Types'

import type { States } from './Register.types'

const {
  TYPE: { REGISTER }
} = Otp
const {
  TYPE: { SUCCESS, FAILED }
} = Snackbar

export const onHandleBlur =
  ({ handleBlur }: FormikFormRegister, input: string) =>
  () => {
    handleBlur(input)
  }

export const onSubmitForm = (states: States) => async (values: RegisterFormValues) => {
  states.setShowLoadingMask(true)
  const requestOtpBody = {
    email: values.email,
    type: REGISTER
  }

  try {
    await requestOtp(requestOtpBody)

    showSnackBar('OTP berhasil dikirim ke email anda.', SUCCESS)
    states.dispatch(setRegistration(values))
    states.navigation.navigate(UnauthorizedRoutes.VerifyOtp)
    states.setShowLoadingMask(false)
  } catch (error) {
    showSnackBar('', FAILED, error as AxiosError<{ message?: string }>)
    states.setShowLoadingMask(false)
  }
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
