import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'





export const getPosts = createAsyncThunk('posts/getPosts', async () => {
    const resultat = await axios.get('https://dummyjson.com/posts')
    return resultat.data
})

export const PostsSlice = createSlice({
    name: "posts",
    initState: {
        data: [],
        erreur: null,
        loading: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'loading'
            }
        })
        builder.addCase(getPosts.fulfilled, (state, action) => {
            if (state.loading === 'loading') {
                state.loading = 'idle'
                state.data = action.payload
            }
        })
        builder.addCase(getPosts.rejected, (state, action) => {
            if (state.loading === 'loading') {
                state.loading = 'idle'
                state.erreur = "Error"
            }
        })
    }
})

export default PostsSlice.reducer;