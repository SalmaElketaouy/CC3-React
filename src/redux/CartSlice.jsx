import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'





export const getListProduits = createAsyncThunk('ListProduits/ListProduits', async () => {
    const res = await axios.get('https://dummyjson.com/carts')
    return res.data
})

export const CartSlise = createSlice({
    name: "ListProduits",
    initialState: {
        data: [],
        error: null,
        loading: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getListProduits.pending, (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'loading'
            }
        })
        builder.addCase(getListProduits.fulfilled, (state, action) => {
            if (state.loading === 'loading') {
                state.loading = 'idle'
                state.data = action.payload
            }
        })
        builder.addCase(getListProduits.rejected, (state, action) => {
            if (state.loading === 'loading') {
                state.loading = 'idle'
                state.error = "Error"
            }
        })
    }
})

export default CartSlise;
