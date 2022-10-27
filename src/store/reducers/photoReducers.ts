/* eslint-disable default-param-last */
import { AnyAction } from '@reduxjs/toolkit'
import { Photo } from 'react-photo-album'

import {
  ActionsPhoto,
  ACTION_START_LOADING,
  ACTION_GET_PHOTOS_SUCCESS,
  ACTION_GET_PHOTOS_ERROR,
  ACTION_SHOW_PHOTOS
} from '../actions/photoActaions'

type TPhotoState = {
  photos: Photo[]
  loading: boolean
  show: boolean
  error: null | string
}

const initialState: TPhotoState = {
  photos: [],
  loading: false,
  error: null,
  show: true,
}
const photosReducer = (
  state = initialState,
  action: ActionsPhoto | AnyAction
): TPhotoState => {
  switch (action.type) {
    case ACTION_START_LOADING:
      return { ...state, loading: true }

    case ACTION_GET_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.payload,
        loading: false,
        show: true,
        error: null,
      }

    case ACTION_GET_PHOTOS_ERROR:
      return { ...state, photos: [], error: action.payload, loading: false }

    case ACTION_SHOW_PHOTOS:
      return { ...state, show: action.payload }

    default:
      return state
  }
}

export default photosReducer
