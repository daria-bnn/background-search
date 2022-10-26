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
      dispatch(startLoading())

      const response = await fetch(
        `https://api.unsplash.com//search/photos/?client_id=${USER_KEY}&page=1&per_page=20&query=${value}`
      )
      const data: TPhotoFetchUnplash = await response.json()

      const dataPhotos = data.results.map((item) => ({
        key: item.id,
        src: item.urls.regular,
        alt: item.alt_description,
        width: item.width,
        height: item.height,
      }))

      dispatch(getPhotosSuccess(dataPhotos))
    } catch (e) {
      dispatch(getPhotosError('Произошла ошибка'))
    }
  }

export default thunkFetchPhotosUnplash
