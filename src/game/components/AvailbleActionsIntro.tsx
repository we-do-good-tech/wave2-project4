import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { useParams } from 'react-router-dom';
import { Link, SkipLink, SpeechBubbleWrapper, SpeechBubbleBorder, Flex } from 'shared/components';
import Players from '../consts';

const Wrapper = styled(Flex).attrs({ dir: 'rtl' })`
  grid-area: 1/1/1/4;
`;

const PlayerContainer = styled(Flex)<{ bg?: string }>`
  background-color: ${(props) => props.bg};
  justify-content: space-between;
  align-items: flex-end;
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  padding: 50px 140px;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    border-radius: 50%;
    opacity: 0.1;
    width: 120%;
    height: 52%;
    left: -10%;
    bottom: -20%;
    z-index: 0;
    background: ${(props) => darken(0.3, props.bg!)};
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilBig} {
    padding: 110px;
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    padding: 30px 90px;
  }
`;

const StyledSpeechBubbleWrapper = styled(SpeechBubbleWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
  @media ${({ theme }) => theme.typing.mediaRules.untilMedium} {
    font-size: 22px;
    line-height: 120%;
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    font-size: 12px;
    line-height: 110%;
  }
`;

const PlayerImg = styled.img`
  display: block;
  z-index: 1;
  max-width: 20%;
  @media ${({ theme }) => theme.typing.mediaRules.untilMedium} {
    max-width: 25%;
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
  outline: none !important;
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
  &:focus {
    font-weight: 700;
    border: 3px solid ${({ theme }) => theme.button.primary.hover.border};
    background: ${({ theme }) => theme.button.primary.active.background};
  }
  &:disabled {
    color: ${({ theme }: { theme: any }) => theme.button.primary.disabled.color};
    background: ${({ theme }: { theme: any }) => theme.button.primary.disabled.background};
    border: 2px solid ${({ theme }: { theme: any }) => theme.button.primary.disabled.border};
    cursor: default;
    font-weight: 400;
  }
`;

const AvailbleActionsIntro = () => {
  const playerPath = useParams<any>();

  const currentPlayer = Players.find(({ path }: any) => path === playerPath.playerRoute);

  return (
    <Wrapper>
      <SkipLink $isActiveItem={false} to={`/availableGamesIntro/${currentPlayer!.path}`}>
        מעבר למשחקים
      </SkipLink>
      <PlayerContainer bg={currentPlayer?.bgColor}>
        <StyledSpeechBubbleWrapper>
          <SpeechBubbleBorder />
          היי אני {currentPlayer!.name} <br />
          {currentPlayer!.text}
        </StyledSpeechBubbleWrapper>
        <PlayerImg src={currentPlayer!.images.hello[0]} alt={currentPlayer?.name} />

        <StyledButton $isActiveItem={false} to={`/AvailbleActions/${currentPlayer?.path}`}>
          המשך
        </StyledButton>
      </PlayerContainer>
    </Wrapper>
  );
};

export default AvailbleActionsIntro;
