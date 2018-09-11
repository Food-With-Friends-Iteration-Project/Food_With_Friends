import * as types from './actions.js';

const initalState = {
  users: [
    {
      user: 'James',
      cuisine: 'Indian'
    },
    {
      user: 'Aaron',
      cuisine: 'French'
    },
    {
      user: 'Mike',
      cuisine: 'Italian'
    }
  ],
  pw: '',
  user: '',
  addmsg: '',
  sendmsg: '',
  cuisine: 'Italian',
  isLoggedIn: true,
}

const findFriendsReducer = (state=initalState, action) => {
  switch(action.type) {
    case types.FindFriends:
      let newFindFriendState = Object.assign({}, state);
      return newFindFriendState;
    case types.CurrentUser:
      let newCurrentUserState = Object.assign({}, state);
      newCurrentUserState.user = action.user;
      return newCurrentUserState;
    case types.CurrentPW:
      let newCurrentPWState = Object.assign({}, state);
      newCurrentPWState.pw = action.pw;
      return newCurrentPWState; 
    case types.AddMessage:
      let newAddMessageState = Object.assign({}, state);
      newAddMessageState.addmsg = action.addmsg;
      return newAddMessageState;
    case types.sendMessage:
      let newSendMessageState = Object.assign({}, state);
      newSendMessageState.sendmsg = action.sendmsg;
      return newSendMessageState;
    default:
      return state;
  }
}

export default findFriendsReducer;