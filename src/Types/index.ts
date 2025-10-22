import type { NavigationProp } from '@react-navigation/native'

import type { FormikProps } from 'formik'

import Params from '../Navigation/Params'

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
