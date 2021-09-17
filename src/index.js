import {
  createTheme,
  CssBaseline,
  MuiThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#11cb5f',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={responsiveFontSizes(theme)}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
