
const defaultState = {

}

export default function login (state = defaultState, action) {
  switch (action.type) {
    case 'SET_HOME_AGE':
      return { ...state, users: action.payload }

    default:
      return state
  }
}
