import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from 'shared/style/global';
import theme from 'shared/style/theme';
import App from './app';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root'),
);
