/* eslint-disable @typescript-eslint/no-explicit-any */
import * as http from '../api'

export const registerProduct = (data: any) => {
  return http.POST('service/product/', data)
}
export const productList = (page?: number) => {
  return http.GET(`service/product/${page ? `?page=${page}` : ''}`)
}
export const viewProduct = (id: string, publicType: boolean) => {
  return http.GET(
    `service/product${publicType ? '/unauthenticated' : ''}/${id}/`
  )
}
export const updateProduct = (data: any) => {
  return http.POST(`service/product/?update=true`, data)
}
export const recordProduct = (id: string) => {
  return http.POST(`service/product/add/view/${id}`)
}
export const purchaseProduct = (id: string) => {
  return http.POST(`service/product/add/purchase/${id}`)
}

export const getProductAnalytics = (id: string) => {
  return http.GET(`service/product/analytiics/${id}`)
}

export const updateJsonProduct = (id: string, data: any) => {
  return http.PATCH(`service/product/${id}/`, data)
}

export const deleteProduct = (id: string) => {
  return http.DELETE(`service/product/${id}/`)
}
