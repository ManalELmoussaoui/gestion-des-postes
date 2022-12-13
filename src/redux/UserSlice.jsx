
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'


export const getUser = createAsyncThunk('user/getUser', async () => {
    const resultat = await axios.get('https://dummyjson.com/users')
    return resultat.data
})

export const userSlice = createSlice({
    name: "user",
    initState: {
        data: [],
        error: null,
        loading: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'loading'
            }
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            if (state.loading === 'loading') {
                state.loading = 'idle'
                state.data = action.payload
            }
        })
        builder.addCase(getUser.rejected, (state, action) => {
            if (state.loading === 'loading') {
                state.loading = 'idle'
                state.error = "Error"
            }
        })
    }
})

export default userSlice.reducer