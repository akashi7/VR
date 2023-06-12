import { Reducer, combineReducers, configureStore } from '@reduxjs/toolkit'

import sidebarReducer, { SidebarState } from './slices/sidebar.slice'

export interface RootState {
  sidebar: SidebarState
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  sidebar: sidebarReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
