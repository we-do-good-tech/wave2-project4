import React from 'react';
import styled from 'styled-components';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
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

const PlayerImg = styled.img`
  display: block;
  position: absolute;
  z-index: 1;
  display: block;
  max-width: 12%;
  right: 5%;
  bottom: 20%;
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

const MenuItem = ({ name, type, isDropped }: any) => (
  <DraggbleActionItem name={name} type={type} isDropped={isDropped}>
    {name}
  </DraggbleActionItem>
);

// All items component
// Important! add unique key
export const Menu = (actions: any, isDropped: any) =>
  actions.map((el: any, index: number) => {
    const { name, type } = el;

    return <MenuItem name={name} key={index} type={type} isDropped={isDropped(name)} />;
  });
const ActionsContainer = (props: any) => {
  const { currentPlayer, isDropped, actions } = props;

  const menu = Menu(actions, isDropped);

  return (
    <ActionsWrapper>
      <ScrollActionsWrapper>
        <ScrollMenu
          alignCenter
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          hideSingleArrow
          innerWrapperStyle={{ display: 'flex' }}
          data={menu}
          menuStyle={{ width: '100%' }}
        />
      </ScrollActionsWrapper>
      <PlayerImg src={currentPlayer?.images.availble} alt={currentPlayer?.name} />
    </ActionsWrapper>
  );
};

export default ActionsContainer;
