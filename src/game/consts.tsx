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

type AvailableActionsType = Array<{
  able: string;
  action: string;
}>;

type PlayerImagesType = {
  [key: string]: string;
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
      hello: Tomer,
      availble: TomerAvailable,
      win: TomerAvailableWin,
      fail: TomerFail,
      success: TomerSuccess,
    },
    bgColor: theme.colors.tomerBgGreen,
    btnColor: theme.colors.tomerActionYellow,
    actions: [
      { able: 'CAN', action: 'לנסוע באוטובוס לאימון' },
      { able: 'CANT', action: 'לא לנסוע באוטובוס לאימון' },
      { able: 'CANT', action: 'לא לעשות כלים' },
      { able: 'CAN', action: 'לעשות כלים' },
      { able: 'CANT', action: 'לא לרוץ מהר מאוד' },
      { able: 'CAN', action: 'לרוץ מהר מאוד' },
      { able: 'CANT', action: 'לא לקפוץ על רגל אחת' },
    ],
  },
  {
    name: 'ניר',
    path: 'nir',
    images: {
      hello: Nir,
      availble: NirAvailable,
      win: NirAvailableWin,
      fail: NirFail,
      success: NirSuccess,
    },
    bgColor: theme.colors.modalBackground,
    btnColor: theme.colors.nirActionPurple,
    actions: [
      { able: 'CAN', action: 'לנסוע באוטובוס לאימון' },
      { able: 'CANT', action: 'לא לנסוע באוטובוס לאימון' },
      { able: 'CANT', action: 'לא לעשות כלים' },
      { able: 'CAN', action: 'לעשות כלים' },
      { able: 'CANT', action: 'לא לרוץ מהר מאוד' },
      { able: 'CAN', action: 'לרוץ מהר מאוד' },
      { able: 'CANT', action: 'לא לקפוץ על רגל אחת' },
    ],
  },
  {
    name: 'שירה',
    path: 'shira',
    images: {
      hello: Shira,
      availble: ShiraAvailable,
      win: ShiraAvailableWin,
      fail: ShiraFail,
      success: ShiraSuccess,
    },
    bgColor: theme.colors.shiraBgPurple,
    btnColor: theme.colors.shiraActionPuprle,
    actions: [
      { able: 'CAN', action: 'לנסוע באוטובוס לאימון' },
      { able: 'CANT', action: 'לא לנסוע באוטובוס לאימון' },
      { able: 'CANT', action: 'לא לעשות כלים' },
      { able: 'CAN', action: 'לעשות כלים' },
      { able: 'CANT', action: 'לא לרוץ מהר מאוד' },
      { able: 'CAN', action: 'לרוץ מהר מאוד' },
      { able: 'CANT', action: 'לא לקפוץ על רגל אחת' },
    ],
  },
];

export const Instruction = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.darkMagenta};
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 39px;
  min-width: 523px;
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

export default players;
