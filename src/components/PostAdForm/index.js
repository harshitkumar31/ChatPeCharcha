import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const textStyle = {
  color: 'white'
};

const productTypes = [
  <MenuItem key={1} value="TV" primaryText="TV" />,
  <MenuItem key={2} value="Fridge" primaryText="Fridge" />
];

const conditions = [
  <MenuItem key={1} value="new" primaryText="New" />,
  <MenuItem key={2} value="old" primaryText="Old" />
];

const screen = [
  <MenuItem key={1} value="42" primaryText="42" />,
  <MenuItem key={2} value="32" primaryText="32" />,
  <MenuItem key={2} value="28" primaryText="28" />
];

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: null,
      condition: null,
      screenSize: null,
      resolution: null,
      brandName: null,
      disp: null,
      feature: null,
      adTitle: null,
      price: null,
      phoneNumber: null,
      emailId: null,
      pinCode: null,
      mrp: null
    };
  }
  handleChange = (event, index, value, name) => {
    console.log('here');
    this.setState({ [name]: value });
  };
  render() {
    const {
      adTitle,
      brandName,
      condition,
      disp,
      emailId,
      feature,
      mrp,
      phoneNumber,
      pinCode,
      price,
      resolution,
      screenSize,
      type
    } = this.state;
    return (
      <MuiThemeProvider>
        <div>
          <SelectField
            value={type}
            onChange={(event, index, value) =>
              this.handleChange(event, index, value, 'type')
            }
            floatingLabelText="Type"
            floatingLabelFixed
            floatingLabelStyle={textStyle}
            hintStyle={textStyle}
            menuStyle={textStyle}
            labelStyle={textStyle}
            name="productType"
            hintText="Select Type of Product"
          >
            {productTypes}
          </SelectField>
          <br />
          <SelectField
            value={condition}
            onChange={(event, index, value) =>
              this.handleChange(event, index, value, 'condition')
            }
            floatingLabelText="Condition"
            floatingLabelFixed
            floatingLabelStyle={textStyle}
            hintStyle={textStyle}
            menuStyle={textStyle}
            labelStyle={textStyle}
            hintText="Condition"
          >
            {conditions}
          </SelectField>
          <br />
          <SelectField
            value={screenSize}
            onChange={(event, index, value) =>
              this.handleChange(event, index, value, 'screenSize')
            }
            floatingLabelText="Screen Size"
            floatingLabelFixed
            floatingLabelStyle={textStyle}
            hintStyle={textStyle}
            menuStyle={textStyle}
            labelStyle={textStyle}
            hintText="Screen Size"
          >
            {screen}
          </SelectField>
          <br />
          <SelectField
            value={resolution}
            onChange={(event, index, value) =>
              this.handleChange(event, index, value, 'resolution')
            }
            floatingLabelText="Resolution"
            floatingLabelFixed
            floatingLabelStyle={textStyle}
            hintStyle={textStyle}
            menuStyle={textStyle}
            labelStyle={textStyle}
            hintText="Resolution"
          >
            {screen}
          </SelectField>
          <br />
          <SelectField
            value={brandName}
            onChange={(event, index, value) =>
              this.handleChange(event, index, value, 'brandName')
            }
            floatingLabelText="Brand Name"
            floatingLabelFixed
            floatingLabelStyle={textStyle}
            hintStyle={textStyle}
            menuStyle={textStyle}
            labelStyle={textStyle}
            hintText="Brand Name"
          >
            {screen}
          </SelectField>
          <br />
          <SelectField
            value={disp}
            onChange={(event, index, value) =>
              this.handleChange(event, index, value, 'disp')
            }
            floatingLabelText="Display Technology"
            floatingLabelFixed
            floatingLabelStyle={textStyle}
            hintStyle={textStyle}
            menuStyle={textStyle}
            labelStyle={textStyle}
            hintText="Display Technology"
          >
            {screen}
          </SelectField>
          <SelectField
            value={feature}
            onChange={(event, index, value) =>
              this.handleChange(event, index, value, 'feature')
            }
            floatingLabelText="Feature"
            floatingLabelFixed
            floatingLabelStyle={textStyle}
            hintStyle={textStyle}
            menuStyle={textStyle}
            labelStyle={textStyle}
            hintText="Feature"
          >
            {screen}
          </SelectField>
          <br />
          <TextField
            id="adTitle"
            label="Ad Title"
            type="text"
            margin="normal"
            value={adTitle}
            onChange={e => this.handleChange(e, null, null, 'adTitle')}
            inputStyle={textStyle}
            floatingLabelText="Ad Title"
            floatingLabelStyle={textStyle}
            hintStyle={textStyle}
          />
          <br />
          <TextField
            id="price"
            label="Price"
            type="text"
            margin="normal"
            value={price}
            inputStyle={textStyle}
            onChange={e => this.handleChange(e, null, null, 'price')}
            floatingLabelText="Price"
            floatingLabelStyle={textStyle}
            hintStyle={textStyle}
          />
          <br />
          <TextField
            id="mobileNumber"
            label="Mobile Number"
            type="text"
            margin="normal"
            inputStyle={textStyle}
            value={phoneNumber}
            onChange={e => this.handleChange(e, null, null, 'phoneNumber')}
            floatingLabelText="Mobile Number"
            floatingLabelStyle={textStyle}
            hintStyle={textStyle}
          />
          <br />
          <TextField
            id="emailId"
            label="Email Id"
            type="text"
            margin="normal"
            value={emailId}
            onChange={e => this.handleChange(e, null, null, 'emailId')}
            inputStyle={textStyle}
            floatingLabelText="Email Id"
            floatingLabelStyle={textStyle}
            hintStyle={textStyle}
          />
          <br />
          <TextField
            id="pinCode"
            label="Pin Code"
            type="text"
            margin="normal"
            value={pinCode}
            onChange={e => this.handleChange(e, null, null, 'pinCode')}
            inputStyle={textStyle}
            floatingLabelText="Pin Code"
            floatingLabelStyle={textStyle}
            hintStyle={textStyle}
          />
          <br />
          <TextField
            id="mrp"
            label="MRP"
            type="text"
            margin="normal"
            value={mrp}
            onChange={e => this.handleChange(e, null, null, 'mrp')}
            inputStyle={textStyle}
            floatingLabelText="MRP"
            floatingLabelStyle={textStyle}
            hintStyle={textStyle}
          />
          <br />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Form;
