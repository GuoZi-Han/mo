import { post } from '@/utils/request'
import api from '@/services/api'

export function setLogin (opt) {
  return {
    type: 'SET_LOGIN_TOKEN',
    payload: post(api.sampleLogin, opt),
  }
}

export function setData (opt) {
  return {
    type: 'SET_LOGIN_DATA',
    payload: post(api.sampleList, opt),
  }
}

export function onAdd (opt) {
  return {
    type: 'SET_LOGIN_PUT',
    payload: post(api.samplePut, opt),
  }
}
