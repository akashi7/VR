/* eslint-disable @typescript-eslint/no-explicit-any */

import * as http from '../api'

export const getCategories = () => {
  return http.GET('service/categories/')
}
export const getHealth = () => {
  return http.GET('service/health/')
}
export const createPlan = (data: any) => {
  return http.POST('service/create-plan/', data)
}
export const getPlan = () => {
  return http.GET('service/get-plan/')
}
