import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import { BASE_URL } from '@env'

import { Authentication } from '../Constants'

const axiosInstance: AxiosInstance = axios.create({
  // baseURL: BASE_URL,
  baseURL: 'http://localhost:4000/api/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

const getCredential = async (): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(Authentication.ACCESS_TOKEN)

    return value
  } catch (error) {
    return null
  }
}

axiosInstance.interceptors.request.use(
  async config => {
    const token = await getCredential()

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  error => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // eslint-disable-next-line no-console
          console.error('Unauthorized - redirect to login')
          break
        case 403:
          // eslint-disable-next-line no-console
          console.error('Forbidden - access denied')
          break
        case 404:
          // eslint-disable-next-line no-console
          console.error('Resource not found')
          break
        case 500:
          // eslint-disable-next-line no-console
          console.error('Server error')
          break
        default:
          // eslint-disable-next-line no-console
          console.error(`Error: ${error.response.status}`)
      }
    } else if (error.request) {
      // eslint-disable-next-line no-console
      console.error('Network error or no response from server')
    } else {
      // eslint-disable-next-line no-console
      console.error(`Error in setting up request: ${error.message}`)
    }

    return Promise.reject(error)
  }
)

export default axiosInstance
