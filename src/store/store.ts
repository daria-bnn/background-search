import { configureStore } from '@reduxjs/toolkit'
import currentBGReducer from './reducers/currentBGReducers'
import photosReducer from './reducers/photoReducers'

export const store = configureStore({
  reducer: {
    photo: photosReducer,
    currentBG: currentBGReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
