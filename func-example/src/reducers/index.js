import { combineReducers} from 'redux';
import stateReducer from './stateReducer';

export const rootReducer = combineReducers({
    stateReducer,
})