import React, { Component } from 'react';
// import { withStyles } from 'material-ui/styles';

import axios from 'axios';
// const Widget = () => null;

import { Widget, addResponseMessage, toggleWidget } from 'react-chat-widget';

import Form from '../../components/PostAdForm';
import ViewAd from '../../components/ViewAd';
import './index.scss';

class PostAd extends Component {
  constructor(props) {
    super(props);
    this.responses = [];
    this.state = {
      show: false,
      data: {}
      // negotiate: false,
    };
  }

  componentDidMount() {}
  showForminWidget = () => {
    // addUserMessage(msg);
    // addResponseMessage(`You said ${msg}`);
    // addResponseMessage(<div>DId this render?</div>)
    addResponseMessage('Okay');
  };

  formOnSubmit = data => {
    this.setState({
      show: true,
      data
    });
    // addResponseMessage(
    //   'Do you want to answer some questions to improve your Ad?'
    // );

    toggleWidget();
    addResponseMessage('Do you want me to negotiate on your behalf?');
    // this.showFaqs();

    this.askQuestions();
  };

  askQuestions = () => {
    // addResponseMessage('What\'s the max price ?');
    // addResponseMessage('What\'s the min price ?');
  };

  showFaqs = msg => {
    // addResponseMessage(msg);

    axios.get(`/api/message?message=${msg}`).then(res => {
      if (res.status === 200) {
        addResponseMessage(`${res.data.message}`);
      }
    });
  };
  render() {
    const { show, data } = this.state;
    return (
      <div>
        {!show && <Form formOnSubmit={this.formOnSubmit} />}
        {show && <ViewAd data={data} />}
        {/* <ChatBot /> */}

        <Widget
          handleNewUserMessage={!show ? this.showFaqs : this.showForminWidget}
          title="QChat"
          subtitle="Let me help you"
          style={{ color: '#333' }}
        />
      </div>
    );
  }
}

export default PostAd;
