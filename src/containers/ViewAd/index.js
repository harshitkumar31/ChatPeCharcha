import React, { Component } from 'react';
// import { withStyles } from 'material-ui/styles';

// const Widget = () => null;
// import {
//   Widget,
//   addResponseMessage,
//   toggleWidget
//   // addLinkSnippet,
//   // addUserMessage
// } from 'react-chat-widget';
import axios from 'axios';
import ViewAd from '../../components/ViewAd';
import './index.scss';

class PostAd extends Component {
  constructor(props) {
    super(props);
    this.responses = [];
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    axios.get('/viewAd').then(res => {
      if (res.status === 200) {
        this.setState({
          data: res.data
        });
      }
    });

    // toggleWidget();
  }
  showForminWidget = msg => {
    // addUserMessage(msg);
    // addResponseMessage(`You said ${msg}`);

    // addResponseMessage(<div>DId this render?</div>)

    this.askBot(msg);
  };

  askBot = msg => {
    axios.get(`/api/message?message=${msg}`).then(res => {
      if (res.status === 200) {
        // addResponseMessage(`${res.data.message}`);
      }
    });
  };

  formOnSubmit = data => {
    // toggleWidget();
    this.setState({
      data
    });
  };
  render() {
    const { data } = this.state;
    return (
      <div>
        {<ViewAd data={data} />}
        {/* <ChatBot /> */}
                {/* 
        <Widget
          handleNewUserMessage={this.showForminWidget}
          title="Seller"
          subtitle=""
        /> */}
      </div>
    );
  }
}

export default PostAd;
