import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Game from 'game';
import Homepage from 'homepage';
import Information from 'information';
import Team from 'team';
import Container from './Container';

const App = () => (
  <Container>
    <Switch>
      <Route path="/information">
        <Information />
      </Route>
      <Route path="/game">
        <Game />
      </Route>
      <Route path="/team">
        <Team />
      </Route>
      <Route path="/" exact>
        <Homepage />
      </Route>
    </Switch>
  </Container>
);

export default App;
