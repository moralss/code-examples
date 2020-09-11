import { SAVE_USER } from '../actionTypes'

const initialState = {
  user: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER:
      return state
    default:
      return state
  }
}

export default authReducer


