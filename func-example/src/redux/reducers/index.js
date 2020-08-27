import { combineReducers } from 'redux';
import authReducer from './authReducer';
import shoppingReducer from './shopping';

export const rootReducer = combineReducers({
    auth: authReducer,
    shopping: shoppingReducer
})  