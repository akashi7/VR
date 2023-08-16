/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from 'axios'
import { getFromLocal } from '../helpers/handleLocalStorage'
const baseURL = import.meta.env.VITE_BASE_URL

let mainAPI: string

process.env.NODE_ENV === 'development'
  ? (mainAPI = `${baseURL}`)
  : (mainAPI = `${baseURL}`)

const instance: AxiosInstance = axios.create({
  baseURL: mainAPI,
})

instance.interceptors.request.use(
  (config) => {
    if (
      config.url &&
      (config.url.includes('auth/kakao/') ||
        config.url.includes('auth/google/'))
    ) {
      return config
    }

    config.headers['Authorization'] = 'Token ' + getFromLocal<any>('token')
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export const POST = instance.post
export const GET = instance.get
export const PUT = instance.put
export const PATCH = instance.patch
export const DELETE = instance.delete
