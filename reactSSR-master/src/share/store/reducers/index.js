import { combineReducers } from 'redux';
import userReducer from './user.reducer';

// { user: [] }
// combineReducers:合并每一个小的reducer
export default combineReducers({
  user: userReducer,
})