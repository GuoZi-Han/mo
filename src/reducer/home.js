import { handleActions } from 'redux-actions'
import {
  SET_HOME_AGE,
  GET_HOME_DATA,
} from '@/constants/actionTypes'

const defaultState = {
  age: 25,
  name: '小花',
  data: [],
}

export default handleActions({
  [SET_HOME_AGE]: (state, action) => {
    // localStorage.setItem('token', action.payload.token)
    return {
      ...state, data: action.payload.users,
    }
  },
  [GET_HOME_DATA]: (state, action) => ({ ...state, data: action.payload }),
}, defaultState)

// export default function home (state = defaultState, action) {
//   switch (action.type) {
//     case SET_HOME_AGE:
//       return { ...state, data: action.payload.users }

//     case GET_HOME_DATA:
//       return { ...state, data: action.payload }
    
//     default:
//       return state
//   }
// }