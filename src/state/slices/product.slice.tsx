/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  deleteProduct,
  getProductAnalytics,
  productList,
  purchaseProduct,
  recordProduct,
  registerProduct,
  updateJsonProduct,
  updateProduct,
  viewProduct,
} from '../../utils/api/product.api'

interface modelFile {
  id: number
  name: string
  model_file: string
  created_at: string
  updated_at: string
  file_size: number
  file_type: string
}

export interface allProducts {
  id: number
  name: string
  description: string
  category: string
  product_link: string
  health: string
  health_id: string
  products?: Array<modelFile>
  created_at: string
  updated_at: string
}

export interface Iproducts {
  count: number
  next: string
  previous: string
  results: Array<allProducts>
}
export interface ProductState {
  loading: boolean
  listLoading: boolean
  listData: Iproducts
  oneProductLoading: boolean
  oneProduct: allProducts
  analytics: Analytics
}

interface OneAnalytic {
  date: string
  views: number
  purchases: number
  rate: number
}

export interface Analytics {
  total_views: number
  total_purchases: number
  total_rate: number
  analytics: Array<OneAnalytic>
}

const initialState: ProductState = {
  loading: false,
  listLoading: false,
  listData: {
    count: 0,
    next: '',
    previous: '',
    results: [],
  },
  oneProductLoading: false,
  oneProduct: {
    id: 0,
    name: '',
    description: '',
    category: '',
    product_link: '',
    health: '',
    health_id: '',
    products: [],
    created_at: '',
    updated_at: '',
  },
  analytics: {
    total_views: 0,
    total_purchases: 0,
    total_rate: 0,
    analytics: [
      {
        date: '',
        views: 0,
        purchases: 0,
        rate: 0,
      },
    ],
  },
}

interface registerProductData {
  data?: any
  success: () => void
  Error: (error?: any) => void
}

interface listProducts {
  page?: number
  Error: (error?: any) => void
}

interface viewOneProductData {
  id: string
  publicType: boolean
  Error: (error?: any) => void
  data?: any
}

interface recordProductInt {
  id: string
  Error: (error?: any) => void
}

interface updateProductInt {
  Error: (error?: any) => void
  data: any
  success: () => void
}
interface updateJsonProductInt {
  Error: (error?: any) => void
  data?: any
  id: string
  success: () => void
}

export const addProductApi = createAsyncThunk(
  'product',
  async (
    { data, success, Error }: registerProductData,
    { rejectWithValue }
  ) => {
    return registerProduct(data)
      .then(() => {
        success()
      })
      .catch((error) => {
        Error(error)
        rejectWithValue(error)
      })
  }
)

export const productListApi = createAsyncThunk(
  'products',
  async ({ Error, page }: listProducts, { rejectWithValue }) => {
    return productList(page)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        Error(error)
        rejectWithValue(error)
      })
  }
)

export const viewProductApi = createAsyncThunk(
  'one-product',
  async (
    { id, Error, publicType }: viewOneProductData,
    { rejectWithValue }
  ) => {
    return viewProduct(id, publicType)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        Error(error)
        rejectWithValue(error)
      })
  }
)

export const updateProductApi = createAsyncThunk(
  'update-product',
  async ({ Error, data, success }: updateProductInt, { rejectWithValue }) => {
    return updateProduct(data)
      .then((resp) => {
        success()
        return resp.data
      })
      .catch((error) => {
        Error(error)
        rejectWithValue(error)
      })
  }
)

export const updateJsonProductApi = createAsyncThunk(
  'update-json-product',
  async (
    { Error, data, id, success }: updateJsonProductInt,
    { rejectWithValue }
  ) => {
    return updateJsonProduct(id, data)
      .then((resp) => {
        success()
        return resp.data
      })
      .catch((error) => {
        Error(error)
        rejectWithValue(error)
      })
  }
)
export const deleteProductApi = createAsyncThunk(
  'update-json-product',
  async ({ Error, id, success }: updateJsonProductInt, { rejectWithValue }) => {
    return deleteProduct(id)
      .then((resp) => {
        success()
        return resp.data
      })
      .catch((error) => {
        Error(error)
        rejectWithValue(error)
      })
  }
)

export const recordProductApi = createAsyncThunk(
  'record-product',
  async ({ id, Error }: recordProductInt, { rejectWithValue }) => {
    return recordProduct(id)
      .then(() => {
        return
      })
      .catch((error) => {
        Error(error)
        rejectWithValue(error)
      })
  }
)

export const purchaseProductApi = createAsyncThunk(
  'purchase-product',
  async ({ id, Error }: recordProductInt, { rejectWithValue }) => {
    return purchaseProduct(id)
      .then(() => {
        return
      })
      .catch((error) => {
        Error(error)
        rejectWithValue(error)
      })
  }
)

export const productAnalyticsApi = createAsyncThunk(
  'product-analytics',
  async ({ id, Error }: recordProductInt, { rejectWithValue }) => {
    return getProductAnalytics(id)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        Error(error)
        rejectWithValue(error)
      })
  }
)

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    next: (state) => {
      console.log(state)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProductApi.pending, (state) => {
        state.loading = true
      })
      .addCase(addProductApi.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(addProductApi.rejected, (state) => {
        state.loading = false
      })
      .addCase(productListApi.pending, (state) => {
        state.listLoading = true
      })
      .addCase(
        productListApi.fulfilled,
        (state, action: PayloadAction<Iproducts>) => {
          state.listLoading = false
          state.listData = action.payload
        }
      )
      .addCase(productListApi.rejected, (state) => {
        state.listLoading = false
      })
      .addCase(viewProductApi.pending, (state) => {
        state.oneProductLoading = true
      })
      .addCase(
        viewProductApi.fulfilled,
        (state, action: PayloadAction<allProducts>) => {
          state.oneProductLoading = false
          state.oneProduct = action.payload
        }
      )
      .addCase(viewProductApi.rejected, (state) => {
        state.oneProductLoading = false
      })
      .addCase(updateProductApi.pending, (state) => {
        state.oneProductLoading = true
      })
      .addCase(
        updateProductApi.fulfilled,
        (state, action: PayloadAction<allProducts>) => {
          state.oneProductLoading = false
          state.oneProduct = action.payload
        }
      )
      .addCase(updateProductApi.rejected, (state) => {
        state.oneProductLoading = false
      })
      .addCase(recordProductApi.pending, () => {
        return
      })
      .addCase(recordProductApi.fulfilled, () => {
        return
      })
      .addCase(recordProductApi.rejected, () => {
        return
      })
      .addCase(purchaseProductApi.pending, () => {
        return
      })
      .addCase(purchaseProductApi.fulfilled, () => {
        return
      })
      .addCase(purchaseProductApi.rejected, () => {
        return
      })
      .addCase(productAnalyticsApi.rejected, () => {
        return
      })
      .addCase(productAnalyticsApi.pending, () => {
        return
      })
      .addCase(
        productAnalyticsApi.fulfilled,
        (state, action: PayloadAction<Analytics>) => {
          state.analytics = action.payload
        }
      )
  },
})

export default productSlice.reducer
