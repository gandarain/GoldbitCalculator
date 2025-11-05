import type { AxiosResponse } from 'axios'

import Service from '../Service'

import type {
  RegisterBody,
  RegisterResponse,
  LoginBody,
  LoginResponse
} from './Authentication.services.types'

export const register = async (body: RegisterBody): Promise<RegisterResponse> => {
  try {
    const result: AxiosResponse<RegisterResponse> = await Service.post('users/register', body)

    return result.data
  } catch (error) {
    throw error
  }
}

export const login = async (body: LoginBody): Promise<LoginResponse> => {
  try {
    const result: AxiosResponse<LoginResponse> = await Service.post('users/login', body)

    return result.data
  } catch (error) {
    throw error
  }
}

export default {
  register
}
