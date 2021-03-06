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

const Marker = styled.img``;

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
  z-index: 1;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 33px;
  text-align: center;
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

export const MenuItem = ({ name, type, index, currentPosition, setActions, id, changeImage }: any) => (
  <DraggbleActionItem
    key={id}
    name={name}
    type={type}
    index={index}
    setActions={setActions}
    currentPosition={currentPosition}
    changeImage={changeImage}
  >
    {name}
  </DraggbleActionItem>
);

export const Menu = (actions: any, setActions: any, changeImage: any) =>
  actions.map((action: any) => {
    const { name, type, index, currentPosition, id } = action;
    return (
      <MenuItem
        setActions={setActions}
        name={name}
        key={id}
        type={type}
        index={index}
        currentPosition={currentPosition}
        id={id}
        changeImage={changeImage}
      />
    );
  });
const ActionsContainer = (props: any) => {
  const { currentPlayer, actions, setActions } = props;
  const allPlayerImages = currentPlayer?.images;
  const [playerImage, setPlayerImage] = useState(allPlayerImages.availble);
  const changeImage = (image: string) => {
    setPlayerImage(allPlayerImages[image]);
  };
  const menu = Menu(actions, setActions, changeImage);

  return (
    <ActionsWrapper>
      <ScrollActionsWrapper>
        <ScrollMenu
          alignCenter
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
        {playerImage !== allPlayerImages.availble && (
          <StyledSpeechBubbleWrapper>
            <SpeechBubbleBorder />
            <Marker src={playerImage[1]} />
          </StyledSpeechBubbleWrapper>
        )}
        <PlayerImg src={playerImage[0]} alt={currentPlayer?.name} />
      </PlayerImageWrapper>
    </ActionsWrapper>
  );
};

export default ActionsContainer;
