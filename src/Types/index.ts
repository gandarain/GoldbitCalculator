import type { NavigationProp } from '@react-navigation/native'

import type { FormikProps } from 'formik'

import Params from '../Navigation/Params'
import type { AppDispatch } from '../Redux/Store'

export type UseNavigation = NavigationProp<Params>

export type LoginFormValues = {
  email: string,
  password: string
}

export type RegisterFormValues = {
  fullName: string,
  email: string,
  password: string,
  confirmationPassword: string
}

export type FormikFormLogin = FormikProps<LoginFormValues>

export type FormikFormRegister = FormikProps<RegisterFormValues>

export type Dispatch = AppDispatch
