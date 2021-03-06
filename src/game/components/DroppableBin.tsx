/* eslint-disable jsx-a11y/aria-role */
import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import { Item } from '../consts';

const CanDo = styled.div`
  grid-area: 1/1;
  background: ${({ theme }) => theme.colors.lightGreen};
  display: flex;
  direction: ltr;
  flex-direction: column;
  align-items: flex-start;
`;

const CantDo = styled.div`
  grid-area: 1/2;
  background: ${({ theme }) => theme.colors.lightRed};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SmallActionsContainer = styled.div`
  flex: 0 0 50%;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  flex-wrap: wrap-reverse;
`;

const SmallActionItem = styled(Item)`
  cursor: auto;
  width: 64px;
  height: 64px;
  margin: 10px 20px;
  font-size: 12px;
`;

const StyledH3 = styled.h3`
  font-family: Assistant;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 110.8%;
  color: ${({ theme }) => theme.colors.sapphire};
  display: flex;
  text-align: center;
  min-width: 100%;
  justify-content: center;
  margin-top: 15%;
`;

interface ActionState {
  name: string;
  type: string;
}

export interface BininProps {
  accept: string;
  items?: ActionState[];
}

export const DroppableBin: FC<BininProps> = memo(({ accept, items }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ['CAN', 'CANT'],
    drop: () => ({ name: accept }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  let backgroundColor = '';
  if (isOver) {
    backgroundColor = 'darkkhaki';
  }

  return (
    <>
      {accept === 'CAN' ? (
        <CanDo ref={drop} role="bin" style={{ backgroundColor }}>
          <StyledH3>יכול</StyledH3>
          <SmallActionsContainer>
            {items?.map((item, index) => (
              <SmallActionItem key={index}>{item.name}</SmallActionItem>
            ))}
          </SmallActionsContainer>
        </CanDo>
      ) : (
        <CantDo ref={drop} role="bin" style={{ backgroundColor }}>
          <StyledH3>לא יכול</StyledH3>
          <SmallActionsContainer>
            {items?.map((item, index) => (
              <SmallActionItem key={index}>{item.name}</SmallActionItem>
            ))}
          </SmallActionsContainer>
        </CantDo>
      )}
    </>
  );
});
