/* eslint-disable jsx-a11y/aria-role */
import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';

const ActionItem = styled.div`
  width: 128px;
  height: 128px;
  background: linear-gradient(180deg, #052a86 0%, #04206b 100%);
  border-radius: 50%;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 5px;
  white-space: break-spaces;
`;

export interface BoxProps {
  name: string;
  type: string;
  isDropped: boolean;
}

export const DraggbleActionItem: FC<BoxProps> = memo(({ name, type, isDropped }) => {
  console.log('stop!!!');
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
      {isDropped ? <s>{name}</s> : name}
    </ActionItem>
  );
});
