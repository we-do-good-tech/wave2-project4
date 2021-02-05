import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import About from './panels/About';
import Games from './panels/Games';
import Info from './panels/Info';
import Sports from './panels/Sports';
import Team from './panels/Team';
import TopBar from './TopBar';

const Wrapper = styled.div`
  dispaly: flex;
  flex-direction: column;
  flex: 1;
  margin: 22px 32px;
  background: ${({ theme }) => theme.page.nihul.background};
  border: 4px solid ${({ theme }) => theme.page.nihul.border};
  box-sizing: border-box;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;

const Header = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  line-height: 32.7px;
  color: ${({ theme }) => theme.page.nihul.header.color};
  margin-top: 32px;
  margin-bottom: 32px;
  direction: rtl;
`;

const Nihul = () => (
  <Wrapper>
    <Header>ברוכים הבאים, מה תרצו לערוך?</Header>
    <TopBar />
    <Switch>
      <Route component={About} path="/nihul/about" />
      <Route component={Games} path="/nihul/games" />
      <Route component={Info} path="/nihul/info" />
      <Route component={Team} path="/nihul/team" />
      <Route component={Sports} path="/nihul/sports" />
    </Switch>
  </Wrapper>
);

export default Nihul;
