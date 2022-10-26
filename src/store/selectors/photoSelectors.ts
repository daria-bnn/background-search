import { RootState } from '../store'

export const selectLoadingPhoto = (state: RootState) => state.photo.loading
export const selectPhotos = (state: RootState) => state.photo.photos
export const selectError = (state: RootState) => state.photo.error
