/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { setToLocal } from '../../helpers/handleLocalStorage'
import { getUser, googleAuth, kakaoAuth } from '../../utils/api/auth.api'

interface user {
  pk?: number
  username?: string
  email?: string
  first_name?: string
  last_name?: string
}
export interface AuthState {
  loading: boolean
  userLoading: boolean
  userData: user
}

const initialState: AuthState = {
  loading: false,
  userLoading: false,
  userData: {},
}

interface KakaoAuthData {
  data: any
  success: () => void
  Error: (error: any) => void
}

interface UserLoginData {
  Error: (error?: any) => void
}

export const kakaoAuthSlice = createAsyncThunk(
  'kakao-auth',
  async ({ data, success, Error }: KakaoAuthData, { rejectWithValue }) => {
    return kakaoAuth(data)
      .then((resp) => {
        setToLocal('token', resp.data.key)
        success()
      })
      .catch((error) => {
        Error(error)
        rejectWithValue(error)
      })
  }
)

export const googleAuthSlice = createAsyncThunk(
  'google-auth',
  async ({ data, success, Error }: KakaoAuthData, { rejectWithValue }) => {
    return googleAuth(data)
      .then((resp) => {
        setToLocal('token', resp.data.key)
        success()
      })
      .catch((error) => {
        Error(error)
        rejectWithValue(error)
      })
  }
)

export const userSlice = createAsyncThunk(
  'user',
  async ({ Error }: UserLoginData, { rejectWithValue }) => {
    return getUser()
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        Error(error)
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
      .addCase(userSlice.pending, (state) => {
        state.userLoading = true
      })
      .addCase(userSlice.fulfilled, (state, action: PayloadAction<user>) => {
        state.userLoading = false
        state.userData = action.payload
      })
      .addCase(userSlice.rejected, (state) => {
        state.userLoading = false
      })
      .addCase(googleAuthSlice.pending, (state) => {
        state.loading = true
      })
      .addCase(googleAuthSlice.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(googleAuthSlice.rejected, (state) => {
        state.loading = false
      })
  },
})

export default authSlice.reducer
