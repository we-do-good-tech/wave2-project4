/* eslint-disable jsx-a11y/aria-role */
import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import { Item } from '../consts';

const CanDo = styled.div`
  grid-area: 1/1;
  background: ${({ theme }) => theme.colors.lightRed};
`;

const CantDo = styled.div`
  grid-area: 1/2;
  background: ${({ theme }) => theme.colors.lightGreen};
`;

const SmallActionItem = styled(Item)`
  width: 64px;
  height: 64px;
  font-size: 12;
`;

export interface BininProps {
  accept: string[];
  droppedActionNames?: string[];
  onDrop: (item: any) => void;
}

export const DroppableBin: FC<BininProps> = memo(({ accept, onDrop, droppedActionNames }) => {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept,
      drop: onDrop,
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
    [accept, onDrop],
  );

  let backgroundColor = '';
  if (isOver) {
    backgroundColor = 'darkkhaki';
  }

  return (
    <>
      {accept[0] === 'CAN' ? (
        <CanDo ref={drop} role="bin" style={{ backgroundColor }}>
          {droppedActionNames && droppedActionNames.map((item: string) => <SmallActionItem> {item} </SmallActionItem>)}
        </CanDo>
      ) : (
        <CantDo ref={drop} role="bin" style={{ backgroundColor }}>
          {droppedActionNames && droppedActionNames.map((item: string) => <SmallActionItem> {item} </SmallActionItem>)}
        </CantDo>
      )}
    </>
  );
});
