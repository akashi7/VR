import * as http from '../api'

export const getCategories = () => {
  return http.GET('service/categories/')
}
export const getHealth = () => {
  return http.GET('service/health/')
}
