import { configureStore } from '@reduxjs/toolkit'
import  tvReducer from './reducers/TvSlice'
import movieReducer from './reducers/MovieSlice'

export const store = configureStore({
  reducer: {
    tv:tvReducer,
    movie:movieReducer
  },
})