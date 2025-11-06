import type { NavigationProp, CompositeNavigationProp } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

import type { FormikProps } from 'formik'

import UnauthorizedRoutesParams from '../Navigation/Routes/UnauthorizedRoutes.params'
import AuthorizedRoutesParams from '../Navigation/Routes/AuthorizedRoutes.params'
import SnackbarConstants from '../Constants/Snackbar'
import type { AppDispatch, RootState } from '../Redux/Store'

export type UseNavigationUnauthorizedRoutes = NavigationProp<UnauthorizedRoutesParams>

export type UseNavigationAuthorizedRoutes = NavigationProp<AuthorizedRoutesParams>

export type UseNavigationUniversal = CompositeNavigationProp<
  NativeStackNavigationProp<AuthorizedRoutesParams>,
  NativeStackNavigationProp<UnauthorizedRoutesParams>
>

export type LoginFormValues = {
  email: string
  password: string
}

export type FormikFormLogin = FormikProps<LoginFormValues>

export type RegisterFormValues = {
  fullName: string
  email: string
  password: string
  confirmationPassword: string
}

export type FormikFormRegister = FormikProps<RegisterFormValues>

export type DispatchRedux = AppDispatch

export type ReduxState = RootState

export type InputEmailFormValues = {
  email: string
}

export type FormikFormInputEmail = FormikProps<InputEmailFormValues>

export type SnackbarType = (typeof SnackbarConstants.TYPE)[keyof typeof SnackbarConstants.TYPE]
