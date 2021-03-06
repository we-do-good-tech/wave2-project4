import React, { useState, useEffect, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import FocusTrap from 'focus-trap-react';
import isEqual from 'lodash.isequal';
import { useParams } from 'react-router-dom';
import { Link, VideoPlayer, FlexCenter, flexCenterMiddle, Flex } from 'shared/components';
import mapBg from 'assets/images/map_bg.svg';
import mapBgTop from 'assets/images/map_bg_top.svg';
import mapPin from 'assets/images/map_pin.svg';
import mapPinActive from 'assets/images/map_pin_active.svg';
import { ReactComponent as MapPinX } from 'assets/images/map_pin_x.svg';
import { ReactComponent as Nir } from 'assets/images/NirAvailable.svg';
import { ReactComponent as NirWin } from 'assets/images/NirAvailableWin.svg';
import { ReactComponent as Shira } from 'assets/images/ShiraAvailable.svg';
import { ReactComponent as ShiraWin } from 'assets/images/ShiraAvailableWin.svg';
import { ReactComponent as Tomer } from 'assets/images/TomerAvailable.svg';
import { ReactComponent as TomerWin } from 'assets/images/TomerAvailableWin.svg';
import { GamesModal, VideoContainer } from 'game/consts';
import mapPinIcons from 'games/consts';
import firebase from '../../firebase';

type Player = {
  name: string;
  path: string;
  icon: ReactElement;
  iconWin: ReactElement;
  video: string;
};

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
  @media ${({ theme }) => theme.typing.mediaRules.untilMedium} and (orientation: landscape) {
    width: 100vw;
    height: calc(100vw / 2);
    min-width: 100vw;
    min-height: calc(100vw / 2);
  }
`;

const StyledMapPinX = styled(MapPinX)`
  position: absolute;
  top: 20%;
`;

const IconWrapper = styled.div`
  position: absolute;
  height: 60%;
  right: -3%;
  bottom: 5%;
  z-index: 101;
  pointer-events: none;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    height: 48%;
    right: 1%;
    bottom: 11%;
    & > svg {
      width: auto;
    }
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilMedium} {
    height: 48%;
    right: 1%;
    bottom: 11%;
    & > svg {
      width: auto;
    }
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

const GamesBg = styled(FlexCenter)`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.games.background};
  flex: 1;
  align-items: flex-start;
  overflow-x: hidden;
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
  @media ${({ theme }) => theme.typing.mediaRules.untilMedium} {
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
  @media ${({ theme }) => theme.typing.mediaRules.untilMedium} {
    ${sizeSmall};
  }
`;

const BgTop = styled.div.attrs({ dir: 'rtl' })`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  flex: 1;
  background-image: url(${mapBgTop});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  ${sizeNormal};
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    ${sizeSmall};
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilMedium} {
    ${sizeSmall};
  }
`;

const Wrapper = styled.div.attrs({ dir: 'rtl' })`
  position: relative;
  flex: 1;
  background-image: url(${mapBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  ${sizeNormal};
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    ${sizeSmall};
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilMedium} {
    ${sizeSmall};
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
    margin-top: 5px;
    font-size: 19px;
  }
`;

const LinksTitle = styled.h2`
  margin: 20px 0 15px 0;
  font-size: ${({ theme }) => theme.text.linksTitle.fontSize};
  font-weight: ${({ theme }) => theme.text.linksTitle.fontWeight};
  color: ${({ theme }) => theme.text.linksTitle.color};
  line-height: ${({ theme }) => theme.text.linksTitle.lineHeight};
  cursor: default;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    margin: 5px 0;
    font-size: 16px;
  }
`;

const StyledLink = styled(Link)`
  max-width: 250px;
  min-width: 250px;
  max-height: 106px;
  min-height: 106px;
  padding: 15px 10px;
  text-decoration: none;
  font-size: 21px;
  line-height: 26px;
  font-weight: ${({ $isActiveItem }: { $isActiveItem: boolean }) => ($isActiveItem ? 700 : 400)};
  color: ${({ theme, $isActiveItem }: { theme: any; $isActiveItem: boolean }) =>
    $isActiveItem ? theme.linkBig.primary.active.color : theme.linkBig.primary.normal.color};
  background: ${({ theme, $isActiveItem }: { theme: any; $isActiveItem: boolean }) =>
    $isActiveItem ? theme.linkBig.primary.active.background : theme.linkBig.primary.normal.background};
  border: 1px solid ${({ theme }) => theme.linkBig.primary.normal.border};
  border-radius: 50px;
  flex: 1 1 25%;
  text-align: center;
  outline: none !important;
  &:hover,
  &:focus {
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
  @media ${({ theme }) => theme.typing.mediaRules.untilMedium} {
    margin: 0 5px;
    padding: 5px;
    width: 170px;
    height: 50px;
    min-width: 170px;
    min-height: 50px;
    max-width: 170px;
    max-height: 50px;
    font-size: 14px;
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    margin: 0 5px;
    padding: 0 5px;
    min-width: 130px;
    min-height: 35px;
    max-width: 140px;
    max-height: 35px;
    font-size: 12px;
    line-height: 11px;
  }
`;

const CtaLink = styled(StyledLink)`
  background-color: #015f7e;
  &:hover {
    background-color: #015f7e;
  }
`;

const MapPin = styled.button<{ index: number }>`
  ${flexCenterMiddle};
  border: none;
  position: absolute;
  left: ${({ index }) => mapPinIcons[index].position.left}%;
  top: ${({ index }) => mapPinIcons[index].position.top}%;
  font-size: 20px;
  font-weight: 400;
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
  outline: none !important;
  &:hover,
  &:focus {
    transform: scale(1.2);
  }
  h5 {
    padding-bottom: 18px;
    font-size: 18px;
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
  ${flexCenterMiddle};
  position: absolute;
  left: ${({ index }) => mapPinIcons[index].position.left}%;
  top: ${({ index }) => mapPinIcons[index].position.top}%;
  font-size: 20px;
  font-weight: 400;
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
  ${flexCenterMiddle};
  cursor: default;
  position: absolute;
  left: ${({ index }) => mapPinIcons[index].position.left}%;
  top: ${({ index }) => mapPinIcons[index].position.top}%;
  font-size: 20px;
  font-weight: 400;
  padding: 0 10px;
  color: ${({ theme }) => theme.games.mapPinColor};
  width: 90px;
  height: 125px;
  background: url(${mapPinActive}) no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  vertical-align: middle;
  transition: all 0.6s;
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

const LinksContainer = styled(Flex)`
  width: 90%;
  justify-content: space-between;
`;

const MapPinText = styled.h5`
  cursor: pointer;
  line-height: 20px;
`;

const players: Player[] = [
  {
    name: 'תומר',
    path: 'tomer',
    icon: <StyledTomer />,
    iconWin: <StyledTomerWin />,
    video: '',
  },
  {
    name: 'ניר',
    path: 'nir',
    icon: <StyledNir />,
    iconWin: <StyledNirWin />,
    video: '',
  },
  {
    name: 'שירה',
    path: 'shira',
    icon: <StyledShira />,
    iconWin: <StyledShiraWin />,
    video: '',
  },
];

const Games = () => {
  const gamesRef = firebase.database().ref('games');
  const [sports, setSports] = useState([]);

  const playerRoute = useParams<any>();

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
  const currentPlayer = players.find(({ path }: any) => path === playerRoute.playerRoute);

  const handleOnClick = (e: any, index: number) => {
    const selectedConsts = mapPinIcons[index];
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

  const itemsRef = firebase.database().ref('video');

  const [video, setVideo] = useState(undefined);

  useEffect(() => {
    if (!video) setVideo(undefined);
    itemsRef.on('value', (snapshot: any) => {
      if (!isEqual(video, snapshot.val()) && snapshot.val() && currentPlayer)
        currentPlayer!.video = `${snapshot.val()[playerRoute.playerRoute]}`;
      if (playerRoute.didWin === 'win') {
        setIsWinner(true);
        setShowVideo(true);
      }
    });
  }, [itemsRef, video, playerRoute, currentPlayer, showVideo]);

  return (
    <GamesBg>
      <Wrapper>
        <BgGames>
          {mapPinIcons.map((obj: any, index: number) => {
            if (!obj.title) return;
            return <div key={index}>{obj.iconBg}</div>;
          })}
        </BgGames>
        <BgTop />
        {showVideo && currentPlayer!.video !== '' && (
          <FocusTrap
            active={showVideo}
            focusTrapOptions={{
              initialFocus: 'h2',
              allowOutsideClick: true,
            }}
          >
            <GamesModal>
              <Title>{`איזה כיף! כמה דברים אני יכול${currentPlayer!.path === 'shira' ? 'ה' : ''} לעשות!`}</Title>
              <Title> </Title>
              <VideoContainer>
                <VideoPlayer url={currentPlayer?.video || ''} />
              </VideoContainer>
              <LinksTitle>מה תרצו לעשות כעת?</LinksTitle>
              <LinksContainer>
                <StyledLink $isActiveItem={false} to="/game">
                  לשחק עם דמות נוספת
                </StyledLink>
                <StyledLink $isActiveItem={false} to="/games">
                  להכיר את המשחקים הפראלימפיים
                </StyledLink>
                <CtaLink $isActiveItem={false} to={`/team/${currentPlayer!.path}`}>
                  להכיר את הנבחרת הפאראלימפית הישראלית
                </CtaLink>
                <StyledLink $isActiveItem={false} to="/">
                  לצאת מהמשחק
                </StyledLink>
              </LinksContainer>
            </GamesModal>
          </FocusTrap>
        )}
        <Pins>
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
                onClick={(e) => handleOnClick(e, index)}
              >
                <MapPinText data-index={index} data-name={icon.name}>
                  {icon.name}
                </MapPinText>
              </MapPin>
            );
          })}
        </Pins>
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
