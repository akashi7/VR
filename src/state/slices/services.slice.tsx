/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCategories, getHealth } from '../../utils/api/services.api'

interface category {
  id: string
  name: string
  description: string
}

interface heatlh {
  count: number
  next: string
  previous: string
  results: Array<category>
}

export interface ServiceState {
  loading: boolean
  data: Array<category>
  heatlhLoading: boolean
  healthData: heatlh
}

const initialState: ServiceState = {
  loading: false,
  data: [],
  heatlhLoading: false,
  healthData: {
    count: 0,
    next: '',
    previous: '',
    results: [],
  },
}

interface CategoryApiData {
  Error: (error: any) => void
}

type HealthApiData = CategoryApiData

export const categoryApi = createAsyncThunk(
  'categories',
  async ({ Error }: CategoryApiData, { rejectWithValue }) => {
    return getCategories()
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        Error(error)
        rejectWithValue(error)
      })
  }
)
export const healthApi = createAsyncThunk(
  'heatlh',
  async ({ Error }: HealthApiData, { rejectWithValue }) => {
    return getHealth()
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        Error(error)
        rejectWithValue(error)
      })
  }
)

const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    next: (state) => {
      console.log(state)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(categoryApi.pending, (state) => {
        state.loading = true
      })
      .addCase(
        categoryApi.fulfilled,
        (state, action: PayloadAction<Array<category>>) => {
          state.loading = false
          state.data = action.payload
        }
      )
      .addCase(categoryApi.rejected, (state) => {
        state.loading = false
      })
      .addCase(healthApi.pending, (state) => {
        state.heatlhLoading = true
      })
      .addCase(healthApi.fulfilled, (state, action: PayloadAction<heatlh>) => {
        state.heatlhLoading = false
        state.healthData = action.payload
      })
      .addCase(healthApi.rejected, (state) => {
        state.heatlhLoading = false
      })
  },
})

export default serviceSlice.reducer
