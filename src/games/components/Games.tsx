import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import FocusTrap from 'focus-trap-react';
import isEqual from 'lodash.isequal';
import { Button, FlexCenter, FlexColumn, FlexCenterMiddle } from 'shared/components';
import mapBg from 'assets/images/map_bg.svg';
import mapBgTop from 'assets/images/map_bg_top.svg';
import mapPin from 'assets/images/map_pin.svg';
import mapPinActive from 'assets/images/map_pin_active.svg';
import { ReactComponent as TooltipX } from 'assets/images/tooltip_x.svg';
import firebase from '../../firebase';
import mapPinIcons from '../consts';

const GamesBg = styled(FlexCenter)`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.games.background};
  align-items: flex-start;
`;

const sizeNormal = css`
  width: 100vw;
  height: calc(100vw / 2);
  min-width: 1280px;
  min-height: 640px;
`;

const sizeSmall = css`
  width: 100vh;
  height: calc(100vh / 2);
  min-width: 100vh;
  min-height: calc(100vh / 2);
  overflow: auto;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} and (orientation: landscape) {
    width: 100vw;
    height: calc(100vw / 2);
    min-width: 100vw;
    min-height: calc(100vw / 2);
  }
`;

const Wrapper = styled.div.attrs({ dir: 'rtl' })`
  position: relative;
  flex: 1;
  ${sizeNormal};
  background-image: url(${mapBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    ${sizeSmall};
  }
`;

const Pins = styled.div.attrs({ dir: 'rtl' })`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  flex: 1;
  ${sizeNormal};
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    ${sizeSmall};
  }
`;

const BgGames = styled.div.attrs({ dir: 'rtl' })`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  flex: 1;
  ${sizeNormal};
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    ${sizeSmall};
  }
`;

const BgTop = styled.div.attrs({ dir: 'rtl' })`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  flex: 1;
  ${sizeNormal};
  background-image: url(${mapBgTop});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    ${sizeSmall};
  }
`;

const TextArea = styled.p`
  white-space: pre-wrap;
  width: 100%;
  min-height: calc(100vh - 240px);
  max-height: calc(100vh - 240px);
  font-style: normal;
  font-size: ${({ theme }) => theme.text.paragraph.fontSize};
  font-weight: ${({ theme }) => theme.text.paragraph.fontWeight};
  color: ${({ theme }) => theme.text.paragraph.color};
  line-height: ${({ theme }) => theme.text.paragraph.lineHeight};
  text-align: center;

  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} and (orientation: landscape) {
    margin-top: -8px;
    width: 110%;
    font-size: 14px;
    line-height: 15px;
    min-height: calc(100vh - 120px);
    max-height: calc(100vh - 120px);
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} and (orientation: portrait) {
    width: 110%;
    font-size: 14px;
    line-height: 16px;
    min-height: calc(100vw - 120px);
    max-height: calc(100vw - 120px);
  }
`;

const GamesModal = styled(FlexColumn)`
  position: relative;
  align-items: center;
  width: 60%;
  height: 80%;
  margin: 50px auto;
  background: ${({ theme }) => theme.modal.background};
  border: 4px solid ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  z-index: 100;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} and (orientation: landscape) {
    border: 2px solid ${({ theme }) => theme.colors.white};
    width: 80vw;
    margin: 10px auto;
    height: 68vh;
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} and (orientation: portrait) {
    border: 2px solid ${({ theme }) => theme.colors.white};
    width: 83vh;
    margin: 20px auto;
    height: 73vw;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 60%;
  margin-top: 90px;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    margin-top: 15px;
  }
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.text.title.fontSize};
  font-weight: ${({ theme }) => theme.text.title.fontWeight};
  color: ${({ theme }) => theme.text.title.color};
  line-height: ${({ theme }) => theme.text.title.lineHeight};
  cursor: default;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    font-size: 20px;
    line-height: 20px;
  }
`;

const ContinueBtn = styled(Button)`
  position: absolute;
  width: 160px;
  height: 50px;
  bottom: 25px;
  color: ${({ theme }) => theme.button.primary.normal.color};
  background: ${({ theme }) => theme.button.primary.normal.background};
  border: 2px solid ${({ theme }) => theme.button.primary.normal.border};
  border-radius: 50px;
  &:hover {
    font-weight: ${({ theme }) => theme.button.primary.hover.fontWeight};
    border: 2px solid ${({ theme }) => theme.button.primary.hover.border};
  }

  &:active {
    background: ${({ theme }) => theme.button.primary.active.background};
    border: 2px solid ${({ theme }) => theme.button.primary.active.border};
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    width: 100px;
    height: 30px;
    bottom: 10px;
  }
`;

const MapPin = styled.button<{ index: number }>`
  position: absolute;
  left: ${({ index }) => mapPinIcons[index].position.left}%;
  top: ${({ index }) => mapPinIcons[index].position.top}%;
  font-size: 20px;
  font-weight: 400;
  border: none;
  padding: 0 10px;
  color: ${({ theme }) => theme.games.mapPinColor};
  width: 90px;
  height: 125px;
  background: url(${mapPin}) no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  vertical-align: middle;
  transition: all 0.6s;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.2);
  }
  h3 {
    padding-bottom: 18px;
    @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
      font-size: 11px;
      line-height: 15px;
      padding-bottom: 8px;
    }
  }
  &:active {
    background: url(${mapPinActive}) no-repeat;
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    width: 50px;
    height: 72px;
    top: ${({ index }) => mapPinIcons[index].position.top - 5}%;
  }
`;

const MapPinModal = styled.div<{ left: number; top: number }>`
  position: absolute;
  z-index: 501;
  left: ${({ left }) => left}%;
  top: ${({ top }) => top}%;
  font-size: 20px;
  font-weight: 400;
  padding: 0 10px;
  color: ${({ theme }) => theme.games.mapPinModalColor};
  width: 90px;
  height: 125px;
  background: url(${mapPinActive}) no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  vertical-align: middle;
  transition: all 0s;
  transform: scale(1.2);
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    padding-bottom: 18px;
    @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
      font-size: 11px;
      line-height: 15px;
      padding-bottom: 8px;
    }
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    width: 50px;
    height: 72px;
    top: ${({ top }) => top - 5}%;
  }
`;

const MapPinModalText = styled.h3`
  line-height: 20px;
  font-size: 20px;
`;

const popup = keyframes`
  from {opacity: 0; transform: scale(0)},
  to {oacity: 1, transform: scale(1)}
`;

const GameTooltip = styled(FlexColumn)<{ left: number }>`
  align-items: flex-end;
  left: calc(${({ left }) => left}% - 180px);
  top: calc(50% - 260px);
  position: absolute;
  border: 4px solid ${({ theme }) => theme.games.gameTooltipBorder};
  border-radius: 20px;
  padding: 30px 12px 0px;
  width: 360px;
  height: 520px;
  color: ${({ theme }) => theme.games.gameTooltipColor};
  font-size: ${({ theme }) => theme.text.title.fontSize};
  text-align: center;
  background: ${({ theme }) => theme.modal.background};
  animation: ${popup} 0.5s;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    border: 2px solid #fff;
    padding: 8px 12px 0px;
    left: calc(${({ left }) => left}% - 90px);
    top: calc(50% - 110px);
    width: 180px;
    height: 210px;
  }
`;

const GameTooltipHeader = styled.div`
  width: 100%;
  font-size: 25px;
  text-align: right;
  padding: 10px 10px 0;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    font-size: 12px;
    line-height: 13px;
    padding: 3px 3px 0;
  }
`;

const GameTooltipText = styled.div.attrs({ dir: 'rtl' })`
  width: 100%;
  color: ${({ theme }) => theme.games.gameTooltipTextColor};
  font-size: 20px;
  text-align: right;
  line-height: 25px;
  padding: 0 10px;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    font-size: 10px;
    line-height: 10px;
    padding: 0;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -33px;
  right: -33px;
  width: 63px;
  height: 63px;
  color: ${({ theme }) => theme.games.closeButtonColor};
  background: radial-gradient(50% 50% at 50% 50%, #7d0396 33.38%, #4e025d 100%);
  border: 4px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  animation: ${popup} 0.8s;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    border: 2px solid #fff;
    top: -17px;
    right: -17px;
    width: 31px;
    height: 31px;
  }
`;

const MapPinText = styled.h3`
  cursor: pointer;
  line-height: 20px;
  font-size: 20px;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
`;

const GameModal = styled.div`
  background: rgba(0, 0, 0, 0.85);
  position: absolute;
  z-index: 4;
  ${sizeNormal};
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    ${sizeSmall};
  }
`;

const GameFixedModal = styled.div`
  position: absolute;
  z-index: 5;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} and (orientation: landscape) {
    left: 50%;
    top: 0;
    transform: translate(-50%, 0);
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} and (orientation: portrait) {
    top: 50%;
    left: -1.6%;
    transform: translate(-1.6%, -50%);
  }
  ${sizeNormal};
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    ${sizeSmall};
  }
`;

const ModalImageWrapper = styled(FlexCenterMiddle)`
  width: 327px;
  height: 207px;
  border: 2px solid #fff;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    width: 152px;
    height: 96px;
  }
`;

const Games = () => {
  const gamesRef = firebase.database().ref('games');
  const [gamesHeader, setGAmesHeader] = useState('');
  const [gamesDescription, setGAmesDescription] = useState('');
  const [sports, setSports] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isGameModal, setIsGameModal] = useState({
    open: false,
    selectedGame: { name: '', description: '', image: '' },
  });
  const [gameConsts, setGameConsts] = useState<any>(undefined);

  const handleOnClick = (e: any) => {
    const selectedGame = sports.filter((g: any) => g.name === e.target.dataset.name)[0];
    const selectedConsts = mapPinIcons.filter((g: any) => g.title === e.target.dataset.name)[0];
    setGameConsts(selectedConsts);
    setIsGameModal({
      open: true,
      selectedGame,
    });
  };

  const handleCloseBtn = () => {
    setIsGameModal({
      open: false,
      selectedGame: { name: '', description: '', image: '' },
    });
  };

  useEffect(() => {
    if (!sports) setSports([]);
    gamesRef.once('value').then((snapshot: any) => {
      setGAmesHeader(snapshot.val()?.gamesHeader || '');
      setGAmesDescription(snapshot.val()?.gamesDescription || '');
      if (!isEqual(sports, snapshot.val()?.sports) && snapshot.val()?.sports) setSports(snapshot.val()?.sports);
    });
  }, [gamesRef, sports]);

  return (
    <>
      <GamesBg>
        <Wrapper>
          <BgGames>
            {mapPinIcons.map((obj: any, index: number) => {
              if (obj.title === 'אופניים זוגיים טנדם') return;
              return <div key={index}>{obj.iconBg}</div>;
            })}
          </BgGames>
          <BgTop />
          {isModalOpen && (
            <GamesModal>
              <Container>
                <Title>{gamesHeader}</Title>
                <TextArea> {gamesDescription.toString()} </TextArea>
              </Container>
              <ContinueBtn onClick={() => setIsModalOpen(false)}>המשך</ContinueBtn>
            </GamesModal>
          )}
          <Pins>
            {sports.map((icon: any, index: number) => (
              <MapPin index={index} data-name={icon.name} key={index} onClick={(e) => handleOnClick(e)}>
                <MapPinText data-name={icon.name}>{icon.name}</MapPinText>
              </MapPin>
            ))}
          </Pins>
        </Wrapper>
      </GamesBg>
      {isGameModal.open && (
        <GameModal>
          <FocusTrap active={isGameModal.open}>
            <GameFixedModal>
              <GameTooltip left={gameConsts.left}>
                <ModalImageWrapper>
                  <ModalImage src={isGameModal.selectedGame.image} alt={isGameModal.selectedGame.name} />
                </ModalImageWrapper>
                <GameTooltipHeader>{isGameModal.selectedGame.name}</GameTooltipHeader>
                <GameTooltipText>{isGameModal.selectedGame.description}</GameTooltipText>
                <CloseBtn onClick={handleCloseBtn}>
                  <TooltipX />
                </CloseBtn>
              </GameTooltip>
              {gameConsts.icon}
              <MapPinModal left={gameConsts.position.left} top={gameConsts.position.top}>
                <MapPinModalText>{isGameModal.selectedGame.name}</MapPinModalText>
              </MapPinModal>
            </GameFixedModal>
          </FocusTrap>
        </GameModal>
      )}
    </>
  );
};

export default Games;
