import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { useParams } from 'react-router-dom';
import { Flex } from 'shared/components/Flex';
import { Link } from 'shared/components/index';
import { SpeechBubbleWrapper, SpeechBubbleBorder } from 'shared/components/SpeechBubble';
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
    height: 344px;
    left: -10%;
    bottom: -20%;
    z-index: 0;
    background: ${(props) => darken(0.3, props.bg!)};
  }
`;

const StyledSpeechBubbleWrapper = styled(SpeechBubbleWrapper)`
  padding: 70px 0;
`;

const PlayerImg = styled.img`
  display: block;
  z-index: 1;
  max-width: 20%;
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
`;

const AvailbleActionsIntro = () => {
  const playerPath = useParams<any>();

  const currentPlayer = Players.find(({ path }: any) => path === playerPath.playerRoute);

  return (
    <Wrapper>
      <PlayerContainer bg={currentPlayer?.bgColor}>
        <StyledSpeechBubbleWrapper>
          <SpeechBubbleBorder />
          היי אני {currentPlayer?.name} <br />
          ופה אני אספר לכם על המוגבלות שיש לי...
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
