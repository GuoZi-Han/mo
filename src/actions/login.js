import { createActions } from 'redux-actions'
import {
  SET_HOME_AGE
} from '@/constants/actionTypes'
import { post } from '@/utils/request'
import api from '@/services/api'

export default createActions({
  [SET_HOME_AGE]: opt => post(api.sampleList, opt),
})
