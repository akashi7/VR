/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  createPlan,
  getCategories,
  getHealth,
  getPlan,
} from '../../utils/api/services.api'

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

export interface planDataInterface {
  plan_id: number
}

export interface ServiceState {
  loading: boolean
  data: Array<category>
  heatlhLoading: boolean
  healthData: heatlh
  planLoading: boolean
  planData: planDataInterface
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
  planLoading: false,
  planData: {
    plan_id: 0,
  },
}

interface CategoryApiData {
  Error: (error: any) => void
}

interface createPlanInterface {
  Error: (error: any) => void
  success: () => void
  data: any
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
export const createPlanApi = createAsyncThunk(
  'create-plan',
  async (
    { Error, data, success }: createPlanInterface,
    { rejectWithValue }
  ) => {
    return createPlan(data)
      .then(() => {
        success()
      })
      .catch((error) => {
        Error(error)
        rejectWithValue(error)
      })
  }
)

export const getPlanApi = createAsyncThunk(
  'get-plan',
  async ({ Error }: HealthApiData, { rejectWithValue }) => {
    return getPlan()
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
      .addCase(getPlanApi.pending, (state) => {
        state.planLoading = true
      })
      .addCase(
        getPlanApi.fulfilled,
        (state, action: PayloadAction<planDataInterface>) => {
          state.planLoading = false
          state.planData = action.payload
        }
      )
      .addCase(getPlanApi.rejected, (state) => {
        state.planLoading = false
      })
  },
})

export default serviceSlice.reducer
