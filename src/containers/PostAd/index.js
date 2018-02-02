import React, { Component } from 'react';
// import { withStyles } from 'material-ui/styles';

// const Widget = () => null;
import {
  Widget,
  addResponseMessage
  //   addLinkSnippet,
  //   addUserMessage
} from 'react-chat-widget';
import Form from '../../components/PostAdForm';
// import ChatBot from '../../components/ChatBot';

class PostAd extends Component {
  constructor(props) {
    super(props);
    this.responses = [];
  }

  componentDidMount() {}
  showForminWidget = msg => {
    // addUserMessage(msg);
    addResponseMessage(`You said ${msg}`);
    // addResponseMessage(<div>DId this render?</div>)
  };
  render() {
    return (
      <div>
        <Form />
        {/* <ChatBot /> */}
        <Widget handleNewUserMessage={this.showForminWidget} />
      </div>
    );
  }
}

export default PostAd;
