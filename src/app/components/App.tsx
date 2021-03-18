import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Game from 'game';
import AvailableGames from 'game/components/AvailableGames';
import AvailableGamesIntro from 'game/components/AvailableGamesIntro';
import AvailbleActions from 'game/components/AvailbleActions';
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
        <Route path="/availableGames/:playerRoute">
          <AvailableGames />
        </Route>
        <Route path="/AvailbleActions/:playerRoute">
          <AvailbleActions />
        </Route>
        <Route path="/availableGamesIntro/:playerRoute">
          <AvailableGamesIntro />
        </Route>
        <Route path="/team/:playerRoute">
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
