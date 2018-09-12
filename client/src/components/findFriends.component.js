import { connect } from 'react-redux';
import React, { Component } from 'react';



const mapStateToProps = store => ({
  findFriends: store.friends
})



class FindFriends extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      textMessage:''
    };

    this.phoneChange = this.phoneChange.bind(this);
    this.inviteFriend = this.inviteFriend.bind(this);
    this.textMsgChange = this.textMsgChange.bind(this);
  }

  phoneChange(event){
    this.setState({ phone: event.target.value })
    console.log('phone: ', this.state.phone);
  }

  textMsgChange(event){
    this.setState({ textMessage: event.target.value })
    console.log('message: ', this.state.textMessage);
  }

  inviteFriend() {
  const url='/sendText'
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ phone: this.state.phone, message: this.state.textMessage })
    }).then((res) => {
      return res.json()
    }).then((jsonRes) => {
      console.log({jsonRes});
    }).catch((err) => {
      console.log({err});
    })
  }


  render () {
    console.log("render findFriends");
    let friendsArr = [];
    for(let i = 0; i < this.props.findFriends.users.length; i++) {
      friendsArr.push(<div className="friend-box" key={"friend" + i}><div className="inner-box"><span className="friend-box__user">User:     </span>{this.props.findFriends.users[i].user}</div><div className="inner-box"><span className="friend-box__cuisine"> Cuisine:     </span>{this.props.findFriends.users[i].cuisine}</div></div>)
    }
    return (
      <div className="find-friends-container">
        <div className="main-header">Find Friends</div>
        <div className="find-friend-box">
          {friendsArr}
        </div>
        <input
          type='text'
          value={this.state.phone}
          placeholder='phone'
          onChange={this.phoneChange}
        />
        <input
          type='text'
          value={this.state.textMessage}
          placeholder='message'
          onChange={this.textMsgChange}
        />
        <button onClick={this.inviteFriend}>Invite</button>
      </div>
    )
  }
}


export default connect(mapStateToProps)(FindFriends);
