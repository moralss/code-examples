import { AUTH_SAVE_USER, CHANGE_AUTHORIZATION, LOGOUT_USER, AUTH_ERROR } from '../actions/actionTypes/index';


const initialState = {
  user: null,
  isAuthorized: false,
  error: { error: null }
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SAVE_USER:
      return { ...state, user: action.payload };
    case CHANGE_AUTHORIZATION:
      return { ...state, isAuthorized: action.payload }
    case LOGOUT_USER:
      return { ...state, user: null }
    case AUTH_ERROR:
      return { ...state, error: action.payload }
    default:
      return state;
  }
};

export default authReducer;