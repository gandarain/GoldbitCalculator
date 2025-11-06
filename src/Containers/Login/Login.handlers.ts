import type { AxiosError } from 'axios'

import AuthorizedRoutes from '../../Navigation/Routes/AuthorizedRoutes'
import UnauthorizedRoutes from '../../Navigation/Routes/UnauthorizedRoutes'
import { Snackbar } from '../../Constants'
import { login } from '../../Services/AuthenticationServices/Authentication.services'
import { showSnackBar } from '../../Utils/Snackbar'
import { setLoginWithToken } from '../../Redux/Reducers/AuthenticationReducers/Authentication.reducers'
import type { FormikFormLogin, LoginFormValues } from '../../Types'

import type { States } from './Login.types'

const {
  TYPE: { SUCCESS, FAILED }
} = Snackbar

export const onHandleBlur =
  ({ handleBlur }: FormikFormLogin, input: string) =>
  () => {
    handleBlur(input)
  }

export const onSubmitForm = (states: States) => async (values: LoginFormValues) => {
  states.setShowLoadingMask(true)
  const loginBody = {
    email: values.email,
    password: values.password
  }

  try {
    const loginResponse = await login(loginBody)

    showSnackBar('Login berhasil.', SUCCESS)
    states.dispatch(setLoginWithToken({ isLogin: true, token: loginResponse?.token }))
    states.navigation.reset({
      index: 0,
      routes: [{ name: AuthorizedRoutes.MainTab }]
    })
    states.setShowLoadingMask(false)
  } catch (error) {
    showSnackBar('', FAILED, error as AxiosError<{ message?: string }>)
    states.setShowLoadingMask(false)
  }
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
  states.navigation.navigate(UnauthorizedRoutes.InputEmail)
}
