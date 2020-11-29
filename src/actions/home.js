import { createActions } from 'redux-actions'
import {
  SET_HOME_AGE
} from '@/constants/actionTypes'
import { post } from '@/utils/request'
import api from '@/services/api'

export default createActions({
  [SET_HOME_AGE]: opt => post(api.sampleList, opt),
})

/* 
 * 所有请求接口的数据 必须放到 redux
*/





