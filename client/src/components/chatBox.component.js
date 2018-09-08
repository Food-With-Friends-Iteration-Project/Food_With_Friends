import { connect } from 'react-redux';
import React from 'react';


const chatBox = () => {
  return (
    <div className="chat-box">
      <div id="messages"></div>
      <form action="">
        <input id="m" autoComplete="off" /><button className="button">Send</button>
      </form>
    </div>
  )
}

export default chatBox;