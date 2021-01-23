import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from 'homepage';
import Information from 'information';
import Container from './Container';

const App = () => (
  <Container>
    <Switch>
      <Route path="/information">
        <Information />
      </Route>
      <Route path="/" exact>
        <Homepage />
      </Route>
    </Switch>
  </Container>
);

export default App;
