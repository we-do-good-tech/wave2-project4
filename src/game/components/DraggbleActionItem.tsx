/* eslint-disable jsx-a11y/aria-role */
import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';
import { Item } from '../consts';

const ActionItem = styled(Item)<{ opacity: number }>`
  opacity: ${(props) => props.opacity};
  width: 128px;
  height: 128px;
  font-size: 20px;
  padding: 5px;
  &:focus {
    outline: none;
  }
`;

export interface BoxProps {
  action: any;
  setActions: any;
  changeImage: any;
}

export const DraggbleActionItem: FC<BoxProps> = memo(({ action, setActions, changeImage }) => {
  const changeActionPosition = (currentItem: any, columnName: any) => {
    setActions((prevState: any) =>
      prevState.map((e: { name: any; position: any }) => ({
        ...e,
        position: e.name === currentItem.name ? columnName : e.position,
      })),
    );
  };

  const [{ isDragging }, drag] = useDrag({
    item: action,
    begin: () => changeImage('availble', ''),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult) {
        const { name } = dropResult;
        if (item!.type !== name) {
          return changeImage('fail', item!.info);
        }
        switch (name) {
          case 'CAN':
            changeActionPosition(item, 'CAN');
            changeImage('success');
            break;
          case 'CANT':
            changeActionPosition(item, 'CANT');
            changeImage('success');
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
  const opacity = isDragging ? 0 : 1;
  return (
    <ActionItem ref={drag} role="Box" opacity={opacity}>
      {action.name}
    </ActionItem>
  );
});
