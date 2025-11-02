import type { AxiosResponse } from 'axios'

import Service from '../Service'

import type { RequestOtpBody, RequestOtpResponse } from './Otp.services.types'

export const requestOtp = async (body: RequestOtpBody): Promise<RequestOtpResponse> => {
  try {
    const result: AxiosResponse<RequestOtpResponse> = await Service.post('otp/request', body)

    return result.data
  } catch (error) {
    throw error
  }
}

export default {
  requestOtp
}
