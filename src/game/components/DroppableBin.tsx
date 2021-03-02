/* eslint-disable jsx-a11y/aria-role */
import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';

const CanDo = styled.div`
  grid-area: 1/1;
  background: ${({ theme }) => theme.colors.lightRed};
`;

const CantDo = styled.div`
  grid-area: 1/2;
  background: ${({ theme }) => theme.colors.lightGreen};
`;

export interface BininProps {
  accept: string[];
  lastDroppedItem?: any;
  onDrop: (item: any) => void;
}

export const DroppableBin: FC<BininProps> = memo(({ accept, onDrop }) => {
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
        <CanDo ref={drop} role="bin" style={{ backgroundColor }} />
      ) : (
        <CantDo ref={drop} role="bin" style={{ backgroundColor }} />
      )}
    </>
  );
});
