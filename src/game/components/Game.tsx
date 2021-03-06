import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import { flexColumn, flexCenterMiddle } from 'shared/components/Flex';
import Players, { Instruction } from '../consts';
import AvailbleActionsIntro from './AvailbleActionsIntro';

const Wrapper = styled.ul.attrs({ dir: 'rtl' })`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  position: relative;
  padding: 0;
  margin: 0;
`;

const PlayerContainer = styled.li<{ bg?: string }>`
  ${flexCenterMiddle};
  background-color: ${(props) => props.bg};
`;

const PlayerBtn = styled.div<{ bg?: string }>`
  ${flexCenterMiddle};
  margin: 0 auto;
  background-color: ${(props) => props.bg};
  border: none;
  color: white;
  z-index: 100;
  border-radius: 20px;
  font-style: normal;
  outline: none !important;
  font-weight: normal;
  font-size: 40px;
  line-height: 44px;
  margin-bottom: 2%;
  margin-top: 1%;
  width: 65%;
  height: 12.5%;
  cursor: normal;
  transition: 0.2s border ease-in-out;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    font-size: 20px;
  }
`;

const PlayerImg = styled(motion.img)`
  margin: auto auto 0 auto;
  display: block;
  max-width: 65%;
  transition: 0.2s all;
`;

const PlayerWrapper = styled(Link)`
  ${flexColumn};
  width: fit-content;
  height: 90%;
  margin: auto auto 0 auto;
  min-width: 65%;
  max-width: 75%;
  outline: none !important;
  &:hover {
    text-decoration: none;
  }
  &:hover > ${PlayerImg}, &:focus > ${PlayerImg} {
    cursor: pointer;
    transition: 0.1s all;
    transform: scale(1.1) !important;
  }
  &:hover > ${PlayerBtn}, &:focus > ${PlayerBtn} {
    border: 3px solid #ffffff;
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: 0.2s border ease-in-out;
  }
`;

const Game = () => {
  const { path, url } = useRouteMatch();
  return (
    <Wrapper>
      <Switch>
        <Route exact path={path}>
          <Instruction> בחרו דמות </Instruction>
          {Players.map((player, index) => (
            <PlayerContainer key={index} bg={player.bgColor}>
              <PlayerWrapper to={`${url}/${player.path}`}>
                <PlayerImg src={player.images.hello} alt={player.name} initial={{ scale: 0 }} animate={{ scale: 1 }} />
                <PlayerBtn bg={player.btnColor}>{player.name}</PlayerBtn>
              </PlayerWrapper>
            </PlayerContainer>
          ))}
        </Route>
        <Route path={`${path}/:playerRoute`}>
          <AvailbleActionsIntro />
        </Route>
      </Switch>
    </Wrapper>
  );
};

export default Game;
