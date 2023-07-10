import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit'

import sidebarReducer, { SidebarState } from './slices/sidebar.slice'

import authSliceReducer, { AuthState } from './slices/auth.slice'

export interface RootState {
  sidebar: SidebarState
  authState: AuthState
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  sidebar: sidebarReducer,
  authState: authSliceReducer, // Corrected the auth reducer key
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
