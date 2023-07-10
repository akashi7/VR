/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { kakaoAuth } from '../../utils/api/auth.api'

export interface AuthState {
  loading: boolean
}

const initialState: AuthState = {
  loading: false,
}

interface KakaoAuthData {
  data: any // Adjust the type of `data` according to your requirements
  success: () => void
}

export const kakaoAuthSlice = createAsyncThunk(
  'kakao-auth',
  async ({ data, success }: KakaoAuthData, { rejectWithValue }) => {
    return kakaoAuth(data)
      .then((resp) => {
        success()
        localStorage.setItem('token', resp.data.token)
      })
      .catch((error) => {
        rejectWithValue(error)
      })
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    next: (state) => {
      console.log(state)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(kakaoAuthSlice.pending, (state) => {
        state.loading = true
      })
      .addCase(kakaoAuthSlice.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(kakaoAuthSlice.rejected, (state) => {
        state.loading = false
      })
  },
})

export default authSlice.reducer
