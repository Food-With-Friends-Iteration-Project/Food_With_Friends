import { combineReducers } from 'redux';
import findFriendsReducer from './foodWithFriendReducer';

const reducers = combineReducers({
  friends: findFriendsReducer,
  // chatbox: chatboxReducer
})

export default reducers;
