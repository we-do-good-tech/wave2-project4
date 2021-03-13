import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { isMobileOnly, isTablet } from 'react-device-detect';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { FlexCenterMiddle, flexColumnCenter, Flex } from 'shared/components/Flex';
import { SpeechBubbleWrapper, SpeechBubbleBorder } from 'shared/components/SpeechBubble';
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

const PlayerImg = styled(motion.img)`
  z-index: 1;
  display: block;
  max-width: 261px;
  max-height: 360px;
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

const StyledImage = styled.img`
  flex: 1 1 10%;
  max-height: 75%;
  min-height: 10%;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    flex: 1 1 30%;
    min-height: 30%;
  }
`;

const SpeechBubbleText = styled.div`
  font-size: 20px;
  line-height: 22.16px;
  flex: 1 1 45%;
  margin-top: 10px;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    font-size: 12px;
    line-height: 110%;
    margin-top: 3px;
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
  const allPlayerImages = currentPlayer?.images;
  const [playerImage, setPlayerImage] = useState({ image: allPlayerImages.availble, info: '' });
  const [delay, setDelay] = useState(3);
  const [menuRef, setMenuRef] = useState<ScrollMenu | null>(null);

  const changeImage = (image: string, info: string) => {
    if (info) setDelay(6);
    setPlayerImage({ image: allPlayerImages[image], info });
    if (image === 'success') {
      menuRef!.scrollTo('0');
    }
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
        />
      </ScrollActionsWrapper>
      <AnimatePresence exitBeforeEnter>
        <PlayerImageWrapper>
          {playerImage.image !== allPlayerImages.availble && (
            <motion.div
              initial={{ scale: 0, y: Yvalue, x: Xvalue }}
              animate={{ scale: 1, y: Yvalue, x: Xvalue }}
              transition={{ duration: 0.2 }}
              exit={{ opacity: 0 }}
            >
              <StyledSpeechBubbleWrapper key={playerImage.image[1]}>
                <SpeechBubbleBorder />
                <StyledImage src={playerImage.image[1]} alt="" />
                {playerImage.info && <SpeechBubbleText>{playerImage.info}</SpeechBubbleText>}
              </StyledSpeechBubbleWrapper>
            </motion.div>
          )}
          <PlayerImg
            key={playerImage.image[0]}
            src={playerImage.image[0]}
            alt={currentPlayer?.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            exit={{ opacity: 0 }}
          />
        </PlayerImageWrapper>
      </AnimatePresence>
    </ActionsWrapper>
  );
};

export default ActionsContainer;
