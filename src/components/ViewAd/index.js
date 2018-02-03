import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/* eslint-disable */
const viewAd = (props: any) => (
  <MuiThemeProvider>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>Spec</TableHeaderColumn>
          <TableHeaderColumn>Value</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.keys(props.data).map(key => (
          <TableRow>
            <TableRowColumn>{key}</TableRowColumn>
            <TableRowColumn>{props.data[key]}</TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </MuiThemeProvider>
);

export default viewAd;
