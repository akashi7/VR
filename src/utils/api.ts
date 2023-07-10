import axios, { AxiosInstance } from 'axios'
const baseURL = import.meta.env.BASE_URL

let mainAPI: string

process.env.NODE_ENV === 'development'
  ? (mainAPI = `${baseURL}`)
  : (mainAPI = `${baseURL}`)

const instance: AxiosInstance = axios.create({
  baseURL: mainAPI,
})

instance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export const POST = instance.post
export const GET = instance.get
export const PUT = instance.put
export const DELETE = instance.delete
