import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import isEqual from 'lodash.isequal';
import { Button } from 'shared/components';
import { FlexColumn } from 'shared/components/Flex/FlexColumn';
import mapBg from 'assets/images/map_bg.svg';
import mapPin from 'assets/images/map_pin.svg';
import firebase from '../../firebase';
import mapPinIcons from '../consts';

const Wrapper = styled.div.attrs({ dir: 'rtl' })`
  position: relative;
  flex: 1;
  width: 100%;
  height: 100%;
  background-image: url(${mapBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: calc(100vh - 540px);
  max-height: calc(100vh - 540px);
  background: transparent;
  border: none;
  outline: 0;
  resize: none;
  font-stretch: ultra-condensed;
  cursor: default;
  font-size: ${({ theme }) => theme.text.paragraph.fontSize};
  font-weight: ${({ theme }) => theme.text.paragraph.fontWeight};
  color: ${({ theme }) => theme.text.paragraph.color};
  line-height: ${({ theme }) => theme.text.paragraph.lineHeight};
  text-align: center;
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
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 60%;
  margin-top: 90px;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.text.title.fontSize};
  font-weight: ${({ theme }) => theme.text.title.fontWeight};
  color: ${({ theme }) => theme.text.title.color};
  line-height: ${({ theme }) => theme.text.title.lineHeight};
  cursor: default;
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
  outline: 0 !important;
  &:hover {
    font-weight: ${({ theme }) => theme.button.primary.hover.fontWeight};
    border: 2px solid ${({ theme }) => theme.button.primary.hover.border};
  }

  &:active {
    background: ${({ theme }) => theme.button.primary.active.background};
    border: 2px solid ${({ theme }) => theme.button.primary.active.border};
  }
`;

const MapPin = styled.div<{ index: number }>`
  position: absolute;
  left: ${({ index }) => mapPinIcons[index].position.left}%};
  top: ${({ index }) => mapPinIcons[index].position.top}%};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
  color: #fff;
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
  h5 {
    padding-bottom: 12px;
  }
`;

const popup = keyframes`
  from {opacity: 0; transform: scale(0)},
  to {oacity: 1, transform: scale(1)}
`;

const GameTooltip = styled.div`
  position: absolute;
  // left: 50%;
  // top: 50%;
  // transform: translate(-50%, -50%);
  width: 300px;
  height: 500px;
  font-size: ${({ theme }) => theme.text.title.fontSize};
  text-align: center;
  background: ${({ theme }) => theme.modal.background};
  animation: ${popup} 0.5s;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: -33px;
  right: -33px;
  width: 63px;
  height: 63px;
  background: radial-gradient(50% 50% at 50% 50%, #7d0396 33.38%, #4e025d 100%);
  border: 4px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  animation: ${popup} 0.8s;
  outline: 0 !important;
`;

const Games = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isGameModal, setIsGameModal] = useState({ open: false, selectedGame: '' });

  const handleOnClick = (e: any) => {
    setIsGameModal({
      open: true,
      selectedGame: e.target.dataset.name,
    });
  };

  const handleCloseBtn = () => {
    setIsGameModal({
      open: false,
      selectedGame: '',
    });
  };

  const gamesRef = firebase.database().ref('games');
  const [gamesHeader, setGAmesHeader] = useState('');
  const [gamesDescription, setGAmesDescription] = useState('');
  const [sports, setSports] = useState([]);

  useEffect(() => {
    if (!sports) setSports([]);
    gamesRef.once('value').then((snapshot: any) => {
      setGAmesHeader(snapshot.val()?.gamesHeader || '');
      setGAmesDescription(snapshot.val()?.gamesDescription || '');
      if (!isEqual(sports, snapshot.val()?.sportNames) && snapshot.val()?.sportNames)
        setSports(snapshot.val()?.sportNames);
    });
  }, [gamesRef, sports]);

  return (
    <Wrapper>
      {isModalOpen && (
        <GamesModal>
          <Container>
            <Title>{gamesHeader}</Title>
            <TextArea readOnly value={gamesDescription} />
          </Container>
          <ContinueBtn onClick={() => setIsModalOpen(false)}>המשך</ContinueBtn>
        </GamesModal>
      )}
      {sports.map((icon: string, index: number) => (
        <MapPin index={index} data-name={icon} key={index} onClick={(e) => handleOnClick(e)}>
          <h5>{icon}</h5>
        </MapPin>
      ))}
      {isGameModal.open && (
        <div style={{ position: 'relative', width: '100%', height: '100%', background: 'rgba(0, 0, 0, .8)' }}>
          <div
            style={{
              position: 'absolute',
              width: '300px',
              height: '500px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <GameTooltip
              style={{
                width: '300px',
                height: '500px',
                background: '#AFD9E3',
                border: '4px solid #fff',
                borderRadius: '20px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '80%',
                  height: '30%',
                  border: '2px solid #fff',
                  margin: '30px auto',
                }}
              >
                Image
              </div>
              {isGameModal.selectedGame}
            </GameTooltip>
            <CloseBtn onClick={handleCloseBtn}>X</CloseBtn>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Games;
