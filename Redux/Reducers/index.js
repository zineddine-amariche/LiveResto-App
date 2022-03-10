import {combineReducers} from 'redux';
import auth from './Login';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
