import userReducer from './user/user.reducer';
import { combineReducers } from 'redux';

// returns an object which contains references to all individual reducers
export default combineReducers({
    user: userReducer
});