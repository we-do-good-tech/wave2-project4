import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Button } from 'shared/components';
import { FlexColumn } from 'shared/components/Flex/FlexColumn';
import theme from 'shared/style/theme';
import mapBg from '../../assets/images/map_bg.svg';
import mapPin from '../../assets/images/map_pin.svg';

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
  width: 60%;
  height: 60%;
  margin-top: 90px;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.text.title.fontSize};
  font-weight: ${({ theme }) => theme.text.title.fontWeight};
  color: ${({ theme }) => theme.text.title.color};
  line-height: ${({ theme }) => theme.text.title.lineHeight};
`;

const Content = styled.p`
  font-size: ${({ theme }) => theme.text.paragraph.fontSize};
  font-weight: ${({ theme }) => theme.text.paragraph.fontWeight};
  color: ${({ theme }) => theme.text.paragraph.color};
  line-height: ${({ theme }) => theme.text.paragraph.lineHeight};
  text-align: center;
`;

const ContinueBtn = styled(Button)`
  position: absolute;
  width: 160px;
  height: 50px;
  bottom: 25px;
  color: ${({ theme }) => theme.button.primary.normal.color};
  background: ${({ theme }) => theme.button.primary.normal.background};
  border: ${({ theme }) => theme.button.primary.normal.border};
  border-radius: 50px;

  &:hover {
    font-weight: ${({ theme }) => theme.button.primary.hover.fontWeight};
  }

  &:active {
    background: ${({ theme }) => theme.button.primary.active.background};
  }
`;

const MapPin = styled.div<{ index: number }>`
  position: absolute;
  left: ${({ theme, index }) => theme.mapPinIcons[index].position.left}%;
  top: ${({ theme, index }) => theme.mapPinIcons[index].position.top}%;
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
`;

const Homepage = () => {
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

  return (
    <Wrapper>
      {isModalOpen && (
        <GamesModal>
          <Container>
            <Title>מהם משחקים פראלימפיים</Title>
            <Content>
              משמעות המילה פראלימפי היא מקביל, כלומר המשחקים הפראלימפיים הם משחקים המקבילים למשחקים האולימפיים
            </Content>
          </Container>
          <ContinueBtn onClick={() => setIsModalOpen(false)}>המשך</ContinueBtn>
        </GamesModal>
      )}
      {theme.mapPinIcons.map((icon, index) => (
        <MapPin index={index} data-name={icon.title} key={index} onClick={(e) => handleOnClick(e)}>
          <h5>{icon.title}</h5>
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

export default Homepage;
