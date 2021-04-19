import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { isMobileOnly, isTablet } from 'react-device-detect';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { VideoPlayer } from 'shared/components';
import { FlexCenterMiddle, flexColumnCenter, Flex, flexCenterMiddle } from 'shared/components/Flex';
import { SpeechBubbleWrapper, SpeechBubbleBorder } from 'shared/components/SpeechBubble';
import { ReactComponent as PlayVideoButton } from 'assets/images/play_video.svg';
import { ReactComponent as TooltipX } from 'assets/images/tooltip_x.svg';
import { VideoContainer } from 'game/consts';
import { DraggbleActionItem } from './DraggbleActionItem';

const ActionsWrapper = styled(FlexCenterMiddle)`
  position: absolute;
  grid-area: 1 / 1;
  width: 100%;
  min-height: 22%;
  bottom: 1%;
  background-color: rgba(255, 255, 255, 0.8);
`;

const PlayerImageWrapper = styled.div`
  width: 20%;
  position: absolute;
  z-index: 1;
  right: 5%;
  bottom: 20%;
  @media ${({ theme }) => theme.typing.mediaRules.untilBig} {
    right: 1%;
  }
`;

const PlayerImg = styled(motion.img)<{ displayProp: string }>`
  z-index: 1;
  max-width: 261px;
  max-height: 360px;
  display: ${(props) => props.displayProp};
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    max-width: 140px;
    max-height: 180px;
  }
`;

const ScrollActionsWrapper = styled(Flex)`
  width: 60%;
  padding: 0 15px;
  height: 100%;
  justify-content: space-around;
  direction: ltr;
  z-index: 100;
  & .scroll-menu-arrow--disabled {
    visibility: hidden;
  }
  & *:focus {
    outline: none;
  }
`;

const StyledSpeechBubbleWrapper = styled(SpeechBubbleWrapper)`
  ${flexColumnCenter};
  height: 153px;
  min-width: 212px;
  align-items: center;
  z-index: 1;
  padding: 20px;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    padding: 10px;
    height: 75px;
    min-width: 105px;
  }
`;

const LefttArrow = styled(FlexCenterMiddle)`
  align-self: stretch;
  font-size: 40px;
  cursor: pointer;
`;

const RightArrow = styled(FlexCenterMiddle)`
  align-self: stretch;
  font-size: 40px;
  cursor: pointer;
`;

/* const StyledImage = styled.img`
  flex: 1 1 10%;
  max-height: 75%;
  min-height: 10%;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    flex: 1 1 30%;
    min-height: 30%;
  }
`; */

const SpeechBubbleText = styled(motion.div)<{ colorProp: string }>`
  font-size: 20px;
  line-height: 22.16px;
  margin: 10px 0;
  color: ${(props) => props.colorProp};
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    font-size: 12px;
    line-height: 110%;
    margin: 3px 0;
  }
`;

const ModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.85);
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  }
`;

const VideoModal = styled(motion.div)`
  ${flexColumnCenter};
  position: absolute;
  width: 35%;
  height: 62%;
  justify-self: center;
  align-self: center;
  align-items: center;
  background: ${({ theme }) => theme.modal.background};
  border: 4px solid ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  z-index: 100;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} and (orientation: landscape) {
    width: 80vw;
    margin: 10px auto;
    height: 75vh;
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} and (orientation: portrait) {
    width: 80vh;
    margin: 10px auto;
    height: 85vw;
  }
`;

const CloseBtn = styled.button`
  ${flexCenterMiddle};
  position: absolute;
  outline: none !important;
  top: -33px;
  right: -33px;
  width: 63px;
  height: 63px;
  color: ${({ theme }) => theme.games.closeButton.color};
  background: ${({ theme }) => theme.games.closeButton.background};
  border: 4px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  &:hover,
  &:focus {
    transition: 0.1s all;
    background: radial-gradient(50% 50% at 50% 50%, #7d0396 33.38%, #4e025d 100%);
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    border: 2px solid #fff;
    top: -17px;
    right: -17px;
    width: 31px;
    height: 31px;
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilMedium} {
    border: 2px solid #fff;
    top: -17px;
    right: -17px;
    width: 31px;
    height: 31px;
  }
`;

const VideoButton = styled.div`
  z-index: 10;
  cursor: pointer;
  width: 25%;
  display: inline-flex;
  &:hover {
    transition: 0.2s;
    filter: brightness(0.8);
  }
`;

const ArrowLeft = (
  <LefttArrow>
    <BsChevronLeft />
  </LefttArrow>
);

const ArrowRight = (
  <RightArrow>
    <BsChevronRight />
  </RightArrow>
);

export const MenuItem = ({ setActions, changeImage, action, id }: any) => (
  <DraggbleActionItem key={id} setActions={setActions} changeImage={changeImage} action={action} />
);

export const Menu = (actions: any, setActions: any, changeImage: any) =>
  actions.map((action: any, index: number) => (
    <MenuItem setActions={setActions} key={index} action={action} id={index} changeImage={changeImage} />
  ));

const getAnimationValues = () => {
  if (isMobileOnly) {
    return { x: -65, y: 40 };
  }
  if (isTablet) {
    return { x: -180, y: 40 };
  }
  return { x: -130, y: 90 };
};
const Xvalue = getAnimationValues().x;
const Yvalue = getAnimationValues().y;

const ActionsContainer = (props: any) => {
  const { currentPlayer, actions, setActions } = props;
  const allPlayerImages = currentPlayer!.images;
  const [playerImage, setPlayerImage] = useState({ image: allPlayerImages.availble, info: '' });
  const [delay, setDelay] = useState(3);
  const [menuRef, setMenuRef] = useState<ScrollMenu | null>(null);
  const [bubbleText, setBubbleText] = useState({ text: '', color: '' });
  const [video, setVideo] = useState({ show: false, url: '' });

  const changeImage = (image: string, info: string, videoUrl: string = '') => {
    setVideo({ show: false, url: '' });
    setDelay(3);
    setPlayerImage({ image: allPlayerImages[image], info });

    if (image === 'success') {
      menuRef!.scrollTo('0');
      if (!info) {
        return setBubbleText({ text: 'הצלחת!', color: 'green' });
      }
      setBubbleText({ text: info, color: 'black' });
      setDelay(6);
      if (videoUrl) {
        setVideo({ show: video.show, url: videoUrl });
        setDelay(600);
      }
    } else if (image === 'fail') {
      if (info) {
        return setBubbleText({ text: info, color: 'black' });
      }
      setBubbleText({ text: 'כדאי לנסות שוב', color: 'red' });
    }
  };

  const handleCloseBtn = () => {
    setVideo({ show: false, url: video.url });
  };

  const onShowVideo = () => {
    setVideo({ show: true, url: video.url });
  };

  const menu = Menu(actions, setActions, changeImage);

  useEffect(() => {
    if (playerImage.image !== allPlayerImages.availble) {
      const timer = setTimeout(() => {
        setPlayerImage({ image: allPlayerImages.availble, info: '' });
      }, 1000 * delay);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [allPlayerImages.availble, delay, playerImage]);

  return (
    <>
      <ActionsWrapper>
        <ScrollActionsWrapper>
          <ScrollMenu
            ref={(el) => setMenuRef(el)}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            hideSingleArrow
            dragging={false}
            innerWrapperStyle={{ display: 'flex' }}
            data={menu}
            menuStyle={{ width: '100%' }}
            disableTabindex
          />
        </ScrollActionsWrapper>
        <AnimatePresence exitBeforeEnter>
          <PlayerImageWrapper>
            {playerImage.image !== allPlayerImages.availble && (
              <motion.div
                initial={{ scale: 0, y: 100, x: 100 }}
                animate={{ scale: 1, y: Yvalue, x: Xvalue }}
                transition={{ duration: 0.2 }}
                exit={{ opacity: 0 }}
              >
                <StyledSpeechBubbleWrapper key={playerImage.image[1]}>
                  <SpeechBubbleBorder />
                  <SpeechBubbleText
                    dangerouslySetInnerHTML={{ __html: bubbleText.text }}
                    animate={{ opacity: 1 }}
                    colorProp={bubbleText.color}
                  />
                  {video.url !== '' && (
                    <VideoButton onClick={() => onShowVideo()}>
                      <PlayVideoButton />
                    </VideoButton>
                  )}
                </StyledSpeechBubbleWrapper>
              </motion.div>
            )}
            {Object.entries(allPlayerImages).map(([key]) => {
              let display = 'none';
              if (allPlayerImages[key] === playerImage.image) {
                display = 'block';
              }
              return (
                <PlayerImg
                  key={key}
                  displayProp={display}
                  src={allPlayerImages[key]}
                  alt={currentPlayer?.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                  exit={{ opacity: 0 }}
                />
              );
            })}
          </PlayerImageWrapper>
        </AnimatePresence>
      </ActionsWrapper>
      {video.show && video.url !== '' && (
        <ModalBackground onClick={handleCloseBtn}>
          <VideoModal initial={{ scale: 0, x: 300 }} animate={{ scale: 1, x: 0 }} transition={{ duration: 0.3 }}>
            <CloseBtn onClick={handleCloseBtn}>
              <TooltipX />
            </CloseBtn>
            <VideoContainer>
              <VideoPlayer url={video.url} />
            </VideoContainer>
          </VideoModal>
        </ModalBackground>
      )}
    </>
  );
};

export default ActionsContainer;
