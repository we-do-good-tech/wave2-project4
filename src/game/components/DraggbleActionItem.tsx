/* eslint-disable jsx-a11y/aria-role */
import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';
import { Item } from '../consts';

const ActionItem = styled(Item)`
  width: 128px;
  height: 128px;
  font-size: 20px;
  padding: 5px;
`;

export interface BoxProps {
  name: string;
  type: string;
  currentPosition: string;
  index: number;
  setActions: any;
  changeImage: any;
}

export const DraggbleActionItem: FC<BoxProps> = memo(({ name, type, setActions, changeImage }) => {
  const changeActionPosition = (currentItem: any, columnName: any) => {
    setActions((prevState: any) =>
      prevState.map((e: { name: any; position: any }) => ({
        ...e,
        position: e.name === currentItem.name ? columnName : e.position,
      })),
    );
  };

  const [{ isDragging }, drag] = useDrag({
    item: { name, type },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      console.log('endDrag');
      if (dropResult) {
        const { name } = dropResult;
        if (item?.type !== name) {
          return changeImage('fail');
        }
        changeImage('success');
        switch (name) {
          case 'CAN':
            changeActionPosition(item, 'CAN');
            break;
          case 'CANT':
            changeActionPosition(item, 'CANT');
            break;
          default:
            break;
        }
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.4 : 1;
  return (
    <ActionItem ref={drag} role="Box" style={{ opacity }}>
      {name}
    </ActionItem>
  );
});
