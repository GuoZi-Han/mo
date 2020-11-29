import { handleActions } from 'redux-actions'
import {
  GET_HOME_DATA,
} from '@/constants/actionTypes'

const defaultState = {
  data: [],
}

export default handleActions({
  [GET_HOME_DATA]: (state, action) => ({ ...state, data: action.payload }),
}, defaultState)
