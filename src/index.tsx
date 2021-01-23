import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from 'shared/style/global';
import theme from 'shared/style/theme';
import App from './app';
// import firebase from './firebase';

// const itemsRef = firebase.database().ref('items');

// itemsRef.on('value', (snapshot: any) => {
//   console.log(snapshot.val());
// });

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root'),
);
