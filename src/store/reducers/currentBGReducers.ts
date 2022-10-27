/* eslint-disable default-param-last */
import { AnyAction } from '@reduxjs/toolkit'

import {
  ActionGetCurrentBG,
  ACTION_GET_CURRENT_BG,
} from '../actions/currentBGActaions'

type TCurrentBG = {
  src: undefined | string
}

const initialState: TCurrentBG = {
  src: undefined,
}

const currentBGReducer = (
  state = initialState,
  action: ActionGetCurrentBG | AnyAction
): TCurrentBG => {
  switch (action.type) {
    case ACTION_GET_CURRENT_BG:
      return { ...state, src: action.payload }

    default:
      return state
  }
}

export default currentBGReducer
