import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Game from 'game';
import Games from 'games';
import Homepage from 'homepage';
import Information from 'information';
import Nihul from 'nihul';
import Team from 'team';
import Container from './Container';

const { CloudinaryContext } = require('cloudinary-react');

const App = () => (
  <CloudinaryContext cloudName="dhocrufiz">
    <Container>
      <Switch>
        <Route path="/nihul">
          <Nihul />
        </Route>
        <Route path="/information">
          <Information />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/games">
          <Games />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/" exact>
          <Homepage />
        </Route>
      </Switch>
    </Container>
  </CloudinaryContext>
);

export default App;
