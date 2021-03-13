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
  width: 50%;
  flex-wrap: wrap-reverse;
  margin: auto 0 20% 0;
  @media ${({ theme }) => theme.typing.mediaRules.untilBig} {
    margin: auto 0 35% 0;
    width: 60%;
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    margin: auto 0 17% 0;
    width: 60%;
  }
`;

const SmallActionItem = styled(Item)`
  cursor: auto;
  width: 80px;
  height: 80px;
  margin: 5px 10px;
  font-size: 12px;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    width: 50px;
    height: 50px;
    margin: 3px 3px;
    font-size: 8px;
  }
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
  @media ${({ theme }) => theme.typing.mediaRules.untilBig} {
    font-size: 26px;
    margin-top: 20%;
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    font-size: 18px;
    margin-top: 13%;
  }
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
              <SmallActionItem initial={{ scale: 0 }} animate={{ scale: 1 }} key={index}>
                {item.name}
              </SmallActionItem>
            ))}
          </SmallActionsContainer>
        </CanDo>
      ) : (
        <CantDo ref={drop} role="bin" amount={amount}>
          <StyledH3>לא יכול</StyledH3>
          <SmallActionsContainer>
            {items?.map((item, index) => (
              <SmallActionItem key={index} initial={{ scale: 0 }} animate={{ scale: 1 }}>
                {item.name}
              </SmallActionItem>
            ))}
          </SmallActionsContainer>
        </CantDo>
      )}
    </>
  );
});
