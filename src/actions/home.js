import { createActions } from 'redux-actions'
import {
  SET_HOME_AGE,
  GET_HOME_DATA,
} from '@/constants/actionTypes'
import { post, get } from '@/utils/request'
import api from '@/services/api'

export default createActions({
  [SET_HOME_AGE]: opt => post(api.sampleList, opt),
})

/* 
 * 所有请求接口的数据 必须放到 redux
*/
export function setAge () {
  return {
    type: SET_HOME_AGE,
    payload: get(api.getuser),
  }
}

export function getData () {
  return {
    type: GET_HOME_DATA,
    payload: get(api.getuser),
  }
}

export function getThunk (opt) {
  return dispatch => dispatch({
    type: GET_HOME_DATA,
    payload: get(api.getuser),
  })
}




