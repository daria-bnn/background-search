import { Photo } from 'react-photo-album'

export const ACTION_START_LOADING = 'START_LOADING' as const
export const ACTION_GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS' as const
export const ACTION_GET_PHOTOS_ERROR = 'GET_PHOTOS_ERROR' as const

export const startLoading = (status: boolean) => ({
  type: ACTION_START_LOADING,
  payload: status,
})

export const getPhotosSuccess = (photos: Photo[]) => ({
  type: ACTION_GET_PHOTOS_SUCCESS,
  payload: photos,
})

export const getPhotosError = (error: string | null) => ({
  type: ACTION_GET_PHOTOS_ERROR,
  payload: error,
})

export type ActionStartLoading = ReturnType<typeof startLoading>
export type ActionGetPhotosSuccess = ReturnType<typeof getPhotosSuccess>
export type ActionGetPhotosError = ReturnType<typeof getPhotosError>

export type ActionsPhoto =
  | ActionStartLoading
  | ActionGetPhotosSuccess
  | ActionGetPhotosError
