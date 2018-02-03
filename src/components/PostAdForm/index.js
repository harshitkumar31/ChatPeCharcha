import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

const buttonStyle = {
  margin: 12
};

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
  <MenuItem key={3} value="28" primaryText="28" />
];

const brands = [
  <MenuItem key={1} value="LG" primaryText="LG" />,
  <MenuItem key={2} value="Samsung" primaryText="Samsung" />,
  <MenuItem key={3} value="Sony" primaryText="Sony" />
];

const resolutions = [
  <MenuItem key={1} value="Full HD" primaryText="Full HD" />,
  <MenuItem key={2} value="HD Ready" primaryText="HD Ready" />,
  <MenuItem key={3} value="SD" primaryText="SD" />
];

const techs = [
  <MenuItem key={1} value="LED" primaryText="LED" />,
  <MenuItem key={2} value="LCD" primaryText="LCD" />
];

const features = [
  <MenuItem key={1} value="3D TV" primaryText="3D" />,
  <MenuItem key={2} value="Smart TV" primaryText="Smart" />
];

type Props = any;

class Form extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      type: null,
      condition: null,
      size: null,
      resolution: null,
      brand: null,
      display: null,
      feature: null,
      title: null,
      price: null,
      mobile: null,
      emailId: null,
      pincode: null,
      mrp: null,
      minPrice: null
    };
  }

  submitData = data => {
    axios
      .post('/save', data)
      .then(res => {
        console.log('res', res);
      })
      .catch(e => {
        console.log('e', e);
      });
  };

  handleSubmit = () => {
    this.submitData(this.state);
    this.props.formOnSubmit(this.state);
  };
  handleChange = (event, index, value, name) => {
    console.log('here');
    this.setState({ [name]: value });
  };
  render() {
    const {
      brand,
      condition,
      display,
      emailId,
      feature,
      mobile,
      mrp,
      pincode,
      price,
      resolution,
      size,
      title,
      type,
      minPrice
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
            value={size}
            onChange={(event, index, value) =>
              this.handleChange(event, index, value, 'size')
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
            {resolutions}
          </SelectField>
          <br />
          <SelectField
            value={brand}
            onChange={(event, index, value) =>
              this.handleChange(event, index, value, 'brand')
            }
            floatingLabelText="Brand Name"
            floatingLabelFixed
            floatingLabelStyle={textStyle}
            hintStyle={textStyle}
            menuStyle={textStyle}
            labelStyle={textStyle}
            hintText="Brand Name"
          >
            {brands}
          </SelectField>
          <br />
          <SelectField
            value={display}
            onChange={(event, index, value) =>
              this.handleChange(event, index, value, 'display')
            }
            floatingLabelText="Display Technology"
            floatingLabelFixed
            floatingLabelStyle={textStyle}
            hintStyle={textStyle}
            menuStyle={textStyle}
            labelStyle={textStyle}
            hintText="Display Technology"
          >
            {techs}
          </SelectField>
          <br />
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
            {features}
          </SelectField>
          <br />
          <TextField
            id="adTitle"
            type="text"
            margin="normal"
            value={title}
            onChange={e => this.handleChange(e, null, e.target.value, 'title')}
            inputStyle={textStyle}
            floatingLabelText="Ad Title"
            floatingLabelStyle={textStyle}
            hintStyle={textStyle}
          />
          <br />
          <TextField
            id="price"
            type="text"
            margin="normal"
            value={price}
            inputStyle={textStyle}
            onChange={e => this.handleChange(e, null, e.target.value, 'price')}
            floatingLabelText="Price"
            floatingLabelStyle={textStyle}
            hintStyle={textStyle}
          />
          <br />
          <TextField
            id="minPrice"
            type="text"
            margin="normal"
            value={minPrice}
            inputStyle={textStyle}
            onChange={e =>
              this.handleChange(e, null, e.target.value, 'minPrice')
            }
            floatingLabelText="Min Price"
            floatingLabelStyle={textStyle}
            hintStyle={textStyle}
          />
          <br />
          <TextField
            id="mobileNumber"
            type="text"
            margin="normal"
            inputStyle={textStyle}
            value={mobile}
            onChange={e => this.handleChange(e, null, e.target.value, 'mobile')}
            floatingLabelText="Mobile Number"
            floatingLabelStyle={textStyle}
            hintStyle={textStyle}
          />
          <br />
          <TextField
            id="emailId"
            type="text"
            margin="normal"
            value={emailId}
            onChange={e =>
              this.handleChange(e, null, e.target.value, 'emailId')
            }
            inputStyle={textStyle}
            floatingLabelText="Email Id"
            floatingLabelStyle={textStyle}
            hintStyle={textStyle}
          />
          <br />
          <TextField
            id="pinCode"
            type="text"
            margin="normal"
            value={pincode}
            onChange={e =>
              this.handleChange(e, null, e.target.value, 'pincode')
            }
            inputStyle={textStyle}
            floatingLabelText="Pin Code"
            floatingLabelStyle={textStyle}
            hintStyle={textStyle}
          />
          <br />
          <TextField
            id="mrp"
            type="text"
            margin="normal"
            value={mrp}
            onChange={e => this.handleChange(e, null, e.target.value, 'mrp')}
            inputStyle={textStyle}
            floatingLabelText="MRP"
            floatingLabelStyle={textStyle}
            hintStyle={textStyle}
          />
          <br />
          <RaisedButton
            label="Submit"
            primary
            style={buttonStyle}
            onClick={this.handleSubmit}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Form;
