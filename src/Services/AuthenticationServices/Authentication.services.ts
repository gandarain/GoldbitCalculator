import type { AxiosResponse } from 'axios'

import Service from '../Service'

import type { RegisterBody, RegisterResponse } from './Authentication.services.types'

export const register = async (body: RegisterBody): Promise<RegisterResponse> => {
  try {
    const result: AxiosResponse<RegisterResponse> = await Service.post('users/register', body)

    return result.data
  } catch (error) {
    throw error
  }
}

export default {
  register
}
