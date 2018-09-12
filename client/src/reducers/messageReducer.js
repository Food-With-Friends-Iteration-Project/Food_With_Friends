import * as types from '../actions/actions.js';

const initialState = {
  receivedMsg = '',
  sendMsg = '',
  updateMsg = ''
}

const messageReducer = (state=initialState, action) => {
  switch(action.type) {
    case types.receivedMessage:
      let newchatboxState = Object.assign({}, state);
      return newchatboxState;
    default:
      return state;
  }
}

export default messageReducer;