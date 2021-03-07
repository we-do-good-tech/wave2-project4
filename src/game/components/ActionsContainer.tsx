import React, { useState } from 'react';
import styled from 'styled-components';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { SpeechBubbleWrapper, SpeechBubbleBorder } from 'shared/components/SpeechBubble';
import { DraggbleActionItem } from './DraggbleActionItem';

const ActionsWrapper = styled.div`
position: absolute;
grid-area: 1 / 1;
min-width: 100%;
min-height: 144px;
display flex;
align-items:center;
justify-content: center;
bottom: 1%;
background-color: rgba(255, 255, 255, 0.8);
`;

const PlayerImageWrapper = styled.div`
  position: absolute;
  z-index: 1;
  right: 5%;
  bottom: 20%;
`;

const PlayerImg = styled.img`
  z-index: 1;
  display: block;
  max-width: 261px;
  max-height: 386px;
`;

const ScrollActionsWrapper = styled.div`
  width: 60%;
  padding: 0 15px;
  height: 100%;
  display: flex;
  justify-content: space-around;
  direction: ltr;
  & .scroll-menu-arrow--disabled {
    visibility: hidden;
  }
`;

const StyledSpeechBubbleWrapper = styled(SpeechBubbleWrapper)`
  position: absolute;
  height: 153px;
  min-width: 212px;
  right: 75%;
  bottom: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  flex-direction: column;
  padding: 10px 20px;
`;

const LefttArrow = styled.span`
  align-self: stretch;
  font-size: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RightArrow = styled.span`
  align-self: stretch;
  font-size: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledImage = styled.img`
  flex: 1 1 10%;
  max-height: 75%;
  min-height: 10%;
`;

const SpeechBubbleText = styled.div`
  font-size: 20px;
  line-height: 22.16px;
  flex: 1 1 40%;
  margin-top: 15px;
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
  /* const { id } = action; */
  <DraggbleActionItem key={id} setActions={setActions} changeImage={changeImage} action={action} />
);

export const Menu = (actions: any, setActions: any, changeImage: any) =>
  actions.map((action: any, index: number) => (
    /* const { id } = action; */
    <MenuItem setActions={setActions} key={index} action={action} id={index} changeImage={changeImage} />
  ));

const ActionsContainer = (props: any) => {
  const { currentPlayer, actions, setActions } = props;
  const allPlayerImages = currentPlayer?.images;
  const [playerImage, setPlayerImage] = useState({ image: allPlayerImages.availble, info: '' });
  const [menuRef, setMenuRef] = useState<ScrollMenu | null>(null);

  const changeImage = (image: string, info: string) => {
    setPlayerImage({ image: allPlayerImages[image], info });
    menuRef!.scrollTo('0');
  };
  const menu = Menu(actions, setActions, changeImage);

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
      <PlayerImageWrapper>
        {playerImage.image !== allPlayerImages.availble && (
          <StyledSpeechBubbleWrapper>
            <SpeechBubbleBorder />
            <StyledImage src={playerImage.image[1]} alt="" />
            {playerImage.info && <SpeechBubbleText>{playerImage.info}</SpeechBubbleText>}
          </StyledSpeechBubbleWrapper>
        )}
        <PlayerImg src={playerImage.image[0]} alt={currentPlayer?.name} />
      </PlayerImageWrapper>
    </ActionsWrapper>
  );
};

export default ActionsContainer;
