const FindFriends = 'FindFriends';
const CurrentUser = 'CurrentUser';
const CurrentPW = 'CurrentPW';
const AddMessage = 'AddMessage';
const SendMessage = 'SendMessage';

const findFriends = () => ({types: FindFriends});

const currentPW = (value) => ({
  type: CurrentPW,
  pw: value,
});

const currentUser = (value) => ({
  type: CurrentUser, 
  user: value,
});

const addMessage = (value) => ({
  type: AddMessage,
  addmsg: value,
});

const sendMessage = (value) => ({
  type: SendMessage,
  sendmsg: value,
})

module.exports = {
  FindFriends,
  findFriends,
  CurrentUser,
  currentUser,
  currentPW,
  CurrentPW,
  addMessage,
  AddMessage,
  sendMessage,
  SendMessage,
}