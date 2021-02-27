import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import isEqual from 'lodash.isequal';
import { useParams } from 'react-router-dom';
import { Link, VideoPlayer } from 'shared/components';
import { FlexColumn } from 'shared/components/Flex/FlexColumn';
import { ReactComponent as MapPinX } from 'assets/images/map_pin_x.svg';
import { ReactComponent as Nir } from 'assets/images/NirAvailable.svg';
import { ReactComponent as NirWin } from 'assets/images/NirAvailableWin.svg';
import { ReactComponent as Shira } from 'assets/images/ShiraAvailable.svg';
import { ReactComponent as ShiraWin } from 'assets/images/ShiraAvailableWin.svg';
import { ReactComponent as Tomer } from 'assets/images/TomerAvailable.svg';
import { ReactComponent as TomerWin } from 'assets/images/TomerAvailableWin.svg';
import mapBg from '../../assets/images/map_bg.svg';
import mapPin from '../../assets/images/map_pin.svg';
import mapPinActive from '../../assets/images/map_pin_active.svg';
import firebase from '../../firebase';
import mapPinIcons from '../../games/consts';

type Player = {
  name: string;
  path: string;
  icon: any;
  iconWin: any;
  video: string;
};

const StyledMapPinX = styled(MapPinX)`
  position: absolute;
  top: 20%;
`;
const IconWrapper = styled.div`
  position: absolute;
  height: 60%;
  right: -2%;
  bottom: 5%;
  z-index: 101;
  pointer-events: none;
`;

const StyledTomer = styled(Tomer)`
  height: 100%;
`;

const StyledNir = styled(Nir)`
  height: 100%;
`;

const StyledShira = styled(Shira)`
  height: 100%;
`;

const StyledTomerWin = styled(TomerWin)`
  height: 100%;
`;

const StyledNirWin = styled(NirWin)`
  height: 100%;
`;

const StyledShiraWin = styled(ShiraWin)`
  height: 100%;
`;

const players: Player[] = [
  {
    name: 'תומר',
    path: 'tomer',
    icon: <StyledTomer />,
    iconWin: <StyledTomerWin />,
    video: 'https://res.cloudinary.com/dhocrufiz/video/upload/v1614432570/shira_btqbgt.mp4',
  },
  {
    name: 'ניר',
    path: 'nir',
    icon: <StyledNir />,
    iconWin: <StyledNirWin />,
    video: 'https://res.cloudinary.com/dhocrufiz/video/upload/v1614432570/shira_btqbgt.mp4',
  },
  {
    name: 'שירה',
    path: 'shira',
    icon: <StyledShira />,
    iconWin: <StyledShiraWin />,
    video: 'https://res.cloudinary.com/dhocrufiz/video/upload/v1614432570/shira_btqbgt.mp4',
  },
];

const GamesBg = styled.div`
  width: 100%;
  height: 100%;
  background: #8ccb71;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
`;

const Wrapper = styled.div.attrs({ dir: 'rtl' })`
  position: relative;
  flex: 1;
  width: 100%;
  height: 100%;
  min-width: 1280px;
  min-height: 724px;
  background-image: url(${mapBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    min-width: 100vw;
    min-height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
  }
`;

const GamesModal = styled(FlexColumn)`
  position: relative;
  align-items: center;
  width: 80%;
  height: 92%;
  margin: 20px auto;
  background: ${({ theme }) => theme.modal.background};
  border: 4px solid ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  z-index: 100;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    width: 80vw;
    margin: 10px auto;
    height: 70vh;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 60%;
  margin-top: 10px;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    margin-top: 15px;
  }
`;

const Title = styled.h2`
  margin-top: 15px;
  font-size: ${({ theme }) => theme.text.title.fontSize};
  font-weight: ${({ theme }) => theme.text.title.fontWeight};
  color: ${({ theme }) => theme.text.title.color};
  line-height: ${({ theme }) => theme.text.title.lineHeight};
  cursor: default;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    font-size: 20px;
  }
`;

const LinksTitle = styled.h2`
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: ${({ theme }) => theme.text.linksTitle.fontSize};
  font-weight: ${({ theme }) => theme.text.linksTitle.fontWeight};
  color: ${({ theme }) => theme.text.linksTitle.color};
  line-height: ${({ theme }) => theme.text.linksTitle.lineHeight};
  cursor: default;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    font-size: 20px;
  }
`;

const StyledLink = styled(Link)`
  min-width: 302px;
  min-height: 106px;
  max-width: 302px;
  max-height: 106px;
  margin: 0 20px;
  padding: 0 30px;
  text-decoration: none;
  font-size: 24px;
  font-weight: ${({ $isActiveItem }: { $isActiveItem: boolean }) => ($isActiveItem ? 700 : 400)};
  color: ${({ theme, $isActiveItem }: { theme: any; $isActiveItem: boolean }) =>
    $isActiveItem ? theme.linkBig.primary.active.color : theme.linkBig.primary.normal.color};
  background: ${({ theme, $isActiveItem }: { theme: any; $isActiveItem: boolean }) =>
    $isActiveItem ? theme.linkBig.primary.active.background : theme.linkBig.primary.normal.background};
  border: 1px solid ${({ theme }) => theme.linkBig.primary.normal.border};
  border-radius: 50px;
  text-align: center;
  &:hover {
    font-weight: 700;
    text-decoration: none;
    background: ${({ theme, $isActiveItem }: { theme: any; $isActiveItem: boolean }) =>
      $isActiveItem ? theme.linkBig.primary.active.background : theme.linkBig.primary.hover.background};
    color: ${({ theme, $isActiveItem }: { theme: any; $isActiveItem: boolean }) =>
      $isActiveItem ? theme.linkBig.primary.active.color : theme.linkBig.primary.hover.color};
  }
  &:focus {
    font-weight: 700;
    text-decoration: none;
    background: ${({ theme }: { theme: any }) => theme.linkBig.primary.active.background};
    color: ${({ theme }: { theme: any }) => theme.linkBig.primary.active.color};
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    min-width: 95px;
    max-height: 25px;
  }
`;

const MapPin = styled.div<{ index: number }>`
  position: absolute;
  left: ${({ index }) => mapPinIcons[index].position.left}%;
  top: ${({ index }) => mapPinIcons[index].position.top}%;
  font-size: 20px;
  font-weight: 400;
  padding: 0 10px;
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

const MapPinIncorrect = styled.div<{ index: number }>`
  position: absolute;
  left: ${({ index }) => mapPinIcons[index].position.left}%;
  top: ${({ index }) => mapPinIcons[index].position.top}%;
  font-size: 20px;
  font-weight: 400;
  padding: 0 10px;
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
  h5 {
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
    top: ${({ index }) => mapPinIcons[index].position.top - 5}%;
  }
`;

const MapPinCorrect = styled.div<{ index: number }>`
  cursor: default;
  position: absolute;
  left: ${({ index }) => mapPinIcons[index].position.left}%;
  top: ${({ index }) => mapPinIcons[index].position.top}%;
  font-size: 20px;
  font-weight: 400;
  padding: 0 10px;
  color: #fff;
  width: 90px;
  height: 125px;
  background: url(${mapPinActive}) no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  vertical-align: middle;
  transition: all 0.6s;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1.2);
  h5 {
    cursor: default;
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
    top: ${({ index }) => mapPinIcons[index].position.top - 5}%;
  }
`;

const LinksContainer = styled.div`
  display: flex;
`;

const MapPinText = styled.h5`
  cursor: pointer;
  line-height: 20px;
`;

const Games = () => {
  const gamesRef = firebase.database().ref('games');
  //   const [gamesHeader, setGAmesHeader] = useState('');
  //   const [gamesDescription, setGAmesDescription] = useState('');
  const [sports, setSports] = useState([]);
  //   const [isGameModal, setIsGameModal] = useState({
  //     open: false,
  //     selectedGame: { name: '', description: '', image: '' },
  //   });
  //   const [gameConsts, setGameConsts] = useState<any>(undefined);

  const playerPath = useParams<any>();

  const [gamesStatus, setGamesStatus] = useState([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);

  const [isWinner, setIsWinner] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const [winNum, setWinNum] = useState(0);
  const currentPlayer = players.find(({ path }: any) => path === playerPath.playerRoute);

  const handleOnClick = (e: any) => {
    const selectedConsts = mapPinIcons.filter((g: any) => g.title === e.target.dataset.name)[0];
    const playerStatus = selectedConsts.availableGames[currentPlayer!.path];
    const status = gamesStatus.map((g: any) => g);
    status[e.target.dataset.index] = playerStatus;
    setGamesStatus(status);
    const accinNumber = gamesStatus.filter((s) => s === true);

    if (playerStatus && winNum - 1 === accinNumber.length) {
      setIsWinner(true);
      setTimeout(() => setShowVideo(true), 1500);
    }
  };

  useEffect(() => {
    if (!sports) setSports([]);
    gamesRef.once('value').then((snapshot: any) => {
      if (!isEqual(sports, snapshot.val()?.sports) && snapshot.val()?.sports) setSports(snapshot.val()?.sports);
      const winNumber = mapPinIcons.filter((s) => s.availableGames[currentPlayer!.path]);
      setWinNum(winNumber.length);
    });
  }, [gamesRef, sports, currentPlayer]);

  return (
    <GamesBg>
      <Wrapper>
        {showVideo && (
          <GamesModal>
            <Title>איזה כיף! כמה דברים אני יכול לעשות!</Title>
            <Container>
              <VideoPlayer url={currentPlayer?.video || ''} />
            </Container>
            <LinksTitle>מה תרצו לעשות כעת?</LinksTitle>
            <LinksContainer>
              <StyledLink $isActiveItem={false} to="/game">
                לשחק עם דמות נוספת
              </StyledLink>
              <StyledLink $isActiveItem={false} to="/team">
                להכיר את הנבחרת הפאראלימפית הישראלית
              </StyledLink>
              <StyledLink $isActiveItem={false} to="/">
                לצאת מהמשחק
              </StyledLink>
            </LinksContainer>
          </GamesModal>
        )}

        {sports.map((icon: any, index: number) => {
          if (gamesStatus[index] === true) {
            return (
              <MapPinCorrect key={index} index={index}>
                <MapPinText>{icon.name}</MapPinText>
              </MapPinCorrect>
            );
          }
          if (gamesStatus[index] === false) {
            return (
              <MapPinIncorrect key={index} index={index}>
                <StyledMapPinX />
                <MapPinText>{icon.name}</MapPinText>
              </MapPinIncorrect>
            );
          }
          return (
            <MapPin
              index={index}
              data-index={index}
              data-name={icon.name}
              key={index}
              onClick={(e) => handleOnClick(e)}
            >
              <MapPinText data-index={index} data-name={icon.name}>
                {icon.name}
              </MapPinText>
            </MapPin>
          );
        })}
        {isWinner ? (
          <IconWrapper>{currentPlayer?.iconWin}</IconWrapper>
        ) : (
          <IconWrapper>{currentPlayer?.icon}</IconWrapper>
        )}
      </Wrapper>
    </GamesBg>
  );
};

export default Games;
