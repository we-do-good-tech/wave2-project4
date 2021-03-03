/* eslint-disable jsx-a11y/aria-role */
import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';
import { Item } from '../consts';

const ActionItem = styled(Item)`
  width: 128;
  height: 128;
  font-size: 20px;
`;

export interface BoxProps {
  name: string;
  type: string;
}

export const DraggbleActionItem: FC<BoxProps> = memo(({ name, type }) => {
  const [{ opacity }, drag] = useDrag(
    () => ({
      item: { name, type },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [name, type],
  );

  return (
    <ActionItem ref={drag} role="Box" style={{ opacity }}>
      {name}
    </ActionItem>
  );
});
