import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import update from 'immutability-helper';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useParams, Link } from 'react-router-dom';
import Players, { Instruction } from '../consts';
import ActionsContainer from './ActionsContainer';
import { DroppableBin } from './DroppableBin';

const Wrapper = styled.div.attrs({ dir: 'rtl' })`
  grid-template-columns: repeat(2, 1fr);
  display: grid;
  flex: 1;
  position: relative;
`;

const EndGameModal = styled.div`
  position: absolute;
  flex-direction: column;
  padding: 5%;
  display: flex;
  text-align: right;
  justify-content: center;
  align-self: center;
  justify-self: center;
  align-items: center;
  width: 60%;
  height: 80%;
  background: ${({ theme }) => theme.modal.background};
  border: 4px solid ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  z-index: 100;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    width: 80vw;
    margin: 10px auto;
    height: 70vh;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 60%;
  margin-top: 90px;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    margin-top: 15px;
  }
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.text.title.fontSize};
  font-weight: ${({ theme }) => theme.text.title.fontWeight};
  color: ${({ theme }) => theme.text.title.color};
  line-height: ${({ theme }) => theme.text.title.lineHeight};
  cursor: default;
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    font-size: 20px;
  }
`;

const ContinueBtn = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 160px;
  height: 50px;
  align-self: flex-end;
  color: ${({ theme }) => theme.button.primary.normal.color};
  background: ${({ theme }) => theme.button.primary.normal.background};
  border: 2px solid ${({ theme }) => theme.button.primary.normal.border};
  border-radius: 50px;
  outline: 0 !important;
  &:hover {
    font-weight: ${({ theme }) => theme.button.primary.hover.fontWeight};
    border: 2px solid ${({ theme }) => theme.button.primary.hover.border};
    color: white;
    text-decoration: none;
  }

  &:active {
    background: ${({ theme }) => theme.button.primary.active.background};
    border: 2px solid ${({ theme }) => theme.button.primary.active.border};
  }
  @media ${({ theme }) => theme.typing.mediaRules.untilSmall} {
    width: 100px;
    height: 30px;
    bottom: 10px;
  }
`;

interface ActionState {
  name: string;
  type: string;
}

interface BinState {
  accepts: string[];
  lastDroppedItem: any;
}

export interface DustbinSpec {
  accepts: string[];
  lastDroppedItem: any;
}
export interface BoxSpec {
  name: string;
  type: string;
}
export interface ContainerState {
  droppedBoxNames: string[];
  dustbins: DustbinSpec[];
  boxes: BoxSpec[];
}

const AvailableActions = () => {
  const playerPath = useParams<any>();
  const currentPlayer = Players.find(({ path }: any) => path === playerPath.playerRoute);
  const list = currentPlayer?.actions ? currentPlayer?.actions : [];

  const [bins, setBins] = useState<BinState[]>([
    { accepts: ['CAN'], lastDroppedItem: null },
    { accepts: ['CANT'], lastDroppedItem: null },
  ]);
  const [actions] = useState<ActionState[]>(list.map((action: any) => ({ name: action.action, type: action.able })));

  const [droppedActionNames, setDroppedActionName] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    /* if (!droppedActionNames) setDroppedActionName([]); */
    if (droppedActionNames.length === actions.length) {
      setIsModalOpen(true);
    }
  }, [droppedActionNames, actions]);

  function isDropped(actionName: string) {
    console.log('isDropped!!');

    return droppedActionNames.indexOf(actionName) > -1;
  }

  const handleDrop = useCallback(
    (index: number, item: { name: string }) => {
      const { name } = item;
      setDroppedActionName(update(droppedActionNames, name ? { $push: [name] } : { $push: [] }));
      setBins(
        update(bins, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        }),
      );
    },
    [bins, droppedActionNames],
  );

  return (
    <Wrapper>
      <DndProvider backend={HTML5Backend}>
        <Instruction>מיינו את המשימות הבאות לפי יכולותי</Instruction>
        {bins.map(({ accepts, lastDroppedItem }, index) => (
          <DroppableBin
            accept={accepts}
            lastDroppedItem={lastDroppedItem}
            onDrop={(item) => handleDrop(index, item)}
            key={index}
          />
        ))}
        <ActionsContainer list={list} currentPlayer={currentPlayer} isDropped={isDropped} actions={actions} />
      </DndProvider>
      {isModalOpen && (
        <EndGameModal>
          <Container>
            <Title>
              איזה כיף! <br />
              כמה דברים אני יכול לעשות!
            </Title>
          </Container>
          <ContinueBtn to={`/availableGamesIntro/${currentPlayer!.path}`}> המשך </ContinueBtn>
        </EndGameModal>
      )}
    </Wrapper>
  );
};

export default AvailableActions;
