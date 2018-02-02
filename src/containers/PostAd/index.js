import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
// import { withStyles } from 'material-ui/styles';
// import ChatBot from '../../components/ChatBot';
// const Widget = () => null;
import {
  Widget
  //   addResponseMessage,
  //   addLinkSnippet,
  //   addUserMessage
} from 'react-chat-widget';

const textStyle = {
  color: 'white'
};

const brands = [];

const Form = () => (
  <MuiThemeProvider>
    <SelectField
      value={this.state.value}
      onChange={this.handleChange}
      floatingLabelText="Type"
      floatingLabelFixed
      floatingLabelStyle={textStyle}
      hintStyle={textStyle}
      menuStyle={textStyle}
      labelStyle={textStyle}
      hintText="Select Type of User"
    >
      {brands}
    </SelectField>
    <TextField
      id="password"
      label="Password"
      type="password"
      autoComplete="current-password"
      margin="normal"
      inputStyle={textStyle}
      floatingLabelText="Email"
      floatingLabelStyle={textStyle}
      hintStyle={textStyle}
    />
  </MuiThemeProvider>
);

class PostAd extends Component {
  constructor(props) {
    super(props);
    this.responses = [];
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <Form />
        {/* <ChatBot steps={steps} /> */}
        <Widget />
      </div>
    );
  }
}

export default PostAd;
