import TPhoto  from '../../types/photo'

export const ACTION_START_LOADING = 'START_LOADING' as const
export const ACTION_GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS' as const
export const ACTION_GET_PHOTOS_ERROR = 'GET_PHOTOS_ERROR' as const

export const startLoading = () => ({ type: ACTION_START_LOADING })

export const getPhotosSuccess = (photos: TPhoto[]) => ({
  type: ACTION_GET_PHOTOS_SUCCESS,
  payload: photos,
})

export const getPhotosError = (error: string) => ({
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
