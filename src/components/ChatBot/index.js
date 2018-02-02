import React from 'react';
import ChatBot from 'react-simple-chatbot';

const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1'
  },
  {
    id: '1',
    user: true
    // message: 'Bye!'
  }
];

const chat = () => (
  <div>
    {/* <TextField
        id="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        margin="normal"
      /> */}

    <ChatBot steps={steps} disabled={false} />
  </div>
);

export default chat;
