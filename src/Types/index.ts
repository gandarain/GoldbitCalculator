import type { NavigationProp } from '@react-navigation/native'

import type { FormikProps } from 'formik'

import Params from '../Navigation/Params'
import SnackbarConstants from '../Constants/Snackbar'
import type { AppDispatch, RootState } from '../Redux/Store'

export type UseNavigation = NavigationProp<Params>

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

export type Dispatch = AppDispatch

export type ReduxState = RootState

export type InputEmailFormValues = {
  email: string
}

export type FormikFormInputEmail = FormikProps<InputEmailFormValues>

export type SnackbarType = (typeof SnackbarConstants.TYPE)[keyof typeof SnackbarConstants.TYPE]
