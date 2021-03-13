import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import Players, { Instruction } from '../consts';
import AvailbleActionsIntro from './AvailbleActionsIntro';

const Wrapper = styled.div.attrs({ dir: 'rtl' })`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  position: relative;
`;

const PlayerContainer = styled.div<{ bg?: string }>`
  background-color: ${(props) => props.bg};
  display: flex;
`;

const PlayerBtn = styled.button<{ bg?: string }>`
  margin: 0 auto;
  background-color: ${(props) => props.bg};
  border: none;
  color: white;
  z-index: 100;
  border-radius: 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 44px;
  margin-bottom: 2%;
  margin-top: 1%;
  width: 65%;
  height: 12.5%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: fit-content;
  height: 90%;
  margin: auto auto 0 auto;
  display: flex;
  flex-direction: column;
  min-width: 65%;
  max-width: 75%;
  &:hover {
    text-decoration: none;
  }
  &:hover > ${PlayerImg} {
    cursor: pointer;
    transition: 0.1s all;
    transform: scale(1.1) !important;
  }
  &:hover > ${PlayerBtn} {
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
                <PlayerImg
                  src={player.images.hello[0]}
                  alt={player.name}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                />
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
