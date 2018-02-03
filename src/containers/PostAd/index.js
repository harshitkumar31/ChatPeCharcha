import React, { Component } from 'react';
// import { withStyles } from 'material-ui/styles';

// const Widget = () => null;
import // Widget,
// addResponseMessage,
// toggleWidget
//   addLinkSnippet,
//   addUserMessage
'react-chat-widget';
import Form from '../../components/PostAdForm';
import ViewAd from '../../components/ViewAd';

class PostAd extends Component {
  constructor(props) {
    super(props);
    this.responses = [];
    this.state = {
      show: false,
      data: {}
    };
  }

  componentDidMount() {}
  showForminWidget = msg => {
    // addUserMessage(msg);
    // addResponseMessage(`You said ${msg}`);
    // addResponseMessage(<div>DId this render?</div>)
  };

  formOnSubmit = data => {
    // toggleWidget();
    this.setState({
      show: true,
      data
    });
  };
  render() {
    const { show, data } = this.state;
    return (
      <div>
        {!show && <Form formOnSubmit={this.formOnSubmit} />}
        {show && <ViewAd data={data} />}
        {/* <ChatBot /> */}
        {/* <Widget
          handleNewUserMessage={this.showForminWidget}
          title="QChat"
          subtitle="Let me help you"
        /> */}
      </div>
    );
  }
}

export default PostAd;
