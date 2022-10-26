import { configureStore } from '@reduxjs/toolkit'
import photosReducer from './reducers/photoReducers'

export const store = configureStore({
  reducer: {
    photo: photosReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
