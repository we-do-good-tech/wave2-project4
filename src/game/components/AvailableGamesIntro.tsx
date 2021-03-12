import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { useParams } from 'react-router-dom';
import { Link, Flex } from 'shared/components/';
import { SpeechBubbleWrapper, SpeechBubbleBorder } from 'shared/components/SpeechBubble';
import theme from 'shared/style/theme';
import nir from 'assets/images/Nir.svg';
import shira from 'assets/images/Shira.svg';
import tomer from 'assets/images/Tomer.svg';

type Player = {
  name: string;
  path: string;
  image: string;
  bgColor: string;
};

const players: Player[] = [
  {
    name: 'תומר',
    path: 'tomer',
    image: tomer,
    bgColor: theme.colors.tomerBgGreen,
  },
  {
    name: 'ניר',
    path: 'nir',
    image: nir,
    bgColor: theme.colors.modalBackground,
  },
  {
    name: 'שירה',
    path: 'shira',
    image: shira,
    bgColor: theme.colors.shiraBgPurple,
  },
];

const Wrapper = styled(Flex).attrs({ dir: 'rtl' })`
  flex: 1;
`;

const PlayerContainer = styled(Flex)<{ bg?: string }>`
  background-color: ${(props) => props.bg};
  justify-content: space-between;
  align-items: flex-end;
  flex: 0 0 100%;
  max-width: 100%;
  max-height: 100%;
  position: relative;
  padding: 5%;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    border-radius: 50%;
    opacity: 0.1;
    width: 120%;
    height: 344px;
    left: -10%;
    bottom: -20%;
    z-index: 0;
    background: ${(props) => darken(0.3, props.bg!)};
  }
`;

const PlayerImg = styled.img`
  display: block;
  z-index: 1;
  max-width: 20%;
`;

const SpeechBubbleTitle = styled.div`
  font-size: 36px;
  font-weight: 600;
  padding-top: 40px;
  margin-bottom: 40px;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    font-size: 18px;
    line-height: 18px;
    padding-top: 20px;
    margin-bottom: 5px;
  }
`;

const SpeechBubbleText = styled.div`
  font-size: 25px;
  font-weight: 400;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    font-size: 13px;
  }
`;

const StyledSpeechBubbleWrapper = styled(SpeechBubbleWrapper)`
  padding: 70px;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    padding: 35px;
  }
`;

const StyledButton = styled(Link)`
  text-align: center;
  color: ${({ theme }: { theme: any }) => theme.button.primary.normal.color};
  background: ${({ theme }: { theme: any }) => theme.button.primary.normal.background};
  border: 2px solid ${({ theme }: { theme: any }) => theme.button.primary.normal.border};
  align-self: flex-end;
  z-index: 1;
  min-width: 191px;
  min-height: 47px;
  padding-bottom: 3px;
  font-size: 18px;
  font-weight: 400;
  margin: 0 15px;
  text-decoration: none;
  border-radius: 50px;
  cursor: pointer;
  outline: 0 !important;
  &:hover {
    font-weight: 600;
    color: ${({ theme }: { theme: any }) => theme.button.primary.hover.color};
    background: ${({ theme }: { theme: any }) => theme.button.primary.hover.background};
    border: 2px solid ${({ theme }: { theme: any }) => theme.button.primary.hover.border};
    text-decoration: none;
  }
  &:active {
    color: ${({ theme }: { theme: any }) => theme.button.primary.active.color};
    background: ${({ theme }: { theme: any }) => theme.button.primary.active.background};
    border: 2px solid ${({ theme }: { theme: any }) => theme.button.primary.active.border};
  }
  &:disabled {
    color: ${({ theme }: { theme: any }) => theme.button.primary.disabled.color};
    background: ${({ theme }: { theme: any }) => theme.button.primary.disabled.background};
    border: 2px solid ${({ theme }: { theme: any }) => theme.button.primary.disabled.border};
    cursor: default;
    font-weight: 400;
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    font-size: 12px;
    min-width: 95px;
    min-height: 24px;
  }
`;

const AvailableGamesIntro = () => {
  const playerPath = useParams<any>();

  const currentPlayer = players.find(({ path }: any) => path === playerPath.playerRoute);
  return (
    <Wrapper>
      <PlayerContainer bg={currentPlayer!.bgColor}>
        <StyledSpeechBubbleWrapper>
          <SpeechBubbleBorder />
          <SpeechBubbleTitle>
            {`באיזה משחקים פאראלימפיים אני יכול${currentPlayer!.path === 'shira' ? 'ה' : ''} לשחק?`}
          </SpeechBubbleTitle>
          <SpeechBubbleText>
            {`סמנו את ענפי הספורט בהם אני יכול${currentPlayer!.path === 'shira' ? 'ה' : ''} להשתתף`}
          </SpeechBubbleText>
        </StyledSpeechBubbleWrapper>
        <PlayerImg src={currentPlayer!.image} alt={currentPlayer!.name} />
        <StyledButton $isActiveItem={false} to={`/availableGames/${currentPlayer!.path}`}>
          המשך
        </StyledButton>
      </PlayerContainer>
    </Wrapper>
  );
};

export default AvailableGamesIntro;
