/* eslint-disable jsx-a11y/aria-role */
import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { useDrop } from 'react-dnd';
import { FlexColumn, Flex, FlexCenter } from 'shared/components/Flex';
import { Item } from '../consts';

const CanDo = styled(FlexColumn)<{ amount: number }>`
  grid-area: 1/1;
  background: ${({ theme }) => theme.colors.lightGreen};
  direction: ltr;
  align-items: flex-start;
  background-color: ${(props) => darken(props.amount, props.theme.colors.lightGreen)};
`;

const CantDo = styled(FlexColumn)<{ amount: number }>`
  grid-area: 1/2;
  background: ${({ theme }) => theme.colors.lightRed};
  align-items: flex-start;
  background-color: ${(props) => darken(props.amount, props.theme.colors.lightRed)};
`;

const SmallActionsContainer = styled(Flex)`
  flex: 0 0 50%;
  width: 50%;
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

const StyledH3 = styled(FlexCenter)`
  font-weight: bold;
  font-size: 25px;
  line-height: 110.8%;
  color: ${({ theme }) => theme.colors.sapphire};
  text-align: center;
  min-width: 100%;
  margin-top: 15%;
  transition: 0.2s;
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

  let amount = 0;
  if (isOver) {
    amount = 0.05;
  }

  return (
    <>
      {accept === 'CAN' ? (
        <CanDo ref={drop} role="bin" amount={amount}>
          <StyledH3>יכול</StyledH3>
          <SmallActionsContainer>
            {items?.map((item, index) => (
              <SmallActionItem key={index}>{item.name}</SmallActionItem>
            ))}
          </SmallActionsContainer>
        </CanDo>
      ) : (
        <CantDo ref={drop} role="bin" amount={amount}>
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
