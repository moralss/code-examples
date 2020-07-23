import { AUTH_SAVE_USER, CHANGE_AUTHORIZATION, LOGOUT_USER } from '../actions/actionTypes/index';


const initialState = {
  user: null,
  isAuthorized: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SAVE_USER:
      return { ...state, user: action.payload };
    case CHANGE_AUTHORIZATION:
      return { ...state, isAuthorized: action.payload }
    case LOGOUT_USER:
      return { ...state, user: null }
    default:
      return state;
  }
};

export default authReducer;