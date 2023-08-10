import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit'

import sidebarReducer, { SidebarState } from './slices/sidebar.slice'

import authSliceReducer, { AuthState } from './slices/auth.slice'

import serviceSliceReducer, { ServiceState } from './slices/services.slice'

import productSliceReducer, { ProductState } from './slices/product.slice'

import hidePageReducer, { HidePageState } from './slices/hidepage.slice'

export interface RootState {
  sidebar: SidebarState
  auth: AuthState
  service: ServiceState
  product: ProductState
  page: HidePageState
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  sidebar: sidebarReducer,
  auth: authSliceReducer,
  service: serviceSliceReducer,
  product: productSliceReducer,
  page: hidePageReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
