import styled from 'styled-components';
import theme from 'shared/style/theme';
import Nir from 'assets/images/Nir.svg';
import NirAvailable from 'assets/images/NirAvailable.svg';
import NirAvailableWin from 'assets/images/NirAvailableWin.svg';
import NirFail from 'assets/images/NirFail.svg';
import NirSuccess from 'assets/images/NirSuccess.svg';
import Shira from 'assets/images/Shira.svg';
import ShiraAvailable from 'assets/images/ShiraAvailable.svg';
import ShiraAvailableWin from 'assets/images/ShiraAvailableWin.svg';
import ShiraFail from 'assets/images/ShiraFail.svg';
import ShiraSuccess from 'assets/images/ShiraSuccess.svg';
import Tomer from 'assets/images/Tomer.svg';
import TomerAvailable from 'assets/images/TomerAvailable.svg';
import TomerAvailableWin from 'assets/images/TomerAvailableWin.svg';
import TomerFail from 'assets/images/TomerFail.svg';
import TomerSuccess from 'assets/images/TomerSuccess.svg';
import Check from 'assets/images/V.svg';
import Wrong from 'assets/images/X.svg';

type AvailableActionsType = Array<{
  able: string;
  action: string;
  id: number;
  position: string;
  info: string;
}>;

type PlayerImagesType = {
  [key: string]: string[];
};

type Player = {
  name: string;
  path: string;
  images: PlayerImagesType;
  bgColor: string;
  btnColor: string;
  actions: AvailableActionsType;
};

const players: Player[] = [
  {
    name: 'תומר',
    path: 'tomer',
    images: {
      hello: [Tomer],
      availble: [TomerAvailable],
      win: [TomerAvailableWin],
      fail: [TomerFail, Wrong],
      success: [TomerSuccess, Check],
    },
    bgColor: theme.colors.tomerBgGreen,
    btnColor: theme.colors.tomerActionYellow,
    actions: [
      { able: 'CANT', action: 'לנסוע באוטובוס לאימון', id: 1, position: 'INIT', info: '' },
      { able: 'CANT', action: 'לא לנסוע באוטובוס לאימון', id: 2, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לא לעשות כלים', id: 3, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לעשות כלים', id: 4, position: 'INIT', info: '' },
      { able: 'CANT', action: 'לא לרוץ מהר מאוד', id: 5, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לרוץ מהר מאוד', id: 6, position: 'INIT', info: '' },
      { able: 'CANT', action: 'לא לקפוץ על רגל אחת', id: 7, position: 'INIT', info: '' },
    ],
  },
  {
    name: 'ניר',
    path: 'nir',
    images: {
      hello: [Nir],
      availble: [NirAvailable],
      win: [NirAvailableWin],
      fail: [NirFail, Wrong],
      success: [NirSuccess, Check],
    },
    bgColor: theme.colors.modalBackground,
    btnColor: theme.colors.nirActionPurple,
    actions: [
      { able: 'CAN', action: 'יכול 1', id: 1, position: 'INIT', info: 'בדיקה' },
      {
        able: 'CANT',
        action: 'משפט לא יכול 1',
        id: 2,
        position: 'INIT',
        info: 'בדיקה לטקסט ארוך מאוד שאולי ייכנס',
      },
      { able: 'CANT', action: 'לא יכול 2', id: 3, position: 'INIT', info: 'בדיקה לטקסט ארוך מאוד שאולי ייכנס' },
      { able: 'CAN', action: 'יכול 2', id: 4, position: 'INIT', info: '' },
      { able: 'CANT', action: 'לא יכול 3', id: 5, position: 'INIT', info: 'בדיקה לטקסט ארוך מאוד שאולי ייכנס' },
      { able: 'CAN', action: 'יכול 3', id: 6, position: 'INIT', info: '' },
      {
        able: 'CANT',
        action: 'לא יכול 4',
        id: 7,
        position: 'INIT',
        info: 'בדיקה לטקסט ארוך מאוד שאולי ייכנס',
      },
    ],
  },
  {
    name: 'שירה',
    path: 'shira',
    images: {
      hello: [Shira],
      availble: [ShiraAvailable],
      win: [ShiraAvailableWin],
      fail: [ShiraFail, Wrong],
      success: [ShiraSuccess, Check],
    },
    bgColor: theme.colors.shiraBgPurple,
    btnColor: theme.colors.shiraActionPuprle,
    actions: [
      { able: 'CAN', action: 'לנסוע באוטובוס לאימון', id: 1, position: 'INIT', info: '' },
      { able: 'CANT', action: 'לא לנסוע באוטובוס לאימון', id: 2, position: 'INIT', info: '' },
      { able: 'CANT', action: 'לא לעשות כלים', id: 3, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לעשות כלים', id: 4, position: 'INIT', info: '' },
      { able: 'CANT', action: 'לא לרוץ מהר מאוד', id: 5, position: 'INIT', info: '' },
      { able: 'CAN', action: 'לרוץ מהר מאוד', id: 6, position: 'INIT', info: '' },
      { able: 'CANT', action: 'לא לקפוץ על רגל אחת', id: 7, position: 'INIT', info: '' },
    ],
  },
];

export const Instruction = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.darkMagenta};
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 39px;
  min-width: 616px;
  height: 71px;
  font-weight: 600;
  font-size: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #ffffff;
  justify-self: center;
  top: 3%;
  padding: 0 20px;
`;

export const Item = styled.div`
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

export default players;
