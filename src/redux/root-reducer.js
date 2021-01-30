//root reducer= base reducer that represents all of the state of the app and the code that combines all of our states together

import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer
});