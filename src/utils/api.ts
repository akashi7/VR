import axios, { AxiosInstance } from 'axios'

let mainAPI: string

process.env.NODE_ENV === 'development'
  ? (mainAPI = 'http://192.168.88.122:5000/api/v1/')
  : (mainAPI = 'https://fimboo-api.mycodepay.com/api/v1/')

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
