/* eslint-disable jsx-a11y/aria-role */
import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';
import { Item } from '../consts';

const ActionItem = styled(Item)<{ opacity: number }>`
  opacity: ${(props) => props.opacity};
  width: 128px;
  height: 128px;
  font-size: 17px;
  padding: 19% 3%;
  &:focus {
    outline: none;
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    width: 65px;
    height: 65px;
    font-size: 10px;
    padding: 10% 5%;
    line-height: initial;
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
        let video = '';
        if (item.video) video = item.video;
        if (item!.type !== name) {
          if (item!.type === 'CANT') {
            return changeImage('fail', item!.info, video);
          }
          return changeImage('fail', '', video);
        }
        switch (name) {
          case 'CAN':
            changeActionPosition(item, 'CAN');
            changeImage('success', item!.info, video);
            break;
          case 'CANT':
            changeActionPosition(item, 'CANT');
            changeImage('success', '', video);
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
