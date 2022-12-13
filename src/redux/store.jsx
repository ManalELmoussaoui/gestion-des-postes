import { combineReducers, configureStore} from '@reduxjs/toolkit'
import userSlice from './UserSlice';
import PostsSlice from './PostsSlice';

const reducer=combineReducers({
    user:userSlice,
    post:PostsSlice,
})

const store =configureStore({reducer})


export default store;