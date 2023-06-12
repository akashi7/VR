import { createSlice } from '@reduxjs/toolkit'

export interface SidebarState {
  toggle: boolean
}

const initialState: SidebarState = {
  toggle: false,
}

const sidebarSlice = createSlice({
  name: 'sidebar-toggle',
  initialState,
  reducers: {
    handleToggle: (state) => {
      state.toggle = !state.toggle
    },
  },
})

export const { handleToggle } = sidebarSlice.actions
export default sidebarSlice.reducer
