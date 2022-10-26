import { Dispatch } from '@reduxjs/toolkit'

import { TPhotoFetchUnplash } from '../../types/typesUnplash'

import {
  ActionsPhoto,
  startLoading,
  getPhotosError,
  getPhotosSuccess,
} from '../actions/photoActaions'

const USER_KEY = process.env.REACT_APP_UNPLASH_API_KEY

const thunkFetchPhotosUnplash =
  (value: string) => async (dispatch: Dispatch<ActionsPhoto>) => {
    try {
      dispatch(startLoading(true))

      const response = await fetch(
        `https://api.unsplash.com//search/photos/?client_id=${USER_KEY}&page=1&per_page=20&query=${value}`
      )
      
      const data: TPhotoFetchUnplash = await response.json()

      if (data.results.length === 0) {
        dispatch(startLoading(false))
        dispatch(getPhotosError('По вашему запросу ничего не найдено'))
        dispatch(getPhotosSuccess([]))
      } else {
        const dataPhotos = data.results.map((item) => ({
          key: item.id,
          src: item.urls.small,
          alt: item.alt_description,
          width: item.width,
          height: item.height,
        }))

        dispatch(getPhotosError(null))
        dispatch(startLoading(false))
        dispatch(getPhotosSuccess(dataPhotos))
      }
    } catch (e) {
      dispatch(startLoading(false))
      dispatch(getPhotosError('Произошла ошибка'))
    }
  }

export default thunkFetchPhotosUnplash
