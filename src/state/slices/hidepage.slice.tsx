import { createSlice } from '@reduxjs/toolkit'

export interface HidePageState {
  toggle: boolean
}

const initialState: HidePageState = {
  toggle: false,
}

const hidepage = createSlice({
  name: 'hide-toggle',
  initialState,
  reducers: {
    handleTogglePage: (state) => {
      state.toggle = !state.toggle
    },
  },
})

export const { handleTogglePage } = hidepage.actions
export default hidepage.reducer
