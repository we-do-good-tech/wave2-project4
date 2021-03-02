import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { useParams } from 'react-router-dom';
import { Link } from 'shared/components/index';
import speechBubble from 'assets/images/speechBubble.svg';
import SpeechBubble_border from 'assets/images/speechBubble_border.svg';
import Players from '../consts';

const Wrapper = styled.div.attrs({ dir: 'rtl' })`
  grid-area: 1/1/1/4;
  display: flex;
`;

const PlayerContainer = styled.div<{ bg?: string }>`
  background-color: ${(props) => props.bg};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  display: flex;
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

const PlayerImg = styled.img`
  display: block;
  z-index: 1;
  max-width: 20%;
`;

const SpeechBubble = styled.div`
  background: url(${speechBubble}) no-repeat;
  background-size: contain;
  position: absolute;
  height: 50%;
  width: 50%;
  bottom: 40%;
  left: 20%;
  padding: 70px 0;
  font-family: Assistant;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 33px;
  text-align: center;

  color: #092468;
`;
const SpeechBubbleBorder = styled.div`
  background: url(${SpeechBubble_border}) no-repeat;
  background-size: contain;
  position: absolute;
  height: 100%;
  width: 100%;
  right: 1%;
  top: 1%;
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
        <SpeechBubble>
          <SpeechBubbleBorder />
          היי אני {currentPlayer?.name} <br />
          ופה אני אספר לכם על המוגבלות שיש לי...
        </SpeechBubble>
        <PlayerImg src={currentPlayer?.images.hello} alt={currentPlayer?.name} />
        <StyledButton $isActiveItem={false} to={`/AvailbleActions/${currentPlayer?.path}`}>
          המשך
        </StyledButton>
      </PlayerContainer>
    </Wrapper>
  );
};

export default AvailbleActionsIntro;
