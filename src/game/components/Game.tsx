import React from 'react';
import styled from 'styled-components';
import theme from 'shared/style/theme';
import nir from 'assets/images/Nir.svg';
import shira from 'assets/images/Shira.svg';
import tomer from 'assets/images/Tomer.svg';

type Player = {
  btnColor: string;
  bgColor: string;
  name: string;
  image: string;
};

const players: Player[] = [
  { btnColor: theme.colors.tomerActionYellow, bgColor: theme.colors.tomerBgGreen, name: 'תומר', image: tomer },
  { btnColor: theme.colors.nirActionPurple, bgColor: theme.colors.modalBackground, name: 'ניר', image: nir },
  { btnColor: theme.colors.shiraActionPuprle, bgColor: theme.colors.shiraBgPurple, name: 'שירה', image: shira },
];

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
  flex-direction: column;
`;

const PlayerImg = styled.img`
  margin: auto auto 0 auto;
  display: block;
  height: 65%;
`;

const PlayerBtn = styled.button<{ bg?: string }>`
  margin: 0 auto;
  background-color: ${(props) => props.bg};
  border: none;
  color: white;
  border-radius: 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 44px;
  margin-bottom: 10px;
  margin-top: 10px;
  width: 252px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: normal;
`;

const Instruction = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.darkMagenta};
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 39px;
  width: 523px;
  height: 71px;
  font-weight: 600;
  font-size: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #ffffff;
  grid-area: 1 / 2;
  top: 3%;
`;

const Game = () => (
  <Wrapper>
    <Instruction> בחרו דמות </Instruction>
    {players.map((player, index) => (
      <PlayerContainer key={index} bg={player.bgColor}>
        <PlayerImg src={player.image} alt={player.name} />
        <PlayerBtn bg={player.btnColor}>{player.name}</PlayerBtn>
      </PlayerContainer>
    ))}
  </Wrapper>
);

export default Game;
