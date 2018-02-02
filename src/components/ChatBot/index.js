import React, { Component } from 'react';
// import ChatBot from 'react-simple-chatbot';

import styles from './index.scss';

// const steps = [
//   {
//     id: '0',
//     message: 'Welcome to react chatbot!',
//     trigger: '1'
//   },
//   {
//     id: '1',
//     user: true
//     // message: 'Bye!'
//   }
// ];

class ChatBox extends Component {
  state = {
    open: false
  };
  render() {
    const { open } = this.state;
    return (
      <div className={`${styles['chat-bot']} open`}>
        {/* <TextField
        id="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        margin="normal"
      /> */}
        <div>Chat</div>
        {open && 'Hau'}
      </div>
    );
  }
}

export default ChatBox;
