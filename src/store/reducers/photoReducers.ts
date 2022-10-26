import TPhoto from '../../types/photo'

import {
  ActionsPhoto,
  ACTION_START_LOADING,
  ACTION_GET_PHOTOS_SUCCESS,
  ACTION_GET_PHOTOS_ERROR,
} from '../actions/photoActaions'

type TPhotoState = {
  photos: TPhoto[]
  loading: boolean
  error: null | string
}

const initialState: TPhotoState = {
  photos: [],
  loading: false,
  error: null,
}

const photosReducer = (
  state = initialState,
  action: ActionsPhoto
): TPhotoState => {
  switch (action.type) {
    case ACTION_START_LOADING:
      return { ...state, loading: true }

    case ACTION_GET_PHOTOS_SUCCESS:
      return { ...state, photos: action.payload, loading: false }

    case ACTION_GET_PHOTOS_ERROR:
      return { ...state, error: action.payload, loading: false }

    default:
      return state
  }
}

export default photosReducer
